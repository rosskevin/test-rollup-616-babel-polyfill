import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'js/index.js',
  sourceMap: true,
  format: 'iife',
  plugins: [ // (count: 3)
    commonjs({
      include: 'node_modules/**',
      extensions: [
        '.js'
      ]
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      // builtins: false,
      browser: true,
      extensions: [
        '.js',
        '.json'
      ]
    }),
    babel({
      babelrc: false,
      presets: [
        'es2015-rollup'
      ]
    }),
  ],

  moduleName: 'test',
  dest: 'site/dist/test.iife.js'
};
