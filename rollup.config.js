import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json' assert { type: 'json' };
import external from 'rollup-plugin-peer-deps-external';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import tsConfigPaths from "rollup-plugin-tsconfig-paths"
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

export default {
  input: './src/index.ts',
  plugins: [
    peerDepsExternal(),
    tsConfigPaths(),
    resolve({ extensions }),
    commonjs({
      include: 'node_modules/**',
      requireReturnsDefault: 'auto',
    }),
    babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
  ],
  output: [
    {
        dir: "dist",
        format: "cjs",
        exports: "auto",
      },
  ]
}; 