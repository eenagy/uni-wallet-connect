import config, { plugins } from './rollup.config.common';
import pkg from '../package.json';

export default Object.assign(config, {
  output: {
    name: pkg.name,
    file: `dist/index.dev.js`,
    format: 'cjs',
    exports: 'named',
  },
  plugins: plugins.concat([
    // add additional plugins here
  ]),
});