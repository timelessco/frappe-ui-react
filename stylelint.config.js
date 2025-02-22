/** @type {import('stylelint').Config} */
export default {
	allowEmptyInput: true,
	extends: ["stylelint-config-standard", "stylelint-config-clean-order"],
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,

	rules: {
		// Add your own rules here
		"at-rule-no-deprecated": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"layer",
					"config",
					// tailwindcss
					"variants",
					"responsive",
					"screen",
					"theme",
				],
			},
		],

		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"layer",
					"config",
					// tailwindcss
					"variants",
					"responsive",
					"screen",
					"theme",
				],
			},
		],

		"function-no-unknown": [
			true,
			{
				ignoreFunctions: ["theme"],
			},
		],

		// For Tailwind CSS
		"import-notation": "string",

		"selector-id-pattern":
			"^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$|^__[a-z]([a-z0-9-]+)$",
		"selector-class-pattern": null,
	},
};
