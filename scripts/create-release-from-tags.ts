// Thanks to the work of https://github.com/segmentio/analytics-next/blob/master/scripts/create-release-from-tags/index.ts

import fs from "node:fs";
import path from "node:path";
// @ts-expect-error - add types if possible
import spawn from "@npmcli/promise-spawn";
// @ts-expect-error - add types if possible
import getPackages from "get-monorepo-packages";

/**
 *
 * @returns the release notes that correspond to a given tag.
 */
export const parseReleaseNotes = (
	changelogText: string,
	versionNumber: string,
): string => {
	// eslint-disable-next-line regexp/no-unused-capturing-group
	const h2tag = /(##\s.*\d.*)/gu;
	let begin: number;
	let end: number;

	for (const [index, line] of changelogText.split("\n").entries()) {
		// @ts-expect-error - fix the type issue
		if (begin && end) continue;
		if (line.includes(versionNumber)) {
			begin = index + 1;
			// @ts-expect-error - fix the type issue
		} else if (begin && h2tag.test(line)) {
			end = index - 1;
		}
	}

	const result = changelogText.split("\n").filter((_, index) => {
		return index >= begin && index <= (end ?? Number.POSITIVE_INFINITY);
	});
	return result.join("\n");
};

const getChangelogPath = (packageName: string): string | undefined => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const result = getPackages(".").find((pack: any) => {
		return pack.package.name.includes(packageName);
	});
	if (!result) console.log(`could not find package with name: ${packageName}.`);

	let changelogPath;
	for (const fileName of ["CHANGELOG.MD", "CHANGELOG.md"]) {
		if (changelogPath) break;
		const myPath = path.join(result.location, fileName);
		const pathExists = fs.existsSync(myPath);
		if (pathExists) {
			changelogPath = myPath;
		}
	}

	if (changelogPath) {
		return changelogPath;
	} else {
		console.log(`could not find changelog path for ${result.location}`);
	}

	return undefined;
};

export type Tag = {
	name: string;
	raw: string;
	versionNumber: string;
};

const getReleaseNotes = (tag: Tag): string | undefined => {
	const { name, versionNumber } = tag;
	const changelogPath = getChangelogPath(name);
	if (!changelogPath) {
		console.log(`no changelog path for ${name}... skipping.`);
		return undefined;
	}

	const changelogText = fs.readFileSync(changelogPath, { encoding: "utf8" });
	const releaseNotes = parseReleaseNotes(changelogText, versionNumber);
	if (!releaseNotes) {
		console.log(
			`Could not find release notes for tags ${tag.raw} in ${changelogPath}.`,
		);
	}

	return releaseNotes;
};

/**
 *
 * @returns list of tags
 * @example ["@segment/analytics-core@1.0.0", "@segment/analytics-next@2.1.1"]
 */
const createGithubRelease = async (
	tag: string,
	releaseNotes?: string,
): Promise<void> => {
	const { code, stderr } = await spawn("gh", [
		"release",
		"create",
		tag,
		"--title",
		tag,
		"--notes",
		releaseNotes ?? "",
	]);

	if (code !== 0) {
		console.log(stderr.toString());
	}
};

const createGithubReleaseFromTag = async (
	tag: Tag,
	{ dryRun = false } = {},
): Promise<void> => {
	const notes = getReleaseNotes(tag);

	if (notes) {
		console.log(
			`\n ---> Outputting release titled: ${tag.raw} with notes: \n ${notes}`,
		);
	}

	if (dryRun) {
		console.log(`--> Dry run: ${tag.raw} not released.`);
		return undefined;
	}

	await createGithubRelease(tag.raw, notes);
	return undefined;
};

export type Config = {
	isDryRun: boolean;
	tags: Tag[];
};

export const createReleaseFromTags = async (_config: Config) => {
	console.log("Processing tags:", _config.tags, "\n");

	for (const tag of _config.tags) {
		await createGithubReleaseFromTag(tag, { dryRun: _config.isDryRun });
	}
};

/**
 *
 * @param rawTag - ex. "@segment/analytics-foo@1.99.0"
 */
const extractPartsFromTag = (rawTag: string): Tag | undefined => {
	const [name, version] = rawTag.split(/@(\d.*)/u);

	if (!name || !version) return undefined;

	return {
		name,
		raw: rawTag,
		versionNumber: version?.replace("\n", "") as string,
	};
};

/**
 * This type guard can be passed into a function such as native filter
 * in order to remove nullish values from a list in a type-safe way.
 */
export const exists = <T>(value: T): value is NonNullable<T> => {
	// eslint-disable-next-line eqeqeq, no-eq-null
	return value != null && value !== undefined;
};

/**
 *
 * @param rawTags - string delimited list of tags (e.g. `@segment/analytics-next@2.1.1 @segment/analytics-core@1.0.0`)
 */
export const parseRawTags = (rawTags: string): Tag[] => {
	return rawTags
		.trim()
		.replaceAll("\n", " ")
		.split(" ")
		.map(extractPartsFromTag)
		.filter(exists);
};

/**
 *
 * @returns list of tags
 * @example ["@segment/analytics-core@1.0.0", "@segment/analytics-next@2.1.1"]
 */
export const getCurrentGitTags = async (): Promise<Tag[]> => {
	const { code, stderr, stdout } = await spawn("git", [
		"tag",
		"--points-at",
		"HEAD",
		"--column",
	]);

	if (code !== 0) {
		console.log(stderr.toString());
	}

	return parseRawTags(stdout.toString());
};

export const getConfig = async ({
	DRY_RUN,
	TAGS,
}: NodeJS.ProcessEnv): Promise<Config> => {
	const isDryRun = Boolean(DRY_RUN);
	const tags = TAGS ? parseRawTags(TAGS) : await getCurrentGitTags();

	if (!tags.length) {
		console.log("No git tags found.");
	}

	return {
		isDryRun,
		tags,
	};
};

const config = await getConfig(process.env);

await createReleaseFromTags(config);
