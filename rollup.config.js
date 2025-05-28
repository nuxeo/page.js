import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default commandLineArgs => {
  const isMinimized = !!commandLineArgs.minimiz;

  return {
    input: 'index.js',
    output: {
      file: isMinimized ? 'page.min.js' : 'page.js',
      format: 'umd',
      name: 'page',
      sourcemap: true
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      ...(isMinimized ? [terser()] : [])
    ]
  };
};
