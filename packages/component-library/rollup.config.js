import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.tsx',
  output: {
    dir: './build',
    format: 'cjs',
  },
  plugins: [commonjs(), typescript({ tsconfig: '../../tsconfig.json', verbosity: 3 })],
};
