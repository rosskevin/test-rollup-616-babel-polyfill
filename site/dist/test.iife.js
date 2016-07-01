(function () {
	'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};

	var _core = createCommonjsModule(function (module) {
	  var core = module.exports = { version: '2.4.0' };
	  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});

	var require$$1 = _core && (typeof _core === 'undefined' ? 'undefined' : _typeof(_core)) === 'object' && 'default' in _core ? _core['default'] : _core;

	var _replacer = createCommonjsModule(function (module) {
	  module.exports = function (regExp, replace) {
	    var replacer = replace === Object(replace) ? function (part) {
	      return replace[part];
	    } : replace;
	    return function (it) {
	      return String(it).replace(regExp, replacer);
	    };
	  };
	});

	var require$$0 = _replacer && (typeof _replacer === 'undefined' ? 'undefined' : _typeof(_replacer)) === 'object' && 'default' in _replacer ? _replacer['default'] : _replacer;

	var _aFunction = createCommonjsModule(function (module) {
	  module.exports = function (it) {
	    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	    return it;
	  };
	});

	var require$$3 = _aFunction && (typeof _aFunction === 'undefined' ? 'undefined' : _typeof(_aFunction)) === 'object' && 'default' in _aFunction ? _aFunction['default'] : _aFunction;

	var _ctx = createCommonjsModule(function (module) {
	  // optional / simple context binding
	  var aFunction = require$$3;
	  module.exports = function (fn, that, length) {
	    aFunction(fn);
	    if (that === undefined) return fn;
	    switch (length) {
	      case 1:
	        return function (a) {
	          return fn.call(that, a);
	        };
	      case 2:
	        return function (a, b) {
	          return fn.call(that, a, b);
	        };
	      case 3:
	        return function (a, b, c) {
	          return fn.call(that, a, b, c);
	        };
	    }
	    return function () /* ...args */{
	      return fn.apply(that, arguments);
	    };
	  };
	});

	var require$$8 = _ctx && (typeof _ctx === 'undefined' ? 'undefined' : _typeof(_ctx)) === 'object' && 'default' in _ctx ? _ctx['default'] : _ctx;

	var _uid = createCommonjsModule(function (module) {
	  var id = 0,
	      px = Math.random();
	  module.exports = function (key) {
	    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	  };
	});

	var require$$20 = _uid && (typeof _uid === 'undefined' ? 'undefined' : _typeof(_uid)) === 'object' && 'default' in _uid ? _uid['default'] : _uid;

	var _has = createCommonjsModule(function (module) {
	  var hasOwnProperty = {}.hasOwnProperty;
	  module.exports = function (it, key) {
	    return hasOwnProperty.call(it, key);
	  };
	});

	var require$$28 = _has && (typeof _has === 'undefined' ? 'undefined' : _typeof(_has)) === 'object' && 'default' in _has ? _has['default'] : _has;

	var _fails = createCommonjsModule(function (module) {
	  module.exports = function (exec) {
	    try {
	      return !!exec();
	    } catch (e) {
	      return true;
	    }
	  };
	});

	var require$$23 = _fails && (typeof _fails === 'undefined' ? 'undefined' : _typeof(_fails)) === 'object' && 'default' in _fails ? _fails['default'] : _fails;

	var _descriptors = createCommonjsModule(function (module) {
	  // Thank's IE8 for his funny defineProperty
	  module.exports = !require$$23(function () {
	    return Object.defineProperty({}, 'a', { get: function get() {
	        return 7;
	      } }).a != 7;
	  });
	});

	var require$$27 = _descriptors && (typeof _descriptors === 'undefined' ? 'undefined' : _typeof(_descriptors)) === 'object' && 'default' in _descriptors ? _descriptors['default'] : _descriptors;

	var _propertyDesc = createCommonjsModule(function (module) {
	  module.exports = function (bitmap, value) {
	    return {
	      enumerable: !(bitmap & 1),
	      configurable: !(bitmap & 2),
	      writable: !(bitmap & 4),
	      value: value
	    };
	  };
	});

	var require$$10 = _propertyDesc && (typeof _propertyDesc === 'undefined' ? 'undefined' : _typeof(_propertyDesc)) === 'object' && 'default' in _propertyDesc ? _propertyDesc['default'] : _propertyDesc;

	var _isObject = createCommonjsModule(function (module) {
	  module.exports = function (it) {
	    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	  };
	});

	var require$$2 = _isObject && (typeof _isObject === 'undefined' ? 'undefined' : _typeof(_isObject)) === 'object' && 'default' in _isObject ? _isObject['default'] : _isObject;

	var _toPrimitive = createCommonjsModule(function (module) {
	  // 7.1.1 ToPrimitive(input [, PreferredType])
	  var isObject = require$$2;
	  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
	  // and the second argument - flag - preferred type is a string
	  module.exports = function (it, S) {
	    if (!isObject(it)) return it;
	    var fn, val;
	    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	    throw TypeError("Can't convert object to primitive value");
	  };
	});

	var require$$11 = _toPrimitive && (typeof _toPrimitive === 'undefined' ? 'undefined' : _typeof(_toPrimitive)) === 'object' && 'default' in _toPrimitive ? _toPrimitive['default'] : _toPrimitive;

	var _global = createCommonjsModule(function (module) {
	  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var require$$29 = _global && (typeof _global === 'undefined' ? 'undefined' : _typeof(_global)) === 'object' && 'default' in _global ? _global['default'] : _global;

	var _domCreate = createCommonjsModule(function (module) {
	  var isObject = require$$2,
	      document = require$$29.document
	  // in old IE typeof document.createElement is 'object'
	  ,
	      is = isObject(document) && isObject(document.createElement);
	  module.exports = function (it) {
	    return is ? document.createElement(it) : {};
	  };
	});

	var require$$2$1 = _domCreate && (typeof _domCreate === 'undefined' ? 'undefined' : _typeof(_domCreate)) === 'object' && 'default' in _domCreate ? _domCreate['default'] : _domCreate;

	var _ie8DomDefine = createCommonjsModule(function (module) {
	  module.exports = !require$$27 && !require$$23(function () {
	    return Object.defineProperty(require$$2$1('div'), 'a', { get: function get() {
	        return 7;
	      } }).a != 7;
	  });
	});

	var require$$1$1 = _ie8DomDefine && (typeof _ie8DomDefine === 'undefined' ? 'undefined' : _typeof(_ie8DomDefine)) === 'object' && 'default' in _ie8DomDefine ? _ie8DomDefine['default'] : _ie8DomDefine;

	var _anObject = createCommonjsModule(function (module) {
	  var isObject = require$$2;
	  module.exports = function (it) {
	    if (!isObject(it)) throw TypeError(it + ' is not an object!');
	    return it;
	  };
	});

	var require$$13 = _anObject && (typeof _anObject === 'undefined' ? 'undefined' : _typeof(_anObject)) === 'object' && 'default' in _anObject ? _anObject['default'] : _anObject;

	var _objectDp = createCommonjsModule(function (module, exports) {
	  var anObject = require$$13,
	      IE8_DOM_DEFINE = require$$1$1,
	      toPrimitive = require$$11,
	      dP = Object.defineProperty;

	  exports.f = require$$27 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	    anObject(O);
	    P = toPrimitive(P, true);
	    anObject(Attributes);
	    if (IE8_DOM_DEFINE) try {
	      return dP(O, P, Attributes);
	    } catch (e) {/* empty */}
	    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	    if ('value' in Attributes) O[P] = Attributes.value;
	    return O;
	  };
	});

	var require$$6 = _objectDp && (typeof _objectDp === 'undefined' ? 'undefined' : _typeof(_objectDp)) === 'object' && 'default' in _objectDp ? _objectDp['default'] : _objectDp;

	var _hide = createCommonjsModule(function (module) {
	  var dP = require$$6,
	      createDesc = require$$10;
	  module.exports = require$$27 ? function (object, key, value) {
	    return dP.f(object, key, createDesc(1, value));
	  } : function (object, key, value) {
	    object[key] = value;
	    return object;
	  };
	});

	var require$$0$1 = _hide && (typeof _hide === 'undefined' ? 'undefined' : _typeof(_hide)) === 'object' && 'default' in _hide ? _hide['default'] : _hide;

	var _redefine = createCommonjsModule(function (module) {
	  var global = require$$29,
	      hide = require$$0$1,
	      has = require$$28,
	      SRC = require$$20('src'),
	      TO_STRING = 'toString',
	      $toString = Function[TO_STRING],
	      TPL = ('' + $toString).split(TO_STRING);

	  require$$1.inspectSource = function (it) {
	    return $toString.call(it);
	  };

	  (module.exports = function (O, key, val, safe) {
	    var isFunction = typeof val == 'function';
	    if (isFunction) has(val, 'name') || hide(val, 'name', key);
	    if (O[key] === val) return;
	    if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    if (O === global) {
	      O[key] = val;
	    } else {
	      if (!safe) {
	        delete O[key];
	        hide(O, key, val);
	      } else {
	        if (O[key]) O[key] = val;else hide(O, key, val);
	      }
	    }
	    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	  })(Function.prototype, TO_STRING, function toString() {
	    return typeof this == 'function' && this[SRC] || $toString.call(this);
	  });
	});

	var require$$25 = _redefine && (typeof _redefine === 'undefined' ? 'undefined' : _typeof(_redefine)) === 'object' && 'default' in _redefine ? _redefine['default'] : _redefine;

	var _export = createCommonjsModule(function (module) {
	  var global = require$$29,
	      core = require$$1,
	      hide = require$$0$1,
	      redefine = require$$25,
	      ctx = require$$8,
	      PROTOTYPE = 'prototype';

	  var $export = function $export(type, name, source) {
	    var IS_FORCED = type & $export.F,
	        IS_GLOBAL = type & $export.G,
	        IS_STATIC = type & $export.S,
	        IS_PROTO = type & $export.P,
	        IS_BIND = type & $export.B,
	        target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
	        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	        expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
	        key,
	        own,
	        out,
	        exp;
	    if (IS_GLOBAL) source = name;
	    for (key in source) {
	      // contains in native
	      own = !IS_FORCED && target && target[key] !== undefined;
	      // export native or passed
	      out = (own ? target : source)[key];
	      // bind timers to global for call from export context
	      exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	      // extend global
	      if (target) redefine(target, key, out, type & $export.U);
	      // export
	      if (exports[key] != out) hide(exports, key, exp);
	      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	    }
	  };
	  global.core = core;
	  // type bitmap
	  $export.F = 1; // forced
	  $export.G = 2; // global
	  $export.S = 4; // static
	  $export.P = 8; // proto
	  $export.B = 16; // bind
	  $export.W = 32; // wrap
	  $export.U = 64; // safe
	  $export.R = 128; // real proto method for `library`
	  module.exports = $export;
	});

	var require$$26 = _export && (typeof _export === 'undefined' ? 'undefined' : _typeof(_export)) === 'object' && 'default' in _export ? _export['default'] : _export;

	var core_regexp_escape = createCommonjsModule(function (module) {
	  // https://github.com/benjamingr/RexExp.escape
	  var $export = require$$26,
	      $re = require$$0(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	  $export($export.S, 'RegExp', { escape: function escape(it) {
	      return $re(it);
	    } });
	});

	core_regexp_escape && (typeof core_regexp_escape === 'undefined' ? 'undefined' : _typeof(core_regexp_escape)) === 'object' && 'default' in core_regexp_escape ? core_regexp_escape['default'] : core_regexp_escape;

	var _escape = createCommonjsModule(function (module) {
	  module.exports = require$$1.RegExp.escape;
	});

	_escape && (typeof _escape === 'undefined' ? 'undefined' : _typeof(_escape)) === 'object' && 'default' in _escape ? _escape['default'] : _escape;

	var runtime = createCommonjsModule(function (module) {
	  /**
	   * Copyright (c) 2014, Facebook, Inc.
	   * All rights reserved.
	   *
	   * This source code is licensed under the BSD-style license found in the
	   * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	   * additional grant of patent rights can be found in the PATENTS file in
	   * the same directory.
	   */

	  !function (global) {
	    "use strict";

	    var hasOwn = Object.prototype.hasOwnProperty;
	    var undefined; // More compressible than void 0.
	    var $Symbol = typeof Symbol === "function" ? Symbol : {};
	    var iteratorSymbol = $Symbol.iterator || "@@iterator";
	    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	    var inModule = (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object";
	    var runtime = global.regeneratorRuntime;
	    if (runtime) {
	      if (inModule) {
	        // If regeneratorRuntime is defined globally and we're in a module,
	        // make the exports object identical to regeneratorRuntime.
	        module.exports = runtime;
	      }
	      // Don't bother evaluating the rest of this file if the runtime was
	      // already defined globally.
	      return;
	    }

	    // Define the runtime globally (as expected by generated code) as either
	    // module.exports (if we're in a module) or a new, empty object.
	    runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	    function wrap(innerFn, outerFn, self, tryLocsList) {
	      // If outerFn provided, then outerFn.prototype instanceof Generator.
	      var generator = Object.create((outerFn || Generator).prototype);
	      var context = new Context(tryLocsList || []);

	      // The ._invoke method unifies the implementations of the .next,
	      // .throw, and .return methods.
	      generator._invoke = makeInvokeMethod(innerFn, self, context);

	      return generator;
	    }
	    runtime.wrap = wrap;

	    // Try/catch helper to minimize deoptimizations. Returns a completion
	    // record like context.tryEntries[i].completion. This interface could
	    // have been (and was previously) designed to take a closure to be
	    // invoked without arguments, but in all the cases we care about we
	    // already have an existing method we want to call, so there's no need
	    // to create a new function object. We can even get away with assuming
	    // the method takes exactly one argument, since that happens to be true
	    // in every case, so we don't have to touch the arguments object. The
	    // only additional allocation required is the completion record, which
	    // has a stable shape and so hopefully should be cheap to allocate.
	    function tryCatch(fn, obj, arg) {
	      try {
	        return { type: "normal", arg: fn.call(obj, arg) };
	      } catch (err) {
	        return { type: "throw", arg: err };
	      }
	    }

	    var GenStateSuspendedStart = "suspendedStart";
	    var GenStateSuspendedYield = "suspendedYield";
	    var GenStateExecuting = "executing";
	    var GenStateCompleted = "completed";

	    // Returning this object from the innerFn has the same effect as
	    // breaking out of the dispatch switch statement.
	    var ContinueSentinel = {};

	    // Dummy constructor functions that we use as the .constructor and
	    // .constructor.prototype properties for functions that return Generator
	    // objects. For full spec compliance, you may wish to configure your
	    // minifier not to mangle the names of these two functions.
	    function Generator() {}
	    function GeneratorFunction() {}
	    function GeneratorFunctionPrototype() {}

	    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	    GeneratorFunctionPrototype.constructor = GeneratorFunction;
	    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	    // Helper for defining the .next, .throw, and .return methods of the
	    // Iterator interface in terms of a single ._invoke method.
	    function defineIteratorMethods(prototype) {
	      ["next", "throw", "return"].forEach(function (method) {
	        prototype[method] = function (arg) {
	          return this._invoke(method, arg);
	        };
	      });
	    }

	    runtime.isGeneratorFunction = function (genFun) {
	      var ctor = typeof genFun === "function" && genFun.constructor;
	      return ctor ? ctor === GeneratorFunction ||
	      // For the native GeneratorFunction constructor, the best we can
	      // do is to check its .name property.
	      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	    };

	    runtime.mark = function (genFun) {
	      if (Object.setPrototypeOf) {
	        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	      } else {
	        genFun.__proto__ = GeneratorFunctionPrototype;
	        if (!(toStringTagSymbol in genFun)) {
	          genFun[toStringTagSymbol] = "GeneratorFunction";
	        }
	      }
	      genFun.prototype = Object.create(Gp);
	      return genFun;
	    };

	    // Within the body of any async function, `await x` is transformed to
	    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	    // `value instanceof AwaitArgument` to determine if the yielded value is
	    // meant to be awaited. Some may consider the name of this method too
	    // cutesy, but they are curmudgeons.
	    runtime.awrap = function (arg) {
	      return new AwaitArgument(arg);
	    };

	    function AwaitArgument(arg) {
	      this.arg = arg;
	    }

	    function AsyncIterator(generator) {
	      function invoke(method, arg, resolve, reject) {
	        var record = tryCatch(generator[method], generator, arg);
	        if (record.type === "throw") {
	          reject(record.arg);
	        } else {
	          var result = record.arg;
	          var value = result.value;
	          if (value instanceof AwaitArgument) {
	            return Promise.resolve(value.arg).then(function (value) {
	              invoke("next", value, resolve, reject);
	            }, function (err) {
	              invoke("throw", err, resolve, reject);
	            });
	          }

	          return Promise.resolve(value).then(function (unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            resolve(result);
	          }, reject);
	        }
	      }

	      if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.domain) {
	        invoke = process.domain.bind(invoke);
	      }

	      var previousPromise;

	      function enqueue(method, arg) {
	        function callInvokeWithMethodAndArg() {
	          return new Promise(function (resolve, reject) {
	            invoke(method, arg, resolve, reject);
	          });
	        }

	        return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	        // Avoid propagating failures to Promises returned by later
	        // invocations of the iterator.
	        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	      }

	      // Define the unified helper method that is used to implement .next,
	      // .throw, and .return (see defineIteratorMethods).
	      this._invoke = enqueue;
	    }

	    defineIteratorMethods(AsyncIterator.prototype);

	    // Note that simple async functions are implemented on top of
	    // AsyncIterator objects; they just return a Promise for the value of
	    // the final result produced by the iterator.
	    runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	      return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function (result) {
	        return result.done ? result.value : iter.next();
	      });
	    };

	    function makeInvokeMethod(innerFn, self, context) {
	      var state = GenStateSuspendedStart;

	      return function invoke(method, arg) {
	        if (state === GenStateExecuting) {
	          throw new Error("Generator is already running");
	        }

	        if (state === GenStateCompleted) {
	          if (method === "throw") {
	            throw arg;
	          }

	          // Be forgiving, per 25.3.3.3.3 of the spec:
	          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	          return doneResult();
	        }

	        while (true) {
	          var delegate = context.delegate;
	          if (delegate) {
	            if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	              // A return or throw (when the delegate iterator has no throw
	              // method) always terminates the yield* loop.
	              context.delegate = null;

	              // If the delegate iterator has a return method, give it a
	              // chance to clean up.
	              var returnMethod = delegate.iterator["return"];
	              if (returnMethod) {
	                var record = tryCatch(returnMethod, delegate.iterator, arg);
	                if (record.type === "throw") {
	                  // If the return method threw an exception, let that
	                  // exception prevail over the original return or throw.
	                  method = "throw";
	                  arg = record.arg;
	                  continue;
	                }
	              }

	              if (method === "return") {
	                // Continue with the outer return, now that the delegate
	                // iterator has been terminated.
	                continue;
	              }
	            }

	            var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	            if (record.type === "throw") {
	              context.delegate = null;

	              // Like returning generator.throw(uncaught), but without the
	              // overhead of an extra function call.
	              method = "throw";
	              arg = record.arg;
	              continue;
	            }

	            // Delegate generator ran and handled its own exceptions so
	            // regardless of what the method was, we continue as if it is
	            // "next" with an undefined arg.
	            method = "next";
	            arg = undefined;

	            var info = record.arg;
	            if (info.done) {
	              context[delegate.resultName] = info.value;
	              context.next = delegate.nextLoc;
	            } else {
	              state = GenStateSuspendedYield;
	              return info;
	            }

	            context.delegate = null;
	          }

	          if (method === "next") {
	            // Setting context._sent for legacy support of Babel's
	            // function.sent implementation.
	            context.sent = context._sent = arg;
	          } else if (method === "throw") {
	            if (state === GenStateSuspendedStart) {
	              state = GenStateCompleted;
	              throw arg;
	            }

	            if (context.dispatchException(arg)) {
	              // If the dispatched exception was caught by a catch block,
	              // then let that catch block handle the exception normally.
	              method = "next";
	              arg = undefined;
	            }
	          } else if (method === "return") {
	            context.abrupt("return", arg);
	          }

	          state = GenStateExecuting;

	          var record = tryCatch(innerFn, self, context);
	          if (record.type === "normal") {
	            // If an exception is thrown from innerFn, we leave state ===
	            // GenStateExecuting and loop back for another invocation.
	            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	            var info = {
	              value: record.arg,
	              done: context.done
	            };

	            if (record.arg === ContinueSentinel) {
	              if (context.delegate && method === "next") {
	                // Deliberately forget the last sent value so that we don't
	                // accidentally pass it on to the delegate.
	                arg = undefined;
	              }
	            } else {
	              return info;
	            }
	          } else if (record.type === "throw") {
	            state = GenStateCompleted;
	            // Dispatch the exception by looping back around to the
	            // context.dispatchException(arg) call above.
	            method = "throw";
	            arg = record.arg;
	          }
	        }
	      };
	    }

	    // Define Generator.prototype.{next,throw,return} in terms of the
	    // unified ._invoke helper method.
	    defineIteratorMethods(Gp);

	    Gp[iteratorSymbol] = function () {
	      return this;
	    };

	    Gp[toStringTagSymbol] = "Generator";

	    Gp.toString = function () {
	      return "[object Generator]";
	    };

	    function pushTryEntry(locs) {
	      var entry = { tryLoc: locs[0] };

	      if (1 in locs) {
	        entry.catchLoc = locs[1];
	      }

	      if (2 in locs) {
	        entry.finallyLoc = locs[2];
	        entry.afterLoc = locs[3];
	      }

	      this.tryEntries.push(entry);
	    }

	    function resetTryEntry(entry) {
	      var record = entry.completion || {};
	      record.type = "normal";
	      delete record.arg;
	      entry.completion = record;
	    }

	    function Context(tryLocsList) {
	      // The root entry object (effectively a try statement without a catch
	      // or a finally block) gives us a place to store values thrown from
	      // locations where there is no enclosing try statement.
	      this.tryEntries = [{ tryLoc: "root" }];
	      tryLocsList.forEach(pushTryEntry, this);
	      this.reset(true);
	    }

	    runtime.keys = function (object) {
	      var keys = [];
	      for (var key in object) {
	        keys.push(key);
	      }
	      keys.reverse();

	      // Rather than returning an object with a next method, we keep
	      // things simple and return the next function itself.
	      return function next() {
	        while (keys.length) {
	          var key = keys.pop();
	          if (key in object) {
	            next.value = key;
	            next.done = false;
	            return next;
	          }
	        }

	        // To avoid creating an additional object, we just hang the .value
	        // and .done properties off the next function object itself. This
	        // also ensures that the minifier will not anonymize the function.
	        next.done = true;
	        return next;
	      };
	    };

	    function values(iterable) {
	      if (iterable) {
	        var iteratorMethod = iterable[iteratorSymbol];
	        if (iteratorMethod) {
	          return iteratorMethod.call(iterable);
	        }

	        if (typeof iterable.next === "function") {
	          return iterable;
	        }

	        if (!isNaN(iterable.length)) {
	          var i = -1,
	              next = function next() {
	            while (++i < iterable.length) {
	              if (hasOwn.call(iterable, i)) {
	                next.value = iterable[i];
	                next.done = false;
	                return next;
	              }
	            }

	            next.value = undefined;
	            next.done = true;

	            return next;
	          };

	          return next.next = next;
	        }
	      }

	      // Return an iterator with no values.
	      return { next: doneResult };
	    }
	    runtime.values = values;

	    function doneResult() {
	      return { value: undefined, done: true };
	    }

	    Context.prototype = {
	      constructor: Context,

	      reset: function reset(skipTempReset) {
	        this.prev = 0;
	        this.next = 0;
	        // Resetting context._sent for legacy support of Babel's
	        // function.sent implementation.
	        this.sent = this._sent = undefined;
	        this.done = false;
	        this.delegate = null;

	        this.tryEntries.forEach(resetTryEntry);

	        if (!skipTempReset) {
	          for (var name in this) {
	            // Not sure about the optimal order of these conditions:
	            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	              this[name] = undefined;
	            }
	          }
	        }
	      },

	      stop: function stop() {
	        this.done = true;

	        var rootEntry = this.tryEntries[0];
	        var rootRecord = rootEntry.completion;
	        if (rootRecord.type === "throw") {
	          throw rootRecord.arg;
	        }

	        return this.rval;
	      },

	      dispatchException: function dispatchException(exception) {
	        if (this.done) {
	          throw exception;
	        }

	        var context = this;
	        function handle(loc, caught) {
	          record.type = "throw";
	          record.arg = exception;
	          context.next = loc;
	          return !!caught;
	        }

	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];
	          var record = entry.completion;

	          if (entry.tryLoc === "root") {
	            // Exception thrown outside of any try block that could handle
	            // it, so set the completion value of the entire function to
	            // throw the exception.
	            return handle("end");
	          }

	          if (entry.tryLoc <= this.prev) {
	            var hasCatch = hasOwn.call(entry, "catchLoc");
	            var hasFinally = hasOwn.call(entry, "finallyLoc");

	            if (hasCatch && hasFinally) {
	              if (this.prev < entry.catchLoc) {
	                return handle(entry.catchLoc, true);
	              } else if (this.prev < entry.finallyLoc) {
	                return handle(entry.finallyLoc);
	              }
	            } else if (hasCatch) {
	              if (this.prev < entry.catchLoc) {
	                return handle(entry.catchLoc, true);
	              }
	            } else if (hasFinally) {
	              if (this.prev < entry.finallyLoc) {
	                return handle(entry.finallyLoc);
	              }
	            } else {
	              throw new Error("try statement without catch or finally");
	            }
	          }
	        }
	      },

	      abrupt: function abrupt(type, arg) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];
	          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	            var finallyEntry = entry;
	            break;
	          }
	        }

	        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	          // Ignore the finally entry if control is not jumping to a
	          // location outside the try/catch block.
	          finallyEntry = null;
	        }

	        var record = finallyEntry ? finallyEntry.completion : {};
	        record.type = type;
	        record.arg = arg;

	        if (finallyEntry) {
	          this.next = finallyEntry.finallyLoc;
	        } else {
	          this.complete(record);
	        }

	        return ContinueSentinel;
	      },

	      complete: function complete(record, afterLoc) {
	        if (record.type === "throw") {
	          throw record.arg;
	        }

	        if (record.type === "break" || record.type === "continue") {
	          this.next = record.arg;
	        } else if (record.type === "return") {
	          this.rval = record.arg;
	          this.next = "end";
	        } else if (record.type === "normal" && afterLoc) {
	          this.next = afterLoc;
	        }
	      },

	      finish: function finish(finallyLoc) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];
	          if (entry.finallyLoc === finallyLoc) {
	            this.complete(entry.completion, entry.afterLoc);
	            resetTryEntry(entry);
	            return ContinueSentinel;
	          }
	        }
	      },

	      "catch": function _catch(tryLoc) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];
	          if (entry.tryLoc === tryLoc) {
	            var record = entry.completion;
	            if (record.type === "throw") {
	              var thrown = record.arg;
	              resetTryEntry(entry);
	            }
	            return thrown;
	          }
	        }

	        // The context.catch method must only be called with a location
	        // argument that corresponds to a known catch block.
	        throw new Error("illegal catch attempt");
	      },

	      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	        this.delegate = {
	          iterator: values(iterable),
	          resultName: resultName,
	          nextLoc: nextLoc
	        };

	        return ContinueSentinel;
	      }
	    };
	  }(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  _typeof(commonjsGlobal) === "object" ? commonjsGlobal : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : commonjsGlobal);
	});

	runtime && (typeof runtime === "undefined" ? "undefined" : _typeof(runtime)) === 'object' && 'default' in runtime ? runtime['default'] : runtime;

	var _shared = createCommonjsModule(function (module) {
	  var global = require$$29,
	      SHARED = '__core-js_shared__',
	      store = global[SHARED] || (global[SHARED] = {});
	  module.exports = function (key) {
	    return store[key] || (store[key] = {});
	  };
	});

	var require$$22 = _shared && (typeof _shared === 'undefined' ? 'undefined' : _typeof(_shared)) === 'object' && 'default' in _shared ? _shared['default'] : _shared;

	var _wks = createCommonjsModule(function (module) {
	  var store = require$$22('wks'),
	      uid = require$$20,
	      _Symbol = require$$29.Symbol,
	      USE_SYMBOL = typeof _Symbol == 'function';

	  var $exports = module.exports = function (name) {
	    return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	  };

	  $exports.store = store;
	});

	var require$$19 = _wks && (typeof _wks === 'undefined' ? 'undefined' : _typeof(_wks)) === 'object' && 'default' in _wks ? _wks['default'] : _wks;

	var _iterators = createCommonjsModule(function (module) {
	  module.exports = {};
	});

	var require$$1$2 = _iterators && (typeof _iterators === 'undefined' ? 'undefined' : _typeof(_iterators)) === 'object' && 'default' in _iterators ? _iterators['default'] : _iterators;

	var _sharedKey = createCommonjsModule(function (module) {
	  var shared = require$$22('keys'),
	      uid = require$$20;
	  module.exports = function (key) {
	    return shared[key] || (shared[key] = uid(key));
	  };
	});

	var require$$0$3 = _sharedKey && (typeof _sharedKey === 'undefined' ? 'undefined' : _typeof(_sharedKey)) === 'object' && 'default' in _sharedKey ? _sharedKey['default'] : _sharedKey;

	var _defined = createCommonjsModule(function (module) {
	  // 7.2.1 RequireObjectCoercible(argument)
	  module.exports = function (it) {
	    if (it == undefined) throw TypeError("Can't call method on  " + it);
	    return it;
	  };
	});

	var require$$0$4 = _defined && (typeof _defined === 'undefined' ? 'undefined' : _typeof(_defined)) === 'object' && 'default' in _defined ? _defined['default'] : _defined;

	var _toObject = createCommonjsModule(function (module) {
	  // 7.1.13 ToObject(argument)
	  var defined = require$$0$4;
	  module.exports = function (it) {
	    return Object(defined(it));
	  };
	});

	var require$$2$2 = _toObject && (typeof _toObject === 'undefined' ? 'undefined' : _typeof(_toObject)) === 'object' && 'default' in _toObject ? _toObject['default'] : _toObject;

	var _objectGpo = createCommonjsModule(function (module) {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  var has = require$$28,
	      toObject = require$$2$2,
	      IE_PROTO = require$$0$3('IE_PROTO'),
	      ObjectProto = Object.prototype;

	  module.exports = Object.getPrototypeOf || function (O) {
	    O = toObject(O);
	    if (has(O, IE_PROTO)) return O[IE_PROTO];
	    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	      return O.constructor.prototype;
	    }return O instanceof Object ? ObjectProto : null;
	  };
	});

	var require$$1$3 = _objectGpo && (typeof _objectGpo === 'undefined' ? 'undefined' : _typeof(_objectGpo)) === 'object' && 'default' in _objectGpo ? _objectGpo['default'] : _objectGpo;

	var _setToStringTag = createCommonjsModule(function (module) {
	  var def = require$$6.f,
	      has = require$$28,
	      TAG = require$$19('toStringTag');

	  module.exports = function (it, tag, stat) {
	    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	  };
	});

	var require$$21 = _setToStringTag && (typeof _setToStringTag === 'undefined' ? 'undefined' : _typeof(_setToStringTag)) === 'object' && 'default' in _setToStringTag ? _setToStringTag['default'] : _setToStringTag;

	var _html = createCommonjsModule(function (module) {
	  module.exports = require$$29.document && document.documentElement;
	});

	var require$$4 = _html && (typeof _html === 'undefined' ? 'undefined' : _typeof(_html)) === 'object' && 'default' in _html ? _html['default'] : _html;

	var _enumBugKeys = createCommonjsModule(function (module) {
	  // IE 8- don't enum bug keys
	  module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
	});

	var require$$0$6 = _enumBugKeys && (typeof _enumBugKeys === 'undefined' ? 'undefined' : _typeof(_enumBugKeys)) === 'object' && 'default' in _enumBugKeys ? _enumBugKeys['default'] : _enumBugKeys;

	var _toInteger = createCommonjsModule(function (module) {
	  // 7.1.4 ToInteger
	  var ceil = Math.ceil,
	      floor = Math.floor;
	  module.exports = function (it) {
	    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	  };
	});

	var require$$3$1 = _toInteger && (typeof _toInteger === 'undefined' ? 'undefined' : _typeof(_toInteger)) === 'object' && 'default' in _toInteger ? _toInteger['default'] : _toInteger;

	var _toIndex = createCommonjsModule(function (module) {
	  var toInteger = require$$3$1,
	      max = Math.max,
	      min = Math.min;
	  module.exports = function (index, length) {
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  };
	});

	var require$$0$8 = _toIndex && (typeof _toIndex === 'undefined' ? 'undefined' : _typeof(_toIndex)) === 'object' && 'default' in _toIndex ? _toIndex['default'] : _toIndex;

	var _toLength = createCommonjsModule(function (module) {
	  // 7.1.15 ToLength
	  var toInteger = require$$3$1,
	      min = Math.min;
	  module.exports = function (it) {
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  };
	});

	var require$$0$9 = _toLength && (typeof _toLength === 'undefined' ? 'undefined' : _typeof(_toLength)) === 'object' && 'default' in _toLength ? _toLength['default'] : _toLength;

	var _cof = createCommonjsModule(function (module) {
	  var toString = {}.toString;

	  module.exports = function (it) {
	    return toString.call(it).slice(8, -1);
	  };
	});

	var require$$10$1 = _cof && (typeof _cof === 'undefined' ? 'undefined' : _typeof(_cof)) === 'object' && 'default' in _cof ? _cof['default'] : _cof;

	var _iobject = createCommonjsModule(function (module) {
	  // fallback for non-array-like ES3 and non-enumerable old V8 strings
	  var cof = require$$10$1;
	  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	    return cof(it) == 'String' ? it.split('') : Object(it);
	  };
	});

	var require$$1$7 = _iobject && (typeof _iobject === 'undefined' ? 'undefined' : _typeof(_iobject)) === 'object' && 'default' in _iobject ? _iobject['default'] : _iobject;

	var _toIobject = createCommonjsModule(function (module) {
	  // to indexed object, toObject with fallback for non-array-like ES3 strings
	  var IObject = require$$1$7,
	      defined = require$$0$4;
	  module.exports = function (it) {
	    return IObject(defined(it));
	  };
	});

	var require$$0$10 = _toIobject && (typeof _toIobject === 'undefined' ? 'undefined' : _typeof(_toIobject)) === 'object' && 'default' in _toIobject ? _toIobject['default'] : _toIobject;

	var _arrayIncludes = createCommonjsModule(function (module) {
	  // false -> Array#indexOf
	  // true  -> Array#includes
	  var toIObject = require$$0$10,
	      toLength = require$$0$9,
	      toIndex = require$$0$8;
	  module.exports = function (IS_INCLUDES) {
	    return function ($this, el, fromIndex) {
	      var O = toIObject($this),
	          length = toLength(O.length),
	          index = toIndex(fromIndex, length),
	          value;
	      // Array#includes uses SameValueZero equality algorithm
	      if (IS_INCLUDES && el != el) while (length > index) {
	        value = O[index++];
	        if (value != value) return true;
	        // Array#toIndex ignores holes, Array#includes - not
	      } else for (; length > index; index++) {
	        if (IS_INCLUDES || index in O) {
	          if (O[index] === el) return IS_INCLUDES || index || 0;
	        }
	      }return !IS_INCLUDES && -1;
	    };
	  };
	});

	var require$$1$6 = _arrayIncludes && (typeof _arrayIncludes === 'undefined' ? 'undefined' : _typeof(_arrayIncludes)) === 'object' && 'default' in _arrayIncludes ? _arrayIncludes['default'] : _arrayIncludes;

	var _objectKeysInternal = createCommonjsModule(function (module) {
	  var has = require$$28,
	      toIObject = require$$0$10,
	      arrayIndexOf = require$$1$6(false),
	      IE_PROTO = require$$0$3('IE_PROTO');

	  module.exports = function (object, names) {
	    var O = toIObject(object),
	        i = 0,
	        result = [],
	        key;
	    for (key in O) {
	      if (key != IE_PROTO) has(O, key) && result.push(key);
	    } // Don't enum bug & hidden keys
	    while (names.length > i) {
	      if (has(O, key = names[i++])) {
	        ~arrayIndexOf(result, key) || result.push(key);
	      }
	    }return result;
	  };
	});

	var require$$1$5 = _objectKeysInternal && (typeof _objectKeysInternal === 'undefined' ? 'undefined' : _typeof(_objectKeysInternal)) === 'object' && 'default' in _objectKeysInternal ? _objectKeysInternal['default'] : _objectKeysInternal;

	var _objectKeys = createCommonjsModule(function (module) {
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  var $keys = require$$1$5,
	      enumBugKeys = require$$0$6;

	  module.exports = Object.keys || function keys(O) {
	    return $keys(O, enumBugKeys);
	  };
	});

	var require$$1$4 = _objectKeys && (typeof _objectKeys === 'undefined' ? 'undefined' : _typeof(_objectKeys)) === 'object' && 'default' in _objectKeys ? _objectKeys['default'] : _objectKeys;

	var _objectDps = createCommonjsModule(function (module) {
	  var dP = require$$6,
	      anObject = require$$13,
	      getKeys = require$$1$4;

	  module.exports = require$$27 ? Object.defineProperties : function defineProperties(O, Properties) {
	    anObject(O);
	    var keys = getKeys(Properties),
	        length = keys.length,
	        i = 0,
	        P;
	    while (length > i) {
	      dP.f(O, P = keys[i++], Properties[P]);
	    }return O;
	  };
	});

	var require$$0$7 = _objectDps && (typeof _objectDps === 'undefined' ? 'undefined' : _typeof(_objectDps)) === 'object' && 'default' in _objectDps ? _objectDps['default'] : _objectDps;

	var _objectCreate = createCommonjsModule(function (module) {
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  var anObject = require$$13,
	      dPs = require$$0$7,
	      enumBugKeys = require$$0$6,
	      IE_PROTO = require$$0$3('IE_PROTO'),
	      Empty = function Empty() {/* empty */},
	      PROTOTYPE = 'prototype';

	  // Create object with fake `null` prototype: use iframe Object with cleared prototype
	  var _createDict = function createDict() {
	    // Thrash, waste and sodomy: IE GC bug
	    var iframe = require$$2$1('iframe'),
	        i = enumBugKeys.length,
	        gt = '>',
	        iframeDocument;
	    iframe.style.display = 'none';
	    require$$4.appendChild(iframe);
	    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	    // createDict = iframe.contentWindow.Object;
	    // html.removeChild(iframe);
	    iframeDocument = iframe.contentWindow.document;
	    iframeDocument.open();
	    iframeDocument.write('<script>document.F=Object</script' + gt);
	    iframeDocument.close();
	    _createDict = iframeDocument.F;
	    while (i--) {
	      delete _createDict[PROTOTYPE][enumBugKeys[i]];
	    }return _createDict();
	  };

	  module.exports = Object.create || function create(O, Properties) {
	    var result;
	    if (O !== null) {
	      Empty[PROTOTYPE] = anObject(O);
	      result = new Empty();
	      Empty[PROTOTYPE] = null;
	      // add "__proto__" for Object.getPrototypeOf polyfill
	      result[IE_PROTO] = O;
	    } else result = _createDict();
	    return Properties === undefined ? result : dPs(result, Properties);
	  };
	});

	var require$$9 = _objectCreate && (typeof _objectCreate === 'undefined' ? 'undefined' : _typeof(_objectCreate)) === 'object' && 'default' in _objectCreate ? _objectCreate['default'] : _objectCreate;

	var _iterCreate = createCommonjsModule(function (module) {
	  'use strict';

	  var create = require$$9,
	      descriptor = require$$10,
	      setToStringTag = require$$21,
	      IteratorPrototype = {};

	  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	  require$$0$1(IteratorPrototype, require$$19('iterator'), function () {
	    return this;
	  });

	  module.exports = function (Constructor, NAME, next) {
	    Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	    setToStringTag(Constructor, NAME + ' Iterator');
	  };
	});

	var require$$0$5 = _iterCreate && (typeof _iterCreate === 'undefined' ? 'undefined' : _typeof(_iterCreate)) === 'object' && 'default' in _iterCreate ? _iterCreate['default'] : _iterCreate;

	var _library = createCommonjsModule(function (module) {
	  module.exports = false;
	});

	var require$$1$8 = _library && (typeof _library === 'undefined' ? 'undefined' : _typeof(_library)) === 'object' && 'default' in _library ? _library['default'] : _library;

	var _iterDefine = createCommonjsModule(function (module) {
	  'use strict';

	  var LIBRARY = require$$1$8,
	      $export = require$$26,
	      redefine = require$$25,
	      hide = require$$0$1,
	      has = require$$28,
	      Iterators = require$$1$2,
	      $iterCreate = require$$0$5,
	      setToStringTag = require$$21,
	      getPrototypeOf = require$$1$3,
	      ITERATOR = require$$19('iterator'),
	      BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  ,
	      FF_ITERATOR = '@@iterator',
	      KEYS = 'keys',
	      VALUES = 'values';

	  var returnThis = function returnThis() {
	    return this;
	  };

	  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	    $iterCreate(Constructor, NAME, next);
	    var getMethod = function getMethod(kind) {
	      if (!BUGGY && kind in proto) return proto[kind];
	      switch (kind) {
	        case KEYS:
	          return function keys() {
	            return new Constructor(this, kind);
	          };
	        case VALUES:
	          return function values() {
	            return new Constructor(this, kind);
	          };
	      }return function entries() {
	        return new Constructor(this, kind);
	      };
	    };
	    var TAG = NAME + ' Iterator',
	        DEF_VALUES = DEFAULT == VALUES,
	        VALUES_BUG = false,
	        proto = Base.prototype,
	        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	        $default = $native || getMethod(DEFAULT),
	        $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	        $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	        methods,
	        key,
	        IteratorPrototype;
	    // Fix native
	    if ($anyNative) {
	      IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	      if (IteratorPrototype !== Object.prototype) {
	        // Set @@toStringTag to native iterators
	        setToStringTag(IteratorPrototype, TAG, true);
	        // fix for some old engines
	        if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	      }
	    }
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if (DEF_VALUES && $native && $native.name !== VALUES) {
	      VALUES_BUG = true;
	      $default = function values() {
	        return $native.call(this);
	      };
	    }
	    // Define iterator
	    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	      hide(proto, ITERATOR, $default);
	    }
	    // Plug for library
	    Iterators[NAME] = $default;
	    Iterators[TAG] = returnThis;
	    if (DEFAULT) {
	      methods = {
	        values: DEF_VALUES ? $default : getMethod(VALUES),
	        keys: IS_SET ? $default : getMethod(KEYS),
	        entries: $entries
	      };
	      if (FORCED) for (key in methods) {
	        if (!(key in proto)) redefine(proto, key, methods[key]);
	      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	    }
	    return methods;
	  };
	});

	var require$$0$2 = _iterDefine && (typeof _iterDefine === 'undefined' ? 'undefined' : _typeof(_iterDefine)) === 'object' && 'default' in _iterDefine ? _iterDefine['default'] : _iterDefine;

	var _iterStep = createCommonjsModule(function (module) {
	  module.exports = function (done, value) {
	    return { value: value, done: !!done };
	  };
	});

	var require$$3$2 = _iterStep && (typeof _iterStep === 'undefined' ? 'undefined' : _typeof(_iterStep)) === 'object' && 'default' in _iterStep ? _iterStep['default'] : _iterStep;

	var _addToUnscopables = createCommonjsModule(function (module) {
	  // 22.1.3.31 Array.prototype[@@unscopables]
	  var UNSCOPABLES = require$$19('unscopables'),
	      ArrayProto = Array.prototype;
	  if (ArrayProto[UNSCOPABLES] == undefined) require$$0$1(ArrayProto, UNSCOPABLES, {});
	  module.exports = function (key) {
	    ArrayProto[UNSCOPABLES][key] = true;
	  };
	});

	var require$$0$11 = _addToUnscopables && (typeof _addToUnscopables === 'undefined' ? 'undefined' : _typeof(_addToUnscopables)) === 'object' && 'default' in _addToUnscopables ? _addToUnscopables['default'] : _addToUnscopables;

	var es6_array_iterator = createCommonjsModule(function (module) {
	  'use strict';

	  var addToUnscopables = require$$0$11,
	      step = require$$3$2,
	      Iterators = require$$1$2,
	      toIObject = require$$0$10;

	  // 22.1.3.4 Array.prototype.entries()
	  // 22.1.3.13 Array.prototype.keys()
	  // 22.1.3.29 Array.prototype.values()
	  // 22.1.3.30 Array.prototype[@@iterator]()
	  module.exports = require$$0$2(Array, 'Array', function (iterated, kind) {
	    this._t = toIObject(iterated); // target
	    this._i = 0; // next index
	    this._k = kind; // kind
	    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	  }, function () {
	    var O = this._t,
	        kind = this._k,
	        index = this._i++;
	    if (!O || index >= O.length) {
	      this._t = undefined;
	      return step(1);
	    }
	    if (kind == 'keys') return step(0, index);
	    if (kind == 'values') return step(0, O[index]);
	    return step(0, [index, O[index]]);
	  }, 'values');

	  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	  Iterators.Arguments = Iterators.Array;

	  addToUnscopables('keys');
	  addToUnscopables('values');
	  addToUnscopables('entries');
	});

	var require$$7 = es6_array_iterator && (typeof es6_array_iterator === 'undefined' ? 'undefined' : _typeof(es6_array_iterator)) === 'object' && 'default' in es6_array_iterator ? es6_array_iterator['default'] : es6_array_iterator;

	var web_dom_iterable = createCommonjsModule(function (module) {
	  var $iterators = require$$7,
	      redefine = require$$25,
	      global = require$$29,
	      hide = require$$0$1,
	      Iterators = require$$1$2,
	      wks = require$$19,
	      ITERATOR = wks('iterator'),
	      TO_STRING_TAG = wks('toStringTag'),
	      ArrayValues = Iterators.Array;

	  for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	    var NAME = collections[i],
	        Collection = global[NAME],
	        proto = Collection && Collection.prototype,
	        key;
	    if (proto) {
	      if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	      if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	      Iterators[NAME] = ArrayValues;
	      for (key in $iterators) {
	        if (!proto[key]) redefine(proto, key, $iterators[key], true);
	      }
	    }
	  }
	});

	web_dom_iterable && (typeof web_dom_iterable === 'undefined' ? 'undefined' : _typeof(web_dom_iterable)) === 'object' && 'default' in web_dom_iterable ? web_dom_iterable['default'] : web_dom_iterable;

	var _invoke = createCommonjsModule(function (module) {
	                  // fast apply, http://jsperf.lnkit.com/fast-apply/5
	                  module.exports = function (fn, args, that) {
	                                    var un = that === undefined;
	                                    switch (args.length) {
	                                                      case 0:
	                                                                        return un ? fn() : fn.call(that);
	                                                      case 1:
	                                                                        return un ? fn(args[0]) : fn.call(that, args[0]);
	                                                      case 2:
	                                                                        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                                      case 3:
	                                                                        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                                      case 4:
	                                                                        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                                    }return fn.apply(that, args);
	                  };
	});

	var require$$0$12 = _invoke && (typeof _invoke === 'undefined' ? 'undefined' : _typeof(_invoke)) === 'object' && 'default' in _invoke ? _invoke['default'] : _invoke;

	var _task = createCommonjsModule(function (module) {
	  var ctx = require$$8,
	      invoke = require$$0$12,
	      html = require$$4,
	      cel = require$$2$1,
	      global = require$$29,
	      process = global.process,
	      setTask = global.setImmediate,
	      clearTask = global.clearImmediate,
	      MessageChannel = global.MessageChannel,
	      counter = 0,
	      queue = {},
	      ONREADYSTATECHANGE = 'onreadystatechange',
	      defer,
	      channel,
	      port;
	  var run = function run() {
	    var id = +this;
	    if (queue.hasOwnProperty(id)) {
	      var fn = queue[id];
	      delete queue[id];
	      fn();
	    }
	  };
	  var listener = function listener(event) {
	    run.call(event.data);
	  };
	  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	  if (!setTask || !clearTask) {
	    setTask = function setImmediate(fn) {
	      var args = [],
	          i = 1;
	      while (arguments.length > i) {
	        args.push(arguments[i++]);
	      }queue[++counter] = function () {
	        invoke(typeof fn == 'function' ? fn : Function(fn), args);
	      };
	      defer(counter);
	      return counter;
	    };
	    clearTask = function clearImmediate(id) {
	      delete queue[id];
	    };
	    // Node.js 0.8-
	    if (require$$10$1(process) == 'process') {
	      defer = function defer(id) {
	        process.nextTick(ctx(run, id, 1));
	      };
	      // Browsers with MessageChannel, includes WebWorkers
	    } else if (MessageChannel) {
	      channel = new MessageChannel();
	      port = channel.port2;
	      channel.port1.onmessage = listener;
	      defer = ctx(port.postMessage, port, 1);
	      // Browsers with postMessage, skip WebWorkers
	      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	      defer = function defer(id) {
	        global.postMessage(id + '', '*');
	      };
	      global.addEventListener('message', listener, false);
	      // IE8-
	    } else if (ONREADYSTATECHANGE in cel('script')) {
	      defer = function defer(id) {
	        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	          html.removeChild(this);
	          run.call(id);
	        };
	      };
	      // Rest old browsers
	    } else {
	      defer = function defer(id) {
	        setTimeout(ctx(run, id, 1), 0);
	      };
	    }
	  }
	  module.exports = {
	    set: setTask,
	    clear: clearTask
	  };
	});

	var require$$7$1 = _task && (typeof _task === 'undefined' ? 'undefined' : _typeof(_task)) === 'object' && 'default' in _task ? _task['default'] : _task;

	var web_immediate = createCommonjsModule(function (module) {
	  var $export = require$$26,
	      $task = require$$7$1;
	  $export($export.G + $export.B, {
	    setImmediate: $task.set,
	    clearImmediate: $task.clear
	  });
	});

	web_immediate && (typeof web_immediate === 'undefined' ? 'undefined' : _typeof(web_immediate)) === 'object' && 'default' in web_immediate ? web_immediate['default'] : web_immediate;

	var _path = createCommonjsModule(function (module) {
	  module.exports = require$$29;
	});

	var require$$2$3 = _path && (typeof _path === 'undefined' ? 'undefined' : _typeof(_path)) === 'object' && 'default' in _path ? _path['default'] : _path;

	var _partial = createCommonjsModule(function (module) {
	  'use strict';

	  var path = require$$2$3,
	      invoke = require$$0$12,
	      aFunction = require$$3;
	  module.exports = function () /* ...pargs */{
	    var fn = aFunction(this),
	        length = arguments.length,
	        pargs = Array(length),
	        i = 0,
	        _ = path._,
	        holder = false;
	    while (length > i) {
	      if ((pargs[i] = arguments[i++]) === _) holder = true;
	    }return function () /* ...args */{
	      var that = this,
	          aLen = arguments.length,
	          j = 0,
	          k = 0,
	          args;
	      if (!holder && !aLen) return invoke(fn, pargs, that);
	      args = pargs.slice();
	      if (holder) for (; length > j; j++) {
	        if (args[j] === _) args[j] = arguments[k++];
	      }while (aLen > k) {
	        args.push(arguments[k++]);
	      }return invoke(fn, args, that);
	    };
	  };
	});

	var require$$0$13 = _partial && (typeof _partial === 'undefined' ? 'undefined' : _typeof(_partial)) === 'object' && 'default' in _partial ? _partial['default'] : _partial;

	var web_timers = createCommonjsModule(function (module) {
	  // ie9- setTimeout & setInterval additional parameters fix
	  var global = require$$29,
	      $export = require$$26,
	      invoke = require$$0$12,
	      partial = require$$0$13,
	      navigator = global.navigator,
	      MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	  var wrap = function wrap(set) {
	    return MSIE ? function (fn, time /*, ...args */) {
	      return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
	    } : set;
	  };
	  $export($export.G + $export.B + $export.F * MSIE, {
	    setTimeout: wrap(global.setTimeout),
	    setInterval: wrap(global.setInterval)
	  });
	});

	web_timers && (typeof web_timers === 'undefined' ? 'undefined' : _typeof(web_timers)) === 'object' && 'default' in web_timers ? web_timers['default'] : web_timers;

	var _setSpecies = createCommonjsModule(function (module) {
	  'use strict';

	  var global = require$$29,
	      dP = require$$6,
	      DESCRIPTORS = require$$27,
	      SPECIES = require$$19('species');

	  module.exports = function (KEY) {
	    var C = global[KEY];
	    if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	      configurable: true,
	      get: function get() {
	        return this;
	      }
	    });
	  };
	});

	var require$$0$14 = _setSpecies && (typeof _setSpecies === 'undefined' ? 'undefined' : _typeof(_setSpecies)) === 'object' && 'default' in _setSpecies ? _setSpecies['default'] : _setSpecies;

	var _classof = createCommonjsModule(function (module) {
	  // getting tag from 19.1.3.6 Object.prototype.toString()
	  var cof = require$$10$1,
	      TAG = require$$19('toStringTag')
	  // ES3 wrong here
	  ,
	      ARG = cof(function () {
	    return arguments;
	  }()) == 'Arguments';

	  // fallback for IE11 Script Access Denied error
	  var tryGet = function tryGet(it, key) {
	    try {
	      return it[key];
	    } catch (e) {/* empty */}
	  };

	  module.exports = function (it) {
	    var O, T, B;
	    return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	  };
	});

	var require$$2$4 = _classof && (typeof _classof === 'undefined' ? 'undefined' : _typeof(_classof)) === 'object' && 'default' in _classof ? _classof['default'] : _classof;

	var core_getIteratorMethod = createCommonjsModule(function (module) {
	  var classof = require$$2$4,
	      ITERATOR = require$$19('iterator'),
	      Iterators = require$$1$2;
	  module.exports = require$$1.getIteratorMethod = function (it) {
	    if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	  };
	});

	var require$$1$9 = core_getIteratorMethod && (typeof core_getIteratorMethod === 'undefined' ? 'undefined' : _typeof(core_getIteratorMethod)) === 'object' && 'default' in core_getIteratorMethod ? core_getIteratorMethod['default'] : core_getIteratorMethod;

	var _isArrayIter = createCommonjsModule(function (module) {
	  // check on default Array iterator
	  var Iterators = require$$1$2,
	      ITERATOR = require$$19('iterator'),
	      ArrayProto = Array.prototype;

	  module.exports = function (it) {
	    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	  };
	});

	var require$$4$1 = _isArrayIter && (typeof _isArrayIter === 'undefined' ? 'undefined' : _typeof(_isArrayIter)) === 'object' && 'default' in _isArrayIter ? _isArrayIter['default'] : _isArrayIter;

	var _iterCall = createCommonjsModule(function (module) {
	  // call something on iterator step with safe closing on error
	  var anObject = require$$13;
	  module.exports = function (iterator, fn, value, entries) {
	    try {
	      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	      // 7.4.6 IteratorClose(iterator, completion)
	    } catch (e) {
	      var ret = iterator['return'];
	      if (ret !== undefined) anObject(ret.call(iterator));
	      throw e;
	    }
	  };
	});

	var require$$5 = _iterCall && (typeof _iterCall === 'undefined' ? 'undefined' : _typeof(_iterCall)) === 'object' && 'default' in _iterCall ? _iterCall['default'] : _iterCall;

	var _forOf = createCommonjsModule(function (module) {
	  var ctx = require$$8,
	      call = require$$5,
	      isArrayIter = require$$4$1,
	      anObject = require$$13,
	      toLength = require$$0$9,
	      getIterFn = require$$1$9,
	      BREAK = {},
	      RETURN = {};
	  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	    var iterFn = ITERATOR ? function () {
	      return iterable;
	    } : getIterFn(iterable),
	        f = ctx(fn, that, entries ? 2 : 1),
	        index = 0,
	        length,
	        step,
	        iterator,
	        result;
	    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	    // fast case for arrays with default iterator
	    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	      result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	      if (result === BREAK || result === RETURN) return result;
	    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	      result = call(iterator, f, step.value, entries);
	      if (result === BREAK || result === RETURN) return result;
	    }
	  };
	  exports.BREAK = BREAK;
	  exports.RETURN = RETURN;
	});

	var require$$10$2 = _forOf && (typeof _forOf === 'undefined' ? 'undefined' : _typeof(_forOf)) === 'object' && 'default' in _forOf ? _forOf['default'] : _forOf;

	var _redefineAll = createCommonjsModule(function (module) {
	  var redefine = require$$25;
	  module.exports = function (target, src, safe) {
	    for (var key in src) {
	      redefine(target, key, src[key], safe);
	    }return target;
	  };
	});

	var require$$4$2 = _redefineAll && (typeof _redefineAll === 'undefined' ? 'undefined' : _typeof(_redefineAll)) === 'object' && 'default' in _redefineAll ? _redefineAll['default'] : _redefineAll;

	var _anInstance = createCommonjsModule(function (module) {
	  module.exports = function (it, Constructor, name, forbiddenField) {
	    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	      throw TypeError(name + ': incorrect invocation!');
	    }return it;
	  };
	});

	var require$$4$3 = _anInstance && (typeof _anInstance === 'undefined' ? 'undefined' : _typeof(_anInstance)) === 'object' && 'default' in _anInstance ? _anInstance['default'] : _anInstance;

	var _microtask = createCommonjsModule(function (module) {
	  var global = require$$29,
	      macrotask = require$$7$1.set,
	      Observer = global.MutationObserver || global.WebKitMutationObserver,
	      process = global.process,
	      Promise = global.Promise,
	      isNode = require$$10$1(process) == 'process';

	  module.exports = function () {
	    var head, last, notify;

	    var flush = function flush() {
	      var parent, fn;
	      if (isNode && (parent = process.domain)) parent.exit();
	      while (head) {
	        fn = head.fn;
	        head = head.next;
	        try {
	          fn();
	        } catch (e) {
	          if (head) notify();else last = undefined;
	          throw e;
	        }
	      }last = undefined;
	      if (parent) parent.enter();
	    };

	    // Node.js
	    if (isNode) {
	      notify = function notify() {
	        process.nextTick(flush);
	      };
	      // browsers with MutationObserver
	    } else if (Observer) {
	      var toggle = true,
	          node = document.createTextNode('');
	      new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	      notify = function notify() {
	        node.data = toggle = !toggle;
	      };
	      // environments with maybe non-completely correct, but existent Promise
	    } else if (Promise && Promise.resolve) {
	      var promise = Promise.resolve();
	      notify = function notify() {
	        promise.then(flush);
	      };
	      // for other environments - macrotask based on:
	      // - setImmediate
	      // - MessageChannel
	      // - window.postMessag
	      // - onreadystatechange
	      // - setTimeout
	    } else {
	      notify = function notify() {
	        // strange IE + webpack dev server bug - use .call(global)
	        macrotask.call(global, flush);
	      };
	    }

	    return function (fn) {
	      var task = { fn: fn, next: undefined };
	      if (last) last.next = task;
	      if (!head) {
	        head = task;
	        notify();
	      }last = task;
	    };
	  };
	});

	var require$$6$1 = _microtask && (typeof _microtask === 'undefined' ? 'undefined' : _typeof(_microtask)) === 'object' && 'default' in _microtask ? _microtask['default'] : _microtask;

	var es7_observable = createCommonjsModule(function (module) {
	  'use strict';
	  // https://github.com/zenparsing/es-observable

	  var $export = require$$26,
	      global = require$$29,
	      core = require$$1,
	      microtask = require$$6$1(),
	      OBSERVABLE = require$$19('observable'),
	      aFunction = require$$3,
	      anObject = require$$13,
	      anInstance = require$$4$3,
	      redefineAll = require$$4$2,
	      hide = require$$0$1,
	      forOf = require$$10$2,
	      RETURN = forOf.RETURN;

	  var getMethod = function getMethod(fn) {
	    return fn == null ? undefined : aFunction(fn);
	  };

	  var cleanupSubscription = function cleanupSubscription(subscription) {
	    var cleanup = subscription._c;
	    if (cleanup) {
	      subscription._c = undefined;
	      cleanup();
	    }
	  };

	  var subscriptionClosed = function subscriptionClosed(subscription) {
	    return subscription._o === undefined;
	  };

	  var closeSubscription = function closeSubscription(subscription) {
	    if (!subscriptionClosed(subscription)) {
	      subscription._o = undefined;
	      cleanupSubscription(subscription);
	    }
	  };

	  var Subscription = function Subscription(observer, subscriber) {
	    anObject(observer);
	    this._c = undefined;
	    this._o = observer;
	    observer = new SubscriptionObserver(this);
	    try {
	      var cleanup = subscriber(observer),
	          subscription = cleanup;
	      if (cleanup != null) {
	        if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {
	          subscription.unsubscribe();
	        };else aFunction(cleanup);
	        this._c = cleanup;
	      }
	    } catch (e) {
	      observer.error(e);
	      return;
	    }if (subscriptionClosed(this)) cleanupSubscription(this);
	  };

	  Subscription.prototype = redefineAll({}, {
	    unsubscribe: function unsubscribe() {
	      closeSubscription(this);
	    }
	  });

	  var SubscriptionObserver = function SubscriptionObserver(subscription) {
	    this._s = subscription;
	  };

	  SubscriptionObserver.prototype = redefineAll({}, {
	    next: function next(value) {
	      var subscription = this._s;
	      if (!subscriptionClosed(subscription)) {
	        var observer = subscription._o;
	        try {
	          var m = getMethod(observer.next);
	          if (m) return m.call(observer, value);
	        } catch (e) {
	          try {
	            closeSubscription(subscription);
	          } finally {
	            throw e;
	          }
	        }
	      }
	    },
	    error: function error(value) {
	      var subscription = this._s;
	      if (subscriptionClosed(subscription)) throw value;
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.error);
	        if (!m) throw value;
	        value = m.call(observer, value);
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }cleanupSubscription(subscription);
	      return value;
	    },
	    complete: function complete(value) {
	      var subscription = this._s;
	      if (!subscriptionClosed(subscription)) {
	        var observer = subscription._o;
	        subscription._o = undefined;
	        try {
	          var m = getMethod(observer.complete);
	          value = m ? m.call(observer, value) : undefined;
	        } catch (e) {
	          try {
	            cleanupSubscription(subscription);
	          } finally {
	            throw e;
	          }
	        }cleanupSubscription(subscription);
	        return value;
	      }
	    }
	  });

	  var $Observable = function Observable(subscriber) {
	    anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	  };

	  redefineAll($Observable.prototype, {
	    subscribe: function subscribe(observer) {
	      return new Subscription(observer, this._f);
	    },
	    forEach: function forEach(fn) {
	      var that = this;
	      return new (core.Promise || global.Promise)(function (resolve, reject) {
	        aFunction(fn);
	        var subscription = that.subscribe({
	          next: function next(value) {
	            try {
	              return fn(value);
	            } catch (e) {
	              reject(e);
	              subscription.unsubscribe();
	            }
	          },
	          error: reject,
	          complete: resolve
	        });
	      });
	    }
	  });

	  redefineAll($Observable, {
	    from: function from(x) {
	      var C = typeof this === 'function' ? this : $Observable;
	      var method = getMethod(anObject(x)[OBSERVABLE]);
	      if (method) {
	        var observable = anObject(method.call(x));
	        return observable.constructor === C ? observable : new C(function (observer) {
	          return observable.subscribe(observer);
	        });
	      }
	      return new C(function (observer) {
	        var done = false;
	        microtask(function () {
	          if (!done) {
	            try {
	              if (forOf(x, false, function (it) {
	                observer.next(it);
	                if (done) return RETURN;
	              }) === RETURN) return;
	            } catch (e) {
	              if (done) throw e;
	              observer.error(e);
	              return;
	            }observer.complete();
	          }
	        });
	        return function () {
	          done = true;
	        };
	      });
	    },
	    of: function of() {
	      for (var i = 0, l = arguments.length, items = Array(l); i < l;) {
	        items[i] = arguments[i++];
	      }return new (typeof this === 'function' ? this : $Observable)(function (observer) {
	        var done = false;
	        microtask(function () {
	          if (!done) {
	            for (var i = 0; i < items.length; ++i) {
	              observer.next(items[i]);
	              if (done) return;
	            }observer.complete();
	          }
	        });
	        return function () {
	          done = true;
	        };
	      });
	    }
	  });

	  hide($Observable.prototype, OBSERVABLE, function () {
	    return this;
	  });

	  $export($export.G, { Observable: $Observable });

	  require$$0$14('Observable');
	});

	es7_observable && (typeof es7_observable === 'undefined' ? 'undefined' : _typeof(es7_observable)) === 'object' && 'default' in es7_observable ? es7_observable['default'] : es7_observable;

	var es7_asap = createCommonjsModule(function (module) {
	  // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	  var $export = require$$26,
	      microtask = require$$6$1(),
	      process = require$$29.process,
	      isNode = require$$10$1(process) == 'process';

	  $export($export.G, {
	    asap: function asap(fn) {
	      var domain = isNode && process.domain;
	      microtask(domain ? domain.bind(fn) : fn);
	    }
	  });
	});

	es7_asap && (typeof es7_asap === 'undefined' ? 'undefined' : _typeof(es7_asap)) === 'object' && 'default' in es7_asap ? es7_asap['default'] : es7_asap;

	var _objectPie = createCommonjsModule(function (module, exports) {
	  exports.f = {}.propertyIsEnumerable;
	});

	var require$$0$18 = _objectPie && (typeof _objectPie === 'undefined' ? 'undefined' : _typeof(_objectPie)) === 'object' && 'default' in _objectPie ? _objectPie['default'] : _objectPie;

	var _objectGopd = createCommonjsModule(function (module, exports) {
	  var pIE = require$$0$18,
	      createDesc = require$$10,
	      toIObject = require$$0$10,
	      toPrimitive = require$$11,
	      has = require$$28,
	      IE8_DOM_DEFINE = require$$1$1,
	      gOPD = Object.getOwnPropertyDescriptor;

	  exports.f = require$$27 ? gOPD : function getOwnPropertyDescriptor(O, P) {
	    O = toIObject(O);
	    P = toPrimitive(P, true);
	    if (IE8_DOM_DEFINE) try {
	      return gOPD(O, P);
	    } catch (e) {/* empty */}
	    if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	  };
	});

	var require$$7$2 = _objectGopd && (typeof _objectGopd === 'undefined' ? 'undefined' : _typeof(_objectGopd)) === 'object' && 'default' in _objectGopd ? _objectGopd['default'] : _objectGopd;

	var _setProto = createCommonjsModule(function (module) {
	  // Works with __proto__ only. Old v8 can't work with null proto objects.
	  /* eslint-disable no-proto */
	  var isObject = require$$2,
	      anObject = require$$13;
	  var check = function check(O, proto) {
	    anObject(O);
	    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	  };
	  module.exports = {
	    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = require$$8(Function.call, require$$7$2.f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) {
	        buggy = true;
	      }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	    check: check
	  };
	});

	var require$$0$17 = _setProto && (typeof _setProto === 'undefined' ? 'undefined' : _typeof(_setProto)) === 'object' && 'default' in _setProto ? _setProto['default'] : _setProto;

	var _inheritIfRequired = createCommonjsModule(function (module) {
	  var isObject = require$$2,
	      setPrototypeOf = require$$0$17.set;
	  module.exports = function (that, target, C) {
	    var P,
	        S = target.constructor;
	    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	      setPrototypeOf(that, P);
	    }return that;
	  };
	});

	var require$$9$1 = _inheritIfRequired && (typeof _inheritIfRequired === 'undefined' ? 'undefined' : _typeof(_inheritIfRequired)) === 'object' && 'default' in _inheritIfRequired ? _inheritIfRequired['default'] : _inheritIfRequired;

	var _iterDetect = createCommonjsModule(function (module) {
	  var ITERATOR = require$$19('iterator'),
	      SAFE_CLOSING = false;

	  try {
	    var riter = [7][ITERATOR]();
	    riter['return'] = function () {
	      SAFE_CLOSING = true;
	    };
	    Array.from(riter, function () {
	      throw 2;
	    });
	  } catch (e) {/* empty */}

	  module.exports = function (exec, skipClosing) {
	    if (!skipClosing && !SAFE_CLOSING) return false;
	    var safe = false;
	    try {
	      var arr = [7],
	          iter = arr[ITERATOR]();
	      iter.next = function () {
	        return { done: safe = true };
	      };
	      arr[ITERATOR] = function () {
	        return iter;
	      };
	      exec(arr);
	    } catch (e) {/* empty */}
	    return safe;
	  };
	});

	var require$$0$19 = _iterDetect && (typeof _iterDetect === 'undefined' ? 'undefined' : _typeof(_iterDetect)) === 'object' && 'default' in _iterDetect ? _iterDetect['default'] : _iterDetect;

	var _meta = createCommonjsModule(function (module) {
	  var META = require$$20('meta'),
	      isObject = require$$2,
	      has = require$$28,
	      setDesc = require$$6.f,
	      id = 0;
	  var isExtensible = Object.isExtensible || function () {
	    return true;
	  };
	  var FREEZE = !require$$23(function () {
	    return isExtensible(Object.preventExtensions({}));
	  });
	  var setMeta = function setMeta(it) {
	    setDesc(it, META, { value: {
	        i: 'O' + ++id, // object ID
	        w: {} // weak collections IDs
	      } });
	  };
	  var fastKey = function fastKey(it, create) {
	    // return primitive with prefix
	    if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	    if (!has(it, META)) {
	      // can't set metadata to uncaught frozen object
	      if (!isExtensible(it)) return 'F';
	      // not necessary to add metadata
	      if (!create) return 'E';
	      // add missing metadata
	      setMeta(it);
	      // return object ID
	    }return it[META].i;
	  };
	  var getWeak = function getWeak(it, create) {
	    if (!has(it, META)) {
	      // can't set metadata to uncaught frozen object
	      if (!isExtensible(it)) return true;
	      // not necessary to add metadata
	      if (!create) return false;
	      // add missing metadata
	      setMeta(it);
	      // return hash weak collections IDs
	    }return it[META].w;
	  };
	  // add metadata on freeze-family methods calling
	  var onFreeze = function onFreeze(it) {
	    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	    return it;
	  };
	  var meta = module.exports = {
	    KEY: META,
	    NEED: false,
	    fastKey: fastKey,
	    getWeak: getWeak,
	    onFreeze: onFreeze
	  };
	});

	var require$$24 = _meta && (typeof _meta === 'undefined' ? 'undefined' : _typeof(_meta)) === 'object' && 'default' in _meta ? _meta['default'] : _meta;

	var _collection = createCommonjsModule(function (module) {
	  'use strict';

	  var global = require$$29,
	      $export = require$$26,
	      redefine = require$$25,
	      redefineAll = require$$4$2,
	      meta = require$$24,
	      forOf = require$$10$2,
	      anInstance = require$$4$3,
	      isObject = require$$2,
	      fails = require$$23,
	      $iterDetect = require$$0$19,
	      setToStringTag = require$$21,
	      inheritIfRequired = require$$9$1;

	  module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	    var Base = global[NAME],
	        C = Base,
	        ADDER = IS_MAP ? 'set' : 'add',
	        proto = C && C.prototype,
	        O = {};
	    var fixMethod = function fixMethod(KEY) {
	      var fn = proto[KEY];
	      redefine(proto, KEY, KEY == 'delete' ? function (a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a) {
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a) {
	        fn.call(this, a === 0 ? 0 : a);return this;
	      } : function set(a, b) {
	        fn.call(this, a === 0 ? 0 : a, b);return this;
	      });
	    };
	    if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	      new C().entries().next();
	    }))) {
	      // create collection constructor
	      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	      redefineAll(C.prototype, methods);
	      meta.NEED = true;
	    } else {
	      var instance = new C()
	      // early implementations not supports chaining
	      ,
	          HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      ,
	          THROWS_ON_PRIMITIVES = fails(function () {
	        instance.has(1);
	      })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      ,
	          ACCEPT_ITERABLES = $iterDetect(function (iter) {
	        new C(iter);
	      }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      ,
	          BUGGY_ZERO = !IS_WEAK && fails(function () {
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C(),
	            index = 5;
	        while (index--) {
	          $instance[ADDER](index, index);
	        }return !$instance.has(-0);
	      });
	      if (!ACCEPT_ITERABLES) {
	        C = wrapper(function (target, iterable) {
	          anInstance(target, C, NAME);
	          var that = inheritIfRequired(new Base(), target, C);
	          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	          return that;
	        });
	        C.prototype = proto;
	        proto.constructor = C;
	      }
	      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	        fixMethod('delete');
	        fixMethod('has');
	        IS_MAP && fixMethod('get');
	      }
	      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	      // weak collections should not contains .clear method
	      if (IS_WEAK && proto.clear) delete proto.clear;
	    }

	    setToStringTag(C, NAME);

	    O[NAME] = C;
	    $export($export.G + $export.W + $export.F * (C != Base), O);

	    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

	    return C;
	  };
	});

	var require$$0$16 = _collection && (typeof _collection === 'undefined' ? 'undefined' : _typeof(_collection)) === 'object' && 'default' in _collection ? _collection['default'] : _collection;

	var _isArray = createCommonjsModule(function (module) {
	  // 7.2.2 IsArray(argument)
	  var cof = require$$10$1;
	  module.exports = Array.isArray || function isArray(arg) {
	    return cof(arg) == 'Array';
	  };
	});

	var require$$14 = _isArray && (typeof _isArray === 'undefined' ? 'undefined' : _typeof(_isArray)) === 'object' && 'default' in _isArray ? _isArray['default'] : _isArray;

	var _arraySpeciesConstructor = createCommonjsModule(function (module) {
	  var isObject = require$$2,
	      isArray = require$$14,
	      SPECIES = require$$19('species');

	  module.exports = function (original) {
	    var C;
	    if (isArray(original)) {
	      C = original.constructor;
	      // cross-realm fallback
	      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	      if (isObject(C)) {
	        C = C[SPECIES];
	        if (C === null) C = undefined;
	      }
	    }return C === undefined ? Array : C;
	  };
	});

	var require$$0$21 = _arraySpeciesConstructor && (typeof _arraySpeciesConstructor === 'undefined' ? 'undefined' : _typeof(_arraySpeciesConstructor)) === 'object' && 'default' in _arraySpeciesConstructor ? _arraySpeciesConstructor['default'] : _arraySpeciesConstructor;

	var _arraySpeciesCreate = createCommonjsModule(function (module) {
	  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	  var speciesConstructor = require$$0$21;

	  module.exports = function (original, length) {
	    return new (speciesConstructor(original))(length);
	  };
	});

	var require$$0$20 = _arraySpeciesCreate && (typeof _arraySpeciesCreate === 'undefined' ? 'undefined' : _typeof(_arraySpeciesCreate)) === 'object' && 'default' in _arraySpeciesCreate ? _arraySpeciesCreate['default'] : _arraySpeciesCreate;

	var _arrayMethods = createCommonjsModule(function (module) {
	  // 0 -> Array#forEach
	  // 1 -> Array#map
	  // 2 -> Array#filter
	  // 3 -> Array#some
	  // 4 -> Array#every
	  // 5 -> Array#find
	  // 6 -> Array#findIndex
	  var ctx = require$$8,
	      IObject = require$$1$7,
	      toObject = require$$2$2,
	      toLength = require$$0$9,
	      asc = require$$0$20;
	  module.exports = function (TYPE, $create) {
	    var IS_MAP = TYPE == 1,
	        IS_FILTER = TYPE == 2,
	        IS_SOME = TYPE == 3,
	        IS_EVERY = TYPE == 4,
	        IS_FIND_INDEX = TYPE == 6,
	        NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
	        create = $create || asc;
	    return function ($this, callbackfn, that) {
	      var O = toObject($this),
	          self = IObject(O),
	          f = ctx(callbackfn, that, 3),
	          length = toLength(self.length),
	          index = 0,
	          result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
	          val,
	          res;
	      for (; length > index; index++) {
	        if (NO_HOLES || index in self) {
	          val = self[index];
	          res = f(val, index, O);
	          if (TYPE) {
	            if (IS_MAP) result[index] = res; // map
	            else if (res) switch (TYPE) {
	                case 3:
	                  return true; // some
	                case 5:
	                  return val; // find
	                case 6:
	                  return index; // findIndex
	                case 2:
	                  result.push(val); // filter
	              } else if (IS_EVERY) return false; // every
	          }
	        }
	      }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	    };
	  };
	});

	var require$$1$12 = _arrayMethods && (typeof _arrayMethods === 'undefined' ? 'undefined' : _typeof(_arrayMethods)) === 'object' && 'default' in _arrayMethods ? _arrayMethods['default'] : _arrayMethods;

	var _collectionWeak = createCommonjsModule(function (module) {
	  'use strict';

	  var redefineAll = require$$4$2,
	      getWeak = require$$24.getWeak,
	      anObject = require$$13,
	      isObject = require$$2,
	      anInstance = require$$4$3,
	      forOf = require$$10$2,
	      createArrayMethod = require$$1$12,
	      $has = require$$28,
	      arrayFind = createArrayMethod(5),
	      arrayFindIndex = createArrayMethod(6),
	      id = 0;

	  // fallback for uncaught frozen keys
	  var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
	    return that._l || (that._l = new UncaughtFrozenStore());
	  };
	  var UncaughtFrozenStore = function UncaughtFrozenStore() {
	    this.a = [];
	  };
	  var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
	    return arrayFind(store.a, function (it) {
	      return it[0] === key;
	    });
	  };
	  UncaughtFrozenStore.prototype = {
	    get: function get(key) {
	      var entry = findUncaughtFrozen(this, key);
	      if (entry) return entry[1];
	    },
	    has: function has(key) {
	      return !!findUncaughtFrozen(this, key);
	    },
	    set: function set(key, value) {
	      var entry = findUncaughtFrozen(this, key);
	      if (entry) entry[1] = value;else this.a.push([key, value]);
	    },
	    'delete': function _delete(key) {
	      var index = arrayFindIndex(this.a, function (it) {
	        return it[0] === key;
	      });
	      if (~index) this.a.splice(index, 1);
	      return !!~index;
	    }
	  };

	  module.exports = {
	    getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	      var C = wrapper(function (that, iterable) {
	        anInstance(that, C, NAME, '_i');
	        that._i = id++; // collection id
	        that._l = undefined; // leak store for uncaught frozen objects
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	      });
	      redefineAll(C.prototype, {
	        // 23.3.3.2 WeakMap.prototype.delete(key)
	        // 23.4.3.3 WeakSet.prototype.delete(value)
	        'delete': function _delete(key) {
	          if (!isObject(key)) return false;
	          var data = getWeak(key);
	          if (data === true) return uncaughtFrozenStore(this)['delete'](key);
	          return data && $has(data, this._i) && delete data[this._i];
	        },
	        // 23.3.3.4 WeakMap.prototype.has(key)
	        // 23.4.3.4 WeakSet.prototype.has(value)
	        has: function has(key) {
	          if (!isObject(key)) return false;
	          var data = getWeak(key);
	          if (data === true) return uncaughtFrozenStore(this).has(key);
	          return data && $has(data, this._i);
	        }
	      });
	      return C;
	    },
	    def: function def(that, key, value) {
	      var data = getWeak(anObject(key), true);
	      if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
	      return that;
	    },
	    ufstore: uncaughtFrozenStore
	  };
	});

	var require$$1$11 = _collectionWeak && (typeof _collectionWeak === 'undefined' ? 'undefined' : _typeof(_collectionWeak)) === 'object' && 'default' in _collectionWeak ? _collectionWeak['default'] : _collectionWeak;

	var _objectGops = createCommonjsModule(function (module, exports) {
	  exports.f = Object.getOwnPropertySymbols;
	});

	var require$$1$13 = _objectGops && (typeof _objectGops === 'undefined' ? 'undefined' : _typeof(_objectGops)) === 'object' && 'default' in _objectGops ? _objectGops['default'] : _objectGops;

	var _objectAssign = createCommonjsModule(function (module) {
	  'use strict';
	  // 19.1.2.1 Object.assign(target, source, ...)

	  var getKeys = require$$1$4,
	      gOPS = require$$1$13,
	      pIE = require$$0$18,
	      toObject = require$$2$2,
	      IObject = require$$1$7,
	      $assign = Object.assign;

	  // should work with symbols and should have deterministic property order (V8 bug)
	  module.exports = !$assign || require$$23(function () {
	    var A = {},
	        B = {},
	        S = Symbol(),
	        K = 'abcdefghijklmnopqrst';
	    A[S] = 7;
	    K.split('').forEach(function (k) {
	      B[k] = k;
	    });
	    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	  }) ? function assign(target, source) {
	    // eslint-disable-line no-unused-vars
	    var T = toObject(target),
	        aLen = arguments.length,
	        index = 1,
	        getSymbols = gOPS.f,
	        isEnum = pIE.f;
	    while (aLen > index) {
	      var S = IObject(arguments[index++]),
	          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	          length = keys.length,
	          j = 0,
	          key;
	      while (length > j) {
	        if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	      }
	    }return T;
	  } : $assign;
	});

	var require$$0$22 = _objectAssign && (typeof _objectAssign === 'undefined' ? 'undefined' : _typeof(_objectAssign)) === 'object' && 'default' in _objectAssign ? _objectAssign['default'] : _objectAssign;

	var es6_weakMap = createCommonjsModule(function (module) {
	  'use strict';

	  var each = require$$1$12(0),
	      redefine = require$$25,
	      meta = require$$24,
	      assign = require$$0$22,
	      weak = require$$1$11,
	      isObject = require$$2,
	      has = require$$28,
	      getWeak = meta.getWeak,
	      isExtensible = Object.isExtensible,
	      uncaughtFrozenStore = weak.ufstore,
	      tmp = {},
	      InternalMap;

	  var wrapper = function wrapper(get) {
	    return function WeakMap() {
	      return get(this, arguments.length > 0 ? arguments[0] : undefined);
	    };
	  };

	  var methods = {
	    // 23.3.3.3 WeakMap.prototype.get(key)
	    get: function get(key) {
	      if (isObject(key)) {
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(this).get(key);
	        return data ? data[this._i] : undefined;
	      }
	    },
	    // 23.3.3.5 WeakMap.prototype.set(key, value)
	    set: function set(key, value) {
	      return weak.def(this, key, value);
	    }
	  };

	  // 23.3 WeakMap Objects
	  var $WeakMap = module.exports = require$$0$16('WeakMap', wrapper, methods, weak, true, true);

	  // IE11 WeakMap frozen keys fix
	  if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
	    InternalMap = weak.getConstructor(wrapper);
	    assign(InternalMap.prototype, methods);
	    meta.NEED = true;
	    each(['delete', 'has', 'get', 'set'], function (key) {
	      var proto = $WeakMap.prototype,
	          method = proto[key];
	      redefine(proto, key, function (a, b) {
	        // store frozen objects on internal weakmap shim
	        if (isObject(a) && !isExtensible(a)) {
	          if (!this._f) this._f = new InternalMap();
	          var result = this._f[key](a, b);
	          return key == 'set' ? this : result;
	          // store all the rest on native weakmap
	        }return method.call(this, a, b);
	      });
	    });
	  }
	});

	var require$$0$15 = es6_weakMap && (typeof es6_weakMap === 'undefined' ? 'undefined' : _typeof(es6_weakMap)) === 'object' && 'default' in es6_weakMap ? es6_weakMap['default'] : es6_weakMap;

	var _collectionStrong = createCommonjsModule(function (module) {
	  'use strict';

	  var dP = require$$6.f,
	      create = require$$9,
	      hide = require$$0$1,
	      redefineAll = require$$4$2,
	      ctx = require$$8,
	      anInstance = require$$4$3,
	      defined = require$$0$4,
	      forOf = require$$10$2,
	      $iterDefine = require$$0$2,
	      step = require$$3$2,
	      setSpecies = require$$0$14,
	      DESCRIPTORS = require$$27,
	      fastKey = require$$24.fastKey,
	      SIZE = DESCRIPTORS ? '_s' : 'size';

	  var getEntry = function getEntry(that, key) {
	    // fast case
	    var index = fastKey(key),
	        entry;
	    if (index !== 'F') return that._i[index];
	    // frozen object case
	    for (entry = that._f; entry; entry = entry.n) {
	      if (entry.k == key) return entry;
	    }
	  };

	  module.exports = {
	    getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	      var C = wrapper(function (that, iterable) {
	        anInstance(that, C, NAME, '_i');
	        that._i = create(null); // index
	        that._f = undefined; // first entry
	        that._l = undefined; // last entry
	        that[SIZE] = 0; // size
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	      });
	      redefineAll(C.prototype, {
	        // 23.1.3.1 Map.prototype.clear()
	        // 23.2.3.2 Set.prototype.clear()
	        clear: function clear() {
	          for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
	            entry.r = true;
	            if (entry.p) entry.p = entry.p.n = undefined;
	            delete data[entry.i];
	          }
	          that._f = that._l = undefined;
	          that[SIZE] = 0;
	        },
	        // 23.1.3.3 Map.prototype.delete(key)
	        // 23.2.3.4 Set.prototype.delete(value)
	        'delete': function _delete(key) {
	          var that = this,
	              entry = getEntry(that, key);
	          if (entry) {
	            var next = entry.n,
	                prev = entry.p;
	            delete that._i[entry.i];
	            entry.r = true;
	            if (prev) prev.n = next;
	            if (next) next.p = prev;
	            if (that._f == entry) that._f = next;
	            if (that._l == entry) that._l = prev;
	            that[SIZE]--;
	          }return !!entry;
	        },
	        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	        forEach: function forEach(callbackfn /*, that = undefined */) {
	          anInstance(this, C, 'forEach');
	          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
	              entry;
	          while (entry = entry ? entry.n : this._f) {
	            f(entry.v, entry.k, this);
	            // revert to the last existing entry
	            while (entry && entry.r) {
	              entry = entry.p;
	            }
	          }
	        },
	        // 23.1.3.7 Map.prototype.has(key)
	        // 23.2.3.7 Set.prototype.has(value)
	        has: function has(key) {
	          return !!getEntry(this, key);
	        }
	      });
	      if (DESCRIPTORS) dP(C.prototype, 'size', {
	        get: function get() {
	          return defined(this[SIZE]);
	        }
	      });
	      return C;
	    },
	    def: function def(that, key, value) {
	      var entry = getEntry(that, key),
	          prev,
	          index;
	      // change existing entry
	      if (entry) {
	        entry.v = value;
	        // create new entry
	      } else {
	        that._l = entry = {
	          i: index = fastKey(key, true), // <- index
	          k: key, // <- key
	          v: value, // <- value
	          p: prev = that._l, // <- previous entry
	          n: undefined, // <- next entry
	          r: false // <- removed
	        };
	        if (!that._f) that._f = entry;
	        if (prev) prev.n = entry;
	        that[SIZE]++;
	        // add to index
	        if (index !== 'F') that._i[index] = entry;
	      }return that;
	    },
	    getEntry: getEntry,
	    setStrong: function setStrong(C, NAME, IS_MAP) {
	      // add .keys, .values, .entries, [@@iterator]
	      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	      $iterDefine(C, NAME, function (iterated, kind) {
	        this._t = iterated; // target
	        this._k = kind; // kind
	        this._l = undefined; // previous
	      }, function () {
	        var that = this,
	            kind = that._k,
	            entry = that._l;
	        // revert to the last existing entry
	        while (entry && entry.r) {
	          entry = entry.p;
	        } // get next entry
	        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	          // or finish the iteration
	          that._t = undefined;
	          return step(1);
	        }
	        // return step by kind
	        if (kind == 'keys') return step(0, entry.k);
	        if (kind == 'values') return step(0, entry.v);
	        return step(0, [entry.k, entry.v]);
	      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	      // add [@@species], 23.1.2.2, 23.2.2.2
	      setSpecies(NAME);
	    }
	  };
	});

	var require$$1$14 = _collectionStrong && (typeof _collectionStrong === 'undefined' ? 'undefined' : _typeof(_collectionStrong)) === 'object' && 'default' in _collectionStrong ? _collectionStrong['default'] : _collectionStrong;

	var es6_map = createCommonjsModule(function (module) {
	  'use strict';

	  var strong = require$$1$14;

	  // 23.1 Map Objects
	  module.exports = require$$0$16('Map', function (get) {
	    return function Map() {
	      return get(this, arguments.length > 0 ? arguments[0] : undefined);
	    };
	  }, {
	    // 23.1.3.6 Map.prototype.get(key)
	    get: function get(key) {
	      var entry = strong.getEntry(this, key);
	      return entry && entry.v;
	    },
	    // 23.1.3.9 Map.prototype.set(key, value)
	    set: function set(key, value) {
	      return strong.def(this, key === 0 ? 0 : key, value);
	    }
	  }, strong, true);
	});

	var require$$3$3 = es6_map && (typeof es6_map === 'undefined' ? 'undefined' : _typeof(es6_map)) === 'object' && 'default' in es6_map ? es6_map['default'] : es6_map;

	var _metadata = createCommonjsModule(function (module) {
	  var Map = require$$3$3,
	      $export = require$$26,
	      shared = require$$22('metadata'),
	      store = shared.store || (shared.store = new require$$0$15());

	  var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
	    var targetMetadata = store.get(target);
	    if (!targetMetadata) {
	      if (!create) return undefined;
	      store.set(target, targetMetadata = new Map());
	    }
	    var keyMetadata = targetMetadata.get(targetKey);
	    if (!keyMetadata) {
	      if (!create) return undefined;
	      targetMetadata.set(targetKey, keyMetadata = new Map());
	    }return keyMetadata;
	  };
	  var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
	    var metadataMap = getOrCreateMetadataMap(O, P, false);
	    return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	  };
	  var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
	    var metadataMap = getOrCreateMetadataMap(O, P, false);
	    return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	  };
	  var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	    getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	  };
	  var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
	    var metadataMap = getOrCreateMetadataMap(target, targetKey, false),
	        keys = [];
	    if (metadataMap) metadataMap.forEach(function (_, key) {
	      keys.push(key);
	    });
	    return keys;
	  };
	  var toMetaKey = function toMetaKey(it) {
	    return it === undefined || (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : String(it);
	  };
	  var exp = function exp(O) {
	    $export($export.S, 'Reflect', O);
	  };

	  module.exports = {
	    store: store,
	    map: getOrCreateMetadataMap,
	    has: ordinaryHasOwnMetadata,
	    get: ordinaryGetOwnMetadata,
	    set: ordinaryDefineOwnMetadata,
	    keys: ordinaryOwnMetadataKeys,
	    key: toMetaKey,
	    exp: exp
	  };
	});

	var require$$1$10 = _metadata && (typeof _metadata === 'undefined' ? 'undefined' : _typeof(_metadata)) === 'object' && 'default' in _metadata ? _metadata['default'] : _metadata;

	var es7_reflect_metadata = createCommonjsModule(function (module) {
	  var metadata = require$$1$10,
	      anObject = require$$13,
	      aFunction = require$$3,
	      toMetaKey = metadata.key,
	      ordinaryDefineOwnMetadata = metadata.set;

	  metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
	      return function decorator(target, targetKey) {
	        ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
	      };
	    } });
	});

	es7_reflect_metadata && (typeof es7_reflect_metadata === 'undefined' ? 'undefined' : _typeof(es7_reflect_metadata)) === 'object' && 'default' in es7_reflect_metadata ? es7_reflect_metadata['default'] : es7_reflect_metadata;

	var es7_reflect_hasOwnMetadata = createCommonjsModule(function (module) {
	  var metadata = require$$1$10,
	      anObject = require$$13,
	      ordinaryHasOwnMetadata = metadata.has,
	      toMetaKey = metadata.key;

	  metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */) {
	      return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	    } });
	});

	es7_reflect_hasOwnMetadata && (typeof es7_reflect_hasOwnMetadata === 'undefined' ? 'undefined' : _typeof(es7_reflect_hasOwnMetadata)) === 'object' && 'default' in es7_reflect_hasOwnMetadata ? es7_reflect_hasOwnMetadata['default'] : es7_reflect_hasOwnMetadata;

	var es7_reflect_hasMetadata = createCommonjsModule(function (module) {
	  var metadata = require$$1$10,
	      anObject = require$$13,
	      getPrototypeOf = require$$1$3,
	      ordinaryHasOwnMetadata = metadata.has,
	      toMetaKey = metadata.key;

	  var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
	    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	    if (hasOwn) return true;
	    var parent = getPrototypeOf(O);
	    return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	  };

	  metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */) {
	      return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	    } });
	});

	es7_reflect_hasMetadata && (typeof es7_reflect_hasMetadata === 'undefined' ? 'undefined' : _typeof(es7_reflect_hasMetadata)) === 'object' && 'default' in es7_reflect_hasMetadata ? es7_reflect_hasMetadata['default'] : es7_reflect_hasMetadata;

	var es7_reflect_getOwnMetadataKeys = createCommonjsModule(function (module) {
	  var metadata = require$$1$10,
	      anObject = require$$13,
	      ordinaryOwnMetadataKeys = metadata.keys,
	      toMetaKey = metadata.key;

	  metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */) {
	      return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	    } });
	});

	es7_reflect_getOwnMetadataKeys && (typeof es7_reflect_getOwnMetadataKeys === 'undefined' ? 'undefined' : _typeof(es7_reflect_getOwnMetadataKeys)) === 'object' && 'default' in es7_reflect_getOwnMetadataKeys ? es7_reflect_getOwnMetadataKeys['default'] : es7_reflect_getOwnMetadataKeys;

	var es7_reflect_getOwnMetadata = createCommonjsModule(function (module) {
	  var metadata = require$$1$10,
	      anObject = require$$13,
	      ordinaryGetOwnMetadata = metadata.get,
	      toMetaKey = metadata.key;

	  metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */) {
	      return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	    } });
	});

	es7_reflect_getOwnMetadata && (typeof es7_reflect_getOwnMetadata === 'undefined' ? 'undefined' : _typeof(es7_reflect_getOwnMetadata)) === 'object' && 'default' in es7_reflect_getOwnMetadata ? es7_reflect_getOwnMetadata['default'] : es7_reflect_getOwnMetadata;

	var _arrayFromIterable = createCommonjsModule(function (module) {
	  var forOf = require$$10$2;

	  module.exports = function (iter, ITERATOR) {
	    var result = [];
	    forOf(iter, false, result.push, result, ITERATOR);
	    return result;
	  };
	});

	var require$$0$23 = _arrayFromIterable && (typeof _arrayFromIterable === 'undefined' ? 'undefined' : _typeof(_arrayFromIterable)) === 'object' && 'default' in _arrayFromIterable ? _arrayFromIterable['default'] : _arrayFromIterable;

	var es6_set = createCommonjsModule(function (module) {
	  'use strict';

	  var strong = require$$1$14;

	  // 23.2 Set Objects
	  module.exports = require$$0$16('Set', function (get) {
	    return function Set() {
	      return get(this, arguments.length > 0 ? arguments[0] : undefined);
	    };
	  }, {
	    // 23.2.3.1 Set.prototype.add(value)
	    add: function add(value) {
	      return strong.def(this, value = value === 0 ? 0 : value, value);
	    }
	  }, strong);
	});

	var require$$4$4 = es6_set && (typeof es6_set === 'undefined' ? 'undefined' : _typeof(es6_set)) === 'object' && 'default' in es6_set ? es6_set['default'] : es6_set;

	var es7_reflect_getMetadataKeys = createCommonjsModule(function (module) {
	  var Set = require$$4$4,
	      from = require$$0$23,
	      metadata = require$$1$10,
	      anObject = require$$13,
	      getPrototypeOf = require$$1$3,
	      ordinaryOwnMetadataKeys = metadata.keys,
	      toMetaKey = metadata.key;

	  var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
	    var oKeys = ordinaryOwnMetadataKeys(O, P),
	        parent = getPrototypeOf(O);
	    if (parent === null) return oKeys;
	    var pKeys = ordinaryMetadataKeys(parent, P);
	    return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	  };

	  metadata.exp({ getMetadataKeys: function getMetadataKeys(target /*, targetKey */) {
	      return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	    } });
	});

	es7_reflect_getMetadataKeys && (typeof es7_reflect_getMetadataKeys === 'undefined' ? 'undefined' : _typeof(es7_reflect_getMetadataKeys)) === 'object' && 'default' in es7_reflect_getMetadataKeys ? es7_reflect_getMetadataKeys['default'] : es7_reflect_getMetadataKeys;

	var es7_reflect_getMetadata = createCommonjsModule(function (module) {
	  var metadata = require$$1$10,
	      anObject = require$$13,
	      getPrototypeOf = require$$1$3,
	      ordinaryHasOwnMetadata = metadata.has,
	      ordinaryGetOwnMetadata = metadata.get,
	      toMetaKey = metadata.key;

	  var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
	    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	    if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	    var parent = getPrototypeOf(O);
	    return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	  };

	  metadata.exp({ getMetadata: function getMetadata(metadataKey, target /*, targetKey */) {
	      return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	    } });
	});

	es7_reflect_getMetadata && (typeof es7_reflect_getMetadata === 'undefined' ? 'undefined' : _typeof(es7_reflect_getMetadata)) === 'object' && 'default' in es7_reflect_getMetadata ? es7_reflect_getMetadata['default'] : es7_reflect_getMetadata;

	var es7_reflect_deleteMetadata = createCommonjsModule(function (module) {
	  var metadata = require$$1$10,
	      anObject = require$$13,
	      toMetaKey = metadata.key,
	      getOrCreateMetadataMap = metadata.map,
	      store = metadata.store;

	  metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */) {
	      var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]),
	          metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	      if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	      if (metadataMap.size) return true;
	      var targetMetadata = store.get(target);
	      targetMetadata['delete'](targetKey);
	      return !!targetMetadata.size || store['delete'](target);
	    } });
	});

	es7_reflect_deleteMetadata && (typeof es7_reflect_deleteMetadata === 'undefined' ? 'undefined' : _typeof(es7_reflect_deleteMetadata)) === 'object' && 'default' in es7_reflect_deleteMetadata ? es7_reflect_deleteMetadata['default'] : es7_reflect_deleteMetadata;

	var es7_reflect_defineMetadata = createCommonjsModule(function (module) {
	  var metadata = require$$1$10,
	      anObject = require$$13,
	      toMetaKey = metadata.key,
	      ordinaryDefineOwnMetadata = metadata.set;

	  metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	      ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	    } });
	});

	es7_reflect_defineMetadata && (typeof es7_reflect_defineMetadata === 'undefined' ? 'undefined' : _typeof(es7_reflect_defineMetadata)) === 'object' && 'default' in es7_reflect_defineMetadata ? es7_reflect_defineMetadata['default'] : es7_reflect_defineMetadata;

	var es7_math_umulh = createCommonjsModule(function (module) {
	  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	  var $export = require$$26;

	  $export($export.S, 'Math', {
	    umulh: function umulh(u, v) {
	      var UINT16 = 0xffff,
	          $u = +u,
	          $v = +v,
	          u0 = $u & UINT16,
	          v0 = $v & UINT16,
	          u1 = $u >>> 16,
	          v1 = $v >>> 16,
	          t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	      return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	    }
	  });
	});

	es7_math_umulh && (typeof es7_math_umulh === 'undefined' ? 'undefined' : _typeof(es7_math_umulh)) === 'object' && 'default' in es7_math_umulh ? es7_math_umulh['default'] : es7_math_umulh;

	var es7_math_imulh = createCommonjsModule(function (module) {
	  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	  var $export = require$$26;

	  $export($export.S, 'Math', {
	    imulh: function imulh(u, v) {
	      var UINT16 = 0xffff,
	          $u = +u,
	          $v = +v,
	          u0 = $u & UINT16,
	          v0 = $v & UINT16,
	          u1 = $u >> 16,
	          v1 = $v >> 16,
	          t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	      return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	    }
	  });
	});

	es7_math_imulh && (typeof es7_math_imulh === 'undefined' ? 'undefined' : _typeof(es7_math_imulh)) === 'object' && 'default' in es7_math_imulh ? es7_math_imulh['default'] : es7_math_imulh;

	var es7_math_isubh = createCommonjsModule(function (module) {
	  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	  var $export = require$$26;

	  $export($export.S, 'Math', {
	    isubh: function isubh(x0, x1, y0, y1) {
	      var $x0 = x0 >>> 0,
	          $x1 = x1 >>> 0,
	          $y0 = y0 >>> 0;
	      return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	    }
	  });
	});

	es7_math_isubh && (typeof es7_math_isubh === 'undefined' ? 'undefined' : _typeof(es7_math_isubh)) === 'object' && 'default' in es7_math_isubh ? es7_math_isubh['default'] : es7_math_isubh;

	var es7_math_iaddh = createCommonjsModule(function (module) {
	  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	  var $export = require$$26;

	  $export($export.S, 'Math', {
	    iaddh: function iaddh(x0, x1, y0, y1) {
	      var $x0 = x0 >>> 0,
	          $x1 = x1 >>> 0,
	          $y0 = y0 >>> 0;
	      return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	    }
	  });
	});

	es7_math_iaddh && (typeof es7_math_iaddh === 'undefined' ? 'undefined' : _typeof(es7_math_iaddh)) === 'object' && 'default' in es7_math_iaddh ? es7_math_iaddh['default'] : es7_math_iaddh;

	var es7_error_isError = createCommonjsModule(function (module) {
	  // https://github.com/ljharb/proposal-is-error
	  var $export = require$$26,
	      cof = require$$10$1;

	  $export($export.S, 'Error', {
	    isError: function isError(it) {
	      return cof(it) === 'Error';
	    }
	  });
	});

	es7_error_isError && (typeof es7_error_isError === 'undefined' ? 'undefined' : _typeof(es7_error_isError)) === 'object' && 'default' in es7_error_isError ? es7_error_isError['default'] : es7_error_isError;

	var es7_system_global = createCommonjsModule(function (module) {
	  // https://github.com/ljharb/proposal-global
	  var $export = require$$26;

	  $export($export.S, 'System', { global: require$$29 });
	});

	es7_system_global && (typeof es7_system_global === 'undefined' ? 'undefined' : _typeof(es7_system_global)) === 'object' && 'default' in es7_system_global ? es7_system_global['default'] : es7_system_global;

	var _collectionToJson = createCommonjsModule(function (module) {
	  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
	  var classof = require$$2$4,
	      from = require$$0$23;
	  module.exports = function (NAME) {
	    return function toJSON() {
	      if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	      return from(this);
	    };
	  };
	});

	var require$$0$24 = _collectionToJson && (typeof _collectionToJson === 'undefined' ? 'undefined' : _typeof(_collectionToJson)) === 'object' && 'default' in _collectionToJson ? _collectionToJson['default'] : _collectionToJson;

	var es7_set_toJson = createCommonjsModule(function (module) {
	  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
	  var $export = require$$26;

	  $export($export.P + $export.R, 'Set', { toJSON: require$$0$24('Set') });
	});

	es7_set_toJson && (typeof es7_set_toJson === 'undefined' ? 'undefined' : _typeof(es7_set_toJson)) === 'object' && 'default' in es7_set_toJson ? es7_set_toJson['default'] : es7_set_toJson;

	var es7_map_toJson = createCommonjsModule(function (module) {
	  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
	  var $export = require$$26;

	  $export($export.P + $export.R, 'Map', { toJSON: require$$0$24('Map') });
	});

	es7_map_toJson && (typeof es7_map_toJson === 'undefined' ? 'undefined' : _typeof(es7_map_toJson)) === 'object' && 'default' in es7_map_toJson ? es7_map_toJson['default'] : es7_map_toJson;

	var _objectForcedPam = createCommonjsModule(function (module) {
	  // Forced replacement prototype accessors methods
	  module.exports = require$$1$8 || !require$$23(function () {
	    var K = Math.random();
	    // In FF throws only define methods
	    __defineSetter__.call(null, K, function () {/* empty */});
	    delete require$$29[K];
	  });
	});

	var require$$0$25 = _objectForcedPam && (typeof _objectForcedPam === 'undefined' ? 'undefined' : _typeof(_objectForcedPam)) === 'object' && 'default' in _objectForcedPam ? _objectForcedPam['default'] : _objectForcedPam;

	var es7_object_lookupSetter = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      toObject = require$$2$2,
	      toPrimitive = require$$11,
	      getPrototypeOf = require$$1$3,
	      getOwnPropertyDescriptor = require$$7$2.f;

	  // B.2.2.5 Object.prototype.__lookupSetter__(P)
	  require$$27 && $export($export.P + require$$0$25, 'Object', {
	    __lookupSetter__: function __lookupSetter__(P) {
	      var O = toObject(this),
	          K = toPrimitive(P, true),
	          D;
	      do {
	        if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	      } while (O = getPrototypeOf(O));
	    }
	  });
	});

	es7_object_lookupSetter && (typeof es7_object_lookupSetter === 'undefined' ? 'undefined' : _typeof(es7_object_lookupSetter)) === 'object' && 'default' in es7_object_lookupSetter ? es7_object_lookupSetter['default'] : es7_object_lookupSetter;

	var es7_object_lookupGetter = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      toObject = require$$2$2,
	      toPrimitive = require$$11,
	      getPrototypeOf = require$$1$3,
	      getOwnPropertyDescriptor = require$$7$2.f;

	  // B.2.2.4 Object.prototype.__lookupGetter__(P)
	  require$$27 && $export($export.P + require$$0$25, 'Object', {
	    __lookupGetter__: function __lookupGetter__(P) {
	      var O = toObject(this),
	          K = toPrimitive(P, true),
	          D;
	      do {
	        if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	      } while (O = getPrototypeOf(O));
	    }
	  });
	});

	es7_object_lookupGetter && (typeof es7_object_lookupGetter === 'undefined' ? 'undefined' : _typeof(es7_object_lookupGetter)) === 'object' && 'default' in es7_object_lookupGetter ? es7_object_lookupGetter['default'] : es7_object_lookupGetter;

	var es7_object_defineSetter = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      toObject = require$$2$2,
	      aFunction = require$$3,
	      $defineProperty = require$$6;

	  // B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	  require$$27 && $export($export.P + require$$0$25, 'Object', {
	    __defineSetter__: function __defineSetter__(P, setter) {
	      $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	    }
	  });
	});

	es7_object_defineSetter && (typeof es7_object_defineSetter === 'undefined' ? 'undefined' : _typeof(es7_object_defineSetter)) === 'object' && 'default' in es7_object_defineSetter ? es7_object_defineSetter['default'] : es7_object_defineSetter;

	var es7_object_defineGetter = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      toObject = require$$2$2,
	      aFunction = require$$3,
	      $defineProperty = require$$6;

	  // B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	  require$$27 && $export($export.P + require$$0$25, 'Object', {
	    __defineGetter__: function __defineGetter__(P, getter) {
	      $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	    }
	  });
	});

	es7_object_defineGetter && (typeof es7_object_defineGetter === 'undefined' ? 'undefined' : _typeof(es7_object_defineGetter)) === 'object' && 'default' in es7_object_defineGetter ? es7_object_defineGetter['default'] : es7_object_defineGetter;

	var _objectToArray = createCommonjsModule(function (module) {
	  var getKeys = require$$1$4,
	      toIObject = require$$0$10,
	      isEnum = require$$0$18.f;
	  module.exports = function (isEntries) {
	    return function (it) {
	      var O = toIObject(it),
	          keys = getKeys(O),
	          length = keys.length,
	          i = 0,
	          result = [],
	          key;
	      while (length > i) {
	        if (isEnum.call(O, key = keys[i++])) {
	          result.push(isEntries ? [key, O[key]] : O[key]);
	        }
	      }return result;
	    };
	  };
	});

	var require$$0$26 = _objectToArray && (typeof _objectToArray === 'undefined' ? 'undefined' : _typeof(_objectToArray)) === 'object' && 'default' in _objectToArray ? _objectToArray['default'] : _objectToArray;

	var es7_object_entries = createCommonjsModule(function (module) {
	  // https://github.com/tc39/proposal-object-values-entries
	  var $export = require$$26,
	      $entries = require$$0$26(true);

	  $export($export.S, 'Object', {
	    entries: function entries(it) {
	      return $entries(it);
	    }
	  });
	});

	es7_object_entries && (typeof es7_object_entries === 'undefined' ? 'undefined' : _typeof(es7_object_entries)) === 'object' && 'default' in es7_object_entries ? es7_object_entries['default'] : es7_object_entries;

	var es7_object_values = createCommonjsModule(function (module) {
	  // https://github.com/tc39/proposal-object-values-entries
	  var $export = require$$26,
	      $values = require$$0$26(false);

	  $export($export.S, 'Object', {
	    values: function values(it) {
	      return $values(it);
	    }
	  });
	});

	es7_object_values && (typeof es7_object_values === 'undefined' ? 'undefined' : _typeof(es7_object_values)) === 'object' && 'default' in es7_object_values ? es7_object_values['default'] : es7_object_values;

	var _createProperty = createCommonjsModule(function (module) {
	  'use strict';

	  var $defineProperty = require$$6,
	      createDesc = require$$10;

	  module.exports = function (object, index, value) {
	    if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
	  };
	});

	var require$$2$5 = _createProperty && (typeof _createProperty === 'undefined' ? 'undefined' : _typeof(_createProperty)) === 'object' && 'default' in _createProperty ? _createProperty['default'] : _createProperty;

	var _objectGopn = createCommonjsModule(function (module, exports) {
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  var $keys = require$$1$5,
	      hiddenKeys = require$$0$6.concat('length', 'prototype');

	  exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	    return $keys(O, hiddenKeys);
	  };
	});

	var require$$4$5 = _objectGopn && (typeof _objectGopn === 'undefined' ? 'undefined' : _typeof(_objectGopn)) === 'object' && 'default' in _objectGopn ? _objectGopn['default'] : _objectGopn;

	var _ownKeys = createCommonjsModule(function (module) {
	  // all object keys, includes non-enumerable and symbols
	  var gOPN = require$$4$5,
	      gOPS = require$$1$13,
	      anObject = require$$13,
	      Reflect = require$$29.Reflect;
	  module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	    var keys = gOPN.f(anObject(it)),
	        getSymbols = gOPS.f;
	    return getSymbols ? keys.concat(getSymbols(it)) : keys;
	  };
	});

	var require$$0$27 = _ownKeys && (typeof _ownKeys === 'undefined' ? 'undefined' : _typeof(_ownKeys)) === 'object' && 'default' in _ownKeys ? _ownKeys['default'] : _ownKeys;

	var es7_object_getOwnPropertyDescriptors = createCommonjsModule(function (module) {
	  // https://github.com/tc39/proposal-object-getownpropertydescriptors
	  var $export = require$$26,
	      ownKeys = require$$0$27,
	      toIObject = require$$0$10,
	      gOPD = require$$7$2,
	      createProperty = require$$2$5;

	  $export($export.S, 'Object', {
	    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	      var O = toIObject(object),
	          getDesc = gOPD.f,
	          keys = ownKeys(O),
	          result = {},
	          i = 0,
	          key,
	          D;
	      while (keys.length > i) {
	        createProperty(result, key = keys[i++], getDesc(O, key));
	      }return result;
	    }
	  });
	});

	es7_object_getOwnPropertyDescriptors && (typeof es7_object_getOwnPropertyDescriptors === 'undefined' ? 'undefined' : _typeof(es7_object_getOwnPropertyDescriptors)) === 'object' && 'default' in es7_object_getOwnPropertyDescriptors ? es7_object_getOwnPropertyDescriptors['default'] : es7_object_getOwnPropertyDescriptors;

	var _wksExt = createCommonjsModule(function (module, exports) {
	  exports.f = require$$19;
	});

	var require$$18 = _wksExt && (typeof _wksExt === 'undefined' ? 'undefined' : _typeof(_wksExt)) === 'object' && 'default' in _wksExt ? _wksExt['default'] : _wksExt;

	var _wksDefine = createCommonjsModule(function (module) {
	  var global = require$$29,
	      core = require$$1,
	      LIBRARY = require$$1$8,
	      wksExt = require$$18,
	      defineProperty = require$$6.f;
	  module.exports = function (name) {
	    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	  };
	});

	var require$$17 = _wksDefine && (typeof _wksDefine === 'undefined' ? 'undefined' : _typeof(_wksDefine)) === 'object' && 'default' in _wksDefine ? _wksDefine['default'] : _wksDefine;

	var es7_symbol_observable = createCommonjsModule(function (module) {
	  require$$17('observable');
	});

	es7_symbol_observable && (typeof es7_symbol_observable === 'undefined' ? 'undefined' : _typeof(es7_symbol_observable)) === 'object' && 'default' in es7_symbol_observable ? es7_symbol_observable['default'] : es7_symbol_observable;

	var es7_symbol_asyncIterator = createCommonjsModule(function (module) {
	  require$$17('asyncIterator');
	});

	es7_symbol_asyncIterator && (typeof es7_symbol_asyncIterator === 'undefined' ? 'undefined' : _typeof(es7_symbol_asyncIterator)) === 'object' && 'default' in es7_symbol_asyncIterator ? es7_symbol_asyncIterator['default'] : es7_symbol_asyncIterator;

	var _flags = createCommonjsModule(function (module) {
	  'use strict';
	  // 21.2.5.3 get RegExp.prototype.flags

	  var anObject = require$$13;
	  module.exports = function () {
	    var that = anObject(this),
	        result = '';
	    if (that.global) result += 'g';
	    if (that.ignoreCase) result += 'i';
	    if (that.multiline) result += 'm';
	    if (that.unicode) result += 'u';
	    if (that.sticky) result += 'y';
	    return result;
	  };
	});

	var require$$5$1 = _flags && (typeof _flags === 'undefined' ? 'undefined' : _typeof(_flags)) === 'object' && 'default' in _flags ? _flags['default'] : _flags;

	var _isRegexp = createCommonjsModule(function (module) {
	  // 7.2.8 IsRegExp(argument)
	  var isObject = require$$2,
	      cof = require$$10$1,
	      MATCH = require$$19('match');
	  module.exports = function (it) {
	    var isRegExp;
	    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	  };
	});

	var require$$1$15 = _isRegexp && (typeof _isRegexp === 'undefined' ? 'undefined' : _typeof(_isRegexp)) === 'object' && 'default' in _isRegexp ? _isRegexp['default'] : _isRegexp;

	var es7_string_matchAll = createCommonjsModule(function (module) {
	  'use strict';
	  // https://tc39.github.io/String.prototype.matchAll/

	  var $export = require$$26,
	      defined = require$$0$4,
	      toLength = require$$0$9,
	      isRegExp = require$$1$15,
	      getFlags = require$$5$1,
	      RegExpProto = RegExp.prototype;

	  var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
	    this._r = regexp;
	    this._s = string;
	  };

	  require$$0$5($RegExpStringIterator, 'RegExp String', function next() {
	    var match = this._r.exec(this._s);
	    return { value: match, done: match === null };
	  });

	  $export($export.P, 'String', {
	    matchAll: function matchAll(regexp) {
	      defined(this);
	      if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
	      var S = String(this),
	          flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp),
	          rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	      rx.lastIndex = toLength(regexp.lastIndex);
	      return new $RegExpStringIterator(rx, S);
	    }
	  });
	});

	es7_string_matchAll && (typeof es7_string_matchAll === 'undefined' ? 'undefined' : _typeof(es7_string_matchAll)) === 'object' && 'default' in es7_string_matchAll ? es7_string_matchAll['default'] : es7_string_matchAll;

	var _stringWs = createCommonjsModule(function (module) {
	  module.exports = '\t\n\u000b\f\r   ᠎    ' + '         　\u2028\u2029﻿';
	});

	var require$$0$28 = _stringWs && (typeof _stringWs === 'undefined' ? 'undefined' : _typeof(_stringWs)) === 'object' && 'default' in _stringWs ? _stringWs['default'] : _stringWs;

	var _stringTrim = createCommonjsModule(function (module) {
	  var $export = require$$26,
	      defined = require$$0$4,
	      fails = require$$23,
	      spaces = require$$0$28,
	      space = '[' + spaces + ']',
	      non = '​',
	      ltrim = RegExp('^' + space + space + '*'),
	      rtrim = RegExp(space + space + '*$');

	  var exporter = function exporter(KEY, exec, ALIAS) {
	    var exp = {};
	    var FORCE = fails(function () {
	      return !!spaces[KEY]() || non[KEY]() != non;
	    });
	    var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	    if (ALIAS) exp[ALIAS] = fn;
	    $export($export.P + $export.F * FORCE, 'String', exp);
	  };

	  // 1 -> String#trimLeft
	  // 2 -> String#trimRight
	  // 3 -> String#trim
	  var trim = exporter.trim = function (string, TYPE) {
	    string = String(defined(string));
	    if (TYPE & 1) string = string.replace(ltrim, '');
	    if (TYPE & 2) string = string.replace(rtrim, '');
	    return string;
	  };

	  module.exports = exporter;
	});

	var require$$3$4 = _stringTrim && (typeof _stringTrim === 'undefined' ? 'undefined' : _typeof(_stringTrim)) === 'object' && 'default' in _stringTrim ? _stringTrim['default'] : _stringTrim;

	var es7_string_trimRight = createCommonjsModule(function (module) {
	  'use strict';
	  // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

	  require$$3$4('trimRight', function ($trim) {
	    return function trimRight() {
	      return $trim(this, 2);
	    };
	  }, 'trimEnd');
	});

	es7_string_trimRight && (typeof es7_string_trimRight === 'undefined' ? 'undefined' : _typeof(es7_string_trimRight)) === 'object' && 'default' in es7_string_trimRight ? es7_string_trimRight['default'] : es7_string_trimRight;

	var es7_string_trimLeft = createCommonjsModule(function (module) {
	  'use strict';
	  // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

	  require$$3$4('trimLeft', function ($trim) {
	    return function trimLeft() {
	      return $trim(this, 1);
	    };
	  }, 'trimStart');
	});

	es7_string_trimLeft && (typeof es7_string_trimLeft === 'undefined' ? 'undefined' : _typeof(es7_string_trimLeft)) === 'object' && 'default' in es7_string_trimLeft ? es7_string_trimLeft['default'] : es7_string_trimLeft;

	var _stringRepeat = createCommonjsModule(function (module) {
	  'use strict';

	  var toInteger = require$$3$1,
	      defined = require$$0$4;

	  module.exports = function repeat(count) {
	    var str = String(defined(this)),
	        res = '',
	        n = toInteger(count);
	    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	    for (; n > 0; (n >>>= 1) && (str += str)) {
	      if (n & 1) res += str;
	    }return res;
	  };
	});

	var require$$1$16 = _stringRepeat && (typeof _stringRepeat === 'undefined' ? 'undefined' : _typeof(_stringRepeat)) === 'object' && 'default' in _stringRepeat ? _stringRepeat['default'] : _stringRepeat;

	var _stringPad = createCommonjsModule(function (module) {
	  // https://github.com/tc39/proposal-string-pad-start-end
	  var toLength = require$$0$9,
	      repeat = require$$1$16,
	      defined = require$$0$4;

	  module.exports = function (that, maxLength, fillString, left) {
	    var S = String(defined(that)),
	        stringLength = S.length,
	        fillStr = fillString === undefined ? ' ' : String(fillString),
	        intMaxLength = toLength(maxLength);
	    if (intMaxLength <= stringLength || fillStr == '') return S;
	    var fillLen = intMaxLength - stringLength,
	        stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	    return left ? stringFiller + S : S + stringFiller;
	  };
	});

	var require$$0$29 = _stringPad && (typeof _stringPad === 'undefined' ? 'undefined' : _typeof(_stringPad)) === 'object' && 'default' in _stringPad ? _stringPad['default'] : _stringPad;

	var es7_string_padEnd = createCommonjsModule(function (module) {
	  'use strict';
	  // https://github.com/tc39/proposal-string-pad-start-end

	  var $export = require$$26,
	      $pad = require$$0$29;

	  $export($export.P, 'String', {
	    padEnd: function padEnd(maxLength /*, fillString = ' ' */) {
	      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	    }
	  });
	});

	es7_string_padEnd && (typeof es7_string_padEnd === 'undefined' ? 'undefined' : _typeof(es7_string_padEnd)) === 'object' && 'default' in es7_string_padEnd ? es7_string_padEnd['default'] : es7_string_padEnd;

	var es7_string_padStart = createCommonjsModule(function (module) {
	  'use strict';
	  // https://github.com/tc39/proposal-string-pad-start-end

	  var $export = require$$26,
	      $pad = require$$0$29;

	  $export($export.P, 'String', {
	    padStart: function padStart(maxLength /*, fillString = ' ' */) {
	      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	    }
	  });
	});

	es7_string_padStart && (typeof es7_string_padStart === 'undefined' ? 'undefined' : _typeof(es7_string_padStart)) === 'object' && 'default' in es7_string_padStart ? es7_string_padStart['default'] : es7_string_padStart;

	var _stringAt = createCommonjsModule(function (module) {
	  var toInteger = require$$3$1,
	      defined = require$$0$4;
	  // true  -> String#at
	  // false -> String#codePointAt
	  module.exports = function (TO_STRING) {
	    return function (that, pos) {
	      var s = String(defined(that)),
	          i = toInteger(pos),
	          l = s.length,
	          a,
	          b;
	      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	      a = s.charCodeAt(i);
	      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	    };
	  };
	});

	var require$$1$17 = _stringAt && (typeof _stringAt === 'undefined' ? 'undefined' : _typeof(_stringAt)) === 'object' && 'default' in _stringAt ? _stringAt['default'] : _stringAt;

	var es7_string_at = createCommonjsModule(function (module) {
	  'use strict';
	  // https://github.com/mathiasbynens/String.prototype.at

	  var $export = require$$26,
	      $at = require$$1$17(true);

	  $export($export.P, 'String', {
	    at: function at(pos) {
	      return $at(this, pos);
	    }
	  });
	});

	es7_string_at && (typeof es7_string_at === 'undefined' ? 'undefined' : _typeof(es7_string_at)) === 'object' && 'default' in es7_string_at ? es7_string_at['default'] : es7_string_at;

	var es7_array_includes = createCommonjsModule(function (module) {
	  'use strict';
	  // https://github.com/tc39/Array.prototype.includes

	  var $export = require$$26,
	      $includes = require$$1$6(true);

	  $export($export.P, 'Array', {
	    includes: function includes(el /*, fromIndex = 0 */) {
	      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	    }
	  });

	  require$$0$11('includes');
	});

	es7_array_includes && (typeof es7_array_includes === 'undefined' ? 'undefined' : _typeof(es7_array_includes)) === 'object' && 'default' in es7_array_includes ? es7_array_includes['default'] : es7_array_includes;

	var es6_reflect_setPrototypeOf = createCommonjsModule(function (module) {
	  // 26.1.14 Reflect.setPrototypeOf(target, proto)
	  var $export = require$$26,
	      setProto = require$$0$17;

	  if (setProto) $export($export.S, 'Reflect', {
	    setPrototypeOf: function setPrototypeOf(target, proto) {
	      setProto.check(target, proto);
	      try {
	        setProto.set(target, proto);
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }
	  });
	});

	es6_reflect_setPrototypeOf && (typeof es6_reflect_setPrototypeOf === 'undefined' ? 'undefined' : _typeof(es6_reflect_setPrototypeOf)) === 'object' && 'default' in es6_reflect_setPrototypeOf ? es6_reflect_setPrototypeOf['default'] : es6_reflect_setPrototypeOf;

	var es6_reflect_set = createCommonjsModule(function (module) {
	  // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	  var dP = require$$6,
	      gOPD = require$$7$2,
	      getPrototypeOf = require$$1$3,
	      has = require$$28,
	      $export = require$$26,
	      createDesc = require$$10,
	      anObject = require$$13,
	      isObject = require$$2;

	  function set(target, propertyKey, V /*, receiver*/) {
	    var receiver = arguments.length < 4 ? target : arguments[3],
	        ownDesc = gOPD.f(anObject(target), propertyKey),
	        existingDescriptor,
	        proto;
	    if (!ownDesc) {
	      if (isObject(proto = getPrototypeOf(target))) {
	        return set(proto, propertyKey, V, receiver);
	      }
	      ownDesc = createDesc(0);
	    }
	    if (has(ownDesc, 'value')) {
	      if (ownDesc.writable === false || !isObject(receiver)) return false;
	      existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	      existingDescriptor.value = V;
	      dP.f(receiver, propertyKey, existingDescriptor);
	      return true;
	    }
	    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	  }

	  $export($export.S, 'Reflect', { set: set });
	});

	es6_reflect_set && (typeof es6_reflect_set === 'undefined' ? 'undefined' : _typeof(es6_reflect_set)) === 'object' && 'default' in es6_reflect_set ? es6_reflect_set['default'] : es6_reflect_set;

	var es6_reflect_preventExtensions = createCommonjsModule(function (module) {
	  // 26.1.12 Reflect.preventExtensions(target)
	  var $export = require$$26,
	      anObject = require$$13,
	      $preventExtensions = Object.preventExtensions;

	  $export($export.S, 'Reflect', {
	    preventExtensions: function preventExtensions(target) {
	      anObject(target);
	      try {
	        if ($preventExtensions) $preventExtensions(target);
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }
	  });
	});

	es6_reflect_preventExtensions && (typeof es6_reflect_preventExtensions === 'undefined' ? 'undefined' : _typeof(es6_reflect_preventExtensions)) === 'object' && 'default' in es6_reflect_preventExtensions ? es6_reflect_preventExtensions['default'] : es6_reflect_preventExtensions;

	var es6_reflect_ownKeys = createCommonjsModule(function (module) {
	  // 26.1.11 Reflect.ownKeys(target)
	  var $export = require$$26;

	  $export($export.S, 'Reflect', { ownKeys: require$$0$27 });
	});

	es6_reflect_ownKeys && (typeof es6_reflect_ownKeys === 'undefined' ? 'undefined' : _typeof(es6_reflect_ownKeys)) === 'object' && 'default' in es6_reflect_ownKeys ? es6_reflect_ownKeys['default'] : es6_reflect_ownKeys;

	var es6_reflect_isExtensible = createCommonjsModule(function (module) {
	  // 26.1.10 Reflect.isExtensible(target)
	  var $export = require$$26,
	      anObject = require$$13,
	      $isExtensible = Object.isExtensible;

	  $export($export.S, 'Reflect', {
	    isExtensible: function isExtensible(target) {
	      anObject(target);
	      return $isExtensible ? $isExtensible(target) : true;
	    }
	  });
	});

	es6_reflect_isExtensible && (typeof es6_reflect_isExtensible === 'undefined' ? 'undefined' : _typeof(es6_reflect_isExtensible)) === 'object' && 'default' in es6_reflect_isExtensible ? es6_reflect_isExtensible['default'] : es6_reflect_isExtensible;

	var es6_reflect_has = createCommonjsModule(function (module) {
	  // 26.1.9 Reflect.has(target, propertyKey)
	  var $export = require$$26;

	  $export($export.S, 'Reflect', {
	    has: function has(target, propertyKey) {
	      return propertyKey in target;
	    }
	  });
	});

	es6_reflect_has && (typeof es6_reflect_has === 'undefined' ? 'undefined' : _typeof(es6_reflect_has)) === 'object' && 'default' in es6_reflect_has ? es6_reflect_has['default'] : es6_reflect_has;

	var es6_reflect_getPrototypeOf = createCommonjsModule(function (module) {
	  // 26.1.8 Reflect.getPrototypeOf(target)
	  var $export = require$$26,
	      getProto = require$$1$3,
	      anObject = require$$13;

	  $export($export.S, 'Reflect', {
	    getPrototypeOf: function getPrototypeOf(target) {
	      return getProto(anObject(target));
	    }
	  });
	});

	es6_reflect_getPrototypeOf && (typeof es6_reflect_getPrototypeOf === 'undefined' ? 'undefined' : _typeof(es6_reflect_getPrototypeOf)) === 'object' && 'default' in es6_reflect_getPrototypeOf ? es6_reflect_getPrototypeOf['default'] : es6_reflect_getPrototypeOf;

	var es6_reflect_getOwnPropertyDescriptor = createCommonjsModule(function (module) {
	  // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	  var gOPD = require$$7$2,
	      $export = require$$26,
	      anObject = require$$13;

	  $export($export.S, 'Reflect', {
	    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	      return gOPD.f(anObject(target), propertyKey);
	    }
	  });
	});

	es6_reflect_getOwnPropertyDescriptor && (typeof es6_reflect_getOwnPropertyDescriptor === 'undefined' ? 'undefined' : _typeof(es6_reflect_getOwnPropertyDescriptor)) === 'object' && 'default' in es6_reflect_getOwnPropertyDescriptor ? es6_reflect_getOwnPropertyDescriptor['default'] : es6_reflect_getOwnPropertyDescriptor;

	var es6_reflect_get = createCommonjsModule(function (module) {
	  // 26.1.6 Reflect.get(target, propertyKey [, receiver])
	  var gOPD = require$$7$2,
	      getPrototypeOf = require$$1$3,
	      has = require$$28,
	      $export = require$$26,
	      isObject = require$$2,
	      anObject = require$$13;

	  function get(target, propertyKey /*, receiver*/) {
	    var receiver = arguments.length < 3 ? target : arguments[2],
	        desc,
	        proto;
	    if (anObject(target) === receiver) return target[propertyKey];
	    if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
	    if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
	  }

	  $export($export.S, 'Reflect', { get: get });
	});

	es6_reflect_get && (typeof es6_reflect_get === 'undefined' ? 'undefined' : _typeof(es6_reflect_get)) === 'object' && 'default' in es6_reflect_get ? es6_reflect_get['default'] : es6_reflect_get;

	var es6_reflect_enumerate = createCommonjsModule(function (module) {
	  'use strict';
	  // 26.1.5 Reflect.enumerate(target)

	  var $export = require$$26,
	      anObject = require$$13;
	  var Enumerate = function Enumerate(iterated) {
	    this._t = anObject(iterated); // target
	    this._i = 0; // next index
	    var keys = this._k = [] // keys
	    ,
	        key;
	    for (key in iterated) {
	      keys.push(key);
	    }
	  };
	  require$$0$5(Enumerate, 'Object', function () {
	    var that = this,
	        keys = that._k,
	        key;
	    do {
	      if (that._i >= keys.length) return { value: undefined, done: true };
	    } while (!((key = keys[that._i++]) in that._t));
	    return { value: key, done: false };
	  });

	  $export($export.S, 'Reflect', {
	    enumerate: function enumerate(target) {
	      return new Enumerate(target);
	    }
	  });
	});

	es6_reflect_enumerate && (typeof es6_reflect_enumerate === 'undefined' ? 'undefined' : _typeof(es6_reflect_enumerate)) === 'object' && 'default' in es6_reflect_enumerate ? es6_reflect_enumerate['default'] : es6_reflect_enumerate;

	var es6_reflect_deleteProperty = createCommonjsModule(function (module) {
	  // 26.1.4 Reflect.deleteProperty(target, propertyKey)
	  var $export = require$$26,
	      gOPD = require$$7$2.f,
	      anObject = require$$13;

	  $export($export.S, 'Reflect', {
	    deleteProperty: function deleteProperty(target, propertyKey) {
	      var desc = gOPD(anObject(target), propertyKey);
	      return desc && !desc.configurable ? false : delete target[propertyKey];
	    }
	  });
	});

	es6_reflect_deleteProperty && (typeof es6_reflect_deleteProperty === 'undefined' ? 'undefined' : _typeof(es6_reflect_deleteProperty)) === 'object' && 'default' in es6_reflect_deleteProperty ? es6_reflect_deleteProperty['default'] : es6_reflect_deleteProperty;

	var es6_reflect_defineProperty = createCommonjsModule(function (module) {
	  // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	  var dP = require$$6,
	      $export = require$$26,
	      anObject = require$$13,
	      toPrimitive = require$$11;

	  // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	  $export($export.S + $export.F * require$$23(function () {
	    Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
	  }), 'Reflect', {
	    defineProperty: function defineProperty(target, propertyKey, attributes) {
	      anObject(target);
	      propertyKey = toPrimitive(propertyKey, true);
	      anObject(attributes);
	      try {
	        dP.f(target, propertyKey, attributes);
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }
	  });
	});

	es6_reflect_defineProperty && (typeof es6_reflect_defineProperty === 'undefined' ? 'undefined' : _typeof(es6_reflect_defineProperty)) === 'object' && 'default' in es6_reflect_defineProperty ? es6_reflect_defineProperty['default'] : es6_reflect_defineProperty;

	var _bind = createCommonjsModule(function (module) {
	  'use strict';

	  var aFunction = require$$3,
	      isObject = require$$2,
	      invoke = require$$0$12,
	      arraySlice = [].slice,
	      factories = {};

	  var construct = function construct(F, len, args) {
	    if (!(len in factories)) {
	      for (var n = [], i = 0; i < len; i++) {
	        n[i] = 'a[' + i + ']';
	      }factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	    }return factories[len](F, args);
	  };

	  module.exports = Function.bind || function bind(that /*, args... */) {
	    var fn = aFunction(this),
	        partArgs = arraySlice.call(arguments, 1);
	    var bound = function bound() /* args... */{
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	    return bound;
	  };
	});

	var require$$0$30 = _bind && (typeof _bind === 'undefined' ? 'undefined' : _typeof(_bind)) === 'object' && 'default' in _bind ? _bind['default'] : _bind;

	var es6_reflect_construct = createCommonjsModule(function (module) {
	  // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	  var $export = require$$26,
	      create = require$$9,
	      aFunction = require$$3,
	      anObject = require$$13,
	      isObject = require$$2,
	      bind = require$$0$30;

	  // MS Edge supports only 2 arguments
	  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
	  $export($export.S + $export.F * require$$23(function () {
	    function F() {}
	    return !(Reflect.construct(function () {}, [], F) instanceof F);
	  }), 'Reflect', {
	    construct: function construct(Target, args /*, newTarget*/) {
	      aFunction(Target);
	      anObject(args);
	      var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	      if (Target == newTarget) {
	        // w/o altered newTarget, optimization for 0-4 arguments
	        switch (args.length) {
	          case 0:
	            return new Target();
	          case 1:
	            return new Target(args[0]);
	          case 2:
	            return new Target(args[0], args[1]);
	          case 3:
	            return new Target(args[0], args[1], args[2]);
	          case 4:
	            return new Target(args[0], args[1], args[2], args[3]);
	        }
	        // w/o altered newTarget, lot of arguments case
	        var $args = [null];
	        $args.push.apply($args, args);
	        return new (bind.apply(Target, $args))();
	      }
	      // with altered newTarget, not support built-in constructors
	      var proto = newTarget.prototype,
	          instance = create(isObject(proto) ? proto : Object.prototype),
	          result = Function.apply.call(Target, instance, args);
	      return isObject(result) ? result : instance;
	    }
	  });
	});

	es6_reflect_construct && (typeof es6_reflect_construct === 'undefined' ? 'undefined' : _typeof(es6_reflect_construct)) === 'object' && 'default' in es6_reflect_construct ? es6_reflect_construct['default'] : es6_reflect_construct;

	var es6_reflect_apply = createCommonjsModule(function (module) {
	  // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	  var $export = require$$26,
	      aFunction = require$$3,
	      anObject = require$$13,
	      _apply = Function.apply;

	  $export($export.S, 'Reflect', {
	    apply: function apply(target, thisArgument, argumentsList) {
	      return _apply.call(aFunction(target), thisArgument, anObject(argumentsList));
	    }
	  });
	});

	es6_reflect_apply && (typeof es6_reflect_apply === 'undefined' ? 'undefined' : _typeof(es6_reflect_apply)) === 'object' && 'default' in es6_reflect_apply ? es6_reflect_apply['default'] : es6_reflect_apply;

	var _arrayCopyWithin = createCommonjsModule(function (module) {
	  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	  'use strict';

	  var toObject = require$$2$2,
	      toIndex = require$$0$8,
	      toLength = require$$0$9;

	  module.exports = [].copyWithin || function copyWithin(target /*= 0*/, start /*= 0, end = @length*/) {
	    var O = toObject(this),
	        len = toLength(O.length),
	        to = toIndex(target, len),
	        from = toIndex(start, len),
	        end = arguments.length > 2 ? arguments[2] : undefined,
	        count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
	        inc = 1;
	    if (from < to && to < from + count) {
	      inc = -1;
	      from += count - 1;
	      to += count - 1;
	    }
	    while (count-- > 0) {
	      if (from in O) O[to] = O[from];else delete O[to];
	      to += inc;
	      from += inc;
	    }return O;
	  };
	});

	var require$$1$18 = _arrayCopyWithin && (typeof _arrayCopyWithin === 'undefined' ? 'undefined' : _typeof(_arrayCopyWithin)) === 'object' && 'default' in _arrayCopyWithin ? _arrayCopyWithin['default'] : _arrayCopyWithin;

	var _arrayFill = createCommonjsModule(function (module) {
	  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	  'use strict';

	  var toObject = require$$2$2,
	      toIndex = require$$0$8,
	      toLength = require$$0$9;
	  module.exports = function fill(value /*, start = 0, end = @length */) {
	    var O = toObject(this),
	        length = toLength(O.length),
	        aLen = arguments.length,
	        index = toIndex(aLen > 1 ? arguments[1] : undefined, length),
	        end = aLen > 2 ? arguments[2] : undefined,
	        endPos = end === undefined ? length : toIndex(end, length);
	    while (endPos > index) {
	      O[index++] = value;
	    }return O;
	  };
	});

	var require$$1$19 = _arrayFill && (typeof _arrayFill === 'undefined' ? 'undefined' : _typeof(_arrayFill)) === 'object' && 'default' in _arrayFill ? _arrayFill['default'] : _arrayFill;

	var _speciesConstructor = createCommonjsModule(function (module) {
	  // 7.3.20 SpeciesConstructor(O, defaultConstructor)
	  var anObject = require$$13,
	      aFunction = require$$3,
	      SPECIES = require$$19('species');
	  module.exports = function (O, D) {
	    var C = anObject(O).constructor,
	        S;
	    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	  };
	});

	var require$$8$1 = _speciesConstructor && (typeof _speciesConstructor === 'undefined' ? 'undefined' : _typeof(_speciesConstructor)) === 'object' && 'default' in _speciesConstructor ? _speciesConstructor['default'] : _speciesConstructor;

	var core_isIterable = createCommonjsModule(function (module) {
	  var classof = require$$2$4,
	      ITERATOR = require$$19('iterator'),
	      Iterators = require$$1$2;
	  module.exports = require$$1.isIterable = function (it) {
	    var O = Object(it);
	    return O[ITERATOR] !== undefined || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
	  };
	});

	var require$$14$1 = core_isIterable && (typeof core_isIterable === 'undefined' ? 'undefined' : _typeof(core_isIterable)) === 'object' && 'default' in core_isIterable ? core_isIterable['default'] : core_isIterable;

	var _sameValue = createCommonjsModule(function (module) {
	  // 7.2.9 SameValue(x, y)
	  module.exports = Object.is || function is(x, y) {
	    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	  };
	});

	var require$$0$32 = _sameValue && (typeof _sameValue === 'undefined' ? 'undefined' : _typeof(_sameValue)) === 'object' && 'default' in _sameValue ? _sameValue['default'] : _sameValue;

	var _isInteger = createCommonjsModule(function (module) {
	  // 20.1.2.3 Number.isInteger(number)
	  var isObject = require$$2,
	      floor = Math.floor;
	  module.exports = function isInteger(it) {
	    return !isObject(it) && isFinite(it) && floor(it) === it;
	  };
	});

	var require$$0$33 = _isInteger && (typeof _isInteger === 'undefined' ? 'undefined' : _typeof(_isInteger)) === 'object' && 'default' in _isInteger ? _isInteger['default'] : _isInteger;

	var _typed = createCommonjsModule(function (module) {
	  var global = require$$29,
	      hide = require$$0$1,
	      uid = require$$20,
	      TYPED = uid('typed_array'),
	      VIEW = uid('view'),
	      ABV = !!(global.ArrayBuffer && global.DataView),
	      CONSTR = ABV,
	      i = 0,
	      l = 9,
	      Typed;

	  var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

	  while (i < l) {
	    if (Typed = global[TypedArrayConstructors[i++]]) {
	      hide(Typed.prototype, TYPED, true);
	      hide(Typed.prototype, VIEW, true);
	    } else CONSTR = false;
	  }

	  module.exports = {
	    ABV: ABV,
	    CONSTR: CONSTR,
	    TYPED: TYPED,
	    VIEW: VIEW
	  };
	});

	var require$$10$3 = _typed && (typeof _typed === 'undefined' ? 'undefined' : _typeof(_typed)) === 'object' && 'default' in _typed ? _typed['default'] : _typed;

	var _typedBuffer = createCommonjsModule(function (module, exports) {
	  'use strict';

	  var global = require$$29,
	      DESCRIPTORS = require$$27,
	      LIBRARY = require$$1$8,
	      $typed = require$$10$3,
	      hide = require$$0$1,
	      redefineAll = require$$4$2,
	      fails = require$$23,
	      anInstance = require$$4$3,
	      toInteger = require$$3$1,
	      toLength = require$$0$9,
	      gOPN = require$$4$5.f,
	      dP = require$$6.f,
	      arrayFill = require$$1$19,
	      setToStringTag = require$$21,
	      ARRAY_BUFFER = 'ArrayBuffer',
	      DATA_VIEW = 'DataView',
	      PROTOTYPE = 'prototype',
	      WRONG_LENGTH = 'Wrong length!',
	      WRONG_INDEX = 'Wrong index!',
	      $ArrayBuffer = global[ARRAY_BUFFER],
	      $DataView = global[DATA_VIEW],
	      Math = global.Math,
	      parseInt = global.parseInt,
	      RangeError = global.RangeError,
	      Infinity = global.Infinity,
	      BaseBuffer = $ArrayBuffer,
	      abs = Math.abs,
	      pow = Math.pow,
	      min = Math.min,
	      floor = Math.floor,
	      log = Math.log,
	      LN2 = Math.LN2,
	      BUFFER = 'buffer',
	      BYTE_LENGTH = 'byteLength',
	      BYTE_OFFSET = 'byteOffset',
	      $BUFFER = DESCRIPTORS ? '_b' : BUFFER,
	      $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH,
	      $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	  // IEEE754 conversions based on https://github.com/feross/ieee754
	  var packIEEE754 = function packIEEE754(value, mLen, nBytes) {
	    var buffer = Array(nBytes),
	        eLen = nBytes * 8 - mLen - 1,
	        eMax = (1 << eLen) - 1,
	        eBias = eMax >> 1,
	        rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0,
	        i = 0,
	        s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0,
	        e,
	        m,
	        c;
	    value = abs(value);
	    if (value != value || value === Infinity) {
	      m = value != value ? 1 : 0;
	      e = eMax;
	    } else {
	      e = floor(log(value) / LN2);
	      if (value * (c = pow(2, -e)) < 1) {
	        e--;
	        c *= 2;
	      }
	      if (e + eBias >= 1) {
	        value += rt / c;
	      } else {
	        value += rt * pow(2, 1 - eBias);
	      }
	      if (value * c >= 2) {
	        e++;
	        c /= 2;
	      }
	      if (e + eBias >= eMax) {
	        m = 0;
	        e = eMax;
	      } else if (e + eBias >= 1) {
	        m = (value * c - 1) * pow(2, mLen);
	        e = e + eBias;
	      } else {
	        m = value * pow(2, eBias - 1) * pow(2, mLen);
	        e = 0;
	      }
	    }
	    for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}
	    e = e << mLen | m;
	    eLen += mLen;
	    for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}
	    buffer[--i] |= s * 128;
	    return buffer;
	  };
	  var unpackIEEE754 = function unpackIEEE754(buffer, mLen, nBytes) {
	    var eLen = nBytes * 8 - mLen - 1,
	        eMax = (1 << eLen) - 1,
	        eBias = eMax >> 1,
	        nBits = eLen - 7,
	        i = nBytes - 1,
	        s = buffer[i--],
	        e = s & 127,
	        m;
	    s >>= 7;
	    for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}
	    m = e & (1 << -nBits) - 1;
	    e >>= -nBits;
	    nBits += mLen;
	    for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}
	    if (e === 0) {
	      e = 1 - eBias;
	    } else if (e === eMax) {
	      return m ? NaN : s ? -Infinity : Infinity;
	    } else {
	      m = m + pow(2, mLen);
	      e = e - eBias;
	    }return (s ? -1 : 1) * m * pow(2, e - mLen);
	  };

	  var unpackI32 = function unpackI32(bytes) {
	    return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	  };
	  var packI8 = function packI8(it) {
	    return [it & 0xff];
	  };
	  var packI16 = function packI16(it) {
	    return [it & 0xff, it >> 8 & 0xff];
	  };
	  var packI32 = function packI32(it) {
	    return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	  };
	  var packF64 = function packF64(it) {
	    return packIEEE754(it, 52, 8);
	  };
	  var packF32 = function packF32(it) {
	    return packIEEE754(it, 23, 4);
	  };

	  var addGetter = function addGetter(C, key, internal) {
	    dP(C[PROTOTYPE], key, { get: function get() {
	        return this[internal];
	      } });
	  };

	  var get = function get(view, bytes, index, isLittleEndian) {
	    var numIndex = +index,
	        intIndex = toInteger(numIndex);
	    if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	    var store = view[$BUFFER]._b,
	        start = intIndex + view[$OFFSET],
	        pack = store.slice(start, start + bytes);
	    return isLittleEndian ? pack : pack.reverse();
	  };
	  var set = function set(view, bytes, index, conversion, value, isLittleEndian) {
	    var numIndex = +index,
	        intIndex = toInteger(numIndex);
	    if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	    var store = view[$BUFFER]._b,
	        start = intIndex + view[$OFFSET],
	        pack = conversion(+value);
	    for (var i = 0; i < bytes; i++) {
	      store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	    }
	  };

	  var validateArrayBufferArguments = function validateArrayBufferArguments(that, length) {
	    anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	    var numberLength = +length,
	        byteLength = toLength(numberLength);
	    if (numberLength != byteLength) throw RangeError(WRONG_LENGTH);
	    return byteLength;
	  };

	  if (!$typed.ABV) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      var byteLength = validateArrayBufferArguments(this, length);
	      this._b = arrayFill.call(Array(byteLength), 0);
	      this[$LENGTH] = byteLength;
	    };

	    $DataView = function DataView(buffer, byteOffset, byteLength) {
	      anInstance(this, $DataView, DATA_VIEW);
	      anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	      var bufferLength = buffer[$LENGTH],
	          offset = toInteger(byteOffset);
	      if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	      byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	      if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	      this[$BUFFER] = buffer;
	      this[$OFFSET] = offset;
	      this[$LENGTH] = byteLength;
	    };

	    if (DESCRIPTORS) {
	      addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	      addGetter($DataView, BUFFER, '_b');
	      addGetter($DataView, BYTE_LENGTH, '_l');
	      addGetter($DataView, BYTE_OFFSET, '_o');
	    }

	    redefineAll($DataView[PROTOTYPE], {
	      getInt8: function getInt8(byteOffset) {
	        return get(this, 1, byteOffset)[0] << 24 >> 24;
	      },
	      getUint8: function getUint8(byteOffset) {
	        return get(this, 1, byteOffset)[0];
	      },
	      getInt16: function getInt16(byteOffset /*, littleEndian */) {
	        var bytes = get(this, 2, byteOffset, arguments[1]);
	        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	      },
	      getUint16: function getUint16(byteOffset /*, littleEndian */) {
	        var bytes = get(this, 2, byteOffset, arguments[1]);
	        return bytes[1] << 8 | bytes[0];
	      },
	      getInt32: function getInt32(byteOffset /*, littleEndian */) {
	        return unpackI32(get(this, 4, byteOffset, arguments[1]));
	      },
	      getUint32: function getUint32(byteOffset /*, littleEndian */) {
	        return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	      },
	      getFloat32: function getFloat32(byteOffset /*, littleEndian */) {
	        return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	      },
	      getFloat64: function getFloat64(byteOffset /*, littleEndian */) {
	        return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	      },
	      setInt8: function setInt8(byteOffset, value) {
	        set(this, 1, byteOffset, packI8, value);
	      },
	      setUint8: function setUint8(byteOffset, value) {
	        set(this, 1, byteOffset, packI8, value);
	      },
	      setInt16: function setInt16(byteOffset, value /*, littleEndian */) {
	        set(this, 2, byteOffset, packI16, value, arguments[2]);
	      },
	      setUint16: function setUint16(byteOffset, value /*, littleEndian */) {
	        set(this, 2, byteOffset, packI16, value, arguments[2]);
	      },
	      setInt32: function setInt32(byteOffset, value /*, littleEndian */) {
	        set(this, 4, byteOffset, packI32, value, arguments[2]);
	      },
	      setUint32: function setUint32(byteOffset, value /*, littleEndian */) {
	        set(this, 4, byteOffset, packI32, value, arguments[2]);
	      },
	      setFloat32: function setFloat32(byteOffset, value /*, littleEndian */) {
	        set(this, 4, byteOffset, packF32, value, arguments[2]);
	      },
	      setFloat64: function setFloat64(byteOffset, value /*, littleEndian */) {
	        set(this, 8, byteOffset, packF64, value, arguments[2]);
	      }
	    });
	  } else {
	    if (!fails(function () {
	      new $ArrayBuffer(); // eslint-disable-line no-new
	    }) || !fails(function () {
	      new $ArrayBuffer(.5); // eslint-disable-line no-new
	    })) {
	      $ArrayBuffer = function ArrayBuffer(length) {
	        return new BaseBuffer(validateArrayBufferArguments(this, length));
	      };
	      var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	      for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	        if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	      };
	      if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	    }
	    // iOS Safari 7.x bug
	    var view = new $DataView(new $ArrayBuffer(2)),
	        $setInt8 = $DataView[PROTOTYPE].setInt8;
	    view.setInt8(0, 2147483648);
	    view.setInt8(1, 2147483649);
	    if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
	      setInt8: function setInt8(byteOffset, value) {
	        $setInt8.call(this, byteOffset, value << 24 >> 24);
	      },
	      setUint8: function setUint8(byteOffset, value) {
	        $setInt8.call(this, byteOffset, value << 24 >> 24);
	      }
	    }, true);
	  }
	  setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	  setToStringTag($DataView, DATA_VIEW);
	  hide($DataView[PROTOTYPE], $typed.VIEW, true);
	  exports[ARRAY_BUFFER] = $ArrayBuffer;
	  exports[DATA_VIEW] = $DataView;
	});

	var require$$9$2 = _typedBuffer && (typeof _typedBuffer === 'undefined' ? 'undefined' : _typeof(_typedBuffer)) === 'object' && 'default' in _typedBuffer ? _typedBuffer['default'] : _typedBuffer;

	var _typedArray = createCommonjsModule(function (module) {
	  'use strict';

	  if (require$$27) {
	    var LIBRARY = require$$1$8,
	        global = require$$29,
	        fails = require$$23,
	        $export = require$$26,
	        $typed = require$$10$3,
	        $buffer = require$$9$2,
	        ctx = require$$8,
	        anInstance = require$$4$3,
	        propertyDesc = require$$10,
	        hide = require$$0$1,
	        redefineAll = require$$4$2,
	        isInteger = require$$0$33,
	        toInteger = require$$3$1,
	        toLength = require$$0$9,
	        toIndex = require$$0$8,
	        toPrimitive = require$$11,
	        has = require$$28,
	        same = require$$0$32,
	        classof = require$$2$4,
	        isObject = require$$2,
	        toObject = require$$2$2,
	        isArrayIter = require$$4$1,
	        create = require$$9,
	        getPrototypeOf = require$$1$3,
	        gOPN = require$$4$5.f,
	        isIterable = require$$14$1,
	        getIterFn = require$$1$9,
	        uid = require$$20,
	        wks = require$$19,
	        createArrayMethod = require$$1$12,
	        createArrayIncludes = require$$1$6,
	        speciesConstructor = require$$8$1,
	        ArrayIterators = require$$7,
	        Iterators = require$$1$2,
	        $iterDetect = require$$0$19,
	        setSpecies = require$$0$14,
	        arrayFill = require$$1$19,
	        arrayCopyWithin = require$$1$18,
	        $DP = require$$6,
	        $GOPD = require$$7$2,
	        dP = $DP.f,
	        gOPD = $GOPD.f,
	        RangeError = global.RangeError,
	        TypeError = global.TypeError,
	        Uint8Array = global.Uint8Array,
	        ARRAY_BUFFER = 'ArrayBuffer',
	        SHARED_BUFFER = 'Shared' + ARRAY_BUFFER,
	        BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT',
	        PROTOTYPE = 'prototype',
	        ArrayProto = Array[PROTOTYPE],
	        $ArrayBuffer = $buffer.ArrayBuffer,
	        $DataView = $buffer.DataView,
	        arrayForEach = createArrayMethod(0),
	        arrayFilter = createArrayMethod(2),
	        arraySome = createArrayMethod(3),
	        arrayEvery = createArrayMethod(4),
	        arrayFind = createArrayMethod(5),
	        arrayFindIndex = createArrayMethod(6),
	        arrayIncludes = createArrayIncludes(true),
	        arrayIndexOf = createArrayIncludes(false),
	        arrayValues = ArrayIterators.values,
	        arrayKeys = ArrayIterators.keys,
	        arrayEntries = ArrayIterators.entries,
	        arrayLastIndexOf = ArrayProto.lastIndexOf,
	        arrayReduce = ArrayProto.reduce,
	        arrayReduceRight = ArrayProto.reduceRight,
	        arrayJoin = ArrayProto.join,
	        arraySort = ArrayProto.sort,
	        arraySlice = ArrayProto.slice,
	        arrayToString = ArrayProto.toString,
	        arrayToLocaleString = ArrayProto.toLocaleString,
	        ITERATOR = wks('iterator'),
	        TAG = wks('toStringTag'),
	        TYPED_CONSTRUCTOR = uid('typed_constructor'),
	        DEF_CONSTRUCTOR = uid('def_constructor'),
	        ALL_CONSTRUCTORS = $typed.CONSTR,
	        TYPED_ARRAY = $typed.TYPED,
	        VIEW = $typed.VIEW,
	        WRONG_LENGTH = 'Wrong length!';

	    var $map = createArrayMethod(1, function (O, length) {
	      return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	    });

	    var LITTLE_ENDIAN = fails(function () {
	      return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	    });

	    var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
	      new Uint8Array(1).set({});
	    });

	    var strictToLength = function strictToLength(it, SAME) {
	      if (it === undefined) throw TypeError(WRONG_LENGTH);
	      var number = +it,
	          length = toLength(it);
	      if (SAME && !same(number, length)) throw RangeError(WRONG_LENGTH);
	      return length;
	    };

	    var toOffset = function toOffset(it, BYTES) {
	      var offset = toInteger(it);
	      if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	      return offset;
	    };

	    var validate = function validate(it) {
	      if (isObject(it) && TYPED_ARRAY in it) return it;
	      throw TypeError(it + ' is not a typed array!');
	    };

	    var allocate = function allocate(C, length) {
	      if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	        throw TypeError('It is not a typed array constructor!');
	      }return new C(length);
	    };

	    var speciesFromList = function speciesFromList(O, list) {
	      return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	    };

	    var fromList = function fromList(C, list) {
	      var index = 0,
	          length = list.length,
	          result = allocate(C, length);
	      while (length > index) {
	        result[index] = list[index++];
	      }return result;
	    };

	    var addGetter = function addGetter(it, key, internal) {
	      dP(it, key, { get: function get() {
	          return this._d[internal];
	        } });
	    };

	    var $from = function from(source /*, mapfn, thisArg */) {
	      var O = toObject(source),
	          aLen = arguments.length,
	          mapfn = aLen > 1 ? arguments[1] : undefined,
	          mapping = mapfn !== undefined,
	          iterFn = getIterFn(O),
	          i,
	          length,
	          values,
	          result,
	          step,
	          iterator;
	      if (iterFn != undefined && !isArrayIter(iterFn)) {
	        for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	          values.push(step.value);
	        }O = values;
	      }
	      if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	      for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	        result[i] = mapping ? mapfn(O[i], i) : O[i];
	      }
	      return result;
	    };

	    var $of = function of() /*...items*/{
	      var index = 0,
	          length = arguments.length,
	          result = allocate(this, length);
	      while (length > index) {
	        result[index] = arguments[index++];
	      }return result;
	    };

	    // iOS Safari 6.x fails here
	    var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
	      arrayToLocaleString.call(new Uint8Array(1));
	    });

	    var $toLocaleString = function toLocaleString() {
	      return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	    };

	    var proto = {
	      copyWithin: function copyWithin(target, start /*, end */) {
	        return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	      },
	      every: function every(callbackfn /*, thisArg */) {
	        return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	      },
	      fill: function fill(value /*, start, end */) {
	        // eslint-disable-line no-unused-vars
	        return arrayFill.apply(validate(this), arguments);
	      },
	      filter: function filter(callbackfn /*, thisArg */) {
	        return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
	      },
	      find: function find(predicate /*, thisArg */) {
	        return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	      },
	      findIndex: function findIndex(predicate /*, thisArg */) {
	        return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	      },
	      forEach: function forEach(callbackfn /*, thisArg */) {
	        arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	      },
	      indexOf: function indexOf(searchElement /*, fromIndex */) {
	        return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	      },
	      includes: function includes(searchElement /*, fromIndex */) {
	        return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	      },
	      join: function join(separator) {
	        // eslint-disable-line no-unused-vars
	        return arrayJoin.apply(validate(this), arguments);
	      },
	      lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */) {
	        // eslint-disable-line no-unused-vars
	        return arrayLastIndexOf.apply(validate(this), arguments);
	      },
	      map: function map(mapfn /*, thisArg */) {
	        return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	      },
	      reduce: function reduce(callbackfn /*, initialValue */) {
	        // eslint-disable-line no-unused-vars
	        return arrayReduce.apply(validate(this), arguments);
	      },
	      reduceRight: function reduceRight(callbackfn /*, initialValue */) {
	        // eslint-disable-line no-unused-vars
	        return arrayReduceRight.apply(validate(this), arguments);
	      },
	      reverse: function reverse() {
	        var that = this,
	            length = validate(that).length,
	            middle = Math.floor(length / 2),
	            index = 0,
	            value;
	        while (index < middle) {
	          value = that[index];
	          that[index++] = that[--length];
	          that[length] = value;
	        }return that;
	      },
	      some: function some(callbackfn /*, thisArg */) {
	        return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	      },
	      sort: function sort(comparefn) {
	        return arraySort.call(validate(this), comparefn);
	      },
	      subarray: function subarray(begin, end) {
	        var O = validate(this),
	            length = O.length,
	            $begin = toIndex(begin, length);
	        return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toIndex(end, length)) - $begin));
	      }
	    };

	    var $slice = function slice(start, end) {
	      return speciesFromList(this, arraySlice.call(validate(this), start, end));
	    };

	    var $set = function set(arrayLike /*, offset */) {
	      validate(this);
	      var offset = toOffset(arguments[1], 1),
	          length = this.length,
	          src = toObject(arrayLike),
	          len = toLength(src.length),
	          index = 0;
	      if (len + offset > length) throw RangeError(WRONG_LENGTH);
	      while (index < len) {
	        this[offset + index] = src[index++];
	      }
	    };

	    var $iterators = {
	      entries: function entries() {
	        return arrayEntries.call(validate(this));
	      },
	      keys: function keys() {
	        return arrayKeys.call(validate(this));
	      },
	      values: function values() {
	        return arrayValues.call(validate(this));
	      }
	    };

	    var isTAIndex = function isTAIndex(target, key) {
	      return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
	    };
	    var $getDesc = function getOwnPropertyDescriptor(target, key) {
	      return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
	    };
	    var $setDesc = function defineProperty(target, key, desc) {
	      if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
	        target[key] = desc.value;
	        return target;
	      } else return dP(target, key, desc);
	    };

	    if (!ALL_CONSTRUCTORS) {
	      $GOPD.f = $getDesc;
	      $DP.f = $setDesc;
	    }

	    $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	      getOwnPropertyDescriptor: $getDesc,
	      defineProperty: $setDesc
	    });

	    if (fails(function () {
	      arrayToString.call({});
	    })) {
	      arrayToString = arrayToLocaleString = function toString() {
	        return arrayJoin.call(this);
	      };
	    }

	    var $TypedArrayPrototype$ = redefineAll({}, proto);
	    redefineAll($TypedArrayPrototype$, $iterators);
	    hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	    redefineAll($TypedArrayPrototype$, {
	      slice: $slice,
	      set: $set,
	      constructor: function constructor() {/* noop */},
	      toString: arrayToString,
	      toLocaleString: $toLocaleString
	    });
	    addGetter($TypedArrayPrototype$, 'buffer', 'b');
	    addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	    addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	    addGetter($TypedArrayPrototype$, 'length', 'e');
	    dP($TypedArrayPrototype$, TAG, {
	      get: function get() {
	        return this[TYPED_ARRAY];
	      }
	    });

	    module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	      CLAMPED = !!CLAMPED;
	      var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array',
	          ISNT_UINT8 = NAME != 'Uint8Array',
	          GETTER = 'get' + KEY,
	          SETTER = 'set' + KEY,
	          TypedArray = global[NAME],
	          Base = TypedArray || {},
	          TAC = TypedArray && getPrototypeOf(TypedArray),
	          FORCED = !TypedArray || !$typed.ABV,
	          O = {},
	          TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	      var getter = function getter(that, index) {
	        var data = that._d;
	        return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	      };
	      var setter = function setter(that, index, value) {
	        var data = that._d;
	        if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	        data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	      };
	      var addElement = function addElement(that, index) {
	        dP(that, index, {
	          get: function get() {
	            return getter(this, index);
	          },
	          set: function set(value) {
	            return setter(this, index, value);
	          },
	          enumerable: true
	        });
	      };
	      if (FORCED) {
	        TypedArray = wrapper(function (that, data, $offset, $length) {
	          anInstance(that, TypedArray, NAME, '_d');
	          var index = 0,
	              offset = 0,
	              buffer,
	              byteLength,
	              length,
	              klass;
	          if (!isObject(data)) {
	            length = strictToLength(data, true);
	            byteLength = length * BYTES;
	            buffer = new $ArrayBuffer(byteLength);
	          } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	            buffer = data;
	            offset = toOffset($offset, BYTES);
	            var $len = data.byteLength;
	            if ($length === undefined) {
	              if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	              byteLength = $len - offset;
	              if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	            } else {
	              byteLength = toLength($length) * BYTES;
	              if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	            }
	            length = byteLength / BYTES;
	          } else if (TYPED_ARRAY in data) {
	            return fromList(TypedArray, data);
	          } else {
	            return $from.call(TypedArray, data);
	          }
	          hide(that, '_d', {
	            b: buffer,
	            o: offset,
	            l: byteLength,
	            e: length,
	            v: new $DataView(buffer)
	          });
	          while (index < length) {
	            addElement(that, index++);
	          }
	        });
	        TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	        hide(TypedArrayPrototype, 'constructor', TypedArray);
	      } else if (!$iterDetect(function (iter) {
	        // V8 works with iterators, but fails in many other cases
	        // https://code.google.com/p/v8/issues/detail?id=4552
	        new TypedArray(null); // eslint-disable-line no-new
	        new TypedArray(iter); // eslint-disable-line no-new
	      }, true)) {
	        TypedArray = wrapper(function (that, data, $offset, $length) {
	          anInstance(that, TypedArray, NAME);
	          var klass;
	          // `ws` module bug, temporarily remove validation length for Uint8Array
	          // https://github.com/websockets/ws/pull/645
	          if (!isObject(data)) return new Base(strictToLength(data, ISNT_UINT8));
	          if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	            return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
	          }
	          if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	          return $from.call(TypedArray, data);
	        });
	        arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
	          if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	        });
	        TypedArray[PROTOTYPE] = TypedArrayPrototype;
	        if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	      }
	      var $nativeIterator = TypedArrayPrototype[ITERATOR],
	          CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined),
	          $iterator = $iterators.values;
	      hide(TypedArray, TYPED_CONSTRUCTOR, true);
	      hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	      hide(TypedArrayPrototype, VIEW, true);
	      hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	      if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	        dP(TypedArrayPrototype, TAG, {
	          get: function get() {
	            return NAME;
	          }
	        });
	      }

	      O[NAME] = TypedArray;

	      $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	      $export($export.S, NAME, {
	        BYTES_PER_ELEMENT: BYTES,
	        from: $from,
	        of: $of
	      });

	      if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	      $export($export.P, NAME, proto);

	      setSpecies(NAME);

	      $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

	      $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	      $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, { toString: arrayToString });

	      $export($export.P + $export.F * fails(function () {
	        new TypedArray(1).slice();
	      }), NAME, { slice: $slice });

	      $export($export.P + $export.F * (fails(function () {
	        return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	      }) || !fails(function () {
	        TypedArrayPrototype.toLocaleString.call([1, 2]);
	      })), NAME, { toLocaleString: $toLocaleString });

	      Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	      if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	    };
	  } else module.exports = function () {/* empty */};
	});

	var require$$0$31 = _typedArray && (typeof _typedArray === 'undefined' ? 'undefined' : _typeof(_typedArray)) === 'object' && 'default' in _typedArray ? _typedArray['default'] : _typedArray;

	var es6_typed_float64Array = createCommonjsModule(function (module) {
	  require$$0$31('Float64', 8, function (init) {
	    return function Float64Array(data, byteOffset, length) {
	      return init(this, data, byteOffset, length);
	    };
	  });
	});

	es6_typed_float64Array && (typeof es6_typed_float64Array === 'undefined' ? 'undefined' : _typeof(es6_typed_float64Array)) === 'object' && 'default' in es6_typed_float64Array ? es6_typed_float64Array['default'] : es6_typed_float64Array;

	var es6_typed_float32Array = createCommonjsModule(function (module) {
	  require$$0$31('Float32', 4, function (init) {
	    return function Float32Array(data, byteOffset, length) {
	      return init(this, data, byteOffset, length);
	    };
	  });
	});

	es6_typed_float32Array && (typeof es6_typed_float32Array === 'undefined' ? 'undefined' : _typeof(es6_typed_float32Array)) === 'object' && 'default' in es6_typed_float32Array ? es6_typed_float32Array['default'] : es6_typed_float32Array;

	var es6_typed_uint32Array = createCommonjsModule(function (module) {
	  require$$0$31('Uint32', 4, function (init) {
	    return function Uint32Array(data, byteOffset, length) {
	      return init(this, data, byteOffset, length);
	    };
	  });
	});

	es6_typed_uint32Array && (typeof es6_typed_uint32Array === 'undefined' ? 'undefined' : _typeof(es6_typed_uint32Array)) === 'object' && 'default' in es6_typed_uint32Array ? es6_typed_uint32Array['default'] : es6_typed_uint32Array;

	var es6_typed_int32Array = createCommonjsModule(function (module) {
	  require$$0$31('Int32', 4, function (init) {
	    return function Int32Array(data, byteOffset, length) {
	      return init(this, data, byteOffset, length);
	    };
	  });
	});

	es6_typed_int32Array && (typeof es6_typed_int32Array === 'undefined' ? 'undefined' : _typeof(es6_typed_int32Array)) === 'object' && 'default' in es6_typed_int32Array ? es6_typed_int32Array['default'] : es6_typed_int32Array;

	var es6_typed_uint16Array = createCommonjsModule(function (module) {
	  require$$0$31('Uint16', 2, function (init) {
	    return function Uint16Array(data, byteOffset, length) {
	      return init(this, data, byteOffset, length);
	    };
	  });
	});

	es6_typed_uint16Array && (typeof es6_typed_uint16Array === 'undefined' ? 'undefined' : _typeof(es6_typed_uint16Array)) === 'object' && 'default' in es6_typed_uint16Array ? es6_typed_uint16Array['default'] : es6_typed_uint16Array;

	var es6_typed_int16Array = createCommonjsModule(function (module) {
	  require$$0$31('Int16', 2, function (init) {
	    return function Int16Array(data, byteOffset, length) {
	      return init(this, data, byteOffset, length);
	    };
	  });
	});

	es6_typed_int16Array && (typeof es6_typed_int16Array === 'undefined' ? 'undefined' : _typeof(es6_typed_int16Array)) === 'object' && 'default' in es6_typed_int16Array ? es6_typed_int16Array['default'] : es6_typed_int16Array;

	var es6_typed_uint8ClampedArray = createCommonjsModule(function (module) {
	  require$$0$31('Uint8', 1, function (init) {
	    return function Uint8ClampedArray(data, byteOffset, length) {
	      return init(this, data, byteOffset, length);
	    };
	  }, true);
	});

	es6_typed_uint8ClampedArray && (typeof es6_typed_uint8ClampedArray === 'undefined' ? 'undefined' : _typeof(es6_typed_uint8ClampedArray)) === 'object' && 'default' in es6_typed_uint8ClampedArray ? es6_typed_uint8ClampedArray['default'] : es6_typed_uint8ClampedArray;

	var es6_typed_uint8Array = createCommonjsModule(function (module) {
	  require$$0$31('Uint8', 1, function (init) {
	    return function Uint8Array(data, byteOffset, length) {
	      return init(this, data, byteOffset, length);
	    };
	  });
	});

	es6_typed_uint8Array && (typeof es6_typed_uint8Array === 'undefined' ? 'undefined' : _typeof(es6_typed_uint8Array)) === 'object' && 'default' in es6_typed_uint8Array ? es6_typed_uint8Array['default'] : es6_typed_uint8Array;

	var es6_typed_int8Array = createCommonjsModule(function (module) {
	  require$$0$31('Int8', 1, function (init) {
	    return function Int8Array(data, byteOffset, length) {
	      return init(this, data, byteOffset, length);
	    };
	  });
	});

	es6_typed_int8Array && (typeof es6_typed_int8Array === 'undefined' ? 'undefined' : _typeof(es6_typed_int8Array)) === 'object' && 'default' in es6_typed_int8Array ? es6_typed_int8Array['default'] : es6_typed_int8Array;

	var es6_typed_dataView = createCommonjsModule(function (module) {
	  var $export = require$$26;
	  $export($export.G + $export.W + $export.F * !require$$10$3.ABV, {
	    DataView: require$$9$2.DataView
	  });
	});

	es6_typed_dataView && (typeof es6_typed_dataView === 'undefined' ? 'undefined' : _typeof(es6_typed_dataView)) === 'object' && 'default' in es6_typed_dataView ? es6_typed_dataView['default'] : es6_typed_dataView;

	var es6_typed_arrayBuffer = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      $typed = require$$10$3,
	      buffer = require$$9$2,
	      anObject = require$$13,
	      toIndex = require$$0$8,
	      toLength = require$$0$9,
	      isObject = require$$2,
	      TYPED_ARRAY = require$$19('typed_array'),
	      ArrayBuffer = require$$29.ArrayBuffer,
	      speciesConstructor = require$$8$1,
	      $ArrayBuffer = buffer.ArrayBuffer,
	      $DataView = buffer.DataView,
	      $isView = $typed.ABV && ArrayBuffer.isView,
	      $slice = $ArrayBuffer.prototype.slice,
	      VIEW = $typed.VIEW,
	      ARRAY_BUFFER = 'ArrayBuffer';

	  $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

	  $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	    // 24.1.3.1 ArrayBuffer.isView(arg)
	    isView: function isView(it) {
	      return $isView && $isView(it) || isObject(it) && VIEW in it;
	    }
	  });

	  $export($export.P + $export.U + $export.F * require$$23(function () {
	    return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	  }), ARRAY_BUFFER, {
	    // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	    slice: function slice(start, end) {
	      if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	      var len = anObject(this).byteLength,
	          first = toIndex(start, len),
	          final = toIndex(end === undefined ? len : end, len),
	          result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first)),
	          viewS = new $DataView(this),
	          viewT = new $DataView(result),
	          index = 0;
	      while (first < final) {
	        viewT.setUint8(index++, viewS.getUint8(first++));
	      }return result;
	    }
	  });

	  require$$0$14(ARRAY_BUFFER);
	});

	es6_typed_arrayBuffer && (typeof es6_typed_arrayBuffer === 'undefined' ? 'undefined' : _typeof(es6_typed_arrayBuffer)) === 'object' && 'default' in es6_typed_arrayBuffer ? es6_typed_arrayBuffer['default'] : es6_typed_arrayBuffer;

	var es6_weakSet = createCommonjsModule(function (module) {
	  'use strict';

	  var weak = require$$1$11;

	  // 23.4 WeakSet Objects
	  require$$0$16('WeakSet', function (get) {
	    return function WeakSet() {
	      return get(this, arguments.length > 0 ? arguments[0] : undefined);
	    };
	  }, {
	    // 23.4.3.1 WeakSet.prototype.add(value)
	    add: function add(value) {
	      return weak.def(this, value, true);
	    }
	  }, weak, false, true);
	});

	es6_weakSet && (typeof es6_weakSet === 'undefined' ? 'undefined' : _typeof(es6_weakSet)) === 'object' && 'default' in es6_weakSet ? es6_weakSet['default'] : es6_weakSet;

	var es6_promise = createCommonjsModule(function (module) {
	  'use strict';

	  var LIBRARY = require$$1$8,
	      global = require$$29,
	      ctx = require$$8,
	      classof = require$$2$4,
	      $export = require$$26,
	      isObject = require$$2,
	      anObject = require$$13,
	      aFunction = require$$3,
	      anInstance = require$$4$3,
	      forOf = require$$10$2,
	      setProto = require$$0$17.set,
	      speciesConstructor = require$$8$1,
	      task = require$$7$1.set,
	      microtask = require$$6$1(),
	      PROMISE = 'Promise',
	      TypeError = global.TypeError,
	      process = global.process,
	      $Promise = global[PROMISE],
	      process = global.process,
	      isNode = classof(process) == 'process',
	      empty = function empty() {/* empty */},
	      Internal,
	      GenericPromiseCapability,
	      Wrapper;

	  var USE_NATIVE = !!function () {
	    try {
	      // correct subclassing with @@species support
	      var promise = $Promise.resolve(1),
	          FakePromise = (promise.constructor = {})[require$$19('species')] = function (exec) {
	        exec(empty, empty);
	      };
	      // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	      return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	    } catch (e) {/* empty */}
	  }();

	  // helpers
	  var sameConstructor = function sameConstructor(a, b) {
	    // with library wrapper special case
	    return a === b || a === $Promise && b === Wrapper;
	  };
	  var isThenable = function isThenable(it) {
	    var then;
	    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	  };
	  var newPromiseCapability = function newPromiseCapability(C) {
	    return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	  };
	  var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	    var resolve, reject;
	    this.promise = new C(function ($$resolve, $$reject) {
	      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	      resolve = $$resolve;
	      reject = $$reject;
	    });
	    this.resolve = aFunction(resolve);
	    this.reject = aFunction(reject);
	  };
	  var perform = function perform(exec) {
	    try {
	      exec();
	    } catch (e) {
	      return { error: e };
	    }
	  };
	  var notify = function notify(promise, isReject) {
	    if (promise._n) return;
	    promise._n = true;
	    var chain = promise._c;
	    microtask(function () {
	      var value = promise._v,
	          ok = promise._s == 1,
	          i = 0;
	      var run = function run(reaction) {
	        var handler = ok ? reaction.ok : reaction.fail,
	            resolve = reaction.resolve,
	            reject = reaction.reject,
	            domain = reaction.domain,
	            result,
	            then;
	        try {
	          if (handler) {
	            if (!ok) {
	              if (promise._h == 2) onHandleUnhandled(promise);
	              promise._h = 1;
	            }
	            if (handler === true) result = value;else {
	              if (domain) domain.enter();
	              result = handler(value);
	              if (domain) domain.exit();
	            }
	            if (result === reaction.promise) {
	              reject(TypeError('Promise-chain cycle'));
	            } else if (then = isThenable(result)) {
	              then.call(result, resolve, reject);
	            } else resolve(result);
	          } else reject(value);
	        } catch (e) {
	          reject(e);
	        }
	      };
	      while (chain.length > i) {
	        run(chain[i++]);
	      } // variable length - can't use forEach
	      promise._c = [];
	      promise._n = false;
	      if (isReject && !promise._h) onUnhandled(promise);
	    });
	  };
	  var onUnhandled = function onUnhandled(promise) {
	    task.call(global, function () {
	      var value = promise._v,
	          abrupt,
	          handler,
	          console;
	      if (isUnhandled(promise)) {
	        abrupt = perform(function () {
	          if (isNode) {
	            process.emit('unhandledRejection', value, promise);
	          } else if (handler = global.onunhandledrejection) {
	            handler({ promise: promise, reason: value });
	          } else if ((console = global.console) && console.error) {
	            console.error('Unhandled promise rejection', value);
	          }
	        });
	        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	      }promise._a = undefined;
	      if (abrupt) throw abrupt.error;
	    });
	  };
	  var isUnhandled = function isUnhandled(promise) {
	    if (promise._h == 1) return false;
	    var chain = promise._a || promise._c,
	        i = 0,
	        reaction;
	    while (chain.length > i) {
	      reaction = chain[i++];
	      if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	    }return true;
	  };
	  var onHandleUnhandled = function onHandleUnhandled(promise) {
	    task.call(global, function () {
	      var handler;
	      if (isNode) {
	        process.emit('rejectionHandled', promise);
	      } else if (handler = global.onrejectionhandled) {
	        handler({ promise: promise, reason: promise._v });
	      }
	    });
	  };
	  var $reject = function $reject(value) {
	    var promise = this;
	    if (promise._d) return;
	    promise._d = true;
	    promise = promise._w || promise; // unwrap
	    promise._v = value;
	    promise._s = 2;
	    if (!promise._a) promise._a = promise._c.slice();
	    notify(promise, true);
	  };
	  var $resolve = function $resolve(value) {
	    var promise = this,
	        then;
	    if (promise._d) return;
	    promise._d = true;
	    promise = promise._w || promise; // unwrap
	    try {
	      if (promise === value) throw TypeError("Promise can't be resolved itself");
	      if (then = isThenable(value)) {
	        microtask(function () {
	          var wrapper = { _w: promise, _d: false }; // wrap
	          try {
	            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	          } catch (e) {
	            $reject.call(wrapper, e);
	          }
	        });
	      } else {
	        promise._v = value;
	        promise._s = 1;
	        notify(promise, false);
	      }
	    } catch (e) {
	      $reject.call({ _w: promise, _d: false }, e); // wrap
	    }
	  };

	  // constructor polyfill
	  if (!USE_NATIVE) {
	    // 25.4.3.1 Promise(executor)
	    $Promise = function Promise(executor) {
	      anInstance(this, $Promise, PROMISE, '_h');
	      aFunction(executor);
	      Internal.call(this);
	      try {
	        executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	      } catch (err) {
	        $reject.call(this, err);
	      }
	    };
	    Internal = function Promise(executor) {
	      this._c = []; // <- awaiting reactions
	      this._a = undefined; // <- checked in isUnhandled reactions
	      this._s = 0; // <- state
	      this._d = false; // <- done
	      this._v = undefined; // <- value
	      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	      this._n = false; // <- notify
	    };
	    Internal.prototype = require$$4$2($Promise.prototype, {
	      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	      then: function then(onFulfilled, onRejected) {
	        var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	        reaction.fail = typeof onRejected == 'function' && onRejected;
	        reaction.domain = isNode ? process.domain : undefined;
	        this._c.push(reaction);
	        if (this._a) this._a.push(reaction);
	        if (this._s) notify(this, false);
	        return reaction.promise;
	      },
	      // 25.4.5.1 Promise.prototype.catch(onRejected)
	      'catch': function _catch(onRejected) {
	        return this.then(undefined, onRejected);
	      }
	    });
	    PromiseCapability = function PromiseCapability() {
	      var promise = new Internal();
	      this.promise = promise;
	      this.resolve = ctx($resolve, promise, 1);
	      this.reject = ctx($reject, promise, 1);
	    };
	  }

	  $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	  require$$21($Promise, PROMISE);
	  require$$0$14(PROMISE);
	  Wrapper = require$$1[PROMISE];

	  // statics
	  $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	    // 25.4.4.5 Promise.reject(r)
	    reject: function reject(r) {
	      var capability = newPromiseCapability(this),
	          $$reject = capability.reject;
	      $$reject(r);
	      return capability.promise;
	    }
	  });
	  $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	    // 25.4.4.6 Promise.resolve(x)
	    resolve: function resolve(x) {
	      // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	      if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	      var capability = newPromiseCapability(this),
	          $$resolve = capability.resolve;
	      $$resolve(x);
	      return capability.promise;
	    }
	  });
	  $export($export.S + $export.F * !(USE_NATIVE && require$$0$19(function (iter) {
	    $Promise.all(iter)['catch'](empty);
	  })), PROMISE, {
	    // 25.4.4.1 Promise.all(iterable)
	    all: function all(iterable) {
	      var C = this,
	          capability = newPromiseCapability(C),
	          resolve = capability.resolve,
	          reject = capability.reject;
	      var abrupt = perform(function () {
	        var values = [],
	            index = 0,
	            remaining = 1;
	        forOf(iterable, false, function (promise) {
	          var $index = index++,
	              alreadyCalled = false;
	          values.push(undefined);
	          remaining++;
	          C.resolve(promise).then(function (value) {
	            if (alreadyCalled) return;
	            alreadyCalled = true;
	            values[$index] = value;
	            --remaining || resolve(values);
	          }, reject);
	        });
	        --remaining || resolve(values);
	      });
	      if (abrupt) reject(abrupt.error);
	      return capability.promise;
	    },
	    // 25.4.4.4 Promise.race(iterable)
	    race: function race(iterable) {
	      var C = this,
	          capability = newPromiseCapability(C),
	          reject = capability.reject;
	      var abrupt = perform(function () {
	        forOf(iterable, false, function (promise) {
	          C.resolve(promise).then(capability.resolve, reject);
	        });
	      });
	      if (abrupt) reject(abrupt.error);
	      return capability.promise;
	    }
	  });
	});

	es6_promise && (typeof es6_promise === 'undefined' ? 'undefined' : _typeof(es6_promise)) === 'object' && 'default' in es6_promise ? es6_promise['default'] : es6_promise;

	var _fixReWks = createCommonjsModule(function (module) {
	  'use strict';

	  var hide = require$$0$1,
	      redefine = require$$25,
	      fails = require$$23,
	      defined = require$$0$4,
	      wks = require$$19;

	  module.exports = function (KEY, length, exec) {
	    var SYMBOL = wks(KEY),
	        fns = exec(defined, SYMBOL, ''[KEY]),
	        strfn = fns[0],
	        rxfn = fns[1];
	    if (fails(function () {
	      var O = {};
	      O[SYMBOL] = function () {
	        return 7;
	      };
	      return ''[KEY](O) != 7;
	    })) {
	      redefine(String.prototype, KEY, strfn);
	      hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) {
	        return rxfn.call(string, this, arg);
	      }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) {
	        return rxfn.call(string, this);
	      });
	    }
	  };
	});

	var require$$0$34 = _fixReWks && (typeof _fixReWks === 'undefined' ? 'undefined' : _typeof(_fixReWks)) === 'object' && 'default' in _fixReWks ? _fixReWks['default'] : _fixReWks;

	var es6_regexp_split = createCommonjsModule(function (module) {
	  // @@split logic
	  require$$0$34('split', 2, function (defined, SPLIT, $split) {
	    'use strict';

	    var isRegExp = require$$1$15,
	        _split = $split,
	        $push = [].push,
	        $SPLIT = 'split',
	        LENGTH = 'length',
	        LAST_INDEX = 'lastIndex';
	    if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
	      var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	      // based on es5-shim implementation, need to rework it
	      $split = function $split(separator, limit) {
	        var string = String(this);
	        if (separator === undefined && limit === 0) return [];
	        // If `separator` is not a regex, use native split
	        if (!isRegExp(separator)) return _split.call(string, separator, limit);
	        var output = [];
	        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
	        var lastLastIndex = 0;
	        var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	        // Make `global` and avoid `lastIndex` issues by working with a copy
	        var separatorCopy = new RegExp(separator.source, flags + 'g');
	        var separator2, match, lastIndex, lastLength, i;
	        // Doesn't need flags gy, but they don't hurt
	        if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	        while (match = separatorCopy.exec(string)) {
	          // `separatorCopy.lastIndex` is not reliable cross-browser
	          lastIndex = match.index + match[0][LENGTH];
	          if (lastIndex > lastLastIndex) {
	            output.push(string.slice(lastLastIndex, match.index));
	            // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	            if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
	              for (i = 1; i < arguments[LENGTH] - 2; i++) {
	                if (arguments[i] === undefined) match[i] = undefined;
	              }
	            });
	            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	            lastLength = match[0][LENGTH];
	            lastLastIndex = lastIndex;
	            if (output[LENGTH] >= splitLimit) break;
	          }
	          if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	        }
	        if (lastLastIndex === string[LENGTH]) {
	          if (lastLength || !separatorCopy.test('')) output.push('');
	        } else output.push(string.slice(lastLastIndex));
	        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	      };
	      // Chakra, V8
	    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	      $split = function $split(separator, limit) {
	        return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	      };
	    }
	    // 21.1.3.17 String.prototype.split(separator, limit)
	    return [function split(separator, limit) {
	      var O = defined(this),
	          fn = separator == undefined ? undefined : separator[SPLIT];
	      return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	    }, $split];
	  });
	});

	es6_regexp_split && (typeof es6_regexp_split === 'undefined' ? 'undefined' : _typeof(es6_regexp_split)) === 'object' && 'default' in es6_regexp_split ? es6_regexp_split['default'] : es6_regexp_split;

	var es6_regexp_search = createCommonjsModule(function (module) {
	  // @@search logic
	  require$$0$34('search', 1, function (defined, SEARCH, $search) {
	    // 21.1.3.15 String.prototype.search(regexp)
	    return [function search(regexp) {
	      'use strict';

	      var O = defined(this),
	          fn = regexp == undefined ? undefined : regexp[SEARCH];
	      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	    }, $search];
	  });
	});

	es6_regexp_search && (typeof es6_regexp_search === 'undefined' ? 'undefined' : _typeof(es6_regexp_search)) === 'object' && 'default' in es6_regexp_search ? es6_regexp_search['default'] : es6_regexp_search;

	var es6_regexp_replace = createCommonjsModule(function (module) {
	  // @@replace logic
	  require$$0$34('replace', 2, function (defined, REPLACE, $replace) {
	    // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	    return [function replace(searchValue, replaceValue) {
	      'use strict';

	      var O = defined(this),
	          fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
	    }, $replace];
	  });
	});

	es6_regexp_replace && (typeof es6_regexp_replace === 'undefined' ? 'undefined' : _typeof(es6_regexp_replace)) === 'object' && 'default' in es6_regexp_replace ? es6_regexp_replace['default'] : es6_regexp_replace;

	var es6_regexp_match = createCommonjsModule(function (module) {
	  // @@match logic
	  require$$0$34('match', 1, function (defined, MATCH, $match) {
	    // 21.1.3.11 String.prototype.match(regexp)
	    return [function match(regexp) {
	      'use strict';

	      var O = defined(this),
	          fn = regexp == undefined ? undefined : regexp[MATCH];
	      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	    }, $match];
	  });
	});

	es6_regexp_match && (typeof es6_regexp_match === 'undefined' ? 'undefined' : _typeof(es6_regexp_match)) === 'object' && 'default' in es6_regexp_match ? es6_regexp_match['default'] : es6_regexp_match;

	var es6_regexp_flags = createCommonjsModule(function (module) {
	  // 21.2.5.3 get RegExp.prototype.flags()
	  if (require$$27 && /./g.flags != 'g') require$$6.f(RegExp.prototype, 'flags', {
	    configurable: true,
	    get: require$$5$1
	  });
	});

	es6_regexp_flags && (typeof es6_regexp_flags === 'undefined' ? 'undefined' : _typeof(es6_regexp_flags)) === 'object' && 'default' in es6_regexp_flags ? es6_regexp_flags['default'] : es6_regexp_flags;

	var es6_regexp_toString = createCommonjsModule(function (module) {
	  'use strict';

	  var anObject = require$$13,
	      $flags = require$$5$1,
	      DESCRIPTORS = require$$27,
	      TO_STRING = 'toString',
	      $toString = /./[TO_STRING];

	  var define = function define(fn) {
	    require$$25(RegExp.prototype, TO_STRING, fn, true);
	  };

	  // 21.2.5.14 RegExp.prototype.toString()
	  if (require$$23(function () {
	    return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
	  })) {
	    define(function toString() {
	      var R = anObject(this);
	      return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	    });
	    // FF44- RegExp#toString has a wrong name
	  } else if ($toString.name != TO_STRING) {
	    define(function toString() {
	      return $toString.call(this);
	    });
	  }
	});

	es6_regexp_toString && (typeof es6_regexp_toString === 'undefined' ? 'undefined' : _typeof(es6_regexp_toString)) === 'object' && 'default' in es6_regexp_toString ? es6_regexp_toString['default'] : es6_regexp_toString;

	var es6_regexp_constructor = createCommonjsModule(function (module) {
	  var global = require$$29,
	      inheritIfRequired = require$$9$1,
	      dP = require$$6.f,
	      gOPN = require$$4$5.f,
	      isRegExp = require$$1$15,
	      $flags = require$$5$1,
	      $RegExp = global.RegExp,
	      Base = $RegExp,
	      proto = $RegExp.prototype,
	      re1 = /a/g,
	      re2 = /a/g
	  // "new" creates a new object, old webkit buggy here
	  ,
	      CORRECT_NEW = new $RegExp(re1) !== re1;

	  if (require$$27 && (!CORRECT_NEW || require$$23(function () {
	    re2[require$$19('match')] = false;
	    // RegExp constructor can alter flags and IsRegExp works correct with @@match
	    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	  }))) {
	    $RegExp = function RegExp(p, f) {
	      var tiRE = this instanceof $RegExp,
	          piRE = isRegExp(p),
	          fiU = f === undefined;
	      return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
	    };
	    var proxy = function proxy(key) {
	      key in $RegExp || dP($RegExp, key, {
	        configurable: true,
	        get: function get() {
	          return Base[key];
	        },
	        set: function set(it) {
	          Base[key] = it;
	        }
	      });
	    };
	    for (var keys = gOPN(Base), i = 0; keys.length > i;) {
	      proxy(keys[i++]);
	    }proto.constructor = $RegExp;
	    $RegExp.prototype = proto;
	    require$$25(global, 'RegExp', $RegExp);
	  }

	  require$$0$14('RegExp');
	});

	es6_regexp_constructor && (typeof es6_regexp_constructor === 'undefined' ? 'undefined' : _typeof(es6_regexp_constructor)) === 'object' && 'default' in es6_regexp_constructor ? es6_regexp_constructor['default'] : es6_regexp_constructor;

	var es6_array_species = createCommonjsModule(function (module) {
	  require$$0$14('Array');
	});

	es6_array_species && (typeof es6_array_species === 'undefined' ? 'undefined' : _typeof(es6_array_species)) === 'object' && 'default' in es6_array_species ? es6_array_species['default'] : es6_array_species;

	var es6_array_findIndex = createCommonjsModule(function (module) {
	  'use strict';
	  // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

	  var $export = require$$26,
	      $find = require$$1$12(6),
	      KEY = 'findIndex',
	      forced = true;
	  // Shouldn't skip holes
	  if (KEY in []) Array(1)[KEY](function () {
	    forced = false;
	  });
	  $export($export.P + $export.F * forced, 'Array', {
	    findIndex: function findIndex(callbackfn /*, that = undefined */) {
	      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    }
	  });
	  require$$0$11(KEY);
	});

	es6_array_findIndex && (typeof es6_array_findIndex === 'undefined' ? 'undefined' : _typeof(es6_array_findIndex)) === 'object' && 'default' in es6_array_findIndex ? es6_array_findIndex['default'] : es6_array_findIndex;

	var es6_array_find = createCommonjsModule(function (module) {
	  'use strict';
	  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

	  var $export = require$$26,
	      $find = require$$1$12(5),
	      KEY = 'find',
	      forced = true;
	  // Shouldn't skip holes
	  if (KEY in []) Array(1)[KEY](function () {
	    forced = false;
	  });
	  $export($export.P + $export.F * forced, 'Array', {
	    find: function find(callbackfn /*, that = undefined */) {
	      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    }
	  });
	  require$$0$11(KEY);
	});

	es6_array_find && (typeof es6_array_find === 'undefined' ? 'undefined' : _typeof(es6_array_find)) === 'object' && 'default' in es6_array_find ? es6_array_find['default'] : es6_array_find;

	var es6_array_fill = createCommonjsModule(function (module) {
	  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	  var $export = require$$26;

	  $export($export.P, 'Array', { fill: require$$1$19 });

	  require$$0$11('fill');
	});

	es6_array_fill && (typeof es6_array_fill === 'undefined' ? 'undefined' : _typeof(es6_array_fill)) === 'object' && 'default' in es6_array_fill ? es6_array_fill['default'] : es6_array_fill;

	var es6_array_copyWithin = createCommonjsModule(function (module) {
	  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	  var $export = require$$26;

	  $export($export.P, 'Array', { copyWithin: require$$1$18 });

	  require$$0$11('copyWithin');
	});

	es6_array_copyWithin && (typeof es6_array_copyWithin === 'undefined' ? 'undefined' : _typeof(es6_array_copyWithin)) === 'object' && 'default' in es6_array_copyWithin ? es6_array_copyWithin['default'] : es6_array_copyWithin;

	var _strictMethod = createCommonjsModule(function (module) {
	  var fails = require$$23;

	  module.exports = function (method, arg) {
	    return !!method && fails(function () {
	      arg ? method.call(null, function () {}, 1) : method.call(null);
	    });
	  };
	});

	var require$$0$35 = _strictMethod && (typeof _strictMethod === 'undefined' ? 'undefined' : _typeof(_strictMethod)) === 'object' && 'default' in _strictMethod ? _strictMethod['default'] : _strictMethod;

	var es6_array_lastIndexOf = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      toIObject = require$$0$10,
	      toInteger = require$$3$1,
	      toLength = require$$0$9,
	      $native = [].lastIndexOf,
	      NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	  $export($export.P + $export.F * (NEGATIVE_ZERO || !require$$0$35($native)), 'Array', {
	    // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */) {
	      // convert -0 to +0
	      if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	      var O = toIObject(this),
	          length = toLength(O.length),
	          index = length - 1;
	      if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	      if (index < 0) index = length + index;
	      for (; index >= 0; index--) {
	        if (index in O) if (O[index] === searchElement) return index || 0;
	      }return -1;
	    }
	  });
	});

	es6_array_lastIndexOf && (typeof es6_array_lastIndexOf === 'undefined' ? 'undefined' : _typeof(es6_array_lastIndexOf)) === 'object' && 'default' in es6_array_lastIndexOf ? es6_array_lastIndexOf['default'] : es6_array_lastIndexOf;

	var es6_array_indexOf = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      $indexOf = require$$1$6(false),
	      $native = [].indexOf,
	      NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	  $export($export.P + $export.F * (NEGATIVE_ZERO || !require$$0$35($native)), 'Array', {
	    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	    indexOf: function indexOf(searchElement /*, fromIndex = 0 */) {
	      return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
	    }
	  });
	});

	es6_array_indexOf && (typeof es6_array_indexOf === 'undefined' ? 'undefined' : _typeof(es6_array_indexOf)) === 'object' && 'default' in es6_array_indexOf ? es6_array_indexOf['default'] : es6_array_indexOf;

	var _arrayReduce = createCommonjsModule(function (module) {
	  var aFunction = require$$3,
	      toObject = require$$2$2,
	      IObject = require$$1$7,
	      toLength = require$$0$9;

	  module.exports = function (that, callbackfn, aLen, memo, isRight) {
	    aFunction(callbackfn);
	    var O = toObject(that),
	        self = IObject(O),
	        length = toLength(O.length),
	        index = isRight ? length - 1 : 0,
	        i = isRight ? -1 : 1;
	    if (aLen < 2) for (;;) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (isRight ? index < 0 : length <= index) {
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for (; isRight ? index >= 0 : length > index; index += i) {
	      if (index in self) {
	        memo = callbackfn(memo, self[index], index, O);
	      }
	    }return memo;
	  };
	});

	var require$$1$20 = _arrayReduce && (typeof _arrayReduce === 'undefined' ? 'undefined' : _typeof(_arrayReduce)) === 'object' && 'default' in _arrayReduce ? _arrayReduce['default'] : _arrayReduce;

	var es6_array_reduceRight = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      $reduce = require$$1$20;

	  $export($export.P + $export.F * !require$$0$35([].reduceRight, true), 'Array', {
	    // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	    reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	      return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	    }
	  });
	});

	es6_array_reduceRight && (typeof es6_array_reduceRight === 'undefined' ? 'undefined' : _typeof(es6_array_reduceRight)) === 'object' && 'default' in es6_array_reduceRight ? es6_array_reduceRight['default'] : es6_array_reduceRight;

	var es6_array_reduce = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      $reduce = require$$1$20;

	  $export($export.P + $export.F * !require$$0$35([].reduce, true), 'Array', {
	    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	    reduce: function reduce(callbackfn /* , initialValue */) {
	      return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	    }
	  });
	});

	es6_array_reduce && (typeof es6_array_reduce === 'undefined' ? 'undefined' : _typeof(es6_array_reduce)) === 'object' && 'default' in es6_array_reduce ? es6_array_reduce['default'] : es6_array_reduce;

	var es6_array_every = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      $every = require$$1$12(4);

	  $export($export.P + $export.F * !require$$0$35([].every, true), 'Array', {
	    // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	    every: function every(callbackfn /* , thisArg */) {
	      return $every(this, callbackfn, arguments[1]);
	    }
	  });
	});

	es6_array_every && (typeof es6_array_every === 'undefined' ? 'undefined' : _typeof(es6_array_every)) === 'object' && 'default' in es6_array_every ? es6_array_every['default'] : es6_array_every;

	var es6_array_some = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      $some = require$$1$12(3);

	  $export($export.P + $export.F * !require$$0$35([].some, true), 'Array', {
	    // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	    some: function some(callbackfn /* , thisArg */) {
	      return $some(this, callbackfn, arguments[1]);
	    }
	  });
	});

	es6_array_some && (typeof es6_array_some === 'undefined' ? 'undefined' : _typeof(es6_array_some)) === 'object' && 'default' in es6_array_some ? es6_array_some['default'] : es6_array_some;

	var es6_array_filter = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      $filter = require$$1$12(2);

	  $export($export.P + $export.F * !require$$0$35([].filter, true), 'Array', {
	    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	    filter: function filter(callbackfn /* , thisArg */) {
	      return $filter(this, callbackfn, arguments[1]);
	    }
	  });
	});

	es6_array_filter && (typeof es6_array_filter === 'undefined' ? 'undefined' : _typeof(es6_array_filter)) === 'object' && 'default' in es6_array_filter ? es6_array_filter['default'] : es6_array_filter;

	var es6_array_map = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      $map = require$$1$12(1);

	  $export($export.P + $export.F * !require$$0$35([].map, true), 'Array', {
	    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	    map: function map(callbackfn /* , thisArg */) {
	      return $map(this, callbackfn, arguments[1]);
	    }
	  });
	});

	es6_array_map && (typeof es6_array_map === 'undefined' ? 'undefined' : _typeof(es6_array_map)) === 'object' && 'default' in es6_array_map ? es6_array_map['default'] : es6_array_map;

	var es6_array_forEach = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      $forEach = require$$1$12(0),
	      STRICT = require$$0$35([].forEach, true);

	  $export($export.P + $export.F * !STRICT, 'Array', {
	    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	    forEach: function forEach(callbackfn /* , thisArg */) {
	      return $forEach(this, callbackfn, arguments[1]);
	    }
	  });
	});

	es6_array_forEach && (typeof es6_array_forEach === 'undefined' ? 'undefined' : _typeof(es6_array_forEach)) === 'object' && 'default' in es6_array_forEach ? es6_array_forEach['default'] : es6_array_forEach;

	var es6_array_sort = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      aFunction = require$$3,
	      toObject = require$$2$2,
	      fails = require$$23,
	      $sort = [].sort,
	      test = [1, 2, 3];

	  $export($export.P + $export.F * (fails(function () {
	    // IE8-
	    test.sort(undefined);
	  }) || !fails(function () {
	    // V8 bug
	    test.sort(null);
	    // Old WebKit
	  }) || !require$$0$35($sort)), 'Array', {
	    // 22.1.3.25 Array.prototype.sort(comparefn)
	    sort: function sort(comparefn) {
	      return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
	    }
	  });
	});

	es6_array_sort && (typeof es6_array_sort === 'undefined' ? 'undefined' : _typeof(es6_array_sort)) === 'object' && 'default' in es6_array_sort ? es6_array_sort['default'] : es6_array_sort;

	var es6_array_slice = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      html = require$$4,
	      cof = require$$10$1,
	      toIndex = require$$0$8,
	      toLength = require$$0$9,
	      arraySlice = [].slice;

	  // fallback for not array-like ES3 strings and DOM objects
	  $export($export.P + $export.F * require$$23(function () {
	    if (html) arraySlice.call(html);
	  }), 'Array', {
	    slice: function slice(begin, end) {
	      var len = toLength(this.length),
	          klass = cof(this);
	      end = end === undefined ? len : end;
	      if (klass == 'Array') return arraySlice.call(this, begin, end);
	      var start = toIndex(begin, len),
	          upTo = toIndex(end, len),
	          size = toLength(upTo - start),
	          cloned = Array(size),
	          i = 0;
	      for (; i < size; i++) {
	        cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
	      }return cloned;
	    }
	  });
	});

	es6_array_slice && (typeof es6_array_slice === 'undefined' ? 'undefined' : _typeof(es6_array_slice)) === 'object' && 'default' in es6_array_slice ? es6_array_slice['default'] : es6_array_slice;

	var es6_array_join = createCommonjsModule(function (module) {
	  'use strict';
	  // 22.1.3.13 Array.prototype.join(separator)

	  var $export = require$$26,
	      toIObject = require$$0$10,
	      arrayJoin = [].join;

	  // fallback for not array-like strings
	  $export($export.P + $export.F * (require$$1$7 != Object || !require$$0$35(arrayJoin)), 'Array', {
	    join: function join(separator) {
	      return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	    }
	  });
	});

	es6_array_join && (typeof es6_array_join === 'undefined' ? 'undefined' : _typeof(es6_array_join)) === 'object' && 'default' in es6_array_join ? es6_array_join['default'] : es6_array_join;

	var es6_array_of = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      createProperty = require$$2$5;

	  // WebKit Array.of isn't generic
	  $export($export.S + $export.F * require$$23(function () {
	    function F() {}
	    return !(Array.of.call(F) instanceof F);
	  }), 'Array', {
	    // 22.1.2.3 Array.of( ...items)
	    of: function of() /* ...args */{
	      var index = 0,
	          aLen = arguments.length,
	          result = new (typeof this == 'function' ? this : Array)(aLen);
	      while (aLen > index) {
	        createProperty(result, index, arguments[index++]);
	      }result.length = aLen;
	      return result;
	    }
	  });
	});

	es6_array_of && (typeof es6_array_of === 'undefined' ? 'undefined' : _typeof(es6_array_of)) === 'object' && 'default' in es6_array_of ? es6_array_of['default'] : es6_array_of;

	var es6_array_from = createCommonjsModule(function (module) {
	  'use strict';

	  var ctx = require$$8,
	      $export = require$$26,
	      toObject = require$$2$2,
	      call = require$$5,
	      isArrayIter = require$$4$1,
	      toLength = require$$0$9,
	      createProperty = require$$2$5,
	      getIterFn = require$$1$9;

	  $export($export.S + $export.F * !require$$0$19(function (iter) {
	    Array.from(iter);
	  }), 'Array', {
	    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	    from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	      var O = toObject(arrayLike),
	          C = typeof this == 'function' ? this : Array,
	          aLen = arguments.length,
	          mapfn = aLen > 1 ? arguments[1] : undefined,
	          mapping = mapfn !== undefined,
	          index = 0,
	          iterFn = getIterFn(O),
	          length,
	          result,
	          step,
	          iterator;
	      if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	      // if object isn't iterable or it's array with default iterator - use simple case
	      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	          createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	        }
	      } else {
	        length = toLength(O.length);
	        for (result = new C(length); length > index; index++) {
	          createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	        }
	      }
	      result.length = index;
	      return result;
	    }
	  });
	});

	es6_array_from && (typeof es6_array_from === 'undefined' ? 'undefined' : _typeof(es6_array_from)) === 'object' && 'default' in es6_array_from ? es6_array_from['default'] : es6_array_from;

	var es6_array_isArray = createCommonjsModule(function (module) {
	  // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	  var $export = require$$26;

	  $export($export.S, 'Array', { isArray: require$$14 });
	});

	es6_array_isArray && (typeof es6_array_isArray === 'undefined' ? 'undefined' : _typeof(es6_array_isArray)) === 'object' && 'default' in es6_array_isArray ? es6_array_isArray['default'] : es6_array_isArray;

	var _dateToPrimitive = createCommonjsModule(function (module) {
	  'use strict';

	  var anObject = require$$13,
	      toPrimitive = require$$11,
	      NUMBER = 'number';

	  module.exports = function (hint) {
	    if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	    return toPrimitive(anObject(this), hint != NUMBER);
	  };
	});

	var require$$0$36 = _dateToPrimitive && (typeof _dateToPrimitive === 'undefined' ? 'undefined' : _typeof(_dateToPrimitive)) === 'object' && 'default' in _dateToPrimitive ? _dateToPrimitive['default'] : _dateToPrimitive;

	var es6_date_toPrimitive = createCommonjsModule(function (module) {
	  var TO_PRIMITIVE = require$$19('toPrimitive'),
	      proto = Date.prototype;

	  if (!(TO_PRIMITIVE in proto)) require$$0$1(proto, TO_PRIMITIVE, require$$0$36);
	});

	es6_date_toPrimitive && (typeof es6_date_toPrimitive === 'undefined' ? 'undefined' : _typeof(es6_date_toPrimitive)) === 'object' && 'default' in es6_date_toPrimitive ? es6_date_toPrimitive['default'] : es6_date_toPrimitive;

	var es6_date_toString = createCommonjsModule(function (module) {
	  var DateProto = Date.prototype,
	      INVALID_DATE = 'Invalid Date',
	      TO_STRING = 'toString',
	      $toString = DateProto[TO_STRING],
	      getTime = DateProto.getTime;
	  if (new Date(NaN) + '' != INVALID_DATE) {
	    require$$25(DateProto, TO_STRING, function toString() {
	      var value = getTime.call(this);
	      return value === value ? $toString.call(this) : INVALID_DATE;
	    });
	  }
	});

	es6_date_toString && (typeof es6_date_toString === 'undefined' ? 'undefined' : _typeof(es6_date_toString)) === 'object' && 'default' in es6_date_toString ? es6_date_toString['default'] : es6_date_toString;

	var es6_date_toIsoString = createCommonjsModule(function (module) {
	  'use strict';
	  // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

	  var $export = require$$26,
	      fails = require$$23,
	      getTime = Date.prototype.getTime;

	  var lz = function lz(num) {
	    return num > 9 ? num : '0' + num;
	  };

	  // PhantomJS / old WebKit has a broken implementations
	  $export($export.P + $export.F * (fails(function () {
	    return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	  }) || !fails(function () {
	    new Date(NaN).toISOString();
	  })), 'Date', {
	    toISOString: function toISOString() {
	      if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	      var d = this,
	          y = d.getUTCFullYear(),
	          m = d.getUTCMilliseconds(),
	          s = y < 0 ? '-' : y > 9999 ? '+' : '';
	      return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	    }
	  });
	});

	es6_date_toIsoString && (typeof es6_date_toIsoString === 'undefined' ? 'undefined' : _typeof(es6_date_toIsoString)) === 'object' && 'default' in es6_date_toIsoString ? es6_date_toIsoString['default'] : es6_date_toIsoString;

	var es6_date_toJson = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      toObject = require$$2$2,
	      toPrimitive = require$$11;

	  $export($export.P + $export.F * require$$23(function () {
	    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {
	        return 1;
	      } }) !== 1;
	  }), 'Date', {
	    toJSON: function toJSON(key) {
	      var O = toObject(this),
	          pv = toPrimitive(O);
	      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	    }
	  });
	});

	es6_date_toJson && (typeof es6_date_toJson === 'undefined' ? 'undefined' : _typeof(es6_date_toJson)) === 'object' && 'default' in es6_date_toJson ? es6_date_toJson['default'] : es6_date_toJson;

	var es6_date_now = createCommonjsModule(function (module) {
	  // 20.3.3.1 / 15.9.4.4 Date.now()
	  var $export = require$$26;

	  $export($export.S, 'Date', { now: function now() {
	      return new Date().getTime();
	    } });
	});

	es6_date_now && (typeof es6_date_now === 'undefined' ? 'undefined' : _typeof(es6_date_now)) === 'object' && 'default' in es6_date_now ? es6_date_now['default'] : es6_date_now;

	var _stringHtml = createCommonjsModule(function (module) {
	  var $export = require$$26,
	      fails = require$$23,
	      defined = require$$0$4,
	      quot = /"/g;
	  // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	  var createHTML = function createHTML(string, tag, attribute, value) {
	    var S = String(defined(string)),
	        p1 = '<' + tag;
	    if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	    return p1 + '>' + S + '</' + tag + '>';
	  };
	  module.exports = function (NAME, exec) {
	    var O = {};
	    O[NAME] = exec(createHTML);
	    $export($export.P + $export.F * fails(function () {
	      var test = ''[NAME]('"');
	      return test !== test.toLowerCase() || test.split('"').length > 3;
	    }), 'String', O);
	  };
	});

	var require$$0$37 = _stringHtml && (typeof _stringHtml === 'undefined' ? 'undefined' : _typeof(_stringHtml)) === 'object' && 'default' in _stringHtml ? _stringHtml['default'] : _stringHtml;

	var es6_string_sup = createCommonjsModule(function (module) {
	  'use strict';
	  // B.2.3.14 String.prototype.sup()

	  require$$0$37('sup', function (createHTML) {
	    return function sup() {
	      return createHTML(this, 'sup', '', '');
	    };
	  });
	});

	es6_string_sup && (typeof es6_string_sup === 'undefined' ? 'undefined' : _typeof(es6_string_sup)) === 'object' && 'default' in es6_string_sup ? es6_string_sup['default'] : es6_string_sup;

	var es6_string_sub = createCommonjsModule(function (module) {
	  'use strict';
	  // B.2.3.13 String.prototype.sub()

	  require$$0$37('sub', function (createHTML) {
	    return function sub() {
	      return createHTML(this, 'sub', '', '');
	    };
	  });
	});

	es6_string_sub && (typeof es6_string_sub === 'undefined' ? 'undefined' : _typeof(es6_string_sub)) === 'object' && 'default' in es6_string_sub ? es6_string_sub['default'] : es6_string_sub;

	var es6_string_strike = createCommonjsModule(function (module) {
	  'use strict';
	  // B.2.3.12 String.prototype.strike()

	  require$$0$37('strike', function (createHTML) {
	    return function strike() {
	      return createHTML(this, 'strike', '', '');
	    };
	  });
	});

	es6_string_strike && (typeof es6_string_strike === 'undefined' ? 'undefined' : _typeof(es6_string_strike)) === 'object' && 'default' in es6_string_strike ? es6_string_strike['default'] : es6_string_strike;

	var es6_string_small = createCommonjsModule(function (module) {
	  'use strict';
	  // B.2.3.11 String.prototype.small()

	  require$$0$37('small', function (createHTML) {
	    return function small() {
	      return createHTML(this, 'small', '', '');
	    };
	  });
	});

	es6_string_small && (typeof es6_string_small === 'undefined' ? 'undefined' : _typeof(es6_string_small)) === 'object' && 'default' in es6_string_small ? es6_string_small['default'] : es6_string_small;

	var es6_string_link = createCommonjsModule(function (module) {
	  'use strict';
	  // B.2.3.10 String.prototype.link(url)

	  require$$0$37('link', function (createHTML) {
	    return function link(url) {
	      return createHTML(this, 'a', 'href', url);
	    };
	  });
	});

	es6_string_link && (typeof es6_string_link === 'undefined' ? 'undefined' : _typeof(es6_string_link)) === 'object' && 'default' in es6_string_link ? es6_string_link['default'] : es6_string_link;

	var es6_string_italics = createCommonjsModule(function (module) {
	  'use strict';
	  // B.2.3.9 String.prototype.italics()

	  require$$0$37('italics', function (createHTML) {
	    return function italics() {
	      return createHTML(this, 'i', '', '');
	    };
	  });
	});

	es6_string_italics && (typeof es6_string_italics === 'undefined' ? 'undefined' : _typeof(es6_string_italics)) === 'object' && 'default' in es6_string_italics ? es6_string_italics['default'] : es6_string_italics;

	var es6_string_fontsize = createCommonjsModule(function (module) {
	  'use strict';
	  // B.2.3.8 String.prototype.fontsize(size)

	  require$$0$37('fontsize', function (createHTML) {
	    return function fontsize(size) {
	      return createHTML(this, 'font', 'size', size);
	    };
	  });
	});

	es6_string_fontsize && (typeof es6_string_fontsize === 'undefined' ? 'undefined' : _typeof(es6_string_fontsize)) === 'object' && 'default' in es6_string_fontsize ? es6_string_fontsize['default'] : es6_string_fontsize;

	var es6_string_fontcolor = createCommonjsModule(function (module) {
	  'use strict';
	  // B.2.3.7 String.prototype.fontcolor(color)

	  require$$0$37('fontcolor', function (createHTML) {
	    return function fontcolor(color) {
	      return createHTML(this, 'font', 'color', color);
	    };
	  });
	});

	es6_string_fontcolor && (typeof es6_string_fontcolor === 'undefined' ? 'undefined' : _typeof(es6_string_fontcolor)) === 'object' && 'default' in es6_string_fontcolor ? es6_string_fontcolor['default'] : es6_string_fontcolor;

	var es6_string_fixed = createCommonjsModule(function (module) {
	  'use strict';
	  // B.2.3.6 String.prototype.fixed()

	  require$$0$37('fixed', function (createHTML) {
	    return function fixed() {
	      return createHTML(this, 'tt', '', '');
	    };
	  });
	});

	es6_string_fixed && (typeof es6_string_fixed === 'undefined' ? 'undefined' : _typeof(es6_string_fixed)) === 'object' && 'default' in es6_string_fixed ? es6_string_fixed['default'] : es6_string_fixed;

	var es6_string_bold = createCommonjsModule(function (module) {
	  'use strict';
	  // B.2.3.5 String.prototype.bold()

	  require$$0$37('bold', function (createHTML) {
	    return function bold() {
	      return createHTML(this, 'b', '', '');
	    };
	  });
	});

	es6_string_bold && (typeof es6_string_bold === 'undefined' ? 'undefined' : _typeof(es6_string_bold)) === 'object' && 'default' in es6_string_bold ? es6_string_bold['default'] : es6_string_bold;

	var es6_string_blink = createCommonjsModule(function (module) {
	  'use strict';
	  // B.2.3.4 String.prototype.blink()

	  require$$0$37('blink', function (createHTML) {
	    return function blink() {
	      return createHTML(this, 'blink', '', '');
	    };
	  });
	});

	es6_string_blink && (typeof es6_string_blink === 'undefined' ? 'undefined' : _typeof(es6_string_blink)) === 'object' && 'default' in es6_string_blink ? es6_string_blink['default'] : es6_string_blink;

	var es6_string_big = createCommonjsModule(function (module) {
	  'use strict';
	  // B.2.3.3 String.prototype.big()

	  require$$0$37('big', function (createHTML) {
	    return function big() {
	      return createHTML(this, 'big', '', '');
	    };
	  });
	});

	es6_string_big && (typeof es6_string_big === 'undefined' ? 'undefined' : _typeof(es6_string_big)) === 'object' && 'default' in es6_string_big ? es6_string_big['default'] : es6_string_big;

	var es6_string_anchor = createCommonjsModule(function (module) {
	  'use strict';
	  // B.2.3.2 String.prototype.anchor(name)

	  require$$0$37('anchor', function (createHTML) {
	    return function anchor(name) {
	      return createHTML(this, 'a', 'name', name);
	    };
	  });
	});

	es6_string_anchor && (typeof es6_string_anchor === 'undefined' ? 'undefined' : _typeof(es6_string_anchor)) === 'object' && 'default' in es6_string_anchor ? es6_string_anchor['default'] : es6_string_anchor;

	var _failsIsRegexp = createCommonjsModule(function (module) {
	  var MATCH = require$$19('match');
	  module.exports = function (KEY) {
	    var re = /./;
	    try {
	      '/./'[KEY](re);
	    } catch (e) {
	      try {
	        re[MATCH] = false;
	        return !'/./'[KEY](re);
	      } catch (f) {/* empty */}
	    }return true;
	  };
	});

	var require$$0$38 = _failsIsRegexp && (typeof _failsIsRegexp === 'undefined' ? 'undefined' : _typeof(_failsIsRegexp)) === 'object' && 'default' in _failsIsRegexp ? _failsIsRegexp['default'] : _failsIsRegexp;

	var _stringContext = createCommonjsModule(function (module) {
	  // helper for String#{startsWith, endsWith, includes}
	  var isRegExp = require$$1$15,
	      defined = require$$0$4;

	  module.exports = function (that, searchString, NAME) {
	    if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	    return String(defined(that));
	  };
	});

	var require$$1$21 = _stringContext && (typeof _stringContext === 'undefined' ? 'undefined' : _typeof(_stringContext)) === 'object' && 'default' in _stringContext ? _stringContext['default'] : _stringContext;

	var es6_string_startsWith = createCommonjsModule(function (module) {
	  // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	  'use strict';

	  var $export = require$$26,
	      toLength = require$$0$9,
	      context = require$$1$21,
	      STARTS_WITH = 'startsWith',
	      $startsWith = ''[STARTS_WITH];

	  $export($export.P + $export.F * require$$0$38(STARTS_WITH), 'String', {
	    startsWith: function startsWith(searchString /*, position = 0 */) {
	      var that = context(this, searchString, STARTS_WITH),
	          index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length)),
	          search = String(searchString);
	      return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
	    }
	  });
	});

	es6_string_startsWith && (typeof es6_string_startsWith === 'undefined' ? 'undefined' : _typeof(es6_string_startsWith)) === 'object' && 'default' in es6_string_startsWith ? es6_string_startsWith['default'] : es6_string_startsWith;

	var es6_string_repeat = createCommonjsModule(function (module) {
	  var $export = require$$26;

	  $export($export.P, 'String', {
	    // 21.1.3.13 String.prototype.repeat(count)
	    repeat: require$$1$16
	  });
	});

	es6_string_repeat && (typeof es6_string_repeat === 'undefined' ? 'undefined' : _typeof(es6_string_repeat)) === 'object' && 'default' in es6_string_repeat ? es6_string_repeat['default'] : es6_string_repeat;

	var es6_string_includes = createCommonjsModule(function (module) {
	  // 21.1.3.7 String.prototype.includes(searchString, position = 0)
	  'use strict';

	  var $export = require$$26,
	      context = require$$1$21,
	      INCLUDES = 'includes';

	  $export($export.P + $export.F * require$$0$38(INCLUDES), 'String', {
	    includes: function includes(searchString /*, position = 0 */) {
	      return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	    }
	  });
	});

	es6_string_includes && (typeof es6_string_includes === 'undefined' ? 'undefined' : _typeof(es6_string_includes)) === 'object' && 'default' in es6_string_includes ? es6_string_includes['default'] : es6_string_includes;

	var es6_string_endsWith = createCommonjsModule(function (module) {
	  // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	  'use strict';

	  var $export = require$$26,
	      toLength = require$$0$9,
	      context = require$$1$21,
	      ENDS_WITH = 'endsWith',
	      $endsWith = ''[ENDS_WITH];

	  $export($export.P + $export.F * require$$0$38(ENDS_WITH), 'String', {
	    endsWith: function endsWith(searchString /*, endPosition = @length */) {
	      var that = context(this, searchString, ENDS_WITH),
	          endPosition = arguments.length > 1 ? arguments[1] : undefined,
	          len = toLength(that.length),
	          end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
	          search = String(searchString);
	      return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
	    }
	  });
	});

	es6_string_endsWith && (typeof es6_string_endsWith === 'undefined' ? 'undefined' : _typeof(es6_string_endsWith)) === 'object' && 'default' in es6_string_endsWith ? es6_string_endsWith['default'] : es6_string_endsWith;

	var es6_string_codePointAt = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      $at = require$$1$17(false);
	  $export($export.P, 'String', {
	    // 21.1.3.3 String.prototype.codePointAt(pos)
	    codePointAt: function codePointAt(pos) {
	      return $at(this, pos);
	    }
	  });
	});

	es6_string_codePointAt && (typeof es6_string_codePointAt === 'undefined' ? 'undefined' : _typeof(es6_string_codePointAt)) === 'object' && 'default' in es6_string_codePointAt ? es6_string_codePointAt['default'] : es6_string_codePointAt;

	var es6_string_iterator = createCommonjsModule(function (module) {
	  'use strict';

	  var $at = require$$1$17(true);

	  // 21.1.3.27 String.prototype[@@iterator]()
	  require$$0$2(String, 'String', function (iterated) {
	    this._t = String(iterated); // target
	    this._i = 0; // next index
	    // 21.1.5.2.1 %StringIteratorPrototype%.next()
	  }, function () {
	    var O = this._t,
	        index = this._i,
	        point;
	    if (index >= O.length) return { value: undefined, done: true };
	    point = $at(O, index);
	    this._i += point.length;
	    return { value: point, done: false };
	  });
	});

	es6_string_iterator && (typeof es6_string_iterator === 'undefined' ? 'undefined' : _typeof(es6_string_iterator)) === 'object' && 'default' in es6_string_iterator ? es6_string_iterator['default'] : es6_string_iterator;

	var es6_string_trim = createCommonjsModule(function (module) {
	  'use strict';
	  // 21.1.3.25 String.prototype.trim()

	  require$$3$4('trim', function ($trim) {
	    return function trim() {
	      return $trim(this, 3);
	    };
	  });
	});

	es6_string_trim && (typeof es6_string_trim === 'undefined' ? 'undefined' : _typeof(es6_string_trim)) === 'object' && 'default' in es6_string_trim ? es6_string_trim['default'] : es6_string_trim;

	var es6_string_raw = createCommonjsModule(function (module) {
	  var $export = require$$26,
	      toIObject = require$$0$10,
	      toLength = require$$0$9;

	  $export($export.S, 'String', {
	    // 21.1.2.4 String.raw(callSite, ...substitutions)
	    raw: function raw(callSite) {
	      var tpl = toIObject(callSite.raw),
	          len = toLength(tpl.length),
	          aLen = arguments.length,
	          res = [],
	          i = 0;
	      while (len > i) {
	        res.push(String(tpl[i++]));
	        if (i < aLen) res.push(String(arguments[i]));
	      }return res.join('');
	    }
	  });
	});

	es6_string_raw && (typeof es6_string_raw === 'undefined' ? 'undefined' : _typeof(es6_string_raw)) === 'object' && 'default' in es6_string_raw ? es6_string_raw['default'] : es6_string_raw;

	var es6_string_fromCodePoint = createCommonjsModule(function (module) {
	  var $export = require$$26,
	      toIndex = require$$0$8,
	      fromCharCode = String.fromCharCode,
	      $fromCodePoint = String.fromCodePoint;

	  // length should be 1, old FF problem
	  $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	    // 21.1.2.2 String.fromCodePoint(...codePoints)
	    fromCodePoint: function fromCodePoint(x) {
	      // eslint-disable-line no-unused-vars
	      var res = [],
	          aLen = arguments.length,
	          i = 0,
	          code;
	      while (aLen > i) {
	        code = +arguments[i++];
	        if (toIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	        res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
	      }return res.join('');
	    }
	  });
	});

	es6_string_fromCodePoint && (typeof es6_string_fromCodePoint === 'undefined' ? 'undefined' : _typeof(es6_string_fromCodePoint)) === 'object' && 'default' in es6_string_fromCodePoint ? es6_string_fromCodePoint['default'] : es6_string_fromCodePoint;

	var es6_math_trunc = createCommonjsModule(function (module) {
	  // 20.2.2.34 Math.trunc(x)
	  var $export = require$$26;

	  $export($export.S, 'Math', {
	    trunc: function trunc(it) {
	      return (it > 0 ? Math.floor : Math.ceil)(it);
	    }
	  });
	});

	es6_math_trunc && (typeof es6_math_trunc === 'undefined' ? 'undefined' : _typeof(es6_math_trunc)) === 'object' && 'default' in es6_math_trunc ? es6_math_trunc['default'] : es6_math_trunc;

	var _mathExpm1 = createCommonjsModule(function (module) {
	  // 20.2.2.14 Math.expm1(x)
	  var $expm1 = Math.expm1;
	  module.exports = !$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
	    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	  } : $expm1;
	});

	var require$$0$39 = _mathExpm1 && (typeof _mathExpm1 === 'undefined' ? 'undefined' : _typeof(_mathExpm1)) === 'object' && 'default' in _mathExpm1 ? _mathExpm1['default'] : _mathExpm1;

	var es6_math_tanh = createCommonjsModule(function (module) {
	  // 20.2.2.33 Math.tanh(x)
	  var $export = require$$26,
	      expm1 = require$$0$39,
	      exp = Math.exp;

	  $export($export.S, 'Math', {
	    tanh: function tanh(x) {
	      var a = expm1(x = +x),
	          b = expm1(-x);
	      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	    }
	  });
	});

	es6_math_tanh && (typeof es6_math_tanh === 'undefined' ? 'undefined' : _typeof(es6_math_tanh)) === 'object' && 'default' in es6_math_tanh ? es6_math_tanh['default'] : es6_math_tanh;

	var es6_math_sinh = createCommonjsModule(function (module) {
	  // 20.2.2.30 Math.sinh(x)
	  var $export = require$$26,
	      expm1 = require$$0$39,
	      exp = Math.exp;

	  // V8 near Chromium 38 has a problem with very small numbers
	  $export($export.S + $export.F * require$$23(function () {
	    return !Math.sinh(-2e-17) != -2e-17;
	  }), 'Math', {
	    sinh: function sinh(x) {
	      return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	    }
	  });
	});

	es6_math_sinh && (typeof es6_math_sinh === 'undefined' ? 'undefined' : _typeof(es6_math_sinh)) === 'object' && 'default' in es6_math_sinh ? es6_math_sinh['default'] : es6_math_sinh;

	var _mathSign = createCommonjsModule(function (module) {
	  // 20.2.2.28 Math.sign(x)
	  module.exports = Math.sign || function sign(x) {
	    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	  };
	});

	var require$$0$40 = _mathSign && (typeof _mathSign === 'undefined' ? 'undefined' : _typeof(_mathSign)) === 'object' && 'default' in _mathSign ? _mathSign['default'] : _mathSign;

	var es6_math_sign = createCommonjsModule(function (module) {
	  // 20.2.2.28 Math.sign(x)
	  var $export = require$$26;

	  $export($export.S, 'Math', { sign: require$$0$40 });
	});

	es6_math_sign && (typeof es6_math_sign === 'undefined' ? 'undefined' : _typeof(es6_math_sign)) === 'object' && 'default' in es6_math_sign ? es6_math_sign['default'] : es6_math_sign;

	var es6_math_log2 = createCommonjsModule(function (module) {
	  // 20.2.2.22 Math.log2(x)
	  var $export = require$$26;

	  $export($export.S, 'Math', {
	    log2: function log2(x) {
	      return Math.log(x) / Math.LN2;
	    }
	  });
	});

	es6_math_log2 && (typeof es6_math_log2 === 'undefined' ? 'undefined' : _typeof(es6_math_log2)) === 'object' && 'default' in es6_math_log2 ? es6_math_log2['default'] : es6_math_log2;

	var _mathLog1p = createCommonjsModule(function (module) {
	  // 20.2.2.20 Math.log1p(x)
	  module.exports = Math.log1p || function log1p(x) {
	    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	  };
	});

	var require$$0$41 = _mathLog1p && (typeof _mathLog1p === 'undefined' ? 'undefined' : _typeof(_mathLog1p)) === 'object' && 'default' in _mathLog1p ? _mathLog1p['default'] : _mathLog1p;

	var es6_math_log1p = createCommonjsModule(function (module) {
	  // 20.2.2.20 Math.log1p(x)
	  var $export = require$$26;

	  $export($export.S, 'Math', { log1p: require$$0$41 });
	});

	es6_math_log1p && (typeof es6_math_log1p === 'undefined' ? 'undefined' : _typeof(es6_math_log1p)) === 'object' && 'default' in es6_math_log1p ? es6_math_log1p['default'] : es6_math_log1p;

	var es6_math_log10 = createCommonjsModule(function (module) {
	  // 20.2.2.21 Math.log10(x)
	  var $export = require$$26;

	  $export($export.S, 'Math', {
	    log10: function log10(x) {
	      return Math.log(x) / Math.LN10;
	    }
	  });
	});

	es6_math_log10 && (typeof es6_math_log10 === 'undefined' ? 'undefined' : _typeof(es6_math_log10)) === 'object' && 'default' in es6_math_log10 ? es6_math_log10['default'] : es6_math_log10;

	var es6_math_imul = createCommonjsModule(function (module) {
	  // 20.2.2.18 Math.imul(x, y)
	  var $export = require$$26,
	      $imul = Math.imul;

	  // some WebKit versions fails with big numbers, some has wrong arity
	  $export($export.S + $export.F * require$$23(function () {
	    return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	  }), 'Math', {
	    imul: function imul(x, y) {
	      var UINT16 = 0xffff,
	          xn = +x,
	          yn = +y,
	          xl = UINT16 & xn,
	          yl = UINT16 & yn;
	      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	    }
	  });
	});

	es6_math_imul && (typeof es6_math_imul === 'undefined' ? 'undefined' : _typeof(es6_math_imul)) === 'object' && 'default' in es6_math_imul ? es6_math_imul['default'] : es6_math_imul;

	var es6_math_hypot = createCommonjsModule(function (module) {
	  // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	  var $export = require$$26,
	      abs = Math.abs;

	  $export($export.S, 'Math', {
	    hypot: function hypot(value1, value2) {
	      // eslint-disable-line no-unused-vars
	      var sum = 0,
	          i = 0,
	          aLen = arguments.length,
	          larg = 0,
	          arg,
	          div;
	      while (i < aLen) {
	        arg = abs(arguments[i++]);
	        if (larg < arg) {
	          div = larg / arg;
	          sum = sum * div * div + 1;
	          larg = arg;
	        } else if (arg > 0) {
	          div = arg / larg;
	          sum += div * div;
	        } else sum += arg;
	      }
	      return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	    }
	  });
	});

	es6_math_hypot && (typeof es6_math_hypot === 'undefined' ? 'undefined' : _typeof(es6_math_hypot)) === 'object' && 'default' in es6_math_hypot ? es6_math_hypot['default'] : es6_math_hypot;

	var es6_math_fround = createCommonjsModule(function (module) {
	  // 20.2.2.16 Math.fround(x)
	  var $export = require$$26,
	      sign = require$$0$40,
	      pow = Math.pow,
	      EPSILON = pow(2, -52),
	      EPSILON32 = pow(2, -23),
	      MAX32 = pow(2, 127) * (2 - EPSILON32),
	      MIN32 = pow(2, -126);

	  var roundTiesToEven = function roundTiesToEven(n) {
	    return n + 1 / EPSILON - 1 / EPSILON;
	  };

	  $export($export.S, 'Math', {
	    fround: function fround(x) {
	      var $abs = Math.abs(x),
	          $sign = sign(x),
	          a,
	          result;
	      if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	      a = (1 + EPSILON32 / EPSILON) * $abs;
	      result = a - (a - $abs);
	      if (result > MAX32 || result != result) return $sign * Infinity;
	      return $sign * result;
	    }
	  });
	});

	es6_math_fround && (typeof es6_math_fround === 'undefined' ? 'undefined' : _typeof(es6_math_fround)) === 'object' && 'default' in es6_math_fround ? es6_math_fround['default'] : es6_math_fround;

	var es6_math_expm1 = createCommonjsModule(function (module) {
	  // 20.2.2.14 Math.expm1(x)
	  var $export = require$$26,
	      $expm1 = require$$0$39;

	  $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });
	});

	es6_math_expm1 && (typeof es6_math_expm1 === 'undefined' ? 'undefined' : _typeof(es6_math_expm1)) === 'object' && 'default' in es6_math_expm1 ? es6_math_expm1['default'] : es6_math_expm1;

	var es6_math_cosh = createCommonjsModule(function (module) {
	  // 20.2.2.12 Math.cosh(x)
	  var $export = require$$26,
	      exp = Math.exp;

	  $export($export.S, 'Math', {
	    cosh: function cosh(x) {
	      return (exp(x = +x) + exp(-x)) / 2;
	    }
	  });
	});

	es6_math_cosh && (typeof es6_math_cosh === 'undefined' ? 'undefined' : _typeof(es6_math_cosh)) === 'object' && 'default' in es6_math_cosh ? es6_math_cosh['default'] : es6_math_cosh;

	var es6_math_clz32 = createCommonjsModule(function (module) {
	  // 20.2.2.11 Math.clz32(x)
	  var $export = require$$26;

	  $export($export.S, 'Math', {
	    clz32: function clz32(x) {
	      return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	    }
	  });
	});

	es6_math_clz32 && (typeof es6_math_clz32 === 'undefined' ? 'undefined' : _typeof(es6_math_clz32)) === 'object' && 'default' in es6_math_clz32 ? es6_math_clz32['default'] : es6_math_clz32;

	var es6_math_cbrt = createCommonjsModule(function (module) {
	  // 20.2.2.9 Math.cbrt(x)
	  var $export = require$$26,
	      sign = require$$0$40;

	  $export($export.S, 'Math', {
	    cbrt: function cbrt(x) {
	      return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	    }
	  });
	});

	es6_math_cbrt && (typeof es6_math_cbrt === 'undefined' ? 'undefined' : _typeof(es6_math_cbrt)) === 'object' && 'default' in es6_math_cbrt ? es6_math_cbrt['default'] : es6_math_cbrt;

	var es6_math_atanh = createCommonjsModule(function (module) {
	  // 20.2.2.7 Math.atanh(x)
	  var $export = require$$26,
	      $atanh = Math.atanh;

	  // Tor Browser bug: Math.atanh(-0) -> 0
	  $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	    atanh: function atanh(x) {
	      return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	    }
	  });
	});

	es6_math_atanh && (typeof es6_math_atanh === 'undefined' ? 'undefined' : _typeof(es6_math_atanh)) === 'object' && 'default' in es6_math_atanh ? es6_math_atanh['default'] : es6_math_atanh;

	var es6_math_asinh = createCommonjsModule(function (module) {
	  // 20.2.2.5 Math.asinh(x)
	  var $export = require$$26,
	      $asinh = Math.asinh;

	  function asinh(x) {
	    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	  }

	  // Tor Browser bug: Math.asinh(0) -> -0
	  $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });
	});

	es6_math_asinh && (typeof es6_math_asinh === 'undefined' ? 'undefined' : _typeof(es6_math_asinh)) === 'object' && 'default' in es6_math_asinh ? es6_math_asinh['default'] : es6_math_asinh;

	var es6_math_acosh = createCommonjsModule(function (module) {
	  // 20.2.2.3 Math.acosh(x)
	  var $export = require$$26,
	      log1p = require$$0$41,
	      sqrt = Math.sqrt,
	      $acosh = Math.acosh;

	  $export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN
	  && $acosh(Infinity) == Infinity), 'Math', {
	    acosh: function acosh(x) {
	      return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	    }
	  });
	});

	es6_math_acosh && (typeof es6_math_acosh === 'undefined' ? 'undefined' : _typeof(es6_math_acosh)) === 'object' && 'default' in es6_math_acosh ? es6_math_acosh['default'] : es6_math_acosh;

	var _parseInt = createCommonjsModule(function (module) {
	  var $parseInt = require$$29.parseInt,
	      $trim = require$$3$4.trim,
	      ws = require$$0$28,
	      hex = /^[\-+]?0[xX]/;

	  module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	    var string = $trim(String(str), 3);
	    return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
	  } : $parseInt;
	});

	var require$$0$42 = _parseInt && (typeof _parseInt === 'undefined' ? 'undefined' : _typeof(_parseInt)) === 'object' && 'default' in _parseInt ? _parseInt['default'] : _parseInt;

	var es6_number_parseInt = createCommonjsModule(function (module) {
	  var $export = require$$26,
	      $parseInt = require$$0$42;
	  // 20.1.2.13 Number.parseInt(string, radix)
	  $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });
	});

	es6_number_parseInt && (typeof es6_number_parseInt === 'undefined' ? 'undefined' : _typeof(es6_number_parseInt)) === 'object' && 'default' in es6_number_parseInt ? es6_number_parseInt['default'] : es6_number_parseInt;

	var _parseFloat = createCommonjsModule(function (module) {
	  var $parseFloat = require$$29.parseFloat,
	      $trim = require$$3$4.trim;

	  module.exports = 1 / $parseFloat(require$$0$28 + '-0') !== -Infinity ? function parseFloat(str) {
	    var string = $trim(String(str), 3),
	        result = $parseFloat(string);
	    return result === 0 && string.charAt(0) == '-' ? -0 : result;
	  } : $parseFloat;
	});

	var require$$0$43 = _parseFloat && (typeof _parseFloat === 'undefined' ? 'undefined' : _typeof(_parseFloat)) === 'object' && 'default' in _parseFloat ? _parseFloat['default'] : _parseFloat;

	var es6_number_parseFloat = createCommonjsModule(function (module) {
	  var $export = require$$26,
	      $parseFloat = require$$0$43;
	  // 20.1.2.12 Number.parseFloat(string)
	  $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });
	});

	es6_number_parseFloat && (typeof es6_number_parseFloat === 'undefined' ? 'undefined' : _typeof(es6_number_parseFloat)) === 'object' && 'default' in es6_number_parseFloat ? es6_number_parseFloat['default'] : es6_number_parseFloat;

	var es6_number_minSafeInteger = createCommonjsModule(function (module) {
	  // 20.1.2.10 Number.MIN_SAFE_INTEGER
	  var $export = require$$26;

	  $export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });
	});

	es6_number_minSafeInteger && (typeof es6_number_minSafeInteger === 'undefined' ? 'undefined' : _typeof(es6_number_minSafeInteger)) === 'object' && 'default' in es6_number_minSafeInteger ? es6_number_minSafeInteger['default'] : es6_number_minSafeInteger;

	var es6_number_maxSafeInteger = createCommonjsModule(function (module) {
	  // 20.1.2.6 Number.MAX_SAFE_INTEGER
	  var $export = require$$26;

	  $export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });
	});

	es6_number_maxSafeInteger && (typeof es6_number_maxSafeInteger === 'undefined' ? 'undefined' : _typeof(es6_number_maxSafeInteger)) === 'object' && 'default' in es6_number_maxSafeInteger ? es6_number_maxSafeInteger['default'] : es6_number_maxSafeInteger;

	var es6_number_isSafeInteger = createCommonjsModule(function (module) {
	  // 20.1.2.5 Number.isSafeInteger(number)
	  var $export = require$$26,
	      isInteger = require$$0$33,
	      abs = Math.abs;

	  $export($export.S, 'Number', {
	    isSafeInteger: function isSafeInteger(number) {
	      return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	    }
	  });
	});

	es6_number_isSafeInteger && (typeof es6_number_isSafeInteger === 'undefined' ? 'undefined' : _typeof(es6_number_isSafeInteger)) === 'object' && 'default' in es6_number_isSafeInteger ? es6_number_isSafeInteger['default'] : es6_number_isSafeInteger;

	var es6_number_isNan = createCommonjsModule(function (module) {
	  // 20.1.2.4 Number.isNaN(number)
	  var $export = require$$26;

	  $export($export.S, 'Number', {
	    isNaN: function isNaN(number) {
	      return number != number;
	    }
	  });
	});

	es6_number_isNan && (typeof es6_number_isNan === 'undefined' ? 'undefined' : _typeof(es6_number_isNan)) === 'object' && 'default' in es6_number_isNan ? es6_number_isNan['default'] : es6_number_isNan;

	var es6_number_isInteger = createCommonjsModule(function (module) {
	  // 20.1.2.3 Number.isInteger(number)
	  var $export = require$$26;

	  $export($export.S, 'Number', { isInteger: require$$0$33 });
	});

	es6_number_isInteger && (typeof es6_number_isInteger === 'undefined' ? 'undefined' : _typeof(es6_number_isInteger)) === 'object' && 'default' in es6_number_isInteger ? es6_number_isInteger['default'] : es6_number_isInteger;

	var es6_number_isFinite = createCommonjsModule(function (module) {
	  // 20.1.2.2 Number.isFinite(number)
	  var $export = require$$26,
	      _isFinite = require$$29.isFinite;

	  $export($export.S, 'Number', {
	    isFinite: function isFinite(it) {
	      return typeof it == 'number' && _isFinite(it);
	    }
	  });
	});

	es6_number_isFinite && (typeof es6_number_isFinite === 'undefined' ? 'undefined' : _typeof(es6_number_isFinite)) === 'object' && 'default' in es6_number_isFinite ? es6_number_isFinite['default'] : es6_number_isFinite;

	var es6_number_epsilon = createCommonjsModule(function (module) {
	  // 20.1.2.1 Number.EPSILON
	  var $export = require$$26;

	  $export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });
	});

	es6_number_epsilon && (typeof es6_number_epsilon === 'undefined' ? 'undefined' : _typeof(es6_number_epsilon)) === 'object' && 'default' in es6_number_epsilon ? es6_number_epsilon['default'] : es6_number_epsilon;

	var _aNumberValue = createCommonjsModule(function (module) {
	  var cof = require$$10$1;
	  module.exports = function (it, msg) {
	    if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
	    return +it;
	  };
	});

	var require$$2$6 = _aNumberValue && (typeof _aNumberValue === 'undefined' ? 'undefined' : _typeof(_aNumberValue)) === 'object' && 'default' in _aNumberValue ? _aNumberValue['default'] : _aNumberValue;

	var es6_number_toPrecision = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      $fails = require$$23,
	      aNumberValue = require$$2$6,
	      $toPrecision = 1..toPrecision;

	  $export($export.P + $export.F * ($fails(function () {
	    // IE7-
	    return $toPrecision.call(1, undefined) !== '1';
	  }) || !$fails(function () {
	    // V8 ~ Android 4.3-
	    $toPrecision.call({});
	  })), 'Number', {
	    toPrecision: function toPrecision(precision) {
	      var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	      return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	    }
	  });
	});

	es6_number_toPrecision && (typeof es6_number_toPrecision === 'undefined' ? 'undefined' : _typeof(es6_number_toPrecision)) === 'object' && 'default' in es6_number_toPrecision ? es6_number_toPrecision['default'] : es6_number_toPrecision;

	var es6_number_toFixed = createCommonjsModule(function (module) {
	  'use strict';

	  var $export = require$$26,
	      anInstance = require$$4$3,
	      toInteger = require$$3$1,
	      aNumberValue = require$$2$6,
	      repeat = require$$1$16,
	      $toFixed = 1..toFixed,
	      floor = Math.floor,
	      data = [0, 0, 0, 0, 0, 0],
	      ERROR = 'Number.toFixed: incorrect invocation!',
	      ZERO = '0';

	  var multiply = function multiply(n, c) {
	    var i = -1,
	        c2 = c;
	    while (++i < 6) {
	      c2 += n * data[i];
	      data[i] = c2 % 1e7;
	      c2 = floor(c2 / 1e7);
	    }
	  };
	  var divide = function divide(n) {
	    var i = 6,
	        c = 0;
	    while (--i >= 0) {
	      c += data[i];
	      data[i] = floor(c / n);
	      c = c % n * 1e7;
	    }
	  };
	  var numToString = function numToString() {
	    var i = 6,
	        s = '';
	    while (--i >= 0) {
	      if (s !== '' || i === 0 || data[i] !== 0) {
	        var t = String(data[i]);
	        s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	      }
	    }return s;
	  };
	  var pow = function pow(x, n, acc) {
	    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	  };
	  var log = function log(x) {
	    var n = 0,
	        x2 = x;
	    while (x2 >= 4096) {
	      n += 12;
	      x2 /= 4096;
	    }
	    while (x2 >= 2) {
	      n += 1;
	      x2 /= 2;
	    }return n;
	  };

	  $export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128..toFixed(0) !== '1000000000000000128') || !require$$23(function () {
	    // V8 ~ Android 4.3-
	    $toFixed.call({});
	  })), 'Number', {
	    toFixed: function toFixed(fractionDigits) {
	      var x = aNumberValue(this, ERROR),
	          f = toInteger(fractionDigits),
	          s = '',
	          m = ZERO,
	          e,
	          z,
	          j,
	          k;
	      if (f < 0 || f > 20) throw RangeError(ERROR);
	      if (x != x) return 'NaN';
	      if (x <= -1e21 || x >= 1e21) return String(x);
	      if (x < 0) {
	        s = '-';
	        x = -x;
	      }
	      if (x > 1e-21) {
	        e = log(x * pow(2, 69, 1)) - 69;
	        z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	        z *= 0x10000000000000;
	        e = 52 - e;
	        if (e > 0) {
	          multiply(0, z);
	          j = f;
	          while (j >= 7) {
	            multiply(1e7, 0);
	            j -= 7;
	          }
	          multiply(pow(10, j, 1), 0);
	          j = e - 1;
	          while (j >= 23) {
	            divide(1 << 23);
	            j -= 23;
	          }
	          divide(1 << j);
	          multiply(1, 1);
	          divide(2);
	          m = numToString();
	        } else {
	          multiply(0, z);
	          multiply(1 << -e, 0);
	          m = numToString() + repeat.call(ZERO, f);
	        }
	      }
	      if (f > 0) {
	        k = m.length;
	        m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	      } else {
	        m = s + m;
	      }return m;
	    }
	  });
	});

	es6_number_toFixed && (typeof es6_number_toFixed === 'undefined' ? 'undefined' : _typeof(es6_number_toFixed)) === 'object' && 'default' in es6_number_toFixed ? es6_number_toFixed['default'] : es6_number_toFixed;

	var es6_number_constructor = createCommonjsModule(function (module) {
	  'use strict';

	  var global = require$$29,
	      has = require$$28,
	      cof = require$$10$1,
	      inheritIfRequired = require$$9$1,
	      toPrimitive = require$$11,
	      fails = require$$23,
	      gOPN = require$$4$5.f,
	      gOPD = require$$7$2.f,
	      dP = require$$6.f,
	      $trim = require$$3$4.trim,
	      NUMBER = 'Number',
	      $Number = global[NUMBER],
	      Base = $Number,
	      proto = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  ,
	      BROKEN_COF = cof(require$$9(proto)) == NUMBER,
	      TRIM = 'trim' in String.prototype;

	  // 7.1.3 ToNumber(argument)
	  var toNumber = function toNumber(argument) {
	    var it = toPrimitive(argument, false);
	    if (typeof it == 'string' && it.length > 2) {
	      it = TRIM ? it.trim() : $trim(it, 3);
	      var first = it.charCodeAt(0),
	          third,
	          radix,
	          maxCode;
	      if (first === 43 || first === 45) {
	        third = it.charCodeAt(2);
	        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	      } else if (first === 48) {
	        switch (it.charCodeAt(1)) {
	          case 66:case 98:
	            radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
	          case 79:case 111:
	            radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
	          default:
	            return +it;
	        }
	        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	          code = digits.charCodeAt(i);
	          // parseInt parses a string to a first unavailable symbol
	          // but ToNumber should return NaN if a string contains unavailable symbols
	          if (code < 48 || code > maxCode) return NaN;
	        }return parseInt(digits, radix);
	      }
	    }return +it;
	  };

	  if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	    $Number = function Number(value) {
	      var it = arguments.length < 1 ? 0 : value,
	          that = this;
	      return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function () {
	        proto.valueOf.call(that);
	      }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	    };
	    for (var keys = require$$27 ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
	      if (has(Base, key = keys[j]) && !has($Number, key)) {
	        dP($Number, key, gOPD(Base, key));
	      }
	    }
	    $Number.prototype = proto;
	    proto.constructor = $Number;
	    require$$25(global, NUMBER, $Number);
	  }
	});

	es6_number_constructor && (typeof es6_number_constructor === 'undefined' ? 'undefined' : _typeof(es6_number_constructor)) === 'object' && 'default' in es6_number_constructor ? es6_number_constructor['default'] : es6_number_constructor;

	var es6_parseFloat = createCommonjsModule(function (module) {
	  var $export = require$$26,
	      $parseFloat = require$$0$43;
	  // 18.2.4 parseFloat(string)
	  $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });
	});

	es6_parseFloat && (typeof es6_parseFloat === 'undefined' ? 'undefined' : _typeof(es6_parseFloat)) === 'object' && 'default' in es6_parseFloat ? es6_parseFloat['default'] : es6_parseFloat;

	var es6_parseInt = createCommonjsModule(function (module) {
	  var $export = require$$26,
	      $parseInt = require$$0$42;
	  // 18.2.5 parseInt(string, radix)
	  $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });
	});

	es6_parseInt && (typeof es6_parseInt === 'undefined' ? 'undefined' : _typeof(es6_parseInt)) === 'object' && 'default' in es6_parseInt ? es6_parseInt['default'] : es6_parseInt;

	var es6_function_hasInstance = createCommonjsModule(function (module) {
	  'use strict';

	  var isObject = require$$2,
	      getPrototypeOf = require$$1$3,
	      HAS_INSTANCE = require$$19('hasInstance'),
	      FunctionProto = Function.prototype;
	  // 19.2.3.6 Function.prototype[@@hasInstance](V)
	  if (!(HAS_INSTANCE in FunctionProto)) require$$6.f(FunctionProto, HAS_INSTANCE, { value: function value(O) {
	      if (typeof this != 'function' || !isObject(O)) return false;
	      if (!isObject(this.prototype)) return O instanceof this;
	      // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	      while (O = getPrototypeOf(O)) {
	        if (this.prototype === O) return true;
	      }return false;
	    } });
	});

	es6_function_hasInstance && (typeof es6_function_hasInstance === 'undefined' ? 'undefined' : _typeof(es6_function_hasInstance)) === 'object' && 'default' in es6_function_hasInstance ? es6_function_hasInstance['default'] : es6_function_hasInstance;

	var es6_function_name = createCommonjsModule(function (module) {
	  var dP = require$$6.f,
	      createDesc = require$$10,
	      has = require$$28,
	      FProto = Function.prototype,
	      nameRE = /^\s*function ([^ (]*)/,
	      NAME = 'name';

	  var isExtensible = Object.isExtensible || function () {
	    return true;
	  };

	  // 19.2.4.2 name
	  NAME in FProto || require$$27 && dP(FProto, NAME, {
	    configurable: true,
	    get: function get() {
	      try {
	        var that = this,
	            name = ('' + that).match(nameRE)[1];
	        has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	        return name;
	      } catch (e) {
	        return '';
	      }
	    }
	  });
	});

	es6_function_name && (typeof es6_function_name === 'undefined' ? 'undefined' : _typeof(es6_function_name)) === 'object' && 'default' in es6_function_name ? es6_function_name['default'] : es6_function_name;

	var es6_function_bind = createCommonjsModule(function (module) {
	  // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	  var $export = require$$26;

	  $export($export.P, 'Function', { bind: require$$0$30 });
	});

	es6_function_bind && (typeof es6_function_bind === 'undefined' ? 'undefined' : _typeof(es6_function_bind)) === 'object' && 'default' in es6_function_bind ? es6_function_bind['default'] : es6_function_bind;

	var es6_object_toString = createCommonjsModule(function (module) {
	  'use strict';
	  // 19.1.3.6 Object.prototype.toString()

	  var classof = require$$2$4,
	      test = {};
	  test[require$$19('toStringTag')] = 'z';
	  if (test + '' != '[object z]') {
	    require$$25(Object.prototype, 'toString', function toString() {
	      return '[object ' + classof(this) + ']';
	    }, true);
	  }
	});

	es6_object_toString && (typeof es6_object_toString === 'undefined' ? 'undefined' : _typeof(es6_object_toString)) === 'object' && 'default' in es6_object_toString ? es6_object_toString['default'] : es6_object_toString;

	var es6_object_setPrototypeOf = createCommonjsModule(function (module) {
	  // 19.1.3.19 Object.setPrototypeOf(O, proto)
	  var $export = require$$26;
	  $export($export.S, 'Object', { setPrototypeOf: require$$0$17.set });
	});

	es6_object_setPrototypeOf && (typeof es6_object_setPrototypeOf === 'undefined' ? 'undefined' : _typeof(es6_object_setPrototypeOf)) === 'object' && 'default' in es6_object_setPrototypeOf ? es6_object_setPrototypeOf['default'] : es6_object_setPrototypeOf;

	var es6_object_is = createCommonjsModule(function (module) {
	  // 19.1.3.10 Object.is(value1, value2)
	  var $export = require$$26;
	  $export($export.S, 'Object', { is: require$$0$32 });
	});

	es6_object_is && (typeof es6_object_is === 'undefined' ? 'undefined' : _typeof(es6_object_is)) === 'object' && 'default' in es6_object_is ? es6_object_is['default'] : es6_object_is;

	var es6_object_assign = createCommonjsModule(function (module) {
	  // 19.1.3.1 Object.assign(target, source)
	  var $export = require$$26;

	  $export($export.S + $export.F, 'Object', { assign: require$$0$22 });
	});

	es6_object_assign && (typeof es6_object_assign === 'undefined' ? 'undefined' : _typeof(es6_object_assign)) === 'object' && 'default' in es6_object_assign ? es6_object_assign['default'] : es6_object_assign;

	var _objectSap = createCommonjsModule(function (module) {
	  // most Object methods by ES6 should accept primitives
	  var $export = require$$26,
	      core = require$$1,
	      fails = require$$23;
	  module.exports = function (KEY, exec) {
	    var fn = (core.Object || {})[KEY] || Object[KEY],
	        exp = {};
	    exp[KEY] = exec(fn);
	    $export($export.S + $export.F * fails(function () {
	      fn(1);
	    }), 'Object', exp);
	  };
	});

	var require$$0$44 = _objectSap && (typeof _objectSap === 'undefined' ? 'undefined' : _typeof(_objectSap)) === 'object' && 'default' in _objectSap ? _objectSap['default'] : _objectSap;

	var es6_object_isExtensible = createCommonjsModule(function (module) {
	  // 19.1.2.11 Object.isExtensible(O)
	  var isObject = require$$2;

	  require$$0$44('isExtensible', function ($isExtensible) {
	    return function isExtensible(it) {
	      return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	    };
	  });
	});

	es6_object_isExtensible && (typeof es6_object_isExtensible === 'undefined' ? 'undefined' : _typeof(es6_object_isExtensible)) === 'object' && 'default' in es6_object_isExtensible ? es6_object_isExtensible['default'] : es6_object_isExtensible;

	var es6_object_isSealed = createCommonjsModule(function (module) {
	  // 19.1.2.13 Object.isSealed(O)
	  var isObject = require$$2;

	  require$$0$44('isSealed', function ($isSealed) {
	    return function isSealed(it) {
	      return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	    };
	  });
	});

	es6_object_isSealed && (typeof es6_object_isSealed === 'undefined' ? 'undefined' : _typeof(es6_object_isSealed)) === 'object' && 'default' in es6_object_isSealed ? es6_object_isSealed['default'] : es6_object_isSealed;

	var es6_object_isFrozen = createCommonjsModule(function (module) {
	  // 19.1.2.12 Object.isFrozen(O)
	  var isObject = require$$2;

	  require$$0$44('isFrozen', function ($isFrozen) {
	    return function isFrozen(it) {
	      return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	    };
	  });
	});

	es6_object_isFrozen && (typeof es6_object_isFrozen === 'undefined' ? 'undefined' : _typeof(es6_object_isFrozen)) === 'object' && 'default' in es6_object_isFrozen ? es6_object_isFrozen['default'] : es6_object_isFrozen;

	var es6_object_preventExtensions = createCommonjsModule(function (module) {
	  // 19.1.2.15 Object.preventExtensions(O)
	  var isObject = require$$2,
	      meta = require$$24.onFreeze;

	  require$$0$44('preventExtensions', function ($preventExtensions) {
	    return function preventExtensions(it) {
	      return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	    };
	  });
	});

	es6_object_preventExtensions && (typeof es6_object_preventExtensions === 'undefined' ? 'undefined' : _typeof(es6_object_preventExtensions)) === 'object' && 'default' in es6_object_preventExtensions ? es6_object_preventExtensions['default'] : es6_object_preventExtensions;

	var es6_object_seal = createCommonjsModule(function (module) {
	  // 19.1.2.17 Object.seal(O)
	  var isObject = require$$2,
	      meta = require$$24.onFreeze;

	  require$$0$44('seal', function ($seal) {
	    return function seal(it) {
	      return $seal && isObject(it) ? $seal(meta(it)) : it;
	    };
	  });
	});

	es6_object_seal && (typeof es6_object_seal === 'undefined' ? 'undefined' : _typeof(es6_object_seal)) === 'object' && 'default' in es6_object_seal ? es6_object_seal['default'] : es6_object_seal;

	var es6_object_freeze = createCommonjsModule(function (module) {
	  // 19.1.2.5 Object.freeze(O)
	  var isObject = require$$2,
	      meta = require$$24.onFreeze;

	  require$$0$44('freeze', function ($freeze) {
	    return function freeze(it) {
	      return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	    };
	  });
	});

	es6_object_freeze && (typeof es6_object_freeze === 'undefined' ? 'undefined' : _typeof(es6_object_freeze)) === 'object' && 'default' in es6_object_freeze ? es6_object_freeze['default'] : es6_object_freeze;

	var _objectGopnExt = createCommonjsModule(function (module) {
	  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	  var toIObject = require$$0$10,
	      gOPN = require$$4$5.f,
	      toString = {}.toString;

	  var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

	  var getWindowNames = function getWindowNames(it) {
	    try {
	      return gOPN(it);
	    } catch (e) {
	      return windowNames.slice();
	    }
	  };

	  module.exports.f = function getOwnPropertyNames(it) {
	    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	  };
	});

	var require$$8$2 = _objectGopnExt && (typeof _objectGopnExt === 'undefined' ? 'undefined' : _typeof(_objectGopnExt)) === 'object' && 'default' in _objectGopnExt ? _objectGopnExt['default'] : _objectGopnExt;

	var es6_object_getOwnPropertyNames = createCommonjsModule(function (module) {
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  require$$0$44('getOwnPropertyNames', function () {
	    return require$$8$2.f;
	  });
	});

	es6_object_getOwnPropertyNames && (typeof es6_object_getOwnPropertyNames === 'undefined' ? 'undefined' : _typeof(es6_object_getOwnPropertyNames)) === 'object' && 'default' in es6_object_getOwnPropertyNames ? es6_object_getOwnPropertyNames['default'] : es6_object_getOwnPropertyNames;

	var es6_object_keys = createCommonjsModule(function (module) {
	  // 19.1.2.14 Object.keys(O)
	  var toObject = require$$2$2,
	      $keys = require$$1$4;

	  require$$0$44('keys', function () {
	    return function keys(it) {
	      return $keys(toObject(it));
	    };
	  });
	});

	es6_object_keys && (typeof es6_object_keys === 'undefined' ? 'undefined' : _typeof(es6_object_keys)) === 'object' && 'default' in es6_object_keys ? es6_object_keys['default'] : es6_object_keys;

	var es6_object_getPrototypeOf = createCommonjsModule(function (module) {
	  // 19.1.2.9 Object.getPrototypeOf(O)
	  var toObject = require$$2$2,
	      $getPrototypeOf = require$$1$3;

	  require$$0$44('getPrototypeOf', function () {
	    return function getPrototypeOf(it) {
	      return $getPrototypeOf(toObject(it));
	    };
	  });
	});

	es6_object_getPrototypeOf && (typeof es6_object_getPrototypeOf === 'undefined' ? 'undefined' : _typeof(es6_object_getPrototypeOf)) === 'object' && 'default' in es6_object_getPrototypeOf ? es6_object_getPrototypeOf['default'] : es6_object_getPrototypeOf;

	var es6_object_getOwnPropertyDescriptor = createCommonjsModule(function (module) {
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  var toIObject = require$$0$10,
	      $getOwnPropertyDescriptor = require$$7$2.f;

	  require$$0$44('getOwnPropertyDescriptor', function () {
	    return function getOwnPropertyDescriptor(it, key) {
	      return $getOwnPropertyDescriptor(toIObject(it), key);
	    };
	  });
	});

	es6_object_getOwnPropertyDescriptor && (typeof es6_object_getOwnPropertyDescriptor === 'undefined' ? 'undefined' : _typeof(es6_object_getOwnPropertyDescriptor)) === 'object' && 'default' in es6_object_getOwnPropertyDescriptor ? es6_object_getOwnPropertyDescriptor['default'] : es6_object_getOwnPropertyDescriptor;

	var es6_object_defineProperties = createCommonjsModule(function (module) {
	  var $export = require$$26;
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  $export($export.S + $export.F * !require$$27, 'Object', { defineProperties: require$$0$7 });
	});

	es6_object_defineProperties && (typeof es6_object_defineProperties === 'undefined' ? 'undefined' : _typeof(es6_object_defineProperties)) === 'object' && 'default' in es6_object_defineProperties ? es6_object_defineProperties['default'] : es6_object_defineProperties;

	var es6_object_defineProperty = createCommonjsModule(function (module) {
	  var $export = require$$26;
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  $export($export.S + $export.F * !require$$27, 'Object', { defineProperty: require$$6.f });
	});

	es6_object_defineProperty && (typeof es6_object_defineProperty === 'undefined' ? 'undefined' : _typeof(es6_object_defineProperty)) === 'object' && 'default' in es6_object_defineProperty ? es6_object_defineProperty['default'] : es6_object_defineProperty;

	var es6_object_create = createCommonjsModule(function (module) {
	  var $export = require$$26;
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  $export($export.S, 'Object', { create: require$$9 });
	});

	es6_object_create && (typeof es6_object_create === 'undefined' ? 'undefined' : _typeof(es6_object_create)) === 'object' && 'default' in es6_object_create ? es6_object_create['default'] : es6_object_create;

	var _enumKeys = createCommonjsModule(function (module) {
	  // all enumerable object keys, includes symbols
	  var getKeys = require$$1$4,
	      gOPS = require$$1$13,
	      pIE = require$$0$18;
	  module.exports = function (it) {
	    var result = getKeys(it),
	        getSymbols = gOPS.f;
	    if (getSymbols) {
	      var symbols = getSymbols(it),
	          isEnum = pIE.f,
	          i = 0,
	          key;
	      while (symbols.length > i) {
	        if (isEnum.call(it, key = symbols[i++])) result.push(key);
	      }
	    }return result;
	  };
	});

	var require$$15 = _enumKeys && (typeof _enumKeys === 'undefined' ? 'undefined' : _typeof(_enumKeys)) === 'object' && 'default' in _enumKeys ? _enumKeys['default'] : _enumKeys;

	var _keyof = createCommonjsModule(function (module) {
	  var getKeys = require$$1$4,
	      toIObject = require$$0$10;
	  module.exports = function (object, el) {
	    var O = toIObject(object),
	        keys = getKeys(O),
	        length = keys.length,
	        index = 0,
	        key;
	    while (length > index) {
	      if (O[key = keys[index++]] === el) return key;
	    }
	  };
	});

	var require$$16 = _keyof && (typeof _keyof === 'undefined' ? 'undefined' : _typeof(_keyof)) === 'object' && 'default' in _keyof ? _keyof['default'] : _keyof;

	var es6_symbol = createCommonjsModule(function (module) {
	  'use strict';
	  // ECMAScript 6 symbols shim

	  var global = require$$29,
	      has = require$$28,
	      DESCRIPTORS = require$$27,
	      $export = require$$26,
	      redefine = require$$25,
	      META = require$$24.KEY,
	      $fails = require$$23,
	      shared = require$$22,
	      setToStringTag = require$$21,
	      uid = require$$20,
	      wks = require$$19,
	      wksExt = require$$18,
	      wksDefine = require$$17,
	      keyOf = require$$16,
	      enumKeys = require$$15,
	      isArray = require$$14,
	      anObject = require$$13,
	      toIObject = require$$0$10,
	      toPrimitive = require$$11,
	      createDesc = require$$10,
	      _create = require$$9,
	      gOPNExt = require$$8$2,
	      $GOPD = require$$7$2,
	      $DP = require$$6,
	      $keys = require$$1$4,
	      gOPD = $GOPD.f,
	      dP = $DP.f,
	      gOPN = gOPNExt.f,
	      $Symbol = global.Symbol,
	      $JSON = global.JSON,
	      _stringify = $JSON && $JSON.stringify,
	      PROTOTYPE = 'prototype',
	      HIDDEN = wks('_hidden'),
	      TO_PRIMITIVE = wks('toPrimitive'),
	      isEnum = {}.propertyIsEnumerable,
	      SymbolRegistry = shared('symbol-registry'),
	      AllSymbols = shared('symbols'),
	      OPSymbols = shared('op-symbols'),
	      ObjectProto = Object[PROTOTYPE],
	      USE_NATIVE = typeof $Symbol == 'function',
	      QObject = global.QObject;
	  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	  var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	  var setSymbolDesc = DESCRIPTORS && $fails(function () {
	    return _create(dP({}, 'a', {
	      get: function get() {
	        return dP(this, 'a', { value: 7 }).a;
	      }
	    })).a != 7;
	  }) ? function (it, key, D) {
	    var protoDesc = gOPD(ObjectProto, key);
	    if (protoDesc) delete ObjectProto[key];
	    dP(it, key, D);
	    if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	  } : dP;

	  var wrap = function wrap(tag) {
	    var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	    sym._k = tag;
	    return sym;
	  };

	  var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
	    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
	  } : function (it) {
	    return it instanceof $Symbol;
	  };

	  var $defineProperty = function defineProperty(it, key, D) {
	    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	    anObject(it);
	    key = toPrimitive(key, true);
	    anObject(D);
	    if (has(AllSymbols, key)) {
	      if (!D.enumerable) {
	        if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	        it[HIDDEN][key] = true;
	      } else {
	        if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	        D = _create(D, { enumerable: createDesc(0, false) });
	      }return setSymbolDesc(it, key, D);
	    }return dP(it, key, D);
	  };
	  var $defineProperties = function defineProperties(it, P) {
	    anObject(it);
	    var keys = enumKeys(P = toIObject(P)),
	        i = 0,
	        l = keys.length,
	        key;
	    while (l > i) {
	      $defineProperty(it, key = keys[i++], P[key]);
	    }return it;
	  };
	  var $create = function create(it, P) {
	    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	  };
	  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	    var E = isEnum.call(this, key = toPrimitive(key, true));
	    if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	  };
	  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	    it = toIObject(it);
	    key = toPrimitive(key, true);
	    if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	    var D = gOPD(it, key);
	    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	    return D;
	  };
	  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	    var names = gOPN(toIObject(it)),
	        result = [],
	        i = 0,
	        key;
	    while (names.length > i) {
	      if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	    }return result;
	  };
	  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	    var IS_OP = it === ObjectProto,
	        names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
	        result = [],
	        i = 0,
	        key;
	    while (names.length > i) {
	      if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	    }return result;
	  };

	  // 19.4.1.1 Symbol([description])
	  if (!USE_NATIVE) {
	    $Symbol = function _Symbol() {
	      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	      var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	      var $set = function $set(value) {
	        if (this === ObjectProto) $set.call(OPSymbols, value);
	        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	        setSymbolDesc(this, tag, createDesc(1, value));
	      };
	      if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	      return wrap(tag);
	    };
	    redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	      return this._k;
	    });

	    $GOPD.f = $getOwnPropertyDescriptor;
	    $DP.f = $defineProperty;
	    require$$4$5.f = gOPNExt.f = $getOwnPropertyNames;
	    require$$0$18.f = $propertyIsEnumerable;
	    require$$1$13.f = $getOwnPropertySymbols;

	    if (DESCRIPTORS && !require$$1$8) {
	      redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	    }

	    wksExt.f = function (name) {
	      return wrap(wks(name));
	    };
	  }

	  $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	  for (var symbols =
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) {
	    wks(symbols[i++]);
	  }for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) {
	    wksDefine(symbols[i++]);
	  }$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	    // 19.4.2.1 Symbol.for(key)
	    'for': function _for(key) {
	      return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	    },
	    // 19.4.2.5 Symbol.keyFor(sym)
	    keyFor: function keyFor(key) {
	      if (isSymbol(key)) return keyOf(SymbolRegistry, key);
	      throw TypeError(key + ' is not a symbol!');
	    },
	    useSetter: function useSetter() {
	      setter = true;
	    },
	    useSimple: function useSimple() {
	      setter = false;
	    }
	  });

	  $export($export.S + $export.F * !USE_NATIVE, 'Object', {
	    // 19.1.2.2 Object.create(O [, Properties])
	    create: $create,
	    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	    defineProperty: $defineProperty,
	    // 19.1.2.3 Object.defineProperties(O, Properties)
	    defineProperties: $defineProperties,
	    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	    // 19.1.2.7 Object.getOwnPropertyNames(O)
	    getOwnPropertyNames: $getOwnPropertyNames,
	    // 19.1.2.8 Object.getOwnPropertySymbols(O)
	    getOwnPropertySymbols: $getOwnPropertySymbols
	  });

	  // 24.3.2 JSON.stringify(value [, replacer [, space]])
	  $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	    var S = $Symbol();
	    // MS Edge converts symbol values to JSON as {}
	    // WebKit converts symbol values to JSON as null
	    // V8 throws on boxed symbols
	    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	  })), 'JSON', {
	    stringify: function stringify(it) {
	      if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	      var args = [it],
	          i = 1,
	          replacer,
	          $replacer;
	      while (arguments.length > i) {
	        args.push(arguments[i++]);
	      }replacer = args[1];
	      if (typeof replacer == 'function') $replacer = replacer;
	      if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
	        if ($replacer) value = $replacer.call(this, key, value);
	        if (!isSymbol(value)) return value;
	      };
	      args[1] = replacer;
	      return _stringify.apply($JSON, args);
	    }
	  });

	  // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	  $Symbol[PROTOTYPE][TO_PRIMITIVE] || require$$0$1($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	  // 19.4.3.5 Symbol.prototype[@@toStringTag]
	  setToStringTag($Symbol, 'Symbol');
	  // 20.2.1.9 Math[@@toStringTag]
	  setToStringTag(Math, 'Math', true);
	  // 24.3.3 JSON[@@toStringTag]
	  setToStringTag(global.JSON, 'JSON', true);
	});

	es6_symbol && (typeof es6_symbol === 'undefined' ? 'undefined' : _typeof(es6_symbol)) === 'object' && 'default' in es6_symbol ? es6_symbol['default'] : es6_symbol;

	var shim = createCommonjsModule(function (module) {
	  module.exports = require$$1;
	});

	shim && (typeof shim === 'undefined' ? 'undefined' : _typeof(shim)) === 'object' && 'default' in shim ? shim['default'] : shim;

	var index = createCommonjsModule(function (module) {
	  "use strict";

	  /* eslint max-len: 0 */

	  if (commonjsGlobal._babelPolyfill) {
	    throw new Error("only one instance of babel-polyfill is allowed");
	  }
	  commonjsGlobal._babelPolyfill = true;

	  // Should be removed in the next major release:

	  var DEFINE_PROPERTY = "defineProperty";
	  function define(O, key, value) {
	    O[key] || Object[DEFINE_PROPERTY](O, key, {
	      writable: true,
	      configurable: true,
	      value: value
	    });
	  }

	  define(String.prototype, "padLeft", "".padStart);
	  define(String.prototype, "padRight", "".padEnd);

	  "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	    [][key] && define(Array, key, Function.call.bind([][key]));
	  });
	});

	index && (typeof index === 'undefined' ? 'undefined' : _typeof(index)) === 'object' && 'default' in index ? index['default'] : index;

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

}());
//# sourceMappingURL=test.iife.js.map