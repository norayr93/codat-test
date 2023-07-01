import * as React from 'react';
import React__default, { createContext, useContext, useReducer, useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { useTheme, Typography, TextInput as TextInput$1, SearchIcon, IndicatorPill, Card, Button as Button$1, TextLink as TextLink$1, CircleIcon, ShieldCheckIcon, Modal, IconButton, CloseIcon, SyncIcon, CheckIcon, DashIcon, StepProgressBar, CircleQuestionIcon, FileItem, Spinner as Spinner$1, FileUpload, UploadIcon, LeftArrowIcon, InfoIcon, CircleAlertIcon, ThemeProvider, InfoBanner, CircleEmptyInfoIcon, CircleCheckIcon, Tooltip, TooltipContent, PlusIcon, InvoiceIcon, CartIcon, FileIcon, OrchardProvider } from '@codat/orchard-ui';
import { useLocation, Redirect, useRouteMatch, useHistory, useParams, Switch, Route, MemoryRouter } from 'react-router-dom';
import { compile } from 'path-to-regexp';
import queryString from 'query-string';
import axios from 'axios';
import useAxios, { configure } from 'axios-hooks';
import { from, merge as merge$1, interval, switchMap as switchMap$1 } from 'rxjs';
import { switchMap, tap, scan } from 'rxjs/operators';
import classNames from 'classnames';
import cookies from 'js-cookie';
import uniqBy from 'lodash.uniqby';
import merge$2 from 'lodash.merge';
import { useDebounce } from 'use-debounce';
import debounce from 'lodash.debounce';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$p =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$q = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$p = fails$q;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$p(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$o = fails$q;

var functionBindNative = !fails$o(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var call$m = Function.prototype.call;

var functionCall = NATIVE_BIND$3 ? call$m.bind(call$m) : function () {
  return call$m.apply(call$m, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$4(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$5 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$2 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var bind$6 = FunctionPrototype$2.bind;
var call$l = FunctionPrototype$2.call;
var uncurryThis$s = NATIVE_BIND$2 && bind$6.bind(call$l, call$l);

var functionUncurryThis = NATIVE_BIND$2 ? function (fn) {
  return fn && uncurryThis$s(fn);
} : function (fn) {
  return fn && function () {
    return call$l.apply(fn, arguments);
  };
};

var uncurryThis$r = functionUncurryThis;

var toString$e = uncurryThis$r({}.toString);
var stringSlice$8 = uncurryThis$r(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$8(toString$e(it), 8, -1);
};

var uncurryThis$q = functionUncurryThis;
var fails$n = fails$q;
var classof$9 = classofRaw$1;

var $Object$4 = Object;
var split$1 = uncurryThis$q(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$n(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$9(it) == 'String' ? split$1(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$8 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$7 = isNullOrUndefined$8;

var $TypeError$g = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$a = function (it) {
  if (isNullOrUndefined$7(it)) throw $TypeError$g("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$9 = requireObjectCoercible$a;

var toIndexedObject$5 = function (it) {
  return IndexedObject$2(requireObjectCoercible$9(it));
};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$o = function (argument) {
  return typeof argument == 'function';
};

var isCallable$n = isCallable$o;

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var SPECIAL_DOCUMENT_ALL = typeof documentAll == 'undefined' && documentAll !== undefined;

var isObject$a = SPECIAL_DOCUMENT_ALL ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$n(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$n(it);
};

var global$o = global$p;
var isCallable$m = isCallable$o;

var aFunction = function (argument) {
  return isCallable$m(argument) ? argument : undefined;
};

var getBuiltIn$8 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$o[namespace]) : global$o[namespace] && global$o[namespace][method];
};

var uncurryThis$p = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$p({}.isPrototypeOf);

var getBuiltIn$7 = getBuiltIn$8;

var engineUserAgent = getBuiltIn$7('navigator', 'userAgent') || '';

var global$n = global$p;
var userAgent$5 = engineUserAgent;

var process$4 = global$n.process;
var Deno$1 = global$n.Deno;
var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent$5) {
  match = userAgent$5.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$5.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es-x/no-symbol -- required for testing */

var V8_VERSION$1 = engineV8Version;
var fails$m = fails$q;

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$m(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es-x/no-symbol -- required for testing */

var NATIVE_SYMBOL$2 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$2
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$6 = getBuiltIn$8;
var isCallable$l = isCallable$o;
var isPrototypeOf$4 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
  return isCallable$l($Symbol) && isPrototypeOf$4($Symbol.prototype, $Object$3(it));
};

var $String$3 = String;

var tryToString$5 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$k = isCallable$o;
var tryToString$4 = tryToString$5;

var $TypeError$f = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$9 = function (argument) {
  if (isCallable$k(argument)) return argument;
  throw $TypeError$f(tryToString$4(argument) + ' is not a function');
};

var aCallable$8 = aCallable$9;
var isNullOrUndefined$6 = isNullOrUndefined$8;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$7 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$6(func) ? undefined : aCallable$8(func);
};

var call$k = functionCall;
var isCallable$j = isCallable$o;
var isObject$9 = isObject$a;

var $TypeError$e = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$j(fn = input.toString) && !isObject$9(val = call$k(fn, input))) return val;
  if (isCallable$j(fn = input.valueOf) && !isObject$9(val = call$k(fn, input))) return val;
  if (pref !== 'string' && isCallable$j(fn = input.toString) && !isObject$9(val = call$k(fn, input))) return val;
  throw $TypeError$e("Can't convert object to primitive value");
};

var shared$4 = { exports: {} };

var isPure = false;

var global$m = global$p;

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$6(global$m, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$m[key] = value;
  } return value;
};

var global$l = global$p;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$l[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.25.1',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.25.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$8 = requireObjectCoercible$a;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$6 = function (argument) {
  return $Object$2(requireObjectCoercible$8(argument));
};

var uncurryThis$o = functionUncurryThis;
var toObject$5 = toObject$6;

var hasOwnProperty = uncurryThis$o({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$5(it), key);
};

var uncurryThis$n = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$d = uncurryThis$n(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$d(++id + postfix, 36);
};

var global$k = global$p;
var shared$3 = shared$4.exports;
var hasOwn$c = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore = shared$3('wks');
var Symbol$2 = global$k.Symbol;
var symbolFor = Symbol$2 && Symbol$2['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

var wellKnownSymbol$k = function (name) {
  if (!hasOwn$c(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL$1 || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL$1 && hasOwn$c(Symbol$2, name)) {
      WellKnownSymbolsStore[name] = Symbol$2[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var call$j = functionCall;
var isObject$8 = isObject$a;
var isSymbol$1 = isSymbol$2;
var getMethod$6 = getMethod$7;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$j = wellKnownSymbol$k;

var $TypeError$d = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$j('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$8(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$6(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$j(exoticToPrim, input, pref);
    if (!isObject$8(result) || isSymbol$1(result)) return result;
    throw $TypeError$d("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$j = global$p;
var isObject$7 = isObject$a;

var document$3 = global$j.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$7(document$3) && isObject$7(document$3.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$c = descriptors;
var fails$l = fails$q;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$c && !fails$l(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$b = descriptors;
var call$i = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$b = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$b ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$b(O, P)) return createPropertyDescriptor$4(!call$i(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$a = descriptors;
var fails$k = fails$q;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$a && fails$k(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$6 = isObject$a;

var $String$2 = String;
var $TypeError$c = TypeError;

// `Assert: Type(argument) is Object`
var anObject$i = function (argument) {
  if (isObject$6(argument)) return argument;
  throw $TypeError$c($String$2(argument) + ' is not an object');
};

var DESCRIPTORS$9 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$h = anObject$i;
var toPropertyKey$1 = toPropertyKey$3;

var $TypeError$b = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$h(O);
  P = toPropertyKey$1(P);
  anObject$h(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$h(O);
  P = toPropertyKey$1(P);
  anObject$h(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$b('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$8 = descriptors;
var definePropertyModule$5 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;

var createNonEnumerableProperty$5 = DESCRIPTORS$8 ? function (object, key, value) {
  return definePropertyModule$5.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$2 = { exports: {} };

var DESCRIPTORS$7 = descriptors;
var hasOwn$a = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$7 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$a(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$7 || (DESCRIPTORS$7 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$m = functionUncurryThis;
var isCallable$i = isCallable$o;
var store$1 = sharedStore;

var functionToString = uncurryThis$m(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$i(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$i = global$p;
var isCallable$h = isCallable$o;

var WeakMap$1 = global$i.WeakMap;

var weakMapBasicDetection = isCallable$h(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$h = global$p;
var uncurryThis$l = functionUncurryThis;
var isObject$5 = isObject$a;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
var hasOwn$9 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$3 = global$h.TypeError;
var WeakMap = global$h.WeakMap;
var set$1, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$5(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$3('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  var wmget = uncurryThis$l(store.get);
  var wmhas = uncurryThis$l(store.has);
  var wmset = uncurryThis$l(store.set);
  set$1 = function (it, metadata) {
    if (wmhas(store, it)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;
  set$1 = function (it, metadata) {
    if (hasOwn$9(it, STATE)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$4(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$9(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$9(it, STATE);
  };
}

var internalState = {
  set: set$1,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var fails$j = fails$q;
var isCallable$g = isCallable$o;
var hasOwn$8 = hasOwnProperty_1;
var DESCRIPTORS$6 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$3 = internalState;

var enforceInternalState = InternalStateModule$3.enforce;
var getInternalState$2 = InternalStateModule$3.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS$6 && !fails$j(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$8(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$6) defineProperty$5(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$8(options, 'arity') && value.length !== options.arity) {
    defineProperty$5(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$8(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$6) defineProperty$5(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$8(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$g(this) && getInternalState$2(this).source || inspectSource$2(this);
}, 'toString');

var isCallable$f = isCallable$o;
var definePropertyModule$4 = objectDefineProperty;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$9 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$f(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$4.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$2 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$2 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

var max$2 = Math.max;
var min$4 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$2(integer + length, 0) : min$4(integer, length);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

var min$3 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$5 = function (argument) {
  return argument > 0 ? min$3(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$4 = toLength$5;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$5 = function (obj) {
  return toLength$4(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$4 = lengthOfArrayLike$5;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$3 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$4(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$3(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$3(false)
};

var uncurryThis$k = functionUncurryThis;
var hasOwn$7 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$4 = uncurryThis$k([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$7(hiddenKeys$2, key) && hasOwn$7(O, key) && push$4(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$7(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$4(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$5 = getBuiltIn$8;
var uncurryThis$j = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$g = anObject$i;

var concat$2 = uncurryThis$j([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$g(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$6 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;

var copyConstructorProperties$2 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$6(target, key) && !(exceptions && hasOwn$6(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$i = fails$q;
var isCallable$e = isCallable$o;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
      : isCallable$e(detection) ? fails$i(detection)
        : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';

var isForced_1 = isForced$2;

var global$g = global$p;
var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
var defineBuiltIn$8 = defineBuiltIn$9;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties$1 = copyConstructorProperties$2;
var isForced$1 = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$g;
  } else if (STATIC) {
    target = global$g[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$g[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$3(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$1(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$3(sourceProperty, 'sham', true);
    }
    defineBuiltIn$8(target, key, sourceProperty, options);
  }
};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$5 = descriptors;
var uncurryThis$i = functionUncurryThis;
var call$h = functionCall;
var fails$h = fails$q;
var objectKeys$1 = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$4 = toObject$6;
var IndexedObject$1 = indexedObject;

// eslint-disable-next-line es-x/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
var defineProperty$4 = Object.defineProperty;
var concat$1 = uncurryThis$i([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$h(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$5 && $assign({ b: 1 }, $assign(defineProperty$4({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$4(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es-x/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$4(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject$1(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$5 || call$h(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$j = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es-x/no-object-assign -- required for testing
$$j({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

const Analytics = /*#__PURE__*/createContext(null);
const AnalyticsEventContext = /*#__PURE__*/createContext(undefined);
const useAnalytics = () => {
  const analyticsSetup = useContext(Analytics);
  const eventContext = useContext(AnalyticsEventContext);

  if (!analyticsSetup) {
    throw new Error("Analytics must be initialised with an app context");
  } // If no parent context available, use functions from setup provider


  if (!eventContext) {
    return Object.assign(Object.assign({}, analyticsSetup), {
      data: undefined,
      name: ""
    });
  }

  return eventContext;
};
const setUserId = id => { };
const setUserProperties = properties => { };
const AnalyticsProvider = ({
  children,
  config
}) => {
  const sendEvent = () => { };

  const sendPageViewEvent = () => { };

  return /*#__PURE__*/React__default.createElement(Analytics.Provider, {
    value: {
      sendEvent,
      sendPageViewEvent,
      setUserId,
      setUserProperties
    }
  }, /*#__PURE__*/React__default.createElement(EventContextProvider, {
    name: config.appName
  }, children));
};

const useAnalyticsSetup = () => {
  const analyticsCtx = useContext(Analytics);

  if (!analyticsCtx) {
    throw new Error("Analytics must be initialised");
  }

  return analyticsCtx;
};

const EventContextProvider = ({
  name,
  data,
  children
}) => {
  const {
    sendEvent,
    sendPageViewEvent,
    setUserId,
    setUserProperties
  } = useAnalyticsSetup();
  const newContext = {
    name: name !== null && name !== void 0 ? name : "Default event context",
    data: data,
    sendEvent,
    sendPageViewEvent,
    setUserId,
    setUserProperties
  };
  return /*#__PURE__*/React__default.createElement(AnalyticsEventContext.Provider, {
    value: newContext
  }, children);
};
function withEventContext(Component, name) {
  return props => {
    return /*#__PURE__*/React__default.createElement(EventContextProvider, {
      name: name
    }, /*#__PURE__*/React__default.createElement(Component, Object.assign({}, props)));
  };
}

var objectDefineProperties = {};

var DESCRIPTORS$4 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$2 = objectDefineProperty;
var anObject$f = anObject$i;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$4 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$f(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$4 = getBuiltIn$8;

var html$2 = getBuiltIn$4('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$e = anObject$i;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html$1 = html$2;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$1 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$1.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$e(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$i = wellKnownSymbol$k;
var create$3 = objectCreate;
var defineProperty$3 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$i('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  defineProperty$3(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$3(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$g = fails$q;

var correctPrototypeGetter = !fails$g(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$5 = hasOwnProperty_1;
var isCallable$d = isCallable$o;
var toObject$3 = toObject$6;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject$3(O);
  if (hasOwn$5(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$d(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$f = fails$q;
var isCallable$c = isCallable$o;
var isObject$4 = isObject$a;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$7 = defineBuiltIn$9;
var wellKnownSymbol$h = wellKnownSymbol$k;

var ITERATOR$8 = wellKnownSymbol$h('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es-x/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$4(IteratorPrototype$2) || fails$f(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$8].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$c(IteratorPrototype$2[ITERATOR$8])) {
  defineBuiltIn$7(IteratorPrototype$2, ITERATOR$8, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$2 = objectDefineProperty.f;
var hasOwn$4 = hasOwnProperty_1;
var wellKnownSymbol$g = wellKnownSymbol$k;

var TO_STRING_TAG$3 = wellKnownSymbol$g('toStringTag');

var setToStringTag$4 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$4(target, TO_STRING_TAG$3)) {
    defineProperty$2(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$2 = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;
var setToStringTag$3 = setToStringTag$4;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next) });
  setToStringTag$3(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var isCallable$b = isCallable$o;

var $String$1 = String;
var $TypeError$a = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$b(argument)) return argument;
  throw $TypeError$a("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis$h = functionUncurryThis;
var anObject$d = anObject$i;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$h(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$d(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$i = _export;
var call$g = functionCall;
var FunctionName = functionName;
var isCallable$a = isCallable$o;
var createIteratorConstructor$1 = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$2 = setToStringTag$4;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
var defineBuiltIn$6 = defineBuiltIn$9;
var wellKnownSymbol$f = wellKnownSymbol$k;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$7 = wellKnownSymbol$f('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor$1(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$7]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$1) {
          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$a(CurrentIteratorPrototype[ITERATOR$7])) {
          defineBuiltIn$6(CurrentIteratorPrototype, ITERATOR$7, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$2 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$g(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$6(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$i({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$7] !== defaultIterator) {
    defineBuiltIn$6(IterablePrototype, ITERATOR$7, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$1 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject = toIndexedObject$5;
var addToUnscopables$1 = addToUnscopables$2;
var Iterators$2 = iterators;
var InternalStateModule$2 = internalState;
var defineProperty$1 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$3 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState$1 = InternalStateModule$2.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$2(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators$2.Arguments = Iterators$2.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('keys');
addToUnscopables$1('values');
addToUnscopables$1('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$3 && values.name !== 'values') try {
  defineProperty$1(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

var global$f = global$p;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
var wellKnownSymbol$e = wellKnownSymbol$k;

var ITERATOR$6 = wellKnownSymbol$e('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$e('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$6] !== ArrayValues) try {
      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$6, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$6] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$2]) {
      createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG$2, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$f[COLLECTION_NAME] && global$f[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var ConfigStatusType;

(function (ConfigStatusType) {
  ConfigStatusType[ConfigStatusType["EMPTY"] = 0] = "EMPTY";
  ConfigStatusType[ConfigStatusType["READY"] = 1] = "READY";
})(ConfigStatusType || (ConfigStatusType = {}));

var ActionTypes;

(function (ActionTypes) {
  ActionTypes[ActionTypes["SET_CONFIG"] = 0] = "SET_CONFIG";
})(ActionTypes || (ActionTypes = {}));

const reducer = (state, action) => {
  if (action.type === ActionTypes.SET_CONFIG) {
    return {
      data: action.payload,
      status: ConfigStatusType.READY
    };
  } else {
    return state;
  }
};
const defaultState$1 = {
  data: {},
  status: ConfigStatusType.EMPTY
};
const ConfigContext = /*#__PURE__*/createContext({});
function ConfigProvider({
  children,
  initialState = defaultState$1
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const theme = useTheme();
  useEffect(() => {
    var _a, _b, _c, _d;

    if ((_b = (_a = state.data) === null || _a === void 0 ? void 0 : _a.colors) === null || _b === void 0 ? void 0 : _b.primary) {
      const overrides = {
        action: (_d = (_c = state.data) === null || _c === void 0 ? void 0 : _c.colors) === null || _d === void 0 ? void 0 : _d.primary
      };
      theme.setOverrides(overrides);
    } // including theme here causes tests to hang
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [state]);
  return /*#__PURE__*/React__default.createElement(ConfigContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
}
const useConfig = () => useContext(ConfigContext);

var fails$e = fails$q;
var wellKnownSymbol$d = wellKnownSymbol$k;
var IS_PURE = isPure;

var ITERATOR$5 = wellKnownSymbol$d('iterator');

var urlConstructorDetection = !fails$e(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR$5]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});

var defineBuiltIn$5 = defineBuiltIn$9;

var defineBuiltIns$1 = function (target, src, options) {
  for (var key in src) defineBuiltIn$5(target, key, src[key], options);
  return target;
};

var isPrototypeOf$3 = objectIsPrototypeOf;

var $TypeError$9 = TypeError;

var anInstance$2 = function (it, Prototype) {
  if (isPrototypeOf$3(Prototype, it)) return it;
  throw $TypeError$9('Incorrect invocation');
};

var uncurryThis$g = functionUncurryThis;
var aCallable$7 = aCallable$9;
var NATIVE_BIND$1 = functionBindNative;

var bind$5 = uncurryThis$g(uncurryThis$g.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$7(fn);
  return that === undefined ? fn : NATIVE_BIND$1 ? bind$5(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var wellKnownSymbol$c = wellKnownSymbol$k;

var TO_STRING_TAG$1 = wellKnownSymbol$c('toStringTag');
var test$2 = {};

test$2[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test$2) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$9 = isCallable$o;
var classofRaw = classofRaw$1;
var wellKnownSymbol$b = wellKnownSymbol$k;

var TO_STRING_TAG = wellKnownSymbol$b('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$8 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
        // ES3 arguments fallback
        : (result = classofRaw(O)) == 'Object' && isCallable$9(O.callee) ? 'Arguments' : result;
};

var classof$7 = classof$8;

var $String = String;

var toString$c = function (argument) {
  if (classof$7(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var classof$6 = classof$8;
var getMethod$5 = getMethod$7;
var isNullOrUndefined$5 = isNullOrUndefined$8;
var Iterators$1 = iterators;
var wellKnownSymbol$a = wellKnownSymbol$k;

var ITERATOR$4 = wellKnownSymbol$a('iterator');

var getIteratorMethod$3 = function (it) {
  if (!isNullOrUndefined$5(it)) return getMethod$5(it, ITERATOR$4)
    || getMethod$5(it, '@@iterator')
    || Iterators$1[classof$6(it)];
};

var call$f = functionCall;
var aCallable$6 = aCallable$9;
var anObject$c = anObject$i;
var tryToString$3 = tryToString$5;
var getIteratorMethod$2 = getIteratorMethod$3;

var $TypeError$8 = TypeError;

var getIterator$2 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
  if (aCallable$6(iteratorMethod)) return anObject$c(call$f(iteratorMethod, argument));
  throw $TypeError$8(tryToString$3(argument) + ' is not iterable');
};

var $TypeError$7 = TypeError;

var validateArgumentsLength$2 = function (passed, required) {
  if (passed < required) throw $TypeError$7('Not enough arguments');
  return passed;
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$5;

var createProperty$2 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor$1(0, value));
  else object[propertyKey] = value;
};

var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike$3 = lengthOfArrayLike$5;
var createProperty$1 = createProperty$2;

var $Array = Array;
var max$1 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$3(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max$1(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty$1(result, n, O[k]);
  result.length = n;
  return result;
};

var arraySlice$3 = arraySliceSimple;

var floor$1 = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor$1(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice$3(array, 0, middle), comparefn),
    mergeSort(arraySlice$3(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

var arraySort$1 = mergeSort;

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$h = _export;
var global$e = global$p;
var call$e = functionCall;
var uncurryThis$f = functionUncurryThis;
var DESCRIPTORS$2 = descriptors;
var USE_NATIVE_URL = urlConstructorDetection;
var defineBuiltIn$4 = defineBuiltIn$9;
var defineBuiltIns = defineBuiltIns$1;
var setToStringTag$1 = setToStringTag$4;
var createIteratorConstructor = iteratorCreateConstructor;
var InternalStateModule$1 = internalState;
var anInstance$1 = anInstance$2;
var isCallable$8 = isCallable$o;
var hasOwn$3 = hasOwnProperty_1;
var bind$4 = functionBindContext;
var classof$5 = classof$8;
var anObject$b = anObject$i;
var isObject$3 = isObject$a;
var $toString$1 = toString$c;
var create$1 = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$5;
var getIterator$1 = getIterator$2;
var getIteratorMethod$1 = getIteratorMethod$3;
var validateArgumentsLength$1 = validateArgumentsLength$2;
var wellKnownSymbol$9 = wellKnownSymbol$k;
var arraySort = arraySort$1;

var ITERATOR$3 = wellKnownSymbol$9('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn = function (name) {
  if (!DESCRIPTORS$2) return global$e[name];
  var descriptor = getOwnPropertyDescriptor$2(global$e, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$e.RegExp;
var TypeError$2 = global$e.TypeError;
var decodeURIComponent = global$e.decodeURIComponent;
var encodeURIComponent = global$e.encodeURIComponent;
var charAt$4 = uncurryThis$f(''.charAt);
var join = uncurryThis$f([].join);
var push$3 = uncurryThis$f([].push);
var replace$4 = uncurryThis$f(''.replace);
var shift = uncurryThis$f([].shift);
var splice = uncurryThis$f([].splice);
var split = uncurryThis$f(''.split);
var stringSlice$7 = uncurryThis$f(''.slice);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = replace$4(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace$4(result, percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace$4(encodeURIComponent(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState$1(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator$1(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
}, true);

var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if (isObject$3(init)) this.parseObject(init);
    else this.parseQuery(typeof init == 'string' ? charAt$4(init, 0) === '?' ? stringSlice$7(init, 1) : init : $toString$1(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var iteratorMethod = getIteratorMethod$1(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator$1(object, iteratorMethod);
      next = iterator.next;
      while (!(step = call$e(next, iterator)).done) {
        entryIterator = getIterator$1(anObject$b(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call$e(entryNext, entryIterator)).done ||
          (second = call$e(entryNext, entryIterator)).done ||
          !call$e(entryNext, entryIterator).done
        ) throw TypeError$2('Expected sequence with length 2');
        push$3(this.entries, { key: $toString$1(first.value), value: $toString$1(second.value) });
      }
    } else for (var key in object) if (hasOwn$3(object, key)) {
      push$3(this.entries, { key: key, value: $toString$1(object[key]) });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var attributes = split(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split(attribute, '=');
          push$3(this.entries, {
            key: deserialize(shift(entry)),
            value: deserialize(join(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      push$3(result, serialize(entry.key) + '=' + serialize(entry.value));
    } return join(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
};

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance$1(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  setInternalState$1(this, new URLSearchParamsState(init));
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength$1(arguments.length, 2);
    var state = getInternalParamsState(this);
    push$3(state.entries, { key: $toString$1(name), value: $toString$1(value) });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength$1(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString$1(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) splice(entries, index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$1(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$1(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push$3(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$1(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength$1(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = $toString$1(name);
    var val = $toString$1(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push$3(entries, { key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind$4(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
defineBuiltIn$4(URLSearchParamsPrototype, ITERATOR$3, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn$4(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, { enumerable: true });

setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$$h({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable$8(Headers)) {
  var headersHas = uncurryThis$f(HeadersPrototype.has);
  var headersSet = uncurryThis$f(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject$3(init)) {
      var body = init.body;
      var headers;
      if (classof$5(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create$1(init, {
          body: createPropertyDescriptor(0, $toString$1(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable$8(nativeFetch)) {
    $$h({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable$8(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance$1(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $$h({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

var anObject$a = anObject$i;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$a(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var fails$d = fails$q;
var global$d = global$p;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$d.RegExp;

var UNSUPPORTED_Y$2 = fails$d(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$d(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$d(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var fails$c = fails$q;
var global$c = global$p;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$c.RegExp;

var regexpUnsupportedDotAll = fails$c(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$b = fails$q;
var global$b = global$p;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$b.RegExp;

var regexpUnsupportedNcg = fails$b(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$d = functionCall;
var uncurryThis$e = functionUncurryThis;
var toString$b = toString$c;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$3 = uncurryThis$e(''.charAt);
var indexOf = uncurryThis$e(''.indexOf);
var replace$3 = uncurryThis$e(''.replace);
var stringSlice$6 = uncurryThis$e(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$d(nativeExec, re1, 'a');
  call$d(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$b(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$d(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$d(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$3(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$6(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$d(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$6(match.input, charsAdded);
        match[0] = stringSlice$6(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$d(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$3 = patchedExec;

var $$g = _export;
var exec$3 = regexpExec$3;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$g({ target: 'RegExp', proto: true, forced: /./.exec !== exec$3 }, {
  exec: exec$3
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$d = functionUncurryThis;
var defineBuiltIn$3 = defineBuiltIn$9;
var regexpExec$2 = regexpExec$3;
var fails$a = fails$q;
var wellKnownSymbol$8 = wellKnownSymbol$k;
var createNonEnumerableProperty = createNonEnumerableProperty$5;

var SPECIES$3 = wellKnownSymbol$8('species');
var RegExpPrototype$2 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$8(KEY);

  var DELEGATES_TO_SYMBOL = !fails$a(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$a(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$3] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis$d(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$d(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$2 || $exec === RegExpPrototype$2.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn$3(String.prototype, KEY, methods[0]);
    defineBuiltIn$3(RegExpPrototype$2, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype$2[SYMBOL], 'sham', true);
};

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es-x/no-object-is -- safe
var sameValue$1 = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

var call$c = functionCall;
var anObject$9 = anObject$i;
var isCallable$7 = isCallable$o;
var classof$4 = classofRaw$1;
var regexpExec$1 = regexpExec$3;

var $TypeError$6 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$7(exec)) {
    var result = call$c(exec, R, S);
    if (result !== null) anObject$9(result);
    return result;
  }
  if (classof$4(R) === 'RegExp') return call$c(regexpExec$1, R, S);
  throw $TypeError$6('RegExp#exec called on incompatible receiver');
};

var call$b = functionCall;
var fixRegExpWellKnownSymbolLogic$3 = fixRegexpWellKnownSymbolLogic;
var anObject$8 = anObject$i;
var isNullOrUndefined$4 = isNullOrUndefined$8;
var requireObjectCoercible$7 = requireObjectCoercible$a;
var sameValue = sameValue$1;
var toString$a = toString$c;
var getMethod$4 = getMethod$7;
var regExpExec$2 = regexpExecAbstract;

// @@search logic
fixRegExpWellKnownSymbolLogic$3('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible$7(this);
      var searcher = isNullOrUndefined$4(regexp) ? undefined : getMethod$4(regexp, SEARCH);
      return searcher ? call$b(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$a(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject$8(this);
      var S = toString$a(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec$2(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});

const useQueryParams = () => {
  const location = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location]);
  return queryParams;
};

const DemoModeContext = /*#__PURE__*/createContext({
  isDemo: false
});
const DemoModeProvider = ({
  children
}) => {
  const params = useQueryParams();
  const isDemo = params.get("link.demo") === "true";
  return /*#__PURE__*/React__default.createElement(DemoModeContext.Provider, {
    value: {
      isDemo
    }
  }, /*#__PURE__*/React__default.createElement(EventContextProvider, {
    data: {
      demoMode: isDemo
    }
  }, children));
};
const useDemoMode = () => useContext(DemoModeContext);

// api endpoints
const companies = "/companies/:companyId";
const clients = "/clients/:clientId";
const connections = "/connections/:connectionId";
const api = {
  clients: {
    config: `${clients}/config`,
    create: `${clients}/companies`,
    companyLimitReached: `${clients}/companyLimitReached`
  },
  companies: {
    config: `${companies}/config`,
    integrations: {
      sourceTypes: `${companies}/integrations/sourceTypes`,
      platform: `${companies}/integrations/:platformKey`
    },
    createConnection: `${companies}/connections`,
    createFileConnection: `${companies}/connections/files`,
    complete: `${companies}/complete`,
    redirectValidate: `${companies}/redirect/validate`,
    displayText: `${companies}/displayText`,
    uploadFile: `${companies}${connections}/files`,
    status: `${companies}${connections}/status`
  },
  connections: {
    success: `${connections}/success`,
    error: `${connections}/error`
  }
};

// app routes
const client = "/client/:clientId";
const createCompany = `${client}/company`;
const company = "/company/:companyId";
const routes = {
  client: {
    root: client,
    createCompany: createCompany
  },
  company: {
    root: company,
    link: `${company}/link/:sourceType?/(upload)?`,
    consent: `${company}/consent/:platformKey`,
    waitForConnection: `${company}/waitForConnection/:platformKey`,
    success: `${company}/success/:sourceType/:platformKey`,
    overview: `${company}/overview`,
    fileUpload: `${company}/fileUpload/:sourceType`,
    revisit: `${company}/revisit/:sourceType?`,
    error: `${company}/error/:sourceType/:platformKey/:connectionId?/(retry)?`,
    customIntro: `${company}/intro/:sourceType/(upload)?`
  },
  notfound: "/not-found",
  error: "/error"
};

function formatUrl(path, params, query) {
  const encodedQueryString = query ? `?${queryString.stringify(query)}` : "";
  return compile(path)(params) + encodedQueryString;
}

var styles$w = { "app": "App-module_app__6i1Ry" };

const ErrorFallback = ({
  error
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;

  const pathname = ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) === 404 || ((_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status) === 402 ? routes.notfound : routes.error;
  let search = ((_d = (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.correlationId) ? `?x-correlation-id=${(_f = (_e = error.response) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.correlationId}` : "";

  if (pathname === routes.error) {
    if ((_g = error === null || error === void 0 ? void 0 : error.response) === null || _g === void 0 ? void 0 : _g.status) search += `${search ? "&errorCode=" : "?errorCode="}${error.response.status}`;

    if (((_h = error === null || error === void 0 ? void 0 : error.response) === null || _h === void 0 ? void 0 : _h.status) === 400 && ((_j = error === null || error === void 0 ? void 0 : error.response) === null || _j === void 0 ? void 0 : _j.data.detailedErrorCode) === 4000) {
      search += `${search ? "&errorMessage=" : "?errorMessage="}${"Invalid redirect URL"}`;
    }
  }

  return /*#__PURE__*/React.createElement(Redirect, {
    to: {
      pathname,
      search
    },
    push: true
  });
};

var styles$v = { "spinner": "Spinner-module_spinner__cbHG0", "spin": "Spinner-module_spin__X1jAP", "circle": "Spinner-module_circle__h5pzP", "dashOffset": "Spinner-module_dashOffset__JKPNf" };

function Spinner() {
  return /*#__PURE__*/React.createElement("svg", {
    "data-testid": "loading-spinner",
    className: styles$v.spinner,
    viewBox: "0 0 50 50"
  }, /*#__PURE__*/React.createElement("circle", {
    className: styles$v.circle,
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "5",
    strokeLinecap: "round"
  }));
}

var styles$u = { "pageContainer": "CategorisationHelp-module_pageContainer__dyV8c", "page": "CategorisationHelp-module_page__RlkvY", "contentContainer": "CategorisationHelp-module_contentContainer__UNQZd", "spinnerContainer": "CategorisationHelp-module_spinnerContainer__ibFY4", "header": "CategorisationHelp-module_header__GcXfU", "logo": "CategorisationHelp-module_logo__G8cWw", "searchBar": "CategorisationHelp-module_searchBar__GQMzd", "categoryGroup": "CategorisationHelp-module_categoryGroup__-5HEv", "categoryGroupTitle": "CategorisationHelp-module_categoryGroupTitle__onADU", "contentCategories": "CategorisationHelp-module_contentCategories__YFGdi", "category": "CategorisationHelp-module_category__oSUTb", "pill": "CategorisationHelp-module_pill__8K8Jj" };

var $$f = _export;
var $includes = arrayIncludes.includes;
var fails$9 = fails$q;
var addToUnscopables = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$9(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$f({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var isObject$2 = isObject$a;
var classof$3 = classofRaw$1;
var wellKnownSymbol$7 = wellKnownSymbol$k;

var MATCH$1 = wellKnownSymbol$7('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$2(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$3(it) == 'RegExp');
};

var isRegExp$1 = isRegexp;

var $TypeError$5 = TypeError;

var notARegexp = function (it) {
  if (isRegExp$1(it)) {
    throw $TypeError$5("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$6 = wellKnownSymbol$k;

var MATCH = wellKnownSymbol$6('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $$e = _export;
var uncurryThis$c = functionUncurryThis;
var notARegExp$1 = notARegexp;
var requireObjectCoercible$6 = requireObjectCoercible$a;
var toString$9 = toString$c;
var correctIsRegExpLogic$1 = correctIsRegexpLogic;

var stringIndexOf$1 = uncurryThis$c(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$e({ target: 'String', proto: true, forced: !correctIsRegExpLogic$1('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf$1(
      toString$9(requireObjectCoercible$6(this)),
      toString$9(notARegExp$1(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

var aCallable$5 = aCallable$9;
var toObject$2 = toObject$6;
var IndexedObject = indexedObject;
var lengthOfArrayLike$2 = lengthOfArrayLike$5;

var $TypeError$4 = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod$2 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable$5(callbackfn);
    var O = toObject$2(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike$2(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError$4('Reduce of empty array with no initial value');
      }
    }
    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod$2(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod$2(true)
};

var fails$8 = fails$q;

var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$8(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var classof$2 = classofRaw$1;
var global$a = global$p;

var engineIsNode = classof$2(global$a.process) == 'process';

var $$d = _export;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;
var CHROME_VERSION = engineV8Version;
var IS_NODE$4 = engineIsNode;

var STRICT_METHOD$1 = arrayMethodIsStrict$1('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE$4 && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$$d({ target: 'Array', proto: true, forced: !STRICT_METHOD$1 || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

const config = window.linkAppConfig || {
  ENVIRONMENT: "Production",
  PORTAL_URL: "https://app.codat.io",
  LINK_API_URL: "https://link-api.codat.io",
  PUBLIC_API_URL: "https://api.codat.io"
};

const axiosInstance$1 = axios.create({
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  baseURL: config.PUBLIC_API_URL
});
const useCategories = search => {
  const [categories, setCategories] = useState();
  const [requestState, setRequestState] = useState("NONE");
  useEffect(() => {
    if (requestState === "NONE") {
      setRequestState("LOADING");
      axiosInstance$1.get("/metadata/accounts/categories").then(response => {
        setCategories(response.data);
        setRequestState("READY");
      }).catch(() => {
        setRequestState("ERROR");
      });
    }
  }, [categories, requestState]);
  const categoriesGrouped = useMemo(() => {
    const searchValue = search === null || search === void 0 ? void 0 : search.toLowerCase();

    const containsSearch = category => {
      if (!searchValue) return true;
      return category.type.toLowerCase().includes(searchValue) || category.subtypeDisplayName.toLowerCase().includes(searchValue) || category.detailTypeDisplayName.toLowerCase().includes(searchValue);
    };

    return categories === null || categories === void 0 ? void 0 : categories.reduce((grouped, category) => {
      const existing = grouped.find(g => g.type === category.type);

      if (existing) {
        if (containsSearch(category)) {
          existing.categories.push(category);
        }
      } else {
        grouped.push({
          type: category.type,
          categories: containsSearch(category) ? [category] : []
        });
      }

      return grouped;
    }, []);
  }, [categories, search]);
  return {
    categories,
    categoriesGrouped,
    error: requestState === "ERROR",
    loading: requestState === "LOADING"
  };
};

function CategorisationHelpContent() {
  const [searchValue, setSearchValue] = React.useState();
  const {
    categoriesGrouped,
    loading,
    error
  } = useCategories(searchValue);
  const {
    colors
  } = useTheme();

  if (error) {
    return /*#__PURE__*/React.createElement(ErrorFallback, null);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: styles$u.pageContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$u.page
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$u.header
  }, /*#__PURE__*/React.createElement("img", {
    className: styles$u.logo,
    src: "https://static.codat.io/public/branding/codat-blue.png",
    alt: "Codat Logo",
    "data-testid": "categorisation-help-logo"
  })), /*#__PURE__*/React.createElement(Typography, {
    variant: "h1",
    as: "h1"
  }, "Terminology guide"), /*#__PURE__*/React.createElement("div", {
    className: styles$u.searchBar
  }, /*#__PURE__*/React.createElement(Typography, {
    as: "p"
  }, "Descriptions of key accounting terms and core concepts"), /*#__PURE__*/React.createElement(TextInput$1, {
    id: "searchTerm",
    placeholder: "Search term",
    label: "Search term",
    iconLeft: {
      icon: /*#__PURE__*/React.createElement(SearchIcon, {
        fillColor: colors["color-ui-neutral-80"]
      })
    },
    onChange: event => setSearchValue(event.target.value),
    "data-testid": "categorisation-help-search",
    enterKeyHint: "search"
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$u.contentContainer
  }, loading && /*#__PURE__*/React.createElement("div", {
    className: styles$u.spinnerContainer,
    "data-testid": "categorisation-help-loading"
  }, /*#__PURE__*/React.createElement(Spinner, null)), !loading && categoriesGrouped && /*#__PURE__*/React.createElement("div", {
    "data-testid": "categorisation-help-content",
    className: styles$u.contentCategories
  }, categoriesGrouped.map(categoryGroup => /*#__PURE__*/React.createElement("div", {
    key: categoryGroup.type,
    "data-testid": "categorisation-help-type-" + categoryGroup.type
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h4",
    as: "h4",
    className: styles$u.categoryGroupTitle
  }, categoryGroup.type), /*#__PURE__*/React.createElement("div", {
    className: styles$u.categoryGroup
  }, categoryGroup.categories.map(category => /*#__PURE__*/React.createElement("div", {
    className: styles$u.category,
    key: category.subtypeDisplayName + category.detailTypeDisplayName,
    "data-testid": `categorisation-help-subtype-${category.subtype}-${category.detailType}`
  }, /*#__PURE__*/React.createElement(IndicatorPill, {
    className: styles$u.pill,
    label: category.subtypeDisplayName
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "h3",
    as: "h3"
  }, category.detailTypeDisplayName), /*#__PURE__*/React.createElement(Typography, {
    as: "p"
  }, category.detailTypeDescription))))))))));
}

const CategorisationHelp = withEventContext(CategorisationHelpContent, "Categorisation help page");

var uncurryThis$b = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$8 = toString$c;
var requireObjectCoercible$5 = requireObjectCoercible$a;

var charAt$2 = uncurryThis$b(''.charAt);
var charCodeAt = uncurryThis$b(''.charCodeAt);
var stringSlice$5 = uncurryThis$b(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$8(requireObjectCoercible$5($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
      ? CONVERT_TO_STRING
        ? charAt$2(S, position)
        : first
      : CONVERT_TO_STRING
        ? stringSlice$5(S, position, position + 2)
        : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};

var charAt$1 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$3 = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

var call$a = functionCall;
var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
var anObject$7 = anObject$i;
var isNullOrUndefined$3 = isNullOrUndefined$8;
var toLength$3 = toLength$5;
var toString$7 = toString$c;
var requireObjectCoercible$4 = requireObjectCoercible$a;
var getMethod$3 = getMethod$7;
var advanceStringIndex$2 = advanceStringIndex$3;
var regExpExec$1 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$2('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$4(this);
      var matcher = isNullOrUndefined$3(regexp) ? undefined : getMethod$3(regexp, MATCH);
      return matcher ? call$a(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$7(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$7(this);
      var S = toString$7(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec$1(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$1(rx, S)) !== null) {
        var matchStr = toString$7(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$3(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

var $$c = _export;
var uncurryThis$a = functionUncurryThis;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var toLength$2 = toLength$5;
var toString$6 = toString$c;
var notARegExp = notARegexp;
var requireObjectCoercible$3 = requireObjectCoercible$a;
var correctIsRegExpLogic = correctIsRegexpLogic;

// eslint-disable-next-line es-x/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis$a(''.startsWith);
var stringSlice$4 = uncurryThis$a(''.slice);
var min$2 = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$$c({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString$6(requireObjectCoercible$3(this));
    notARegExp(searchString);
    var index = toLength$2(min$2(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString$6(searchString);
    return nativeStartsWith
      ? nativeStartsWith(that, search, index)
      : stringSlice$4(that, index, index + search.length) === search;
  }
});

var call$9 = functionCall;
var hasOwn$2 = hasOwnProperty_1;
var isPrototypeOf$2 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$1 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn$2(R, 'flags') && isPrototypeOf$2(RegExpPrototype$1, R)
    ? call$9(regExpFlags, R) : flags;
};

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var defineBuiltIn$2 = defineBuiltIn$9;
var anObject$6 = anObject$i;
var $toString = toString$c;
var fails$7 = fails$q;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails$7(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$2(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$6(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

var getBuiltIn$3 = getBuiltIn$8;
var definePropertyModule = objectDefineProperty;
var wellKnownSymbol$5 = wellKnownSymbol$k;
var DESCRIPTORS$1 = descriptors;

var SPECIES$2 = wellKnownSymbol$5('species');

var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES$2]) {
    defineProperty(Constructor, SPECIES$2, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var uncurryThis$9 = functionUncurryThis;
var fails$6 = fails$q;
var isCallable$6 = isCallable$o;
var classof$1 = classof$8;
var getBuiltIn$2 = getBuiltIn$8;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$9(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$6(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$6(argument)) return false;
  switch (classof$1(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$6(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor = isConstructor$1;
var tryToString$2 = tryToString$5;

var $TypeError$3 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError$3(tryToString$2(argument) + ' is not a constructor');
};

var anObject$5 = anObject$i;
var aConstructor = aConstructor$1;
var isNullOrUndefined$2 = isNullOrUndefined$8;
var wellKnownSymbol$4 = wellKnownSymbol$k;

var SPECIES$1 = wellKnownSymbol$4('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$2 = function (O, defaultConstructor) {
  var C = anObject$5(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$2(S = anObject$5(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
};

var NATIVE_BIND = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$3 = FunctionPrototype.apply;
var call$8 = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$8.bind(apply$3) : function () {
  return call$8.apply(apply$3, arguments);
});

var uncurryThis$8 = functionUncurryThis;

var arraySlice$2 = uncurryThis$8([].slice);

var userAgent$4 = engineUserAgent;

var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);

var global$9 = global$p;
var apply$2 = functionApply;
var bind$3 = functionBindContext;
var isCallable$5 = isCallable$o;
var hasOwn$1 = hasOwnProperty_1;
var fails$5 = fails$q;
var html = html$2;
var arraySlice$1 = arraySlice$2;
var createElement = documentCreateElement$2;
var validateArgumentsLength = validateArgumentsLength$2;
var IS_IOS$1 = engineIsIos;
var IS_NODE$3 = engineIsNode;

var set = global$9.setImmediate;
var clear = global$9.clearImmediate;
var process$3 = global$9.process;
var Dispatch = global$9.Dispatch;
var Function$1 = global$9.Function;
var MessageChannel = global$9.MessageChannel;
var String$1 = global$9.String;
var counter = 0;
var queue$1 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global$9.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn$1(queue$1, id)) {
    var fn = queue$1[id];
    delete queue$1[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global$9.postMessage(String$1(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$5(handler) ? handler : Function$1(handler);
    var args = arraySlice$1(arguments, 1);
    queue$1[++counter] = function () {
      apply$2(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$1[id];
  };
  // Node.js 0.8-
  if (IS_NODE$3) {
    defer = function (id) {
      process$3.nextTick(runner(id));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind$3(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$9.addEventListener &&
    isCallable$5(global$9.postMessage) &&
    !global$9.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails$5(post)
  ) {
    defer = post;
    global$9.addEventListener('message', listener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set,
  clear: clear
};

var userAgent$3 = engineUserAgent;
var global$8 = global$p;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && global$8.Pebble !== undefined;

var userAgent$2 = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

var global$7 = global$p;
var bind$2 = functionBindContext;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$2 = engineIsNode;

var MutationObserver = global$7.MutationObserver || global$7.WebKitMutationObserver;
var document$2 = global$7.document;
var process$2 = global$7.process;
var Promise$1 = global$7.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$7, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify$1, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE$2 && (parent = process$2.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify$1();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
    // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = bind$2(promise.then, promise);
    notify$1 = function () {
      then(flush);
    };
    // Node.js without promises
  } else if (IS_NODE$2) {
    notify$1 = function () {
      process$2.nextTick(flush);
    };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessage
    // - onreadystatechange
    // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind$2(macrotask, global$7);
    notify$1 = function () {
      macrotask(flush);
    };
  }
}

var microtask$1 = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify$1();
  } last = task;
};

var global$6 = global$p;

var hostReportErrors$1 = function (a, b) {
  var console = global$6.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};

var perform$3 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var Queue$1 = function () {
  this.head = null;
  this.tail = null;
};

Queue$1.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

var queue = Queue$1;

var global$5 = global$p;

var promiseNativeConstructor = global$5.Promise;

/* global Deno -- Deno case */

var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
  && typeof window == 'object'
  && typeof document == 'object';

var global$4 = global$p;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$4 = isCallable$o;
var isForced = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$3 = wellKnownSymbol$k;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES = wellKnownSymbol$3('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$4(global$4.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$3(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});

var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var newPromiseCapability$2 = {};

var aCallable$4 = aCallable$9;

var $TypeError$2 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError$2('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$4(resolve);
  this.reject = aCallable$4(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$b = _export;
var IS_NODE = engineIsNode;
var global$3 = global$p;
var call$7 = functionCall;
var defineBuiltIn$1 = defineBuiltIn$9;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$4;
var setSpecies = setSpecies$1;
var aCallable$3 = aCallable$9;
var isCallable$3 = isCallable$o;
var isObject$1 = isObject$a;
var anInstance = anInstance$2;
var speciesConstructor$1 = speciesConstructor$2;
var task = task$1.set;
var microtask = microtask$1;
var hostReportErrors = hostReportErrors$1;
var perform$2 = perform$3;
var Queue = queue;
var InternalStateModule = internalState;
var NativePromiseConstructor$2 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
var PromiseConstructor = NativePromiseConstructor$2;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$1 = global$3.TypeError;
var document$1 = global$3.document;
var process$1 = global$3.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$3.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject$1(it) && isCallable$3(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError$1('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$7(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$3.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$3['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$7(task, global$3, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function () {
        if (IS_NODE) {
          process$1.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$7(task, global$3, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process$1.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$1 = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$7(then, value,
            bind$1(internalResolve, wrapper, state),
            bind$1(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable$3(executor);
    call$7(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$1(internalResolve, state), bind$1(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn$1(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$3(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$3(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process$1.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind$1(internalResolve, state);
    this.reject = bind$1(internalReject, state);
  };

  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable$3(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$1(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$7(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype$1, PromisePrototype);
    }
  }
}

$$b({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

var wellKnownSymbol$2 = wellKnownSymbol$k;
var Iterators = iterators;

var ITERATOR$2 = wellKnownSymbol$2('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR$2] === it);
};

var call$6 = functionCall;
var anObject$4 = anObject$i;
var getMethod$2 = getMethod$7;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$4(iterator);
  try {
    innerResult = getMethod$2(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$6(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$4(innerResult);
  return value;
};

var bind = functionBindContext;
var call$5 = functionCall;
var anObject$3 = anObject$i;
var tryToString$1 = tryToString$5;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$5;
var isPrototypeOf$1 = objectIsPrototypeOf;
var getIterator = getIterator$2;
var getIteratorMethod = getIteratorMethod$3;
var iteratorClose = iteratorClose$1;

var $TypeError$1 = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$3 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$3(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError$1(tryToString$1(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$5(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
  } return new Result(false);
};

var wellKnownSymbol$1 = wellKnownSymbol$k;

var ITERATOR$1 = wellKnownSymbol$1('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$1] = function () {
    return this;
  };
  // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$1] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var NativePromiseConstructor$1 = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
});

var $$a = _export;
var call$4 = functionCall;
var aCallable$2 = aCallable$9;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$2 = iterate$3;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$a({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var $promiseResolve = aCallable$2(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$2(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$4($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$9 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$8;
var isCallable$2 = isCallable$o;
var defineBuiltIn = defineBuiltIn$9;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$9({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable$2(NativePromiseConstructor)) {
  var method = getBuiltIn$1('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

var $$8 = _export;
var call$3 = functionCall;
var aCallable$1 = aCallable$9;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate$1 = iterate$3;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$8({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable$1(C.resolve);
      iterate$1(iterable, function (promise) {
        call$3($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$7 = _export;
var call$2 = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$7({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call$2(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject$2 = anObject$i;
var isObject = isObject$a;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$1 = function (C, x) {
  anObject$2(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$6 = _export;
var getBuiltIn = getBuiltIn$8;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;

getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$6({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "X-Codat-LinkMode": "Embedded"
  },
  baseURL: config.LINK_API_URL
});
axiosInstance.interceptors.response.use(response => response, error => {
  if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
    if (error.toString().startsWith("Cancel")) {
      console.error(`A request failed due to being Canceled, this is likely due to a misconfigured test setup.`);
    }
  }

  return Promise.reject(error);
});
configure({
  axios: axiosInstance,
  cache: false
});

const useManualQuery = urlTemplate => {
  const [response, callback] = useAxios({
    url: ""
  }, {
    manual: true
  });
  const execute = useCallback((urlParams, queryParams) => {
    return callback({
      url: formatUrl(urlTemplate, urlParams),
      params: queryParams
    });
  }, [urlTemplate, callback]);
  return [response, execute];
};

const useCompanyConfigQuery = ({
  companyId,
  queryParams
}) => {
  return useAxios({
    url: formatUrl(api.companies.config, {
      companyId
    }),
    params: queryParams
  }, {
    manual: true
  });
};
const useSourceTypesQuery = () => {
  return useManualQuery(api.companies.integrations.sourceTypes);
};
const useManualIntegrationsQuery = integrationsUri => {
  const queryParams = useQueryParams();
  const showSandboxIntegrations = React__default.useMemo(() => queryParams.get("link.showSandboxIntegrations"), [queryParams]);
  return useAxios({
    url: integrationsUri,
    params: {
      "link.showSandboxIntegrations": showSandboxIntegrations
    }
  }, {
    manual: true
  });
};
const useIntegrationQuery = ({
  companyId,
  platformKey
}) => {
  return useAxios({
    url: formatUrl(api.companies.integrations.platform, {
      companyId,
      platformKey
    }),
    method: "GET"
  });
};
const useManualIntegrationQuery = () => {
  return useManualQuery(api.companies.integrations.platform);
};
const useCreateConnectionQuery = ({
  companyId,
  platformKey,
  query
}) => {
  return useAxios({
    url: `${formatUrl(api.companies.createConnection, {
      companyId
    })}${query}`,
    method: "POST",
    data: {
      platformKey
    }
  }, {
    manual: true
  });
};
const useCompanyRedirectValidateQuery = ({
  companyId,
  redirectUrl
}) => {
  return useAxios({
    url: formatUrl(api.companies.redirectValidate, {
      companyId
    }, {
      redirectUrl
    })
  }, {
    manual: true
  });
};
const useDisplayTextQuery = ({
  companyId,
  connectionId
}) => {
  return useAxios({
    url: formatUrl(api.companies.displayText, {
      companyId
    }),
    params: {
      connectionId
    }
  });
};

const usePageViewedEvent = args => {
  const analytics = useAnalytics();
  const [sent, setSent] = useState(false);
  useEffect(() => {
    setSent(false);
  }, [args.resetOnChange]);
  useEffect(() => {
    var _a, _b, _c;

    if (args.ready && !sent) {
      const properties = Object.assign({
        sourceTypes: (_a = args === null || args === void 0 ? void 0 : args.sourceTypes) === null || _a === void 0 ? void 0 : _a.map(s => s.sourceType),
        hasCustomRedirect: (_b = args === null || args === void 0 ? void 0 : args.clientConfig) === null || _b === void 0 ? void 0 : _b.hasCustomRedirect,
        integrations: (_c = args === null || args === void 0 ? void 0 : args.integrations) === null || _c === void 0 ? void 0 : _c.results.map(r => {
          return {
            key: r.key,
            name: r.name
          };
        })
      }, args.data);
      analytics.sendEvent("Page view", properties);
      setSent(true);
    }
  }, [args, sent, analytics]);
};

var apply$1 = functionApply;
var call$1 = functionCall;
var uncurryThis$7 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$1 = anObject$i;
var isNullOrUndefined$1 = isNullOrUndefined$8;
var isRegExp = isRegexp;
var requireObjectCoercible$2 = requireObjectCoercible$a;
var speciesConstructor = speciesConstructor$2;
var advanceStringIndex$1 = advanceStringIndex$3;
var toLength$1 = toLength$5;
var toString$5 = toString$c;
var getMethod$1 = getMethod$7;
var arraySlice = arraySliceSimple;
var callRegExpExec = regexpExecAbstract;
var regexpExec = regexpExec$3;
var stickyHelpers = regexpStickyHelpers;
var fails$4 = fails$q;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min$1 = Math.min;
var $push = [].push;
var exec$1 = uncurryThis$7(/./.exec);
var push$2 = uncurryThis$7($push);
var stringSlice$3 = uncurryThis$7(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$4(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic$1('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString$5(requireObjectCoercible$2(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call$1(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
        (separator.multiline ? 'm' : '') +
        (separator.unicode ? 'u' : '') +
        (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call$1(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push$2(output, stringSlice$3(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply$1($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec$1(separatorCopy, '')) push$2(output, '');
      } else push$2(output, stringSlice$3(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
    // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call$1(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$2(this);
      var splitter = isNullOrUndefined$1(separator) ? undefined : getMethod$1(separator, SPLIT);
      return splitter
        ? call$1(splitter, separator, O, limit)
        : call$1(internalSplit, toString$5(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$1(this);
      var S = toString$5(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
        (rx.multiline ? 'm' : '') +
        (rx.unicode ? 'u' : '') +
        (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice$3(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min$1(toLength$1(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex$1(S, q, unicodeMatching);
        } else {
          push$2(A, stringSlice$3(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push$2(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push$2(A, stringSlice$3(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

const getExtension = fileName => {
  if (fileName.indexOf(".") < 0) {
    return undefined;
  } else {
    return fileName.split(".").pop();
  }
};

function getPageConfiguration(config, page, key) {
  var _a;

  const pageConfiguration = config.pageConfiguration[page];
  return pageConfiguration && key ? (_a = Object.entries(pageConfiguration).find(([c]) => c.toLowerCase() === key.toLowerCase())) === null || _a === void 0 ? void 0 : _a.pop() : pageConfiguration;
}

function getSourceTypeLinkUrl(companyId, sourceType) {
  if (!sourceType) {
    return formatUrl(routes.company.link, {
      companyId
    });
  }

  return formatUrl(getRoute(sourceType), {
    companyId,
    sourceType: sourceType.sourceType.toLowerCase()
  });
}

function getRoute(sourceType) {
  if (sourceType.displayRevisit) return routes.company.revisit;
  if (sourceType.useCustomIntro) return routes.company.customIntro;
  return routes.company.link;
}

const GENERIC_ERROR = "Unknown error";
function getTryCatchErrorMessage(e) {
  if (typeof e === "object" && "message" in e) {
    return e.message;
  } else if (typeof e === "string") {
    return e;
  } else {
    return GENERIC_ERROR;
  }
}

const fileUploadPlatformKeys = ["ukbd", "trlg", "accountingfileupload", "bankingfileupload", "njmc"];

var tryToString = tryToString$5;

var $TypeError = TypeError;

var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};

var userAgent$1 = engineUserAgent;

var firefox = userAgent$1.match(/firefox\/(\d+)/i);

var engineFfVersion = !!firefox && +firefox[1];

var UA = engineUserAgent;

var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent = engineUserAgent;

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

var engineWebkitVersion = !!webkit && +webkit[1];

var $$5 = _export;
var uncurryThis$6 = functionUncurryThis;
var aCallable = aCallable$9;
var toObject$1 = toObject$6;
var lengthOfArrayLike = lengthOfArrayLike$5;
var deletePropertyOrThrow = deletePropertyOrThrow$1;
var toString$4 = toString$c;
var fails$3 = fails$q;
var internalSort = arraySort$1;
var arrayMethodIsStrict = arrayMethodIsStrict$2;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;

var test$1 = [];
var nativeSort = uncurryThis$6(test$1.sort);
var push$1 = uncurryThis$6(test$1.push);

// IE8-
var FAILS_ON_UNDEFINED = fails$3(function () {
  test$1.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails$3(function () {
  test$1.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails$3(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test$1.push({ k: chr + index, v: value });
    }
  }

  test$1.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test$1.length; index++) {
    chr = test$1[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED$1 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString$4(x) > toString$4(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$$5({ target: 'Array', proto: true, forced: FORCED$1 }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject$1(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push$1(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});

function getPrioritySourceType(sourceTypes) {
  return getSortedSourceTypes(sourceTypes)[0];
}
function getNextPrioritySourceType(sourceTypes, sourceType) {
  const sortedSourceTypes = getSortedSourceTypes(sourceTypes);
  const index = sortedSourceTypes.findIndex(s => s.sourceType === sourceType.sourceType);
  return index !== -1 ? sortedSourceTypes[index + 1] : undefined;
}

function getSortedSourceTypes(sourceTypes) {
  return sourceTypes.sort((a, b) => a.priority - b.priority);
}

function sourceTypeHasData(sourceType) {
  var _a;

  return sourceType.connected > 0 || ((_a = sourceType.uploadedFiles) !== null && _a !== void 0 ? _a : 0) > 0;
}
const sourceTypePlatformName = {
  Accounting: "accounting software",
  Banking: "bank account",
  Commerce: "commerce software",
  Other: "business documents"
};
const sourceTypeFileName = {
  Accounting: "accounting documents",
  Banking: "bank documents",
  Commerce: "files",
  Other: "business documents"
};
const sourceTypeSelectionText = {
  Accounting: `Select your ${sourceTypePlatformName["Accounting"]}`,
  Banking: "Connect your bank account",
  Commerce: `Select your ${sourceTypePlatformName["Commerce"]}`,
  Other: `Select your ${sourceTypePlatformName["Other"]}`
};

const makeFileUploadApi = (instance, successCallback) => {
  const createFileConnection = (companyId, query, platformKey) => {
    query["uiFlow"] = "true";
    const url = formatUrl(api.companies.createFileConnection, {
      companyId
    }, query);
    return instance.post(url, {
      platformKey
    }).then(r => r.data);
  };

  const uploadOne = (companyId, connectionId, file) => {
    const url = formatUrl(api.companies.uploadFile, {
      companyId,
      connectionId
    });
    const formData = new FormData();
    formData.append("file", file);
    return instance.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(() => ({
      file,
      result: "success"
    })).catch(() => ({
      file,
      result: "error"
    }));
  };

  const getPlatformKey = sourceType => {
    switch (sourceType) {
      case "Accounting":
        return "ukbd";

      case "Banking":
        return "trlg";

      case "Other":
        return "njmc";

      default:
        throw new Error(`Source type ${sourceType} has not been configured for file upload`);
    }
  };

  return {
    createFileConnection,
    uploadOne,
    successCallback,
    getPlatformKey
  };
};
const makeFileUploadService = (api, eventTracker) => {
  const uploadFiles = (companyId, query, sourceType, files) => {
    const eventProperties = {
      fileCount: files.length,
      sizes: files.map(f => f.size),
      exts: files.map(f => getExtension(f.name))
    };
    eventTracker("Link file upload - Upload started", eventProperties);
    const platformKey = api.getPlatformKey(sourceType);
    const createFileConnection = from(api.createFileConnection(companyId, query, platformKey));
    return createFileConnection.pipe(switchMap(({
      connectionId
    }) => {
      const fileResults = files.map(f => from(api.uploadOne(companyId, connectionId, f)));
      return merge$1(...fileResults).pipe(tap({
        next: v => {
          if (v.result === "error") {
            eventTracker("Link file upload - File upload failed");
          }
        },
        complete: () => {
          eventTracker("Link file upload - Upload finished");
        }
      }));
    }));
  };

  const successCallback = (companyId, query, sourceType) => {
    const platformKey = api.getPlatformKey(sourceType);
    return api.createFileConnection(companyId, query, platformKey).then(response => {
      const connectionId = response.connectionId;
      api.successCallback({
        companyId,
        platformKey,
        sourceType,
        connectionId
      });
    });
  };

  return {
    uploadFiles,
    successCallback
  };
};
const FileUploadServiceContext = /*#__PURE__*/React__default.createContext(undefined);
const useFileUploadService = () => {
  const s = React__default.useContext(FileUploadServiceContext);

  if (s === undefined) {
    throw new Error("FileUploadService must be initialised before use");
  }

  return s;
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

var SourceTypeStatus;

(function (SourceTypeStatus) {
  SourceTypeStatus[SourceTypeStatus["EMPTY"] = 0] = "EMPTY";
  SourceTypeStatus[SourceTypeStatus["LOADING"] = 1] = "LOADING";
  SourceTypeStatus[SourceTypeStatus["READY"] = 2] = "READY";
  SourceTypeStatus[SourceTypeStatus["ERROR"] = 3] = "ERROR";
  SourceTypeStatus[SourceTypeStatus["REFETCH"] = 4] = "REFETCH";
})(SourceTypeStatus || (SourceTypeStatus = {}));

const defaultState = {
  status: SourceTypeStatus.EMPTY,
  refetch: () => {
    /* Intentionally blank */
  }
};
const SourceTypesContext = /*#__PURE__*/createContext(defaultState);
function SourceTypesProvider({
  children,
  companyId,
  initialState = defaultState
}) {
  const [{
    data,
    loading,
    error
  }, getSourceTypes] = useSourceTypesQuery();
  const [status, setStatus] = useState(initialState.status);
  useEffect(() => {
    function fetchSourceTypes() {
      return __awaiter(this, void 0, void 0, function* () {
        setStatus(SourceTypeStatus.LOADING);

        try {
          yield getSourceTypes({
            companyId
          });
          setStatus(SourceTypeStatus.READY);
        } catch (e) {
          setStatus(SourceTypeStatus.ERROR);
        }
      });
    }

    if (companyId && (status === SourceTypeStatus.EMPTY || status === SourceTypeStatus.REFETCH)) {
      fetchSourceTypes();
    }
  }, [companyId, status, error, loading, getSourceTypes]);
  const sortedData = useMemo(() => {
    return data ? [...data].sort((a, b) => a.priority - b.priority) : undefined;
  }, [data]);
  const refetch = useCallback(() => setStatus(SourceTypeStatus.REFETCH), []);
  const contextValue = {
    sourceTypes: sortedData || initialState.sourceTypes,
    status,
    error,
    refetch
  };
  return /*#__PURE__*/React__default.createElement(SourceTypesContext.Provider, {
    value: contextValue
  }, children);
}
const useSourceTypes = () => useContext(SourceTypesContext);

const useFavicon = link => {
  return useEffect(() => {
    const favicon = document.getElementById("favicon");

    if (favicon instanceof HTMLLinkElement) {
      favicon.href = link !== null && link !== void 0 ? link : "data:,";
    }
  }, [link]);
};

var styles$t = { "centre": "CentreOverlay-module_centre__M3xTz" };

const CentreOverlay = _a => {
  var {
    children
  } = _a,
    props = __rest(_a, ["children"]);

  return /*#__PURE__*/React.createElement("div", Object.assign({}, props, {
    className: styles$t.centre
  }), children);
};

var styles$s = { "container": "CardContainer-module_container__veQr-" };

const CardContainer = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: styles$s.container
}, children);

const CallbackContext = /*#__PURE__*/createContext({
  onClose: () => {
    return;
  },
  onConnection: () => {
    return;
  },
  onError: () => {
    return;
  },
  onFinish: () => {
    return;
  }
});
const CallbackProvider = props => {
  const {
    children,
    onClose,
    onConnection,
    onError,
    onFinish
  } = props;
  return /*#__PURE__*/React__default.createElement(CallbackContext.Provider, {
    value: {
      onClose,
      onConnection,
      onError,
      onFinish
    }
  }, children);
};
const useCallbacks = () => useContext(CallbackContext);

var styles$r = { "content": "ErrorCard-module_content__Hn34i", "header": "ErrorCard-module_header__3VIqI", "body": "ErrorCard-module_body__kkXcY", "footer": "ErrorCard-module_footer__kAyIH", "title": "ErrorCard-module_title__nHx8Z", "centered": "ErrorCard-module_centered__gB5-W" };

const getErrorTitle = errorCode => {
  switch (errorCode) {
    case 400:
      return "Bad Request";

    case 404:
      return "Page doesn't exist";

    case 402:
      return "License limit for linking companies reached";

    case 500:
    default:
      return "Something went wrong";
  }
};

const ErrorCard = ({
  errorCode: _errorCode = 500,
  correlationId,
  errorMessage
}) => {
  const {
    onError
  } = useCallbacks();
  React.useEffect(() => {
    onError({
      correlationId: correlationId !== null && correlationId !== void 0 ? correlationId : undefined,
      message: errorMessage !== null && errorMessage !== void 0 ? errorMessage : undefined,
      errorCode: _errorCode,
      userRecoverable: false
    });
  }, [correlationId, _errorCode, errorMessage, onError]);
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    "data-testid": "error-card",
    className: classNames(styles$r.content, styles$r.centered)
  }, /*#__PURE__*/React.createElement("header", {
    className: styles$r.header
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "extraLarge",
    as: "p",
    "data-testid": "error-card-header"
  }, _errorCode)), /*#__PURE__*/React.createElement("div", {
    className: classNames(styles$r.body, styles$r.centered)
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h2",
    as: "h2",
    className: styles$r.title,
    "data-testid": "error-card-title"
  }, errorMessage || getErrorTitle(_errorCode)), correlationId && /*#__PURE__*/React.createElement(Typography, {
    variant: "small",
    as: "p",
    "data-testid": "error-card-correlation-id"
  }, correlationId))));
};

function NoMatchContent() {
  const queryParams = useQueryParams();
  const correlationId = React.useMemo(() => queryParams.get("x-correlation-id"), [queryParams]);
  usePageViewedEvent({
    ready: true
  });
  return /*#__PURE__*/React.createElement(CardContainer, null, /*#__PURE__*/React.createElement(ErrorCard, {
    errorCode: 404,
    correlationId: correlationId
  }));
}

const NoMatch = withEventContext(NoMatchContent, "No match page");

// a string of all valid unicode whitespaces
var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$5 = functionUncurryThis;
var requireObjectCoercible$1 = requireObjectCoercible$a;
var toString$3 = toString$c;
var whitespaces$2 = whitespaces$3;

var replace$2 = uncurryThis$5(''.replace);
var whitespace = '[' + whitespaces$2 + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$3(requireObjectCoercible$1($this));
    if (TYPE & 1) string = replace$2(string, ltrim, '');
    if (TYPE & 2) string = replace$2(string, rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

var PROPER_FUNCTION_NAME = functionName.PROPER;
var fails$2 = fails$q;
var whitespaces$1 = whitespaces$3;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$2(function () {
    return !!whitespaces$1[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces$1[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$4 = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$4({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

const Button = props => {
  const {
    analyticsName,
    eventProperties,
    onClick
  } = props,
    buttonProps = __rest(props, ["analyticsName", "eventProperties", "onClick"]);

  const analytics = useAnalytics();

  const handleOnClickWithTracking = e => {
    analytics.sendEvent(`${analyticsName} button - Clicked`, eventProperties);

    if (onClick) {
      onClick(e);
    }
  };

  return /*#__PURE__*/React__default.createElement(Button$1, Object.assign({}, buttonProps, {
    onClick: handleOnClickWithTracking
  }));
};

var $$3 = _export;
var DESCRIPTORS = descriptors;
var global$2 = global$p;
var uncurryThis$4 = functionUncurryThis;
var hasOwn = hasOwnProperty_1;
var isCallable$1 = isCallable$o;
var isPrototypeOf = objectIsPrototypeOf;
var toString$2 = toString$c;
var defineProperty = objectDefineProperty.f;
var copyConstructorProperties = copyConstructorProperties$2;

var NativeSymbol = global$2.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable$1(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$2(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var thisSymbolValue = uncurryThis$4(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis$4(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace$1 = uncurryThis$4(''.replace);
  var stringSlice$2 = uncurryThis$4(''.slice);

  defineProperty(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice$2(string, 7, -1) : replace$1(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $$3({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

const TextLink = props => {
  const {
    analyticsName,
    eventProperties,
    onClick,
    children
  } = props,
    linkProps = __rest(props, ["analyticsName", "eventProperties", "onClick", "children"]);

  const analytics = useAnalytics();

  const onAmplitudeEventSent = () => {
    if (!props.href) return;
    window.location.assign(props.href);
  };

  const handleOnClickWithTracking = e => {
    const eventName = `${analyticsName} link - Clicked`;

    if (onClick) {
      analytics.sendEvent(eventName, eventProperties);
      onClick(e);
      return;
    }

    if (!analytics) {
      return;
    }

    if (props.href && props.target !== "_blank") {
      e.preventDefault(); // If link is opened in same tab, we must use callback to ensure event is sent before navigating away

      analytics.sendEvent(eventName, eventProperties, onAmplitudeEventSent, onAmplitudeEventSent);
    } else {
      // If not a link or if link is opened in new tab, we don't need to wait for Amplitude to complete before handling navigation
      analytics.sendEvent(eventName, eventProperties);
    }
  };

  return /*#__PURE__*/React__default.createElement(TextLink$1, Object.assign({}, linkProps, {
    onClick: handleOnClickWithTracking
  }), children);
};

var styles$q = { "container": "DataSecurity-module_container__4p6Sl", "icon": "DataSecurity-module_icon__X8-8v", "text": "DataSecurity-module_text__N60cy", "link": "DataSecurity-module_link__-0At4" };

const DataSecurityLink = ({
  link
}) => {
  var _a;

  if (link === null || link === void 0 ? void 0 : link.href) {
    return /*#__PURE__*/React__default.createElement(TextLink, {
      className: styles$q.link,
      href: link.href,
      target: "_blank",
      "data-testid": "data-security-link",
      analyticsName: "Data security"
    }, (_a = link.text) !== null && _a !== void 0 ? _a : link.href);
  }

  if (link === null || link === void 0 ? void 0 : link.text) {
    return /*#__PURE__*/React__default.createElement(Typography, {
      className: styles$q.link,
      variant: "p",
      as: "p",
      "data-testid": "data-security-text"
    }, link.text);
  }

  return null;
};

const DataSecurity = _a => {
  var {
    description,
    link
  } = _a,
    props = __rest(_a, ["description", "link"]);

  return /*#__PURE__*/React__default.createElement("section", Object.assign({
    className: styles$q.container
  }, props), /*#__PURE__*/React__default.createElement(CircleIcon, {
    className: styles$q.icon,
    icon: ShieldCheckIcon
  }), description && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h3",
    as: "h3",
    className: styles$q.text,
    "data-testid": "data-security-description"
  }, description), /*#__PURE__*/React__default.createElement(DataSecurityLink, {
    link: link
  }));
};

var uncurryThis$3 = functionUncurryThis;
var toObject = toObject$6;

var floor = Math.floor;
var charAt = uncurryThis$3(''.charAt);
var replace = uncurryThis$3(''.replace);
var stringSlice$1 = uncurryThis$3(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$1(str, 0, position);
      case "'": return stringSlice$1(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$1(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var apply = functionApply;
var call = functionCall;
var uncurryThis$2 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails$1 = fails$q;
var anObject = anObject$i;
var isCallable = isCallable$o;
var isNullOrUndefined = isNullOrUndefined$8;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength = toLength$5;
var toString$1 = toString$c;
var requireObjectCoercible = requireObjectCoercible$a;
var advanceStringIndex = advanceStringIndex$3;
var getMethod = getMethod$7;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol = wellKnownSymbol$k;

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis$2([].concat);
var push = uncurryThis$2([].push);
var stringIndexOf = uncurryThis$2(''.indexOf);
var stringSlice = uncurryThis$2(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$1(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString$1(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString$1(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString$1(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString$1(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$1(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString$1(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

var styles$p = { "container": "HelpModal-module_container__ZHZ8m", "close": "HelpModal-module_close__LwvOB", "title": "HelpModal-module_title__56ytT", "body": "HelpModal-module_body__LLZAa", "link": "HelpModal-module_link__Sluwz", "modal": "HelpModal-module_modal__P59es" };

const HelpModalContent = _a => {
  var {
    isOpen,
    text,
    link
  } = _a,
    props = __rest(_a, ["isOpen", "text", "link"]);

  const analytics = useAnalytics();

  const onClose = () => {
    analytics.sendEvent("Closed");
    props.onClose();
  };

  return /*#__PURE__*/React__default.createElement(Modal, {
    onClose: onClose,
    className: styles$p.modal,
    trapFocus: false
  }, isOpen && /*#__PURE__*/React__default.createElement(Card, {
    className: styles$p.container,
    "data-testid": "help-modal"
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    label: "close",
    className: styles$p.close,
    onClick: onClose
  }, /*#__PURE__*/React__default.createElement(CloseIcon, null)), text && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h1",
    as: "h1",
    className: styles$p.title,
    "data-testid": "help-modal-title"
  }, text), (link === null || link === void 0 ? void 0 : link.text) && /*#__PURE__*/React__default.createElement(Typography, {
    className: styles$p.body,
    variant: "p",
    as: "p",
    "data-testid": "help-modal-body"
  }, link.text), (link === null || link === void 0 ? void 0 : link.href) && /*#__PURE__*/React__default.createElement(TextLink, {
    className: styles$p.link,
    href: link.href,
    "data-testid": "help-modal-link",
    analyticsName: "Help"
  }, link.href.replace(/mailto:|tel:|https?:\/\//g, ""))));
};

const HelpModal = withEventContext(HelpModalContent, "Help modal");

var styles$o = { "icon": "LinkedAccountIcon-module_icon__AL2zT" };

const LinkedAccountIcon = ({
  sourceType,
  currentSourceType,
  className
}) => {
  const icon = (() => {
    if (sourceType.sourceType === currentSourceType) {
      return /*#__PURE__*/React__default.createElement(SyncIcon, {
        "data-testid": `sync-icon-${sourceType.sourceType.toLowerCase()}`
      });
    } else if (sourceTypeHasData(sourceType)) {
      return /*#__PURE__*/React__default.createElement(CheckIcon, {
        "data-testid": `check-icon-${sourceType.sourceType.toLowerCase()}`
      });
    } else {
      return /*#__PURE__*/React__default.createElement(DashIcon, {
        "data-testid": `dash-icon-${sourceType.sourceType.toLowerCase()}`
      });
    }
  })();

  return /*#__PURE__*/React__default.createElement("span", {
    "data-testid": "linked-account-icon",
    className: classNames(styles$o.icon, className)
  }, icon);
};

var styles$n = { "container": "LinkedAccounts-module_container__jxisg", "disabled": "LinkedAccounts-module_disabled__6-HMc", "inheritColor": "LinkedAccounts-module_inheritColor__LH8Vi", "containerWithProgressBar": "LinkedAccounts-module_containerWithProgressBar__g36Sb", "textBold": "LinkedAccounts-module_textBold__UGq8J", "linkInfo": "LinkedAccounts-module_linkInfo__zkjaA", "progressBar": "LinkedAccounts-module_progressBar__8up3W", "text": "LinkedAccounts-module_text__PTXo0", "icon": "LinkedAccounts-module_icon__2jtvm" };

const useCurrentStep = (sourceType, currentSourceType, sourceTypes) => {
  const link = useRouteMatch(routes.company.link);
  const success = useRouteMatch(routes.company.success);
  const revisit = useRouteMatch(routes.company.revisit);
  const consent = useRouteMatch(routes.company.consent);
  const error = useRouteMatch(routes.company.error);
  const overview = useRouteMatch(routes.company.overview);
  const customIntro = useRouteMatch(routes.company.customIntro);
  const source = sourceType.sourceType.toLowerCase();
  const currentStep = useMemo(() => {
    var _a, _b;

    const prioritySource = (_a = getPrioritySourceType(sourceTypes)) === null || _a === void 0 ? void 0 : _a.sourceType.toLowerCase();
    const linkSourceType = link === null || link === void 0 ? void 0 : link.params.sourceType;

    if (customIntro && customIntro.params.sourceType.toLowerCase() === source || link && !linkSourceType && prioritySource === source || link && linkSourceType && linkSourceType.toLowerCase() === source) {
      return 1;
    }

    if (success && success.params.sourceType.toLowerCase() === source || revisit && ((_b = revisit.params.sourceType) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === source) {
      return 4;
    }

    if (consent && (currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType.toLowerCase()) === source || error && (currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType.toLowerCase()) === source) {
      return 2;
    }

    return 0;
  }, [link, success, revisit, consent, error, source, currentSourceType, sourceTypes, customIntro]);
  const flowNotStarted = currentStep === 0;
  const hasNoData = !sourceTypeHasData(sourceType);
  const sourceTypeSkipped = flowNotStarted && (currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.priority) && (currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.priority) > sourceType.priority && hasNoData || overview && hasNoData;
  const textDisabled = sourceTypeSkipped || !overview && (!(currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.priority) || flowNotStarted && (currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.priority) < sourceType.priority && hasNoData);
  return {
    currentStep,
    textDisabled,
    sourceTypeSkipped
  };
};

const LinkedAccountItem = ({
  sourceType,
  currentSourceType,
  sourceTypes,
  bankingOnlyFileUpload
}) => {
  const {
    currentStep,
    textDisabled,
    sourceTypeSkipped
  } = useCurrentStep(sourceType, currentSourceType, sourceTypes);

  const text = (() => {
    if (sourceTypeSkipped) {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, sourceType.sourceType, /*#__PURE__*/React__default.createElement("span", {
        className: styles$n.textBold
      }, " skipped"));
    }

    if (sourceType.sourceType === "Banking" && bankingOnlyFileUpload) {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, "Upload your bank documents");
    }

    if (sourceType.sourceType === "Other") {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, "Upload your business documents");
    }

    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, "Connect your ", sourceTypePlatformName[sourceType.sourceType]);
  })();

  return /*#__PURE__*/React__default.createElement("div", {
    className: classNames(styles$n.container, {
      [styles$n.containerWithProgressBar]: currentStep > 0,
      [styles$n.disabled]: textDisabled
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$n.linkInfo
  }, /*#__PURE__*/React__default.createElement(LinkedAccountIcon, {
    className: styles$n.inheritColor,
    sourceType: sourceType,
    currentSourceType: currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType
  }), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "p",
    as: "p",
    className: classNames(styles$n.text, styles$n.inheritColor, {
      [styles$n.textBold]: currentStep > 0
    }),
    "data-testid": `linked-account-${sourceType.sourceType.toLowerCase()}`
  }, text)), currentStep > 0 && /*#__PURE__*/React__default.createElement("div", {
    className: styles$n.progressBar
  }, /*#__PURE__*/React__default.createElement(StepProgressBar, {
    steps: 4,
    currentStep: currentStep,
    color: "var(--display-color)",
    "data-testid": `progress-bar-${sourceType.sourceType.toLowerCase()}`
  })));
};

const LinkedAccounts = ({
  sourceTypes,
  currentSourceType,
  bankingOnlyFileUpload
}) => {
  const {
    colors
  } = useTheme();
  const overview = useRouteMatch(routes.company.overview);
  return /*#__PURE__*/React__default.createElement("section", null, sourceTypes.map(sourceType => /*#__PURE__*/React__default.createElement(LinkedAccountItem, {
    sourceType: sourceType,
    key: sourceType.sourceType,
    currentSourceType: currentSourceType,
    sourceTypes: sourceTypes,
    bankingOnlyFileUpload: bankingOnlyFileUpload
  })), /*#__PURE__*/React__default.createElement("div", {
    className: styles$n.container
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$n.linkInfo
  }, /*#__PURE__*/React__default.createElement("span", {
    "data-testid": "linked-account-icon",
    className: classNames(styles$n.icon, {
      [styles$n.current]: overview
    })
  }, overview ? /*#__PURE__*/React__default.createElement(SyncIcon, {
    fillColor: colors["color-ui-action"]
  }) : /*#__PURE__*/React__default.createElement(DashIcon, {
    fillColor: colors["color-ui-interface"]
  })), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "p",
    as: "p",
    className: classNames(styles$n.text, {
      [styles$n.textBold]: overview
    }),
    style: {
      color: overview ? colors["color-ui-action"] : colors["color-ui-interface"]
    }
  }, "Overview"))));
};

var styles$m = { "pane": "LeftHandPane-module_pane__fxKQ1", "linkedAccountsSection": "LeftHandPane-module_linkedAccountsSection__0CyVA", "show": "LeftHandPane-module_show__Osy3h", "topRow": "LeftHandPane-module_topRow__cBKvU", "icon": "LeftHandPane-module_icon__iG9cm", "lowerSection": "LeftHandPane-module_lowerSection__CFFtH", "dataSecuritySection": "LeftHandPane-module_dataSecuritySection__k5jTo", "helpSection": "LeftHandPane-module_helpSection__oT-Gl", "leftPanelBody": "LeftHandPane-module_leftPanelBody__rw-6W" };

const LeftHandPane = ({
  showLinkedAccounts,
  currentSourceType,
  isLoadingComplete
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;

  const sourceTypeContext = useSourceTypes();
  const {
    state
  } = useConfig();
  const bankingSourceType = React__default.useMemo(() => {
    var _a;

    return (_a = sourceTypeContext.sourceTypes) === null || _a === void 0 ? void 0 : _a.find(s => s.sourceType === "Banking");
  }, [sourceTypeContext.sourceTypes]);
  const [{
    data: bankingIntegrationsData,
    loading: isBankingIntegrationsLoading
  }, executeGetIntegrations] = useManualIntegrationsQuery((_a = bankingSourceType === null || bankingSourceType === void 0 ? void 0 : bankingSourceType.integrationsUri) !== null && _a !== void 0 ? _a : "");
  const bankingOnlyFileUpload = (bankingSourceType !== null && bankingSourceType !== void 0 ? bankingSourceType : false) && ((_c = (_b = state.data.enableFileUpload) === null || _b === void 0 ? void 0 : _b.banking) !== null && _c !== void 0 ? _c : false) && (bankingIntegrationsData === null || bankingIntegrationsData === void 0 ? void 0 : bankingIntegrationsData.totalResults) === 0;
  React__default.useEffect(() => {
    var _a;

    if (((_a = state.data.enableFileUpload) === null || _a === void 0 ? void 0 : _a.banking) && bankingSourceType && executeGetIntegrations) {
      executeGetIntegrations();
    }
  }, [bankingSourceType, executeGetIntegrations, (_d = state.data.enableFileUpload) === null || _d === void 0 ? void 0 : _d.banking]);
  const [isHelpModal, setHelpModal] = React__default.useState(false);
  const isComplete = React__default.useMemo(() => {
    const isSourceTypesReady = showLinkedAccounts ? sourceTypeContext && sourceTypeContext.status === SourceTypeStatus.READY : true;
    return isSourceTypesReady && state.status === ConfigStatusType.READY && !isBankingIntegrationsLoading;
  }, [sourceTypeContext, showLinkedAccounts, state.status, isBankingIntegrationsLoading]);
  const {
    help,
    dataSecurity,
    pageConfiguration
  } = state.data;
  const showHelp = (help === null || help === void 0 ? void 0 : help.description) || ((_e = help === null || help === void 0 ? void 0 : help.link) === null || _e === void 0 ? void 0 : _e.href) || ((_f = help === null || help === void 0 ? void 0 : help.link) === null || _f === void 0 ? void 0 : _f.text);
  const showDataSecurity = (dataSecurity === null || dataSecurity === void 0 ? void 0 : dataSecurity.description) || ((_g = dataSecurity === null || dataSecurity === void 0 ? void 0 : dataSecurity.link) === null || _g === void 0 ? void 0 : _g.href) || ((_h = dataSecurity === null || dataSecurity === void 0 ? void 0 : dataSecurity.link) === null || _h === void 0 ? void 0 : _h.text);
  const leftPanelTitle = pageConfiguration.leftPanel.title;
  const leftPanelBody = pageConfiguration.leftPanel.body;
  return /*#__PURE__*/React__default.createElement("div", {
    className: classNames(styles$m.pane, {
      [styles$m.show]: isComplete
    })
  }, /*#__PURE__*/React__default.createElement("section", null, /*#__PURE__*/React__default.createElement("div", {
    className: styles$m.topRow
  }, showHelp && /*#__PURE__*/React__default.createElement(Button, {
    variant: "tertiary",
    onClick: () => setHelpModal(true),
    analyticsName: "Open help",
    "data-testid": "l-pane-help"
  }, /*#__PURE__*/React__default.createElement(CircleQuestionIcon, {
    className: styles$m.icon
  }), /*#__PURE__*/React__default.createElement("span", null, "Help"))), leftPanelTitle && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h1",
    as: "h1",
    "data-testid": "left-panel-title"
  }, leftPanelTitle), leftPanelBody && /*#__PURE__*/React__default.createElement(Typography, {
    as: "p",
    className: styles$m.leftPanelBody,
    "data-testid": "left-panel-body"
  }, leftPanelBody), sourceTypeContext.sourceTypes && showLinkedAccounts && /*#__PURE__*/React__default.createElement("section", {
    className: classNames(styles$m.linkedAccountsSection, {
      [styles$m.show]: isLoadingComplete
    }),
    "data-testid": "l-pane-linked-accounts"
  }, /*#__PURE__*/React__default.createElement(LinkedAccounts, {
    sourceTypes: sourceTypeContext.sourceTypes,
    currentSourceType: currentSourceType,
    bankingOnlyFileUpload: bankingOnlyFileUpload
  }))), /*#__PURE__*/React__default.createElement("section", {
    className: styles$m.lowerSection
  }, showDataSecurity && /*#__PURE__*/React__default.createElement("section", {
    className: styles$m.dataSecuritySection
  }, /*#__PURE__*/React__default.createElement(DataSecurity, {
    description: dataSecurity === null || dataSecurity === void 0 ? void 0 : dataSecurity.description,
    link: dataSecurity === null || dataSecurity === void 0 ? void 0 : dataSecurity.link,
    "data-testid": "l-pane-data-security"
  }))), /*#__PURE__*/React__default.createElement(HelpModal, {
    isOpen: isHelpModal,
    onClose: () => setHelpModal(false),
    text: help === null || help === void 0 ? void 0 : help.description,
    link: help === null || help === void 0 ? void 0 : help.link
  }));
};

const excludedSearchParams = ["platformName", "displayText"];

const useFilteredQueryParams = (keepContinue = false) => {
  const location = useLocation();
  return useMemo(() => {
    const parsed = queryString.parse(location.search);

    if (!keepContinue) {
      delete parsed["continue"];
    }

    excludedSearchParams.forEach(key => {
      delete parsed[key];
    });
    return parsed;
  }, [keepContinue, location.search]);
};

const useFilteredQueryString = (keepContinue = false) => {
  const params = useFilteredQueryParams(keepContinue);
  return `?${queryString.stringify(params)}`;
};

const useNextSourceTypeRedirectHandler = (companyId, sourceType, isSkipToOverview) => {
  const history = useHistory();
  const search = useFilteredQueryString();

  if (isSkipToOverview) {
    return () => history.push({
      pathname: formatUrl(routes.company.overview, {
        companyId
      }),
      search
    });
  }

  if (!sourceType) {
    return;
  }

  return () => history.push({
    pathname: getSourceTypeLinkUrl(companyId, sourceType),
    search
  });
};

const useSourceTypeResolver = (params, sourceTypes) => {
  const history = useHistory();
  return useMemo(() => {
    if (sourceTypes) {
      if (params.sourceType) {
        const sourceTypeResponse = sourceTypes.find(t => {
          var _a;

          return t.sourceType.toLowerCase() === ((_a = params.sourceType) === null || _a === void 0 ? void 0 : _a.toLowerCase());
        });

        if (!sourceTypeResponse) {
          history.push(routes.notfound);
        }

        const nextPrioritySourceType = sourceTypeResponse && getNextPrioritySourceType(sourceTypes, sourceTypeResponse);
        return {
          currentSourceType: sourceTypeResponse,
          nextPrioritySourceType
        };
      }

      const currentSourceType = getPrioritySourceType(sourceTypes);
      return {
        currentSourceType,
        nextPrioritySourceType: currentSourceType && getNextPrioritySourceType(sourceTypes, currentSourceType)
      };
    }

    return {};
  }, [params, sourceTypes, history]);
};

var styles$l = { "secondaryCta": "SecondaryCta-module_secondaryCta__-vDtR" };

const SecondaryCta = _a => {
  var {
    className,
    label
  } = _a,
    props = __rest(_a, ["className", "label"]);

  return /*#__PURE__*/React__default.createElement(Button, Object.assign({}, props, {
    className: classNames(styles$l.secondaryCta, className),
    variant: "secondary",
    color: "interface",
    label: label
  }));
};

var styles$k = { "contactSupportLink": "ContactSupport-module_contactSupportLink__ES-xi", "contactSupportText": "ContactSupport-module_contactSupportText__-YaS1" };

const ContactSupport = ({
  clientName,
  link,
  onFocus,
  onBlur
}) => {
  const portalAuthCookie = cookies.get(`app-${config.ENVIRONMENT.toLowerCase()}-clientid`);

  const getContactSupportText = () => {
    if (!(link === null || link === void 0 ? void 0 : link.href)) {
      return `Please contact ${clientName}`;
    }

    if (link.href.startsWith("tel:")) {
      return `Contact support at ${link.href.replace(/mailto:|tel:|https?:\/\//g, "")}`;
    }

    return "Contact support";
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !(link === null || link === void 0 ? void 0 : link.href) && /*#__PURE__*/React__default.createElement("div", {
    "data-testid": "support-text",
    className: styles$k.contactSupportText
  }, getContactSupportText()), (link === null || link === void 0 ? void 0 : link.href) && /*#__PURE__*/React__default.createElement(TextLink, {
    href: link.href,
    "data-testid": "support-link",
    analyticsName: "Support",
    eventProperties: {
      isLoggedIntoPortal: !!portalAuthCookie
    },
    onFocus: onFocus,
    onBlur: onBlur,
    className: styles$k.contactSupportLink,
    target: link.href.startsWith("tel") ? "" : "_blank"
  }, getContactSupportText()));
};

var styles$j = { "content": "PlaidUpgrade-module_content__KnX1b", "show": "PlaidUpgrade-module_show__iahOJ", "centered": "PlaidUpgrade-module_centered__QjEfc", "footer": "PlaidUpgrade-module_footer__eDzET", "contactSupport": "PlaidUpgrade-module_contactSupport__W8v72", "image": "PlaidUpgrade-module_image__dTu2Q", "title": "PlaidUpgrade-module_title__-zIm-", "continueButton": "PlaidUpgrade-module_continueButton__flgcT" };

const PlaidUpgradeContent = ({
  integrationLogo,
  isComplete
}) => {
  var _a;

  const {
    companyId,
    sourceType
  } = useParams();
  const {
    sourceTypes,
    status: sourceTypesStatus
  } = useSourceTypes();
  const {
    state: {
      data: linkConfig
    }
  } = useConfig();
  const {
    currentSourceType,
    nextPrioritySourceType
  } = useSourceTypeResolver({
    sourceType: sourceType
  }, sourceTypes);
  const handleSkip = useNextSourceTypeRedirectHandler(companyId, nextPrioritySourceType, currentSourceType && !nextPrioritySourceType);
  usePageViewedEvent({
    ready: !!linkConfig,
    clientConfig: linkConfig
  });
  return /*#__PURE__*/React__default.createElement("div", {
    "data-testid": "plaid-upgrade",
    className: classNames(styles$j.content, styles$j.centered, {
      [styles$j.show]: isComplete && sourceTypesStatus === SourceTypeStatus.READY
    })
  }, /*#__PURE__*/React__default.createElement("header", {
    className: styles$j.header
  }, (integrationLogo === null || integrationLogo === void 0 ? void 0 : integrationLogo.src) && /*#__PURE__*/React__default.createElement("img", {
    className: styles$j.image,
    src: integrationLogo.src,
    alt: integrationLogo.alt
  }), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h2",
    as: "h2",
    "data-testid": "plaid-upgrade-title",
    className: styles$j.title
  }, "This software is disabled")), /*#__PURE__*/React__default.createElement("div", {
    className: styles$j.contactSupport
  }, /*#__PURE__*/React__default.createElement(ContactSupport, {
    clientName: linkConfig.clientName,
    link: (_a = linkConfig.help) === null || _a === void 0 ? void 0 : _a.link
  })), /*#__PURE__*/React__default.createElement("div", {
    className: styles$j.footer
  }, /*#__PURE__*/React__default.createElement(SecondaryCta, {
    label: "Skip this step",
    analyticsName: "Skip",
    "data-testid": "skip-btn",
    onClick: handleSkip
  }), /*#__PURE__*/React__default.createElement(Button$1, {
    "data-testid": "continue-button",
    label: "Continue",
    disabled: true,
    className: styles$j.continueButton
  })));
};

const PlaidUpgrade = withEventContext(PlaidUpgradeContent, "Plaid upgrade page");

var styles$i = { "buttonImage": "ImageButton-module_buttonImage__eXVhy", "button": "ImageButton-module_button__IsjcM" };

const ImageButton = _a => {
  var {
    image,
    analyticsName,
    eventProperties,
    onClick
  } = _a,
    buttonProps = __rest(_a, ["image", "analyticsName", "eventProperties", "onClick"]);

  const [displayedImage, setDisplayedImage] = React.useState(image.default.image);
  const analytics = useAnalytics();

  const handleClick = e => {
    analytics.sendEvent(`${analyticsName} button - Clicked`, eventProperties);

    if (onClick) {
      onClick(e);
    }
  };

  return /*#__PURE__*/React.createElement("button", Object.assign({}, buttonProps, {
    className: classNames(styles$i.button, buttonProps.className),
    onClick: handleClick
  }), /*#__PURE__*/React.createElement("img", {
    src: displayedImage.src,
    alt: displayedImage.alt,
    className: styles$i.buttonImage,
    onMouseOver: () => setDisplayedImage(image.hover.image),
    onMouseOut: () => setDisplayedImage(image.default.image)
  }));
};

var styles$h = { "poweredByCodat": "PoweredByCodat-module_poweredByCodat__DpWGr" };

const PoweredByCodat = () => {
  const config = useConfig();
  const show = config.state.data.showPoweredByCodat;
  return show ? /*#__PURE__*/React__default.createElement(TextLink, {
    href: "https://www.codat.io/powered-by-codat/",
    target: "_blank",
    rel: "noreferrer",
    analyticsName: "Powered by Codat"
  }, /*#__PURE__*/React__default.createElement("img", {
    "data-testid": "powered-by-codat",
    className: styles$h.poweredByCodat,
    src: "https://static.codat.io/public/branding/powered-by-codat-short.svg",
    alt: "Powered by Codat"
  })) : null;
};

var styles$g = { "container": "RightHandPane-module_container__0pvpl", "show": "RightHandPane-module_show__a4Oje", "nav": "RightHandPane-module_nav__Pa4-D", "pullLeft": "RightHandPane-module_pullLeft__Rc40Q", "pullRight": "RightHandPane-module_pullRight__XWHdd", "navLabel": "RightHandPane-module_navLabel__rA4c6", "bodyWrapper": "RightHandPane-module_bodyWrapper__Tz1Qz", "body": "RightHandPane-module_body__CdYV-", "footer": "RightHandPane-module_footer__VD-1h", "footerText": "RightHandPane-module_footerText__U-Zqk", "secondaryCta": "RightHandPane-module_secondaryCta__F3UeJ", "logo": "RightHandPane-module_logo__BygM5", "nextBtn": "RightHandPane-module_nextBtn__qPMNB", "hidden": "RightHandPane-module_hidden__OYP4U", "footerBottom": "RightHandPane-module_footerBottom__XCdPl" };

var classof = classofRaw$1;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};

var $$2 = _export;
var uncurryThis$1 = functionUncurryThis;
var isArray = isArray$1;

var nativeReverse = uncurryThis$1([].reverse);
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$$2({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse(this);
  }
});

const unknownFileType = "Unknown file type";
const unsupportedFileType = "Unsupported file type";
const fileTooLarge = "File is too large";
const getMessage = f => f.state.kind === "error" || f.state.kind === "upload-error" ? f.state.message : undefined;
const fromFile = (file, allowedExtensions, maxSize) => {
  const ext = getExtension(file.name);

  const state = (() => {
    if (ext === undefined) {
      return {
        kind: "error",
        message: unknownFileType
      };
    } else if (!allowedExtensions.has(ext.toLowerCase())) {
      return {
        kind: "error",
        message: unsupportedFileType
      };
    } else if (file.size > maxSize) {
      return {
        kind: "error",
        message: fileTooLarge
      };
    } else {
      return {
        kind: "ready"
      };
    }
  })();

  return {
    file,
    state
  };
};
const addFiles = (current, files, allowedExtensions, maxFiles, maxSize) => // Reversing the list before doing the uniqBy will ensure that
  // later items overwrite new items
  uniqBy([...current, ...files.map(file => fromFile(file, allowedExtensions, maxSize))].reverse(), f => f.file.name).reverse().slice(0, maxFiles);
const removeFile = (current, file) => current.filter(c => c.file !== file);
const setUploading = current => current.map(f => f.state.kind === "ready" ? Object.assign(Object.assign({}, f), {
  state: {
    kind: "uploading"
  }
}) : f);

const mapResult = result => {
  if (result.result === "error") {
    return {
      kind: "upload-error",
      message: "Error uploading"
    };
  } else {
    return {
      kind: "uploaded"
    };
  }
};

const applyUploadResult = (current, result) => current.map(f => f.file === result.file ? Object.assign(Object.assign({}, f), {
  state: mapResult(result)
}) : f);
const canUpload = current => current.length > 0 && current.every(a => a.state.kind === "ready" || a.state.kind === "uploaded");
const isUploading = current => current.length > 0 && current.some(a => a.state.kind === "uploading");
const isComplete = current => current.length > 0 && current.every(a => a.state.kind === "uploaded");
const hasUploadErrors = current => current.length > 0 && current.some(a => a.state.kind === "upload-error");

const fileNameToId = ({
  name
}) => name.replace(/[.\s]/, "-");

var styles$f = { "fileUploadButtonContent": "FileUpload-module_fileUploadButtonContent__eMB2U", "fileUploadButton": "FileUpload-module_fileUploadButton__ZWhUw", "fileUploadOnlyButton": "FileUpload-module_fileUploadOnlyButton__DR0OQ", "fileCountIndicator": "FileUpload-module_fileCountIndicator__Fxoi3", "fileList": "FileUpload-module_fileList__JZ0sh", "uploadButton": "FileUpload-module_uploadButton__AiHdw", "uploadingButtonContent": "FileUpload-module_uploadingButtonContent__OW-kX", "uploadErrorWarning": "FileUpload-module_uploadErrorWarning__3oD6u", "warningModalBody": "FileUpload-module_warningModalBody__EJea4", "clientName": "FileUpload-module_clientName__5Ksy3", "warningModalText": "FileUpload-module_warningModalText__MIvdd", "modalHelpText": "FileUpload-module_modalHelpText__LWS7i", "fileInfoText": "FileUpload-module_fileInfoText__Ln2wn", "uploadingButton": "FileUpload-module_uploadingButton__WDFKW", "subtitle": "FileUpload-module_subtitle__ANyeV" };

const toFileItemState = fileItem => {
  switch (fileItem.state.kind) {
    case "ready":
      return undefined;

    case "uploading":
      return "loading";

    case "uploaded":
      return "success";

    case "error":
    case "upload-error":
      return "error";
  }
};

const FileListDisplayContent = props => {
  const {
    current,
    maxFiles,
    onDelete
  } = props;
  const analytics = useAnalytics();

  const getOnDelete = fileItem => {
    if (fileItem.state.kind === "uploaded" || fileItem.state.kind === "uploading") {
      return undefined;
    } else {
      return () => {
        analytics.sendEvent("File deleted");
        onDelete(fileItem.file);
      };
    }
  };

  return current.length > 0 ? /*#__PURE__*/React__default.createElement("div", {
    "data-testid": "file-list-display"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$f.fileCountIndicator
  }, /*#__PURE__*/React__default.createElement(Typography, {
    as: "p"
  }, /*#__PURE__*/React__default.createElement("strong", null, "Files")), /*#__PURE__*/React__default.createElement(Typography, {
    as: "p"
  }, "\u2022"), /*#__PURE__*/React__default.createElement(Typography, {
    as: "p"
  }, current.length, "/", maxFiles)), /*#__PURE__*/React__default.createElement("div", {
    className: styles$f.fileList
  }, current.map(c => /*#__PURE__*/React__default.createElement(FileItem, {
    key: c.file.name,
    id: "file-item-" + fileNameToId(c.file),
    file: c.file,
    state: toFileItemState(c),
    errorText: getMessage(c),
    onDeleteClick: getOnDelete(c)
  })))) : null;
};

const FileListDisplay = withEventContext(FileListDisplayContent, "File list");

const allowedExtensions = new Set(["xls", "xlsx", "xlsb", "csv", "pdf", "doc", "docx", "ppt", "pptx", "jpeg", "jpg", "png"]);
const allowedExtensionsString = Array.from(allowedExtensions).join(", ");
const maxFiles = 20;
const maxSize = 10 * 1024 * 1024;
const maxSizeString = "10 MB";
const FileUploadLink = props => {
  const history = useHistory();
  const analytics = useAnalytics();
  const {
    onConnection
  } = useCallbacks();

  const successCallback = ({
    companyId,
    platformKey,
    sourceType,
    connectionId
  }) => {
    const url = formatUrl(routes.company.success, {
      companyId,
      platformKey,
      sourceType
    }, {
      continue: "true"
    });
    history.push(url);
    onConnection({
      connectionId
    });
  };

  return /*#__PURE__*/React__default.createElement(FileUploadServiceContext.Provider, {
    value: makeFileUploadService(makeFileUploadApi(axiosInstance, successCallback), analytics.sendEvent)
  }, /*#__PURE__*/React__default.createElement(FileUploadPageContent, Object.assign({}, props)));
};

const FileUploadPageContent = ({
  match
}) => {
  const query = useFilteredQueryParams();
  const history = useHistory();
  const analytics = useAnalytics();
  const {
    state
  } = useConfig();
  const [fileState, setFileState] = useState([]);
  const [isAutoRedirecting, setIsAutoRedirecting] = useState(false);
  const [error, setError] = useState();
  const service = useFileUploadService();
  const {
    sourceType,
    companyId
  } = match.params;

  const onFileSelect = fileList => {
    const filesArray = Array.from(fileList);
    analytics.sendEvent("Upload file picker - Chose files", {
      files: filesArray.map(f => ({
        size: f.size,
        extension: getExtension(f.name)
      }))
    });
    setFileState(addFiles(fileState, filesArray, allowedExtensions, maxFiles, maxSize));
  };

  const onFileDelete = file => {
    setFileState(removeFile(fileState, file));
  };

  const onUpload = () => {
    const files = fileState.filter(f => f.state.kind === "ready").map(f => f.file);
    const initialFileState = setUploading(fileState);
    setFileState(initialFileState);
    service.uploadFiles(companyId, query, sourceType, files).pipe(scan((acc, fileUploadResult) => applyUploadResult(acc, fileUploadResult), initialFileState)).subscribe({
      next: state => {
        setFileState(state); // if everything successfully completed then redirect to success

        if (isComplete(state)) {
          setIsAutoRedirecting(true);
          service.successCallback(companyId, query, sourceType);
        }
      },
      error: apiError => {
        setError(apiError);
      }
    });
  };

  const buttonState = (() => {
    if (isUploading(fileState) || isAutoRedirecting) {
      return {
        element: /*#__PURE__*/React__default.createElement("div", {
          className: styles$f.uploadingButtonContent
        }, /*#__PURE__*/React__default.createElement(Spinner$1, null), /*#__PURE__*/React__default.createElement("div", null, "Uploading")),
        disabled: true,
        className: styles$f.uploadingButton
      };
    } else if (isComplete(fileState)) {
      return {
        element: /*#__PURE__*/React__default.createElement("div", null, "Next"),
        disabled: false,
        onClick: () => service.successCallback(companyId, query, sourceType)
      };
    } else if (hasUploadErrors(fileState)) {
      return {
        element: /*#__PURE__*/React__default.createElement("div", null, "Next"),
        disabled: true
      };
    } else {
      return {
        element: /*#__PURE__*/React__default.createElement("div", null, "Upload files"),
        disabled: !canUpload(fileState),
        onClick: onUpload
      };
    }
  })();

  const instructionsText = (() => {
    var _a, _b, _c, _d, _e, _f;

    const defaultText = "You can upload requested PDFs, Excel files, or CSVs below.";
    const {
      fileUpload
    } = state.data.pageConfiguration;

    switch (sourceType) {
      case "Accounting":
        return (_b = (_a = fileUpload.accounting) === null || _a === void 0 ? void 0 : _a.body) !== null && _b !== void 0 ? _b : defaultText;

      case "Banking":
        return (_d = (_c = fileUpload.banking) === null || _c === void 0 ? void 0 : _c.body) !== null && _d !== void 0 ? _d : defaultText;

      case "Other":
        return (_f = (_e = fileUpload.businessDocuments) === null || _e === void 0 ? void 0 : _e.body) !== null && _f !== void 0 ? _f : defaultText;

      default:
        return defaultText;
    }
  })();

  if (error) {
    return /*#__PURE__*/React__default.createElement(ErrorFallback, {
      error: error
    });
  }

  return /*#__PURE__*/React__default.createElement(LinkPageRoot, {
    title: `Upload your ${sourceTypeFileName[sourceType]}`,
    onBackClick: () => history.goBack(),
    isComplete: true,
    "data-testid": "file-upload-page"
  }, /*#__PURE__*/React__default.createElement(Typography, {
    "data-testid": "file-upload-subtitle",
    variant: "p",
    as: "p",
    className: styles$f.subtitle
  }, instructionsText), /*#__PURE__*/React__default.createElement(FileUpload, {
    id: "file-upload",
    onFileSelect: onFileSelect,
    multiple: true
  }), /*#__PURE__*/React__default.createElement(Typography, {
    as: "p",
    variant: "body_sm",
    className: classNames(styles$f.modalHelpText, styles$f.fileInfoText)
  }, "Maximum files: ", maxFiles, " \u2022 Up to ", maxSizeString, /*#__PURE__*/React__default.createElement("br", null), "File types: ", allowedExtensionsString), /*#__PURE__*/React__default.createElement(FileListDisplay, {
    current: fileState,
    maxFiles: maxFiles,
    onDelete: onFileDelete
  }), hasUploadErrors(fileState) && /*#__PURE__*/React__default.createElement(Typography, {
    as: "p",
    className: styles$f.uploadErrorWarning,
    "data-testid": "upload-failed-message"
  }, "There was an issue when uploading some files. Delete these to continue."), /*#__PURE__*/React__default.createElement(Button$1, {
    className: classNames(styles$f.uploadButton, buttonState.className),
    onClick: buttonState.onClick,
    disabled: buttonState.disabled,
    "data-testid": "file-upload-button"
  }, buttonState.element));
};

const FileUploadPage = withEventContext(FileUploadLink, "File upload page");

const FileUploadCta = props => {
  const history = useHistory();
  const {
    sourceType,
    fileUploadOnly,
    canUpload,
    companyId
  } = props;

  if (!companyId) {
    throw new Error("No company id in params");
  }

  if (!canUpload || !sourceType) {
    return null;
  }

  const handleUploadButtonClick = () => {
    history.push(formatUrl(routes.company.fileUpload, {
      companyId: companyId,
      sourceType: sourceType
    }));
  };

  return fileUploadOnly ? /*#__PURE__*/React__default.createElement(Button, {
    "aria-label": "Upload files",
    analyticsName: "Open file upload",
    onClick: handleUploadButtonClick,
    "data-testid": "file-upload-link",
    className: styles$f.fileUploadButton,
    variant: "primary"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$f.fileUploadButtonContent
  }, /*#__PURE__*/React__default.createElement(UploadIcon, null), /*#__PURE__*/React__default.createElement("div", null, "Upload files"))) : /*#__PURE__*/React__default.createElement(Button, {
    analyticsName: "Open file upload",
    onClick: handleUploadButtonClick,
    "data-testid": "file-upload-link",
    "aria-label": "Upload files",
    variant: "secondary",
    className: styles$f.fileUploadButton
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$f.fileUploadButtonContent
  }, /*#__PURE__*/React__default.createElement(UploadIcon, null), /*#__PURE__*/React__default.createElement("div", null, "Or upload your ", sourceTypeFileName[sourceType])));
};

const PrimaryCtaButton = props => {
  var _a, _b, _c;

  const {
    hidden,
    analyticsName,
    eventProperties
  } = props,
    buttonProps = __rest(props, ["hidden", "analyticsName", "eventProperties"]);

  return ((_b = (_a = props === null || props === void 0 ? void 0 : props.image) === null || _a === void 0 ? void 0 : _a.default) === null || _b === void 0 ? void 0 : _b.image.src) ? /*#__PURE__*/React.createElement(ImageButton, Object.assign({}, buttonProps, {
    disabled: props.isLoading,
    image: props.image,
    className: styles$g.nextBtn,
    analyticsName: analyticsName,
    eventProperties: eventProperties
  })) : /*#__PURE__*/React.createElement(Button, Object.assign({
    eventProperties: eventProperties
  }, buttonProps, {
    className: classNames(styles$g.nextBtn, {
      [styles$g.hidden]: hidden
    }),
    label: (_c = props.label) !== null && _c !== void 0 ? _c : "Next",
    type: "button",
    "data-testid": "primary-next-btn",
    "aria-hidden": hidden,
    analyticsName: analyticsName
  }));
};

const RightHandPane = props => {
  const {
    title,
    onBackClick,
    onInfoClick,
    onExitClick,
    primaryCtaProps,
    secondaryCtaProps,
    fileUploadCtaProps,
    footer,
    isComplete,
    children
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(styles$g.container, {
      [styles$g.show]: isComplete
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$g.nav
  }, onBackClick && /*#__PURE__*/React.createElement(Button, {
    className: classNames(styles$g.navLink, styles$g.pullLeft),
    variant: "tertiary",
    onClick: onBackClick,
    "data-testid": "r-pane-back",
    analyticsName: "Back",
    color: "interface"
  }, /*#__PURE__*/React.createElement(LeftArrowIcon, {
    className: styles$g.navIcon
  }), /*#__PURE__*/React.createElement("span", {
    className: styles$g.navLabel
  }, "Back")), /*#__PURE__*/React.createElement(Button, {
    className: classNames(styles$g.navLink),
    onClick: onExitClick,
    variant: "tertiary",
    "data-testid": "r-pane-exit",
    analyticsName: "Exit",
    color: "interface"
  }, /*#__PURE__*/React.createElement(CloseIcon, {
    className: styles$g.navIcon
  }))), title && /*#__PURE__*/React.createElement(Typography, {
    "data-testid": "page-title",
    variant: "h3",
    as: "h2"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: styles$g.bodyWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$g.body
  }, children)), /*#__PURE__*/React.createElement("div", {
    className: styles$g.footer
  }, footer ? /*#__PURE__*/React.createElement(Typography, {
    variant: "p",
    as: "p",
    className: styles$g.footerText
  }, footer) : /*#__PURE__*/React.createElement(React.Fragment, null, secondaryCtaProps && /*#__PURE__*/React.createElement(SecondaryCta, Object.assign({}, secondaryCtaProps)), fileUploadCtaProps && /*#__PURE__*/React.createElement(FileUploadCta, Object.assign({}, fileUploadCtaProps)), primaryCtaProps && /*#__PURE__*/React.createElement(PrimaryCtaButton, Object.assign({}, primaryCtaProps))), /*#__PURE__*/React.createElement("div", {
    className: styles$g.footerBottom
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onInfoClick,
    variant: "tertiary",
    "data-testid": "r-pane-info",
    analyticsName: "Info",
    color: "interface"
  }, /*#__PURE__*/React.createElement(InfoIcon, {
    className: styles$g.navIcon
  }), /*#__PURE__*/React.createElement("span", {
    className: styles$g.navLabel
  }, "Info")), /*#__PURE__*/React.createElement(PoweredByCodat, null))));
};

var styles$e = { "container": "LinkPageRoot-module_container__ufQ-D", "banner": "LinkPageRoot-module_banner__eELYJ", "card": "LinkPageRoot-module_card__vhQth", "pane": "LinkPageRoot-module_pane__Q1tTX", "leftPane": "LinkPageRoot-module_leftPane__OLUkJ", "open": "LinkPageRoot-module_open__pvTll", "noscroll": "LinkPageRoot-module_noscroll__X5O9d", "overlay": "LinkPageRoot-module_overlay__Umi7X", "show": "LinkPageRoot-module_show__z90LM", "navLink": "LinkPageRoot-module_navLink__vmwaU", "navExit": "LinkPageRoot-module_navExit__BTcHq", "navLabel": "LinkPageRoot-module_navLabel__ofIfn" };

var styles$d = { "root": "WarningDialog-module_root__YHyMJ", "header": "WarningDialog-module_header__7Olf5", "footer": "WarningDialog-module_footer__wEoDe", "title": "WarningDialog-module_title__a4zmH", "h1": "WarningDialog-module_h1__5FFTf", "body": "WarningDialog-module_body__XLzgb", "icon": "WarningDialog-module_icon__vNmJh", "subText": "WarningDialog-module_subText__UMpI7", "primaryCta": "WarningDialog-module_primaryCta__h-BSO" };

function WarningDialogWithoutEventContext({
  title,
  subText,
  primaryCtaProps,
  secondaryCtaProps,
  "data-testid": dataTestId
}) {
  const {
    colors
  } = useTheme();
  return /*#__PURE__*/React.createElement(Card, {
    className: styles$d.root,
    "data-testid": `${dataTestId !== null && dataTestId !== void 0 ? dataTestId : "warning-dialog"}`
  }, /*#__PURE__*/React.createElement("header", {
    className: styles$d.header
  }, /*#__PURE__*/React.createElement(CircleAlertIcon, {
    className: styles$d.icon,
    fillColor: colors["color-ui-negative"]
  }), title && /*#__PURE__*/React.createElement(Typography, {
    className: styles$d.title,
    variant: "h1",
    as: "h1",
    "data-testid": `${dataTestId !== null && dataTestId !== void 0 ? dataTestId : "warning-dialog"}-title`
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: styles$d.body
  }, subText && /*#__PURE__*/React.createElement(Typography, {
    className: styles$d.subText,
    "data-testid": "warning-dialog-body",
    variant: "p",
    as: "p"
  }, subText)), /*#__PURE__*/React.createElement("footer", {
    className: styles$d.footer
  }, /*#__PURE__*/React.createElement(SecondaryCta, Object.assign({}, secondaryCtaProps, {
    "data-testid": `${dataTestId !== null && dataTestId !== void 0 ? dataTestId : "warning-dialog"}-secondary-cta`
  })), primaryCtaProps && /*#__PURE__*/React.createElement(Button, Object.assign({}, primaryCtaProps, {
    "data-testid": `${dataTestId !== null && dataTestId !== void 0 ? dataTestId : "warning-dialog"}-primary-cta`,
    className: styles$d.primaryCta
  }))));
}
const WarningDialog = withEventContext(WarningDialogWithoutEventContext, "Warning modal");

var styles$c = { "modal": "ExitModal-module_modal__tHMJ9" };

const ExitModalContent = ({
  isOpen: _isOpen = false,
  onClose: _onClose = () => {// default exit modal close handler
  }
}) => {
  var _a, _b, _c, _d, _e;

  const {
    state
  } = useConfig();
  const {
    onClose: onAppClose
  } = useCallbacks();
  return /*#__PURE__*/React__default.createElement(Modal, {
    trapFocus: false,
    className: styles$c.modal,
    onClose: _onClose,
    "data-testid": "exit-modal-container"
  }, _isOpen && /*#__PURE__*/React__default.createElement(WarningDialogWithoutEventContext, {
    title: (_c = (_b = (_a = state.data) === null || _a === void 0 ? void 0 : _a.pageConfiguration.exit) === null || _b === void 0 ? void 0 : _b.title) !== null && _c !== void 0 ? _c : "Do you want to exit?",
    subText: (_e = (_d = state.data) === null || _d === void 0 ? void 0 : _d.pageConfiguration.exit) === null || _e === void 0 ? void 0 : _e.body,
    primaryCtaProps: {
      label: "Continue linking",
      onClick: _onClose,
      analyticsName: "Continue linking"
    },
    secondaryCtaProps: {
      label: "Exit",
      onClick: onAppClose,
      analyticsName: "Exit"
    },
    "data-testid": "exit-modal"
  }));
};

const ExitModal = withEventContext(ExitModalContent, "Exit modal");

const LinkPageRoot = ({
  showLinkedAccounts,
  title,
  onBackClick,
  primaryCtaProps,
  secondaryCtaProps,
  fileUploadCtaProps,
  footer,
  isComplete,
  children,
  currentSourceType,
  integrationLogo,
  isPlaidClientLimitReached,
  className
}) => {
  const [isInfoPanelOpen, setInfoPanelOpen] = React__default.useState(false);
  const {
    error
  } = useSourceTypes();
  const {
    isDemo
  } = useDemoMode();
  const [isExitModal, setExitModal] = React__default.useState(false);

  const handleBack = () => {
    setInfoPanelOpen(false);
  };

  const handleInfo = () => {
    setInfoPanelOpen(true);
  };

  if (error) {
    return /*#__PURE__*/React__default.createElement(ErrorFallback, {
      error: error
    });
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: classNames(className, styles$e.container)
  }, isDemo && /*#__PURE__*/React__default.createElement(ThemeProvider, null, () => /*#__PURE__*/React__default.createElement(InfoBanner, {
    className: styles$e.banner,
    title: "You're using demo mode",
    subtitle: "All integrations will connect to Codat Sandbox",
    icon: /*#__PURE__*/React__default.createElement(CircleEmptyInfoIcon, null),
    color: "action"
  })), /*#__PURE__*/React__default.createElement(Card, {
    className: styles$e.card
  }, /*#__PURE__*/React__default.createElement("section", {
    "data-testid": "root-left-section",
    className: classNames(styles$e.pane, styles$e.leftPane, {
      [styles$e.open]: isInfoPanelOpen
    })
  }, /*#__PURE__*/React__default.createElement(Button, {
    className: classNames(styles$e.navLink, styles$e.pullRight),
    variant: "tertiary",
    onClick: handleBack,
    "data-testid": "help-back-btn",
    analyticsName: "Back"
  }, /*#__PURE__*/React__default.createElement(LeftArrowIcon, {
    className: styles$e.navIcon
  }), /*#__PURE__*/React__default.createElement("span", {
    className: styles$e.navLabel
  }, "Back")), /*#__PURE__*/React__default.createElement(LeftHandPane, {
    showLinkedAccounts: showLinkedAccounts,
    currentSourceType: currentSourceType,
    isLoadingComplete: isComplete
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles$e.navExit
  }, /*#__PURE__*/React__default.createElement(SecondaryCta, {
    onClick: () => setExitModal(true),
    "data-testid": "help-exit-btn",
    label: "Exit",
    analyticsName: "Exit"
  }))), /*#__PURE__*/React__default.createElement("section", {
    className: classNames(styles$e.pane, {
      [styles$e.noscroll]: isInfoPanelOpen
    }),
    "data-testid": "root-right-section"
  }, isPlaidClientLimitReached ? /*#__PURE__*/React__default.createElement(PlaidUpgrade, {
    integrationLogo: integrationLogo,
    isComplete: isComplete
  }) : /*#__PURE__*/React__default.createElement(RightHandPane, {
    title: title,
    onBackClick: onBackClick,
    onExitClick: () => setExitModal(true),
    onInfoClick: handleInfo,
    primaryCtaProps: primaryCtaProps,
    secondaryCtaProps: secondaryCtaProps,
    fileUploadCtaProps: fileUploadCtaProps,
    footer: footer,
    isComplete: isComplete
  }, children))), /*#__PURE__*/React__default.createElement("div", {
    "data-testid": "card-loading-overlay",
    className: classNames(styles$e.overlay, {
      [styles$e.show]: !isComplete
    })
  }, /*#__PURE__*/React__default.createElement(Spinner, null)), /*#__PURE__*/React__default.createElement(ExitModal, {
    isOpen: isExitModal,
    onClose: () => setExitModal(false)
  }));
};

/**
 * Component to wrap another component in an EventContextProvider with a name that
 *   depends on the sourceType
 * @param props
 * @returns
 */

const WithSourceTypeEvent = props => {
  const {
    sourceType,
    eventName,
    children
  } = props;
  const {
    sourceTypes,
    status: sourceTypesStatus
  } = useSourceTypes();
  const {
    currentSourceType,
    nextPrioritySourceType
  } = useSourceTypeResolver({
    sourceType
  }, sourceTypes);
  const contextName = eventName(currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType);
  return /*#__PURE__*/React__default.createElement(EventContextProvider, {
    name: contextName
  }, children({
    sourceTypes,
    sourceTypesStatus,
    currentSourceType,
    nextPrioritySourceType
  }));
};

var styles$b = { "body": "Consent-module_body__hZyA2", "privacy": "Consent-module_privacy__xBDAZ", "consentContainer": "Consent-module_consentContainer__3-wi3", "consentRow": "Consent-module_consentRow__PxDO0", "consentText": "Consent-module_consentText__1PojS", "consentIcon": "Consent-module_consentIcon__ksPSb", "link": "Consent-module_link__OfeBk" };

const TermsAndConditionsLink = ({
  link
}) => {
  var _a, _b;

  if ((_a = link === null || link === void 0 ? void 0 : link.href) === null || _a === void 0 ? void 0 : _a.trim()) {
    console.log(link, "Link TermsAndConditionsLink");
    return /*#__PURE__*/React.createElement(SecondaryCta, {
      className: styles$b.link,
      onClick: () => window.open(link.href),
      "data-testid": "consents-terms-and-conditions",
      label: (_b = link.text) !== null && _b !== void 0 ? _b : link.href,
      analyticsName: "Terms and conditions"
    });
  }

  return null;
};

const CompanyConsentContent = ({
  match,
  sourceTypes,
  currentSourceType,
  integration,
  loading,
  error
}) => {
  var _a, _b, _c, _d, _e;

  const history = useHistory();
  const {
    state
  } = useConfig();
  const sourceType = integration === null || integration === void 0 ? void 0 : integration.sourceType;
  const platformName = integration === null || integration === void 0 ? void 0 : integration.name;
  const buttonImage = integration === null || integration === void 0 ? void 0 : integration.button;
  usePageViewedEvent({
    ready: !!(integration === null || integration === void 0 ? void 0 : integration.sourceType) && !loading,
    clientConfig: state.data,
    sourceTypes
  });

  if (error) {
    return /*#__PURE__*/React.createElement(ErrorFallback, {
      error: error
    });
  }

  const title = sourceType === "Banking" ? "Connect your bank account" : `Connect to ${platformName}`;
  const consentBody = sourceType === "Banking" ? "You will be asked to authorise access to the following data:" : `You will be asked to connect your ${platformName} account and authorize ${(_a = state.data) === null || _a === void 0 ? void 0 : _a.clientName} access to the following data:`;
  const consents = (_b = getPageConfiguration(state.data, "dataAccess", sourceType)) !== null && _b !== void 0 ? _b : new Array();

  const consentsBodyConfirmation = (() => {
    const consentsBody = state.data.pageConfiguration.dataAccess.consentsBody;

    if (!consentsBody) {
      return "";
    }

    switch (sourceType) {
      case "Accounting":
        return consentsBody.accounting;

      case "Banking":
        return consentsBody.banking;

      case "Commerce":
        return consentsBody.commerce;

      default:
        return "";
    }
  })();

  const handleNextButtonClick = () => {
    history.push(formatUrl(routes.company.waitForConnection, {
      companyId: match.params.companyId,
      platformKey: match.params.platformKey
    }));
  };

  return /*#__PURE__*/React.createElement(LinkPageRoot, {
    title: loading ? "Loading..." : title,
    showLinkedAccounts: true,
    onBackClick: () => {
      history.goBack();
    },
    primaryCtaProps: {
      onClick: handleNextButtonClick,
      image: buttonImage,
      analyticsName: "Next"
    },
    isComplete: !loading,
    currentSourceType: currentSourceType
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$b.wrapper
  }, /*#__PURE__*/React.createElement(Typography, {
    "data-testid": "consent-body",
    variant: "p",
    as: "p",
    className: styles$b.body
  }, consentBody), sourceType && /*#__PURE__*/React.createElement("div", {
    className: styles$b.consentContainer,
    "data-testid": "consents-container"
  }, Object.values(consents).map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: styles$b.consentRow
  }, /*#__PURE__*/React.createElement(ShieldCheckIcon, {
    className: styles$b.consentIcon
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "p",
    as: "p",
    className: styles$b.consentText
  }, c)))), consentsBodyConfirmation && /*#__PURE__*/React.createElement(Typography, {
    "data-testid": "consent-permission-notice",
    variant: "p",
    as: "p",
    className: styles$b.privacy
  }, consentsBodyConfirmation), /*#__PURE__*/React.createElement(TermsAndConditionsLink, {
    link: (_e = (_d = (_c = state.data) === null || _c === void 0 ? void 0 : _c.pageConfiguration) === null || _d === void 0 ? void 0 : _d.dataAccess) === null || _e === void 0 ? void 0 : _e.termsAndConditions
  })));
};

const CompanyConsent = props => {
  const [{
    data: integration,
    loading,
    error
  }] = useIntegrationQuery({
    companyId: props.match.params.companyId,
    platformKey: props.match.params.platformKey
  });
  return /*#__PURE__*/React.createElement(WithSourceTypeEvent, {
    sourceType: integration === null || integration === void 0 ? void 0 : integration.sourceType,
    eventName: () => `Link ${integration === null || integration === void 0 ? void 0 : integration.sourceType} consent page`
  }, sourceTypeProps => /*#__PURE__*/React.createElement(CompanyConsentContent, Object.assign({}, sourceTypeProps, props, {
    integration: integration,
    loading: loading,
    error: error !== null && error !== void 0 ? error : null
  })));
};

const Landing = ({
  data,
  onClickNext,
  isLoading
}) => {
  return /*#__PURE__*/React.createElement(LinkPageRoot, {
    isComplete: true,
    primaryCtaProps: {
      isLoading: isLoading,
      onClick: onClickNext,
      label: "Next",
      analyticsName: "Next"
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    "data-testid": "page-title",
    variant: "h1",
    as: "h1"
  }, data.pageConfiguration.landing.title), /*#__PURE__*/React.createElement(Typography, {
    "data-testid": "landing-body",
    variant: "p",
    as: "p"
  }, data.pageConfiguration.landing.body));
};

function CompanyLandingContainer({
  data,
  companyId
}) {
  const {
    sourceTypes,
    status
  } = useSourceTypes();
  const {
    currentSourceType
  } = useSourceTypeResolver({}, sourceTypes);
  const nextPrioritySourceTypeRedirect = useNextSourceTypeRedirectHandler(companyId, currentSourceType);
  usePageViewedEvent({
    ready: data.showLandingPage,
    data
  });

  if (status === SourceTypeStatus.ERROR) {
    return /*#__PURE__*/React.createElement(ErrorFallback, null);
  }

  if (!nextPrioritySourceTypeRedirect) {
    return /*#__PURE__*/React.createElement(CentreOverlay, {
      "data-testid": "company-config-loading"
    }, /*#__PURE__*/React.createElement(Spinner, null));
  }

  return /*#__PURE__*/React.createElement(Landing, {
    data: data,
    onClickNext: nextPrioritySourceTypeRedirect
  });
}

function CompanyContainerContent({
  match
}) {
  const {
    state
  } = useConfig();
  return /*#__PURE__*/React__default.createElement(CompanyLandingContainer, {
    companyId: match.params.companyId,
    data: state.data
  });
}

const CompanyContainer = withEventContext(CompanyContainerContent, "Company landing page");

const isOptional = (sourceType, config) => {
  switch (sourceType) {
    case "Accounting":
      return config.optionalSourceTypes.accounting;

    case "Banking":
      return config.optionalSourceTypes.banking;

    case "Commerce":
      return config.optionalSourceTypes.commerce;

    case "Other":
      return config.optionalSourceTypes.businessDocuments;
  }
};
const canSkip = (currentSourceType, config) => {
  if (currentSourceType) {
    if (isOptional(currentSourceType.sourceType, config) || currentSourceType.connected > 0) {
      return true;
    }
  }

  return false;
};

const useContinueRedirectUrl = companyId => {
  const [redirectUrl, setRedirectUrl] = React.useState("");
  const {
    state: {
      data: config
    }
  } = useConfig();
  const queryParams = useQueryParams();
  const continueQueryParam = queryParams.get("continue");
  const canContinue = continueQueryParam !== null;
  const [, validateCompanyRedirect] = useCompanyRedirectValidateQuery({
    companyId,
    redirectUrl: continueQueryParam !== null && continueQueryParam !== void 0 ? continueQueryParam : ""
  });
  React.useEffect(() => {
    function validateRedirect() {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          yield validateCompanyRedirect(); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

          setRedirectUrl(continueQueryParam);
        } catch (e) {
          setRedirectUrl("");
        }
      });
    }

    if ((config === null || config === void 0 ? void 0 : config.hasCustomRedirect) && continueQueryParam) {
      validateRedirect();
    }
  }, [validateCompanyRedirect, continueQueryParam, config]);
  return {
    redirectUrl,
    canContinue
  };
};

const useSourceTypeDisplayProps = currentSourceType => {
  const {
    state
  } = useConfig();
  const enableFileUpload = state.data.enableFileUpload;
  return useMemo(() => {
    if (!currentSourceType) {
      return {
        revisit: {
          message: "Great news, you already have a package connected",
          linkUrl: routes.company.link,
          linkText: ""
        },
        error: {
          tryAgainMessage: "Try again"
        },
        link: {
          warningTitle: "",
          warningMessage: "",
          sourceText: "Select your platform",
          fileUploadText: "Upload your files",
          fileUploadSubtext: "You can upload your files below",
          canAddAnother: true,
          canUpload: false
        }
      };
    }

    const sourceTypeName = currentSourceType.sourceType.toLowerCase();
    const article = /^[aeiou]/.test(sourceTypeName) ? "an" : "a";
    const defaultDisplayProps = {
      revisit: {
        message: `Great news, you've already connected all ${sourceTypeName} packages`,
        linkUrl: currentSourceType.useCustomIntro ? routes.company.customIntro : routes.company.link,
        linkText: "Make changes to your connection"
      },
      error: {
        tryAgainMessage: currentSourceType && (currentSourceType.maxConnections === undefined || currentSourceType.maxConnections > currentSourceType.connected + 1) ? "Try again or add another" : "Try again"
      },
      link: {
        warningTitle: "Warning",
        warningMessage: `You already have ${article} ${sourceTypeName} package connected. Selecting a different ${sourceTypeName} package will terminate your existing ${sourceTypeName} package connection, and could result in invalid data being synced.`,
        sourceText: sourceTypeSelectionText[currentSourceType.sourceType],
        fileUploadText: `Upload your ${sourceTypeFileName[currentSourceType.sourceType]}`,
        fileUploadSubtext: `You can upload your ${sourceTypeFileName[currentSourceType.sourceType]} below`,
        canAddAnother: currentSourceType ? currentSourceType.maxConnections === undefined || currentSourceType.maxConnections > 0 && currentSourceType.connected < currentSourceType.maxConnections : false,
        canUpload: false
      }
    };

    const computeProps = overridePartialProps => {
      return merge$2({}, defaultDisplayProps, overridePartialProps);
    };

    switch (currentSourceType.sourceType) {
      case "Accounting":
        return computeProps({
          revisit: {
            message: "Great news, you already have an accounting package connected"
          },
          link: {
            canUpload: enableFileUpload === null || enableFileUpload === void 0 ? void 0 : enableFileUpload.accounting
          }
        });

      case "Banking":
        return computeProps({
          revisit: {
            message: "You already have a bank connected through the selected banking platform.",
            linkText: "Add another bank"
          },
          link: {
            warningMessage: "You already have a bank connected. Make sure you aren't trying to connect the same bank account again. Otherwise you may create several copies of the same financial data.",
            warningTitle: "Warning",
            canUpload: enableFileUpload === null || enableFileUpload === void 0 ? void 0 : enableFileUpload.banking
          }
        });

      case "Commerce":
        return computeProps({
          revisit: {
            message: "You already have an account connected through the selected commerce platform.",
            linkText: "Add another account"
          },
          link: {
            canUpload: enableFileUpload === null || enableFileUpload === void 0 ? void 0 : enableFileUpload.commerce
          }
        });

      case "Other":
        return computeProps({
          revisit: {
            message: "You have already uploaded your business documents",
            linkText: "Upload more business documents"
          },
          link: {
            canUpload: enableFileUpload === null || enableFileUpload === void 0 ? void 0 : enableFileUpload.businessDocuments
          }
        });
    }
  }, [currentSourceType, enableFileUpload]);
};

var styles$a = { "container": "ConnectionComplete-module_container__xtaX7", "icon": "ConnectionComplete-module_icon__fm6eV", "title": "ConnectionComplete-module_title__G9r8M", "body": "ConnectionComplete-module_body__jj3Mo" };

const ConnectionComplete = ({
  Icon,
  title,
  children,
  className
}) => {
  return /*#__PURE__*/React__default.createElement("div", {
    className: classNames(styles$a.container, className),
    "data-testid": "connection-complete"
  }, Icon && /*#__PURE__*/React__default.createElement(Icon, {
    className: styles$a.icon
  }), /*#__PURE__*/React__default.createElement(Typography, {
    className: styles$a.title,
    "data-testid": "page-title",
    variant: "h2",
    as: "h2"
  }, title), /*#__PURE__*/React__default.createElement("section", {
    className: styles$a.body
  }, children));
};

var styles$9 = { "icon": "CompanyError-module_icon__S6y0y", "errorMessage": "CompanyError-module_errorMessage__0whv0", "correlationId": "CompanyError-module_correlationId__JuiXt", "secondaryCta": "CompanyError-module_secondaryCta__2KS3Y", "errorFooter": "CompanyError-module_errorFooter__zfkDq" };

const CompanyErrorContent = ({
  match,
  sourceTypes,
  sourceTypesStatus,
  currentSourceType,
  nextPrioritySourceType
}) => {
  var _a;

  const history = useHistory();
  const filteredSearch = useFilteredQueryString();
  const {
    state: {
      data: config,
      status: configStatus
    }
  } = useConfig();
  const {
    canContinue
  } = useContinueRedirectUrl(match.params.companyId);
  const [{
    loading: loadingDisplayText,
    data: displayText
  }] = useDisplayTextQuery({
    companyId: match.params.companyId,
    connectionId: match.params.connectionId
  });
  const isComplete = sourceTypesStatus === SourceTypeStatus.READY && configStatus === ConfigStatusType.READY && !loadingDisplayText;
  const {
    onError
  } = useCallbacks();
  const isMandatory = currentSourceType && !isOptional(currentSourceType.sourceType, config);
  const companyId = match.params.companyId;
  const canRetry = !!match.params["0"]; // Matches to the optional retry path param

  const correlationId = displayText === null || displayText === void 0 ? void 0 : displayText.correlationId;
  const errorMessage = (_a = displayText === null || displayText === void 0 ? void 0 : displayText.errorMessage) !== null && _a !== void 0 ? _a : "There has been an error connecting your account";
  usePageViewedEvent({
    ready: !!(currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType) && isComplete,
    clientConfig: config,
    sourceTypes
  });
  const displayProps = useSourceTypeDisplayProps(currentSourceType);
  const nextPrioritySourceTypeRedirect = useNextSourceTypeRedirectHandler(companyId, nextPrioritySourceType);
  const overviewPageUrl = formatUrl(routes.company.overview, {
    companyId: match.params.companyId
  });
  const handleNextButtonClick = React.useMemo(() => {
    if (isMandatory && (currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.connected) === 0) {
      return undefined;
    }

    if (canContinue && nextPrioritySourceType) {
      return nextPrioritySourceTypeRedirect;
    }

    return () => history.push({
      pathname: overviewPageUrl,
      search: filteredSearch
    });
  }, [isMandatory, currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.connected, canContinue, nextPrioritySourceType, nextPrioritySourceTypeRedirect, history, overviewPageUrl, filteredSearch]);

  const handleRetryButtonClick = () => {
    var _a;

    if ((currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType) === "Banking" && currentSourceType.useCustomIntro) {
      history.push(formatUrl(routes.company.waitForConnection, {
        companyId: match.params.companyId,
        platformKey: match.params.platformKey
      }));
    } else {
      history.push({
        pathname: formatUrl(routes.company.link, {
          companyId,
          sourceType: (_a = match.params.sourceType) === null || _a === void 0 ? void 0 : _a.toLowerCase()
        }),
        search: filteredSearch
      });
    }
  };

  useEffect(() => {
    if (!loadingDisplayText) {
      onError({
        message: errorMessage,
        correlationId,
        userRecoverable: true
      });
    }
  }, [loadingDisplayText, displayText, onError, errorMessage, correlationId]);
  return /*#__PURE__*/React.createElement(LinkPageRoot, {
    showLinkedAccounts: true,
    isComplete: isComplete,
    currentSourceType: currentSourceType,
    primaryCtaProps: handleNextButtonClick ? {
      label: "Next",
      analyticsName: "Next",
      onClick: handleNextButtonClick
    } : undefined,
    secondaryCtaProps: canRetry ? {
      onClick: handleRetryButtonClick,
      label: displayProps.error.tryAgainMessage,
      analyticsName: "Retry",
      eventProperties: {
        sourceType: currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType
      },
      "data-testid": "company-error-retry"
    } : undefined
  }, /*#__PURE__*/React.createElement(ConnectionComplete, {
    Icon: p => /*#__PURE__*/React.createElement(CircleAlertIcon, {
      className: classNames(p.className, styles$9.icon)
    }),
    title: "Connection Error"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "p",
    as: "p",
    className: styles$9.errorMessage
  }, errorMessage), correlationId && /*#__PURE__*/React.createElement(Typography, {
    variant: "small",
    as: "p",
    className: styles$9.correlationId
  }, "Correlation ID: ", correlationId)));
};

const CompanyError = props => {
  var _a;

  return /*#__PURE__*/React.createElement(WithSourceTypeEvent, {
    sourceType: (_a = props.match.params) === null || _a === void 0 ? void 0 : _a.sourceType,
    eventName: sourceType => `Link ${sourceType} error page`
  }, sourceTypeProps => /*#__PURE__*/React.createElement(CompanyErrorContent, Object.assign({}, sourceTypeProps, props)));
};

const getDemoModePlatform = sourceType => {
  switch (sourceType) {
    case "Accounting":
      return "mqjo";

    case "Commerce":
      return "aiwb";
  }
};
const isDemoModeValid = (isDemoMode, enabledIntegrationKeys, currentSourceType) => {
  if (!isDemoMode || currentSourceType === "Banking" || currentSourceType === "Other" || currentSourceType === undefined) {
    return true;
  } else {
    const sandboxKey = getDemoModePlatform(currentSourceType);
    return enabledIntegrationKeys.includes(sandboxKey);
  }
};

var styles$8 = { "container": "CompanyLink-module_container__vOol9", "searchContainer": "CompanyLink-module_searchContainer__ii6FU", "fadeout": "CompanyLink-module_fadeout__8IeTp", "title": "CompanyLink-module_title__0rOjP", "fadeIn": "CompanyLink-module_fadeIn__THJ1p", "inputDisabled": "CompanyLink-module_inputDisabled__D7J6C", "body": "CompanyLink-module_body__VSBLw", "integrationsContainer": "CompanyLink-module_integrationsContainer__KpDEu", "searchInput": "CompanyLink-module_searchInput__tnpA2", "subText": "CompanyLink-module_subText__u-eTv" };

var styles$7 = { "card": "IntegrationCard-module_card__V3BBT", "active": "IntegrationCard-module_active__WptXU", "inactive": "IntegrationCard-module_inactive__NdfIx", "disabled": "IntegrationCard-module_disabled__-Ij8X", "disabledTooltip": "IntegrationCard-module_disabledTooltip__gLdgp", "disabledTooltipTitle": "IntegrationCard-module_disabledTooltipTitle__g658i" };

const HIDE_TOOLTIP_DELAY_MS = 250;
const IntegrationCard = _a => {
  var _b;

  var {
    integration,
    active,
    onClick,
    selectedIntegration,
    eventProperties,
    disabled,
    link,
    clientName
  } = _a,
    props = __rest(_a, ["integration", "active", "onClick", "selectedIntegration", "eventProperties", "disabled", "link", "clientName"]);

  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = useRef(null);
  const timeoutRef = useRef(undefined);
  const {
    colors
  } = useTheme();
  const analytics = useAnalytics();

  const handleClick = e => {
    analytics.sendEvent("Integration card - Clicked", eventProperties);

    if (onClick) {
      onClick(e);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  });
  const button = /*#__PURE__*/React__default.createElement("button", Object.assign({
    className: classNames(styles$7.card, {
      [styles$7.active]: active,
      [styles$7.inactive]: selectedIntegration && selectedIntegration !== integration.key,
      [styles$7.disabled]: disabled
    }),
    onClick: !disabled ? handleClick : undefined,
    onMouseEnter: () => setShowTooltip(true),
    onFocus: () => setShowTooltip(true),
    onMouseLeave: () => {
      timeoutRef.current = window.setTimeout(() => setShowTooltip(false), HIDE_TOOLTIP_DELAY_MS);
    },
    "aria-disabled": disabled,
    ref: buttonRef
  }, props), active && /*#__PURE__*/React__default.createElement(CircleCheckIcon, {
    "data-testid": "integration-card-check-icon",
    fillColor: colors["color-ui-positive-70"]
  }), /*#__PURE__*/React__default.createElement("img", {
    src: integration.logoUrl,
    alt: integration.name
  }));
  return disabled ? /*#__PURE__*/React__default.createElement(EventContextProvider, {
    name: "Disabled integration card"
  }, /*#__PURE__*/React__default.createElement(Tooltip, {
    className: styles$7.disabledTooltip,
    id: `integration-disabled-tooltip-${integration.key}`,
    isOpen: showTooltip,
    placement: "bottom",
    anchorElement: (_b = buttonRef.current) !== null && _b !== void 0 ? _b : undefined,
    content: /*#__PURE__*/React__default.createElement(TooltipContent, {
      title: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Typography, {
        className: styles$7.disabledTooltipTitle,
        variant: "h2",
        as: "h2"
      }, "This software is disabled"), /*#__PURE__*/React__default.createElement(ContactSupport, {
        clientName: clientName,
        link: link,
        onFocus: () => clearTimeout(timeoutRef.current),
        onBlur: () => setShowTooltip(false)
      }))
    })
  }, button)) : button;
};

var styles$6 = { "container": "IntegrationsContainer-module_container__Ccb4R" };

const IntegrationsContainer = ({
  children
}) => {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$6.container
  }, children);
};

const LinkCompanyContainer = ({
  className,
  integrations,
  selectedIntegration,
  onIntegrationSelect,
  link,
  clientName,
  primaryColour
}) => /*#__PURE__*/React__default.createElement("div", {
  className: className
}, /*#__PURE__*/React__default.createElement(IntegrationsContainer, null, integrations.map(integration => /*#__PURE__*/React__default.createElement(IntegrationCard, {
  key: integration.key,
  integration: integration,
  active: integration.key === selectedIntegration,
  disabled: integration.clientLimitReached,
  selectedIntegration: selectedIntegration,
  onClick: () => {
    if (integration.key === selectedIntegration) {
      onIntegrationSelect("");
    } else {
      onIntegrationSelect(integration.key);
    }
  },
  eventProperties: {
    integration: integration.name
  },
  "data-testid": "link-integration-button",
  clientName: clientName,
  link: link
}))));

const DEBOUNCE_MS = 1000;
const TextInput = props => {
  const {
    analyticsName,
    onChange
  } = props,
    textInputProps = __rest(props, ["analyticsName", "onChange"]);

  const analytics = useAnalytics();
  const track = useCallback(debounce(analytics.sendEvent, DEBOUNCE_MS), []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOnChange = e => {
    if (e.target.value) {
      track(`${analyticsName} text input - Typed`, {
        searchText: e.target.value
      });
    }

    if (onChange) {
      onChange(e);
    }
  };

  const enterKeyHint = (() => {
    switch (props.enterKeyHint) {
      case "search":
      case "enter":
      case "done":
      case "go":
      case "next":
      case "previous":
      case "send":
        return props.enterKeyHint;

      default:
        return undefined;
    }
  })();

  return /*#__PURE__*/React__default.createElement(TextInput$1, Object.assign({
    onChange: handleOnChange
  }, textInputProps, {
    enterKeyHint: enterKeyHint
  }));
};

const LinkCompanySearchContainer = ({
  className,
  integrations,
  selectedIntegration,
  onIntegrationSelect
}) => {
  var _a, _b, _c, _d, _e, _f;

  const {
    state: {
      data: config
    }
  } = useConfig();
  const [searchText, setSearchText] = useState("");
  const [searchValue] = useDebounce(searchText, 200);
  const searchedIntegrations = useMemo(() => {
    if (!searchText || !searchValue) return [];
    return integrations.filter(integration => {
      var _a;

      return integration.name.toLowerCase().includes(searchValue.toLowerCase()) || ((_a = integration.alternativeNames) === null || _a === void 0 ? void 0 : _a.some(a => a.toLowerCase().includes(searchValue.toLowerCase())));
    });
  }, [integrations, searchValue, searchText]);

  const handleSelectedItemChange = event => {
    onIntegrationSelect("");
    setSearchText(event.target.value);
  };

  const handleSearchClear = () => {
    onIntegrationSelect("");
    setSearchText("");
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, /*#__PURE__*/React__default.createElement(TextInput, {
    id: "companySearchInput",
    placeholder: "Start typing...",
    onChange: handleSelectedItemChange,
    iconLeft: searchText ? {
      icon: /*#__PURE__*/React__default.createElement(CloseIcon, null),
      onClick: handleSearchClear,
      label: "Clear search"
    } : {
      icon: /*#__PURE__*/React__default.createElement(SearchIcon, null)
    },
    value: searchText,
    "data-testid": "link-company-search-input",
    label: "Search integrations",
    inputClassName: styles$8.searchInput,
    style: {
      "--theme-color-primary": ((_a = config.colors) === null || _a === void 0 ? void 0 : _a.primary) ? (_b = config.colors) === null || _b === void 0 ? void 0 : _b.primary : "var(--color-ui-action)",
      "--theme-color-secondary": ((_c = config.colors) === null || _c === void 0 ? void 0 : _c.secondary) ? (_d = config.colors) === null || _d === void 0 ? void 0 : _d.secondary : null
    },
    analyticsName: "Integration search",
    enterKeyHint: "search"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles$8.integrationsContainer
  }, /*#__PURE__*/React__default.createElement(LinkCompanyContainer, {
    integrations: searchText ? searchedIntegrations : integrations,
    onIntegrationSelect: onIntegrationSelect,
    selectedIntegration: selectedIntegration,
    clientName: config.clientName,
    link: (_e = config.help) === null || _e === void 0 ? void 0 : _e.link,
    primaryColour: (_f = config.colors) === null || _f === void 0 ? void 0 : _f.primary
  })));
};

function CompanyLinkContent({
  match,
  sourceTypes,
  sourceTypesStatus,
  currentSourceType,
  nextPrioritySourceType
}) {
  var _a, _b, _c, _d, _e;

  const history = useHistory();
  const {
    state
  } = useConfig();
  const [isWarningModal, setWarningModal] = useState(false);
  const {
    isDemo
  } = useDemoMode();
  const displayProps = useSourceTypeDisplayProps(currentSourceType);
  const [{
    data: integrationsData,
    loading: isIntegrationsLoading
  }, executeGetIntegrations] = useManualIntegrationsQuery((_a = currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.integrationsUri) !== null && _a !== void 0 ? _a : "");
  React__default.useEffect(() => {
    if (currentSourceType && executeGetIntegrations) {
      executeGetIntegrations();
    }
  }, [executeGetIntegrations, currentSourceType]);
  const isComplete = !!currentSourceType && !isIntegrationsLoading && sourceTypesStatus === SourceTypeStatus.READY && state.status === ConfigStatusType.READY;
  usePageViewedEvent({
    ready: !!(currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType) && !!state.data && !!sourceTypes && !!integrationsData && isComplete,
    clientConfig: state.data,
    sourceTypes,
    integrations: integrationsData,
    resetOnChange: currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType
  });
  const locationSearch = useLocation().search;
  const [integrationKey, setIntegrationKey] = useState("");
  const handleSkip = useNextSourceTypeRedirectHandler(match.params.companyId, nextPrioritySourceType, currentSourceType && !nextPrioritySourceType);

  const handleBackClick = () => history.goBack();

  const secondaryCtaProps = (() => {
    if (canSkip(currentSourceType, state.data)) {
      return {
        label: "Skip this step",
        "data-testid": "skip-btn",
        "aria-label": "Skip",
        onClick: handleSkip,
        analyticsName: "Skip"
      };
    } else {
      return undefined;
    }
  })();

  const handleCancel = () => {
    history.push({
      pathname: formatUrl(routes.company.revisit, {
        companyId: match.params.companyId
      }),
      search: locationSearch
    });
  };

  const onIntegrationSelect = selectedIntegrationKey => {
    setIntegrationKey(selectedIntegrationKey);
  };

  const handleContinue = () => {
    history.push({
      pathname: formatUrl(routes.company.consent, {
        companyId: match.params.companyId,
        platformKey: integrationKey
      }),
      search: locationSearch
    });
  };

  const onNextButtonClick = () => {
    if (currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.displayWarning) {
      setWarningModal(true);
      return;
    }

    handleContinue();
  };

  const demoModeValid = (() => {
    var _a, _b;

    const sourceType = currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType;

    if (!sourceType) {
      return true;
    }

    const integrationKeys = (_b = (_a = integrationsData === null || integrationsData === void 0 ? void 0 : integrationsData.results) === null || _a === void 0 ? void 0 : _a.map(i => i.key)) !== null && _b !== void 0 ? _b : [];
    return isDemoModeValid(isDemo, integrationKeys, sourceType);
  })();

  const isNextButtonDisabled = !integrationKey || !demoModeValid;
  const showSearch = integrationsData && ((_b = integrationsData === null || integrationsData === void 0 ? void 0 : integrationsData.results) === null || _b === void 0 ? void 0 : _b.length) > 12;
  const fileUploadOnly = (_c = integrationsData && integrationsData.totalResults === 0 && displayProps.link.canUpload) !== null && _c !== void 0 ? _c : false;

  const instructionsText = (() => {
    var _a, _b, _c, _d, _e, _f;

    const defaultText = "You can upload requested PDFs, Excel files, or CSVs below.";
    const {
      fileUpload
    } = state.data.pageConfiguration;

    switch (currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType) {
      case "Accounting":
        return (_b = (_a = fileUpload.accounting) === null || _a === void 0 ? void 0 : _a.body) !== null && _b !== void 0 ? _b : defaultText;

      case "Banking":
        return (_d = (_c = fileUpload.banking) === null || _c === void 0 ? void 0 : _c.body) !== null && _d !== void 0 ? _d : defaultText;

      case "Other":
        return (_f = (_e = fileUpload.businessDocuments) === null || _e === void 0 ? void 0 : _e.body) !== null && _f !== void 0 ? _f : defaultText;

      default:
        return defaultText;
    }
  })();

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(LinkPageRoot, {
    isComplete: isComplete,
    title: fileUploadOnly ? displayProps.link.fileUploadText : displayProps.link.sourceText,
    showLinkedAccounts: true,
    secondaryCtaProps: secondaryCtaProps,
    onBackClick: handleBackClick,
    primaryCtaProps: {
      onClick: onNextButtonClick,
      disabled: isNextButtonDisabled,
      hidden: isNextButtonDisabled,
      analyticsName: "Next",
      eventProperties: {
        selectedIntegrationKey: integrationKey
      }
    },
    fileUploadCtaProps: {
      sourceType: currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType,
      fileUploadOnly: fileUploadOnly,
      canUpload: displayProps.link.canUpload,
      companyId: match.params.companyId
    },
    currentSourceType: currentSourceType
  }, !demoModeValid && /*#__PURE__*/React__default.createElement(InfoBanner, {
    color: "negative",
    title: "Invalid demo mode setup",
    subtitle: "You are using demo mode without a valid setup. Please ensure the\n            correct sandbox integration has been enabled and your client is set\n            up to use four-letter platform keys."
  }), fileUploadOnly && currentSourceType && /*#__PURE__*/React__default.createElement(Typography, {
    as: "p",
    variant: "body_md",
    className: styles$8.subText,
    "data-testid": "file-upload-instructions"
  }, instructionsText), fileUploadOnly && /*#__PURE__*/React__default.createElement(Typography, {
    as: "p",
    variant: "body_md",
    className: styles$8.subText,
    "data-testid": "file-upload-subtext"
  }, displayProps.link.fileUploadSubtext), sourceTypes && integrationsData && !showSearch && /*#__PURE__*/React__default.createElement(LinkCompanyContainer, {
    onIntegrationSelect: onIntegrationSelect,
    selectedIntegration: integrationKey,
    integrations: integrationsData.results,
    className: styles$8.container,
    clientName: state.data.clientName,
    link: (_d = state.data.help) === null || _d === void 0 ? void 0 : _d.link,
    primaryColour: (_e = state.data.colors) === null || _e === void 0 ? void 0 : _e.primary
  }), sourceTypes && integrationsData && showSearch && /*#__PURE__*/React__default.createElement(LinkCompanySearchContainer, {
    onIntegrationSelect: onIntegrationSelect,
    selectedIntegration: integrationKey,
    integrations: integrationsData.results,
    className: classNames(styles$8.container, styles$8.searchContainer, styles$8.fadeout)
  })), /*#__PURE__*/React__default.createElement(Modal, {
    onClose: () => setWarningModal(false)
  }, isWarningModal && /*#__PURE__*/React__default.createElement(WarningDialog, {
    title: displayProps.link.warningTitle,
    subText: displayProps.link.warningMessage,
    primaryCtaProps: {
      label: "Back",
      onClick: handleCancel,
      analyticsName: "Back"
    },
    secondaryCtaProps: {
      label: "Yes, continue",
      onClick: handleContinue,
      analyticsName: "Continue"
    }
  })));
}
const CompanyLink = props => {
  var _a;

  return /*#__PURE__*/React__default.createElement(WithSourceTypeEvent, {
    sourceType: (_a = props.match.params) === null || _a === void 0 ? void 0 : _a.sourceType,
    eventName: sourceType => `Link ${sourceType} package page`
  }, sourceTypeProps => /*#__PURE__*/React__default.createElement(CompanyLinkContent, Object.assign({}, sourceTypeProps, props)));
};

var styles$5 = { "sourceTypeSummary": "SourceTypeSummary-module_sourceTypeSummary__y29j7", "innerWrapper": "SourceTypeSummary-module_innerWrapper__5Ovv1", "icon": "SourceTypeSummary-module_icon__nWe79", "sourceTypeName": "SourceTypeSummary-module_sourceTypeName__r0yAv", "connectionCountSummary": "SourceTypeSummary-module_connectionCountSummary__gKT4p", "connectionCount": "SourceTypeSummary-module_connectionCount__gQdri", "addAnotherBtn": "SourceTypeSummary-module_addAnotherBtn__iidsU" };

const sourceTypeMap = {
  Accounting: {
    icon: props => /*#__PURE__*/React.createElement(InvoiceIcon, Object.assign({}, props)),
    label: "Accounting"
  },
  Commerce: {
    icon: props => /*#__PURE__*/React.createElement(CartIcon, Object.assign({}, props)),
    label: "Commerce"
  },
  Other: {
    icon: props => /*#__PURE__*/React.createElement(FileIcon, Object.assign({}, props)),
    label: "Business documents"
  }
};
const SourceTypeSummary = ({
  sourceType,
  connectedCount,
  disconnectedCount,
  uploadedFilesCount,
  onAddAnother
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$5.sourceTypeSummary,
    "data-testid": "source-type-summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$5.innerWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$5.icon
  }, sourceTypeMap[sourceType].icon({})), /*#__PURE__*/React.createElement("div", {
    className: styles$5.sourceTypeName,
    "data-testid": "source-type-summary-source-type-name"
  }, sourceTypeMap[sourceType].label), /*#__PURE__*/React.createElement("div", {
    className: styles$5.connectionCountSummary
  }, !!connectedCount && /*#__PURE__*/React.createElement(Typography, {
    className: styles$5.connectionCount,
    variant: "small",
    as: "p",
    "data-testid": "source-type-summary-connected-count"
  }, connectedCount, " connected"), !!uploadedFilesCount && /*#__PURE__*/React.createElement(Typography, {
    className: styles$5.connectionCount,
    variant: "small",
    as: "p",
    "data-testid": "source-type-summary-uploaded-files-count"
  }, uploadedFilesCount, " uploaded files"), !!disconnectedCount && /*#__PURE__*/React.createElement(Typography, {
    className: styles$5.connectionCount,
    variant: "small",
    as: "p",
    "data-testid": "source-type-summary-disconnected-count"
  }, disconnectedCount, " disconnected")), onAddAnother && /*#__PURE__*/React.createElement("div", {
    className: styles$5.addAnotherWrapper
  }, /*#__PURE__*/React.createElement(IconButton, {
    className: styles$5.addAnotherBtn,
    label: "Add more",
    onClick: onAddAnother
  }, /*#__PURE__*/React.createElement(PlusIcon, null)))));
};

var styles$4 = { "subtitle": "CompanyOverview-module_subtitle__cynJd", "sourceTypeSummaryWrapper": "CompanyOverview-module_sourceTypeSummaryWrapper__X2KUm", "helpLink": "CompanyOverview-module_helpLink__AJUMU", "icon": "CompanyOverview-module_icon__gUoJt", "footer": "CompanyOverview-module_footer__DRGRR" };

const CompanyOverviewContent = ({
  match
}) => {
  var _a, _b;

  const history = useHistory();
  const {
    state: config
  } = useConfig();
  const [isHelpModal, setHelpModal] = React.useState(false);
  const search = useFilteredQueryString();
  const {
    onFinish: onAppFinish
  } = useCallbacks();
  const {
    sourceTypes,
    status: sourceTypesStatus
  } = useSourceTypes();
  const {
    currentSourceType
  } = useSourceTypeResolver(match.params, sourceTypes);
  const isSuccess = sourceTypes === null || sourceTypes === void 0 ? void 0 : sourceTypes.some(sourceTypeHasData);
  const isComplete = React.useMemo(() => sourceTypesStatus === SourceTypeStatus.READY && config.status === ConfigStatusType.READY && !!currentSourceType, [config.status, sourceTypesStatus, currentSourceType]);
  usePageViewedEvent({
    ready: isComplete,
    clientConfig: config.data,
    sourceTypes
  });

  const onRestart = () => {
    const url = getSourceTypeLinkUrl(match.params.companyId, currentSourceType);
    history.push({
      pathname: url,
      search
    });
  };

  const {
    help
  } = config.data;
  const showHelp = (help === null || help === void 0 ? void 0 : help.description) || ((_a = help === null || help === void 0 ? void 0 : help.link) === null || _a === void 0 ? void 0 : _a.href) || ((_b = help === null || help === void 0 ? void 0 : help.link) === null || _b === void 0 ? void 0 : _b.text);
  const primaryCtaProps = isSuccess ? {
    onClick: onAppFinish,
    analyticsName: "Finish",
    label: "Finish"
  } : {
    onClick: onRestart,
    analyticsName: "Restart",
    label: "Restart"
  };
  const secondaryCtaProps = !isSuccess && showHelp ? {
    onClick: () => setHelpModal(true),
    analyticsName: "Open help",
    label: "Help",
    eventProperties: {
      connectedSourceTypes: 0
    },
    "data-testid": "overview-help"
  } : undefined;
  return /*#__PURE__*/React.createElement(LinkPageRoot, {
    isComplete: isComplete,
    "data-testid": "connections-overview-page",
    showLinkedAccounts: true,
    primaryCtaProps: primaryCtaProps,
    secondaryCtaProps: secondaryCtaProps,
    onBackClick: () => {
      history.goBack();
    }
  }, /*#__PURE__*/React.createElement(ConnectionComplete, {
    title: isSuccess ? "Thank you for sharing your data" : "You haven’t shared your data"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "p",
    as: "p",
    className: styles$4.subtitle
  }, config.data.clientName, " ", isSuccess ? `will now be able to access your financial information` : `will not be able to access your financial information, please try again`), /*#__PURE__*/React.createElement("ul", {
    className: styles$4.sourceTypeSummaryWrapper
  }, sourceTypes === null || sourceTypes === void 0 ? void 0 : sourceTypes.map(sourceType => /*#__PURE__*/React.createElement("li", {
    key: sourceType.sourceType
  }, /*#__PURE__*/React.createElement(SourceTypeSummary, {
    sourceType: sourceType.sourceType,
    connectedCount: sourceType.connected,
    disconnectedCount: sourceType.disconnected,
    uploadedFilesCount: sourceType.uploadedFiles
  }))))), /*#__PURE__*/React.createElement(HelpModal, {
    isOpen: isHelpModal,
    onClose: () => setHelpModal(false),
    text: help === null || help === void 0 ? void 0 : help.description,
    link: help === null || help === void 0 ? void 0 : help.link
  }));
};

const CompanyOverview = withEventContext(CompanyOverviewContent, "Link overview page");

var $$1 = _export;
var iterate = iterate$3;
var createProperty = createProperty$2;

// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$$1({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, { AS_ENTRIES: true });
    return obj;
  }
});

var styles$3 = { "icon": "CompanyRevisit-module_icon__gmEF-", "subText": "CompanyRevisit-module_subText__Yo-EP", "linkIcon": "CompanyRevisit-module_linkIcon__leu8V" };

function CompanyRevisitContent({
  match
}) {
  const {
    state
  } = useConfig();
  const {
    sourceTypes,
    status: sourceTypeStatus
  } = useSourceTypes();
  const queryParams = useQueryParams();
  const history = useHistory();
  const isComplete = React.useMemo(() => sourceTypeStatus === SourceTypeStatus.READY && state.status === ConfigStatusType.READY, [state.status, sourceTypeStatus]);
  const {
    currentSourceType,
    nextPrioritySourceType
  } = useSourceTypeResolver(match.params, sourceTypes);
  usePageViewedEvent({
    ready: !!(currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType) && isComplete,
    clientConfig: state.data,
    sourceTypes
  });
  const displayProps = useSourceTypeDisplayProps(currentSourceType);
  const currentQueryString = useLocation().search;
  const overviewPageUrl = `${formatUrl(routes.company.overview, {
    companyId: match.params.companyId
  })}${currentQueryString ? currentQueryString : ""}`;
  let handleNextButtonClick;
  const nextPrioritySourceTypeRedirect = useNextSourceTypeRedirectHandler(match.params.companyId, nextPrioritySourceType);

  if (nextPrioritySourceType) {
    handleNextButtonClick = nextPrioritySourceTypeRedirect;
  } else {
    handleNextButtonClick = () => history.push(overviewPageUrl);
  }

  const canGoBack = state.data.showLandingPage || sourceTypes && (currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType) !== sourceTypes[0].sourceType;
  const handleBackClick = canGoBack ? () => {
    history.goBack();
  } : undefined;
  return /*#__PURE__*/React.createElement(LinkPageRoot, {
    isComplete: isComplete,
    showLinkedAccounts: true,
    onBackClick: handleBackClick,
    primaryCtaProps: handleNextButtonClick ? {
      onClick: handleNextButtonClick,
      disabled: !sourceTypes,
      analyticsName: "Next"
    } : undefined,
    secondaryCtaProps: {
      label: displayProps.revisit.linkText,
      to: formatUrl(displayProps.revisit.linkUrl, {
        companyId: match.params.companyId,
        sourceType: match.params.sourceType
      }, Object.fromEntries(queryParams.entries())),
      analyticsName: displayProps.revisit.linkText,
      ["data-testid"]: "company-revisit-make-changes-link"
    },
    currentSourceType: currentSourceType
  }, currentSourceType ? /*#__PURE__*/React.createElement(ConnectionComplete, {
    Icon: p => /*#__PURE__*/React.createElement(CircleCheckIcon, {
      className: classNames(p.className, styles$3.icon)
    }),
    title: `${currentSourceType.sourceType} software connected`,
    className: styles$3.container
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$3.subText
  }, /*#__PURE__*/React.createElement(Typography, {
    as: "p"
  }, displayProps.revisit.message))) : /*#__PURE__*/React.createElement("div", {
    "data-testid": "revist-source-types-loading"
  }, "Loading..."));
}

const CompanyRevisit = props => {
  var _a;

  return /*#__PURE__*/React.createElement(WithSourceTypeEvent, {
    sourceType: (_a = props.match.params) === null || _a === void 0 ? void 0 : _a.sourceType,
    eventName: sourceType => `Link ${sourceType} revisit page`
  }, sourceTypeProps => /*#__PURE__*/React.createElement(CompanyRevisitContent, Object.assign({}, sourceTypeProps, props)));
};

const useCreateConnectionClickHandler = args => {
  const search = useFilteredQueryParams();
  search["link.embedded"] = "true";
  const searchString = `?${queryString.stringify(search)}`;
  const [isLoading, setIsLoading] = useState(false);
  const {
    onError
  } = useCallbacks();
  const {
    isDemo
  } = useDemoMode();
  const companyId = args.companyId;
  const platformKey = isDemo && args.sourceType && args.sourceType !== "Banking" && args.sourceType !== "Other" ? getDemoModePlatform(args.sourceType) : args.platformKey;
  const [, executePost] = useCreateConnectionQuery({
    companyId,
    platformKey,
    query: searchString
  });
  return [isLoading, () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;

    try {
      setIsLoading(true);
      const createConnectionResponse = yield executePost();

      if (args.onConnectionCreate) {
        args.onConnectionCreate(createConnectionResponse.data.connectionId);
      }

      const linkUrl = createConnectionResponse.data.linkUrl;
      console.log(createConnectionResponse, "createConnectionResponse");
      console.log(linkUrl, "linkUrl");
      (_a = window.open(linkUrl, "_blank")) === null || _a === void 0 ? void 0 : _a.focus();
    } catch (e) {
      setIsLoading(false);
      onError({
        message: `${getTryCatchErrorMessage(e)}: Failed to create connection`,
        userRecoverable: false
      });
    }
  })];
};

var styles$2 = { "platformName": "CompanySuccess-module_platformName__JVzn1", "linkIcon": "CompanySuccess-module_linkIcon__zbKNW", "successSubtitle": "CompanySuccess-module_successSubtitle__UQLHd", "sourceTypeSummaryWrapper": "CompanySuccess-module_sourceTypeSummaryWrapper__EJtHe", "successFooter": "CompanySuccess-module_successFooter__QCkgY" };

const CompanySuccessContent = ({
  match,
  sourceTypes,
  sourceTypesStatus,
  currentSourceType,
  nextPrioritySourceType
}) => {
  var _a, _b, _c;

  const history = useHistory();
  const {
    state
  } = useConfig();
  const {
    redirectUrl: continueRedirectUrl,
    canContinue
  } = useContinueRedirectUrl(match.params.companyId);
  const filteredQueryParams = useFilteredQueryParams();
  const filteredSearch = useFilteredQueryString(true);
  const [isLoadingCreateConnection, createConnection] = useCreateConnectionClickHandler({
    companyId: match.params.companyId,
    platformKey: match.params.platformKey,
    sourceType: currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType
  });
  const displayProps = useSourceTypeDisplayProps(currentSourceType);
  const {
    refetch: refetchSourceTypes
  } = useSourceTypes();
  const [{
    data: integrationsData,
    loading: isIntegrationsLoading
  }, getIntegrations] = useManualIntegrationsQuery((_a = currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.integrationsUri) !== null && _a !== void 0 ? _a : "");
  const isComplete = sourceTypesStatus === SourceTypeStatus.READY && state.status === ConfigStatusType.READY && !!currentSourceType && !isLoadingCreateConnection && !isIntegrationsLoading;
  usePageViewedEvent({
    ready: !!(currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType) && isComplete,
    clientConfig: state.data,
    sourceTypes
  });
  React.useEffect(() => {
    if (currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.integrationsUri) {
      getIntegrations();
    }
  }, [currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.integrationsUri, getIntegrations]);
  const overviewPageUrl = formatUrl(routes.company.overview, {
    companyId: match.params.companyId
  });

  const handleAddAnother = () => {
    var _a, _b, _c;

    if ((currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType) === "Banking" && currentSourceType.useCustomIntro) {
      continueRedirectUrl && !((_a = state.data.enableFileUpload) === null || _a === void 0 ? void 0 : _a.banking) ? createConnection() : history.push(formatUrl(routes.company.customIntro, {
        companyId: match.params.companyId,
        sourceType: (_b = currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType) === null || _b === void 0 ? void 0 : _b.toLowerCase()
      }, filteredQueryParams));
    } else {
      history.push(formatUrl(routes.company.link, {
        companyId: match.params.companyId,
        sourceType: (_c = currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType) === null || _c === void 0 ? void 0 : _c.toLowerCase()
      }, filteredQueryParams));
    }
  };

  const redirectHandler = useNextSourceTypeRedirectHandler(match.params.companyId, nextPrioritySourceType);
  const onNextButtonClick = canContinue && nextPrioritySourceType ? redirectHandler : () => {
    history.push({
      pathname: overviewPageUrl,
      search: filteredSearch
    });
  };
  React.useEffect(() => {
    refetchSourceTypes();
  }, [refetchSourceTypes]);
  const platformKey = match.params.platformKey;
  const platformName = (_c = (_b = integrationsData === null || integrationsData === void 0 ? void 0 : integrationsData.results.find(integrations => integrations.key === platformKey)) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : platformKey;
  const isFileUpload = platformKey ? fileUploadPlatformKeys.indexOf(platformKey) >= 0 : false;
  const title = isFileUpload ? "Upload successful" : "Connection Successful";

  const subtitle = (() => {
    if (isFileUpload) {
      return `${state.data.clientName} will now be able to view your files`;
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, "You have connected", " ", (currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType) === "Banking" ? /*#__PURE__*/React.createElement("span", {
        "data-testid": "connection-successful-platform-name"
      }, "your bank account") : /*#__PURE__*/React.createElement("span", {
        "data-testid": "connection-successful-platform-name",
        className: styles$2.platformName
      }, platformName));
    }
  })();

  return /*#__PURE__*/React.createElement(LinkPageRoot, {
    isComplete: isComplete,
    showLinkedAccounts: true,
    "data-testid": "company-success-page",
    currentSourceType: currentSourceType,
    primaryCtaProps: onNextButtonClick && sourceTypes ? {
      label: "Next",
      analyticsName: "Next",
      onClick: onNextButtonClick
    } : undefined
  }, /*#__PURE__*/React.createElement(ConnectionComplete, {
    title: title
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "p",
    as: "p",
    className: styles$2.successSubtitle
  }, subtitle), (currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType) && /*#__PURE__*/React.createElement("div", {
    className: styles$2.sourceTypeSummaryWrapper
  }, /*#__PURE__*/React.createElement(SourceTypeSummary, {
    sourceType: currentSourceType.sourceType,
    connectedCount: currentSourceType.connected,
    disconnectedCount: currentSourceType.disconnected,
    uploadedFilesCount: currentSourceType.uploadedFiles,
    onAddAnother: displayProps.link.canAddAnother ? handleAddAnother : undefined
  }))));
};

const CompanySuccess = props => {
  var _a;

  return /*#__PURE__*/React.createElement(WithSourceTypeEvent, {
    sourceType: (_a = props.match.params) === null || _a === void 0 ? void 0 : _a.sourceType,
    eventName: sourceType => `Link ${sourceType} success page`
  }, sourceTypeProps => /*#__PURE__*/React.createElement(CompanySuccessContent, Object.assign({}, sourceTypeProps, props)));
};

var styles$1 = { "pageRoot": "CustomIntro-module_pageRoot__0X4x7", "container": "CustomIntro-module_container__XjF1M", "header": "CustomIntro-module_header__IY-nM", "body": "CustomIntro-module_body__8e5ym", "actions": "CustomIntro-module_actions__nV77S", "image": "CustomIntro-module_image__B9w5y" };

function CustomIntroContent({
  match
}) {
  var _a, _b, _c, _d;

  const history = useHistory();
  const {
    sourceTypes,
    status: sourceTypesStatus
  } = useSourceTypes();
  const {
    state
  } = useConfig();
  const locationSearch = useLocation().search;
  const [isWarningModal, setWarningModal] = useState(false);
  const {
    currentSourceType,
    nextPrioritySourceType
  } = useSourceTypeResolver(match.params, sourceTypes);
  const displayProps = useSourceTypeDisplayProps(currentSourceType);
  const [{
    data: integrationsData
  }, executeGetIntegrations] = useManualIntegrationsQuery((_a = currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.integrationsUri) !== null && _a !== void 0 ? _a : "");

  if ((integrationsData === null || integrationsData === void 0 ? void 0 : integrationsData.totalResults) === 0) {
    window.location.assign(routes.notfound);
  }

  const integration = (integrationsData === null || integrationsData === void 0 ? void 0 : integrationsData.results) ? integrationsData === null || integrationsData === void 0 ? void 0 : integrationsData.results[0] : undefined;
  usePageViewedEvent({
    ready: !!integration
  });
  const [{
    data: integrationBrandingData
  }, executeGetIntegrationBranding] = useManualIntegrationQuery();
  React__default.useEffect(() => {
    if (currentSourceType && executeGetIntegrations) {
      executeGetIntegrations();
    }
  }, [executeGetIntegrations, currentSourceType]);
  React__default.useEffect(() => {
    if (integration && executeGetIntegrationBranding) {
      executeGetIntegrationBranding({
        companyId: match.params.companyId,
        platformKey: integration.key
      });
    }
  }, [executeGetIntegrationBranding, integration, match.params.companyId]);
  const isComplete = !!integrationBrandingData && sourceTypesStatus === SourceTypeStatus.READY && state.status === ConfigStatusType.READY;

  const onContinueButtonClick = () => {
    if (currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.displayWarning) {
      setWarningModal(true);
      return;
    }

    goToWaitPage();
  };

  const goToWaitPage = () => history.push(formatUrl(routes.company.waitForConnection, {
    companyId: match.params.companyId,
    platformKey: integration === null || integration === void 0 ? void 0 : integration.key
  }));

  const handleWarningCancel = () => {
    history.push({
      pathname: formatUrl(routes.company.revisit, {
        companyId: match.params.companyId,
        sourceType: currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType
      }),
      search: locationSearch
    });
  };

  const handleSkip = useNextSourceTypeRedirectHandler(match.params.companyId, nextPrioritySourceType, currentSourceType && !nextPrioritySourceType);

  const secondaryCtaProps = (() => {
    if (canSkip(currentSourceType, state.data)) {
      return {
        label: "Skip this step",
        "data-testid": "skip-btn",
        "aria-label": "Skip",
        onClick: handleSkip,
        analyticsName: "Skip"
      };
    } else {
      return undefined;
    }
  })();

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(LinkPageRoot, {
    className: styles$1.pageRoot,
    isComplete: isComplete,
    showLinkedAccounts: true,
    currentSourceType: currentSourceType,
    integrationLogo: integrationBrandingData === null || integrationBrandingData === void 0 ? void 0 : integrationBrandingData.logo.square.image,
    isPlaidClientLimitReached: (integration === null || integration === void 0 ? void 0 : integration.key) === "suuo" && (integration === null || integration === void 0 ? void 0 : integration.clientLimitReached),
    onBackClick: () => {
      history.goBack();
    },
    secondaryCtaProps: secondaryCtaProps,
    fileUploadCtaProps: {
      sourceType: currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType,
      canUpload: displayProps.link.canUpload,
      companyId: match.params.companyId
    },
    primaryCtaProps: {
      analyticsName: "Continue",
      label: "Continue",
      onClick: onContinueButtonClick
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.container
  }, ((_d = (_c = (_b = integrationBrandingData === null || integrationBrandingData === void 0 ? void 0 : integrationBrandingData.logo) === null || _b === void 0 ? void 0 : _b.square) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.src) && /*#__PURE__*/React__default.createElement("img", {
    className: styles$1.image,
    src: integrationBrandingData.logo.square.image.src,
    alt: integrationBrandingData.logo.square.image.alt
  }), /*#__PURE__*/React__default.createElement(Typography, {
    className: styles$1.header,
    "data-testid": "page-title",
    variant: "h3",
    as: "h2"
  }, "Connect your bank"), /*#__PURE__*/React__default.createElement(Typography, {
    className: styles$1.body,
    "data-testid": "page-body",
    variant: "p",
    as: "p"
  }, "We use ", integration === null || integration === void 0 ? void 0 : integration.name, " to quickly and securely connect to your bank."), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.actions
  }))), /*#__PURE__*/React__default.createElement(Modal, {
    onClose: () => setWarningModal(false)
  }, isWarningModal && /*#__PURE__*/React__default.createElement(WarningDialog, {
    title: displayProps.link.warningTitle,
    subText: displayProps.link.warningMessage,
    primaryCtaProps: {
      label: "Back",
      onClick: handleWarningCancel,
      analyticsName: "Back"
    },
    secondaryCtaProps: {
      label: "Continue",
      onClick: goToWaitPage,
      analyticsName: "Continue"
    }
  })));
}

const CustomIntro = withEventContext(CustomIntroContent, "Plaid page");

const makeConnectionStatusApi = instance => {
  const getConnectionStatus = (companyId, connectionId) => {
    const url = formatUrl(api.companies.status, {
      companyId,
      connectionId
    });
    return instance.get(url).then(r => r.data);
  };

  const getConnectionStatusPoll$ = (companyId, connectionId, pollInterval) => {
    return interval(pollInterval).pipe(switchMap$1(() => getConnectionStatus(companyId, connectionId)));
  };

  return {
    getConnectionStatus,
    getConnectionStatusPoll$
  };
};
const ConnectionStatusApiContext = /*#__PURE__*/createContext(undefined);
const useConnectionStatusApi = () => {
  const s = useContext(ConnectionStatusApiContext);

  if (s === undefined) {
    throw new Error("ConnectionStatusApi must be initialised before use");
  }

  return s;
};

const CompanyWaitForConnectionContent = props => {
  var _a, _b;

  const companyId = props.match.params.companyId;
  const platformKey = props.match.params.platformKey;
  const history = useHistory();
  const connectionStatusApi = useConnectionStatusApi();
  const [connectionId, setConnectionId] = useState(undefined);
  const [{
    data: integration,
    loading
  }] = useIntegrationQuery({
    companyId,
    platformKey
  });
  const config = useConfig();
  const {
    onConnection
  } = useCallbacks();
  const sourceType = integration === null || integration === void 0 ? void 0 : integration.sourceType;
  const platformName = integration === null || integration === void 0 ? void 0 : integration.name;
  const connectionStatusPoll$ = useMemo(() => {
    if (connectionId) {
      return connectionStatusApi.getConnectionStatusPoll$(companyId, connectionId, 5000);
    }

    return undefined;
  }, [companyId, connectionId, connectionStatusApi]);
  const {
    sourceTypes
  } = useSourceTypes();
  const {
    currentSourceType
  } = useSourceTypeResolver({
    sourceType
  }, sourceTypes);
  const handleNextButtonClick = useCreateConnectionClickHandler({
    companyId,
    platformKey,
    sourceType,
    onConnectionCreate: setConnectionId
  })[1];
  useEffect(() => {
    const s = connectionStatusPoll$ === null || connectionStatusPoll$ === void 0 ? void 0 : connectionStatusPoll$.subscribe({
      next: v => {
        if (v.status.toLowerCase() === "success") {
          onConnection({
            connectionId: connectionId !== null && connectionId !== void 0 ? connectionId : ""
          });
          const url = formatUrl(routes.company.success, {
            companyId,
            platformKey,
            sourceType
          }, {
            continue: "true"
          });
          history.push(url);
        } else if (v.status.toLowerCase() === "error") {
          const url = formatUrl(routes.company.error, {
            companyId,
            platformKey,
            sourceType: currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType,
            connectionId
          }) + "/retry";
          history.push(url);
        }
      },
      error: () => {
        const url = formatUrl(routes.company.error, {
          companyId,
          platformKey,
          sourceType: currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType,
          connectionId
        }) + "/retry";
        history.push(url);
      }
    });
    return () => s === null || s === void 0 ? void 0 : s.unsubscribe();
  }, [companyId, connectionId, connectionStatusPoll$, history, platformKey, sourceType, currentSourceType === null || currentSourceType === void 0 ? void 0 : currentSourceType.sourceType, onConnection]);
  useEffect(() => {
    handleNextButtonClick(); // handleNextButtonClick changes every render, we only want
    //   to call it on initial render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/React__default.createElement(LinkPageRoot, {
    title: loading ? "Loading..." : `Connect to ${platformName}`,
    showLinkedAccounts: true,
    isComplete: !loading,
    currentSourceType: currentSourceType,
    onBackClick: () => {
      history.goBack();
    },
    primaryCtaProps: {
      label: `Connect to ${platformName}`,
      analyticsName: "Open connection link",
      onClick: handleNextButtonClick
    }
  }, /*#__PURE__*/React__default.createElement(Typography, {
    as: "p"
  }, "Enter your account details and log in to ", platformName, " in the tab we opened to establish a data connection with", " ", (_b = (_a = config === null || config === void 0 ? void 0 : config.state) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.clientName, "."));
};
const CompanyWaitForConnection = props => {
  return /*#__PURE__*/React__default.createElement(ConnectionStatusApiContext.Provider, {
    value: makeConnectionStatusApi(axiosInstance)
  }, /*#__PURE__*/React__default.createElement(CompanyWaitForConnectionContent, Object.assign({}, props)));
};

function Company({
  match
}) {
  var _a;

  const queryParams = useQueryParams();
  const analytics = useAnalytics();
  const {
    state,
    dispatch
  } = useConfig();
  const [{
    loading,
    error,
    data
  }, getCompanyConfig] = useCompanyConfigQuery({
    companyId: match.params.companyId,
    queryParams
  });
  useFavicon((_a = data === null || data === void 0 ? void 0 : data.icon) === null || _a === void 0 ? void 0 : _a.src);
  const userProperties = useMemo(() => {
    var _a, _b;

    return {
      companyId: match.params.companyId,
      clientId: (_a = data === null || data === void 0 ? void 0 : data.clientId) !== null && _a !== void 0 ? _a : state.data.clientId,
      clientName: (_b = data === null || data === void 0 ? void 0 : data.clientName) !== null && _b !== void 0 ? _b : state.data.clientName
    };
  }, [match.params.companyId, data === null || data === void 0 ? void 0 : data.clientId, data === null || data === void 0 ? void 0 : data.clientName, state.data.clientId, state.data.clientName]);
  useEffect(() => {
    if (userProperties.companyId && userProperties.clientId && userProperties.clientName) {
      analytics.setUserProperties(userProperties);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [userProperties]);
  useEffect(() => {
    if (state.status === ConfigStatusType.EMPTY) {
      getCompanyConfig();
    }
  }, [getCompanyConfig, state.status]);
  useEffect(() => {
    if (data) {
      dispatch({
        type: ActionTypes.SET_CONFIG,
        payload: data
      });
    }
  }, [dispatch, data]);

  if (error) {
    return /*#__PURE__*/React__default.createElement(ErrorFallback, {
      error: error
    });
  }

  if (loading || state.status === ConfigStatusType.EMPTY) {
    return /*#__PURE__*/React__default.createElement(CentreOverlay, {
      "data-testid": "company-config-loading"
    }, /*#__PURE__*/React__default.createElement(Spinner, null));
  }

  return /*#__PURE__*/React__default.createElement(EventContextProvider, {
    data: userProperties
  }, /*#__PURE__*/React__default.createElement(SourceTypesProvider, {
    companyId: match.params.companyId
  }, /*#__PURE__*/React__default.createElement(Switch, null, /*#__PURE__*/React__default.createElement(Route, {
    exact: true,
    path: routes.company.root,
    component: CompanyContainer
  }), /*#__PURE__*/React__default.createElement(Route, {
    exact: true,
    path: routes.company.link,
    component: CompanyLink
  }), /*#__PURE__*/React__default.createElement(Route, {
    exact: true,
    path: routes.company.customIntro,
    component: CustomIntro
  }), /*#__PURE__*/React__default.createElement(Route, {
    exact: true,
    path: routes.company.consent,
    component: CompanyConsent
  }), /*#__PURE__*/React__default.createElement(Route, {
    exact: true,
    path: routes.company.waitForConnection,
    component: CompanyWaitForConnection
  }), /*#__PURE__*/React__default.createElement(Route, {
    exact: true,
    path: routes.company.success,
    component: CompanySuccess
  }), /*#__PURE__*/React__default.createElement(Route, {
    exact: true,
    path: routes.company.overview,
    component: CompanyOverview
  }), /*#__PURE__*/React__default.createElement(Route, {
    exact: true,
    path: routes.company.revisit,
    component: CompanyRevisit
  }), /*#__PURE__*/React__default.createElement(Route, {
    exact: true,
    path: routes.company.fileUpload,
    component: FileUploadPage
  }), /*#__PURE__*/React__default.createElement(Route, {
    exact: true,
    path: routes.company.error,
    component: CompanyError
  }), /*#__PURE__*/React__default.createElement(Route, {
    path: "*",
    component: NoMatch
  }))));
}

var global$1 = global$p;
var fails = fails$q;
var uncurryThis = functionUncurryThis;
var toString = toString$c;
var trim = stringTrim.trim;
var whitespaces = whitespaces$3;

var $parseInt$1 = global$1.parseInt;
var Symbol$1 = global$1.Symbol;
var ITERATOR = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt$1(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt$1;

var $ = _export;
var $parseInt = numberParseInt;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});

function ErrorContent() {
  const queryParams = useQueryParams();

  const getErrorCode = () => {
    const errorCodeParam = queryParams.get("errorCode");

    if (errorCodeParam) {
      const errorCodeNumber = parseInt(errorCodeParam);

      if (!isNaN(errorCodeNumber)) {
        return errorCodeNumber;
      }
    }

    return 500;
  };

  const errorCode = getErrorCode();
  usePageViewedEvent({
    ready: true,
    data: {
      httpStatusCode: errorCode
    }
  });
  const correlationId = React.useMemo(() => queryParams.get("x-correlation-id"), [queryParams]);
  const errorMessage = React.useMemo(() => queryParams.get("errorMessage"), [queryParams]);
  return /*#__PURE__*/React.createElement(CardContainer, null, /*#__PURE__*/React.createElement(ErrorCard, {
    errorCode: errorCode,
    correlationId: correlationId,
    errorMessage: errorMessage
  }));
}

const Error$1 = withEventContext(ErrorContent, "Error page");

function AppRouter() {
  return /*#__PURE__*/React__default.createElement(Switch, null, /*#__PURE__*/React__default.createElement(Route, {
    path: routes.company.root,
    component: Company
  }), /*#__PURE__*/React__default.createElement(Route, {
    path: routes.error,
    component: Error$1
  }), /*#__PURE__*/React__default.createElement(Route, {
    path: "/account-categorisation/help",
    component: CategorisationHelp
  }), /*#__PURE__*/React__default.createElement(Route, {
    path: "*",
    component: NoMatch
  }));
}

const App = props => {
  const {
    companyId
  } = props;
  const pathname = formatUrl(routes.company.root, {
    companyId
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$w.app
  }, /*#__PURE__*/React__default.createElement(MemoryRouter, {
    initialEntries: [{
      pathname
    }]
  }, /*#__PURE__*/React__default.createElement(OrchardProvider, {
    appId: "app-link"
  }, /*#__PURE__*/React__default.createElement(ConfigProvider, null, /*#__PURE__*/React__default.createElement(DemoModeProvider, null, /*#__PURE__*/React__default.createElement(AppRouter, null))))));
};

var styles = { "container": "CodatLink-module_container__C1QzI" };

function isGuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function validateType(value, propertyName, expectedType) {
  const type = typeof value;

  if (type !== expectedType) {
    throw new TypeError(`CodatLink property ${propertyName} must be a ${expectedType}. Received: ${value} with type ${type}`);
  }
}

function validateProps(props) {
  const {
    companyId,
    onConnection,
    onError,
    onClose,
    onFinish
  } = props;
  validateType(companyId, "companyId", "string");
  validateType(onConnection, "onConnection", "function");
  validateType(onError, "onError", "function");
  validateType(onClose, "onClose", "function");
  validateType(onFinish, "onFinish", "function");

  if (!isGuid(companyId)) {
    throw new Error(`CodatLink property companyId must be a GUID. Received: "${companyId}"`);
  }
}

function CodatLink(props) {
  validateProps(props);
  const {
    companyId,
    onConnection,
    onError,
    onClose,
    onFinish
  } = props;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles["container"]
  }, /*#__PURE__*/React__default.createElement(AnalyticsProvider, {
    config: {
      apiKey: "Some API key",
      appName: "Link",
      mode: config.ENVIRONMENT === "Integration" ? "development" : "production"
    }
  }, /*#__PURE__*/React__default.createElement(CallbackProvider, {
    onClose: onClose,
    onConnection: onConnection,
    onError: onError,
    onFinish: onFinish
  }, /*#__PURE__*/React__default.createElement(App, {
    companyId: companyId
  }))));
}

export { CodatLink };
