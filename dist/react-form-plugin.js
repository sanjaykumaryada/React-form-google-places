import "./index.css";
import $, { useState as Ke, useRef as mt, useEffect as _t } from "react";
var Ir = { exports: {} }, cr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function St() {
  return zr || (zr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = $, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), x = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), Y = Symbol.iterator, ge = "@@iterator";
    function Se(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = Y && e[Y] || e[ge];
      return typeof a == "function" ? a : null;
    }
    var G = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          u[y - 1] = arguments[y];
        X("error", e, u);
      }
    }
    function X(e, a, u) {
      {
        var y = G.ReactDebugCurrentFrame, w = y.getStackAddendum();
        w !== "" && (a += "%s", u = u.concat([w]));
        var F = u.map(function(S) {
          return String(S);
        });
        F.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, F);
      }
    }
    var te = !1, B = !1, Ee = !1, se = !1, he = !1, N;
    N = Symbol.for("react.module.reference");
    function q(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === t || e === c || he || e === o || e === A || e === R || se || e === U || te || B || Ee || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === k || e.$$typeof === d || e.$$typeof === x || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === N || e.getModuleId !== void 0));
    }
    function Ve(e, a, u) {
      var y = e.displayName;
      if (y)
        return y;
      var w = a.displayName || a.name || "";
      return w !== "" ? u + "(" + w + ")" : u;
    }
    function V(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case t:
          return "Fragment";
        case s:
          return "Portal";
        case c:
          return "Profiler";
        case o:
          return "StrictMode";
        case A:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var a = e;
            return V(a) + ".Consumer";
          case d:
            var u = e;
            return V(u._context) + ".Provider";
          case p:
            return Ve(e, e.render, "ForwardRef");
          case k:
            var y = e.displayName || null;
            return y !== null ? y : T(e.type) || "Memo";
          case E: {
            var w = e, F = w._payload, S = w._init;
            try {
              return T(S(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, I = 0, ee, Z, be, ae, we, De, Fe;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function Be() {
      {
        if (I === 0) {
          ee = console.log, Z = console.info, be = console.warn, ae = console.error, we = console.group, De = console.groupCollapsed, Fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Qe() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ee
            }),
            info: D({}, e, {
              value: Z
            }),
            warn: D({}, e, {
              value: be
            }),
            error: D({}, e, {
              value: ae
            }),
            group: D({}, e, {
              value: we
            }),
            groupCollapsed: D({}, e, {
              value: De
            }),
            groupEnd: D({}, e, {
              value: Fe
            })
          });
        }
        I < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = G.ReactCurrentDispatcher, Te;
    function ie(e, a, u) {
      {
        if (Te === void 0)
          try {
            throw Error();
          } catch (w) {
            var y = w.stack.trim().match(/\n( *(at )?)/);
            Te = y && y[1] || "";
          }
        return `
` + Te + e;
      }
    }
    var Re = !1, oe;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new Ye();
    }
    function Le(e, a) {
      if (!e || Re)
        return "";
      {
        var u = oe.get(e);
        if (u !== void 0)
          return u;
      }
      var y;
      Re = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = xe.current, xe.current = null, Be();
      try {
        if (a) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (J) {
              y = J;
            }
            Reflect.construct(e, [], S);
          } else {
            try {
              S.call();
            } catch (J) {
              y = J;
            }
            e.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            y = J;
          }
          e();
        }
      } catch (J) {
        if (J && y && typeof J.stack == "string") {
          for (var m = J.stack.split(`
`), L = y.stack.split(`
`), C = m.length - 1, P = L.length - 1; C >= 1 && P >= 0 && m[C] !== L[P]; )
            P--;
          for (; C >= 1 && P >= 0; C--, P--)
            if (m[C] !== L[P]) {
              if (C !== 1 || P !== 1)
                do
                  if (C--, P--, P < 0 || m[C] !== L[P]) {
                    var W = `
` + m[C].replace(" at new ", " at ");
                    return e.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", e.displayName)), typeof e == "function" && oe.set(e, W), W;
                  }
                while (C >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        Re = !1, xe.current = F, Qe(), Error.prepareStackTrace = w;
      }
      var le = e ? e.displayName || e.name : "", lr = le ? ie(le) : "";
      return typeof e == "function" && oe.set(e, lr), lr;
    }
    function qe(e, a, u) {
      return Le(e, !1);
    }
    function er(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function ce(e, a, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Le(e, er(e));
      if (typeof e == "string")
        return ie(e);
      switch (e) {
        case A:
          return ie("Suspense");
        case R:
          return ie("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return qe(e.render);
          case k:
            return ce(e.type, a, u);
          case E: {
            var y = e, w = y._payload, F = y._init;
            try {
              return ce(F(w), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, He = {}, ze = G.ReactDebugCurrentFrame;
    function ke(e) {
      if (e) {
        var a = e._owner, u = ce(e.type, e._source, a ? a.type : null);
        ze.setExtraStackFrame(u);
      } else
        ze.setExtraStackFrame(null);
    }
    function n(e, a, u, y, w) {
      {
        var F = Function.call.bind(fe);
        for (var S in e)
          if (F(e, S)) {
            var m = void 0;
            try {
              if (typeof e[S] != "function") {
                var L = Error((y || "React class") + ": " + u + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              m = e[S](a, S, y, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              m = C;
            }
            m && !(m instanceof Error) && (ke(w), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", u, S, typeof m), ke(null)), m instanceof Error && !(m.message in He) && (He[m.message] = !0, ke(w), h("Failed %s type: %s", u, m.message), ke(null));
          }
      }
    }
    var l = Array.isArray;
    function f(e) {
      return l(e);
    }
    function _(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, u = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function g(e) {
      try {
        return v(e), !1;
      } catch {
        return !0;
      }
    }
    function v(e) {
      return "" + e;
    }
    function O(e) {
      if (g(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _(e)), v(e);
    }
    var j = G.ReactCurrentOwner, H = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, re, de, Ce;
    Ce = {};
    function Ne(e) {
      if (fe.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function $e(e) {
      if (fe.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, a) {
      if (typeof e.ref == "string" && j.current && a && j.current.stateNode !== a) {
        var u = T(j.current.type);
        Ce[u] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(j.current.type), e.ref), Ce[u] = !0);
      }
    }
    function Ge(e, a) {
      {
        var u = function() {
          re || (re = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function tr(e, a) {
      {
        var u = function() {
          de || (de = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Je = function(e, a, u, y, w, F, S) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: u,
        props: S,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Rr(e, a, u, y, w) {
      {
        var F, S = {}, m = null, L = null;
        u !== void 0 && (O(u), m = "" + u), $e(a) && (O(a.key), m = "" + a.key), Ne(a) && (L = a.ref, rr(a, w));
        for (F in a)
          fe.call(a, F) && !H.hasOwnProperty(F) && (S[F] = a[F]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (F in C)
            S[F] === void 0 && (S[F] = C[F]);
        }
        if (m || L) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Ge(S, P), L && tr(S, P);
        }
        return Je(e, m, L, w, y, j.current, S);
      }
    }
    var Ie = G.ReactCurrentOwner, nr = G.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var a = e._owner, u = ce(e.type, e._source, a ? a.type : null);
        nr.setExtraStackFrame(u);
      } else
        nr.setExtraStackFrame(null);
    }
    var Ue;
    Ue = !1;
    function Me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function sr() {
      {
        if (Ie.current) {
          var e = T(Ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function kr(e) {
      {
        if (e !== void 0) {
          var a = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + a + ":" + u + ".";
        }
        return "";
      }
    }
    var ar = {};
    function Or(e) {
      {
        var a = sr();
        if (!a) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (a = `

Check the top-level render call using <` + u + ">.");
        }
        return a;
      }
    }
    function ir(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Or(a);
        if (ar[u])
          return;
        ar[u] = !0;
        var y = "";
        e && e._owner && e._owner !== Ie.current && (y = " It was passed a child from " + T(e._owner.type) + "."), ue(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, y), ue(null);
      }
    }
    function or(e, a) {
      {
        if (typeof e != "object")
          return;
        if (f(e))
          for (var u = 0; u < e.length; u++) {
            var y = e[u];
            Me(y) && ir(y, a);
          }
        else if (Me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = Se(e);
          if (typeof w == "function" && w !== e.entries)
            for (var F = w.call(e), S; !(S = F.next()).done; )
              Me(S.value) && ir(S.value, a);
        }
      }
    }
    function Fr(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var u;
        if (typeof a == "function")
          u = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === k))
          u = a.propTypes;
        else
          return;
        if (u) {
          var y = T(a);
          n(u, e.props, "prop", y, e);
        } else if (a.PropTypes !== void 0 && !Ue) {
          Ue = !0;
          var w = T(a);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tr(e) {
      {
        for (var a = Object.keys(e.props), u = 0; u < a.length; u++) {
          var y = a[u];
          if (y !== "children" && y !== "key") {
            ue(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), ue(null);
            break;
          }
        }
        e.ref !== null && (ue(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    function ur(e, a, u, y, w, F) {
      {
        var S = q(e);
        if (!S) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = kr(w);
          L ? m += L : m += sr();
          var C;
          e === null ? C = "null" : f(e) ? C = "array" : e !== void 0 && e.$$typeof === i ? (C = "<" + (T(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, m);
        }
        var P = Rr(e, a, u, w, F);
        if (P == null)
          return P;
        if (S) {
          var W = a.children;
          if (W !== void 0)
            if (y)
              if (f(W)) {
                for (var le = 0; le < W.length; le++)
                  or(W[le], e);
                Object.freeze && Object.freeze(W);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(W, e);
        }
        return e === t ? Tr(P) : Fr(P), P;
      }
    }
    function Cr(e, a, u) {
      return ur(e, a, u, !0);
    }
    function Ar(e, a, u) {
      return ur(e, a, u, !1);
    }
    var Vr = Ar, Dr = Cr;
    cr.Fragment = t, cr.jsx = Vr, cr.jsxs = Dr;
  }()), cr;
}
var fr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function Et() {
  if (Gr)
    return fr;
  Gr = 1;
  var r = $, i = Symbol.for("react.element"), s = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(x, p, A) {
    var R, k = {}, E = null, U = null;
    A !== void 0 && (E = "" + A), p.key !== void 0 && (E = "" + p.key), p.ref !== void 0 && (U = p.ref);
    for (R in p)
      t.call(p, R) && !c.hasOwnProperty(R) && (k[R] = p[R]);
    if (x && x.defaultProps)
      for (R in p = x.defaultProps, p)
        k[R] === void 0 && (k[R] = p[R]);
    return { $$typeof: i, type: x, key: E, ref: U, props: k, _owner: o.current };
  }
  return fr.Fragment = s, fr.jsx = d, fr.jsxs = d, fr;
}
process.env.NODE_ENV === "production" ? Ir.exports = Et() : Ir.exports = St();
var Pr = Ir.exports;
const wt = {
  geoAddressFields: [
    "street_number",
    "route",
    "postal_code",
    "country",
    "administrative_area_level_1",
    "administrative_area_level_2",
    "locality",
    "sublocality_level_1",
    "sublocality_level_2",
    "route",
    "street_number",
    "opening_hours",
    "price_level"
  ],
  /* utils functions */
  placeSuggest: (r, i) => new Promise((s) => {
    if (google) {
      const t = {
        input: r,
        types: i
      };
      new google.maps.places.AutocompleteService().getPlacePredictions(t, (c) => {
        s(c);
      });
    }
  })
};
var pr = (r) => r.type === "checkbox", Ze = (r) => r instanceof Date, ne = (r) => r == null;
const at = (r) => typeof r == "object";
var K = (r) => !ne(r) && !Array.isArray(r) && at(r) && !Ze(r), it = (r) => K(r) && r.target ? pr(r.target) ? r.target.checked : r.target.value : r, xt = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r, ot = (r, i) => r.has(xt(i)), Rt = (r) => {
  const i = r.constructor && r.constructor.prototype;
  return K(i) && i.hasOwnProperty("isPrototypeOf");
}, Mr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function me(r) {
  let i;
  const s = Array.isArray(r);
  if (r instanceof Date)
    i = new Date(r);
  else if (r instanceof Set)
    i = new Set(r);
  else if (!(Mr && (r instanceof Blob || r instanceof FileList)) && (s || K(r)))
    if (i = s ? [] : {}, !s && !Rt(r))
      i = r;
    else
      for (const t in r)
        r.hasOwnProperty(t) && (i[t] = me(r[t]));
  else
    return r;
  return i;
}
var gr = (r) => Array.isArray(r) ? r.filter(Boolean) : [], z = (r) => r === void 0, b = (r, i, s) => {
  if (!i || !K(r))
    return s;
  const t = gr(i.split(/[,[\].]+?/)).reduce((o, c) => ne(o) ? o : o[c], r);
  return z(t) || t === r ? z(r[i]) ? s : r[i] : t;
}, pe = (r) => typeof r == "boolean";
const _r = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, _e = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Ae = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, kt = $.createContext(null), Wr = () => $.useContext(kt);
var ut = (r, i, s, t = !0) => {
  const o = {
    defaultValues: i._defaultValues
  };
  for (const c in r)
    Object.defineProperty(o, c, {
      get: () => {
        const d = c;
        return i._proxyFormState[d] !== _e.all && (i._proxyFormState[d] = !t || _e.all), s && (s[d] = !0), r[d];
      }
    });
  return o;
}, ve = (r) => K(r) && !Object.keys(r).length, lt = (r, i, s, t) => {
  s(r);
  const { name: o, ...c } = r;
  return ve(c) || Object.keys(c).length >= Object.keys(i).length || Object.keys(c).find((d) => i[d] === (!t || _e.all));
}, br = (r) => Array.isArray(r) ? r : [r], ct = (r, i, s) => !r || !i || r === i || br(r).some((t) => t && (s ? t === i : t.startsWith(i) || i.startsWith(t)));
function Br(r) {
  const i = $.useRef(r);
  i.current = r, $.useEffect(() => {
    const s = !r.disabled && i.current.subject && i.current.subject.subscribe({
      next: i.current.next
    });
    return () => {
      s && s.unsubscribe();
    };
  }, [r.disabled]);
}
function Ot(r) {
  const i = Wr(), { control: s = i.control, disabled: t, name: o, exact: c } = r || {}, [d, x] = $.useState(s._formState), p = $.useRef(!0), A = $.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), R = $.useRef(o);
  return R.current = o, Br({
    disabled: t,
    next: (k) => p.current && ct(R.current, k.name, c) && lt(k, A.current, s._updateFormState) && x({
      ...s._formState,
      ...k
    }),
    subject: s._subjects.state
  }), $.useEffect(() => (p.current = !0, A.current.isValid && s._updateValid(!0), () => {
    p.current = !1;
  }), [s]), ut(d, s, A.current, !1);
}
var Oe = (r) => typeof r == "string", ft = (r, i, s, t, o) => Oe(r) ? (t && i.watch.add(r), b(s, r, o)) : Array.isArray(r) ? r.map((c) => (t && i.watch.add(c), b(s, c))) : (t && (i.watchAll = !0), s);
function Ft(r) {
  const i = Wr(), { control: s = i.control, name: t, defaultValue: o, disabled: c, exact: d } = r || {}, x = $.useRef(t);
  x.current = t, Br({
    disabled: c,
    subject: s._subjects.values,
    next: (R) => {
      ct(x.current, R.name, d) && A(me(ft(x.current, s._names, R.values || s._formValues, !1, o)));
    }
  });
  const [p, A] = $.useState(s._getWatch(t, o));
  return $.useEffect(() => s._removeUnmounted()), p;
}
var Yr = (r) => /^\w*$/.test(r), dt = (r) => gr(r.replace(/["|']|\]/g, "").split(/\.|\[/)), M = (r, i, s) => {
  let t = -1;
  const o = Yr(i) ? [i] : dt(i), c = o.length, d = c - 1;
  for (; ++t < c; ) {
    const x = o[t];
    let p = s;
    if (t !== d) {
      const A = r[x];
      p = K(A) || Array.isArray(A) ? A : isNaN(+o[t + 1]) ? {} : [];
    }
    r[x] = p, r = r[x];
  }
  return r;
};
function Tt(r) {
  const i = Wr(), { name: s, disabled: t, control: o = i.control, shouldUnregister: c } = r, d = ot(o._names.array, s), x = Ft({
    control: o,
    name: s,
    defaultValue: b(o._formValues, s, b(o._defaultValues, s, r.defaultValue)),
    exact: !0
  }), p = Ot({
    control: o,
    name: s
  }), A = $.useRef(o.register(s, {
    ...r.rules,
    value: x,
    ...pe(r.disabled) ? { disabled: r.disabled } : {}
  }));
  return $.useEffect(() => {
    const R = o._options.shouldUnregister || c, k = (E, U) => {
      const Y = b(o._fields, E);
      Y && (Y._f.mount = U);
    };
    if (k(s, !0), R) {
      const E = me(b(o._options.defaultValues, s));
      M(o._defaultValues, s, E), z(b(o._formValues, s)) && M(o._formValues, s, E);
    }
    return () => {
      (d ? R && !o._state.action : R) ? o.unregister(s) : k(s, !1);
    };
  }, [s, o, d, c]), $.useEffect(() => {
    b(o._fields, s) && o._updateDisabledField({
      disabled: t,
      fields: o._fields,
      name: s,
      value: b(o._fields, s)._f.value
    });
  }, [t, s, o]), {
    field: {
      name: s,
      value: x,
      ...pe(t) || pe(p.disabled) ? { disabled: p.disabled || t } : {},
      onChange: $.useCallback((R) => A.current.onChange({
        target: {
          value: it(R),
          name: s
        },
        type: _r.CHANGE
      }), [s]),
      onBlur: $.useCallback(() => A.current.onBlur({
        target: {
          value: b(o._formValues, s),
          name: s
        },
        type: _r.BLUR
      }), [s, o]),
      ref: (R) => {
        const k = b(o._fields, s);
        k && R && (k._f.ref = {
          focus: () => R.focus(),
          select: () => R.select(),
          setCustomValidity: (E) => R.setCustomValidity(E),
          reportValidity: () => R.reportValidity()
        });
      }
    },
    formState: p,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!b(p.errors, s)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!b(p.dirtyFields, s)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!b(p.touchedFields, s)
      },
      error: {
        enumerable: !0,
        get: () => b(p.errors, s)
      }
    })
  };
}
const Ct = (r) => r.render(Tt(r));
var At = (r, i, s, t, o) => i ? {
  ...s[r],
  types: {
    ...s[r] && s[r].types ? s[r].types : {},
    [t]: o || !0
  }
} : {}, Jr = (r) => ({
  isOnSubmit: !r || r === _e.onSubmit,
  isOnBlur: r === _e.onBlur,
  isOnChange: r === _e.onChange,
  isOnAll: r === _e.all,
  isOnTouch: r === _e.onTouched
}), Kr = (r, i, s) => !s && (i.watchAll || i.watch.has(r) || [...i.watch].some((t) => r.startsWith(t) && /^\.\w+/.test(r.slice(t.length))));
const vr = (r, i, s, t) => {
  for (const o of s || Object.keys(r)) {
    const c = b(r, o);
    if (c) {
      const { _f: d, ...x } = c;
      if (d) {
        if (d.refs && d.refs[0] && i(d.refs[0], o) && !t)
          break;
        if (d.ref && i(d.ref, d.name) && !t)
          break;
        vr(x, i);
      } else
        K(x) && vr(x, i);
    }
  }
};
var Vt = (r, i, s) => {
  const t = gr(b(r, s));
  return M(t, "root", i[s]), M(r, s, t), r;
}, qr = (r) => r.type === "file", je = (r) => typeof r == "function", Sr = (r) => {
  if (!Mr)
    return !1;
  const i = r ? r.ownerDocument : 0;
  return r instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
}, mr = (r) => Oe(r), Hr = (r) => r.type === "radio", Er = (r) => r instanceof RegExp;
const Xr = {
  value: !1,
  isValid: !1
}, Zr = { value: !0, isValid: !0 };
var yt = (r) => {
  if (Array.isArray(r)) {
    if (r.length > 1) {
      const i = r.filter((s) => s && s.checked && !s.disabled).map((s) => s.value);
      return { value: i, isValid: !!i.length };
    }
    return r[0].checked && !r[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      r[0].attributes && !z(r[0].attributes.value) ? z(r[0].value) || r[0].value === "" ? Zr : { value: r[0].value, isValid: !0 } : Zr
    ) : Xr;
  }
  return Xr;
};
const Qr = {
  isValid: !1,
  value: null
};
var vt = (r) => Array.isArray(r) ? r.reduce((i, s) => s && s.checked && !s.disabled ? {
  isValid: !0,
  value: s.value
} : i, Qr) : Qr;
function et(r, i, s = "validate") {
  if (mr(r) || Array.isArray(r) && r.every(mr) || pe(r) && !r)
    return {
      type: s,
      message: mr(r) ? r : "",
      ref: i
    };
}
var Xe = (r) => K(r) && !Er(r) ? r : {
  value: r,
  message: ""
}, rt = async (r, i, s, t, o) => {
  const { ref: c, refs: d, required: x, maxLength: p, minLength: A, min: R, max: k, pattern: E, validate: U, name: Y, valueAsNumber: ge, mount: Se, disabled: G } = r._f, h = b(i, Y);
  if (!Se || G)
    return {};
  const X = d ? d[0] : c, te = (V) => {
    t && X.reportValidity && (X.setCustomValidity(pe(V) ? "" : V || ""), X.reportValidity());
  }, B = {}, Ee = Hr(c), se = pr(c), he = Ee || se, N = (ge || qr(c)) && z(c.value) && z(h) || Sr(c) && c.value === "" || h === "" || Array.isArray(h) && !h.length, q = At.bind(null, Y, s, B), Ve = (V, T, D, I = Ae.maxLength, ee = Ae.minLength) => {
    const Z = V ? T : D;
    B[Y] = {
      type: V ? I : ee,
      message: Z,
      ref: c,
      ...q(V ? I : ee, Z)
    };
  };
  if (o ? !Array.isArray(h) || !h.length : x && (!he && (N || ne(h)) || pe(h) && !h || se && !yt(d).isValid || Ee && !vt(d).isValid)) {
    const { value: V, message: T } = mr(x) ? { value: !!x, message: x } : Xe(x);
    if (V && (B[Y] = {
      type: Ae.required,
      message: T,
      ref: X,
      ...q(Ae.required, T)
    }, !s))
      return te(T), B;
  }
  if (!N && (!ne(R) || !ne(k))) {
    let V, T;
    const D = Xe(k), I = Xe(R);
    if (!ne(h) && !isNaN(h)) {
      const ee = c.valueAsNumber || h && +h;
      ne(D.value) || (V = ee > D.value), ne(I.value) || (T = ee < I.value);
    } else {
      const ee = c.valueAsDate || new Date(h), Z = (we) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + we), be = c.type == "time", ae = c.type == "week";
      Oe(D.value) && h && (V = be ? Z(h) > Z(D.value) : ae ? h > D.value : ee > new Date(D.value)), Oe(I.value) && h && (T = be ? Z(h) < Z(I.value) : ae ? h < I.value : ee < new Date(I.value));
    }
    if ((V || T) && (Ve(!!V, D.message, I.message, Ae.max, Ae.min), !s))
      return te(B[Y].message), B;
  }
  if ((p || A) && !N && (Oe(h) || o && Array.isArray(h))) {
    const V = Xe(p), T = Xe(A), D = !ne(V.value) && h.length > +V.value, I = !ne(T.value) && h.length < +T.value;
    if ((D || I) && (Ve(D, V.message, T.message), !s))
      return te(B[Y].message), B;
  }
  if (E && !N && Oe(h)) {
    const { value: V, message: T } = Xe(E);
    if (Er(V) && !h.match(V) && (B[Y] = {
      type: Ae.pattern,
      message: T,
      ref: c,
      ...q(Ae.pattern, T)
    }, !s))
      return te(T), B;
  }
  if (U) {
    if (je(U)) {
      const V = await U(h, i), T = et(V, X);
      if (T && (B[Y] = {
        ...T,
        ...q(Ae.validate, T.message)
      }, !s))
        return te(T.message), B;
    } else if (K(U)) {
      let V = {};
      for (const T in U) {
        if (!ve(V) && !s)
          break;
        const D = et(await U[T](h, i), X, T);
        D && (V = {
          ...D,
          ...q(T, D.message)
        }, te(D.message), s && (B[Y] = V));
      }
      if (!ve(V) && (B[Y] = {
        ref: X,
        ...V
      }, !s))
        return B;
    }
  }
  return te(!0), B;
};
function Dt(r, i) {
  const s = i.slice(0, -1).length;
  let t = 0;
  for (; t < s; )
    r = z(r) ? t++ : r[i[t++]];
  return r;
}
function Pt(r) {
  for (const i in r)
    if (r.hasOwnProperty(i) && !z(r[i]))
      return !1;
  return !0;
}
function Q(r, i) {
  const s = Array.isArray(i) ? i : Yr(i) ? [i] : dt(i), t = s.length === 1 ? r : Dt(r, s), o = s.length - 1, c = s[o];
  return t && delete t[c], o !== 0 && (K(t) && ve(t) || Array.isArray(t) && Pt(t)) && Q(r, s.slice(0, -1)), r;
}
var jr = () => {
  let r = [];
  return {
    get observers() {
      return r;
    },
    next: (o) => {
      for (const c of r)
        c.next && c.next(o);
    },
    subscribe: (o) => (r.push(o), {
      unsubscribe: () => {
        r = r.filter((c) => c !== o);
      }
    }),
    unsubscribe: () => {
      r = [];
    }
  };
}, wr = (r) => ne(r) || !at(r);
function We(r, i) {
  if (wr(r) || wr(i))
    return r === i;
  if (Ze(r) && Ze(i))
    return r.getTime() === i.getTime();
  const s = Object.keys(r), t = Object.keys(i);
  if (s.length !== t.length)
    return !1;
  for (const o of s) {
    const c = r[o];
    if (!t.includes(o))
      return !1;
    if (o !== "ref") {
      const d = i[o];
      if (Ze(c) && Ze(d) || K(c) && K(d) || Array.isArray(c) && Array.isArray(d) ? !We(c, d) : c !== d)
        return !1;
    }
  }
  return !0;
}
var pt = (r) => r.type === "select-multiple", jt = (r) => Hr(r) || pr(r), Lr = (r) => Sr(r) && r.isConnected, gt = (r) => {
  for (const i in r)
    if (je(r[i]))
      return !0;
  return !1;
};
function xr(r, i = {}) {
  const s = Array.isArray(r);
  if (K(r) || s)
    for (const t in r)
      Array.isArray(r[t]) || K(r[t]) && !gt(r[t]) ? (i[t] = Array.isArray(r[t]) ? [] : {}, xr(r[t], i[t])) : ne(r[t]) || (i[t] = !0);
  return i;
}
function ht(r, i, s) {
  const t = Array.isArray(r);
  if (K(r) || t)
    for (const o in r)
      Array.isArray(r[o]) || K(r[o]) && !gt(r[o]) ? z(i) || wr(s[o]) ? s[o] = Array.isArray(r[o]) ? xr(r[o], []) : { ...xr(r[o]) } : ht(r[o], ne(i) ? {} : i[o], s[o]) : s[o] = !We(r[o], i[o]);
  return s;
}
var Nr = (r, i) => ht(r, i, xr(i)), bt = (r, { valueAsNumber: i, valueAsDate: s, setValueAs: t }) => z(r) ? r : i ? r === "" ? NaN : r && +r : s && Oe(r) ? new Date(r) : t ? t(r) : r;
function $r(r) {
  const i = r.ref;
  if (!(r.refs ? r.refs.every((s) => s.disabled) : i.disabled))
    return qr(i) ? i.files : Hr(i) ? vt(r.refs).value : pt(i) ? [...i.selectedOptions].map(({ value: s }) => s) : pr(i) ? yt(r.refs).value : bt(z(i.value) ? r.ref.value : i.value, r);
}
var Lt = (r, i, s, t) => {
  const o = {};
  for (const c of r) {
    const d = b(i, c);
    d && M(o, c, d._f);
  }
  return {
    criteriaMode: s,
    names: [...r],
    fields: o,
    shouldUseNativeValidation: t
  };
}, dr = (r) => z(r) ? r : Er(r) ? r.source : K(r) ? Er(r.value) ? r.value.source : r.value : r, Nt = (r) => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate);
function tt(r, i, s) {
  const t = b(r, s);
  if (t || Yr(s))
    return {
      error: t,
      name: s
    };
  const o = s.split(".");
  for (; o.length; ) {
    const c = o.join("."), d = b(i, c), x = b(r, c);
    if (d && !Array.isArray(d) && s !== c)
      return { name: s };
    if (x && x.type)
      return {
        name: c,
        error: x
      };
    o.pop();
  }
  return {
    name: s
  };
}
var $t = (r, i, s, t, o) => o.isOnAll ? !1 : !s && o.isOnTouch ? !(i || r) : (s ? t.isOnBlur : o.isOnBlur) ? !r : (s ? t.isOnChange : o.isOnChange) ? r : !0, It = (r, i) => !gr(b(r, i)).length && Q(r, i);
const Ut = {
  mode: _e.onSubmit,
  reValidateMode: _e.onChange,
  shouldFocusError: !0
};
function Mt(r = {}, i) {
  let s = {
    ...Ut,
    ...r
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: je(s.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: s.errors || {},
    disabled: !1
  }, o = {}, c = K(s.defaultValues) || K(s.values) ? me(s.defaultValues || s.values) || {} : {}, d = s.shouldUnregister ? {} : me(c), x = {
    action: !1,
    mount: !1,
    watch: !1
  }, p = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, A, R = 0;
  const k = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, E = {
    values: jr(),
    array: jr(),
    state: jr()
  }, U = r.resetOptions && r.resetOptions.keepDirtyValues, Y = Jr(s.mode), ge = Jr(s.reValidateMode), Se = s.criteriaMode === _e.all, G = (n) => (l) => {
    clearTimeout(R), R = setTimeout(n, l);
  }, h = async (n) => {
    if (k.isValid || n) {
      const l = s.resolver ? ve((await q()).errors) : await V(o, !0);
      l !== t.isValid && E.state.next({
        isValid: l
      });
    }
  }, X = (n) => k.isValidating && E.state.next({
    isValidating: n
  }), te = (n, l = [], f, _, g = !0, v = !0) => {
    if (_ && f) {
      if (x.action = !0, v && Array.isArray(b(o, n))) {
        const O = f(b(o, n), _.argA, _.argB);
        g && M(o, n, O);
      }
      if (v && Array.isArray(b(t.errors, n))) {
        const O = f(b(t.errors, n), _.argA, _.argB);
        g && M(t.errors, n, O), It(t.errors, n);
      }
      if (k.touchedFields && v && Array.isArray(b(t.touchedFields, n))) {
        const O = f(b(t.touchedFields, n), _.argA, _.argB);
        g && M(t.touchedFields, n, O);
      }
      k.dirtyFields && (t.dirtyFields = Nr(c, d)), E.state.next({
        name: n,
        isDirty: D(n, l),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      M(d, n, l);
  }, B = (n, l) => {
    M(t.errors, n, l), E.state.next({
      errors: t.errors
    });
  }, Ee = (n) => {
    t.errors = n, E.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, se = (n, l, f, _) => {
    const g = b(o, n);
    if (g) {
      const v = b(d, n, z(f) ? b(c, n) : f);
      z(v) || _ && _.defaultChecked || l ? M(d, n, l ? v : $r(g._f)) : Z(n, v), x.mount && h();
    }
  }, he = (n, l, f, _, g) => {
    let v = !1, O = !1;
    const j = {
      name: n
    }, H = !!(b(o, n) && b(o, n)._f.disabled);
    if (!f || _) {
      k.isDirty && (O = t.isDirty, t.isDirty = j.isDirty = D(), v = O !== j.isDirty);
      const re = H || We(b(c, n), l);
      O = !!(!H && b(t.dirtyFields, n)), re || H ? Q(t.dirtyFields, n) : M(t.dirtyFields, n, !0), j.dirtyFields = t.dirtyFields, v = v || k.dirtyFields && O !== !re;
    }
    if (f) {
      const re = b(t.touchedFields, n);
      re || (M(t.touchedFields, n, f), j.touchedFields = t.touchedFields, v = v || k.touchedFields && re !== f);
    }
    return v && g && E.state.next(j), v ? j : {};
  }, N = (n, l, f, _) => {
    const g = b(t.errors, n), v = k.isValid && pe(l) && t.isValid !== l;
    if (r.delayError && f ? (A = G(() => B(n, f)), A(r.delayError)) : (clearTimeout(R), A = null, f ? M(t.errors, n, f) : Q(t.errors, n)), (f ? !We(g, f) : g) || !ve(_) || v) {
      const O = {
        ..._,
        ...v && pe(l) ? { isValid: l } : {},
        errors: t.errors,
        name: n
      };
      t = {
        ...t,
        ...O
      }, E.state.next(O);
    }
    X(!1);
  }, q = async (n) => s.resolver(d, s.context, Lt(n || p.mount, o, s.criteriaMode, s.shouldUseNativeValidation)), Ve = async (n) => {
    const { errors: l } = await q(n);
    if (n)
      for (const f of n) {
        const _ = b(l, f);
        _ ? M(t.errors, f, _) : Q(t.errors, f);
      }
    else
      t.errors = l;
    return l;
  }, V = async (n, l, f = {
    valid: !0
  }) => {
    for (const _ in n) {
      const g = n[_];
      if (g) {
        const { _f: v, ...O } = g;
        if (v) {
          const j = p.array.has(v.name), H = await rt(g, d, Se, s.shouldUseNativeValidation && !l, j);
          if (H[v.name] && (f.valid = !1, l))
            break;
          !l && (b(H, v.name) ? j ? Vt(t.errors, H, v.name) : M(t.errors, v.name, H[v.name]) : Q(t.errors, v.name));
        }
        O && await V(O, l, f);
      }
    }
    return f.valid;
  }, T = () => {
    for (const n of p.unMount) {
      const l = b(o, n);
      l && (l._f.refs ? l._f.refs.every((f) => !Lr(f)) : !Lr(l._f.ref)) && ie(n);
    }
    p.unMount = /* @__PURE__ */ new Set();
  }, D = (n, l) => (n && l && M(d, n, l), !We(Pe(), c)), I = (n, l, f) => ft(n, p, {
    ...x.mount ? d : z(l) ? c : Oe(n) ? { [n]: l } : l
  }, f, l), ee = (n) => gr(b(x.mount ? d : c, n, r.shouldUnregister ? b(c, n, []) : [])), Z = (n, l, f = {}) => {
    const _ = b(o, n);
    let g = l;
    if (_) {
      const v = _._f;
      v && (!v.disabled && M(d, n, bt(l, v)), g = Sr(v.ref) && ne(l) ? "" : l, pt(v.ref) ? [...v.ref.options].forEach((O) => O.selected = g.includes(O.value)) : v.refs ? pr(v.ref) ? v.refs.length > 1 ? v.refs.forEach((O) => (!O.defaultChecked || !O.disabled) && (O.checked = Array.isArray(g) ? !!g.find((j) => j === O.value) : g === O.value)) : v.refs[0] && (v.refs[0].checked = !!g) : v.refs.forEach((O) => O.checked = O.value === g) : qr(v.ref) ? v.ref.value = "" : (v.ref.value = g, v.ref.type || E.values.next({
        name: n,
        values: { ...d }
      })));
    }
    (f.shouldDirty || f.shouldTouch) && he(n, g, f.shouldTouch, f.shouldDirty, !0), f.shouldValidate && Fe(n);
  }, be = (n, l, f) => {
    for (const _ in l) {
      const g = l[_], v = `${n}.${_}`, O = b(o, v);
      (p.array.has(n) || !wr(g) || O && !O._f) && !Ze(g) ? be(v, g, f) : Z(v, g, f);
    }
  }, ae = (n, l, f = {}) => {
    const _ = b(o, n), g = p.array.has(n), v = me(l);
    M(d, n, v), g ? (E.array.next({
      name: n,
      values: { ...d }
    }), (k.isDirty || k.dirtyFields) && f.shouldDirty && E.state.next({
      name: n,
      dirtyFields: Nr(c, d),
      isDirty: D(n, v)
    })) : _ && !_._f && !ne(v) ? be(n, v, f) : Z(n, v, f), Kr(n, p) && E.state.next({ ...t }), E.values.next({
      name: n,
      values: { ...d }
    }), !x.mount && i();
  }, we = async (n) => {
    const l = n.target;
    let f = l.name, _ = !0;
    const g = b(o, f), v = () => l.type ? $r(g._f) : it(n), O = (j) => {
      _ = Number.isNaN(j) || j === b(d, f, j);
    };
    if (g) {
      let j, H;
      const re = v(), de = n.type === _r.BLUR || n.type === _r.FOCUS_OUT, Ce = !Nt(g._f) && !s.resolver && !b(t.errors, f) && !g._f.deps || $t(de, b(t.touchedFields, f), t.isSubmitted, ge, Y), Ne = Kr(f, p, de);
      M(d, f, re), de ? (g._f.onBlur && g._f.onBlur(n), A && A(0)) : g._f.onChange && g._f.onChange(n);
      const $e = he(f, re, de, !1), rr = !ve($e) || Ne;
      if (!de && E.values.next({
        name: f,
        type: n.type,
        values: { ...d }
      }), Ce)
        return k.isValid && h(), rr && E.state.next({ name: f, ...Ne ? {} : $e });
      if (!de && Ne && E.state.next({ ...t }), X(!0), s.resolver) {
        const { errors: Ge } = await q([f]);
        if (O(re), _) {
          const tr = tt(t.errors, o, f), Je = tt(Ge, o, tr.name || f);
          j = Je.error, f = Je.name, H = ve(Ge);
        }
      } else
        j = (await rt(g, d, Se, s.shouldUseNativeValidation))[f], O(re), _ && (j ? H = !1 : k.isValid && (H = await V(o, !0)));
      _ && (g._f.deps && Fe(g._f.deps), N(f, H, j, $e));
    }
  }, De = (n, l) => {
    if (b(t.errors, l) && n.focus)
      return n.focus(), 1;
  }, Fe = async (n, l = {}) => {
    let f, _;
    const g = br(n);
    if (X(!0), s.resolver) {
      const v = await Ve(z(n) ? n : g);
      f = ve(v), _ = n ? !g.some((O) => b(v, O)) : f;
    } else
      n ? (_ = (await Promise.all(g.map(async (v) => {
        const O = b(o, v);
        return await V(O && O._f ? { [v]: O } : O);
      }))).every(Boolean), !(!_ && !t.isValid) && h()) : _ = f = await V(o);
    return E.state.next({
      ...!Oe(n) || k.isValid && f !== t.isValid ? {} : { name: n },
      ...s.resolver || !n ? { isValid: f } : {},
      errors: t.errors,
      isValidating: !1
    }), l.shouldFocus && !_ && vr(o, De, n ? g : p.mount), _;
  }, Pe = (n) => {
    const l = {
      ...c,
      ...x.mount ? d : {}
    };
    return z(n) ? l : Oe(n) ? b(l, n) : n.map((f) => b(l, f));
  }, Be = (n, l) => ({
    invalid: !!b((l || t).errors, n),
    isDirty: !!b((l || t).dirtyFields, n),
    isTouched: !!b((l || t).touchedFields, n),
    error: b((l || t).errors, n)
  }), Qe = (n) => {
    n && br(n).forEach((l) => Q(t.errors, l)), E.state.next({
      errors: n ? t.errors : {}
    });
  }, xe = (n, l, f) => {
    const _ = (b(o, n, { _f: {} })._f || {}).ref;
    M(t.errors, n, {
      ...l,
      ref: _
    }), E.state.next({
      name: n,
      errors: t.errors,
      isValid: !1
    }), f && f.shouldFocus && _ && _.focus && _.focus();
  }, Te = (n, l) => je(n) ? E.values.subscribe({
    next: (f) => n(I(void 0, l), f)
  }) : I(n, l, !0), ie = (n, l = {}) => {
    for (const f of n ? br(n) : p.mount)
      p.mount.delete(f), p.array.delete(f), l.keepValue || (Q(o, f), Q(d, f)), !l.keepError && Q(t.errors, f), !l.keepDirty && Q(t.dirtyFields, f), !l.keepTouched && Q(t.touchedFields, f), !s.shouldUnregister && !l.keepDefaultValue && Q(c, f);
    E.values.next({
      values: { ...d }
    }), E.state.next({
      ...t,
      ...l.keepDirty ? { isDirty: D() } : {}
    }), !l.keepIsValid && h();
  }, Re = ({ disabled: n, name: l, field: f, fields: _, value: g }) => {
    if (pe(n)) {
      const v = n ? void 0 : z(g) ? $r(f ? f._f : b(_, l)._f) : g;
      M(d, l, v), he(l, v, !1, !1, !0);
    }
  }, oe = (n, l = {}) => {
    let f = b(o, n);
    const _ = pe(l.disabled);
    return M(o, n, {
      ...f || {},
      _f: {
        ...f && f._f ? f._f : { ref: { name: n } },
        name: n,
        mount: !0,
        ...l
      }
    }), p.mount.add(n), f ? Re({
      field: f,
      disabled: l.disabled,
      name: n,
      value: l.value
    }) : se(n, !0, l.value), {
      ..._ ? { disabled: l.disabled } : {},
      ...s.progressive ? {
        required: !!l.required,
        min: dr(l.min),
        max: dr(l.max),
        minLength: dr(l.minLength),
        maxLength: dr(l.maxLength),
        pattern: dr(l.pattern)
      } : {},
      name: n,
      onChange: we,
      onBlur: we,
      ref: (g) => {
        if (g) {
          oe(n, l), f = b(o, n);
          const v = z(g.value) && g.querySelectorAll && g.querySelectorAll("input,select,textarea")[0] || g, O = jt(v), j = f._f.refs || [];
          if (O ? j.find((H) => H === v) : v === f._f.ref)
            return;
          M(o, n, {
            _f: {
              ...f._f,
              ...O ? {
                refs: [
                  ...j.filter(Lr),
                  v,
                  ...Array.isArray(b(c, n)) ? [{}] : []
                ],
                ref: { type: v.type, name: n }
              } : { ref: v }
            }
          }), se(n, !1, void 0, v);
        } else
          f = b(o, n, {}), f._f && (f._f.mount = !1), (s.shouldUnregister || l.shouldUnregister) && !(ot(p.array, n) && x.action) && p.unMount.add(n);
      }
    };
  }, Ye = () => s.shouldFocusError && vr(o, De, p.mount), Le = (n) => {
    pe(n) && (E.state.next({ disabled: n }), vr(o, (l, f) => {
      let _ = n;
      const g = b(o, f);
      g && pe(g._f.disabled) && (_ || (_ = g._f.disabled)), l.disabled = _;
    }, 0, !1));
  }, qe = (n, l) => async (f) => {
    f && (f.preventDefault && f.preventDefault(), f.persist && f.persist());
    let _ = me(d);
    if (E.state.next({
      isSubmitting: !0
    }), s.resolver) {
      const { errors: g, values: v } = await q();
      t.errors = g, _ = v;
    } else
      await V(o);
    Q(t.errors, "root"), ve(t.errors) ? (E.state.next({
      errors: {}
    }), await n(_, f)) : (l && await l({ ...t.errors }, f), Ye(), setTimeout(Ye)), E.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: ve(t.errors),
      submitCount: t.submitCount + 1,
      errors: t.errors
    });
  }, er = (n, l = {}) => {
    b(o, n) && (z(l.defaultValue) ? ae(n, b(c, n)) : (ae(n, l.defaultValue), M(c, n, l.defaultValue)), l.keepTouched || Q(t.touchedFields, n), l.keepDirty || (Q(t.dirtyFields, n), t.isDirty = l.defaultValue ? D(n, b(c, n)) : D()), l.keepError || (Q(t.errors, n), k.isValid && h()), E.state.next({ ...t }));
  }, ce = (n, l = {}) => {
    const f = n ? me(n) : c, _ = me(f), g = n && !ve(n) ? _ : c;
    if (l.keepDefaultValues || (c = f), !l.keepValues) {
      if (l.keepDirtyValues || U)
        for (const v of p.mount)
          b(t.dirtyFields, v) ? M(g, v, b(d, v)) : ae(v, b(g, v));
      else {
        if (Mr && z(n))
          for (const v of p.mount) {
            const O = b(o, v);
            if (O && O._f) {
              const j = Array.isArray(O._f.refs) ? O._f.refs[0] : O._f.ref;
              if (Sr(j)) {
                const H = j.closest("form");
                if (H) {
                  H.reset();
                  break;
                }
              }
            }
          }
        o = {};
      }
      d = r.shouldUnregister ? l.keepDefaultValues ? me(c) : {} : me(g), E.array.next({
        values: { ...g }
      }), E.values.next({
        values: { ...g }
      });
    }
    p = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !x.mount && i(), x.mount = !k.isValid || !!l.keepIsValid, x.watch = !!r.shouldUnregister, E.state.next({
      submitCount: l.keepSubmitCount ? t.submitCount : 0,
      isDirty: l.keepDirty ? t.isDirty : !!(l.keepDefaultValues && !We(n, c)),
      isSubmitted: l.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: l.keepDirtyValues ? t.dirtyFields : l.keepDefaultValues && n ? Nr(c, n) : {},
      touchedFields: l.keepTouched ? t.touchedFields : {},
      errors: l.keepErrors ? t.errors : {},
      isSubmitSuccessful: l.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, fe = (n, l) => ce(je(n) ? n(d) : n, l);
  return {
    control: {
      register: oe,
      unregister: ie,
      getFieldState: Be,
      handleSubmit: qe,
      setError: xe,
      _executeSchema: q,
      _getWatch: I,
      _getDirty: D,
      _updateValid: h,
      _removeUnmounted: T,
      _updateFieldArray: te,
      _updateDisabledField: Re,
      _getFieldArray: ee,
      _reset: ce,
      _resetDefaultValues: () => je(s.defaultValues) && s.defaultValues().then((n) => {
        fe(n, s.resetOptions), E.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (n) => {
        t = {
          ...t,
          ...n
        };
      },
      _disableForm: Le,
      _subjects: E,
      _proxyFormState: k,
      _setErrors: Ee,
      get _fields() {
        return o;
      },
      get _formValues() {
        return d;
      },
      get _state() {
        return x;
      },
      set _state(n) {
        x = n;
      },
      get _defaultValues() {
        return c;
      },
      get _names() {
        return p;
      },
      set _names(n) {
        p = n;
      },
      get _formState() {
        return t;
      },
      set _formState(n) {
        t = n;
      },
      get _options() {
        return s;
      },
      set _options(n) {
        s = {
          ...s,
          ...n
        };
      }
    },
    trigger: Fe,
    register: oe,
    handleSubmit: qe,
    watch: Te,
    setValue: ae,
    getValues: Pe,
    reset: fe,
    resetField: er,
    clearErrors: Qe,
    unregister: ie,
    setError: xe,
    setFocus: (n, l = {}) => {
      const f = b(o, n), _ = f && f._f;
      if (_) {
        const g = _.refs ? _.refs[0] : _.ref;
        g.focus && (g.focus(), l.shouldSelect && g.select());
      }
    },
    getFieldState: Be
  };
}
function Wt(r = {}) {
  const i = $.useRef(), s = $.useRef(), [t, o] = $.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: je(r.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: r.errors || {},
    disabled: !1,
    defaultValues: je(r.defaultValues) ? void 0 : r.defaultValues
  });
  i.current || (i.current = {
    ...Mt(r, () => o((d) => ({ ...d }))),
    formState: t
  });
  const c = i.current.control;
  return c._options = r, Br({
    subject: c._subjects.state,
    next: (d) => {
      lt(d, c._proxyFormState, c._updateFormState, !0) && o({ ...c._formState });
    }
  }), $.useEffect(() => c._disableForm(r.disabled), [c, r.disabled]), $.useEffect(() => {
    if (c._proxyFormState.isDirty) {
      const d = c._getDirty();
      d !== t.isDirty && c._subjects.state.next({
        isDirty: d
      });
    }
  }, [c, t.isDirty]), $.useEffect(() => {
    r.values && !We(r.values, s.current) ? (c._reset(r.values, c._options.resetOptions), s.current = r.values, o((d) => ({ ...d }))) : c._resetDefaultValues();
  }, [r.values, c]), $.useEffect(() => {
    r.errors && c._setErrors(r.errors);
  }, [r.errors, c]), $.useEffect(() => {
    c._state.mount || (c._updateValid(), c._state.mount = !0), c._state.watch && (c._state.watch = !1, c._subjects.state.next({ ...c._formState })), c._removeUnmounted();
  }), i.current.formState = ut(t, c), i.current;
}
var Ur = { exports: {} }, hr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function Bt() {
  return nt || (nt = 1, process.env.NODE_ENV !== "production" && function() {
    var r = $, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), x = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), Y = Symbol.iterator, ge = "@@iterator";
    function Se(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = Y && e[Y] || e[ge];
      return typeof a == "function" ? a : null;
    }
    var G = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          u[y - 1] = arguments[y];
        X("error", e, u);
      }
    }
    function X(e, a, u) {
      {
        var y = G.ReactDebugCurrentFrame, w = y.getStackAddendum();
        w !== "" && (a += "%s", u = u.concat([w]));
        var F = u.map(function(S) {
          return String(S);
        });
        F.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, F);
      }
    }
    var te = !1, B = !1, Ee = !1, se = !1, he = !1, N;
    N = Symbol.for("react.module.reference");
    function q(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === t || e === c || he || e === o || e === A || e === R || se || e === U || te || B || Ee || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === k || e.$$typeof === d || e.$$typeof === x || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === N || e.getModuleId !== void 0));
    }
    function Ve(e, a, u) {
      var y = e.displayName;
      if (y)
        return y;
      var w = a.displayName || a.name || "";
      return w !== "" ? u + "(" + w + ")" : u;
    }
    function V(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case t:
          return "Fragment";
        case s:
          return "Portal";
        case c:
          return "Profiler";
        case o:
          return "StrictMode";
        case A:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var a = e;
            return V(a) + ".Consumer";
          case d:
            var u = e;
            return V(u._context) + ".Provider";
          case p:
            return Ve(e, e.render, "ForwardRef");
          case k:
            var y = e.displayName || null;
            return y !== null ? y : T(e.type) || "Memo";
          case E: {
            var w = e, F = w._payload, S = w._init;
            try {
              return T(S(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, I = 0, ee, Z, be, ae, we, De, Fe;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function Be() {
      {
        if (I === 0) {
          ee = console.log, Z = console.info, be = console.warn, ae = console.error, we = console.group, De = console.groupCollapsed, Fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Qe() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ee
            }),
            info: D({}, e, {
              value: Z
            }),
            warn: D({}, e, {
              value: be
            }),
            error: D({}, e, {
              value: ae
            }),
            group: D({}, e, {
              value: we
            }),
            groupCollapsed: D({}, e, {
              value: De
            }),
            groupEnd: D({}, e, {
              value: Fe
            })
          });
        }
        I < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = G.ReactCurrentDispatcher, Te;
    function ie(e, a, u) {
      {
        if (Te === void 0)
          try {
            throw Error();
          } catch (w) {
            var y = w.stack.trim().match(/\n( *(at )?)/);
            Te = y && y[1] || "";
          }
        return `
` + Te + e;
      }
    }
    var Re = !1, oe;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new Ye();
    }
    function Le(e, a) {
      if (!e || Re)
        return "";
      {
        var u = oe.get(e);
        if (u !== void 0)
          return u;
      }
      var y;
      Re = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = xe.current, xe.current = null, Be();
      try {
        if (a) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (J) {
              y = J;
            }
            Reflect.construct(e, [], S);
          } else {
            try {
              S.call();
            } catch (J) {
              y = J;
            }
            e.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            y = J;
          }
          e();
        }
      } catch (J) {
        if (J && y && typeof J.stack == "string") {
          for (var m = J.stack.split(`
`), L = y.stack.split(`
`), C = m.length - 1, P = L.length - 1; C >= 1 && P >= 0 && m[C] !== L[P]; )
            P--;
          for (; C >= 1 && P >= 0; C--, P--)
            if (m[C] !== L[P]) {
              if (C !== 1 || P !== 1)
                do
                  if (C--, P--, P < 0 || m[C] !== L[P]) {
                    var W = `
` + m[C].replace(" at new ", " at ");
                    return e.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", e.displayName)), typeof e == "function" && oe.set(e, W), W;
                  }
                while (C >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        Re = !1, xe.current = F, Qe(), Error.prepareStackTrace = w;
      }
      var le = e ? e.displayName || e.name : "", lr = le ? ie(le) : "";
      return typeof e == "function" && oe.set(e, lr), lr;
    }
    function qe(e, a, u) {
      return Le(e, !1);
    }
    function er(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function ce(e, a, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Le(e, er(e));
      if (typeof e == "string")
        return ie(e);
      switch (e) {
        case A:
          return ie("Suspense");
        case R:
          return ie("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return qe(e.render);
          case k:
            return ce(e.type, a, u);
          case E: {
            var y = e, w = y._payload, F = y._init;
            try {
              return ce(F(w), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, He = {}, ze = G.ReactDebugCurrentFrame;
    function ke(e) {
      if (e) {
        var a = e._owner, u = ce(e.type, e._source, a ? a.type : null);
        ze.setExtraStackFrame(u);
      } else
        ze.setExtraStackFrame(null);
    }
    function n(e, a, u, y, w) {
      {
        var F = Function.call.bind(fe);
        for (var S in e)
          if (F(e, S)) {
            var m = void 0;
            try {
              if (typeof e[S] != "function") {
                var L = Error((y || "React class") + ": " + u + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              m = e[S](a, S, y, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              m = C;
            }
            m && !(m instanceof Error) && (ke(w), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", u, S, typeof m), ke(null)), m instanceof Error && !(m.message in He) && (He[m.message] = !0, ke(w), h("Failed %s type: %s", u, m.message), ke(null));
          }
      }
    }
    var l = Array.isArray;
    function f(e) {
      return l(e);
    }
    function _(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, u = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function g(e) {
      try {
        return v(e), !1;
      } catch {
        return !0;
      }
    }
    function v(e) {
      return "" + e;
    }
    function O(e) {
      if (g(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _(e)), v(e);
    }
    var j = G.ReactCurrentOwner, H = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, re, de, Ce;
    Ce = {};
    function Ne(e) {
      if (fe.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function $e(e) {
      if (fe.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, a) {
      if (typeof e.ref == "string" && j.current && a && j.current.stateNode !== a) {
        var u = T(j.current.type);
        Ce[u] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(j.current.type), e.ref), Ce[u] = !0);
      }
    }
    function Ge(e, a) {
      {
        var u = function() {
          re || (re = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function tr(e, a) {
      {
        var u = function() {
          de || (de = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Je = function(e, a, u, y, w, F, S) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: u,
        props: S,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Rr(e, a, u, y, w) {
      {
        var F, S = {}, m = null, L = null;
        u !== void 0 && (O(u), m = "" + u), $e(a) && (O(a.key), m = "" + a.key), Ne(a) && (L = a.ref, rr(a, w));
        for (F in a)
          fe.call(a, F) && !H.hasOwnProperty(F) && (S[F] = a[F]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (F in C)
            S[F] === void 0 && (S[F] = C[F]);
        }
        if (m || L) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Ge(S, P), L && tr(S, P);
        }
        return Je(e, m, L, w, y, j.current, S);
      }
    }
    var Ie = G.ReactCurrentOwner, nr = G.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var a = e._owner, u = ce(e.type, e._source, a ? a.type : null);
        nr.setExtraStackFrame(u);
      } else
        nr.setExtraStackFrame(null);
    }
    var Ue;
    Ue = !1;
    function Me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function sr() {
      {
        if (Ie.current) {
          var e = T(Ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function kr(e) {
      {
        if (e !== void 0) {
          var a = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + a + ":" + u + ".";
        }
        return "";
      }
    }
    var ar = {};
    function Or(e) {
      {
        var a = sr();
        if (!a) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (a = `

Check the top-level render call using <` + u + ">.");
        }
        return a;
      }
    }
    function ir(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Or(a);
        if (ar[u])
          return;
        ar[u] = !0;
        var y = "";
        e && e._owner && e._owner !== Ie.current && (y = " It was passed a child from " + T(e._owner.type) + "."), ue(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, y), ue(null);
      }
    }
    function or(e, a) {
      {
        if (typeof e != "object")
          return;
        if (f(e))
          for (var u = 0; u < e.length; u++) {
            var y = e[u];
            Me(y) && ir(y, a);
          }
        else if (Me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = Se(e);
          if (typeof w == "function" && w !== e.entries)
            for (var F = w.call(e), S; !(S = F.next()).done; )
              Me(S.value) && ir(S.value, a);
        }
      }
    }
    function Fr(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var u;
        if (typeof a == "function")
          u = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === k))
          u = a.propTypes;
        else
          return;
        if (u) {
          var y = T(a);
          n(u, e.props, "prop", y, e);
        } else if (a.PropTypes !== void 0 && !Ue) {
          Ue = !0;
          var w = T(a);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tr(e) {
      {
        for (var a = Object.keys(e.props), u = 0; u < a.length; u++) {
          var y = a[u];
          if (y !== "children" && y !== "key") {
            ue(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), ue(null);
            break;
          }
        }
        e.ref !== null && (ue(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    function ur(e, a, u, y, w, F) {
      {
        var S = q(e);
        if (!S) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = kr(w);
          L ? m += L : m += sr();
          var C;
          e === null ? C = "null" : f(e) ? C = "array" : e !== void 0 && e.$$typeof === i ? (C = "<" + (T(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, m);
        }
        var P = Rr(e, a, u, w, F);
        if (P == null)
          return P;
        if (S) {
          var W = a.children;
          if (W !== void 0)
            if (y)
              if (f(W)) {
                for (var le = 0; le < W.length; le++)
                  or(W[le], e);
                Object.freeze && Object.freeze(W);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(W, e);
        }
        return e === t ? Tr(P) : Fr(P), P;
      }
    }
    function Cr(e, a, u) {
      return ur(e, a, u, !0);
    }
    function Ar(e, a, u) {
      return ur(e, a, u, !1);
    }
    var Vr = Ar, Dr = Cr;
    hr.Fragment = t, hr.jsx = Vr, hr.jsxs = Dr;
  }()), hr;
}
var yr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function Yt() {
  if (st)
    return yr;
  st = 1;
  var r = $, i = Symbol.for("react.element"), s = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(x, p, A) {
    var R, k = {}, E = null, U = null;
    A !== void 0 && (E = "" + A), p.key !== void 0 && (E = "" + p.key), p.ref !== void 0 && (U = p.ref);
    for (R in p)
      t.call(p, R) && !c.hasOwnProperty(R) && (k[R] = p[R]);
    if (x && x.defaultProps)
      for (R in p = x.defaultProps, p)
        k[R] === void 0 && (k[R] = p[R]);
    return { $$typeof: i, type: x, key: E, ref: U, props: k, _owner: o.current };
  }
  return yr.Fragment = s, yr.jsx = d, yr.jsxs = d, yr;
}
process.env.NODE_ENV === "production" ? Ur.exports = Yt() : Ur.exports = Bt();
var ye = Ur.exports;
const qt = ({
  pattern: r,
  text: i,
  classes: s
}) => {
  if (!r)
    return i;
  const t = i.toLowerCase().indexOf(r.toLowerCase()), o = t + r.length;
  if (t === -1)
    return i;
  const c = i.slice(0, t), d = i.slice(t, o), x = i.slice(o);
  return /* @__PURE__ */ ye.jsxs(ye.Fragment, { children: [
    c,
    /* @__PURE__ */ ye.jsx("span", { className: s == null ? void 0 : s.highlighted, children: d }),
    x
  ] });
}, Ht = ({
  fetchSuggestions: r,
  onSelection: i,
  debounceTime: s = 300,
  classes: t,
  defaultValue: o = "",
  loadingComponent: c = /* @__PURE__ */ ye.jsx("span", { children: "Loading..." }),
  noSuggestionsComponent: d = /* @__PURE__ */ ye.jsx("span", { children: "No matches found" }),
  allowStrictSelection: x = !0
}) => {
  const [p, A] = Ke(o), [R, k] = Ke([]), [E, U] = Ke(-1), [Y, ge] = Ke(!1), [Se, G] = Ke(!1), [h, X] = Ke(!1), te = mt(null);
  _t(() => {
    const N = setTimeout(() => {
      p && Se ? (X(!0), (async () => {
        const q = await r(p);
        k(q), X(!1);
      })(), ge(!0)) : (k([]), ge(!1));
    }, s);
    return () => {
      clearTimeout(N), G(!0);
    };
  }, [p, r, s]);
  const B = (N) => {
    N.key === "ArrowDown" && E < R.length - 1 ? U(E + 1) : N.key === "ArrowUp" && E > 0 ? U(E - 1) : N.key === "Enter" && (N.preventDefault(), x || E > -1 ? se(R[E]) : se(p));
  }, Ee = (N) => {
    se(R[N]);
  }, se = (N) => {
    i(N), A(N), G(!1), k([]), ge(!1), U(-1);
  }, he = Y && (h && c || !h && R.length === 0 && d || !h && R.length > 0);
  return /* @__PURE__ */ ye.jsxs("div", { className: `suggestive-input--root ${t == null ? void 0 : t.root}`, children: [
    /* @__PURE__ */ ye.jsx(
      "input",
      {
        type: "text",
        ref: te,
        className: `suggestive-input--input ${t == null ? void 0 : t.input}`,
        value: p,
        onChange: (N) => A(N.target.value),
        onKeyDown: B,
        "aria-autocomplete": "list",
        "aria-controls": "suggestions",
        "aria-activedescendant": `suggestion-${E}`
      }
    ),
    he && /* @__PURE__ */ ye.jsxs(
      "ul",
      {
        id: "suggestions",
        role: "listbox",
        className: `suggestive-input--list ${t == null ? void 0 : t.suggestionList}`,
        onMouseLeave: () => U(-1),
        children: [
          h && /* @__PURE__ */ ye.jsx("li", { className: `suggestive-input--loading ${t == null ? void 0 : t.loading}`, children: c }),
          !h && R.length === 0 && /* @__PURE__ */ ye.jsx(
            "li",
            {
              className: `suggestive-input--no-suggestion ${t == null ? void 0 : t.noSuggestions}`,
              children: d
            }
          ),
          !h && R.map((N, q) => /* @__PURE__ */ ye.jsx(
            "li",
            {
              style: { listStyle: "none" },
              id: `suggestion-${q}`,
              role: "option",
              "aria-selected": q === E,
              className: `suggestive-input--item ${t == null ? void 0 : t.suggestionItem} ${q === E ? `suggestive-input-item--active ${t == null ? void 0 : t.activeSuggestion}` : ""}`,
              onMouseDown: () => Ee(q),
              onMouseEnter: () => U(q),
              children: /* @__PURE__ */ ye.jsx(
                qt,
                {
                  pattern: p,
                  text: N,
                  classes: {
                    highlighted: `suggestive-input--highlighted ${t == null ? void 0 : t.highlighted}`
                  }
                }
              )
            },
            N
          ))
        ]
      }
    )
  ] });
}, Jt = ({
  fieldProps: r
}) => {
  const {
    onResultClick: i,
    suggestionsTypes: s = ["(cities)"],
    onSubmit: t
  } = r, o = async (p) => {
    const A = await wt.placeSuggest(
      p,
      s
    );
    return A ? A.map((k) => k == null ? void 0 : k.description) : [];
  }, { control: c, handleSubmit: d } = Wt({
    defaultValues: {
      "place-suggestion": ""
    }
  }), x = () => {
    if (t)
      d(t);
    else
      return;
  };
  return /* @__PURE__ */ Pr.jsx("form", { onSubmit: x, children: /* @__PURE__ */ Pr.jsx(
    Ct,
    {
      name: "place-suggestion",
      control: c,
      render: ({ field: p }) => /* @__PURE__ */ Pr.jsx(
        Ht,
        {
          fetchSuggestions: o,
          onSelection: i,
          debounceTime: 300,
          defaultValue: p.value
        }
      )
    }
  ) });
};
export {
  Jt as GoogleLocationSuggest
};
