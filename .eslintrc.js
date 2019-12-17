module.exports = {
	root: true,
	env: {
		node: true,
	},
	'extends': [
		'plugin:vue/essential',
		'plugin:vue/recommended',
		'@vue/standard',
		'@vue/typescript',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'indent': ['warn', 'tab', {
			'SwitchCase': 1,
		}],
		'no-tabs': ['warn', { allowIndentationTabs: true }],
		'semi': ['warn', 'always'],
		'comma-dangle': ['warn', 'always-multiline'],
		'template-curly-spacing': ['warn', 'always'],
		'space-before-function-paren': ['warn', 'never'],
		'quote-props': ['warn', 'as-needed'],
		'vue/html-indent': ['warn', 'tab', {
			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': [],
		}],
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
};
