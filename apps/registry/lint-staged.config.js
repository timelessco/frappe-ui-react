import { ESLint } from "eslint";

export const removeIgnoredFiles = async (files) => {
	const eslint = new ESLint();
	const isIgnored = await Promise.all(
		files.map((file) => {
			return eslint.isPathIgnored(file);
		}),
	);
	const filteredFiles = files.filter((_, index) => {
		return !isIgnored[index];
	});

	return filteredFiles.join(" ");
};

export default {
	"**/*.{json,yml,yaml,js,jsx,cjs,mjs,ts,tsx,all-contributorsrc,code-workspace}":
		async (files) => {
			const filesToLint = await removeIgnoredFiles(files);

			return [`pnpm eslint --cache --color --fix ${filesToLint} `];
		},
};
