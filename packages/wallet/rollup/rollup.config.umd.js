import { uglify } from 'rollup-plugin-uglify';
import pkg from '../package.json';
import config, { plugins } from './rollup.config.common';

export default Object.assign(config, {
  output: [
    {
      name: pkg.name,
      file: `dist/${pkg.name}.umd.js`,
      format: 'umd',
      globals: {
        react: 'React',
        'styled-components': 'styled',
      },
      exports: 'named',
    },
  ],
  plugins: plugins.concat([
    uglify({}),
  ]),
});
