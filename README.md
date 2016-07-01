# test-rollup-616-babel-polyfill

** This is an implementation of [the proposed solution](https://github.com/rollup/rollup/issues/616#issuecomment-228341339)

Test case for: [rollup #616](https://github.com/rollup/rollup/issues/616)

[Demo](http://rosskevin.github.io/test-rollup-616-babel-polyfill/) 
  - Chrome OSX works
  - Firefox OSX fails
   

## Install
1. `npm install`
1. `npm run build`
1. Open `site/index.html` in Chrome and Firefox


## Explanation
- `babel-polyfill` doesn't seem to be working with rollup.  
- `npm run build` will create an `iife` file.
 - the `site/index.html` refers to the `iife` file.
 

## License
See [LICENSE](LICENSE.md)
