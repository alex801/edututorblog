/*! For license information please see react-bootstrap.min.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("react"), require("react-dom")))
    : "function" == typeof define && define.amd
    ? define(["react", "react-dom"], t)
    : "object" == typeof exports
    ? (exports.ReactBootstrap = t(require("react"), require("react-dom")))
    : (e.ReactBootstrap = t(e.React, e.ReactDOM));
})(self, function (e, t) {
  return (() => {
    var n = {
        814: (e, t) => {
          var n;
          !(function () {
            "use strict";
            var r = {}.hasOwnProperty;
            function o() {
              for (var e = [], t = 0; t < arguments.length; t++) {
                var n = arguments[t];
                if (n) {
                  var a = typeof n;
                  if ("string" === a || "number" === a) e.push(n);
                  else if (Array.isArray(n)) {
                    if (n.length) {
                      var s = o.apply(null, n);
                      s && e.push(s);
                    }
                  } else if ("object" === a)
                    if (n.toString === Object.prototype.toString)
                      for (var i in n) r.call(n, i) && n[i] && e.push(i);
                    else e.push(n.toString());
                }
              }
              return e.join(" ");
            }
            e.exports
              ? ((o.default = o), (e.exports = o))
              : void 0 ===
                  (n = function () {
                    return o;
                  }.apply(t, [])) || (e.exports = n);
          })();
        },
        286: (e) => {
          "use strict";
          e.exports = function (e, t, n, r, o, a, s, i) {
            if (!e) {
              var l;
              if (void 0 === t)
                l = new Error(
                  "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                );
              else {
                var c = [n, r, o, a, s, i],
                  u = 0;
                (l = new Error(
                  t.replace(/%s/g, function () {
                    return c[u++];
                  })
                )).name = "Invariant Violation";
              }
              throw ((l.framesToPop = 1), l);
            }
          };
        },
        946: (e, t, n) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              function r() {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
                var o = null;
                return (
                  t.forEach(function (e) {
                    if (null == o) {
                      var t = e.apply(void 0, n);
                      null != t && (o = t);
                    }
                  }),
                  o
                );
              }
              return (0, o.default)(r);
            });
          var r,
            o = (r = n(844)) && r.__esModule ? r : { default: r };
          e.exports = t.default;
        },
        844: (e, t) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function (e) {
              function t(t, n, r, o, a, s) {
                var i = o || "<<anonymous>>",
                  l = s || r;
                if (null == n[r])
                  return t
                    ? new Error(
                        "Required " +
                          a +
                          " `" +
                          l +
                          "` was not specified in `" +
                          i +
                          "`."
                      )
                    : null;
                for (
                  var c = arguments.length, u = Array(c > 6 ? c - 6 : 0), d = 6;
                  d < c;
                  d++
                )
                  u[d - 6] = arguments[d];
                return e.apply(void 0, [n, r, i, a, l].concat(u));
              }
              var n = t.bind(null, !1);
              return (n.isRequired = t.bind(null, !0)), n;
            }),
            (e.exports = t.default);
        },
        428: (e, t, n) => {
          "use strict";
          var r = n(134);
          function o() {}
          function a() {}
          (a.resetWarningCache = o),
            (e.exports = function () {
              function e(e, t, n, o, a, s) {
                if (s !== r) {
                  var i = new Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                  );
                  throw ((i.name = "Invariant Violation"), i);
                }
              }
              function t() {
                return e;
              }
              e.isRequired = e;
              var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: a,
                resetWarningCache: o,
              };
              return (n.PropTypes = n), n;
            });
        },
        526: (e, t, n) => {
          e.exports = n(428)();
        },
        134: (e) => {
          "use strict";
          e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        356: (e, t, n) => {
          "use strict";
          var r = n(787),
            o = 60103;
          if (
            ((t.Fragment = 60107), "function" == typeof Symbol && Symbol.for)
          ) {
            var a = Symbol.for;
            (o = a("react.element")), (t.Fragment = a("react.fragment"));
          }
          var s =
              r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
            i = Object.prototype.hasOwnProperty,
            l = { key: !0, ref: !0, __self: !0, __source: !0 };
          function c(e, t, n) {
            var r,
              a = {},
              c = null,
              u = null;
            for (r in (void 0 !== n && (c = "" + n),
            void 0 !== t.key && (c = "" + t.key),
            void 0 !== t.ref && (u = t.ref),
            t))
              i.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
            if (e && e.defaultProps)
              for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
            return {
              $$typeof: o,
              type: e,
              key: c,
              ref: u,
              props: a,
              _owner: s.current,
            };
          }
          (t.jsx = c), (t.jsxs = c);
        },
        373: (e, t, n) => {
          "use strict";
          e.exports = n(356);
        },
        459: (e) => {
          "use strict";
          e.exports = function () {};
        },
        787: (t) => {
          "use strict";
          t.exports = e;
        },
        156: (e) => {
          "use strict";
          e.exports = t;
        },
      },
      r = {};
    function o(e) {
      var t = r[e];
      if (void 0 !== t) return t.exports;
      var a = (r[e] = { exports: {} });
      return n[e](a, a.exports, o), a.exports;
    }
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
      (o.d = (e, t) => {
        for (var n in t)
          o.o(t, n) &&
            !o.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (o.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (o.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var a = {};
    return (
      (() => {
        "use strict";
        o.r(a),
          o.d(a, {
            Accordion: () => je,
            AccordionButton: () => xe,
            AccordionCollapse: () => fe,
            AccordionContext: () => ue,
            Alert: () => tt,
            Anchor: () => nt,
            Badge: () => ot,
            Breadcrumb: () => lt,
            BreadcrumbItem: () => st,
            Button: () => ut,
            ButtonGroup: () => ft,
            ButtonToolbar: () => mt,
            Card: () => $t,
            CardGroup: () => St,
            CardImg: () => ht,
            Carousel: () => zt,
            CarouselItem: () => Ft,
            CloseButton: () => Ve,
            Col: () => Gt,
            Collapse: () => le,
            Container: () => Jo,
            Dropdown: () => vo,
            DropdownButton: () => yo,
            Fade: () => _e,
            Figure: () => sa,
            FloatingLabel: () => qo,
            Form: () => Yo,
            FormCheck: () => To,
            FormControl: () => So,
            FormFloating: () => Mo,
            FormGroup: () => Lo,
            FormLabel: () => Bo,
            FormSelect: () => Ho,
            FormText: () => Wo,
            Image: () => ta,
            InputGroup: () => ca,
            ListGroup: () => ja,
            ListGroupItem: () => Na,
            Modal: () => ss,
            ModalBody: () => Ua,
            ModalDialog: () => Xa,
            ModalFooter: () => Ya,
            ModalTitle: () => ts,
            Nav: () => ds,
            NavDropdown: () => Es,
            NavItem: () => is,
            NavLink: () => cs,
            Navbar: () => ys,
            NavbarBrand: () => ps,
            Offcanvas: () => Ms,
            OffcanvasBody: () => Ns,
            OffcanvasHeader: () => ks,
            OffcanvasTitle: () => Rs,
            Overlay: () => Ws,
            OverlayTrigger: () => Us,
            PageItem: () => Gs,
            Pagination: () => ni,
            Placeholder: () => ii,
            PlaceholderButton: () => ai,
            Popover: () => Ks,
            PopoverBody: () => Bs,
            PopoverHeader: () => Ds,
            ProgressBar: () => di,
            Ratio: () => pi,
            Row: () => hi,
            SSRProvider: () => Ei,
            Spinner: () => gi,
            SplitButton: () => wi,
            Stack: () => Oi,
            Tab: () => zi,
            TabContainer: () => Ai,
            TabContent: () => Fi,
            TabPane: () => Hi,
            Table: () => Vi,
            Tabs: () => Xi,
            ThemeProvider: () => y,
            Toast: () => ol,
            ToastBody: () => nl,
            ToastContainer: () => il,
            ToastHeader: () => tl,
            ToggleButton: () => ul,
            ToggleButtonGroup: () => fl,
            Tooltip: () => ml,
            useAccordionButton: () => be,
          });
        var e = o(814),
          t = o.n(e),
          n = o(787),
          r = o.n(n);
        function s() {
          return (s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        function i(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        }
        var l = o(286),
          c = o.n(l);
        function u(e) {
          return "default" + e.charAt(0).toUpperCase() + e.substr(1);
        }
        function d(e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t);
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        }
        function f(e, t, r) {
          var o = (0, n.useRef)(void 0 !== e),
            a = (0, n.useState)(t),
            s = a[0],
            i = a[1],
            l = void 0 !== e,
            c = o.current;
          return (
            (o.current = l),
            !l && c && s !== t && i(t),
            [
              l ? e : s,
              (0, n.useCallback)(
                function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      o = 1;
                    o < t;
                    o++
                  )
                    n[o - 1] = arguments[o];
                  r && r.apply(void 0, [e].concat(n)), i(e);
                },
                [r]
              ),
            ]
          );
        }
        function p(e, t) {
          return Object.keys(t).reduce(function (n, r) {
            var o,
              a = n,
              l = a[u(r)],
              c = a[r],
              p = i(a, [u(r), r].map(d)),
              m = t[r],
              v = f(c, l, e[m]),
              h = v[0],
              b = v[1];
            return s({}, p, (((o = {})[r] = h), (o[m] = b), o));
          }, e);
        }
        var m = o(373);
        const v = n.createContext({ prefixes: {} }),
          { Consumer: h, Provider: b } = v;
        function g(e, t) {
          const { prefixes: r } = (0, n.useContext)(v);
          return e || r[t] || t;
        }
        function x() {
          const { dir: e } = (0, n.useContext)(v);
          return "rtl" === e;
        }
        const y = function ({ prefixes: e = {}, dir: t, children: r }) {
          const o = (0, n.useMemo)(
            () => ({ prefixes: { ...e }, dir: t }),
            [e, t]
          );
          return (0, m.jsx)(b, { value: o, children: r });
        };
        function w(e) {
          return (e && e.ownerDocument) || document;
        }
        var E = /([A-Z])/g,
          N = /^ms-/;
        function C(e) {
          return (function (e) {
            return e.replace(E, "-$1").toLowerCase();
          })(e).replace(N, "-ms-");
        }
        var j =
          /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
        const O = function (e, t) {
          var n = "",
            r = "";
          if ("string" == typeof t)
            return (
              e.style.getPropertyValue(C(t)) ||
              (function (e, t) {
                return (function (e) {
                  var t = w(e);
                  return (t && t.defaultView) || window;
                })(e).getComputedStyle(e, t);
              })(e).getPropertyValue(C(t))
            );
          Object.keys(t).forEach(function (o) {
            var a = t[o];
            a || 0 === a
              ? (function (e) {
                  return !(!e || !j.test(e));
                })(o)
                ? (r += o + "(" + a + ") ")
                : (n += C(o) + ": " + a + ";")
              : e.style.removeProperty(C(o));
          }),
            r && (n += "transform: " + r + ";"),
            (e.style.cssText += ";" + n);
        };
        function P(e, t) {
          return (P =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var k = o(526),
          R = o.n(k),
          T = o(156),
          $ = o.n(T);
        const S = r().createContext(null);
        var M = "unmounted",
          I = "exited",
          L = "entering",
          D = "entered",
          B = "exiting",
          A = (function (e) {
            var t, n;
            function o(t, n) {
              var r;
              r = e.call(this, t, n) || this;
              var o,
                a = n && !n.isMounting ? t.enter : t.appear;
              return (
                (r.appearStatus = null),
                t.in
                  ? a
                    ? ((o = I), (r.appearStatus = L))
                    : (o = D)
                  : (o = t.unmountOnExit || t.mountOnEnter ? M : I),
                (r.state = { status: o }),
                (r.nextCallback = null),
                r
              );
            }
            (n = e),
              ((t = o).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              P(t, n),
              (o.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === M ? { status: I } : null;
              });
            var a = o.prototype;
            return (
              (a.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus);
              }),
              (a.componentDidUpdate = function (e) {
                var t = null;
                if (e !== this.props) {
                  var n = this.state.status;
                  this.props.in
                    ? n !== L && n !== D && (t = L)
                    : (n !== L && n !== D) || (t = B);
                }
                this.updateStatus(!1, t);
              }),
              (a.componentWillUnmount = function () {
                this.cancelNextCallback();
              }),
              (a.getTimeouts = function () {
                var e,
                  t,
                  n,
                  r = this.props.timeout;
                return (
                  (e = t = n = r),
                  null != r &&
                    "number" != typeof r &&
                    ((e = r.exit),
                    (t = r.enter),
                    (n = void 0 !== r.appear ? r.appear : t)),
                  { exit: e, enter: t, appear: n }
                );
              }),
              (a.updateStatus = function (e, t) {
                void 0 === e && (e = !1),
                  null !== t
                    ? (this.cancelNextCallback(),
                      t === L ? this.performEnter(e) : this.performExit())
                    : this.props.unmountOnExit &&
                      this.state.status === I &&
                      this.setState({ status: M });
              }),
              (a.performEnter = function (e) {
                var t = this,
                  n = this.props.enter,
                  r = this.context ? this.context.isMounting : e,
                  o = this.props.nodeRef ? [r] : [$().findDOMNode(this), r],
                  a = o[0],
                  s = o[1],
                  i = this.getTimeouts(),
                  l = r ? i.appear : i.enter;
                e || n
                  ? (this.props.onEnter(a, s),
                    this.safeSetState({ status: L }, function () {
                      t.props.onEntering(a, s),
                        t.onTransitionEnd(l, function () {
                          t.safeSetState({ status: D }, function () {
                            t.props.onEntered(a, s);
                          });
                        });
                    }))
                  : this.safeSetState({ status: D }, function () {
                      t.props.onEntered(a);
                    });
              }),
              (a.performExit = function () {
                var e = this,
                  t = this.props.exit,
                  n = this.getTimeouts(),
                  r = this.props.nodeRef ? void 0 : $().findDOMNode(this);
                t
                  ? (this.props.onExit(r),
                    this.safeSetState({ status: B }, function () {
                      e.props.onExiting(r),
                        e.onTransitionEnd(n.exit, function () {
                          e.safeSetState({ status: I }, function () {
                            e.props.onExited(r);
                          });
                        });
                    }))
                  : this.safeSetState({ status: I }, function () {
                      e.props.onExited(r);
                    });
              }),
              (a.cancelNextCallback = function () {
                null !== this.nextCallback &&
                  (this.nextCallback.cancel(), (this.nextCallback = null));
              }),
              (a.safeSetState = function (e, t) {
                (t = this.setNextCallback(t)), this.setState(e, t);
              }),
              (a.setNextCallback = function (e) {
                var t = this,
                  n = !0;
                return (
                  (this.nextCallback = function (r) {
                    n && ((n = !1), (t.nextCallback = null), e(r));
                  }),
                  (this.nextCallback.cancel = function () {
                    n = !1;
                  }),
                  this.nextCallback
                );
              }),
              (a.onTransitionEnd = function (e, t) {
                this.setNextCallback(t);
                var n = this.props.nodeRef
                    ? this.props.nodeRef.current
                    : $().findDOMNode(this),
                  r = null == e && !this.props.addEndListener;
                if (n && !r) {
                  if (this.props.addEndListener) {
                    var o = this.props.nodeRef
                        ? [this.nextCallback]
                        : [n, this.nextCallback],
                      a = o[0],
                      s = o[1];
                    this.props.addEndListener(a, s);
                  }
                  null != e && setTimeout(this.nextCallback, e);
                } else setTimeout(this.nextCallback, 0);
              }),
              (a.render = function () {
                var e = this.state.status;
                if (e === M) return null;
                var t = this.props,
                  n = t.children,
                  o =
                    (t.in,
                    t.mountOnEnter,
                    t.unmountOnExit,
                    t.appear,
                    t.enter,
                    t.exit,
                    t.timeout,
                    t.addEndListener,
                    t.onEnter,
                    t.onEntering,
                    t.onEntered,
                    t.onExit,
                    t.onExiting,
                    t.onExited,
                    t.nodeRef,
                    i(t, [
                      "children",
                      "in",
                      "mountOnEnter",
                      "unmountOnExit",
                      "appear",
                      "enter",
                      "exit",
                      "timeout",
                      "addEndListener",
                      "onEnter",
                      "onEntering",
                      "onEntered",
                      "onExit",
                      "onExiting",
                      "onExited",
                      "nodeRef",
                    ]));
                return r().createElement(
                  S.Provider,
                  { value: null },
                  "function" == typeof n
                    ? n(e, o)
                    : r().cloneElement(r().Children.only(n), o)
                );
              }),
              o
            );
          })(r().Component);
        function F() {}
        (A.contextType = S),
          (A.propTypes = {}),
          (A.defaultProps = {
            in: !1,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            enter: !0,
            exit: !0,
            onEnter: F,
            onEntering: F,
            onEntered: F,
            onExit: F,
            onExiting: F,
            onExited: F,
          }),
          (A.UNMOUNTED = M),
          (A.EXITED = I),
          (A.ENTERING = L),
          (A.ENTERED = D),
          (A.EXITING = B);
        const K = A,
          H = !(
            "undefined" == typeof window ||
            !window.document ||
            !window.document.createElement
          );
        var _ = !1,
          W = !1;
        try {
          var z = {
            get passive() {
              return (_ = !0);
            },
            get once() {
              return (W = _ = !0);
            },
          };
          H &&
            (window.addEventListener("test", z, z),
            window.removeEventListener("test", z, !0));
        } catch (e) {}
        const V = function (e, t, n, r) {
            if (r && "boolean" != typeof r && !W) {
              var o = r.once,
                a = r.capture,
                s = n;
              !W &&
                o &&
                ((s =
                  n.__once ||
                  function e(r) {
                    this.removeEventListener(t, e, a), n.call(this, r);
                  }),
                (n.__once = s)),
                e.addEventListener(t, s, _ ? r : a);
            }
            e.addEventListener(t, n, r);
          },
          U = function (e, t, n, r) {
            var o = r && "boolean" != typeof r ? r.capture : r;
            e.removeEventListener(t, n, o),
              n.__once && e.removeEventListener(t, n.__once, o);
          },
          q = function (e, t, n, r) {
            return (
              V(e, t, n, r),
              function () {
                U(e, t, n, r);
              }
            );
          };
        function G(e, t, n, r) {
          var o, a;
          null == n &&
            ((a =
              -1 === (o = O(e, "transitionDuration") || "").indexOf("ms")
                ? 1e3
                : 1),
            (n = parseFloat(o) * a || 0));
          var s = (function (e, t, n) {
              void 0 === n && (n = 5);
              var r = !1,
                o = setTimeout(function () {
                  r ||
                    (function (e, t, n, r) {
                      if (
                        (void 0 === n && (n = !1), void 0 === r && (r = !0), e)
                      ) {
                        var o = document.createEvent("HTMLEvents");
                        o.initEvent("transitionend", n, r), e.dispatchEvent(o);
                      }
                    })(e, 0, !0);
                }, t + n),
                a = q(
                  e,
                  "transitionend",
                  function () {
                    r = !0;
                  },
                  { once: !0 }
                );
              return function () {
                clearTimeout(o), a();
              };
            })(e, n, r),
            i = q(e, "transitionend", t);
          return function () {
            s(), i();
          };
        }
        function X(e, t) {
          const n = O(e, t) || "",
            r = -1 === n.indexOf("ms") ? 1e3 : 1;
          return parseFloat(n) * r;
        }
        function Y(e, t) {
          const n = X(e, "transitionDuration"),
            r = X(e, "transitionDelay"),
            o = G(
              e,
              (n) => {
                n.target === e && (o(), t(n));
              },
              n + r
            );
        }
        const Z = function (...e) {
          return e
            .filter((e) => null != e)
            .reduce((e, t) => {
              if ("function" != typeof t)
                throw new Error(
                  "Invalid Argument Type, must only provide functions, undefined, or null."
                );
              return null === e
                ? t
                : function (...n) {
                    e.apply(this, n), t.apply(this, n);
                  };
            }, null);
        };
        function J(e) {
          e.offsetHeight;
        }
        var Q = function (e) {
          return e && "function" != typeof e
            ? function (t) {
                e.current = t;
              }
            : e;
        };
        const ee = function (e, t) {
          return (0, n.useMemo)(
            function () {
              return (function (e, t) {
                var n = Q(e),
                  r = Q(t);
                return function (e) {
                  n && n(e), r && r(e);
                };
              })(e, t);
            },
            [e, t]
          );
        };
        function te(e) {
          return e && "setState" in e
            ? $().findDOMNode(e)
            : null != e
            ? e
            : null;
        }
        const ne = r().forwardRef(
            (
              {
                onEnter: e,
                onEntering: t,
                onEntered: o,
                onExit: a,
                onExiting: s,
                onExited: i,
                addEndListener: l,
                children: c,
                childRef: u,
                ...d
              },
              f
            ) => {
              const p = (0, n.useRef)(null),
                v = ee(p, u),
                h = (e) => {
                  v(te(e));
                },
                b = (e) => (t) => {
                  e && p.current && e(p.current, t);
                },
                g = (0, n.useCallback)(b(e), [e]),
                x = (0, n.useCallback)(b(t), [t]),
                y = (0, n.useCallback)(b(o), [o]),
                w = (0, n.useCallback)(b(a), [a]),
                E = (0, n.useCallback)(b(s), [s]),
                N = (0, n.useCallback)(b(i), [i]),
                C = (0, n.useCallback)(b(l), [l]);
              return (0, m.jsx)(K, {
                ref: f,
                ...d,
                onEnter: g,
                onEntered: y,
                onEntering: x,
                onExit: w,
                onExited: N,
                onExiting: E,
                addEndListener: C,
                nodeRef: p,
                children:
                  "function" == typeof c
                    ? (e, t) => c(e, { ...t, ref: h })
                    : r().cloneElement(c, { ref: h }),
              });
            }
          ),
          re = {
            height: ["marginTop", "marginBottom"],
            width: ["marginLeft", "marginRight"],
          };
        function oe(e, t) {
          const n = t[`offset${e[0].toUpperCase()}${e.slice(1)}`],
            r = re[e];
          return n + parseInt(O(t, r[0]), 10) + parseInt(O(t, r[1]), 10);
        }
        const ae = {
            [I]: "collapse",
            [B]: "collapsing",
            [L]: "collapsing",
            [D]: "collapse show",
          },
          se = {
            in: !1,
            timeout: 300,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            getDimensionValue: oe,
          },
          ie = r().forwardRef(
            (
              {
                onEnter: e,
                onEntering: o,
                onEntered: a,
                onExit: s,
                onExiting: i,
                className: l,
                children: c,
                dimension: u = "height",
                getDimensionValue: d = oe,
                ...f
              },
              p
            ) => {
              const v = "function" == typeof u ? u() : u,
                h = (0, n.useMemo)(
                  () =>
                    Z((e) => {
                      e.style[v] = "0";
                    }, e),
                  [v, e]
                ),
                b = (0, n.useMemo)(
                  () =>
                    Z((e) => {
                      const t = `scroll${v[0].toUpperCase()}${v.slice(1)}`;
                      e.style[v] = `${e[t]}px`;
                    }, o),
                  [v, o]
                ),
                g = (0, n.useMemo)(
                  () =>
                    Z((e) => {
                      e.style[v] = null;
                    }, a),
                  [v, a]
                ),
                x = (0, n.useMemo)(
                  () =>
                    Z((e) => {
                      (e.style[v] = `${d(v, e)}px`), J(e);
                    }, s),
                  [s, d, v]
                ),
                y = (0, n.useMemo)(
                  () =>
                    Z((e) => {
                      e.style[v] = null;
                    }, i),
                  [v, i]
                );
              return (0, m.jsx)(ne, {
                ref: p,
                addEndListener: Y,
                ...f,
                "aria-expanded": f.role ? f.in : null,
                onEnter: h,
                onEntering: b,
                onEntered: g,
                onExit: x,
                onExiting: y,
                childRef: c.ref,
                children: (e, n) =>
                  r().cloneElement(c, {
                    ...n,
                    className: t()(
                      l,
                      c.props.className,
                      ae[e],
                      "width" === v && "collapse-horizontal"
                    ),
                  }),
              });
            }
          );
        ie.defaultProps = se;
        const le = ie,
          ce = n.createContext({});
        ce.displayName = "AccordionContext";
        const ue = ce,
          de = n.forwardRef(
            (
              {
                as: e = "div",
                bsPrefix: r,
                className: o,
                children: a,
                eventKey: s,
                ...i
              },
              l
            ) => {
              const { activeEventKey: c } = (0, n.useContext)(ue);
              return (
                (r = g(r, "accordion-collapse")),
                (0, m.jsx)(le, {
                  ref: l,
                  in: c === s,
                  ...i,
                  className: t()(o, r),
                  children: (0, m.jsx)(e, { children: n.Children.only(a) }),
                })
              );
            }
          );
        de.displayName = "AccordionCollapse";
        const fe = de,
          pe = n.createContext({ eventKey: "" });
        pe.displayName = "AccordionItemContext";
        const me = pe,
          ve = n.forwardRef(
            ({ as: e = "div", bsPrefix: r, className: o, ...a }, s) => {
              r = g(r, "accordion-body");
              const { eventKey: i } = (0, n.useContext)(me);
              return (0, m.jsx)(fe, {
                eventKey: i,
                children: (0, m.jsx)(e, { ref: s, ...a, className: t()(o, r) }),
              });
            }
          );
        ve.displayName = "AccordionBody";
        const he = ve;
        function be(e, t) {
          const { activeEventKey: r, onSelect: o } = (0, n.useContext)(ue);
          return (n) => {
            o && o(e === r ? null : e, n), t && t(n);
          };
        }
        const ge = n.forwardRef(
          (
            { as: e = "button", bsPrefix: r, className: o, onClick: a, ...s },
            i
          ) => {
            r = g(r, "accordion-button");
            const { eventKey: l } = (0, n.useContext)(me),
              c = be(l, a),
              { activeEventKey: u } = (0, n.useContext)(ue);
            return (
              "button" === e && (s.type = "button"),
              (0, m.jsx)(e, {
                ref: i,
                onClick: c,
                ...s,
                "aria-expanded": l === u,
                className: t()(o, r, l !== u && "collapsed"),
              })
            );
          }
        );
        ge.displayName = "AccordionButton";
        const xe = ge,
          ye = n.forwardRef(
            (
              {
                as: e = "h2",
                bsPrefix: n,
                className: r,
                children: o,
                onClick: a,
                ...s
              },
              i
            ) => (
              (n = g(n, "accordion-header")),
              (0, m.jsx)(e, {
                ref: i,
                ...s,
                className: t()(r, n),
                children: (0, m.jsx)(xe, { onClick: a, children: o }),
              })
            )
          );
        ye.displayName = "AccordionHeader";
        const we = ye,
          Ee = n.forwardRef(
            (
              { as: e = "div", bsPrefix: r, className: o, eventKey: a, ...s },
              i
            ) => {
              r = g(r, "accordion-item");
              const l = (0, n.useMemo)(() => ({ eventKey: a }), [a]);
              return (0, m.jsx)(me.Provider, {
                value: l,
                children: (0, m.jsx)(e, { ref: i, ...s, className: t()(o, r) }),
              });
            }
          );
        Ee.displayName = "AccordionItem";
        const Ne = Ee,
          Ce = n.forwardRef((e, r) => {
            const {
                as: o = "div",
                activeKey: a,
                bsPrefix: s,
                className: i,
                onSelect: l,
                flush: c,
                ...u
              } = p(e, { activeKey: "onSelect" }),
              d = g(s, "accordion"),
              f = (0, n.useMemo)(
                () => ({ activeEventKey: a, onSelect: l }),
                [a, l]
              );
            return (0, m.jsx)(ue.Provider, {
              value: f,
              children: (0, m.jsx)(o, {
                ref: r,
                ...u,
                className: t()(i, d, c && `${d}-flush`),
              }),
            });
          });
        Ce.displayName = "Accordion";
        const je = Object.assign(Ce, {
            Button: xe,
            Collapse: fe,
            Item: Ne,
            Header: we,
            Body: he,
          }),
          Oe = function (e) {
            var t = (0, n.useRef)(e);
            return (
              (0, n.useEffect)(
                function () {
                  t.current = e;
                },
                [e]
              ),
              t
            );
          };
        function Pe(e) {
          var t = Oe(e);
          return (0, n.useCallback)(
            function () {
              return t.current && t.current.apply(t, arguments);
            },
            [t]
          );
        }
        function ke() {
          return (0, n.useState)(null);
        }
        function Re(e) {
          var t = (function (e) {
            var t = (0, n.useRef)(e);
            return (
              (0, n.useEffect)(
                function () {
                  t.current = e;
                },
                [e]
              ),
              t
            );
          })(e);
          return (0, n.useCallback)(
            function () {
              return t.current && t.current.apply(t, arguments);
            },
            [t]
          );
        }
        function Te() {
          var e = (0, n.useRef)(!0),
            t = (0, n.useRef)(function () {
              return e.current;
            });
          return (
            (0, n.useEffect)(function () {
              return function () {
                e.current = !1;
              };
            }, []),
            t.current
          );
        }
        function $e(e) {
          var t = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(function () {
              t.current = e;
            }),
            t.current
          );
        }
        var Se =
          void 0 !== o.g &&
          o.g.navigator &&
          "ReactNative" === o.g.navigator.product;
        "undefined" != typeof document || Se ? n.useLayoutEffect : n.useEffect,
          new WeakMap();
        const Me = ["as", "disabled"];
        function Ie({
          tagName: e,
          disabled: t,
          href: n,
          target: r,
          rel: o,
          onClick: a,
          tabIndex: s = 0,
          type: i,
        }) {
          e || (e = null != n || null != r || null != o ? "a" : "button");
          const l = { tagName: e };
          if ("button" === e) return [{ type: i || "button", disabled: t }, l];
          const c = (r) => {
            (t ||
              ("a" === e &&
                (function (e) {
                  return !e || "#" === e.trim();
                })(n))) &&
              r.preventDefault(),
              t ? r.stopPropagation() : null == a || a(r);
          };
          return [
            {
              role: "button",
              disabled: void 0,
              tabIndex: t ? void 0 : s,
              href: "a" === e && t ? void 0 : n,
              target: "a" === e ? r : void 0,
              "aria-disabled": t || void 0,
              rel: "a" === e ? o : void 0,
              onClick: c,
              onKeyDown: (e) => {
                " " === e.key && (e.preventDefault(), c(e));
              },
            },
            l,
          ];
        }
        const Le = n.forwardRef((e, t) => {
          let { as: n, disabled: r } = e,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Me);
          const [a, { tagName: s }] = Ie(
            Object.assign({ tagName: n, disabled: r }, o)
          );
          return (0, m.jsx)(s, Object.assign({}, o, a, { ref: t }));
        });
        Le.displayName = "Button";
        const De = Le,
          Be = ["onKeyDown"],
          Ae = n.forwardRef((e, t) => {
            let { onKeyDown: n } = e,
              r = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(e, Be);
            const [o] = Ie(Object.assign({ tagName: "a" }, r)),
              a = Re((e) => {
                o.onKeyDown(e), null == n || n(e);
              });
            return (((s = r.href) && "#" !== s.trim()) || r.role) &&
              "button" !== r.role
              ? (0, m.jsx)("a", Object.assign({ ref: t }, r, { onKeyDown: n }))
              : (0, m.jsx)(
                  "a",
                  Object.assign({ ref: t }, r, o, { onKeyDown: a })
                );
            var s;
          });
        Ae.displayName = "Anchor";
        const Fe = Ae,
          Ke = { [L]: "show", [D]: "show" },
          He = n.forwardRef(
            (
              { className: e, children: r, transitionClasses: o = {}, ...a },
              s
            ) => {
              const i = (0, n.useCallback)(
                (e, t) => {
                  J(e), null == a.onEnter || a.onEnter(e, t);
                },
                [a]
              );
              return (0, m.jsx)(ne, {
                ref: s,
                addEndListener: Y,
                ...a,
                onEnter: i,
                childRef: r.ref,
                children: (a, s) =>
                  n.cloneElement(r, {
                    ...s,
                    className: t()("fade", e, r.props.className, Ke[a], o[a]),
                  }),
              });
            }
          );
        (He.defaultProps = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
        }),
          (He.displayName = "Fade");
        const _e = He,
          We = {
            "aria-label": R().string,
            onClick: R().func,
            variant: R().oneOf(["white"]),
          },
          ze = n.forwardRef(({ className: e, variant: n, ...r }, o) =>
            (0, m.jsx)("button", {
              ref: o,
              type: "button",
              className: t()("btn-close", n && `btn-close-${n}`, e),
              ...r,
            })
          );
        (ze.displayName = "CloseButton"),
          (ze.propTypes = We),
          (ze.defaultProps = { "aria-label": "Close" });
        const Ve = ze,
          Ue = (e) =>
            n.forwardRef((n, r) =>
              (0, m.jsx)("div", {
                ...n,
                ref: r,
                className: t()(n.className, e),
              })
            );
        var qe = /-(.)/g;
        const Ge = (e) => {
          return (
            e[0].toUpperCase() +
            ((t = e),
            t.replace(qe, function (e, t) {
              return t.toUpperCase();
            })).slice(1)
          );
          var t;
        };
        function Xe(
          e,
          { displayName: r = Ge(e), Component: o, defaultProps: a } = {}
        ) {
          const s = n.forwardRef(
            ({ className: n, bsPrefix: r, as: a = o || "div", ...s }, i) => {
              const l = g(r, e);
              return (0, m.jsx)(a, { ref: i, className: t()(n, l), ...s });
            }
          );
          return (s.defaultProps = a), (s.displayName = r), s;
        }
        const Ye = Ue("h4");
        Ye.displayName = "DivStyledAsH4";
        const Ze = Xe("alert-heading", { Component: Ye }),
          Je = Xe("alert-link", { Component: Fe }),
          Qe = {
            variant: "primary",
            show: !0,
            transition: _e,
            closeLabel: "Close alert",
          },
          et = n.forwardRef((e, n) => {
            const {
                bsPrefix: r,
                show: o,
                closeLabel: a,
                closeVariant: s,
                className: i,
                children: l,
                variant: c,
                onClose: u,
                dismissible: d,
                transition: f,
                ...v
              } = p(e, { show: "onClose" }),
              h = g(r, "alert"),
              b = Pe((e) => {
                u && u(!1, e);
              }),
              x = !0 === f ? _e : f,
              y = (0, m.jsxs)("div", {
                role: "alert",
                ...(x ? void 0 : v),
                ref: n,
                className: t()(i, h, c && `${h}-${c}`, d && `${h}-dismissible`),
                children: [
                  d &&
                    (0, m.jsx)(Ve, { onClick: b, "aria-label": a, variant: s }),
                  l,
                ],
              });
            return x
              ? (0, m.jsx)(x, {
                  unmountOnExit: !0,
                  ...v,
                  ref: void 0,
                  in: o,
                  children: y,
                })
              : o
              ? y
              : null;
          });
        (et.displayName = "Alert"), (et.defaultProps = Qe);
        const tt = Object.assign(et, { Link: Je, Heading: Ze }),
          nt = Fe,
          rt = n.forwardRef(
            (
              {
                bsPrefix: e,
                bg: n,
                pill: r,
                text: o,
                className: a,
                as: s = "span",
                ...i
              },
              l
            ) => {
              const c = g(e, "badge");
              return (0, m.jsx)(s, {
                ref: l,
                ...i,
                className: t()(
                  a,
                  c,
                  r && "rounded-pill",
                  o && `text-${o}`,
                  n && `bg-${n}`
                ),
              });
            }
          );
        (rt.displayName = "Badge"),
          (rt.defaultProps = { bg: "primary", pill: !1 });
        const ot = rt,
          at = n.forwardRef(
            (
              {
                bsPrefix: e,
                active: n,
                children: r,
                className: o,
                as: a = "li",
                linkAs: s = Fe,
                linkProps: i,
                href: l,
                title: c,
                target: u,
                ...d
              },
              f
            ) => {
              const p = g(e, "breadcrumb-item");
              return (0, m.jsx)(a, {
                ref: f,
                ...d,
                className: t()(p, o, { active: n }),
                "aria-current": n ? "page" : void 0,
                children: n
                  ? r
                  : (0, m.jsx)(s, {
                      ...i,
                      href: l,
                      title: c,
                      target: u,
                      children: r,
                    }),
              });
            }
          );
        (at.displayName = "BreadcrumbItem"),
          (at.defaultProps = { active: !1, linkProps: {} });
        const st = at,
          it = n.forwardRef(
            (
              {
                bsPrefix: e,
                className: n,
                listProps: r,
                children: o,
                label: a,
                as: s = "nav",
                ...i
              },
              l
            ) => {
              const c = g(e, "breadcrumb");
              return (0, m.jsx)(s, {
                "aria-label": a,
                className: n,
                ref: l,
                ...i,
                children: (0, m.jsx)("ol", {
                  ...r,
                  className: t()(c, null == r ? void 0 : r.className),
                  children: o,
                }),
              });
            }
          );
        (it.displayName = "Breadcrumb"),
          (it.defaultProps = { label: "breadcrumb", listProps: {} });
        const lt = Object.assign(it, { Item: st }),
          ct = n.forwardRef(
            (
              {
                as: e,
                bsPrefix: n,
                variant: r,
                size: o,
                active: a,
                className: s,
                ...i
              },
              l
            ) => {
              const c = g(n, "btn"),
                [u, { tagName: d }] = Ie({ tagName: e, ...i }),
                f = d;
              return (0, m.jsx)(f, {
                ...i,
                ...u,
                ref: l,
                className: t()(
                  s,
                  c,
                  a && "active",
                  r && `${c}-${r}`,
                  o && `${c}-${o}`,
                  i.href && i.disabled && "disabled"
                ),
              });
            }
          );
        (ct.displayName = "Button"),
          (ct.defaultProps = { variant: "primary", active: !1, disabled: !1 });
        const ut = ct,
          dt = n.forwardRef(
            (
              {
                bsPrefix: e,
                size: n,
                vertical: r,
                className: o,
                as: a = "div",
                ...s
              },
              i
            ) => {
              const l = g(e, "btn-group");
              let c = l;
              return (
                r && (c = `${l}-vertical`),
                (0, m.jsx)(a, {
                  ...s,
                  ref: i,
                  className: t()(o, c, n && `${l}-${n}`),
                })
              );
            }
          );
        (dt.displayName = "ButtonGroup"),
          (dt.defaultProps = { vertical: !1, role: "group" });
        const ft = dt,
          pt = n.forwardRef(({ bsPrefix: e, className: n, ...r }, o) => {
            const a = g(e, "btn-toolbar");
            return (0, m.jsx)("div", { ...r, ref: o, className: t()(n, a) });
          });
        (pt.displayName = "ButtonToolbar"),
          (pt.defaultProps = { role: "toolbar" });
        const mt = pt,
          vt = n.forwardRef(
            (
              { bsPrefix: e, className: n, variant: r, as: o = "img", ...a },
              s
            ) => {
              const i = g(e, "card-img");
              return (0, m.jsx)(o, {
                ref: s,
                className: t()(r ? `${i}-${r}` : i, n),
                ...a,
              });
            }
          );
        vt.displayName = "CardImg";
        const ht = vt,
          bt = n.createContext(null);
        bt.displayName = "CardHeaderContext";
        const gt = bt,
          xt = n.forwardRef(
            ({ bsPrefix: e, className: r, as: o = "div", ...a }, s) => {
              const i = g(e, "card-header"),
                l = (0, n.useMemo)(() => ({ cardHeaderBsPrefix: i }), [i]);
              return (0, m.jsx)(gt.Provider, {
                value: l,
                children: (0, m.jsx)(o, { ref: s, ...a, className: t()(r, i) }),
              });
            }
          );
        xt.displayName = "CardHeader";
        const yt = xt,
          wt = Ue("h5"),
          Et = Ue("h6"),
          Nt = Xe("card-body"),
          Ct = Xe("card-title", { Component: wt }),
          jt = Xe("card-subtitle", { Component: Et }),
          Ot = Xe("card-link", { Component: "a" }),
          Pt = Xe("card-text", { Component: "p" }),
          kt = Xe("card-footer"),
          Rt = Xe("card-img-overlay"),
          Tt = n.forwardRef(
            (
              {
                bsPrefix: e,
                className: n,
                bg: r,
                text: o,
                border: a,
                body: s,
                children: i,
                as: l = "div",
                ...c
              },
              u
            ) => {
              const d = g(e, "card");
              return (0, m.jsx)(l, {
                ref: u,
                ...c,
                className: t()(
                  n,
                  d,
                  r && `bg-${r}`,
                  o && `text-${o}`,
                  a && `border-${a}`
                ),
                children: s ? (0, m.jsx)(Nt, { children: i }) : i,
              });
            }
          );
        (Tt.displayName = "Card"), (Tt.defaultProps = { body: !1 });
        const $t = Object.assign(Tt, {
            Img: ht,
            Title: Ct,
            Subtitle: jt,
            Body: Nt,
            Link: Ot,
            Text: Pt,
            Header: yt,
            Footer: kt,
            ImgOverlay: Rt,
          }),
          St = Xe("card-group");
        function Mt(e) {
          var t,
            r,
            o = ((t = e), ((r = (0, n.useRef)(t)).current = t), r);
          (0, n.useEffect)(function () {
            return function () {
              return o.current();
            };
          }, []);
        }
        var It = Math.pow(2, 31) - 1;
        function Lt(e, t, n) {
          var r = n - Date.now();
          e.current =
            r <= It
              ? setTimeout(t, r)
              : setTimeout(function () {
                  return Lt(e, t, n);
                }, It);
        }
        function Dt() {
          var e = (function () {
              var e = (0, n.useRef)(!0),
                t = (0, n.useRef)(function () {
                  return e.current;
                });
              return (
                (0, n.useEffect)(function () {
                  return function () {
                    e.current = !1;
                  };
                }, []),
                t.current
              );
            })(),
            t = (0, n.useRef)();
          return (
            Mt(function () {
              return clearTimeout(t.current);
            }),
            (0, n.useMemo)(function () {
              var n = function () {
                return clearTimeout(t.current);
              };
              return {
                set: function (r, o) {
                  void 0 === o && (o = 0),
                    e() &&
                      (n(),
                      o <= It
                        ? (t.current = setTimeout(r, o))
                        : Lt(t, r, Date.now() + o));
                },
                clear: n,
              };
            }, [])
          );
        }
        const Bt = Xe("carousel-caption"),
          At = n.forwardRef(
            ({ as: e = "div", bsPrefix: n, className: r, ...o }, a) => {
              const s = t()(r, g(n, "carousel-item"));
              return (0, m.jsx)(e, { ref: a, ...o, className: s });
            }
          );
        At.displayName = "CarouselItem";
        const Ft = At;
        function Kt(e, t) {
          let r = 0;
          return n.Children.map(e, (e) =>
            n.isValidElement(e) ? t(e, r++) : e
          );
        }
        function Ht(e, t) {
          let r = 0;
          n.Children.forEach(e, (e) => {
            n.isValidElement(e) && t(e, r++);
          });
        }
        const _t = {
            slide: !0,
            fade: !1,
            controls: !0,
            indicators: !0,
            indicatorLabels: [],
            defaultActiveIndex: 0,
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            wrap: !0,
            touch: !0,
            prevIcon: (0, m.jsx)("span", {
              "aria-hidden": "true",
              className: "carousel-control-prev-icon",
            }),
            prevLabel: "Previous",
            nextIcon: (0, m.jsx)("span", {
              "aria-hidden": "true",
              className: "carousel-control-next-icon",
            }),
            nextLabel: "Next",
          },
          Wt = n.forwardRef((e, r) => {
            const {
                as: o = "div",
                bsPrefix: a,
                slide: s,
                fade: i,
                controls: l,
                indicators: c,
                indicatorLabels: u,
                activeIndex: d,
                onSelect: f,
                onSlide: v,
                onSlid: h,
                interval: b,
                keyboard: y,
                onKeyDown: w,
                pause: E,
                onMouseOver: N,
                onMouseOut: C,
                wrap: j,
                touch: O,
                onTouchStart: P,
                onTouchMove: k,
                onTouchEnd: R,
                prevIcon: T,
                prevLabel: $,
                nextIcon: S,
                nextLabel: M,
                variant: I,
                className: L,
                children: D,
                ...B
              } = p(e, { activeIndex: "onSelect" }),
              A = g(a, "carousel"),
              F = x(),
              K = (0, n.useRef)(null),
              [H, _] = (0, n.useState)("next"),
              [W, z] = (0, n.useState)(!1),
              [V, U] = (0, n.useState)(!1),
              [q, G] = (0, n.useState)(d || 0);
            V ||
              d === q ||
              (K.current ? _(K.current) : _((d || 0) > q ? "next" : "prev"),
              s && U(!0),
              G(d || 0)),
              (0, n.useEffect)(() => {
                K.current && (K.current = null);
              });
            let X,
              Z = 0;
            Ht(D, (e, t) => {
              ++Z, t === d && (X = e.props.interval);
            });
            const Q = Oe(X),
              ee = (0, n.useCallback)(
                (e) => {
                  if (V) return;
                  let t = q - 1;
                  if (t < 0) {
                    if (!j) return;
                    t = Z - 1;
                  }
                  (K.current = "prev"), null == f || f(t, e);
                },
                [V, q, f, j, Z]
              ),
              te = Pe((e) => {
                if (V) return;
                let t = q + 1;
                if (t >= Z) {
                  if (!j) return;
                  t = 0;
                }
                (K.current = "next"), null == f || f(t, e);
              }),
              re = (0, n.useRef)();
            (0, n.useImperativeHandle)(r, () => ({
              element: re.current,
              prev: ee,
              next: te,
            }));
            const oe = Pe(() => {
                !document.hidden &&
                  (function (e) {
                    if (!(e && e.style && e.parentNode && e.parentNode.style))
                      return !1;
                    const t = getComputedStyle(e);
                    return (
                      "none" !== t.display &&
                      "hidden" !== t.visibility &&
                      "none" !== getComputedStyle(e.parentNode).display
                    );
                  })(re.current) &&
                  (F ? ee() : te());
              }),
              ae = "next" === H ? "start" : "end";
            var se, ie, le;
            (se = () => {
              s || (null == v || v(q, ae), null == h || h(q, ae));
            }),
              (ie = [q]),
              (le = (0, n.useRef)(!0)),
              (0, n.useEffect)(function () {
                if (!le.current) return se();
                le.current = !1;
              }, ie);
            const ce = `${A}-item-${H}`,
              ue = `${A}-item-${ae}`,
              de = (0, n.useCallback)(
                (e) => {
                  J(e), null == v || v(q, ae);
                },
                [v, q, ae]
              ),
              fe = (0, n.useCallback)(() => {
                U(!1), null == h || h(q, ae);
              }, [h, q, ae]),
              pe = (0, n.useCallback)(
                (e) => {
                  if (y && !/input|textarea/i.test(e.target.tagName))
                    switch (e.key) {
                      case "ArrowLeft":
                        return e.preventDefault(), void (F ? te(e) : ee(e));
                      case "ArrowRight":
                        return e.preventDefault(), void (F ? ee(e) : te(e));
                    }
                  null == w || w(e);
                },
                [y, w, ee, te, F]
              ),
              me = (0, n.useCallback)(
                (e) => {
                  "hover" === E && z(!0), null == N || N(e);
                },
                [E, N]
              ),
              ve = (0, n.useCallback)(
                (e) => {
                  z(!1), null == C || C(e);
                },
                [C]
              ),
              he = (0, n.useRef)(0),
              be = (0, n.useRef)(0),
              ge = Dt(),
              xe = (0, n.useCallback)(
                (e) => {
                  (he.current = e.touches[0].clientX),
                    (be.current = 0),
                    "hover" === E && z(!0),
                    null == P || P(e);
                },
                [E, P]
              ),
              ye = (0, n.useCallback)(
                (e) => {
                  e.touches && e.touches.length > 1
                    ? (be.current = 0)
                    : (be.current = e.touches[0].clientX - he.current),
                    null == k || k(e);
                },
                [k]
              ),
              we = (0, n.useCallback)(
                (e) => {
                  if (O) {
                    const t = be.current;
                    Math.abs(t) > 40 && (t > 0 ? ee(e) : te(e));
                  }
                  "hover" === E &&
                    ge.set(() => {
                      z(!1);
                    }, b || void 0),
                    null == R || R(e);
                },
                [O, E, ee, te, ge, b, R]
              ),
              Ee = null != b && !W && !V,
              Ne = (0, n.useRef)();
            (0, n.useEffect)(() => {
              var e, t;
              if (!Ee) return;
              const n = F ? ee : te;
              return (
                (Ne.current = window.setInterval(
                  document.visibilityState ? oe : n,
                  null != (e = null != (t = Q.current) ? t : b) ? e : void 0
                )),
                () => {
                  null !== Ne.current && clearInterval(Ne.current);
                }
              );
            }, [Ee, ee, te, Q, b, oe, F]);
            const Ce = (0, n.useMemo)(
              () =>
                c &&
                Array.from({ length: Z }, (e, t) => (e) => {
                  null == f || f(t, e);
                }),
              [c, Z, f]
            );
            return (0, m.jsxs)(o, {
              ref: re,
              ...B,
              onKeyDown: pe,
              onMouseOver: me,
              onMouseOut: ve,
              onTouchStart: xe,
              onTouchMove: ye,
              onTouchEnd: we,
              className: t()(
                L,
                A,
                s && "slide",
                i && `${A}-fade`,
                I && `${A}-${I}`
              ),
              children: [
                c &&
                  (0, m.jsx)("div", {
                    className: `${A}-indicators`,
                    children: Kt(D, (e, t) =>
                      (0, m.jsx)(
                        "button",
                        {
                          type: "button",
                          "data-bs-target": "",
                          "aria-label":
                            null != u && u.length ? u[t] : `Slide ${t + 1}`,
                          className: t === q ? "active" : void 0,
                          onClick: Ce ? Ce[t] : void 0,
                          "aria-current": t === q,
                        },
                        t
                      )
                    ),
                  }),
                (0, m.jsx)("div", {
                  className: `${A}-inner`,
                  children: Kt(D, (e, r) => {
                    const o = r === q;
                    return s
                      ? (0, m.jsx)(ne, {
                          in: o,
                          onEnter: o ? de : void 0,
                          onEntered: o ? fe : void 0,
                          addEndListener: Y,
                          children: (r, a) =>
                            n.cloneElement(e, {
                              ...a,
                              className: t()(
                                e.props.className,
                                o && "entered" !== r && ce,
                                ("entered" === r || "exiting" === r) &&
                                  "active",
                                ("entering" === r || "exiting" === r) && ue
                              ),
                            }),
                        })
                      : n.cloneElement(e, {
                          className: t()(e.props.className, o && "active"),
                        });
                  }),
                }),
                l &&
                  (0, m.jsxs)(m.Fragment, {
                    children: [
                      (j || 0 !== d) &&
                        (0, m.jsxs)(Fe, {
                          className: `${A}-control-prev`,
                          onClick: ee,
                          children: [
                            T,
                            $ &&
                              (0, m.jsx)("span", {
                                className: "visually-hidden",
                                children: $,
                              }),
                          ],
                        }),
                      (j || d !== Z - 1) &&
                        (0, m.jsxs)(Fe, {
                          className: `${A}-control-next`,
                          onClick: te,
                          children: [
                            S,
                            M &&
                              (0, m.jsx)("span", {
                                className: "visually-hidden",
                                children: M,
                              }),
                          ],
                        }),
                    ],
                  }),
              ],
            });
          });
        (Wt.displayName = "Carousel"), (Wt.defaultProps = _t);
        const zt = Object.assign(Wt, { Caption: Bt, Item: Ft }),
          Vt = ["xxl", "xl", "lg", "md", "sm", "xs"];
        function Ut({ as: e, bsPrefix: n, className: r, ...o }) {
          n = g(n, "col");
          const a = [],
            s = [];
          return (
            Vt.forEach((e) => {
              const t = o[e];
              let r, i, l;
              delete o[e],
                "object" == typeof t && null != t
                  ? ({ span: r, offset: i, order: l } = t)
                  : (r = t);
              const c = "xs" !== e ? `-${e}` : "";
              r && a.push(!0 === r ? `${n}${c}` : `${n}${c}-${r}`),
                null != l && s.push(`order${c}-${l}`),
                null != i && s.push(`offset${c}-${i}`);
            }),
            [
              { ...o, className: t()(r, ...a, ...s) },
              { as: e, bsPrefix: n, spans: a },
            ]
          );
        }
        const qt = n.forwardRef((e, n) => {
          const [
            { className: r, ...o },
            { as: a = "div", bsPrefix: s, spans: i },
          ] = Ut(e);
          return (0, m.jsx)(a, {
            ...o,
            ref: n,
            className: t()(r, !i.length && s),
          });
        });
        qt.displayName = "Col";
        const Gt = qt;
        var Xt = Function.prototype.bind.call(
          Function.prototype.call,
          [].slice
        );
        function Yt(e, t) {
          return Xt(e.querySelectorAll(t));
        }
        function Zt() {
          return (0, n.useReducer)(function (e) {
            return !e;
          }, !1)[1];
        }
        const Jt = n.createContext(null);
        var Qt = Object.prototype.hasOwnProperty;
        function en(e, t, n) {
          for (n of e.keys()) if (tn(n, t)) return n;
        }
        function tn(e, t) {
          var n, r, o;
          if (e === t) return !0;
          if (e && t && (n = e.constructor) === t.constructor) {
            if (n === Date) return e.getTime() === t.getTime();
            if (n === RegExp) return e.toString() === t.toString();
            if (n === Array) {
              if ((r = e.length) === t.length) for (; r-- && tn(e[r], t[r]); );
              return -1 === r;
            }
            if (n === Set) {
              if (e.size !== t.size) return !1;
              for (r of e) {
                if ((o = r) && "object" == typeof o && !(o = en(t, o)))
                  return !1;
                if (!t.has(o)) return !1;
              }
              return !0;
            }
            if (n === Map) {
              if (e.size !== t.size) return !1;
              for (r of e) {
                if ((o = r[0]) && "object" == typeof o && !(o = en(t, o)))
                  return !1;
                if (!tn(r[1], t.get(o))) return !1;
              }
              return !0;
            }
            if (n === ArrayBuffer)
              (e = new Uint8Array(e)), (t = new Uint8Array(t));
            else if (n === DataView) {
              if ((r = e.byteLength) === t.byteLength)
                for (; r-- && e.getInt8(r) === t.getInt8(r); );
              return -1 === r;
            }
            if (ArrayBuffer.isView(e)) {
              if ((r = e.byteLength) === t.byteLength)
                for (; r-- && e[r] === t[r]; );
              return -1 === r;
            }
            if (!n || "object" == typeof e) {
              for (n in ((r = 0), e)) {
                if (Qt.call(e, n) && ++r && !Qt.call(t, n)) return !1;
                if (!(n in t) || !tn(e[n], t[n])) return !1;
              }
              return Object.keys(t).length === r;
            }
          }
          return e != e && t != t;
        }
        function nn(e) {
          return e.split("-")[0];
        }
        function rn(e) {
          if (null == e) return window;
          if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return (t && t.defaultView) || window;
          }
          return e;
        }
        function on(e) {
          return e instanceof rn(e).Element || e instanceof Element;
        }
        function an(e) {
          return e instanceof rn(e).HTMLElement || e instanceof HTMLElement;
        }
        function sn(e) {
          return (
            "undefined" != typeof ShadowRoot &&
            (e instanceof rn(e).ShadowRoot || e instanceof ShadowRoot)
          );
        }
        var ln = Math.round;
        function cn(e, t) {
          void 0 === t && (t = !1);
          var n = e.getBoundingClientRect(),
            r = 1,
            o = 1;
          if (an(e) && t) {
            var a = e.offsetHeight,
              s = e.offsetWidth;
            s > 0 && (r = n.width / s || 1), a > 0 && (o = n.height / a || 1);
          }
          return {
            width: ln(n.width / r),
            height: ln(n.height / o),
            top: ln(n.top / o),
            right: ln(n.right / r),
            bottom: ln(n.bottom / o),
            left: ln(n.left / r),
            x: ln(n.left / r),
            y: ln(n.top / o),
          };
        }
        function un(e) {
          var t = cn(e),
            n = e.offsetWidth,
            r = e.offsetHeight;
          return (
            Math.abs(t.width - n) <= 1 && (n = t.width),
            Math.abs(t.height - r) <= 1 && (r = t.height),
            { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
          );
        }
        function dn(e, t) {
          var n = t.getRootNode && t.getRootNode();
          if (e.contains(t)) return !0;
          if (n && sn(n)) {
            var r = t;
            do {
              if (r && e.isSameNode(r)) return !0;
              r = r.parentNode || r.host;
            } while (r);
          }
          return !1;
        }
        function fn(e) {
          return e ? (e.nodeName || "").toLowerCase() : null;
        }
        function pn(e) {
          return rn(e).getComputedStyle(e);
        }
        function mn(e) {
          return ["table", "td", "th"].indexOf(fn(e)) >= 0;
        }
        function vn(e) {
          return ((on(e) ? e.ownerDocument : e.document) || window.document)
            .documentElement;
        }
        function hn(e) {
          return "html" === fn(e)
            ? e
            : e.assignedSlot ||
                e.parentNode ||
                (sn(e) ? e.host : null) ||
                vn(e);
        }
        function bn(e) {
          return an(e) && "fixed" !== pn(e).position ? e.offsetParent : null;
        }
        function gn(e) {
          for (
            var t = rn(e), n = bn(e);
            n && mn(n) && "static" === pn(n).position;

          )
            n = bn(n);
          return n &&
            ("html" === fn(n) ||
              ("body" === fn(n) && "static" === pn(n).position))
            ? t
            : n ||
                (function (e) {
                  var t =
                    -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                  if (
                    -1 !== navigator.userAgent.indexOf("Trident") &&
                    an(e) &&
                    "fixed" === pn(e).position
                  )
                    return null;
                  for (
                    var n = hn(e);
                    an(n) && ["html", "body"].indexOf(fn(n)) < 0;

                  ) {
                    var r = pn(n);
                    if (
                      "none" !== r.transform ||
                      "none" !== r.perspective ||
                      "paint" === r.contain ||
                      -1 !==
                        ["transform", "perspective"].indexOf(r.willChange) ||
                      (t && "filter" === r.willChange) ||
                      (t && r.filter && "none" !== r.filter)
                    )
                      return n;
                    n = n.parentNode;
                  }
                  return null;
                })(e) ||
                t;
        }
        function xn(e) {
          return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
        }
        var yn = Math.max,
          wn = Math.min,
          En = Math.round;
        function Nn(e, t, n) {
          return yn(e, wn(t, n));
        }
        function Cn(e) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
        }
        function jn(e, t) {
          return t.reduce(function (t, n) {
            return (t[n] = e), t;
          }, {});
        }
        var On = "top",
          Pn = "bottom",
          kn = "right",
          Rn = "left",
          Tn = "auto",
          $n = [On, Pn, kn, Rn],
          Sn = "start",
          Mn = "end",
          In = "viewport",
          Ln = "popper",
          Dn = $n.reduce(function (e, t) {
            return e.concat([t + "-" + Sn, t + "-" + Mn]);
          }, []),
          Bn = [].concat($n, [Tn]).reduce(function (e, t) {
            return e.concat([t, t + "-" + Sn, t + "-" + Mn]);
          }, []),
          An = [
            "beforeRead",
            "read",
            "afterRead",
            "beforeMain",
            "main",
            "afterMain",
            "beforeWrite",
            "write",
            "afterWrite",
          ];
        function Fn(e) {
          return e.split("-")[1];
        }
        var Kn = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function Hn(e) {
          var t,
            n = e.popper,
            r = e.popperRect,
            o = e.placement,
            a = e.variation,
            s = e.offsets,
            i = e.position,
            l = e.gpuAcceleration,
            c = e.adaptive,
            u = e.roundOffsets,
            d =
              !0 === u
                ? (function (e) {
                    var t = e.x,
                      n = e.y,
                      r = window.devicePixelRatio || 1;
                    return {
                      x: En(En(t * r) / r) || 0,
                      y: En(En(n * r) / r) || 0,
                    };
                  })(s)
                : "function" == typeof u
                ? u(s)
                : s,
            f = d.x,
            p = void 0 === f ? 0 : f,
            m = d.y,
            v = void 0 === m ? 0 : m,
            h = s.hasOwnProperty("x"),
            b = s.hasOwnProperty("y"),
            g = Rn,
            x = On,
            y = window;
          if (c) {
            var w = gn(n),
              E = "clientHeight",
              N = "clientWidth";
            w === rn(n) &&
              "static" !== pn((w = vn(n))).position &&
              "absolute" === i &&
              ((E = "scrollHeight"), (N = "scrollWidth")),
              (w = w),
              (o !== On && ((o !== Rn && o !== kn) || a !== Mn)) ||
                ((x = Pn), (v -= w[E] - r.height), (v *= l ? 1 : -1)),
              (o !== Rn && ((o !== On && o !== Pn) || a !== Mn)) ||
                ((g = kn), (p -= w[N] - r.width), (p *= l ? 1 : -1));
          }
          var C,
            j = Object.assign({ position: i }, c && Kn);
          return l
            ? Object.assign(
                {},
                j,
                (((C = {})[x] = b ? "0" : ""),
                (C[g] = h ? "0" : ""),
                (C.transform =
                  (y.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + v + "px)"
                    : "translate3d(" + p + "px, " + v + "px, 0)"),
                C)
              )
            : Object.assign(
                {},
                j,
                (((t = {})[x] = b ? v + "px" : ""),
                (t[g] = h ? p + "px" : ""),
                (t.transform = ""),
                t)
              );
        }
        var _n = { passive: !0 },
          Wn = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function zn(e) {
          return e.replace(/left|right|bottom|top/g, function (e) {
            return Wn[e];
          });
        }
        var Vn = { start: "end", end: "start" };
        function Un(e) {
          return e.replace(/start|end/g, function (e) {
            return Vn[e];
          });
        }
        function qn(e) {
          var t = rn(e);
          return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
        }
        function Gn(e) {
          return cn(vn(e)).left + qn(e).scrollLeft;
        }
        function Xn(e) {
          var t = pn(e),
            n = t.overflow,
            r = t.overflowX,
            o = t.overflowY;
          return /auto|scroll|overlay|hidden/.test(n + o + r);
        }
        function Yn(e) {
          return ["html", "body", "#document"].indexOf(fn(e)) >= 0
            ? e.ownerDocument.body
            : an(e) && Xn(e)
            ? e
            : Yn(hn(e));
        }
        function Zn(e, t) {
          var n;
          void 0 === t && (t = []);
          var r = Yn(e),
            o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
            a = rn(r),
            s = o ? [a].concat(a.visualViewport || [], Xn(r) ? r : []) : r,
            i = t.concat(s);
          return o ? i : i.concat(Zn(hn(s)));
        }
        function Jn(e) {
          return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height,
          });
        }
        function Qn(e, t) {
          return t === In
            ? Jn(
                (function (e) {
                  var t = rn(e),
                    n = vn(e),
                    r = t.visualViewport,
                    o = n.clientWidth,
                    a = n.clientHeight,
                    s = 0,
                    i = 0;
                  return (
                    r &&
                      ((o = r.width),
                      (a = r.height),
                      /^((?!chrome|android).)*safari/i.test(
                        navigator.userAgent
                      ) || ((s = r.offsetLeft), (i = r.offsetTop))),
                    { width: o, height: a, x: s + Gn(e), y: i }
                  );
                })(e)
              )
            : an(t)
            ? (function (e) {
                var t = cn(e);
                return (
                  (t.top = t.top + e.clientTop),
                  (t.left = t.left + e.clientLeft),
                  (t.bottom = t.top + e.clientHeight),
                  (t.right = t.left + e.clientWidth),
                  (t.width = e.clientWidth),
                  (t.height = e.clientHeight),
                  (t.x = t.left),
                  (t.y = t.top),
                  t
                );
              })(t)
            : Jn(
                (function (e) {
                  var t,
                    n = vn(e),
                    r = qn(e),
                    o = null == (t = e.ownerDocument) ? void 0 : t.body,
                    a = yn(
                      n.scrollWidth,
                      n.clientWidth,
                      o ? o.scrollWidth : 0,
                      o ? o.clientWidth : 0
                    ),
                    s = yn(
                      n.scrollHeight,
                      n.clientHeight,
                      o ? o.scrollHeight : 0,
                      o ? o.clientHeight : 0
                    ),
                    i = -r.scrollLeft + Gn(e),
                    l = -r.scrollTop;
                  return (
                    "rtl" === pn(o || n).direction &&
                      (i += yn(n.clientWidth, o ? o.clientWidth : 0) - a),
                    { width: a, height: s, x: i, y: l }
                  );
                })(vn(e))
              );
        }
        function er(e) {
          var t,
            n = e.reference,
            r = e.element,
            o = e.placement,
            a = o ? nn(o) : null,
            s = o ? Fn(o) : null,
            i = n.x + n.width / 2 - r.width / 2,
            l = n.y + n.height / 2 - r.height / 2;
          switch (a) {
            case On:
              t = { x: i, y: n.y - r.height };
              break;
            case Pn:
              t = { x: i, y: n.y + n.height };
              break;
            case kn:
              t = { x: n.x + n.width, y: l };
              break;
            case Rn:
              t = { x: n.x - r.width, y: l };
              break;
            default:
              t = { x: n.x, y: n.y };
          }
          var c = a ? xn(a) : null;
          if (null != c) {
            var u = "y" === c ? "height" : "width";
            switch (s) {
              case Sn:
                t[c] = t[c] - (n[u] / 2 - r[u] / 2);
                break;
              case Mn:
                t[c] = t[c] + (n[u] / 2 - r[u] / 2);
            }
          }
          return t;
        }
        function tr(e, t) {
          void 0 === t && (t = {});
          var n = t,
            r = n.placement,
            o = void 0 === r ? e.placement : r,
            a = n.boundary,
            s = void 0 === a ? "clippingParents" : a,
            i = n.rootBoundary,
            l = void 0 === i ? In : i,
            c = n.elementContext,
            u = void 0 === c ? Ln : c,
            d = n.altBoundary,
            f = void 0 !== d && d,
            p = n.padding,
            m = void 0 === p ? 0 : p,
            v = Cn("number" != typeof m ? m : jn(m, $n)),
            h = u === Ln ? "reference" : Ln,
            b = e.rects.popper,
            g = e.elements[f ? h : u],
            x = (function (e, t, n) {
              var r =
                  "clippingParents" === t
                    ? (function (e) {
                        var t = Zn(hn(e)),
                          n =
                            ["absolute", "fixed"].indexOf(pn(e).position) >=
                              0 && an(e)
                              ? gn(e)
                              : e;
                        return on(n)
                          ? t.filter(function (e) {
                              return on(e) && dn(e, n) && "body" !== fn(e);
                            })
                          : [];
                      })(e)
                    : [].concat(t),
                o = [].concat(r, [n]),
                a = o[0],
                s = o.reduce(function (t, n) {
                  var r = Qn(e, n);
                  return (
                    (t.top = yn(r.top, t.top)),
                    (t.right = wn(r.right, t.right)),
                    (t.bottom = wn(r.bottom, t.bottom)),
                    (t.left = yn(r.left, t.left)),
                    t
                  );
                }, Qn(e, a));
              return (
                (s.width = s.right - s.left),
                (s.height = s.bottom - s.top),
                (s.x = s.left),
                (s.y = s.top),
                s
              );
            })(on(g) ? g : g.contextElement || vn(e.elements.popper), s, l),
            y = cn(e.elements.reference),
            w = er({
              reference: y,
              element: b,
              strategy: "absolute",
              placement: o,
            }),
            E = Jn(Object.assign({}, b, w)),
            N = u === Ln ? E : y,
            C = {
              top: x.top - N.top + v.top,
              bottom: N.bottom - x.bottom + v.bottom,
              left: x.left - N.left + v.left,
              right: N.right - x.right + v.right,
            },
            j = e.modifiersData.offset;
          if (u === Ln && j) {
            var O = j[o];
            Object.keys(C).forEach(function (e) {
              var t = [kn, Pn].indexOf(e) >= 0 ? 1 : -1,
                n = [On, Pn].indexOf(e) >= 0 ? "y" : "x";
              C[e] += O[n] * t;
            });
          }
          return C;
        }
        function nr(e, t, n) {
          return (
            void 0 === n && (n = { x: 0, y: 0 }),
            {
              top: e.top - t.height - n.y,
              right: e.right - t.width + n.x,
              bottom: e.bottom - t.height + n.y,
              left: e.left - t.width - n.x,
            }
          );
        }
        function rr(e) {
          return [On, kn, Pn, Rn].some(function (t) {
            return e[t] >= 0;
          });
        }
        function or(e, t, n) {
          void 0 === n && (n = !1);
          var r,
            o,
            a = an(t),
            s =
              an(t) &&
              (function (e) {
                var t = e.getBoundingClientRect(),
                  n = t.width / e.offsetWidth || 1,
                  r = t.height / e.offsetHeight || 1;
                return 1 !== n || 1 !== r;
              })(t),
            i = vn(t),
            l = cn(e, s),
            c = { scrollLeft: 0, scrollTop: 0 },
            u = { x: 0, y: 0 };
          return (
            (a || (!a && !n)) &&
              (("body" !== fn(t) || Xn(i)) &&
                (c =
                  (r = t) !== rn(r) && an(r)
                    ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                    : qn(r)),
              an(t)
                ? (((u = cn(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
                : i && (u.x = Gn(i))),
            {
              x: l.left + c.scrollLeft - u.x,
              y: l.top + c.scrollTop - u.y,
              width: l.width,
              height: l.height,
            }
          );
        }
        function ar(e) {
          var t = new Map(),
            n = new Set(),
            r = [];
          function o(e) {
            n.add(e.name),
              []
                .concat(e.requires || [], e.requiresIfExists || [])
                .forEach(function (e) {
                  if (!n.has(e)) {
                    var r = t.get(e);
                    r && o(r);
                  }
                }),
              r.push(e);
          }
          return (
            e.forEach(function (e) {
              t.set(e.name, e);
            }),
            e.forEach(function (e) {
              n.has(e.name) || o(e);
            }),
            r
          );
        }
        var sr = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function ir() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return !t.some(function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
          });
        }
        const lr = (function (e) {
            void 0 === e && (e = {});
            var t = e,
              n = t.defaultModifiers,
              r = void 0 === n ? [] : n,
              o = t.defaultOptions,
              a = void 0 === o ? sr : o;
            return function (e, t, n) {
              void 0 === n && (n = a);
              var o,
                s,
                i = {
                  placement: "bottom",
                  orderedModifiers: [],
                  options: Object.assign({}, sr, a),
                  modifiersData: {},
                  elements: { reference: e, popper: t },
                  attributes: {},
                  styles: {},
                },
                l = [],
                c = !1,
                u = {
                  state: i,
                  setOptions: function (n) {
                    var o = "function" == typeof n ? n(i.options) : n;
                    d(),
                      (i.options = Object.assign({}, a, i.options, o)),
                      (i.scrollParents = {
                        reference: on(e)
                          ? Zn(e)
                          : e.contextElement
                          ? Zn(e.contextElement)
                          : [],
                        popper: Zn(t),
                      });
                    var s,
                      c,
                      f = (function (e) {
                        var t = ar(e);
                        return An.reduce(function (e, n) {
                          return e.concat(
                            t.filter(function (e) {
                              return e.phase === n;
                            })
                          );
                        }, []);
                      })(
                        ((s = [].concat(r, i.options.modifiers)),
                        (c = s.reduce(function (e, t) {
                          var n = e[t.name];
                          return (
                            (e[t.name] = n
                              ? Object.assign({}, n, t, {
                                  options: Object.assign(
                                    {},
                                    n.options,
                                    t.options
                                  ),
                                  data: Object.assign({}, n.data, t.data),
                                })
                              : t),
                            e
                          );
                        }, {})),
                        Object.keys(c).map(function (e) {
                          return c[e];
                        }))
                      );
                    return (
                      (i.orderedModifiers = f.filter(function (e) {
                        return e.enabled;
                      })),
                      i.orderedModifiers.forEach(function (e) {
                        var t = e.name,
                          n = e.options,
                          r = void 0 === n ? {} : n,
                          o = e.effect;
                        if ("function" == typeof o) {
                          var a = o({
                            state: i,
                            name: t,
                            instance: u,
                            options: r,
                          });
                          l.push(a || function () {});
                        }
                      }),
                      u.update()
                    );
                  },
                  forceUpdate: function () {
                    if (!c) {
                      var e = i.elements,
                        t = e.reference,
                        n = e.popper;
                      if (ir(t, n)) {
                        (i.rects = {
                          reference: or(
                            t,
                            gn(n),
                            "fixed" === i.options.strategy
                          ),
                          popper: un(n),
                        }),
                          (i.reset = !1),
                          (i.placement = i.options.placement),
                          i.orderedModifiers.forEach(function (e) {
                            return (i.modifiersData[e.name] = Object.assign(
                              {},
                              e.data
                            ));
                          });
                        for (var r = 0; r < i.orderedModifiers.length; r++)
                          if (!0 !== i.reset) {
                            var o = i.orderedModifiers[r],
                              a = o.fn,
                              s = o.options,
                              l = void 0 === s ? {} : s,
                              d = o.name;
                            "function" == typeof a &&
                              (i =
                                a({
                                  state: i,
                                  options: l,
                                  name: d,
                                  instance: u,
                                }) || i);
                          } else (i.reset = !1), (r = -1);
                      }
                    }
                  },
                  update:
                    ((o = function () {
                      return new Promise(function (e) {
                        u.forceUpdate(), e(i);
                      });
                    }),
                    function () {
                      return (
                        s ||
                          (s = new Promise(function (e) {
                            Promise.resolve().then(function () {
                              (s = void 0), e(o());
                            });
                          })),
                        s
                      );
                    }),
                  destroy: function () {
                    d(), (c = !0);
                  },
                };
              if (!ir(e, t)) return u;
              function d() {
                l.forEach(function (e) {
                  return e();
                }),
                  (l = []);
              }
              return (
                u.setOptions(n).then(function (e) {
                  !c && n.onFirstUpdate && n.onFirstUpdate(e);
                }),
                u
              );
            };
          })({
            defaultModifiers: [
              {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function (e) {
                  var t = e.state,
                    n = e.name,
                    r = t.rects.reference,
                    o = t.rects.popper,
                    a = t.modifiersData.preventOverflow,
                    s = tr(t, { elementContext: "reference" }),
                    i = tr(t, { altBoundary: !0 }),
                    l = nr(s, r),
                    c = nr(i, o, a),
                    u = rr(l),
                    d = rr(c);
                  (t.modifiersData[n] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: u,
                    hasPopperEscaped: d,
                  }),
                    (t.attributes.popper = Object.assign(
                      {},
                      t.attributes.popper,
                      {
                        "data-popper-reference-hidden": u,
                        "data-popper-escaped": d,
                      }
                    ));
                },
              },
              {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function (e) {
                  var t = e.state,
                    n = e.name;
                  t.modifiersData[n] = er({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement,
                  });
                },
                data: {},
              },
              {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function (e) {
                  var t = e.state,
                    n = e.options,
                    r = n.gpuAcceleration,
                    o = void 0 === r || r,
                    a = n.adaptive,
                    s = void 0 === a || a,
                    i = n.roundOffsets,
                    l = void 0 === i || i,
                    c = {
                      placement: nn(t.placement),
                      variation: Fn(t.placement),
                      popper: t.elements.popper,
                      popperRect: t.rects.popper,
                      gpuAcceleration: o,
                    };
                  null != t.modifiersData.popperOffsets &&
                    (t.styles.popper = Object.assign(
                      {},
                      t.styles.popper,
                      Hn(
                        Object.assign({}, c, {
                          offsets: t.modifiersData.popperOffsets,
                          position: t.options.strategy,
                          adaptive: s,
                          roundOffsets: l,
                        })
                      )
                    )),
                    null != t.modifiersData.arrow &&
                      (t.styles.arrow = Object.assign(
                        {},
                        t.styles.arrow,
                        Hn(
                          Object.assign({}, c, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: l,
                          })
                        )
                      )),
                    (t.attributes.popper = Object.assign(
                      {},
                      t.attributes.popper,
                      { "data-popper-placement": t.placement }
                    ));
                },
                data: {},
              },
              {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function () {},
                effect: function (e) {
                  var t = e.state,
                    n = e.instance,
                    r = e.options,
                    o = r.scroll,
                    a = void 0 === o || o,
                    s = r.resize,
                    i = void 0 === s || s,
                    l = rn(t.elements.popper),
                    c = [].concat(
                      t.scrollParents.reference,
                      t.scrollParents.popper
                    );
                  return (
                    a &&
                      c.forEach(function (e) {
                        e.addEventListener("scroll", n.update, _n);
                      }),
                    i && l.addEventListener("resize", n.update, _n),
                    function () {
                      a &&
                        c.forEach(function (e) {
                          e.removeEventListener("scroll", n.update, _n);
                        }),
                        i && l.removeEventListener("resize", n.update, _n);
                    }
                  );
                },
                data: {},
              },
              {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function (e) {
                  var t = e.state,
                    n = e.options,
                    r = e.name,
                    o = n.offset,
                    a = void 0 === o ? [0, 0] : o,
                    s = Bn.reduce(function (e, n) {
                      return (
                        (e[n] = (function (e, t, n) {
                          var r = nn(e),
                            o = [Rn, On].indexOf(r) >= 0 ? -1 : 1,
                            a =
                              "function" == typeof n
                                ? n(Object.assign({}, t, { placement: e }))
                                : n,
                            s = a[0],
                            i = a[1];
                          return (
                            (s = s || 0),
                            (i = (i || 0) * o),
                            [Rn, kn].indexOf(r) >= 0
                              ? { x: i, y: s }
                              : { x: s, y: i }
                          );
                        })(n, t.rects, a)),
                        e
                      );
                    }, {}),
                    i = s[t.placement],
                    l = i.x,
                    c = i.y;
                  null != t.modifiersData.popperOffsets &&
                    ((t.modifiersData.popperOffsets.x += l),
                    (t.modifiersData.popperOffsets.y += c)),
                    (t.modifiersData[r] = s);
                },
              },
              {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function (e) {
                  var t = e.state,
                    n = e.options,
                    r = e.name;
                  if (!t.modifiersData[r]._skip) {
                    for (
                      var o = n.mainAxis,
                        a = void 0 === o || o,
                        s = n.altAxis,
                        i = void 0 === s || s,
                        l = n.fallbackPlacements,
                        c = n.padding,
                        u = n.boundary,
                        d = n.rootBoundary,
                        f = n.altBoundary,
                        p = n.flipVariations,
                        m = void 0 === p || p,
                        v = n.allowedAutoPlacements,
                        h = t.options.placement,
                        b = nn(h),
                        g =
                          l ||
                          (b !== h && m
                            ? (function (e) {
                                if (nn(e) === Tn) return [];
                                var t = zn(e);
                                return [Un(e), t, Un(t)];
                              })(h)
                            : [zn(h)]),
                        x = [h].concat(g).reduce(function (e, n) {
                          return e.concat(
                            nn(n) === Tn
                              ? (function (e, t) {
                                  void 0 === t && (t = {});
                                  var n = t,
                                    r = n.placement,
                                    o = n.boundary,
                                    a = n.rootBoundary,
                                    s = n.padding,
                                    i = n.flipVariations,
                                    l = n.allowedAutoPlacements,
                                    c = void 0 === l ? Bn : l,
                                    u = Fn(r),
                                    d = u
                                      ? i
                                        ? Dn
                                        : Dn.filter(function (e) {
                                            return Fn(e) === u;
                                          })
                                      : $n,
                                    f = d.filter(function (e) {
                                      return c.indexOf(e) >= 0;
                                    });
                                  0 === f.length && (f = d);
                                  var p = f.reduce(function (t, n) {
                                    return (
                                      (t[n] = tr(e, {
                                        placement: n,
                                        boundary: o,
                                        rootBoundary: a,
                                        padding: s,
                                      })[nn(n)]),
                                      t
                                    );
                                  }, {});
                                  return Object.keys(p).sort(function (e, t) {
                                    return p[e] - p[t];
                                  });
                                })(t, {
                                  placement: n,
                                  boundary: u,
                                  rootBoundary: d,
                                  padding: c,
                                  flipVariations: m,
                                  allowedAutoPlacements: v,
                                })
                              : n
                          );
                        }, []),
                        y = t.rects.reference,
                        w = t.rects.popper,
                        E = new Map(),
                        N = !0,
                        C = x[0],
                        j = 0;
                      j < x.length;
                      j++
                    ) {
                      var O = x[j],
                        P = nn(O),
                        k = Fn(O) === Sn,
                        R = [On, Pn].indexOf(P) >= 0,
                        T = R ? "width" : "height",
                        $ = tr(t, {
                          placement: O,
                          boundary: u,
                          rootBoundary: d,
                          altBoundary: f,
                          padding: c,
                        }),
                        S = R ? (k ? kn : Rn) : k ? Pn : On;
                      y[T] > w[T] && (S = zn(S));
                      var M = zn(S),
                        I = [];
                      if (
                        (a && I.push($[P] <= 0),
                        i && I.push($[S] <= 0, $[M] <= 0),
                        I.every(function (e) {
                          return e;
                        }))
                      ) {
                        (C = O), (N = !1);
                        break;
                      }
                      E.set(O, I);
                    }
                    if (N)
                      for (
                        var L = function (e) {
                            var t = x.find(function (t) {
                              var n = E.get(t);
                              if (n)
                                return n.slice(0, e).every(function (e) {
                                  return e;
                                });
                            });
                            if (t) return (C = t), "break";
                          },
                          D = m ? 3 : 1;
                        D > 0 && "break" !== L(D);
                        D--
                      );
                    t.placement !== C &&
                      ((t.modifiersData[r]._skip = !0),
                      (t.placement = C),
                      (t.reset = !0));
                  }
                },
                requiresIfExists: ["offset"],
                data: { _skip: !1 },
              },
              {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function (e) {
                  var t = e.state,
                    n = e.options,
                    r = e.name,
                    o = n.mainAxis,
                    a = void 0 === o || o,
                    s = n.altAxis,
                    i = void 0 !== s && s,
                    l = n.boundary,
                    c = n.rootBoundary,
                    u = n.altBoundary,
                    d = n.padding,
                    f = n.tether,
                    p = void 0 === f || f,
                    m = n.tetherOffset,
                    v = void 0 === m ? 0 : m,
                    h = tr(t, {
                      boundary: l,
                      rootBoundary: c,
                      padding: d,
                      altBoundary: u,
                    }),
                    b = nn(t.placement),
                    g = Fn(t.placement),
                    x = !g,
                    y = xn(b),
                    w = "x" === y ? "y" : "x",
                    E = t.modifiersData.popperOffsets,
                    N = t.rects.reference,
                    C = t.rects.popper,
                    j =
                      "function" == typeof v
                        ? v(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : v,
                    O = { x: 0, y: 0 };
                  if (E) {
                    if (a || i) {
                      var P = "y" === y ? On : Rn,
                        k = "y" === y ? Pn : kn,
                        R = "y" === y ? "height" : "width",
                        T = E[y],
                        $ = E[y] + h[P],
                        S = E[y] - h[k],
                        M = p ? -C[R] / 2 : 0,
                        I = g === Sn ? N[R] : C[R],
                        L = g === Sn ? -C[R] : -N[R],
                        D = t.elements.arrow,
                        B = p && D ? un(D) : { width: 0, height: 0 },
                        A = t.modifiersData["arrow#persistent"]
                          ? t.modifiersData["arrow#persistent"].padding
                          : { top: 0, right: 0, bottom: 0, left: 0 },
                        F = A[P],
                        K = A[k],
                        H = Nn(0, N[R], B[R]),
                        _ = x ? N[R] / 2 - M - H - F - j : I - H - F - j,
                        W = x ? -N[R] / 2 + M + H + K + j : L + H + K + j,
                        z = t.elements.arrow && gn(t.elements.arrow),
                        V = z
                          ? "y" === y
                            ? z.clientTop || 0
                            : z.clientLeft || 0
                          : 0,
                        U = t.modifiersData.offset
                          ? t.modifiersData.offset[t.placement][y]
                          : 0,
                        q = E[y] + _ - U - V,
                        G = E[y] + W - U;
                      if (a) {
                        var X = Nn(p ? wn($, q) : $, T, p ? yn(S, G) : S);
                        (E[y] = X), (O[y] = X - T);
                      }
                      if (i) {
                        var Y = "x" === y ? On : Rn,
                          Z = "x" === y ? Pn : kn,
                          J = E[w],
                          Q = J + h[Y],
                          ee = J - h[Z],
                          te = Nn(p ? wn(Q, q) : Q, J, p ? yn(ee, G) : ee);
                        (E[w] = te), (O[w] = te - J);
                      }
                    }
                    t.modifiersData[r] = O;
                  }
                },
                requiresIfExists: ["offset"],
              },
              {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function (e) {
                  var t,
                    n = e.state,
                    r = e.name,
                    o = e.options,
                    a = n.elements.arrow,
                    s = n.modifiersData.popperOffsets,
                    i = nn(n.placement),
                    l = xn(i),
                    c = [Rn, kn].indexOf(i) >= 0 ? "height" : "width";
                  if (a && s) {
                    var u = (function (e, t) {
                        return Cn(
                          "number" !=
                            typeof (e =
                              "function" == typeof e
                                ? e(
                                    Object.assign({}, t.rects, {
                                      placement: t.placement,
                                    })
                                  )
                                : e)
                            ? e
                            : jn(e, $n)
                        );
                      })(o.padding, n),
                      d = un(a),
                      f = "y" === l ? On : Rn,
                      p = "y" === l ? Pn : kn,
                      m =
                        n.rects.reference[c] +
                        n.rects.reference[l] -
                        s[l] -
                        n.rects.popper[c],
                      v = s[l] - n.rects.reference[l],
                      h = gn(a),
                      b = h
                        ? "y" === l
                          ? h.clientHeight || 0
                          : h.clientWidth || 0
                        : 0,
                      g = m / 2 - v / 2,
                      x = u[f],
                      y = b - d[c] - u[p],
                      w = b / 2 - d[c] / 2 + g,
                      E = Nn(x, w, y),
                      N = l;
                    n.modifiersData[r] =
                      (((t = {})[N] = E), (t.centerOffset = E - w), t);
                  }
                },
                effect: function (e) {
                  var t = e.state,
                    n = e.options.element,
                    r = void 0 === n ? "[data-popper-arrow]" : n;
                  null != r &&
                    ("string" != typeof r ||
                      (r = t.elements.popper.querySelector(r))) &&
                    dn(t.elements.popper, r) &&
                    (t.elements.arrow = r);
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"],
              },
            ],
          }),
          cr = ["enabled", "placement", "strategy", "modifiers"],
          ur = {
            name: "applyStyles",
            enabled: !1,
            phase: "afterWrite",
            fn: () => {},
          },
          dr = {
            name: "ariaDescribedBy",
            enabled: !0,
            phase: "afterWrite",
            effect:
              ({ state: e }) =>
              () => {
                const { reference: t, popper: n } = e.elements;
                if ("removeAttribute" in t) {
                  const e = (t.getAttribute("aria-describedby") || "")
                    .split(",")
                    .filter((e) => e.trim() !== n.id);
                  e.length
                    ? t.setAttribute("aria-describedby", e.join(","))
                    : t.removeAttribute("aria-describedby");
                }
              },
            fn: ({ state: e }) => {
              var t;
              const { popper: n, reference: r } = e.elements,
                o =
                  null == (t = n.getAttribute("role"))
                    ? void 0
                    : t.toLowerCase();
              if (n.id && "tooltip" === o && "setAttribute" in r) {
                const e = r.getAttribute("aria-describedby");
                if (e && -1 !== e.split(",").indexOf(n.id)) return;
                r.setAttribute("aria-describedby", e ? `${e},${n.id}` : n.id);
              }
            },
          },
          fr = [],
          pr = function (e, t, r = {}) {
            let {
                enabled: o = !0,
                placement: a = "bottom",
                strategy: s = "absolute",
                modifiers: i = fr,
              } = r,
              l = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(r, cr);
            const c = (0, n.useRef)(i),
              u = (0, n.useRef)(),
              d = (0, n.useCallback)(() => {
                var e;
                null == (e = u.current) || e.update();
              }, []),
              f = (0, n.useCallback)(() => {
                var e;
                null == (e = u.current) || e.forceUpdate();
              }, []),
              [p, m] =
                ((b = (0, n.useState)({
                  placement: a,
                  update: d,
                  forceUpdate: f,
                  attributes: {},
                  styles: { popper: {}, arrow: {} },
                })),
                (g = Te()),
                [
                  b[0],
                  (0, n.useCallback)(
                    function (e) {
                      if (g()) return b[1](e);
                    },
                    [g, b[1]]
                  ),
                ]),
              v = (0, n.useMemo)(
                () => ({
                  name: "updateStateModifier",
                  enabled: !0,
                  phase: "write",
                  requires: ["computeStyles"],
                  fn: ({ state: e }) => {
                    const t = {},
                      n = {};
                    Object.keys(e.elements).forEach((r) => {
                      (t[r] = e.styles[r]), (n[r] = e.attributes[r]);
                    }),
                      m({
                        state: e,
                        styles: t,
                        attributes: n,
                        update: d,
                        forceUpdate: f,
                        placement: e.placement,
                      });
                  },
                }),
                [d, f, m]
              ),
              h = (0, n.useMemo)(
                () => (tn(c.current, i) || (c.current = i), c.current),
                [i]
              );
            var b, g;
            return (
              (0, n.useEffect)(() => {
                u.current &&
                  o &&
                  u.current.setOptions({
                    placement: a,
                    strategy: s,
                    modifiers: [...h, v, ur],
                  });
              }, [s, a, v, o, h]),
              (0, n.useEffect)(() => {
                if (o && null != e && null != t)
                  return (
                    (u.current = lr(
                      e,
                      t,
                      Object.assign({}, l, {
                        placement: a,
                        strategy: s,
                        modifiers: [...h, dr, v],
                      })
                    )),
                    () => {
                      null != u.current &&
                        (u.current.destroy(),
                        (u.current = void 0),
                        m((e) =>
                          Object.assign({}, e, {
                            attributes: {},
                            styles: { popper: {} },
                          })
                        ));
                    }
                  );
              }, [o, e, t]),
              p
            );
          };
        function mr(e, t) {
          return e.contains
            ? e.contains(t)
            : e.compareDocumentPosition
            ? e === t || !!(16 & e.compareDocumentPosition(t))
            : void 0;
        }
        var vr = o(459),
          hr = o.n(vr);
        const br = () => {},
          gr = (e) => e && ("current" in e ? e.current : e),
          xr = function (
            e,
            t,
            { disabled: r, clickTrigger: o = "click" } = {}
          ) {
            const a = (0, n.useRef)(!1),
              s = t || br,
              i = (0, n.useCallback)(
                (t) => {
                  const n = gr(e);
                  var r;
                  hr()(
                    !!n,
                    "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"
                  ),
                    (a.current = !(
                      n &&
                      ((r = t),
                      !(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)) &&
                      (function (e) {
                        return 0 === e.button;
                      })(t) &&
                      !mr(n, t.target)
                    ));
                },
                [e]
              ),
              l = Re((e) => {
                a.current || s(e);
              }),
              c = Re((e) => {
                27 === e.keyCode && s(e);
              });
            (0, n.useEffect)(() => {
              if (r || null == e) return;
              let t = window.event;
              const n = w(gr(e)),
                a = q(n, o, i, !0),
                s = q(n, o, (e) => {
                  e !== t ? l(e) : (t = void 0);
                }),
                u = q(n, "keyup", (e) => {
                  e !== t ? c(e) : (t = void 0);
                });
              let d = [];
              return (
                "ontouchstart" in n.documentElement &&
                  (d = [].slice
                    .call(n.body.children)
                    .map((e) => q(e, "mousemove", br))),
                () => {
                  a(), s(), u(), d.forEach((e) => e());
                }
              );
            }, [e, r, o, i, l, c]);
          };
        function yr(e = {}) {
          return Array.isArray(e)
            ? e
            : Object.keys(e).map((t) => ((e[t].name = t), e[t]));
        }
        function wr({
          enabled: e,
          enableEvents: t,
          placement: n,
          flip: r,
          offset: o,
          fixed: a,
          containerPadding: s,
          arrowElement: i,
          popperConfig: l = {},
        }) {
          var c, u, d, f;
          const p = (function (e) {
            const t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach((e) => {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(l.modifiers);
          return Object.assign({}, l, {
            placement: n,
            enabled: e,
            strategy: a ? "fixed" : l.strategy,
            modifiers: yr(
              Object.assign({}, p, {
                eventListeners: { enabled: t },
                preventOverflow: Object.assign({}, p.preventOverflow, {
                  options: s
                    ? Object.assign(
                        { padding: s },
                        null == (c = p.preventOverflow) ? void 0 : c.options
                      )
                    : null == (u = p.preventOverflow)
                    ? void 0
                    : u.options,
                }),
                offset: {
                  options: Object.assign(
                    { offset: o },
                    null == (d = p.offset) ? void 0 : d.options
                  ),
                },
                arrow: Object.assign({}, p.arrow, {
                  enabled: !!i,
                  options: Object.assign(
                    {},
                    null == (f = p.arrow) ? void 0 : f.options,
                    { element: i }
                  ),
                }),
                flip: Object.assign({ enabled: !!r }, p.flip),
              })
            ),
          });
        }
        const Er = ["children"],
          Nr = () => {};
        function Cr(e = {}) {
          const t = (0, n.useContext)(Jt),
            [r, o] = ke(),
            a = (0, n.useRef)(!1),
            {
              flip: s,
              offset: i,
              rootCloseEvent: l,
              fixed: c = !1,
              placement: u,
              popperConfig: d = {},
              enableEventListeners: f = !0,
              usePopper: p = !!t,
            } = e,
            m = null == (null == t ? void 0 : t.show) ? !!e.show : t.show;
          m && !a.current && (a.current = !0);
          const {
              placement: v,
              setMenu: h,
              menuElement: b,
              toggleElement: g,
            } = t || {},
            x = pr(
              g,
              b,
              wr({
                placement: u || v || "bottom-start",
                enabled: p,
                enableEvents: null == f ? m : f,
                offset: i,
                flip: s,
                fixed: c,
                arrowElement: r,
                popperConfig: d,
              })
            ),
            y = Object.assign(
              { ref: h || Nr, "aria-labelledby": null == g ? void 0 : g.id },
              x.attributes.popper,
              { style: x.styles.popper }
            ),
            w = {
              show: m,
              placement: v,
              hasShown: a.current,
              toggle: null == t ? void 0 : t.toggle,
              popper: p ? x : null,
              arrowProps: p
                ? Object.assign({ ref: o }, x.attributes.arrow, {
                    style: x.styles.arrow,
                  })
                : {},
            };
          return (
            xr(
              b,
              (e) => {
                null == t || t.toggle(!1, e);
              },
              { clickTrigger: l, disabled: !m }
            ),
            [y, w]
          );
        }
        function jr(e) {
          let { children: t } = e,
            n = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Er);
          const [r, o] = Cr(n);
          return (0, m.jsx)(m.Fragment, { children: t(r, o) });
        }
        (jr.displayName = "DropdownMenu"),
          (jr.defaultProps = { usePopper: !0 });
        const Or = jr,
          Pr = { prefix: Math.round(1e10 * Math.random()), current: 0 },
          kr = r().createContext(Pr);
        let Rr = Boolean(
          "undefined" != typeof window &&
            window.document &&
            window.document.createElement
        );
        function Tr(e) {
          let t = (0, n.useContext)(kr);
          return (
            t !== Pr ||
              Rr ||
              console.warn(
                "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."
              ),
            (0, n.useMemo)(
              () => e || "react-aria-" + t.prefix + "-" + ++t.current,
              [e]
            )
          );
        }
        const $r = (e) => {
            var t;
            return (
              "menu" ===
              (null == (t = e.getAttribute("role")) ? void 0 : t.toLowerCase())
            );
          },
          Sr = () => {};
        function Mr() {
          const e = Tr(),
            {
              show: t = !1,
              toggle: r = Sr,
              setToggle: o,
              menuElement: a,
            } = (0, n.useContext)(Jt) || {},
            s = (0, n.useCallback)(
              (e) => {
                r(!t, e);
              },
              [t, r]
            ),
            i = { id: e, ref: o || Sr, onClick: s, "aria-expanded": !!t };
          return (
            a && $r(a) && (i["aria-haspopup"] = !0), [i, { show: t, toggle: r }]
          );
        }
        function Ir({ children: e }) {
          const [t, n] = Mr();
          return (0, m.jsx)(m.Fragment, { children: e(t, n) });
        }
        Ir.displayName = "DropdownToggle";
        const Lr = Ir,
          Dr = (e, t = null) => (null != e ? String(e) : t || null),
          Br = n.createContext(null),
          Ar = n.createContext(null);
        Ar.displayName = "NavContext";
        const Fr = Ar;
        function Kr(e) {
          return `data-rr-ui-${e}`;
        }
        const Hr = ["eventKey", "disabled", "onClick", "active", "as"];
        function _r({ key: e, href: t, active: r, disabled: o, onClick: a }) {
          const s = (0, n.useContext)(Br),
            i = (0, n.useContext)(Fr),
            { activeKey: l } = i || {},
            c = Dr(e, t),
            u = null == r && null != e ? Dr(l) === c : r;
          return [
            {
              onClick: Re((e) => {
                o ||
                  (null == a || a(e),
                  s && !e.isPropagationStopped() && s(c, e));
              }),
              "aria-disabled": o || void 0,
              "aria-selected": u,
              [Kr("dropdown-item")]: "",
            },
            { isActive: u },
          ];
        }
        const Wr = n.forwardRef((e, t) => {
          let {
              eventKey: n,
              disabled: r,
              onClick: o,
              active: a,
              as: s = De,
            } = e,
            i = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Hr);
          const [l] = _r({
            key: n,
            href: i.href,
            disabled: r,
            onClick: o,
            active: a,
          });
          return (0, m.jsx)(s, Object.assign({}, i, { ref: t }, l));
        });
        Wr.displayName = "DropdownItem";
        const zr = Wr;
        function Vr() {
          const e = Zt(),
            t = (0, n.useRef)(null),
            r = (0, n.useCallback)(
              (n) => {
                (t.current = n), e();
              },
              [e]
            );
          return [t, r];
        }
        function Ur({
          defaultShow: e,
          show: t,
          onSelect: r,
          onToggle: o,
          itemSelector: a = `* [${Kr("dropdown-item")}]`,
          focusFirstItemOnShow: s,
          placement: i = "bottom-start",
          children: l,
        }) {
          const [c, u] = f(t, e, o),
            [d, p] = Vr(),
            v = d.current,
            [h, b] = Vr(),
            g = h.current,
            x = $e(c),
            y = (0, n.useRef)(null),
            w = (0, n.useRef)(!1),
            E = (0, n.useContext)(Br),
            N = (0, n.useCallback)(
              (e, t, n = null == t ? void 0 : t.type) => {
                u(e, { originalEvent: t, source: n });
              },
              [u]
            ),
            C = Re((e, t) => {
              null == r || r(e, t),
                N(!1, t, "select"),
                t.isPropagationStopped() || null == E || E(e, t);
            }),
            j = (0, n.useMemo)(
              () => ({
                toggle: N,
                placement: i,
                show: c,
                menuElement: v,
                toggleElement: g,
                setMenu: p,
                setToggle: b,
              }),
              [N, i, c, v, g, p, b]
            );
          v && x && !c && (w.current = v.contains(document.activeElement));
          const O = Re(() => {
              g && g.focus && g.focus();
            }),
            P = Re(() => {
              const e = y.current;
              let t = s;
              if (
                (null == t &&
                  (t = !(!d.current || !$r(d.current)) && "keyboard"),
                !1 === t || ("keyboard" === t && !/^key.+$/.test(e)))
              )
                return;
              const n = Yt(d.current, a)[0];
              n && n.focus && n.focus();
            });
          (0, n.useEffect)(() => {
            c ? P() : w.current && ((w.current = !1), O());
          }, [c, w, O, P]),
            (0, n.useEffect)(() => {
              y.current = null;
            });
          const k = (e, t) => {
            if (!d.current) return null;
            const n = Yt(d.current, a);
            let r = n.indexOf(e) + t;
            return (r = Math.max(0, Math.min(r, n.length))), n[r];
          };
          return (
            (R = "keydown"),
            (T = (e) => {
              var t, n;
              const { key: r } = e,
                o = e.target,
                a = null == (t = d.current) ? void 0 : t.contains(o),
                s = null == (n = h.current) ? void 0 : n.contains(o);
              if (
                /input|textarea/i.test(o.tagName) &&
                (" " === r || ("Escape" !== r && a))
              )
                return;
              if (!a && !s) return;
              if (!("Tab" !== r || (d.current && c))) return;
              y.current = e.type;
              const i = { originalEvent: e, source: e.type };
              switch (r) {
                case "ArrowUp": {
                  const t = k(o, -1);
                  return t && t.focus && t.focus(), void e.preventDefault();
                }
                case "ArrowDown":
                  if ((e.preventDefault(), c)) {
                    const e = k(o, 1);
                    e && e.focus && e.focus();
                  } else u(!0, i);
                  return;
                case "Tab":
                  V(
                    document,
                    "keyup",
                    (e) => {
                      var t;
                      (("Tab" !== e.key || e.target) &&
                        null != (t = d.current) &&
                        t.contains(e.target)) ||
                        u(!1, i);
                    },
                    { once: !0 }
                  );
                  break;
                case "Escape":
                  "Escape" === r && (e.preventDefault(), e.stopPropagation()),
                    u(!1, i);
              }
            }),
            void 0 === $ && ($ = !1),
            (function (e, t, r, o) {
              void 0 === o && (o = !1);
              var a = Re(r);
              (0, n.useEffect)(
                function () {
                  var n = "function" == typeof e ? e() : e;
                  return (
                    n.addEventListener(t, a, o),
                    function () {
                      return n.removeEventListener(t, a, o);
                    }
                  );
                },
                [e]
              );
            })(
              (0, n.useCallback)(function () {
                return document;
              }, []),
              R,
              T,
              $
            ),
            (0, m.jsx)(Br.Provider, {
              value: C,
              children: (0, m.jsx)(Jt.Provider, { value: j, children: l }),
            })
          );
          var R, T, $;
        }
        (Ur.displayName = "Dropdown"),
          (Ur.Menu = Or),
          (Ur.Toggle = Lr),
          (Ur.Item = zr);
        const qr = Ur,
          Gr = n.createContext({});
        Gr.displayName = "DropdownContext";
        const Xr = Gr,
          Yr = n.forwardRef(
            (
              {
                bsPrefix: e,
                className: n,
                eventKey: r,
                disabled: o = !1,
                onClick: a,
                active: s,
                as: i = Fe,
                ...l
              },
              c
            ) => {
              const u = g(e, "dropdown-item"),
                [d, f] = _r({
                  key: r,
                  href: l.href,
                  disabled: o,
                  onClick: a,
                  active: s,
                });
              return (0, m.jsx)(i, {
                ...l,
                ...d,
                ref: c,
                className: t()(n, u, f.isActive && "active", o && "disabled"),
              });
            }
          );
        Yr.displayName = "DropdownItem";
        const Zr = Yr;
        var Jr =
          void 0 !== o.g &&
          o.g.navigator &&
          "ReactNative" === o.g.navigator.product;
        const Qr =
            "undefined" != typeof document || Jr
              ? n.useLayoutEffect
              : n.useEffect,
          eo = n.createContext(null);
        eo.displayName = "InputGroupContext";
        const to = eo,
          no = n.createContext(null);
        no.displayName = "NavbarContext";
        const ro = no;
        function oo(e, t) {
          return e;
        }
        function ao(e, t, n) {
          let r = e
            ? n
              ? "bottom-start"
              : "bottom-end"
            : n
            ? "bottom-end"
            : "bottom-start";
          return (
            "up" === t
              ? (r = e
                  ? n
                    ? "top-start"
                    : "top-end"
                  : n
                  ? "top-end"
                  : "top-start")
              : "end" === t
              ? (r = e
                  ? n
                    ? "left-end"
                    : "right-end"
                  : n
                  ? "left-start"
                  : "right-start")
              : "start" === t &&
                (r = e
                  ? n
                    ? "right-end"
                    : "left-end"
                  : n
                  ? "right-start"
                  : "left-start"),
            r
          );
        }
        const so = n.forwardRef(
          (
            {
              bsPrefix: e,
              className: r,
              align: o,
              rootCloseEvent: a,
              flip: s,
              show: i,
              renderOnMount: l,
              as: c = "div",
              popperConfig: u,
              variant: d,
              ...f
            },
            p
          ) => {
            let v = !1;
            const h = (0, n.useContext)(ro),
              b = g(e, "dropdown-menu"),
              { align: x, drop: y, isRTL: w } = (0, n.useContext)(Xr);
            o = o || x;
            const E = (0, n.useContext)(to),
              N = [];
            if (o)
              if ("object" == typeof o) {
                const e = Object.keys(o);
                if (e.length) {
                  const t = e[0],
                    n = o[t];
                  (v = "start" === n), N.push(`${b}-${t}-${n}`);
                }
              } else "end" === o && (v = !0);
            const C = ao(v, y, w),
              [j, { hasShown: O, popper: P, show: k, toggle: R }] = Cr({
                flip: s,
                rootCloseEvent: a,
                show: i,
                usePopper: !h && 0 === N.length,
                offset: [0, 2],
                popperConfig: u,
                placement: C,
              });
            if (
              ((j.ref = ee(oo(p), j.ref)),
              Qr(() => {
                k && (null == P || P.update());
              }, [k]),
              !O && !l && !E)
            )
              return null;
            "string" != typeof c &&
              ((j.show = k),
              (j.close = () => (null == R ? void 0 : R(!1))),
              (j.align = o));
            let T = f.style;
            return (
              null != P &&
                P.placement &&
                ((T = { ...f.style, ...j.style }),
                (f["x-placement"] = P.placement)),
              (0, m.jsx)(c, {
                ...f,
                ...j,
                style: T,
                ...((N.length || h) && { "data-bs-popper": "static" }),
                className: t()(
                  r,
                  b,
                  k && "show",
                  v && `${b}-end`,
                  d && `${b}-${d}`,
                  ...N
                ),
              })
            );
          }
        );
        (so.displayName = "DropdownMenu"), (so.defaultProps = { flip: !0 });
        const io = so,
          lo = n.forwardRef(
            (
              {
                bsPrefix: e,
                split: r,
                className: o,
                childBsPrefix: a,
                as: s = ut,
                ...i
              },
              l
            ) => {
              const c = g(e, "dropdown-toggle"),
                u = (0, n.useContext)(Jt),
                d = (0, n.useContext)(to);
              void 0 !== a && (i.bsPrefix = a);
              const [f] = Mr();
              return (
                (f.ref = ee(f.ref, oo(l))),
                (0, m.jsx)(s, {
                  className: t()(
                    o,
                    c,
                    r && `${c}-split`,
                    !!d && (null == u ? void 0 : u.show) && "show"
                  ),
                  ...f,
                  ...i,
                })
              );
            }
          );
        lo.displayName = "DropdownToggle";
        const co = lo,
          uo = Xe("dropdown-header", { defaultProps: { role: "heading" } }),
          fo = Xe("dropdown-divider", {
            Component: "hr",
            defaultProps: { role: "separator" },
          }),
          po = Xe("dropdown-item-text", { Component: "span" }),
          mo = n.forwardRef((e, r) => {
            const {
                bsPrefix: o,
                drop: a,
                show: s,
                className: i,
                align: l,
                onSelect: c,
                onToggle: u,
                focusFirstItemOnShow: d,
                as: f = "div",
                navbar: v,
                autoClose: h,
                ...b
              } = p(e, { show: "onToggle" }),
              y = (0, n.useContext)(to),
              w = g(o, "dropdown"),
              E = x(),
              N = Pe((e, t) => {
                var n;
                t.originalEvent.currentTarget !== document ||
                  ("keydown" === t.source &&
                    "Escape" !== t.originalEvent.key) ||
                  (t.source = "rootClose"),
                  (n = t.source),
                  (!1 === h
                    ? "click" === n
                    : "inside" === h
                    ? "rootClose" !== n
                    : "outside" !== h || "select" !== n) &&
                    (null == u || u(e, t));
              }),
              C = ao("end" === l, a, E),
              j = (0, n.useMemo)(
                () => ({ align: l, drop: a, isRTL: E }),
                [l, a, E]
              );
            return (0, m.jsx)(Xr.Provider, {
              value: j,
              children: (0, m.jsx)(qr, {
                placement: C,
                show: s,
                onSelect: c,
                onToggle: N,
                focusFirstItemOnShow: d,
                itemSelector: `.${w}-item:not(.disabled):not(:disabled)`,
                children: y
                  ? b.children
                  : (0, m.jsx)(f, {
                      ...b,
                      ref: r,
                      className: t()(
                        i,
                        s && "show",
                        (!a || "down" === a) && w,
                        "up" === a && "dropup",
                        "end" === a && "dropend",
                        "start" === a && "dropstart"
                      ),
                    }),
              }),
            });
          });
        (mo.displayName = "Dropdown"),
          (mo.defaultProps = { navbar: !1, align: "start", autoClose: !0 });
        const vo = Object.assign(mo, {
            Toggle: co,
            Menu: io,
            Item: Zr,
            ItemText: po,
            Divider: fo,
            Header: uo,
          }),
          ho = R().oneOf(["start", "end"]),
          bo = R().oneOfType([
            ho,
            R().shape({ sm: ho }),
            R().shape({ md: ho }),
            R().shape({ lg: ho }),
            R().shape({ xl: ho }),
            R().shape({ xxl: ho }),
          ]),
          go = {
            id: R().string,
            href: R().string,
            onClick: R().func,
            title: R().node.isRequired,
            disabled: R().bool,
            align: bo,
            menuRole: R().string,
            renderMenuOnMount: R().bool,
            rootCloseEvent: R().string,
            menuVariant: R().oneOf(["dark"]),
            bsPrefix: R().string,
            variant: R().string,
            size: R().string,
          },
          xo = n.forwardRef(
            (
              {
                title: e,
                children: t,
                bsPrefix: n,
                rootCloseEvent: r,
                variant: o,
                size: a,
                menuRole: s,
                renderMenuOnMount: i,
                disabled: l,
                href: c,
                id: u,
                menuVariant: d,
                ...f
              },
              p
            ) =>
              (0, m.jsxs)(vo, {
                ref: p,
                ...f,
                children: [
                  (0, m.jsx)(co, {
                    id: u,
                    href: c,
                    size: a,
                    variant: o,
                    disabled: l,
                    childBsPrefix: n,
                    children: e,
                  }),
                  (0, m.jsx)(io, {
                    role: s,
                    renderOnMount: i,
                    rootCloseEvent: r,
                    variant: d,
                    children: t,
                  }),
                ],
              })
          );
        (xo.displayName = "DropdownButton"), (xo.propTypes = go);
        const yo = xo,
          wo = { type: R().string, tooltip: R().bool, as: R().elementType },
          Eo = n.forwardRef(
            (
              {
                as: e = "div",
                className: n,
                type: r = "valid",
                tooltip: o = !1,
                ...a
              },
              s
            ) =>
              (0, m.jsx)(e, {
                ...a,
                ref: s,
                className: t()(n, `${r}-${o ? "tooltip" : "feedback"}`),
              })
          );
        (Eo.displayName = "Feedback"), (Eo.propTypes = wo);
        const No = Eo,
          Co = n.createContext({}),
          jo = n.forwardRef(
            (
              {
                id: e,
                bsPrefix: r,
                className: o,
                type: a = "checkbox",
                isValid: s = !1,
                isInvalid: i = !1,
                as: l = "input",
                ...c
              },
              u
            ) => {
              const { controlId: d } = (0, n.useContext)(Co);
              return (
                (r = g(r, "form-check-input")),
                (0, m.jsx)(l, {
                  ...c,
                  ref: u,
                  type: a,
                  id: e || d,
                  className: t()(o, r, s && "is-valid", i && "is-invalid"),
                })
              );
            }
          );
        jo.displayName = "FormCheckInput";
        const Oo = jo,
          Po = n.forwardRef(
            ({ bsPrefix: e, className: r, htmlFor: o, ...a }, s) => {
              const { controlId: i } = (0, n.useContext)(Co);
              return (
                (e = g(e, "form-check-label")),
                (0, m.jsx)("label", {
                  ...a,
                  ref: s,
                  htmlFor: o || i,
                  className: t()(r, e),
                })
              );
            }
          );
        Po.displayName = "FormCheckLabel";
        const ko = Po,
          Ro = n.forwardRef(
            (
              {
                id: e,
                bsPrefix: r,
                bsSwitchPrefix: o,
                inline: a = !1,
                disabled: s = !1,
                isValid: i = !1,
                isInvalid: l = !1,
                feedbackTooltip: c = !1,
                feedback: u,
                feedbackType: d,
                className: f,
                style: p,
                title: v = "",
                type: h = "checkbox",
                label: b,
                children: x,
                as: y = "input",
                ...w
              },
              E
            ) => {
              (r = g(r, "form-check")), (o = g(o, "form-switch"));
              const { controlId: N } = (0, n.useContext)(Co),
                C = (0, n.useMemo)(() => ({ controlId: e || N }), [N, e]),
                j = null != b && !1 !== b && !x,
                O = (0, m.jsx)(Oo, {
                  ...w,
                  type: "switch" === h ? "checkbox" : h,
                  ref: E,
                  isValid: i,
                  isInvalid: l,
                  disabled: s,
                  as: y,
                });
              return (0, m.jsx)(Co.Provider, {
                value: C,
                children: (0, m.jsx)("div", {
                  style: p,
                  className: t()(
                    f,
                    b && r,
                    a && `${r}-inline`,
                    "switch" === h && o
                  ),
                  children:
                    x ||
                    (0, m.jsxs)(m.Fragment, {
                      children: [
                        O,
                        j && (0, m.jsx)(ko, { title: v, children: b }),
                        u &&
                          (0, m.jsx)(No, { type: d, tooltip: c, children: u }),
                      ],
                    }),
                }),
              });
            }
          );
        Ro.displayName = "FormCheck";
        const To = Object.assign(Ro, { Input: Oo, Label: ko }),
          $o = n.forwardRef(
            (
              {
                bsPrefix: e,
                type: r,
                size: o,
                htmlSize: a,
                id: s,
                className: i,
                isValid: l = !1,
                isInvalid: c = !1,
                plaintext: u,
                readOnly: d,
                as: f = "input",
                ...p
              },
              v
            ) => {
              const { controlId: h } = (0, n.useContext)(Co);
              let b;
              return (
                (e = g(e, "form-control")),
                (b = u
                  ? { [`${e}-plaintext`]: !0 }
                  : { [e]: !0, [`${e}-${o}`]: o }),
                (0, m.jsx)(f, {
                  ...p,
                  type: r,
                  size: a,
                  ref: v,
                  readOnly: d,
                  id: s || h,
                  className: t()(
                    i,
                    b,
                    l && "is-valid",
                    c && "is-invalid",
                    "color" === r && `${e}-color`
                  ),
                })
              );
            }
          );
        $o.displayName = "FormControl";
        const So = Object.assign($o, { Feedback: No }),
          Mo = Xe("form-floating"),
          Io = n.forwardRef(({ controlId: e, as: t = "div", ...r }, o) => {
            const a = (0, n.useMemo)(() => ({ controlId: e }), [e]);
            return (0, m.jsx)(Co.Provider, {
              value: a,
              children: (0, m.jsx)(t, { ...r, ref: o }),
            });
          });
        Io.displayName = "FormGroup";
        const Lo = Io,
          Do = n.forwardRef(
            (
              {
                as: e = "label",
                bsPrefix: r,
                column: o,
                visuallyHidden: a,
                className: s,
                htmlFor: i,
                ...l
              },
              c
            ) => {
              const { controlId: u } = (0, n.useContext)(Co);
              r = g(r, "form-label");
              let d = "col-form-label";
              "string" == typeof o && (d = `${d} ${d}-${o}`);
              const f = t()(s, r, a && "visually-hidden", o && d);
              return (
                (i = i || u),
                o
                  ? (0, m.jsx)(Gt, {
                      ref: c,
                      as: "label",
                      className: f,
                      htmlFor: i,
                      ...l,
                    })
                  : (0, m.jsx)(e, { ref: c, className: f, htmlFor: i, ...l })
              );
            }
          );
        (Do.displayName = "FormLabel"),
          (Do.defaultProps = { column: !1, visuallyHidden: !1 });
        const Bo = Do,
          Ao = n.forwardRef(({ bsPrefix: e, className: r, id: o, ...a }, s) => {
            const { controlId: i } = (0, n.useContext)(Co);
            return (
              (e = g(e, "form-range")),
              (0, m.jsx)("input", {
                ...a,
                type: "range",
                ref: s,
                className: t()(r, e),
                id: o || i,
              })
            );
          });
        Ao.displayName = "FormRange";
        const Fo = Ao,
          Ko = n.forwardRef(
            (
              {
                bsPrefix: e,
                size: r,
                htmlSize: o,
                className: a,
                isValid: s = !1,
                isInvalid: i = !1,
                id: l,
                ...c
              },
              u
            ) => {
              const { controlId: d } = (0, n.useContext)(Co);
              return (
                (e = g(e, "form-select")),
                (0, m.jsx)("select", {
                  ...c,
                  size: o,
                  ref: u,
                  className: t()(
                    a,
                    e,
                    r && `${e}-${r}`,
                    s && "is-valid",
                    i && "is-invalid"
                  ),
                  id: l || d,
                })
              );
            }
          );
        Ko.displayName = "FormSelect";
        const Ho = Ko,
          _o = n.forwardRef(
            (
              { bsPrefix: e, className: n, as: r = "small", muted: o, ...a },
              s
            ) => (
              (e = g(e, "form-text")),
              (0, m.jsx)(r, {
                ...a,
                ref: s,
                className: t()(n, e, o && "text-muted"),
              })
            )
          );
        _o.displayName = "FormText";
        const Wo = _o,
          zo = n.forwardRef((e, t) =>
            (0, m.jsx)(To, { ...e, ref: t, type: "switch" })
          );
        zo.displayName = "Switch";
        const Vo = Object.assign(zo, { Input: To.Input, Label: To.Label }),
          Uo = n.forwardRef(
            (
              {
                bsPrefix: e,
                className: n,
                children: r,
                controlId: o,
                label: a,
                ...s
              },
              i
            ) => (
              (e = g(e, "form-floating")),
              (0, m.jsxs)(Lo, {
                ref: i,
                className: t()(n, e),
                controlId: o,
                ...s,
                children: [r, (0, m.jsx)("label", { htmlFor: o, children: a })],
              })
            )
          );
        Uo.displayName = "FloatingLabel";
        const qo = Uo,
          Go = { _ref: R().any, validated: R().bool, as: R().elementType },
          Xo = n.forwardRef(
            ({ className: e, validated: n, as: r = "form", ...o }, a) =>
              (0, m.jsx)(r, {
                ...o,
                ref: a,
                className: t()(e, n && "was-validated"),
              })
          );
        (Xo.displayName = "Form"), (Xo.propTypes = Go);
        const Yo = Object.assign(Xo, {
            Group: Lo,
            Control: So,
            Floating: Mo,
            Check: To,
            Switch: Vo,
            Label: Bo,
            Text: Wo,
            Range: Fo,
            Select: Ho,
            FloatingLabel: qo,
          }),
          Zo = n.forwardRef(
            (
              { bsPrefix: e, fluid: n, as: r = "div", className: o, ...a },
              s
            ) => {
              const i = g(e, "container"),
                l = "string" == typeof n ? `-${n}` : "-fluid";
              return (0, m.jsx)(r, {
                ref: s,
                ...a,
                className: t()(o, n ? `${i}${l}` : i),
              });
            }
          );
        (Zo.displayName = "Container"), (Zo.defaultProps = { fluid: !1 });
        const Jo = Zo,
          Qo = {
            bsPrefix: R().string,
            fluid: R().bool,
            rounded: R().bool,
            roundedCircle: R().bool,
            thumbnail: R().bool,
          },
          ea = n.forwardRef(
            (
              {
                bsPrefix: e,
                className: n,
                fluid: r,
                rounded: o,
                roundedCircle: a,
                thumbnail: s,
                ...i
              },
              l
            ) => (
              (e = g(e, "img")),
              (0, m.jsx)("img", {
                ref: l,
                ...i,
                className: t()(
                  n,
                  r && `${e}-fluid`,
                  o && "rounded",
                  a && "rounded-circle",
                  s && `${e}-thumbnail`
                ),
              })
            )
          );
        (ea.displayName = "Image"),
          (ea.defaultProps = {
            fluid: !1,
            rounded: !1,
            roundedCircle: !1,
            thumbnail: !1,
          });
        const ta = ea,
          na = n.forwardRef(({ className: e, ...n }, r) =>
            (0, m.jsx)(ta, { ref: r, ...n, className: t()(e, "figure-img") })
          );
        (na.displayName = "FigureImage"),
          (na.propTypes = Qo),
          (na.defaultProps = { fluid: !0 });
        const ra = na,
          oa = Xe("figure-caption", { Component: "figcaption" }),
          aa = Xe("figure", { Component: "figure" }),
          sa = Object.assign(aa, { Image: ra, Caption: oa }),
          ia = Xe("input-group-text", { Component: "span" }),
          la = n.forwardRef(
            (
              {
                bsPrefix: e,
                size: r,
                hasValidation: o,
                className: a,
                as: s = "div",
                ...i
              },
              l
            ) => {
              e = g(e, "input-group");
              const c = (0, n.useMemo)(() => ({}), []);
              return (0, m.jsx)(to.Provider, {
                value: c,
                children: (0, m.jsx)(s, {
                  ref: l,
                  ...i,
                  className: t()(a, e, r && `${e}-${r}`, o && "has-validation"),
                }),
              });
            }
          );
        la.displayName = "InputGroup";
        const ca = Object.assign(la, {
          Text: ia,
          Radio: (e) =>
            (0, m.jsx)(ia, {
              children: (0, m.jsx)(Oo, { type: "radio", ...e }),
            }),
          Checkbox: (e) =>
            (0, m.jsx)(ia, {
              children: (0, m.jsx)(Oo, { type: "checkbox", ...e }),
            }),
        });
        var ua = function (e) {
          return e && "function" != typeof e
            ? function (t) {
                e.current = t;
              }
            : e;
        };
        const da = function (e, t) {
            return (0, n.useMemo)(
              function () {
                return (function (e, t) {
                  var n = ua(e),
                    r = ua(t);
                  return function (e) {
                    n && n(e), r && r(e);
                  };
                })(e, t);
              },
              [e, t]
            );
          },
          fa = n.createContext(null),
          pa = ["as", "active", "eventKey"];
        function ma({
          key: e,
          onClick: t,
          active: r,
          id: o,
          role: a,
          disabled: s,
        }) {
          const i = (0, n.useContext)(Br),
            l = (0, n.useContext)(Fr);
          let c = r;
          const u = { role: a };
          if (l) {
            a || "tablist" !== l.role || (u.role = "tab");
            const t = l.getControllerId(null != e ? e : null),
              n = l.getControlledId(null != e ? e : null);
            (u[Kr("event-key")] = e),
              (u.id = t || o),
              (u["aria-controls"] = n),
              (c = null == r && null != e ? l.activeKey === e : r);
          }
          return (
            "tab" === u.role &&
              (s && ((u.tabIndex = -1), (u["aria-disabled"] = !0)),
              c ? (u["aria-selected"] = c) : (u.tabIndex = -1)),
            (u.onClick = Re((n) => {
              s ||
                (null == t || t(n),
                null != e && i && !n.isPropagationStopped() && i(e, n));
            })),
            [u, { isActive: c }]
          );
        }
        const va = n.forwardRef((e, t) => {
          let { as: n = De, active: r, eventKey: o } = e,
            a = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, pa);
          const [s, i] = ma(
            Object.assign({ key: Dr(o, a.href), active: r }, a)
          );
          return (
            (s[Kr("active")] = i.isActive),
            (0, m.jsx)(n, Object.assign({}, a, s, { ref: t }))
          );
        });
        va.displayName = "NavItem";
        const ha = va,
          ba = ["as", "onSelect", "activeKey", "role", "onKeyDown"],
          ga = () => {},
          xa = Kr("event-key"),
          ya = n.forwardRef((e, t) => {
            let {
                as: r = "div",
                onSelect: o,
                activeKey: a,
                role: s,
                onKeyDown: i,
              } = e,
              l = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(e, ba);
            const c = Zt(),
              u = (0, n.useRef)(!1),
              d = (0, n.useContext)(Br),
              f = (0, n.useContext)(fa);
            let p, v;
            f &&
              ((s = s || "tablist"),
              (a = f.activeKey),
              (p = f.getControlledId),
              (v = f.getControllerId));
            const h = (0, n.useRef)(null),
              b = (e) => {
                const t = h.current;
                if (!t) return null;
                const n = Yt(t, `[${xa}]:not([aria-disabled=true])`),
                  r = t.querySelector("[aria-selected=true]");
                if (!r) return null;
                const o = n.indexOf(r);
                if (-1 === o) return null;
                let a = o + e;
                return (
                  a >= n.length && (a = 0), a < 0 && (a = n.length - 1), n[a]
                );
              },
              g = (e, t) => {
                null != e && (null == o || o(e, t), null == d || d(e, t));
              };
            (0, n.useEffect)(() => {
              if (h.current && u.current) {
                const e = h.current.querySelector(
                  `[${xa}][aria-selected=true]`
                );
                null == e || e.focus();
              }
              u.current = !1;
            });
            const x = da(t, h);
            return (0, m.jsx)(Br.Provider, {
              value: g,
              children: (0, m.jsx)(Fr.Provider, {
                value: {
                  role: s,
                  activeKey: Dr(a),
                  getControlledId: p || ga,
                  getControllerId: v || ga,
                },
                children: (0, m.jsx)(
                  r,
                  Object.assign({}, l, {
                    onKeyDown: (e) => {
                      if ((null == i || i(e), !f)) return;
                      let t;
                      switch (e.key) {
                        case "ArrowLeft":
                        case "ArrowUp":
                          t = b(-1);
                          break;
                        case "ArrowRight":
                        case "ArrowDown":
                          t = b(1);
                          break;
                        default:
                          return;
                      }
                      t &&
                        (e.preventDefault(),
                        g(t.dataset[("EventKey", "rrUiEventKey")] || null, e),
                        (u.current = !0),
                        c());
                    },
                    ref: x,
                    role: s,
                  })
                ),
              }),
            });
          });
        ya.displayName = "Nav";
        const wa = Object.assign(ya, { Item: ha }),
          Ea = n.forwardRef(
            (
              {
                bsPrefix: e,
                active: n,
                disabled: r,
                eventKey: o,
                className: a,
                variant: s,
                action: i,
                as: l,
                ...c
              },
              u
            ) => {
              e = g(e, "list-group-item");
              const [d, f] = ma({ key: Dr(o, c.href), active: n, ...c }),
                p = Pe((e) => {
                  if (r) return e.preventDefault(), void e.stopPropagation();
                  d.onClick(e);
                });
              r &&
                void 0 === c.tabIndex &&
                ((c.tabIndex = -1), (c["aria-disabled"] = !0));
              const v = l || (i ? (c.href ? "a" : "button") : "div");
              return (0, m.jsx)(v, {
                ref: u,
                ...c,
                ...d,
                onClick: p,
                className: t()(
                  a,
                  e,
                  f.isActive && "active",
                  r && "disabled",
                  s && `${e}-${s}`,
                  i && `${e}-action`
                ),
              });
            }
          );
        Ea.displayName = "ListGroupItem";
        const Na = Ea,
          Ca = n.forwardRef((e, n) => {
            const {
                className: r,
                bsPrefix: o,
                variant: a,
                horizontal: s,
                as: i = "div",
                ...l
              } = p(e, { activeKey: "onSelect" }),
              c = g(o, "list-group");
            let u;
            return (
              s && (u = !0 === s ? "horizontal" : `horizontal-${s}`),
              (0, m.jsx)(wa, {
                ref: n,
                ...l,
                as: i,
                className: t()(r, c, a && `${c}-${a}`, u && `${c}-${u}`),
              })
            );
          });
        Ca.displayName = "ListGroup";
        const ja = Object.assign(Ca, { Item: Na });
        var Oa;
        function Pa(e) {
          if (((!Oa && 0 !== Oa) || e) && H) {
            var t = document.createElement("div");
            (t.style.position = "absolute"),
              (t.style.top = "-9999px"),
              (t.style.width = "50px"),
              (t.style.height = "50px"),
              (t.style.overflow = "scroll"),
              document.body.appendChild(t),
              (Oa = t.offsetWidth - t.clientWidth),
              document.body.removeChild(t);
          }
          return Oa;
        }
        function ka(e) {
          void 0 === e && (e = w());
          try {
            var t = e.activeElement;
            return t && t.nodeName ? t : null;
          } catch (t) {
            return e.body;
          }
        }
        const Ra = Kr("modal-open"),
          Ta = class {
            constructor({
              handleContainerOverflow: e = !0,
              isRTL: t = !1,
            } = {}) {
              (this.handleContainerOverflow = e),
                (this.isRTL = t),
                (this.modals = []);
            }
            getScrollbarWidth() {
              return Math.abs(
                window.innerWidth - document.documentElement.clientWidth
              );
            }
            getElement() {
              return document.body;
            }
            setModalAttributes(e) {}
            removeModalAttributes(e) {}
            setContainerStyle(e) {
              const t = { overflow: "hidden" },
                n = this.isRTL ? "paddingLeft" : "paddingRight",
                r = this.getElement();
              (e.style = { overflow: r.style.overflow, [n]: r.style[n] }),
                e.scrollBarWidth &&
                  (t[n] = `${
                    parseInt(O(r, n) || "0", 10) + e.scrollBarWidth
                  }px`),
                r.setAttribute(Ra, ""),
                O(r, t);
            }
            reset() {
              [...this.modals].forEach((e) => this.remove(e));
            }
            removeContainerStyle(e) {
              const t = this.getElement();
              t.removeAttribute(Ra), Object.assign(t.style, e.style);
            }
            add(e) {
              let t = this.modals.indexOf(e);
              return (
                -1 !== t ||
                  ((t = this.modals.length),
                  this.modals.push(e),
                  this.setModalAttributes(e),
                  0 !== t ||
                    ((this.state = {
                      scrollBarWidth: this.getScrollbarWidth(),
                      style: {},
                    }),
                    this.handleContainerOverflow &&
                      this.setContainerStyle(this.state))),
                t
              );
            }
            remove(e) {
              const t = this.modals.indexOf(e);
              -1 !== t &&
                (this.modals.splice(t, 1),
                !this.modals.length &&
                  this.handleContainerOverflow &&
                  this.removeContainerStyle(this.state),
                this.removeModalAttributes(e));
            }
            isTopModal(e) {
              return (
                !!this.modals.length &&
                this.modals[this.modals.length - 1] === e
              );
            }
          },
          $a = (e) => {
            var t;
            return "undefined" == typeof document
              ? null
              : null == e
              ? w().body
              : ("function" == typeof e && (e = e()),
                e && "current" in e && (e = e.current),
                (null != (t = e) && t.nodeType && e) || null);
          };
        function Sa(e, t) {
          const [r, o] = (0, n.useState)(() => $a(e));
          if (!r) {
            const t = $a(e);
            t && o(t);
          }
          return (
            (0, n.useEffect)(() => {
              t && r && t(r);
            }, [t, r]),
            (0, n.useEffect)(() => {
              const t = $a(e);
              t !== r && o(t);
            }, [e, r]),
            r
          );
        }
        const Ma = [
          "show",
          "role",
          "className",
          "style",
          "children",
          "backdrop",
          "keyboard",
          "onBackdropClick",
          "onEscapeKeyDown",
          "transition",
          "backdropTransition",
          "autoFocus",
          "enforceFocus",
          "restoreFocus",
          "restoreFocusOptions",
          "renderDialog",
          "renderBackdrop",
          "manager",
          "container",
          "onShow",
          "onHide",
          "onExit",
          "onExited",
          "onExiting",
          "onEnter",
          "onEntering",
          "onEntered",
        ];
        let Ia;
        const La = (0, n.forwardRef)((e, t) => {
          let {
              show: r = !1,
              role: o = "dialog",
              className: a,
              style: s,
              children: i,
              backdrop: l = !0,
              keyboard: c = !0,
              onBackdropClick: u,
              onEscapeKeyDown: d,
              transition: f,
              backdropTransition: p,
              autoFocus: v = !0,
              enforceFocus: h = !0,
              restoreFocus: b = !0,
              restoreFocusOptions: g,
              renderDialog: x,
              renderBackdrop: y = (e) =>
                (0, m.jsx)("div", Object.assign({}, e)),
              manager: w,
              container: E,
              onShow: N,
              onHide: C = () => {},
              onExit: j,
              onExited: O,
              onExiting: P,
              onEnter: k,
              onEntering: R,
              onEntered: T,
            } = e,
            S = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, Ma);
          const M = Sa(E),
            I = (function (e) {
              const t = e || (Ia || (Ia = new Ta()), Ia),
                r = (0, n.useRef)({ dialog: null, backdrop: null });
              return Object.assign(r.current, {
                add: () => t.add(r.current),
                remove: () => t.remove(r.current),
                isTopModal: () => t.isTopModal(r.current),
                setDialogRef: (0, n.useCallback)((e) => {
                  r.current.dialog = e;
                }, []),
                setBackdropRef: (0, n.useCallback)((e) => {
                  r.current.backdrop = e;
                }, []),
              });
            })(w),
            L = Te(),
            D = $e(r),
            [B, A] = (0, n.useState)(!r),
            F = (0, n.useRef)(null);
          (0, n.useImperativeHandle)(t, () => I, [I]),
            H && !D && r && (F.current = ka()),
            f || r || B ? r && B && A(!1) : A(!0);
          const K = Re(() => {
              if (
                (I.add(),
                (Z.current = q(document, "keydown", X)),
                (Y.current = q(document, "focus", () => setTimeout(U), !0)),
                N && N(),
                v)
              ) {
                const e = ka(document);
                I.dialog &&
                  e &&
                  !mr(I.dialog, e) &&
                  ((F.current = e), I.dialog.focus());
              }
            }),
            _ = Re(() => {
              var e;
              I.remove(),
                null == Z.current || Z.current(),
                null == Y.current || Y.current(),
                b &&
                  (null == (e = F.current) || null == e.focus || e.focus(g),
                  (F.current = null));
            });
          var W, z, V;
          (0, n.useEffect)(() => {
            r && M && K();
          }, [r, M, K]),
            (0, n.useEffect)(() => {
              B && _();
            }, [B, _]),
            (W = () => {
              _();
            }),
            ((z = (0, n.useRef)(W)).current = W),
            (V = z),
            (0, n.useEffect)(function () {
              return function () {
                return V.current();
              };
            }, []);
          const U = Re(() => {
              if (!h || !L() || !I.isTopModal()) return;
              const e = ka();
              I.dialog && e && !mr(I.dialog, e) && I.dialog.focus();
            }),
            G = Re((e) => {
              e.target === e.currentTarget &&
                (null == u || u(e), !0 === l && C());
            }),
            X = Re((e) => {
              c &&
                27 === e.keyCode &&
                I.isTopModal() &&
                (null == d || d(e), e.defaultPrevented || C());
            }),
            Y = (0, n.useRef)(),
            Z = (0, n.useRef)(),
            J = f;
          if (!M || !(r || (J && !B))) return null;
          const Q = Object.assign(
            {
              role: o,
              ref: I.setDialogRef,
              "aria-modal": "dialog" === o || void 0,
            },
            S,
            { style: s, className: a, tabIndex: -1 }
          );
          let ee = x
            ? x(Q)
            : (0, m.jsx)(
                "div",
                Object.assign({}, Q, {
                  children: n.cloneElement(i, { role: "document" }),
                })
              );
          J &&
            (ee = (0, m.jsx)(J, {
              appear: !0,
              unmountOnExit: !0,
              in: !!r,
              onExit: j,
              onExiting: P,
              onExited: (...e) => {
                A(!0), null == O || O(...e);
              },
              onEnter: k,
              onEntering: R,
              onEntered: T,
              children: ee,
            }));
          let te = null;
          if (l) {
            const e = p;
            (te = y({ ref: I.setBackdropRef, onClick: G })),
              e && (te = (0, m.jsx)(e, { appear: !0, in: !!r, children: te }));
          }
          return (0, m.jsx)(m.Fragment, {
            children: $().createPortal(
              (0, m.jsxs)(m.Fragment, { children: [te, ee] }),
              M
            ),
          });
        });
        La.displayName = "Modal";
        const Da = Object.assign(La, { Manager: Ta });
        function Ba(e, t) {
          return e.classList
            ? !!t && e.classList.contains(t)
            : -1 !==
                (" " + (e.className.baseVal || e.className) + " ").indexOf(
                  " " + t + " "
                );
        }
        function Aa(e, t) {
          return e
            .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
            .replace(/\s+/g, " ")
            .replace(/^\s*|\s*$/g, "");
        }
        const Fa = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          Ka = ".sticky-top",
          Ha = ".navbar-toggler";
        class _a extends Ta {
          adjustAndStore(e, t, n) {
            const r = t.style[e];
            (t.dataset[e] = r), O(t, { [e]: `${parseFloat(O(t, e)) + n}px` });
          }
          restore(e, t) {
            const n = t.dataset[e];
            void 0 !== n && (delete t.dataset[e], O(t, { [e]: n }));
          }
          setContainerStyle(e) {
            super.setContainerStyle(e);
            const t = this.getElement();
            var n, r;
            if (
              ((r = "modal-open"),
              (n = t).classList
                ? n.classList.add(r)
                : Ba(n, r) ||
                  ("string" == typeof n.className
                    ? (n.className = n.className + " " + r)
                    : n.setAttribute(
                        "class",
                        ((n.className && n.className.baseVal) || "") + " " + r
                      )),
              !e.scrollBarWidth)
            )
              return;
            const o = this.isRTL ? "paddingLeft" : "paddingRight",
              a = this.isRTL ? "marginLeft" : "marginRight";
            Yt(t, Fa).forEach((t) =>
              this.adjustAndStore(o, t, e.scrollBarWidth)
            ),
              Yt(t, Ka).forEach((t) =>
                this.adjustAndStore(a, t, -e.scrollBarWidth)
              ),
              Yt(t, Ha).forEach((t) =>
                this.adjustAndStore(a, t, e.scrollBarWidth)
              );
          }
          removeContainerStyle(e) {
            super.removeContainerStyle(e);
            const t = this.getElement();
            var n, r;
            (r = "modal-open"),
              (n = t).classList
                ? n.classList.remove(r)
                : "string" == typeof n.className
                ? (n.className = Aa(n.className, r))
                : n.setAttribute(
                    "class",
                    Aa((n.className && n.className.baseVal) || "", r)
                  );
            const o = this.isRTL ? "paddingLeft" : "paddingRight",
              a = this.isRTL ? "marginLeft" : "marginRight";
            Yt(t, Fa).forEach((e) => this.restore(o, e)),
              Yt(t, Ka).forEach((e) => this.restore(a, e)),
              Yt(t, Ha).forEach((e) => this.restore(a, e));
          }
        }
        let Wa;
        function za(e) {
          return Wa || (Wa = new _a(e)), Wa;
        }
        const Va = _a,
          Ua = Xe("modal-body"),
          qa = n.createContext({ onHide() {} }),
          Ga = n.forwardRef(
            (
              {
                bsPrefix: e,
                className: n,
                contentClassName: r,
                centered: o,
                size: a,
                fullscreen: s,
                children: i,
                scrollable: l,
                ...c
              },
              u
            ) => {
              const d = `${(e = g(e, "modal"))}-dialog`,
                f =
                  "string" == typeof s
                    ? `${e}-fullscreen-${s}`
                    : `${e}-fullscreen`;
              return (0, m.jsx)("div", {
                ...c,
                ref: u,
                className: t()(
                  d,
                  n,
                  a && `${e}-${a}`,
                  o && `${d}-centered`,
                  l && `${d}-scrollable`,
                  s && f
                ),
                children: (0, m.jsx)("div", {
                  className: t()(`${e}-content`, r),
                  children: i,
                }),
              });
            }
          );
        Ga.displayName = "ModalDialog";
        const Xa = Ga,
          Ya = Xe("modal-footer"),
          Za = n.forwardRef(
            (
              {
                closeLabel: e,
                closeVariant: t,
                closeButton: r,
                onHide: o,
                children: a,
                ...s
              },
              i
            ) => {
              const l = (0, n.useContext)(qa),
                c = Pe(() => {
                  null == l || l.onHide(), null == o || o();
                });
              return (0, m.jsxs)("div", {
                ref: i,
                ...s,
                children: [
                  a,
                  r &&
                    (0, m.jsx)(Ve, { "aria-label": e, variant: t, onClick: c }),
                ],
              });
            }
          );
        Za.defaultProps = { closeLabel: "Close", closeButton: !1 };
        const Ja = Za,
          Qa = n.forwardRef(
            ({ bsPrefix: e, className: n, ...r }, o) => (
              (e = g(e, "modal-header")),
              (0, m.jsx)(Ja, { ref: o, ...r, className: t()(n, e) })
            )
          );
        (Qa.displayName = "ModalHeader"),
          (Qa.defaultProps = { closeLabel: "Close", closeButton: !1 });
        const es = Qa,
          ts = Xe("modal-title", { Component: Ue("h4") }),
          ns = {
            show: !1,
            backdrop: !0,
            keyboard: !0,
            autoFocus: !0,
            enforceFocus: !0,
            restoreFocus: !0,
            animation: !0,
            dialogAs: Xa,
          };
        function rs(e) {
          return (0, m.jsx)(_e, { ...e, timeout: null });
        }
        function os(e) {
          return (0, m.jsx)(_e, { ...e, timeout: null });
        }
        const as = n.forwardRef(
          (
            {
              bsPrefix: e,
              className: r,
              style: o,
              dialogClassName: a,
              contentClassName: s,
              children: i,
              dialogAs: l,
              "aria-labelledby": c,
              show: u,
              animation: d,
              backdrop: f,
              keyboard: p,
              onEscapeKeyDown: v,
              onShow: h,
              onHide: b,
              container: y,
              autoFocus: E,
              enforceFocus: N,
              restoreFocus: C,
              restoreFocusOptions: j,
              onEntered: O,
              onExit: P,
              onExiting: k,
              onEnter: R,
              onEntering: T,
              onExited: $,
              backdropClassName: S,
              manager: M,
              ...I
            },
            L
          ) => {
            const [D, B] = (0, n.useState)({}),
              [A, F] = (0, n.useState)(!1),
              K = (0, n.useRef)(!1),
              _ = (0, n.useRef)(!1),
              W = (0, n.useRef)(null),
              [z, q] = (0, n.useState)(null),
              X = ee(L, q),
              Y = Pe(b),
              Z = x();
            e = g(e, "modal");
            const J = (0, n.useMemo)(() => ({ onHide: Y }), [Y]);
            function Q() {
              return M || za({ isRTL: Z });
            }
            function te(e) {
              if (!H) return;
              const t = Q().getScrollbarWidth() > 0,
                n = e.scrollHeight > w(e).documentElement.clientHeight;
              B({
                paddingRight: t && !n ? Pa() : void 0,
                paddingLeft: !t && n ? Pa() : void 0,
              });
            }
            const ne = Pe(() => {
              z && te(z.dialog);
            });
            Mt(() => {
              U(window, "resize", ne), null == W.current || W.current();
            });
            const re = () => {
                K.current = !0;
              },
              oe = (e) => {
                K.current && z && e.target === z.dialog && (_.current = !0),
                  (K.current = !1);
              },
              ae = () => {
                F(!0),
                  (W.current = G(z.dialog, () => {
                    F(!1);
                  }));
              },
              se = (e) => {
                "static" !== f
                  ? _.current || e.target !== e.currentTarget
                    ? (_.current = !1)
                    : null == b || b()
                  : ((e) => {
                      e.target === e.currentTarget && ae();
                    })(e);
              },
              ie = (0, n.useCallback)(
                (n) =>
                  (0, m.jsx)("div", {
                    ...n,
                    className: t()(`${e}-backdrop`, S, !d && "show"),
                  }),
                [d, S, e]
              ),
              le = { ...o, ...D };
            return (
              d || (le.display = "block"),
              (0, m.jsx)(qa.Provider, {
                value: J,
                children: (0, m.jsx)(Da, {
                  show: u,
                  ref: X,
                  backdrop: f,
                  container: y,
                  keyboard: !0,
                  autoFocus: E,
                  enforceFocus: N,
                  restoreFocus: C,
                  restoreFocusOptions: j,
                  onEscapeKeyDown: (e) => {
                    p || "static" !== f
                      ? p && v && v(e)
                      : (e.preventDefault(), ae());
                  },
                  onShow: h,
                  onHide: b,
                  onEnter: (e, t) => {
                    e && ((e.style.display = "block"), te(e)),
                      null == R || R(e, t);
                  },
                  onEntering: (e, t) => {
                    null == T || T(e, t), V(window, "resize", ne);
                  },
                  onEntered: O,
                  onExit: (e) => {
                    null == W.current || W.current(), null == P || P(e);
                  },
                  onExiting: k,
                  onExited: (e) => {
                    e && (e.style.display = ""),
                      null == $ || $(e),
                      U(window, "resize", ne);
                  },
                  manager: Q(),
                  transition: d ? rs : void 0,
                  backdropTransition: d ? os : void 0,
                  renderBackdrop: ie,
                  renderDialog: (n) =>
                    (0, m.jsx)("div", {
                      role: "dialog",
                      ...n,
                      style: le,
                      className: t()(r, e, A && `${e}-static`),
                      onClick: f ? se : void 0,
                      onMouseUp: oe,
                      "aria-labelledby": c,
                      children: (0, m.jsx)(l, {
                        ...I,
                        onMouseDown: re,
                        className: a,
                        contentClassName: s,
                        children: i,
                      }),
                    }),
                }),
              })
            );
          }
        );
        (as.displayName = "Modal"), (as.defaultProps = ns);
        const ss = Object.assign(as, {
          Body: Ua,
          Header: es,
          Title: ts,
          Footer: Ya,
          Dialog: Xa,
          TRANSITION_DURATION: 300,
          BACKDROP_TRANSITION_DURATION: 150,
        });
        o(946);
        const is = Xe("nav-item"),
          ls = n.forwardRef(
            (
              {
                bsPrefix: e,
                className: n,
                as: r = Fe,
                active: o,
                eventKey: a,
                ...s
              },
              i
            ) => {
              e = g(e, "nav-link");
              const [l, c] = ma({ key: Dr(a, s.href), active: o, ...s });
              return (0, m.jsx)(r, {
                ...s,
                ...l,
                ref: i,
                className: t()(
                  n,
                  e,
                  s.disabled && "disabled",
                  c.isActive && "active"
                ),
              });
            }
          );
        (ls.displayName = "NavLink"), (ls.defaultProps = { disabled: !1 });
        const cs = ls,
          us = n.forwardRef((e, r) => {
            const {
                as: o = "div",
                bsPrefix: a,
                variant: s,
                fill: i,
                justify: l,
                navbar: c,
                navbarScroll: u,
                className: d,
                activeKey: f,
                ...v
              } = p(e, { activeKey: "onSelect" }),
              h = g(a, "nav");
            let b,
              x,
              y = !1;
            const w = (0, n.useContext)(ro),
              E = (0, n.useContext)(gt);
            return (
              w
                ? ((b = w.bsPrefix), (y = null == c || c))
                : E && ({ cardHeaderBsPrefix: x } = E),
              (0, m.jsx)(wa, {
                as: o,
                ref: r,
                activeKey: f,
                className: t()(d, {
                  [h]: !y,
                  [`${b}-nav`]: y,
                  [`${b}-nav-scroll`]: y && u,
                  [`${x}-${s}`]: !!x,
                  [`${h}-${s}`]: !!s,
                  [`${h}-fill`]: i,
                  [`${h}-justified`]: l,
                }),
                ...v,
              })
            );
          });
        (us.displayName = "Nav"), (us.defaultProps = { justify: !1, fill: !1 });
        const ds = Object.assign(us, { Item: is, Link: cs }),
          fs = n.forwardRef(({ bsPrefix: e, className: n, as: r, ...o }, a) => {
            e = g(e, "navbar-brand");
            const s = r || (o.href ? "a" : "span");
            return (0, m.jsx)(s, { ...o, ref: a, className: t()(n, e) });
          });
        fs.displayName = "NavbarBrand";
        const ps = fs,
          ms = n.forwardRef(({ children: e, bsPrefix: t, ...r }, o) => {
            t = g(t, "navbar-collapse");
            const a = (0, n.useContext)(ro);
            return (0, m.jsx)(le, {
              in: !(!a || !a.expanded),
              ...r,
              children: (0, m.jsx)("div", {
                ref: o,
                className: t,
                children: e,
              }),
            });
          });
        ms.displayName = "NavbarCollapse";
        const vs = ms,
          hs = n.forwardRef(
            (
              {
                bsPrefix: e,
                className: r,
                children: o,
                label: a,
                as: s = "button",
                onClick: i,
                ...l
              },
              c
            ) => {
              e = g(e, "navbar-toggler");
              const { onToggle: u, expanded: d } = (0, n.useContext)(ro) || {},
                f = Pe((e) => {
                  i && i(e), u && u();
                });
              return (
                "button" === s && (l.type = "button"),
                (0, m.jsx)(s, {
                  ...l,
                  ref: c,
                  onClick: f,
                  "aria-label": a,
                  className: t()(r, e, !d && "collapsed"),
                  children: o || (0, m.jsx)("span", { className: `${e}-icon` }),
                })
              );
            }
          );
        (hs.displayName = "NavbarToggle"),
          (hs.defaultProps = { label: "Toggle navigation" });
        const bs = hs,
          gs = Xe("navbar-text", { Component: "span" }),
          xs = n.forwardRef((e, r) => {
            const {
                bsPrefix: o,
                expand: a,
                variant: s,
                bg: i,
                fixed: l,
                sticky: c,
                className: u,
                as: d = "nav",
                expanded: f,
                onToggle: v,
                onSelect: h,
                collapseOnSelect: b,
                ...x
              } = p(e, { expanded: "onToggle" }),
              y = g(o, "navbar"),
              w = (0, n.useCallback)(
                (...e) => {
                  null == h || h(...e), b && f && (null == v || v(!1));
                },
                [h, b, f, v]
              );
            void 0 === x.role && "nav" !== d && (x.role = "navigation");
            let E = `${y}-expand`;
            "string" == typeof a && (E = `${E}-${a}`);
            const N = (0, n.useMemo)(
              () => ({
                onToggle: () => (null == v ? void 0 : v(!f)),
                bsPrefix: y,
                expanded: !!f,
              }),
              [y, f, v]
            );
            return (0, m.jsx)(ro.Provider, {
              value: N,
              children: (0, m.jsx)(Br.Provider, {
                value: w,
                children: (0, m.jsx)(d, {
                  ref: r,
                  ...x,
                  className: t()(
                    u,
                    y,
                    a && E,
                    s && `${y}-${s}`,
                    i && `bg-${i}`,
                    c && `sticky-${c}`,
                    l && `fixed-${l}`
                  ),
                }),
              }),
            });
          });
        (xs.defaultProps = {
          expand: !0,
          variant: "light",
          collapseOnSelect: !1,
        }),
          (xs.displayName = "Navbar");
        const ys = Object.assign(xs, {
            Brand: ps,
            Toggle: bs,
            Collapse: vs,
            Text: gs,
          }),
          ws = n.forwardRef(
            (
              {
                id: e,
                title: n,
                children: r,
                bsPrefix: o,
                className: a,
                rootCloseEvent: s,
                menuRole: i,
                disabled: l,
                active: c,
                renderMenuOnMount: u,
                menuVariant: d,
                ...f
              },
              p
            ) => {
              const v = g(void 0, "nav-item");
              return (0, m.jsxs)(vo, {
                ref: p,
                ...f,
                className: t()(a, v),
                children: [
                  (0, m.jsx)(vo.Toggle, {
                    id: e,
                    eventKey: null,
                    active: c,
                    disabled: l,
                    childBsPrefix: o,
                    as: cs,
                    children: n,
                  }),
                  (0, m.jsx)(vo.Menu, {
                    role: i,
                    renderOnMount: u,
                    rootCloseEvent: s,
                    variant: d,
                    children: r,
                  }),
                ],
              });
            }
          );
        ws.displayName = "NavDropdown";
        const Es = Object.assign(ws, {
            Item: vo.Item,
            ItemText: vo.ItemText,
            Divider: vo.Divider,
            Header: vo.Header,
          }),
          Ns = Xe("offcanvas-body"),
          Cs = { [L]: "show", [D]: "show" },
          js = n.forwardRef(
            ({ bsPrefix: e, className: r, children: o, ...a }, s) => (
              (e = g(e, "offcanvas")),
              (0, m.jsx)(ne, {
                ref: s,
                addEndListener: Y,
                ...a,
                childRef: o.ref,
                children: (a, s) =>
                  n.cloneElement(o, {
                    ...s,
                    className: t()(
                      r,
                      o.props.className,
                      (a === L || a === B) && `${e}-toggling`,
                      Cs[a]
                    ),
                  }),
              })
            )
          );
        (js.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
        }),
          (js.displayName = "OffcanvasToggling");
        const Os = js,
          Ps = n.forwardRef(
            ({ bsPrefix: e, className: n, ...r }, o) => (
              (e = g(e, "offcanvas-header")),
              (0, m.jsx)(Ja, { ref: o, ...r, className: t()(n, e) })
            )
          );
        (Ps.displayName = "OffcanvasHeader"),
          (Ps.defaultProps = { closeLabel: "Close", closeButton: !1 });
        const ks = Ps,
          Rs = Xe("offcanvas-title", { Component: Ue("h5") });
        function Ts(e) {
          return (0, m.jsx)(Os, { ...e });
        }
        function $s(e) {
          return (0, m.jsx)(_e, { ...e });
        }
        const Ss = n.forwardRef(
          (
            {
              bsPrefix: e,
              className: r,
              children: o,
              "aria-labelledby": a,
              placement: s,
              show: i,
              backdrop: l,
              keyboard: c,
              scroll: u,
              onEscapeKeyDown: d,
              onShow: f,
              onHide: p,
              container: v,
              autoFocus: h,
              enforceFocus: b,
              restoreFocus: x,
              restoreFocusOptions: y,
              onEntered: w,
              onExit: E,
              onExiting: N,
              onEnter: C,
              onEntering: j,
              onExited: O,
              backdropClassName: P,
              manager: k,
              ...R
            },
            T
          ) => {
            const $ = (0, n.useRef)(),
              S = Pe(p);
            e = g(e, "offcanvas");
            const M = (0, n.useMemo)(() => ({ onHide: S }), [S]),
              I = (0, n.useCallback)(
                (n) =>
                  (0, m.jsx)("div", {
                    ...n,
                    className: t()(`${e}-backdrop`, P),
                  }),
                [P, e]
              );
            return (0, m.jsx)(qa.Provider, {
              value: M,
              children: (0, m.jsx)(Da, {
                show: i,
                ref: T,
                backdrop: l,
                container: v,
                keyboard: c,
                autoFocus: h,
                enforceFocus: b && !u,
                restoreFocus: x,
                restoreFocusOptions: y,
                onEscapeKeyDown: d,
                onShow: f,
                onHide: p,
                onEnter: (e, ...t) => {
                  e && (e.style.visibility = "visible"),
                    null == C || C(e, ...t);
                },
                onEntering: j,
                onEntered: w,
                onExit: E,
                onExiting: N,
                onExited: (e, ...t) => {
                  e && (e.style.visibility = ""), null == O || O(...t);
                },
                manager:
                  k ||
                  (u
                    ? ($.current ||
                        ($.current = new Va({ handleContainerOverflow: !1 })),
                      $.current)
                    : za()),
                transition: Ts,
                backdropTransition: $s,
                renderBackdrop: I,
                renderDialog: (n) =>
                  (0, m.jsx)("div", {
                    role: "dialog",
                    ...n,
                    ...R,
                    className: t()(r, e, `${e}-${s}`),
                    "aria-labelledby": a,
                    children: o,
                  }),
              }),
            });
          }
        );
        (Ss.displayName = "Offcanvas"),
          (Ss.defaultProps = {
            show: !1,
            backdrop: !0,
            keyboard: !0,
            scroll: !1,
            autoFocus: !0,
            enforceFocus: !0,
            restoreFocus: !0,
            placement: "start",
          });
        const Ms = Object.assign(Ss, { Body: Ns, Header: ks, Title: Rs }),
          Is = n.forwardRef((e, t) => {
            const {
                flip: r,
                offset: o,
                placement: a,
                containerPadding: s,
                popperConfig: i = {},
                transition: l,
              } = e,
              [c, u] = ke(),
              [d, f] = ke(),
              p = da(u, t),
              v = Sa(e.container),
              h = Sa(e.target),
              [b, g] = (0, n.useState)(!e.show),
              x = pr(
                h,
                c,
                wr({
                  placement: a,
                  enableEvents: !!e.show,
                  containerPadding: s || 5,
                  flip: r,
                  offset: o,
                  arrowElement: d,
                  popperConfig: i,
                })
              );
            e.show ? b && g(!1) : e.transition || b || g(!0);
            const y = (...t) => {
                g(!0), e.onExited && e.onExited(...t);
              },
              w = e.show || (l && !b);
            if (
              (xr(c, e.onHide, {
                disabled: !e.rootClose || e.rootCloseDisabled,
                clickTrigger: e.rootCloseEvent,
              }),
              !w)
            )
              return null;
            let E = e.children(
              Object.assign({}, x.attributes.popper, {
                style: x.styles.popper,
                ref: p,
              }),
              {
                popper: x,
                placement: a,
                show: !!e.show,
                arrowProps: Object.assign({}, x.attributes.arrow, {
                  style: x.styles.arrow,
                  ref: f,
                }),
              }
            );
            if (l) {
              const {
                onExit: t,
                onExiting: n,
                onEnter: r,
                onEntering: o,
                onEntered: a,
              } = e;
              E = (0, m.jsx)(l, {
                in: e.show,
                appear: !0,
                onExit: t,
                onExiting: n,
                onExited: y,
                onEnter: r,
                onEntering: o,
                onEntered: a,
                children: E,
              });
            }
            return v ? $().createPortal(E, v) : null;
          });
        Is.displayName = "Overlay";
        const Ls = Is,
          Ds = Xe("popover-header"),
          Bs = Xe("popover-body");
        function As(e, t) {
          let n = e;
          return (
            "left" === e
              ? (n = t ? "end" : "start")
              : "right" === e && (n = t ? "start" : "end"),
            n
          );
        }
        n.Component;
        const Fs = n.forwardRef(
          (
            {
              bsPrefix: e,
              placement: n,
              className: r,
              style: o,
              children: a,
              body: s,
              arrowProps: i,
              popper: l,
              show: c,
              ...u
            },
            d
          ) => {
            const f = g(e, "popover"),
              p = x(),
              [v] = (null == n ? void 0 : n.split("-")) || [],
              h = As(v, p);
            return (0, m.jsxs)("div", {
              ref: d,
              role: "tooltip",
              style: o,
              "x-placement": v,
              className: t()(r, f, v && `bs-popover-${h}`),
              ...u,
              children: [
                (0, m.jsx)("div", { className: "popover-arrow", ...i }),
                s ? (0, m.jsx)(Bs, { children: a }) : a,
              ],
            });
          }
        );
        Fs.defaultProps = { placement: "right" };
        const Ks = Object.assign(Fs, {
            Header: Ds,
            Body: Bs,
            POPPER_OFFSET: [0, 8],
          }),
          Hs = { transition: _e, rootClose: !1, show: !1, placement: "top" },
          _s = n.forwardRef(
            ({ children: e, transition: r, popperConfig: o = {}, ...a }, s) => {
              const i = (0, n.useRef)({}),
                [l, c] = (function () {
                  const e = (0, n.useRef)(null),
                    t = g(void 0, "popover"),
                    r = (0, n.useMemo)(
                      () => ({
                        name: "offset",
                        options: {
                          offset: () =>
                            e.current && Ba(e.current, t)
                              ? Ks.POPPER_OFFSET
                              : [0, 0],
                        },
                      }),
                      [t]
                    );
                  return [e, [r]];
                })(),
                u = ee(s, l),
                d = !0 === r ? _e : r || void 0;
              return (0, m.jsx)(Ls, {
                ...a,
                ref: u,
                popperConfig: { ...o, modifiers: c.concat(o.modifiers || []) },
                transition: d,
                children: (
                  o,
                  { arrowProps: a, placement: s, popper: l, show: c }
                ) => {
                  var u, d;
                  !(function (e, t) {
                    const { ref: n } = e,
                      { ref: r } = t;
                    (e.ref = n.__wrapped || (n.__wrapped = (e) => n(te(e)))),
                      (t.ref = r.__wrapped || (r.__wrapped = (e) => r(te(e))));
                  })(o, a);
                  const f = Object.assign(i.current, {
                    state: null == l ? void 0 : l.state,
                    scheduleUpdate: null == l ? void 0 : l.update,
                    placement: s,
                    outOfBoundaries:
                      (null == l ||
                      null == (u = l.state) ||
                      null == (d = u.modifiersData.hide)
                        ? void 0
                        : d.isReferenceHidden) || !1,
                  });
                  return "function" == typeof e
                    ? e({
                        ...o,
                        placement: s,
                        show: c,
                        ...(!r && c && { className: "show" }),
                        popper: f,
                        arrowProps: a,
                      })
                    : n.cloneElement(e, {
                        ...o,
                        placement: s,
                        arrowProps: a,
                        popper: f,
                        className: t()(e.props.className, !r && c && "show"),
                        style: { ...e.props.style, ...o.style },
                      });
                },
              });
            }
          );
        (_s.displayName = "Overlay"), (_s.defaultProps = Hs);
        const Ws = _s;
        function zs(e, t, n) {
          const [r] = t,
            o = r.currentTarget,
            a = r.relatedTarget || r.nativeEvent[n];
          (a && a === o) || mr(o, a) || e(...t);
        }
        function Vs({
          trigger: e,
          overlay: t,
          children: r,
          popperConfig: o = {},
          show: a,
          defaultShow: s = !1,
          onToggle: i,
          delay: l,
          placement: c,
          flip: u = c && -1 !== c.indexOf("auto"),
          ...d
        }) {
          const p = (0, n.useRef)(null),
            v = ee(p, r.ref),
            h = Dt(),
            b = (0, n.useRef)(""),
            [g, x] = f(a, s, i),
            y = (function (e) {
              return e && "object" == typeof e ? e : { show: e, hide: e };
            })(l),
            {
              onFocus: w,
              onBlur: E,
              onClick: N,
            } = "function" != typeof r ? n.Children.only(r).props : {},
            C = (0, n.useCallback)(() => {
              h.clear(),
                (b.current = "show"),
                y.show
                  ? h.set(() => {
                      "show" === b.current && x(!0);
                    }, y.show)
                  : x(!0);
            }, [y.show, x, h]),
            j = (0, n.useCallback)(() => {
              h.clear(),
                (b.current = "hide"),
                y.hide
                  ? h.set(() => {
                      "hide" === b.current && x(!1);
                    }, y.hide)
                  : x(!1);
            }, [y.hide, x, h]),
            O = (0, n.useCallback)(
              (...e) => {
                C(), null == w || w(...e);
              },
              [C, w]
            ),
            P = (0, n.useCallback)(
              (...e) => {
                j(), null == E || E(...e);
              },
              [j, E]
            ),
            k = (0, n.useCallback)(
              (...e) => {
                x(!g), null == N || N(...e);
              },
              [N, x, g]
            ),
            R = (0, n.useCallback)(
              (...e) => {
                zs(C, e, "fromElement");
              },
              [C]
            ),
            T = (0, n.useCallback)(
              (...e) => {
                zs(j, e, "toElement");
              },
              [j]
            ),
            $ = null == e ? [] : [].concat(e),
            S = {
              ref: (e) => {
                v(te(e));
              },
            };
          return (
            -1 !== $.indexOf("click") && (S.onClick = k),
            -1 !== $.indexOf("focus") && ((S.onFocus = O), (S.onBlur = P)),
            -1 !== $.indexOf("hover") &&
              ((S.onMouseOver = R), (S.onMouseOut = T)),
            (0, m.jsxs)(m.Fragment, {
              children: [
                "function" == typeof r ? r(S) : (0, n.cloneElement)(r, S),
                (0, m.jsx)(Ws, {
                  ...d,
                  show: g,
                  onHide: j,
                  flip: u,
                  placement: c,
                  popperConfig: o,
                  target: p.current,
                  children: t,
                }),
              ],
            })
          );
        }
        Vs.defaultProps = { defaultShow: !1, trigger: ["hover", "focus"] };
        const Us = Vs,
          qs = n.forwardRef(
            (
              {
                active: e,
                disabled: n,
                className: r,
                style: o,
                activeLabel: a,
                children: s,
                ...i
              },
              l
            ) => {
              const c = e || n ? "span" : Fe;
              return (0, m.jsx)("li", {
                ref: l,
                style: o,
                className: t()(r, "page-item", { active: e, disabled: n }),
                children: (0, m.jsxs)(c, {
                  className: "page-link",
                  disabled: n,
                  ...i,
                  children: [
                    s,
                    e &&
                      a &&
                      (0, m.jsx)("span", {
                        className: "visually-hidden",
                        children: a,
                      }),
                  ],
                }),
              });
            }
          );
        (qs.defaultProps = {
          active: !1,
          disabled: !1,
          activeLabel: "(current)",
        }),
          (qs.displayName = "PageItem");
        const Gs = qs;
        function Xs(e, t, n = e) {
          function r({ children: e, ...r }) {
            return (0, m.jsxs)(qs, {
              ...r,
              children: [
                (0, m.jsx)("span", { "aria-hidden": "true", children: e || t }),
                (0, m.jsx)("span", {
                  className: "visually-hidden",
                  children: n,
                }),
              ],
            });
          }
          return (r.displayName = e), r;
        }
        const Ys = Xs("First", "«"),
          Zs = Xs("Prev", "‹", "Previous"),
          Js = Xs("Ellipsis", "…", "More"),
          Qs = Xs("Next", "›"),
          ei = Xs("Last", "»"),
          ti = n.forwardRef(
            ({ bsPrefix: e, className: n, size: r, ...o }, a) => {
              const s = g(e, "pagination");
              return (0, m.jsx)("ul", {
                ref: a,
                ...o,
                className: t()(n, s, r && `${s}-${r}`),
              });
            }
          );
        ti.displayName = "Pagination";
        const ni = Object.assign(ti, {
          First: Ys,
          Prev: Zs,
          Ellipsis: Js,
          Item: Gs,
          Next: Qs,
          Last: ei,
        });
        function ri({ animation: e, bg: n, bsPrefix: r, size: o, ...a }) {
          r = g(r, "placeholder");
          const [{ className: s, ...i }] = Ut(a);
          return {
            ...i,
            className: t()(
              s,
              e ? `${r}-${e}` : r,
              o && `${r}-${o}`,
              n && `bg-${n}`
            ),
          };
        }
        const oi = n.forwardRef((e, t) => {
          const n = ri(e);
          return (0, m.jsx)(ut, { ...n, ref: t, disabled: !0, tabIndex: -1 });
        });
        oi.displayName = "PlaceholderButton";
        const ai = oi,
          si = n.forwardRef(({ as: e = "span", ...t }, n) => {
            const r = ri(t);
            return (0, m.jsx)(e, { ...r, ref: n });
          });
        si.displayName = "Placeholder";
        const ii = Object.assign(si, { Button: ai });
        function li(e, t, n) {
          const r = ((e - t) / (n - t)) * 100;
          return Math.round(1e3 * r) / 1e3;
        }
        function ci(
          {
            min: e,
            now: n,
            max: r,
            label: o,
            visuallyHidden: a,
            striped: s,
            animated: i,
            className: l,
            style: c,
            variant: u,
            bsPrefix: d,
            ...f
          },
          p
        ) {
          return (0, m.jsx)("div", {
            ref: p,
            ...f,
            role: "progressbar",
            className: t()(l, `${d}-bar`, {
              [`bg-${u}`]: u,
              [`${d}-bar-animated`]: i,
              [`${d}-bar-striped`]: i || s,
            }),
            style: { width: `${li(n, e, r)}%`, ...c },
            "aria-valuenow": n,
            "aria-valuemin": e,
            "aria-valuemax": r,
            children: a
              ? (0, m.jsx)("span", {
                  className: "visually-hidden",
                  children: o,
                })
              : o,
          });
        }
        const ui = n.forwardRef(({ isChild: e, ...r }, o) => {
          if (((r.bsPrefix = g(r.bsPrefix, "progress")), e)) return ci(r, o);
          const {
            min: a,
            now: s,
            max: i,
            label: l,
            visuallyHidden: c,
            striped: u,
            animated: d,
            bsPrefix: f,
            variant: p,
            className: v,
            children: h,
            ...b
          } = r;
          return (0, m.jsx)("div", {
            ref: o,
            ...b,
            className: t()(v, f),
            children: h
              ? Kt(h, (e) => (0, n.cloneElement)(e, { isChild: !0 }))
              : ci(
                  {
                    min: a,
                    now: s,
                    max: i,
                    label: l,
                    visuallyHidden: c,
                    striped: u,
                    animated: d,
                    bsPrefix: f,
                    variant: p,
                  },
                  o
                ),
          });
        });
        (ui.displayName = "ProgressBar"),
          (ui.defaultProps = {
            min: 0,
            max: 100,
            animated: !1,
            isChild: !1,
            visuallyHidden: !1,
            striped: !1,
          });
        const di = ui,
          fi = n.forwardRef(
            (
              {
                bsPrefix: e,
                className: r,
                children: o,
                aspectRatio: a,
                style: s,
                ...i
              },
              l
            ) => {
              e = g(e, "ratio");
              const c = "number" == typeof a;
              return (0, m.jsx)("div", {
                ref: l,
                ...i,
                style: {
                  ...s,
                  ...(c && {
                    "--bs-aspect-ratio":
                      ((u = a),
                      u <= 0 || u > 100
                        ? "100%"
                        : u < 1
                        ? 100 * u + "%"
                        : `${u}%`),
                  }),
                },
                className: t()(e, r, !c && `${e}-${a}`),
                children: n.Children.only(o),
              });
              var u;
            }
          );
        fi.defaultProps = { aspectRatio: "1x1" };
        const pi = fi,
          mi = ["xxl", "xl", "lg", "md", "sm", "xs"],
          vi = n.forwardRef(
            ({ bsPrefix: e, className: n, as: r = "div", ...o }, a) => {
              const s = g(e, "row"),
                i = `${s}-cols`,
                l = [];
              return (
                mi.forEach((e) => {
                  const t = o[e];
                  let n;
                  delete o[e],
                    null != t && "object" == typeof t
                      ? ({ cols: n } = t)
                      : (n = t);
                  const r = "xs" !== e ? `-${e}` : "";
                  null != n && l.push(`${i}${r}-${n}`);
                }),
                (0, m.jsx)(r, { ref: a, ...o, className: t()(n, s, ...l) })
              );
            }
          );
        vi.displayName = "Row";
        const hi = vi,
          bi = n.forwardRef(
            (
              {
                bsPrefix: e,
                variant: n,
                animation: r,
                size: o,
                as: a = "div",
                className: s,
                ...i
              },
              l
            ) => {
              const c = `${(e = g(e, "spinner"))}-${r}`;
              return (0, m.jsx)(a, {
                ref: l,
                ...i,
                className: t()(s, c, o && `${c}-${o}`, n && `text-${n}`),
              });
            }
          );
        bi.displayName = "Spinner";
        const gi = bi,
          xi = {
            id: R().string,
            toggleLabel: R().string,
            href: R().string,
            target: R().string,
            onClick: R().func,
            title: R().node.isRequired,
            type: R().string,
            disabled: R().bool,
            align: bo,
            menuRole: R().string,
            renderMenuOnMount: R().bool,
            rootCloseEvent: R().string,
            bsPrefix: R().string,
            variant: R().string,
            size: R().string,
          },
          yi = n.forwardRef(
            (
              {
                id: e,
                bsPrefix: t,
                size: n,
                variant: r,
                title: o,
                type: a,
                toggleLabel: s,
                children: i,
                onClick: l,
                href: c,
                target: u,
                menuRole: d,
                renderMenuOnMount: f,
                rootCloseEvent: p,
                ...v
              },
              h
            ) =>
              (0, m.jsxs)(vo, {
                ref: h,
                ...v,
                as: ft,
                children: [
                  (0, m.jsx)(ut, {
                    size: n,
                    variant: r,
                    disabled: v.disabled,
                    bsPrefix: t,
                    href: c,
                    target: u,
                    onClick: l,
                    type: a,
                    children: o,
                  }),
                  (0, m.jsx)(vo.Toggle, {
                    split: !0,
                    id: e,
                    size: n,
                    variant: r,
                    disabled: v.disabled,
                    childBsPrefix: t,
                    children: (0, m.jsx)("span", {
                      className: "visually-hidden",
                      children: s,
                    }),
                  }),
                  (0, m.jsx)(vo.Menu, {
                    role: d,
                    renderOnMount: f,
                    rootCloseEvent: p,
                    children: i,
                  }),
                ],
              })
          );
        (yi.propTypes = xi),
          (yi.defaultProps = {
            toggleLabel: "Toggle dropdown",
            type: "button",
          }),
          (yi.displayName = "SplitButton");
        const wi = yi,
          Ei = function (e) {
            let t = (0, n.useContext)(kr),
              o = (0, n.useMemo)(
                () => ({ prefix: t === Pr ? 0 : ++t.prefix, current: 0 }),
                [t]
              );
            return r().createElement(kr.Provider, { value: o }, e.children);
          },
          Ni = ["xxl", "xl", "lg", "md", "sm", "xs"];
        function Ci(e) {
          const t = [];
          return (
            Object.entries(e).forEach(([e, n]) => {
              null != n &&
                ("object" == typeof n
                  ? Ni.forEach((r) => {
                      const o = n[r];
                      if (null != o) {
                        const n = "xs" !== r ? `-${r}` : "";
                        t.push(`${e}${n}-${o}`);
                      }
                    })
                  : t.push(`${e}-${n}`));
            }),
            t
          );
        }
        const ji = n.forwardRef(
          (
            {
              as: e = "div",
              bsPrefix: n,
              className: r,
              direction: o,
              gap: a,
              ...s
            },
            i
          ) => (
            (n = g(n, "horizontal" === o ? "hstack" : "vstack")),
            (0, m.jsx)(e, {
              ...s,
              ref: i,
              className: t()(r, n, ...Ci({ gap: a })),
            })
          )
        );
        ji.displayName = "Stack";
        const Oi = ji,
          Pi = function ({
            children: e,
            in: t,
            mountOnEnter: r,
            unmountOnExit: o,
          }) {
            const a = (0, n.useRef)(t);
            return (
              (0, n.useEffect)(() => {
                t && (a.current = !0);
              }, [t]),
              t ? e : o || (!a.current && r) ? null : e
            );
          },
          ki = [
            "active",
            "eventKey",
            "mountOnEnter",
            "transition",
            "unmountOnExit",
          ],
          Ri = ["activeKey", "getControlledId", "getControllerId"],
          Ti = ["as"];
        function $i(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        }
        function Si(e) {
          let {
              active: t,
              eventKey: r,
              mountOnEnter: o,
              transition: a,
              unmountOnExit: s,
            } = e,
            i = $i(e, ki);
          const l = (0, n.useContext)(fa);
          if (!l)
            return [
              i,
              {
                eventKey: r,
                isActive: t,
                mountOnEnter: o,
                transition: a,
                unmountOnExit: s,
              },
            ];
          const { activeKey: c, getControlledId: u, getControllerId: d } = l,
            f = $i(l, Ri),
            p = Dr(r);
          return [
            Object.assign({}, i, { id: u(r), "aria-labelledby": d(r) }),
            {
              eventKey: r,
              isActive: null == t && null != p ? Dr(c) === p : t,
              transition: a || f.transition,
              mountOnEnter: null != o ? o : f.mountOnEnter,
              unmountOnExit: null != s ? s : f.unmountOnExit,
            },
          ];
        }
        const Mi = n.forwardRef((e, t) => {
          let { as: n = "div" } = e,
            r = $i(e, Ti);
          const [
            o,
            {
              isActive: a,
              onEnter: s,
              onEntering: i,
              onEntered: l,
              onExit: c,
              onExiting: u,
              onExited: d,
              mountOnEnter: f,
              unmountOnExit: p,
              transition: v = Pi,
            },
          ] = Si(r);
          return (0, m.jsx)(fa.Provider, {
            value: null,
            children: (0, m.jsx)(Br.Provider, {
              value: null,
              children: (0, m.jsx)(v, {
                in: a,
                onEnter: s,
                onEntering: i,
                onEntered: l,
                onExit: c,
                onExiting: u,
                onExited: d,
                mountOnEnter: f,
                unmountOnExit: p,
                children: (0, m.jsx)(
                  n,
                  Object.assign({}, o, {
                    ref: t,
                    role: "tabpanel",
                    hidden: !a,
                    "aria-hidden": !a,
                  })
                ),
              }),
            }),
          });
        });
        Mi.displayName = "TabPanel";
        const Ii = (e) => {
          const {
              id: t,
              generateChildId: r,
              onSelect: o,
              activeKey: a,
              defaultActiveKey: s,
              transition: i,
              mountOnEnter: l,
              unmountOnExit: c,
              children: u,
            } = e,
            [d, p] = f(a, s, o),
            v = Tr(t),
            h = (0, n.useMemo)(
              () => r || ((e, t) => (v ? `${v}-${t}-${e}` : null)),
              [v, r]
            ),
            b = (0, n.useMemo)(
              () => ({
                onSelect: p,
                activeKey: d,
                transition: i,
                mountOnEnter: l || !1,
                unmountOnExit: c || !1,
                getControlledId: (e) => h(e, "tabpane"),
                getControllerId: (e) => h(e, "tab"),
              }),
              [p, d, i, l, c, h]
            );
          return (0, m.jsx)(fa.Provider, {
            value: b,
            children: (0, m.jsx)(Br.Provider, {
              value: p || null,
              children: u,
            }),
          });
        };
        Ii.Panel = Mi;
        const Li = Ii;
        function Di(e) {
          return "boolean" == typeof e ? (e ? _e : void 0) : e;
        }
        const Bi = ({ transition: e, ...t }) =>
          (0, m.jsx)(Li, { ...t, transition: Di(e) });
        Bi.displayName = "TabContainer";
        const Ai = Bi,
          Fi = Xe("tab-content"),
          Ki = n.forwardRef(({ bsPrefix: e, transition: n, ...r }, o) => {
            const [
                { className: a, as: s = "div", ...i },
                {
                  isActive: l,
                  onEnter: c,
                  onEntering: u,
                  onEntered: d,
                  onExit: f,
                  onExiting: p,
                  onExited: v,
                  mountOnEnter: h,
                  unmountOnExit: b,
                  transition: x = Pi,
                },
              ] = Si({ ...r, transition: Di(n) }),
              y = g(e, "tab-pane");
            return (0, m.jsx)(fa.Provider, {
              value: null,
              children: (0, m.jsx)(Br.Provider, {
                value: null,
                children: (0, m.jsx)(x, {
                  in: l,
                  onEnter: c,
                  onEntering: u,
                  onEntered: d,
                  onExit: f,
                  onExiting: p,
                  onExited: v,
                  mountOnEnter: h,
                  unmountOnExit: b,
                  children: (0, m.jsx)(s, {
                    ...i,
                    ref: o,
                    className: t()(a, y, l && "active"),
                  }),
                }),
              }),
            });
          });
        Ki.displayName = "TabPane";
        const Hi = Ki,
          _i = {
            eventKey: R().oneOfType([R().string, R().number]),
            title: R().node.isRequired,
            disabled: R().bool,
            tabClassName: R().string,
          },
          Wi = () => {
            throw new Error(
              "ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly"
            );
          };
        Wi.propTypes = _i;
        const zi = Object.assign(Wi, { Container: Ai, Content: Fi, Pane: Hi }),
          Vi = n.forwardRef(
            (
              {
                bsPrefix: e,
                className: n,
                striped: r,
                bordered: o,
                borderless: a,
                hover: s,
                size: i,
                variant: l,
                responsive: c,
                ...u
              },
              d
            ) => {
              const f = g(e, "table"),
                p = t()(
                  n,
                  f,
                  l && `${f}-${l}`,
                  i && `${f}-${i}`,
                  r && `${f}-striped`,
                  o && `${f}-bordered`,
                  a && `${f}-borderless`,
                  s && `${f}-hover`
                ),
                v = (0, m.jsx)("table", { ...u, className: p, ref: d });
              if (c) {
                let e = `${f}-responsive`;
                return (
                  "string" == typeof c && (e = `${e}-${c}`),
                  (0, m.jsx)("div", { className: e, children: v })
                );
              }
              return v;
            }
          );
        function Ui(e) {
          let t;
          return (
            Ht(e, (e) => {
              null == t && (t = e.props.eventKey);
            }),
            t
          );
        }
        function qi(e) {
          const {
            title: t,
            eventKey: n,
            disabled: r,
            tabClassName: o,
            id: a,
          } = e.props;
          return null == t
            ? null
            : (0, m.jsx)(is, {
                as: "li",
                role: "presentation",
                children: (0, m.jsx)(cs, {
                  as: "button",
                  type: "button",
                  eventKey: n,
                  disabled: r,
                  id: a,
                  className: o,
                  children: t,
                }),
              });
        }
        const Gi = (e) => {
          const {
            id: t,
            onSelect: n,
            transition: r,
            mountOnEnter: o,
            unmountOnExit: a,
            children: s,
            activeKey: i = Ui(s),
            ...l
          } = p(e, { activeKey: "onSelect" });
          return (0, m.jsxs)(Li, {
            id: t,
            activeKey: i,
            onSelect: n,
            transition: Di(r),
            mountOnEnter: o,
            unmountOnExit: a,
            children: [
              (0, m.jsx)(ds, {
                ...l,
                role: "tablist",
                as: "ul",
                children: Kt(s, qi),
              }),
              (0, m.jsx)(Fi, {
                children: Kt(s, (e) => {
                  const t = { ...e.props };
                  return (
                    delete t.title,
                    delete t.disabled,
                    delete t.tabClassName,
                    (0, m.jsx)(Hi, { ...t })
                  );
                }),
              }),
            ],
          });
        };
        (Gi.defaultProps = {
          variant: "tabs",
          mountOnEnter: !1,
          unmountOnExit: !1,
        }),
          (Gi.displayName = "Tabs");
        const Xi = Gi,
          Yi = { [L]: "showing", [B]: "showing show" },
          Zi = n.forwardRef((e, t) =>
            (0, m.jsx)(_e, { ...e, ref: t, transitionClasses: Yi })
          );
        Zi.displayName = "ToastFade";
        const Ji = Zi,
          Qi = n.createContext({ onClose() {} }),
          el = n.forwardRef(
            (
              {
                bsPrefix: e,
                closeLabel: r,
                closeVariant: o,
                closeButton: a,
                className: s,
                children: i,
                ...l
              },
              c
            ) => {
              e = g(e, "toast-header");
              const u = (0, n.useContext)(Qi),
                d = Pe((e) => {
                  null == u || null == u.onClose || u.onClose(e);
                });
              return (0, m.jsxs)("div", {
                ref: c,
                ...l,
                className: t()(e, s),
                children: [
                  i,
                  a &&
                    (0, m.jsx)(Ve, {
                      "aria-label": r,
                      variant: o,
                      onClick: d,
                      "data-dismiss": "toast",
                    }),
                ],
              });
            }
          );
        (el.displayName = "ToastHeader"),
          (el.defaultProps = { closeLabel: "Close", closeButton: !0 });
        const tl = el,
          nl = Xe("toast-body"),
          rl = n.forwardRef(
            (
              {
                bsPrefix: e,
                className: r,
                transition: o = Ji,
                show: a = !0,
                animation: s = !0,
                delay: i = 5e3,
                autohide: l = !1,
                onClose: c,
                bg: u,
                ...d
              },
              f
            ) => {
              e = g(e, "toast");
              const p = (0, n.useRef)(i),
                v = (0, n.useRef)(c);
              (0, n.useEffect)(() => {
                (p.current = i), (v.current = c);
              }, [i, c]);
              const h = Dt(),
                b = !(!l || !a),
                x = (0, n.useCallback)(() => {
                  b && (null == v.current || v.current());
                }, [b]);
              (0, n.useEffect)(() => {
                h.set(x, p.current);
              }, [h, x]);
              const y = (0, n.useMemo)(() => ({ onClose: c }), [c]),
                w = !(!o || !s),
                E = (0, m.jsx)("div", {
                  ...d,
                  ref: f,
                  className: t()(
                    e,
                    r,
                    u && `bg-${u}`,
                    !w && (a ? "show" : "hide")
                  ),
                  role: "alert",
                  "aria-live": "assertive",
                  "aria-atomic": "true",
                });
              return (0, m.jsx)(Qi.Provider, {
                value: y,
                children:
                  w && o
                    ? (0, m.jsx)(o, { in: a, unmountOnExit: !0, children: E })
                    : E,
              });
            }
          );
        rl.displayName = "Toast";
        const ol = Object.assign(rl, { Body: nl, Header: tl }),
          al = {
            "top-start": "top-0 start-0",
            "top-center": "top-0 start-50 translate-middle-x",
            "top-end": "top-0 end-0",
            "middle-start": "top-50 start-0 translate-middle-y",
            "middle-center": "top-50 start-50 translate-middle",
            "middle-end": "top-50 end-0 translate-middle-y",
            "bottom-start": "bottom-0 start-0",
            "bottom-center": "bottom-0 start-50 translate-middle-x",
            "bottom-end": "bottom-0 end-0",
          },
          sl = n.forwardRef(
            (
              { bsPrefix: e, position: n, className: r, as: o = "div", ...a },
              s
            ) => (
              (e = g(e, "toast-container")),
              (0, m.jsx)(o, {
                ref: s,
                ...a,
                className: t()(e, n && `position-absolute ${al[n]}`, r),
              })
            )
          );
        sl.displayName = "ToastContainer";
        const il = sl,
          ll = () => {},
          cl = n.forwardRef(
            (
              {
                bsPrefix: e,
                name: n,
                className: r,
                checked: o,
                type: a,
                onChange: s,
                value: i,
                disabled: l,
                id: c,
                inputRef: u,
                ...d
              },
              f
            ) => (
              (e = g(e, "btn-check")),
              (0, m.jsxs)(m.Fragment, {
                children: [
                  (0, m.jsx)("input", {
                    className: e,
                    name: n,
                    type: a,
                    value: i,
                    ref: u,
                    autoComplete: "off",
                    checked: !!o,
                    disabled: !!l,
                    onChange: s || ll,
                    id: c,
                  }),
                  (0, m.jsx)(ut, {
                    ...d,
                    ref: f,
                    className: t()(r, l && "disabled"),
                    type: void 0,
                    as: "label",
                    htmlFor: c,
                  }),
                ],
              })
            )
          );
        cl.displayName = "ToggleButton";
        const ul = cl,
          dl = n.forwardRef((e, t) => {
            const {
                children: r,
                type: o,
                name: a,
                value: s,
                onChange: i,
                ...l
              } = p(e, { value: "onChange" }),
              u = () => (null == s ? [] : [].concat(s));
            return (
              "radio" !== o || a || c()(!1),
              (0, m.jsx)(ft, {
                ...l,
                ref: t,
                children: Kt(r, (e) => {
                  const t = u(),
                    { value: r, onChange: s } = e.props;
                  return n.cloneElement(e, {
                    type: o,
                    name: e.name || a,
                    checked: -1 !== t.indexOf(r),
                    onChange: Z(s, (e) =>
                      ((e, t) => {
                        if (!i) return;
                        const n = u(),
                          r = -1 !== n.indexOf(e);
                        "radio" !== o
                          ? i(r ? n.filter((t) => t !== e) : [...n, e], t)
                          : !r && i && i(e, t);
                      })(r, e)
                    ),
                  });
                }),
              })
            );
          });
        dl.defaultProps = { type: "radio", vertical: !1 };
        const fl = Object.assign(dl, { Button: ul }),
          pl = n.forwardRef(
            (
              {
                bsPrefix: e,
                placement: n,
                className: r,
                style: o,
                children: a,
                arrowProps: s,
                popper: i,
                show: l,
                ...c
              },
              u
            ) => {
              e = g(e, "tooltip");
              const d = x(),
                [f] = (null == n ? void 0 : n.split("-")) || [],
                p = As(f, d);
              return (0, m.jsxs)("div", {
                ref: u,
                style: o,
                role: "tooltip",
                "x-placement": f,
                className: t()(r, e, `bs-tooltip-${p}`),
                ...c,
                children: [
                  (0, m.jsx)("div", { className: "tooltip-arrow", ...s }),
                  (0, m.jsx)("div", { className: `${e}-inner`, children: a }),
                ],
              });
            }
          );
        (pl.defaultProps = { placement: "right" }),
          (pl.displayName = "Tooltip");
        const ml = pl;
      })(),
      a
    );
  })();
});
