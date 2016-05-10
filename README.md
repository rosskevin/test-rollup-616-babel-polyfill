# test-rollup-616-babel-polyfill

Test case for: [rollup #616](https://github.com/rollup/rollup/issues/616)

[Demo](http://rosskevin.github.io/test-rollup-616-babel-polyfill/) 
  - Chrome OSX works
  - Firefox OSX fails

## Install
1. `npm install -g gulpjs/gulp-cli#4.0`
1. `npm install`
1. `gulp js`
1. Open `site/index.html` in Chrome and Firefox


## Explanation
- `babel-polyfill` doesn't seem to be working with rollup.  
- `gulp js` will create an `iife` and `umd` file.
 - the `site/index.html` refers to the `iife` file.
 
Rollup is effectively called with:

```javascript
let options = {
    entry: '/Users/kross/projects/test-rollup-616-babel-polyfill/js/index.js',
    sourceMap: true,
    format: 'iife',
    plugins: [ // (count: 3)
        commonjs({
            include: '/Users/kross/projects/test-rollup-616-babel-polyfill/node_modules/**',
            extensions: [
                '.js'
            ]
        }),
        nodeResolve({
            jsnext: true,
            main: true,
            builtins: false,
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
    dest: 'dist/test.iife.js'
}
```

## License
See [LICENSE](LICENSE.md)
