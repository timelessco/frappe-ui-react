// Thanks to https://github.com/changesets/changesets/blob/main/packages/changelog-github/src/index.ts

const {
	getInfo,
	getInfoFromPullRequest,
} = require("@changesets/get-github-info");
// @ts-ignore
const { config } = require("dotenv");

config();

module.exports = {
	getDependencyReleaseLine: async (
		changesets,
		dependenciesUpdated,
		options,
	) => {
		if (!options.repo) {
			throw new Error(
				'Please provide a repo to this changelog generator like this:\n"changelog": ["@changesets/changelog-github", { "repo": "org/repo" }]',
			);
		}

		if (dependenciesUpdated.length === 0) return "";

		const changesetLink = `- Updated dependencies [${(
			await Promise.all(
				changesets.map(async (cs) => {
					if (cs.commit) {
						const { links } = await getInfo({
							repo: options.repo,
							commit: cs.commit,
						});
						return links.commit;
					}

					return undefined;
				}),
			)
		)
			.filter(Boolean)
			.join(", ")}]:`;

		const updatedDependenciesList = dependenciesUpdated.map((dependency) => {
			return `  - ${dependency.name}@${dependency.newVersion}`;
		});

		return [changesetLink, ...updatedDependenciesList].join("\n");
	},
	getReleaseLine: async (changeset, type, options) => {
		if (!options || !options.repo) {
			throw new Error(
				'Please provide a repo to this changelog generator like this:\n"changelog": ["@changesets/changelog-github", { "repo": "org/repo" }]',
			);
		}

		let prFromSummary;
		let commitFromSummary;
		const usersFromSummary = [];

		const replacedChangelog = changeset.summary
			.replace(/^\s*(?:pr|pull|pull\s+request):\s*#?(\d+)/imu, (_, pr) => {
				const number_ = Number(pr);
				if (!Number.isNaN(number_)) prFromSummary = number_;
				return "";
			})
			.replace(/^\s*commit:\s*(\S+)/imu, (_, commit) => {
				commitFromSummary = commit;
				return "";
			})
			.replaceAll(/^\s*(?:author|user):\s*@?(\S+)/gimu, (_, user) => {
				usersFromSummary.push(user);
				return "";
			})
			.trim();

		const [firstLine, ...futureLines] = replacedChangelog
			.split("\n")
			.map((line) => {
				return line.trimEnd();
			});

		const links = await (async () => {
			if (prFromSummary !== undefined) {
				let { links: prLinks } = await getInfoFromPullRequest({
					repo: options.repo,
					pull: prFromSummary,
				});
				if (commitFromSummary) {
					prLinks = {
						...links,
						commit: `[\`${commitFromSummary}\`](https://github.com/${options.repo}/commit/${commitFromSummary})`,
					};
				}

				return prLinks;
			}

			const commitToFetchFrom = commitFromSummary || changeset.commit;
			if (commitToFetchFrom) {
				const { links: repoLinks } = await getInfo({
					repo: options.repo,
					commit: commitToFetchFrom,
				});
				return repoLinks;
			}

			return {
				commit: null,
				pull: null,
				user: null,
			};
		})();

		const users = usersFromSummary.length
			? usersFromSummary
					.map((userFromSummary) => {
						return `[@${userFromSummary}](https://github.com/${userFromSummary})`;
					})
					.join(", ")
			: links.user;

		return `\n\n🦋 ${links.pull === null ? "" : links.pull + " "}${firstLine}${
			links.commit === null ? "" : " (" + links.commit + ")"
		} ${users === null ? "" : "by " + users}\n${futureLines
			.map((line) => {
				return `${line}`;
			})
			.join("\n")}`;
	},
};
