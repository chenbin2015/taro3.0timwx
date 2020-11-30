!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).TIM = t());
})(this, function () {
  var e = {
      SDK_READY: "sdkStateReady",
      SDK_NOT_READY: "sdkStateNotReady",
      SDK_DESTROY: "sdkDestroy",
      MESSAGE_RECEIVED: "onMessageReceived",
      MESSAGE_REVOKED: "onMessageRevoked",
      MESSAGE_READ_BY_PEER: "onMessageReadByPeer",
      CONVERSATION_LIST_UPDATED: "onConversationListUpdated",
      GROUP_LIST_UPDATED: "onGroupListUpdated",
      GROUP_SYSTEM_NOTICE_RECEIVED: "receiveGroupSystemNotice",
      PROFILE_UPDATED: "onProfileUpdated",
      BLACKLIST_UPDATED: "blacklistUpdated",
      KICKED_OUT: "kickedOut",
      ERROR: "error",
      NET_STATE_CHANGE: "netStateChange",
    },
    t = {
      MSG_TEXT: "TIMTextElem",
      MSG_IMAGE: "TIMImageElem",
      MSG_SOUND: "TIMSoundElem",
      MSG_AUDIO: "TIMSoundElem",
      MSG_FILE: "TIMFileElem",
      MSG_FACE: "TIMFaceElem",
      MSG_VIDEO: "TIMVideoFileElem",
      MSG_GEO: "TIMLocationElem",
      MSG_GRP_TIP: "TIMGroupTipElem",
      MSG_GRP_SYS_NOTICE: "TIMGroupSystemNoticeElem",
      MSG_CUSTOM: "TIMCustomElem",
      MSG_PRIORITY_HIGH: "High",
      MSG_PRIORITY_NORMAL: "Normal",
      MSG_PRIORITY_LOW: "Low",
      MSG_PRIORITY_LOWEST: "Lowest",
      CONV_C2C: "C2C",
      CONV_GROUP: "GROUP",
      CONV_SYSTEM: "@TIM#SYSTEM",
      GRP_PRIVATE: "Private",
      GRP_WORK: "Private",
      GRP_PUBLIC: "Public",
      GRP_CHATROOM: "ChatRoom",
      GRP_MEETING: "ChatRoom",
      GRP_AVCHATROOM: "AVChatRoom",
      GRP_MBR_ROLE_OWNER: "Owner",
      GRP_MBR_ROLE_ADMIN: "Admin",
      GRP_MBR_ROLE_MEMBER: "Member",
      GRP_TIP_MBR_JOIN: 1,
      GRP_TIP_MBR_QUIT: 2,
      GRP_TIP_MBR_KICKED_OUT: 3,
      GRP_TIP_MBR_SET_ADMIN: 4,
      GRP_TIP_MBR_CANCELED_ADMIN: 5,
      GRP_TIP_GRP_PROFILE_UPDATED: 6,
      GRP_TIP_MBR_PROFILE_UPDATED: 7,
      MSG_REMIND_ACPT_AND_NOTE: "AcceptAndNotify",
      MSG_REMIND_ACPT_NOT_NOTE: "AcceptNotNotify",
      MSG_REMIND_DISCARD: "Discard",
      GENDER_UNKNOWN: "Gender_Type_Unknown",
      GENDER_FEMALE: "Gender_Type_Female",
      GENDER_MALE: "Gender_Type_Male",
      KICKED_OUT_MULT_ACCOUNT: "multipleAccount",
      KICKED_OUT_MULT_DEVICE: "multipleDevice",
      KICKED_OUT_USERSIG_EXPIRED: "userSigExpired",
      ALLOW_TYPE_ALLOW_ANY: "AllowType_Type_AllowAny",
      ALLOW_TYPE_NEED_CONFIRM: "AllowType_Type_NeedConfirm",
      ALLOW_TYPE_DENY_ANY: "AllowType_Type_DenyAny",
      FORBID_TYPE_NONE: "AdminForbid_Type_None",
      FORBID_TYPE_SEND_OUT: "AdminForbid_Type_SendOut",
      JOIN_OPTIONS_FREE_ACCESS: "FreeAccess",
      JOIN_OPTIONS_NEED_PERMISSION: "NeedPermission",
      JOIN_OPTIONS_DISABLE_APPLY: "DisableApply",
      JOIN_STATUS_SUCCESS: "JoinedSuccess",
      JOIN_STATUS_ALREADY_IN_GROUP: "AlreadyInGroup",
      JOIN_STATUS_WAIT_APPROVAL: "WaitAdminApproval",
      GRP_PROFILE_OWNER_ID: "ownerID",
      GRP_PROFILE_CREATE_TIME: "createTime",
      GRP_PROFILE_LAST_INFO_TIME: "lastInfoTime",
      GRP_PROFILE_MEMBER_NUM: "memberNum",
      GRP_PROFILE_MAX_MEMBER_NUM: "maxMemberNum",
      GRP_PROFILE_JOIN_OPTION: "joinOption",
      GRP_PROFILE_INTRODUCTION: "introduction",
      GRP_PROFILE_NOTIFICATION: "notification",
      GRP_PROFILE_MUTE_ALL_MBRS: "muteAllMembers",
      NET_STATE_CONNECTED: "connected",
      NET_STATE_CONNECTING: "connecting",
      NET_STATE_DISCONNECTED: "disconnected",
    };
  function n(e) {
    return (n =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function r(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function o(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function i(e, t, n) {
    return t && o(e.prototype, t), n && o(e, n), e;
  }
  function s(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? a(Object(n), !0).forEach(function (t) {
            s(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : a(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function c(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && p(e, t);
  }
  function l(e) {
    return (l = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function p(e, t) {
    return (p =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function h() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function d(e, t, n) {
    return (d = h()
      ? Reflect.construct
      : function (e, t, n) {
          var r = [null];
          r.push.apply(r, t);
          var o = new (Function.bind.apply(e, r))();
          return n && p(o, n.prototype), o;
        }).apply(null, arguments);
  }
  function f(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (f = function (e) {
      if (
        null === e ||
        ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
      )
        return e;
      var n;
      if ("function" != typeof e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, r);
      }
      function r() {
        return d(e, arguments, l(this).constructor);
      }
      return (
        (r.prototype = Object.create(e.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        p(r, e)
      );
    })(e);
  }
  function g(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function m(e, t) {
    return !t || ("object" != typeof t && "function" != typeof t) ? g(e) : t;
  }
  function y(e) {
    var t = h();
    return function () {
      var n,
        r = l(e);
      if (t) {
        var o = l(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return m(this, n);
    };
  }
  function v(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var n = [],
          r = !0,
          o = !1,
          i = void 0;
        try {
          for (
            var s, a = e[Symbol.iterator]();
            !(r = (s = a.next()).done) &&
            (n.push(s.value), !t || n.length !== t);
            r = !0
          );
        } catch (u) {
          (o = !0), (i = u);
        } finally {
          try {
            r || null == a.return || a.return();
          } finally {
            if (o) throw i;
          }
        }
        return n;
      })(e, t) ||
      I(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function _(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return C(e);
      })(e) ||
      (function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      })(e) ||
      I(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function I(e, t) {
    if (e) {
      if ("string" == typeof e) return C(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? C(e, t)
          : void 0
      );
    }
  }
  function C(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function M(e) {
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
      if (Array.isArray(e) || (e = I(e))) {
        var t = 0,
          n = function () {};
        return {
          s: n,
          n: function () {
            return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
          },
          e: function (e) {
            throw e;
          },
          f: n,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var r,
      o,
      i = !0,
      s = !1;
    return {
      s: function () {
        r = e[Symbol.iterator]();
      },
      n: function () {
        var e = r.next();
        return (i = e.done), e;
      },
      e: function (e) {
        (s = !0), (o = e);
      },
      f: function () {
        try {
          i || null == r.return || r.return();
        } finally {
          if (s) throw o;
        }
      },
    };
  }
  var E = (function () {
      function e() {
        r(this, e), (this.cache = []), (this.options = null);
      }
      return (
        i(e, [
          {
            key: "use",
            value: function (e) {
              if ("function" != typeof e) throw "middleware must be a function";
              return this.cache.push(e), this;
            },
          },
          {
            key: "next",
            value: function (e) {
              if (this.middlewares && this.middlewares.length > 0)
                return this.middlewares
                  .shift()
                  .call(this, this.options, this.next.bind(this));
            },
          },
          {
            key: "run",
            value: function (e) {
              return (
                (this.middlewares = this.cache.map(function (e) {
                  return e;
                })),
                (this.options = e),
                this.next()
              );
            },
          },
        ]),
        e
      );
    })(),
    S =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function T(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var D,
    k,
    A,
    R = T(function (e, t) {
      var n, r, o, i, s, a, u, c, l, p, h, d, f, g, m, y, v, _;
      e.exports =
        ((n = "function" == typeof Promise),
        (r = "object" == typeof self ? self : S),
        (o = "undefined" != typeof Symbol),
        (i = "undefined" != typeof Map),
        (s = "undefined" != typeof Set),
        (a = "undefined" != typeof WeakMap),
        (u = "undefined" != typeof WeakSet),
        (c = "undefined" != typeof DataView),
        (l = o && void 0 !== Symbol.iterator),
        (p = o && void 0 !== Symbol.toStringTag),
        (h = s && "function" == typeof Set.prototype.entries),
        (d = i && "function" == typeof Map.prototype.entries),
        (f = h && Object.getPrototypeOf(new Set().entries())),
        (g = d && Object.getPrototypeOf(new Map().entries())),
        (m = l && "function" == typeof Array.prototype[Symbol.iterator]),
        (y = m && Object.getPrototypeOf([][Symbol.iterator]())),
        (v = l && "function" == typeof String.prototype[Symbol.iterator]),
        (_ = v && Object.getPrototypeOf(""[Symbol.iterator]())),
        function (e) {
          var t = typeof e;
          if ("object" !== t) return t;
          if (null === e) return "null";
          if (e === r) return "global";
          if (Array.isArray(e) && (!1 === p || !(Symbol.toStringTag in e)))
            return "Array";
          if ("object" == typeof window && null !== window) {
            if ("object" == typeof window.location && e === window.location)
              return "Location";
            if ("object" == typeof window.document && e === window.document)
              return "Document";
            if ("object" == typeof window.navigator) {
              if (
                "object" == typeof window.navigator.mimeTypes &&
                e === window.navigator.mimeTypes
              )
                return "MimeTypeArray";
              if (
                "object" == typeof window.navigator.plugins &&
                e === window.navigator.plugins
              )
                return "PluginArray";
            }
            if (
              ("function" == typeof window.HTMLElement ||
                "object" == typeof window.HTMLElement) &&
              e instanceof window.HTMLElement
            ) {
              if ("BLOCKQUOTE" === e.tagName) return "HTMLQuoteElement";
              if ("TD" === e.tagName) return "HTMLTableDataCellElement";
              if ("TH" === e.tagName) return "HTMLTableHeaderCellElement";
            }
          }
          var o = p && e[Symbol.toStringTag];
          if ("string" == typeof o) return o;
          var l = Object.getPrototypeOf(e);
          return l === RegExp.prototype
            ? "RegExp"
            : l === Date.prototype
            ? "Date"
            : n && l === Promise.prototype
            ? "Promise"
            : s && l === Set.prototype
            ? "Set"
            : i && l === Map.prototype
            ? "Map"
            : u && l === WeakSet.prototype
            ? "WeakSet"
            : a && l === WeakMap.prototype
            ? "WeakMap"
            : c && l === DataView.prototype
            ? "DataView"
            : i && l === g
            ? "Map Iterator"
            : s && l === f
            ? "Set Iterator"
            : m && l === y
            ? "Array Iterator"
            : v && l === _
            ? "String Iterator"
            : null === l
            ? "Object"
            : Object.prototype.toString.call(e).slice(8, -1);
        });
    }),
    O = "undefined" != typeof window,
    N = "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync,
    w = (O && window.navigator && window.navigator.userAgent) || "",
    L = /AppleWebKit\/([\d.]+)/i.exec(w),
    P = (L && parseFloat(L.pop()), /iPad/i.test(w)),
    G =
      (/iPhone/i.test(w),
      /iPod/i.test(w),
      (D = w.match(/OS (\d+)_/i)) && D[1] && D[1],
      /Android/i.test(w)),
    b = (function () {
      var e = w.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
      if (!e) return null;
      var t = e[1] && parseFloat(e[1]),
        n = e[2] && parseFloat(e[2]);
      return t && n ? parseFloat(e[1] + "." + e[2]) : t || null;
    })(),
    U = (G && /webkit/i.test(w), /Firefox/i.test(w), /Edge/i.test(w)),
    q = !U && /Chrome/i.test(w),
    x =
      ((function () {
        var e = w.match(/Chrome\/(\d+)/);
        e && e[1] && parseFloat(e[1]);
      })(),
      /MSIE/.test(w)),
    F =
      (/MSIE\s8\.0/.test(w),
      (function () {
        var e = /MSIE\s(\d+)\.\d/.exec(w),
          t = e && parseFloat(e[1]);
        return (
          !t && /Trident\/7.0/i.test(w) && /rv:11.0/.test(w) && (t = 11), t
        );
      })()),
    H = (/Safari/i.test(w), /TBS\/\d+/i.test(w)),
    K =
      ((function () {
        var e = w.match(/TBS\/(\d+)/i);
        if (e && e[1]) e[1];
      })(),
      !H && /MQQBrowser\/\d+/i.test(w),
      !H && / QQBrowser\/\d+/i.test(w),
      /(micromessenger|webbrowser)/i.test(w)),
    B =
      (/Windows/i.test(w),
      /MAC OS X/i.test(w),
      /MicroMessenger/i.test(w),
      "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : {});
  k =
    "undefined" != typeof console
      ? console
      : void 0 !== B && B.console
      ? B.console
      : "undefined" != typeof window && window.console
      ? window.console
      : {};
  for (
    var V = function () {},
      j = [
        "assert",
        "clear",
        "count",
        "debug",
        "dir",
        "dirxml",
        "error",
        "exception",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "markTimeline",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeStamp",
        "trace",
        "warn",
      ],
      Y = j.length;
    Y--;

  )
    (A = j[Y]), console[A] || (k[A] = V);
  k.methods = j;
  var $ = k,
    W = 0,
    z = new Map();
  function X() {
    var e = new Date();
    return (
      "TIM " +
      e.toLocaleTimeString("en-US", { hour12: !1 }) +
      "." +
      (function (e) {
        var t;
        switch (e.toString().length) {
          case 1:
            t = "00" + e;
            break;
          case 2:
            t = "0" + e;
            break;
          default:
            t = e;
        }
        return t;
      })(e.getMilliseconds()) +
      ":"
    );
  }
  var J = {
      _data: [],
      _length: 0,
      _visible: !1,
      arguments2String: function (e) {
        var t;
        if (1 === e.length) t = X() + e[0];
        else {
          t = X();
          for (var n = 0, r = e.length; n < r; n++)
            ie(e[n])
              ? ae(e[n])
                ? (t += de(e[n]))
                : (t += JSON.stringify(e[n]))
              : (t += e[n]),
              (t += " ");
        }
        return t;
      },
      debug: function () {
        if (W <= -1) {
          var e = this.arguments2String(arguments);
          J.record(e, "debug"), $.debug(e);
        }
      },
      log: function () {
        if (W <= 0) {
          var e = this.arguments2String(arguments);
          J.record(e, "log"), $.log(e);
        }
      },
      info: function () {
        if (W <= 1) {
          var e = this.arguments2String(arguments);
          J.record(e, "info"), $.info(e);
        }
      },
      warn: function () {
        if (W <= 2) {
          var e = this.arguments2String(arguments);
          J.record(e, "warn"), $.warn(e);
        }
      },
      error: function () {
        if (W <= 3) {
          var e = this.arguments2String(arguments);
          J.record(e, "error"), $.error(e);
        }
      },
      time: function (e) {
        z.set(e, pe.now());
      },
      timeEnd: function (e) {
        if (z.has(e)) {
          var t = pe.now() - z.get(e);
          return z.delete(e), t;
        }
        return (
          $.warn(
            "未找到对应label: ".concat(
              e,
              ", 请在调用 logger.timeEnd 前，调用 logger.time"
            )
          ),
          0
        );
      },
      setLevel: function (e) {
        e < 4 && $.log(X() + "set level from " + W + " to " + e), (W = e);
      },
      record: function (e, t) {
        1100 === J._length && (J._data.splice(0, 100), (J._length = 1e3)),
          J._length++,
          J._data.push("".concat(e, " [").concat(t, "] \n"));
      },
      getLog: function () {
        return J._data;
      },
    },
    Q = function (e) {
      return "file" === ue(e);
    },
    Z = function (e) {
      return (
        null !== e &&
        (("number" == typeof e && !isNaN(e - 0)) ||
          ("object" === n(e) && e.constructor === Number))
      );
    },
    ee = function (e) {
      return "string" == typeof e;
    },
    te = function (e) {
      return null !== e && "object" === n(e);
    },
    ne = function (e) {
      if ("object" !== n(e) || null === e) return !1;
      var t = Object.getPrototypeOf(e);
      if (null === t) return !0;
      for (var r = t; null !== Object.getPrototypeOf(r); )
        r = Object.getPrototypeOf(r);
      return t === r;
    },
    re = function (e) {
      return "function" == typeof Array.isArray
        ? Array.isArray(e)
        : "array" === ue(e);
    },
    oe = function (e) {
      return void 0 === e;
    },
    ie = function (e) {
      return re(e) || te(e);
    },
    se = function (e) {
      return "function" == typeof e;
    },
    ae = function (e) {
      return e instanceof Error;
    },
    ue = function (e) {
      return Object.prototype.toString
        .call(e)
        .match(/^\[object (.*)\]$/)[1]
        .toLowerCase();
    },
    ce = function (e) {
      if ("string" != typeof e) return !1;
      var t = e[0];
      return !/[^a-zA-Z0-9]/.test(t);
    },
    le = 0;
  Date.now ||
    (Date.now = function () {
      return new Date().getTime();
    });
  var pe = {
      now: function () {
        0 === le && (le = Date.now() - 1);
        var e = Date.now() - le;
        return e > 4294967295 ? ((le += 4294967295), Date.now() - le) : e;
      },
      utc: function () {
        return Math.round(Date.now() / 1e3);
      },
    },
    he = function e(t, n, r, o) {
      if (!ie(t) || !ie(n)) return 0;
      for (var i, s = 0, a = Object.keys(n), u = 0, c = a.length; u < c; u++)
        if (((i = a[u]), !(oe(n[i]) || (r && r.includes(i)))))
          if (ie(t[i]) && ie(n[i])) s += e(t[i], n[i], r, o);
          else {
            if (o && o.includes(n[i])) continue;
            t[i] !== n[i] && ((t[i] = n[i]), (s += 1));
          }
      return s;
    },
    de = function (e) {
      return JSON.stringify(e, ["message", "code"]);
    },
    fe = function () {
      var e = new Date(),
        t = e.toISOString(),
        n = e.getTimezoneOffset() / 60,
        r = "";
      return (
        (r =
          n < 0
            ? n > -10
              ? "+0" + Math.abs(100 * n)
              : "+" + Math.abs(100 * n)
            : n >= 10
            ? "-" + 100 * n
            : "-0" + 100 * n),
        t.replace("Z", r)
      );
    },
    ge = function (e) {
      if (0 === e.length) return 0;
      for (
        var t = 0,
          n = 0,
          r =
            "undefined" != typeof document && void 0 !== document.characterSet
              ? document.characterSet
              : "UTF-8";
        void 0 !== e[t];

      )
        n += e[t++].charCodeAt[t] <= 255 ? 1 : !1 === r ? 3 : 2;
      return n;
    },
    me = function (e) {
      var t = e || 99999999;
      return Math.round(Math.random() * t);
    },
    ye = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ve = ye.length,
    _e = function (e, t) {
      for (var n in e) if (e[n] === t) return !0;
      return !1;
    },
    Ie = {},
    Ce = function () {
      if (N) return "https:";
      var e = window.location.protocol;
      return ["http:", "https:"].indexOf(e) < 0 && (e = "http:"), e;
    },
    Me = function (e) {
      return -1 === e.indexOf("http://") || -1 === e.indexOf("https://")
        ? "https://" + e
        : e.replace(/https|http/, "https");
    };
  function Ee(e, t) {
    re(e) && re(t)
      ? t.forEach(function (t) {
          var n = t.key,
            r = t.value,
            o = e.find(function (e) {
              return e.key === n;
            });
          o ? (o.value = r) : e.push({ key: n, value: r });
        })
      : J.warn("updateCustomField target 或 source 不是数组，忽略此次更新。");
  }
  var Se = function (e) {
      return e === t.GRP_PUBLIC;
    },
    Te = function (e) {
      return e === t.GRP_MEETING;
    },
    De = function (e) {
      return e === t.GRP_AVCHATROOM;
    },
    ke = function (e) {
      return ee(e) && e === t.CONV_SYSTEM;
    };
  function Ae(e, t) {
    var n = {};
    return (
      Object.keys(e).forEach(function (r) {
        n[r] = t(e[r], r);
      }),
      n
    );
  }
  var Re = Object.prototype.hasOwnProperty;
  function Oe(e) {
    if (null == e) return !0;
    if ("boolean" == typeof e) return !1;
    if ("number" == typeof e) return 0 === e;
    if ("string" == typeof e) return 0 === e.length;
    if ("function" == typeof e) return 0 === e.length;
    if (Array.isArray(e)) return 0 === e.length;
    if (e instanceof Error) return "" === e.message;
    if (ne(e)) {
      for (var t in e) if (Re.call(e, t)) return !1;
      return !0;
    }
    return (
      !(
        "map" !== ue(e) &&
        !(function (e) {
          return "set" === ue(e);
        })(e) &&
        !Q(e)
      ) && 0 === e.size
    );
  }
  function Ne(e, t, n) {
    if (void 0 === t) return !0;
    var r = !0;
    if ("object" === R(t).toLowerCase())
      Object.keys(t).forEach(function (o) {
        var i = 1 === e.length ? e[0][o] : void 0;
        r = !!we(i, t[o], n, o) && r;
      });
    else if ("array" === R(t).toLowerCase())
      for (var o = 0; o < t.length; o++)
        r = !!we(e[o], t[o], n, t[o].name) && r;
    if (r) return r;
    throw new Error("Params validate failed.");
  }
  function we(e, t, n, r) {
    if (void 0 === t) return !0;
    var o = !0;
    return (
      t.required &&
        Oe(e) &&
        ($.error(
          "TIM [".concat(n, '] Missing required params: "').concat(r, '".')
        ),
        (o = !1)),
      Oe(e) ||
        R(e).toLowerCase() === t.type.toLowerCase() ||
        ($.error(
          "TIM ["
            .concat(n, '] Invalid params: type check failed for "')
            .concat(r, '".Expected ')
            .concat(t.type, ".")
        ),
        (o = !1)),
      t.validator &&
        !t.validator(e) &&
        ($.error(
          "TIM [".concat(
            n,
            "] Invalid params: custom validator check failed for params."
          )
        ),
        (o = !1)),
      o
    );
  }
  var Le = { SUCCESS: "JoinedSuccess", WAIT_APPROVAL: "WaitAdminApproval" },
    Pe = { SUCCESS: 0 },
    Ge = { IS_LOGIN: 1, IS_NOT_LOGIN: 0 },
    be = { UNSEND: "unSend", SUCCESS: "success", FAIL: "fail" },
    Ue = {
      NOT_START: "notStart",
      PENDING: "pengding",
      RESOLVED: "resolved",
      REJECTED: "rejected",
    },
    qe = (function () {
      function e(n) {
        r(this, e),
          (this.type = t.MSG_TEXT),
          (this.content = { text: n.text || "" });
      }
      return (
        i(e, [
          {
            key: "setText",
            value: function (e) {
              this.content.text = e;
            },
          },
          {
            key: "sendable",
            value: function () {
              return 0 !== this.content.text.length;
            },
          },
        ]),
        e
      );
    })(),
    xe = {
      JSON: {
        TYPE: {
          C2C: { NOTICE: 1, COMMON: 9, EVENT: 10 },
          GROUP: { COMMON: 3, TIP: 4, SYSTEM: 5, TIP2: 6 },
          FRIEND: { NOTICE: 7 },
          PROFILE: { NOTICE: 8 },
        },
        SUBTYPE: {
          C2C: { COMMON: 0, READED: 92, KICKEDOUT: 96 },
          GROUP: { COMMON: 0, LOVEMESSAGE: 1, TIP: 2, REDPACKET: 3 },
        },
        OPTIONS: {
          GROUP: {
            JOIN: 1,
            QUIT: 2,
            KICK: 3,
            SET_ADMIN: 4,
            CANCEL_ADMIN: 5,
            MODIFY_GROUP_INFO: 6,
            MODIFY_MEMBER_INFO: 7,
          },
        },
      },
      PROTOBUF: {},
      IMAGE_TYPES: { ORIGIN: 1, LARGE: 2, SMALL: 3 },
      IMAGE_FORMAT: { JPG: 1, JPEG: 1, GIF: 2, PNG: 3, BMP: 4, UNKNOWN: 255 },
    },
    Fe = 1,
    He = 2,
    Ke = 3,
    Be = 4,
    Ve = 5,
    je = 7,
    Ye = 8,
    $e = 9,
    We = 10,
    ze = 15,
    Xe = 255,
    Je = 2,
    Qe = 0,
    Ze = 1,
    et = {
      NICK: "Tag_Profile_IM_Nick",
      GENDER: "Tag_Profile_IM_Gender",
      BIRTHDAY: "Tag_Profile_IM_BirthDay",
      LOCATION: "Tag_Profile_IM_Location",
      SELFSIGNATURE: "Tag_Profile_IM_SelfSignature",
      ALLOWTYPE: "Tag_Profile_IM_AllowType",
      LANGUAGE: "Tag_Profile_IM_Language",
      AVATAR: "Tag_Profile_IM_Image",
      MESSAGESETTINGS: "Tag_Profile_IM_MsgSettings",
      ADMINFORBIDTYPE: "Tag_Profile_IM_AdminForbidType",
      LEVEL: "Tag_Profile_IM_Level",
      ROLE: "Tag_Profile_IM_Role",
    },
    tt = {
      UNKNOWN: "Gender_Type_Unknown",
      FEMALE: "Gender_Type_Female",
      MALE: "Gender_Type_Male",
    },
    nt = {
      NONE: "AdminForbid_Type_None",
      SEND_OUT: "AdminForbid_Type_SendOut",
    },
    rt = {
      NEED_CONFIRM: "AllowType_Type_NeedConfirm",
      ALLOW_ANY: "AllowType_Type_AllowAny",
      DENY_ANY: "AllowType_Type_DenyAny",
    },
    ot = (function () {
      function e(n) {
        r(this, e),
          (this._imageMemoryURL = ""),
          (this._file = n.file),
          N
            ? this.createImageDataASURLInWXMiniApp(n.file)
            : this.createImageDataASURLInWeb(n.file),
          this._initImageInfoModel(),
          (this.type = t.MSG_IMAGE),
          (this._percent = 0),
          (this.content = {
            imageFormat:
              xe.IMAGE_FORMAT[n.imageFormat] || xe.IMAGE_FORMAT.UNKNOWN,
            uuid: n.uuid,
            imageInfoArray: [],
          }),
          this.initImageInfoArray(n.imageInfoArray),
          (this._defaultImage =
            "http://imgcache.qq.com/open/qcloud/video/act/webim-images/default.jpg"),
          this._autoFixUrl();
      }
      return (
        i(e, [
          {
            key: "_initImageInfoModel",
            value: function () {
              var e = this;
              (this._ImageInfoModel = function (t) {
                (this.instanceID = me(9999999)),
                  (this.sizeType = t.type || 0),
                  (this.size = t.size || 0),
                  (this.width = t.width || 0),
                  (this.height = t.height || 0),
                  (this.imageUrl = t.url || ""),
                  (this.url = t.url || e._imageMemoryURL || e._defaultImage);
              }),
                (this._ImageInfoModel.prototype = {
                  setSizeType: function (e) {
                    this.sizeType = e;
                  },
                  setImageUrl: function (e) {
                    e && (this.imageUrl = e);
                  },
                  getImageUrl: function () {
                    return this.imageUrl;
                  },
                });
            },
          },
          {
            key: "initImageInfoArray",
            value: function (e) {
              for (var t = 2, n = null, r = null; t >= 0; )
                (r =
                  void 0 === e || void 0 === e[t]
                    ? { type: 0, size: 0, width: 0, height: 0, url: "" }
                    : e[t]),
                  (n = new this._ImageInfoModel(r)).setSizeType(t + 1),
                  this.addImageInfo(n),
                  t--;
            },
          },
          {
            key: "updateImageInfoArray",
            value: function (e) {
              for (
                var t, n = this.content.imageInfoArray.length, r = 0;
                r < n;
                r++
              )
                (t = this.content.imageInfoArray[r]),
                  e.size && (t.size = e.size),
                  e.url && t.setImageUrl(e.url),
                  e.width && (t.width = e.width),
                  e.height && (t.height = e.height);
            },
          },
          {
            key: "_autoFixUrl",
            value: function () {
              for (
                var e = this.content.imageInfoArray.length,
                  t = "",
                  n = "",
                  r = ["http", "https"],
                  o = null,
                  i = 0;
                i < e;
                i++
              )
                this.content.imageInfoArray[i].url &&
                  "" !== (o = this.content.imageInfoArray[i]).imageUrl &&
                  ((n = o.imageUrl.slice(0, o.imageUrl.indexOf("://") + 1)),
                  (t = o.imageUrl.slice(o.imageUrl.indexOf("://") + 1)),
                  r.indexOf(n) < 0 && (n = "https:"),
                  this.content.imageInfoArray[i].setImageUrl([n, t].join("")));
            },
          },
          {
            key: "updatePercent",
            value: function (e) {
              (this._percent = e), this._percent > 1 && (this._percent = 1);
            },
          },
          {
            key: "updateImageFormat",
            value: function (e) {
              this.content.imageFormat = e;
            },
          },
          {
            key: "createImageDataASURLInWeb",
            value: function (e) {
              void 0 !== e &&
                e.files.length > 0 &&
                (this._imageMemoryURL = window.URL.createObjectURL(e.files[0]));
            },
          },
          {
            key: "createImageDataASURLInWXMiniApp",
            value: function (e) {
              e && e.url && (this._imageMemoryURL = e.url);
            },
          },
          {
            key: "replaceImageInfo",
            value: function (e, t) {
              this.content.imageInfoArray[t] instanceof this._ImageInfoModel ||
                (this.content.imageInfoArray[t] = e);
            },
          },
          {
            key: "addImageInfo",
            value: function (e) {
              this.content.imageInfoArray.length >= 3 ||
                this.content.imageInfoArray.push(e);
            },
          },
          {
            key: "sendable",
            value: function () {
              return (
                0 !== this.content.imageInfoArray.length &&
                "" !== this.content.imageInfoArray[0].imageUrl &&
                0 !== this.content.imageInfoArray[0].size
              );
            },
          },
        ]),
        e
      );
    })(),
    it = (function () {
      function e(n) {
        r(this, e), (this.type = t.MSG_FACE), (this.content = n || null);
      }
      return (
        i(e, [
          {
            key: "sendable",
            value: function () {
              return null !== this.content;
            },
          },
        ]),
        e
      );
    })(),
    st = (function () {
      function e(n) {
        r(this, e),
          (this.type = t.MSG_AUDIO),
          (this._percent = 0),
          (this.content = {
            downloadFlag: 2,
            second: n.second,
            size: n.size,
            url: n.url,
            remoteAudioUrl: "",
            uuid: n.uuid,
          });
      }
      return (
        i(e, [
          {
            key: "updatePercent",
            value: function (e) {
              (this._percent = e), this._percent > 1 && (this._percent = 1);
            },
          },
          {
            key: "updateAudioUrl",
            value: function (e) {
              this.content.remoteAudioUrl = e;
            },
          },
          {
            key: "sendable",
            value: function () {
              return "" !== this.content.remoteAudioUrl;
            },
          },
        ]),
        e
      );
    })(),
    at = { from: !0, groupID: !0, groupName: !0, to: !0 },
    ut = (function () {
      function e(n) {
        r(this, e),
          (this.type = t.MSG_GRP_TIP),
          (this.content = {}),
          this._initContent(n);
      }
      return (
        i(e, [
          {
            key: "_initContent",
            value: function (e) {
              var t = this;
              Object.keys(e).forEach(function (n) {
                switch (n) {
                  case "remarkInfo":
                    break;
                  case "groupProfile":
                    (t.content.groupProfile = {}), t._initGroupProfile(e[n]);
                    break;
                  case "operatorInfo":
                  case "memberInfoList":
                    break;
                  case "msgMemberInfo":
                    (t.content.memberList = e[n]),
                      Object.defineProperty(t.content, "msgMemberInfo", {
                        get: function () {
                          return (
                            J.warn(
                              "!!! 禁言的群提示消息中的 payload.msgMemberInfo 属性即将废弃，请使用 payload.memberList 属性替代。 \n",
                              "msgMemberInfo 中的 shutupTime 属性对应更改为 memberList 中的 muteTime 属性，表示禁言时长。 \n",
                              "参考：群提示消息 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/Message.html#.GroupTipPayload"
                            ),
                            t.content.memberList.map(function (e) {
                              return {
                                userID: e.userID,
                                shutupTime: e.muteTime,
                              };
                            })
                          );
                        },
                      });
                    break;
                  default:
                    t.content[n] = e[n];
                }
              }),
                this.content.userIDList ||
                  (this.content.userIDList = [this.content.operatorID]);
            },
          },
          {
            key: "_initGroupProfile",
            value: function (e) {
              for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                var r = t[n];
                at[r] && (this.content.groupProfile[r] = e[r]);
              }
            },
          },
        ]),
        e
      );
    })(),
    ct = { from: !0, groupID: !0, name: !0, to: !0 },
    lt = (function () {
      function e(n) {
        r(this, e),
          (this.type = t.MSG_GRP_SYS_NOTICE),
          (this.content = {}),
          this._initContent(n);
      }
      return (
        i(e, [
          {
            key: "_initContent",
            value: function (e) {
              var t = this;
              Object.keys(e).forEach(function (n) {
                switch (n) {
                  case "memberInfoList":
                    break;
                  case "remarkInfo":
                    t.content.handleMessage = e[n];
                    break;
                  case "groupProfile":
                    (t.content.groupProfile = {}), t._initGroupProfile(e[n]);
                    break;
                  default:
                    t.content[n] = e[n];
                }
              });
            },
          },
          {
            key: "_initGroupProfile",
            value: function (e) {
              for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                var r = t[n];
                ct[r] && (this.content.groupProfile[r] = e[r]);
              }
            },
          },
        ]),
        e
      );
    })(),
    pt = {
      70001: "UserSig 已过期，请重新生成。建议 UserSig 有效期设置不小于24小时。",
      70002: "UserSig 长度为0，请检查传入的 UserSig 是否正确。",
      70003: "UserSig 非法，请使用官网提供的 API 重新生成 UserSig(https://cloud.tencent.com/document/product/269/32688)。",
      70005: "UserSig 非法，请使用官网提供的 API 重新生成 UserSig(https://cloud.tencent.com/document/product/269/32688)。",
      70009: "UserSig 验证失败，可能因为生成 UserSig 时混用了其他 SDKAppID 的私钥或密钥导致，请使用对应 SDKAppID 下的私钥或密钥重新生成 UserSig(https://cloud.tencent.com/document/product/269/32688)。",
      70013: "请求中的 UserID 与生成 UserSig 时使用的 UserID 不匹配，您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。",
      70014: "请求中的 SDKAppID 与生成 UserSig 时使用的 SDKAppID 不匹配，您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。",
      70016: "密钥不存在，UserSig 验证失败，请在即时通信 IM 控制台获取密钥(https://cloud.tencent.com/document/product/269/32578#.E8.8E.B7.E5.8F.96.E5.AF.86.E9.92.A5)。",
      70020: "SDKAppID 未找到，请在即时通信 IM 控制台确认应用信息。",
      70050: "UserSig 验证次数过于频繁。请检查 UserSig 是否正确，并于1分钟后重新验证。您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。",
      70051: "帐号被拉入黑名单。",
      70052: "UserSig 已经失效，请重新生成，再次尝试。",
      70107: "因安全原因被限制登录，请不要频繁登录。",
      70169: "请求的用户帐号不存在。",
      70114: "服务端内部超时，请稍后重试。",
      70202: "服务端内部超时，请稍后重试。",
      70206: "请求中批量数量不合法。",
      70402: "参数非法，请检查必填字段是否填充，或者字段的填充是否满足协议要求。",
      70403: "请求失败，需要 App 管理员权限。",
      70398: "帐号数超限。如需创建多于100个帐号，请将应用升级为专业版，具体操作指引请参见购买指引(https://cloud.tencent.com/document/product/269/32458)。",
      70500: "服务端内部错误，请稍后重试。",
      71e3: "删除帐号失败。仅支持删除体验版帐号，您当前应用为专业版，暂不支持帐号删除。",
      20001: "请求包非法。",
      20002: "UserSig 或 A2 失效。",
      20003: "消息发送方或接收方 UserID 无效或不存在，请检查 UserID 是否已导入即时通信 IM。",
      20004: "网络异常，请重试。",
      20005: "服务端内部错误，请重试。",
      20006: "触发发送单聊消息之前回调，App 后台返回禁止下发该消息。",
      20007: "发送单聊消息，被对方拉黑，禁止发送。消息发送状态默认展示为失败，您可以登录控制台修改该场景下的消息发送状态展示结果，具体操作请参见消息保留设置(https://cloud.tencent.com/document/product/269/38656)。",
      20009: "消息发送双方互相不是好友，禁止发送（配置单聊消息校验好友关系才会出现）。",
      20010: "发送单聊消息，自己不是对方的好友（单向关系），禁止发送。",
      20011: "发送单聊消息，对方不是自己的好友（单向关系），禁止发送。",
      20012: "发送方被禁言，该条消息被禁止发送。",
      20016: "消息撤回超过了时间限制（默认2分钟）。",
      20018: "删除漫游内部错误。",
      90001: "JSON 格式解析失败，请检查请求包是否符合 JSON 规范。",
      90002: "JSON 格式请求包中 MsgBody 不符合消息格式描述，或者 MsgBody 不是 Array 类型，请参考 TIMMsgElement 对象的定义(https://cloud.tencent.com/document/product/269/2720#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement)。",
      90003: "JSON 格式请求包体中缺少 To_Account 字段或者 To_Account 帐号不存在。",
      90005: "JSON 格式请求包体中缺少 MsgRandom 字段或者 MsgRandom 字段不是 Integer 类型。",
      90006: "JSON 格式请求包体中缺少 MsgTimeStamp 字段或者 MsgTimeStamp 字段不是 Integer 类型。",
      90007: "JSON 格式请求包体中 MsgBody 类型不是 Array 类型，请将其修改为 Array 类型。",
      90008: "JSON 格式请求包体中缺少 From_Account 字段或者 From_Account 帐号不存在。",
      90009: "请求需要 App 管理员权限。",
      90010: "JSON 格式请求包不符合消息格式描述，请参考 TIMMsgElement 对象的定义(https://cloud.tencent.com/document/product/269/2720#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement)。",
      90011: "批量发消息目标帐号超过500，请减少 To_Account 中目标帐号数量。",
      90012: "To_Account 没有注册或不存在，请确认 To_Account 是否导入即时通信 IM 或者是否拼写错误。",
      90026: "消息离线存储时间错误（最多不能超过7天）。",
      90031: "JSON 格式请求包体中 SyncOtherMachine 字段不是 Integer 类型。",
      90044: "JSON 格式请求包体中 MsgLifeTime 字段不是 Integer 类型。",
      90048: "请求的用户帐号不存在。",
      90054: "撤回请求中的 MsgKey 不合法。",
      90994: "服务内部错误，请重试。",
      90995: "服务内部错误，请重试。",
      91e3: "服务内部错误，请重试。",
      90992: "服务内部错误，请重试；如果所有请求都返回该错误码，且 App 配置了第三方回调，请检查 App 服务端是否正常向即时通信 IM 后台服务端返回回调结果。",
      93e3: "JSON 数据包超长，消息包体请不要超过8k。",
      91101: "Web 端长轮询被踢（Web 端同时在线实例个数超出限制）。",
      10002: "服务端内部错误，请重试。",
      10003: "请求中的接口名称错误，请核对接口名称并重试。",
      10004: "参数非法，请根据错误描述检查请求是否正确。",
      10005: "请求包体中携带的帐号数量过多。",
      10006: "操作频率限制，请尝试降低调用的频率。",
      10007: "操作权限不足，例如 Work 群组中普通成员尝试执行踢人操作，但只有 App 管理员才有权限。",
      10008: "请求非法，可能是请求中携带的签名信息验证不正确，请再次尝试。",
      10009: "该群不允许群主主动退出。",
      10010: "群组不存在，或者曾经存在过，但是目前已经被解散。",
      10011: "解析 JSON 包体失败，请检查包体的格式是否符合 JSON 格式。",
      10012: "发起操作的 UserID 非法，请检查发起操作的用户 UserID 是否填写正确。",
      10013: "被邀请加入的用户已经是群成员。",
      10014: "群已满员，无法将请求中的用户加入群组，如果是批量加人，可以尝试减少加入用户的数量。",
      10015: "找不到指定 ID 的群组。",
      10016: "App 后台通过第三方回调拒绝本次操作。",
      10017: "因被禁言而不能发送消息，请检查发送者是否被设置禁言。",
      10018: "应答包长度超过最大包长（1MB），请求的内容过多，请尝试减少单次请求的数据量。",
      10019: "请求的用户帐号不存在。",
      10021: "群组 ID 已被使用，请选择其他的群组 ID。",
      10023: "发消息的频率超限，请延长两次发消息时间的间隔。",
      10024: "此邀请或者申请请求已经被处理。",
      10025: "群组 ID 已被使用，并且操作者为群主，可以直接使用。",
      10026: "该 SDKAppID 请求的命令字已被禁用。",
      10030: "请求撤回的消息不存在。",
      10031: "消息撤回超过了时间限制（默认2分钟）。",
      10032: "请求撤回的消息不支持撤回操作。",
      10033: "群组类型不支持消息撤回操作。",
      10034: "该消息类型不支持删除操作。",
      10035: "直播群和在线成员广播大群不支持删除消息。",
      10036: "直播群创建数量超过了限制，请参考价格说明(https://cloud.tencent.com/document/product/269/11673)购买预付费套餐“IM直播群”。",
      10037: "单个用户可创建和加入的群组数量超过了限制，请参考价格说明(https://cloud.tencent.com/document/product/269/11673)购买或升级预付费套餐“单人可创建与加入群组数”。",
      10038: "群成员数量超过限制，请参考价格说明(https://cloud.tencent.com/document/product/269/11673)购买或升级预付费套餐“扩展群人数上限”。",
      10041: "该应用（SDKAppID）已配置不支持群消息撤回。",
    },
    ht = (function (e) {
      c(n, e);
      var t = y(n);
      function n(e) {
        var o;
        return (
          r(this, n),
          ((o = t.call(this)).code = e.code),
          (o.message = pt[e.code] || e.message),
          (o.data = e.data || {}),
          o
        );
      }
      return n;
    })(f(Error)),
    dt = {
      NO_SDKAPPID: 2e3,
      NO_ACCOUNT_TYPE: 2001,
      NO_IDENTIFIER: 2002,
      NO_USERSIG: 2003,
      NO_TINYID: 2022,
      NO_A2KEY: 2023,
      COS_UNDETECTED: 2040,
      MESSAGE_SEND_FAIL: 2100,
      MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS: 2103,
      MESSAGE_SEND_NEED_MESSAGE_INSTANCE: 2105,
      MESSAGE_SEND_INVALID_CONVERSATION_TYPE: 2106,
      MESSAGE_FILE_IS_EMPTY: 2108,
      MESSAGE_ONPROGRESS_FUNCTION_ERROR: 2109,
      MESSAGE_REVOKE_FAIL: 2110,
      MESSAGE_IMAGE_SELECT_FILE_FIRST: 2251,
      MESSAGE_IMAGE_TYPES_LIMIT: 2252,
      MESSAGE_IMAGE_SIZE_LIMIT: 2253,
      MESSAGE_AUDIO_UPLOAD_FAIL: 2300,
      MESSAGE_AUDIO_SIZE_LIMIT: 2301,
      MESSAGE_VIDEO_UPLOAD_FAIL: 2350,
      MESSAGE_VIDEO_SIZE_LIMIT: 2351,
      MESSAGE_VIDEO_TYPES_LIMIT: 2352,
      MESSAGE_FILE_UPLOAD_FAIL: 2400,
      MESSAGE_FILE_SELECT_FILE_FIRST: 2401,
      MESSAGE_FILE_SIZE_LIMIT: 2402,
      MESSAGE_FILE_URL_IS_EMPTY: 2403,
      CONVERSATION_NOT_FOUND: 2500,
      USER_OR_GROUP_NOT_FOUND: 2501,
      CONVERSATION_UN_RECORDED_TYPE: 2502,
      ILLEGAL_GROUP_TYPE: 2600,
      CANNOT_JOIN_WORK: 2601,
      CANNOT_CHANGE_OWNER_IN_AVCHATROOM: 2620,
      CANNOT_CHANGE_OWNER_TO_SELF: 2621,
      CANNOT_DISMISS_Work: 2622,
      JOIN_GROUP_FAIL: 2660,
      CANNOT_ADD_MEMBER_IN_AVCHATROOM: 2661,
      CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN: 2662,
      CANNOT_KICK_MEMBER_IN_AVCHATROOM: 2680,
      NOT_OWNER: 2681,
      CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM: 2682,
      INVALID_MEMBER_ROLE: 2683,
      CANNOT_SET_SELF_MEMBER_ROLE: 2684,
      CANNOT_MUTE_SELF: 2685,
      DEL_FRIEND_INVALID_PARAM: 2700,
      UPDATE_PROFILE_INVALID_PARAM: 2721,
      UPDATE_PROFILE_NO_KEY: 2722,
      ADD_BLACKLIST_INVALID_PARAM: 2740,
      DEL_BLACKLIST_INVALID_PARAM: 2741,
      CANNOT_ADD_SELF_TO_BLACKLIST: 2742,
      NETWORK_ERROR: 2800,
      NETWORK_TIMEOUT: 2801,
      NETWORK_BASE_OPTIONS_NO_URL: 2802,
      NETWORK_UNDEFINED_SERVER_NAME: 2803,
      NETWORK_PACKAGE_UNDEFINED: 2804,
      NO_NETWORK: 2805,
      CONVERTOR_IRREGULAR_PARAMS: 2900,
      NOTICE_RUNLOOP_UNEXPECTED_CONDITION: 2901,
      NOTICE_RUNLOOP_OFFSET_LOST: 2902,
      UNCAUGHT_ERROR: 2903,
      GET_LONGPOLL_ID_FAILED: 2904,
      SDK_IS_NOT_READY: 2999,
      LONG_POLL_KICK_OUT: 91101,
      MESSAGE_A2KEY_EXPIRED: 20002,
      ACCOUNT_A2KEY_EXPIRED: 70001,
      LONG_POLL_API_PARAM_ERROR: 90001,
    },
    ft = "无 SDKAppID",
    gt = "无 accountType",
    mt = "无 userID",
    yt = "无 userSig",
    vt = "无 tinyID",
    _t = "无 a2key",
    It = "未检测到 COS 上传插件",
    Ct = "消息发送失败",
    Mt = "MessageController.constructor() 需要参数 options",
    Et = "需要 Message 的实例",
    St = 'Message.conversationType 只能为 "C2C" 或 "GROUP"',
    Tt = "无法发送空文件",
    Dt = "回调函数运行时遇到错误，请检查接入侧代码",
    kt = "消息撤回失败",
    At = "请先选择一个图片",
    Rt = "只允许上传 jpg png jpeg gif 格式的图片",
    Ot = "图片大小超过20M，无法发送",
    Nt = "语音上传失败",
    wt = "语音大小大于20M，无法发送",
    Lt = "视频上传失败",
    Pt = "视频大小超过100M，无法发送",
    Gt = "只允许上传 mp4 格式的视频",
    bt = "文件上传失败",
    Ut = "请先选择一个文件",
    qt = "文件大小超过100M，无法发送 ",
    xt = "缺少必要的参数文件 URL",
    Ft = "没有找到相应的会话，请检查传入参数",
    Ht = "没有找到相应的用户或群组，请检查传入参数",
    Kt = "未记录的会话类型",
    Bt = "非法的群类型，请检查传入参数",
    Vt = "不能加入 Work 类型的群组",
    jt = "AVChatRoom 类型的群组不能转让群主",
    Yt = "不能把群主转让给自己",
    $t = "不能解散 Work 类型的群组",
    Wt = "加群失败，请检查传入参数或重试",
    zt = "AVChatRoom 类型的群不支持邀请群成员",
    Xt = "非 AVChatRoom 类型的群组不允许匿名加群，请先登录后再加群",
    Jt = "不能在 AVChatRoom 类型的群组踢人",
    Qt = "你不是群主，只有群主才有权限操作",
    Zt = "不能在 Work / AVChatRoom 类型的群中设置群成员身份",
    en = "不合法的群成员身份，请检查传入参数",
    tn = "不能设置自己的群成员身份，请检查传入参数",
    nn = "不能将自己禁言，请检查传入参数",
    rn = "传入 deleteFriend 接口的参数无效",
    on = "传入 updateMyProfile 接口的参数无效",
    sn = "updateMyProfile 无标配资料字段或自定义资料字段",
    an = "传入 addToBlacklist 接口的参数无效",
    un = "传入 removeFromBlacklist 接口的参数无效",
    cn = "不能拉黑自己",
    ln = "网络层初始化错误，缺少 URL 参数",
    pn = "打包错误，未定义的 serverName",
    hn = "未定义的 packageConfig",
    dn = "未连接到网络",
    fn = "不规范的参数名称",
    gn = "意料外的通知条件",
    mn = "_syncOffset 丢失",
    yn = "获取 longpolling id 失败",
    vn = "接口需要 SDK 处于 ready 状态后才能调用",
    _n = ["jpg", "jpeg", "gif", "png"],
    In = ["mp4"],
    Cn = (function () {
      function e(n) {
        r(this, e);
        var o = this._check(n);
        if (o instanceof ht) throw o;
        (this.type = t.MSG_FILE), (this._percent = 0);
        var i = this._getFileInfo(n);
        this.content = {
          downloadFlag: 2,
          fileUrl: n.url || "",
          uuid: n.uuid,
          fileName: i.name || "",
          fileSize: i.size || 0,
        };
      }
      return (
        i(e, [
          {
            key: "_getFileInfo",
            value: function (e) {
              if (e.fileName && e.fileSize)
                return { size: e.fileSize, name: e.fileName };
              if (N) return {};
              var t = e.file.files[0];
              return {
                size: t.size,
                name: t.name,
                type: t.type.slice(t.type.lastIndexOf("/") + 1).toLowerCase(),
              };
            },
          },
          {
            key: "updatePercent",
            value: function (e) {
              (this._percent = e), this._percent > 1 && (this._percent = 1);
            },
          },
          {
            key: "updateFileUrl",
            value: function (e) {
              this.content.fileUrl = e;
            },
          },
          {
            key: "_check",
            value: function (e) {
              if (e.size > 104857600)
                return new ht({
                  code: dt.MESSAGE_FILE_SIZE_LIMIT,
                  message: "".concat(qt, ": ").concat(104857600, " bytes"),
                });
            },
          },
          {
            key: "sendable",
            value: function () {
              return (
                "" !== this.content.fileUrl &&
                "" !== this.content.fileName &&
                0 !== this.content.fileSize
              );
            },
          },
        ]),
        e
      );
    })(),
    Mn = (function () {
      function e(n) {
        r(this, e),
          (this.type = t.MSG_CUSTOM),
          (this.content = {
            data: n.data || "",
            description: n.description || "",
            extension: n.extension || "",
          });
      }
      return (
        i(e, [
          {
            key: "setData",
            value: function (e) {
              return (this.content.data = e), this;
            },
          },
          {
            key: "setDescription",
            value: function (e) {
              return (this.content.description = e), this;
            },
          },
          {
            key: "setExtension",
            value: function (e) {
              return (this.content.extension = e), this;
            },
          },
          {
            key: "sendable",
            value: function () {
              return (
                0 !== this.content.data.length ||
                0 !== this.content.description.length ||
                0 !== this.content.extension.length
              );
            },
          },
        ]),
        e
      );
    })(),
    En = (function () {
      function e(n) {
        r(this, e),
          (this.type = t.MSG_VIDEO),
          (this._percent = 0),
          (this.content = {
            remoteVideoUrl: n.remoteVideoUrl,
            videoFormat: n.videoFormat,
            videoSecond: parseInt(n.videoSecond, 10),
            videoSize: n.videoSize,
            videoUrl: n.videoUrl,
            videoDownloadFlag: 2,
            videoUUID: n.videoUUID,
            thumbUUID: n.thumbUUID,
            thumbFormat: n.thumbFormat,
            thumbWidth: n.thumbWidth,
            thumbHeight: n.thumbHeight,
            thumbSize: n.thumbSize,
            thumbDownloadFlag: 2,
            thumbUrl: n.thumbUrl,
          });
      }
      return (
        i(e, [
          {
            key: "updatePercent",
            value: function (e) {
              (this._percent = e), this._percent > 1 && (this._percent = 1);
            },
          },
          {
            key: "updateVideoUrl",
            value: function (e) {
              e && (this.content.remoteVideoUrl = e);
            },
          },
          {
            key: "sendable",
            value: function () {
              return "" !== this.content.remoteVideoUrl;
            },
          },
        ]),
        e
      );
    })(),
    Sn = function e(n) {
      r(this, e), (this.type = t.MSG_GEO), (this.content = n);
    },
    Tn = {
      1: t.MSG_PRIORITY_HIGH,
      2: t.MSG_PRIORITY_NORMAL,
      3: t.MSG_PRIORITY_LOW,
      4: t.MSG_PRIORITY_LOWEST,
    },
    Dn = (function () {
      function e(n) {
        r(this, e),
          (this.ID = ""),
          (this.conversationID = n.conversationID || null),
          (this.conversationType = n.conversationType || t.CONV_C2C),
          (this.conversationSubType = n.conversationSubType),
          (this.time = n.time || Math.ceil(Date.now() / 1e3)),
          (this.sequence = n.sequence || 0),
          (this.clientSequence = n.clientSequence || n.sequence || 0),
          (this.random = n.random || me()),
          (this.priority = this._computePriority(n.priority)),
          (this.nick = ""),
          (this.avatar = ""),
          (this.isPeerRead = !1),
          (this._elements = []),
          (this.isPlaceMessage = n.isPlaceMessage || 0),
          (this.isRevoked = 2 === n.isPlaceMessage || 8 === n.msgFlagBits),
          (this.geo = {}),
          (this.from = n.from || null),
          (this.to = n.to || null),
          (this.flow = ""),
          (this.isSystemMessage = n.isSystemMessage || !1),
          (this.protocol = n.protocol || "JSON"),
          (this.isResend = !1),
          (this.isRead = !1),
          (this.status = n.status || be.SUCCESS),
          this.reInitialize(n.currentUser),
          this.extractGroupInfo(n.groupProfile || null);
      }
      return (
        i(e, [
          {
            key: "getElements",
            value: function () {
              return this._elements;
            },
          },
          {
            key: "extractGroupInfo",
            value: function (e) {
              null !== e &&
                (ee(e.fromAccountNick) && (this.nick = e.fromAccountNick),
                ee(e.fromAccountHeadurl) &&
                  (this.avatar = e.fromAccountHeadurl));
            },
          },
          {
            key: "_initProxy",
            value: function () {
              (this.payload = this._elements[0].content),
                (this.type = this._elements[0].type);
            },
          },
          {
            key: "reInitialize",
            value: function (e) {
              e &&
                ((this.status = this.from ? be.SUCCESS : be.UNSEND),
                !this.from && (this.from = e)),
                this._initFlow(e),
                this._initielizeSequence(e),
                this._concactConversationID(e),
                this.generateMessageID(e);
            },
          },
          {
            key: "isSendable",
            value: function () {
              return (
                0 !== this._elements.length &&
                ("function" != typeof this._elements[0].sendable
                  ? (J.warn(
                      "".concat(
                        this._elements[0].type,
                        ' need "boolean : sendable()" method'
                      )
                    ),
                    !1)
                  : this._elements[0].sendable())
              );
            },
          },
          {
            key: "_initTo",
            value: function (e) {
              this.conversationType === t.CONV_GROUP && (this.to = e.groupID);
            },
          },
          {
            key: "_initielizeSequence",
            value: function (e) {
              0 === this.clientSequence &&
                e &&
                (this.clientSequence = (function (e) {
                  if (!e)
                    return (
                      J.error(
                        "autoincrementIndex(string: key) need key parameter"
                      ),
                      !1
                    );
                  if (void 0 === Ie[e]) {
                    var t = new Date(),
                      n = "3".concat(t.getHours()).slice(-2),
                      r = "0".concat(t.getMinutes()).slice(-2),
                      o = "0".concat(t.getSeconds()).slice(-2);
                    (Ie[e] = parseInt([n, r, o, "0001"].join(""))),
                      (n = null),
                      (r = null),
                      (o = null),
                      J.warn(
                        "utils.autoincrementIndex() create new sequence : "
                          .concat(e, " = ")
                          .concat(Ie[e])
                      );
                  }
                  return Ie[e]++;
                })(e)),
                0 === this.sequence &&
                  this.conversationType === t.CONV_C2C &&
                  (this.sequence = this.clientSequence);
            },
          },
          {
            key: "generateMessageID",
            value: function (e) {
              var t = e === this.from ? 1 : 0,
                n = this.sequence > 0 ? this.sequence : this.clientSequence;
              this.ID = ""
                .concat(this.conversationID, "-")
                .concat(n, "-")
                .concat(this.random, "-")
                .concat(t);
            },
          },
          {
            key: "_initFlow",
            value: function (e) {
              "" !== e &&
                (e === this.from
                  ? ((this.flow = "out"), (this.isRead = !0))
                  : (this.flow = "in"));
            },
          },
          {
            key: "_concactConversationID",
            value: function (e) {
              var n = this.to,
                r = "",
                o = this.conversationType;
              o !== t.CONV_SYSTEM
                ? ((r =
                    o === t.CONV_C2C
                      ? e === this.from
                        ? n
                        : this.from
                      : this.to),
                  (this.conversationID = "".concat(o).concat(r)))
                : (this.conversationID = t.CONV_SYSTEM);
            },
          },
          {
            key: "isElement",
            value: function (e) {
              return (
                e instanceof qe ||
                e instanceof ot ||
                e instanceof it ||
                e instanceof st ||
                e instanceof Cn ||
                e instanceof En ||
                e instanceof ut ||
                e instanceof lt ||
                e instanceof Mn ||
                e instanceof Sn
              );
            },
          },
          {
            key: "setElement",
            value: function (e) {
              var n = this;
              if (this.isElement(e))
                return (this._elements = [e]), void this._initProxy();
              var r = function (e) {
                switch (e.type) {
                  case t.MSG_TEXT:
                    n.setTextElement(e.content);
                    break;
                  case t.MSG_IMAGE:
                    n.setImageElement(e.content);
                    break;
                  case t.MSG_AUDIO:
                    n.setAudioElement(e.content);
                    break;
                  case t.MSG_FILE:
                    n.setFileElement(e.content);
                    break;
                  case t.MSG_VIDEO:
                    n.setVideoElement(e.content);
                    break;
                  case t.MSG_CUSTOM:
                    n.setCustomElement(e.content);
                    break;
                  case t.MSG_GEO:
                    n.setGEOElement(e.content);
                    break;
                  case t.MSG_GRP_TIP:
                    n.setGroupTipElement(e.content);
                    break;
                  case t.MSG_GRP_SYS_NOTICE:
                    n.setGroupSystemNoticeElement(e.content);
                    break;
                  case t.MSG_FACE:
                    n.setFaceElement(e.content);
                    break;
                  default:
                    J.warn(e.type, e.content, "no operation......");
                }
              };
              if (Array.isArray(e)) for (var o = 0; o < e.length; o++) r(e[o]);
              else r(e);
              this._initProxy();
            },
          },
          {
            key: "setTextElement",
            value: function (e) {
              var t = "string" == typeof e ? e : e.text,
                n = new qe({ text: t });
              this._elements.push(n);
            },
          },
          {
            key: "setImageElement",
            value: function (e) {
              var t = new ot(e);
              this._elements.push(t);
            },
          },
          {
            key: "setAudioElement",
            value: function (e) {
              var t = new st(e);
              this._elements.push(t);
            },
          },
          {
            key: "setFileElement",
            value: function (e) {
              var t = new Cn(e);
              this._elements.push(t);
            },
          },
          {
            key: "setVideoElement",
            value: function (e) {
              var t = new En(e);
              this._elements.push(t);
            },
          },
          {
            key: "setGEOElement",
            value: function (e) {
              var t = new Sn(e);
              this._elements.push(t);
            },
          },
          {
            key: "setCustomElement",
            value: function (e) {
              var t = new Mn(e);
              this._elements.push(t);
            },
          },
          {
            key: "setGroupTipElement",
            value: function (e) {
              var n = {},
                r = e.operationType;
              Oe(e.memberInfoList) ||
              (r !== t.GRP_TIP_MBR_JOIN && r !== t.GRP_TIP_MBR_KICKED_OUT)
                ? e.operatorInfo && (n = e.operatorInfo)
                : (n = e.memberInfoList[0]);
              var o = n,
                i = o.nick,
                s = o.avatar;
              ee(i) && (this.nick = i), ee(s) && (this.avatar = s);
              var a = new ut(e);
              this._elements.push(a);
            },
          },
          {
            key: "setGroupSystemNoticeElement",
            value: function (e) {
              var t = new lt(e);
              this._elements.push(t);
            },
          },
          {
            key: "setFaceElement",
            value: function (e) {
              var t = new it(e);
              this._elements.push(t);
            },
          },
          {
            key: "setIsRead",
            value: function (e) {
              this.isRead = e;
            },
          },
          {
            key: "_computePriority",
            value: function (e) {
              if (oe(e)) return t.MSG_PRIORITY_NORMAL;
              if (ee(e) && -1 !== Object.values(Tn).indexOf(e)) return e;
              if (Z(e)) {
                var n = "" + e;
                if (-1 !== Object.keys(Tn).indexOf(n)) return Tn[n];
              }
              return t.MSG_PRIORITY_NORMAL;
            },
          },
          {
            key: "elements",
            get: function () {
              return (
                J.warn(
                  "！！！Message 实例的 elements 属性即将废弃，请尽快修改。使用 type 和 payload 属性处理单条消息，兼容组合消息使用 _elements 属性！！！"
                ),
                this._elements
              );
            },
          },
        ]),
        e
      );
    })(),
    kn = function (e) {
      return (
        !!e &&
        (!!(
          (function (e) {
            return ee(e) && e.slice(0, 3) === t.CONV_C2C;
          })(e) ||
          (function (e) {
            return ee(e) && e.slice(0, 5) === t.CONV_GROUP;
          })(e) ||
          ke(e)
        ) ||
          (console.warn(
            "非法的会话 ID:".concat(
              e,
              "。会话 ID 组成方式：\n  C2C + userID（单聊）\n  GROUP + groupID（群聊）\n  @TIM#SYSTEM（系统通知会话）"
            )
          ),
          !1))
      );
    },
    An = {
      login: {
        userID: { type: "String", required: !0 },
        userSig: { type: "String", required: !0 },
      },
      addToBlacklist: { userIDList: { type: "Array", required: !0 } },
      mutilParam: [
        { name: "paramName", type: "Number", required: !0 },
        { name: "paramName", type: "String", required: !0 },
      ],
      on: [
        {
          name: "eventName",
          type: "String",
          validator: function (e) {
            return (
              ("string" == typeof e && 0 !== e.length) ||
              (console.warn(
                "on 接口的 eventName 参数必须是 String 类型，且不能为空。"
              ),
              !1)
            );
          },
        },
        {
          name: "handler",
          type: "Function",
          validator: function (e) {
            return "function" != typeof e
              ? (console.warn("on 接口的 handler 参数必须是 Function 类型。"),
                !1)
              : ("" === e.name &&
                  console.warn(
                    "on 接口的 handler 参数推荐使用具名函数。具名函数可以使用 off 接口取消订阅，匿名函数无法取消订阅。"
                  ),
                !0);
          },
        },
      ],
      once: [
        {
          name: "eventName",
          type: "String",
          validator: function (e) {
            return (
              ("string" == typeof e && 0 !== e.length) ||
              (console.warn(
                "once 接口的 eventName 参数必须是 String 类型，且不能为空。"
              ),
              !1)
            );
          },
        },
        {
          name: "handler",
          type: "Function",
          validator: function (e) {
            return "function" != typeof e
              ? (console.warn("once 接口的 handler 参数必须是 Function 类型。"),
                !1)
              : ("" === e.name &&
                  console.warn("once 接口的 handler 参数推荐使用具名函数。"),
                !0);
          },
        },
      ],
      off: [
        {
          name: "eventName",
          type: "String",
          validator: function (e) {
            return (
              ("string" == typeof e && 0 !== e.length) ||
              (console.warn(
                "off 接口的 eventName 参数必须是 String 类型，且不能为空。"
              ),
              !1)
            );
          },
        },
        {
          name: "handler",
          type: "Function",
          validator: function (e) {
            return "function" != typeof e
              ? (console.warn("off 接口的 handler 参数必须是 Function 类型。"),
                !1)
              : ("" === e.name &&
                  console.warn(
                    "off 接口的 handler 参数为匿名函数，无法取消订阅。"
                  ),
                !0);
          },
        },
      ],
      sendMessage: [{ name: "message", type: "Object", required: !0 }],
      getMessageList: {
        conversationID: {
          type: "String",
          required: !0,
          validator: function (e) {
            return kn(e);
          },
        },
        nextReqMessageID: { type: "String" },
        count: {
          type: "Number",
          validator: function (e) {
            return (
              !(!oe(e) && !/^[1-9][0-9]*$/.test(e)) ||
              (console.warn("getMessageList 接口的 count 参数必须为正整数"), !1)
            );
          },
        },
      },
      setMessageRead: {
        conversationID: {
          type: "String",
          required: !0,
          validator: function (e) {
            return kn(e);
          },
        },
      },
      getConversationProfile: [
        {
          name: "conversationID",
          type: "String",
          required: !0,
          validator: function (e) {
            return kn(e);
          },
        },
      ],
      deleteConversation: [
        {
          name: "conversationID",
          type: "String",
          required: !0,
          validator: function (e) {
            return kn(e);
          },
        },
      ],
      getGroupList: { groupProfileFilter: { type: "Array" } },
      getGroupProfile: {
        groupID: { type: "String", required: !0 },
        groupCustomFieldFilter: { type: "Array" },
        memberCustomFieldFilter: { type: "Array" },
      },
      getGroupProfileAdvance: { groupIDList: { type: "Array", required: !0 } },
      createGroup: { name: { type: "String", required: !0 } },
      joinGroup: {
        groupID: { type: "String", required: !0 },
        type: { type: "String" },
        applyMessage: { type: "String" },
      },
      quitGroup: [{ name: "groupID", type: "String", required: !0 }],
      handleApplication: {
        message: { type: "Object", required: !0 },
        handleAction: { type: "String", required: !0 },
        handleMessage: { type: "String" },
      },
      changeGroupOwner: {
        groupID: { type: "String", required: !0 },
        newOwnerID: { type: "String", required: !0 },
      },
      updateGroupProfile: {
        groupID: { type: "String", required: !0 },
        muteAllMembers: { type: "Boolean" },
      },
      dismissGroup: [{ name: "groupID", type: "String", required: !0 }],
      searchGroupByID: [{ name: "groupID", type: "String", required: !0 }],
      getGroupMemberList: {
        groupID: { type: "String", required: !0 },
        offset: { type: "Number" },
        count: { type: "Number" },
      },
      getGroupMemberProfile: {
        groupID: { type: "String", required: !0 },
        userIDList: { type: "Array", required: !0 },
        memberCustomFieldFilter: { type: "Array" },
      },
      addGroupMemeber: {
        groupID: { type: "String", required: !0 },
        userIDList: { type: "Array", required: !0 },
      },
      setGroupMemberRole: {
        groupID: { type: "String", required: !0 },
        userID: { type: "String", required: !0 },
        role: { type: "String", required: !0 },
      },
      setGroupMemberMuteTime: {
        groupID: { type: "String", required: !0 },
        userID: { type: "String", required: !0 },
        muteTime: {
          type: "Number",
          validator: function (e) {
            return e >= 0;
          },
        },
      },
      setGroupMemberNameCard: {
        groupID: { type: "String", required: !0 },
        userID: { type: "String" },
        nameCard: {
          type: "String",
          required: !0,
          validator: function (e) {
            return !0 !== /^\s+$/.test(e);
          },
        },
      },
      setMessageRemindType: {
        groupID: { type: "String", required: !0 },
        messageRemindType: { type: "String", required: !0 },
      },
      setGroupMemberCustomField: {
        groupID: { type: "String", required: !0 },
        userID: { type: "String" },
        memberCustomField: { type: "Array", required: !0 },
      },
      deleteGroupMember: { groupID: { type: "String", required: !0 } },
      createTextMessage: {
        to: { type: "String", required: !0 },
        conversationType: { type: "String", required: !0 },
        payload: {
          type: "Object",
          required: !0,
          validator: function (e) {
            return ee(e.text)
              ? 0 !== e.text.length ||
                  (console.warn(
                    "createTextMessage 消息内容不能为空。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createTextMessage"
                  ),
                  !1)
              : (console.warn(
                  "createTextMessage payload.text 类型必须为字符串。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createTextMessage"
                ),
                !1);
          },
        },
      },
      createCustomMessage: {
        to: { type: "String", required: !0 },
        conversationType: { type: "String", required: !0 },
        payload: {
          type: "Object",
          required: !0,
          validator: function (e) {
            return e.data && !ee(e.data)
              ? (console.warn(
                  "createCustomMessage payload.data 类型必须为 String。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createCustomMessage"
                ),
                !1)
              : e.description && !ee(e.description)
              ? (console.warn(
                  "createCustomMessage payload.description 类型必须为 String。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createCustomMessage"
                ),
                !1)
              : !(e.extension && !ee(e.extension)) ||
                (console.warn(
                  "createCustomMessage payload.extension 类型必须为 String。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createCustomMessage"
                ),
                !1);
          },
        },
      },
      createImageMessage: {
        to: { type: "String", required: !0 },
        conversationType: { type: "String", required: !0 },
        payload: {
          type: "Object",
          required: !0,
          validator: function (e) {
            if (oe(e.file))
              return (
                console.warn(
                  "createImageMessage payload.file 不能为 undefined。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createImageMessage"
                ),
                !1
              );
            if (O) {
              if (!(e.file instanceof HTMLInputElement || Q(e.file)))
                return (
                  console.warn(
                    "createImageMessage payload.file 的类型必须是 HTMLInputElement 或 File。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createImageMessage"
                  ),
                  !1
                );
              if (
                e.file instanceof HTMLInputElement &&
                0 === e.file.files.length
              )
                return (
                  console.warn(
                    "createImageMessage 您没有选择文件，无法发送。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createImageMessage"
                  ),
                  !1
                );
            }
            return !0;
          },
          onProgress: {
            type: "Function",
            required: !1,
            validator: function (e) {
              return (
                oe(e) &&
                  console.warn(
                    "createImageMessage 没有 onProgress 回调，您将无法获取图片上传进度。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createImageMessage"
                  ),
                !0
              );
            },
          },
        },
      },
      createAudioMessage: {
        to: { type: "String", required: !0 },
        conversationType: { type: "String", required: !0 },
        payload: { type: "Object", required: !0 },
        onProgress: {
          type: "Function",
          required: !1,
          validator: function (e) {
            return (
              oe(e) &&
                console.warn(
                  "createAudioMessage 没有 onProgress 回调，您将无法获取音频上传进度。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createAudioMessage"
                ),
              !0
            );
          },
        },
      },
      createVideoMessage: {
        to: { type: "String", required: !0 },
        conversationType: { type: "String", required: !0 },
        payload: {
          type: "Object",
          required: !0,
          validator: function (e) {
            if (oe(e.file))
              return (
                console.warn(
                  "createVideoMessage payload.file 不能为 undefined。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createVideoMessage"
                ),
                !1
              );
            if (O) {
              if (!(e.file instanceof HTMLInputElement || Q(e.file)))
                return (
                  console.warn(
                    "createVideoMessage payload.file 的类型必须是 HTMLInputElement 或 File。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createVideoMessage"
                  ),
                  !1
                );
              if (
                e.file instanceof HTMLInputElement &&
                0 === e.file.files.length
              )
                return (
                  console.warn(
                    "createVideoMessage 您没有选择文件，无法发送。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createVideoMessage"
                  ),
                  !1
                );
            }
            return !0;
          },
        },
        onProgress: {
          type: "Function",
          required: !1,
          validator: function (e) {
            return (
              oe(e) &&
                console.warn(
                  "createVideoMessage 没有 onProgress 回调，您将无法获取视频上传进度。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createVideoMessage"
                ),
              !0
            );
          },
        },
      },
      createFaceMessage: {
        to: { type: "String", required: !0 },
        conversationType: { type: "String", required: !0 },
        payload: {
          type: "Object",
          required: !0,
          validator: function (e) {
            return (
              !!ne(e) &&
              (Z(e.index)
                ? !!ee(e.data) ||
                  (console.warn(
                    "createFaceMessage payload.data 类型必须为 String！"
                  ),
                  !1)
                : (console.warn(
                    "createFaceMessage payload.index 类型必须为 Number！"
                  ),
                  !1))
            );
          },
        },
      },
      createFileMessage: {
        to: { type: "String", required: !0 },
        conversationType: { type: "String", required: !0 },
        payload: {
          type: "Object",
          required: !0,
          validator: function (e) {
            if (oe(e.file))
              return (
                console.warn(
                  "createFileMessage payload.file 不能为 undefined。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createFileMessage"
                ),
                !1
              );
            if (O) {
              if (!(e.file instanceof HTMLInputElement || Q(e.file)))
                return (
                  console.warn(
                    "createFileMessage payload.file 的类型必须是 HTMLInputElement 或 File。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createFileMessage"
                  ),
                  !1
                );
              if (
                e.file instanceof HTMLInputElement &&
                0 === e.file.files.length
              )
                return (
                  console.warn(
                    "createFileMessage 您没有选择文件，无法发送。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createFileMessage"
                  ),
                  !1
                );
            }
            return !0;
          },
        },
        onProgress: {
          type: "Function",
          required: !1,
          validator: function (e) {
            return (
              oe(e) &&
                console.warn(
                  "createFileMessage 没有 onProgress 回调，您将无法获取文件上传进度。请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createFileMessage"
                ),
              !0
            );
          },
        },
      },
      revokeMessage: [
        {
          name: "message",
          type: "Object",
          required: !0,
          validator: function (e) {
            return e instanceof Dn
              ? e.conversationType === t.CONV_SYSTEM
                ? (console.warn(
                    "revokeMessage 不能撤回系统会话消息，只能撤回单聊消息或群消息"
                  ),
                  !1)
                : !0 !== e.isRevoked ||
                  (console.warn("revokeMessage 消息已经被撤回，请勿重复操作"),
                  !1)
              : (console.warn(
                  "revokeMessage 参数 message 必须为 Message(https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/Message.html) 实例。"
                ),
                !1);
          },
        },
      ],
      getUserProfile: {
        userIDList: {
          type: "Array",
          validator: function (e) {
            return re(e)
              ? (0 === e.length &&
                  console.warn(
                    "getUserProfile userIDList 不能为空数组，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#getUserProfile"
                  ),
                !0)
              : (console.warn(
                  "getUserProfile userIDList 必须为数组，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#getUserProfile"
                ),
                !1);
          },
        },
      },
      updateMyProfile: {
        profileCustomField: {
          type: "Array",
          validator: function (e) {
            return (
              !!oe(e) ||
              !!re(e) ||
              (console.warn(
                "updateMyProfile profileCustomField 必须为数组，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#updateMyProfile"
              ),
              !1)
            );
          },
        },
      },
    },
    Rn = {
      login: "login",
      logout: "logout",
      on: "on",
      once: "once",
      off: "off",
      setLogLevel: "setLogLevel",
      downloadLog: "downloadLog",
      registerPlugin: "registerPlugin",
      destroy: "destroy",
      createTextMessage: "createTextMessage",
      createImageMessage: "createImageMessage",
      createAudioMessage: "createAudioMessage",
      createVideoMessage: "createVideoMessage",
      createCustomMessage: "createCustomMessage",
      createFaceMessage: "createFaceMessage",
      createFileMessage: "createFileMessage",
      sendMessage: "sendMessage",
      resendMessage: "resendMessage",
      getMessageList: "getMessageList",
      setMessageRead: "setMessageRead",
      revokeMessage: "revokeMessage",
      getConversationList: "getConversationList",
      getConversationProfile: "getConversationProfile",
      deleteConversation: "deleteConversation",
      getGroupList: "getGroupList",
      getGroupProfile: "getGroupProfile",
      createGroup: "createGroup",
      joinGroup: "joinGroup",
      updateGroupProfile: "updateGroupProfile",
      quitGroup: "quitGroup",
      dismissGroup: "dismissGroup",
      changeGroupOwner: "changeGroupOwner",
      searchGroupByID: "searchGroupByID",
      setMessageRemindType: "setMessageRemindType",
      handleGroupApplication: "handleGroupApplication",
      getGroupMemberProfile: "getGroupMemberProfile",
      getGroupMemberList: "getGroupMemberList",
      addGroupMember: "addGroupMember",
      deleteGroupMember: "deleteGroupMember",
      setGroupMemberNameCard: "setGroupMemberNameCard",
      setGroupMemberMuteTime: "setGroupMemberMuteTime",
      setGroupMemberRole: "setGroupMemberRole",
      setGroupMemberCustomField: "setGroupMemberCustomField",
      getMyProfile: "getMyProfile",
      getUserProfile: "getUserProfile",
      updateMyProfile: "updateMyProfile",
      getBlacklist: "getBlacklist",
      addToBlacklist: "addToBlacklist",
      removeFromBlacklist: "removeFromBlacklist",
      getFriendList: "getFriendList",
    },
    On = "1.7.3",
    Nn = "537048168",
    wn = "10",
    Ln = "protobuf",
    Pn = "json",
    Gn = {
      HOST: {
        TYPE: 3,
        ACCESS_LAYER_TYPES: { SANDBOX: 1, TEST: 2, PRODUCTION: 3 },
        CURRENT: {
          COMMON: "https://webim.tim.qq.com",
          PIC: "https://pic.tim.qq.com",
          COS: "https://yun.tim.qq.com",
        },
        PRODUCTION: {
          COMMON: "https://webim.tim.qq.com",
          PIC: "https://pic.tim.qq.com",
          COS: "https://yun.tim.qq.com",
        },
        SANDBOX: {
          COMMON: "https://events.tim.qq.com",
          PIC: "https://pic.tim.qq.com",
          COS: "https://yun.tim.qq.com",
        },
        TEST: {
          COMMON: "https://test.tim.qq.com",
          PIC: "https://pic.tim.qq.com",
          COS: "https://test.tim.qq.com",
        },
        setCurrent: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
          switch (e) {
            case this.ACCESS_LAYER_TYPES.SANDBOX:
              (this.CURRENT = this.SANDBOX),
                (this.TYPE = this.ACCESS_LAYER_TYPES.SANDBOX);
              break;
            case this.ACCESS_LAYER_TYPES.TEST:
              (this.CURRENT = this.TEST),
                (this.TYPE = this.ACCESS_LAYER_TYPES.TEST);
              break;
            default:
              (this.CURRENT = this.PRODUCTION),
                (this.TYPE = this.ACCESS_LAYER_TYPES.PRODUCTION);
          }
        },
      },
      NAME: {
        OPEN_IM: "openim",
        GROUP: "group_open_http_svc",
        FRIEND: "sns",
        PROFILE: "profile",
        RECENT_CONTACT: "recentcontact",
        PIC: "openpic",
        BIG_GROUP_NO_AUTH: "group_open_http_noauth_svc",
        BIG_GROUP_LONG_POLLING_NO_AUTH:
          "group_open_long_polling_http_noauth_svc",
        IM_OPEN_STAT: "imopenstat",
        WEB_IM: "webim",
        IM_COS_SIGN: "im_cos_sign_svr",
      },
      CMD: {
        ACCESS_LAYER: "accesslayer",
        LOGIN: "login",
        LOGOUT_LONG_POLL: "longpollinglogout",
        LOGOUT_ALL: "logout",
        PORTRAIT_GET: "portrait_get_all",
        PORTRAIT_SET: "portrait_set",
        GET_LONG_POLL_ID: "getlongpollingid",
        LONG_POLL: "longpolling",
        AVCHATROOM_LONG_POLL: "get_msg",
        FRIEND_ADD: "friend_add",
        FRIEND_GET_ALL: "friend_get_all",
        FRIEND_DELETE: "friend_delete",
        RESPONSE_PENDENCY: "friend_response",
        GET_PENDENCY: "pendency_get",
        DELETE_PENDENCY: "pendency_delete",
        GET_GROUP_PENDENCY: "get_pendency",
        GET_BLACKLIST: "black_list_get",
        ADD_BLACKLIST: "black_list_add",
        DELETE_BLACKLIST: "black_list_delete",
        CREATE_GROUP: "create_group",
        GET_JOINED_GROUPS: "get_joined_group_list",
        SEND_MESSAGE: "sendmsg",
        REVOKE_C2C_MESSAGE: "msgwithdraw",
        SEND_GROUP_MESSAGE: "send_group_msg",
        REVOKE_GROUP_MESSAGE: "group_msg_recall",
        GET_GROUP_INFO: "get_group_info",
        GET_GROUP_MEMBER_INFO: "get_specified_group_member_info",
        GET_GROUP_MEMBER_LIST: "get_group_member_info",
        QUIT_GROUP: "quit_group",
        CHANGE_GROUP_OWNER: "change_group_owner",
        DESTROY_GROUP: "destroy_group",
        ADD_GROUP_MEMBER: "add_group_member",
        DELETE_GROUP_MEMBER: "delete_group_member",
        SEARCH_GROUP_BY_ID: "get_group_public_info",
        APPLY_JOIN_GROUP: "apply_join_group",
        HANDLE_APPLY_JOIN_GROUP: "handle_apply_join_group",
        MODIFY_GROUP_INFO: "modify_group_base_info",
        MODIFY_GROUP_MEMBER_INFO: "modify_group_member_info",
        DELETE_GROUP_SYSTEM_MESSAGE: "deletemsg",
        GET_CONVERSATION_LIST: "get",
        PAGING_GET_CONVERSATION_LIST: "page_get",
        DELETE_CONVERSATION: "delete",
        GET_MESSAGES: "getmsg",
        GET_C2C_ROAM_MESSAGES: "getroammsg",
        GET_GROUP_ROAM_MESSAGES: "group_msg_get",
        SET_C2C_MESSAGE_READ: "msgreaded",
        GET_PEER_READ_TIME: "get_peer_read_time",
        SET_GROUP_MESSAGE_READ: "msg_read_report",
        FILE_READ_AND_WRITE_AUTHKEY: "authkey",
        FILE_UPLOAD: "pic_up",
        COS_SIGN: "cos",
        TIM_WEB_REPORT: "tim_web_report",
        BIG_DATA_HALLWAY_AUTH_KEY: "authkey",
      },
      CHANNEL: { SOCKET: 1, XHR: 2, AUTO: 0 },
      NAME_VERSION: {
        openim: "v4",
        group_open_http_svc: "v4",
        sns: "v4",
        profile: "v4",
        recentcontact: "v4",
        openpic: "v4",
        group_open_http_noauth_svc: "v1",
        group_open_long_polling_http_noauth_svc: "v1",
        imopenstat: "v4",
        im_cos_sign_svr: "v4",
        webim: "v4",
      },
    };
  Gn.HOST.setCurrent(Gn.HOST.ACCESS_LAYER_TYPES.PRODUCTION);
  var bn = {
      request: {
        toAccount: "To_Account",
        fromAccount: "From_Account",
        to: "To_Account",
        from: "From_Account",
        groupID: "GroupId",
        avatar: "FaceUrl",
      },
      response: {
        GroupId: "groupID",
        Member_Account: "userID",
        MsgList: "messageList",
        SyncFlag: "syncFlag",
        To_Account: "to",
        From_Account: "from",
        MsgSeq: "sequence",
        MsgRandom: "random",
        MsgTimeStamp: "time",
        MsgContent: "content",
        MsgBody: "elements",
        GroupWithdrawInfoArray: "revokedInfos",
        WithdrawC2cMsgNotify: "c2cMessageRevokedNotify",
        C2cWithdrawInfoArray: "revokedInfos",
        C2cReadedReceipt: "c2cMessageReadReceipt",
        LastReadTime: "peerReadTime",
        MsgRand: "random",
        MsgType: "type",
        MsgShow: "messageShow",
        NextMsgSeq: "nextMessageSeq",
        FaceUrl: "avatar",
        ProfileDataMod: "profileModify",
        Profile_Account: "userID",
        ValueBytes: "value",
        ValueNum: "value",
        NoticeSeq: "noticeSequence",
        NotifySeq: "notifySequence",
        MsgFrom_AccountExtraInfo: "messageFromAccountExtraInformation",
        Operator_Account: "operatorID",
        OpType: "operationType",
        ReportType: "operationType",
        UserId: "userID",
        User_Account: "userID",
        List_Account: "userIDList",
        MsgOperatorMemberExtraInfo: "operatorInfo",
        MsgMemberExtraInfo: "memberInfoList",
        ImageUrl: "avatar",
        NickName: "nick",
        MsgGroupNewInfo: "newGroupProfile",
        MsgAppDefinedData: "groupCustomField",
        Owner_Account: "ownerID",
        GroupName: "name",
        GroupFaceUrl: "avatar",
        GroupIntroduction: "introduction",
        GroupNotification: "notification",
        GroupApplyJoinOption: "joinOption",
        MsgKey: "messageKey",
        GroupInfo: "groupProfile",
        ShutupTime: "muteTime",
        Desc: "description",
        Ext: "extension",
      },
      ignoreKeyWord: ["C2C", "ID", "USP"],
    },
    Un = "_contextWasUpdated",
    qn = "_contextWasReset",
    xn = "_a2KeyAndTinyIDUpdated",
    Fn = "_specifiedConfigUpdated",
    Hn = "_noticeIsSynchronizing",
    Kn = "_noticeIsSynchronized",
    Bn = "_messageSent",
    Vn = "_syncMessageProcessing",
    jn = "_syncMessageFinished",
    Yn = "_receiveInstantMessage",
    $n = "_receiveGroupInstantMessage",
    Wn = "_receveGroupSystemNotice",
    zn = "_messageRevoked",
    Xn = "_longPollGetIDFailed",
    Jn = "_longPollRequestFailed",
    Qn = "_longPollResponseOK",
    Zn = "_longPollFastStart",
    er = "_longPollSlowStart",
    tr = "_longPollKickedOut",
    nr = "_longPollMitipuleDeviceKickedOut",
    rr = "_longPollGetNewC2CNotice",
    or = "_longPollGetNewGroupMessages",
    ir = "_longPollGetNewGroupTips",
    sr = "_longPollGetNewGroupNotice",
    ar = "_longPollGetNewFriendMessages",
    ur = "_longPollProfileModified",
    cr = "_longPollNoticeReceiveSystemOrders",
    lr = " _longpollGroupMessageRevoked",
    pr = "_longpollC2CMessageRevoked",
    hr = "_longpollC2CMessageReadReceipt",
    dr = "_avlongPollRequestFailed",
    fr = "_avlongPollResponseOK",
    gr = "_onGroupListUpdated",
    mr = "_loginSuccess",
    yr = "_signLogoutExcuting",
    vr = "_logoutSuccess",
    _r = "_a2keyExpired",
    Ir = "_errorHasBeenDetected",
    Cr = "_onConversationListUpdated",
    Mr = "_onConversationListProfileUpdated",
    Er = "_conversationDeleted",
    Sr = "onProfileUpdated",
    Tr = "joinAVChatRoomSuccess",
    Dr = "joinAVChatRoomSuccessNoAuth",
    kr = "_sdkStateReady";
  function Ar(e, t) {
    if ("string" != typeof e && !Array.isArray(e))
      throw new TypeError("Expected the input to be `string | string[]`");
    t = Object.assign({ pascalCase: !1 }, t);
    var n;
    return 0 ===
      (e = Array.isArray(e)
        ? e
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return e.length;
            })
            .join("-")
        : e.trim()).length
      ? ""
      : 1 === e.length
      ? t.pascalCase
        ? e.toUpperCase()
        : e.toLowerCase()
      : (e !== e.toLowerCase() && (e = Rr(e)),
        (e = e
          .replace(/^[_.\- ]+/, "")
          .toLowerCase()
          .replace(/[_.\- ]+(\w|$)/g, function (e, t) {
            return t.toUpperCase();
          })
          .replace(/\d+(\w|$)/g, function (e) {
            return e.toUpperCase();
          })),
        (n = e),
        t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n);
  }
  var Rr = function (e) {
    for (var t = !1, n = !1, r = !1, o = 0; o < e.length; o++) {
      var i = e[o];
      t && /[a-zA-Z]/.test(i) && i.toUpperCase() === i
        ? ((e = e.slice(0, o) + "-" + e.slice(o)),
          (t = !1),
          (r = n),
          (n = !0),
          o++)
        : n && r && /[a-zA-Z]/.test(i) && i.toLowerCase() === i
        ? ((e = e.slice(0, o - 1) + "-" + e.slice(o - 1)),
          (r = n),
          (n = !1),
          (t = !0))
        : ((t = i.toLowerCase() === i && i.toUpperCase() !== i),
          (r = n),
          (n = i.toUpperCase() === i && i.toLowerCase() !== i));
    }
    return e;
  };
  function Or(e, t, n) {
    var r = [],
      o = 0,
      i = (function e(t, n) {
        if (++o > 10) return o--, t;
        if (re(t)) {
          var i = t.map(function (t) {
            return te(t) ? e(t, n) : t;
          });
          return o--, i;
        }
        if (te(t)) {
          var s =
            ((a = t),
            (u = function (e, t) {
              if (!ce(t)) return !1;
              if ((s = t) !== Ar(s)) {
                for (var o = !0, i = 0; i < bn.ignoreKeyWord.length; i++)
                  if (t.includes(bn.ignoreKeyWord[i])) {
                    o = !1;
                    break;
                  }
                o && r.push(t);
              }
              var s;
              return oe(n[t])
                ? (function (e) {
                    return "OPPOChannelID" === e
                      ? e
                      : e[0].toUpperCase() + Ar(e).slice(1);
                  })(t)
                : n[t];
            }),
            (c = Object.create(null)),
            Object.keys(a).forEach(function (e) {
              var t = u(a[e], e);
              t && (c[t] = a[e]);
            }),
            c);
          return (
            (s = Ae(s, function (t, r) {
              return re(t) || te(t) ? e(t, n) : t;
            })),
            o--,
            s
          );
        }
        var a, u, c;
      })(e, (t = u(u({}, bn.request), t)));
    return (
      r.length > 0 &&
        n.innerEmitter.emit(Ir, {
          code: dt.CONVERTOR_IRREGULAR_PARAMS,
          message: fn,
        }),
      i
    );
  }
  function Nr(e, t) {
    if (((t = u(u({}, bn.response), t)), re(e)))
      return e.map(function (e) {
        return te(e) ? Nr(e, t) : e;
      });
    if (te(e)) {
      var n =
        ((r = e),
        (o = function (e, n) {
          return oe(t[n]) ? Ar(n) : t[n];
        }),
        (i = {}),
        Object.keys(r).forEach(function (e) {
          i[o(r[e], e)] = r[e];
        }),
        i);
      return (n = Ae(n, function (e) {
        return re(e) || te(e) ? Nr(e, t) : e;
      }));
    }
    var r, o, i;
  }
  var wr = (function () {
    function e(t) {
      var n = this;
      r(this, e),
        (this.url = ""),
        (this.requestData = null),
        (this.method = t.method || "POST"),
        (this.callback = function (e) {
          return Nr((e = t.decode(e)), n._getResponseMap(t));
        }),
        this._initializeServerMap(),
        this._initializeURL(t),
        this._initializeRequestData(t);
    }
    return (
      i(e, [
        {
          key: "_initializeServerMap",
          value: function () {
            this._serverMap = Object.create(null);
            var e = "";
            for (var t in Gn.NAME)
              if (Object.prototype.hasOwnProperty.call(Gn.NAME, t))
                switch ((e = Gn.NAME[t])) {
                  case Gn.NAME.PIC:
                    this._serverMap[e] = Gn.HOST.CURRENT.PIC;
                    break;
                  case Gn.NAME.IM_COS_SIGN:
                    this._serverMap[e] = Gn.HOST.CURRENT.COS;
                    break;
                  default:
                    this._serverMap[e] = Gn.HOST.CURRENT.COMMON;
                }
          },
        },
        {
          key: "_getHost",
          value: function (e) {
            if (void 0 !== this._serverMap[e]) return this._serverMap[e];
            throw new ht({
              code: dt.NETWORK_UNDEFINED_SERVER_NAME,
              message: pn,
            });
          },
        },
        {
          key: "_initializeURL",
          value: function (e) {
            var t = e.serverName,
              n = e.cmd,
              r = this._getHost(t),
              o = ""
                .concat(r, "/")
                .concat(Gn.NAME_VERSION[t], "/")
                .concat(t, "/")
                .concat(n);
            (o += "?".concat(this._getQueryString(e.queryString))),
              (this.url = o);
          },
        },
        {
          key: "getUrl",
          value: function () {
            return this.url.replace(
              /&reqtime=(\d+)/,
              "&reqtime=".concat(Math.ceil(+new Date() / 1e3))
            );
          },
        },
        {
          key: "_initializeRequestData",
          value: function (e) {
            var t,
              n = e.requestData;
            (t = this._requestDataCleaner(n)), (this.requestData = e.encode(t));
          },
        },
        {
          key: "_requestDataCleaner",
          value: function (e) {
            var t = Array.isArray(e) ? [] : Object.create(null);
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                ce(r) &&
                null !== e[r] &&
                ("object" !== n(e[r])
                  ? (t[r] = e[r])
                  : (t[r] = this._requestDataCleaner.bind(this)(e[r])));
            return t;
          },
        },
        {
          key: "_getQueryString",
          value: function (e) {
            var t = [];
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                ("function" != typeof e[n]
                  ? t.push("".concat(n, "=").concat(e[n]))
                  : t.push("".concat(n, "=").concat(e[n]())));
            return t.join("&");
          },
        },
        {
          key: "_getResponseMap",
          value: function (e) {
            if (
              e.keyMaps &&
              e.keyMaps.response &&
              Object.keys(e.keyMaps.response).length > 0
            )
              return e.keyMaps.response;
          },
        },
      ]),
      e
    );
  })();
  function Lr(e) {
    this.mixin(e);
  }
  Lr.mixin = function (e) {
    var t = e.prototype || e;
    (t._isReady = !1),
      (t.ready = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (e)
          return this._isReady
            ? void (t ? e.call(this) : setTimeout(e, 1))
            : ((this._readyQueue = this._readyQueue || []),
              void this._readyQueue.push(e));
      }),
      (t.triggerReady = function () {
        var e = this;
        (this._isReady = !0),
          setTimeout(function () {
            var t = e._readyQueue;
            (e._readyQueue = []),
              t &&
                t.length > 0 &&
                t.forEach(function (e) {
                  e.call(this);
                }, e);
          }, 1);
      }),
      (t.resetReady = function () {
        (this._isReady = !1), (this._readyQueue = []);
      }),
      (t.isReady = function () {
        return this._isReady;
      });
  };
  var Pr = (function () {
      function e(t) {
        r(this, e), Lr.mixin(this), (this.tim = t);
      }
      return (
        i(e, [
          {
            key: "isLoggedIn",
            value: function () {
              return (
                this.tim.context.login === Ge.IS_LOGIN ||
                !!this.tim.context.a2Key
              );
            },
          },
          {
            key: "createTransportCapsule",
            value: function (e) {
              var t = this.tim.packageConfig.get(e);
              return t ? new wr(t) : null;
            },
          },
          {
            key: "request",
            value: function (e) {
              var t = this.createTransportCapsule(e);
              return (
                t || J.error("unknown transport capsule, please check!", e),
                this.tim.connectionController.request(t)
              );
            },
          },
          {
            key: "emitInnerEvent",
            value: function (e, t) {
              this.tim.innerEmitter.emit(e, t);
            },
          },
          {
            key: "emitOuterEvent",
            value: function (e, t) {
              this.tim.outerEmitter.emit(e, t);
            },
          },
          {
            key: "reset",
            value: function () {
              J.warn(
                [
                  "method: IMController.reset() method must be implemented",
                ].join()
              );
            },
          },
          {
            key: "probeNetwork",
            value: function () {
              return this.tim.netMonitor.probe();
            },
          },
          {
            key: "getNetworkType",
            value: function () {
              return this.tim.netMonitor.getNetworkType();
            },
          },
          {
            key: "getPlatform",
            value: function () {
              var e = "web";
              return K ? (e = "wechat") : N && (e = "wxmp"), e;
            },
          },
        ]),
        e
      );
    })(),
    Gr = (function () {
      function e(t, n) {
        r(this, e),
          (this.data = t),
          (this._innerEmitter = n),
          (this.defaultData = {}),
          Object.assign(this.defaultData, t),
          this.initGetterAndSetter();
      }
      return (
        i(e, [
          {
            key: "initGetterAndSetter",
            value: function () {
              var e = this,
                t = function (t) {
                  Object.defineProperty(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: function () {
                      return e.data[t];
                    },
                    set: function (n) {
                      e.data[t] !== n &&
                        ((e.data[t] = n), e.onChange.bind(e)(t, n));
                    },
                  });
                };
              for (var n in e.data)
                Object.prototype.hasOwnProperty.call(e.data, n) && t(n);
            },
          },
          {
            key: "onChange",
            value: function (e, t) {
              this._innerEmitter.emit(Un, { key: e, value: t });
            },
          },
          {
            key: "reset",
            value: function () {
              for (var e in (J.log("Context.reset"), this.data))
                Object.prototype.hasOwnProperty.call(this.data, e) &&
                  (this.data[e] = this.defaultData.hasOwnProperty(e)
                    ? this.defaultData[e]
                    : null);
            },
          },
        ]),
        e
      );
    })(),
    br = (function (e) {
      c(n, e);
      var t = y(n);
      function n(e) {
        var o;
        r(this, n);
        var i = (o = t.call(this, e)).tim.loginInfo;
        return (
          (o._context = new Gr(
            {
              login: Ge.IS_NOT_LOGIN,
              SDKAppID: i.SDKAppID,
              appIDAt3rd: null,
              accountType: i.accountType,
              identifier: i.identifier,
              tinyID: null,
              identifierNick: i.identifierNick,
              userSig: i.userSig,
              a2Key: null,
              contentType: "json",
              apn: 1,
              unlimitedAVChatRoom: i.unlimitedAVChatRoom,
              scene: i.scene,
            },
            o.tim.innerEmitter
          )),
          o._initListener(),
          o
        );
      }
      return (
        i(n, [
          {
            key: "reset",
            value: function () {
              this._context.reset(), this.emitInnerEvent(qn);
            },
          },
          {
            key: "_initListener",
            value: function () {
              this.tim.innerEmitter.on(Un, this._onContextMemberChange, this),
                this.tim.innerEmitter.on(mr, this._updateA2KeyAndTinyID, this);
            },
          },
          {
            key: "_updateA2KeyAndTinyID",
            value: function (e) {
              var t = e.data,
                n = t.a2Key,
                r = t.tinyID;
              (this._context.a2Key = n),
                (this._context.tinyID = r),
                this.emitInnerEvent(xn),
                this.triggerReady();
            },
          },
          {
            key: "getContext",
            value: function () {
              return this._context;
            },
          },
          {
            key: "_onContextMemberChange",
            value: function (e) {
              var t = e.data,
                n = t.key,
                r = t.value;
              ("tinyID" === n || "a2Key" === n) &&
                (r.length <= 0
                  ? (this._context.login = Ge.IS_NOT_LOGIN)
                  : (this._context.login =
                      null !== this._context.a2Key
                        ? Ge.IS_LOGIN
                        : Ge.IS_NOT_LOGIN));
            },
          },
        ]),
        n
      );
    })(Pr),
    Ur = function e(t) {
      r(this, e), (this.code = 0), (this.data = t || {});
    },
    qr = null,
    xr = function (e) {
      qr = e;
    },
    Fr = function (e) {
      return e instanceof Ur
        ? (J.warn(
            "IMPromise.resolve 此函数会自动用options创建IMResponse实例，调用侧不需创建，建议修改！"
          ),
          Promise.resolve(e))
        : Promise.resolve(new Ur(e));
    },
    Hr = function (t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (t instanceof ht)
        return n && null !== qr && qr.emit(e.ERROR, t), Promise.reject(t);
      if (t instanceof Error) {
        var r = new ht({ code: dt.UNCAUGHT_ERROR, message: t.message });
        return n && null !== qr && qr.emit(e.ERROR, r), Promise.reject(r);
      }
      if (oe(t) || oe(t.code) || oe(t.message))
        J.error("IMPromise.reject 必须指定code(错误码)和message(错误信息)!!!");
      else {
        if (Z(t.code) && ee(t.message)) {
          var o = new ht(t);
          return n && null !== qr && qr.emit(e.ERROR, o), Promise.reject(o);
        }
        J.error(
          "IMPromise.reject code(错误码)必须为数字，message(错误信息)必须为字符串!!!"
        );
      }
    },
    Kr = "sdkReady",
    Br = "login",
    Vr = "longpolling",
    jr = "longpollingAV",
    Yr = "sendMessage",
    $r = "sendMessageC2C",
    Wr = "sendMessageGroupWork",
    zr = "sendMessageGroupPublic",
    Xr = "sendMessageGroupMeeting",
    Jr = "sendMessageGroupAV",
    Qr = "messageReceived",
    Zr = "messageReceivedAV",
    eo = "initConversationList",
    to = "initGroupList",
    no = "upload",
    ro = (function () {
      function e() {
        r(this, e),
          (this.SDKAppID = ""),
          (this.version = ""),
          (this.tinyID = ""),
          (this.userID = ""),
          (this.platform = ""),
          (this.method = ""),
          (this.time = ""),
          (this.startts = 0),
          (this.endts = 0),
          (this.timespan = 0),
          (this.codeint = 0),
          (this.message = ""),
          (this.text = ""),
          (this.msgType = ""),
          (this.networkType = ""),
          (this.platform = ""),
          (this.scene = ""),
          (this._sentFlag = !1);
      }
      return (
        i(
          e,
          [
            {
              key: "setCommonInfo",
              value: function (e) {
                var t = e.SDKAppID,
                  n = e.version,
                  r = e.tinyID,
                  o = e.userID,
                  i = e.platform,
                  s = e.scene;
                (this.SDKAppID = "".concat(t)),
                  (this.version = "".concat(n)),
                  (this.tinyID = r),
                  (this.userID = o),
                  (this.platform = i),
                  (this.scene = s),
                  (this.time = fe()),
                  this.startts &&
                    this.endts &&
                    !this.timespan &&
                    (this.timespan = Math.abs(this.endts - this.startts));
              },
            },
            {
              key: "setMethod",
              value: function (e) {
                return (this.method = e), this;
              },
            },
            {
              key: "setStart",
              value: function () {
                this.startts = Date.now();
              },
            },
            {
              key: "setEnd",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                this._sentFlag ||
                  ((this.endts = Date.now()),
                  t
                    ? ((this._sentFlag = !0),
                      this._eventStatController.pushIn(this))
                    : setTimeout(function () {
                        (e._sentFlag = !0), e._eventStatController.pushIn(e);
                      }, 0));
              },
            },
            {
              key: "setError",
              value: function (e, t, n) {
                return e instanceof Error
                  ? (this._sentFlag ||
                      (this.setNetworkType(n),
                      t
                        ? (e.code && this.setCode(e.code),
                          e.message && this.setMessage(e.message))
                        : (this.setCode(dt.NO_NETWORK), this.setMessage(dn))),
                    this)
                  : (J.warn(
                      "SSOLogData.setError value not instanceof Error, please check!"
                    ),
                    this);
              },
            },
            {
              key: "setCode",
              value: function (e) {
                return (
                  oe(e) ||
                    this._sentFlag ||
                    ("ECONNABORTED" === e && (this.codeint = 103),
                    Z(e)
                      ? (this.codeint = e)
                      : J.warn(
                          "SSOLogData.setCode value not a number, please check!",
                          e,
                          n(e)
                        )),
                  this
                );
              },
            },
            {
              key: "setMessage",
              value: function (e) {
                return oe(e) || this._sentFlag
                  ? this
                  : ee(e)
                  ? ((this.message = e), this)
                  : this;
              },
            },
            {
              key: "setText",
              value: function (e) {
                return (
                  Z(e) ? (this.text = e.toString()) : ee(e) && (this.text = e),
                  this
                );
              },
            },
            {
              key: "setMessageType",
              value: function (e) {
                return (this.msgType = e), this;
              },
            },
            {
              key: "setNetworkType",
              value: function (e) {
                return (
                  oe(e)
                    ? J.warn(
                        "SSOLogData.setNetworkType value is undefined, please check!"
                      )
                    : (this.networkType = e),
                  this
                );
              },
            },
          ],
          [
            {
              key: "bindController",
              value: function (t) {
                e.prototype._eventStatController = t;
              },
            },
          ]
        ),
        e
      );
    })(),
    oo = "sdkConstruct",
    io = "sdkReady",
    so = "accessLayer",
    ao = "login",
    uo = "logout",
    co = "kickedOut",
    lo = "registerPlugin",
    po = "getCosAuthKey",
    ho = "upload",
    fo = "sendMessage",
    go = "getC2CRoamingMessages",
    mo = "getGroupRoamingMessages",
    yo = "revokeMessage",
    vo = "setC2CMessageRead",
    _o = "setGroupMessageRead",
    Io = "emptyMessageBody",
    Co = "getPeerReadTime",
    Mo = "getConversationList",
    Eo = "getConversationProfile",
    So = "deleteConversation",
    To = "getConversationListInStorage",
    Do = "syncConversationList",
    ko = "createGroup",
    Ao = "applyJoinGroup",
    Ro = "quitGroup",
    Oo = "searchGroupByID",
    No = "changeGroupOwner",
    wo = "handleGroupApplication",
    Lo = "setMessageRemindType",
    Po = "dismissGroup",
    Go = "updateGroupProfile",
    bo = "getGroupList",
    Uo = "getGroupProfile",
    qo = "getGroupListInStorage",
    xo = "getGroupLastSequence",
    Fo = "getGroupMemberList",
    Ho = "getGroupMemberProfile",
    Ko = "addGroupMember",
    Bo = "deleteGroupMember",
    Vo = "setGroupMemberMuteTime",
    jo = "setGroupMemberNameCard",
    Yo = "setGroupMemberRole",
    $o = "setGroupMemberCustomField",
    Wo = "getLongPollID",
    zo = "longPollingError",
    Xo = "networkJitter",
    Jo = "fastStart",
    Qo = "slowStart",
    Zo = "messageLoss",
    ei = "messageStacked",
    ti = "getUserProfile",
    ni = "updateMyProfile",
    ri = "getBlacklist",
    oi = "addToBlacklist",
    ii = "removeFromBlacklist",
    si = "mpHideToShow",
    ai = "callbackFunctionError",
    ui = "exceptionError",
    ci = (function (n) {
      c(s, n);
      var o = y(s);
      function s(e) {
        var t;
        return r(this, s), (t = o.call(this, e))._initializeListener(), t;
      }
      return (
        i(s, [
          {
            key: "login",
            value: function (e) {
              if (this.isLoggedIn()) {
                var t = "您已经登录账号".concat(
                  e.identifier,
                  "！如需切换账号登录，请先调用 logout 接口登出，再调用 login 接口登录。"
                );
                return (
                  J.warn(t),
                  Fr({
                    actionStatus: "OK",
                    errorCode: 0,
                    errorInfo: t,
                    repeatLogin: !0,
                  })
                );
              }
              J.log("SignController.login userID=", e.identifier), J.time(Br);
              var n = this._checkLoginInfo(e);
              return Oe(n)
                ? ((this.tim.context.identifier = e.identifier),
                  (this.tim.context.userSig = e.userSig),
                  this.tim.context.identifier && this.tim.context.userSig
                    ? this._accessLayer()
                    : void 0)
                : Hr(n);
            },
          },
          {
            key: "_isLoginCurrentUser",
            value: function (e) {
              return this.tim.context.identifier === e;
            },
          },
          {
            key: "_initializeListener",
            value: function () {
              var e = this.tim.innerEmitter;
              e.on(tr, this._onMultipleAccountKickedOut, this),
                e.on(nr, this._onMultipleDeviceKickedOut, this),
                e.on(_r, this._onUserSigExpired, this);
            },
          },
          {
            key: "_accessLayer",
            value: function () {
              var e = this,
                t = new ro();
              return (
                t.setMethod(so).setStart(),
                J.log("SignController._accessLayer."),
                this.request({ name: "accessLayer", action: "query" })
                  .then(function (n) {
                    return (
                      t
                        .setCode(0)
                        .setNetworkType(e.getNetworkType())
                        .setText(n.data.webImAccessLayer)
                        .setEnd(),
                      J.log(
                        "SignController._accessLayer ok. webImAccessLayer=".concat(
                          n.data.webImAccessLayer
                        )
                      ),
                      1 === n.data.webImAccessLayer &&
                        Gn.HOST.setCurrent(n.data.webImAccessLayer),
                      e._login()
                    );
                  })
                  .catch(function (n) {
                    return (
                      e.probeNetwork().then(function (r) {
                        var o = v(r, 2),
                          i = o[0],
                          s = o[1];
                        t.setError(n, i, s).setEnd(!0),
                          e.tim.eventStatController.reportAtOnce();
                      }),
                      J.error("SignController._accessLayer failed. error:", n),
                      Hr(n)
                    );
                  })
              );
            },
          },
          {
            key: "_login",
            value: function () {
              var e = this,
                t = new ro();
              return (
                t.setMethod(ao).setStart(),
                this.request({ name: "login", action: "query" })
                  .then(function (n) {
                    var r = null;
                    if (!n.data.tinyID)
                      throw (
                        ((r = new ht({ code: dt.NO_TINYID, message: vt })),
                        t.setError(r, !0, e.getNetworkType()).setEnd(),
                        r)
                      );
                    if (!n.data.a2Key)
                      throw (
                        ((r = new ht({ code: dt.NO_A2KEY, message: _t })),
                        t.setError(r, !0, e.getNetworkType()).setEnd(),
                        r)
                      );
                    return (
                      t
                        .setCode(0)
                        .setNetworkType(e.getNetworkType())
                        .setText("".concat(e.tim.loginInfo.identifier))
                        .setEnd(),
                      J.log(
                        "SignController.login ok. userID="
                          .concat(e.tim.loginInfo.identifier, " loginCost=")
                          .concat(J.timeEnd(Br), "ms")
                      ),
                      e.emitInnerEvent(mr, {
                        a2Key: n.data.a2Key,
                        tinyID: n.data.tinyID,
                      }),
                      Fr(n.data)
                    );
                  })
                  .catch(function (n) {
                    return (
                      e.probeNetwork().then(function (e) {
                        var r = v(e, 2),
                          o = r[0],
                          i = r[1];
                        t.setError(n, o, i).setEnd(!0);
                      }),
                      J.error("SignController.login failed. error:", n),
                      Hr(n)
                    );
                  })
              );
            },
          },
          {
            key: "logout",
            value: function () {
              var e = new ro();
              return (
                e.setMethod(uo).setStart(),
                e
                  .setCode(0)
                  .setNetworkType(this.getNetworkType())
                  .setText(
                    "userID="
                      .concat(this.tim.loginInfo.identifier, " type=")
                      .concat("longPollLogout")
                  )
                  .setEnd(!0),
                J.info("SignController.logout"),
                this.emitInnerEvent(yr),
                this._logout(Ze)
                  .then(this._emitLogoutSuccess.bind(this))
                  .catch(this._emitLogoutSuccess.bind(this))
              );
            },
          },
          {
            key: "_logout",
            value: function (e) {
              var t = this.tim.notificationController,
                n = e === Qe ? "logout" : "longPollLogout",
                r =
                  e === Qe
                    ? { name: n, action: "query" }
                    : {
                        name: n,
                        action: "query",
                        param: { longPollID: t.getLongPollID() },
                      };
              return this.request(r).catch(function (e) {
                return J.error("SignController._logout error:", e), Hr(e);
              });
            },
          },
          {
            key: "_checkLoginInfo",
            value: function (e) {
              var t = 0,
                n = "";
              return (
                null === e.SDKAppID
                  ? ((t = dt.NO_SDKAPPID), (n = ft))
                  : null === e.accountType
                  ? ((t = dt.NO_ACCOUNT_TYPE), (n = gt))
                  : null === e.identifier
                  ? ((t = dt.NO_IDENTIFIER), (n = mt))
                  : null === e.userSig && ((t = dt.NO_USERSIG), (n = yt)),
                Oe(t) || Oe(n) ? {} : { code: t, message: n }
              );
            },
          },
          {
            key: "_emitLogoutSuccess",
            value: function () {
              return this.emitInnerEvent(vr), Fr({});
            },
          },
          {
            key: "_onMultipleAccountKickedOut",
            value: function () {
              var n = this,
                r = new ro();
              r.setMethod(co).setStart(),
                r
                  .setCode(0)
                  .setNetworkType(this.getNetworkType())
                  .setText(t.KICKED_OUT_MULT_ACCOUNT)
                  .setEnd(!0),
                J.warn(
                  "SignController._onMultipleAccountKickedOut kicked out. userID=".concat(
                    this.tim.loginInfo.identifier
                  )
                ),
                this.tim.logout().then(function () {
                  n.emitOuterEvent(e.KICKED_OUT, {
                    type: t.KICKED_OUT_MULT_ACCOUNT,
                  });
                });
            },
          },
          {
            key: "_onMultipleDeviceKickedOut",
            value: function () {
              var n = this,
                r = new ro();
              r.setMethod(co).setStart(),
                r
                  .setCode(0)
                  .setNetworkType(this.getNetworkType())
                  .setText(t.KICKED_OUT_MULT_DEVICE)
                  .setEnd(!0),
                J.warn(
                  "SignController._onMultipleDeviceKickedOut kicked out. userID=".concat(
                    this.tim.loginInfo.identifier
                  )
                ),
                this.tim.logout().then(function () {
                  n.emitOuterEvent(e.KICKED_OUT, {
                    type: t.KICKED_OUT_MULT_DEVICE,
                  });
                });
            },
          },
          {
            key: "_onUserSigExpired",
            value: function () {
              var n = new ro();
              n.setMethod(co).setStart(),
                n
                  .setCode(0)
                  .setNetworkType(this.getNetworkType())
                  .setText(t.KICKED_OUT_USERSIG_EXPIRED)
                  .setEnd(!0),
                J.warn(
                  "SignController._onUserSigExpired: userSig 签名过期被踢下线"
                ),
                this.emitOuterEvent(e.KICKED_OUT, {
                  type: t.KICKED_OUT_USERSIG_EXPIRED,
                }),
                this.tim.resetSDK();
            },
          },
          {
            key: "reset",
            value: function () {
              J.info("SignController.reset");
            },
          },
        ]),
        s
      );
    })(Pr),
    li = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
          n[r] = arguments[r];
        return e.apply(t, n);
      };
    },
    pi = Object.prototype.toString;
  function hi(e) {
    return "[object Array]" === pi.call(e);
  }
  function di(e) {
    return void 0 === e;
  }
  function fi(e) {
    return null !== e && "object" == typeof e;
  }
  function gi(e) {
    return "[object Function]" === pi.call(e);
  }
  function mi(e, t) {
    if (null != e)
      if (("object" != typeof e && (e = [e]), hi(e)))
        for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
      else
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) &&
            t.call(null, e[o], o, e);
  }
  var yi = {
    isArray: hi,
    isArrayBuffer: function (e) {
      return "[object ArrayBuffer]" === pi.call(e);
    },
    isBuffer: function (e) {
      return (
        null !== e &&
        !di(e) &&
        null !== e.constructor &&
        !di(e.constructor) &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    },
    isFormData: function (e) {
      return "undefined" != typeof FormData && e instanceof FormData;
    },
    isArrayBufferView: function (e) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && e.buffer instanceof ArrayBuffer;
    },
    isString: function (e) {
      return "string" == typeof e;
    },
    isNumber: function (e) {
      return "number" == typeof e;
    },
    isObject: fi,
    isUndefined: di,
    isDate: function (e) {
      return "[object Date]" === pi.call(e);
    },
    isFile: function (e) {
      return "[object File]" === pi.call(e);
    },
    isBlob: function (e) {
      return "[object Blob]" === pi.call(e);
    },
    isFunction: gi,
    isStream: function (e) {
      return fi(e) && gi(e.pipe);
    },
    isURLSearchParams: function (e) {
      return (
        "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
      );
    },
    isStandardBrowserEnv: function () {
      return (
        ("undefined" == typeof navigator ||
          ("ReactNative" !== navigator.product &&
            "NativeScript" !== navigator.product &&
            "NS" !== navigator.product)) &&
        "undefined" != typeof window &&
        "undefined" != typeof document
      );
    },
    forEach: mi,
    merge: function e() {
      var t = {};
      function n(n, r) {
        "object" == typeof t[r] && "object" == typeof n
          ? (t[r] = e(t[r], n))
          : (t[r] = n);
      }
      for (var r = 0, o = arguments.length; r < o; r++) mi(arguments[r], n);
      return t;
    },
    deepMerge: function e() {
      var t = {};
      function n(n, r) {
        "object" == typeof t[r] && "object" == typeof n
          ? (t[r] = e(t[r], n))
          : (t[r] = "object" == typeof n ? e({}, n) : n);
      }
      for (var r = 0, o = arguments.length; r < o; r++) mi(arguments[r], n);
      return t;
    },
    extend: function (e, t, n) {
      return (
        mi(t, function (t, r) {
          e[r] = n && "function" == typeof t ? li(t, n) : t;
        }),
        e
      );
    },
    trim: function (e) {
      return e.replace(/^\s*/, "").replace(/\s*$/, "");
    },
  };
  function vi(e) {
    return encodeURIComponent(e)
      .replace(/%40/gi, "@")
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  var _i = function (e, t, n) {
    if (!t) return e;
    var r;
    if (n) r = n(t);
    else if (yi.isURLSearchParams(t)) r = t.toString();
    else {
      var o = [];
      yi.forEach(t, function (e, t) {
        null != e &&
          (yi.isArray(e) ? (t += "[]") : (e = [e]),
          yi.forEach(e, function (e) {
            yi.isDate(e)
              ? (e = e.toISOString())
              : yi.isObject(e) && (e = JSON.stringify(e)),
              o.push(vi(t) + "=" + vi(e));
          }));
      }),
        (r = o.join("&"));
    }
    if (r) {
      var i = e.indexOf("#");
      -1 !== i && (e = e.slice(0, i)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
    }
    return e;
  };
  function Ii() {
    this.handlers = [];
  }
  (Ii.prototype.use = function (e, t) {
    return (
      this.handlers.push({ fulfilled: e, rejected: t }),
      this.handlers.length - 1
    );
  }),
    (Ii.prototype.eject = function (e) {
      this.handlers[e] && (this.handlers[e] = null);
    }),
    (Ii.prototype.forEach = function (e) {
      yi.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    });
  var Ci = Ii,
    Mi = function (e, t, n) {
      return (
        yi.forEach(n, function (n) {
          e = n(e, t);
        }),
        e
      );
    },
    Ei = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  function Si() {
    throw new Error("setTimeout has not been defined");
  }
  function Ti() {
    throw new Error("clearTimeout has not been defined");
  }
  var Di = Si,
    ki = Ti;
  function Ai(e) {
    if (Di === setTimeout) return setTimeout(e, 0);
    if ((Di === Si || !Di) && setTimeout)
      return (Di = setTimeout), setTimeout(e, 0);
    try {
      return Di(e, 0);
    } catch (t) {
      try {
        return Di.call(null, e, 0);
      } catch (t) {
        return Di.call(this, e, 0);
      }
    }
  }
  "function" == typeof B.setTimeout && (Di = setTimeout),
    "function" == typeof B.clearTimeout && (ki = clearTimeout);
  var Ri,
    Oi = [],
    Ni = !1,
    wi = -1;
  function Li() {
    Ni &&
      Ri &&
      ((Ni = !1),
      Ri.length ? (Oi = Ri.concat(Oi)) : (wi = -1),
      Oi.length && Pi());
  }
  function Pi() {
    if (!Ni) {
      var e = Ai(Li);
      Ni = !0;
      for (var t = Oi.length; t; ) {
        for (Ri = Oi, Oi = []; ++wi < t; ) Ri && Ri[wi].run();
        (wi = -1), (t = Oi.length);
      }
      (Ri = null),
        (Ni = !1),
        (function (e) {
          if (ki === clearTimeout) return clearTimeout(e);
          if ((ki === Ti || !ki) && clearTimeout)
            return (ki = clearTimeout), clearTimeout(e);
          try {
            ki(e);
          } catch (t) {
            try {
              return ki.call(null, e);
            } catch (t) {
              return ki.call(this, e);
            }
          }
        })(e);
    }
  }
  function Gi(e, t) {
    (this.fun = e), (this.array = t);
  }
  Gi.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  function bi() {}
  var Ui = bi,
    qi = bi,
    xi = bi,
    Fi = bi,
    Hi = bi,
    Ki = bi,
    Bi = bi;
  var Vi = B.performance || {},
    ji =
      Vi.now ||
      Vi.mozNow ||
      Vi.msNow ||
      Vi.oNow ||
      Vi.webkitNow ||
      function () {
        return new Date().getTime();
      };
  var Yi = new Date();
  var $i = {
      nextTick: function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        Oi.push(new Gi(e, t)), 1 !== Oi.length || Ni || Ai(Pi);
      },
      title: "browser",
      browser: !0,
      env: {},
      argv: [],
      version: "",
      versions: {},
      on: Ui,
      addListener: qi,
      once: xi,
      off: Fi,
      removeListener: Hi,
      removeAllListeners: Ki,
      emit: Bi,
      binding: function (e) {
        throw new Error("process.binding is not supported");
      },
      cwd: function () {
        return "/";
      },
      chdir: function (e) {
        throw new Error("process.chdir is not supported");
      },
      umask: function () {
        return 0;
      },
      hrtime: function (e) {
        var t = 0.001 * ji.call(Vi),
          n = Math.floor(t),
          r = Math.floor((t % 1) * 1e9);
        return e && ((n -= e[0]), (r -= e[1]) < 0 && (n--, (r += 1e9))), [n, r];
      },
      platform: "browser",
      release: {},
      config: {},
      uptime: function () {
        return (new Date() - Yi) / 1e3;
      },
    },
    Wi = function (e, t) {
      yi.forEach(e, function (n, r) {
        r !== t &&
          r.toUpperCase() === t.toUpperCase() &&
          ((e[t] = n), delete e[r]);
      });
    },
    zi = function (e, t, n, r, o) {
      return (function (e, t, n, r, o) {
        return (
          (e.config = t),
          n && (e.code = n),
          (e.request = r),
          (e.response = o),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            };
          }),
          e
        );
      })(new Error(e), t, n, r, o);
    },
    Xi = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ],
    Ji = yi.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function r(e) {
            var r = e;
            return (
              t && (n.setAttribute("href", r), (r = n.href)),
              n.setAttribute("href", r),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (e = r(window.location.href)),
            function (t) {
              var n = yi.isString(t) ? r(t) : t;
              return n.protocol === e.protocol && n.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        },
    Qi = yi.isStandardBrowserEnv()
      ? {
          write: function (e, t, n, r, o, i) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)),
              yi.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
              yi.isString(r) && s.push("path=" + r),
              yi.isString(o) && s.push("domain=" + o),
              !0 === i && s.push("secure"),
              (document.cookie = s.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        },
    Zi = function (e) {
      return new Promise(function (t, n) {
        var r = e.data,
          o = e.headers;
        yi.isFormData(r) && delete o["Content-Type"];
        var i = new XMLHttpRequest();
        if (e.auth) {
          var s = e.auth.username || "",
            a = e.auth.password || "";
          o.Authorization = "Basic " + btoa(s + ":" + a);
        }
        var u,
          c,
          l =
            ((u = e.baseURL),
            (c = e.url),
            u && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c)
              ? (function (e, t) {
                  return t
                    ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                    : e;
                })(u, c)
              : c);
        if (
          (i.open(
            e.method.toUpperCase(),
            _i(l, e.params, e.paramsSerializer),
            !0
          ),
          (i.timeout = e.timeout),
          (i.onreadystatechange = function () {
            if (
              i &&
              4 === i.readyState &&
              (0 !== i.status ||
                (i.responseURL && 0 === i.responseURL.indexOf("file:")))
            ) {
              var r,
                o,
                s,
                a,
                u,
                c =
                  "getAllResponseHeaders" in i
                    ? ((r = i.getAllResponseHeaders()),
                      (u = {}),
                      r
                        ? (yi.forEach(r.split("\n"), function (e) {
                            if (
                              ((a = e.indexOf(":")),
                              (o = yi.trim(e.substr(0, a)).toLowerCase()),
                              (s = yi.trim(e.substr(a + 1))),
                              o)
                            ) {
                              if (u[o] && Xi.indexOf(o) >= 0) return;
                              u[o] =
                                "set-cookie" === o
                                  ? (u[o] ? u[o] : []).concat([s])
                                  : u[o]
                                  ? u[o] + ", " + s
                                  : s;
                            }
                          }),
                          u)
                        : u)
                    : null,
                l = {
                  data:
                    e.responseType && "text" !== e.responseType
                      ? i.response
                      : i.responseText,
                  status: i.status,
                  statusText: i.statusText,
                  headers: c,
                  config: e,
                  request: i,
                };
              !(function (e, t, n) {
                var r = n.config.validateStatus;
                !r || r(n.status)
                  ? e(n)
                  : t(
                      zi(
                        "Request failed with status code " + n.status,
                        n.config,
                        null,
                        n.request,
                        n
                      )
                    );
              })(t, n, l),
                (i = null);
            }
          }),
          (i.onabort = function () {
            i && (n(zi("Request aborted", e, "ECONNABORTED", i)), (i = null));
          }),
          (i.onerror = function () {
            n(zi("Network Error", e, null, i)), (i = null);
          }),
          (i.ontimeout = function () {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              n(zi(t, e, "ECONNABORTED", i)),
              (i = null);
          }),
          yi.isStandardBrowserEnv())
        ) {
          var p = Qi,
            h =
              (e.withCredentials || Ji(l)) && e.xsrfCookieName
                ? p.read(e.xsrfCookieName)
                : void 0;
          h && (o[e.xsrfHeaderName] = h);
        }
        if (
          ("setRequestHeader" in i &&
            yi.forEach(o, function (e, t) {
              void 0 === r && "content-type" === t.toLowerCase()
                ? delete o[t]
                : i.setRequestHeader(t, e);
            }),
          yi.isUndefined(e.withCredentials) ||
            (i.withCredentials = !!e.withCredentials),
          e.responseType)
        )
          try {
            i.responseType = e.responseType;
          } catch (d) {
            if ("json" !== e.responseType) throw d;
          }
        "function" == typeof e.onDownloadProgress &&
          i.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            i.upload &&
            i.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              i && (i.abort(), n(e), (i = null));
            }),
          void 0 === r && (r = null),
          i.send(r);
      });
    },
    es = { "Content-Type": "application/x-www-form-urlencoded" };
  function ts(e, t) {
    !yi.isUndefined(e) &&
      yi.isUndefined(e["Content-Type"]) &&
      (e["Content-Type"] = t);
  }
  var ns,
    rs = {
      adapter:
        (("undefined" != typeof XMLHttpRequest ||
          (void 0 !== $i &&
            "[object process]" === Object.prototype.toString.call($i))) &&
          (ns = Zi),
        ns),
      transformRequest: [
        function (e, t) {
          return (
            Wi(t, "Accept"),
            Wi(t, "Content-Type"),
            yi.isFormData(e) ||
            yi.isArrayBuffer(e) ||
            yi.isBuffer(e) ||
            yi.isStream(e) ||
            yi.isFile(e) ||
            yi.isBlob(e)
              ? e
              : yi.isArrayBufferView(e)
              ? e.buffer
              : yi.isURLSearchParams(e)
              ? (ts(t, "application/x-www-form-urlencoded;charset=utf-8"),
                e.toString())
              : yi.isObject(e)
              ? (ts(t, "application/json;charset=utf-8"), JSON.stringify(e))
              : e
          );
        },
      ],
      transformResponse: [
        function (e) {
          if ("string" == typeof e)
            try {
              e = JSON.parse(e);
            } catch (t) {}
          return e;
        },
      ],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
    };
  (rs.headers = { common: { Accept: "application/json, text/plain, */*" } }),
    yi.forEach(["delete", "get", "head"], function (e) {
      rs.headers[e] = {};
    }),
    yi.forEach(["post", "put", "patch"], function (e) {
      rs.headers[e] = yi.merge(es);
    });
  var os = rs;
  function is(e) {
    e.cancelToken && e.cancelToken.throwIfRequested();
  }
  var ss = function (e) {
      return (
        is(e),
        (e.headers = e.headers || {}),
        (e.data = Mi(e.data, e.headers, e.transformRequest)),
        (e.headers = yi.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        yi.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || os.adapter)(e).then(
          function (t) {
            return (
              is(e), (t.data = Mi(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              Ei(t) ||
                (is(e),
                t &&
                  t.response &&
                  (t.response.data = Mi(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    },
    as = function (e, t) {
      t = t || {};
      var n = {},
        r = ["url", "method", "params", "data"],
        o = ["headers", "auth", "proxy"],
        i = [
          "baseURL",
          "url",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "maxContentLength",
          "validateStatus",
          "maxRedirects",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
        ];
      yi.forEach(r, function (e) {
        void 0 !== t[e] && (n[e] = t[e]);
      }),
        yi.forEach(o, function (r) {
          yi.isObject(t[r])
            ? (n[r] = yi.deepMerge(e[r], t[r]))
            : void 0 !== t[r]
            ? (n[r] = t[r])
            : yi.isObject(e[r])
            ? (n[r] = yi.deepMerge(e[r]))
            : void 0 !== e[r] && (n[r] = e[r]);
        }),
        yi.forEach(i, function (r) {
          void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r]);
        });
      var s = r.concat(o).concat(i),
        a = Object.keys(t).filter(function (e) {
          return -1 === s.indexOf(e);
        });
      return (
        yi.forEach(a, function (r) {
          void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r]);
        }),
        n
      );
    };
  function us(e) {
    (this.defaults = e),
      (this.interceptors = { request: new Ci(), response: new Ci() });
  }
  (us.prototype.request = function (e) {
    "string" == typeof e
      ? ((e = arguments[1] || {}).url = arguments[0])
      : (e = e || {}),
      (e = as(this.defaults, e)).method
        ? (e.method = e.method.toLowerCase())
        : this.defaults.method
        ? (e.method = this.defaults.method.toLowerCase())
        : (e.method = "get");
    var t = [ss, void 0],
      n = Promise.resolve(e);
    for (
      this.interceptors.request.forEach(function (e) {
        t.unshift(e.fulfilled, e.rejected);
      }),
        this.interceptors.response.forEach(function (e) {
          t.push(e.fulfilled, e.rejected);
        });
      t.length;

    )
      n = n.then(t.shift(), t.shift());
    return n;
  }),
    (us.prototype.getUri = function (e) {
      return (
        (e = as(this.defaults, e)),
        _i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
      );
    }),
    yi.forEach(["delete", "get", "head", "options"], function (e) {
      us.prototype[e] = function (t, n) {
        return this.request(yi.merge(n || {}, { method: e, url: t }));
      };
    }),
    yi.forEach(["post", "put", "patch"], function (e) {
      us.prototype[e] = function (t, n, r) {
        return this.request(yi.merge(r || {}, { method: e, url: t, data: n }));
      };
    });
  var cs = us;
  function ls(e) {
    this.message = e;
  }
  (ls.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }),
    (ls.prototype.__CANCEL__ = !0);
  var ps = ls;
  function hs(e) {
    if ("function" != typeof e)
      throw new TypeError("executor must be a function.");
    var t;
    this.promise = new Promise(function (e) {
      t = e;
    });
    var n = this;
    e(function (e) {
      n.reason || ((n.reason = new ps(e)), t(n.reason));
    });
  }
  (hs.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  }),
    (hs.source = function () {
      var e;
      return {
        token: new hs(function (t) {
          e = t;
        }),
        cancel: e,
      };
    });
  var ds = hs;
  function fs(e) {
    var t = new cs(e),
      n = li(cs.prototype.request, t);
    return yi.extend(n, cs.prototype, t), yi.extend(n, t), n;
  }
  var gs = fs(os);
  (gs.Axios = cs),
    (gs.create = function (e) {
      return fs(as(gs.defaults, e));
    }),
    (gs.Cancel = ps),
    (gs.CancelToken = ds),
    (gs.isCancel = Ei),
    (gs.all = function (e) {
      return Promise.all(e);
    }),
    (gs.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    });
  var ms = gs,
    ys = gs;
  ms.default = ys;
  var vs = ms,
    _s = vs.create({
      timeout: 3e4,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
  _s.interceptors.response.use(
    function (e) {
      var t = e.data,
        n = t.error_code,
        r = t.ErrorCode;
      return (
        Z(n) && (r = n), r !== Pe.SUCCESS && (e.data.ErrorCode = Number(r)), e
      );
    },
    function (e) {
      return (
        "Network Error" === e.message &&
          (!0 === _s.defaults.withCredentials &&
            J.warn(
              "Network Error, try to close `IMAxios.defaults.withCredentials` to false. (IMAxios.js)"
            ),
          (_s.defaults.withCredentials = !1)),
        Promise.reject(e)
      );
    }
  );
  var Is = (function () {
      function e() {
        r(this, e);
      }
      return (
        i(e, [
          {
            key: "request",
            value: function (e) {
              console.warn(
                "请注意： ConnectionBase.request() 方法必须被派生类重写:"
              ),
                console.log(
                  "参数如下：\n    * @param {String} options.url string 是 开发者服务器接口地址\n    * @param {*} options.data - string/object/ArrayBuffer 否 请求的参数\n    * @param {Object} options.header - Object 否 设置请求的 header，\n    * @param {String} options.method - string GET 否 HTTP 请求方法\n    * @param {String} options.dataType - string json 否 返回的数据格式\n    * @param {String} options.responseType - string text 否 响应的数据类型\n    * @param {Boolean} isRetry - string text false 是否为重试的请求\n   "
                );
            },
          },
          {
            key: "_checkOptions",
            value: function (e) {
              if (!1 == !!e.url)
                throw new ht({
                  code: dt.NETWORK_BASE_OPTIONS_NO_URL,
                  message: ln,
                });
            },
          },
          {
            key: "_initOptions",
            value: function (e) {
              (e.method =
                ["POST", "GET", "PUT", "DELETE", "OPTION"].indexOf(e.method) >=
                0
                  ? e.method
                  : "POST"),
                (e.dataType = e.dataType || "json"),
                (e.responseType = e.responseType || "json");
            },
          },
        ]),
        e
      );
    })(),
    Cs = (function (e) {
      c(n, e);
      var t = y(n);
      function n() {
        var e;
        return r(this, n), ((e = t.call(this)).retry = 2), e;
      }
      return (
        i(n, [
          {
            key: "request",
            value: function (e) {
              return (
                this._checkOptions(e),
                this._initOptions(e),
                this._requestWithRetry({
                  url: e.url,
                  data: e.data,
                  method: e.method,
                })
              );
            },
          },
          {
            key: "_requestWithRetry",
            value: function (e) {
              var t = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              return _s(e).catch(function (r) {
                return t.retry && n < t.retry
                  ? t._requestWithRetry(e, ++n)
                  : Hr(
                      new ht({ code: r.code || "", message: r.message || "" })
                    );
              });
            },
          },
        ]),
        n
      );
    })(Is),
    Ms = [],
    Es = [],
    Ss = "undefined" != typeof Uint8Array ? Uint8Array : Array,
    Ts = !1;
  function Ds() {
    Ts = !0;
    for (
      var e =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        t = 0,
        n = e.length;
      t < n;
      ++t
    )
      (Ms[t] = e[t]), (Es[e.charCodeAt(t)] = t);
    (Es["-".charCodeAt(0)] = 62), (Es["_".charCodeAt(0)] = 63);
  }
  function ks(e, t, n) {
    for (var r, o, i = [], s = t; s < n; s += 3)
      (r = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2]),
        i.push(
          Ms[((o = r) >> 18) & 63] +
            Ms[(o >> 12) & 63] +
            Ms[(o >> 6) & 63] +
            Ms[63 & o]
        );
    return i.join("");
  }
  function As(e) {
    var t;
    Ts || Ds();
    for (
      var n = e.length, r = n % 3, o = "", i = [], s = 0, a = n - r;
      s < a;
      s += 16383
    )
      i.push(ks(e, s, s + 16383 > a ? a : s + 16383));
    return (
      1 === r
        ? ((t = e[n - 1]),
          (o += Ms[t >> 2]),
          (o += Ms[(t << 4) & 63]),
          (o += "=="))
        : 2 === r &&
          ((t = (e[n - 2] << 8) + e[n - 1]),
          (o += Ms[t >> 10]),
          (o += Ms[(t >> 4) & 63]),
          (o += Ms[(t << 2) & 63]),
          (o += "=")),
      i.push(o),
      i.join("")
    );
  }
  function Rs(e, t, n, r, o) {
    var i,
      s,
      a = 8 * o - r - 1,
      u = (1 << a) - 1,
      c = u >> 1,
      l = -7,
      p = n ? o - 1 : 0,
      h = n ? -1 : 1,
      d = e[t + p];
    for (
      p += h, i = d & ((1 << -l) - 1), d >>= -l, l += a;
      l > 0;
      i = 256 * i + e[t + p], p += h, l -= 8
    );
    for (
      s = i & ((1 << -l) - 1), i >>= -l, l += r;
      l > 0;
      s = 256 * s + e[t + p], p += h, l -= 8
    );
    if (0 === i) i = 1 - c;
    else {
      if (i === u) return s ? NaN : Infinity * (d ? -1 : 1);
      (s += Math.pow(2, r)), (i -= c);
    }
    return (d ? -1 : 1) * s * Math.pow(2, i - r);
  }
  function Os(e, t, n, r, o, i) {
    var s,
      a,
      u,
      c = 8 * i - o - 1,
      l = (1 << c) - 1,
      p = l >> 1,
      h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      d = r ? 0 : i - 1,
      f = r ? 1 : -1,
      g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
    for (
      t = Math.abs(t),
        isNaN(t) || Infinity === t
          ? ((a = isNaN(t) ? 1 : 0), (s = l))
          : ((s = Math.floor(Math.log(t) / Math.LN2)),
            t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
            (t += s + p >= 1 ? h / u : h * Math.pow(2, 1 - p)) * u >= 2 &&
              (s++, (u /= 2)),
            s + p >= l
              ? ((a = 0), (s = l))
              : s + p >= 1
              ? ((a = (t * u - 1) * Math.pow(2, o)), (s += p))
              : ((a = t * Math.pow(2, p - 1) * Math.pow(2, o)), (s = 0)));
      o >= 8;
      e[n + d] = 255 & a, d += f, a /= 256, o -= 8
    );
    for (
      s = (s << o) | a, c += o;
      c > 0;
      e[n + d] = 255 & s, d += f, s /= 256, c -= 8
    );
    e[n + d - f] |= 128 * g;
  }
  var Ns = {}.toString,
    ws =
      Array.isArray ||
      function (e) {
        return "[object Array]" == Ns.call(e);
      };
  function Ls() {
    return Gs.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }
  function Ps(e, t) {
    if (Ls() < t) throw new RangeError("Invalid typed array length");
    return (
      Gs.TYPED_ARRAY_SUPPORT
        ? ((e = new Uint8Array(t)).__proto__ = Gs.prototype)
        : (null === e && (e = new Gs(t)), (e.length = t)),
      e
    );
  }
  function Gs(e, t, n) {
    if (!(Gs.TYPED_ARRAY_SUPPORT || this instanceof Gs)) return new Gs(e, t, n);
    if ("number" == typeof e) {
      if ("string" == typeof t)
        throw new Error(
          "If encoding is specified then the first argument must be a string"
        );
      return qs(this, e);
    }
    return bs(this, e, t, n);
  }
  function bs(e, t, n, r) {
    if ("number" == typeof t)
      throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
      ? (function (e, t, n, r) {
          if ((t.byteLength, n < 0 || t.byteLength < n))
            throw new RangeError("'offset' is out of bounds");
          if (t.byteLength < n + (r || 0))
            throw new RangeError("'length' is out of bounds");
          t =
            void 0 === n && void 0 === r
              ? new Uint8Array(t)
              : void 0 === r
              ? new Uint8Array(t, n)
              : new Uint8Array(t, n, r);
          Gs.TYPED_ARRAY_SUPPORT
            ? ((e = t).__proto__ = Gs.prototype)
            : (e = xs(e, t));
          return e;
        })(e, t, n, r)
      : "string" == typeof t
      ? (function (e, t, n) {
          ("string" == typeof n && "" !== n) || (n = "utf8");
          if (!Gs.isEncoding(n))
            throw new TypeError('"encoding" must be a valid string encoding');
          var r = 0 | Ks(t, n),
            o = (e = Ps(e, r)).write(t, n);
          o !== r && (e = e.slice(0, o));
          return e;
        })(e, t, n)
      : (function (e, t) {
          if (Hs(t)) {
            var n = 0 | Fs(t.length);
            return 0 === (e = Ps(e, n)).length || t.copy(e, 0, 0, n), e;
          }
          if (t) {
            if (
              ("undefined" != typeof ArrayBuffer &&
                t.buffer instanceof ArrayBuffer) ||
              "length" in t
            )
              return "number" != typeof t.length || (r = t.length) != r
                ? Ps(e, 0)
                : xs(e, t);
            if ("Buffer" === t.type && ws(t.data)) return xs(e, t.data);
          }
          var r;
          throw new TypeError(
            "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
          );
        })(e, t);
  }
  function Us(e) {
    if ("number" != typeof e)
      throw new TypeError('"size" argument must be a number');
    if (e < 0) throw new RangeError('"size" argument must not be negative');
  }
  function qs(e, t) {
    if ((Us(t), (e = Ps(e, t < 0 ? 0 : 0 | Fs(t))), !Gs.TYPED_ARRAY_SUPPORT))
      for (var n = 0; n < t; ++n) e[n] = 0;
    return e;
  }
  function xs(e, t) {
    var n = t.length < 0 ? 0 : 0 | Fs(t.length);
    e = Ps(e, n);
    for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
    return e;
  }
  function Fs(e) {
    if (e >= Ls())
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          Ls().toString(16) +
          " bytes"
      );
    return 0 | e;
  }
  function Hs(e) {
    return !(null == e || !e._isBuffer);
  }
  function Ks(e, t) {
    if (Hs(e)) return e.length;
    if (
      "undefined" != typeof ArrayBuffer &&
      "function" == typeof ArrayBuffer.isView &&
      (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
    )
      return e.byteLength;
    "string" != typeof e && (e = "" + e);
    var n = e.length;
    if (0 === n) return 0;
    for (var r = !1; ; )
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
        case void 0:
          return fa(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * n;
        case "hex":
          return n >>> 1;
        case "base64":
          return ga(e).length;
        default:
          if (r) return fa(e).length;
          (t = ("" + t).toLowerCase()), (r = !0);
      }
  }
  function Bs(e, t, n) {
    var r = !1;
    if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
    if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
      return "";
    if ((n >>>= 0) <= (t >>>= 0)) return "";
    for (e || (e = "utf8"); ; )
      switch (e) {
        case "hex":
          return ra(this, t, n);
        case "utf8":
        case "utf-8":
          return ea(this, t, n);
        case "ascii":
          return ta(this, t, n);
        case "latin1":
        case "binary":
          return na(this, t, n);
        case "base64":
          return Zs(this, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return oa(this, t, n);
        default:
          if (r) throw new TypeError("Unknown encoding: " + e);
          (e = (e + "").toLowerCase()), (r = !0);
      }
  }
  function Vs(e, t, n) {
    var r = e[t];
    (e[t] = e[n]), (e[n] = r);
  }
  function js(e, t, n, r, o) {
    if (0 === e.length) return -1;
    if (
      ("string" == typeof n
        ? ((r = n), (n = 0))
        : n > 2147483647
        ? (n = 2147483647)
        : n < -2147483648 && (n = -2147483648),
      (n = +n),
      isNaN(n) && (n = o ? 0 : e.length - 1),
      n < 0 && (n = e.length + n),
      n >= e.length)
    ) {
      if (o) return -1;
      n = e.length - 1;
    } else if (n < 0) {
      if (!o) return -1;
      n = 0;
    }
    if (("string" == typeof t && (t = Gs.from(t, r)), Hs(t)))
      return 0 === t.length ? -1 : Ys(e, t, n, r, o);
    if ("number" == typeof t)
      return (
        (t &= 255),
        Gs.TYPED_ARRAY_SUPPORT &&
        "function" == typeof Uint8Array.prototype.indexOf
          ? o
            ? Uint8Array.prototype.indexOf.call(e, t, n)
            : Uint8Array.prototype.lastIndexOf.call(e, t, n)
          : Ys(e, [t], n, r, o)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function Ys(e, t, n, r, o) {
    var i,
      s = 1,
      a = e.length,
      u = t.length;
    if (
      void 0 !== r &&
      ("ucs2" === (r = String(r).toLowerCase()) ||
        "ucs-2" === r ||
        "utf16le" === r ||
        "utf-16le" === r)
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      (s = 2), (a /= 2), (u /= 2), (n /= 2);
    }
    function c(e, t) {
      return 1 === s ? e[t] : e.readUInt16BE(t * s);
    }
    if (o) {
      var l = -1;
      for (i = n; i < a; i++)
        if (c(e, i) === c(t, -1 === l ? 0 : i - l)) {
          if ((-1 === l && (l = i), i - l + 1 === u)) return l * s;
        } else -1 !== l && (i -= i - l), (l = -1);
    } else
      for (n + u > a && (n = a - u), i = n; i >= 0; i--) {
        for (var p = !0, h = 0; h < u; h++)
          if (c(e, i + h) !== c(t, h)) {
            p = !1;
            break;
          }
        if (p) return i;
      }
    return -1;
  }
  function $s(e, t, n, r) {
    n = Number(n) || 0;
    var o = e.length - n;
    r ? (r = Number(r)) > o && (r = o) : (r = o);
    var i = t.length;
    if (i % 2 != 0) throw new TypeError("Invalid hex string");
    r > i / 2 && (r = i / 2);
    for (var s = 0; s < r; ++s) {
      var a = parseInt(t.substr(2 * s, 2), 16);
      if (isNaN(a)) return s;
      e[n + s] = a;
    }
    return s;
  }
  function Ws(e, t, n, r) {
    return ma(fa(t, e.length - n), e, n, r);
  }
  function zs(e, t, n, r) {
    return ma(
      (function (e) {
        for (var t = [], n = 0; n < e.length; ++n)
          t.push(255 & e.charCodeAt(n));
        return t;
      })(t),
      e,
      n,
      r
    );
  }
  function Xs(e, t, n, r) {
    return zs(e, t, n, r);
  }
  function Js(e, t, n, r) {
    return ma(ga(t), e, n, r);
  }
  function Qs(e, t, n, r) {
    return ma(
      (function (e, t) {
        for (var n, r, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
          (n = e.charCodeAt(s)),
            (r = n >> 8),
            (o = n % 256),
            i.push(o),
            i.push(r);
        return i;
      })(t, e.length - n),
      e,
      n,
      r
    );
  }
  function Zs(e, t, n) {
    return 0 === t && n === e.length ? As(e) : As(e.slice(t, n));
  }
  function ea(e, t, n) {
    n = Math.min(e.length, n);
    for (var r = [], o = t; o < n; ) {
      var i,
        s,
        a,
        u,
        c = e[o],
        l = null,
        p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
      if (o + p <= n)
        switch (p) {
          case 1:
            c < 128 && (l = c);
            break;
          case 2:
            128 == (192 & (i = e[o + 1])) &&
              (u = ((31 & c) << 6) | (63 & i)) > 127 &&
              (l = u);
            break;
          case 3:
            (i = e[o + 1]),
              (s = e[o + 2]),
              128 == (192 & i) &&
                128 == (192 & s) &&
                (u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & s)) > 2047 &&
                (u < 55296 || u > 57343) &&
                (l = u);
            break;
          case 4:
            (i = e[o + 1]),
              (s = e[o + 2]),
              (a = e[o + 3]),
              128 == (192 & i) &&
                128 == (192 & s) &&
                128 == (192 & a) &&
                (u =
                  ((15 & c) << 18) |
                  ((63 & i) << 12) |
                  ((63 & s) << 6) |
                  (63 & a)) > 65535 &&
                u < 1114112 &&
                (l = u);
        }
      null === l
        ? ((l = 65533), (p = 1))
        : l > 65535 &&
          ((l -= 65536),
          r.push(((l >>> 10) & 1023) | 55296),
          (l = 56320 | (1023 & l))),
        r.push(l),
        (o += p);
    }
    return (function (e) {
      var t = e.length;
      if (t <= 4096) return String.fromCharCode.apply(String, e);
      var n = "",
        r = 0;
      for (; r < t; )
        n += String.fromCharCode.apply(String, e.slice(r, (r += 4096)));
      return n;
    })(r);
  }
  (Gs.TYPED_ARRAY_SUPPORT =
    void 0 === B.TYPED_ARRAY_SUPPORT || B.TYPED_ARRAY_SUPPORT),
    (Gs.poolSize = 8192),
    (Gs._augment = function (e) {
      return (e.__proto__ = Gs.prototype), e;
    }),
    (Gs.from = function (e, t, n) {
      return bs(null, e, t, n);
    }),
    Gs.TYPED_ARRAY_SUPPORT &&
      ((Gs.prototype.__proto__ = Uint8Array.prototype),
      (Gs.__proto__ = Uint8Array)),
    (Gs.alloc = function (e, t, n) {
      return (function (e, t, n, r) {
        return (
          Us(t),
          t <= 0
            ? Ps(e, t)
            : void 0 !== n
            ? "string" == typeof r
              ? Ps(e, t).fill(n, r)
              : Ps(e, t).fill(n)
            : Ps(e, t)
        );
      })(null, e, t, n);
    }),
    (Gs.allocUnsafe = function (e) {
      return qs(null, e);
    }),
    (Gs.allocUnsafeSlow = function (e) {
      return qs(null, e);
    }),
    (Gs.isBuffer = function (e) {
      return (
        null != e &&
        (!!e._isBuffer ||
          ya(e) ||
          (function (e) {
            return (
              "function" == typeof e.readFloatLE &&
              "function" == typeof e.slice &&
              ya(e.slice(0, 0))
            );
          })(e))
      );
    }),
    (Gs.compare = function (e, t) {
      if (!Hs(e) || !Hs(t)) throw new TypeError("Arguments must be Buffers");
      if (e === t) return 0;
      for (
        var n = e.length, r = t.length, o = 0, i = Math.min(n, r);
        o < i;
        ++o
      )
        if (e[o] !== t[o]) {
          (n = e[o]), (r = t[o]);
          break;
        }
      return n < r ? -1 : r < n ? 1 : 0;
    }),
    (Gs.isEncoding = function (e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }),
    (Gs.concat = function (e, t) {
      if (!ws(e))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e.length) return Gs.alloc(0);
      var n;
      if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
      var r = Gs.allocUnsafe(t),
        o = 0;
      for (n = 0; n < e.length; ++n) {
        var i = e[n];
        if (!Hs(i))
          throw new TypeError('"list" argument must be an Array of Buffers');
        i.copy(r, o), (o += i.length);
      }
      return r;
    }),
    (Gs.byteLength = Ks),
    (Gs.prototype._isBuffer = !0),
    (Gs.prototype.swap16 = function () {
      var e = this.length;
      if (e % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var t = 0; t < e; t += 2) Vs(this, t, t + 1);
      return this;
    }),
    (Gs.prototype.swap32 = function () {
      var e = this.length;
      if (e % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var t = 0; t < e; t += 4) Vs(this, t, t + 3), Vs(this, t + 1, t + 2);
      return this;
    }),
    (Gs.prototype.swap64 = function () {
      var e = this.length;
      if (e % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var t = 0; t < e; t += 8)
        Vs(this, t, t + 7),
          Vs(this, t + 1, t + 6),
          Vs(this, t + 2, t + 5),
          Vs(this, t + 3, t + 4);
      return this;
    }),
    (Gs.prototype.toString = function () {
      var e = 0 | this.length;
      return 0 === e
        ? ""
        : 0 === arguments.length
        ? ea(this, 0, e)
        : Bs.apply(this, arguments);
    }),
    (Gs.prototype.equals = function (e) {
      if (!Hs(e)) throw new TypeError("Argument must be a Buffer");
      return this === e || 0 === Gs.compare(this, e);
    }),
    (Gs.prototype.inspect = function () {
      var e = "";
      return (
        this.length > 0 &&
          ((e = this.toString("hex", 0, 50).match(/.{2}/g).join(" ")),
          this.length > 50 && (e += " ... ")),
        "<Buffer " + e + ">"
      );
    }),
    (Gs.prototype.compare = function (e, t, n, r, o) {
      if (!Hs(e)) throw new TypeError("Argument must be a Buffer");
      if (
        (void 0 === t && (t = 0),
        void 0 === n && (n = e ? e.length : 0),
        void 0 === r && (r = 0),
        void 0 === o && (o = this.length),
        t < 0 || n > e.length || r < 0 || o > this.length)
      )
        throw new RangeError("out of range index");
      if (r >= o && t >= n) return 0;
      if (r >= o) return -1;
      if (t >= n) return 1;
      if (this === e) return 0;
      for (
        var i = (o >>>= 0) - (r >>>= 0),
          s = (n >>>= 0) - (t >>>= 0),
          a = Math.min(i, s),
          u = this.slice(r, o),
          c = e.slice(t, n),
          l = 0;
        l < a;
        ++l
      )
        if (u[l] !== c[l]) {
          (i = u[l]), (s = c[l]);
          break;
        }
      return i < s ? -1 : s < i ? 1 : 0;
    }),
    (Gs.prototype.includes = function (e, t, n) {
      return -1 !== this.indexOf(e, t, n);
    }),
    (Gs.prototype.indexOf = function (e, t, n) {
      return js(this, e, t, n, !0);
    }),
    (Gs.prototype.lastIndexOf = function (e, t, n) {
      return js(this, e, t, n, !1);
    }),
    (Gs.prototype.write = function (e, t, n, r) {
      if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
      else if (void 0 === n && "string" == typeof t)
        (r = t), (n = this.length), (t = 0);
      else {
        if (!isFinite(t))
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        (t |= 0),
          isFinite(n)
            ? ((n |= 0), void 0 === r && (r = "utf8"))
            : ((r = n), (n = void 0));
      }
      var o = this.length - t;
      if (
        ((void 0 === n || n > o) && (n = o),
        (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
      )
        throw new RangeError("Attempt to write outside buffer bounds");
      r || (r = "utf8");
      for (var i = !1; ; )
        switch (r) {
          case "hex":
            return $s(this, e, t, n);
          case "utf8":
          case "utf-8":
            return Ws(this, e, t, n);
          case "ascii":
            return zs(this, e, t, n);
          case "latin1":
          case "binary":
            return Xs(this, e, t, n);
          case "base64":
            return Js(this, e, t, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Qs(this, e, t, n);
          default:
            if (i) throw new TypeError("Unknown encoding: " + r);
            (r = ("" + r).toLowerCase()), (i = !0);
        }
    }),
    (Gs.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function ta(e, t, n) {
    var r = "";
    n = Math.min(e.length, n);
    for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
    return r;
  }
  function na(e, t, n) {
    var r = "";
    n = Math.min(e.length, n);
    for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
    return r;
  }
  function ra(e, t, n) {
    var r = e.length;
    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
    for (var o = "", i = t; i < n; ++i) o += da(e[i]);
    return o;
  }
  function oa(e, t, n) {
    for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2)
      o += String.fromCharCode(r[i] + 256 * r[i + 1]);
    return o;
  }
  function ia(e, t, n) {
    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > n)
      throw new RangeError("Trying to access beyond buffer length");
  }
  function sa(e, t, n, r, o, i) {
    if (!Hs(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > o || t < i)
      throw new RangeError('"value" argument is out of bounds');
    if (n + r > e.length) throw new RangeError("Index out of range");
  }
  function aa(e, t, n, r) {
    t < 0 && (t = 65535 + t + 1);
    for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o)
      e[n + o] = (t & (255 << (8 * (r ? o : 1 - o)))) >>> (8 * (r ? o : 1 - o));
  }
  function ua(e, t, n, r) {
    t < 0 && (t = 4294967295 + t + 1);
    for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o)
      e[n + o] = (t >>> (8 * (r ? o : 3 - o))) & 255;
  }
  function ca(e, t, n, r, o, i) {
    if (n + r > e.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("Index out of range");
  }
  function la(e, t, n, r, o) {
    return o || ca(e, 0, n, 4), Os(e, t, n, r, 23, 4), n + 4;
  }
  function pa(e, t, n, r, o) {
    return o || ca(e, 0, n, 8), Os(e, t, n, r, 52, 8), n + 8;
  }
  (Gs.prototype.slice = function (e, t) {
    var n,
      r = this.length;
    if (
      ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
      (t = void 0 === t ? r : ~~t) < 0
        ? (t += r) < 0 && (t = 0)
        : t > r && (t = r),
      t < e && (t = e),
      Gs.TYPED_ARRAY_SUPPORT)
    )
      (n = this.subarray(e, t)).__proto__ = Gs.prototype;
    else {
      var o = t - e;
      n = new Gs(o, void 0);
      for (var i = 0; i < o; ++i) n[i] = this[i + e];
    }
    return n;
  }),
    (Gs.prototype.readUIntLE = function (e, t, n) {
      (e |= 0), (t |= 0), n || ia(e, t, this.length);
      for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
        r += this[e + i] * o;
      return r;
    }),
    (Gs.prototype.readUIntBE = function (e, t, n) {
      (e |= 0), (t |= 0), n || ia(e, t, this.length);
      for (var r = this[e + --t], o = 1; t > 0 && (o *= 256); )
        r += this[e + --t] * o;
      return r;
    }),
    (Gs.prototype.readUInt8 = function (e, t) {
      return t || ia(e, 1, this.length), this[e];
    }),
    (Gs.prototype.readUInt16LE = function (e, t) {
      return t || ia(e, 2, this.length), this[e] | (this[e + 1] << 8);
    }),
    (Gs.prototype.readUInt16BE = function (e, t) {
      return t || ia(e, 2, this.length), (this[e] << 8) | this[e + 1];
    }),
    (Gs.prototype.readUInt32LE = function (e, t) {
      return (
        t || ia(e, 4, this.length),
        (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
          16777216 * this[e + 3]
      );
    }),
    (Gs.prototype.readUInt32BE = function (e, t) {
      return (
        t || ia(e, 4, this.length),
        16777216 * this[e] +
          ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
      );
    }),
    (Gs.prototype.readIntLE = function (e, t, n) {
      (e |= 0), (t |= 0), n || ia(e, t, this.length);
      for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
        r += this[e + i] * o;
      return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r;
    }),
    (Gs.prototype.readIntBE = function (e, t, n) {
      (e |= 0), (t |= 0), n || ia(e, t, this.length);
      for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256); )
        i += this[e + --r] * o;
      return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
    }),
    (Gs.prototype.readInt8 = function (e, t) {
      return (
        t || ia(e, 1, this.length),
        128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
      );
    }),
    (Gs.prototype.readInt16LE = function (e, t) {
      t || ia(e, 2, this.length);
      var n = this[e] | (this[e + 1] << 8);
      return 32768 & n ? 4294901760 | n : n;
    }),
    (Gs.prototype.readInt16BE = function (e, t) {
      t || ia(e, 2, this.length);
      var n = this[e + 1] | (this[e] << 8);
      return 32768 & n ? 4294901760 | n : n;
    }),
    (Gs.prototype.readInt32LE = function (e, t) {
      return (
        t || ia(e, 4, this.length),
        this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
      );
    }),
    (Gs.prototype.readInt32BE = function (e, t) {
      return (
        t || ia(e, 4, this.length),
        (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
      );
    }),
    (Gs.prototype.readFloatLE = function (e, t) {
      return t || ia(e, 4, this.length), Rs(this, e, !0, 23, 4);
    }),
    (Gs.prototype.readFloatBE = function (e, t) {
      return t || ia(e, 4, this.length), Rs(this, e, !1, 23, 4);
    }),
    (Gs.prototype.readDoubleLE = function (e, t) {
      return t || ia(e, 8, this.length), Rs(this, e, !0, 52, 8);
    }),
    (Gs.prototype.readDoubleBE = function (e, t) {
      return t || ia(e, 8, this.length), Rs(this, e, !1, 52, 8);
    }),
    (Gs.prototype.writeUIntLE = function (e, t, n, r) {
      ((e = +e), (t |= 0), (n |= 0), r) ||
        sa(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var o = 1,
        i = 0;
      for (this[t] = 255 & e; ++i < n && (o *= 256); )
        this[t + i] = (e / o) & 255;
      return t + n;
    }),
    (Gs.prototype.writeUIntBE = function (e, t, n, r) {
      ((e = +e), (t |= 0), (n |= 0), r) ||
        sa(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var o = n - 1,
        i = 1;
      for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
        this[t + o] = (e / i) & 255;
      return t + n;
    }),
    (Gs.prototype.writeUInt8 = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || sa(this, e, t, 1, 255, 0),
        Gs.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
        (this[t] = 255 & e),
        t + 1
      );
    }),
    (Gs.prototype.writeUInt16LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || sa(this, e, t, 2, 65535, 0),
        Gs.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : aa(this, e, t, !0),
        t + 2
      );
    }),
    (Gs.prototype.writeUInt16BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || sa(this, e, t, 2, 65535, 0),
        Gs.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : aa(this, e, t, !1),
        t + 2
      );
    }),
    (Gs.prototype.writeUInt32LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || sa(this, e, t, 4, 4294967295, 0),
        Gs.TYPED_ARRAY_SUPPORT
          ? ((this[t + 3] = e >>> 24),
            (this[t + 2] = e >>> 16),
            (this[t + 1] = e >>> 8),
            (this[t] = 255 & e))
          : ua(this, e, t, !0),
        t + 4
      );
    }),
    (Gs.prototype.writeUInt32BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || sa(this, e, t, 4, 4294967295, 0),
        Gs.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e))
          : ua(this, e, t, !1),
        t + 4
      );
    }),
    (Gs.prototype.writeIntLE = function (e, t, n, r) {
      if (((e = +e), (t |= 0), !r)) {
        var o = Math.pow(2, 8 * n - 1);
        sa(this, e, t, n, o - 1, -o);
      }
      var i = 0,
        s = 1,
        a = 0;
      for (this[t] = 255 & e; ++i < n && (s *= 256); )
        e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1),
          (this[t + i] = (((e / s) >> 0) - a) & 255);
      return t + n;
    }),
    (Gs.prototype.writeIntBE = function (e, t, n, r) {
      if (((e = +e), (t |= 0), !r)) {
        var o = Math.pow(2, 8 * n - 1);
        sa(this, e, t, n, o - 1, -o);
      }
      var i = n - 1,
        s = 1,
        a = 0;
      for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
        e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1),
          (this[t + i] = (((e / s) >> 0) - a) & 255);
      return t + n;
    }),
    (Gs.prototype.writeInt8 = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || sa(this, e, t, 1, 127, -128),
        Gs.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
        e < 0 && (e = 255 + e + 1),
        (this[t] = 255 & e),
        t + 1
      );
    }),
    (Gs.prototype.writeInt16LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || sa(this, e, t, 2, 32767, -32768),
        Gs.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
          : aa(this, e, t, !0),
        t + 2
      );
    }),
    (Gs.prototype.writeInt16BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || sa(this, e, t, 2, 32767, -32768),
        Gs.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
          : aa(this, e, t, !1),
        t + 2
      );
    }),
    (Gs.prototype.writeInt32LE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || sa(this, e, t, 4, 2147483647, -2147483648),
        Gs.TYPED_ARRAY_SUPPORT
          ? ((this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24))
          : ua(this, e, t, !0),
        t + 4
      );
    }),
    (Gs.prototype.writeInt32BE = function (e, t, n) {
      return (
        (e = +e),
        (t |= 0),
        n || sa(this, e, t, 4, 2147483647, -2147483648),
        e < 0 && (e = 4294967295 + e + 1),
        Gs.TYPED_ARRAY_SUPPORT
          ? ((this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e))
          : ua(this, e, t, !1),
        t + 4
      );
    }),
    (Gs.prototype.writeFloatLE = function (e, t, n) {
      return la(this, e, t, !0, n);
    }),
    (Gs.prototype.writeFloatBE = function (e, t, n) {
      return la(this, e, t, !1, n);
    }),
    (Gs.prototype.writeDoubleLE = function (e, t, n) {
      return pa(this, e, t, !0, n);
    }),
    (Gs.prototype.writeDoubleBE = function (e, t, n) {
      return pa(this, e, t, !1, n);
    }),
    (Gs.prototype.copy = function (e, t, n, r) {
      if (
        (n || (n = 0),
        r || 0 === r || (r = this.length),
        t >= e.length && (t = e.length),
        t || (t = 0),
        r > 0 && r < n && (r = n),
        r === n)
      )
        return 0;
      if (0 === e.length || 0 === this.length) return 0;
      if (t < 0) throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (r < 0) throw new RangeError("sourceEnd out of bounds");
      r > this.length && (r = this.length),
        e.length - t < r - n && (r = e.length - t + n);
      var o,
        i = r - n;
      if (this === e && n < t && t < r)
        for (o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
      else if (i < 1e3 || !Gs.TYPED_ARRAY_SUPPORT)
        for (o = 0; o < i; ++o) e[o + t] = this[o + n];
      else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
      return i;
    }),
    (Gs.prototype.fill = function (e, t, n, r) {
      if ("string" == typeof e) {
        if (
          ("string" == typeof t
            ? ((r = t), (t = 0), (n = this.length))
            : "string" == typeof n && ((r = n), (n = this.length)),
          1 === e.length)
        ) {
          var o = e.charCodeAt(0);
          o < 256 && (e = o);
        }
        if (void 0 !== r && "string" != typeof r)
          throw new TypeError("encoding must be a string");
        if ("string" == typeof r && !Gs.isEncoding(r))
          throw new TypeError("Unknown encoding: " + r);
      } else "number" == typeof e && (e &= 255);
      if (t < 0 || this.length < t || this.length < n)
        throw new RangeError("Out of range index");
      if (n <= t) return this;
      var i;
      if (
        ((t >>>= 0),
        (n = void 0 === n ? this.length : n >>> 0),
        e || (e = 0),
        "number" == typeof e)
      )
        for (i = t; i < n; ++i) this[i] = e;
      else {
        var s = Hs(e) ? e : fa(new Gs(e, r).toString()),
          a = s.length;
        for (i = 0; i < n - t; ++i) this[i + t] = s[i % a];
      }
      return this;
    });
  var ha = /[^+\/0-9A-Za-z-_]/g;
  function da(e) {
    return e < 16 ? "0" + e.toString(16) : e.toString(16);
  }
  function fa(e, t) {
    var n;
    t = t || Infinity;
    for (var r = e.length, o = null, i = [], s = 0; s < r; ++s) {
      if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
        if (!o) {
          if (n > 56319) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue;
          }
          if (s + 1 === r) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue;
          }
          o = n;
          continue;
        }
        if (n < 56320) {
          (t -= 3) > -1 && i.push(239, 191, 189), (o = n);
          continue;
        }
        n = 65536 + (((o - 55296) << 10) | (n - 56320));
      } else o && (t -= 3) > -1 && i.push(239, 191, 189);
      if (((o = null), n < 128)) {
        if ((t -= 1) < 0) break;
        i.push(n);
      } else if (n < 2048) {
        if ((t -= 2) < 0) break;
        i.push((n >> 6) | 192, (63 & n) | 128);
      } else if (n < 65536) {
        if ((t -= 3) < 0) break;
        i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
      } else {
        if (!(n < 1114112)) throw new Error("Invalid code point");
        if ((t -= 4) < 0) break;
        i.push(
          (n >> 18) | 240,
          ((n >> 12) & 63) | 128,
          ((n >> 6) & 63) | 128,
          (63 & n) | 128
        );
      }
    }
    return i;
  }
  function ga(e) {
    return (function (e) {
      var t, n, r, o, i, s;
      Ts || Ds();
      var a = e.length;
      if (a % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      (i = "=" === e[a - 2] ? 2 : "=" === e[a - 1] ? 1 : 0),
        (s = new Ss((3 * a) / 4 - i)),
        (r = i > 0 ? a - 4 : a);
      var u = 0;
      for (t = 0, n = 0; t < r; t += 4, n += 3)
        (o =
          (Es[e.charCodeAt(t)] << 18) |
          (Es[e.charCodeAt(t + 1)] << 12) |
          (Es[e.charCodeAt(t + 2)] << 6) |
          Es[e.charCodeAt(t + 3)]),
          (s[u++] = (o >> 16) & 255),
          (s[u++] = (o >> 8) & 255),
          (s[u++] = 255 & o);
      return (
        2 === i
          ? ((o = (Es[e.charCodeAt(t)] << 2) | (Es[e.charCodeAt(t + 1)] >> 4)),
            (s[u++] = 255 & o))
          : 1 === i &&
            ((o =
              (Es[e.charCodeAt(t)] << 10) |
              (Es[e.charCodeAt(t + 1)] << 4) |
              (Es[e.charCodeAt(t + 2)] >> 2)),
            (s[u++] = (o >> 8) & 255),
            (s[u++] = 255 & o)),
        s
      );
    })(
      (function (e) {
        if (
          (e = (function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
          })(e).replace(ha, "")).length < 2
        )
          return "";
        for (; e.length % 4 != 0; ) e += "=";
        return e;
      })(e)
    );
  }
  function ma(e, t, n, r) {
    for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o)
      t[o + n] = e[o];
    return o;
  }
  function ya(e) {
    return (
      !!e.constructor &&
      "function" == typeof e.constructor.isBuffer &&
      e.constructor.isBuffer(e)
    );
  }
  var va = (function (e) {
      c(n, e);
      var t = y(n);
      function n() {
        var e;
        return (
          r(this, n),
          ((e = t.call(this)).retry = 2),
          (e._request = e.promisify(wx.request)),
          e
        );
      }
      return (
        i(n, [
          {
            key: "request",
            value: function (e) {
              return (
                this._checkOptions(e),
                this._initOptions(e),
                (e = u(u({}, e), {}, { responseType: "text" })),
                this._requestWithRetry(e)
              );
            },
          },
          {
            key: "_requestWithRetry",
            value: function (e) {
              var t = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              return this._request(e)
                .then(this._handleResolve)
                .catch(function (r) {
                  if (ee(r.errMsg)) {
                    if (r.errMsg.includes("abort")) return Fr({});
                    if (r.errMsg.includes("timeout"))
                      return t.retry > 0 && n < t.retry
                        ? t._requestWithRetry(e, ++n)
                        : Hr(
                            new ht({
                              code: dt.NETWORK_TIMEOUT,
                              message: r.errMsg,
                            })
                          );
                    if (r.errMsg.includes("fail"))
                      return t.retry > 0 && n < t.retry
                        ? t._requestWithRetry(e, ++n)
                        : Hr(
                            new ht({
                              code: dt.NETWORK_ERROR,
                              message: r.errMsg,
                            })
                          );
                  }
                  return Hr(
                    new ht(
                      u({ code: dt.UNCAUGHT_ERROR, message: r.message }, r)
                    )
                  );
                });
            },
          },
          {
            key: "_handleResolve",
            value: function (e) {
              var t = e.data,
                n = t.error_code,
                r = t.ErrorCode;
              return (
                "number" == typeof n && (r = n),
                r !== Pe.SUCCESS && (e.data.ErrorCode = Number("".concat(r))),
                e
              );
            },
          },
          {
            key: "promisify",
            value: function (e) {
              return function (t) {
                return new Promise(function (n, r) {
                  var o = e(Object.assign({}, t, { success: n, fail: r }));
                  t.updateAbort &&
                    t.updateAbort(function () {
                      o && se(o.abort) && o.abort();
                    });
                });
              };
            },
          },
        ]),
        n
      );
    })(Is),
    _a = (function () {
      function e() {
        r(this, e),
          (this.request = 0),
          (this.success = 0),
          (this.fail = 0),
          (this.reportRate = 10),
          (this.requestTimeCost = []);
      }
      return (
        i(e, [
          {
            key: "report",
            value: function () {
              if (1 !== this.request) {
                if (this.request % this.reportRate != 0) return null;
                var e = this.avgRequestTime(),
                  t = "runLoop reports: success="
                    .concat(this.success, ",fail=")
                    .concat(this.fail, ",total=")
                    .concat(this.request, ",avg=")
                    .concat(e, ",cur=")
                    .concat(
                      this.requestTimeCost[this.requestTimeCost.length - 1],
                      ",max="
                    )
                    .concat(Math.max.apply(null, this.requestTimeCost), ",min=")
                    .concat(Math.min.apply(null, this.requestTimeCost));
                J.log(t);
              }
            },
          },
          {
            key: "setRequestTime",
            value: function (e, t) {
              var n = Math.abs(t - e);
              100 === this.requestTimeCost.length &&
                this.requestTimeCost.shift(),
                this.requestTimeCost.push(n);
            },
          },
          {
            key: "avgRequestTime",
            value: function () {
              for (
                var e, t = this.requestTimeCost.length, n = 0, r = 0;
                r < t;
                r++
              )
                n += this.requestTimeCost[r];
              return (e = n / t), Math.round(100 * e) / 100;
            },
          },
        ]),
        e
      );
    })(),
    Ia = vs.create({
      timeout: 6e3,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
  Ia.interceptors.response.use(
    function (e) {
      var t = e.data,
        n = t.error_code,
        r = t.ErrorCode;
      return (
        Z(n) && (r = n), r !== Pe.SUCCESS && (e.data.ErrorCode = Number(r)), e
      );
    },
    function (e) {
      return (
        "Network Error" === e.message &&
          (!0 === Ia.defaults.withCredentials &&
            J.warn(
              "Network Error, try to close `IMAxiosAVChatroom.defaults.withCredentials` to false. (IMAxiosAVChatroom.js)"
            ),
          (Ia.defaults.withCredentials = !1)),
        Promise.reject(e)
      );
    }
  );
  var Ca = vs.CancelToken,
    Ma = (function () {
      function e(t) {
        r(this, e),
          this._initializeOptions(t),
          this._initializeMembers(),
          (this.status = new _a());
      }
      return (
        i(e, [
          {
            key: "destructor",
            value: function () {
              clearTimeout(this._seedID);
              var e = this._index();
              for (var t in this)
                Object.prototype.hasOwnProperty.call(this, t) &&
                  (this[t] = null);
              return e;
            },
          },
          {
            key: "setIndex",
            value: function (e) {
              this._index = e;
            },
          },
          {
            key: "getIndex",
            value: function () {
              return this._index;
            },
          },
          {
            key: "isRunning",
            value: function () {
              return !this._stoped;
            },
          },
          {
            key: "_initializeOptions",
            value: function (e) {
              this.options = e;
            },
          },
          {
            key: "_initializeMembers",
            value: function () {
              (this._index = -1),
                (this._seedID = 0),
                (this._requestStatus = !1),
                (this._stoped = !1),
                (this._intervalTime = 0),
                (this._intervalIncreaseStep = 1e3),
                (this._intervalDecreaseStep = 1e3),
                (this._intervalTimeMax = 5e3),
                (this._protectTimeout = 3e3),
                (this._getNoticeSeq = this.options.getNoticeSeq),
                (this._retryCount = 0),
                (this._responseTime = Date.now()),
                (this._responseTimeThreshold = 2e3),
                this.options.isAVChatRoomLoop
                  ? (this.requestor = Ia)
                  : (this.requestor = _s),
                J.log(
                  "XHRRunLoop._initializeMembers isAVChatRoomLoop=".concat(
                    !!this.options.isAVChatRoomLoop
                  )
                ),
                (this.abort = null);
            },
          },
          {
            key: "start",
            value: function () {
              0 === this._seedID
                ? ((this._stoped = !1), this._send())
                : J.log(
                    'XHRRunLoop.start(), XHRRunLoop is running now, if you want to restart runLoop , please run "stop()" first.'
                  );
            },
          },
          {
            key: "_reset",
            value: function () {
              J.log(
                "XHRRunLoop._reset(), reset long poll _intervalTime",
                this._intervalTime
              ),
                this.stop(),
                this.start();
            },
          },
          {
            key: "_intervalTimeIncrease",
            value: function () {
              this._intervalTime !== this._responseTimeThreshold &&
                (this._intervalTime < this._responseTimeThreshold &&
                  (this._intervalTime += this._intervalIncreaseStep),
                this._intervalTime > this._responseTimeThreshold &&
                  (this._intervalTime = this._responseTimeThreshold));
            },
          },
          {
            key: "_intervalTimeDecrease",
            value: function () {
              0 !== this._intervalTime &&
                (this._intervalTime > 0 &&
                  (this._intervalTime -= this._intervalDecreaseStep),
                this._intervalTime < 0 && (this._intervalTime = 0));
            },
          },
          {
            key: "_intervalTimeAdjustment",
            value: function () {
              var e = Date.now();
              100 * Math.floor((e - this._responseTime) / 100) <=
              this._responseTimeThreshold
                ? this._intervalTimeIncrease()
                : this._intervalTimeDecrease(),
                (this._responseTime = e);
            },
          },
          {
            key: "_intervalTimeAdjustmentBaseOnResponseData",
            value: function (e) {
              e.ErrorCode === Pe.SUCCESS
                ? this._intervalTimeDecrease()
                : this._intervalTimeIncrease();
            },
          },
          {
            key: "_send",
            value: function () {
              var e = this;
              if (!0 !== this._requestStatus) {
                (this._requestStatus = !0),
                  this.status.request++,
                  "function" == typeof this.options.before &&
                    this.options.before(this.options.pack.requestData);
                var t = Date.now(),
                  n = 0;
                this.requestor
                  .request({
                    url: this.options.pack.getUrl(),
                    data: this.options.pack.requestData,
                    method: this.options.pack.method,
                    cancelToken: new Ca(function (t) {
                      e.abort = t;
                    }),
                  })
                  .then(function (r) {
                    if (
                      (e._intervalTimeAdjustmentBaseOnResponseData.bind(e)(
                        r.data
                      ),
                      e._retryCount > 0 && (e._retryCount = 0),
                      e.status.success++,
                      (n = Date.now()),
                      e.status.setRequestTime(t, n),
                      (r.data.timecost = n - t),
                      "function" == typeof e.options.success)
                    )
                      try {
                        e.options.success({
                          pack: e.options.pack,
                          error: !1,
                          data: e.options.pack.callback(r.data),
                        });
                      } catch (o) {
                        J.warn("XHRRunLoop._send(), error:", o);
                      }
                    (e._requestStatus = !1),
                      !1 === e._stoped &&
                        (e._seedID = setTimeout(
                          e._send.bind(e),
                          e._intervalTime
                        )),
                      e.status.report();
                  })
                  .catch(function (r) {
                    if (
                      (e.status.fail++,
                      e._retryCount++,
                      e._intervalTimeAdjustment.bind(e)(),
                      !1 === e._stoped &&
                        (e._seedID = setTimeout(
                          e._send.bind(e),
                          e._intervalTime
                        )),
                      (e._requestStatus = !1),
                      "function" == typeof e.options.fail &&
                        void 0 !== r.request)
                    )
                      try {
                        e.options.fail({
                          pack: e.options.pack,
                          error: r,
                          data: !1,
                        });
                      } catch (o) {
                        J.warn("XHRRunLoop._send(), fail callback error:", o),
                          J.error(o);
                      }
                    (n = Date.now()),
                      e.status.setRequestTime(t, n),
                      e.status.report();
                  });
              }
            },
          },
          {
            key: "stop",
            value: function () {
              this._clearAllTimeOut(), (this._stoped = !0);
            },
          },
          {
            key: "_clearAllTimeOut",
            value: function () {
              clearTimeout(this._seedID), (this._seedID = 0);
            },
          },
        ]),
        e
      );
    })(),
    Ea = (function () {
      function e(t) {
        r(this, e),
          this._initializeOptions(t),
          this._initializeMembers(),
          (this.status = new _a());
      }
      return (
        i(e, [
          {
            key: "destructor",
            value: function () {
              clearTimeout(this._seedID);
              var e = this._index();
              for (var t in this)
                Object.prototype.hasOwnProperty.call(this, t) &&
                  (this[t] = null);
              return e;
            },
          },
          {
            key: "setIndex",
            value: function (e) {
              this._index = e;
            },
          },
          {
            key: "isRunning",
            value: function () {
              return !this._stoped;
            },
          },
          {
            key: "getIndex",
            value: function () {
              return this._index;
            },
          },
          {
            key: "_initializeOptions",
            value: function (e) {
              this.options = e;
            },
          },
          {
            key: "_initializeMembers",
            value: function () {
              (this._index = -1),
                (this._seedID = 0),
                (this._requestStatus = !1),
                (this._stoped = !1),
                (this._intervalTime = 0),
                (this._intervalIncreaseStep = 1e3),
                (this._intervalDecreaseStep = 1e3),
                (this._intervalTimeMax = 5e3),
                (this._protectTimeout = 3e3),
                (this._getNoticeSeq = this.options.getNoticeSeq),
                (this._retryCount = 0),
                (this._responseTime = Date.now()),
                (this._responseTimeThreshold = 2e3),
                (this.requestor = new va()),
                (this.abort = null);
            },
          },
          {
            key: "start",
            value: function () {
              0 === this._seedID
                ? ((this._stoped = !1), this._send())
                : J.log(
                    'WXRunLoop.start(): WXRunLoop is running now, if you want to restart runLoop , please run "stop()" first.'
                  );
            },
          },
          {
            key: "_reset",
            value: function () {
              J.log(
                "WXRunLoop.reset(), long poll _intervalMaxRate",
                this._intervalMaxRate
              ),
                this.stop(),
                this.start();
            },
          },
          {
            key: "_intervalTimeIncrease",
            value: function () {
              this._intervalTime !== this._responseTimeThreshold &&
                (this._intervalTime < this._responseTimeThreshold &&
                  (this._intervalTime += this._intervalIncreaseStep),
                this._intervalTime > this._responseTimeThreshold &&
                  (this._intervalTime = this._responseTimeThreshold));
            },
          },
          {
            key: "_intervalTimeDecrease",
            value: function () {
              0 !== this._intervalTime &&
                (this._intervalTime > 0 &&
                  (this._intervalTime -= this._intervalDecreaseStep),
                this._intervalTime < 0 && (this._intervalTime = 0));
            },
          },
          {
            key: "_intervalTimeAdjustment",
            value: function () {
              var e = Date.now();
              100 * Math.floor((e - this._responseTime) / 100) <=
              this._responseTimeThreshold
                ? this._intervalTimeIncrease()
                : this._intervalTimeDecrease(),
                (this._responseTime = e);
            },
          },
          {
            key: "_intervalTimeAdjustmentBaseOnResponseData",
            value: function (e) {
              e.ErrorCode === Pe.SUCCESS
                ? this._intervalTimeDecrease()
                : this._intervalTimeIncrease();
            },
          },
          {
            key: "_send",
            value: function () {
              var e = this;
              if (!0 !== this._requestStatus) {
                var t = this;
                (this._requestStatus = !0),
                  this.status.request++,
                  "function" == typeof this.options.before &&
                    this.options.before(t.options.pack.requestData);
                var n = Date.now(),
                  r = 0;
                this.requestor
                  .request({
                    url: t.options.pack.getUrl(),
                    data: t.options.pack.requestData,
                    method: t.options.pack.method,
                    updateAbort: function (t) {
                      e.abort = t;
                    },
                  })
                  .then(function (o) {
                    if (
                      (t._intervalTimeAdjustmentBaseOnResponseData.bind(e)(
                        o.data
                      ),
                      t._retryCount > 0 && (t._retryCount = 0),
                      e.status.success++,
                      (r = Date.now()),
                      e.status.setRequestTime(n, r),
                      (o.data.timecost = r - n),
                      "function" == typeof t.options.success)
                    )
                      try {
                        e.options.success({
                          pack: e.options.pack,
                          error: !1,
                          data: e.options.pack.callback(o.data),
                        });
                      } catch (i) {
                        J.warn("WXRunLoop._send(), error:", i);
                      }
                    (t._requestStatus = !1),
                      !1 === t._stoped &&
                        (t._seedID = setTimeout(
                          t._send.bind(t),
                          t._intervalTime
                        )),
                      e.status.report();
                  })
                  .catch(function (o) {
                    if (
                      (e.status.fail++,
                      t._retryCount++,
                      t._intervalTimeAdjustment.bind(e)(),
                      !1 === t._stoped &&
                        (t._seedID = setTimeout(
                          t._send.bind(t),
                          t._intervalTime
                        )),
                      (t._requestStatus = !1),
                      "function" == typeof t.options.fail)
                    )
                      try {
                        e.options.fail({
                          pack: e.options.pack,
                          error: o,
                          data: !1,
                        });
                      } catch (i) {
                        J.warn("WXRunLoop._send(), fail callback error:", i),
                          J.error(i);
                      }
                    (r = Date.now()),
                      e.status.setRequestTime(n, r),
                      e.status.report();
                  });
              }
            },
          },
          {
            key: "stop",
            value: function () {
              this._clearAllTimeOut(), (this._stoped = !0);
            },
          },
          {
            key: "_clearAllTimeOut",
            value: function () {
              clearTimeout(this._seedID), (this._seedID = 0);
            },
          },
        ]),
        e
      );
    })(),
    Sa = (function () {
      function e(t) {
        r(this, e),
          (this.tim = t),
          (this.httpConnection = N ? new va() : new Cs()),
          (this.keepAliveConnections = []);
      }
      return (
        i(e, [
          {
            key: "initializeListener",
            value: function () {
              this.tim.innerEmitter.on(yr, this._stopAllRunLoop, this);
            },
          },
          {
            key: "request",
            value: function (e) {
              var t = {
                url: e.url,
                data: e.requestData,
                method: e.method,
                callback: e.callback,
              };
              return this.httpConnection.request(t).then(function (t) {
                return (
                  (t.data = e.callback(t.data)),
                  t.data.errorCode !== Pe.SUCCESS
                    ? Hr(
                        new ht({
                          code: t.data.errorCode,
                          message: t.data.errorInfo,
                        })
                      )
                    : t
                );
              });
            },
          },
          {
            key: "createRunLoop",
            value: function (e) {
              var t = this.createKeepAliveConnection(e);
              return t.setIndex(this.keepAliveConnections.push(t) - 1), t;
            },
          },
          {
            key: "stopRunLoop",
            value: function (e) {
              e.stop();
            },
          },
          {
            key: "_stopAllRunLoop",
            value: function () {
              for (var e = this.keepAliveConnections.length, t = 0; t < e; t++)
                this.keepAliveConnections[t].stop();
            },
          },
          {
            key: "destroyRunLoop",
            value: function (e) {
              e.stop();
              var t = e.destructor();
              this.keepAliveConnections.slice(t, 1);
            },
          },
          {
            key: "startRunLoopExclusive",
            value: function (e) {
              for (
                var t = e.getIndex(), n = 0;
                n < this.keepAliveConnections.length;
                n++
              )
                n !== t && this.keepAliveConnections[n].stop();
              e.start();
            },
          },
          {
            key: "createKeepAliveConnection",
            value: function (e) {
              return N
                ? new Ea(e)
                : (this.tim.options.runLoopNetType === Je ||
                    this.tim.options.runLoopNetType,
                  new Ma(e));
            },
          },
          {
            key: "clearAll",
            value: function () {
              this.conn.cancelAll();
            },
          },
          {
            key: "reset",
            value: function () {
              this.keepAliveConnections = [];
            },
          },
        ]),
        e
      );
    })(),
    Ta = (function () {
      function t(e) {
        r(this, t),
          (this.tim = e),
          this.tim.innerEmitter.on(Ir, this._onErrorDetected, this);
      }
      return (
        i(t, [
          {
            key: "_onErrorDetected",
            value: function (t) {
              var n = t.data,
                r = new ro();
              r.setMethod(ui).setStart(),
                r
                  .setCode(0)
                  .setText(
                    "code=".concat(n.code, " message=").concat(n.message)
                  )
                  .setNetworkType(this.tim.netMonitor.getNetworkType())
                  .setEnd(),
                n.code
                  ? J.warn(
                      "Oops! code:"
                        .concat(n.code, " message:")
                        .concat(n.message)
                    )
                  : J.warn(
                      "Oops! message:"
                        .concat(n.message, " stack:")
                        .concat(n.stack)
                    ),
                this.tim.outerEmitter.emit(e.ERROR, n);
            },
          },
        ]),
        t
      );
    })(),
    Da = (function () {
      function e(n) {
        var o = this;
        r(this, e),
          Oe(n) ||
            ((this.userID = n.userID || ""),
            (this.nick = n.nick || ""),
            (this.gender = n.gender || ""),
            (this.birthday = n.birthday || 0),
            (this.location = n.location || ""),
            (this.selfSignature = n.selfSignature || ""),
            (this.allowType = n.allowType || t.ALLOW_TYPE_ALLOW_ANY),
            (this.language = n.language || 0),
            (this.avatar = n.avatar || ""),
            (this.messageSettings = n.messageSettings || 0),
            (this.adminForbidType = n.adminForbidType || t.FORBID_TYPE_NONE),
            (this.level = n.level || 0),
            (this.role = n.role || 0),
            (this.lastUpdatedTime = 0),
            (this.profileCustomField = []),
            Oe(n.profileCustomField) ||
              n.profileCustomField.forEach(function (e) {
                o.profileCustomField.push({ key: e.key, value: e.value });
              }));
      }
      return (
        i(e, [
          {
            key: "validate",
            value: function (e) {
              var t = !0,
                n = "";
              if (Oe(e)) return { valid: !1, tips: "empty options" };
              if (e.profileCustomField)
                for (
                  var r = e.profileCustomField.length, o = null, i = 0;
                  i < r;
                  i++
                ) {
                  if (
                    ((o = e.profileCustomField[i]),
                    !ee(o.key) || -1 === o.key.indexOf("Tag_Profile_Custom"))
                  )
                    return {
                      valid: !1,
                      tips: "自定义资料字段的前缀必须是 Tag_Profile_Custom",
                    };
                  if (!ee(o.value))
                    return {
                      valid: !1,
                      tips: "自定义资料字段的 value 必须是字符串",
                    };
                }
              for (var s in e)
                if (Object.prototype.hasOwnProperty.call(e, s)) {
                  if ("profileCustomField" === s) continue;
                  if (Oe(e[s]) && !ee(e[s]) && !Z(e[s])) {
                    (n = "key:" + s + ", invalid value:" + e[s]), (t = !1);
                    continue;
                  }
                  switch (s) {
                    case "nick":
                      ee(e[s]) || ((n = "nick should be a string"), (t = !1)),
                        ge(e[s]) > 500 &&
                          ((n = "nick name limited: must less than or equal to "
                            .concat(500, " bytes, current size: ")
                            .concat(ge(e[s]), " bytes")),
                          (t = !1));
                      break;
                    case "gender":
                      _e(tt, e.gender) ||
                        ((n = "key:gender, invalid value:" + e.gender),
                        (t = !1));
                      break;
                    case "birthday":
                      Z(e.birthday) ||
                        ((n = "birthday should be a number"), (t = !1));
                      break;
                    case "location":
                      ee(e.location) ||
                        ((n = "location should be a string"), (t = !1));
                      break;
                    case "selfSignature":
                      ee(e.selfSignature) ||
                        ((n = "selfSignature should be a string"), (t = !1));
                      break;
                    case "allowType":
                      _e(rt, e.allowType) ||
                        ((n = "key:allowType, invalid value:" + e.allowType),
                        (t = !1));
                      break;
                    case "language":
                      Z(e.language) ||
                        ((n = "language should be a number"), (t = !1));
                      break;
                    case "avatar":
                      ee(e.avatar) ||
                        ((n = "avatar should be a string"), (t = !1));
                      break;
                    case "messageSettings":
                      0 !== e.messageSettings &&
                        1 !== e.messageSettings &&
                        ((n = "messageSettings should be 0 or 1"), (t = !1));
                      break;
                    case "adminForbidType":
                      _e(nt, e.adminForbidType) ||
                        ((n =
                          "key:adminForbidType, invalid value:" +
                          e.adminForbidType),
                        (t = !1));
                      break;
                    case "level":
                      Z(e.level) ||
                        ((n = "level should be a number"), (t = !1));
                      break;
                    case "role":
                      Z(e.role) || ((n = "role should be a number"), (t = !1));
                      break;
                    default:
                      (n = "unknown key:" + s + "  " + e[s]), (t = !1);
                  }
                }
              return { valid: t, tips: n };
            },
          },
        ]),
        e
      );
    })(),
    ka = (function () {
      function t(e) {
        r(this, t),
          (this.userController = e),
          (this.TAG = "profile"),
          (this.Actions = { Q: "query", U: "update" }),
          (this.accountProfileMap = new Map()),
          (this.expirationTime = 864e5);
      }
      return (
        i(t, [
          {
            key: "setExpirationTime",
            value: function (e) {
              this.expirationTime = e;
            },
          },
          {
            key: "getUserProfile",
            value: function (e) {
              var t = this,
                n = e.userIDList;
              (e.fromAccount = this.userController.getMyAccount()),
                n.length > 100 &&
                  (J.warn(
                    "ProfileHandler.getUserProfile 获取用户资料人数不能超过100人"
                  ),
                  (n.length = 100));
              for (var r, o = [], i = [], s = 0, a = n.length; s < a; s++)
                (r = n[s]),
                  this.userController.isMyFriend(r) && this._containsAccount(r)
                    ? i.push(this._getProfileFromMap(r))
                    : o.push(r);
              if (0 === o.length) return Fr(i);
              e.toAccount = o;
              var u = e.bFromGetMyProfile || !1,
                c = [];
              e.toAccount.forEach(function (e) {
                c.push({
                  toAccount: e,
                  standardSequence: 0,
                  customSequence: 0,
                });
              }),
                (e.userItem = c);
              var l = new ro();
              l.setMethod(ti)
                .setText(
                  n.length > 5
                    ? "userIDList.length=".concat(n.length)
                    : "userIDList=".concat(n)
                )
                .setStart();
              var p = this.userController.generateConfig(
                this.TAG,
                this.Actions.Q,
                e
              );
              return this.userController
                .request(p)
                .then(function (e) {
                  l
                    .setCode(0)
                    .setNetworkType(t.userController.getNetworkType())
                    .setEnd(),
                    J.info("ProfileHandler.getUserProfile ok");
                  var n = t._handleResponse(e).concat(i);
                  return u
                    ? (t.userController.onGotMyProfile(), new Ur(n[0]))
                    : new Ur(n);
                })
                .catch(function (e) {
                  return (
                    t.userController.probeNetwork().then(function (t) {
                      var n = v(t, 2),
                        r = n[0],
                        o = n[1];
                      l.setError(e, r, o).setEnd();
                    }),
                    J.error("ProfileHandler.getUserProfile error:", e),
                    Hr(e)
                  );
                });
            },
          },
          {
            key: "getMyProfile",
            value: function () {
              var e = this.userController.getMyAccount();
              if (
                (J.log("ProfileHandler.getMyProfile myAccount=" + e),
                this._fillMap(),
                this._containsAccount(e))
              ) {
                var t = this._getProfileFromMap(e);
                return (
                  J.debug(
                    "ProfileHandler.getMyProfile from cache, myProfile:" +
                      JSON.stringify(t)
                  ),
                  this.userController.onGotMyProfile(),
                  Fr(t)
                );
              }
              return this.getUserProfile({
                fromAccount: e,
                userIDList: [e],
                bFromGetMyProfile: !0,
              });
            },
          },
          {
            key: "_handleResponse",
            value: function (e) {
              for (
                var t,
                  n,
                  r = pe.now(),
                  o = e.data.userProfileItem,
                  i = [],
                  s = 0,
                  a = o.length;
                s < a;
                s++
              )
                "@TLS#NOT_FOUND" !== o[s].to &&
                  "" !== o[s].to &&
                  ((t = o[s].to),
                  (n = this._updateMap(
                    t,
                    this._getLatestProfileFromResponse(t, o[s].profileItem)
                  )),
                  i.push(n));
              return (
                J.log(
                  "ProfileHandler._handleResponse cost " +
                    (pe.now() - r) +
                    " ms"
                ),
                i
              );
            },
          },
          {
            key: "_getLatestProfileFromResponse",
            value: function (e, t) {
              var n = {};
              if (((n.userID = e), (n.profileCustomField = []), !Oe(t)))
                for (var r = 0, o = t.length; r < o; r++)
                  if (t[r].tag.indexOf("Tag_Profile_Custom") > -1)
                    n.profileCustomField.push({
                      key: t[r].tag,
                      value: t[r].value,
                    });
                  else
                    switch (t[r].tag) {
                      case et.NICK:
                        n.nick = t[r].value;
                        break;
                      case et.GENDER:
                        n.gender = t[r].value;
                        break;
                      case et.BIRTHDAY:
                        n.birthday = t[r].value;
                        break;
                      case et.LOCATION:
                        n.location = t[r].value;
                        break;
                      case et.SELFSIGNATURE:
                        n.selfSignature = t[r].value;
                        break;
                      case et.ALLOWTYPE:
                        n.allowType = t[r].value;
                        break;
                      case et.LANGUAGE:
                        n.language = t[r].value;
                        break;
                      case et.AVATAR:
                        n.avatar = t[r].value;
                        break;
                      case et.MESSAGESETTINGS:
                        n.messageSettings = t[r].value;
                        break;
                      case et.ADMINFORBIDTYPE:
                        n.adminForbidType = t[r].value;
                        break;
                      case et.LEVEL:
                        n.level = t[r].value;
                        break;
                      case et.ROLE:
                        n.role = t[r].value;
                        break;
                      default:
                        J.warn(
                          "ProfileHandler._handleResponse unkown tag->",
                          t[r].tag,
                          t[r].value
                        );
                    }
              return n;
            },
          },
          {
            key: "updateMyProfile",
            value: function (t) {
              var n = this,
                r = new ro();
              r.setMethod(ni).setText(JSON.stringify(t)).setStart();
              var o = new Da().validate(t);
              if (!o.valid)
                return (
                  r
                    .setCode(dt.UPDATE_PROFILE_INVALID_PARAM)
                    .setMessage(
                      "ProfileHandler.updateMyProfile info:".concat(o.tips)
                    )
                    .setNetworkType(this.userController.getNetworkType())
                    .setEnd(),
                  J.error(
                    "ProfileHandler.updateMyProfile info:".concat(
                      o.tips,
                      "，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#updateMyProfile"
                    )
                  ),
                  Hr({ code: dt.UPDATE_PROFILE_INVALID_PARAM, message: on })
                );
              var i = [];
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) &&
                  ("profileCustomField" === s
                    ? t.profileCustomField.forEach(function (e) {
                        i.push({ tag: e.key, value: e.value });
                      })
                    : i.push({ tag: et[s.toUpperCase()], value: t[s] }));
              if (0 === i.length)
                return (
                  r
                    .setCode(dt.UPDATE_PROFILE_NO_KEY)
                    .setMessage(sn)
                    .setNetworkType(this.userController.getNetworkType())
                    .setEnd(),
                  J.error(
                    "ProfileHandler.updateMyProfile info:".concat(
                      sn,
                      "，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#updateMyProfile"
                    )
                  ),
                  Hr({ code: dt.UPDATE_PROFILE_NO_KEY, message: sn })
                );
              var a = this.userController.generateConfig(
                this.TAG,
                this.Actions.U,
                {
                  fromAccount: this.userController.getMyAccount(),
                  profileItem: i,
                }
              );
              return this.userController
                .request(a)
                .then(function (o) {
                  r
                    .setCode(0)
                    .setNetworkType(n.userController.getNetworkType())
                    .setEnd(),
                    J.info("ProfileHandler.updateMyProfile ok");
                  var i = n._updateMap(n.userController.getMyAccount(), t);
                  return (
                    n.userController.emitOuterEvent(e.PROFILE_UPDATED, [i]),
                    Fr(i)
                  );
                })
                .catch(function (e) {
                  return (
                    n.userController.probeNetwork().then(function (t) {
                      var n = v(t, 2),
                        o = n[0],
                        i = n[1];
                      r.setError(e, o, i).setEnd();
                    }),
                    J.error("ProfileHandler.updateMyProfile error:", e),
                    Hr(e)
                  );
                });
            },
          },
          {
            key: "onProfileModified",
            value: function (t) {
              var n = t.data;
              if (!Oe(n)) {
                var r,
                  o,
                  i = n.length;
                J.info("ProfileHandler.onProfileModified length=" + i);
                for (var s = [], a = 0; a < i; a++)
                  (r = n[a].userID),
                    (o = this._updateMap(
                      r,
                      this._getLatestProfileFromResponse(r, n[a].profileList)
                    )),
                    s.push(o);
                this.userController.emitInnerEvent(Sr, s),
                  this.userController.emitOuterEvent(e.PROFILE_UPDATED, s);
              }
            },
          },
          {
            key: "_fillMap",
            value: function () {
              if (0 === this.accountProfileMap.size) {
                for (
                  var e = this._getCachedProfiles(),
                    t = Date.now(),
                    n = 0,
                    r = e.length;
                  n < r;
                  n++
                )
                  t - e[n].lastUpdatedTime < this.expirationTime &&
                    this.accountProfileMap.set(e[n].userID, e[n]);
                J.log(
                  "ProfileHandler._fillMap from cache, map.size=" +
                    this.accountProfileMap.size
                );
              }
            },
          },
          {
            key: "_updateMap",
            value: function (e, t) {
              var n,
                r = Date.now();
              return (
                this._containsAccount(e)
                  ? ((n = this._getProfileFromMap(e)),
                    t.profileCustomField &&
                      Ee(n.profileCustomField, t.profileCustomField),
                    he(n, t, ["profileCustomField"]),
                    (n.lastUpdatedTime = r))
                  : ((n = new Da(t)),
                    (this.userController.isMyFriend(e) ||
                      e === this.userController.getMyAccount()) &&
                      ((n.lastUpdatedTime = r),
                      this.accountProfileMap.set(e, n))),
                this._flushMap(e === this.userController.getMyAccount()),
                n
              );
            },
          },
          {
            key: "_flushMap",
            value: function (e) {
              var t = _(this.accountProfileMap.values()),
                n = this.userController.tim.storage;
              J.debug(
                "ProfileHandler._flushMap length="
                  .concat(t.length, " flushAtOnce=")
                  .concat(e)
              ),
                n.setItem(this.TAG, t, e);
            },
          },
          {
            key: "_containsAccount",
            value: function (e) {
              return this.accountProfileMap.has(e);
            },
          },
          {
            key: "_getProfileFromMap",
            value: function (e) {
              return this.accountProfileMap.get(e);
            },
          },
          {
            key: "_getCachedProfiles",
            value: function () {
              var e = this.userController.tim.storage.getItem(this.TAG);
              return Oe(e) ? [] : e;
            },
          },
          {
            key: "onConversationsProfileUpdated",
            value: function (e) {
              for (var t, n, r, o = [], i = 0, s = e.length; i < s; i++)
                (n = (t = e[i]).userID),
                  this.userController.isMyFriend(n) &&
                    (this._containsAccount(n)
                      ? ((r = this._getProfileFromMap(n)),
                        he(r, t) > 0 && o.push(n))
                      : o.push(t.userID));
              0 !== o.length &&
                (J.info(
                  "ProfileHandler.onConversationsProfileUpdated toAccount:",
                  o
                ),
                this.getUserProfile({ userIDList: o }));
            },
          },
          {
            key: "reset",
            value: function () {
              this._flushMap(!0), this.accountProfileMap.clear();
            },
          },
        ]),
        t
      );
    })(),
    Aa = (function () {
      function e(t) {
        r(this, e),
          (this.options = t ? t.options : { enablePointer: !0 }),
          (this.pointsList = {}),
          (this.reportText = {}),
          (this.maxNameLen = 0),
          (this.gapChar = "-"),
          (this.log = console.log),
          (this.currentTask = "");
      }
      return (
        i(e, [
          {
            key: "newTask",
            value: function (e) {
              !1 !== this.options.enablePointer &&
                (e || (e = ["task", this._timeFormat()].join("-")),
                (this.pointsList[e] = []),
                (this.currentTask = e),
                console.log("Pointer new Task : ".concat(this.currentTask)));
            },
          },
          {
            key: "deleteTask",
            value: function (e) {
              !1 !== this.options.enablePointer &&
                (e || (e = this.currentTask),
                (this.pointsList[e].length = 0),
                delete this.pointsList[e]);
            },
          },
          {
            key: "dot",
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t = arguments.length > 1 ? arguments[1] : void 0;
              if (!1 !== this.options.enablePointer) {
                t = t || this.currentTask;
                var n = +new Date();
                (this.maxNameLen =
                  this.maxNameLen < e.length ? e.length : this.maxNameLen),
                  (this.flen = this.maxNameLen + 10),
                  this.pointsList[t].push({ pointerName: e, time: n });
              }
            },
          },
          {
            key: "_analisys",
            value: function (e) {
              if (!1 !== this.options.enablePointer) {
                e = e || this.currentTask;
                for (
                  var t = this.pointsList[e],
                    n = t.length,
                    r = [],
                    o = [],
                    i = 0;
                  i < n;
                  i++
                )
                  0 !== i &&
                    ((o = this._analisysTowPoints(t[i - 1], t[i])),
                    r.push(o.join("")));
                return (
                  (o = this._analisysTowPoints(t[0], t[n - 1], !0)),
                  r.push(o.join("")),
                  r.join("")
                );
              }
            },
          },
          {
            key: "_analisysTowPoints",
            value: function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if (!1 !== this.options.enablePointer) {
                var r = this.flen,
                  o = t.time - e.time,
                  i = o.toString(),
                  s =
                    e.pointerName +
                    this.gapChar.repeat(r - e.pointerName.length),
                  a =
                    t.pointerName +
                    this.gapChar.repeat(r - t.pointerName.length),
                  u = this.gapChar.repeat(4 - i.length) + i,
                  c = n ? ["%c", s, a, u, "ms\n%c"] : [s, a, u, "ms\n"];
                return c;
              }
            },
          },
          {
            key: "report",
            value: function (e) {
              if (!1 !== this.options.enablePointer) {
                e = e || this.currentTask;
                var t = this._analisys(e);
                this.pointsList = [];
                var n = this._timeFormat(),
                  r = "Pointer[".concat(e, "(").concat(n, ")]"),
                  o = 4 * this.maxNameLen,
                  i = (o - r.length) / 2;
                console.log(["-".repeat(i), r, "-".repeat(i)].join("")),
                  console.log(
                    "%c" + t,
                    "color:#66a",
                    "color:red",
                    "color:#66a"
                  ),
                  console.log("-".repeat(o));
              }
            },
          },
          {
            key: "_timeFormat",
            value: function () {
              var e = new Date(),
                t = this.zeroFix(e.getMonth() + 1, 2),
                n = this.zeroFix(e.getDate(), 2);
              return ""
                .concat(t, "-")
                .concat(n, " ")
                .concat(e.getHours(), ":")
                .concat(e.getSeconds(), ":")
                .concat(e.getMinutes(), "~")
                .concat(e.getMilliseconds());
            },
          },
          {
            key: "zeroFix",
            value: function (e, t) {
              return ("000000000" + e).slice(-t);
            },
          },
          {
            key: "reportAll",
            value: function () {
              if (!1 !== this.options.enablePointer)
                for (var e in this.pointsList)
                  Object.prototype.hasOwnProperty.call(this.pointsList, e) &&
                    this.eport(e);
            },
          },
        ]),
        e
      );
    })(),
    Ra = function e(t, n) {
      r(this, e), (this.userID = t);
      var o = {};
      if (((o.userID = t), !Oe(n)))
        for (var i = 0, s = n.length; i < s; i++)
          switch (n[i].tag) {
            case et.NICK:
              o.nick = n[i].value;
              break;
            case et.GENDER:
              o.gender = n[i].value;
              break;
            case et.BIRTHDAY:
              o.birthday = n[i].value;
              break;
            case et.LOCATION:
              o.location = n[i].value;
              break;
            case et.SELFSIGNATURE:
              o.selfSignature = n[i].value;
              break;
            case et.ALLOWTYPE:
              o.allowType = n[i].value;
              break;
            case et.LANGUAGE:
              o.language = n[i].value;
              break;
            case et.AVATAR:
              o.avatar = n[i].value;
              break;
            case et.MESSAGESETTINGS:
              o.messageSettings = n[i].value;
              break;
            case et.ADMINFORBIDTYPE:
              o.adminForbidType = n[i].value;
              break;
            case et.LEVEL:
              o.level = n[i].value;
              break;
            case et.ROLE:
              o.role = n[i].value;
              break;
            default:
              J.debug("snsProfileItem unkown tag->", n[i].tag);
          }
      this.profile = new Da(o);
    },
    Oa = (function () {
      function e(t) {
        r(this, e),
          (this.userController = t),
          (this.TAG = "friend"),
          (this.Actions = { G: "get", D: "delete" }),
          (this.friends = new Map()),
          (this.pointer = new Aa());
      }
      return (
        i(e, [
          {
            key: "isMyFriend",
            value: function (e) {
              var t = this.friends.has(e);
              return (
                t ||
                  J.debug(
                    "FriendHandler.isMyFriend " + e + " is not my friend"
                  ),
                t
              );
            },
          },
          {
            key: "_transformFriendList",
            value: function (e) {
              if (!Oe(e) && !Oe(e.infoItem)) {
                J.info(
                  "FriendHandler._transformFriendList friendNum=" + e.friendNum
                );
                for (var t, n, r = e.infoItem, o = 0, i = r.length; o < i; o++)
                  (n = r[o].infoAccount),
                    (t = new Ra(n, r[o].snsProfileItem)),
                    this.friends.set(n, t);
              }
            },
          },
          {
            key: "_friends2map",
            value: function (e) {
              var t = new Map();
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.set(n, e[n]);
              return t;
            },
          },
          {
            key: "getFriendList",
            value: function () {
              var e = this,
                t = {};
              (t.fromAccount = this.userController.getMyAccount()),
                J.info(
                  "FriendHandler.getFriendList myAccount=" + t.fromAccount
                );
              var n = this.userController.generateConfig(
                this.TAG,
                this.Actions.G,
                t
              );
              return this.userController
                .request(n)
                .then(function (t) {
                  J.info("FriendHandler.getFriendList ok"),
                    e._transformFriendList(t.data);
                  var n = _(e.friends.values());
                  return Fr(n);
                })
                .catch(function (e) {
                  return (
                    J.error("FriendHandler.getFriendList error:", e), Hr(e)
                  );
                });
            },
          },
          {
            key: "deleteFriend",
            value: function (e) {
              if (!Array.isArray(e.toAccount))
                return (
                  J.error(
                    "FriendHandler.deleteFriend options.toAccount 必需是数组"
                  ),
                  Hr({ code: dt.DEL_FRIEND_INVALID_PARAM, message: rn })
                );
              e.toAccount.length > 1e3 &&
                (J.warn(
                  "FriendHandler.deleteFriend 删除好友人数不能超过1000人"
                ),
                (e.toAccount.length = 1e3));
              var t = this.userController.generateConfig(
                this.TAG,
                this.Actions.D,
                e
              );
              return this.userController
                .request(t)
                .then(function (e) {
                  return J.info("FriendHandler.deleteFriend ok"), Fr();
                })
                .catch(function (e) {
                  return J.error("FriendHandler.deleteFriend error:", e), Hr(e);
                });
            },
          },
        ]),
        e
      );
    })(),
    Na = function e(t) {
      r(this, e),
        Oe ||
          ((this.userID = t.userID || ""), (this.timeStamp = t.timeStamp || 0));
    },
    wa = (function () {
      function t(e) {
        r(this, t),
          (this.userController = e),
          (this.TAG = "blacklist"),
          (this.Actions = { G: "get", C: "create", D: "delete" }),
          (this.blacklistMap = new Map()),
          (this.startIndex = 0),
          (this.maxLimited = 100),
          (this.curruentSequence = 0);
      }
      return (
        i(t, [
          {
            key: "getBlacklist",
            value: function () {
              var e = this,
                t = {};
              (t.fromAccount = this.userController.getMyAccount()),
                (t.maxLimited = this.maxLimited),
                (t.startIndex = 0),
                (t.lastSequence = this.curruentSequence);
              var n = new ro();
              n.setMethod(ri).setStart();
              var r = this.userController.generateConfig(
                this.TAG,
                this.Actions.G,
                t
              );
              return this.userController
                .request(r)
                .then(function (t) {
                  var r = Oe(t.data.blackListItem)
                    ? 0
                    : t.data.blackListItem.length;
                  return (
                    n
                      .setCode(0)
                      .setNetworkType(e.userController.getNetworkType())
                      .setText(r)
                      .setEnd(),
                    J.info("BlacklistHandler.getBlacklist ok"),
                    (e.curruentSequence = t.data.curruentSequence),
                    e._handleResponse(t.data.blackListItem, !0),
                    e._onBlacklistUpdated()
                  );
                })
                .catch(function (t) {
                  return (
                    e.userController.probeNetwork().then(function (e) {
                      var r = v(e, 2),
                        o = r[0],
                        i = r[1];
                      n.setError(t, o, i).setEnd();
                    }),
                    J.error("BlacklistHandler.getBlacklist error:", t),
                    Hr(t)
                  );
                });
            },
          },
          {
            key: "addBlacklist",
            value: function (e) {
              var t = this,
                n = new ro();
              if ((n.setMethod(oi).setStart(), !re(e.userIDList)))
                return (
                  n
                    .setCode(dt.ADD_BLACKLIST_INVALID_PARAM)
                    .setMessage(
                      "BlacklistHandler.addBlacklist options.userIDList 必需是数组"
                    )
                    .setNetworkType(this.userController.getNetworkType())
                    .setEnd(),
                  J.error(
                    "BlacklistHandler.addBlacklist options.userIDList 必需是数组"
                  ),
                  Hr({ code: dt.ADD_BLACKLIST_INVALID_PARAM, message: an })
                );
              var r = this.userController.tim.loginInfo.identifier;
              if (1 === e.userIDList.length && e.userIDList[0] === r)
                return (
                  n
                    .setCode(dt.CANNOT_ADD_SELF_TO_BLACKLIST)
                    .setMessage(cn)
                    .setNetworkType(this.userController.getNetworkType())
                    .setEnd(),
                  J.error("BlacklistHandler.addBlacklist 不能把自己拉黑"),
                  Hr({ code: dt.CANNOT_ADD_SELF_TO_BLACKLIST, message: cn })
                );
              e.userIDList.includes(r) &&
                ((e.userIDList = e.userIDList.filter(function (e) {
                  return e !== r;
                })),
                J.warn("BlacklistHandler.addBlacklist 不能把自己拉黑，已过滤")),
                (e.fromAccount = this.userController.getMyAccount()),
                (e.toAccount = e.userIDList);
              var o = this.userController.generateConfig(
                this.TAG,
                this.Actions.C,
                e
              );
              return this.userController
                .request(o)
                .then(function (r) {
                  return (
                    n
                      .setCode(0)
                      .setNetworkType(t.userController.getNetworkType())
                      .setText(
                        e.userIDList.length > 5
                          ? "userIDList.length=".concat(e.userIDList.length)
                          : "userIDList=".concat(e.userIDList)
                      )
                      .setEnd(),
                    J.info("BlacklistHandler.addBlacklist ok"),
                    t._handleResponse(r.data.resultItem, !0),
                    t._onBlacklistUpdated()
                  );
                })
                .catch(function (e) {
                  return (
                    t.userController.probeNetwork().then(function (t) {
                      var r = v(t, 2),
                        o = r[0],
                        i = r[1];
                      n.setError(e, o, i).setEnd();
                    }),
                    J.error("BlacklistHandler.addBlacklist error:", e),
                    Hr(e)
                  );
                });
            },
          },
          {
            key: "_handleResponse",
            value: function (e, t) {
              if (!Oe(e))
                for (var n, r, o, i = 0, s = e.length; i < s; i++)
                  (r = e[i].to),
                    (o = e[i].resultCode),
                    (oe(o) || 0 === o) &&
                      (t
                        ? (((n = this.blacklistMap.has(r)
                            ? this.blacklistMap.get(r)
                            : new Na()).userID = r),
                          !Oe(e[i].addBlackTimeStamp) &&
                            (n.timeStamp = e[i].addBlackTimeStamp),
                          this.blacklistMap.set(r, n))
                        : this.blacklistMap.has(r) &&
                          ((n = this.blacklistMap.get(r)),
                          this.blacklistMap.delete(r)));
              J.log(
                "BlacklistHandler._handleResponse total=" +
                  this.blacklistMap.size +
                  " bAdd=" +
                  t
              );
            },
          },
          {
            key: "deleteBlacklist",
            value: function (e) {
              var t = this,
                n = new ro();
              if ((n.setMethod(ii).setStart(), !re(e.userIDList)))
                return (
                  n
                    .setCode(dt.DEL_BLACKLIST_INVALID_PARAM)
                    .setMessage(
                      "BlacklistHandler.deleteBlacklist options.userIDList 必需是数组"
                    )
                    .setNetworkType(this.userController.getNetworkType())
                    .setEnd(),
                  J.error(
                    "BlacklistHandler.deleteBlacklist options.userIDList 必需是数组"
                  ),
                  Hr({ code: dt.DEL_BLACKLIST_INVALID_PARAM, message: un })
                );
              (e.fromAccount = this.userController.getMyAccount()),
                (e.toAccount = e.userIDList);
              var r = this.userController.generateConfig(
                this.TAG,
                this.Actions.D,
                e
              );
              return this.userController
                .request(r)
                .then(function (r) {
                  return (
                    n
                      .setCode(0)
                      .setNetworkType(t.userController.getNetworkType())
                      .setText(
                        e.userIDList.length > 5
                          ? "userIDList.length=".concat(e.userIDList.length)
                          : "userIDList=".concat(e.userIDList)
                      )
                      .setEnd(),
                    J.info("BlacklistHandler.deleteBlacklist ok"),
                    t._handleResponse(r.data.resultItem, !1),
                    t._onBlacklistUpdated()
                  );
                })
                .catch(function (e) {
                  return (
                    t.userController.probeNetwork().then(function (t) {
                      var r = v(t, 2),
                        o = r[0],
                        i = r[1];
                      n.setError(e, o, i).setEnd();
                    }),
                    J.error("BlacklistHandler.deleteBlacklist error:", e),
                    Hr(e)
                  );
                });
            },
          },
          {
            key: "_onBlacklistUpdated",
            value: function () {
              var t = _(this.blacklistMap.keys());
              return (
                this.userController.emitOuterEvent(e.BLACKLIST_UPDATED, t),
                Fr(t)
              );
            },
          },
          {
            key: "handleBlackListDelAccount",
            value: function (t) {
              for (var n, r = [], o = 0, i = t.length; o < i; o++)
                (n = t[o]),
                  this.blacklistMap.has(n) &&
                    (this.blacklistMap.delete(n), r.push(n));
              r.length > 0 &&
                (J.log(
                  "BlacklistHandler.handleBlackListDelAccount delCount=" +
                    r.length +
                    " : " +
                    r.join(",")
                ),
                this.userController.emitOuterEvent(
                  e.BLACKLIST_UPDATED,
                  _(this.blacklistMap.keys())
                ));
            },
          },
          {
            key: "handleBlackListAddAccount",
            value: function (t) {
              for (var n, r = [], o = 0, i = t.length; o < i; o++)
                (n = t[o]),
                  this.blacklistMap.has(n) ||
                    (this.blacklistMap.set(n, new Na({ userID: n })),
                    r.push(n));
              r.length > 0 &&
                (J.log(
                  "BlacklistHandler.handleBlackListAddAccount addCount=" +
                    r.length +
                    " : " +
                    r.join(",")
                ),
                this.userController.emitOuterEvent(
                  e.BLACKLIST_UPDATED,
                  _(this.blacklistMap.keys())
                ));
            },
          },
          {
            key: "reset",
            value: function () {
              this.blacklistMap.clear(),
                (this.startIndex = 0),
                (this.maxLimited = 100),
                (this.curruentSequence = 0);
            },
          },
        ]),
        t
      );
    })(),
    La = (function () {
      function e(t) {
        r(this, e),
          (this.userController = t),
          (this.TAG = "applyC2C"),
          (this.Actions = { C: "create", G: "get", D: "delete", U: "update" });
      }
      return (
        i(e, [
          {
            key: "applyAddFriend",
            value: function (e) {
              var t = this,
                n = this.userController.generateConfig(
                  this.TAG,
                  this.Actions.C,
                  e
                ),
                r = this.userController.request(n);
              return (
                r
                  .then(function (e) {
                    t.userController.isActionSuccessful(
                      "applyAddFriend",
                      t.Actions.C,
                      e
                    );
                  })
                  .catch(function (e) {}),
                r
              );
            },
          },
          {
            key: "getPendency",
            value: function (e) {
              var t = this,
                n = this.userController.generateConfig(
                  this.TAG,
                  this.Actions.G,
                  e
                ),
                r = this.userController.request(n);
              return (
                r
                  .then(function (e) {
                    t.userController.isActionSuccessful(
                      "getPendency",
                      t.Actions.G,
                      e
                    );
                  })
                  .catch(function (e) {}),
                r
              );
            },
          },
          {
            key: "deletePendency",
            value: function (e) {
              var t = this,
                n = this.userController.generateConfig(
                  this.TAG,
                  this.Actions.D,
                  e
                ),
                r = this.userController.request(n);
              return (
                r
                  .then(function (e) {
                    t.userController.isActionSuccessful(
                      "deletePendency",
                      t.Actions.D,
                      e
                    );
                  })
                  .catch(function (e) {}),
                r
              );
            },
          },
          {
            key: "replyPendency",
            value: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = this.userController.generateConfig(
                  this.TAG,
                  this.Actions.U,
                  t
                ),
                r = this.userController.request(n);
              return (
                r
                  .then(function (t) {
                    e.userController.isActionSuccessful(
                      "replyPendency",
                      e.Actions.U,
                      t
                    );
                  })
                  .catch(function (e) {}),
                r
              );
            },
          },
        ]),
        e
      );
    })(),
    Pa = (function (e) {
      c(n, e);
      var t = y(n);
      function n(e) {
        var o;
        return (
          r(this, n),
          ((o = t.call(this, e)).profileHandler = new ka(g(o))),
          (o.friendHandler = new Oa(g(o))),
          (o.blacklistHandler = new wa(g(o))),
          (o.applyC2CHandler = new La(g(o))),
          o._initializeListener(),
          o
        );
      }
      return (
        i(n, [
          {
            key: "_initializeListener",
            value: function (e) {
              var t = this.tim.innerEmitter;
              t.on(xn, this.onContextUpdated, this),
                t.on(ur, this.onProfileModified, this),
                t.on(ar, this.onNewFriendMessages, this),
                t.on(Mr, this.onConversationsProfileUpdated, this);
            },
          },
          {
            key: "onContextUpdated",
            value: function (e) {
              var t = this.tim.context;
              !1 != !!t.a2Key &&
                !1 != !!t.tinyID &&
                (this.profileHandler.getMyProfile(),
                this.friendHandler.getFriendList(),
                this.blacklistHandler.getBlacklist());
            },
          },
          {
            key: "onGotMyProfile",
            value: function () {
              this.triggerReady();
            },
          },
          {
            key: "onProfileModified",
            value: function (e) {
              this.profileHandler.onProfileModified(e);
            },
          },
          {
            key: "onNewFriendMessages",
            value: function (e) {
              J.debug("onNewFriendMessages", JSON.stringify(e.data)),
                Oe(e.data.blackListDelAccount) ||
                  this.blacklistHandler.handleBlackListDelAccount(
                    e.data.blackListDelAccount
                  ),
                Oe(e.data.blackListAddAccount) ||
                  this.blacklistHandler.handleBlackListAddAccount(
                    e.data.blackListAddAccount
                  );
            },
          },
          {
            key: "onConversationsProfileUpdated",
            value: function (e) {
              this.profileHandler.onConversationsProfileUpdated(e.data);
            },
          },
          {
            key: "getMyAccount",
            value: function () {
              return this.tim.context.identifier;
            },
          },
          {
            key: "isMyFriend",
            value: function (e) {
              return this.friendHandler.isMyFriend(e);
            },
          },
          {
            key: "generateConfig",
            value: function (e, t, n) {
              return { name: e, action: t, param: n };
            },
          },
          {
            key: "getMyProfile",
            value: function () {
              return this.profileHandler.getMyProfile();
            },
          },
          {
            key: "getUserProfile",
            value: function (e) {
              return this.profileHandler.getUserProfile(e);
            },
          },
          {
            key: "updateMyProfile",
            value: function (e) {
              return this.profileHandler.updateMyProfile(e);
            },
          },
          {
            key: "getFriendList",
            value: function () {
              return this.friendHandler.getFriendList();
            },
          },
          {
            key: "deleteFriend",
            value: function (e) {
              return this.friendHandler.deleteFriend(e);
            },
          },
          {
            key: "getBlacklist",
            value: function () {
              return this.blacklistHandler.getBlacklist();
            },
          },
          {
            key: "addBlacklist",
            value: function (e) {
              return this.blacklistHandler.addBlacklist(e);
            },
          },
          {
            key: "deleteBlacklist",
            value: function (e) {
              return this.blacklistHandler.deleteBlacklist(e);
            },
          },
          {
            key: "applyAddFriend",
            value: function (e) {
              return this.applyC2CHandler.applyAddFriend(e);
            },
          },
          {
            key: "getPendency",
            value: function (e) {
              return this.applyC2CHandler.getPendency(e);
            },
          },
          {
            key: "deletePendency",
            value: function (e) {
              return this.applyC2CHandler.deletePendency(e);
            },
          },
          {
            key: "replyPendency",
            value: function (e) {
              return this.applyC2CHandler.replyPendency(e);
            },
          },
          {
            key: "reset",
            value: function () {
              J.info("UserController.reset"),
                this.resetReady(),
                this.profileHandler.reset(),
                this.blacklistHandler.reset(),
                (this.checkTimes = 0);
            },
          },
        ]),
        n
      );
    })(Pr),
    Ga = [
      "groupID",
      "name",
      "avatar",
      "type",
      "introduction",
      "notification",
      "ownerID",
      "selfInfo",
      "createTime",
      "infoSequence",
      "lastInfoTime",
      "lastMessage",
      "nextMessageSeq",
      "memberNum",
      "maxMemberNum",
      "memberList",
      "joinOption",
      "groupCustomField",
      "muteAllMembers",
    ],
    ba = (function () {
      function e(t) {
        r(this, e),
          (this.groupID = ""),
          (this.name = ""),
          (this.avatar = ""),
          (this.type = ""),
          (this.introduction = ""),
          (this.notification = ""),
          (this.ownerID = ""),
          (this.createTime = ""),
          (this.infoSequence = ""),
          (this.lastInfoTime = ""),
          (this.selfInfo = {
            messageRemindType: "",
            joinTime: "",
            nameCard: "",
            role: "",
          }),
          (this.lastMessage = {
            lastTime: "",
            lastSequence: "",
            fromAccount: "",
            messageForShow: "",
          }),
          (this.nextMessageSeq = ""),
          (this.memberNum = ""),
          (this.maxMemberNum = ""),
          (this.joinOption = ""),
          (this.groupCustomField = []),
          (this.muteAllMembers = void 0),
          this._initGroup(t);
      }
      return (
        i(e, [
          {
            key: "_initGroup",
            value: function (e) {
              for (var t in e)
                Ga.indexOf(t) < 0 ||
                  ("selfInfo" !== t
                    ? (this[t] = e[t])
                    : this.updateSelfInfo(e[t]));
            },
          },
          {
            key: "updateGroup",
            value: function (e) {
              e.lastMsgTime && (this.lastMessage.lastTime = e.lastMsgTime),
                oe(e.muteAllMembers) ||
                  ("On" === e.muteAllMembers
                    ? (e.muteAllMembers = !0)
                    : (e.muteAllMembers = !1)),
                e.groupCustomField &&
                  Ee(this.groupCustomField, e.groupCustomField),
                he(this, e, [
                  "members",
                  "errorCode",
                  "lastMsgTime",
                  "groupCustomField",
                ]);
            },
          },
          {
            key: "updateSelfInfo",
            value: function (e) {
              var t = e.nameCard,
                n = e.joinTime,
                r = e.role,
                o = e.messageRemindType;
              he(
                this.selfInfo,
                { nameCard: t, joinTime: n, role: r, messageRemindType: o },
                [],
                ["", null, void 0, 0, NaN]
              );
            },
          },
          {
            key: "setSelfNameCard",
            value: function (e) {
              this.selfInfo.nameCard = e;
            },
          },
        ]),
        e
      );
    })(),
    Ua = function (e, n) {
      if (oe(n)) return "";
      switch (e) {
        case t.MSG_TEXT:
          return n.text;
        case t.MSG_IMAGE:
          return "[图片]";
        case t.MSG_GEO:
          return "[位置]";
        case t.MSG_AUDIO:
          return "[语音]";
        case t.MSG_VIDEO:
          return "[视频]";
        case t.MSG_FILE:
          return "[文件]";
        case t.MSG_CUSTOM:
          return "[自定义消息]";
        case t.MSG_GRP_TIP:
          return "[群提示消息]";
        case t.MSG_GRP_SYS_NOTICE:
          return "[群系统通知]";
        case t.MSG_FACE:
          return "[动画表情]";
        default:
          return "";
      }
    },
    qa = function (e) {
      return oe(e)
        ? {
            lastTime: 0,
            lastSequence: 0,
            fromAccount: 0,
            messageForShow: "",
            payload: null,
            type: "",
            isRevoked: !1,
          }
        : e instanceof Dn
        ? {
            lastTime: e.time || 0,
            lastSequence: e.sequence || 0,
            fromAccount: e.from || "",
            messageForShow: Ua(e.type, e.payload),
            payload: e.payload || null,
            type: e.type || null,
            isRevoked: !1,
          }
        : u(
            u({}, e),
            {},
            { isRevoked: !1, messageForShow: Ua(e.type, e.payload) }
          );
    },
    xa = (function () {
      function e(t) {
        r(this, e),
          (this.conversationID = t.conversationID || ""),
          (this.unreadCount = t.unreadCount || 0),
          (this.type = t.type || ""),
          (this.lastMessage = qa(t.lastMessage)),
          t.lastMsgTime && (this.lastMessage.lastTime = t.lastMsgTime),
          (this._isInfoCompleted = !1),
          (this.peerReadTime = t.peerReadTime || 0),
          this._initProfile(t);
      }
      return (
        i(e, [
          {
            key: "_initProfile",
            value: function (e) {
              var n = this;
              Object.keys(e).forEach(function (t) {
                switch (t) {
                  case "userProfile":
                    n.userProfile = e.userProfile;
                    break;
                  case "groupProfile":
                    n.groupProfile = e.groupProfile;
                }
              }),
                oe(this.userProfile) && this.type === t.CONV_C2C
                  ? (this.userProfile = new Da({
                      userID: e.conversationID.replace("C2C", ""),
                    }))
                  : oe(this.groupProfile) &&
                    this.type === t.CONV_GROUP &&
                    (this.groupProfile = new ba({
                      groupID: e.conversationID.replace("GROUP", ""),
                    }));
            },
          },
          {
            key: "updateUnreadCount",
            value: function (e, n) {
              oe(e) ||
                (Te(this.subType) || De(this.subType)
                  ? (this.unreadCount = 0)
                  : n && this.type === t.CONV_GROUP
                  ? (this.unreadCount = e)
                  : (this.unreadCount = this.unreadCount + e));
            },
          },
          {
            key: "updateLastMessage",
            value: function (e) {
              this.lastMessage = qa(e);
            },
          },
          {
            key: "reduceUnreadCount",
            value: function () {
              this.unreadCount >= 1 && (this.unreadCount -= 1);
            },
          },
          {
            key: "isLastMessageRevoked",
            value: function (e) {
              var n = e.sequence,
                r = e.time;
              return (
                (this.type === t.CONV_C2C &&
                  n === this.lastMessage.lastSequence &&
                  r === this.lastMessage.lastTime) ||
                (this.type === t.CONV_GROUP &&
                  n === this.lastMessage.lastSequence)
              );
            },
          },
          {
            key: "setLastMessageRevoked",
            value: function (e) {
              this.lastMessage.isRevoked = e;
            },
          },
          {
            key: "toAccount",
            get: function () {
              return this.conversationID
                .replace("C2C", "")
                .replace("GROUP", "");
            },
          },
          {
            key: "subType",
            get: function () {
              return this.groupProfile ? this.groupProfile.type : "";
            },
          },
        ]),
        e
      );
    })(),
    Fa = (function (n) {
      c(s, n);
      var o = y(s);
      function s(e) {
        var t;
        return (
          r(this, s),
          ((t = o.call(this, e)).pagingStatus = Ue.NOT_START),
          (t.pagingTimeStamp = 0),
          (t.conversationMap = new Map()),
          (t.tempGroupList = []),
          t._initListeners(),
          t
        );
      }
      return (
        i(s, [
          {
            key: "hasLocalConversationMap",
            value: function () {
              return this.conversationMap.size > 0;
            },
          },
          {
            key: "_createLocalConversation",
            value: function (e) {
              return this.conversationMap.has(e)
                ? this.conversationMap.get(e)
                : (J.log(
                    "ConversationController._createLocalConversation conversationID:".concat(
                      e
                    )
                  ),
                  new xa({
                    conversationID: e,
                    type:
                      e.slice(0, 3) === t.CONV_C2C ? t.CONV_C2C : t.CONV_GROUP,
                  }));
            },
          },
          {
            key: "hasLocalConversation",
            value: function (e) {
              return this.conversationMap.has(e);
            },
          },
          {
            key: "getConversationList",
            value: function () {
              var e = this;
              J.log("ConversationController.getConversationList."),
                this.pagingStatus === Ue.REJECTED &&
                  (J.log(
                    "ConversationController.getConversationList. continue to sync conversationList"
                  ),
                  this._syncConversationList());
              var t = new ro();
              return (
                t.setMethod(Mo).setStart(),
                this.request({ name: "conversation", action: "query" })
                  .then(function (n) {
                    var r = n.data.conversations,
                      o = void 0 === r ? [] : r,
                      i = e._getConversationOptions(o);
                    return (
                      e._updateLocalConversationList(i, !0),
                      e._setStorageConversationList(),
                      e._handleC2CPeerReadTime(),
                      t
                        .setCode(0)
                        .setText(o.length)
                        .setNetworkType(e.getNetworkType())
                        .setEnd(),
                      J.log("ConversationController.getConversationList ok."),
                      Fr({ conversationList: e.getLocalConversationList() })
                    );
                  })
                  .catch(function (n) {
                    return (
                      e.probeNetwork().then(function (e) {
                        var r = v(e, 2),
                          o = r[0],
                          i = r[1];
                        t.setError(n, o, i).setEnd();
                      }),
                      J.error(
                        "ConversationController.getConversationList error:",
                        n
                      ),
                      Hr(n)
                    );
                  })
              );
            },
          },
          {
            key: "_syncConversationList",
            value: function () {
              var e = this,
                t = new ro();
              return (
                t.setMethod(Do).setStart(),
                this.pagingStatus === Ue.NOT_START &&
                  this.conversationMap.clear(),
                this._autoPagingSyncConversationList()
                  .then(function (n) {
                    return (
                      (e.pagingStatus = Ue.RESOLVED),
                      e._setStorageConversationList(),
                      e._handleC2CPeerReadTime(),
                      t
                        .setCode(0)
                        .setText("".concat(e.conversationMap.size))
                        .setNetworkType(e.getNetworkType())
                        .setEnd(),
                      n
                    );
                  })
                  .catch(function (n) {
                    return (
                      (e.pagingStatus = Ue.REJECTED),
                      t.setText(e.pagingTimeStamp),
                      e.probeNetwork().then(function (e) {
                        var r = v(e, 2),
                          o = r[0],
                          i = r[1];
                        t.setError(n, o, i).setEnd();
                      }),
                      Hr(n)
                    );
                  })
              );
            },
          },
          {
            key: "_autoPagingSyncConversationList",
            value: function () {
              var e = this;
              return (
                (this.pagingStatus = Ue.PENDING),
                this.request({
                  name: "conversation",
                  action: "pagingQuery",
                  param: {
                    fromAccount: this.tim.context.identifier,
                    timeStamp: this.pagingTimeStamp,
                    orderType: 1,
                  },
                }).then(function (t) {
                  var n = t.data,
                    r = n.completeFlag,
                    o = n.conversations,
                    i = void 0 === o ? [] : o,
                    s = n.timeStamp;
                  if (
                    (J.log(
                      "ConversationController._autoPagingSyncConversationList completeFlag="
                        .concat(r, " nums=")
                        .concat(i.length)
                    ),
                    i.length > 0)
                  ) {
                    var a = e._getConversationOptions(i);
                    e._updateLocalConversationList(a, !0);
                  }
                  return (
                    e._isReady ? e._emitConversationUpdate() : e.triggerReady(),
                    (e.pagingTimeStamp = s),
                    1 !== r ? e._autoPagingSyncConversationList() : Fr()
                  );
                })
              );
            },
          },
          {
            key: "_handleC2CPeerReadTime",
            value: function () {
              var e,
                n = this.tim.messageController,
                r = M(this.conversationMap);
              try {
                for (r.s(); !(e = r.n()).done; ) {
                  var o = v(e.value, 2),
                    i = o[0],
                    s = o[1];
                  s.type === t.CONV_C2C &&
                    (J.debug(
                      "ConversationController._handleC2CPeerReadTime",
                      i,
                      s.peerReadTime
                    ),
                    n.recordPeerReadTime(i, s.peerReadTime));
                }
              } catch (a) {
                r.e(a);
              } finally {
                r.f();
              }
            },
          },
          {
            key: "getConversationProfile",
            value: function (e) {
              var n = this,
                r = this.conversationMap.has(e)
                  ? this.conversationMap.get(e)
                  : this._createLocalConversation(e);
              if (r._isInfoCompleted || r.type === t.CONV_SYSTEM)
                return Fr({ conversation: r });
              var o = new ro();
              return (
                o.setMethod(Eo).setStart(),
                J.log(
                  "ConversationController.getConversationProfile. conversationID:".concat(
                    e,
                    " lastMessage:"
                  ),
                  r.lastMessage
                ),
                this._updateUserOrGroupProfileCompletely(r)
                  .then(function (t) {
                    return (
                      o
                        .setCode(0)
                        .setNetworkType(n.getNetworkType())
                        .setText(
                          "conversationID="
                            .concat(e, " unreadCount=")
                            .concat(t.data.conversation.unreadCount)
                        )
                        .setEnd(),
                      J.log(
                        "ConversationController.getConversationProfile ok. conversationID:",
                        e
                      ),
                      t
                    );
                  })
                  .catch(function (t) {
                    return (
                      n.probeNetwork().then(function (n) {
                        var r = v(n, 2),
                          i = r[0],
                          s = r[1];
                        o.setError(t, i, s)
                          .setText("conversationID=".concat(e))
                          .setEnd();
                      }),
                      J.error(
                        "ConversationController.getConversationProfile error:",
                        t
                      ),
                      Hr(t)
                    );
                  })
              );
            },
          },
          {
            key: "deleteConversation",
            value: function (e) {
              var n = this,
                r = {};
              if (!this.conversationMap.has(e)) {
                var o = new ht({
                  code: dt.CONVERSATION_NOT_FOUND,
                  message: Ft,
                });
                return Hr(o);
              }
              switch (this.conversationMap.get(e).type) {
                case t.CONV_C2C:
                  (r.type = 1), (r.toAccount = e.replace(t.CONV_C2C, ""));
                  break;
                case t.CONV_GROUP:
                  (r.type = 2), (r.toGroupID = e.replace(t.CONV_GROUP, ""));
                  break;
                case t.CONV_SYSTEM:
                  return (
                    this.tim.groupController.deleteGroupSystemNotice({
                      messageList: this.tim.messageController.getLocalMessageList(
                        e
                      ),
                    }),
                    this.deleteLocalConversation(e),
                    Fr({ conversationID: e })
                  );
                default:
                  var i = new ht({
                    code: dt.CONVERSATION_UN_RECORDED_TYPE,
                    message: Kt,
                  });
                  return Hr(i);
              }
              var s = new ro();
              return (
                s.setMethod(So).setText("conversationID=".concat(e)).setStart(),
                J.log(
                  "ConversationController.deleteConversation. conversationID=".concat(
                    e
                  )
                ),
                this.tim
                  .setMessageRead({ conversationID: e })
                  .then(function () {
                    return n.request({
                      name: "conversation",
                      action: "delete",
                      param: r,
                    });
                  })
                  .then(function () {
                    return (
                      s.setCode(0).setNetworkType(n.getNetworkType()).setEnd(),
                      J.log("ConversationController.deleteConversation ok."),
                      n.deleteLocalConversation(e),
                      Fr({ conversationID: e })
                    );
                  })
                  .catch(function (e) {
                    return (
                      n.probeNetwork().then(function (t) {
                        var n = v(t, 2),
                          r = n[0],
                          o = n[1];
                        s.setError(e, r, o).setEnd();
                      }),
                      J.error(
                        "ConversationController.deleteConversation error:",
                        e
                      ),
                      Hr(e)
                    );
                  })
              );
            },
          },
          {
            key: "getLocalConversationList",
            value: function () {
              return _(this.conversationMap.values());
            },
          },
          {
            key: "getLocalConversation",
            value: function (e) {
              return this.conversationMap.get(e);
            },
          },
          {
            key: "_initLocalConversationList",
            value: function () {
              var e = new ro();
              e.setMethod(To).setStart(),
                J.time(eo),
                J.log("ConversationController._initLocalConversationList init");
              var t = this._getStorageConversationList();
              if (t) {
                for (var n = t.length, r = 0; r < n; r++)
                  this.conversationMap.set(t[r].conversationID, new xa(t[r]));
                this._emitConversationUpdate(!0, !1),
                  e
                    .setCode(0)
                    .setNetworkType(this.getNetworkType())
                    .setText(n)
                    .setEnd();
              } else
                e.setCode(0)
                  .setNetworkType(this.getNetworkType())
                  .setText(0)
                  .setEnd();
              this._syncConversationList();
            },
          },
          {
            key: "_getStorageConversationList",
            value: function () {
              return this.tim.storage.getItem("conversationMap");
            },
          },
          {
            key: "_setStorageConversationList",
            value: function () {
              var e = this.getLocalConversationList()
                .slice(0, 20)
                .map(function (e) {
                  return {
                    conversationID: e.conversationID,
                    type: e.type,
                    subType: e.subType,
                    lastMessage: e.lastMessage,
                    groupProfile: e.groupProfile,
                    userProfile: e.userProfile,
                  };
                });
              this.tim.storage.setItem("conversationMap", e);
            },
          },
          {
            key: "_initListeners",
            value: function () {
              var e = this;
              this.tim.innerEmitter.once(
                xn,
                this._initLocalConversationList,
                this
              ),
                this.tim.innerEmitter.on(
                  Bn,
                  this._onSendOrReceiveMessage,
                  this
                ),
                this.tim.innerEmitter.on(Vn, this._handleSyncMessages, this),
                this.tim.innerEmitter.on(jn, this._handleSyncMessages, this),
                this.tim.innerEmitter.on(
                  Yn,
                  this._onSendOrReceiveMessage,
                  this
                ),
                this.tim.innerEmitter.on(
                  $n,
                  this._onSendOrReceiveMessage,
                  this
                ),
                this.tim.innerEmitter.on(
                  Wn,
                  this._onSendOrReceiveMessage,
                  this
                ),
                this.tim.innerEmitter.on(gr, this._onGroupListUpdated, this),
                this.tim.innerEmitter.on(
                  Sr,
                  this._updateConversationUserProfile,
                  this
                ),
                this.tim.innerEmitter.on(zn, this._onMessageRevoked, this),
                this.ready(function () {
                  e.tempGroupList.length > 0 &&
                    (e._updateConversationGroupProfile(e.tempGroupList),
                    (e.tempGroupList.length = 0));
                });
            },
          },
          {
            key: "_onGroupListUpdated",
            value: function (e) {
              this._updateConversationGroupProfile(e.data);
            },
          },
          {
            key: "_updateConversationGroupProfile",
            value: function (e) {
              var t = this;
              (re(e) && 0 === e.length) ||
                (this.hasLocalConversationMap()
                  ? (e.forEach(function (e) {
                      var n = "GROUP".concat(e.groupID);
                      if (t.conversationMap.has(n)) {
                        var r = t.conversationMap.get(n);
                        (r.groupProfile = e),
                          r.lastMessage.lastSequence < e.nextMessageSeq &&
                            (r.lastMessage.lastSequence = e.nextMessageSeq - 1),
                          r.subType || (r.subType = e.type);
                      }
                    }),
                    this._emitConversationUpdate(!0, !1))
                  : (this.tempGroupList = e));
            },
          },
          {
            key: "_updateConversationUserProfile",
            value: function (e) {
              var t = this;
              e.data.forEach(function (e) {
                var n = "C2C".concat(e.userID);
                t.conversationMap.has(n) &&
                  (t.conversationMap.get(n).userProfile = e);
              }),
                this._emitConversationUpdate(!0, !1);
            },
          },
          {
            key: "_onMessageRevoked",
            value: function (e) {
              var t = this,
                n = e.data;
              if (0 !== n.length) {
                var r = null,
                  o = !1;
                n.forEach(function (e) {
                  (r = t.conversationMap.get(e.conversationID)) &&
                    r.isLastMessageRevoked(e) &&
                    ((o = !0), r.setLastMessageRevoked(!0));
                }),
                  o && this._emitConversationUpdate(!0, !1);
              }
            },
          },
          {
            key: "_handleSyncMessages",
            value: function (e) {
              this._onSendOrReceiveMessage(e, !0);
            },
          },
          {
            key: "_onSendOrReceiveMessage",
            value: function (e) {
              var t = this,
                n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r = e.data.eventDataList;
              this._isReady
                ? 0 !== r.length &&
                  (this._getPeerReadTime(r),
                  this._updateLocalConversationList(r, !1, n),
                  this._setStorageConversationList(),
                  this._emitConversationUpdate())
                : this.ready(function () {
                    t._onSendOrReceiveMessage(e, n);
                  });
            },
          },
          {
            key: "_getPeerReadTime",
            value: function (e) {
              var n = this,
                r = [];
              e.forEach(function (e) {
                n.conversationMap.has(e.conversationID) ||
                  e.type !== t.CONV_C2C ||
                  r.push(e.conversationID.replace(t.CONV_C2C, ""));
              }),
                r.length > 0 &&
                  (J.debug(
                    "ConversationController._getPeerReadTime userIDList:".concat(
                      r
                    )
                  ),
                  this.tim.messageController.getPeerReadTime(r));
            },
          },
          {
            key: "_updateLocalConversationList",
            value: function (e, t, n) {
              var r;
              (r = this._updateTempConversations(e, t, n)),
                (this.conversationMap = new Map(
                  this._sortConversations(
                    [].concat(_(r.conversations), _(this.conversationMap))
                  )
                )),
                t || this._updateUserOrGroupProfile(r.newerConversations);
            },
          },
          {
            key: "_updateTempConversations",
            value: function (e, n, r) {
              for (var o = [], i = [], s = 0, a = e.length; s < a; s++) {
                var u = new xa(e[s]),
                  c = this.conversationMap.get(u.conversationID);
                if (this.conversationMap.has(u.conversationID)) {
                  var l = [
                    "unreadCount",
                    "allowType",
                    "adminForbidType",
                    "payload",
                  ];
                  r && l.push("lastMessage"),
                    he(c, u, l, [null, void 0, "", 0, NaN]),
                    c.updateUnreadCount(u.unreadCount, n),
                    r || (c.lastMessage.payload = e[s].lastMessage.payload),
                    this.conversationMap.delete(c.conversationID),
                    o.push([c.conversationID, c]);
                } else {
                  if (u.type === t.CONV_GROUP) {
                    var p = u.groupProfile.groupID,
                      h = this.tim.groupController.getLocalGroupProfile(p);
                    h && ((u.groupProfile = h), u.updateUnreadCount(0));
                  }
                  i.push(u), o.push([u.conversationID, u]);
                }
              }
              return { conversations: o, newerConversations: i };
            },
          },
          {
            key: "_sortConversations",
            value: function (e) {
              return e.sort(function (e, t) {
                return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime;
              });
            },
          },
          {
            key: "_updateUserOrGroupProfile",
            value: function (e) {
              var n = this;
              if (0 !== e.length) {
                var r = [],
                  o = [];
                e.forEach(function (e) {
                  if (e.type === t.CONV_C2C) r.push(e.toAccount);
                  else if (e.type === t.CONV_GROUP) {
                    var i = e.toAccount;
                    n.tim.groupController.hasLocalGroup(i)
                      ? (e.groupProfile = n.tim.groupController.getLocalGroupProfile(
                          i
                        ))
                      : o.push(i);
                  }
                }),
                  r.length > 0 &&
                    this.tim
                      .getUserProfile({ userIDList: r })
                      .then(function (e) {
                        var t = e.data;
                        re(t)
                          ? t.forEach(function (e) {
                              n.conversationMap.get(
                                "C2C".concat(e.userID)
                              ).userProfile = e;
                            })
                          : (n.conversationMap.get(
                              "C2C".concat(t.userID)
                            ).userProfile = t);
                      }),
                  o.length > 0 &&
                    this.tim.groupController
                      .getGroupProfileAdvance({
                        groupIDList: o,
                        responseFilter: {
                          groupBaseInfoFilter: ["Type", "Name", "FaceUrl"],
                        },
                      })
                      .then(function (e) {
                        e.data.successGroupList.forEach(function (e) {
                          var t = "GROUP".concat(e.groupID);
                          if (n.conversationMap.has(t)) {
                            var r = n.conversationMap.get(t);
                            he(
                              r.groupProfile,
                              e,
                              [],
                              [null, void 0, "", 0, NaN]
                            ),
                              !r.subType && e.type && (r.subType = e.type);
                          }
                        });
                      });
              }
            },
          },
          {
            key: "_updateUserOrGroupProfileCompletely",
            value: function (e) {
              var n = this;
              return e.type === t.CONV_C2C
                ? this.tim
                    .getUserProfile({ userIDList: [e.toAccount] })
                    .then(function (t) {
                      var r = t.data;
                      return 0 === r.length
                        ? Hr(
                            new ht({
                              code: dt.USER_OR_GROUP_NOT_FOUND,
                              message: Ht,
                            })
                          )
                        : ((e.userProfile = r[0]),
                          (e._isInfoCompleted = !0),
                          n._unshiftConversation(e),
                          Fr({ conversation: e }));
                    })
                : this.tim
                    .getGroupProfile({ groupID: e.toAccount })
                    .then(function (t) {
                      return (
                        (e.groupProfile = t.data.group),
                        (e._isInfoCompleted = !0),
                        n._unshiftConversation(e),
                        Fr({ conversation: e })
                      );
                    });
            },
          },
          {
            key: "_unshiftConversation",
            value: function (e) {
              e instanceof xa &&
                !this.conversationMap.has(e.conversationID) &&
                ((this.conversationMap = new Map(
                  [[e.conversationID, e]].concat(_(this.conversationMap))
                )),
                this._setStorageConversationList(),
                this._emitConversationUpdate(!0, !1));
            },
          },
          {
            key: "deleteLocalConversation",
            value: function (e) {
              this.conversationMap.delete(e),
                this._setStorageConversationList(),
                this.emitInnerEvent(Er, e),
                this._emitConversationUpdate(!0, !1);
            },
          },
          {
            key: "_getConversationOptions",
            value: function (e) {
              var t = [],
                n = e
                  .filter(function (e) {
                    var t = e.lastMsg;
                    return ne(t);
                  })
                  .map(function (e) {
                    if (1 === e.type) {
                      var n = {
                        userID: e.userID,
                        nick: e.c2CNick,
                        avatar: e.c2CImage,
                      };
                      return (
                        t.push(n),
                        {
                          conversationID: "C2C".concat(e.userID),
                          type: "C2C",
                          lastMessage: {
                            lastTime: e.time,
                            lastSequence: e.sequence,
                            fromAccount: e.lastC2CMsgFromAccount,
                            messageForShow: e.messageShow,
                            type: e.lastMsg.elements[0]
                              ? e.lastMsg.elements[0].type
                              : null,
                            payload: e.lastMsg.elements[0]
                              ? e.lastMsg.elements[0].content
                              : null,
                          },
                          userProfile: new Da(n),
                          peerReadTime: e.c2cPeerReadTime,
                        }
                      );
                    }
                    return {
                      conversationID: "GROUP".concat(e.groupID),
                      type: "GROUP",
                      lastMessage: {
                        lastTime: e.time,
                        lastSequence: e.messageReadSeq + e.unreadCount,
                        fromAccount: e.msgGroupFromAccount,
                        messageForShow: e.messageShow,
                        type: e.lastMsg.elements[0]
                          ? e.lastMsg.elements[0].type
                          : null,
                        payload: e.lastMsg.elements[0]
                          ? e.lastMsg.elements[0].content
                          : null,
                      },
                      groupProfile: new ba({
                        groupID: e.groupID,
                        name: e.groupNick,
                        avatar: e.groupImage,
                      }),
                      unreadCount: e.unreadCount,
                      peerReadTime: 0,
                    };
                  });
              return t.length > 0 && this.emitInnerEvent(Mr, t), n;
            },
          },
          {
            key: "_emitConversationUpdate",
            value: function () {
              var t =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                n =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                r = _(this.conversationMap.values());
              n && this.emitInnerEvent(Cr, r),
                t && this.emitOuterEvent(e.CONVERSATION_LIST_UPDATED, r);
            },
          },
          {
            key: "_conversationMapTreeShaking",
            value: function (e) {
              var n = this,
                r = new Map(_(this.conversationMap));
              e.forEach(function (e) {
                return r.delete(e.conversationID);
              }),
                r.has(t.CONV_SYSTEM) && r.delete(t.CONV_SYSTEM);
              var o = this.tim.groupController.getJoinedAVChatRoom();
              o &&
                o.forEach(function (e) {
                  r.delete("".concat(t.CONV_GROUP).concat(e));
                }),
                _(r.keys()).forEach(function (e) {
                  return n.conversationMap.delete(e);
                });
            },
          },
          {
            key: "reset",
            value: function () {
              (this.pagingStatus = Ue.NOT_START),
                (this.pagingTimeStamp = 0),
                this.conversationMap.clear(),
                this.resetReady(),
                this.tim.innerEmitter.once(
                  xn,
                  this._initLocalConversationList,
                  this
                );
            },
          },
        ]),
        s
      );
    })(Pr),
    Ha = (function () {
      function e(t) {
        if ((r(this, e), void 0 === t))
          throw new ht({
            code: dt.MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS,
            message: Mt,
          });
        if (void 0 === t.tim)
          throw new ht({
            code: dt.MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS,
            message: "".concat(Mt, ".tim"),
          });
        (this.list = new Map()), (this.tim = t.tim), this._initializeOptions(t);
      }
      return (
        i(e, [
          {
            key: "getLocalOldestMessageByConversationID",
            value: function (e) {
              if (!e) return null;
              if (!this.list.has(e)) return null;
              var t = this.list.get(e).values();
              return t ? t.next().value : null;
            },
          },
          {
            key: "_initializeOptions",
            value: function (e) {
              this.options = {};
              var t = {
                memory: {
                  maxDatasPerKey: 100,
                  maxBytesPerData: 256,
                  maxKeys: 0,
                },
                cache: { maxDatasPerKey: 10, maxBytesPerData: 256, maxKeys: 0 },
              };
              for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                  if (void 0 === e[n]) {
                    this.options[n] = t[n];
                    continue;
                  }
                  var r = t[n];
                  for (var o in r)
                    if (Object.prototype.hasOwnProperty.call(r, o)) {
                      if (void 0 === e[n][o]) {
                        this.options[n][o] = r[o];
                        continue;
                      }
                      this.options[n][o] = e[n][o];
                    }
                }
            },
          },
          {
            key: "pushIn",
            value: function (e) {
              var t = e.conversationID,
                n = e.ID,
                r = !0;
              return (
                this.list.has(t) || this.list.set(t, new Map()),
                this.list.has(t) && this.list.get(t).has(n)
                  ? (r = !1)
                  : this.list.get(t).set(n, e),
                r
              );
            },
          },
          {
            key: "unshift",
            value: function (e) {
              re(e)
                ? e.length > 0 && this._unshiftMultipleMessages(e)
                : this._unshiftSingleMessage(e);
            },
          },
          {
            key: "_unshiftSingleMessage",
            value: function (e) {
              var t = e.conversationID,
                n = e.ID;
              if (!this.list.has(t))
                return (
                  this.list.set(t, new Map()), void this.list.get(t).set(n, e)
                );
              var r = Array.from(this.list.get(t));
              r.unshift([n, e]), this.list.set(t, new Map(r));
            },
          },
          {
            key: "_unshiftMultipleMessages",
            value: function (e) {
              for (
                var t = e.length,
                  n = [],
                  r = e[0].conversationID,
                  o = this.list.has(r) ? Array.from(this.list.get(r)) : [],
                  i = 0;
                i < t;
                i++
              )
                n.push([e[i].ID, e[i]]);
              this.list.set(r, new Map(n.concat(o)));
            },
          },
          {
            key: "remove",
            value: function (e) {
              var t = e.conversationID,
                n = e.ID;
              this.list.has(t) && this.list.get(t).delete(n);
            },
          },
          {
            key: "revoke",
            value: function (e, t, n) {
              if ((J.debug("revoke message", e, t, n), this.list.has(e))) {
                var r,
                  o = M(this.list.get(e));
                try {
                  for (o.s(); !(r = o.n()).done; ) {
                    var i = v(r.value, 2)[1];
                    if (
                      i.sequence === t &&
                      !i.isRevoked &&
                      (oe(n) || i.random === n)
                    )
                      return (i.isRevoked = !0), i;
                  }
                } catch (s) {
                  o.e(s);
                } finally {
                  o.f();
                }
              }
              return null;
            },
          },
          {
            key: "removeByConversationID",
            value: function (e) {
              this.list.has(e) && this.list.delete(e);
            },
          },
          {
            key: "updateMessageIsPeerReadProperty",
            value: function (e, t) {
              var n = [];
              if (this.list.has(e)) {
                var r,
                  o = M(this.list.get(e));
                try {
                  for (o.s(); !(r = o.n()).done; ) {
                    var i = v(r.value, 2)[1];
                    i.time <= t &&
                      !i.isPeerRead &&
                      "out" === i.flow &&
                      ((i.isPeerRead = !0), n.push(i));
                  }
                } catch (s) {
                  o.e(s);
                } finally {
                  o.f();
                }
                J.log(
                  "MessagesList.updateMessageIsPeerReadProperty conversationID="
                    .concat(e, " peerReadTime=")
                    .concat(t, " count=")
                    .concat(n.length)
                );
              }
              return n;
            },
          },
          {
            key: "hasLocalMessageList",
            value: function (e) {
              return this.list.has(e);
            },
          },
          {
            key: "getLocalMessageList",
            value: function (e) {
              return this.hasLocalMessageList(e)
                ? _(this.list.get(e).values())
                : [];
            },
          },
          {
            key: "hasLocalMessage",
            value: function (e, t) {
              return !!this.hasLocalMessageList(e) && this.list.get(e).has(t);
            },
          },
          {
            key: "getLocalMessage",
            value: function (e, t) {
              return this.hasLocalMessage(e, t)
                ? this.list.get(e).get(t)
                : null;
            },
          },
          {
            key: "reset",
            value: function () {
              this.list.clear();
            },
          },
        ]),
        e
      );
    })(),
    Ka = (function () {
      function e(t) {
        r(this, e), (this.tim = t);
      }
      return (
        i(e, [
          {
            key: "setMessageRead",
            value: function (e) {
              var n = e.conversationID,
                r = e.messageID,
                o = this.tim.conversationController.getLocalConversation(n);
              if (
                (J.log(
                  "ReadReportHandler.setMessageRead conversationID="
                    .concat(n, " unreadCount=")
                    .concat(o ? o.unreadCount : 0)
                ),
                !o || 0 === o.unreadCount)
              )
                return Fr();
              var i = r
                ? this.tim.messageController.getLocalMessage(n, r)
                : null;
              switch (o.type) {
                case t.CONV_C2C:
                  return this._setC2CMessageRead({
                    conversationID: n,
                    lastMessageTime: i ? i.time : o.lastMessage.lastTime,
                  });
                case t.CONV_GROUP:
                  return this._setGroupMessageRead({
                    conversationID: n,
                    lastMessageSeq: i ? i.sequence : o.lastMessage.lastSequence,
                  });
                case t.CONV_SYSTEM:
                  return (o.unreadCount = 0), Fr();
                default:
                  return Fr();
              }
            },
          },
          {
            key: "_setC2CMessageRead",
            value: function (e) {
              var t = this,
                n = e.conversationID,
                r = e.lastMessageTime;
              J.log(
                "ReadReportHandler._setC2CMessageRead conversationID="
                  .concat(n, " lastMessageTime=")
                  .concat(r)
              ),
                Z(r) ||
                  J.warn(
                    "ReadReportHandler._setC2CMessageRead 请勿修改 Conversation.lastMessage.lastTime，否则可能会导致已读上报结果不准确"
                  );
              var o = new ro();
              return (
                o.setMethod(vo).setText("".concat(n, "-").concat(r)).setStart(),
                this.tim.messageController
                  .request({
                    name: "conversation",
                    action: "setC2CMessageRead",
                    param: {
                      C2CMsgReaded: {
                        cookie: "",
                        C2CMsgReadedItem: [
                          {
                            toAccount: n.replace("C2C", ""),
                            lastMessageTime: r,
                            receipt: 1,
                          },
                        ],
                      },
                    },
                  })
                  .then(function () {
                    return (
                      o
                        .setCode(0)
                        .setNetworkType(t.tim.netMonitor.getNetworkType())
                        .setEnd(),
                      J.log("ReadReportHandler._setC2CMessageRead ok."),
                      t._updateIsReadAfterReadReport({
                        conversationID: n,
                        lastMessageTime: r,
                      }),
                      t._updateUnreadCount(n),
                      new Ur()
                    );
                  })
                  .catch(function (e) {
                    return (
                      t.tim.netMonitor.probe().then(function (t) {
                        var n = v(t, 2),
                          r = n[0],
                          i = n[1];
                        o.setError(e, r, i).setEnd();
                      }),
                      J.log(
                        "ReadReportHandler._setC2CMessageRead failed. ".concat(
                          de(e)
                        )
                      ),
                      Hr(e)
                    );
                  })
              );
            },
          },
          {
            key: "_setGroupMessageRead",
            value: function (e) {
              var t = this,
                n = e.conversationID,
                r = e.lastMessageSeq;
              J.log(
                "ReadReportHandler._setGroupMessageRead conversationID="
                  .concat(n, " lastMessageSeq=")
                  .concat(r)
              ),
                Z(r) ||
                  J.warn(
                    "ReadReportHandler._setGroupMessageRead 请勿修改 Conversation.lastMessage.lastSequence，否则可能会导致已读上报结果不准确"
                  );
              var o = new ro();
              return (
                o.setMethod(_o).setText("".concat(n, "-").concat(r)).setStart(),
                this.tim.messageController
                  .request({
                    name: "conversation",
                    action: "setGroupMessageRead",
                    param: {
                      groupID: n.replace("GROUP", ""),
                      messageReadSeq: r,
                    },
                  })
                  .then(function () {
                    return (
                      o
                        .setCode(0)
                        .setNetworkType(t.tim.netMonitor.getNetworkType())
                        .setEnd(),
                      J.log("ReadReportHandler._setGroupMessageRead ok."),
                      t._updateIsReadAfterReadReport({
                        conversationID: n,
                        lastMessageSeq: r,
                      }),
                      t._updateUnreadCount(n),
                      new Ur()
                    );
                  })
                  .catch(function (e) {
                    return (
                      t.tim.netMonitor.probe().then(function (t) {
                        var n = v(t, 2),
                          r = n[0],
                          i = n[1];
                        o.setError(e, r, i).setEnd();
                      }),
                      J.log(
                        "ReadReportHandler._setGroupMessageRead failed. ".concat(
                          de(e)
                        )
                      ),
                      Hr(e)
                    );
                  })
              );
            },
          },
          {
            key: "_updateUnreadCount",
            value: function (e) {
              var t = this.tim,
                n = t.conversationController,
                r = t.messageController,
                o = n.getLocalConversation(e),
                i = r.getLocalMessageList(e);
              o &&
                ((o.unreadCount = i.filter(function (e) {
                  return !e.isRead;
                }).length),
                J.log(
                  "ReadReportHandler._updateUnreadCount conversationID="
                    .concat(o.conversationID, " unreadCount=")
                    .concat(o.unreadCount)
                ));
            },
          },
          {
            key: "_updateIsReadAfterReadReport",
            value: function (e) {
              var t = e.conversationID,
                n = e.lastMessageSeq,
                r = e.lastMessageTime,
                o = this.tim.messageController.getLocalMessageList(t);
              if (0 !== o.length)
                for (var i, s = o.length - 1; s >= 0; s--)
                  if (
                    ((i = o[s]), !((r && i.time > r) || (n && i.sequence > n)))
                  ) {
                    if ("in" === i.flow && i.isRead) break;
                    i.setIsRead(!0);
                  }
            },
          },
          {
            key: "updateIsRead",
            value: function (e) {
              var n = this.tim,
                r = n.conversationController,
                o = n.messageController,
                i = r.getLocalConversation(e),
                s = o.getLocalMessageList(e);
              if (i && 0 !== s.length && !ke(i.type)) {
                for (var a = [], u = 0; u < s.length; u++)
                  "in" !== s[u].flow
                    ? "out" !== s[u].flow || s[u].isRead || s[u].setIsRead(!0)
                    : a.push(s[u]);
                var c = 0;
                if (i.type === t.CONV_C2C) {
                  var l = a.slice(-i.unreadCount).filter(function (e) {
                    return e.isRevoked;
                  }).length;
                  c = a.length - i.unreadCount - l;
                } else c = a.length - i.unreadCount;
                for (var p = 0; p < c && !a[p].isRead; p++) a[p].setIsRead(!0);
              }
            },
          },
        ]),
        e
      );
    })(),
    Ba = (function () {
      function e(t) {
        var n = t.tim,
          o = t.messageController;
        r(this, e),
          (this.tim = n),
          (this.messageController = o),
          (this.completedMap = new Map()),
          this._initListener();
      }
      return (
        i(e, [
          {
            key: "getMessageList",
            value: function (e) {
              var t = this,
                n = e.conversationID,
                r = e.nextReqMessageID,
                o = e.count;
              if (
                this.tim.groupController.checkJoinedAVChatRoomByID(
                  n.replace("GROUP", "")
                )
              )
                return (
                  J.log(
                    "GetMessageHandler.getMessageList not available in avchatroom. conversationID=".concat(
                      n
                    )
                  ),
                  Fr({ messageList: [], nextReqMessageID: "", isCompleted: !0 })
                );
              (oe(o) || o > 15) && (o = 15);
              var i = this._computeLeftCount({
                conversationID: n,
                nextReqMessageID: r,
              });
              return (
                J.log(
                  "GetMessageHandler.getMessageList. conversationID="
                    .concat(n, " leftCount=")
                    .concat(i, " count=")
                    .concat(o, " nextReqMessageID=")
                    .concat(r)
                ),
                this._needGetHistory({
                  conversationID: n,
                  leftCount: i,
                  count: o,
                })
                  ? this.messageController
                      .getHistoryMessages({ conversationID: n, count: 20 })
                      .then(function () {
                        return (
                          (i = t._computeLeftCount({
                            conversationID: n,
                            nextReqMessageID: r,
                          })),
                          new Ur(
                            t._computeResult({
                              conversationID: n,
                              nextReqMessageID: r,
                              count: o,
                              leftCount: i,
                            })
                          )
                        );
                      })
                  : (J.log(
                      "GetMessageHandler.getMessageList. get messagelist from memory"
                    ),
                    Fr(
                      this._computeResult({
                        conversationID: n,
                        nextReqMessageID: r,
                        count: o,
                        leftCount: i,
                      })
                    ))
              );
            },
          },
          {
            key: "setCompleted",
            value: function (e) {
              J.log(
                "GetMessageHandler.setCompleted. conversationID=".concat(e)
              ),
                this.completedMap.set(e, !0);
            },
          },
          {
            key: "deleteCompletedItem",
            value: function (e) {
              J.log(
                "GetMessageHandler.deleteCompletedItem. conversationID=".concat(
                  e
                )
              ),
                this.completedMap.delete(e);
            },
          },
          {
            key: "_initListener",
            value: function () {
              var e = this;
              this.tim.innerEmitter.on(kr, function () {
                e.setCompleted(t.CONV_SYSTEM);
              }),
                this.tim.innerEmitter.on(Tr, function (n) {
                  var r = n.data;
                  e.setCompleted("".concat(t.CONV_GROUP).concat(r));
                });
            },
          },
          {
            key: "_getMessageListSize",
            value: function (e) {
              return this.messageController.getLocalMessageList(e).length;
            },
          },
          {
            key: "_needGetHistory",
            value: function (e) {
              var n = e.conversationID,
                r = e.leftCount,
                o = e.count,
                i = this.tim.conversationController.getLocalConversation(n),
                s = !!i && i.type === t.CONV_SYSTEM,
                a = !!i && i.subType === t.GRP_AVCHATROOM;
              return !s && !a && r < o && !this.completedMap.has(n);
            },
          },
          {
            key: "_computeResult",
            value: function (e) {
              var t = e.conversationID,
                n = e.nextReqMessageID,
                r = e.count,
                o = e.leftCount,
                i = this._computeMessageList({
                  conversationID: t,
                  nextReqMessageID: n,
                  count: r,
                }),
                s = this._computeIsCompleted({
                  conversationID: t,
                  leftCount: o,
                  count: r,
                }),
                a = this._computeNextReqMessageID({
                  messageList: i,
                  isCompleted: s,
                  conversationID: t,
                });
              return (
                J.log(
                  "GetMessageHandler._computeResult. conversationID="
                    .concat(t, " leftCount=")
                    .concat(o, " count=")
                    .concat(r, " nextReqMessageID=")
                    .concat(a, " nums=")
                    .concat(i.length, " isCompleted=")
                    .concat(s)
                ),
                { messageList: i, nextReqMessageID: a, isCompleted: s }
              );
            },
          },
          {
            key: "_computeNextReqMessageID",
            value: function (e) {
              var t = e.messageList,
                n = e.isCompleted,
                r = e.conversationID;
              if (!n) return 0 === t.length ? "" : t[0].ID;
              var o = this.messageController.getLocalMessageList(r);
              return 0 === o.length ? "" : o[0].ID;
            },
          },
          {
            key: "_computeMessageList",
            value: function (e) {
              var t = e.conversationID,
                n = e.nextReqMessageID,
                r = e.count,
                o = this.messageController.getLocalMessageList(t),
                i = this._computeIndexEnd({
                  nextReqMessageID: n,
                  messageList: o,
                }),
                s = this._computeIndexStart({ indexEnd: i, count: r });
              return o.slice(s, i);
            },
          },
          {
            key: "_computeIndexEnd",
            value: function (e) {
              var t = e.messageList,
                n = void 0 === t ? [] : t,
                r = e.nextReqMessageID;
              return r
                ? n.findIndex(function (e) {
                    return e.ID === r;
                  })
                : n.length;
            },
          },
          {
            key: "_computeIndexStart",
            value: function (e) {
              var t = e.indexEnd,
                n = e.count;
              return t > n ? t - n : 0;
            },
          },
          {
            key: "_computeLeftCount",
            value: function (e) {
              var t = e.conversationID,
                n = e.nextReqMessageID;
              return n
                ? this.messageController
                    .getLocalMessageList(t)
                    .findIndex(function (e) {
                      return e.ID === n;
                    })
                : this._getMessageListSize(t);
            },
          },
          {
            key: "_computeIsCompleted",
            value: function (e) {
              var t = e.conversationID;
              return !!(e.leftCount <= e.count && this.completedMap.has(t));
            },
          },
          {
            key: "reset",
            value: function () {
              J.log("GetMessageHandler.reset"), this.completedMap.clear();
            },
          },
        ]),
        e
      );
    })(),
    Va = function e(t) {
      r(this, e), (this.value = t), (this.next = null);
    },
    ja = (function () {
      function e(t) {
        r(this, e),
          (this.MAX_LENGTH = t),
          (this.pTail = null),
          (this.pNodeToDel = null),
          (this.map = new Map()),
          J.log("SinglyLinkedList init MAX_LENGTH=".concat(this.MAX_LENGTH));
      }
      return (
        i(e, [
          {
            key: "pushIn",
            value: function (e) {
              var t = new Va(e);
              if (this.map.size < this.MAX_LENGTH)
                null === this.pTail
                  ? ((this.pTail = t), (this.pNodeToDel = t))
                  : ((this.pTail.next = t), (this.pTail = t)),
                  this.map.set(e, 1);
              else {
                var n = this.pNodeToDel;
                (this.pNodeToDel = this.pNodeToDel.next),
                  this.map.delete(n.value),
                  (n.next = null),
                  (n = null),
                  (this.pTail.next = t),
                  (this.pTail = t),
                  this.map.set(e, 1);
              }
            },
          },
          {
            key: "has",
            value: function (e) {
              return this.map.has(e);
            },
          },
          {
            key: "tail",
            value: function () {
              return this.pTail;
            },
          },
          {
            key: "size",
            value: function () {
              return this.map.size;
            },
          },
          {
            key: "data",
            value: function () {
              return Array.from(this.map.keys());
            },
          },
          {
            key: "reset",
            value: function () {
              for (var e; null !== this.pNodeToDel; )
                (e = this.pNodeToDel),
                  (this.pNodeToDel = this.pNodeToDel.next),
                  (e.next = null),
                  (e = null);
              (this.pTail = null), this.map.clear();
            },
          },
        ]),
        e
      );
    })(),
    Ya = (function () {
      function e(t) {
        r(this, e), (this.tim = t);
      }
      return (
        i(e, [
          {
            key: "upload",
            value: function (e) {
              switch (e.type) {
                case t.MSG_IMAGE:
                  return this._uploadImage(e);
                case t.MSG_FILE:
                  return this._uploadFile(e);
                case t.MSG_AUDIO:
                  return this._uploadAudio(e);
                case t.MSG_VIDEO:
                  return this._uploadVideo(e);
                default:
                  return Promise.resolve();
              }
            },
          },
          {
            key: "_uploadImage",
            value: function (e) {
              var t = this.tim,
                n = t.uploadController,
                r = t.messageController,
                o = e.getElements()[0],
                i = r.getMessageOptionByID(e.messageID);
              return n
                .uploadImage({
                  file: i.payload.file,
                  to: i.to,
                  onProgress: function (e) {
                    if ((o.updatePercent(e), se(i.onProgress)))
                      try {
                        i.onProgress(e);
                      } catch (t) {
                        return Hr(
                          new ht({
                            code: dt.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                            message: "".concat(Dt),
                          })
                        );
                      }
                  },
                })
                .then(function (e) {
                  var t,
                    n = e.location,
                    r = e.fileType,
                    i = e.fileSize,
                    s = Me(n);
                  return (
                    o.updateImageFormat(r),
                    o.updateImageInfoArray({ size: i, url: s }),
                    (t = o._imageMemoryURL),
                    N
                      ? new Promise(function (e, n) {
                          wx.getImageInfo({
                            src: t,
                            success: function (t) {
                              e({ width: t.width, height: t.height });
                            },
                            fail: function () {
                              e({ width: 0, height: 0 });
                            },
                          });
                        })
                      : x && 9 === F
                      ? Promise.resolve({ width: 0, height: 0 })
                      : new Promise(function (e, n) {
                          var r = new Image();
                          (r.onload = function () {
                            e({ width: this.width, height: this.height }),
                              (r = null);
                          }),
                            (r.onerror = function () {
                              e({ width: 0, height: 0 }), (r = null);
                            }),
                            (r.src = t);
                        })
                  );
                })
                .then(function (t) {
                  var n = t.width,
                    r = t.height;
                  return o.updateImageInfoArray({ width: n, height: r }), e;
                });
            },
          },
          {
            key: "_uploadFile",
            value: function (e) {
              var t = this.tim,
                n = t.uploadController,
                r = t.messageController,
                o = e.getElements()[0],
                i = r.getMessageOptionByID(e.messageID);
              return n
                .uploadFile({
                  file: i.payload.file,
                  to: i.to,
                  onProgress: function (e) {
                    if ((o.updatePercent(e), se(i.onProgress)))
                      try {
                        i.onProgress(e);
                      } catch (t) {
                        return Hr(
                          new ht({
                            code: dt.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                            message: "".concat(Dt),
                          })
                        );
                      }
                  },
                })
                .then(function (t) {
                  var n = t.location,
                    r = Me(n);
                  return o.updateFileUrl(r), e;
                });
            },
          },
          {
            key: "_uploadAudio",
            value: function (e) {
              var t = this.tim,
                n = t.uploadController,
                r = t.messageController,
                o = e.getElements()[0],
                i = r.getMessageOptionByID(e.messageID);
              return n
                .uploadAudio({
                  file: i.payload.file,
                  to: i.to,
                  onProgress: function (e) {
                    if ((o.updatePercent(e), se(i.onProgress)))
                      try {
                        i.onProgress(e);
                      } catch (t) {
                        return Hr(
                          new ht({
                            code: dt.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                            message: "".concat(Dt),
                          })
                        );
                      }
                  },
                })
                .then(function (t) {
                  var n = t.location,
                    r = Me(n);
                  return o.updateAudioUrl(r), e;
                });
            },
          },
          {
            key: "_uploadVideo",
            value: function (e) {
              var t = this.tim,
                n = t.uploadController,
                r = t.messageController,
                o = e.getElements()[0],
                i = r.getMessageOptionByID(e.messageID);
              return n
                .uploadVideo({
                  file: i.payload.file,
                  to: i.to,
                  onProgress: function (e) {
                    if ((o.updatePercent(e), se(i.onProgress)))
                      try {
                        i.onProgress(e);
                      } catch (t) {
                        return Hr(
                          new ht({
                            code: dt.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                            message: "".concat(Dt),
                          })
                        );
                      }
                  },
                })
                .then(function (t) {
                  var n = Me(t.location);
                  return o.updateVideoUrl(n), e;
                });
            },
          },
        ]),
        e
      );
    })(),
    $a = (function (n) {
      c(s, n);
      var o = y(s);
      function s(e) {
        var t;
        return (
          r(this, s),
          (t = o.call(this, e))._initializeMembers(),
          t._initializeListener(),
          t._initialzeHandlers(),
          (t.messageOptionMap = new Map()),
          t
        );
      }
      return (
        i(s, [
          {
            key: "_initializeMembers",
            value: function () {
              (this.messagesList = new Ha({ tim: this.tim })),
                (this.currentMessageKey = {}),
                (this.singlyLinkedList = new ja(100)),
                (this._peerReadTimeMap = new Map());
            },
          },
          {
            key: "_initialzeHandlers",
            value: function () {
              (this.readReportHandler = new Ka(this.tim, this)),
                (this.getMessageHandler = new Ba({
                  messageController: this,
                  tim: this.tim,
                })),
                (this.uploadFileHandler = new Ya(this.tim));
            },
          },
          {
            key: "reset",
            value: function () {
              this.messagesList.reset(),
                (this.currentMessageKey = {}),
                this.getMessageHandler.reset(),
                this.singlyLinkedList.reset(),
                this._peerReadTimeMap.clear(),
                this.messageOptionMap.clear();
            },
          },
          {
            key: "_initializeListener",
            value: function () {
              var e = this.tim.innerEmitter;
              e.on(rr, this._onReceiveC2CMessage, this),
                e.on(Hn, this._onSyncMessagesProcessing, this),
                e.on(Kn, this._onSyncMessagesFinished, this),
                e.on(or, this._onReceiveGroupMessage, this),
                e.on(ir, this._onReceiveGroupTips, this),
                e.on(sr, this._onReceiveSystemNotice, this),
                e.on(lr, this._onReceiveGroupMessageRevokedNotice, this),
                e.on(pr, this._onReceiveC2CMessageRevokedNotice, this),
                e.on(hr, this._onC2CMessageReadReceipt, this),
                e.on(Er, this._clearConversationMessages, this);
            },
          },
          {
            key: "_guardForAVChatRoom",
            value: function (e) {
              if (e.conversationType === t.CONV_GROUP) {
                var n = this.tim.groupController,
                  r = e.to;
                return n.hasLocalGroup(r)
                  ? Promise.resolve()
                  : n.getGroupProfile({ groupID: r }).then(function (n) {
                      var o = n.data.group.type;
                      return (
                        J.log(
                          "MessageController._guardForAVChatRoom. groupID="
                            .concat(r, " type=")
                            .concat(o)
                        ),
                        o === t.GRP_AVCHATROOM
                          ? (J.warn(
                              "MessageController._guardForAVChatRoom sendMessage not allowed. userId="
                                .concat(e.from, " 未加入群 groupID=")
                                .concat(
                                  r,
                                  "。发消息前先使用 joinGroup 接口申请加群，详细请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#joinGroup"
                                )
                            ),
                            Hr(
                              new ht({
                                code: dt.MESSAGE_SEND_FAIL,
                                message: Ct,
                                data: { message: e },
                              })
                            ))
                          : Promise.resolve()
                      );
                    });
              }
              return Promise.resolve();
            },
          },
          {
            key: "sendMessageInstance",
            value: function (e, n) {
              var r,
                o = this,
                i = null;
              switch (e.conversationType) {
                case t.CONV_C2C:
                  i = this._handleOnSendC2CMessageSuccess.bind(this);
                  break;
                case t.CONV_GROUP:
                  i = this._handleOnSendGroupMessageSuccess.bind(this);
                  break;
                default:
                  return Hr(
                    new ht({
                      code: dt.MESSAGE_SEND_INVALID_CONVERSATION_TYPE,
                      message: St,
                    })
                  );
              }
              return (
                this.singlyLinkedList.pushIn(e.random),
                this.uploadFileHandler.upload(e).then(function () {
                  return o
                    ._guardForAVChatRoom(e)
                    .then(function () {
                      var i = null;
                      return e.isSendable()
                        ? (o._addSendMessageTotalCount(e),
                          (r = Date.now()),
                          e.conversationType === t.CONV_C2C
                            ? (i = o._createC2CMessagePack(e, n))
                            : e.conversationType === t.CONV_GROUP &&
                              (i = o._createGroupMessagePack(e, n)),
                          o.request(i))
                        : Hr({
                            code: dt.MESSAGE_FILE_URL_IS_EMPTY,
                            message: xt,
                          });
                    })
                    .then(function (n) {
                      return (
                        o._addSendMessageSuccessCount(e, r),
                        e.conversationType === t.CONV_GROUP &&
                          ((e.sequence = n.data.sequence),
                          (e.time = n.data.time),
                          e.generateMessageID(o.tim.context.identifier)),
                        o.messagesList.pushIn(e),
                        i(e, n.data),
                        o.messageOptionMap.delete(e.messageID),
                        o.emitInnerEvent(Bn, {
                          eventDataList: [
                            {
                              conversationID: e.conversationID,
                              unreadCount: 0,
                              type: e.conversationType,
                              subType: e.conversationSubType,
                              lastMessage: e,
                            },
                          ],
                        }),
                        new Ur({ message: e })
                      );
                    })
                    .catch(function (t) {
                      e.status = be.FAIL;
                      var n = new ro();
                      return (
                        n
                          .setMethod(fo)
                          .setMessageType(e.type)
                          .setText(
                            ""
                              .concat(o._generateTjgID(e), "-")
                              .concat(e.type, "-")
                              .concat(e.from, "-")
                              .concat(e.to)
                          )
                          .setStart(),
                        o.probeNetwork().then(function (e) {
                          var r = v(e, 2),
                            o = r[0],
                            i = r[1];
                          n.setError(t, o, i).setEnd();
                        }),
                        J.error(
                          "MessageController.sendMessageInstance error:",
                          t
                        ),
                        Hr(
                          new ht({
                            code: t && t.code ? t.code : dt.MESSAGE_SEND_FAIL,
                            message: t && t.message ? t.message : Ct,
                            data: { message: e },
                          })
                        )
                      );
                    });
                })
              );
            },
          },
          {
            key: "_getSendMessageSpecifiedKey",
            value: function (e) {
              if (e.conversationType === t.CONV_C2C) return $r;
              if (e.conversationType === t.CONV_GROUP) {
                var n = this.tim.groupController.getLocalGroupProfile(e.to);
                if (!n) return;
                var r = n.type;
                if (
                  (function (e) {
                    return e === t.GRP_WORK;
                  })(r)
                )
                  return Wr;
                if (Se(r)) return zr;
                if (Te(r)) return Xr;
                if (De(r)) return Jr;
              }
            },
          },
          {
            key: "_addSendMessageTotalCount",
            value: function (e) {
              var t = this.tim.sumStatController;
              t.addTotalCount(Yr);
              var n = this._getSendMessageSpecifiedKey(e);
              n && t.addTotalCount(n);
            },
          },
          {
            key: "_addSendMessageSuccessCount",
            value: function (e, t) {
              var n = this.tim.sumStatController,
                r = Math.abs(Date.now() - t);
              n.addSuccessCount(Yr), n.addCost(Yr, r);
              var o = this._getSendMessageSpecifiedKey(e);
              o && (n.addSuccessCount(o), n.addCost(o, r));
            },
          },
          {
            key: "resendMessage",
            value: function (e) {
              return (
                (e.isResend = !0),
                (e.status = be.UNSEND),
                this.sendMessageInstance(e)
              );
            },
          },
          {
            key: "_isFileLikeMessage",
            value: function (e) {
              return (
                [t.MSG_IMAGE, t.MSG_FILE, t.MSG_AUDIO, t.MSG_VIDEO].indexOf(
                  e.type
                ) >= 0
              );
            },
          },
          { key: "_resendBinaryTypeMessage", value: function () {} },
          {
            key: "_canIUseOnlineOnlyFlag",
            value: function (e) {
              var n = this.tim.groupController.getJoinedAVChatRoom();
              return (
                !n || !n.includes(e.to) || e.conversationType !== t.CONV_GROUP
              );
            },
          },
          {
            key: "_createC2CMessagePack",
            value: function (e, t) {
              var n = 0,
                r = null;
              return (
                t &&
                  (t.offlinePushInfo && (r = t.offlinePushInfo),
                  !0 === t.onlineUserOnly &&
                    ((n = 1),
                    r ? (r.disablePush = !0) : (r = { disablePush: !0 }))),
                {
                  name: "c2cMessage",
                  action: "create",
                  tjgID: this._generateTjgID(e),
                  param: {
                    toAccount: e.to,
                    msgBody: e.getElements(),
                    msgSeq: e.sequence,
                    msgRandom: e.random,
                    msgLifeTime:
                      this._canIUseOnlineOnlyFlag(e) && n ? 0 : void 0,
                    offlinePushInfo: r
                      ? {
                          pushFlag: !0 === r.disablePush ? 1 : 0,
                          title: r.title || "",
                          desc: r.description || "",
                          ext: r.extension || "",
                          apnsInfo: {
                            badgeMode: !0 === r.ignoreIOSBadge ? 1 : 0,
                          },
                          androidInfo: {
                            OPPOChannelID: r.androidOPPOChannelID || "",
                          },
                        }
                      : void 0,
                  },
                }
              );
            },
          },
          {
            key: "_handleOnSendC2CMessageSuccess",
            value: function (e, t) {
              (e.status = be.SUCCESS), (e.time = t.time);
            },
          },
          {
            key: "_createGroupMessagePack",
            value: function (e, t) {
              var n = 0,
                r = null;
              return (
                t &&
                  (!0 === t.onlineUserOnly && (n = 1),
                  t.offlinePushInfo && (r = t.offlinePushInfo)),
                {
                  name: "groupMessage",
                  action: "create",
                  tjgID: this._generateTjgID(e),
                  param: {
                    groupID: e.to,
                    msgBody: e.getElements(),
                    random: e.random,
                    priority: e.priority,
                    clientSequence: e.clientSequence,
                    onlineOnlyFlag: this._canIUseOnlineOnlyFlag(e) ? n : 0,
                    offlinePushInfo: r
                      ? {
                          pushFlag: !0 === r.disablePush ? 1 : 0,
                          title: r.title || "",
                          desc: r.description || "",
                          ext: r.extension || "",
                          apnsInfo: {
                            badgeMode: !0 === r.ignoreIOSBadge ? 1 : 0,
                          },
                          androidInfo: {
                            OPPOChannelID: r.androidOPPOChannelID || "",
                          },
                        }
                      : void 0,
                  },
                }
              );
            },
          },
          {
            key: "_handleOnSendGroupMessageSuccess",
            value: function (e, t) {
              (e.sequence = t.sequence),
                (e.time = t.time),
                (e.status = be.SUCCESS);
            },
          },
          {
            key: "_onReceiveC2CMessage",
            value: function (n) {
              J.debug(
                "MessageController._onReceiveC2CMessage nums=".concat(
                  n.data.length
                )
              );
              var r = Date.now(),
                o = this._newC2CMessageStoredAndSummary({
                  notifiesList: n.data,
                  type: t.CONV_C2C,
                  C2CRemainingUnreadList: n.C2CRemainingUnreadList,
                }),
                i = o.eventDataList,
                s = o.result;
              if (
                (i.length > 0 &&
                  this.emitInnerEvent(Yn, { eventDataList: i, result: s }),
                s.length > 0)
              ) {
                var a = this.tim.sumStatController;
                a.addTotalCount(Qr),
                  a.addSuccessCount(Qr),
                  a.addCost(Qr, Date.now() - r),
                  this.emitOuterEvent(e.MESSAGE_RECEIVED, s);
              }
            },
          },
          {
            key: "_onReceiveGroupMessage",
            value: function (t) {
              J.debug(
                "MessageController._onReceiveGroupMessage nums=".concat(
                  t.data.length
                )
              );
              var n = Date.now(),
                r = this.newGroupMessageStoredAndSummary(t.data),
                o = r.eventDataList,
                i = r.result;
              if (
                (o.length > 0 &&
                  this.emitInnerEvent($n, {
                    eventDataList: o,
                    result: i,
                    isGroupTip: !1,
                  }),
                i.length > 0)
              ) {
                var s = this.tim.sumStatController;
                s.addTotalCount(Qr),
                  s.addSuccessCount(Qr),
                  s.addCost(Qr, Date.now() - n),
                  this.emitOuterEvent(e.MESSAGE_RECEIVED, i);
              }
            },
          },
          {
            key: "_onReceiveGroupTips",
            value: function (t) {
              var n = Date.now(),
                r = t.data;
              J.debug(
                "MessageController._onReceiveGroupTips nums=".concat(r.length)
              );
              var o = this.newGroupTipsStoredAndSummary(r),
                i = o.eventDataList,
                s = o.result;
              if (
                (i.length > 0 &&
                  this.emitInnerEvent($n, {
                    eventDataList: i,
                    result: s,
                    isGroupTip: !0,
                  }),
                s.length > 0)
              ) {
                var a = this.tim.sumStatController;
                a.addTotalCount(Qr),
                  a.addSuccessCount(Qr),
                  a.addCost(Qr, Date.now() - n),
                  this.emitOuterEvent(e.MESSAGE_RECEIVED, s);
              }
            },
          },
          {
            key: "_onReceiveSystemNotice",
            value: function (t) {
              var n = Date.now(),
                r = t.data,
                o = r.groupSystemNotices,
                i = r.type;
              J.debug(
                "MessageController._onReceiveSystemNotice nums=".concat(
                  o.length
                )
              );
              var s = this.newSystemNoticeStoredAndSummary({
                  notifiesList: o,
                  type: i,
                }),
                a = s.eventDataList,
                u = s.result;
              if (
                (a.length > 0 &&
                  this.emitInnerEvent(Wn, {
                    eventDataList: a,
                    result: u,
                    type: i,
                  }),
                u.length > 0 && "poll" === i)
              ) {
                var c = this.tim.sumStatController;
                c.addTotalCount(Qr),
                  c.addSuccessCount(Qr),
                  c.addCost(Qr, Date.now() - n),
                  this.emitOuterEvent(e.MESSAGE_RECEIVED, u);
              }
            },
          },
          {
            key: "_onReceiveGroupMessageRevokedNotice",
            value: function (t) {
              var n = this;
              J.debug(
                "MessageController._onReceiveGroupMessageRevokedNotice nums=".concat(
                  t.data.length
                )
              );
              var r = [],
                o = null;
              t.data.forEach(function (e) {
                e.elements.revokedInfos.forEach(function (e) {
                  (o = n.messagesList.revoke(
                    "GROUP".concat(e.groupID),
                    e.sequence
                  )) && r.push(o);
                });
              }),
                0 !== r.length &&
                  (this.emitInnerEvent(zn, r),
                  this.emitOuterEvent(e.MESSAGE_REVOKED, r));
            },
          },
          {
            key: "_onReceiveC2CMessageRevokedNotice",
            value: function (t) {
              var n = this;
              J.debug(
                "MessageController._onReceiveC2CMessageRevokedNotice nums=".concat(
                  t.data.length
                )
              );
              var r = [],
                o = null;
              t.data.forEach(function (e) {
                e.c2cMessageRevokedNotify.revokedInfos.forEach(function (e) {
                  var t =
                    n.tim.context.identifier === e.from
                      ? "C2C".concat(e.to)
                      : "C2C".concat(e.from);
                  (o = n.messagesList.revoke(t, e.sequence, e.random)) &&
                    r.push(o);
                });
              }),
                0 !== r.length &&
                  (this.emitInnerEvent(zn, r),
                  this.emitOuterEvent(e.MESSAGE_REVOKED, r));
            },
          },
          {
            key: "_onC2CMessageReadReceipt",
            value: function (e) {
              var t = this;
              e.data.forEach(function (e) {
                var n = e.c2cMessageReadReceipt.to;
                e.c2cMessageReadReceipt.uinPairReadArray.forEach(function (e) {
                  var r = e.peerReadTime;
                  J.debug(
                    "MessageController._onC2CMessageReadReceipt to="
                      .concat(n, " peerReadTime=")
                      .concat(r)
                  );
                  var o = "C2C".concat(n);
                  t.recordPeerReadTime(o, r),
                    t._updateMessageIsPeerReadProperty(o, r);
                });
              });
            },
          },
          {
            key: "_updateMessageIsPeerReadProperty",
            value: function (n, r) {
              if (n.startsWith(t.CONV_C2C) && r > 0) {
                var o = this.messagesList.updateMessageIsPeerReadProperty(n, r);
                o.length > 0 && this.emitOuterEvent(e.MESSAGE_READ_BY_PEER, o);
              }
            },
          },
          {
            key: "getPeerReadTime",
            value: function (e) {
              var t = this;
              if (!Oe(e)) {
                var n = new ro();
                return (
                  n.setMethod(Co).setStart(),
                  J.log(
                    "MessageController.getPeerReadTime userIDList:".concat(e)
                  ),
                  this.request({
                    name: "c2cPeerReadTime",
                    action: "get",
                    param: { userIDList: e },
                  })
                    .then(function (r) {
                      var o = r.data.peerReadTimeList;
                      J.log(
                        "MessageController.getPeerReadTime ok. peerReadTimeList:".concat(
                          o
                        )
                      );
                      for (var i = "", s = 0; s < e.length; s++)
                        (i += "".concat(e[s], "-").concat(o[s], " ")),
                          o[s] > 0 &&
                            t.recordPeerReadTime("C2C".concat(e[s]), o[s]);
                      n.setCode(0)
                        .setNetworkType(t.getNetworkType())
                        .setText(i)
                        .setEnd();
                    })
                    .catch(function (e) {
                      t.probeNetwork().then(function (t) {
                        var r = v(t, 2),
                          o = r[0],
                          i = r[1];
                        n.setError(e, o, i).setEnd();
                      }),
                        J.warn(
                          "MessageController.getPeerReadTime failed. error:",
                          e
                        );
                    })
                );
              }
            },
          },
          {
            key: "recordPeerReadTime",
            value: function (e, t) {
              this._peerReadTimeMap.has(e)
                ? this._peerReadTimeMap.get(e) < t &&
                  this._peerReadTimeMap.set(e, t)
                : this._peerReadTimeMap.set(e, t);
            },
          },
          {
            key: "_clearConversationMessages",
            value: function (e) {
              var t = e.data;
              this.messagesList.removeByConversationID(t),
                this.getMessageHandler.deleteCompletedItem(t);
            },
          },
          {
            key: "_pushIntoNoticeResult",
            value: function (e, t) {
              return (
                !(
                  !this.messagesList.pushIn(t) ||
                  this.singlyLinkedList.has(t.random)
                ) && (e.push(t), !0)
              );
            },
          },
          {
            key: "_newC2CMessageStoredAndSummary",
            value: function (e) {
              for (
                var n = e.notifiesList,
                  r = e.type,
                  o = e.C2CRemainingUnreadList,
                  i = e.isFromSync,
                  s = null,
                  a = [],
                  u = [],
                  c = {},
                  l = this.tim.bigDataHallwayController,
                  p = 0,
                  h = n.length;
                p < h;
                p++
              ) {
                var d = n[p];
                if (
                  ((d.currentUser = this.tim.context.identifier),
                  (d.conversationType = r),
                  (d.isSystemMessage = !!d.isSystemMessage),
                  (s = new Dn(d)),
                  (d.elements = l.parseElements(d.elements, d.from)),
                  s.setElement(d.elements),
                  !i)
                )
                  if (!this._pushIntoNoticeResult(u, s)) continue;
                void 0 === c[s.conversationID]
                  ? (c[s.conversationID] =
                      a.push({
                        conversationID: s.conversationID,
                        unreadCount: "out" === s.flow ? 0 : 1,
                        type: s.conversationType,
                        subType: s.conversationSubType,
                        lastMessage: s,
                      }) - 1)
                  : ((a[c[s.conversationID]].type = s.conversationType),
                    (a[c[s.conversationID]].subType = s.conversationSubType),
                    (a[c[s.conversationID]].lastMessage = s),
                    "in" === s.flow && a[c[s.conversationID]].unreadCount++);
              }
              if (re(o))
                for (
                  var f = function (e, n) {
                      var r = a.find(function (t) {
                        return t.conversationID === "C2C".concat(o[e].from);
                      });
                      r
                        ? (r.unreadCount += o[e].count)
                        : a.push({
                            conversationID: "C2C".concat(o[e].from),
                            unreadCount: o[e].count,
                            type: t.CONV_C2C,
                            lastMsgTime: o[e].lastMsgTime,
                          });
                    },
                    g = 0,
                    m = o.length;
                  g < m;
                  g++
                )
                  f(g);
              return { eventDataList: a, result: u };
            },
          },
          {
            key: "newGroupMessageStoredAndSummary",
            value: function (e) {
              var n = null,
                r = [],
                o = {},
                i = [],
                s = t.CONV_GROUP,
                a = this.tim.bigDataHallwayController,
                u = e.length;
              u > 1 &&
                e.sort(function (e, t) {
                  return e.sequence - t.sequence;
                });
              for (var c = 0; c < u; c++) {
                var l = e[c];
                if (
                  ((l.currentUser = this.tim.context.identifier),
                  (l.conversationType = s),
                  (l.isSystemMessage = !!l.isSystemMessage),
                  (n = new Dn(l)),
                  (l.elements = a.parseElements(l.elements, l.from)),
                  n.setElement(l.elements),
                  !this._isMessageFromAVChatroom(n))
                )
                  this._pushIntoNoticeResult(i, n) &&
                    (void 0 === o[n.conversationID]
                      ? (o[n.conversationID] =
                          r.push({
                            conversationID: n.conversationID,
                            unreadCount: "out" === n.flow ? 0 : 1,
                            type: n.conversationType,
                            subType: n.conversationSubType,
                            lastMessage: n,
                          }) - 1)
                      : ((r[o[n.conversationID]].type = n.conversationType),
                        (r[o[n.conversationID]].subType =
                          n.conversationSubType),
                        (r[o[n.conversationID]].lastMessage = n),
                        "in" === n.flow &&
                          r[o[n.conversationID]].unreadCount++));
              }
              return { eventDataList: r, result: i };
            },
          },
          {
            key: "_isMessageFromAVChatroom",
            value: function (e) {
              var t = e.conversationID.slice(5);
              return this.tim.groupController.checkJoinedAVChatRoomByID(t);
            },
          },
          {
            key: "newGroupTipsStoredAndSummary",
            value: function (e) {
              for (
                var n = null, r = [], o = [], i = {}, s = 0, a = e.length;
                s < a;
                s++
              ) {
                var c = e[s];
                if (
                  ((c.currentUser = this.tim.context.identifier),
                  (c.conversationType = t.CONV_GROUP),
                  (n = new Dn(c)).setElement({
                    type: t.MSG_GRP_TIP,
                    content: u(
                      u({}, c.elements),
                      {},
                      { groupProfile: c.groupProfile }
                    ),
                  }),
                  (n.isSystemMessage = !1),
                  !this._isMessageFromAVChatroom(n))
                )
                  this._pushIntoNoticeResult(o, n) &&
                    (void 0 === i[n.conversationID]
                      ? (i[n.conversationID] =
                          r.push({
                            conversationID: n.conversationID,
                            unreadCount: "out" === n.flow ? 0 : 1,
                            type: n.conversationType,
                            subType: n.conversationSubType,
                            lastMessage: n,
                          }) - 1)
                      : ((r[i[n.conversationID]].type = n.conversationType),
                        (r[i[n.conversationID]].subType =
                          n.conversationSubType),
                        (r[i[n.conversationID]].lastMessage = n),
                        "in" === n.flow &&
                          r[i[n.conversationID]].unreadCount++));
              }
              return { eventDataList: r, result: o };
            },
          },
          {
            key: "newSystemNoticeStoredAndSummary",
            value: function (e) {
              var n = e.notifiesList,
                r = e.type,
                o = null,
                i = n.length,
                s = 0,
                a = [],
                c = {
                  conversationID: t.CONV_SYSTEM,
                  unreadCount: 0,
                  type: t.CONV_SYSTEM,
                  subType: null,
                  lastMessage: null,
                };
              for (s = 0; s < i; s++) {
                var l = n[s];
                if (l.elements.operationType !== ze)
                  (l.currentUser = this.tim.context.identifier),
                    (l.conversationType = t.CONV_SYSTEM),
                    (l.conversationID = t.CONV_SYSTEM),
                    (o = new Dn(l)).setElement({
                      type: t.MSG_GRP_SYS_NOTICE,
                      content: u(
                        u({}, l.elements),
                        {},
                        { groupProfile: l.groupProfile }
                      ),
                    }),
                    (o.isSystemMessage = !0),
                    ((1 === o.sequence && 1 === o.random) ||
                      (2 === o.sequence && 2 === o.random)) &&
                      ((o.sequence = me()),
                      (o.random = me()),
                      o.generateMessageID(l.currentUser),
                      J.log(
                        "MessageController.newSystemNoticeStoredAndSummary sequence and random maybe duplicated, regenerate. ID=".concat(
                          o.ID
                        )
                      )),
                    this._pushIntoNoticeResult(a, o) &&
                      ("poll" === r
                        ? c.unreadCount++
                        : "sync" === r && o.setIsRead(!0),
                      (c.subType = o.conversationSubType));
              }
              return (
                (c.lastMessage = a[a.length - 1]),
                { eventDataList: a.length > 0 ? [c] : [], result: a }
              );
            },
          },
          {
            key: "_onSyncMessagesProcessing",
            value: function (e) {
              var n = this._newC2CMessageStoredAndSummary({
                  notifiesList: e.data,
                  type: t.CONV_C2C,
                  isFromSync: !0,
                  C2CRemainingUnreadList: e.C2CRemainingUnreadList,
                }),
                r = n.eventDataList,
                o = n.result;
              this.emitInnerEvent(Vn, { eventDataList: r, result: o });
            },
          },
          {
            key: "_onSyncMessagesFinished",
            value: function (e) {
              this.triggerReady();
              var n = this._newC2CMessageStoredAndSummary({
                  notifiesList: e.data.messageList,
                  type: t.CONV_C2C,
                  isFromSync: !0,
                  C2CRemainingUnreadList: e.data.C2CRemainingUnreadList,
                }),
                r = n.eventDataList,
                o = n.result;
              this.emitInnerEvent(jn, { eventDataList: r, result: o });
            },
          },
          {
            key: "getHistoryMessages",
            value: function (e) {
              if (e.conversationID === t.CONV_SYSTEM) return Fr();
              !e.count && (e.count = 15), e.count > 20 && (e.count = 20);
              var n = this.messagesList.getLocalOldestMessageByConversationID(
                e.conversationID
              );
              n ||
                (((n = {}).time = 0),
                (n.sequence = 0),
                0 === e.conversationID.indexOf(t.CONV_C2C)
                  ? ((n.to = e.conversationID.replace(t.CONV_C2C, "")),
                    (n.conversationType = t.CONV_C2C))
                  : 0 === e.conversationID.indexOf(t.CONV_GROUP) &&
                    ((n.to = e.conversationID.replace(t.CONV_GROUP, "")),
                    (n.conversationType = t.CONV_GROUP)));
              var r = "";
              switch (n.conversationType) {
                case t.CONV_C2C:
                  return (
                    (r = e.conversationID.replace(t.CONV_C2C, "")),
                    this.getC2CRoamMessages({
                      conversationID: e.conversationID,
                      peerAccount: r,
                      count: e.count,
                      lastMessageTime:
                        void 0 === this.currentMessageKey[e.conversationID]
                          ? 0
                          : n.time,
                    })
                  );
                case t.CONV_GROUP:
                  return this.getGroupRoamMessages({
                    conversationID: e.conversationID,
                    groupID: n.to,
                    count: e.count,
                    sequence: n.sequence - 1,
                  });
                default:
                  return Fr();
              }
            },
          },
          {
            key: "getC2CRoamMessages",
            value: function (e) {
              var n = this,
                r = e.conversationID,
                o =
                  void 0 !== this.currentMessageKey[r]
                    ? this.currentMessageKey[r]
                    : "";
              J.log(
                "MessageController.getC2CRoamMessages toAccount="
                  .concat(e.peerAccount, " count=")
                  .concat(e.count || 15, " lastMessageTime=")
                  .concat(e.lastMessageTime || 0, " messageKey=")
                  .concat(o)
              );
              var i = new ro();
              return (
                i.setMethod(go).setStart(),
                this.request({
                  name: "c2cMessage",
                  action: "query",
                  param: {
                    peerAccount: e.peerAccount,
                    count: e.count || 15,
                    lastMessageTime: e.lastMessageTime || 0,
                    messageKey: o,
                  },
                })
                  .then(function (s) {
                    var a = s.data,
                      u = a.complete,
                      c = a.messageList;
                    oe(c)
                      ? J.log(
                          "MessageController.getC2CRoamMessages ok. complete=".concat(
                            u,
                            " but messageList is undefined!"
                          )
                        )
                      : J.log(
                          "MessageController.getC2CRoamMessages ok. complete="
                            .concat(u, " nums=")
                            .concat(c.length)
                        ),
                      i
                        .setCode(0)
                        .setNetworkType(n.getNetworkType())
                        .setText(
                          ""
                            .concat(e.peerAccount, "-")
                            .concat(e.count || 15, "-")
                            .concat(e.lastMessageTime || 0, "-")
                            .concat(o, "-")
                            .concat(u, "-")
                            .concat(c ? c.length : "undefined")
                        )
                        .setEnd(),
                      1 === u && n.getMessageHandler.setCompleted(r);
                    var l = n._roamMessageStore(c, t.CONV_C2C, r);
                    n.readReportHandler.updateIsRead(r),
                      (n.currentMessageKey[r] = s.data.messageKey);
                    var p = n._peerReadTimeMap.get(r);
                    if (
                      (J.log(
                        "MessageController.getC2CRoamMessages update isPeerRead property. conversationID="
                          .concat(r, " peerReadTime=")
                          .concat(p)
                      ),
                      p)
                    )
                      n._updateMessageIsPeerReadProperty(r, p);
                    else {
                      var h = r.replace(t.CONV_C2C, "");
                      n.getPeerReadTime([h]).then(function () {
                        n._updateMessageIsPeerReadProperty(
                          r,
                          n._peerReadTimeMap.get(r)
                        );
                      });
                    }
                    return l;
                  })
                  .catch(function (t) {
                    return (
                      n.probeNetwork().then(function (n) {
                        var r = v(n, 2),
                          s = r[0],
                          a = r[1];
                        i.setError(t, s, a)
                          .setText(
                            ""
                              .concat(e.peerAccount, "-")
                              .concat(e.count || 15, "-")
                              .concat(e.lastMessageTime || 0, "-")
                              .concat(o)
                          )
                          .setEnd();
                      }),
                      J.warn(
                        "MessageController.getC2CRoamMessages failed. ".concat(
                          t
                        )
                      ),
                      Hr(t)
                    );
                  })
              );
            },
          },
          {
            key: "_computeLastSequence",
            value: function (e) {
              return e.sequence >= 0
                ? Promise.resolve(e.sequence)
                : this.tim.groupController.getGroupLastSequence(e.groupID);
            },
          },
          {
            key: "getGroupRoamMessages",
            value: function (e) {
              var n = this,
                r = new ro(),
                o = 0;
              return this._computeLastSequence(e)
                .then(function (t) {
                  return (
                    (o = t),
                    J.log(
                      "MessageController.getGroupRoamMessages groupID="
                        .concat(e.groupID, " lastSequence=")
                        .concat(o)
                    ),
                    r.setMethod(mo).setStart(),
                    n.request({
                      name: "groupMessage",
                      action: "query",
                      param: { groupID: e.groupID, count: 21, sequence: o },
                    })
                  );
                })
                .then(function (i) {
                  var s = i.data,
                    a = s.messageList,
                    u = s.complete;
                  oe(a)
                    ? J.log(
                        "MessageController.getGroupRoamMessages ok. complete=".concat(
                          u,
                          " but messageList is undefined!"
                        )
                      )
                    : J.log(
                        "MessageController.getGroupRoamMessages ok. complete="
                          .concat(u, " nums=")
                          .concat(a.length)
                      ),
                    r
                      .setCode(0)
                      .setNetworkType(n.getNetworkType())
                      .setText(
                        ""
                          .concat(e.groupID, "-")
                          .concat(o, "-")
                          .concat(u, "-")
                          .concat(a ? a.length : "undefined")
                      )
                      .setEnd();
                  var c = "GROUP".concat(e.groupID);
                  if (2 === u || Oe(a))
                    return n.getMessageHandler.setCompleted(c), [];
                  var l = n._roamMessageStore(a, t.CONV_GROUP, c);
                  return (
                    n.readReportHandler.updateIsRead(c),
                    n._patchConversationLastMessage(c),
                    l
                  );
                })
                .catch(function (t) {
                  return (
                    n.probeNetwork().then(function (n) {
                      var i = v(n, 2),
                        s = i[0],
                        a = i[1];
                      r.setError(t, s, a)
                        .setText("".concat(e.groupID, "-").concat(o))
                        .setEnd();
                    }),
                    J.warn(
                      "MessageController.getGroupRoamMessages failed. ".concat(
                        t
                      )
                    ),
                    Hr(t)
                  );
                });
            },
          },
          {
            key: "_patchConversationLastMessage",
            value: function (e) {
              var t = this.tim.conversationController.getLocalConversation(e);
              if (t) {
                var n = t.lastMessage,
                  r = n.messageForShow,
                  o = n.payload;
                if (Oe(r) || Oe(o)) {
                  var i = this.messagesList.getLocalMessageList(e);
                  if (0 === i.length) return;
                  var s = i[i.length - 1];
                  J.log(
                    "MessageController._patchConversationLastMessage conversationID:".concat(
                      e,
                      " payload:"
                    ),
                    s.payload
                  ),
                    t.updateLastMessage(s);
                }
              }
            },
          },
          {
            key: "_roamMessageStore",
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                n = arguments.length > 1 ? arguments[1] : void 0,
                r = arguments.length > 2 ? arguments[2] : void 0,
                o = null,
                i = [],
                s = 0,
                a = e.length,
                c = null,
                l = n === t.CONV_GROUP,
                p = this.tim.bigDataHallwayController,
                h = function () {
                  (s = l ? e.length - 1 : 0), (a = l ? 0 : e.length);
                },
                d = function () {
                  l ? --s : ++s;
                },
                f = function () {
                  return l ? s >= a : s < a;
                };
              for (h(); f(); d())
                if (
                  (l &&
                    1 === e[s].sequence &&
                    this.getMessageHandler.setCompleted(r),
                  1 !== e[s].isPlaceMessage)
                )
                  if (
                    (((o = new Dn(e[s])).to = e[s].to),
                    (o.isSystemMessage = !!e[s].isSystemMessage),
                    (o.conversationType = n),
                    e[s].event === xe.JSON.TYPE.GROUP.TIP
                      ? (c = {
                          type: t.MSG_GRP_TIP,
                          content: u(
                            u({}, e[s].elements),
                            {},
                            { groupProfile: e[s].groupProfile }
                          ),
                        })
                      : ((e[s].elements = p.parseElements(
                          e[s].elements,
                          e[s].from
                        )),
                        (c = e[s].elements)),
                    Oe(c))
                  ) {
                    var g = new ro();
                    g
                      .setMethod(Io)
                      .setText(
                        "from:"
                          .concat(o.from, " to:")
                          .concat(o.to, " sequence:")
                          .concat(o.sequence, " event:")
                          .concat(e[s].event)
                      )
                      .setStart(),
                      g
                        .setCode(0)
                        .setNetworkType(this.getNetworkType())
                        .setEnd();
                  } else
                    o.setElement(c),
                      o.reInitialize(this.tim.context.identifier),
                      i.push(o);
              return this.messagesList.unshift(i), (h = d = f = null), i;
            },
          },
          {
            key: "getLocalMessageList",
            value: function (e) {
              return this.messagesList.getLocalMessageList(e);
            },
          },
          {
            key: "getLocalMessage",
            value: function (e, t) {
              return this.messagesList.getLocalMessage(e, t);
            },
          },
          {
            key: "hasLocalMessage",
            value: function (e, t) {
              return this.messagesList.hasLocalMessage(e, t);
            },
          },
          {
            key: "deleteLocalMessage",
            value: function (e) {
              e instanceof Dn && this.messagesList.remove(e);
            },
          },
          {
            key: "revokeMessage",
            value: function (e) {
              var n,
                r = this;
              e.conversationType === t.CONV_C2C
                ? (n = {
                    name: "c2cMessageWillBeRevoked",
                    action: "create",
                    param: {
                      msgInfo: {
                        fromAccount: e.from,
                        toAccount: e.to,
                        msgSeq: e.sequence,
                        msgRandom: e.random,
                        msgTimeStamp: e.time,
                      },
                    },
                  })
                : e.conversationType === t.CONV_GROUP &&
                  (n = {
                    name: "groupMessageWillBeRevoked",
                    action: "create",
                    param: { to: e.to, msgSeqList: [{ msgSeq: e.sequence }] },
                  });
              var o = new ro();
              return (
                o
                  .setMethod(yo)
                  .setMessageType(e.type)
                  .setText(
                    ""
                      .concat(this._generateTjgID(e), "-")
                      .concat(e.type, "-")
                      .concat(e.from, "-")
                      .concat(e.to)
                  )
                  .setStart(),
                this.request(n)
                  .then(function (t) {
                    var n = t.data.recallRetList;
                    if (!Oe(n) && 0 !== n[0].retCode) {
                      var i = new ht({
                        code: n[0].retCode,
                        message: pt[n[0].retCode] || kt,
                        data: { message: e },
                      });
                      return (
                        o.setCode(i.code).setMessage(i.message).setEnd(), Hr(i)
                      );
                    }
                    return (
                      J.info(
                        "MessageController.revokeMessage ok. ID=".concat(e.ID)
                      ),
                      (e.isRevoked = !0),
                      o.setCode(0).setEnd(),
                      r.emitInnerEvent(zn, [e]),
                      new Ur({ message: e })
                    );
                  })
                  .catch(function (t) {
                    r.probeNetwork().then(function (e) {
                      var n = v(e, 2),
                        r = n[0],
                        i = n[1];
                      o.setError(t, r, i).setEnd();
                    });
                    var n = new ht({
                      code: t && t.code ? t.code : dt.MESSAGE_REVOKE_FAIL,
                      message: t && t.message ? t.message : kt,
                      data: { message: e },
                    });
                    return (
                      J.warn(
                        "MessageController.revokeMessage failed. ID="
                          .concat(e.ID, " code=")
                          .concat(n.code, " message=")
                          .concat(n.message)
                      ),
                      Hr(n)
                    );
                  })
              );
            },
          },
          {
            key: "setMessageRead",
            value: function (e) {
              var t = this;
              return new Promise(function (n, r) {
                t.ready(function () {
                  t.readReportHandler.setMessageRead(e).then(n).catch(r);
                });
              });
            },
          },
          {
            key: "getMessageList",
            value: function (e) {
              return this.getMessageHandler.getMessageList(e);
            },
          },
          {
            key: "createTextMessage",
            value: function (e) {
              e.currentUser = this.tim.context.identifier;
              var t = new Dn(e),
                n = "string" == typeof e.payload ? e.payload : e.payload.text,
                r = new qe({ text: n });
              return t.setElement(r), t;
            },
          },
          {
            key: "createCustomMessage",
            value: function (e) {
              e.currentUser = this.tim.context.identifier;
              var t = new Dn(e),
                n = new Mn({
                  data: e.payload.data,
                  description: e.payload.description,
                  extension: e.payload.extension,
                });
              return t.setElement(n), t;
            },
          },
          {
            key: "createImageMessage",
            value: function (e) {
              e.currentUser = this.tim.context.identifier;
              var t = new Dn(e);
              if (N) {
                var n = e.payload.file;
                if (Q(n))
                  return void J.warn(
                    "微信小程序环境下调用 createImageMessage 接口时，payload.file 不支持传入 File 对象"
                  );
                var r = n.tempFilePaths[0],
                  o = {
                    url: r,
                    name: r.slice(r.lastIndexOf("/") + 1),
                    size: n.tempFiles[0].size,
                    type: r.slice(r.lastIndexOf(".") + 1).toLowerCase(),
                  };
                e.payload.file = o;
              } else if (O && Q(e.payload.file)) {
                var i = e.payload.file;
                e.payload.file = { files: [i] };
              }
              var s = new ot({
                imageFormat: "UNKNOWN",
                uuid: this._generateUUID(),
                file: e.payload.file,
              });
              return (
                t.setElement(s), this.messageOptionMap.set(t.messageID, e), t
              );
            },
          },
          {
            key: "createFileMessage",
            value: function (e) {
              if (!N) {
                if (O && Q(e.payload.file)) {
                  var t = e.payload.file;
                  e.payload.file = { files: [t] };
                }
                e.currentUser = this.tim.context.identifier;
                var n = new Dn(e),
                  r = new Cn({
                    uuid: this._generateUUID(),
                    file: e.payload.file,
                  });
                return (
                  n.setElement(r), this.messageOptionMap.set(n.messageID, e), n
                );
              }
              J.warn(
                "微信小程序目前不支持选择文件， createFileMessage 接口不可用！"
              );
            },
          },
          {
            key: "createAudioMessage",
            value: function (e) {
              if (N) {
                var t = e.payload.file;
                if (N) {
                  var n = {
                    url: t.tempFilePath,
                    name: t.tempFilePath.slice(
                      t.tempFilePath.lastIndexOf("/") + 1
                    ),
                    size: t.fileSize,
                    second: parseInt(t.duration) / 1e3,
                    type: t.tempFilePath
                      .slice(t.tempFilePath.lastIndexOf(".") + 1)
                      .toLowerCase(),
                  };
                  e.payload.file = n;
                }
                e.currentUser = this.tim.context.identifier;
                var r = new Dn(e),
                  o = new st({
                    second: Math.floor(t.duration / 1e3),
                    size: t.fileSize,
                    url: t.tempFilePath,
                    uuid: this._generateUUID(),
                  });
                return (
                  r.setElement(o), this.messageOptionMap.set(r.messageID, e), r
                );
              }
              J.warn("createAudioMessage 目前只支持微信小程序发语音消息");
            },
          },
          {
            key: "createVideoMessage",
            value: function (e) {
              (e.currentUser = this.tim.context.identifier),
                (e.payload.file.thumbUrl =
                  "https://webim-1252463788.cos.ap-shanghai.myqcloud.com/assets/images/transparent.png"),
                (e.payload.file.thumbSize = 1668);
              var t = {};
              if (N) {
                if (Q(e.payload.file))
                  return void J.warn(
                    "微信小程序环境下调用 createVideoMessage 接口时，payload.file 不支持传入 File 对象"
                  );
                var n = e.payload.file;
                (t.url = n.tempFilePath),
                  (t.name = n.tempFilePath.slice(
                    n.tempFilePath.lastIndexOf("/") + 1
                  )),
                  (t.size = n.size),
                  (t.second = n.duration),
                  (t.type = n.tempFilePath
                    .slice(n.tempFilePath.lastIndexOf(".") + 1)
                    .toLowerCase());
              } else if (O) {
                if (Q(e.payload.file)) {
                  var r = e.payload.file;
                  e.payload.file.files = [r];
                }
                var o = e.payload.file;
                (t.url = window.URL.createObjectURL(o.files[0])),
                  (t.name = o.files[0].name),
                  (t.size = o.files[0].size),
                  (t.second = o.files[0].duration || 0),
                  (t.type = o.files[0].type.split("/")[1]);
              }
              e.payload.file.videoFile = t;
              var i = new Dn(e),
                s = new En({
                  videoFormat: t.type,
                  videoSecond: Number(t.second.toFixed(0)),
                  videoSize: t.size,
                  remoteVideoUrl: "",
                  videoUrl: t.url,
                  videoUUID: this._generateUUID(),
                  thumbUUID: this._generateUUID(),
                  thumbWidth: e.payload.file.width || 200,
                  thumbHeight: e.payload.file.height || 200,
                  thumbUrl: e.payload.file.thumbUrl,
                  thumbSize: e.payload.file.thumbSize,
                  thumbFormat: e.payload.file.thumbUrl
                    .slice(e.payload.file.thumbUrl.lastIndexOf(".") + 1)
                    .toLowerCase(),
                });
              return (
                i.setElement(s), this.messageOptionMap.set(i.messageID, e), i
              );
            },
          },
          {
            key: "createFaceMessage",
            value: function (e) {
              e.currentUser = this.tim.context.identifier;
              var t = new Dn(e),
                n = new it(e.payload);
              return t.setElement(n), t;
            },
          },
          {
            key: "_generateUUID",
            value: function () {
              var e = this.tim.context;
              return ""
                .concat(e.SDKAppID, "-")
                .concat(e.identifier, "-")
                .concat(
                  (function () {
                    for (var e = "", t = 32; t > 0; --t)
                      e += ye[Math.floor(Math.random() * ve)];
                    return e;
                  })()
                );
            },
          },
          {
            key: "_generateTjgID",
            value: function (e) {
              return this.tim.context.tinyID + "-" + e.random;
            },
          },
          {
            key: "getMessageOptionByID",
            value: function (e) {
              return this.messageOptionMap.get(e);
            },
          },
          {
            key: "isMessageSentByCurrentInstance",
            value: function (e) {
              return !(
                !this.messagesList.hasLocalMessage(e.conversationID, e.ID) &&
                !this.singlyLinkedList.has(e.random)
              );
            },
          },
        ]),
        s
      );
    })(Pr),
    Wa = (function () {
      function e(t) {
        r(this, e),
          (this.userID = ""),
          (this.avatar = ""),
          (this.nick = ""),
          (this.role = ""),
          (this.joinTime = ""),
          (this.lastSendMsgTime = ""),
          (this.nameCard = ""),
          (this.muteUntil = 0),
          (this.memberCustomField = []),
          this._initMember(t);
      }
      return (
        i(e, [
          {
            key: "_initMember",
            value: function (e) {
              this.updateMember(e);
            },
          },
          {
            key: "updateMember",
            value: function (e) {
              var t = [null, void 0, "", 0, NaN];
              e.memberCustomField &&
                Ee(this.memberCustomField, e.memberCustomField),
                he(this, e, ["memberCustomField"], t);
            },
          },
          {
            key: "updateRole",
            value: function (e) {
              ["Owner", "Admin", "Member"].indexOf(e) < 0 || (this.role = e);
            },
          },
          {
            key: "updateMuteUntil",
            value: function (e) {
              oe(e) ||
                (this.muteUntil = Math.floor((Date.now() + 1e3 * e) / 1e3));
            },
          },
          {
            key: "updateNameCard",
            value: function (e) {
              oe(e) || (this.nameCard = e);
            },
          },
          {
            key: "updateMemberCustomField",
            value: function (e) {
              e && Ee(this.memberCustomField, e);
            },
          },
        ]),
        e
      );
    })(),
    za = (function () {
      function e(t) {
        r(this, e),
          (this.tim = t.tim),
          (this.groupController = t.groupController),
          this._initListeners();
      }
      return (
        i(e, [
          {
            key: "_initListeners",
            value: function () {
              this.tim.innerEmitter.on($n, this._onReceivedGroupTips, this);
            },
          },
          {
            key: "_onReceivedGroupTips",
            value: function (e) {
              var t = this,
                n = e.data,
                r = n.result;
              n.isGroupTip &&
                r.forEach(function (e) {
                  switch (e.payload.operationType) {
                    case 1:
                      t._onNewMemberComeIn(e);
                      break;
                    case 2:
                      t._onMemberQuit(e);
                      break;
                    case 3:
                      t._onMemberKickedOut(e);
                      break;
                    case 4:
                      t._onMemberSetAdmin(e);
                      break;
                    case 5:
                      t._onMemberCancelledAdmin(e);
                      break;
                    case 6:
                      t._onGroupProfileModified(e);
                      break;
                    case 7:
                      t._onMemberInfoModified(e);
                      break;
                    default:
                      J.warn(
                        "GroupTipsHandler._onReceivedGroupTips Unhandled groupTips. operationType=",
                        e.payload.operationType
                      );
                  }
                });
            },
          },
          {
            key: "_onNewMemberComeIn",
            value: function (e) {
              var t = e.payload,
                n = t.memberNum,
                r = t.groupProfile.groupID,
                o = this.groupController.getLocalGroupProfile(r);
              o && Z(n) && (o.memberNum = n);
            },
          },
          {
            key: "_onMemberQuit",
            value: function (e) {
              var t = e.payload,
                n = t.memberNum,
                r = t.groupProfile.groupID,
                o = this.groupController.getLocalGroupProfile(r);
              o && Z(n) && (o.memberNum = n),
                this.groupController.deleteLocalGroupMembers(
                  r,
                  e.payload.userIDList
                );
            },
          },
          {
            key: "_onMemberKickedOut",
            value: function (e) {
              var t = e.payload,
                n = t.memberNum,
                r = t.groupProfile.groupID,
                o = this.groupController.getLocalGroupProfile(r);
              o && Z(n) && (o.memberNum = n),
                this.groupController.deleteLocalGroupMembers(
                  r,
                  e.payload.userIDList
                );
            },
          },
          {
            key: "_onMemberSetAdmin",
            value: function (e) {
              var n = this,
                r = e.payload.groupProfile.groupID;
              e.payload.userIDList.forEach(function (e) {
                var o = n.groupController.getLocalGroupMemberInfo(r, e);
                o && o.updateRole(t.GRP_MBR_ROLE_ADMIN);
              });
            },
          },
          {
            key: "_onMemberCancelledAdmin",
            value: function (e) {
              var n = this,
                r = e.payload.groupProfile.groupID;
              e.payload.userIDList.forEach(function (e) {
                var o = n.groupController.getLocalGroupMemberInfo(r, e);
                o && o.updateRole(t.GRP_MBR_ROLE_MEMBER);
              });
            },
          },
          {
            key: "_onGroupProfileModified",
            value: function (e) {
              var t = this,
                n = e.payload.newGroupProfile,
                r = e.payload.groupProfile.groupID,
                o = this.groupController.getLocalGroupProfile(r);
              Object.keys(n).forEach(function (e) {
                switch (e) {
                  case "ownerID":
                    t._ownerChaged(o, n);
                    break;
                  default:
                    o[e] = n[e];
                }
              }),
                this.groupController.emitGroupListUpdate(!0, !0);
            },
          },
          {
            key: "_ownerChaged",
            value: function (e, n) {
              var r = e.groupID,
                o = this.groupController.getLocalGroupProfile(r),
                i = this.tim.context.identifier;
              if (i === n.ownerID) {
                o.updateGroup({ selfInfo: { role: t.GRP_MBR_ROLE_OWNER } });
                var s = this.groupController.getLocalGroupMemberInfo(r, i),
                  a = this.groupController.getLocalGroupProfile(r).ownerID,
                  u = this.groupController.getLocalGroupMemberInfo(r, a);
                s && s.updateRole(t.GRP_MBR_ROLE_OWNER),
                  u && u.updateRole(t.GRP_MBR_ROLE_MEMBER);
              }
            },
          },
          {
            key: "_onMemberInfoModified",
            value: function (e) {
              var t = this,
                n = e.payload.groupProfile.groupID;
              e.payload.memberList.forEach(function (e) {
                var r = t.groupController.getLocalGroupMemberInfo(n, e.userID);
                r && e.muteTime && r.updateMuteUntil(e.muteTime);
              });
            },
          },
        ]),
        e
      );
    })(),
    Xa = (function () {
      function n(e) {
        r(this, n),
          (this.groupController = e.groupController),
          (this.tim = e.tim),
          (this.pendencyMap = new Map()),
          this._initLiceners();
      }
      return (
        i(n, [
          {
            key: "_initLiceners",
            value: function () {
              this.tim.innerEmitter.on(
                Wn,
                this._onReceivedGroupSystemNotice,
                this
              ),
                this.tim.innerEmitter.on(
                  Kn,
                  this._clearGroupSystemNotice,
                  this
                );
            },
          },
          {
            key: "_clearGroupSystemNotice",
            value: function () {
              var e = this;
              this.getPendencyList().then(function (n) {
                n.forEach(function (t) {
                  e.pendencyMap.set(
                    "".concat(t.from, "_").concat(t.groupID, "_").concat(t.to),
                    t
                  );
                });
                var r = e.tim.messageController.getLocalMessageList(
                    t.CONV_SYSTEM
                  ),
                  o = [];
                r.forEach(function (t) {
                  var n = t.payload,
                    r = n.operatorID,
                    i = n.operationType,
                    s = n.groupProfile;
                  if (i === Fe) {
                    var a = ""
                        .concat(r, "_")
                        .concat(s.groupID, "_")
                        .concat(s.to),
                      u = e.pendencyMap.get(a);
                    u && Z(u.handled) && 0 !== u.handled && o.push(t);
                  }
                }),
                  e.groupController.deleteGroupSystemNotice({ messageList: o });
              });
            },
          },
          {
            key: "getPendencyList",
            value: function (e) {
              var t = this;
              return this.groupController
                .request({
                  name: "group",
                  action: "getGroupPendency",
                  param: {
                    startTime: e && e.startTime ? e.startTime : 0,
                    limit: e && e.limit ? e.limit : 10,
                    handleAccount: this.tim.context.identifier,
                  },
                })
                .then(function (e) {
                  var n = e.data,
                    r = n.pendencyList;
                  return 0 !== n.nextStartTime
                    ? t
                        .getPendencyList({ startTime: n.nextStartTime })
                        .then(function (e) {
                          return [].concat(_(r), _(e));
                        })
                    : r;
                });
            },
          },
          {
            key: "_onReceivedGroupSystemNotice",
            value: function (t) {
              var n = this,
                r = t.data,
                o = r.result;
              "sync" !== r.type &&
                o.forEach(function (t) {
                  switch (t.payload.operationType) {
                    case 1:
                      n._onApplyGroupRequest(t);
                      break;
                    case 2:
                      n._onApplyGroupRequestAgreed(t);
                      break;
                    case 3:
                      n._onApplyGroupRequestRefused(t);
                      break;
                    case 4:
                      n._onMemberKicked(t);
                      break;
                    case 5:
                      n._onGroupDismissed(t);
                      break;
                    case 6:
                      break;
                    case 7:
                      n._onInviteGroup(t);
                      break;
                    case 8:
                      n._onQuitGroup(t);
                      break;
                    case 9:
                      n._onSetManager(t);
                      break;
                    case 10:
                      n._onDeleteManager(t);
                      break;
                    case 11:
                    case 12:
                    case 15:
                      break;
                    case 255:
                      n.groupController.emitOuterEvent(
                        e.GROUP_SYSTEM_NOTICE_RECEIVED,
                        { message: t, type: Xe }
                      );
                  }
                });
            },
          },
          {
            key: "_onApplyGroupRequest",
            value: function (t) {
              this.groupController.emitOuterEvent(
                e.GROUP_SYSTEM_NOTICE_RECEIVED,
                { message: t, type: Fe }
              );
            },
          },
          {
            key: "_onApplyGroupRequestAgreed",
            value: function (t) {
              var n = this,
                r = t.payload.groupProfile.groupID;
              this.groupController.hasLocalGroup(r) ||
                this.groupController
                  .getGroupProfile({ groupID: r })
                  .then(function (e) {
                    var t = e.data.group;
                    t &&
                      (n.groupController.updateGroupMap([t]),
                      n.groupController.emitGroupListUpdate());
                  }),
                this.groupController.emitOuterEvent(
                  e.GROUP_SYSTEM_NOTICE_RECEIVED,
                  { message: t, type: He }
                );
            },
          },
          {
            key: "_onApplyGroupRequestRefused",
            value: function (t) {
              this.groupController.emitOuterEvent(
                e.GROUP_SYSTEM_NOTICE_RECEIVED,
                { message: t, type: Ke }
              );
            },
          },
          {
            key: "_onMemberKicked",
            value: function (t) {
              var n = t.payload.groupProfile.groupID;
              this.groupController.hasLocalGroup(n) &&
                this.groupController.deleteLocalGroupAndConversation(n),
                this.groupController.emitOuterEvent(
                  e.GROUP_SYSTEM_NOTICE_RECEIVED,
                  { message: t, type: Be }
                );
            },
          },
          {
            key: "_onGroupDismissed",
            value: function (t) {
              var n = t.payload.groupProfile.groupID,
                r = this.groupController.hasLocalGroup(n),
                o = this.groupController.AVChatRoomHandler;
              r && this.groupController.deleteLocalGroupAndConversation(n),
                o.checkJoinedAVChatRoomByID(n) && o.reset(n),
                this.groupController.emitOuterEvent(
                  e.GROUP_SYSTEM_NOTICE_RECEIVED,
                  { message: t, type: Ve }
                );
            },
          },
          {
            key: "_onInviteGroup",
            value: function (t) {
              var n = this,
                r = t.payload.groupProfile.groupID;
              this.groupController.hasLocalGroup(r) ||
                this.groupController
                  .getGroupProfile({ groupID: r })
                  .then(function (e) {
                    var t = e.data.group;
                    t &&
                      (n.groupController.updateGroupMap([t]),
                      n.groupController.emitGroupListUpdate());
                  }),
                this.groupController.emitOuterEvent(
                  e.GROUP_SYSTEM_NOTICE_RECEIVED,
                  { message: t, type: je }
                );
            },
          },
          {
            key: "_onQuitGroup",
            value: function (t) {
              var n = t.payload.groupProfile.groupID;
              this.groupController.hasLocalGroup(n) &&
                this.groupController.deleteLocalGroupAndConversation(n),
                this.groupController.emitOuterEvent(
                  e.GROUP_SYSTEM_NOTICE_RECEIVED,
                  { message: t, type: Ye }
                );
            },
          },
          {
            key: "_onSetManager",
            value: function (n) {
              var r = n.payload.groupProfile,
                o = r.to,
                i = r.groupID,
                s = this.groupController.getLocalGroupMemberInfo(i, o);
              s && s.updateRole(t.GRP_MBR_ROLE_ADMIN),
                this.groupController.emitOuterEvent(
                  e.GROUP_SYSTEM_NOTICE_RECEIVED,
                  { message: n, type: $e }
                );
            },
          },
          {
            key: "_onDeleteManager",
            value: function (n) {
              var r = n.payload.groupProfile,
                o = r.to,
                i = r.groupID,
                s = this.groupController.getLocalGroupMemberInfo(i, o);
              s && s.updateRole(t.GRP_MBR_ROLE_MEMBER),
                this.groupController.emitOuterEvent(
                  e.GROUP_SYSTEM_NOTICE_RECEIVED,
                  { message: n, type: We }
                );
            },
          },
          {
            key: "reset",
            value: function () {
              this.pendencyMap.clear();
            },
          },
        ]),
        n
      );
    })(),
    Ja = { 3: !0, 4: !0, 5: !0, 6: !0 },
    Qa = (function () {
      function n(e) {
        var t = e.tim,
          o = e.groupController;
        r(this, n),
          (this.tim = t),
          (this.groupController = o),
          (this.sequencesLinkedList = new ja(100)),
          (this.receivedMessageCount = 0),
          (this._pollingRequestInfoMap = new Map()),
          (this._pollingInstanceMap = new Map()),
          (this._joinedGroupMap = new Map()),
          (this._reportMessageStackedCount = 0);
      }
      return (
        i(n, [
          {
            key: "hasJoinedAVChatRoom",
            value: function () {
              return this._joinedGroupMap.size > 0;
            },
          },
          {
            key: "checkJoinedAVChatRoomByID",
            value: function (e) {
              return this._joinedGroupMap.has(e);
            },
          },
          {
            key: "getJoinedAVChatRoom",
            value: function () {
              return this._joinedGroupMap.size > 0
                ? _(this._joinedGroupMap.keys())
                : null;
            },
          },
          {
            key: "start",
            value: function (e) {
              var t = this._pollingRequestInfoMap.get(e),
                n = { key: t.key, startSeq: t.startSeq };
              if (this._pollingInstanceMap.has(e)) {
                var r = this._pollingInstanceMap.get(e);
                r.isRunning() || r.start();
              } else {
                var o = this.groupController.createTransportCapsule({
                    name: "AVChatRoom",
                    action: "startLongPoll",
                    param: n,
                  }),
                  i = this.tim.connectionController.createRunLoop({
                    pack: o,
                    before: this._updateRequestData.bind(this, e),
                    success: this._handleSuccess.bind(this, e),
                    fail: this._handleFailure.bind(this),
                    isAVChatRoomLoop: !0,
                  });
                i.start(),
                  this._pollingInstanceMap.set(e, i),
                  J.log(
                    "AVChatRoomHandler.start message channel started. groupID=".concat(
                      e
                    )
                  );
              }
            },
          },
          {
            key: "stop",
            value: function (e) {
              var t = this._pollingInstanceMap.get(e);
              t &&
                t.isRunning() &&
                (t.abort(),
                t.stop(),
                J.log(
                  "AVChatRoomHandler.stop message channel stopped. groupID=".concat(
                    e
                  )
                ));
            },
          },
          {
            key: "startRunLoop",
            value: function (e) {
              var t = this;
              return this._precheck().then(function () {
                var n = e.longPollingKey,
                  r = e.group,
                  o = r.groupID;
                return (
                  t._pollingRequestInfoMap.set(o, { key: n, startSeq: 0 }),
                  t._joinedGroupMap.set(o, r),
                  t.groupController.updateGroupMap([r]),
                  t.groupController.emitGroupListUpdate(!0, !1),
                  t.start(o),
                  t.groupController.isLoggedIn()
                    ? Fr({ status: Le.SUCCESS, group: r })
                    : Fr({ status: Le.SUCCESS })
                );
              });
            },
          },
          {
            key: "joinWithoutAuth",
            value: function (e) {
              var t = this;
              return this.groupController
                .request({
                  name: "group",
                  action: "applyJoinAVChatRoom",
                  param: e,
                })
                .then(function (n) {
                  var r = n.data.longPollingKey;
                  if (oe(r))
                    return Hr(
                      new ht({
                        code: dt.CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN,
                        message: Xt,
                      })
                    );
                  J.log(
                    "AVChatRoomHandler.joinWithoutAuth ok. groupID:",
                    e.groupID
                  ),
                    t.groupController.emitInnerEvent(Dr),
                    t.groupController.emitInnerEvent(Tr, e.groupID);
                  var o = new ba({ groupID: e.groupID });
                  return (
                    t.startRunLoop({ group: o, longPollingKey: r }),
                    new Ur({ status: Le.SUCCESS })
                  );
                })
                .catch(function (t) {
                  return (
                    J.error(
                      "AVChatRoomHandler.joinWithoutAuth error:"
                        .concat(de(t), ". groupID:")
                        .concat(e.groupID)
                    ),
                    Hr(t)
                  );
                });
            },
          },
          {
            key: "_precheck",
            value: function () {
              if (this.tim.context.unlimitedAVChatRoom)
                return Promise.resolve();
              if (!this.hasJoinedAVChatRoom()) return Promise.resolve();
              var e = v(this._joinedGroupMap.entries().next().value, 2),
                n = e[0],
                r = e[1];
              if (this.groupController.isLoggedIn()) {
                if (
                  !(
                    r.selfInfo.role === t.GRP_MBR_ROLE_OWNER ||
                    r.ownerID === this.tim.loginInfo.identifier
                  )
                )
                  return this.groupController.quitGroup(n);
                this.groupController.deleteLocalGroupAndConversation(n);
              } else this.groupController.deleteLocalGroupAndConversation(n);
              return this.reset(n), Promise.resolve();
            },
          },
          {
            key: "_updateRequestData",
            value: function (e, t) {
              var n = this._pollingRequestInfoMap.get(e),
                r = n.key,
                o = n.startSeq;
              (t.StartSeq = o),
                (t.Key = r),
                this.tim.sumStatController.addTotalCount(jr);
            },
          },
          {
            key: "_handleSuccess",
            value: function (e, t) {
              this.tim.sumStatController.addSuccessCount(jr),
                this.tim.sumStatController.addCost(jr, t.data.timecost);
              var n = t.data,
                r = n.errorCode,
                o = n.errorInfo,
                i = n.key,
                s = n.nextSeq,
                a = n.rspMsgList;
              if (r !== Pe.SUCCESS) {
                var u = this._pollingRequestInfoMap.get(e),
                  c = new ro();
                c.setMethod(zo).setStart(),
                  c
                    .setMessage(
                      ""
                        .concat(e, "-")
                        .concat(u.key, "-")
                        .concat(u.startSeq, "-")
                        .concat(o || JSON.stringify(t.data))
                    )
                    .setCode(r)
                    .setNetworkType(this.groupController.getNetworkType())
                    .setEnd(!0);
              } else
                ee(i) &&
                  Z(s) &&
                  this._pollingRequestInfoMap.set(e, { key: i, startSeq: s }),
                  re(a) &&
                    a.length > 0 &&
                    (a.forEach(function (e) {
                      e.to = e.groupID;
                    }),
                    this._dispatchNotice(a));
              this.groupController.emitInnerEvent(fr);
            },
          },
          {
            key: "_handleFailure",
            value: function (e) {
              if (e.error)
                if (
                  "ECONNABORTED" === e.error.code ||
                  e.error.code === dt.NETWORK_TIMEOUT
                )
                  if (e.error.config) {
                    var t = e.error.config.url,
                      n = e.error.config.data;
                    J.log(
                      "AVChatRoomHandler._handleFailure request timed out. url="
                        .concat(t, " data=")
                        .concat(n)
                    );
                  } else
                    J.log("AVChatRoomHandler._handleFailure request timed out");
                else
                  J.log(
                    "AVChatRoomHandler._handleFailure request failed due to network error"
                  );
              this.groupController.emitInnerEvent(dr);
            },
          },
          {
            key: "_dispatchNotice",
            value: function (n) {
              if (re(n) && 0 !== n.length) {
                var r = Date.now(),
                  o = null,
                  i = [],
                  s = [],
                  a = n.length;
                a > 1 &&
                  n.sort(function (e, t) {
                    return e.sequence - t.sequence;
                  });
                for (var u = 0; u < a; u++)
                  if (Ja[n[u].event]) {
                    if (
                      ((this.receivedMessageCount += 1),
                      (o = this.packMessage(n[u], n[u].event)),
                      this.tim.context.unlimitedAVChatRoom ||
                        !this.sequencesLinkedList.has(o.sequence))
                    ) {
                      var c = o.conversationID;
                      if (
                        (this.receivedMessageCount % 40 == 0 &&
                          this.tim.messageLossController.detectMessageLoss(
                            c,
                            this.sequencesLinkedList.data()
                          ),
                        null !== this.sequencesLinkedList.tail())
                      ) {
                        var l = this.sequencesLinkedList.tail().value,
                          p = o.sequence - l;
                        p > 1 && p <= 20
                          ? this.tim.messageLossController.onMessageMaybeLost(
                              c,
                              l + 1,
                              p - 1
                            )
                          : p < -1 &&
                            p >= -20 &&
                            this.tim.messageLossController.onMessageMaybeLost(
                              c,
                              o.sequence + 1,
                              Math.abs(p) - 1
                            );
                      }
                      this.sequencesLinkedList.pushIn(o.sequence),
                        this._isMessageSentByCurrentInstance(o) ||
                          (o.conversationType === t.CONV_SYSTEM && s.push(o),
                          i.push(o));
                    }
                  } else
                    J.warn(
                      "AVChatRoomHandler._dispatchMessage 未处理的 event 类型：",
                      n[u].event
                    );
                if (
                  (s.length > 0 &&
                    this.groupController.emitInnerEvent(Wn, {
                      result: s,
                      eventDataList: [],
                      type: "poll",
                    }),
                  0 !== i.length)
                ) {
                  var h = this.packConversationOption(i);
                  h.length > 0 &&
                    this.groupController.emitInnerEvent($n, {
                      eventDataList: h,
                      type: "poll",
                    }),
                    J.debug(
                      "AVChatRoomHandler._dispatchNotice nums=".concat(i.length)
                    );
                  var d = this.tim.sumStatController;
                  d.addTotalCount(Zr),
                    d.addSuccessCount(Zr),
                    d.addCost(Zr, Date.now() - r),
                    this._checkMessageStacked(i),
                    this.groupController.emitOuterEvent(e.MESSAGE_RECEIVED, i);
                }
              }
            },
          },
          {
            key: "_checkMessageStacked",
            value: function (e) {
              var t = e.length;
              if (
                t >= 100 &&
                (J.warn(
                  "AVChatRoomHandler.checkMessageStacked 直播群消息堆积数:".concat(
                    e.length,
                    '！可能会导致微信小程序渲染时遇到 "Dom limit exceeded" 的错误，建议接入侧此时只渲染最近的10条消息'
                  )
                ),
                this._reportMessageStackedCount < 5)
              ) {
                var n = new ro();
                n.setMethod(ei).setStart(),
                  n
                    .setCode(0)
                    .setNetworkType(this.groupController.getNetworkType())
                    .setText(
                      "nums="
                        .concat(t, " groupID=")
                        .concat(_(this._joinedGroupMap.keys()))
                    )
                    .setEnd(),
                  (this._reportMessageStackedCount += 1);
              }
            },
          },
          {
            key: "_isMessageSentByCurrentInstance",
            value: function (e) {
              return !!this.tim.messageController.isMessageSentByCurrentInstance(
                e
              );
            },
          },
          {
            key: "packMessage",
            value: function (e, n) {
              (e.currentUser = this.tim.context.identifier),
                (e.conversationType = 5 === n ? t.CONV_SYSTEM : t.CONV_GROUP),
                (e.isSystemMessage = !!e.isSystemMessage);
              var r = new Dn(e),
                o = this.packElements(e, n);
              return r.setElement(o), r;
            },
          },
          {
            key: "packElements",
            value: function (e, n) {
              return 4 === n || 6 === n
                ? {
                    type: t.MSG_GRP_TIP,
                    content: u(
                      u({}, e.elements),
                      {},
                      { groupProfile: e.groupProfile }
                    ),
                  }
                : 5 === n
                ? {
                    type: t.MSG_GRP_SYS_NOTICE,
                    content: u(
                      u({}, e.elements),
                      {},
                      { groupProfile: e.groupProfile }
                    ),
                  }
                : this.tim.bigDataHallwayController.parseElements(
                    e.elements,
                    e.from
                  );
            },
          },
          {
            key: "packConversationOption",
            value: function (e) {
              for (var t = new Map(), n = 0; n < e.length; n++) {
                var r = e[n],
                  o = r.conversationID;
                if (t.has(o)) {
                  var i = t.get(o);
                  (i.lastMessage = r), "in" === r.flow && i.unreadCount++;
                } else
                  t.set(o, {
                    conversationID: r.conversationID,
                    unreadCount: "out" === r.flow ? 0 : 1,
                    type: r.conversationType,
                    subType: r.conversationSubType,
                    lastMessage: r,
                  });
              }
              return _(t.values());
            },
          },
          {
            key: "reset",
            value: function (e) {
              if (0 !== this._pollingInstanceMap.size) {
                if (e)
                  J.log("AVChatRoomHandler.reset groupID=".concat(e)),
                    this.stop(e),
                    this._pollingInstanceMap.delete(e),
                    this._joinedGroupMap.delete(e),
                    this._pollingRequestInfoMap.delete(e);
                else {
                  J.log("AVChatRoomHandler.reset all");
                  var t,
                    n = M(this._pollingInstanceMap.keys());
                  try {
                    for (n.s(); !(t = n.n()).done; ) {
                      var r = t.value;
                      this.stop(r);
                    }
                  } catch (o) {
                    n.e(o);
                  } finally {
                    n.f();
                  }
                  this._pollingInstanceMap.clear(),
                    this._joinedGroupMap.clear(),
                    this._pollingRequestInfoMap.clear();
                }
                this.sequencesLinkedList.reset(),
                  (this.receivedMessageCount = 0),
                  (this._reportMessageStackedCount = 0);
              }
            },
          },
        ]),
        n
      );
    })(),
    Za = (function (n) {
      c(s, n);
      var o = y(s);
      function s(e) {
        var t;
        return (
          r(this, s),
          ((t = o.call(this, e)).groupMap = new Map()),
          (t.groupMemberListMap = new Map()),
          (t.groupNoticeHandler = new Xa({ tim: e, groupController: g(t) })),
          (t.groupTipsHandler = new za({ tim: e, groupController: g(t) })),
          (t.AVChatRoomHandler = new Qa({ tim: e, groupController: g(t) })),
          t._initListeners(),
          t
        );
      }
      return (
        i(s, [
          {
            key: "createGroup",
            value: function (e) {
              var n = this;
              if (
                !["Public", "Private", "ChatRoom", "AVChatRoom"].includes(
                  e.type
                )
              ) {
                var r = new ht({ code: dt.ILLEGAL_GROUP_TYPE, message: Bt });
                return Hr(r);
              }
              De(e.type) &&
                !oe(e.memberList) &&
                e.memberList.length > 0 &&
                (J.warn(
                  "GroupController.createGroup 创建AVChatRoom时不能添加群成员，自动忽略该字段"
                ),
                (e.memberList = void 0)),
                Se(e.type) ||
                  oe(e.joinOption) ||
                  (J.warn(
                    "GroupController.createGroup 创建Work/Meeting/AVChatRoom群时不能设置字段：joinOption，自动忽略该字段"
                  ),
                  (e.joinOption = void 0));
              var o = new ro();
              return (
                o.setMethod(ko).setStart(),
                J.log("GroupController.createGroup."),
                this.request({ name: "group", action: "create", param: e })
                  .then(function (r) {
                    if (
                      (o
                        .setCode(0)
                        .setNetworkType(n.getNetworkType())
                        .setText(
                          "groupType="
                            .concat(e.type, " groupID=")
                            .concat(r.data.groupID)
                        )
                        .setEnd(),
                      J.log(
                        "GroupController.createGroup ok. groupID:",
                        r.data.groupID
                      ),
                      e.type === t.GRP_AVCHATROOM)
                    )
                      return n.getGroupProfile({ groupID: r.data.groupID });
                    n.updateGroupMap([
                      u(u({}, e), {}, { groupID: r.data.groupID }),
                    ]);
                    var i = n.tim.createCustomMessage({
                      to: r.data.groupID,
                      conversationType: t.CONV_GROUP,
                      payload: {
                        data: "group_create",
                        extension: "".concat(
                          n.tim.context.identifier,
                          "创建群组"
                        ),
                      },
                    });
                    return (
                      n.tim.sendMessage(i),
                      n.emitGroupListUpdate(),
                      n.getGroupProfile({ groupID: r.data.groupID })
                    );
                  })
                  .then(function (e) {
                    var n = e.data.group;
                    return (
                      (n.selfInfo.messageRemindType =
                        t.MSG_REMIND_ACPT_AND_NOTE),
                      (n.selfInfo.role = t.GRP_MBR_ROLE_OWNER),
                      e
                    );
                  })
                  .catch(function (t) {
                    return (
                      o.setText("groupType=".concat(e.type)),
                      n.probeNetwork().then(function (e) {
                        var n = v(e, 2),
                          r = n[0],
                          i = n[1];
                        o.setError(t, r, i).setEnd();
                      }),
                      J.error("GroupController.createGroup error:", t),
                      Hr(t)
                    );
                  })
              );
            },
          },
          {
            key: "joinGroup",
            value: function (e) {
              var n = this,
                r = e.groupID;
              if (e.type === t.GRP_WORK) {
                var o = new ht({ code: dt.CANNOT_JOIN_WORK, message: Vt });
                return Hr(o);
              }
              if (this.hasLocalGroup(r)) {
                if (!this.isLoggedIn())
                  return Fr({ status: t.JOIN_STATUS_ALREADY_IN_GROUP });
                var i = new ro();
                return (
                  i.setMethod(Ao).setStart(),
                  this.getGroupProfile({ groupID: r })
                    .then(function (e) {
                      return (
                        i
                          .setCode(0)
                          .setNetworkType(n.getNetworkType())
                          .setText(
                            "groupID="
                              .concat(r, " joinedStatus=")
                              .concat(t.JOIN_STATUS_ALREADY_IN_GROUP)
                          )
                          .setEnd(),
                        Fr({ status: t.JOIN_STATUS_ALREADY_IN_GROUP })
                      );
                    })
                    .catch(function (t) {
                      return (
                        i
                          .setCode(0)
                          .setNetworkType(n.getNetworkType())
                          .setText("groupID=".concat(r, " unjoined"))
                          .setEnd(),
                        J.warn(
                          "GroupController.joinGroup ".concat(
                            r,
                            " was unjoined, now join!"
                          )
                        ),
                        n.groupMap.delete(r),
                        n.applyJoinGroup(e)
                      );
                    })
                );
              }
              return (
                J.log("GroupController.joinGroup. groupID:", r),
                this.isLoggedIn()
                  ? this.applyJoinGroup(e)
                  : this.AVChatRoomHandler.joinWithoutAuth(e)
              );
            },
          },
          {
            key: "quitGroup",
            value: function (e) {
              var t = this;
              J.log("GroupController.quitGroup. groupID:", e);
              var n = this.AVChatRoomHandler.checkJoinedAVChatRoomByID(e);
              if (n && !this.isLoggedIn())
                return (
                  J.log(
                    "GroupController.quitGroup anonymously ok. groupID:",
                    e
                  ),
                  this.deleteLocalGroupAndConversation(e),
                  this.AVChatRoomHandler.reset(e),
                  Fr({ groupID: e })
                );
              var r = new ro();
              return (
                r.setMethod(Ro).setStart(),
                this.request({
                  name: "group",
                  action: "quitGroup",
                  param: { groupID: e },
                })
                  .then(function () {
                    return (
                      r
                        .setCode(0)
                        .setNetworkType(t.getNetworkType())
                        .setText("groupID=".concat(e))
                        .setEnd(),
                      J.log("GroupController.quitGroup ok. groupID:", e),
                      n && t.AVChatRoomHandler.reset(e),
                      t.deleteLocalGroupAndConversation(e),
                      new Ur({ groupID: e })
                    );
                  })
                  .catch(function (n) {
                    return (
                      r.setText("groupID=".concat(e)),
                      t.probeNetwork().then(function (e) {
                        var t = v(e, 2),
                          o = t[0],
                          i = t[1];
                        r.setError(n, o, i).setEnd();
                      }),
                      J.error(
                        "GroupController.quitGroup error. error:"
                          .concat(de(n), " groupID:")
                          .concat(e)
                      ),
                      Hr(n)
                    );
                  })
              );
            },
          },
          {
            key: "changeGroupOwner",
            value: function (e) {
              var n = this;
              if (
                this.hasLocalGroup(e.groupID) &&
                this.getLocalGroupProfile(e.groupID).type === t.GRP_AVCHATROOM
              )
                return Hr(
                  new ht({
                    code: dt.CANNOT_CHANGE_OWNER_IN_AVCHATROOM,
                    message: jt,
                  })
                );
              if (e.newOwnerID === this.tim.loginInfo.identifier)
                return Hr(
                  new ht({ code: dt.CANNOT_CHANGE_OWNER_TO_SELF, message: Yt })
                );
              var r = new ro();
              return (
                r.setMethod(No).setStart(),
                J.log("GroupController.changeGroupOwner. groupID:", e.groupID),
                this.request({
                  name: "group",
                  action: "changeGroupOwner",
                  param: e,
                })
                  .then(function () {
                    r
                      .setCode(0)
                      .setNetworkType(n.getNetworkType())
                      .setText("groupID=".concat(e.groupID))
                      .setEnd(),
                      J.log(
                        "GroupController.changeGroupOwner ok. groupID:",
                        e.groupID
                      );
                    var t = e.groupID,
                      o = e.newOwnerID;
                    n.groupMap.get(t).ownerID = o;
                    var i = n.groupMemberListMap.get(t);
                    if (i instanceof Map) {
                      var s = i.get(n.tim.loginInfo.identifier);
                      oe(s) ||
                        (s.updateRole("Member"),
                        (n.groupMap.get(t).selfInfo.role = "Member"));
                      var a = i.get(o);
                      oe(a) || a.updateRole("Owner");
                    }
                    return (
                      n.emitGroupListUpdate(!0, !1),
                      new Ur({ group: n.groupMap.get(t) })
                    );
                  })
                  .catch(function (t) {
                    return (
                      r.setText("groupID=".concat(e.groupID)),
                      n.probeNetwork().then(function (e) {
                        var n = v(e, 2),
                          o = n[0],
                          i = n[1];
                        r.setError(t, o, i).setEnd();
                      }),
                      J.error(
                        "GroupController.changeGroupOwner error:"
                          .concat(de(t), " groupID:")
                          .concat(e.groupID)
                      ),
                      Hr(t)
                    );
                  })
              );
            },
          },
          {
            key: "dismissGroup",
            value: function (e) {
              var n = this;
              if (
                this.hasLocalGroup(e) &&
                this.getLocalGroupProfile(e).type === t.GRP_WORK
              )
                return Hr(
                  new ht({ code: dt.CANNOT_DISMISS_WORK, message: $t })
                );
              var r = new ro();
              return (
                r.setMethod(Po).setStart(),
                J.log("GroupController.dismissGroup. groupID:".concat(e)),
                this.request({
                  name: "group",
                  action: "destroyGroup",
                  param: { groupID: e },
                })
                  .then(function () {
                    return (
                      r
                        .setCode(0)
                        .setNetworkType(n.getNetworkType())
                        .setText("groupID=".concat(e))
                        .setEnd(),
                      J.log(
                        "GroupController.dismissGroup ok. groupID:".concat(e)
                      ),
                      n.deleteLocalGroupAndConversation(e),
                      n.checkJoinedAVChatRoomByID(e) &&
                        n.AVChatRoomHandler.reset(e),
                      new Ur({ groupID: e })
                    );
                  })
                  .catch(function (t) {
                    return (
                      r.setText("groupID=".concat(e)),
                      n.probeNetwork().then(function (e) {
                        var n = v(e, 2),
                          o = n[0],
                          i = n[1];
                        r.setError(t, o, i).setEnd();
                      }),
                      J.error(
                        "GroupController.dismissGroup error:"
                          .concat(de(t), " groupID:")
                          .concat(e)
                      ),
                      Hr(t)
                    );
                  })
              );
            },
          },
          {
            key: "updateGroupProfile",
            value: function (e) {
              var t = this;
              !this.hasLocalGroup(e.groupID) ||
                Se(this.getLocalGroupProfile(e.groupID).type) ||
                oe(e.joinOption) ||
                (J.warn(
                  "GroupController.updateGroupProfile Work/Meeting/AVChatRoom群不能设置字段：joinOption，自动忽略该字段"
                ),
                (e.joinOption = void 0)),
                oe(e.muteAllMembers) ||
                  (e.muteAllMembers
                    ? (e.muteAllMembers = "On")
                    : (e.muteAllMembers = "Off"));
              var n = new ro();
              return (
                n.setMethod(Go).setStart(),
                n.setText(JSON.stringify(e)),
                J.log(
                  "GroupController.updateGroupProfile. groupID:",
                  e.groupID
                ),
                this.request({
                  name: "group",
                  action: "updateGroupProfile",
                  param: e,
                })
                  .then(function () {
                    (n.setCode(0).setNetworkType(t.getNetworkType()).setEnd(),
                    J.log(
                      "GroupController.updateGroupProfile ok. groupID:",
                      e.groupID
                    ),
                    t.hasLocalGroup(e.groupID)) &&
                      (t.groupMap.get(e.groupID).updateGroup(e),
                      t._setStorageGroupList());
                    return new Ur({ group: t.groupMap.get(e.groupID) });
                  })
                  .catch(function (r) {
                    return (
                      t.probeNetwork().then(function (e) {
                        var t = v(e, 2),
                          o = t[0],
                          i = t[1];
                        n.setError(r, o, i).setEnd();
                      }),
                      J.log(
                        "GroupController.updateGroupProfile failed. error:"
                          .concat(de(r), " groupID:")
                          .concat(e.groupID)
                      ),
                      Hr(r)
                    );
                  })
              );
            },
          },
          {
            key: "setGroupMemberRole",
            value: function (e) {
              var n = this,
                r = e.groupID,
                o = e.userID,
                i = e.role,
                s = this.groupMap.get(r);
              if (s.selfInfo.role !== t.GRP_MBR_ROLE_OWNER)
                return Hr(new ht({ code: dt.NOT_OWNER, message: Qt }));
              if ([t.GRP_WORK, t.GRP_AVCHATROOM].includes(s.type))
                return Hr(
                  new ht({
                    code: dt.CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM,
                    message: Zt,
                  })
                );
              if ([t.GRP_MBR_ROLE_ADMIN, t.GRP_MBR_ROLE_MEMBER].indexOf(i) < 0)
                return Hr(
                  new ht({ code: dt.INVALID_MEMBER_ROLE, message: en })
                );
              if (o === this.tim.loginInfo.identifier)
                return Hr(
                  new ht({ code: dt.CANNOT_SET_SELF_MEMBER_ROLE, message: tn })
                );
              var a = new ro();
              return (
                a.setMethod(Yo).setStart(),
                a.setText(
                  "groupID=".concat(r, " userID=").concat(o, " role=").concat(i)
                ),
                J.log(
                  "GroupController.setGroupMemberRole. groupID:"
                    .concat(r, ". userID: ")
                    .concat(o)
                ),
                this._modifyGroupMemberInfo({ groupID: r, userID: o, role: i })
                  .then(function (e) {
                    return (
                      a.setCode(0).setNetworkType(n.getNetworkType()).setEnd(),
                      J.log(
                        "GroupController.setGroupMemberRole ok. groupID:"
                          .concat(r, ". userID: ")
                          .concat(o)
                      ),
                      new Ur({ group: s, member: e })
                    );
                  })
                  .catch(function (e) {
                    return (
                      n.probeNetwork().then(function (t) {
                        var n = v(t, 2),
                          r = n[0],
                          o = n[1];
                        a.setError(e, r, o).setEnd();
                      }),
                      J.error(
                        "GroupController.setGroupMemberRole error:"
                          .concat(de(e), " groupID:")
                          .concat(r, " userID:")
                          .concat(o)
                      ),
                      Hr(e)
                    );
                  })
              );
            },
          },
          {
            key: "setGroupMemberMuteTime",
            value: function (e) {
              var t = this,
                n = e.groupID,
                r = e.userID,
                o = e.muteTime;
              if (r === this.tim.loginInfo.identifier)
                return Hr(new ht({ code: dt.CANNOT_MUTE_SELF, message: nn }));
              J.log(
                "GroupController.setGroupMemberMuteTime. groupID:"
                  .concat(n, ". userID: ")
                  .concat(r)
              );
              var i = new ro();
              return (
                i.setMethod(Vo).setStart(),
                i.setText(
                  "groupID="
                    .concat(n, " userID=")
                    .concat(r, " muteTime=")
                    .concat(o)
                ),
                this._modifyGroupMemberInfo({
                  groupID: n,
                  userID: r,
                  muteTime: o,
                })
                  .then(function (e) {
                    return (
                      i.setCode(0).setNetworkType(t.getNetworkType()).setEnd(),
                      J.log(
                        "GroupController.setGroupMemberMuteTime ok. groupID:"
                          .concat(n, ". userID: ")
                          .concat(r)
                      ),
                      new Ur({ group: t.getLocalGroupProfile(n), member: e })
                    );
                  })
                  .catch(function (e) {
                    return (
                      t.probeNetwork().then(function (t) {
                        var n = v(t, 2),
                          r = n[0],
                          o = n[1];
                        i.setError(e, r, o).setEnd();
                      }),
                      J.error(
                        "GroupController.setGroupMemberMuteTime error:"
                          .concat(de(e), " groupID:")
                          .concat(n, " userID:")
                          .concat(r)
                      ),
                      Hr(e)
                    );
                  })
              );
            },
          },
          {
            key: "setMessageRemindType",
            value: function (e) {
              var t = this,
                n = new ro();
              n.setMethod(Lo).setStart(),
                n.setText(
                  "groupID="
                    .concat(e.groupID, " userID=")
                    .concat(e.userID || this.tim.loginInfo.identifier)
                ),
                J.log(
                  "GroupController.setMessageRemindType. groupID:"
                    .concat(e.groupID, ". userID: ")
                    .concat(e.userID || this.tim.loginInfo.identifier)
                );
              var r = e.groupID,
                o = e.messageRemindType;
              return this._modifyGroupMemberInfo({
                groupID: r,
                messageRemindType: o,
                userID: this.tim.loginInfo.identifier,
              })
                .then(function () {
                  n.setCode(0).setNetworkType(t.getNetworkType()).setEnd(),
                    J.log(
                      "GroupController.setMessageRemindType ok. groupID:"
                        .concat(e.groupID, " userID:")
                        .concat(e.userID || t.tim.loginInfo.identifier)
                    );
                  var r = t.getLocalGroupProfile(e.groupID);
                  return (
                    r && (r.selfInfo.messageRemindType = o),
                    new Ur({ group: r })
                  );
                })
                .catch(function (r) {
                  return (
                    t.probeNetwork().then(function (e) {
                      var t = v(e, 2),
                        o = t[0],
                        i = t[1];
                      n.setError(r, o, i).setEnd();
                    }),
                    J.error(
                      "GroupController.setMessageRemindType error:"
                        .concat(de(r), " groupID:")
                        .concat(e.groupID, " userID:")
                        .concat(e.userID || t.tim.loginInfo.identifier)
                    ),
                    Hr(r)
                  );
                });
            },
          },
          {
            key: "setGroupMemberNameCard",
            value: function (e) {
              var t = this,
                n = e.groupID,
                r = e.userID,
                o = void 0 === r ? this.tim.loginInfo.identifier : r,
                i = e.nameCard;
              J.log(
                "GroupController.setGroupMemberNameCard. groupID:"
                  .concat(n, ". userID: ")
                  .concat(o)
              );
              var s = new ro();
              return (
                s.setMethod(jo).setStart(),
                s.setText(
                  "groupID="
                    .concat(n, " userID=")
                    .concat(o, " nameCard=")
                    .concat(i)
                ),
                this._modifyGroupMemberInfo({
                  groupID: n,
                  userID: o,
                  nameCard: i,
                })
                  .then(function (e) {
                    J.log(
                      "GroupController.setGroupMemberNameCard ok. groupID:"
                        .concat(n, ". userID: ")
                        .concat(o)
                    ),
                      s.setCode(0).setNetworkType(t.getNetworkType()).setEnd();
                    var r = t.getLocalGroupProfile(n);
                    return (
                      o === t.tim.loginInfo.identifier &&
                        r &&
                        r.setSelfNameCard(i),
                      new Ur({ group: r, member: e })
                    );
                  })
                  .catch(function (e) {
                    return (
                      t.probeNetwork().then(function (t) {
                        var n = v(t, 2),
                          r = n[0],
                          o = n[1];
                        s.setError(e, r, o).setEnd();
                      }),
                      J.error(
                        "GroupController.setGroupMemberNameCard error:"
                          .concat(de(e), " groupID:")
                          .concat(n, " userID:")
                          .concat(o)
                      ),
                      Hr(e)
                    );
                  })
              );
            },
          },
          {
            key: "setGroupMemberCustomField",
            value: function (e) {
              var t = this,
                n = e.groupID,
                r = e.userID,
                o = void 0 === r ? this.tim.loginInfo.identifier : r,
                i = e.memberCustomField;
              J.log(
                "GroupController.setGroupMemberCustomField. groupID:"
                  .concat(n, ". userID: ")
                  .concat(o)
              );
              var s = new ro();
              return (
                s.setMethod($o).setStart(),
                s.setText(
                  "groupID="
                    .concat(n, " userID=")
                    .concat(o, " memberCustomField=")
                    .concat(i)
                ),
                this._modifyGroupMemberInfo({
                  groupID: n,
                  userID: o,
                  memberCustomField: i,
                })
                  .then(function (e) {
                    return (
                      s.setCode(0).setNetworkType(t.getNetworkType()).setEnd(),
                      J.log(
                        "GroupController.setGroupMemberCustomField ok. groupID:"
                          .concat(n, ". userID: ")
                          .concat(o)
                      ),
                      new Ur({ group: t.groupMap.get(n), member: e })
                    );
                  })
                  .catch(function (e) {
                    return (
                      t.probeNetwork().then(function (t) {
                        var n = v(t, 2),
                          r = n[0],
                          o = n[1];
                        s.setError(e, r, o).setEnd();
                      }),
                      J.error(
                        "GroupController.setGroupMemberCustomField error:"
                          .concat(de(e), " groupID:")
                          .concat(n, " userID:")
                          .concat(o)
                      ),
                      Hr(e)
                    );
                  })
              );
            },
          },
          {
            key: "getGroupList",
            value: function (e) {
              var t = this,
                n = new ro();
              n.setMethod(bo).setStart(), J.log("GroupController.getGroupList");
              var r = {
                  introduction: "Introduction",
                  notification: "Notification",
                  createTime: "CreateTime",
                  ownerID: "Owner_Account",
                  lastInfoTime: "LastInfoTime",
                  memberNum: "MemberNum",
                  maxMemberNum: "MaxMemberNum",
                  joinOption: "ApplyJoinOption",
                  muteAllMembers: "ShutUpAllMember",
                },
                o = ["Type", "Name", "FaceUrl", "NextMsgSeq", "LastMsgTime"];
              return (
                e &&
                  e.groupProfileFilter &&
                  e.groupProfileFilter.forEach(function (e) {
                    r[e] && o.push(r[e]);
                  }),
                this.request({
                  name: "group",
                  action: "list",
                  param: {
                    responseFilter: {
                      groupBaseInfoFilter: o,
                      selfInfoFilter: ["Role", "JoinTime", "MsgFlag"],
                    },
                  },
                })
                  .then(function (e) {
                    var r = e.data.groups;
                    return (
                      J.log(
                        "GroupController.getGroupList ok. nums=".concat(
                          r.length
                        )
                      ),
                      t._groupListTreeShaking(r),
                      t.updateGroupMap(r),
                      n
                        .setCode(0)
                        .setNetworkType(t.getNetworkType())
                        .setText(
                          ""
                            .concat(r.length, "-afterTreeshaking-")
                            .concat(t.groupMap.size)
                        )
                        .setEnd(),
                      t.tempConversationList &&
                        (J.log(
                          "GroupController.getGroupList update last message with tempConversationList, nums=".concat(
                            t.tempConversationList.length
                          )
                        ),
                        t._handleUpdateGroupLastMessage({
                          data: t.tempConversationList,
                        }),
                        (t.tempConversationList = null)),
                      t.emitGroupListUpdate(),
                      new Ur({ groupList: t.getLocalGroups() })
                    );
                  })
                  .catch(function (e) {
                    return (
                      t.probeNetwork().then(function (t) {
                        var r = v(t, 2),
                          o = r[0],
                          i = r[1];
                        n.setError(e, o, i).setEnd();
                      }),
                      J.error("GroupController.getGroupList error:", e),
                      Hr(e)
                    );
                  })
              );
            },
          },
          {
            key: "getGroupMemberList",
            value: function (e) {
              var t = this,
                n = e.groupID,
                r = e.offset,
                o = void 0 === r ? 0 : r,
                i = e.count,
                s = void 0 === i ? 15 : i,
                a = new ro();
              a.setMethod(Fo).setStart(),
                J.log(
                  "GroupController.getGroupMemberList groupID: "
                    .concat(n, " offset: ")
                    .concat(o, " count: ")
                    .concat(s)
                );
              var u = [];
              return this.request({
                name: "group",
                action: "getGroupMemberList",
                param: {
                  groupID: n,
                  offset: o,
                  limit: s > 100 ? 100 : s,
                  memberInfoFilter: ["Role", "NameCard", "ShutUpUntil"],
                },
              })
                .then(function (e) {
                  var r = e.data,
                    o = r.members,
                    i = r.memberNum;
                  return re(o) && 0 !== o.length
                    ? (t.hasLocalGroup(n) &&
                        (t.getLocalGroupProfile(n).memberNum = i),
                      (u = t._updateLocalGroupMemberMap(n, o)),
                      t.tim.getUserProfile({
                        userIDList: o.map(function (e) {
                          return e.userID;
                        }),
                        tagList: [et.NICK, et.AVATAR],
                      }))
                    : Promise.resolve([]);
                })
                .then(function (e) {
                  var r = e.data;
                  if (!re(r) || 0 === r.length) return Fr({ memberList: [] });
                  var i = r.map(function (e) {
                    return { userID: e.userID, nick: e.nick, avatar: e.avatar };
                  });
                  return (
                    t._updateLocalGroupMemberMap(n, i),
                    a
                      .setCode(0)
                      .setNetworkType(t.getNetworkType())
                      .setText(
                        "groupID="
                          .concat(n, " offset=")
                          .concat(o, " count=")
                          .concat(s)
                      )
                      .setEnd(),
                    J.log("GroupController.getGroupMemberList ok."),
                    new Ur({ memberList: u })
                  );
                })
                .catch(function (e) {
                  return (
                    t.probeNetwork().then(function (t) {
                      var n = v(t, 2),
                        r = n[0],
                        o = n[1];
                      a.setError(e, r, o).setEnd();
                    }),
                    J.error("GroupController.getGroupMemberList error:", e),
                    Hr(e)
                  );
                });
            },
          },
          {
            key: "getLocalGroups",
            value: function () {
              return _(this.groupMap.values());
            },
          },
          {
            key: "getLocalGroupProfile",
            value: function (e) {
              return this.groupMap.get(e);
            },
          },
          {
            key: "hasLocalGroup",
            value: function (e) {
              return this.groupMap.has(e);
            },
          },
          {
            key: "getLocalGroupMemberInfo",
            value: function (e, t) {
              return this.groupMemberListMap.has(e)
                ? this.groupMemberListMap.get(e).get(t)
                : null;
            },
          },
          {
            key: "setLocalGroupMember",
            value: function (e, t) {
              if (this.groupMemberListMap.has(e))
                this.groupMemberListMap.get(e).set(t.userID, t);
              else {
                var n = new Map().set(t.userID, t);
                this.groupMemberListMap.set(e, n);
              }
            },
          },
          {
            key: "hasLocalGroupMember",
            value: function (e, t) {
              return (
                this.groupMemberListMap.has(e) &&
                this.groupMemberListMap.get(e).has(t)
              );
            },
          },
          {
            key: "hasLocalGroupMemberMap",
            value: function (e) {
              return this.groupMemberListMap.has(e);
            },
          },
          {
            key: "getGroupProfile",
            value: function (e) {
              var t = this,
                n = new ro();
              n.setMethod(Uo).setStart(),
                J.log("GroupController.getGroupProfile. groupID:", e.groupID);
              var r = e.groupID,
                o = e.groupCustomFieldFilter,
                i = {
                  groupIDList: [r],
                  responseFilter: {
                    groupBaseInfoFilter: [
                      "Type",
                      "Name",
                      "Introduction",
                      "Notification",
                      "FaceUrl",
                      "Owner_Account",
                      "CreateTime",
                      "InfoSeq",
                      "LastInfoTime",
                      "LastMsgTime",
                      "MemberNum",
                      "MaxMemberNum",
                      "ApplyJoinOption",
                      "NextMsgSeq",
                      "ShutUpAllMember",
                    ],
                    groupCustomFieldFilter: o,
                  },
                };
              return this.getGroupProfileAdvance(i)
                .then(function (o) {
                  var i,
                    s = o.data,
                    a = s.successGroupList,
                    u = s.failureGroupList;
                  return (
                    J.log(
                      "GroupController.getGroupProfile ok. groupID:".concat(
                        e.groupID
                      )
                    ),
                    u.length > 0
                      ? Hr(u[0])
                      : (De(a[0].type) && !t.hasLocalGroup(r)
                          ? (i = new ba(a[0]))
                          : (t.updateGroupMap(a),
                            (i = t.getLocalGroupProfile(r))),
                        n
                          .setCode(0)
                          .setNetworkType(t.getNetworkType())
                          .setText(
                            "groupID="
                              .concat(i.groupID, " type=")
                              .concat(i.type, " muteAllMembers=")
                              .concat(i.muteAllMembers, " ownerID=")
                              .concat(i.ownerID)
                          )
                          .setEnd(),
                        i && i.selfInfo && !i.selfInfo.nameCard
                          ? t.updateSelfInfo(i).then(function (e) {
                              return new Ur({ group: e });
                            })
                          : new Ur({ group: i }))
                  );
                })
                .catch(function (r) {
                  return (
                    t.probeNetwork().then(function (t) {
                      var o = v(t, 2),
                        i = o[0],
                        s = o[1];
                      n.setError(r, i, s)
                        .setText("groupID=".concat(e.groupID))
                        .setEnd();
                    }),
                    J.error(
                      "GroupController.getGroupProfile error:"
                        .concat(de(r), " groupID:")
                        .concat(e.groupID)
                    ),
                    Hr(r)
                  );
                });
            },
          },
          {
            key: "getGroupMemberProfile",
            value: function (e) {
              var t = this,
                n = new ro();
              n
                .setMethod(Ho)
                .setText(
                  e.userIDList.length > 5
                    ? "userIDList.length=".concat(e.userIDList.length)
                    : "userIDList=".concat(e.userIDList)
                )
                .setStart(),
                J.log(
                  "GroupController.getGroupMemberProfile groupID:"
                    .concat(e.groupID, " userIDList:")
                    .concat(e.userIDList.join(","))
                ),
                e.userIDList.length > 50 &&
                  (e.userIDList = e.userIDList.slice(0, 50));
              var r = e.groupID,
                o = e.userIDList;
              return this._getGroupMemberProfileAdvance(
                u(u({}, e), {}, { userIDList: o })
              )
                .then(function (e) {
                  var n = e.data.members;
                  return re(n) && 0 !== n.length
                    ? (t._updateLocalGroupMemberMap(r, n),
                      t.tim.getUserProfile({
                        userIDList: n.map(function (e) {
                          return e.userID;
                        }),
                        tagList: [et.NICK, et.AVATAR],
                      }))
                    : Fr([]);
                })
                .then(function (e) {
                  var i = e.data.map(function (e) {
                    return { userID: e.userID, nick: e.nick, avatar: e.avatar };
                  });
                  t._updateLocalGroupMemberMap(r, i);
                  var s = o
                    .filter(function (e) {
                      return t.hasLocalGroupMember(r, e);
                    })
                    .map(function (e) {
                      return t.getLocalGroupMemberInfo(r, e);
                    });
                  return (
                    n.setCode(0).setNetworkType(t.getNetworkType()).setEnd(),
                    new Ur({ memberList: s })
                  );
                });
            },
          },
          {
            key: "_getGroupMemberProfileAdvance",
            value: function (e) {
              return this.request({
                name: "group",
                action: "getGroupMemberProfile",
                param: u(
                  u({}, e),
                  {},
                  {
                    memberInfoFilter: e.memberInfoFilter
                      ? e.memberInfoFilter
                      : ["Role", "JoinTime", "NameCard", "ShutUpUntil"],
                  }
                ),
              });
            },
          },
          {
            key: "updateSelfInfo",
            value: function (e) {
              var t = e.groupID;
              J.log("GroupController.updateSelfInfo groupID:", t);
              var n = {
                groupID: t,
                userIDList: [this.tim.loginInfo.identifier],
              };
              return this.getGroupMemberProfile(n).then(function (n) {
                var r = n.data.memberList;
                return (
                  J.log("GroupController.updateSelfInfo ok. groupID:", t),
                  e && 0 !== r.length && e.updateSelfInfo(r[0]),
                  e
                );
              });
            },
          },
          {
            key: "addGroupMember",
            value: function (e) {
              var t = this,
                n = new ro();
              n.setMethod(Ko).setText("groupID=".concat(e.groupID)).setStart();
              var r = this.getLocalGroupProfile(e.groupID);
              if (De(r.type)) {
                var o = new ht({
                  code: dt.CANNOT_ADD_MEMBER_IN_AVCHATROOM,
                  message: zt,
                });
                return (
                  n
                    .setCode(dt.CANNOT_ADD_MEMBER_IN_AVCHATROOM)
                    .setMessage(zt)
                    .setNetworkType(this.getNetworkType())
                    .setText(
                      "groupID=".concat(e.groupID, " groupType=").concat(r.type)
                    )
                    .setEnd(),
                  Hr(o)
                );
              }
              return (
                (e.userIDList = e.userIDList.map(function (e) {
                  return { userID: e };
                })),
                J.log("GroupController.addGroupMember. groupID:", e.groupID),
                this.request({
                  name: "group",
                  action: "addGroupMember",
                  param: e,
                })
                  .then(function (o) {
                    var i = o.data.members;
                    n
                      .setCode(0)
                      .setNetworkType(t.getNetworkType())
                      .setText("groupID=".concat(e.groupID))
                      .setEnd(),
                      J.log(
                        "GroupController.addGroupMember ok. groupID:",
                        e.groupID
                      );
                    var s = i
                        .filter(function (e) {
                          return 1 === e.result;
                        })
                        .map(function (e) {
                          return e.userID;
                        }),
                      a = i
                        .filter(function (e) {
                          return 0 === e.result;
                        })
                        .map(function (e) {
                          return e.userID;
                        }),
                      u = i
                        .filter(function (e) {
                          return 2 === e.result;
                        })
                        .map(function (e) {
                          return e.userID;
                        });
                    return 0 === s.length
                      ? new Ur({
                          successUserIDList: s,
                          failureUserIDList: a,
                          existedUserIDList: u,
                        })
                      : ((r.memberNum += s.length),
                        new Ur({
                          successUserIDList: s,
                          failureUserIDList: a,
                          existedUserIDList: u,
                          group: r,
                        }));
                  })
                  .catch(function (r) {
                    return (
                      t.probeNetwork().then(function (t) {
                        var o = v(t, 2),
                          i = o[0],
                          s = o[1];
                        n.setError(r, i, s)
                          .setText("groupID=".concat(e.groupID))
                          .setEnd();
                      }),
                      J.error(
                        "GroupController.addGroupMember error:"
                          .concat(de(r), " groupID:")
                          .concat(e.groupID)
                      ),
                      Hr(r)
                    );
                  })
              );
            },
          },
          {
            key: "deleteGroupMember",
            value: function (e) {
              var n = this,
                r = new ro();
              r
                .setMethod(Bo)
                .setText(
                  e.userIDList.length > 5
                    ? "userIDList.length=".concat(e.userIDList.length)
                    : "userIDList=".concat(e.userIDList)
                )
                .setStart(),
                J.log(
                  "GroupController.deleteGroupMember groupID:"
                    .concat(e.groupID, " userIDList:")
                    .concat(e.userIDList)
                );
              var o = this.getLocalGroupProfile(e.groupID);
              return o.type === t.GRP_AVCHATROOM
                ? Hr(
                    new ht({
                      code: dt.CANNOT_KICK_MEMBER_IN_AVCHATROOM,
                      message: Jt,
                    })
                  )
                : this.request({
                    name: "group",
                    action: "deleteGroupMember",
                    param: e,
                  })
                    .then(function () {
                      return (
                        r
                          .setCode(0)
                          .setNetworkType(n.getNetworkType())
                          .setEnd(),
                        J.log("GroupController.deleteGroupMember ok"),
                        o.memberNum--,
                        n.deleteLocalGroupMembers(e.groupID, e.userIDList),
                        new Ur({ group: o, userIDList: e.userIDList })
                      );
                    })
                    .catch(function (t) {
                      return (
                        n.probeNetwork().then(function (n) {
                          var o = v(n, 2),
                            i = o[0],
                            s = o[1];
                          r.setError(t, i, s)
                            .setText("groupID=".concat(e.groupID))
                            .setEnd();
                        }),
                        J.error(
                          "GroupController.deleteGroupMember error:"
                            .concat(de(t), " groupID:")
                            .concat(e.groupID)
                        ),
                        Hr(t)
                      );
                    });
            },
          },
          {
            key: "searchGroupByID",
            value: function (e) {
              var t = this,
                n = { groupIDList: [e] },
                r = new ro();
              return (
                r.setMethod(Oo).setText("groupID=".concat(e)).setStart(),
                J.log("GroupController.searchGroupByID. groupID:".concat(e)),
                this.request({
                  name: "group",
                  action: "searchGroupByID",
                  param: n,
                })
                  .then(function (n) {
                    var o = n.data.groupProfile;
                    if (o[0].errorCode !== Pe.SUCCESS)
                      throw new ht({
                        code: o[0].errorCode,
                        message: o[0].errorInfo,
                      });
                    return (
                      r.setCode(0).setNetworkType(t.getNetworkType()).setEnd(),
                      J.log(
                        "GroupController.searchGroupByID ok. groupID:".concat(e)
                      ),
                      new Ur({ group: new ba(o[0]) })
                    );
                  })
                  .catch(function (n) {
                    return (
                      t.probeNetwork().then(function (e) {
                        var t = v(e, 2),
                          o = t[0],
                          i = t[1];
                        r.setError(n, o, i).setEnd();
                      }),
                      J.warn(
                        "GroupController.searchGroupByID error:"
                          .concat(de(n), " groupID:")
                          .concat(e)
                      ),
                      Hr(n)
                    );
                  })
              );
            },
          },
          {
            key: "applyJoinGroup",
            value: function (e) {
              var t = this,
                n = new ro();
              return (
                n.setMethod(Ao).setStart(),
                this.request({
                  name: "group",
                  action: "applyJoinGroup",
                  param: e,
                })
                  .then(function (r) {
                    var o = r.data,
                      i = o.joinedStatus,
                      s = o.longPollingKey;
                    switch (
                      (n
                        .setCode(0)
                        .setNetworkType(t.getNetworkType())
                        .setText(
                          "groupID="
                            .concat(e.groupID, " joinedStatus=")
                            .concat(i)
                        )
                        .setEnd(),
                      J.log(
                        "GroupController.joinGroup ok. groupID:"
                          .concat(e.groupID, " joinedStatus:")
                          .concat(i, " longPollingKey:")
                          .concat(s)
                      ),
                      i)
                    ) {
                      case Le.WAIT_APPROVAL:
                        return new Ur({ status: Le.WAIT_APPROVAL });
                      case Le.SUCCESS:
                        return t
                          .getGroupProfile({ groupID: e.groupID })
                          .then(function (n) {
                            var r = n.data.group,
                              o = { status: Le.SUCCESS, group: r };
                            return oe(s)
                              ? (t.emitGroupListUpdate(!0, !1), new Ur(o))
                              : (t.emitInnerEvent(Tr, e.groupID),
                                t.AVChatRoomHandler.startRunLoop({
                                  longPollingKey: s,
                                  group: r,
                                }));
                          });
                      default:
                        var a = new ht({
                          code: dt.JOIN_GROUP_FAIL,
                          message: Wt,
                        });
                        return (
                          J.error(
                            "GroupController.joinGroup error:"
                              .concat(de(a), " groupID:")
                              .concat(e.groupID)
                          ),
                          Hr(a)
                        );
                    }
                  })
                  .catch(function (r) {
                    return (
                      n.setText("groupID=".concat(e.groupID)),
                      t.probeNetwork().then(function (e) {
                        var t = v(e, 2),
                          o = t[0],
                          i = t[1];
                        n.setError(r, o, i).setEnd();
                      }),
                      J.error(
                        "GroupController.joinGroup error:"
                          .concat(de(r), " groupID:")
                          .concat(e.groupID)
                      ),
                      Hr(r)
                    );
                  })
              );
            },
          },
          {
            key: "applyJoinAVChatRoom",
            value: function (e) {
              return this.AVChatRoomHandler.applyJoinAVChatRoom(e);
            },
          },
          {
            key: "handleGroupApplication",
            value: function (e) {
              var t = this,
                n = e.message.payload,
                r = n.groupProfile.groupID,
                o = n.authentication,
                i = n.messageKey,
                s = n.operatorID,
                a = new ro();
              return (
                a.setMethod(wo).setText("groupID=".concat(r)).setStart(),
                J.log("GroupController.handleApplication. groupID:", r),
                this.request({
                  name: "group",
                  action: "handleApplyJoinGroup",
                  param: u(
                    u({}, e),
                    {},
                    {
                      applicant: s,
                      groupID: r,
                      authentication: o,
                      messageKey: i,
                    }
                  ),
                })
                  .then(function () {
                    return (
                      a.setCode(0).setNetworkType(t.getNetworkType()).setEnd(),
                      J.log(
                        "GroupController.handleApplication ok. groupID:",
                        r
                      ),
                      t.deleteGroupSystemNotice({ messageList: [e.message] }),
                      new Ur({ group: t.getLocalGroupProfile(r) })
                    );
                  })
                  .catch(function (e) {
                    return (
                      t.probeNetwork().then(function (t) {
                        var n = v(t, 2),
                          r = n[0],
                          o = n[1];
                        a.setError(e, r, o).setEnd();
                      }),
                      J.error(
                        "GroupController.handleApplication error. error:"
                          .concat(de(e), " groupID:")
                          .concat(r)
                      ),
                      Hr(e)
                    );
                  })
              );
            },
          },
          {
            key: "deleteGroupSystemNotice",
            value: function (e) {
              var n = this;
              return re(e.messageList) && 0 !== e.messageList.length
                ? (J.log(
                    "GroupController.deleteGroupSystemNotice " +
                      e.messageList.map(function (e) {
                        return e.ID;
                      })
                  ),
                  this.request({
                    name: "group",
                    action: "deleteGroupSystemNotice",
                    param: {
                      messageListToDelete: e.messageList.map(function (e) {
                        return {
                          from: t.CONV_SYSTEM,
                          messageSeq: e.clientSequence,
                          messageRandom: e.random,
                        };
                      }),
                    },
                  })
                    .then(function () {
                      return (
                        J.log("GroupController.deleteGroupSystemNotice ok"),
                        e.messageList.forEach(function (e) {
                          n.tim.messageController.deleteLocalMessage(e);
                        }),
                        new Ur()
                      );
                    })
                    .catch(function (e) {
                      return (
                        J.error(
                          "GroupController.deleteGroupSystemNotice error:",
                          e
                        ),
                        Hr(e)
                      );
                    }))
                : Fr();
            },
          },
          {
            key: "getGroupProfileAdvance",
            value: function (e) {
              return (
                re(e.groupIDList) &&
                  e.groupIDList.length > 50 &&
                  (J.warn(
                    "GroupController.getGroupProfileAdvance 获取群资料的数量不能超过50个"
                  ),
                  (e.groupIDList.length = 50)),
                J.log(
                  "GroupController.getGroupProfileAdvance. groupIDList:",
                  e.groupIDList
                ),
                this.request({ name: "group", action: "query", param: e })
                  .then(function (e) {
                    J.log("GroupController.getGroupProfileAdvance ok.");
                    var t = e.data.groups,
                      n = t.filter(function (e) {
                        return oe(e.errorCode) || e.errorCode === Pe.SUCCESS;
                      }),
                      r = t
                        .filter(function (e) {
                          return e.errorCode && e.errorCode !== Pe.SUCCESS;
                        })
                        .map(function (e) {
                          return new ht({
                            code: e.errorCode,
                            message: e.errorInfo,
                            data: { groupID: e.groupID },
                          });
                        });
                    return new Ur({ successGroupList: n, failureGroupList: r });
                  })
                  .catch(function (t) {
                    return (
                      J.error(
                        "GroupController.getGroupProfileAdvance error:"
                          .concat(de(t), " groupIDList:")
                          .concat(e.groupIDList)
                      ),
                      Hr(t)
                    );
                  })
              );
            },
          },
          {
            key: "_deleteLocalGroup",
            value: function (e) {
              return (
                this.groupMap.delete(e),
                this.groupMemberListMap.delete(e),
                this._setStorageGroupList(),
                this.groupMap.has(e) && this.groupMemberListMap.has(e)
              );
            },
          },
          {
            key: "_initGroupList",
            value: function () {
              var e = this,
                t = new ro();
              t.setMethod(qo).setStart(),
                J.time(to),
                J.log("GroupController._initGroupList");
              var n = this._getStorageGroupList();
              re(n) && n.length > 0
                ? (n.forEach(function (t) {
                    e.groupMap.set(t.groupID, new ba(t));
                  }),
                  this.emitGroupListUpdate(!0, !1),
                  t
                    .setCode(0)
                    .setNetworkType(this.getNetworkType())
                    .setText(this.groupMap.size)
                    .setEnd())
                : t
                    .setCode(0)
                    .setNetworkType(this.getNetworkType())
                    .setText(0)
                    .setEnd(),
                this.triggerReady(),
                J.log(
                  "GroupController._initGroupList ok. initCost=".concat(
                    J.timeEnd(to),
                    "ms"
                  )
                ),
                this.getGroupList();
            },
          },
          {
            key: "_initListeners",
            value: function () {
              var e = this.tim.innerEmitter;
              e.once(xn, this._initGroupList, this),
                e.on(Cr, this._handleUpdateGroupLastMessage, this),
                e.on($n, this._handleReceivedGroupMessage, this),
                e.on(Sr, this._handleProfileUpdated, this);
            },
          },
          {
            key: "emitGroupListUpdate",
            value: function () {
              var t =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                n =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                r = this.getLocalGroups();
              n && this.emitInnerEvent(gr, r),
                t && this.emitOuterEvent(e.GROUP_LIST_UPDATED, r);
            },
          },
          {
            key: "_handleReceivedGroupMessage",
            value: function (e) {
              var n = this,
                r = e.data.eventDataList;
              Array.isArray(r) &&
                r.forEach(function (e) {
                  var r = e.conversationID.replace(t.CONV_GROUP, "");
                  n.groupMap.has(r) &&
                    (n.groupMap.get(r).nextMessageSeq =
                      e.lastMessage.sequence + 1);
                });
            },
          },
          {
            key: "_onReceivedGroupSystemNotice",
            value: function (e) {
              var t = e.data;
              this.groupNoticeHandler._onReceivedGroupNotice(t);
            },
          },
          {
            key: "_handleUpdateGroupLastMessage",
            value: function (e) {
              var n = e.data;
              if (
                (J.log(
                  "GroupController._handleUpdateGroupLastMessage convNums="
                    .concat(n.length, " groupNums=")
                    .concat(this.groupMap.size)
                ),
                0 !== this.groupMap.size)
              ) {
                for (var r, o, i, s = !1, a = 0, u = n.length; a < u; a++)
                  (r = n[a]).conversationID &&
                    r.type !== t.CONV_GROUP &&
                    ((o = r.conversationID.split(/^GROUP/)[1]),
                    (i = this.getLocalGroupProfile(o)) &&
                      ((i.lastMessage = r.lastMessage), (s = !0)));
                s &&
                  ((this.groupMap = this._sortLocalGroupList(this.groupMap)),
                  this.emitGroupListUpdate(!0, !1));
              } else this.tempConversationList = n;
            },
          },
          {
            key: "_sortLocalGroupList",
            value: function (e) {
              var t = _(e).filter(function (e) {
                var t = v(e, 2);
                t[0];
                return !Oe(t[1].lastMessage);
              });
              return (
                t.sort(function (e, t) {
                  return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime;
                }),
                new Map([].concat(_(t), _(e)))
              );
            },
          },
          {
            key: "_getStorageGroupList",
            value: function () {
              return this.tim.storage.getItem("groupMap");
            },
          },
          {
            key: "_setStorageGroupList",
            value: function () {
              var e = this.getLocalGroups()
                .filter(function (e) {
                  var t = e.type;
                  return !De(t);
                })
                .slice(0, 20)
                .map(function (e) {
                  return {
                    groupID: e.groupID,
                    name: e.name,
                    avatar: e.avatar,
                    type: e.type,
                  };
                });
              this.tim.storage.setItem("groupMap", e);
            },
          },
          {
            key: "updateGroupMap",
            value: function (e) {
              var t = this;
              e.forEach(function (e) {
                t.groupMap.has(e.groupID)
                  ? t.groupMap.get(e.groupID).updateGroup(e)
                  : t.groupMap.set(e.groupID, new ba(e));
              }),
                this._setStorageGroupList();
            },
          },
          {
            key: "_updateLocalGroupMemberMap",
            value: function (e, t) {
              var n = this;
              return re(t) && 0 !== t.length
                ? t.map(function (t) {
                    return (
                      n.hasLocalGroupMember(e, t.userID)
                        ? n.getLocalGroupMemberInfo(e, t.userID).updateMember(t)
                        : n.setLocalGroupMember(e, new Wa(t)),
                      n.getLocalGroupMemberInfo(e, t.userID)
                    );
                  })
                : [];
            },
          },
          {
            key: "deleteLocalGroupMembers",
            value: function (e, t) {
              var n = this.groupMemberListMap.get(e);
              n &&
                t.forEach(function (e) {
                  n.delete(e);
                });
            },
          },
          {
            key: "_modifyGroupMemberInfo",
            value: function (e) {
              var t = this,
                n = e.groupID,
                r = e.userID;
              return this.request({
                name: "group",
                action: "modifyGroupMemberInfo",
                param: e,
              }).then(function () {
                if (t.hasLocalGroupMember(n, r)) {
                  var o = t.getLocalGroupMemberInfo(n, r);
                  return (
                    oe(e.muteTime) || o.updateMuteUntil(e.muteTime),
                    oe(e.role) || o.updateRole(e.role),
                    oe(e.nameCard) || o.updateNameCard(e.nameCard),
                    oe(e.memberCustomField) ||
                      o.updateMemberCustomField(e.memberCustomField),
                    o
                  );
                }
                return t
                  .getGroupMemberProfile({ groupID: n, userIDList: [r] })
                  .then(function (e) {
                    return v(e.data.memberList, 1)[0];
                  });
              });
            },
          },
          {
            key: "_groupListTreeShaking",
            value: function (e) {
              for (
                var t = new Map(_(this.groupMap)), n = 0, r = e.length;
                n < r;
                n++
              )
                t.delete(e[n].groupID);
              this.AVChatRoomHandler.hasJoinedAVChatRoom() &&
                this.AVChatRoomHandler.getJoinedAVChatRoom().forEach(function (
                  e
                ) {
                  t.delete(e);
                });
              for (var o = _(t.keys()), i = 0, s = o.length; i < s; i++)
                this.groupMap.delete(o[i]);
            },
          },
          {
            key: "_handleProfileUpdated",
            value: function (e) {
              for (
                var t = this,
                  n = e.data,
                  r = function (e) {
                    var r = n[e];
                    t.groupMemberListMap.forEach(function (e) {
                      e.has(r.userID) &&
                        e
                          .get(r.userID)
                          .updateMember({ nick: r.nick, avatar: r.avatar });
                    });
                  },
                  o = 0;
                o < n.length;
                o++
              )
                r(o);
            },
          },
          {
            key: "getJoinedAVChatRoom",
            value: function () {
              return this.AVChatRoomHandler.getJoinedAVChatRoom();
            },
          },
          {
            key: "deleteLocalGroupAndConversation",
            value: function (e) {
              this._deleteLocalGroup(e),
                this.tim.conversationController.deleteLocalConversation(
                  "GROUP".concat(e)
                ),
                this.emitGroupListUpdate(!0, !1);
            },
          },
          {
            key: "checkJoinedAVChatRoomByID",
            value: function (e) {
              return this.AVChatRoomHandler.checkJoinedAVChatRoomByID(e);
            },
          },
          {
            key: "getGroupLastSequence",
            value: function (e) {
              var t = this,
                n = new ro();
              n.setMethod(xo).setStart();
              var r = 0;
              if (this.hasLocalGroup(e)) {
                var o = this.getLocalGroupProfile(e);
                if (o.lastMessage.lastSequence > 0)
                  return (
                    (r = o.lastMessage.lastSequence),
                    J.log(
                      "GroupController.getGroupLastSequence got lastSequence="
                        .concat(
                          r,
                          " from local group profile[lastMessage.lastSequence]. groupID="
                        )
                        .concat(e)
                    ),
                    n
                      .setCode(0)
                      .setNetworkType(this.getNetworkType())
                      .setText(
                        "got lastSequence="
                          .concat(
                            r,
                            " from local group profile[lastMessage.lastSequence]. groupID="
                          )
                          .concat(e)
                      )
                      .setEnd(),
                    Promise.resolve(r)
                  );
                if (o.nextMessageSeq > 1)
                  return (
                    (r = o.nextMessageSeq - 1),
                    J.log(
                      "GroupController.getGroupLastSequence got lastSequence="
                        .concat(
                          r,
                          " from local group profile[nextMessageSeq]. groupID="
                        )
                        .concat(e)
                    ),
                    n
                      .setCode(0)
                      .setNetworkType(this.getNetworkType())
                      .setText(
                        "got lastSequence="
                          .concat(
                            r,
                            " from local group profile[nextMessageSeq]. groupID="
                          )
                          .concat(e)
                      )
                      .setEnd(),
                    Promise.resolve(r)
                  );
              }
              var i = "GROUP".concat(e),
                s = this.tim.conversationController.getLocalConversation(i);
              if (s && s.lastMessage.lastSequence)
                return (
                  (r = s.lastMessage.lastSequence),
                  J.log(
                    "GroupController.getGroupLastSequence got lastSequence="
                      .concat(
                        r,
                        " from local conversation profile[lastMessage.lastSequence]. groupID="
                      )
                      .concat(e)
                  ),
                  n
                    .setCode(0)
                    .setNetworkType(this.getNetworkType())
                    .setText(
                      "got lastSequence="
                        .concat(
                          r,
                          " from local conversation profile[lastMessage.lastSequence]. groupID="
                        )
                        .concat(e)
                    )
                    .setEnd(),
                  Promise.resolve(r)
                );
              var a = {
                groupIDList: [e],
                responseFilter: { groupBaseInfoFilter: ["NextMsgSeq"] },
              };
              return this.getGroupProfileAdvance(a)
                .then(function (o) {
                  var i = o.data.successGroupList;
                  return (
                    Oe(i)
                      ? J.log(
                          "GroupController.getGroupLastSequence successGroupList is empty. groupID=".concat(
                            e
                          )
                        )
                      : ((r = i[0].nextMessageSeq - 1),
                        J.log(
                          "GroupController.getGroupLastSequence got lastSequence="
                            .concat(r, " from getGroupProfileAdvance. groupID=")
                            .concat(e)
                        )),
                    n
                      .setCode(0)
                      .setNetworkType(t.getNetworkType())
                      .setText(
                        "got lastSequence="
                          .concat(r, " from getGroupProfileAdvance. groupID=")
                          .concat(e)
                      )
                      .setEnd(),
                    r
                  );
                })
                .catch(function (r) {
                  return (
                    t.probeNetwork().then(function (t) {
                      var o = v(t, 2),
                        i = o[0],
                        s = o[1];
                      n.setError(r, i, s)
                        .setText(
                          "get lastSequence failed from getGroupProfileAdvance. groupID=".concat(
                            e
                          )
                        )
                        .setEnd();
                    }),
                    J.warn(
                      "GroupController.getGroupLastSequence failed. ".concat(r)
                    ),
                    Hr(r)
                  );
                });
            },
          },
          {
            key: "reset",
            value: function () {
              this.groupMap.clear(),
                this.groupMemberListMap.clear(),
                this.resetReady(),
                this.groupNoticeHandler.reset(),
                this.AVChatRoomHandler.reset(),
                this.tim.innerEmitter.once(xn, this._initGroupList, this);
            },
          },
        ]),
        s
      );
    })(Pr),
    eu = (function (n) {
      c(s, n);
      var o = y(s);
      function s(e) {
        var n;
        r(this, s),
          ((n = o.call(this, e)).REALTIME_MESSAGE_TIMEOUT = 11e4),
          (n.LONGPOLLING_ID_TIMEOUT = 3e5),
          (n._currentState = t.NET_STATE_CONNECTED),
          (n._status = {
            OPENIM: {
              lastResponseReceivedTime: 0,
              jitterCount: 0,
              failedCount: 0,
            },
            AVCHATROOM: {
              lastResponseReceivedTime: 0,
              jitterCount: 0,
              failedCount: 0,
            },
          });
        var i = n.tim.innerEmitter;
        return (
          i.on(Xn, n._onGetLongPollIDFailed, g(n)),
          i.on(Qn, n._onOpenIMResponseOK, g(n)),
          i.on(Jn, n._onOpenIMRequestFailed, g(n)),
          i.on(fr, n._onAVChatroomResponseOK, g(n)),
          i.on(dr, n._onAVChatroomRequestFailed, g(n)),
          n
        );
      }
      return (
        i(s, [
          {
            key: "_onGetLongPollIDFailed",
            value: function () {
              this._currentState !== t.NET_STATE_DISCONNECTED &&
                this._emitNetStateChangeEvent(t.NET_STATE_DISCONNECTED);
            },
          },
          {
            key: "_onOpenIMResponseOK",
            value: function () {
              this._onResponseOK("OPENIM");
            },
          },
          {
            key: "_onOpenIMRequestFailed",
            value: function () {
              this._onRequestFailed("OPENIM");
            },
          },
          {
            key: "_onAVChatroomResponseOK",
            value: function () {
              this.isLoggedIn() || this._onResponseOK("AVCHATROOM");
            },
          },
          {
            key: "_onAVChatroomRequestFailed",
            value: function () {
              this.isLoggedIn() || this._onRequestFailed("AVCHATROOM");
            },
          },
          {
            key: "_onResponseOK",
            value: function (e) {
              var n = this._status[e],
                r = Date.now();
              if (0 !== n.lastResponseReceivedTime) {
                var o = r - n.lastResponseReceivedTime;
                if (
                  (J.debug(
                    "StatusController._onResponseOK key="
                      .concat(e, " currentState=")
                      .concat(this._currentState, " interval=")
                      .concat(o, " failedCount=")
                      .concat(n.failedCount, " jitterCount=")
                      .concat(n.jitterCount)
                  ),
                  n.failedCount > 0 &&
                    ((n.failedCount = 0),
                    (n.jitterCount += 1),
                    this._currentState !== t.NET_STATE_CONNECTED &&
                      this._emitNetStateChangeEvent(t.NET_STATE_CONNECTED)),
                  o <= this.REALTIME_MESSAGE_TIMEOUT)
                ) {
                  if (n.jitterCount >= 3) {
                    var i = new ro();
                    i.setMethod(Xo).setStart(),
                      i
                        .setCode(0)
                        .setText(
                          "".concat(e, "-").concat(o, "-").concat(n.jitterCount)
                        )
                        .setNetworkType(this.getNetworkType())
                        .setEnd(),
                      (n.jitterCount = 0);
                  }
                } else if (
                  o >= this.REALTIME_MESSAGE_TIMEOUT &&
                  o < this.LONGPOLLING_ID_TIMEOUT
                ) {
                  var s = new ro();
                  s.setMethod(Jo).setStart(),
                    s
                      .setCode(0)
                      .setText("".concat(e, "-").concat(o))
                      .setNetworkType(this.getNetworkType())
                      .setEnd(),
                    J.warn(
                      "StatusController._onResponseOK, fast start. key="
                        .concat(e, " interval=")
                        .concat(o, " ms")
                    ),
                    this.emitInnerEvent(Zn);
                } else if (o >= this.LONGPOLLING_ID_TIMEOUT) {
                  var a = new ro();
                  a.setMethod(Qo).setStart(),
                    a
                      .setCode(0)
                      .setText("".concat(e, "-").concat(o))
                      .setNetworkType(this.getNetworkType())
                      .setEnd(),
                    J.warn(
                      "StatusController._onResponseOK, slow start. key="
                        .concat(e, " interval=")
                        .concat(o, " ms")
                    ),
                    this.emitInnerEvent(er);
                }
                n.lastResponseReceivedTime = r;
              } else n.lastResponseReceivedTime = r;
            },
          },
          {
            key: "_onRequestFailed",
            value: function (e) {
              var n = this,
                r = this._status[e];
              Date.now() - r.lastResponseReceivedTime >=
              this.LONGPOLLING_ID_TIMEOUT
                ? this._currentState !== t.NET_STATE_DISCONNECTED &&
                  (J.warn(
                    "StatusController._onRequestFailed, disconnected, longpolling unavailable more than 5min. key="
                      .concat(e, " networkType=")
                      .concat(this.getNetworkType())
                  ),
                  this._emitNetStateChangeEvent(t.NET_STATE_DISCONNECTED))
                : ((r.failedCount += 1),
                  r.failedCount > 5
                    ? this.probeNetwork().then(function (o) {
                        var i = v(o, 2),
                          s = i[0],
                          a = i[1];
                        s
                          ? (n._currentState !== t.NET_STATE_CONNECTING &&
                              n._emitNetStateChangeEvent(
                                t.NET_STATE_CONNECTING
                              ),
                            J.warn(
                              "StatusController._onRequestFailed, connecting, network jitter. key="
                                .concat(e, " networkType=")
                                .concat(a)
                            ))
                          : (n._currentState !== t.NET_STATE_DISCONNECTED &&
                              n._emitNetStateChangeEvent(
                                t.NET_STATE_DISCONNECTED
                              ),
                            J.warn(
                              "StatusController._onRequestFailed, disconnected, longpolling unavailable. key="
                                .concat(e, " networkType=")
                                .concat(a)
                            )),
                          (r.failedCount = 0),
                          (r.jitterCount = 0);
                      })
                    : this._currentState === t.NET_STATE_CONNECTED &&
                      this._emitNetStateChangeEvent(t.NET_STATE_CONNECTING));
            },
          },
          {
            key: "_emitNetStateChangeEvent",
            value: function (t) {
              J.log(
                "StatusController._emitNetStateChangeEvent net state changed from "
                  .concat(this._currentState, " to ")
                  .concat(t)
              ),
                (this._currentState = t),
                this.emitOuterEvent(e.NET_STATE_CHANGE, { state: t });
            },
          },
          {
            key: "reset",
            value: function () {
              J.log("StatusController.reset"),
                (this._currentState = t.NET_STATE_CONNECTED),
                (this._status = {
                  OPENIM: {
                    lastResponseReceivedTime: 0,
                    jitterCount: 0,
                    failedCount: 0,
                  },
                  AVCHATROOM: {
                    lastResponseReceivedTime: 0,
                    jitterCount: 0,
                    failedCount: 0,
                  },
                });
            },
          },
        ]),
        s
      );
    })(Pr);
  function tu() {
    return null;
  }
  var nu = (function () {
      function e(t) {
        r(this, e),
          (this.tim = t),
          (this.isWX = N),
          (this.storageQueue = new Map()),
          (this.checkTimes = 0),
          (this.checkTimer = setInterval(this._onCheckTimer.bind(this), 1e3)),
          this._errorTolerantHandle();
      }
      return (
        i(e, [
          {
            key: "_errorTolerantHandle",
            value: function () {
              !this.isWX &&
                oe(window.localStorage) &&
                ((this.getItem = tu),
                (this.setItem = tu),
                (this.removeItem = tu),
                (this.clear = tu));
            },
          },
          {
            key: "_onCheckTimer",
            value: function () {
              if ((this.checkTimes++, this.checkTimes % 20 == 0)) {
                if (0 === this.storageQueue.size) return;
                this._doFlush();
              }
            },
          },
          {
            key: "_doFlush",
            value: function () {
              try {
                var e,
                  t = M(this.storageQueue);
                try {
                  for (t.s(); !(e = t.n()).done; ) {
                    var n = v(e.value, 2),
                      r = n[0],
                      o = n[1];
                    this.isWX
                      ? wx.setStorageSync(this._getKey(r), o)
                      : localStorage.setItem(
                          this._getKey(r),
                          JSON.stringify(o)
                        );
                  }
                } catch (i) {
                  t.e(i);
                } finally {
                  t.f();
                }
                this.storageQueue.clear();
              } catch (s) {
                J.warn("Storage._doFlush error", s);
              }
            },
          },
          {
            key: "_getPrefix",
            value: function () {
              var e = this.tim.loginInfo,
                t = e.SDKAppID,
                n = e.identifier;
              return "TIM_".concat(t, "_").concat(n, "_");
            },
          },
          {
            key: "getItem",
            value: function (e) {
              var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              try {
                var n = t ? this._getKey(e) : e;
                return this.isWX
                  ? wx.getStorageSync(n)
                  : JSON.parse(localStorage.getItem(n));
              } catch (r) {
                J.warn("Storage.getItem error:", r);
              }
            },
          },
          {
            key: "setItem",
            value: function (e, t) {
              var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                r =
                  !(arguments.length > 3 && void 0 !== arguments[3]) ||
                  arguments[3];
              if (n) {
                var o = r ? this._getKey(e) : e;
                this.isWX
                  ? wx.setStorageSync(o, t)
                  : localStorage.setItem(o, JSON.stringify(t));
              } else this.storageQueue.set(e, t);
            },
          },
          {
            key: "clear",
            value: function () {
              try {
                this.isWX ? wx.clearStorageSync() : localStorage.clear();
              } catch (e) {
                J.warn("Storage.clear error:", e);
              }
            },
          },
          {
            key: "removeItem",
            value: function (e) {
              var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              try {
                var n = t ? this._getKey(e) : e;
                this.isWX
                  ? wx.removeStorageSync(n)
                  : localStorage.removeItem(n);
              } catch (r) {
                J.warn("Storage.removeItem error:", r);
              }
            },
          },
          {
            key: "getSize",
            value: function (e) {
              var t = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "b";
              try {
                var r = { size: 0, limitSize: 5242880, unit: n };
                if (
                  (Object.defineProperty(r, "leftSize", {
                    enumerable: !0,
                    get: function () {
                      return r.limitSize - r.size;
                    },
                  }),
                  this.isWX &&
                    (r.limitSize = 1024 * wx.getStorageInfoSync().limitSize),
                  e)
                )
                  r.size =
                    JSON.stringify(this.getItem(e)).length +
                    this._getKey(e).length;
                else if (this.isWX) {
                  var o = wx.getStorageInfoSync(),
                    i = o.keys;
                  i.forEach(function (e) {
                    r.size +=
                      JSON.stringify(wx.getStorageSync(e)).length +
                      t._getKey(e).length;
                  });
                } else
                  for (var s in localStorage)
                    localStorage.hasOwnProperty(s) &&
                      (r.size += localStorage.getItem(s).length + s.length);
                return this._convertUnit(r);
              } catch (a) {
                J.warn("Storage.getSize error:", a);
              }
            },
          },
          {
            key: "_convertUnit",
            value: function (e) {
              var t = {},
                n = e.unit;
              for (var r in ((t.unit = n), e))
                "number" == typeof e[r] &&
                  ("kb" === n.toLowerCase()
                    ? (t[r] = Math.round(e[r] / 1024))
                    : "mb" === n.toLowerCase()
                    ? (t[r] = Math.round(e[r] / 1024 / 1024))
                    : (t[r] = e[r]));
              return t;
            },
          },
          {
            key: "_getKey",
            value: function (e) {
              return "".concat(this._getPrefix()).concat(e);
            },
          },
          {
            key: "reset",
            value: function () {
              this._doFlush(), (this.checkTimes = 0);
            },
          },
        ]),
        e
      );
    })(),
    ru = T(function (e) {
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function o(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function i(e, t, r, i, s) {
        if ("function" != typeof r)
          throw new TypeError("The listener must be a function");
        var a = new o(r, i || e, s),
          u = n ? n + t : t;
        return (
          e._events[u]
            ? e._events[u].fn
              ? (e._events[u] = [e._events[u], a])
              : e._events[u].push(a)
            : ((e._events[u] = a), e._eventsCount++),
          e
        );
      }
      function s(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function a() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (a.prototype.eventNames = function () {
          var e,
            r,
            o = [];
          if (0 === this._eventsCount) return o;
          for (r in (e = this._events))
            t.call(e, r) && o.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(e))
            : o;
        }),
        (a.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, s = new Array(i); o < i; o++)
            s[o] = r[o].fn;
          return s;
        }),
        (a.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (a.prototype.emit = function (e, t, r, o, i, s) {
          var a = n ? n + e : e;
          if (!this._events[a]) return !1;
          var u,
            c,
            l = this._events[a],
            p = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), p)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, r), !0;
              case 4:
                return l.fn.call(l.context, t, r, o), !0;
              case 5:
                return l.fn.call(l.context, t, r, o, i), !0;
              case 6:
                return l.fn.call(l.context, t, r, o, i, s), !0;
            }
            for (c = 1, u = new Array(p - 1); c < p; c++)
              u[c - 1] = arguments[c];
            l.fn.apply(l.context, u);
          } else {
            var h,
              d = l.length;
            for (c = 0; c < d; c++)
              switch (
                (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), p)
              ) {
                case 1:
                  l[c].fn.call(l[c].context);
                  break;
                case 2:
                  l[c].fn.call(l[c].context, t);
                  break;
                case 3:
                  l[c].fn.call(l[c].context, t, r);
                  break;
                case 4:
                  l[c].fn.call(l[c].context, t, r, o);
                  break;
                default:
                  if (!u)
                    for (h = 1, u = new Array(p - 1); h < p; h++)
                      u[h - 1] = arguments[h];
                  l[c].fn.apply(l[c].context, u);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (e, t, n) {
          return i(this, e, t, n, !1);
        }),
        (a.prototype.once = function (e, t, n) {
          return i(this, e, t, n, !0);
        }),
        (a.prototype.removeListener = function (e, t, r, o) {
          var i = n ? n + e : e;
          if (!this._events[i]) return this;
          if (!t) return s(this, i), this;
          var a = this._events[i];
          if (a.fn)
            a.fn !== t ||
              (o && !a.once) ||
              (r && a.context !== r) ||
              s(this, i);
          else {
            for (var u = 0, c = [], l = a.length; u < l; u++)
              (a[u].fn !== t ||
                (o && !a[u].once) ||
                (r && a[u].context !== r)) &&
                c.push(a[u]);
            c.length
              ? (this._events[i] = 1 === c.length ? c[0] : c)
              : s(this, i);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && s(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = n),
        (a.EventEmitter = a),
        (e.exports = a);
    }),
    ou = function (e) {
      var t, n, r, o, i;
      return (
        Oe(e.context)
          ? ((t = ""), (n = 0), (r = 0), (o = 0), (i = 1))
          : ((t = e.context.a2Key),
            (n = e.context.tinyID),
            (r = e.context.SDKAppID),
            (o = e.context.contentType),
            (i = e.context.apn)),
        {
          platform: wn,
          websdkappid: Nn,
          v: On,
          a2: t,
          tinyid: n,
          sdkappid: r,
          contentType: o,
          apn: i,
          reqtime: function () {
            return +new Date();
          },
        }
      );
    },
    iu = (function () {
      function e(t) {
        r(this, e),
          (this.tim = t),
          this.tim.innerEmitter.on(Un, this._update, this),
          this.tim.innerEmitter.on(qn, this._update, this),
          this.tim.innerEmitter.on(Fn, this._updateSpecifiedConfig, this),
          this._initConfig();
      }
      return (
        i(e, [
          {
            key: "_update",
            value: function (e) {
              this._initConfig();
            },
          },
          {
            key: "_updateSpecifiedConfig",
            value: function (e) {
              var t = this;
              e.data.forEach(function (e) {
                t._set(e);
              });
            },
          },
          {
            key: "get",
            value: function (e) {
              var t = e.name,
                r = e.action,
                o = e.param,
                i = e.tjgID;
              if (oe(this.config[t]) || oe(this.config[t][r]))
                throw new ht({
                  code: dt.NETWORK_PACKAGE_UNDEFINED,
                  message: "".concat(hn, ": PackageConfig.").concat(t),
                });
              var s = (function e(t) {
                if (0 === Object.getOwnPropertyNames(t).length)
                  return Object.create(null);
                var r = Array.isArray(t) ? [] : Object.create(null),
                  o = "";
                for (var i in t)
                  null !== t[i]
                    ? void 0 !== t[i]
                      ? ((o = n(t[i])),
                        ["string", "number", "function", "boolean"].indexOf(
                          o
                        ) >= 0
                          ? (r[i] = t[i])
                          : (r[i] = e(t[i])))
                      : (r[i] = void 0)
                    : (r[i] = null);
                return r;
              })(this.config[t][r]);
              return (
                (s.requestData = this._initRequestData(o, s)),
                (s.encode = this._initEncoder(s)),
                (s.decode = this._initDecoder(s)),
                i && (s.queryString.tjg_id = i),
                s
              );
            },
          },
          {
            key: "_set",
            value: function (e) {
              var t = e.key,
                r = e.value;
              if (!1 != !!t) {
                var o = t.split(".");
                if (!(o.length <= 0)) {
                  !(function e(t, r, o, i) {
                    var s = r[o];
                    "object" === n(t[s]) ? e(t[s], r, o + 1, i) : (t[s] = i);
                  })(this.config, o, 0, r);
                }
              }
            },
          },
          {
            key: "_initConfig",
            value: function () {
              var e;
              (this.config = {}),
                (this.config.accessLayer =
                  ((e = this.tim),
                  {
                    create: null,
                    query: {
                      serverName: Gn.NAME.WEB_IM,
                      cmd: Gn.CMD.ACCESS_LAYER,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: {
                        platform: wn,
                        identifier: e.context.identifier,
                        usersig: e.context.userSig,
                        contentType: e.context.contentType,
                        apn: null !== e.context ? e.context.apn : 1,
                        websdkappid: Nn,
                        v: On,
                      },
                      requestData: {},
                    },
                    update: null,
                    delete: null,
                  })),
                (this.config.login = (function (e) {
                  return {
                    create: null,
                    query: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.LOGIN,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: {
                        websdkappid: Nn,
                        v: On,
                        platform: wn,
                        identifier: e.loginInfo.identifier,
                        usersig: e.loginInfo.userSig,
                        sdkappid: e.loginInfo.SDKAppID,
                        accounttype: e.loginInfo.accountType,
                        contentType:
                          null !== e.context ? e.context.contentType : 0,
                        apn: null !== e.context ? e.context.apn : 1,
                        reqtime: +new Date() / 1e3,
                      },
                      requestData: { state: "Online" },
                      keyMaps: {
                        request: { tinyID: "tinyId" },
                        response: { TinyId: "tinyID" },
                      },
                    },
                    update: null,
                    delete: null,
                  };
                })(this.tim)),
                (this.config.logout = (function (e) {
                  return {
                    create: null,
                    query: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.LOGOUT_ALL,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: {
                        websdkappid: Nn,
                        v: On,
                        platform: wn,
                        a2: null !== e.context ? e.context.a2Key : "",
                        tinyid: null !== e.context ? e.context.tinyID : "",
                        sdkappid:
                          null !== e.loginInfo ? e.loginInfo.SDKAppID : 0,
                        contentType:
                          null !== e.context ? e.context.contentType : 0,
                        apn: null !== e.context ? e.context.apn : "",
                        reqtime: +new Date() / 1e3,
                      },
                      requestData: {},
                    },
                    update: null,
                    delete: null,
                  };
                })(this.tim)),
                (this.config.longPollLogout = (function (e) {
                  return {
                    create: null,
                    query: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.LOGOUT_LONG_POLL,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: {
                        websdkappid: Nn,
                        v: On,
                        platform: wn,
                        a2: null !== e.context ? e.context.a2Key : "",
                        tinyid: null !== e.context ? e.context.tinyID : 0,
                        sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                        contentType:
                          null !== e.context ? e.context.contentType : 0,
                        apn: null !== e.context ? e.context.apn : 1,
                        reqtime: function () {
                          return Date.now();
                        },
                      },
                      requestData: { longPollID: "" },
                      keyMaps: { request: { longPollID: "LongPollingId" } },
                    },
                    update: null,
                    delete: null,
                  };
                })(this.tim)),
                (this.config.profile = (function (e) {
                  var t = ou(e),
                    n = Gn.NAME.PROFILE,
                    r = Gn.CHANNEL.XHR,
                    o = Pn;
                  return {
                    query: {
                      serverName: n,
                      cmd: Gn.CMD.PORTRAIT_GET,
                      channel: r,
                      protocol: o,
                      method: "POST",
                      queryString: t,
                      requestData: { fromAccount: "", userItem: [] },
                      keyMaps: {
                        request: {
                          toAccount: "To_Account",
                          standardSequence: "StandardSequence",
                          customSequence: "CustomSequence",
                        },
                      },
                    },
                    update: {
                      serverName: n,
                      cmd: Gn.CMD.PORTRAIT_SET,
                      channel: r,
                      protocol: o,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        fromAccount: "",
                        profileItem: [
                          { tag: et.NICK, value: "" },
                          { tag: et.GENDER, value: "" },
                          { tag: et.ALLOWTYPE, value: "" },
                          { tag: et.AVATAR, value: "" },
                        ],
                      },
                    },
                  };
                })(this.tim)),
                (this.config.group = (function (e) {
                  var n = {
                      websdkappid: Nn,
                      v: On,
                      platform: wn,
                      a2:
                        null !== e.context && e.context.a2Key
                          ? e.context.a2Key
                          : void 0,
                      tinyid:
                        null !== e.context && e.context.tinyID
                          ? e.context.tinyID
                          : void 0,
                      sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                      contentType:
                        null !== e.context ? e.context.contentType : 0,
                      accounttype:
                        null !== e.context ? e.context.accountType : 0,
                    },
                    r = {
                      request: {
                        ownerID: "Owner_Account",
                        userID: "Member_Account",
                        newOwnerID: "NewOwner_Account",
                        maxMemberNum: "MaxMemberCount",
                        groupCustomField: "AppDefinedData",
                        memberCustomField: "AppMemberDefinedData",
                        groupCustomFieldFilter: "AppDefinedDataFilter_Group",
                        memberCustomFieldFilter:
                          "AppDefinedDataFilter_GroupMember",
                        messageRemindType: "MsgFlag",
                        userIDList: "MemberList",
                        groupIDList: "GroupIdList",
                        applyMessage: "ApplyMsg",
                        muteTime: "ShutUpTime",
                        muteAllMembers: "ShutUpAllMember",
                        joinOption: "ApplyJoinOption",
                      },
                      response: {
                        GroupIdList: "groups",
                        MsgFlag: "messageRemindType",
                        AppDefinedData: "groupCustomField",
                        AppMemberDefinedData: "memberCustomField",
                        AppDefinedDataFilter_Group: "groupCustomFieldFilter",
                        AppDefinedDataFilter_GroupMember:
                          "memberCustomFieldFilter",
                        InfoSeq: "infoSequence",
                        MemberList: "members",
                        GroupInfo: "groups",
                        ShutUpUntil: "muteUntil",
                        ShutUpAllMember: "muteAllMembers",
                        ApplyJoinOption: "joinOption",
                      },
                    };
                  return {
                    create: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.CREATE_GROUP,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: {
                        type: t.GRP_WORK,
                        name: void 0,
                        groupID: void 0,
                        ownerID: e.loginInfo.identifier,
                        introduction: void 0,
                        notification: void 0,
                        avatar: void 0,
                        maxMemberNum: void 0,
                        joinOption: void 0,
                        memberList: void 0,
                        groupCustomField: void 0,
                      },
                      keyMaps: r,
                    },
                    list: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.GET_JOINED_GROUPS,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: {
                        userID: e.loginInfo.identifier,
                        limit: void 0,
                        offset: void 0,
                        groupType: void 0,
                        responseFilter: void 0,
                      },
                      keyMaps: r,
                    },
                    query: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.GET_GROUP_INFO,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: {
                        groupIDList: void 0,
                        responseFilter: void 0,
                      },
                      keyMaps: r,
                    },
                    getGroupMemberProfile: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.GET_GROUP_MEMBER_INFO,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: {
                        groupID: void 0,
                        userIDList: void 0,
                        memberInfoFilter: void 0,
                        memberCustomFieldFilter: void 0,
                      },
                      keyMaps: {
                        request: u(
                          u({}, r.request),
                          {},
                          { userIDList: "Member_List_Account" }
                        ),
                        response: r.response,
                      },
                    },
                    getGroupMemberList: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.GET_GROUP_MEMBER_LIST,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: {
                        groupID: void 0,
                        limit: 0,
                        offset: 0,
                        memberRoleFilter: void 0,
                        memberInfoFilter: void 0,
                      },
                      keyMaps: r,
                    },
                    quitGroup: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.QUIT_GROUP,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: { groupID: void 0 },
                    },
                    changeGroupOwner: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.CHANGE_GROUP_OWNER,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: { groupID: void 0, newOwnerID: void 0 },
                      keyMaps: r,
                    },
                    destroyGroup: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.DESTROY_GROUP,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: { groupID: void 0 },
                    },
                    updateGroupProfile: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.MODIFY_GROUP_INFO,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: {
                        groupID: void 0,
                        name: void 0,
                        introduction: void 0,
                        notification: void 0,
                        avatar: void 0,
                        maxMemberNum: void 0,
                        joinOption: void 0,
                        groupCustomField: void 0,
                        muteAllMembers: void 0,
                      },
                      keyMaps: {
                        request: u(
                          u({}, r.request),
                          {},
                          { groupCustomField: "AppDefinedData" }
                        ),
                        response: r.response,
                      },
                    },
                    modifyGroupMemberInfo: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.MODIFY_GROUP_MEMBER_INFO,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: {
                        groupID: void 0,
                        userID: void 0,
                        messageRemindType: void 0,
                        nameCard: void 0,
                        role: void 0,
                        memberCustomField: void 0,
                        muteTime: void 0,
                      },
                      keyMaps: r,
                    },
                    addGroupMember: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.ADD_GROUP_MEMBER,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: {
                        groupID: void 0,
                        silence: void 0,
                        userIDList: void 0,
                      },
                      keyMaps: r,
                    },
                    deleteGroupMember: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.DELETE_GROUP_MEMBER,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: {
                        groupID: void 0,
                        userIDList: void 0,
                        reason: void 0,
                      },
                      keyMaps: {
                        request: { userIDList: "MemberToDel_Account" },
                      },
                    },
                    searchGroupByID: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.SEARCH_GROUP_BY_ID,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: {
                        groupIDList: void 0,
                        responseFilter: {
                          groupBasePublicInfoFilter: [
                            "Type",
                            "Name",
                            "Introduction",
                            "Notification",
                            "FaceUrl",
                            "CreateTime",
                            "Owner_Account",
                            "LastInfoTime",
                            "LastMsgTime",
                            "NextMsgSeq",
                            "MemberNum",
                            "MaxMemberNum",
                            "ApplyJoinOption",
                          ],
                        },
                      },
                      keyMaps: { request: { groupIDList: "GroupIdList" } },
                    },
                    applyJoinGroup: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.APPLY_JOIN_GROUP,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: {
                        groupID: void 0,
                        applyMessage: void 0,
                        userDefinedField: void 0,
                      },
                      keyMaps: r,
                    },
                    applyJoinAVChatRoom: {
                      serverName: Gn.NAME.BIG_GROUP_NO_AUTH,
                      cmd: Gn.CMD.APPLY_JOIN_GROUP,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: {
                        websdkappid: Nn,
                        v: On,
                        platform: wn,
                        sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                        contentType:
                          null !== e.context ? e.context.contentType : 0,
                        accounttype:
                          null !== e.context ? e.context.accountType : 0,
                      },
                      requestData: {
                        groupID: void 0,
                        applyMessage: void 0,
                        userDefinedField: void 0,
                      },
                      keyMaps: r,
                    },
                    handleApplyJoinGroup: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.HANDLE_APPLY_JOIN_GROUP,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: {
                        groupID: void 0,
                        applicant: void 0,
                        handleAction: void 0,
                        handleMessage: void 0,
                        authentication: void 0,
                        messageKey: void 0,
                        userDefinedField: void 0,
                      },
                      keyMaps: {
                        request: {
                          applicant: "Applicant_Account",
                          handleAction: "HandleMsg",
                          handleMessage: "ApprovalMsg",
                          messageKey: "MsgKey",
                        },
                        response: { MsgKey: "messageKey" },
                      },
                    },
                    deleteGroupSystemNotice: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.DELETE_GROUP_SYSTEM_MESSAGE,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: { messageListToDelete: void 0 },
                      keyMaps: {
                        request: {
                          messageListToDelete: "DelMsgList",
                          messageSeq: "MsgSeq",
                          messageRandom: "MsgRandom",
                        },
                      },
                    },
                    getGroupPendency: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.GET_GROUP_PENDENCY,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: n,
                      requestData: {
                        startTime: void 0,
                        limit: void 0,
                        handleAccount: void 0,
                      },
                      keyMaps: { request: { handleAccount: "Handle_Account" } },
                    },
                  };
                })(this.tim)),
                (this.config.longPollID = (function (e) {
                  return {
                    create: {},
                    query: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.GET_LONG_POLL_ID,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      queryString: {
                        websdkappid: Nn,
                        v: On,
                        platform: wn,
                        a2: null !== e.context ? e.context.a2Key : "",
                        tinyid: null !== e.context ? e.context.tinyID : 0,
                        sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                        contentType:
                          null !== e.context ? e.context.contentType : 0,
                        apn: null !== e.context ? e.context.apn : 1,
                        reqtime: +new Date() / 1e3,
                      },
                      requestData: {},
                      keyMaps: { response: { LongPollingId: "longPollingID" } },
                    },
                    update: {},
                    delete: {},
                  };
                })(this.tim)),
                (this.config.longPoll = (function (e) {
                  var t = {
                    websdkappid: Nn,
                    v: On,
                    platform: wn,
                    a2: null !== e.context ? e.context.a2Key : "",
                    tinyid: null !== e.context ? e.context.tinyID : 0,
                    sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                    contentType: null !== e.context ? e.context.contentType : 0,
                    accounttype:
                      null !== e.context ? e.loginInfo.accountType : 0,
                    apn: null !== e.context ? e.context.apn : 1,
                    reqtime: Math.ceil(+new Date() / 1e3),
                  };
                  return {
                    create: {},
                    query: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.LONG_POLL,
                      channel: Gn.CHANNEL.AUTO,
                      protocol: Pn,
                      queryString: t,
                      requestData: {
                        timeout: null,
                        cookie: {
                          notifySeq: 0,
                          noticeSeq: 0,
                          longPollingID: 0,
                        },
                      },
                      keyMaps: {
                        response: {
                          C2cMsgArray: "C2CMessageArray",
                          GroupMsgArray: "groupMessageArray",
                          GroupTips: "groupTips",
                          C2cNotifyMsgArray: "C2CNotifyMessageArray",
                          ClientSeq: "clientSequence",
                          MsgPriority: "priority",
                          NoticeSeq: "noticeSequence",
                          MsgContent: "content",
                          MsgType: "type",
                          MsgBody: "elements",
                          ToGroupId: "to",
                          Desc: "description",
                          Ext: "extension",
                        },
                      },
                    },
                    update: {},
                    delete: {},
                  };
                })(this.tim)),
                (this.config.applyC2C = (function (e) {
                  var t = ou(e),
                    n = Gn.NAME.FRIEND,
                    r = Gn.CHANNEL.XHR,
                    o = Pn;
                  return {
                    create: {
                      serverName: n,
                      cmd: Gn.CMD.FRIEND_ADD,
                      channel: r,
                      protocol: o,
                      queryString: t,
                      requestData: { fromAccount: "", addFriendItem: [] },
                    },
                    get: {
                      serverName: n,
                      cmd: Gn.CMD.GET_PENDENCY,
                      channel: r,
                      protocol: o,
                      queryString: t,
                      requestData: {
                        fromAccount: "",
                        pendencyType: "Pendency_Type_ComeIn",
                      },
                    },
                    update: {
                      serverName: n,
                      cmd: Gn.CMD.RESPONSE_PENDENCY,
                      channel: r,
                      protocol: o,
                      queryString: t,
                      requestData: { fromAccount: "", responseFriendItem: [] },
                    },
                    delete: {
                      serverName: n,
                      cmd: Gn.CMD.DELETE_PENDENCY,
                      channel: r,
                      protocol: o,
                      queryString: t,
                      requestData: {
                        fromAccount: "",
                        toAccount: [],
                        pendencyType: "Pendency_Type_ComeIn",
                      },
                    },
                  };
                })(this.tim)),
                (this.config.friend = (function (e) {
                  var t = ou(e),
                    n = Gn.NAME.FRIEND,
                    r = Gn.CHANNEL.XHR,
                    o = Pn;
                  return {
                    get: {
                      serverName: n,
                      cmd: Gn.CMD.FRIEND_GET_ALL,
                      channel: r,
                      protocol: o,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        fromAccount: "",
                        timeStamp: 0,
                        tagList: [et.NICK, "Tag_SNS_IM_Remark", et.AVATAR],
                      },
                      keyMaps: { request: {}, response: {} },
                    },
                    delete: {
                      serverName: n,
                      cmd: Gn.CMD.FRIEND_DELETE,
                      channel: r,
                      protocol: o,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        fromAccount: "",
                        toAccount: [],
                        deleteType: "Delete_Type_Single",
                      },
                    },
                  };
                })(this.tim)),
                (this.config.blacklist = (function (e) {
                  var t = ou(e);
                  return {
                    create: {
                      serverName: Gn.NAME.FRIEND,
                      cmd: Gn.CMD.ADD_BLACKLIST,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: { fromAccount: "", toAccount: [] },
                    },
                    get: {
                      serverName: Gn.NAME.FRIEND,
                      cmd: Gn.CMD.GET_BLACKLIST,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        fromAccount: "",
                        startIndex: 0,
                        maxLimited: 30,
                        lastSequence: 0,
                      },
                    },
                    delete: {
                      serverName: Gn.NAME.FRIEND,
                      cmd: Gn.CMD.DELETE_BLACKLIST,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: { fromAccount: "", toAccount: [] },
                    },
                    update: {},
                  };
                })(this.tim)),
                (this.config.c2cMessage = (function (e) {
                  var t = {
                      platform: wn,
                      websdkappid: Nn,
                      v: On,
                      a2: null !== e.context ? e.context.a2Key : "",
                      tinyid: null !== e.context ? e.context.tinyID : 0,
                      sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                      contentType:
                        null !== e.context ? e.context.contentType : 0,
                      apn: null !== e.context ? e.context.apn : 1,
                      reqtime: function () {
                        return +new Date();
                      },
                    },
                    n = {
                      request: {
                        fromAccount: "From_Account",
                        toAccount: "To_Account",
                        msgTimeStamp: "MsgTimeStamp",
                        msgSeq: "MsgSeq",
                        msgRandom: "MsgRandom",
                        msgBody: "MsgBody",
                        count: "MaxCnt",
                        lastMessageTime: "LastMsgTime",
                        messageKey: "MsgKey",
                        peerAccount: "Peer_Account",
                        data: "Data",
                        description: "Desc",
                        extension: "Ext",
                        type: "MsgType",
                        content: "MsgContent",
                        sizeType: "Type",
                        uuid: "UUID",
                        imageUrl: "URL",
                        fileUrl: "Url",
                        remoteAudioUrl: "Url",
                        remoteVideoUrl: "VideoUrl",
                        thumbUUID: "ThumbUUID",
                        videoUUID: "VideoUUID",
                        videoUrl: "",
                        downloadFlag: "Download_Flag",
                      },
                      response: {
                        MsgContent: "content",
                        MsgTime: "time",
                        Data: "data",
                        Desc: "description",
                        Ext: "extension",
                        MsgKey: "messageKey",
                        MsgType: "type",
                        MsgBody: "elements",
                        Download_Flag: "downloadFlag",
                        ThumbUUID: "thumbUUID",
                        VideoUUID: "videoUUID",
                      },
                    };
                  return {
                    create: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.SEND_MESSAGE,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        fromAccount: e.loginInfo.identifier,
                        toAccount: "",
                        msgTimeStamp: Math.ceil(+new Date() / 1e3),
                        msgSeq: 0,
                        msgRandom: 0,
                        msgBody: [],
                        msgLifeTime: void 0,
                        offlinePushInfo: {
                          pushFlag: 0,
                          title: "",
                          desc: "",
                          ext: "",
                          apnsInfo: { badgeMode: 0 },
                          androidInfo: { OPPOChannelID: "" },
                        },
                      },
                      keyMaps: n,
                    },
                    query: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.GET_C2C_ROAM_MESSAGES,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        peerAccount: "",
                        count: 15,
                        lastMessageTime: 0,
                        messageKey: "",
                        withRecalledMsg: 1,
                      },
                      keyMaps: n,
                    },
                  };
                })(this.tim)),
                (this.config.c2cMessageWillBeRevoked = (function (e) {
                  var t = {
                    platform: wn,
                    websdkappid: Nn,
                    v: On,
                    a2: null !== e.context ? e.context.a2Key : "",
                    tinyid: null !== e.context ? e.context.tinyID : 0,
                    sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                    contentType: null !== e.context ? e.context.contentType : 0,
                    apn: null !== e.context ? e.context.apn : 1,
                    reqtime: function () {
                      return +new Date();
                    },
                  };
                  return {
                    create: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.REVOKE_C2C_MESSAGE,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        msgInfo: {
                          fromAccount: "",
                          toAccount: "",
                          msgTimeStamp: Math.ceil(+new Date() / 1e3),
                          msgSeq: 0,
                          msgRandom: 0,
                        },
                      },
                      keyMaps: {
                        request: {
                          msgInfo: "MsgInfo",
                          fromAccount: "From_Account",
                          toAccount: "To_Account",
                          msgTimeStamp: "MsgTimeStamp",
                          msgSeq: "MsgSeq",
                          msgRandom: "MsgRandom",
                          msgBody: "MsgBody",
                        },
                      },
                    },
                  };
                })(this.tim)),
                (this.config.c2cPeerReadTime = (function (e) {
                  var t = {
                    platform: wn,
                    websdkappid: Nn,
                    v: On,
                    a2: null !== e.context ? e.context.a2Key : "",
                    tinyid: null !== e.context ? e.context.tinyID : 0,
                    sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                    contentType: null !== e.context ? e.context.contentType : 0,
                    apn: null !== e.context ? e.context.apn : 1,
                    reqtime: function () {
                      return +new Date();
                    },
                  };
                  return {
                    get: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.GET_PEER_READ_TIME,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: { userIDList: void 0 },
                      keyMaps: {
                        request: { userIDList: "To_Account" },
                        response: { ReadTime: "peerReadTimeList" },
                      },
                    },
                  };
                })(this.tim)),
                (this.config.groupMessage = (function (e) {
                  var t = {
                      platform: wn,
                      websdkappid: Nn,
                      v: On,
                      a2: null !== e.context ? e.context.a2Key : "",
                      tinyid: null !== e.context ? e.context.tinyID : 0,
                      sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                      contentType:
                        null !== e.context ? e.context.contentType : 0,
                      apn: null !== e.context ? e.context.apn : 1,
                      reqtime: function () {
                        return +new Date();
                      },
                    },
                    n = {
                      request: {
                        to: "GroupId",
                        extension: "Ext",
                        data: "Data",
                        description: "Desc",
                        random: "Random",
                        sequence: "ReqMsgSeq",
                        count: "ReqMsgNumber",
                        type: "MsgType",
                        priority: "MsgPriority",
                        content: "MsgContent",
                        elements: "MsgBody",
                        sizeType: "Type",
                        uuid: "UUID",
                        imageUrl: "URL",
                        fileUrl: "Url",
                        remoteAudioUrl: "Url",
                        remoteVideoUrl: "VideoUrl",
                        thumbUUID: "ThumbUUID",
                        videoUUID: "VideoUUID",
                        videoUrl: "",
                        downloadFlag: "Download_Flag",
                        clientSequence: "ClientSeq",
                      },
                      response: {
                        Random: "random",
                        MsgTime: "time",
                        MsgSeq: "sequence",
                        ReqMsgSeq: "sequence",
                        RspMsgList: "messageList",
                        IsPlaceMsg: "isPlaceMessage",
                        IsSystemMsg: "isSystemMessage",
                        ToGroupId: "to",
                        EnumFrom_AccountType: "fromAccountType",
                        EnumTo_AccountType: "toAccountType",
                        GroupCode: "groupCode",
                        MsgPriority: "priority",
                        MsgBody: "elements",
                        MsgType: "type",
                        MsgContent: "content",
                        IsFinished: "complete",
                        Download_Flag: "downloadFlag",
                        ClientSeq: "clientSequence",
                        ThumbUUID: "thumbUUID",
                        VideoUUID: "videoUUID",
                      },
                    };
                  return {
                    create: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.SEND_GROUP_MESSAGE,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        groupID: "",
                        fromAccount: e.loginInfo.identifier,
                        random: 0,
                        clientSequence: 0,
                        priority: "",
                        msgBody: [],
                        onlineOnlyFlag: 0,
                        offlinePushInfo: {
                          pushFlag: 0,
                          title: "",
                          desc: "",
                          ext: "",
                          apnsInfo: { badgeMode: 0 },
                          androidInfo: { OPPOChannelID: "" },
                        },
                      },
                      keyMaps: n,
                    },
                    query: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.GET_GROUP_ROAM_MESSAGES,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        withRecalledMsg: 1,
                        groupID: "",
                        count: 15,
                        sequence: "",
                      },
                      keyMaps: n,
                    },
                    update: null,
                    delete: null,
                  };
                })(this.tim)),
                (this.config.groupMessageWillBeRevoked = (function (e) {
                  var t = {
                    platform: wn,
                    websdkappid: Nn,
                    v: On,
                    a2: null !== e.context ? e.context.a2Key : "",
                    tinyid: null !== e.context ? e.context.tinyID : 0,
                    sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                    contentType: null !== e.context ? e.context.contentType : 0,
                    apn: null !== e.context ? e.context.apn : 1,
                    reqtime: function () {
                      return +new Date();
                    },
                  };
                  return {
                    create: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.REVOKE_GROUP_MESSAGE,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: { to: "", msgSeqList: [] },
                      keyMaps: {
                        request: {
                          to: "GroupId",
                          msgSeqList: "MsgSeqList",
                          msgSeq: "MsgSeq",
                        },
                      },
                    },
                  };
                })(this.tim)),
                (this.config.conversation = (function (e) {
                  var t = {
                    platform: wn,
                    websdkappid: Nn,
                    v: On,
                    a2: null !== e.context ? e.context.a2Key : "",
                    tinyid: null !== e.context ? e.context.tinyID : 0,
                    sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                    contentType: null !== e.context ? e.context.contentType : 0,
                    apn: null !== e.context ? e.context.apn : 1,
                  };
                  return {
                    query: {
                      serverName: Gn.NAME.RECENT_CONTACT,
                      cmd: Gn.CMD.GET_CONVERSATION_LIST,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        fromAccount: e.loginInfo.identifier,
                        count: 0,
                      },
                      keyMaps: {
                        request: {},
                        response: {
                          SessionItem: "conversations",
                          ToAccount: "groupID",
                          To_Account: "userID",
                          UnreadMsgCount: "unreadCount",
                          MsgGroupReadedSeq: "messageReadSeq",
                        },
                      },
                    },
                    pagingQuery: {
                      serverName: Gn.NAME.RECENT_CONTACT,
                      cmd: Gn.CMD.PAGING_GET_CONVERSATION_LIST,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        fromAccount: void 0,
                        timeStamp: void 0,
                        orderType: void 0,
                      },
                      keyMaps: {
                        request: {},
                        response: {
                          SessionItem: "conversations",
                          ToAccount: "groupID",
                          To_Account: "userID",
                          UnreadMsgCount: "unreadCount",
                          MsgGroupReadedSeq: "messageReadSeq",
                          C2cPeerReadTime: "c2cPeerReadTime",
                        },
                      },
                    },
                    delete: {
                      serverName: Gn.NAME.RECENT_CONTACT,
                      cmd: Gn.CMD.DELETE_CONVERSATION,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        fromAccount: e.loginInfo.identifier,
                        toAccount: void 0,
                        type: 1,
                        toGroupID: void 0,
                      },
                      keyMaps: { request: { toGroupID: "ToGroupid" } },
                    },
                    setC2CMessageRead: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.SET_C2C_MESSAGE_READ,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: { C2CMsgReaded: void 0 },
                      keyMaps: {
                        request: { lastMessageTime: "LastedMsgTime" },
                      },
                    },
                    setGroupMessageRead: {
                      serverName: Gn.NAME.GROUP,
                      cmd: Gn.CMD.SET_GROUP_MESSAGE_READ,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: { groupID: void 0, messageReadSeq: void 0 },
                      keyMaps: { request: { messageReadSeq: "MsgReadedSeq" } },
                    },
                  };
                })(this.tim)),
                (this.config.syncMessage = (function (e) {
                  var t = {
                    platform: wn,
                    websdkappid: Nn,
                    v: On,
                    a2: null !== e.context ? e.context.a2Key : "",
                    tinyid: null !== e.context ? e.context.tinyID : 0,
                    sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                    contentType: null !== e.context ? e.context.contentType : 0,
                    apn: null !== e.context ? e.context.apn : 1,
                    reqtime: function () {
                      return [Math.ceil(+new Date()), Math.random()].join("");
                    },
                  };
                  return {
                    create: null,
                    query: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.GET_MESSAGES,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: { cookie: "", syncFlag: 0, needAbstract: 1 },
                      keyMaps: {
                        request: {
                          fromAccount: "From_Account",
                          toAccount: "To_Account",
                          from: "From_Account",
                          to: "To_Account",
                          time: "MsgTimeStamp",
                          sequence: "MsgSeq",
                          random: "MsgRandom",
                          elements: "MsgBody",
                        },
                        response: {
                          MsgList: "messageList",
                          SyncFlag: "syncFlag",
                          To_Account: "to",
                          From_Account: "from",
                          ClientSeq: "clientSequence",
                          MsgSeq: "sequence",
                          NoticeSeq: "noticeSequence",
                          NotifySeq: "notifySequence",
                          MsgRandom: "random",
                          MsgTimeStamp: "time",
                          MsgContent: "content",
                          ToGroupId: "groupID",
                          MsgKey: "messageKey",
                          GroupTips: "groupTips",
                          MsgBody: "elements",
                          MsgType: "type",
                          C2CRemainingUnreadCount: "C2CRemainingUnreadList",
                        },
                      },
                    },
                    update: null,
                    delete: null,
                  };
                })(this.tim)),
                (this.config.AVChatRoom = (function (e) {
                  return {
                    startLongPoll: {
                      serverName: Gn.NAME.BIG_GROUP_LONG_POLLING_NO_AUTH,
                      cmd: Gn.CMD.AVCHATROOM_LONG_POLL,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: {
                        websdkappid: Nn,
                        v: On,
                        platform: wn,
                        sdkappid: e.loginInfo.SDKAppID,
                        accounttype: "792",
                        apn: null !== e.context ? e.context.apn : 1,
                        reqtime: function () {
                          return +new Date();
                        },
                      },
                      requestData: {
                        USP: 1,
                        startSeq: 1,
                        holdTime: 90,
                        key: void 0,
                      },
                      keyMaps: {
                        request: { USP: "USP" },
                        response: {
                          ToGroupId: "groupID",
                          MsgPriority: "priority",
                        },
                      },
                    },
                  };
                })(this.tim)),
                (this.config.cosUpload = (function (e) {
                  var t = {
                    platform: wn,
                    websdkappid: Nn,
                    v: On,
                    a2: null !== e.context ? e.context.a2Key : "",
                    tinyid: null !== e.context ? e.context.tinyID : 0,
                    sdkappid: null !== e.context ? e.context.SDKAppID : 0,
                    contentType: null !== e.context ? e.context.contentType : 0,
                    apn: null !== e.context ? e.context.apn : 1,
                    reqtime: function () {
                      return Date.now();
                    },
                  };
                  return {
                    create: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.FILE_UPLOAD,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        appVersion: "2.1",
                        fromAccount: "",
                        toAccount: "",
                        sequence: 0,
                        time: function () {
                          return Math.ceil(Date.now() / 1e3);
                        },
                        random: function () {
                          return me();
                        },
                        fileStrMd5: "",
                        fileSize: "",
                        serverVer: 1,
                        authKey: "",
                        busiId: 1,
                        pkgFlag: 1,
                        sliceOffset: 0,
                        sliceSize: 0,
                        sliceData: "",
                        contentType: "application/x-www-form-urlencoded",
                      },
                      keyMaps: { request: {}, response: {} },
                    },
                    update: null,
                    delete: null,
                  };
                })(this.tim)),
                (this.config.cosSig = (function (e) {
                  var t = {
                    sdkappid: function () {
                      return e.loginInfo.SDKAppID;
                    },
                    identifier: function () {
                      return e.loginInfo.identifier;
                    },
                    userSig: function () {
                      return e.context.userSig;
                    },
                  };
                  return {
                    create: null,
                    query: {
                      serverName: Gn.NAME.IM_COS_SIGN,
                      cmd: Gn.CMD.COS_SIGN,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: t,
                      requestData: {
                        cmd: "open_im_cos_svc",
                        subCmd: "get_cos_token",
                        duration: 300,
                        version: 2,
                      },
                      keyMaps: {
                        request: {
                          userSig: "usersig",
                          subCmd: "sub_cmd",
                          cmd: "cmd",
                          duration: "duration",
                          version: "version",
                        },
                        response: {
                          expired_time: "expiredTime",
                          bucket_name: "bucketName",
                          session_token: "sessionToken",
                          tmp_secret_id: "secretId",
                          tmp_secret_key: "secretKey",
                        },
                      },
                    },
                    update: null,
                    delete: null,
                  };
                })(this.tim)),
                (this.config.bigDataHallwayAuthKey = (function (e) {
                  return {
                    create: null,
                    query: {
                      serverName: Gn.NAME.OPEN_IM,
                      cmd: Gn.CMD.BIG_DATA_HALLWAY_AUTH_KEY,
                      channel: Gn.CHANNEL.XHR,
                      protocol: Pn,
                      method: "POST",
                      queryString: {
                        websdkappid: Nn,
                        v: On,
                        platform: wn,
                        sdkappid: e.loginInfo.SDKAppID,
                        accounttype: "792",
                        apn: null !== e.context ? e.context.apn : 1,
                        reqtime: function () {
                          return +new Date();
                        },
                      },
                      requestData: {},
                    },
                  };
                })(this.tim)),
                (this.config.ssoEventStat = (function (e) {
                  var t = {
                    sdkappid: e.loginInfo.SDKAppID,
                    reqtime: Math.ceil(+new Date() / 1e3),
                  };
                  return {
                    create: {
                      serverName: Gn.NAME.IM_OPEN_STAT,
                      cmd: Gn.CMD.TIM_WEB_REPORT,
                      channel: Gn.CHANNEL.AUTO,
                      protocol: Pn,
                      queryString: t,
                      requestData: { table: "", report: [] },
                      keyMaps: {
                        request: {
                          table: "table",
                          report: "report",
                          SDKAppID: "sdkappid",
                          version: "version",
                          tinyID: "tinyid",
                          userID: "userid",
                          platform: "platform",
                          method: "method",
                          time: "time",
                          start: "start",
                          end: "end",
                          cost: "cost",
                          status: "status",
                          codeint: "codeint",
                          message: "message",
                          pointer: "pointer",
                          text: "text",
                          msgType: "msgtype",
                          networkType: "networktype",
                          startts: "startts",
                          endts: "endts",
                          timespan: "timespan",
                        },
                      },
                    },
                    query: {},
                    update: {},
                    delete: {},
                  };
                })(this.tim)),
                (this.config.ssoSumStat = (function (e) {
                  var t = null;
                  null !== e.context &&
                    (t = {
                      sdkappid: e.context.SDKAppID,
                      reqtime: Math.ceil(+new Date() / 1e3),
                    });
                  return {
                    create: {
                      serverName: Gn.NAME.IM_OPEN_STAT,
                      cmd: Gn.CMD.TIM_WEB_REPORT,
                      channel: Gn.CHANNEL.AUTO,
                      protocol: Pn,
                      queryString: t,
                      requestData: { table: "", report: [] },
                      keyMaps: {
                        request: {
                          table: "table",
                          report: "report",
                          SDKAppID: "sdkappid",
                          version: "version",
                          tinyID: "tinyid",
                          userID: "userid",
                          item: "item",
                          lpID: "lpid",
                          platform: "platform",
                          scene: "scene",
                          networkType: "networktype",
                          total: "total",
                          successRate: "successrate",
                          avg: "avg",
                          timespan: "timespan",
                          time: "time",
                        },
                      },
                    },
                    query: {},
                    update: {},
                    delete: {},
                  };
                })(this.tim));
            },
          },
          {
            key: "_initRequestData",
            value: function (e, t) {
              if (void 0 === e)
                return Or(t.requestData, this._getRequestMap(t), this.tim);
              var n = t.requestData,
                r = Object.create(null);
              for (var o in n)
                if (Object.prototype.hasOwnProperty.call(n, o)) {
                  if (
                    ((r[o] = "function" == typeof n[o] ? n[o]() : n[o]),
                    void 0 === e[o])
                  )
                    continue;
                  r[o] = e[o];
                }
              return (r = Or(r, this._getRequestMap(t), this.tim));
            },
          },
          {
            key: "_getRequestMap",
            value: function (e) {
              if (
                e.keyMaps &&
                e.keyMaps.request &&
                Object.keys(e.keyMaps.request).length > 0
              )
                return e.keyMaps.request;
            },
          },
          {
            key: "_initEncoder",
            value: function (e) {
              switch (e.protocol) {
                case Pn:
                  return function (e) {
                    if ("string" === n(e))
                      try {
                        return JSON.parse(e);
                      } catch (t) {
                        return e;
                      }
                    return e;
                  };
                case Ln:
                  return function (e) {
                    return e;
                  };
                default:
                  return function (e) {
                    return (
                      J.warn(
                        "PackageConfig._initEncoder(), unknow response type, data: ",
                        JSON.stringify(e)
                      ),
                      e
                    );
                  };
              }
            },
          },
          {
            key: "_initDecoder",
            value: function (e) {
              switch (e.protocol) {
                case Pn:
                  return function (e) {
                    if ("string" === n(e))
                      try {
                        return JSON.parse(e);
                      } catch (t) {
                        return e;
                      }
                    return e;
                  };
                case Ln:
                  return function (e) {
                    return e;
                  };
                default:
                  return function (e) {
                    return (
                      J.warn(
                        "PackageConfig._initDecoder(), unknow response type, data: ",
                        e
                      ),
                      e
                    );
                  };
              }
            },
          },
        ]),
        e
      );
    })(),
    su = function () {
      for (var e = [], t = au(arguments), n = 0; n < arguments.length; n++)
        Number.isInteger(arguments[n])
          ? e.push(arguments[n])
          : e.push(!0 == !!arguments[n] ? "1" : "0");
      return e.join(t);
    },
    au = function (e) {
      var t = e.length,
        n = e[t - 1];
      if ("string" != typeof n) return "";
      if (n.length > 1) return "";
      var r = e[t - 1];
      return delete e[t - 1], (e.length -= t === e.length ? 1 : 0), r;
    },
    uu = {
      C2CMessageArray: 1,
      groupMessageArray: 1,
      groupTips: 1,
      C2CNotifyMessageArray: 1,
      profileModify: 1,
      friendListMod: 1,
    },
    cu = (function (e) {
      c(n, e);
      var t = y(n);
      function n(e) {
        var o;
        return r(this, n), (o = t.call(this, e))._initialization(), o;
      }
      return (
        i(n, [
          {
            key: "_initialization",
            value: function () {
              (this._syncOffset = ""),
                (this._syncNoticeList = []),
                (this._syncEventArray = []),
                (this._syncMessagesIsRunning = !1),
                (this._syncMessagesFinished = !1),
                (this._isLongPoll = !1),
                (this._longPollID = 0),
                (this._noticeSequence = 0),
                this._initializeListener(),
                (this._runLoop = null),
                this._initShuntChannels();
            },
          },
          {
            key: "_initShuntChannels",
            value: function () {
              (this._shuntChannels = Object.create(null)),
                (this._shuntChannels.C2CMessageArray = this._C2CMessageArrayChannel.bind(
                  this
                )),
                (this._shuntChannels.groupMessageArray = this._groupMessageArrayChannel.bind(
                  this
                )),
                (this._shuntChannels.groupTips = this._groupTipsChannel.bind(
                  this
                )),
                (this._shuntChannels.C2CNotifyMessageArray = this._C2CNotifyMessageArrayChannel.bind(
                  this
                )),
                (this._shuntChannels.profileModify = this._profileModifyChannel.bind(
                  this
                )),
                (this._shuntChannels.friendListMod = this._friendListModChannel.bind(
                  this
                ));
            },
          },
          {
            key: "_C2CMessageArrayChannel",
            value: function (e, t, n) {
              this.emitInnerEvent(rr, t);
            },
          },
          {
            key: "_groupMessageArrayChannel",
            value: function (e, t, n) {
              this.emitInnerEvent(or, t);
            },
          },
          {
            key: "_groupTipsChannel",
            value: function (e, t, n) {
              var r = this;
              switch (e) {
                case 4:
                case 6:
                  this.emitInnerEvent(ir, t);
                  break;
                case 5:
                  t.forEach(function (e) {
                    re(e.elements.revokedInfos)
                      ? r.emitInnerEvent(lr, t)
                      : r.emitInnerEvent(sr, {
                          groupSystemNotices: t,
                          type: n,
                        });
                  });
                  break;
                default:
                  J.log(
                    "NotificationController._groupTipsChannel unknown event="
                      .concat(e, " type=")
                      .concat(n),
                    t
                  );
              }
            },
          },
          {
            key: "_C2CNotifyMessageArrayChannel",
            value: function (e, t, n) {
              if (t[0]) {
                var r = t[0];
                r.hasOwnProperty("kickoutMsgNotify")
                  ? this.emitInnerEvent(nr)
                  : r.hasOwnProperty("sysCmdMsgNotify")
                  ? this.emitInnerEvent(cr)
                  : r.hasOwnProperty("c2cMessageRevokedNotify")
                  ? this.emitInnerEvent(pr, t)
                  : r.hasOwnProperty("c2cMessageReadReceipt") &&
                    this.emitInnerEvent(hr, t);
              }
            },
          },
          {
            key: "_profileModifyChannel",
            value: function (e, t, n) {
              this.emitInnerEvent(ur, t);
            },
          },
          {
            key: "_friendListModChannel",
            value: function (e, t, n) {
              this.emitInnerEvent(ar, t);
            },
          },
          {
            key: "_dispatchNotice",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "poll";
              if (re(e))
                for (
                  var n = null,
                    r = null,
                    o = "",
                    i = "",
                    s = "",
                    a = 0,
                    u = 0,
                    c = e.length;
                  u < c;
                  u++
                )
                  (a = (n = e[u]).event),
                    (o = Object.keys(n).find(function (e) {
                      return void 0 !== uu[e];
                    })),
                    se(this._shuntChannels[o])
                      ? ((r = n[o]),
                        "poll" === t && this._updatenoticeSequence(r),
                        this._shuntChannels[o](a, r, t))
                      : ("poll" === t && this._updatenoticeSequence(),
                        (i = "".concat(dt.NOTICE_RUNLOOP_UNEXPECTED_CONDITION)),
                        (s = "".concat(gn, ": ").concat(a, ", ").concat(o)),
                        this.emitInnerEvent(
                          Ir,
                          new ht({
                            code: i,
                            message: s,
                            data: { payloadName: o, event: a },
                          })
                        ),
                        (i = ""),
                        (s = ""));
            },
          },
          {
            key: "getLongPollID",
            value: function () {
              return this._longPollID;
            },
          },
          {
            key: "_IAmReady",
            value: function () {
              this.triggerReady();
            },
          },
          {
            key: "reset",
            value: function () {
              (this._noticeSequence = 0),
                this._resetSync(),
                this.closeNoticeChannel();
            },
          },
          {
            key: "_resetSync",
            value: function () {
              (this._syncOffset = ""),
                (this._syncNoticeList = []),
                (this._syncEventArray = []),
                (this._syncMessagesIsRunning = !1),
                (this._syncMessagesFinished = !1);
            },
          },
          {
            key: "_setNoticeSeqInRequestData",
            value: function (e) {
              (e.Cookie.NoticeSeq = this._noticeSequence),
                this.tim.sumStatController.addTotalCount(Vr);
            },
          },
          {
            key: "_updatenoticeSequence",
            value: function (e) {
              if (e) {
                var t = e[e.length - 1].noticeSequence;
                t && "number" == typeof t
                  ? t <= this._noticeSequence || (this._noticeSequence = t)
                  : this._noticeSequence++;
              } else this._noticeSequence++;
            },
          },
          {
            key: "_initializeListener",
            value: function () {
              var e = this.tim.innerEmitter;
              e.on(xn, this._startSyncMessages, this),
                e.on(vr, this.closeNoticeChannel, this),
                e.on(Zn, this._onFastStart, this);
            },
          },
          {
            key: "openNoticeChannel",
            value: function () {
              J.log("NotificationController.openNoticeChannel"),
                this._getLongPollID();
            },
          },
          {
            key: "closeNoticeChannel",
            value: function () {
              J.log("NotificationController.closeNoticeChannel"),
                (this._runLoop instanceof Ma || this._runLoop instanceof Ea) &&
                  (this._runLoop.abort(), this._runLoop.stop()),
                (this._longPollID = 0),
                (this._isLongPoll = !1);
            },
          },
          {
            key: "_getLongPollID",
            value: function () {
              var e = this;
              if (0 === this._longPollID) {
                var t = new ro();
                t.setMethod(Wo).setStart(),
                  this.request({ name: "longPollID", action: "query" })
                    .then(function (n) {
                      var r = n.data.longPollingID;
                      e._onGetLongPollIDSuccess(r),
                        t
                          .setCode(0)
                          .setText("longPollingID=".concat(r))
                          .setNetworkType(e.getNetworkType())
                          .setEnd();
                    })
                    .catch(function (n) {
                      var r = new ht({
                        code: n.code || dt.GET_LONGPOLL_ID_FAILED,
                        message: n.message || yn,
                      });
                      e.emitInnerEvent(Xn),
                        e.emitInnerEvent(Ir, r),
                        e.probeNetwork().then(function (e) {
                          var n = v(e, 2),
                            o = n[0],
                            i = n[1];
                          t.setError(r, o, i).setEnd();
                        });
                    });
              } else this._onGetLongPollIDSuccess(this._longPollID);
            },
          },
          {
            key: "_onGetLongPollIDSuccess",
            value: function (e) {
              this.emitInnerEvent(Fn, [
                {
                  key: "long_poll_logout.query.requestData.longPollingID",
                  value: e,
                },
                {
                  key: "longPoll.query.requestData.cookie.longPollingID",
                  value: e,
                },
              ]),
                (this._longPollID = e),
                this._startLongPoll(),
                this._IAmReady(),
                this.tim.sumStatController.recordLongPollingID(
                  this._longPollID
                );
            },
          },
          {
            key: "_startLongPoll",
            value: function () {
              if (!0 !== this._isLongPoll) {
                J.log("NotificationController._startLongPoll...");
                var e = this.tim.connectionController,
                  t = this.createTransportCapsule({
                    name: "longPoll",
                    action: "query",
                  });
                (this._isLongPoll = !0),
                  (this._runLoop = e.createRunLoop({
                    pack: t,
                    before: this._setNoticeSeqInRequestData.bind(this),
                    success: this._onNoticeReceived.bind(this),
                    fail: this._onNoticeFail.bind(this),
                  })),
                  this._runLoop.start();
              } else
                J.log("NotificationController._startLongPoll is running...");
            },
          },
          {
            key: "_onFastStart",
            value: function () {
              this.closeNoticeChannel(), this.syncMessage();
            },
          },
          {
            key: "_onNoticeReceived",
            value: function (e) {
              var t = e.data;
              if (t.errorCode !== Pe.SUCCESS) {
                var n = new ro();
                n.setMethod(zo).setStart(),
                  n
                    .setMessage(t.errorInfo || JSON.stringify(t))
                    .setCode(t.errorCode)
                    .setNetworkType(this.getNetworkType())
                    .setEnd(!0),
                  this._onResponseError(t);
              } else this.emitInnerEvent(Qn);
              this.tim.sumStatController.addSuccessCount(Vr),
                this.tim.sumStatController.addCost(Vr, t.timecost),
                e.data.eventArray && this._dispatchNotice(e.data.eventArray);
            },
          },
          {
            key: "_onResponseError",
            value: function (e) {
              switch (e.errorCode) {
                case dt.LONG_POLL_KICK_OUT:
                  J.warn(
                    "NotificationController._onResponseError, longPollingID=".concat(
                      this._longPollID,
                      " was kicked out"
                    )
                  ),
                    this.emitInnerEvent(tr),
                    this.closeNoticeChannel();
                  break;
                case dt.MESSAGE_A2KEY_EXPIRED:
                case dt.ACCOUNT_A2KEY_EXPIRED:
                  this.emitInnerEvent(_r);
                  break;
                default:
                  oe(e.errorCode) || oe(e.errorInfo)
                    ? J.log(
                        "NotificationController._onResponseError, errorCode or errorInfo undefined!",
                        e
                      )
                    : this.emitInnerEvent(
                        Ir,
                        new ht({ code: e.errorCode, message: e.errorInfo })
                      );
              }
            },
          },
          {
            key: "_onNoticeFail",
            value: function (e) {
              if (e.error)
                if (
                  "ECONNABORTED" === e.error.code ||
                  e.error.code === dt.NETWORK_TIMEOUT
                )
                  if (e.error.config) {
                    var t = e.error.config.url,
                      n = e.error.config.data;
                    J.log(
                      "NotificationController._onNoticeFail request timed out. url="
                        .concat(t, " data=")
                        .concat(n)
                    );
                  } else
                    J.log(
                      "NotificationController._onNoticeFail request timed out."
                    );
                else
                  J.log(
                    "NotificationController._onNoticeFail request failed due to network error"
                  );
              this.emitInnerEvent(Jn);
            },
          },
          {
            key: "_startSyncMessages",
            value: function (e) {
              !0 !== this._syncMessagesFinished && this.syncMessage();
            },
          },
          {
            key: "syncMessage",
            value: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              (this._syncMessagesIsRunning = !0),
                this.request({
                  name: "syncMessage",
                  action: "query",
                  param: { cookie: t, syncFlag: n },
                })
                  .then(function (t) {
                    var n = t.data;
                    switch (su(n.cookie, n.syncFlag)) {
                      case "00":
                      case "01":
                        e.emitInnerEvent(Ir, {
                          code: dt.NOTICE_RUNLOOP_OFFSET_LOST,
                          message: mn,
                        });
                        break;
                      case "10":
                      case "11":
                        n.eventArray && e._dispatchNotice(n.eventArray, "sync"),
                          (e._syncNoticeList = e._syncNoticeList.concat(
                            n.messageList
                          )),
                          e.emitInnerEvent(Hn, {
                            data: n.messageList,
                            C2CRemainingUnreadList: n.C2CRemainingUnreadList,
                          }),
                          (e._syncOffset = n.cookie),
                          e.syncMessage(n.cookie, n.syncFlag);
                        break;
                      case "12":
                        n.eventArray && e._dispatchNotice(n.eventArray, "sync"),
                          e.openNoticeChannel(),
                          (e._syncNoticeList = e._syncNoticeList.concat(
                            n.messageList
                          )),
                          e.emitInnerEvent(Kn, {
                            messageList: n.messageList,
                            C2CRemainingUnreadList: n.C2CRemainingUnreadList,
                          }),
                          (e._syncOffset = n.cookie),
                          (e._syncNoticeList = []),
                          (e._syncMessagesIsRunning = !1),
                          (e._syncMessagesFinished = !0);
                    }
                  })
                  .catch(function (t) {
                    (e._syncMessagesIsRunning = !1),
                      J.error(
                        "NotificationController.syncMessage failed. error:",
                        t
                      );
                  });
            },
          },
        ]),
        n
      );
    })(Pr),
    lu = (function (e) {
      c(n, e);
      var t = y(n);
      function n(e) {
        var o;
        return (
          r(this, n),
          ((o = t.call(this, e)).COSSDK = null),
          (o._cosUploadMethod = null),
          (o.expiredTimeLimit = 300),
          (o.appid = 0),
          (o.bucketName = ""),
          (o.ciUrl = ""),
          (o.directory = ""),
          (o.downloadUrl = ""),
          (o.uploadUrl = ""),
          (o.expiredTimeOut = o.expiredTimeLimit),
          (o.region = "ap-shanghai"),
          (o.cos = null),
          (o.cosOptions = {
            secretId: "",
            secretKey: "",
            sessionToken: "",
            expiredTime: 0,
          }),
          (o._timer = 0),
          o.tim.innerEmitter.on(xn, o._init, g(o)),
          o.triggerReady(),
          o
        );
      }
      return (
        i(n, [
          {
            key: "_expiredTimer",
            value: function () {
              var e = this;
              this._timer = setInterval(function () {
                Math.ceil(Date.now() / 1e3) >= e.cosOptions.expiredTime - 60 &&
                  (e._getAuthorizationKey(), clearInterval(e._timer));
              }, 3e4);
            },
          },
          {
            key: "_init",
            value: function () {
              var e = N ? "cos-wx-sdk" : "cos-js-sdk";
              (this.COSSDK = this.tim.getPlugin(e)),
                this.COSSDK
                  ? this._getAuthorizationKey()
                  : J.warn(
                      "UploadController._init 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#registerPlugin"
                    );
            },
          },
          {
            key: "_getAuthorizationKey",
            value: function () {
              var e = this,
                t = Math.ceil(Date.now() / 1e3),
                n = new ro();
              n.setMethod(po).setStart(),
                this.request({
                  name: "cosSig",
                  action: "query",
                  param: { duration: this.expiredTimeLimit },
                })
                  .then(function (r) {
                    J.log(
                      "UploadController._getAuthorizationKey ok. data:",
                      r.data
                    );
                    var o = r.data,
                      i = o.expiredTime - t;
                    n
                      .setCode(0)
                      .setText("timeout=".concat(i, "s"))
                      .setNetworkType(e.getNetworkType())
                      .setEnd(),
                      (e.appid = o.appid),
                      (e.bucketName = o.bucketName),
                      (e.ciUrl = o.ciUrl),
                      (e.directory = o.directory),
                      (e.downloadUrl = o.downloadUrl),
                      (e.uploadUrl = o.uploadUrl),
                      (e.expiredTimeOut = i),
                      (e.cosOptions = {
                        secretId: o.secretId,
                        secretKey: o.secretKey,
                        sessionToken: o.sessionToken,
                        expiredTime: o.expiredTime,
                      }),
                      e._initUploaderMethod(),
                      e._expiredTimer();
                  })
                  .catch(function (t) {
                    e.probeNetwork().then(function (n) {
                      var r = v(n, 2),
                        o = r[0],
                        i = r[1];
                      e.setError(t, o, i).setEnd();
                    }),
                      J.warn(
                        "UploadController._getAuthorizationKey failed. error:",
                        t
                      );
                  });
            },
          },
          {
            key: "_initUploaderMethod",
            value: function () {
              var e = this;
              this.appid &&
                ((this.cos = N
                  ? new this.COSSDK({
                      ForcePathStyle: !0,
                      getAuthorization: this._getAuthorization.bind(this),
                    })
                  : new this.COSSDK({
                      getAuthorization: this._getAuthorization.bind(this),
                    })),
                (this._cosUploadMethod = N
                  ? function (t, n) {
                      e.cos.postObject(t, n);
                    }
                  : function (t, n) {
                      e.cos.uploadFiles(t, n);
                    }));
            },
          },
          {
            key: "_getAuthorization",
            value: function (e, t) {
              t({
                TmpSecretId: this.cosOptions.secretId,
                TmpSecretKey: this.cosOptions.secretKey,
                XCosSecurityToken: this.cosOptions.sessionToken,
                ExpiredTime: this.cosOptions.expiredTime,
              });
            },
          },
          {
            key: "uploadImage",
            value: function (e) {
              if (!e.file)
                return Hr(
                  new ht({
                    code: dt.MESSAGE_IMAGE_SELECT_FILE_FIRST,
                    message: At,
                  })
                );
              var t = this._checkImageType(e.file);
              if (!0 !== t) return t;
              var n = this._checkImageMime(e.file);
              if (!0 !== n) return n;
              var r = this._checkImageSize(e.file);
              return !0 !== r ? r : this.upload(e);
            },
          },
          {
            key: "_checkImageType",
            value: function (e) {
              var t = "";
              return (
                (t = N
                  ? e.url.slice(e.url.lastIndexOf(".") + 1)
                  : e.files[0].name.slice(
                      e.files[0].name.lastIndexOf(".") + 1
                    )),
                _n.indexOf(t.toLowerCase()) >= 0 ||
                  Hr(new ht({ coe: dt.MESSAGE_IMAGE_TYPES_LIMIT, message: Rt }))
              );
            },
          },
          {
            key: "_checkImageMime",
            value: function (e) {
              return !0;
            },
          },
          {
            key: "_checkImageSize",
            value: function (e) {
              var t = 0;
              return 0 === (t = N ? e.size : e.files[0].size)
                ? Hr(
                    new ht({
                      code: dt.MESSAGE_FILE_IS_EMPTY,
                      message: "".concat(Tt),
                    })
                  )
                : t < 20971520 ||
                    Hr(
                      new ht({
                        coe: dt.MESSAGE_IMAGE_SIZE_LIMIT,
                        message: "".concat(Ot),
                      })
                    );
            },
          },
          {
            key: "uploadFile",
            value: function (e) {
              var t = null;
              return e.file
                ? e.file.files[0].size > 104857600
                  ? ((t = new ht({
                      code: dt.MESSAGE_FILE_SIZE_LIMIT,
                      message: qt,
                    })),
                    Hr(t))
                  : 0 === e.file.files[0].size
                  ? ((t = new ht({
                      code: dt.MESSAGE_FILE_IS_EMPTY,
                      message: "".concat(Tt),
                    })),
                    Hr(t))
                  : this.upload(e)
                : ((t = new ht({
                    code: dt.MESSAGE_FILE_SELECT_FILE_FIRST,
                    message: Ut,
                  })),
                  Hr(t));
            },
          },
          {
            key: "uploadVideo",
            value: function (e) {
              return e.file.videoFile.size > 104857600
                ? Hr(
                    new ht({
                      code: dt.MESSAGE_VIDEO_SIZE_LIMIT,
                      message: "".concat(Pt),
                    })
                  )
                : 0 === e.file.videoFile.size
                ? Hr(
                    new ht({
                      code: dt.MESSAGE_FILE_IS_EMPTY,
                      message: "".concat(Tt),
                    })
                  )
                : -1 === In.indexOf(e.file.videoFile.type)
                ? Hr(
                    new ht({
                      code: dt.MESSAGE_VIDEO_TYPES_LIMIT,
                      message: "".concat(Gt),
                    })
                  )
                : N
                ? this.handleVideoUpload({ file: e.file.videoFile })
                : O
                ? this.handleVideoUpload(e)
                : void 0;
            },
          },
          {
            key: "handleVideoUpload",
            value: function (e) {
              var t = this;
              return new Promise(function (n, r) {
                t.upload(e)
                  .then(function (e) {
                    n(e);
                  })
                  .catch(function () {
                    t.upload(e)
                      .then(function (e) {
                        n(e);
                      })
                      .catch(function () {
                        r(
                          new ht({
                            code: dt.MESSAGE_VIDEO_UPLOAD_FAIL,
                            message: Lt,
                          })
                        );
                      });
                  });
              });
            },
          },
          {
            key: "uploadAudio",
            value: function (e) {
              return e.file
                ? e.file.size > 20971520
                  ? Hr(
                      new ht({
                        code: dt.MESSAGE_AUDIO_SIZE_LIMIT,
                        message: "".concat(wt),
                      })
                    )
                  : 0 === e.file.size
                  ? Hr(
                      new ht({
                        code: dt.MESSAGE_FILE_IS_EMPTY,
                        message: "".concat(Tt),
                      })
                    )
                  : this.upload(e)
                : Hr(
                    new ht({ code: dt.MESSAGE_AUDIO_UPLOAD_FAIL, message: Nt })
                  );
            },
          },
          {
            key: "upload",
            value: function (e) {
              var t = this;
              if (!se(this._cosUploadMethod))
                return (
                  J.warn(
                    "UploadController.upload 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#registerPlugin"
                  ),
                  Hr(new ht({ code: dt.COS_UNDETECTED, message: It }))
                );
              var n = new ro();
              n.setMethod(ho).setStart(), J.time(no);
              var r = N ? e.file : e.file.files[0];
              return new Promise(function (o, i) {
                var s = N
                    ? t._createCosOptionsWXMiniApp(e)
                    : t._createCosOptionsWeb(e),
                  a = t;
                t._cosUploadMethod(s, function (e, s) {
                  var u = Object.create(null);
                  if (s) {
                    if (e || (re(s.files) && s.files[0].error)) {
                      var c = new ht({
                        code: dt.MESSAGE_FILE_UPLOAD_FAIL,
                        message: bt,
                      });
                      return (
                        n.setError(c, !0, t.getNetworkType()).setEnd(),
                        J.log(
                          "UploadController.upload failed, error:",
                          s.files[0].error
                        ),
                        403 === s.files[0].error.statusCode &&
                          (J.warn(
                            "UploadController.upload failed. cos AccessKeyId was invalid, regain auth key!"
                          ),
                          t._getAuthorizationKey()),
                        void i(c)
                      );
                    }
                    (u.fileName = r.name),
                      (u.fileSize = r.size),
                      (u.fileType = r.type
                        .slice(r.type.indexOf("/") + 1)
                        .toLowerCase()),
                      (u.location = N ? s.Location : s.files[0].data.Location);
                    var l = J.timeEnd(no),
                      p = a._formatFileSize(r.size),
                      h = a._formatSpeed((1e3 * r.size) / l),
                      d = "size="
                        .concat(p, ",time=")
                        .concat(l, "ms,speed=")
                        .concat(h);
                    return (
                      J.log(
                        "UploadController.upload success name="
                          .concat(r.name, ",")
                          .concat(d)
                      ),
                      o(u),
                      void n
                        .setCode(0)
                        .setNetworkType(t.getNetworkType())
                        .setText(d)
                        .setEnd()
                    );
                  }
                  var f = new ht({
                    code: dt.MESSAGE_FILE_UPLOAD_FAIL,
                    message: bt,
                  });
                  n.setError(f, !0, a.getNetworkType()).setEnd(),
                    J.warn("UploadController.upload failed, error:", e),
                    403 === e.statusCode &&
                      (J.warn(
                        "UploadController.upload failed. cos AccessKeyId was invalid, regain auth key!"
                      ),
                      t._getAuthorizationKey()),
                    i(f);
                });
              });
            },
          },
          {
            key: "_formatFileSize",
            value: function (e) {
              return e < 1024
                ? e + "B"
                : e < 1048576
                ? Math.floor(e / 1024) + "KB"
                : Math.floor(e / 1048576) + "MB";
            },
          },
          {
            key: "_formatSpeed",
            value: function (e) {
              return e <= 1048576
                ? (e / 1024).toFixed(1) + "KB/s"
                : (e / 1048576).toFixed(1) + "MB/s";
            },
          },
          {
            key: "_createCosOptionsWeb",
            value: function (e) {
              var t = this.tim.context.identifier,
                n = this._genFileName(t, e.to, e.file.files[0].name);
              return {
                files: [
                  {
                    Bucket: "".concat(this.bucketName, "-").concat(this.appid),
                    Region: this.region,
                    Key: "".concat(this.directory, "/").concat(n),
                    Body: e.file.files[0],
                  },
                ],
                SliceSize: 1048576,
                onProgress: function (t) {
                  if ("function" == typeof e.onProgress)
                    try {
                      e.onProgress(t.percent);
                    } catch (n) {
                      J.warn("onProgress callback error:", n), J.error(n);
                    }
                },
                onFileFinish: function (e, t, n) {},
              };
            },
          },
          {
            key: "_createCosOptionsWXMiniApp",
            value: function (e) {
              var t = this.tim.context.identifier,
                n = this._genFileName(t, e.to, e.file.name),
                r = e.file.url;
              return {
                Bucket: "".concat(this.bucketName, "-").concat(this.appid),
                Region: this.region,
                Key: "".concat(this.directory, "/").concat(n),
                FilePath: r,
                onProgress: function (t) {
                  if (
                    (J.log(JSON.stringify(t)),
                    "function" == typeof e.onProgress)
                  )
                    try {
                      e.onProgress(t.percent);
                    } catch (n) {
                      J.warn("onProgress callback error:", n), J.error(n);
                    }
                },
              };
            },
          },
          {
            key: "_genFileName",
            value: function (e, t, n) {
              return ""
                .concat(e, "-")
                .concat(t, "-")
                .concat(me(99999), "-")
                .concat(n);
            },
          },
          {
            key: "reset",
            value: function () {
              this._timer && (clearInterval(this._timer), (this._timer = 0));
            },
          },
        ]),
        n
      );
    })(Pr),
    pu = (function (e) {
      c(o, e);
      var n = y(o);
      function o(e) {
        var t;
        return (
          r(this, o),
          ((t = n.call(this, e)).FILETYPE = {
            SOUND: 2106,
            FILE: 2107,
            VIDEO: 2113,
          }),
          (t._bdh_download_server = "grouptalk.c2c.qq.com"),
          (t._BDHBizID = 10001),
          (t._authKey = ""),
          (t._expireTime = 0),
          t.tim.innerEmitter.on(xn, t._getAuthKey, g(t)),
          t
        );
      }
      return (
        i(o, [
          {
            key: "_getAuthKey",
            value: function () {
              var e = this;
              this.request({
                name: "bigDataHallwayAuthKey",
                action: "query",
              }).then(function (t) {
                t.data.authKey &&
                  ((e._authKey = t.data.authKey),
                  (e._expireTime = parseInt(t.data.expireTime)));
              });
            },
          },
          {
            key: "_isFromOlderVersion",
            value: function (e) {
              return 2 !== e.content.downloadFlag;
            },
          },
          {
            key: "parseElements",
            value: function (e, t) {
              if (!re(e) || !t) return [];
              for (var n = [], r = null, o = 0; o < e.length; o++)
                (r = e[o]),
                  this._needParse(r)
                    ? n.push(this._parseElement(r, t))
                    : n.push(e[o]);
              return n;
            },
          },
          {
            key: "_needParse",
            value: function (e) {
              return !(
                !this._isFromOlderVersion(e) ||
                (e.type !== t.MSG_AUDIO &&
                  e.type !== t.MSG_FILE &&
                  e.type !== t.MSG_VIDEO)
              );
            },
          },
          {
            key: "_parseElement",
            value: function (e, n) {
              switch (e.type) {
                case t.MSG_AUDIO:
                  return this._parseAudioElement(e, n);
                case t.MSG_FILE:
                  return this._parseFileElement(e, n);
                case t.MSG_VIDEO:
                  return this._parseVideoElement(e, n);
              }
            },
          },
          {
            key: "_parseAudioElement",
            value: function (e, t) {
              return (e.content.url = this._genAudioUrl(e.content.uuid, t)), e;
            },
          },
          {
            key: "_parseFileElement",
            value: function (e, t) {
              return (
                (e.content.url = this._genFileUrl(
                  e.content.uuid,
                  t,
                  e.content.fileName
                )),
                e
              );
            },
          },
          {
            key: "_parseVideoElement",
            value: function (e, t) {
              return (e.content.url = this._genVideoUrl(e.content.uuid, t)), e;
            },
          },
          {
            key: "_genAudioUrl",
            value: function (e, t) {
              return "" === this._authKey
                ? (J.warn("BigDataHallwayController._genAudioUrl no authKey!"),
                  "")
                : "https://"
                    .concat(
                      this._bdh_download_server,
                      "/asn.com/stddownload_common_file?authkey="
                    )
                    .concat(this._authKey, "&bid=")
                    .concat(this._BDHBizID, "&subbid=")
                    .concat(this.tim.context.SDKAppID, "&fileid=")
                    .concat(e, "&filetype=")
                    .concat(this.FILETYPE.SOUND, "&openid=")
                    .concat(t, "&ver=0");
            },
          },
          {
            key: "_genFileUrl",
            value: function (e, t, n) {
              return "" === this._authKey
                ? (J.warn("BigDataHallwayController._genFileUrl no authKey!"),
                  "")
                : (n ||
                    (n = ""
                      .concat(Math.floor(1e5 * Math.random()), "-")
                      .concat(Date.now())),
                  "https://"
                    .concat(
                      this._bdh_download_server,
                      "/asn.com/stddownload_common_file?authkey="
                    )
                    .concat(this._authKey, "&bid=")
                    .concat(this._BDHBizID, "&subbid=")
                    .concat(this.tim.context.SDKAppID, "&fileid=")
                    .concat(e, "&filetype=")
                    .concat(this.FILETYPE.FILE, "&openid=")
                    .concat(t, "&ver=0&filename=")
                    .concat(encodeURIComponent(n)));
            },
          },
          {
            key: "_genVideoUrl",
            value: function (e, t) {
              return "" === this._authKey
                ? (J.warn("BigDataHallwayController._genVideoUrl no authKey!"),
                  "")
                : "https://"
                    .concat(
                      this._bdh_download_server,
                      "/asn.com/stddownload_common_file?authkey="
                    )
                    .concat(this._authKey, "&bid=")
                    .concat(this._BDHBizID, "&subbid=")
                    .concat(this.tim.context.SDKAppID, "&fileid=")
                    .concat(e, "&filetype=")
                    .concat(this.FILETYPE.VIDEO, "&openid=")
                    .concat(t, "&ver=0");
            },
          },
          {
            key: "reset",
            value: function () {
              (this._authKey = ""), (this.expireTime = 0);
            },
          },
        ]),
        o
      );
    })(Pr),
    hu = {
      app_id: "",
      event_id: "",
      api_base: "https://pingtas.qq.com/pingd",
      prefix: "_mta_",
      version: "1.3.9",
      stat_share_app: !1,
      stat_pull_down_fresh: !1,
      stat_reach_bottom: !1,
      stat_param: !0,
    };
  function du() {
    try {
      var e = "s" + fu();
      return wx.setStorageSync(hu.prefix + "ssid", e), e;
    } catch (t) {}
  }
  function fu(e) {
    for (var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], n = 10; 1 < n; n--) {
      var r = Math.floor(10 * Math.random()),
        o = t[r];
      (t[r] = t[n - 1]), (t[n - 1] = o);
    }
    for (n = r = 0; 5 > n; n++) r = 10 * r + t[n];
    return (e || "") + (r + "") + +new Date();
  }
  function gu() {
    try {
      var e = getCurrentPages(),
        t = "/";
      return 0 < e.length && (t = e.pop().__route__), t;
    } catch (n) {
      console.log("get current page path error:" + n);
    }
  }
  function mu() {
    var e,
      t = {
        dm: "wechat.apps.xx",
        url: encodeURIComponent(gu() + _u(Iu.Data.pageQuery)),
        pvi: "",
        si: "",
        ty: 0,
      };
    return (
      (t.pvi =
        ((e = (function () {
          try {
            return wx.getStorageSync(hu.prefix + "auid");
          } catch (t) {}
        })()) ||
          ((e = (function () {
            try {
              var t = fu();
              return wx.setStorageSync(hu.prefix + "auid", t), t;
            } catch (e) {}
          })()),
          (t.ty = 1)),
        e)),
      (t.si = (function () {
        var e = (function () {
          try {
            return wx.getStorageSync(hu.prefix + "ssid");
          } catch (e) {}
        })();
        return e || (e = du()), e;
      })()),
      t
    );
  }
  function yu() {
    var e = (function () {
      var e = wx.getSystemInfoSync();
      return {
        adt: encodeURIComponent(e.model),
        scl: e.pixelRatio,
        scr: e.windowWidth + "x" + e.windowHeight,
        lg: e.language,
        fl: e.version,
        jv: encodeURIComponent(e.system),
        tz: encodeURIComponent(e.platform),
      };
    })();
    return (
      (function (e) {
        wx.getNetworkType({
          success: function (t) {
            e(t.networkType);
          },
        });
      })(function (e) {
        try {
          wx.setStorageSync(hu.prefix + "ntdata", e);
        } catch (t) {}
      }),
      (e.ct = wx.getStorageSync(hu.prefix + "ntdata") || "4g"),
      e
    );
  }
  function vu() {
    var e,
      t = Iu.Data.userInfo,
      n = [];
    for (e in t) t.hasOwnProperty(e) && n.push(e + "=" + t[e]);
    return (
      (t = n.join(";")),
      {
        r2: hu.app_id,
        r4: "wx",
        ext:
          "v=" +
          hu.version +
          (null !== t && "" !== t ? ";ui=" + encodeURIComponent(t) : ""),
      }
    );
  }
  function _u(e) {
    if (!hu.stat_param || !e) return "";
    e = (function (e) {
      if (1 > hu.ignore_params.length) return e;
      var t,
        n = {};
      for (t in e) 0 <= hu.ignore_params.indexOf(t) || (n[t] = e[t]);
      return n;
    })(e);
    var t,
      n = [];
    for (t in e) n.push(t + "=" + e[t]);
    return 0 < n.length ? "?" + n.join("&") : "";
  }
  var Iu = {
      App: {
        init: function (e) {
          "appID" in e && (hu.app_id = e.appID),
            "eventID" in e && (hu.event_id = e.eventID),
            "statShareApp" in e && (hu.stat_share_app = e.statShareApp),
            "statPullDownFresh" in e &&
              (hu.stat_pull_down_fresh = e.statPullDownFresh),
            "statReachBottom" in e &&
              (hu.stat_reach_bottom = e.statReachBottom),
            "ignoreParams" in e && (hu.ignore_params = e.ignoreParams),
            "statParam" in e && (hu.stat_param = e.statParam),
            du();
          try {
            "lauchOpts" in e &&
              ((Iu.Data.lanchInfo = e.lauchOpts),
              (Iu.Data.lanchInfo.landing = 1));
          } catch (t) {}
          "autoReport" in e &&
            e.autoReport &&
            (function () {
              var e = Page;
              Page = function (t) {
                var n = t.onLoad;
                (t.onLoad = function (e) {
                  n && n.call(this, e),
                    (Iu.Data.lastPageQuery = Iu.Data.pageQuery),
                    (Iu.Data.pageQuery = e),
                    (Iu.Data.lastPageUrl = Iu.Data.pageUrl),
                    (Iu.Data.pageUrl = gu()),
                    (Iu.Data.show = !1),
                    Iu.Page.init();
                }),
                  e(t);
              };
            })();
        },
      },
      Page: {
        init: function () {
          var e,
            t = getCurrentPages()[getCurrentPages().length - 1];
          t.onShow &&
            ((e = t.onShow),
            (t.onShow = function () {
              if (!0 === Iu.Data.show) {
                var t = Iu.Data.lastPageQuery;
                (Iu.Data.lastPageQuery = Iu.Data.pageQuery),
                  (Iu.Data.pageQuery = t),
                  (Iu.Data.lastPageUrl = Iu.Data.pageUrl),
                  (Iu.Data.pageUrl = gu());
              }
              (Iu.Data.show = !0), Iu.Page.stat(), e.apply(this, arguments);
            })),
            hu.stat_pull_down_fresh &&
              t.onPullDownRefresh &&
              (function () {
                var e = t.onPullDownRefresh;
                t.onPullDownRefresh = function () {
                  Iu.Event.stat(hu.prefix + "pulldownfresh", {
                    url: t.__route__,
                  }),
                    e.apply(this, arguments);
                };
              })(),
            hu.stat_reach_bottom &&
              t.onReachBottom &&
              (function () {
                var e = t.onReachBottom;
                t.onReachBottom = function () {
                  Iu.Event.stat(hu.prefix + "reachbottom", {
                    url: t.__route__,
                  }),
                    e.apply(this, arguments);
                };
              })(),
            hu.stat_share_app &&
              t.onShareAppMessage &&
              (function () {
                var e = t.onShareAppMessage;
                t.onShareAppMessage = function () {
                  return (
                    Iu.Event.stat(hu.prefix + "shareapp", { url: t.__route__ }),
                    e.apply(this, arguments)
                  );
                };
              })();
        },
        multiStat: function (e, t) {
          if (1 == t) Iu.Page.stat(e);
          else {
            var n = getCurrentPages()[getCurrentPages().length - 1];
            n.onShow &&
              (function () {
                var t = n.onShow;
                n.onShow = function () {
                  Iu.Page.stat(e), t.call(this, arguments);
                };
              })();
          }
        },
        stat: function (e) {
          if ("" != hu.app_id) {
            var t = [],
              n = vu();
            if ((e && (n.r2 = e), (e = [mu(), n, yu()]), Iu.Data.lanchInfo)) {
              e.push({ ht: Iu.Data.lanchInfo.scene }),
                Iu.Data.pageQuery &&
                  Iu.Data.pageQuery._mta_ref_id &&
                  e.push({ rarg: Iu.Data.pageQuery._mta_ref_id });
              try {
                1 == Iu.Data.lanchInfo.landing &&
                  ((n.ext += ";lp=1"), (Iu.Data.lanchInfo.landing = 0));
              } catch (i) {}
            }
            e.push({
              rdm: "/",
              rurl:
                0 >= Iu.Data.lastPageUrl.length
                  ? Iu.Data.pageUrl + _u(Iu.Data.lastPageQuery)
                  : encodeURIComponent(
                      Iu.Data.lastPageUrl + _u(Iu.Data.lastPageQuery)
                    ),
            }),
              e.push({ rand: +new Date() }),
              (n = 0);
            for (var r = e.length; n < r; n++)
              for (var o in e[n])
                e[n].hasOwnProperty(o) &&
                  t.push(o + "=" + (void 0 === e[n][o] ? "" : e[n][o]));
            wx.request({ url: hu.api_base + "?" + t.join("&").toLowerCase() });
          }
        },
      },
      Event: {
        stat: function (e, t) {
          if ("" != hu.event_id) {
            var n = [],
              r = mu(),
              o = vu();
            (r.dm = "wxapps.click"), (r.url = e), (o.r2 = hu.event_id);
            var i,
              s = void 0 === t ? {} : t,
              a = [];
            for (i in s)
              s.hasOwnProperty(i) &&
                a.push(encodeURIComponent(i) + "=" + encodeURIComponent(s[i]));
            for (
              s = a.join(";"),
                o.r5 = s,
                s = 0,
                o = (r = [r, o, yu(), { rand: +new Date() }]).length;
              s < o;
              s++
            )
              for (var u in r[s])
                r[s].hasOwnProperty(u) &&
                  n.push(u + "=" + (void 0 === r[s][u] ? "" : r[s][u]));
            wx.request({ url: hu.api_base + "?" + n.join("&").toLowerCase() });
          }
        },
      },
      Data: {
        userInfo: null,
        lanchInfo: null,
        pageQuery: null,
        lastPageQuery: null,
        pageUrl: "",
        lastPageUrl: "",
        show: !1,
      },
    },
    Cu = Iu,
    Mu = (function () {
      function e() {
        r(this, e), (this.cache = []), (this.MtaWX = null), this._init();
      }
      return (
        i(e, [
          {
            key: "report",
            value: function (e, t) {
              var n = this;
              try {
                O
                  ? window.MtaH5
                    ? (window.MtaH5.clickStat(e, t),
                      this.cache.length > 0 &&
                        (this.cache.forEach(function (e) {
                          var t = e.name,
                            n = e.param;
                          window.MtaH5.clickStat(t, n);
                        }),
                        (this.cache = [])))
                    : this.cache.push({ name: e, param: t })
                  : N &&
                    (this.MtaWX
                      ? (this.MtaWX.Event.stat(e, t),
                        this.cache.length > 0 &&
                          (this.cache.forEach(function (e) {
                            var t = e.name,
                              r = e.param;
                            n.MtaWX.Event.stat(t, r);
                          }),
                          (this.cache = [])))
                      : this.cache.push({ name: e, param: t }));
              } catch (r) {}
            },
          },
          {
            key: "stat",
            value: function () {
              try {
                O && window.MtaH5
                  ? window.MtaH5.pgv()
                  : N && this.MtaWX && this.MtaWX.Page.stat();
              } catch (e) {}
            },
          },
          {
            key: "_init",
            value: function () {
              try {
                if (O) {
                  window._mtac = { autoReport: 0 };
                  var e = document.createElement("script"),
                    t = Ce();
                  (e.src = "".concat(t, "//pingjs.qq.com/h5/stats.js?v2.0.4")),
                    e.setAttribute("name", "MTAH5"),
                    e.setAttribute("sid", "500690998"),
                    e.setAttribute("cid", "500691017");
                  var n = document.getElementsByTagName("script")[0];
                  n.parentNode.insertBefore(e, n);
                } else
                  N &&
                    ((this.MtaWX = Cu),
                    this.MtaWX.App.init({
                      appID: "500690995",
                      eventID: "500691014",
                      autoReport: !1,
                      statParam: !0,
                    }));
              } catch (r) {}
            },
          },
        ]),
        e
      );
    })(),
    Eu = (function (e) {
      c(n, e);
      var t = y(n);
      function n(e) {
        var o;
        r(this, n), ((o = t.call(this, e)).MTA = new Mu());
        var i = o.tim.innerEmitter;
        return i.on(kr, o._stat, g(o)), i.on(Dr, o._stat, g(o)), o;
      }
      return (
        i(n, [
          {
            key: "_stat",
            value: function () {
              this.MTA.report("sdkappid", { value: this.tim.context.SDKAppID }),
                this.MTA.report("version", { value: qu.VERSION }),
                this.MTA.stat();
            },
          },
        ]),
        n
      );
    })(Pr),
    Su = (function () {
      function e(t) {
        r(this, e), (this._table = "timwebii"), (this._report = []);
      }
      return (
        i(e, [
          {
            key: "pushIn",
            value: function (e) {
              J.debug("SSOLogBody.pushIn", this._report.length, e),
                this._report.push(e);
            },
          },
          {
            key: "backfill",
            value: function (e) {
              var t;
              re(e) &&
                0 !== e.length &&
                (J.debug("SSOLogBody.backfill", this._report.length, e.length),
                (t = this._report).unshift.apply(t, _(e)));
            },
          },
          {
            key: "getLogsNumInMemory",
            value: function () {
              return this._report.length;
            },
          },
          {
            key: "isEmpty",
            value: function () {
              return 0 === this._report.length;
            },
          },
          {
            key: "_reset",
            value: function () {
              (this._report.length = 0), (this._report = []);
            },
          },
          {
            key: "getTable",
            value: function () {
              return this._table;
            },
          },
          {
            key: "getLogsInMemory",
            value: function () {
              var e = this._report.slice();
              return this._reset(), e;
            },
          },
        ]),
        e
      );
    })(),
    Tu = (function (e) {
      c(n, e);
      var t = y(n);
      function n(e) {
        var o;
        return (
          r(this, n),
          ((o = t.call(this, e)).TAG = "im-ssolog-event"),
          (o._reportBody = new Su()),
          (o._version = "2.7.6"),
          (o.MIN_THRESHOLD = 20),
          (o.MAX_THRESHOLD = 100),
          (o.WAITING_TIME = 6e4),
          (o.INTERVAL = 2e4),
          (o._timerID = 0),
          o._resetLastReportTime(),
          o._startReportTimer(),
          (o._retryCount = 0),
          (o.MAX_RETRY_COUNT = 3),
          o.tim.innerEmitter.on(mr, o._onLoginSuccess, g(o)),
          o
        );
      }
      return (
        i(n, [
          {
            key: "reportAtOnce",
            value: function () {
              J.debug("EventStatController.reportAtOnce"), this._report();
            },
          },
          {
            key: "_onLoginSuccess",
            value: function () {
              var e = this,
                t = this.tim.storage,
                n = t.getItem(this.TAG, !1);
              Oe(n) ||
                (J.log(
                  "EventStatController._onLoginSuccess get ssolog in storage, nums=" +
                    n.length
                ),
                n.forEach(function (t) {
                  e._reportBody.pushIn(t);
                }),
                t.removeItem(this.TAG, !1));
            },
          },
          {
            key: "pushIn",
            value: function (e) {
              e instanceof ro &&
                (e.setCommonInfo({
                  SDKAppID: this.tim.context.SDKAppID,
                  version: this._version,
                  tinyID: this.tim.context.tinyID,
                  userID: this.tim.loginInfo.identifier,
                  platform: this.getPlatform(),
                  scene: this.tim.context.scene,
                }),
                this._reportBody.pushIn(e),
                this._reportBody.getLogsNumInMemory() >= this.MIN_THRESHOLD &&
                  this._report());
            },
          },
          {
            key: "_resetLastReportTime",
            value: function () {
              this._lastReportTime = Date.now();
            },
          },
          {
            key: "_startReportTimer",
            value: function () {
              var e = this;
              this._timerID = setInterval(function () {
                Date.now() < e._lastReportTime + e.WAITING_TIME ||
                  e._reportBody.isEmpty() ||
                  e._report();
              }, this.INTERVAL);
            },
          },
          {
            key: "_stopReportTimer",
            value: function () {
              this._timerID > 0 &&
                (clearInterval(this._timerID), (this._timerID = 0));
            },
          },
          {
            key: "_report",
            value: function () {
              var e = this;
              if (!this._reportBody.isEmpty()) {
                var t = this._reportBody.getLogsInMemory();
                this.request({
                  name: "ssoEventStat",
                  action: "create",
                  param: { table: this._reportBody.getTable(), report: t },
                })
                  .then(function () {
                    e._resetLastReportTime(),
                      e._retryCount > 0 &&
                        (J.debug("EventStatController.report retry success"),
                        (e._retryCount = 0));
                  })
                  .catch(function (n) {
                    if (
                      (J.warn(
                        "EventStatController.report, networkType:"
                          .concat(e.getNetworkType(), " error:")
                          .concat(de(n))
                      ),
                      e._reportBody.backfill(t),
                      e._reportBody.getLogsNumInMemory() > e.MAX_THRESHOLD ||
                        e._retryCount === e.MAX_RETRY_COUNT ||
                        0 === e._timerID)
                    )
                      return (e._retryCount = 0), void e._flushAtOnce();
                    e._retryCount += 1;
                  });
              }
            },
          },
          {
            key: "_flushAtOnce",
            value: function () {
              var e = this.tim.storage,
                t = e.getItem(this.TAG, !1),
                n = this._reportBody.getLogsInMemory();
              if (Oe(t))
                J.log("EventStatController._flushAtOnce nums=" + n.length),
                  e.setItem(this.TAG, n, !0, !1);
              else {
                var r = n.concat(t);
                r.length > this.MAX_THRESHOLD &&
                  (r = r.slice(0, this.MAX_THRESHOLD)),
                  J.log("EventStatController._flushAtOnce nums=" + r.length),
                  e.setItem(this.TAG, r, !0, !1);
              }
            },
          },
          {
            key: "reset",
            value: function () {
              J.log("EventStatController.reset"),
                this._stopReportTimer(),
                this._report();
            },
          },
        ]),
        n
      );
    })(Pr),
    Du = "none",
    ku = "online",
    Au = (function () {
      function e() {
        r(this, e), (this._networkType = ""), (this.maxWaitTime = 3e3);
      }
      return (
        i(e, [
          {
            key: "start",
            value: function () {
              var e = this;
              N
                ? (wx.getNetworkType({
                    success: function (t) {
                      (e._networkType = t.networkType),
                        t.networkType === Du
                          ? J.warn("NetMonitor no network, please check!")
                          : J.info(
                              "NetMonitor networkType:".concat(t.networkType)
                            );
                    },
                  }),
                  wx.onNetworkStatusChange(
                    this._onWxNetworkStatusChange.bind(this)
                  ))
                : (this._networkType = ku);
            },
          },
          {
            key: "_onWxNetworkStatusChange",
            value: function (e) {
              (this._networkType = e.networkType),
                e.isConnected
                  ? J.info("NetMonitor networkType:".concat(e.networkType))
                  : J.warn("NetMonitor no network, please check!");
            },
          },
          {
            key: "probe",
            value: function () {
              var e = this;
              return new Promise(function (t, n) {
                if (N)
                  wx.getNetworkType({
                    success: function (n) {
                      (e._networkType = n.networkType),
                        n.networkType === Du
                          ? (J.warn("NetMonitor no network, please check!"),
                            t([!1, n.networkType]))
                          : (J.info(
                              "NetMonitor networkType:".concat(n.networkType)
                            ),
                            t([!0, n.networkType]));
                    },
                  });
                else if (window && window.fetch)
                  fetch(
                    ""
                      .concat(
                        Ce(),
                        "//webim-1252463788.file.myqcloud.com/assets/test/speed.xml?random="
                      )
                      .concat(Math.random())
                  )
                    .then(function (e) {
                      e.ok ? t([!0, ku]) : t([!1, Du]);
                    })
                    .catch(function (e) {
                      t([!1, Du]);
                    });
                else {
                  var r = new XMLHttpRequest(),
                    o = setTimeout(function () {
                      J.warn(
                        "NetMonitor fetch timeout. Probably no network, please check!"
                      ),
                        r.abort(),
                        (e._networkType = Du),
                        t([!1, Du]);
                    }, e.maxWaitTime);
                  (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      (clearTimeout(o),
                      200 === r.status || 304 === r.status
                        ? ((this._networkType = ku), t([!0, ku]))
                        : (J.warn(
                            "NetMonitor fetch status:".concat(
                              r.status,
                              ". Probably no network, please check!"
                            )
                          ),
                          (this._networkType = Du),
                          t([!1, Du])));
                  }),
                    r.open(
                      "GET",
                      ""
                        .concat(
                          Ce(),
                          "//webim-1252463788.file.myqcloud.com/assets/test/speed.xml?random="
                        )
                        .concat(Math.random())
                    ),
                    r.send();
                }
              });
            },
          },
          {
            key: "getNetworkType",
            value: function () {
              return this._networkType;
            },
          },
          {
            key: "reset",
            value: function () {
              this._networkType = "";
            },
          },
        ]),
        e
      );
    })(),
    Ru = (function () {
      function e(t) {
        var n = this;
        r(this, e),
          re(t)
            ? ((this._map = new Map()),
              t.forEach(function (e) {
                n._map.set(e, []);
              }))
            : J.warn("AverageCalculator.constructor need keys");
      }
      return (
        i(e, [
          {
            key: "push",
            value: function (e, t) {
              return (
                !(oe(e) || !this._map.has(e) || !Z(t)) &&
                (this._map.get(e).push(t), !0)
              );
            },
          },
          {
            key: "getSize",
            value: function (e) {
              return oe(e) || !this._map.has(e) ? -1 : this._map.get(e).length;
            },
          },
          {
            key: "getAvg",
            value: function (e) {
              if (oe(e) || !this._map.has(e)) return -1;
              var t = this._map.get(e),
                n = t.length;
              if (0 === n) return 0;
              var r = 0;
              return (
                t.forEach(function (e) {
                  r += e;
                }),
                (t.length = 0),
                this._map.set(e, []),
                parseInt(r / n)
              );
            },
          },
          {
            key: "getMax",
            value: function (e) {
              return oe(e) || !this._map.has(e)
                ? -1
                : Math.max.apply(null, this._map.get(e));
            },
          },
          {
            key: "getMin",
            value: function (e) {
              return oe(e) || !this._map.has(e)
                ? -1
                : Math.min.apply(null, this._map.get(e));
            },
          },
          {
            key: "reset",
            value: function () {
              this._map.forEach(function (e) {
                e.length = 0;
              });
            },
          },
        ]),
        e
      );
    })(),
    Ou = (function () {
      function e(t) {
        var n = this;
        r(this, e),
          re(t)
            ? ((this._map = new Map()),
              t.forEach(function (e) {
                n._map.set(e, { totalCount: 0, successCount: 0 });
              }))
            : J.warn("SuccessRateCalculator.constructor need keys");
      }
      return (
        i(e, [
          {
            key: "addTotalCount",
            value: function (e) {
              return (
                !(oe(e) || !this._map.has(e)) &&
                ((this._map.get(e).totalCount += 1), !0)
              );
            },
          },
          {
            key: "addSuccessCount",
            value: function (e) {
              return (
                !(oe(e) || !this._map.has(e)) &&
                ((this._map.get(e).successCount += 1), !0)
              );
            },
          },
          {
            key: "getSuccessRate",
            value: function (e) {
              if (oe(e) || !this._map.has(e)) return -1;
              var t = this._map.get(e);
              if (0 === t.totalCount) return 1;
              var n = parseFloat((t.successCount / t.totalCount).toFixed(2));
              return n > 1 && (n = 1), (t.totalCount = t.successCount = 0), n;
            },
          },
          {
            key: "getTotalCount",
            value: function (e) {
              return oe(e) || !this._map.has(e)
                ? -1
                : this._map.get(e).totalCount;
            },
          },
          {
            key: "reset",
            value: function () {
              this._map.forEach(function (e) {
                (e.totalCount = 0), (e.successCount = 0);
              });
            },
          },
        ]),
        e
      );
    })(),
    Nu = (function (e) {
      c(n, e);
      var t = y(n);
      function n(e) {
        var o;
        return (
          r(this, n),
          ((o = t.call(this, e)).TABLE = "timwebsum"),
          (o.TAG = "im-ssolog-sumstat"),
          (o._items = [Vr, jr, Yr, $r, Wr, zr, Xr, Jr, Qr, Zr]),
          (o._thresholdMap = new Map()),
          o._thresholdMap.set(Vr, 100),
          o._thresholdMap.set(jr, 150),
          o._thresholdMap.set(Yr, 15),
          o._thresholdMap.set($r, 6),
          o._thresholdMap.set(Wr, 6),
          o._thresholdMap.set(zr, 6),
          o._thresholdMap.set(Xr, 6),
          o._thresholdMap.set(Jr, 6),
          o._thresholdMap.set(Qr, 50),
          o._thresholdMap.set(Zr, 50),
          (o._lpID = ""),
          (o._platform = o.getPlatform()),
          (o._lastReportTime = 0),
          (o._statInfoArr = []),
          (o._retryCount = 0),
          (o._avgCalc = new Ru(o._items)),
          (o._successRateCalc = new Ou(o._items)),
          o.tim.innerEmitter.on(mr, o._onLoginSuccess, g(o)),
          o
        );
      }
      return (
        i(n, [
          {
            key: "_onLoginSuccess",
            value: function () {
              var e = this,
                t = this.tim.storage,
                n = t.getItem(this.TAG, !1);
              Oe(n) ||
                (J.log(
                  "SumStatController._onLoginSuccess get sumstatlog in storage, nums=" +
                    n.length
                ),
                n.forEach(function (t) {
                  e._statInfoArr.pushIn(t);
                }),
                t.removeItem(this.TAG, !1));
            },
          },
          {
            key: "recordLongPollingID",
            value: function (e) {
              this._lpID = e;
            },
          },
          {
            key: "addTotalCount",
            value: function (e) {
              this._successRateCalc.addTotalCount(e)
                ? 1 === this._successRateCalc.getTotalCount(e) &&
                  (this._lastReportTime = Date.now())
                : J.warn("SumStatController.addTotalCount invalid key:", e);
            },
          },
          {
            key: "addSuccessCount",
            value: function (e) {
              this._successRateCalc.addSuccessCount(e) ||
                J.warn("SumStatController.addSuccessCount invalid key:", e);
            },
          },
          {
            key: "addCost",
            value: function (e, t) {
              this._avgCalc.push(e, t)
                ? (J.debug(
                    "SumStatController.addCost",
                    e,
                    t,
                    this._avgCalc.getSize(e)
                  ),
                  this._avgCalc.getSize(e) >= this._thresholdMap.get(e) &&
                    this._report(e))
                : J.warn(
                    "SumStatController.addCost invalid key or cost:",
                    e,
                    t
                  );
            },
          },
          {
            key: "_getItemNum",
            value: function (e) {
              switch (e) {
                case Vr:
                  return 1;
                case jr:
                  return 2;
                case Yr:
                  return 3;
                case Qr:
                  return 4;
                case Zr:
                  return 5;
                case $r:
                  return 6;
                case Wr:
                  return 7;
                case zr:
                  return 8;
                case Xr:
                  return 9;
                case Jr:
                  return 10;
                default:
                  return 100;
              }
            },
          },
          {
            key: "_getStatInfo",
            value: function (e) {
              var t = null;
              return (
                this._avgCalc.getSize(e) > 0 &&
                  (t = {
                    SDKAppID: "".concat(this.tim.context.SDKAppID),
                    version: "".concat("2.7.6"),
                    tinyID: this.tim.context.tinyID,
                    userID: this.tim.loginInfo.identifier,
                    item: this._getItemNum(e),
                    lpID: e === Vr ? this._lpID : "",
                    platform: this._platform,
                    scene: this.tim.context.scene,
                    networkType: this.getNetworkType(),
                    total: this._successRateCalc.getTotalCount(e),
                    successRate: this._successRateCalc.getSuccessRate(e),
                    avg: this._avgCalc.getAvg(e),
                    timespan: Date.now() - this._lastReportTime,
                    time: fe(),
                  }),
                t
              );
            },
          },
          {
            key: "_report",
            value: function (e) {
              var t = this,
                n = [],
                r = null;
              oe(e)
                ? this._items.forEach(function (e) {
                    null !== (r = t._getStatInfo(e)) && n.push(r);
                  })
                : null !== (r = this._getStatInfo(e)) && n.push(r),
                J.debug("SumStatController._report", n),
                this._statInfoArr.length > 0 &&
                  ((n = n.concat(this.statInfoArr)), (this._statInfoArr = [])),
                this._doReport(n);
            },
          },
          {
            key: "_doReport",
            value: function (e) {
              var t = this;
              Oe(e)
                ? J.warn(
                    "SumStatController._doReport statInfoArr is empty, do nothing"
                  )
                : this.request({
                    name: "ssoSumStat",
                    action: "create",
                    param: { table: this.TABLE, report: e },
                  })
                    .then(function () {
                      (t._lastReportTime = Date.now()),
                        t._retryCount > 0 &&
                          (J.debug("SumStatController._doReport retry success"),
                          (t._retryCount = 0));
                    })
                    .catch(function (n) {
                      J.warn(
                        "SumStatController._doReport, online:"
                          .concat(t.getNetworkType(), " error:")
                          .concat(de(n)),
                        e
                      ),
                        t._retryCount <= 1
                          ? setTimeout(function () {
                              J.info("SumStatController._doReport retry", e),
                                (t._retryCount += 1),
                                t._doReport(e);
                            }, 5e3)
                          : ((t._retryCount = 0),
                            (t._statInfoArr = t._statInfoArr.concat(e)),
                            t._flusgAtOnce());
                    });
            },
          },
          {
            key: "_flushAtOnce",
            value: function () {
              var e = this.tim.storage,
                t = e.getItem(this.TAG, !1),
                n = this._statInfoArr;
              if (Oe(t))
                J.log("SumStatController._flushAtOnce nums=" + n.length),
                  e.setItem(this.TAG, n, !0, !1);
              else {
                var r = n.concat(t);
                r.length > 10 && (r = r.slice(0, 10)),
                  J.log("SumStatController._flushAtOnce nums=" + r.length),
                  e.setItem(this.TAG, r, !0, !1);
              }
              this._statInfoArr = [];
            },
          },
          {
            key: "reset",
            value: function () {
              J.info("SumStatController.reset"),
                this._report(),
                this._avgCalc.reset(),
                this._successRateCalc.reset();
            },
          },
        ]),
        n
      );
    })(Pr),
    wu = (function () {
      function e() {
        r(this, e), (this._funcMap = new Map());
      }
      return (
        i(e, [
          {
            key: "defense",
            value: function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : void 0;
              if ("string" != typeof e) return null;
              if (0 === e.length) return null;
              if ("function" != typeof t) return null;
              if (this._funcMap.has(e) && this._funcMap.get(e).has(t))
                return this._funcMap.get(e).get(t);
              this._funcMap.has(e) || this._funcMap.set(e, new Map());
              var r = null;
              return (
                this._funcMap.get(e).has(t)
                  ? (r = this._funcMap.get(e).get(t))
                  : ((r = this._pack(e, t, n)), this._funcMap.get(e).set(t, r)),
                r
              );
            },
          },
          {
            key: "defenseOnce",
            value: function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : void 0;
              return "function" != typeof t ? null : this._pack(e, t, n);
            },
          },
          {
            key: "find",
            value: function (e, t) {
              return "string" != typeof e ||
                0 === e.length ||
                "function" != typeof t
                ? null
                : this._funcMap.has(e)
                ? this._funcMap.get(e).has(t)
                  ? this._funcMap.get(e).get(t)
                  : (J.log(
                      "SafetyCallback.find: 找不到 func —— "
                        .concat(e, "/")
                        .concat("" !== t.name ? t.name : "[anonymous]")
                    ),
                    null)
                : (J.log(
                    "SafetyCallback.find: 找不到 eventName-".concat(
                      e,
                      " 对应的 func"
                    )
                  ),
                  null);
            },
          },
          {
            key: "delete",
            value: function (e, t) {
              return (
                "function" == typeof t &&
                !!this._funcMap.has(e) &&
                !!this._funcMap.get(e).has(t) &&
                (this._funcMap.get(e).delete(t),
                0 === this._funcMap.get(e).size && this._funcMap.delete(e),
                !0)
              );
            },
          },
          {
            key: "_pack",
            value: function (e, t, n) {
              return function () {
                try {
                  t.apply(n, Array.from(arguments));
                } catch (o) {
                  var r = new ro();
                  r.setMethod(ai).setText("eventName=".concat(e)).setStart(),
                    r.setCode(0).setMessage(o.message).setEnd();
                }
              };
            },
          },
        ]),
        e
      );
    })(),
    Lu = (function (e) {
      c(n, e);
      var t = y(n);
      function n(e) {
        var o;
        return (
          r(this, n),
          ((o = t.call(this, e))._maybeLostSequencesMap = new Map()),
          o
        );
      }
      return (
        i(n, [
          {
            key: "onMessageMaybeLost",
            value: function (e, t, n) {
              this._maybeLostSequencesMap.has(e) ||
                this._maybeLostSequencesMap.set(e, []);
              for (
                var r = this._maybeLostSequencesMap.get(e), o = 0;
                o < n;
                o++
              )
                r.push(t + o);
              J.debug(
                "MessageLossController.onMessageMaybeLost. maybeLostSequences:".concat(
                  r
                )
              );
            },
          },
          {
            key: "detectMessageLoss",
            value: function (e, t) {
              var n = this._maybeLostSequencesMap.get(e);
              if (!Oe(n) && !Oe(t)) {
                var r = t.filter(function (e) {
                  return -1 !== n.indexOf(e);
                });
                if (
                  (J.debug(
                    "MessageLossController.detectMessageLoss. matchedSequences:".concat(
                      r
                    )
                  ),
                  n.length === r.length)
                )
                  J.info(
                    "MessageLossController.detectMessageLoss no message loss. conversationID=".concat(
                      e
                    )
                  );
                else {
                  var o,
                    i = n.filter(function (e) {
                      return -1 === r.indexOf(e);
                    }),
                    s = i.length;
                  s <= 5
                    ? (o = e + "-" + i.join("-"))
                    : (i.sort(function (e, t) {
                        return e - t;
                      }),
                      (o =
                        e +
                        " start:" +
                        i[0] +
                        " end:" +
                        i[s - 1] +
                        " count:" +
                        s));
                  var a = new ro();
                  a.setMethod(Zo).setStart(),
                    a
                      .setCode(0)
                      .setText(o)
                      .setNetworkType(this.getNetworkType())
                      .setEnd(),
                    J.warn(
                      "MessageLossController.detectMessageLoss message loss detected. conversationID:"
                        .concat(e, " lostSequences:")
                        .concat(i)
                    );
                }
                n.length = 0;
              }
            },
          },
          {
            key: "reset",
            value: function () {
              J.log("MessageLossController.reset"),
                this._maybeLostSequencesMap.clear();
            },
          },
        ]),
        n
      );
    })(Pr),
    Pu = (function () {
      function t(e) {
        r(this, t);
        var n = new ro();
        n.setMethod(oo).setStart(),
          Lr.mixin(this),
          this._initOptions(e),
          this._initMemberVariables(),
          this._initControllers(),
          this._initListener(),
          ro.bindController(this.eventStatController),
          n.setCode(0).setText("mp=".concat(N, "-ua=").concat(w)).setEnd(),
          J.info(
            "SDK inWxMiniApp:"
              .concat(N, ", SDKAppID:")
              .concat(e.SDKAppID, ", UserAgent:")
              .concat(w)
          ),
          (this._safetyCallbackFactory = new wu());
      }
      return (
        i(t, [
          {
            key: "login",
            value: function (e) {
              return (
                J.time(Kr),
                (this._ssoLog = new ro()),
                this._ssoLog.setMethod(io).setStart(),
                this.netMonitor.start(),
                (this.loginInfo.identifier = e.identifier || e.userID),
                (this.loginInfo.userSig = e.userSig),
                this.signController.login(this.loginInfo)
              );
            },
          },
          {
            key: "logout",
            value: function () {
              var e = this.signController.logout();
              return this.resetSDK(), e;
            },
          },
          {
            key: "on",
            value: function (t, n, r) {
              t === e.GROUP_SYSTEM_NOTICE_RECEIVED &&
                J.warn(
                  "！！！TIM.EVENT.GROUP_SYSTEM_NOTICE_RECEIVED v2.6.0起弃用，为了更好的体验，请在 TIM.EVENT.MESSAGE_RECEIVED 事件回调内接收处理群系统通知，详细请参考：https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/Message.html#.GroupSystemNoticePayload"
                ),
                J.debug("on", "eventName:".concat(t)),
                this.outerEmitter.on(
                  t,
                  this._safetyCallbackFactory.defense(t, n, r),
                  r
                );
            },
          },
          {
            key: "once",
            value: function (e, t, n) {
              J.debug("once", "eventName:".concat(e)),
                this.outerEmitter.once(
                  e,
                  this._safetyCallbackFactory.defenseOnce(e, t, n),
                  n || this
                );
            },
          },
          {
            key: "off",
            value: function (e, t, n, r) {
              J.debug("off", "eventName:".concat(e));
              var o = this._safetyCallbackFactory.find(e, t);
              null !== o &&
                (this.outerEmitter.off(e, o, n, r),
                this._safetyCallbackFactory.delete(e, t));
            },
          },
          {
            key: "registerPlugin",
            value: function (e) {
              var t = this;
              this.plugins || (this.plugins = {}),
                Object.keys(e).forEach(function (n) {
                  t.plugins[n] = e[n];
                });
              var n = new ro();
              n.setMethod(lo).setStart(),
                n
                  .setCode(0)
                  .setText("key=".concat(Object.keys(e)))
                  .setEnd();
            },
          },
          {
            key: "getPlugin",
            value: function (e) {
              return this.plugins[e] || void 0;
            },
          },
          {
            key: "setLogLevel",
            value: function (e) {
              if (e <= 0) {
                console.log(
                  [
                    "",
                    " ________  ______  __       __  __       __  ________  _______",
                    "|        \\|      \\|  \\     /  \\|  \\  _  |  \\|        \\|       \\",
                    " \\$$$$$$$$ \\$$$$$$| $$\\   /  $$| $$ / \\ | $$| $$$$$$$$| $$$$$$$\\",
                    "   | $$     | $$  | $$$\\ /  $$$| $$/  $\\| $$| $$__    | $$__/ $$",
                    "   | $$     | $$  | $$$$\\  $$$$| $$  $$$\\ $$| $$  \\   | $$    $$",
                    "   | $$     | $$  | $$\\$$ $$ $$| $$ $$\\$$\\$$| $$$$$   | $$$$$$$\\",
                    "   | $$    _| $$_ | $$ \\$$$| $$| $$$$  \\$$$$| $$_____ | $$__/ $$",
                    "   | $$   |   $$ \\| $$  \\$ | $$| $$$    \\$$$| $$     \\| $$    $$",
                    "    \\$$    \\$$$$$$ \\$$      \\$$ \\$$      \\$$ \\$$$$$$$$ \\$$$$$$$",
                    "",
                    "",
                  ].join("\n")
                ),
                  console.log(
                    "%cIM 智能客服，随时随地解决您的问题 →_→ https://cloud.tencent.com/act/event/smarty-service?from=im-doc",
                    "color:#ff0000"
                  );
                console.log(
                  [
                    "",
                    "参考以下文档，会更快解决问题哦！(#^.^#)\n",
                    "SDK 更新日志: https://cloud.tencent.com/document/product/269/38492\n",
                    "SDK 接口文档: https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html\n",
                    "常见问题: https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/tutorial-01-faq.html\n",
                    "反馈问题？戳我提 issue: https://github.com/tencentyun/TIMSDK/issues\n",
                    "如果您需要在生产环境关闭上面的日志，请 tim.setLogLevel(1)\n",
                  ].join("\n")
                );
              }
              J.setLevel(e);
            },
          },
          {
            key: "downloadLog",
            value: function () {
              var e = document.createElement("a"),
                t = new Date(),
                n = new Blob(this.getLog());
              (e.download =
                "TIM-" +
                t.getFullYear() +
                "-" +
                (t.getMonth() + 1) +
                "-" +
                t.getDate() +
                "-" +
                this.loginInfo.SDKAppID +
                "-" +
                this.context.identifier +
                ".txt"),
                (e.href = URL.createObjectURL(n)),
                e.click(),
                URL.revokeObjectURL(n);
            },
          },
          {
            key: "destroy",
            value: function () {
              this.logout(),
                this.outerEmitter.emit(e.SDK_DESTROY, {
                  SDKAppID: this.loginInfo.SDKAppID,
                });
            },
          },
          {
            key: "createTextMessage",
            value: function (e) {
              return this.messageController.createTextMessage(e);
            },
          },
          {
            key: "createImageMessage",
            value: function (e) {
              return this.messageController.createImageMessage(e);
            },
          },
          {
            key: "createAudioMessage",
            value: function (e) {
              return this.messageController.createAudioMessage(e);
            },
          },
          {
            key: "createVideoMessage",
            value: function (e) {
              return this.messageController.createVideoMessage(e);
            },
          },
          {
            key: "createCustomMessage",
            value: function (e) {
              return this.messageController.createCustomMessage(e);
            },
          },
          {
            key: "createFaceMessage",
            value: function (e) {
              return this.messageController.createFaceMessage(e);
            },
          },
          {
            key: "createFileMessage",
            value: function (e) {
              return this.messageController.createFileMessage(e);
            },
          },
          {
            key: "sendMessage",
            value: function (e, t) {
              return e instanceof Dn
                ? this.messageController.sendMessageInstance(e, t)
                : Hr(
                    new ht({
                      code: dt.MESSAGE_SEND_NEED_MESSAGE_INSTANCE,
                      message: Et,
                    })
                  );
            },
          },
          {
            key: "revokeMessage",
            value: function (e) {
              return this.messageController.revokeMessage(e);
            },
          },
          {
            key: "resendMessage",
            value: function (e) {
              return this.messageController.resendMessage(e);
            },
          },
          {
            key: "getMessageList",
            value: function (e) {
              return this.messageController.getMessageList(e);
            },
          },
          {
            key: "setMessageRead",
            value: function (e) {
              return this.messageController.setMessageRead(e);
            },
          },
          {
            key: "getConversationList",
            value: function () {
              return this.conversationController.getConversationList();
            },
          },
          {
            key: "getConversationProfile",
            value: function (e) {
              return this.conversationController.getConversationProfile(e);
            },
          },
          {
            key: "deleteConversation",
            value: function (e) {
              return this.conversationController.deleteConversation(e);
            },
          },
          {
            key: "getMyProfile",
            value: function () {
              return this.userController.getMyProfile();
            },
          },
          {
            key: "getUserProfile",
            value: function (e) {
              return this.userController.getUserProfile(e);
            },
          },
          {
            key: "updateMyProfile",
            value: function (e) {
              return this.userController.updateMyProfile(e);
            },
          },
          {
            key: "getFriendList",
            value: function () {
              return this.userController.getFriendList();
            },
          },
          {
            key: "deleteFriend",
            value: function (e) {
              return this.userController.deleteFriend(e);
            },
          },
          {
            key: "getBlacklist",
            value: function () {
              return this.userController.getBlacklist();
            },
          },
          {
            key: "addToBlacklist",
            value: function (e) {
              return this.userController.addBlacklist(e);
            },
          },
          {
            key: "removeFromBlacklist",
            value: function (e) {
              return this.userController.deleteBlacklist(e);
            },
          },
          {
            key: "getGroupList",
            value: function (e) {
              return this.groupController.getGroupList(e);
            },
          },
          {
            key: "getGroupProfile",
            value: function (e) {
              return this.groupController.getGroupProfile(e);
            },
          },
          {
            key: "createGroup",
            value: function (e) {
              return this.groupController.createGroup(e);
            },
          },
          {
            key: "dismissGroup",
            value: function (e) {
              return this.groupController.dismissGroup(e);
            },
          },
          {
            key: "updateGroupProfile",
            value: function (e) {
              return this.groupController.updateGroupProfile(e);
            },
          },
          {
            key: "joinGroup",
            value: function (e) {
              return this.groupController.joinGroup(e);
            },
          },
          {
            key: "quitGroup",
            value: function (e) {
              return this.groupController.quitGroup(e);
            },
          },
          {
            key: "searchGroupByID",
            value: function (e) {
              return this.groupController.searchGroupByID(e);
            },
          },
          {
            key: "changeGroupOwner",
            value: function (e) {
              return this.groupController.changeGroupOwner(e);
            },
          },
          {
            key: "handleGroupApplication",
            value: function (e) {
              return this.groupController.handleGroupApplication(e);
            },
          },
          {
            key: "setMessageRemindType",
            value: function (e) {
              return this.groupController.setMessageRemindType(e);
            },
          },
          {
            key: "getGroupMemberList",
            value: function (e) {
              return this.groupController.getGroupMemberList(e);
            },
          },
          {
            key: "getGroupMemberProfile",
            value: function (e) {
              return this.groupController.getGroupMemberProfile(e);
            },
          },
          {
            key: "addGroupMember",
            value: function (e) {
              return this.groupController.addGroupMember(e);
            },
          },
          {
            key: "deleteGroupMember",
            value: function (e) {
              return this.groupController.deleteGroupMember(e);
            },
          },
          {
            key: "setGroupMemberMuteTime",
            value: function (e) {
              return this.groupController.setGroupMemberMuteTime(e);
            },
          },
          {
            key: "setGroupMemberRole",
            value: function (e) {
              return this.groupController.setGroupMemberRole(e);
            },
          },
          {
            key: "setGroupMemberNameCard",
            value: function (e) {
              return this.groupController.setGroupMemberNameCard(e);
            },
          },
          {
            key: "setGroupMemberCustomField",
            value: function (e) {
              return this.groupController.setGroupMemberCustomField(e);
            },
          },
          {
            key: "_initOptions",
            value: function (e) {
              this.plugins = {};
              var t = e.SDKAppID || 0,
                n = me();
              (this.context = { SDKAppID: t, accountType: n }),
                (this.loginInfo = {
                  SDKAppID: t,
                  accountType: n,
                  identifier: null,
                  userSig: null,
                  unlimitedAVChatRoom: e.unlimitedAVChatRoom || !1,
                  scene: e.scene || "",
                }),
                (this.options = {
                  runLoopNetType: e.runLoopNetType || Je,
                  enablePointer: e.enablePointer || !1,
                });
            },
          },
          {
            key: "_initMemberVariables",
            value: function () {
              (this.innerEmitter = new ru()),
                (this.outerEmitter = new ru()),
                xr(this.outerEmitter),
                (this.packageConfig = new iu(this)),
                (this.storage = new nu(this)),
                (this.netMonitor = new Au()),
                (this.outerEmitter._emit = this.outerEmitter.emit),
                (this.outerEmitter.emit = function (e, t) {
                  var n = arguments[0],
                    r = [n, { name: arguments[0], data: arguments[1] }];
                  this.outerEmitter._emit.apply(this.outerEmitter, r);
                }.bind(this)),
                (this.innerEmitter._emit = this.innerEmitter.emit),
                (this.innerEmitter.emit = function (e, t) {
                  var n;
                  ne(arguments[1]) && arguments[1].data
                    ? (J.warn(
                        "inner eventData has data property, please check!"
                      ),
                      (n = [
                        e,
                        { name: arguments[0], data: arguments[1].data },
                      ]))
                    : (n = [e, { name: arguments[0], data: arguments[1] }]),
                    this.innerEmitter._emit.apply(this.innerEmitter, n);
                }.bind(this));
            },
          },
          {
            key: "_initControllers",
            value: function () {
              (this.exceptionController = new Ta(this)),
                (this.connectionController = new Sa(this)),
                (this.contextController = new br(this)),
                (this.context = this.contextController.getContext()),
                (this.signController = new ci(this)),
                (this.messageController = new $a(this)),
                (this.conversationController = new Fa(this)),
                (this.userController = new Pa(this)),
                (this.groupController = new Za(this)),
                (this.notificationController = new cu(this)),
                (this.bigDataHallwayController = new pu(this)),
                (this.statusController = new eu(this)),
                (this.uploadController = new lu(this)),
                (this.messageLossController = new Lu(this)),
                (this.eventStatController = new Tu(this)),
                (this.sumStatController = new Nu(this)),
                (this.mtaReportController = new Eu(this)),
                this._initReadyListener();
            },
          },
          {
            key: "_initListener",
            value: function () {
              var e = this;
              if (
                (this.innerEmitter.on(er, this._onSlowStart, this),
                N &&
                  "function" == typeof wx.onAppShow &&
                  "function" == typeof wx.onAppHide)
              ) {
                var t = null;
                wx.onAppHide(function () {
                  (t = new ro()).setMethod(si).setStart();
                }),
                  wx.onAppShow(function () {
                    null !== t &&
                      t
                        .setCode(0)
                        .setNetworkType(e.netMonitor.getNetworkType())
                        .setEnd();
                  });
              }
            },
          },
          {
            key: "_initReadyListener",
            value: function () {
              for (
                var e = this, t = this.readyList, n = 0, r = t.length;
                n < r;
                n++
              )
                this[t[n]].ready(function () {
                  return e._readyHandle();
                });
            },
          },
          {
            key: "_onSlowStart",
            value: function () {
              J.log("slow start longpolling..."),
                this.resetSDK(),
                this.login(this.loginInfo);
            },
          },
          {
            key: "resetSDK",
            value: function () {
              var t = this;
              this.initList.forEach(function (e) {
                t[e].reset && t[e].reset();
              }),
                this.netMonitor.reset(),
                this.storage.reset(),
                this.resetReady(),
                this._initReadyListener(),
                this.outerEmitter.emit(e.SDK_NOT_READY);
            },
          },
          {
            key: "_readyHandle",
            value: function () {
              for (
                var t = this.readyList, n = !0, r = 0, o = t.length;
                r < o;
                r++
              )
                if (!this[t[r]].isReady()) {
                  n = !1;
                  break;
                }
              if (n) {
                var i = J.timeEnd(Kr);
                J.warn("SDK is ready. cost=".concat(i, "ms")),
                  this.triggerReady(),
                  this.innerEmitter.emit(kr),
                  this.outerEmitter.emit(e.SDK_READY),
                  this._ssoLog
                    .setCode(0)
                    .setNetworkType(this.netMonitor.getNetworkType())
                    .setText(i)
                    .setEnd();
              }
            },
          },
        ]),
        t
      );
    })();
  (Pu.prototype.readyList = ["conversationController"]),
    (Pu.prototype.initList = [
      "exceptionController",
      "connectionController",
      "signController",
      "contextController",
      "messageController",
      "conversationController",
      "userController",
      "groupController",
      "notificationController",
      "eventStatController",
      "sumStatController",
      "messageLossController",
      "statusController",
    ]);
  var Gu = {
    login: "login",
    on: "on",
    off: "off",
    ready: "ready",
    setLogLevel: "setLogLevel",
    joinGroup: "joinGroup",
    quitGroup: "quitGroup",
    registerPlugin: "registerPlugin",
  };
  function bu(e, t) {
    return (
      !(!e.isReady() && void 0 === Gu[t]) ||
      (e.innerEmitter.emit(
        Ir,
        new ht({
          code: dt.SDK_IS_NOT_READY,
          message: ""
            .concat(t, " ")
            .concat(
              vn,
              "，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/module-EVENT.html#.SDK_READY"
            ),
        })
      ),
      !1)
    );
  }
  var Uu = {},
    qu = {};
  return (
    (qu.create = function (t) {
      if (t.SDKAppID && Uu[t.SDKAppID]) return Uu[t.SDKAppID];
      J.log("TIM.create");
      var n = new Pu(t);
      n.on(e.SDK_DESTROY, function (e) {
        (Uu[e.data.SDKAppID] = null), delete Uu[e.data.SDKAppID];
      });
      var r = (function (e) {
        var t = Object.create(null);
        return (
          Object.keys(Rn).forEach(function (n) {
            if (e[n]) {
              var r = Rn[n],
                o = new E();
              t[r] = function () {
                var t = Array.from(arguments);
                return (
                  o
                    .use(function (t, r) {
                      if (bu(e, n)) return r();
                    })
                    .use(function (e, t) {
                      if (!0 === Ne(e, An[n], r)) return t();
                    })
                    .use(function (t, r) {
                      return e[n].apply(e, t);
                    }),
                  o.run(t)
                );
              };
            }
          }),
          t
        );
      })(n);
      return (Uu[t.SDKAppID] = r), J.log("TIM.create ok"), r;
    }),
    (qu.TYPES = t),
    (qu.EVENT = e),
    (qu.VERSION = "2.7.6"),
    J.log("TIM.VERSION: ".concat(qu.VERSION)),
    qu
  );
});
