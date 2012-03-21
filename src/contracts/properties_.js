(function() {
  var TAny, TAsyncSignalMap, TCallback, TCheckRet, TEventEmitterAsync, TFunc, TPropertyData, TPropertyDataFn, TPropertyInstanceof, TPropertyMethod, TPropertyMethodFunc, TPropertyMethodObj, TSignalBind, TSignalCallback, TSignalCheck, TSignalData, TSignalGetter, TSignalInstanceof, TSignalMethod, TSignalMethodFunc, TSignalRet;

  TCallback = fun([opt(Any)], opt(Any), {});

  TFunc = fun([opt(Any)], opt(Any), {});

  TAny = Any || TFunc;

  TEventEmitterAsync = object({
    on: fun([opt(Any)], Any, {}),
    emit: fun([opt(Any)], Any, {})
  }, {});

  TPropertyInstanceof = (function(x) {
    return x instanceof jsprops.Property || x.constructor === jsprops.Property;
  });

  TPropertyDataFn = fun([TAny], opt(TAny), {});

  TPropertyData = object({
    set: opt(TPropertyDataFn),
    init: opt(TPropertyDataFn),
    get: opt(TPropertyDataFn)
  }, {});

  TPropertyMethodFunc = fun([opt(Any)], Any, {});

  TPropertyMethodObj = object({
    init: Any,
    set: Any
  }, {});

  TPropertyMethod = TPropertyMethodFunc;

  TSignalCallback = fun([TCallback, opt(Any)], Any, {});

  TSignalData = object({
    on: opt(TSignalCallback),
    after: opt(TSignalCallback),
    before: opt(TSignalCallback),
    once: opt(TSignalCallback),
    init: opt(TSignalCallback)
  }, {});

  TSignalBind = fun([opt(TSignalCallback)], Any, {});

  TSignalRet = object({
    on: TSignalBind,
    once: TSignalBind,
    before: TSignalBind,
    after: TSignalBind,
    init: fun([], Any, {})
  }, {});

  TSignalGetter = fun([], TSignalRet, {});

  TSignalMethodFunc = fun([opt(TSignalCallback)], function($1) { return (function(x) {
    if ($1 === void 0) x = x;
    return true;
  }); }, {});

  TCheckRet = (function(x) {
    if ($1 === void 0) x = x;
    return true;
  });

  TSignalMethodFunc = fun([opt(TSignalCallback)], TCheckRet, {});

  TSignalMethod = TSignalMethodFunc;

  TSignalCheck = (function(data) {
    var args, args_undefined, ret;
    ret = data[0];
    args = data.slice(1);
    args_undefined = args.filter(function(x) {
      return x === void 0;
    });
    if (args_undefined.length === args.length) {
      return ret = ret;
    } else if (!args_undefined.length) {
      return true;
    } else {
      return false;
    }
  });

  TSignalInstanceof = (function(x) {
    return x instanceof jsprops.Signal || x.constructor === jsprops.Signal;
  });

  TAsyncSignalMap = (function(map) {
    var fn, m, method, methods, name, _i, _len;
    methods = ['on', 'once', 'before', 'after'];
    for (name in map) {
      fn = map[name];
      for (_i = 0, _len = methods.length; _i < _len; _i++) {
        m = methods[_i];
        method = fn[m];
      }
    }
    return true;
  });

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

}).call(this);