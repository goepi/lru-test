import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
const extensions = ['.ts', '.js', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
export default {
  input: 'src/index.tsx',
  output: {
    dir: './build',
    format: 'cjs',
  },
  plugins: [resolve({ extensions }), babel({ include: '**/packages/**/*', extensions })],
  external: Object.keys(globals),
};
