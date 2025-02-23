import eslintPluginCanonical from "eslint-config-canonical/configurations/canonical.js";
import eslintPluginJsdoc from "eslint-config-canonical/configurations/jsdoc.js";
import eslintPluginNodeModule from "eslint-config-canonical/configurations/module.js";
import eslintPluginNode from "eslint-config-canonical/configurations/node.js";
import eslintPluginRegexp from "eslint-config-canonical/configurations/regexp.js";
import eslintPluginTypescriptTypeChecking from "eslint-config-canonical/configurations/typescript-type-checking.js";
import eslintPluginTypescript from "eslint-config-canonical/configurations/typescript.js";
import eslintPluginGitignore from "eslint-config-flat-gitignore";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import eslintPluginYml from "eslint-plugin-yml";

const commonIgnoredRules = {
	"no-console": "off",
	"func-style": "off",
	"no-warning-comments": "off",
	"no-param-reassign": "off",
	"arrow-body-style": "off",
	"line-comment-position": "off",
	"no-inline-comments": "off",
	"id-length": "off",

	// Unicorn
	"unicorn/no-array-reduce": "off",
	"unicorn/prevent-abbreviations": "off",

	// Import
	"import/no-named-as-default": "off",
	"import/extensions": "off",
	"import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
	"import/no-extraneous-dependencies": "off",

	// Canonical
	"canonical/sort-keys": "off",
	"canonical/import-specifier-newline": "off",
	"canonical/destructuring-property-newline": "off",
	"canonical/filename-match-exported": "off",
	"canonical/filename-match-regex": "off",
	"canonical/id-match": "off",
	"canonical/export-specifier-newline": "off",

	// Perfectionist
	"perfectionist/sort-imports": "off",
	"perfectionist/sort-modules": "off",
	"perfectionist/sort-objects": "off",
	"perfectionist/sort-named-imports": "off",
	"perfectionist/sort-jsx-props": "off",

	// Eslint comments
	"eslint-comments/disable-enable-pair": "off",
};

const commonNodeIgnoredRules = {
	...commonIgnoredRules,
	// Import
	"import/extensions": [
		"error",
		"always",
		{
			ignorePackages: true,
		},
	],
	"import/no-useless-path-segments": "off",
	// Node
	"n/callback-return": "off",
	"n/no-process-env": "off",
};

const commonTypescriptIgnoredRules = {
	"@typescript-eslint/consistent-type-definitions": "off",
	"@typescript-eslint/naming-convention": "off",
	"@typescript-eslint/no-shadow": [
		"error",
		{ ignoreFunctionTypeParameterNameValueShadow: true },
	],
	"@typescript-eslint/no-unused-vars": [
		"warn",
		{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
	],
	"@typescript-eslint/no-use-before-define": "off",
};

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		linterOptions: {
			reportUnusedDisableDirectives: "error",
		},
	},
	eslintPluginGitignore({
		root: true,
	}),
	{
		ignores: [
			// no ignore
			"!**/.*",
			"!monorepo.code-workspace",
			// Native app
			"native-app",
			// Node.js
			".npmrc",
			".nvmrc",
			// Lock files
			"package-lock.json",
			"yarn.lock",
			"pnpm-lock.yaml",
			// Auto generated files
			"*.md",
			// Extras(if any)
			".turbo/**/*",
			"apps/**/*",
			"packages/**/*",
		],
		name: "Local Ignores",
	},
	{
		name: "Node",
		files: ["*.js", "*.cjs", ".changeset/*.cjs", "*.ts", "scripts/*.ts"],
		languageOptions: {
			...eslintPluginNode.recommended.languageOptions,
		},
		plugins: {
			...eslintPluginCanonical.recommended.plugins,
			...eslintPluginNode.recommended.plugins,
			...eslintPluginRegexp.recommended.plugins,
			...eslintPluginJsdoc.recommended.plugins,
		},
		rules: {
			...eslintPluginCanonical.recommended.rules,
			...eslintPluginNode.recommended.rules,
			...eslintPluginRegexp.recommended.rules,
			...eslintPluginJsdoc.recommended.rules,
			...commonNodeIgnoredRules,
		},
	},
	{
		name: "Node Module",
		files: ["*.js", "*.ts", "scripts/*.ts"],
		plugins: {
			...eslintPluginNodeModule.recommended.plugins,
		},
		rules: {
			...eslintPluginNodeModule.recommended.rules,
		},
	},
	{
		name: "Typescript",
		files: ["*.ts", "scripts/*.ts"],
		languageOptions: {
			...eslintPluginTypescript.recommended.languageOptions,
		},
		plugins: {
			...eslintPluginTypescript.recommended.plugins,
		},
		rules: {
			...eslintPluginTypescript.recommended.rules,
			...eslintPluginTypescriptTypeChecking.recommended.rules,
			...commonTypescriptIgnoredRules,
		},
	},
	...eslintPluginJsonc.configs["flat/recommended-with-json"].map((config) => {
		return {
			...config,
			name: "JSON",
			files: ["**/*.json", ".all-contributorsrc"],
		};
	}),
	...eslintPluginJsonc.configs["flat/recommended-with-jsonc"].map((config) => {
		return {
			...config,
			name: "JSONC",
			files: ["**/*.jsonc", "monorepo.code-workspace"],
		};
	}),
	...eslintPluginJsonc.configs["flat/prettier"],
	...eslintPluginYml.configs["flat/recommended"].map((config) => {
		return {
			...config,
			name: "YAML",
			files: ["**/*.yaml", "**/*.yml"],
		};
	}),
	eslintConfigPrettier,
];
