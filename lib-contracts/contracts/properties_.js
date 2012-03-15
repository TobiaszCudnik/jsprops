
((function(cb) {
  if (typeof(define) === 'function' && define.amd) {
    require(['contracts'], cb);
  } else if (typeof(require) === 'function') {
    cb(require('contracts.js'));
  } else {
    cb(window.contracts);
  }
})(function(__contracts) {
  var Undefined, Null, Num, Bool, Str, Odd, Even, Pos, Nat, Neg, Self, Any, None, __define, __require, __exports;

Undefined =  __contracts.Undefined;
Null      =  __contracts.Null;
Num       =  __contracts.Num;
Bool      =  __contracts.Bool;
Str       =  __contracts.Str;
Odd       =  __contracts.Odd;
Even      =  __contracts.Even;
Pos       =  __contracts.Pos;
Nat       =  __contracts.Nat;
Neg       =  __contracts.Neg;
Self      =  __contracts.Self;
Any       =  __contracts.Any;
None      =  __contracts.None;

if (typeof(define) === 'function' && define.amd) {
  // we're using requirejs

  // Allow for anonymous functions
  __define = function(name, deps, callback) {
    var cb, wrapped_callback;

    if(typeof(name) !== 'string') {
      cb = deps;
    } else {
      cb = callback;
    }


    wrapped_callback = function() {
      var i, ret, used_arguments = [];
      for (i = 0; i < arguments.length; i++) {
        used_arguments[i] = __contracts.use(arguments[i], "src/contracts/properties_.coffee");
      }
      ret = cb.apply(this, used_arguments);
      return __contracts.setExported(ret, "src/contracts/properties_.coffee");
    };

    if(!Array.isArray(deps)) {
      deps = wrapped_callback;
    }
    define(name, deps, wrapped_callback);
  };
} else if (typeof(require) !== 'undefined' && typeof(exports) !== 'undefined') {
  // we're using commonjs

  __exports = __contracts.exports("src/contracts/properties_.coffee", exports)
  __require = function(module) {
    module = require.apply(this, arguments);
    return __contracts.use(module, "src/contracts/properties_.coffee");
  };
}
  (function(define, require, exports) {
      var TAny, TAsyncSignalMap, TCallback, TCheckRet, TEventEmitterAsync, TFunc, TPropertyData, TPropertyDataFn, TPropertyInstanceof, TPropertyMethod, TPropertyMethodFunc, TPropertyMethodObj, TSignalBind, TSignalCallback, TSignalCheck, TSignalData, TSignalGetter, TSignalInstanceof, TSignalMethod, TSignalMethodFunc, TSignalRet;

  TCallback = __contracts.fun([__contracts.opt(Any)], __contracts.opt(Any), {});

  TFunc = __contracts.fun([__contracts.opt(Any)], __contracts.opt(Any), {});

  TAny = Any || TFunc;

  TEventEmitterAsync = __contracts.object({
    on: __contracts.fun([__contracts.opt(Any)], Any, {}),
    emit: __contracts.fun([__contracts.opt(Any)], Any, {})
  }, {});

  TPropertyInstanceof = (function(x) {
    return x instanceof jsprops.Property || x.constructor === jsprops.Property;
  }).toContract();

  TPropertyDataFn = __contracts.fun([TAny], __contracts.opt(TAny), {});

  TPropertyData = __contracts.object({
    set: __contracts.opt(TPropertyDataFn),
    init: __contracts.opt(TPropertyDataFn),
    get: __contracts.opt(TPropertyDataFn)
  }, {});

  TPropertyMethodFunc = __contracts.fun([__contracts.opt(Any)], Any, {});

  TPropertyMethodObj = __contracts.object({
    init: Any,
    set: Any
  }, {});

  TPropertyMethod = TPropertyMethodFunc;

  TSignalCallback = __contracts.fun([TCallback, __contracts.opt(Any)], Any, {});

  TSignalData = __contracts.object({
    on: __contracts.opt(TSignalCallback),
    after: __contracts.opt(TSignalCallback),
    before: __contracts.opt(TSignalCallback),
    once: __contracts.opt(TSignalCallback),
    init: __contracts.opt(TSignalCallback)
  }, {});

  TSignalBind = __contracts.fun([__contracts.opt(TSignalCallback)], Any, {});

  TSignalRet = __contracts.object({
    on: TSignalBind,
    once: TSignalBind,
    before: TSignalBind,
    after: TSignalBind,
    init: __contracts.fun([], Any, {})
  }, {});

  TSignalGetter = __contracts.fun([], TSignalRet, {});

  TSignalMethodFunc = __contracts.fun([__contracts.opt(TSignalCallback)], function($1) { return (function(x) {
    if ($1 === void 0) x = __contracts.guard(TSignalRet,x);
    return true;
  }).toContract(); }, {});

  TCheckRet = (function(x) {
    if ($1 === void 0) x = __contracts.guard(TSignalRet,x);
    return true;
  }).toContract();

  TSignalMethodFunc = __contracts.fun([__contracts.opt(TSignalCallback)], TCheckRet, {});

  TSignalMethod = TSignalMethodFunc;

  TSignalCheck = (function(data) {
    var args, args_undefined, ret;
    ret = data[0];
    args = data.slice(1);
    args_undefined = args.filter(function(x) {
      return x === void 0;
    });
    if (args_undefined.length === args.length) {
      return ret = __contracts.guard(TSignalRet,ret);
    } else if (!args_undefined.length) {
      return true;
    } else {
      return false;
    }
  }).toContract();

  TSignalInstanceof = (function(x) {
    return x instanceof jsprops.Signal || x.constructor === jsprops.Signal;
  }).toContract();

  TAsyncSignalMap = (function(map) {
    var fn, m, method, methods, name, _i, _len;
    methods = ['on', 'once', 'before', 'after'];
    for (name in map) {
      fn = map[name];
      for (_i = 0, _len = methods.length; _i < _len; _i++) {
        m = methods[_i];
        method = __contracts.guard(__contracts.fun([TSignalCallback], Any, {}),fn[m]);
      }
    }
    return true;
  }).toContract();

  module.exports = {
    TCallback: TCallback,
    TEventEmitterAsync: TEventEmitterAsync,
    TPropertyInstanceof: TPropertyInstanceof,
    TPropertyData: TPropertyData,
    TPropertyMethodFunc: TPropertyMethodFunc,
    TPropertyMethodObj: TPropertyMethodObj,
    TPropertyMethod: TPropertyMethod,
    TSignalCallback: TSignalCallback,
    TSignalData: TSignalData,
    TSignalGetter: TSignalGetter,
    TSignalMethodFunc: TSignalMethodFunc,
    TSignalMethod: TSignalMethod,
    TSignalCheck: TSignalCheck,
    TSignalInstanceof: TSignalInstanceof,
    TAsyncSignalMap: TAsyncSignalMap,
    TSignalRet: TSignalRet
  };

  }).call(this, __define, __require, __exports);
}));