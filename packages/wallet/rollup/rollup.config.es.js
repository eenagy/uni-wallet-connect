import { terser } from 'rollup-plugin-terser';
import pkg from '../package.json';

import config, { plugins } from './rollup.config.common';

export default Object.assign(config, {
  output: [
    {
      dir: pkg.module,
      format: 'es',
      exports: 'named',
    },
  ],
  plugins: plugins.concat([
    terser(),
  ]),
});
