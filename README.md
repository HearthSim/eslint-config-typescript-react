# @hearthsim/eslint-config-typescript-react

This repository contains the HearthSim common ESLint configuration with Typescript and React support.

For a version **without** React support use [@HearthSim/eslint-config-typescript](https://github.com/HearthSim/eslint-config-typescript) instead.

## Setup

1. Install

```bash
$ yarn add -D eslint @hearthsim/eslint-config-typescript-react
```

2. Install ESLint plugins  
Plugins are resolved relative to the final project and must thus installed explicitly as part of the project:

```bash
$ yarn add -D \
              @typescript-eslint/eslint-plugin@5.4.0 \
              eslint-plugin-import@2.25.3 \
              eslint-plugin-jest@25.2.4 \
              eslint-plugin-react@7.27.1 \
              eslint-plugin-react-hooks@4.3.0
```

3. Configure ESLint:

Create or update your`.eslintrc.js`:
```js
module.exports = {
	root: true,
	extends: ["@hearthsim/eslint-config-typescript-react"],
	env: {
		browser: true,
	},
};
```

4. Add the scripts to your `package.json`:

```json
{
	"scripts": {
		"lint:eslint": "eslint --cache ./"
	}
}

```

## Philosophy

### Zero tolerance for Errors false positives
   If a rule is not able to handle the ways we legitimately use it, it needs to be downgraded to a warning. 
   Errors are reserved for critical  issues that can directly introduce security risks, break the application or lead to severe performance penalties. 
