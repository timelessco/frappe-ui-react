/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
module.exports = {
	useTabs: true,
	trailingComma: "all",
	proseWrap: "preserve",
	plugins: [
		"prettier-plugin-packagejson",
		"@ianvs/prettier-plugin-sort-imports",
	],
	importOrder: [
		"^(react/(.*)$)|^(react$)",
		"^(next/(.*)$)|^(next$)",
		"<THIRD_PARTY_MODULES>",
		"",
		"^types$",
		"^@/types/(.*)$",
		"^@/config/(.*)$",
		"^@/utils/(.*)$",
		"^@/hooks/(.*)$",
		"^@/components/ui/(.*)$",
		"^@/components/(.*)$",
		"^@/styles/(.*)$",
		"^@/app/(.*)$",
		"^@(/.*)$",
		"",
		"^[../]",
		"",
		"^[./]",
		"",
		"^.+\\.s?css$",
	],
	importOrderParserPlugins: [
		"typescript",
		"jsx",
		"decorators-legacy",
		"importAssertions",
	],
};
