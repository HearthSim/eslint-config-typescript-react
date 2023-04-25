module.exports = {
	plugins: ["@typescript-eslint", "import"],
	extends: [
		"@hearthsim/eslint-config-typescript",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
	],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		// violating hook dependencies is dangerous and can lead to hidden errors that are very hard to debug
		"react-hooks/exhaustive-deps": "error",
		// we don't use this
		"react/display-name": "off",
		// not great, but otherwise we get false positives with <Trans> (localization)
		"react/jsx-key": "warn",
		// The following rule is very sensible, enforcing noopener is critical. However, we're usually okay with
		// exposing the referrer. Unfortunately it can't handle styled-components anchors, and cannot always detect
		// internal links.
		"react/jsx-no-target-blank": [
			"warn",
			{
				allowReferrer: true,
			},
		],
		// our build chain can handle literals
		"react/no-unescaped-entities": "off",
		// doesn't work reliably with typescript (`FC<Props>` vs. `{} :Props`)
		"react/prop-types": "off",
		// we shouldn't usually have to worry about this
		"react/react-in-jsx-scope": "off",
	},
};
