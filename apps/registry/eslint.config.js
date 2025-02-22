import eslintPluginNext from "@next/eslint-plugin-next";
import eslintPluginBrowser from "eslint-config-canonical/configurations/browser.js";
import eslintPluginCanonical from "eslint-config-canonical/configurations/canonical.js";
import eslintPluginJsdoc from "eslint-config-canonical/configurations/jsdoc.js";
import eslintPluginJsxA11y from "eslint-config-canonical/configurations/jsx-a11y.js";
import eslintPluginNodeModule from "eslint-config-canonical/configurations/module.js";
import eslintPluginNode from "eslint-config-canonical/configurations/node.js";
import eslintPluginReact from "eslint-config-canonical/configurations/react.js";
import eslintPluginRegexp from "eslint-config-canonical/configurations/regexp.js";
import eslintPluginTypescriptTypeChecking from "eslint-config-canonical/configurations/typescript-type-checking.js";
import eslintPluginTypescript from "eslint-config-canonical/configurations/typescript.js";
import eslintPluginGitignore from "eslint-config-flat-gitignore";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import eslintPluginTailwind from "eslint-plugin-tailwindcss";
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

const commonReactIgnoredRules = {
	// To support dynamic import
	"promise/prefer-await-to-then": "off",
	"@typescript-eslint/promise-function-async": "off",
	// Other react rules
	"react/function-component-definition": "off",
	"react/hook-use-state": "off",
	"react/jsx-indent": ["error", "tab"],
	"react/jsx-indent-props": ["error", "tab"],
	"react/forbid-component-props": "off",
	"react/prop-types": "off",
	"react/jsx-handler-names": "off",
	"react/jsx-curly-newline": "off",
	"react/prefer-read-only-props": "off",
};

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		linterOptions: {
			reportUnusedDisableDirectives: "error",
		},
	},
	eslintPluginGitignore(),
	{
		ignores: [
			// Lock files
			"pnpm-lock.yaml",
			// Auto generated files
			"*.md",
			// Extras(if any)
			"public/**/*",
		],
		name: "Local Ignores",
	},
	{
		files: ["*.js", "*.cjs", "*.mjs"],
		languageOptions: {
			...eslintPluginNode.recommended.languageOptions,
		},
		plugins: {
			...eslintPluginCanonical.recommended.plugins,
			...eslintPluginRegexp.recommended.plugins,
			...eslintPluginJsdoc.recommended.plugins,
			...eslintPluginNode.recommended.plugins,
		},
		rules: {
			...eslintPluginCanonical.recommended.rules,
			...eslintPluginRegexp.recommended.rules,
			...eslintPluginJsdoc.recommended.rules,
			...eslintPluginNode.recommended.rules,
			...commonNodeIgnoredRules,
		},
	},
	{
		name: "Node Module",
		files: ["*.js", "*.mjs"],
		plugins: {
			...eslintPluginNodeModule.recommended.plugins,
		},
		rules: {
			...eslintPluginNodeModule.recommended.rules,
		},
	},
	{
		name: "TypeScript",
		files: ["*.ts"],
		ignores: ["next-env.d.ts"],
		languageOptions: {
			...eslintPluginNode.recommended.languageOptions,
			...eslintPluginTypescript.recommended.languageOptions,
		},
		plugins: {
			...eslintPluginCanonical.recommended.plugins,
			...eslintPluginRegexp.recommended.plugins,
			...eslintPluginJsdoc.recommended.plugins,
			...eslintPluginNode.recommended.plugins,
			...eslintPluginTypescript.recommended.plugins,
			...eslintPluginNodeModule.recommended.plugins,
			...eslintPluginBrowser.recommended.plugins,
		},
		rules: {
			...eslintPluginCanonical.recommended.rules,
			...eslintPluginRegexp.recommended.rules,
			...eslintPluginJsdoc.recommended.rules,
			...eslintPluginNode.recommended.rules,
			...eslintPluginTypescript.recommended.rules,
			...eslintPluginTypescriptTypeChecking.recommended.rules,
			...eslintPluginNodeModule.recommended.rules,
			...eslintPluginBrowser.recommended.rules,
			...commonNodeIgnoredRules,
			...commonTypescriptIgnoredRules,
		},
	},
	{
		name: "TS/TSX",
		files: [
			"lib/**/*.ts",
			"hooks/**/*.ts",
			"app/**/*.{ts,tsx}",
			"components/**/*.{ts,tsx}",
			"registry/web/**/*.{ts,tsx}",
			"icons/**/*.{ts,tsx}",
		],
		languageOptions: {
			...eslintPluginTypescript.recommended.languageOptions,
		},
		plugins: {
			...eslintPluginCanonical.recommended.plugins,
			...eslintPluginRegexp.recommended.plugins,
			...eslintPluginJsdoc.recommended.plugins,
			...eslintPluginTypescript.recommended.plugins,
			...eslintPluginNodeModule.recommended.plugins,
			...eslintPluginBrowser.recommended.plugins,
			"@next/next": eslintPluginNext,
		},
		rules: {
			...eslintPluginCanonical.recommended.rules,
			...eslintPluginRegexp.recommended.rules,
			...eslintPluginJsdoc.recommended.rules,
			...eslintPluginTypescript.recommended.rules,
			...eslintPluginTypescriptTypeChecking.recommended.rules,
			...eslintPluginNodeModule.recommended.rules,
			...eslintPluginBrowser.recommended.rules,
			...eslintPluginNext.configs.recommended.rules,
			...eslintPluginNext.configs["core-web-vitals"].rules,
			...commonIgnoredRules,
			...commonTypescriptIgnoredRules,
		},
	},
	{
		name: "React",
		files: [
			"app/**/*.tsx",
			"app/**/use*.ts",
			"components/**/*.tsx",
			"components/**/use*.ts",
			"hooks/**/*.ts",
			"registry/web/**/*.tsx",
			"registry/web/**/use*.ts",
			"icons/**/*.tsx",
		],
		languageOptions: {
			...eslintPluginReact.recommended.languageOptions,
		},
		plugins: {
			...eslintPluginReact.recommended.plugins,
			...eslintPluginJsxA11y.recommended.plugins,
		},
		rules: {
			...eslintPluginReact.recommended.rules,
			...eslintPluginJsxA11y.recommended.rules,
			...commonReactIgnoredRules,
		},
	},
	...eslintPluginTailwind.configs["flat/recommended"],
	...eslintPluginJsonc.configs["flat/recommended-with-json"].map((config) => {
		return {
			...config,
			files: ["**/*.json"],
			ignores: [".turbo/**"],
		};
	}),
	...eslintPluginJsonc.configs["flat/recommended-with-jsonc"].map((config) => {
		return {
			...config,
			files: ["**/*.jsonc"],
		};
	}),
	...eslintPluginJsonc.configs["flat/prettier"],
	...eslintPluginYml.configs["flat/recommended"].map((config) => {
		return {
			...config,
			files: ["**/*.yaml", "**/*.yml"],
		};
	}),
	eslintConfigPrettier,
];
