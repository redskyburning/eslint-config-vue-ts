module.exports = {
	extends: [
		'plugin:vue/essential',
		'plugin:vue/recommended',
		'@vue/standard',
		'@vue/typescript',
	],
	rules: {
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
		'operator-linebreak': 'off',
		'no-mixed-spaces-and-tabs': 'off',
	},
};
