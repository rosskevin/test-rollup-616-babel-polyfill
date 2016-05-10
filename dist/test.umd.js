/*!
  * test-rollup-616-babel-polyfill v0.0.1 (https://github.com/rosskevin/test-rollup-616-babel-polyfill#readme)
  * Copyright 2016 Kevin Ross <kevin.ross@rosskevin.com> (https://github.com/rosskevin)
  * Licensed under MIT
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('babel-polyfill')) :
  typeof define === 'function' && define.amd ? define(['babel-polyfill'], factory) :
  (factory(global.babelPolyfill));
}(this, function (babelPolyfill) { 'use strict';

  var foo = [1, 2, 3, 4, 5];

  $(function () {
    var $root = $('#root');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = foo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var bar = _step.value;

        $root.append('<li>' + bar + '</li>');
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });

}));
//# sourceMappingURL=test.umd.js.map