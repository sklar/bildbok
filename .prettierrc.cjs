/** @type {import("@types/prettier").Options} */
module.exports = {
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	htmlWhitespaceSensitivity: 'ignore',
	jsxSingleQuote: false,
	plugins: [
		require.resolve('@trivago/prettier-plugin-sort-imports'),
		require.resolve('prettier-plugin-astro'),
	],
	printWidth: 100,
	quoteProps: 'consistent',
	semi: false,
	singleQuote: true,
	trailingComma: 'all',

	// https://github.com/trivago/prettier-plugin-sort-imports
	importOrder: ['<THIRD_PARTY_MODULES>', '^astro:(.*)$', '^[./]'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,

	// https://github.com/withastro/prettier-plugin-astro#configuration
	astroAllowShorthand: false,

	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
