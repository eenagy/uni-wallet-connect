import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import visualizer from 'rollup-plugin-visualizer'
// TODO can be removed after removing @uniswap into peerdeependency
import json from '@rollup/plugin-json'
import image from '@rollup/plugin-image'
import scss from 'rollup-plugin-scss'

export const plugins = [
  scss(),
  image(),
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
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx']
  }),

  visualizer(),
]

export default {
  input: './src/index.tsx',
  external: [
    'react',
    'react-dom',
    'react-spring',
    'react-use-gesture',
    'rebass',
    'rebass/styled-components',
    'react-feather',
    'styled-components',
    '@web3-react/core',
    '@web3-react/abstract-connector',
    '@web3-react/fortmatic-connector',
    '@web3-react/injected-connector',
    '@web3-react/portis-connector',
    '@web3-react/walletconnect-connector',
    '@web3-react/walletlink-connector',
    '@ethersproject/experimental',
    '@ethersproject/providers',
    '@ethersproject/bignumber',
    '@ethersproject/sha2',
    '@ethersproject/bytes',
    '@ethersproject/keccak256',
    '@reach/dialog',
    "@uniswap/sdk",
    'react-device-detect',
    "@ukstv/jazzicon-react",
    'copy-to-clipboard',
    'fortmatic',

  ],
}
