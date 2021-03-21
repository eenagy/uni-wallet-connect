import { uglify } from 'rollup-plugin-uglify';
import pkg from '../package.json';

import config, { plugins } from './rollup.config.common';

export default Object.assign(config, {
  output: [
    {
      dir: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
  ],
  plugins: plugins.concat([
    uglify(),
  ]),
});
