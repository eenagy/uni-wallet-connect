const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const tailwindcss = require('tailwindcss')
const postcssImport = require('postcss-import')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          postcssImport(),
          tailwindcss({
            purge: {
              enabled: true,
              content: ['./src/**/*.{js,ts,jsx,tsx}'],
            },
            darkMode: false, // or 'media' or 'class'
            theme: {
              extend: {},
            },
            variants: {
              extend: {},
            },
            plugins: [],
          }),
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: true,
      })
    )
    return config
  },
}
