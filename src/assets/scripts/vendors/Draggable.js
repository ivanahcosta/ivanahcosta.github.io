/*!
 * Draggable 3.1.0
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  'use strict';
  function t(e, n) {
    if (
      e.parentNode &&
      (d ||
        (function _setDoc(t) {
          var e = t.ownerDocument || t;
          !(m in t.style) && 'msTransform' in t.style && (y = (m = 'msTransform') + 'Origin');
          for (; e.parentNode && (e = e.parentNode); );
          return (u = window), (x = new ht()), e && ((p = (d = e).documentElement), (h = e.body)), e;
        })(e))
    ) {
      var o = M(e),
        r = o ? o.getAttribute('xmlns') || 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
        i = o ? (n ? 'rect' : 'g') : 'div',
        a = 2 !== n ? 0 : 100,
        l = 3 === n ? 100 : 0,
        s = 'position:absolute;display:block;pointer-events:none;',
        c = d.createElementNS ? d.createElementNS(r.replace(/^https/, 'http'), i) : d.createElement(i);
      return (
        n &&
          (o
            ? ((f = f || t(e)),
              c.setAttribute('width', 1),
              c.setAttribute('height', 1),
              c.setAttribute('transform', 'translate(' + a + ',' + l + ')'),
              f.appendChild(c))
            : (g || ((g = t(e)).style.cssText = s), (c.style.cssText = s + 'width:1px;height:1px;top:' + l + 'px;left:' + a + 'px'), g.appendChild(c))),
        c
      );
    }
    throw 'Need document and parent.';
  }
  function v(t, e, n, o, r, i, a) {
    return (t.a = e), (t.b = n), (t.c = o), (t.d = r), (t.e = i), (t.f = a), t;
  }
  var d,
    u,
    p,
    h,
    g,
    f,
    x,
    n,
    m = 'transform',
    y = m + 'Origin',
    w = [],
    b = [],
    D = function _getDocScrollTop() {
      return u.pageYOffset || d.scrollTop || p.scrollTop || h.scrollTop || 0;
    },
    E = function _getDocScrollLeft() {
      return u.pageXOffset || d.scrollLeft || p.scrollLeft || h.scrollLeft || 0;
    },
    M = function _svgOwner(t) {
      return t.ownerSVGElement || ('svg' === (t.tagName + '').toLowerCase() ? t : null);
    },
    k = function _isFixed(t) {
      return 'fixed' === u.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? _isFixed(t) : void 0);
    },
    X = function _placeSiblings(e) {
      var n,
        o,
        r,
        i,
        a,
        l = M(e),
        s = e === l,
        c = l ? w : b;
      return e === u
        ? e
        : (c.length || c.push(t(e, 1), t(e, 2), t(e, 3)),
          (n = l ? f : g),
          l
            ? ((r = s ? { x: 0, y: 0 } : e.getBBox()),
              (a = (o = e.transform ? e.transform.baseVal : []).length
                ? ((i = (o = o.consolidate().matrix).a * r.x + o.c * r.y), o.b * r.x + o.d * r.y)
                : ((o = x), (i = r.x), r.y)),
              'g' === e.tagName.toLowerCase() && (i = a = 0),
              n.setAttribute('transform', 'matrix(' + o.a + ',' + o.b + ',' + o.c + ',' + o.d + ',' + (o.e + i) + ',' + (o.f + a) + ')'),
              (s ? l : e.parentNode).appendChild(n))
            : ((n.style.top = e.offsetTop + 'px'),
              (n.style.left = e.offsetLeft + 'px'),
              (o = u.getComputedStyle(e)),
              (n.style[m] = o[m]),
              (n.style[y] = o[y]),
              (n.style.position = 'fixed' === o.position ? 'fixed' : 'absolute'),
              e.parentNode.appendChild(n)),
          n);
    },
    ht =
      (((n = Matrix2D.prototype).inverse = function inverse() {
        var t = this.a,
          e = this.b,
          n = this.c,
          o = this.d,
          r = this.e,
          i = this.f,
          a = t * o - e * n;
        return v(this, o / a, -e / a, -n / a, t / a, (n * i - o * r) / a, -(t * i - e * r) / a);
      }),
      (n.multiply = function multiply(t) {
        var e = this.a,
          n = this.b,
          o = this.c,
          r = this.d,
          i = this.e,
          a = this.f,
          l = t.a,
          s = t.c,
          c = t.b,
          d = t.d,
          u = t.e,
          p = t.f;
        return v(this, l * e + c * o, l * n + c * r, s * e + d * o, s * n + d * r, i + u * e + p * o, a + u * n + p * r);
      }),
      (n.equals = function equals(t) {
        var e = this.a,
          n = this.b,
          o = this.c,
          r = this.d,
          i = this.e,
          a = this.f;
        return e === t.a && n === t.b && o === t.c && r === t.d && i === t.e && a === t.f;
      }),
      (n.apply = function apply(t, e) {
        void 0 === e && (e = {});
        var n = t.x,
          o = t.y,
          r = this.a,
          i = this.b,
          a = this.c,
          l = this.d,
          s = this.e,
          c = this.f;
        return (e.x = n * r + o * a + s), (e.y = n * i + o * l + c), e;
      }),
      Matrix2D);
  function Matrix2D(t, e, n, o, r, i) {
    void 0 === t && (t = 1),
      void 0 === e && (e = 0),
      void 0 === n && (n = 0),
      void 0 === o && (o = 1),
      void 0 === r && (r = 0),
      void 0 === i && (i = 0),
      v(this, t, e, n, o, r, i);
  }
  function getGlobalMatrix(t, e) {
    if (!t || !t.parentNode) return new ht();
    var n = M(t) ? w : b,
      o = X(t),
      r = n[0].getBoundingClientRect(),
      i = n[1].getBoundingClientRect(),
      a = n[2].getBoundingClientRect(),
      l = o.parentNode,
      s = k(t),
      c = new ht((i.left - r.left) / 100, (i.top - r.top) / 100, (a.left - r.left) / 100, (a.top - r.top) / 100, r.left + (s ? 0 : E()), r.top + (s ? 0 : D()));
    return l.removeChild(o), e ? c.inverse() : c;
  }
  function Q() {
    return 'undefined' != typeof window;
  }
  function R() {
    return gt || (Q() && (gt = window.gsap) && gt.registerPlugin && gt);
  }
  function S(t) {
    return 'function' == typeof t;
  }
  function T(t) {
    return 'object' == typeof t;
  }
  function U(t) {
    return void 0 === t;
  }
  function V() {
    return !1;
  }
  function Y(t) {
    return Math.round(1e4 * t) / 1e4;
  }
  function $(t, e) {
    var n = xt.createElementNS ? xt.createElementNS((e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), t) : xt.createElement(t);
    return n.style ? n : xt.createElement(t);
  }
  function ka(t, e) {
    var n,
      o = {};
    for (n in t) o[n] = e ? t[n] * e : t[n];
    return o;
  }
  function ma() {
    return i.forEach(function (t) {
      return t();
    });
  }
  function oa() {
    return !i.length && gt.ticker.remove(ma);
  }
  function pa(t) {
    for (var e = i.length; e--; ) i[e] === t && i.splice(e, 1);
    gt.to(oa, { overwrite: !0, delay: 15, duration: 0, onComplete: oa, data: '_draggable' });
  }
  function ra(t, e, n, o) {
    if (t.addEventListener) {
      var r = bt[e];
      (o = o || (L ? { passive: !1 } : null)), t.addEventListener(r || e, n, o), r && e !== r && 'pointer' !== r.substr(0, 7) && t.addEventListener(e, n, o);
    }
  }
  function sa(t, e, n) {
    if (t.removeEventListener) {
      var o = bt[e];
      t.removeEventListener(o || e, n), o && e !== o && 'pointer' !== o.substr(0, 7) && t.removeEventListener(e, n);
    }
  }
  function ta(t) {
    t.preventDefault && (t.preventDefault(), t.preventManipulation && t.preventManipulation());
  }
  function va(t) {
    (Dt = t.touches && Tt < t.touches.length), sa(t.target, 'touchend', va);
  }
  function wa(t) {
    (Dt = t.touches && Tt < t.touches.length), ra(t.target, 'touchend', va);
  }
  function xa(t) {
    return ft.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0;
  }
  function ya(t) {
    return ft.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0;
  }
  function za(t, e) {
    ra(t, 'scroll', e), At(t.parentNode) || za(t.parentNode, e);
  }
  function Aa(t, e) {
    sa(t, 'scroll', e), At(t.parentNode) || Aa(t.parentNode, e);
  }
  function Ca(t, e) {
    var n = 'x' === e ? 'Width' : 'Height',
      o = 'scroll' + n,
      r = 'client' + n;
    return Math.max(0, At(t) ? Math.max(mt[o], a[o]) - (ft['inner' + n] || mt[r] || a[r]) : t[o] - t[r]);
  }
  function Da(t) {
    var e = Ca(t, 'x'),
      n = Ca(t, 'y');
    At(t) ? (t = Ot) : Da(t.parentNode), (t._gsMaxScrollX = e), (t._gsMaxScrollY = n), (t._gsScrollX = t.scrollLeft || 0), (t._gsScrollY = t.scrollTop || 0);
  }
  function Ea(t, e, n) {
    var o = t.style;
    o && (U(o[e]) && (e = c(e, t) || e), null == n ? o.removeProperty && o.removeProperty(e.replace(/([A-Z])/g, '-$1').toLowerCase()) : (o[e] = n));
  }
  function Fa(t) {
    return ft.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t);
  }
  function Ha(t) {
    if (t === ft)
      return (
        (I.left = I.top = 0),
        (I.width = I.right = mt.clientWidth || t.innerWidth || a.clientWidth || 0),
        (I.height = I.bottom = (t.innerHeight || 0) - 20 < mt.clientHeight ? mt.clientHeight : t.innerHeight || a.clientHeight || 0),
        I
      );
    var e = t.ownerDocument || xt,
      n = U(t.pageX)
        ? t.nodeType || U(t.left) || U(t.top)
          ? yt(t)[0].getBoundingClientRect()
          : t
        : { left: t.pageX - ya(e), top: t.pageY - xa(e), right: t.pageX - ya(e) + 1, bottom: t.pageY - xa(e) + 1 };
    return (
      U(n.right) && !U(n.width)
        ? ((n.right = n.left + n.width), (n.bottom = n.top + n.height))
        : U(n.width) && (n = { width: n.right - n.left, height: n.bottom - n.top, right: n.right, left: n.left, bottom: n.bottom, top: n.top }),
      n
    );
  }
  function Ia(t, e, n) {
    var o,
      r = t.vars,
      i = r[n],
      a = t._listeners[e];
    return S(i) && (o = i.apply(r.callbackScope || t, r[n + 'Params'] || [t.pointerEvent])), a && !1 === t.dispatchEvent(e) && (o = !1), o;
  }
  function Ja(t, e) {
    var n,
      o,
      r,
      i = yt(t)[0];
    return i.nodeType || i === ft
      ? O(i, e)
      : U(t.left)
      ? {
          left: (o = t.min || t.minX || t.minRotation || 0),
          top: (n = t.min || t.minY || 0),
          width: (t.max || t.maxX || t.maxRotation || 0) - o,
          height: (t.max || t.maxY || 0) - n,
        }
      : ((r = { x: 0, y: 0 }), { left: t.left - r.x, top: t.top - r.y, width: t.width, height: t.height });
  }
  function Ma(r, i, t, e, a, n) {
    var o,
      l,
      s,
      c = {};
    if (i)
      if (1 !== a && i instanceof Array) {
        if (((c.end = o = []), (s = i.length), T(i[0]))) for (l = 0; l < s; l++) o[l] = ka(i[l], a);
        else for (l = 0; l < s; l++) o[l] = i[l] * a;
        (t += 1.1), (e -= 1.1);
      } else
        S(i)
          ? (c.end = function (t) {
              var e,
                n,
                o = i.call(r, t);
              if (1 !== a)
                if (T(o)) {
                  for (n in ((e = {}), o)) e[n] = o[n] * a;
                  o = e;
                } else o *= a;
              return o;
            })
          : (c.end = i);
    return (!t && 0 !== t) || (c.max = t), (!e && 0 !== e) || (c.min = e), n && (c.velocity = 0), c;
  }
  function Na(t) {
    var e;
    return (
      !(!t || !t.getAttribute || t === a) &&
      (!(
        'true' !== (e = t.getAttribute('data-clickable')) &&
        ('false' === e || (!t.onclick && !P.test(t.nodeName + '') && 'true' !== t.getAttribute('contentEditable')))
      ) ||
        Na(t.parentNode))
    );
  }
  function Oa(t, e) {
    for (var n, o = t.length; o--; ) ((n = t[o]).ondragstart = n.onselectstart = e ? null : V), gt.set(n, { lazy: !0, userSelect: e ? 'text' : 'none' });
  }
  function Sa(i, r) {
    (i = gt.utils.toArray(i)[0]), (r = r || {});
    var a,
      l,
      s,
      t,
      c,
      d,
      u = document.createElement('div'),
      p = u.style,
      e = i.firstChild,
      h = 0,
      g = 0,
      f = i.scrollTop,
      x = i.scrollLeft,
      m = i.scrollWidth,
      v = i.scrollHeight,
      y = 0,
      w = 0,
      b = 0;
    _ && !1 !== r.force3D ? ((c = 'translate3d('), (d = 'px,0px)')) : C && ((c = 'translate('), (d = 'px)')),
      (this.scrollTop = function (t, e) {
        if (!arguments.length) return -this.top();
        this.top(-t, e);
      }),
      (this.scrollLeft = function (t, e) {
        if (!arguments.length) return -this.left();
        this.left(-t, e);
      }),
      (this.left = function (t, e) {
        if (!arguments.length) return -(i.scrollLeft + g);
        var n = i.scrollLeft - x,
          o = g;
        if ((2 < n || n < -2) && !e) return (x = i.scrollLeft), gt.killTweensOf(this, { left: 1, scrollLeft: 1 }), this.left(-x), void (r.onKill && r.onKill());
        (t = -t) < 0 ? ((g = (t - 0.5) | 0), (t = 0)) : w < t ? ((g = (t - w) | 0), (t = w)) : (g = 0),
          (g || o) && (this._skip || (p[C] = c + -g + 'px,' + -h + d), 0 <= g + y && (p.paddingRight = g + y + 'px')),
          (i.scrollLeft = 0 | t),
          (x = i.scrollLeft);
      }),
      (this.top = function (t, e) {
        if (!arguments.length) return -(i.scrollTop + h);
        var n = i.scrollTop - f,
          o = h;
        if ((2 < n || n < -2) && !e) return (f = i.scrollTop), gt.killTweensOf(this, { top: 1, scrollTop: 1 }), this.top(-f), void (r.onKill && r.onKill());
        (t = -t) < 0 ? ((h = (t - 0.5) | 0), (t = 0)) : b < t ? ((h = (t - b) | 0), (t = b)) : (h = 0),
          (h || o) && (this._skip || (p[C] = c + -g + 'px,' + -h + d)),
          (i.scrollTop = 0 | t),
          (f = i.scrollTop);
      }),
      (this.maxScrollTop = function () {
        return b;
      }),
      (this.maxScrollLeft = function () {
        return w;
      }),
      (this.disable = function () {
        for (e = u.firstChild; e; ) (t = e.nextSibling), i.appendChild(e), (e = t);
        i === u.parentNode && i.removeChild(u);
      }),
      (this.enable = function () {
        if ((e = i.firstChild) !== u) {
          for (; e; ) (t = e.nextSibling), u.appendChild(e), (e = t);
          i.appendChild(u), this.calibrate();
        }
      }),
      (this.calibrate = function (t) {
        var e,
          n,
          o,
          r = i.clientWidth === a;
        (f = i.scrollTop),
          (x = i.scrollLeft),
          (r && i.clientHeight === l && u.offsetHeight === s && m === i.scrollWidth && v === i.scrollHeight && !t) ||
            ((h || g) && ((n = this.left()), (o = this.top()), this.left(-i.scrollLeft), this.top(-i.scrollTop)),
            (e = Fa(i)),
            (r && !t) ||
              ((p.display = 'block'),
              (p.width = 'auto'),
              (p.paddingRight = '0px'),
              (y = Math.max(0, i.scrollWidth - i.clientWidth)) && (y += parseFloat(e.paddingLeft) + (N ? parseFloat(e.paddingRight) : 0))),
            (p.display = 'inline-block'),
            (p.position = 'relative'),
            (p.overflow = 'visible'),
            (p.verticalAlign = 'top'),
            (p.boxSizing = 'content-box'),
            (p.width = '100%'),
            (p.paddingRight = y + 'px'),
            N && (p.paddingBottom = e.paddingBottom),
            (a = i.clientWidth),
            (l = i.clientHeight),
            (m = i.scrollWidth),
            (v = i.scrollHeight),
            (w = i.scrollWidth - a),
            (b = i.scrollHeight - l),
            (s = u.offsetHeight),
            (p.display = 'block'),
            (n || o) && (this.left(n), this.top(o)));
      }),
      (this.content = u),
      (this.element = i),
      (this._skip = !1),
      this.enable();
  }
  function Ta(t) {
    var e, n, o, r, i;
    Q() &&
      document.body &&
      ((ft = window),
      (xt = document),
      (mt = xt.documentElement),
      (a = xt.body),
      (l = $('div')),
      (Yt = !!window.PointerEvent),
      ((vt = $('div')).style.cssText = 'visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab'),
      (St = 'grab' === vt.style.cursor ? 'grab' : 'move'),
      (Et = ft.navigator && -1 !== ft.navigator.userAgent.toLowerCase().indexOf('android')),
      (wt = 'ontouchstart' in mt && 'orientation' in ft),
      (n = $('div')),
      (o = $('div')),
      (r = o.style),
      (i = a),
      (r.display = 'inline-block'),
      (r.position = 'relative'),
      (n.style.cssText = o.innerHTML = 'width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden'),
      n.appendChild(o),
      i.appendChild(n),
      (e = o.offsetHeight + 18 > n.scrollHeight),
      i.removeChild(n),
      (N = e),
      (bt = (function (t) {
        for (
          var e = t.split(','),
            n = (
              U(l.onpointerdown)
                ? U(l.onmspointerdown)
                  ? t
                  : 'MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel'
                : 'pointerdown,pointermove,pointerup,pointercancel'
            ).split(','),
            o = {},
            r = 4;
          -1 < --r;

        )
          (o[e[r]] = n[r]), (o[n[r]] = e[r]);
        try {
          mt.addEventListener(
            'test',
            null,
            Object.defineProperty({}, 'passive', {
              get: function get() {
                L = 1;
              },
            }),
          );
        } catch (t) {}
        return o;
      })('touchstart,touchmove,touchend,touchcancel')),
      ra(xt, 'touchcancel', V),
      ra(ft, 'touchmove', V),
      a && a.addEventListener('touchstart', V),
      ra(xt, 'contextmenu', function () {
        for (var t in Ct) Ct[t].isPressed && Ct[t].endDrag();
      }),
      (gt = s = R())),
      gt
        ? ((Mt = gt.plugins.inertia), (c = gt.utils.checkPrefix), (C = c(C)), (kt = c(kt)), (yt = gt.utils.toArray), (_ = !!c('perspective')))
        : t && console.warn('Please gsap.registerPlugin(Draggable)');
  }
  var gt,
    ft,
    xt,
    mt,
    a,
    l,
    vt,
    s,
    c,
    yt,
    L,
    wt,
    bt,
    Tt,
    Dt,
    Et,
    Mt,
    St,
    Yt,
    _,
    N,
    o,
    C = 'transform',
    kt = 'transformOrigin',
    Xt = Array.isArray,
    Lt = 180 / Math.PI,
    _t = 1e20,
    r = new ht(),
    Nt =
      Date.now ||
      function () {
        return new Date().getTime();
      },
    i = [],
    Ct = {},
    Pt = 0,
    P = /^(?:a|input|textarea|button|select)$/i,
    Rt = 0,
    It = {},
    Ot = {},
    At = function _isRoot(t) {
      return !(t && t !== mt && 9 !== t.nodeType && t !== xt.body && t !== ft && t.nodeType && t.parentNode);
    },
    I = {},
    Bt = {},
    O = function _getElementBounds(t, e) {
      e = yt(e)[0];
      var n,
        o,
        r,
        i,
        a,
        l,
        s,
        c,
        d,
        u,
        p,
        h,
        g,
        f,
        x = t.getBBox && t.ownerSVGElement,
        m = t.ownerDocument || xt;
      if (t === ft)
        (r = xa(m)),
          (o = (n = ya(m)) + (m.documentElement.clientWidth || t.innerWidth || m.body.clientWidth || 0)),
          (i = r + ((t.innerHeight || 0) - 20 < m.documentElement.clientHeight ? m.documentElement.clientHeight : t.innerHeight || m.body.clientHeight || 0));
      else {
        if (e === ft || U(e)) return t.getBoundingClientRect();
        (n = r = 0),
          x
            ? ((p = (u = t.getBBox()).width), (h = u.height))
            : (t.viewBox && (u = t.viewBox.baseVal) && ((n = u.x || 0), (r = u.y || 0), (p = u.width), (h = u.height)),
              p ||
                ((g = Fa(t)),
                (p = (parseFloat(g.width) || t.clientWidth || 0) + parseFloat(g.borderLeftWidth) + parseFloat(g.borderRightWidth)),
                (h = (parseFloat(g.height) || t.clientHeight || 0) + parseFloat(g.borderTopWidth) + parseFloat(g.borderBottomWidth)))),
          (o = p),
          (i = h);
      }
      return t === e
        ? { left: n, top: r, width: o - n, height: i - r }
        : ((l = (a = getGlobalMatrix(e, !0).multiply(getGlobalMatrix(t))).apply({ x: n, y: r })),
          (s = a.apply({ x: o, y: r })),
          (c = a.apply({ x: o, y: i })),
          (d = a.apply({ x: n, y: i })),
          (n = Math.min(l.x, s.x, c.x, d.x)),
          (r = Math.min(l.y, s.y, c.y, d.y)),
          {
            left: n + ((f = e.parentNode || {}).scrollLeft || 0),
            top: r + (f.scrollTop || 0),
            width: Math.max(l.x, s.x, c.x, d.x) - n,
            height: Math.max(l.y, s.y, c.y, d.y) - r,
          });
    },
    A =
      (((o = EventDispatcher.prototype).addEventListener = function addEventListener(t, e) {
        var n = this._listeners[t] || (this._listeners[t] = []);
        ~n.indexOf(e) || n.push(e);
      }),
      (o.removeEventListener = function removeEventListener(t, e) {
        var n = this._listeners[t],
          o = (n && n.indexOf(e)) || -1;
        -1 < o && n.splice(o, 1);
      }),
      (o.dispatchEvent = function dispatchEvent(e) {
        var n,
          o = this;
        return (
          (this._listeners[e] || []).forEach(function (t) {
            return !1 === t.call(o, { type: e, target: o.target }) && (n = !1);
          }),
          n
        );
      }),
      EventDispatcher);
  function EventDispatcher(t) {
    (this._listeners = {}), (this.target = t || this);
  }
  var Ft,
    B =
      ((function _inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      })(Draggable, (Ft = A)),
      (Draggable.register = function register(t) {
        (gt = t), Ta();
      }),
      (Draggable.create = function create(t, e) {
        return (
          s || Ta(!0),
          yt(t).map(function (t) {
            return new Draggable(t, e);
          })
        );
      }),
      (Draggable.get = function get(t) {
        return Ct[(yt(t)[0] || {})._gsDragID];
      }),
      (Draggable.timeSinceDrag = function timeSinceDrag() {
        return (Nt() - Rt) / 1e3;
      }),
      (Draggable.hitTest = function hitTest(t, e, n) {
        if (t === e) return !1;
        var o,
          r,
          i,
          a = Ha(t),
          l = Ha(e),
          s = a.top,
          c = a.left,
          d = a.right,
          u = a.bottom,
          p = a.width,
          h = a.height,
          g = l.left > d || l.right < c || l.top > u || l.bottom < s;
        return g || !n
          ? !g
          : ((i = -1 !== (n + '').indexOf('%')),
            (n = parseFloat(n) || 0),
            ((o = { left: Math.max(c, l.left), top: Math.max(s, l.top) }).width = Math.min(d, l.right) - o.left),
            (o.height = Math.min(u, l.bottom) - o.top),
            !(o.width < 0 || o.height < 0) &&
              (i ? p * h * (n *= 0.01) <= (r = o.width * o.height) || r >= l.width * l.height * n : o.width > n && o.height > n));
      }),
      Draggable);
  function Draggable(h, u) {
    var t;
    (t = Ft.call(this) || this),
      gt || Ta(1),
      (h = yt(h)[0]),
      (Mt = Mt || gt.plugins.inertia),
      (t.vars = u = ka(u || {})),
      (t.target = h),
      (t.x = t.y = t.rotation = 0),
      (t.dragResistance = parseFloat(u.dragResistance) || 0),
      (t.edgeResistance = isNaN(u.edgeResistance) ? 1 : parseFloat(u.edgeResistance) || 0),
      (t.lockAxis = u.lockAxis),
      (t.autoScroll = u.autoScroll || 0),
      (t.lockedAxis = null),
      (t.allowEventDefault = !!u.allowEventDefault),
      gt.getProperty(h, 'x');
    function lg(t, e) {
      return parseFloat(at.get(h, t, e));
    }
    function Tg(t) {
      if (!(q.isPressed && t.which < 2)) return ta(t), t.stopPropagation(), !1;
      q.endDrag();
    }
    function Ug(t) {
      if (q.autoScroll && q.isDragging && (Z || C)) {
        var e,
          n,
          o,
          r,
          i,
          a,
          l,
          s,
          c = h,
          d = 15 * q.autoScroll;
        for (
          Z = !1,
            Ot.scrollTop = null != ft.pageYOffset ? ft.pageYOffset : null != st.documentElement.scrollTop ? st.documentElement.scrollTop : st.body.scrollTop,
            Ot.scrollLeft =
              null != ft.pageXOffset ? ft.pageXOffset : null != st.documentElement.scrollLeft ? st.documentElement.scrollLeft : st.body.scrollLeft,
            r = q.pointerX - Ot.scrollLeft,
            i = q.pointerY - Ot.scrollTop;
          c && !n;

        )
          (e = (n = At(c.parentNode)) ? Ot : c.parentNode),
            (o = n
              ? { bottom: Math.max(mt.clientHeight, ft.innerHeight || 0), right: Math.max(mt.clientWidth, ft.innerWidth || 0), left: 0, top: 0 }
              : e.getBoundingClientRect()),
            (a = l = 0),
            j &&
              ((s = e._gsMaxScrollY - e.scrollTop) < 0
                ? (l = s)
                : i > o.bottom - nt && s
                ? ((Z = !0), (l = Math.min(s, (d * (1 - Math.max(0, o.bottom - i) / nt)) | 0)))
                : i < o.top + tt && e.scrollTop && ((Z = !0), (l = -Math.min(e.scrollTop, (d * (1 - Math.max(0, i - o.top) / tt)) | 0))),
              l && (e.scrollTop += l)),
            $ &&
              ((s = e._gsMaxScrollX - e.scrollLeft) < 0
                ? (a = s)
                : r > o.right - et && s
                ? ((Z = !0), (a = Math.min(s, (d * (1 - Math.max(0, o.right - r) / et)) | 0)))
                : r < o.left + ot && e.scrollLeft && ((Z = !0), (a = -Math.min(e.scrollLeft, (d * (1 - Math.max(0, r - o.left) / ot)) | 0))),
              a && (e.scrollLeft += a)),
            n && (a || l) && (ft.scrollTo(e.scrollLeft, e.scrollTop), ut(q.pointerX + a, q.pointerY + l)),
            (c = e);
      }
      if (C) {
        var u = q.x,
          p = q.y;
        z
          ? ((q.deltaX = u - parseFloat(at.rotation)), (q.rotation = u), (at.rotation = u + 'deg'), at.renderTransform(1, at))
          : g
          ? (j && ((q.deltaY = p - g.top()), g.top(p)), $ && ((q.deltaX = u - g.left()), g.left(u)))
          : V
          ? (j && ((q.deltaY = p - parseFloat(at.y)), (at.y = p + 'px')),
            $ && ((q.deltaX = u - parseFloat(at.x)), (at.x = u + 'px')),
            at.renderTransform(1, at))
          : (j && ((q.deltaY = p - parseFloat(h.style.top || 0)), (h.style.top = p + 'px')),
            $ && ((q.deltaY = u - parseFloat(h.style.left || 0)), (h.style.left = u + 'px'))),
          !f || t || H || (!(H = !0) === Ia(q, 'drag', 'onDrag') && ($ && (q.x -= q.deltaX), j && (q.y -= q.deltaY), Ug(!0)), (H = !1));
      }
      C = !1;
    }
    function Vg(t, e) {
      var n,
        o,
        r = q.x,
        i = q.y;
      h._gsap || (at = gt.core.getCache(h)),
        V
          ? ((q.x = parseFloat(at.x)), (q.y = parseFloat(at.y)))
          : z
          ? (q.x = q.rotation = parseFloat(at.rotation))
          : g
          ? ((q.y = g.top()), (q.x = g.left()))
          : ((q.y = parseInt(h.style.top || ((o = Fa(h)) && o.top), 10) || 0), (q.x = parseInt(h.style.left || (o || {}).left, 10) || 0)),
        (P || R || I) &&
          !e &&
          (q.isDragging || q.isThrowing) &&
          (I && ((It.x = q.x), (It.y = q.y), (n = I(It)).x !== q.x && ((q.x = n.x), (C = !0)), n.y !== q.y && ((q.y = n.y), (C = !0))),
          P && (n = P(q.x)) !== q.x && ((q.x = n), z && (q.rotation = n), (C = !0)),
          R && ((n = R(q.y)) !== q.y && (q.y = n), (C = !0))),
        C && Ug(!0),
        t || ((q.deltaX = q.x - r), (q.deltaY = q.y - i), Ia(q, 'throwupdate', 'onThrowUpdate'));
    }
    function Wg(a, l, s, n) {
      return (
        null == l && (l = -_t),
        null == s && (s = _t),
        S(a)
          ? function (t) {
              var e = q.isPressed ? 1 - q.edgeResistance : 1;
              return a.call(q, s < t ? s + (t - s) * e : t < l ? l + (t - l) * e : t) * n;
            }
          : Xt(a)
          ? function (t) {
              for (var e, n, o = a.length, r = 0, i = _t; -1 < --o; ) (n = (e = a[o]) - t) < 0 && (n = -n), n < i && l <= e && e <= s && ((r = o), (i = n));
              return a[r];
            }
          : isNaN(a)
          ? function (t) {
              return t;
            }
          : function () {
              return a * n;
            }
      );
    }
    function Yg() {
      var t, e, n, o;
      (M = !1),
        g
          ? (g.calibrate(), (q.minX = X = -g.maxScrollLeft()), (q.minY = _ = -g.maxScrollTop()), (q.maxX = k = q.maxY = L = 0), (M = !0))
          : u.bounds &&
            ((t = Ja(u.bounds, h.parentNode)),
            z
              ? ((q.minX = X = t.left), (q.maxX = k = t.left + t.width), (q.minY = _ = q.maxY = L = 0))
              : U(u.bounds.maxX) && U(u.bounds.maxY)
              ? ((e = Ja(h, h.parentNode)),
                (q.minX = X = Math.round(lg(d, 'px') + t.left - e.left)),
                (q.minY = _ = Math.round(lg(G, 'px') + t.top - e.top)),
                (q.maxX = k = Math.round(X + (t.width - e.width))),
                (q.maxY = L = Math.round(_ + (t.height - e.height))))
              : ((t = u.bounds), (q.minX = X = t.minX), (q.minY = _ = t.minY), (q.maxX = k = t.maxX), (q.maxY = L = t.maxY)),
            k < X && ((q.minX = k), (q.maxX = k = X), (X = q.minX)),
            L < _ && ((q.minY = L), (q.maxY = L = _), (_ = q.minY)),
            z && ((q.minRotation = X), (q.maxRotation = k)),
            (M = !0)),
        u.liveSnap &&
          ((n = !0 === u.liveSnap ? u.snap || {} : u.liveSnap),
          (o = Xt(n) || S(n)),
          z
            ? ((P = Wg(o ? n : n.rotation, X, k, 1)), (R = null))
            : n.points
            ? (I = (function buildPointSnapFunc(s, l, c, d, u, p, h) {
                return (
                  (p = p && p < _t ? p * p : _t),
                  S(s)
                    ? function (t) {
                        var e,
                          n,
                          o,
                          r = q.isPressed ? 1 - q.edgeResistance : 1,
                          i = t.x,
                          a = t.y;
                        return (
                          (t.x = i = c < i ? c + (i - c) * r : i < l ? l + (i - l) * r : i),
                          (t.y = a = u < a ? u + (a - u) * r : a < d ? d + (a - d) * r : a),
                          (e = s.call(q, t)) !== t && ((t.x = e.x), (t.y = e.y)),
                          1 !== h && ((t.x *= h), (t.y *= h)),
                          p < _t && ((n = t.x - i), (o = t.y - a), p < n * n + o * o && ((t.x = i), (t.y = a))),
                          t
                        );
                      }
                    : Xt(s)
                    ? function (t) {
                        for (var e, n, o, r, i = s.length, a = 0, l = _t; -1 < --i; )
                          (r = (e = (o = s[i]).x - t.x) * e + (n = o.y - t.y) * n) < l && ((a = i), (l = r));
                        return l <= p ? s[a] : t;
                      }
                    : function (t) {
                        return t;
                      }
                );
              })(o ? n : n.points, X, k, _, L, n.radius, g ? -1 : 1))
            : ($ && (P = Wg(o ? n : n.x || n.left || n.scrollLeft, X, k, g ? -1 : 1)), j && (R = Wg(o ? n : n.y || n.top || n.scrollTop, _, L, g ? -1 : 1))));
    }
    function Zg() {
      (q.isThrowing = !1), Ia(q, 'throwcomplete', 'onThrowComplete');
    }
    function $g() {
      q.isThrowing = !1;
    }
    function _g(t, e) {
      var n, o, r, i;
      t && Mt
        ? (!0 === t &&
            ((n = u.snap || u.liveSnap || {}),
            (o = Xt(n) || S(n)),
            (t = { resistance: (u.throwResistance || u.resistance || 1e3) / (z ? 10 : 1) }),
            z
              ? (t.rotation = Ma(q, o ? n : n.rotation, k, X, 1, e))
              : ($ && (t[d] = Ma(q, o ? n : n.points || n.x || n.left, k, X, g ? -1 : 1, e || 'x' === q.lockedAxis)),
                j && (t[G] = Ma(q, o ? n : n.points || n.y || n.top, L, _, g ? -1 : 1, e || 'y' === q.lockedAxis)),
                (n.points || (Xt(n) && T(n[0]))) && ((t.linkedProps = d + ',' + G), (t.radius = n.radius)))),
          (q.isThrowing = !0),
          (i = isNaN(u.overshootTolerance) ? (1 === u.edgeResistance ? 0 : 1 - q.edgeResistance + 0.2) : u.overshootTolerance),
          t.duration ||
            (t.duration = {
              max: Math.max(u.minDuration || 0, 'maxDuration' in u ? u.maxDuration : 2),
              min: isNaN(u.minDuration) ? (0 === i || (T(t) && 1e3 < t.resistance) ? 0 : 0.5) : u.minDuration,
              overshoot: i,
            }),
          (q.tween = r =
            gt.to(g || h, {
              inertia: t,
              data: '_draggable',
              onComplete: Zg,
              onInterrupt: $g,
              onUpdate: u.fastMode ? Ia : Vg,
              onUpdateParams: u.fastMode ? [q, 'onthrowupdate', 'onThrowUpdate'] : n && n.radius ? [!1, !0] : [],
            })),
          u.fastMode ||
            (g && (g._skip = !0),
            r.render(r.duration(), !0, !0),
            Vg(!0, !0),
            (q.endX = q.x),
            (q.endY = q.y),
            z && (q.endRotation = q.x),
            r.play(0),
            Vg(!0, !0),
            g && (g._skip = !1)))
        : M && q.applyBounds();
    }
    function ah(t) {
      var e,
        n = O;
      (O = getGlobalMatrix(h.parentNode, !0)),
        t && q.isPressed && !O.equals(n || new ht()) && ((e = n.inverse().apply({ x: w, y: b })), O.apply(e, e), (w = e.x), (b = e.y)),
        O.equals(r) && (O = null);
    }
    function bh() {
      var t,
        e,
        n,
        o,
        r = 1 - q.edgeResistance;
      ah(!1),
        O && ((Bt.x = q.pointerX), (Bt.y = q.pointerY), O.apply(Bt, Bt), (w = Bt.x), (b = Bt.y)),
        C && (ut(q.pointerX, q.pointerY), Ug(!0)),
        g
          ? (Yg(), (E = g.top()), (D = g.left()))
          : (ct() ? (Vg(!0, !0), Yg()) : q.applyBounds(),
            z
              ? ((t = h.ownerSVGElement ? [at.xOrigin - h.getBBox().x, at.yOrigin - h.getBBox().y] : (Fa(h)[kt] || '0 0').split(' ')),
                (N = q.rotationOrigin = getGlobalMatrix(h).apply({ x: parseFloat(t[0]) || 0, y: parseFloat(t[1]) || 0 })),
                Vg(!0, !0),
                (n = q.pointerX - N.x),
                (o = N.y - q.pointerY),
                lt && ((n -= ya(st)), (o += xa(st))),
                (D = q.x),
                (E = q.y = Math.atan2(o, n) * Lt))
              : ((e = !lt && h.parentNode) && e.scrollTop, e && e.scrollLeft, (E = lg(G, 'px')), (D = lg(d, 'px')))),
        M && r && (k < D ? (D = k + (D - k) / r) : D < X && (D = X - (X - D) / r), z || (L < E ? (E = L + (E - L) / r) : E < _ && (E = _ - (_ - E) / r))),
        (q.startX = D),
        (q.startY = E);
    }
    function dh() {
      !vt.parentNode || ct() || q.isDragging || vt.parentNode.removeChild(vt);
    }
    function eh(t, e) {
      var n;
      if (p && !q.isPressed && t && (('mousedown' !== t.type && 'pointerdown' !== t.type) || e || !(Nt() - it < 30) || !bt[q.pointerEvent.type])) {
        if (
          ((A = ct()),
          (q.pointerEvent = t),
          bt[t.type]
            ? ((y = ~t.type.indexOf('touch') ? t.currentTarget || t.target : st),
              ra(y, 'touchend', pt),
              ra(y, 'touchmove', dt),
              ra(y, 'touchcancel', pt),
              ra(st, 'touchstart', wa))
            : ((y = null), ra(st, 'mousemove', dt)),
          (F = null),
          Yt || (ra(st, 'mouseup', pt), t && t.target && ra(t.target, 'mouseup', pt)),
          (v = rt.call(q, t.target) && !1 === u.dragClickables && !e))
        )
          return ra(t.target, 'change', pt), Ia(q, 'pressInit', 'onPressInit'), Ia(q, 'press', 'onPress'), void Oa(Q, !0);
        if (
          ((B =
            !(!y || $ == j || !1 === q.vars.allowNativeTouchScrolling || (q.vars.allowContextMenu && t && (t.ctrlKey || 2 < t.which))) && ($ ? 'y' : 'x')) ||
            q.allowEventDefault ||
            (ta(t), ra(ft, 'touchforcechange', ta)),
          t.changedTouches ? ((t = x = t.changedTouches[0]), (m = t.identifier)) : t.pointerId ? (m = t.pointerId) : (x = m = null),
          Tt++,
          (function _addToRenderQueue(t) {
            i.push(t), 1 === i.length && gt.ticker.add(ma);
          })(Ug),
          (b = q.pointerY = t.pageY),
          (w = q.pointerX = t.pageX),
          Ia(q, 'pressInit', 'onPressInit'),
          (B || q.autoScroll) && Da(h.parentNode),
          !h.parentNode ||
            !q.autoScroll ||
            g ||
            z ||
            !h.parentNode._gsMaxScrollX ||
            vt.parentNode ||
            h.getBBox ||
            ((vt.style.width = h.parentNode.scrollWidth + 'px'), h.parentNode.appendChild(vt)),
          bh(),
          q.tween && q.tween.kill(),
          (q.isThrowing = !1),
          gt.killTweensOf(g || h, o, !0),
          g && gt.killTweensOf(h, { scrollTo: 1 }, !0),
          (q.tween = q.lockedAxis = null),
          (!u.zIndexBoost && (z || g || !1 === u.zIndexBoost)) || (h.style.zIndex = Draggable.zIndex++),
          (q.isPressed = !0),
          (f = !(!u.onDrag && !q._listeners.drag)),
          (s = !(!u.onMove && !q._listeners.move)),
          !z && (!1 !== u.cursor || u.activeCursor))
        )
          for (n = Q.length; -1 < --n; ) gt.set(Q[n], { cursor: u.activeCursor || u.cursor || ('grab' === St ? 'grabbing' : St) });
        Ia(q, 'press', 'onPress');
      }
    }
    function ih(t) {
      if (t && q.isDragging && !g) {
        var e = t.target || h.parentNode,
          n = e.scrollLeft - e._gsScrollX,
          o = e.scrollTop - e._gsScrollY;
        (n || o) &&
          (O ? ((w -= n * O.a + o * O.c), (b -= o * O.d + n * O.b)) : ((w -= n), (b -= o)),
          (e._gsScrollX += n),
          (e._gsScrollY += o),
          ut(q.pointerX, q.pointerY));
      }
    }
    function jh(t) {
      var e = Nt(),
        n = e - it < 40,
        o = e - J < 40,
        r = n && W === it,
        i = q.pointerEvent && q.pointerEvent.defaultPrevented,
        a = n && c === it,
        l = t.isTrusted || (null == t.isTrusted && n && r);
      if (
        ((r || (o && !1 !== q.vars.suppressClickOnDrag)) && t.stopImmediatePropagation && t.stopImmediatePropagation(),
        n && (!q.pointerEvent || !q.pointerEvent.defaultPrevented) && (!r || (l && !a)))
      )
        return l && r && (c = it), void (W = it);
      (q.isPressed || o || n) && ((l && t.detail && n && !i) || ta(t));
    }
    function kh(t) {
      return O ? { x: t.x * O.a + t.y * O.c + O.e, y: t.x * O.b + t.y * O.d + O.f } : { x: t.x, y: t.y };
    }
    var p,
      g,
      w,
      b,
      D,
      E,
      M,
      f,
      s,
      k,
      X,
      L,
      _,
      x,
      m,
      N,
      C,
      e,
      P,
      R,
      I,
      v,
      y,
      O,
      A,
      B,
      F,
      H,
      W,
      c,
      n = (u.type || 'x,y').toLowerCase(),
      V = ~n.indexOf('x') || ~n.indexOf('y'),
      z = -1 !== n.indexOf('rotation'),
      d = z ? 'rotation' : V ? 'x' : 'left',
      G = V ? 'y' : 'top',
      $ = !(!~n.indexOf('x') && !~n.indexOf('left') && 'scroll' !== n),
      j = !(!~n.indexOf('y') && !~n.indexOf('top') && 'scroll' !== n),
      K = u.minimumMovement || 2,
      q = (function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      })(t),
      Q = yt(u.trigger || u.handle || h),
      o = {},
      J = 0,
      Z = !1,
      tt = u.autoScrollMarginTop || 40,
      et = u.autoScrollMarginRight || 40,
      nt = u.autoScrollMarginBottom || 40,
      ot = u.autoScrollMarginLeft || 40,
      rt = u.clickableTest || Na,
      it = 0,
      at = h._gsap || gt.core.getCache(h),
      lt = (function _isFixed(t) {
        return 'fixed' === Fa(t).position || ((t = t.parentNode) && 1 === t.nodeType ? _isFixed(t) : void 0);
      })(h),
      st = h.ownerDocument || xt,
      ct = function isTweening() {
        return q.tween && q.tween.isActive();
      },
      dt = function onMove(t) {
        var e,
          n,
          o,
          r,
          i,
          a,
          l = t;
        if (p && !Dt && q.isPressed && t) {
          if ((e = (q.pointerEvent = t).changedTouches)) {
            if ((t = e[0]) !== x && t.identifier !== m) {
              for (r = e.length; -1 < --r && (t = e[r]).identifier !== m; );
              if (r < 0) return;
            }
          } else if (t.pointerId && m && t.pointerId !== m) return;
          y &&
          B &&
          !F &&
          ((Bt.x = t.pageX),
          (Bt.y = t.pageY),
          O && O.apply(Bt, Bt),
          (n = Bt.x),
          (o = Bt.y),
          (((i = Math.abs(n - w)) !== (a = Math.abs(o - b)) && (K < i || K < a)) || (Et && B === F)) &&
            ((F = a < i && $ ? 'x' : 'y'),
            B && F !== B && ra(ft, 'touchforcechange', ta),
            !1 !== q.vars.lockAxisOnTouchScroll && ((q.lockedAxis = 'x' === F ? 'y' : 'x'), S(q.vars.onLockAxis) && q.vars.onLockAxis.call(q, l)),
            Et && B === F))
            ? pt(l)
            : (q.allowEventDefault || (B && (!F || B === F)) || !1 === l.cancelable || ta(l),
              q.autoScroll && (Z = !0),
              ut(t.pageX - (lt ? ya(st) : 0), t.pageY - (lt ? xa(st) : 0), s));
        }
      },
      ut = function setPointerPosition(t, e, n) {
        var o,
          r,
          i,
          a,
          l,
          s,
          c = 1 - q.dragResistance,
          d = 1 - q.edgeResistance,
          u = q.pointerX,
          p = q.pointerY,
          h = E,
          g = q.x,
          f = q.y,
          x = q.endX,
          m = q.endY,
          v = q.endRotation,
          y = C;
        (q.pointerX = t),
          (q.pointerY = e),
          z
            ? ((a = Math.atan2(N.y - e, t - N.x) * Lt),
              180 < (l = q.y - a) ? ((E -= 360), (q.y = a)) : l < -180 && ((E += 360), (q.y = a)),
              (i = q.x !== D || Math.abs(E - a) > K ? ((q.y = a), D + (E - a) * c) : D))
            : (O && ((s = t * O.a + e * O.c + O.e), (e = t * O.b + e * O.d + O.f), (t = s)),
              (r = e - b) < K && -K < r && (r = 0),
              (o = t - w) < K && -K < o && (o = 0),
              (q.lockAxis || q.lockedAxis) &&
                (o || r) &&
                ((s = q.lockedAxis) ||
                  ((q.lockedAxis = s = $ && Math.abs(o) > Math.abs(r) ? 'y' : j ? 'x' : null),
                  s && S(q.vars.onLockAxis) && q.vars.onLockAxis.call(q, q.pointerEvent)),
                'y' === s ? (r = 0) : 'x' === s && (o = 0)),
              (i = Y(D + o * c)),
              (a = Y(E + r * c))),
          (P || R || I) && (q.x !== i || (q.y !== a && !z))
            ? (I && ((It.x = i), (It.y = a), (s = I(It)), (i = Y(s.x)), (a = Y(s.y))), P && (i = Y(P(i))), R && (a = Y(R(a))))
            : M &&
              (k < i ? (i = k + Math.round((i - k) * d)) : i < X && (i = X + Math.round((i - X) * d)),
              z || (L < a ? (a = Math.round(L + (a - L) * d)) : a < _ && (a = Math.round(_ + (a - _) * d)))),
          (q.x === i && (q.y === a || z)) ||
            (z ? ((q.endRotation = q.x = q.endX = i), (C = !0)) : (j && ((q.y = q.endY = a), (C = !0)), $ && ((q.x = q.endX = i), (C = !0))),
            n && !1 === Ia(q, 'move', 'onMove')
              ? ((q.pointerX = u), (q.pointerY = p), (E = h), (q.x = g), (q.y = f), (q.endX = x), (q.endY = m), (q.endRotation = v), (C = y))
              : !q.isDragging && q.isPressed && ((q.isDragging = !0), Ia(q, 'dragstart', 'onDragStart')));
      },
      pt = function onRelease(t, e) {
        if (
          p &&
          q.isPressed &&
          (!t ||
            null == m ||
            e ||
            !(
              (t.pointerId && t.pointerId !== m) ||
              (t.changedTouches &&
                !(function _hasTouchID(t, e) {
                  for (var n = t.length; n--; ) if (t[n].identifier === e) return !0;
                })(t.changedTouches, m))
            ))
        ) {
          q.isPressed = !1;
          var n,
            o,
            r,
            i,
            a,
            l = t,
            s = q.isDragging,
            c = q.vars.allowContextMenu && t && (t.ctrlKey || 2 < t.which),
            d = gt.delayedCall(0.001, dh);
          if (
            (y ? (sa(y, 'touchend', onRelease), sa(y, 'touchmove', dt), sa(y, 'touchcancel', onRelease), sa(st, 'touchstart', wa)) : sa(st, 'mousemove', dt),
            sa(ft, 'touchforcechange', ta),
            Yt || (sa(st, 'mouseup', onRelease), t && t.target && sa(t.target, 'mouseup', onRelease)),
            (C = !1),
            v && !c)
          )
            return (
              t && (sa(t.target, 'change', onRelease), (q.pointerEvent = l)), Oa(Q, !1), Ia(q, 'release', 'onRelease'), Ia(q, 'click', 'onClick'), void (v = !1)
            );
          if ((pa(Ug), !z)) for (o = Q.length; -1 < --o; ) Ea(Q[o], 'cursor', u.cursor || (!1 !== u.cursor ? St : null));
          if ((s && ((J = Rt = Nt()), (q.isDragging = !1)), Tt--, t)) {
            if ((n = t.changedTouches) && (t = n[0]) !== x && t.identifier !== m) {
              for (o = n.length; -1 < --o && (t = n[o]).identifier !== m; );
              if (o < 0) return;
            }
            (q.pointerEvent = l), (q.pointerX = t.pageX), (q.pointerY = t.pageY);
          }
          return (
            c && l
              ? (ta(l), Ia(q, 'release', 'onRelease'))
              : l && !s
              ? (A && (u.snap || u.bounds) && _g(u.inertia || u.throwProps),
                Ia(q, 'release', 'onRelease'),
                (Et && 'touchmove' === l.type) ||
                  -1 !== l.type.indexOf('cancel') ||
                  (Ia(q, 'click', 'onClick'),
                  Nt() - it < 300 && Ia(q, 'doubleclick', 'onDoubleClick'),
                  (i = l.target || h),
                  (it = Nt()),
                  (a = function syntheticClick() {
                    it === W ||
                      !q.enabled() ||
                      q.isPressed ||
                      l.defaultPrevented ||
                      (i.click
                        ? i.click()
                        : st.createEvent &&
                          ((r = st.createEvent('MouseEvents')).initMouseEvent(
                            'click',
                            !0,
                            !0,
                            ft,
                            1,
                            q.pointerEvent.screenX,
                            q.pointerEvent.screenY,
                            q.pointerX,
                            q.pointerY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null,
                          ),
                          i.dispatchEvent(r)));
                  }),
                  Et || l.defaultPrevented || gt.delayedCall(0.05, a)))
              : (_g(u.inertia || u.throwProps),
                q.allowEventDefault || !l || (!1 === u.dragClickables && rt.call(q, l.target)) || !s || (B && (!F || B !== F)) || !1 === l.cancelable || ta(l),
                Ia(q, 'release', 'onRelease')),
            ct() && d.duration(q.tween.duration()),
            s && Ia(q, 'dragend', 'onDragEnd'),
            !0
          );
        }
      };
    return (
      (e = Draggable.get(h)) && e.kill(),
      (t.startDrag = function (t, e) {
        var n, o, r, i;
        eh(t || q.pointerEvent, !0),
          e &&
            !q.hitTest(t || q.pointerEvent) &&
            ((n = Ha(t || q.pointerEvent)),
            (o = Ha(h)),
            (r = kh({ x: n.left + n.width / 2, y: n.top + n.height / 2 })),
            (i = kh({ x: o.left + o.width / 2, y: o.top + o.height / 2 })),
            (w -= r.x - i.x),
            (b -= r.y - i.y)),
          q.isDragging || ((q.isDragging = !0), Ia(q, 'dragstart', 'onDragStart'));
      }),
      (t.drag = dt),
      (t.endDrag = function (t) {
        return pt(t || q.pointerEvent, !0);
      }),
      (t.timeSinceDrag = function () {
        return q.isDragging ? 0 : (Nt() - J) / 1e3;
      }),
      (t.timeSinceClick = function () {
        return (Nt() - it) / 1e3;
      }),
      (t.hitTest = function (t, e) {
        return Draggable.hitTest(q.target, t, e);
      }),
      (t.getDirection = function (t, e) {
        var n,
          o,
          r,
          i,
          a,
          l,
          s = 'velocity' === t && Mt ? t : T(t) && !z ? 'element' : 'start';
        return (
          'element' === s && ((a = Ha(q.target)), (l = Ha(t))),
          (n = 'start' === s ? q.x - D : 'velocity' === s ? Mt.getVelocity(h, d) : a.left + a.width / 2 - (l.left + l.width / 2)),
          z
            ? n < 0
              ? 'counter-clockwise'
              : 'clockwise'
            : ((e = e || 2),
              (o = 'start' === s ? q.y - E : 'velocity' === s ? Mt.getVelocity(h, G) : a.top + a.height / 2 - (l.top + l.height / 2)),
              (i = (r = Math.abs(n / o)) < 1 / e ? '' : n < 0 ? 'left' : 'right'),
              r < e && ('' !== i && (i += '-'), (i += o < 0 ? 'up' : 'down')),
              i)
        );
      }),
      (t.applyBounds = function (t, e) {
        var n, o, r, i, a, l;
        if (t && u.bounds !== t) return (u.bounds = t), q.update(!0, e);
        if ((Vg(!0), Yg(), M && !ct())) {
          if (
            ((n = q.x),
            (o = q.y),
            k < n ? (n = k) : n < X && (n = X),
            L < o ? (o = L) : o < _ && (o = _),
            (q.x !== n || q.y !== o) &&
              ((r = !0), (q.x = q.endX = n), z ? (q.endRotation = n) : (q.y = q.endY = o), Ug((C = !0)), q.autoScroll && !q.isDragging))
          )
            for (
              Da(h.parentNode),
                i = h,
                Ot.scrollTop =
                  null != ft.pageYOffset ? ft.pageYOffset : null != st.documentElement.scrollTop ? st.documentElement.scrollTop : st.body.scrollTop,
                Ot.scrollLeft =
                  null != ft.pageXOffset ? ft.pageXOffset : null != st.documentElement.scrollLeft ? st.documentElement.scrollLeft : st.body.scrollLeft;
              i && !l;

            )
              (a = (l = At(i.parentNode)) ? Ot : i.parentNode),
                j && a.scrollTop > a._gsMaxScrollY && (a.scrollTop = a._gsMaxScrollY),
                $ && a.scrollLeft > a._gsMaxScrollX && (a.scrollLeft = a._gsMaxScrollX),
                (i = a);
          q.isThrowing && (r || q.endX > k || q.endX < X || q.endY > L || q.endY < _) && _g(u.inertia || u.throwProps, r);
        }
        return q;
      }),
      (t.update = function (t, e, n) {
        var o = q.x,
          r = q.y;
        return (
          ah(!e),
          t ? q.applyBounds() : (C && n && Ug(!0), Vg(!0)),
          e && (ut(q.pointerX, q.pointerY), C && Ug(!0)),
          q.isPressed && !e && (($ && 0.01 < Math.abs(o - q.x)) || (j && 0.01 < Math.abs(r - q.y) && !z)) && bh(),
          q.autoScroll && (Da(h.parentNode), (Z = q.isDragging), Ug(!0), Aa(h, ih), za(h, ih)),
          q
        );
      }),
      (t.enable = function (t) {
        var e,
          n,
          o,
          r = { lazy: !0 };
        if (
          (z || !1 === u.cursor || (r.cursor = u.cursor || St),
          gt.utils.checkPrefix('touchCallout') && (r.touchCallout = 'none'),
          (r.touchAction = $ == j ? 'none' : u.allowNativeTouchScrolling || u.allowEventDefault ? 'manipulation' : $ ? 'pan-y' : 'pan-x'),
          'soft' !== t)
        ) {
          for (n = Q.length; -1 < --n; )
            (o = Q[n]),
              Yt || ra(o, 'mousedown', eh),
              ra(o, 'touchstart', eh),
              ra(o, 'click', jh, !0),
              gt.set(o, r),
              o.getBBox &&
                o.ownerSVGElement &&
                gt.set(o.ownerSVGElement, {
                  touchAction: $ == j ? 'none' : u.allowNativeTouchScrolling || u.allowEventDefault ? 'manipulation' : $ ? 'pan-y' : 'pan-x',
                }),
              u.allowContextMenu || ra(o, 'contextmenu', Tg);
          Oa(Q, !1);
        }
        return (
          za(h, ih),
          (p = !0),
          Mt && 'soft' !== t && Mt.track(g || h, V ? 'x,y' : z ? 'rotation' : 'top,left'),
          (h._gsDragID = e = 'd' + Pt++),
          (Ct[e] = q),
          g && (g.enable(), (g.element._gsDragID = e)),
          u.bounds && (bh(), q.applyBounds()),
          q
        );
      }),
      (t.disable = function (t) {
        var e,
          n,
          o = q.isDragging;
        if (!z) for (e = Q.length; -1 < --e; ) Ea(Q[e], 'cursor', null);
        if ('soft' !== t) {
          for (e = Q.length; -1 < --e; )
            (n = Q[e]),
              Ea(n, 'touchCallout', null),
              Ea(n, 'touchAction', null),
              sa(n, 'mousedown', eh),
              sa(n, 'touchstart', eh),
              sa(n, 'click', jh),
              sa(n, 'contextmenu', Tg);
          Oa(Q, !0), y && (sa(y, 'touchcancel', pt), sa(y, 'touchend', pt), sa(y, 'touchmove', dt)), sa(st, 'mouseup', pt), sa(st, 'mousemove', dt);
        }
        return (
          Aa(h, ih),
          (p = !1),
          Mt && 'soft' !== t && Mt.untrack(g || h, V ? 'x,y' : z ? 'rotation' : 'top,left'),
          g && g.disable(),
          pa(Ug),
          (q.isDragging = q.isPressed = v = !1),
          o && Ia(q, 'dragend', 'onDragEnd'),
          q
        );
      }),
      (t.enabled = function (t, e) {
        return arguments.length ? (t ? q.enable(e) : q.disable(e)) : p;
      }),
      (t.kill = function () {
        return (q.isThrowing = !1), q.tween && q.tween.kill(), q.disable(), gt.set(Q, { clearProps: 'userSelect' }), delete Ct[h._gsDragID], q;
      }),
      ~n.indexOf('scroll') &&
        ((g = t.scrollProxy =
          new Sa(
            h,
            (function _extend(t, e) {
              for (var n in e) n in t || (t[n] = e[n]);
              return t;
            })(
              {
                onKill: function onKill() {
                  q.isPressed && pt(null);
                },
              },
              u,
            ),
          )),
        (h.style.overflowY = j && !wt ? 'auto' : 'hidden'),
        (h.style.overflowX = $ && !wt ? 'auto' : 'hidden'),
        (h = g.content)),
      z ? (o.rotation = 1) : ($ && (o[d] = 1), j && (o[G] = 1)),
      (at.force3D = !('force3D' in u) || u.force3D),
      t.enable(),
      t
    );
  }
  !(function _setDefaults(t, e) {
    for (var n in e) n in t || (t[n] = e[n]);
  })(B.prototype, { pointerX: 0, pointerY: 0, startX: 0, startY: 0, deltaX: 0, deltaY: 0, isDragging: !1, isPressed: !1 }),
    (B.zIndex = 1e3),
    (B.version = '3.1.0'),
    R() && gt.registerPlugin(B),
    (e.Draggable = B),
    (e.default = B);
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 });
  } else {
    delete e.default;
  }
});
