import terser from '@rollup/plugin-terser';

export default {
  input: 'public/index.mjs',
  output: {
    file: 'dist/index.mjs',
    format: 'es'
  },
  plugins: [terser()]
};
