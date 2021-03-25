import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
//import visualizer from 'rollup-plugin-visualizer'
import json from '@rollup/plugin-json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
export const plugins = [

  peerDepsExternal(),
  json(),
  resolve({
    browser: true,
    preferBuiltins: true,
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  }),

  commonjs({
    include: 'node_modules/**',
  }),

  babel({
    exclude: 'node_modules/**',
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
    babelHelpers: 'runtime',
    skipPreflightCheck: true,
  }),

  //visualizer(),
]

export default {
  input: './src/index.tsx',
  external: ['@babel/runtime', '@babel/runtime/regenerator', "@babel/plugin-transform-runtime"],
}
