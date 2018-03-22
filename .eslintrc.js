module.exports = {
	parser: 'babel-eslint',
	plugins: ['react', 'jsx-a11y', 'import'],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	extends: [
		'airbnb',
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier'
	],
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	},
	globals: {
		Style: true,
		document: true,
		describe: true,
		it: true,
		expect: true
	}
};
