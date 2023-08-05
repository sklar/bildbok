/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
	root: true,

	extends: [
		'eslint:recommended',

		// use the recommended rules from `@eslint-plugin-astro`
		'plugin:astro/recommended',
		'plugin:astro/jsx-a11y-recommended',

		// use the recommended rules from `@typescript-eslint/eslint-plugin`
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@typescript-eslint/strict',

		'prettier',

		// enable `eslint-plugin-prettier` and `eslint-config-prettier` to handle Prettier errors as ESLint errors;
		// make sure this is the last item in the `extends` array.
		// 'plugin:prettier/recommended',
	],

	env: {
		browser: true,
		node: true,
	},

	// specify ESLintparser
	parser: '@typescript-eslint/parser',

	// @see https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionsproject
	parserOptions: {
		extraFileExtensions: ['.astro'],
		ecmaVersion: 'latest',
		project: [
			'./tsconfig.json',
			'./tsconfig.eslint.json', // https://stackoverflow.com/a/68686975
		],
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		tsconfigRootDir: __dirname, // https://github.com/typescript-eslint/typescript-eslint/issues/251#issuecomment-567365174
		sourceType: 'module',
	},

	plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],

	rules: {
		'@typescript-eslint/no-empty-interface': ['off'],
	},

	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
}
