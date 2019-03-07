import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/myLib.mjs',
      format: 'esm',
    },
    {
      file: 'dist/myLib.umd.js',
      format: 'umd',
      name: 'myLib',
    },
  ],
  plugins: [typescript(), resolve(), commonjs({ extensions: ['.js', '.ts'] })],
};
