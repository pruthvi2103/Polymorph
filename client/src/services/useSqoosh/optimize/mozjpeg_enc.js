/* eslint-disable */
var mozjpeg_enc = (function () {
    var _scriptDir =
        typeof document !== 'undefined' && document.currentScript
            ? document.currentScript.src
            : undefined;
    if (typeof __filename !== 'undefined')
        _scriptDir = _scriptDir || __filename;
    return function (mozjpeg_enc) {
        mozjpeg_enc = mozjpeg_enc || {};

        var d;
        d || (d = typeof mozjpeg_enc !== 'undefined' ? mozjpeg_enc : {});
        var aa;
        d.ready = new Promise(function (a) {
            aa = a;
        });
        var r = {},
            t;
        for (t in d) d.hasOwnProperty(t) && (r[t] = d[t]);
        var ba = './this.program';
        function u(a, b) {
            throw b;
        }
        var v = !1,
            w = !1,
            ca = !1,
            da = !1;
        v = 'object' === typeof window;
        w = 'function' === typeof importScripts;
        ca =
            'object' === typeof process &&
            'object' === typeof process.versions &&
            'string' === typeof process.versions.node;
        da = !v && !ca && !w;
        var x = '',
            B,
            C,
            ea,
            fa;
        if (ca)
            (x = w ? require('path').dirname(x) + '/' : __dirname + '/'),
                (B = function (a, b) {
                    ea || (ea = require('fs'));
                    fa || (fa = require('path'));
                    a = fa.normalize(a);
                    return ea.readFileSync(a, b ? null : 'utf8');
                }),
                (C = function (a) {
                    a = B(a, !0);
                    a.buffer || (a = new Uint8Array(a));
                    a.buffer || D('Assertion failed: undefined');
                    return a;
                }),
                1 < process.argv.length &&
                    (ba = process.argv[1].replace(/\\/g, '/')),
                process.argv.slice(2),
                process.on('uncaughtException', function (a) {
                    if (!(a instanceof ha)) throw a;
                }),
                process.on('unhandledRejection', D),
                (u = function (a) {
                    process.exit(a);
                }),
                (d.inspect = function () {
                    return '[Emscripten Module object]';
                });
        else if (da)
            'undefined' != typeof read &&
                (B = function (a) {
                    return read(a);
                }),
                (C = function (a) {
                    if ('function' === typeof readbuffer)
                        return new Uint8Array(readbuffer(a));
                    a = read(a, 'binary');
                    'object' === typeof a || D('Assertion failed: undefined');
                    return a;
                }),
                'function' === typeof quit &&
                    (u = function (a) {
                        quit(a);
                    }),
                'undefined' !== typeof print &&
                    ('undefined' === typeof console && (console = {}),
                    (console.log = print),
                    (console.warn = console.error =
                        'undefined' !== typeof printErr ? printErr : print));
        else if (v || w)
            w
                ? (x = self.location.href)
                : document.currentScript && (x = document.currentScript.src),
                _scriptDir && (x = _scriptDir),
                0 !== x.indexOf('blob:')
                    ? (x = x.substr(0, x.lastIndexOf('/') + 1))
                    : (x = ''),
                (B = function (a) {
                    var b = new XMLHttpRequest();
                    b.open('GET', a, !1);
                    b.send(null);
                    return b.responseText;
                }),
                w &&
                    (C = function (a) {
                        var b = new XMLHttpRequest();
                        b.open('GET', a, !1);
                        b.responseType = 'arraybuffer';
                        b.send(null);
                        return new Uint8Array(b.response);
                    });
        var ia = d.print || console.log.bind(console),
            E = d.printErr || console.warn.bind(console);
        for (t in r) r.hasOwnProperty(t) && (d[t] = r[t]);
        r = null;
        d.thisProgram && (ba = d.thisProgram);
        d.quit && (u = d.quit);
        var G;
        d.wasmBinary && (G = d.wasmBinary);
        var noExitRuntime;
        d.noExitRuntime && (noExitRuntime = d.noExitRuntime);
        'object' !== typeof WebAssembly && D('no native wasm support detected');
        var H,
            ja = new WebAssembly.Table({
                initial: 122,
                maximum: 122,
                element: 'anyfunc'
            }),
            la = !1,
            ma =
                'undefined' !== typeof TextDecoder
                    ? new TextDecoder('utf8')
                    : void 0;
        function na(a, b, c) {
            var e = b + c;
            for (c = b; a[c] && !(c >= e); ) ++c;
            if (16 < c - b && a.subarray && ma)
                return ma.decode(a.subarray(b, c));
            for (e = ''; b < c; ) {
                var f = a[b++];
                if (f & 128) {
                    var g = a[b++] & 63;
                    if (192 == (f & 224))
                        e += String.fromCharCode(((f & 31) << 6) | g);
                    else {
                        var l = a[b++] & 63;
                        f =
                            224 == (f & 240)
                                ? ((f & 15) << 12) | (g << 6) | l
                                : ((f & 7) << 18) |
                                  (g << 12) |
                                  (l << 6) |
                                  (a[b++] & 63);
                        65536 > f
                            ? (e += String.fromCharCode(f))
                            : ((f -= 65536),
                              (e += String.fromCharCode(
                                  55296 | (f >> 10),
                                  56320 | (f & 1023)
                              )));
                    }
                } else e += String.fromCharCode(f);
            }
            return e;
        }
        function oa(a, b, c) {
            var e = I;
            if (0 < c) {
                c = b + c - 1;
                for (var f = 0; f < a.length; ++f) {
                    var g = a.charCodeAt(f);
                    if (55296 <= g && 57343 >= g) {
                        var l = a.charCodeAt(++f);
                        g = (65536 + ((g & 1023) << 10)) | (l & 1023);
                    }
                    if (127 >= g) {
                        if (b >= c) break;
                        e[b++] = g;
                    } else {
                        if (2047 >= g) {
                            if (b + 1 >= c) break;
                            e[b++] = 192 | (g >> 6);
                        } else {
                            if (65535 >= g) {
                                if (b + 2 >= c) break;
                                e[b++] = 224 | (g >> 12);
                            } else {
                                if (b + 3 >= c) break;
                                e[b++] = 240 | (g >> 18);
                                e[b++] = 128 | ((g >> 12) & 63);
                            }
                            e[b++] = 128 | ((g >> 6) & 63);
                        }
                        e[b++] = 128 | (g & 63);
                    }
                }
                e[b] = 0;
            }
        }
        var pa =
            'undefined' !== typeof TextDecoder
                ? new TextDecoder('utf-16le')
                : void 0;
        function qa(a, b) {
            var c = a >> 1;
            for (var e = c + b / 2; !(c >= e) && ra[c]; ) ++c;
            c <<= 1;
            if (32 < c - a && pa) return pa.decode(I.subarray(a, c));
            c = 0;
            for (e = ''; ; ) {
                var f = J[(a + 2 * c) >> 1];
                if (0 == f || c == b / 2) return e;
                ++c;
                e += String.fromCharCode(f);
            }
        }
        function sa(a, b, c) {
            void 0 === c && (c = 2147483647);
            if (2 > c) return 0;
            c -= 2;
            var e = b;
            c = c < 2 * a.length ? c / 2 : a.length;
            for (var f = 0; f < c; ++f) (J[b >> 1] = a.charCodeAt(f)), (b += 2);
            J[b >> 1] = 0;
            return b - e;
        }
        function ta(a) {
            return 2 * a.length;
        }
        function ua(a, b) {
            for (var c = 0, e = ''; !(c >= b / 4); ) {
                var f = K[(a + 4 * c) >> 2];
                if (0 == f) break;
                ++c;
                65536 <= f
                    ? ((f -= 65536),
                      (e += String.fromCharCode(
                          55296 | (f >> 10),
                          56320 | (f & 1023)
                      )))
                    : (e += String.fromCharCode(f));
            }
            return e;
        }
        function va(a, b, c) {
            void 0 === c && (c = 2147483647);
            if (4 > c) return 0;
            var e = b;
            c = e + c - 4;
            for (var f = 0; f < a.length; ++f) {
                var g = a.charCodeAt(f);
                if (55296 <= g && 57343 >= g) {
                    var l = a.charCodeAt(++f);
                    g = (65536 + ((g & 1023) << 10)) | (l & 1023);
                }
                K[b >> 2] = g;
                b += 4;
                if (b + 4 > c) break;
            }
            K[b >> 2] = 0;
            return b - e;
        }
        function wa(a) {
            for (var b = 0, c = 0; c < a.length; ++c) {
                var e = a.charCodeAt(c);
                55296 <= e && 57343 >= e && ++c;
                b += 4;
            }
            return b;
        }
        var L, M, I, J, ra, K, N, xa, ya;
        function za(a) {
            L = a;
            d.HEAP8 = M = new Int8Array(a);
            d.HEAP16 = J = new Int16Array(a);
            d.HEAP32 = K = new Int32Array(a);
            d.HEAPU8 = I = new Uint8Array(a);
            d.HEAPU16 = ra = new Uint16Array(a);
            d.HEAPU32 = N = new Uint32Array(a);
            d.HEAPF32 = xa = new Float32Array(a);
            d.HEAPF64 = ya = new Float64Array(a);
        }
        var Aa = d.INITIAL_MEMORY || 16777216;
        d.wasmMemory
            ? (H = d.wasmMemory)
            : (H = new WebAssembly.Memory({
                  initial: Aa / 65536,
                  maximum: 32768
              }));
        H && (L = H.buffer);
        Aa = L.byteLength;
        za(L);
        K[22876] = 5334544;
        function Ba(a) {
            for (; 0 < a.length; ) {
                var b = a.shift();
                if ('function' == typeof b) b(d);
                else {
                    var c = b.ga;
                    'number' === typeof c
                        ? void 0 === b.$
                            ? d.dynCall_v(c)
                            : d.dynCall_vi(c, b.$)
                        : c(void 0 === b.$ ? null : b.$);
                }
            }
        }
        var Ca = [],
            Da = [],
            Ea = [],
            Fa = [];
        function Ga() {
            var a = d.preRun.shift();
            Ca.unshift(a);
        }
        var O = 0,
            Ha = null,
            P = null;
        d.preloadedImages = {};
        d.preloadedAudios = {};
        function D(a) {
            if (d.onAbort) d.onAbort(a);
            ia(a);
            E(a);
            la = !0;
            throw new WebAssembly.RuntimeError(
                'abort(' + a + '). Build with -s ASSERTIONS=1 for more info.'
            );
        }
        function Ia(a) {
            var b = Q;
            return String.prototype.startsWith
                ? b.startsWith(a)
                : 0 === b.indexOf(a);
        }
        function Ja() {
            return Ia('data:application/octet-stream;base64,');
        }
        var Q = 'mozjpeg_enc.wasm';
        if (!Ja()) {
            var Ka = Q;
            Q = d.locateFile ? d.locateFile(Ka, x) : x + Ka;
        }
        function La() {
            try {
                if (G) return new Uint8Array(G);
                if (C) return C(Q);
                throw 'both async and sync fetching of the wasm failed';
            } catch (a) {
                D(a);
            }
        }
        function Ma() {
            return G ||
                (!v && !w) ||
                'function' !== typeof fetch ||
                Ia('file://')
                ? new Promise(function (a) {
                      a(La());
                  })
                : fetch(Q, { credentials: 'same-origin' })
                      .then(function (a) {
                          if (!a.ok)
                              throw (
                                  "failed to load wasm binary file at '" +
                                  Q +
                                  "'"
                              );
                          return a.arrayBuffer();
                      })
                      .catch(function () {
                          return La();
                      });
        }
        Da.push({
            ga: function () {
                Na();
            }
        });
        function Oa() {
            return 0 < Oa.ba;
        }
        var Pa = {};
        function Qa(a) {
            for (; a.length; ) {
                var b = a.pop();
                a.pop()(b);
            }
        }
        function Ra(a) {
            return this.fromWireType(N[a >> 2]);
        }
        var R = {},
            S = {},
            Sa = {};
        function Ta(a) {
            if (void 0 === a) return '_unknown';
            a = a.replace(/[^a-zA-Z0-9_]/g, '$');
            var b = a.charCodeAt(0);
            return 48 <= b && 57 >= b ? '_' + a : a;
        }
        function Ua(a, b) {
            a = Ta(a);
            return new Function(
                'body',
                'return function ' +
                    a +
                    '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'
            )(b);
        }
        function Va(a) {
            var b = Error,
                c = Ua(a, function (e) {
                    this.name = a;
                    this.message = e;
                    e = Error(e).stack;
                    void 0 !== e &&
                        (this.stack =
                            this.toString() +
                            '\n' +
                            e.replace(/^Error(:[^\n]*)?\n/, ''));
                });
            c.prototype = Object.create(b.prototype);
            c.prototype.constructor = c;
            c.prototype.toString = function () {
                return void 0 === this.message
                    ? this.name
                    : this.name + ': ' + this.message;
            };
            return c;
        }
        var Wa = void 0;
        function Xa(a, b, c) {
            function e(k) {
                k = c(k);
                if (k.length !== a.length)
                    throw new Wa('Mismatched type converter count');
                for (var h = 0; h < a.length; ++h) T(a[h], k[h]);
            }
            a.forEach(function (k) {
                Sa[k] = b;
            });
            var f = Array(b.length),
                g = [],
                l = 0;
            b.forEach(function (k, h) {
                S.hasOwnProperty(k)
                    ? (f[h] = S[k])
                    : (g.push(k),
                      R.hasOwnProperty(k) || (R[k] = []),
                      R[k].push(function () {
                          f[h] = S[k];
                          ++l;
                          l === g.length && e(f);
                      }));
            });
            0 === g.length && e(f);
        }
        function Ya(a) {
            switch (a) {
                case 1:
                    return 0;
                case 2:
                    return 1;
                case 4:
                    return 2;
                case 8:
                    return 3;
                default:
                    throw new TypeError('Unknown type size: ' + a);
            }
        }
        var Za = void 0;
        function U(a) {
            for (var b = ''; I[a]; ) b += Za[I[a++]];
            return b;
        }
        var $a = void 0;
        function V(a) {
            throw new $a(a);
        }
        function T(a, b, c) {
            c = c || {};
            if (!('argPackAdvance' in b))
                throw new TypeError(
                    'registerType registeredInstance requires argPackAdvance'
                );
            var e = b.name;
            a ||
                V(
                    'type "' +
                        e +
                        '" must have a positive integer typeid pointer'
                );
            if (S.hasOwnProperty(a)) {
                if (c.ka) return;
                V("Cannot register type '" + e + "' twice");
            }
            S[a] = b;
            delete Sa[a];
            R.hasOwnProperty(a) &&
                ((b = R[a]),
                delete R[a],
                b.forEach(function (f) {
                    f();
                }));
        }
        var ab = [],
            X = [
                {},
                { value: void 0 },
                { value: null },
                { value: !0 },
                { value: !1 }
            ];
        function bb(a) {
            4 < a && 0 === --X[a].aa && ((X[a] = void 0), ab.push(a));
        }
        function cb(a) {
            switch (a) {
                case void 0:
                    return 1;
                case null:
                    return 2;
                case !0:
                    return 3;
                case !1:
                    return 4;
                default:
                    var b = ab.length ? ab.pop() : X.length;
                    X[b] = { aa: 1, value: a };
                    return b;
            }
        }
        function db(a) {
            if (null === a) return 'null';
            var b = typeof a;
            return 'object' === b || 'array' === b || 'function' === b
                ? a.toString()
                : '' + a;
        }
        function eb(a, b) {
            switch (b) {
                case 2:
                    return function (c) {
                        return this.fromWireType(xa[c >> 2]);
                    };
                case 3:
                    return function (c) {
                        return this.fromWireType(ya[c >> 3]);
                    };
                default:
                    throw new TypeError('Unknown float type: ' + a);
            }
        }
        function fb(a) {
            var b = Function;
            if (!(b instanceof Function))
                throw new TypeError(
                    'new_ called with constructor type ' +
                        typeof b +
                        ' which is not a function'
                );
            var c = Ua(b.name || 'unknownFunctionName', function () {});
            c.prototype = b.prototype;
            c = new c();
            a = b.apply(c, a);
            return a instanceof Object ? a : c;
        }
        function gb(a, b) {
            var c = d;
            if (void 0 === c[a].Y) {
                var e = c[a];
                c[a] = function () {
                    c[a].Y.hasOwnProperty(arguments.length) ||
                        V(
                            "Function '" +
                                b +
                                "' called with an invalid number of arguments (" +
                                arguments.length +
                                ') - expects one of (' +
                                c[a].Y +
                                ')!'
                        );
                    return c[a].Y[arguments.length].apply(this, arguments);
                };
                c[a].Y = [];
                c[a].Y[e.ea] = e;
            }
        }
        function hb(a, b, c) {
            d.hasOwnProperty(a)
                ? ((void 0 === c ||
                      (void 0 !== d[a].Y && void 0 !== d[a].Y[c])) &&
                      V("Cannot register public name '" + a + "' twice"),
                  gb(a, a),
                  d.hasOwnProperty(c) &&
                      V(
                          'Cannot register multiple overloads of a function with the same number of arguments (' +
                              c +
                              ')!'
                      ),
                  (d[a].Y[c] = b))
                : ((d[a] = b), void 0 !== c && (d[a].ra = c));
        }
        function ib(a, b) {
            for (var c = [], e = 0; e < a; e++) c.push(K[(b >> 2) + e]);
            return c;
        }
        function Y(a, b) {
            a = U(a);
            var c = d['dynCall_' + a];
            for (var e = [], f = 1; f < a.length; ++f) e.push('a' + f);
            f =
                'return function dynCall_' +
                (a + '_' + b) +
                '(' +
                e.join(', ') +
                ') {\n';
            f +=
                '    return dynCall(rawFunction' +
                (e.length ? ', ' : '') +
                e.join(', ') +
                ');\n';
            c = new Function('dynCall', 'rawFunction', f + '};\n')(c, b);
            'function' !== typeof c &&
                V('unknown function pointer with signature ' + a + ': ' + b);
            return c;
        }
        var jb = void 0;
        function kb(a) {
            a = lb(a);
            var b = U(a);
            Z(a);
            return b;
        }
        function mb(a, b) {
            function c(g) {
                f[g] ||
                    S[g] ||
                    (Sa[g] ? Sa[g].forEach(c) : (e.push(g), (f[g] = !0)));
            }
            var e = [],
                f = {};
            b.forEach(c);
            throw new jb(a + ': ' + e.map(kb).join([', ']));
        }
        function nb(a, b, c) {
            switch (b) {
                case 0:
                    return c
                        ? function (e) {
                              return M[e];
                          }
                        : function (e) {
                              return I[e];
                          };
                case 1:
                    return c
                        ? function (e) {
                              return J[e >> 1];
                          }
                        : function (e) {
                              return ra[e >> 1];
                          };
                case 2:
                    return c
                        ? function (e) {
                              return K[e >> 2];
                          }
                        : function (e) {
                              return N[e >> 2];
                          };
                default:
                    throw new TypeError('Unknown integer type: ' + a);
            }
        }
        var ob = {};
        function pb() {
            return 'object' === typeof globalThis
                ? globalThis
                : Function('return this')();
        }
        function qb(a, b) {
            var c = S[a];
            void 0 === c && V(b + ' has unknown type ' + kb(a));
            return c;
        }
        var rb = {},
            sb = {};
        function tb() {
            if (!ub) {
                var a = {
                        USER: 'web_user',
                        LOGNAME: 'web_user',
                        PATH: '/',
                        PWD: '/',
                        HOME: '/home/web_user',
                        LANG:
                            (
                                ('object' === typeof navigator &&
                                    navigator.languages &&
                                    navigator.languages[0]) ||
                                'C'
                            ).replace('-', '_') + '.UTF-8',
                        _: ba || './this.program'
                    },
                    b;
                for (b in sb) a[b] = sb[b];
                var c = [];
                for (b in a) c.push(b + '=' + a[b]);
                ub = c;
            }
            return ub;
        }
        var ub,
            vb = [null, [], []];
        Wa = d.InternalError = Va('InternalError');
        for (var wb = Array(256), xb = 0; 256 > xb; ++xb)
            wb[xb] = String.fromCharCode(xb);
        Za = wb;
        $a = d.BindingError = Va('BindingError');
        d.count_emval_handles = function () {
            for (var a = 0, b = 5; b < X.length; ++b) void 0 !== X[b] && ++a;
            return a;
        };
        d.get_first_emval = function () {
            for (var a = 5; a < X.length; ++a) if (void 0 !== X[a]) return X[a];
            return null;
        };
        jb = d.UnboundTypeError = Va('UnboundTypeError');
        var zb = {
            j: function (a) {
                return yb(a);
            },
            C: function () {},
            A: function (a) {
                'uncaught_exception' in Oa ? Oa.ba++ : (Oa.ba = 1);
                throw a;
            },
            l: function (a) {
                var b = Pa[a];
                delete Pa[a];
                var c = b.la,
                    e = b.ma,
                    f = b.da,
                    g = f
                        .map(function (l) {
                            return l.ja;
                        })
                        .concat(
                            f.map(function (l) {
                                return l.oa;
                            })
                        );
                Xa([a], g, function (l) {
                    var k = {};
                    f.forEach(function (h, m) {
                        var n = l[m],
                            q = h.ha,
                            y = h.ia,
                            z = l[m + f.length],
                            p = h.na,
                            ka = h.pa;
                        k[h.fa] = {
                            read: function (A) {
                                return n.fromWireType(q(y, A));
                            },
                            write: function (A, F) {
                                var W = [];
                                p(ka, A, z.toWireType(W, F));
                                Qa(W);
                            }
                        };
                    });
                    return [
                        {
                            name: b.name,
                            fromWireType: function (h) {
                                var m = {},
                                    n;
                                for (n in k) m[n] = k[n].read(h);
                                e(h);
                                return m;
                            },
                            toWireType: function (h, m) {
                                for (var n in k)
                                    if (!(n in m))
                                        throw new TypeError(
                                            'Missing field:  "' + n + '"'
                                        );
                                var q = c();
                                for (n in k) k[n].write(q, m[n]);
                                null !== h && h.push(e, q);
                                return q;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: Ra,
                            Z: e
                        }
                    ];
                });
            },
            x: function (a, b, c, e, f) {
                var g = Ya(c);
                b = U(b);
                T(a, {
                    name: b,
                    fromWireType: function (l) {
                        return !!l;
                    },
                    toWireType: function (l, k) {
                        return k ? e : f;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function (l) {
                        if (1 === c) var k = M;
                        else if (2 === c) k = J;
                        else if (4 === c) k = K;
                        else
                            throw new TypeError(
                                'Unknown boolean type size: ' + b
                            );
                        return this.fromWireType(k[l >> g]);
                    },
                    Z: null
                });
            },
            w: function (a, b) {
                b = U(b);
                T(a, {
                    name: b,
                    fromWireType: function (c) {
                        var e = X[c].value;
                        bb(c);
                        return e;
                    },
                    toWireType: function (c, e) {
                        return cb(e);
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Ra,
                    Z: null
                });
            },
            h: function (a, b, c) {
                c = Ya(c);
                b = U(b);
                T(a, {
                    name: b,
                    fromWireType: function (e) {
                        return e;
                    },
                    toWireType: function (e, f) {
                        if ('number' !== typeof f && 'boolean' !== typeof f)
                            throw new TypeError(
                                'Cannot convert "' + db(f) + '" to ' + this.name
                            );
                        return f;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: eb(b, c),
                    Z: null
                });
            },
            e: function (a, b, c, e, f, g) {
                var l = ib(b, c);
                a = U(a);
                f = Y(e, f);
                hb(
                    a,
                    function () {
                        mb('Cannot call ' + a + ' due to unbound types', l);
                    },
                    b - 1
                );
                Xa([], l, function (k) {
                    var h = [k[0], null].concat(k.slice(1)),
                        m = (k = a),
                        n = f,
                        q = h.length;
                    2 > q &&
                        V(
                            "argTypes array size mismatch! Must at least get return value and 'this' types!"
                        );
                    for (
                        var y = null !== h[1] && !1, z = !1, p = 1;
                        p < h.length;
                        ++p
                    )
                        if (null !== h[p] && void 0 === h[p].Z) {
                            z = !0;
                            break;
                        }
                    var ka = 'void' !== h[0].name,
                        A = '',
                        F = '';
                    for (p = 0; p < q - 2; ++p)
                        (A += (0 !== p ? ', ' : '') + 'arg' + p),
                            (F += (0 !== p ? ', ' : '') + 'arg' + p + 'Wired');
                    m =
                        'return function ' +
                        Ta(m) +
                        '(' +
                        A +
                        ') {\nif (arguments.length !== ' +
                        (q - 2) +
                        ") {\nthrowBindingError('function " +
                        m +
                        " called with ' + arguments.length + ' arguments, expected " +
                        (q - 2) +
                        " args!');\n}\n";
                    z && (m += 'var destructors = [];\n');
                    var W = z ? 'destructors' : 'null';
                    A =
                        'throwBindingError invoker fn runDestructors retType classParam'.split(
                            ' '
                        );
                    n = [V, n, g, Qa, h[0], h[1]];
                    y &&
                        (m +=
                            'var thisWired = classParam.toWireType(' +
                            W +
                            ', this);\n');
                    for (p = 0; p < q - 2; ++p)
                        (m +=
                            'var arg' +
                            p +
                            'Wired = argType' +
                            p +
                            '.toWireType(' +
                            W +
                            ', arg' +
                            p +
                            '); // ' +
                            h[p + 2].name +
                            '\n'),
                            A.push('argType' + p),
                            n.push(h[p + 2]);
                    y && (F = 'thisWired' + (0 < F.length ? ', ' : '') + F);
                    m +=
                        (ka ? 'var rv = ' : '') +
                        'invoker(fn' +
                        (0 < F.length ? ', ' : '') +
                        F +
                        ');\n';
                    if (z) m += 'runDestructors(destructors);\n';
                    else
                        for (p = y ? 1 : 2; p < h.length; ++p)
                            (q =
                                1 === p
                                    ? 'thisWired'
                                    : 'arg' + (p - 2) + 'Wired'),
                                null !== h[p].Z &&
                                    ((m +=
                                        q +
                                        '_dtor(' +
                                        q +
                                        '); // ' +
                                        h[p].name +
                                        '\n'),
                                    A.push(q + '_dtor'),
                                    n.push(h[p].Z));
                    ka &&
                        (m +=
                            'var ret = retType.fromWireType(rv);\nreturn ret;\n');
                    A.push(m + '}\n');
                    h = fb(A).apply(null, n);
                    p = b - 1;
                    if (!d.hasOwnProperty(k))
                        throw new Wa('Replacing nonexistant public symbol');
                    void 0 !== d[k].Y && void 0 !== p
                        ? (d[k].Y[p] = h)
                        : ((d[k] = h), (d[k].ea = p));
                    return [];
                });
            },
            b: function (a, b, c, e, f) {
                function g(m) {
                    return m;
                }
                b = U(b);
                -1 === f && (f = 4294967295);
                var l = Ya(c);
                if (0 === e) {
                    var k = 32 - 8 * c;
                    g = function (m) {
                        return (m << k) >>> k;
                    };
                }
                var h = -1 != b.indexOf('unsigned');
                T(a, {
                    name: b,
                    fromWireType: g,
                    toWireType: function (m, n) {
                        if ('number' !== typeof n && 'boolean' !== typeof n)
                            throw new TypeError(
                                'Cannot convert "' + db(n) + '" to ' + this.name
                            );
                        if (n < e || n > f)
                            throw new TypeError(
                                'Passing a number "' +
                                    db(n) +
                                    '" from JS side to C/C++ side to an argument of type "' +
                                    b +
                                    '", which is outside the valid range [' +
                                    e +
                                    ', ' +
                                    f +
                                    ']!'
                            );
                        return h ? n >>> 0 : n | 0;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: nb(b, l, 0 !== e),
                    Z: null
                });
            },
            a: function (a, b, c) {
                function e(g) {
                    g >>= 2;
                    var l = N;
                    return new f(L, l[g + 1], l[g]);
                }
                var f = [
                    Int8Array,
                    Uint8Array,
                    Int16Array,
                    Uint16Array,
                    Int32Array,
                    Uint32Array,
                    Float32Array,
                    Float64Array
                ][b];
                c = U(c);
                T(
                    a,
                    {
                        name: c,
                        fromWireType: e,
                        argPackAdvance: 8,
                        readValueFromPointer: e
                    },
                    { ka: !0 }
                );
            },
            i: function (a, b) {
                b = U(b);
                var c = 'std::string' === b;
                T(a, {
                    name: b,
                    fromWireType: function (e) {
                        var f = N[e >> 2];
                        if (c)
                            for (var g = e + 4, l = 0; l <= f; ++l) {
                                var k = e + 4 + l;
                                if (0 == I[k] || l == f) {
                                    g = g ? na(I, g, k - g) : '';
                                    if (void 0 === h) var h = g;
                                    else
                                        (h += String.fromCharCode(0)), (h += g);
                                    g = k + 1;
                                }
                            }
                        else {
                            h = Array(f);
                            for (l = 0; l < f; ++l)
                                h[l] = String.fromCharCode(I[e + 4 + l]);
                            h = h.join('');
                        }
                        Z(e);
                        return h;
                    },
                    toWireType: function (e, f) {
                        f instanceof ArrayBuffer && (f = new Uint8Array(f));
                        var g = 'string' === typeof f;
                        g ||
                            f instanceof Uint8Array ||
                            f instanceof Uint8ClampedArray ||
                            f instanceof Int8Array ||
                            V('Cannot pass non-string to std::string');
                        var l = (
                                c && g
                                    ? function () {
                                          for (
                                              var m = 0, n = 0;
                                              n < f.length;
                                              ++n
                                          ) {
                                              var q = f.charCodeAt(n);
                                              55296 <= q &&
                                                  57343 >= q &&
                                                  (q =
                                                      (65536 +
                                                          ((q & 1023) << 10)) |
                                                      (f.charCodeAt(++n) &
                                                          1023));
                                              127 >= q
                                                  ? ++m
                                                  : (m =
                                                        2047 >= q
                                                            ? m + 2
                                                            : 65535 >= q
                                                            ? m + 3
                                                            : m + 4);
                                          }
                                          return m;
                                      }
                                    : function () {
                                          return f.length;
                                      }
                            )(),
                            k = yb(4 + l + 1);
                        N[k >> 2] = l;
                        if (c && g) oa(f, k + 4, l + 1);
                        else if (g)
                            for (g = 0; g < l; ++g) {
                                var h = f.charCodeAt(g);
                                255 < h &&
                                    (Z(k),
                                    V(
                                        'String has UTF-16 code units that do not fit in 8 bits'
                                    ));
                                I[k + 4 + g] = h;
                            }
                        else for (g = 0; g < l; ++g) I[k + 4 + g] = f[g];
                        null !== e && e.push(Z, k);
                        return k;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Ra,
                    Z: function (e) {
                        Z(e);
                    }
                });
            },
            d: function (a, b, c) {
                c = U(c);
                if (2 === b) {
                    var e = qa;
                    var f = sa;
                    var g = ta;
                    var l = function () {
                        return ra;
                    };
                    var k = 1;
                } else
                    4 === b &&
                        ((e = ua),
                        (f = va),
                        (g = wa),
                        (l = function () {
                            return N;
                        }),
                        (k = 2));
                T(a, {
                    name: c,
                    fromWireType: function (h) {
                        for (
                            var m = N[h >> 2], n = l(), q, y = h + 4, z = 0;
                            z <= m;
                            ++z
                        ) {
                            var p = h + 4 + z * b;
                            if (0 == n[p >> k] || z == m)
                                (y = e(y, p - y)),
                                    void 0 === q
                                        ? (q = y)
                                        : ((q += String.fromCharCode(0)),
                                          (q += y)),
                                    (y = p + b);
                        }
                        Z(h);
                        return q;
                    },
                    toWireType: function (h, m) {
                        'string' !== typeof m &&
                            V('Cannot pass non-string to C++ string type ' + c);
                        var n = g(m),
                            q = yb(4 + n + b);
                        N[q >> 2] = n >> k;
                        f(m, q + 4, n + b);
                        null !== h && h.push(Z, q);
                        return q;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Ra,
                    Z: function (h) {
                        Z(h);
                    }
                });
            },
            m: function (a, b, c, e, f, g) {
                Pa[a] = { name: U(b), la: Y(c, e), ma: Y(f, g), da: [] };
            },
            f: function (a, b, c, e, f, g, l, k, h, m) {
                Pa[a].da.push({
                    fa: U(b),
                    ja: c,
                    ha: Y(e, f),
                    ia: g,
                    oa: l,
                    na: Y(k, h),
                    pa: m
                });
            },
            y: function (a, b) {
                b = U(b);
                T(a, {
                    qa: !0,
                    name: b,
                    argPackAdvance: 0,
                    fromWireType: function () {},
                    toWireType: function () {}
                });
            },
            v: bb,
            B: function (a) {
                if (0 === a) return cb(pb());
                var b = ob[a];
                a = void 0 === b ? U(a) : b;
                return cb(pb()[a]);
            },
            k: function (a) {
                4 < a && (X[a].aa += 1);
            },
            n: function (a, b, c, e) {
                a || V('Cannot use deleted val. handle = ' + a);
                a = X[a].value;
                var f = rb[b];
                if (!f) {
                    f = '';
                    for (var g = 0; g < b; ++g)
                        f += (0 !== g ? ', ' : '') + 'arg' + g;
                    var l =
                        'return function emval_allocator_' +
                        b +
                        '(constructor, argTypes, args) {\n';
                    for (g = 0; g < b; ++g)
                        l +=
                            'var argType' +
                            g +
                            " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " +
                            g +
                            '], "parameter ' +
                            g +
                            '");\nvar arg' +
                            g +
                            ' = argType' +
                            g +
                            '.readValueFromPointer(args);\nargs += argType' +
                            g +
                            "['argPackAdvance'];\n";
                    f = new Function(
                        'requireRegisteredType',
                        'Module',
                        '__emval_register',
                        l +
                            ('var obj = new constructor(' +
                                f +
                                ');\nreturn __emval_register(obj);\n}\n')
                    )(qb, d, cb);
                    rb[b] = f;
                }
                return f(a, c, e);
            },
            r: function () {
                D();
            },
            q: function (a, b, c) {
                I.copyWithin(a, b, b + c);
            },
            c: function (a) {
                a >>>= 0;
                var b = I.length;
                if (2147483648 < a) return !1;
                for (var c = 1; 4 >= c; c *= 2) {
                    var e = b * (1 + 0.2 / c);
                    e = Math.min(e, a + 100663296);
                    e = Math.max(16777216, a, e);
                    0 < e % 65536 && (e += 65536 - (e % 65536));
                    a: {
                        try {
                            H.grow(
                                (Math.min(2147483648, e) -
                                    L.byteLength +
                                    65535) >>>
                                    16
                            );
                            za(H.buffer);
                            var f = 1;
                            break a;
                        } catch (g) {}
                        f = void 0;
                    }
                    if (f) return !0;
                }
                return !1;
            },
            s: function (a, b) {
                var c = 0;
                tb().forEach(function (e, f) {
                    var g = b + c;
                    f = K[(a + 4 * f) >> 2] = g;
                    for (g = 0; g < e.length; ++g)
                        M[f++ >> 0] = e.charCodeAt(g);
                    M[f >> 0] = 0;
                    c += e.length + 1;
                });
                return 0;
            },
            t: function (a, b) {
                var c = tb();
                K[a >> 2] = c.length;
                var e = 0;
                c.forEach(function (f) {
                    e += f.length + 1;
                });
                K[b >> 2] = e;
                return 0;
            },
            z: function (a) {
                if (!noExitRuntime && ((la = !0), d.onExit)) d.onExit(a);
                u(a, new ha(a));
            },
            u: function () {
                return 0;
            },
            o: function () {},
            g: function (a, b, c, e) {
                for (var f = 0, g = 0; g < c; g++) {
                    for (
                        var l = K[(b + 8 * g) >> 2],
                            k = K[(b + (8 * g + 4)) >> 2],
                            h = 0;
                        h < k;
                        h++
                    ) {
                        var m = I[l + h],
                            n = vb[a];
                        0 === m || 10 === m
                            ? ((1 === a ? ia : E)(na(n, 0)), (n.length = 0))
                            : n.push(m);
                    }
                    f += k;
                }
                K[e >> 2] = f;
                return 0;
            },
            memory: H,
            p: function () {},
            table: ja
        };
        (function () {
            function a(f) {
                d.asm = f.exports;
                O--;
                d.monitorRunDependencies && d.monitorRunDependencies(O);
                0 == O &&
                    (null !== Ha && (clearInterval(Ha), (Ha = null)),
                    P && ((f = P), (P = null), f()));
            }
            function b(f) {
                a(f.instance);
            }
            function c(f) {
                return Ma()
                    .then(function (g) {
                        return WebAssembly.instantiate(g, e);
                    })
                    .then(f, function (g) {
                        E('failed to asynchronously prepare wasm: ' + g);
                        D(g);
                    });
            }
            var e = { a: zb };
            O++;
            d.monitorRunDependencies && d.monitorRunDependencies(O);
            if (d.instantiateWasm)
                try {
                    return d.instantiateWasm(e, a);
                } catch (f) {
                    return (
                        E(
                            'Module.instantiateWasm callback failed with error: ' +
                                f
                        ),
                        !1
                    );
                }
            (function () {
                if (
                    G ||
                    'function' !== typeof WebAssembly.instantiateStreaming ||
                    Ja() ||
                    Ia('file://') ||
                    'function' !== typeof fetch
                )
                    return c(b);
                fetch(Q, { credentials: 'same-origin' }).then(function (f) {
                    return WebAssembly.instantiateStreaming(f, e).then(
                        b,
                        function (g) {
                            E('wasm streaming compile failed: ' + g);
                            E('falling back to ArrayBuffer instantiation');
                            return c(b);
                        }
                    );
                });
            })();
            return {};
        })();
        var Na = (d.___wasm_call_ctors = function () {
                return (Na = d.___wasm_call_ctors = d.asm.D).apply(
                    null,
                    arguments
                );
            }),
            Z = (d._free = function () {
                return (Z = d._free = d.asm.E).apply(null, arguments);
            }),
            yb = (d._malloc = function () {
                return (yb = d._malloc = d.asm.F).apply(null, arguments);
            }),
            lb = (d.___getTypeName = function () {
                return (lb = d.___getTypeName = d.asm.G).apply(null, arguments);
            });
        d.___embind_register_native_and_builtin_types = function () {
            return (d.___embind_register_native_and_builtin_types =
                d.asm.H).apply(null, arguments);
        };
        d.dynCall_i = function () {
            return (d.dynCall_i = d.asm.I).apply(null, arguments);
        };
        d.dynCall_vi = function () {
            return (d.dynCall_vi = d.asm.J).apply(null, arguments);
        };
        d.dynCall_iii = function () {
            return (d.dynCall_iii = d.asm.K).apply(null, arguments);
        };
        d.dynCall_viii = function () {
            return (d.dynCall_viii = d.asm.L).apply(null, arguments);
        };
        d.dynCall_ii = function () {
            return (d.dynCall_ii = d.asm.M).apply(null, arguments);
        };
        d.dynCall_iiiiii = function () {
            return (d.dynCall_iiiiii = d.asm.N).apply(null, arguments);
        };
        d.dynCall_viiiii = function () {
            return (d.dynCall_viiiii = d.asm.O).apply(null, arguments);
        };
        d.dynCall_vii = function () {
            return (d.dynCall_vii = d.asm.P).apply(null, arguments);
        };
        d.dynCall_iiiiiii = function () {
            return (d.dynCall_iiiiiii = d.asm.Q).apply(null, arguments);
        };
        d.dynCall_iiiii = function () {
            return (d.dynCall_iiiii = d.asm.R).apply(null, arguments);
        };
        d.dynCall_iiii = function () {
            return (d.dynCall_iiii = d.asm.S).apply(null, arguments);
        };
        d.dynCall_viiiiiiii = function () {
            return (d.dynCall_viiiiiiii = d.asm.T).apply(null, arguments);
        };
        d.dynCall_viiii = function () {
            return (d.dynCall_viiii = d.asm.U).apply(null, arguments);
        };
        d.dynCall_viiiiiii = function () {
            return (d.dynCall_viiiiiii = d.asm.V).apply(null, arguments);
        };
        d.dynCall_jiji = function () {
            return (d.dynCall_jiji = d.asm.W).apply(null, arguments);
        };
        d.dynCall_viiiiii = function () {
            return (d.dynCall_viiiiii = d.asm.X).apply(null, arguments);
        };
        var Ab;
        function ha(a) {
            this.name = 'ExitStatus';
            this.message = 'Program terminated with exit(' + a + ')';
            this.status = a;
        }
        P = function Bb() {
            Ab || Cb();
            Ab || (P = Bb);
        };
        function Cb() {
            function a() {
                if (!Ab && ((Ab = !0), (d.calledRun = !0), !la)) {
                    Ba(Da);
                    Ba(Ea);
                    aa(d);
                    if (d.onRuntimeInitialized) d.onRuntimeInitialized();
                    if (d.postRun)
                        for (
                            'function' == typeof d.postRun &&
                            (d.postRun = [d.postRun]);
                            d.postRun.length;

                        ) {
                            var b = d.postRun.shift();
                            Fa.unshift(b);
                        }
                    Ba(Fa);
                }
            }
            if (!(0 < O)) {
                if (d.preRun)
                    for (
                        'function' == typeof d.preRun &&
                        (d.preRun = [d.preRun]);
                        d.preRun.length;

                    )
                        Ga();
                Ba(Ca);
                0 < O ||
                    (d.setStatus
                        ? (d.setStatus('Running...'),
                          setTimeout(function () {
                              setTimeout(function () {
                                  d.setStatus('');
                              }, 1);
                              a();
                          }, 1))
                        : a());
            }
        }
        d.run = Cb;
        if (d.preInit)
            for (
                'function' == typeof d.preInit && (d.preInit = [d.preInit]);
                0 < d.preInit.length;

            )
                d.preInit.pop()();
        noExitRuntime = !0;
        Cb();

        return mozjpeg_enc.ready;
    };
})();
// if (typeof exports === 'object' && typeof module === 'object')
//   module.exports = mozjpeg_enc;
// else if (typeof define === 'function' && define['amd'])
//   define([], function() { return mozjpeg_enc; });
// else if (typeof exports === 'object')
//   exports["mozjpeg_enc"] = mozjpeg_enc;

export default mozjpeg_enc;
