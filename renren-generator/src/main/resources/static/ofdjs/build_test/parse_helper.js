!function(e, r) {
    var n;
    n = "undefined" != typeof __webpack_public_path__ || "undefined" != typeof __webpack_public_path__ ? "undefined" != typeof __non_webpack_require__ ? __non_webpack_require__ : void 0 : "undefined" != typeof require ? require : void 0;
    var t = e && e.process
      , o = "parser_helper_x";
    "object" == typeof exports && "object" == typeof module ? module.exports = r(n, t, e) : "function" == typeof define && define.amd ? define([], (function() {
        return r(n, t, e)
    }
    )) : "object" == typeof exports ? o && (exports[o] = r(n, t, e)) : o && (e[o] = r(n, t, e))
}(function(e) {
    if ("undefined" != typeof globalThis)
        return globalThis;
    var r = function() {
        return this
    }();
    if (!r && function() {
        var e;
        try {
            e = new Function
        } catch (e) {
            return !1
        }
        return "function" == typeof e
    }() && (r = new Function("return this")()),
    !r) {
        if ("undefined" == typeof __webpack_public_path__ && "undefined" != typeof global)
            return global;
        if ("undefined" != typeof window)
            return window;
        if ("undefined" != typeof self)
            return self
    }
    return r || e
}(this), (function(e, r, n, t) {
    var o = "";
    try {
        o = document.currentScript.src
    } catch (e) {}
    function a(n) {
        n = void 0 !== n ? n : {};
        var a, i = {};
        for (a in n)
            n.hasOwnProperty(a) && (i[a] = n[a]);
        var u, s, c, f, l, d = [], p = "./this.program", m = function(e, r) {
            throw r
        }, h = "object" == typeof window, v = "function" == typeof importScripts, y = "object" == typeof r && "object" == typeof r.versions && "string" == typeof r.versions.node, g = "";
        y ? (g = v ? e("path").dirname(g) + "/" : __dirname + "/",
        u = function(r, n) {
            return f || (f = e("fs")),
            l || (l = e("path")),
            r = l.normalize(r),
            f.readFileSync(r, n ? null : "utf8")
        }
        ,
        c = function(e) {
            var r = u(e, !0);
            return r.buffer || (r = new Uint8Array(r)),
            S(r.buffer),
            r
        }
        ,
        s = function(r, n, t) {
            f || (f = e("fs")),
            l || (l = e("path")),
            r = l.normalize(r),
            f.readFile(r, (function(e, r) {
                e ? t(e) : n(r.buffer)
            }
            ))
        }
        ,
        r.argv.length > 1 && (p = r.argv[1].replace(/\\/g, "/")),
        d = r.argv.slice(2),
        void 0 !== t && (t.exports = n),
        r.on("uncaughtException", (function(e) {
            if (!(e instanceof Gr))
                throw e
        }
        )),
        r.on("unhandledRejection", (function(e) {
            throw e
        }
        )),
        m = function(e, n) {
            if (ne())
                throw r.exitCode = e,
                n;
            var t;
            (t = n)instanceof Gr || _("exiting due to exception: " + t),
            r.exit(e)
        }
        ,
        n.inspect = function() {
            return "[Emscripten Module object]"
        }
        ) : (h || v) && (g = 0 !== (g = v ? self.location.href : o).indexOf("blob:") ? g.substr(0, g.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "",
        u = function(e) {
            var r = new XMLHttpRequest;
            return r.open("GET", e, !1),
            r.send(null),
            r.responseText
        }
        ,
        v && (c = function(e) {
            var r = new XMLHttpRequest;
            return r.open("GET", e, !1),
            r.responseType = "arraybuffer",
            r.send(null),
            new Uint8Array(r.response)
        }
        ),
        s = function(e, r, n) {
            var t = new XMLHttpRequest;
            t.open("GET", e, !0),
            t.responseType = "arraybuffer",
            t.onload = function() {
                200 == t.status || 0 == t.status && t.response ? r(t.response) : n()
            }
            ,
            t.onerror = n,
            t.send(null)
        }
        );
        var w = n.print || console.log.bind(console)
          , _ = n.printErr || console.warn.bind(console);
        for (a in i)
            i.hasOwnProperty(a) && (n[a] = i[a]);
        i = null,
        n.arguments && (d = n.arguments),
        n.thisProgram && (p = n.thisProgram),
        n.quit && (m = n.quit);
        var E, b = 0;
        n.wasmBinary && (E = n.wasmBinary);
        var k, F = n.noExitRuntime || !0;
        "object" != typeof WebAssembly && se("no native wasm support detected");
        var T = !1;
        function S(e, r) {
            e || se("Assertion failed: " + r)
        }
        var D = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
        function A(e, r, n) {
            for (var t = r + n, o = r; e[o] && !(o >= t); )
                ++o;
            if (o - r > 16 && e.subarray && D)
                return D.decode(e.subarray(r, o));
            for (var a = ""; r < o; ) {
                var i = e[r++];
                if (128 & i) {
                    var u = 63 & e[r++];
                    if (192 != (224 & i)) {
                        var s = 63 & e[r++];
                        if ((i = 224 == (240 & i) ? (15 & i) << 12 | u << 6 | s : (7 & i) << 18 | u << 12 | s << 6 | 63 & e[r++]) < 65536)
                            a += String.fromCharCode(i);
                        else {
                            var c = i - 65536;
                            a += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                        }
                    } else
                        a += String.fromCharCode((31 & i) << 6 | u)
                } else
                    a += String.fromCharCode(i)
            }
            return a
        }
        function M(e, r) {
            return e ? A(O, e, r) : ""
        }
        function C(e, r, n, t) {
            if (!(t > 0))
                return 0;
            for (var o = n, a = n + t - 1, i = 0; i < e.length; ++i) {
                var u = e.charCodeAt(i);
                if (u >= 55296 && u <= 57343)
                    u = 65536 + ((1023 & u) << 10) | 1023 & e.charCodeAt(++i);
                if (u <= 127) {
                    if (n >= a)
                        break;
                    r[n++] = u
                } else if (u <= 2047) {
                    if (n + 1 >= a)
                        break;
                    r[n++] = 192 | u >> 6,
                    r[n++] = 128 | 63 & u
                } else if (u <= 65535) {
                    if (n + 2 >= a)
                        break;
                    r[n++] = 224 | u >> 12,
                    r[n++] = 128 | u >> 6 & 63,
                    r[n++] = 128 | 63 & u
                } else {
                    if (n + 3 >= a)
                        break;
                    r[n++] = 240 | u >> 18,
                    r[n++] = 128 | u >> 12 & 63,
                    r[n++] = 128 | u >> 6 & 63,
                    r[n++] = 128 | 63 & u
                }
            }
            return r[n] = 0,
            n - o
        }
        function P(e, r, n) {
            return C(e, O, r, n)
        }
        function j(e) {
            for (var r = 0, n = 0; n < e.length; ++n) {
                var t = e.charCodeAt(n);
                t >= 55296 && t <= 57343 && (t = 65536 + ((1023 & t) << 10) | 1023 & e.charCodeAt(++n)),
                t <= 127 ? ++r : r += t <= 2047 ? 2 : t <= 65535 ? 3 : 4
            }
            return r
        }
        var R, x, O, z, B, U, N, I, H, W = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
        function L(e, r) {
            for (var n = e, t = n >> 1, o = t + r / 2; !(t >= o) && B[t]; )
                ++t;
            if ((n = t << 1) - e > 32 && W)
                return W.decode(O.subarray(e, n));
            for (var a = "", i = 0; !(i >= r / 2); ++i) {
                var u = z[e + 2 * i >> 1];
                if (0 == u)
                    break;
                a += String.fromCharCode(u)
            }
            return a
        }
        function G(e, r, n) {
            if (void 0 === n && (n = 2147483647),
            n < 2)
                return 0;
            for (var t = r, o = (n -= 2) < 2 * e.length ? n / 2 : e.length, a = 0; a < o; ++a) {
                var i = e.charCodeAt(a);
                z[r >> 1] = i,
                r += 2
            }
            return z[r >> 1] = 0,
            r - t
        }
        function Y(e) {
            return 2 * e.length
        }
        function V(e, r) {
            for (var n = 0, t = ""; !(n >= r / 4); ) {
                var o = U[e + 4 * n >> 2];
                if (0 == o)
                    break;
                if (++n,
                o >= 65536) {
                    var a = o - 65536;
                    t += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                } else
                    t += String.fromCharCode(o)
            }
            return t
        }
        function q(e, r, n) {
            if (void 0 === n && (n = 2147483647),
            n < 4)
                return 0;
            for (var t = r, o = t + n - 4, a = 0; a < e.length; ++a) {
                var i = e.charCodeAt(a);
                if (i >= 55296 && i <= 57343)
                    i = 65536 + ((1023 & i) << 10) | 1023 & e.charCodeAt(++a);
                if (U[r >> 2] = i,
                (r += 4) + 4 > o)
                    break
            }
            return U[r >> 2] = 0,
            r - t
        }
        function X(e) {
            for (var r = 0, n = 0; n < e.length; ++n) {
                var t = e.charCodeAt(n);
                t >= 55296 && t <= 57343 && ++n,
                r += 4
            }
            return r
        }
        function J(e) {
            var r = j(e) + 1
              , n = Rr(r);
            return n && C(e, x, n, r),
            n
        }
        function K(e) {
            R = e,
            n.HEAP8 = x = new Int8Array(e),
            n.HEAP16 = z = new Int16Array(e),
            n.HEAP32 = U = new Int32Array(e),
            n.HEAPU8 = O = new Uint8Array(e),
            n.HEAPU16 = B = new Uint16Array(e),
            n.HEAPU32 = N = new Uint32Array(e),
            n.HEAPF32 = I = new Float32Array(e),
            n.HEAPF64 = H = new Float64Array(e)
        }
        n.INITIAL_MEMORY;
        var $, Z = [], Q = [], ee = [], re = 0;
        function ne() {
            return F || re > 0
        }
        var te = 0
          , oe = null
          , ae = null;
        function ie(e) {
            te++,
            n.monitorRunDependencies && n.monitorRunDependencies(te)
        }
        function ue(e) {
            if (te--,
            n.monitorRunDependencies && n.monitorRunDependencies(te),
            0 == te && (null !== oe && (clearInterval(oe),
            oe = null),
            ae)) {
                var r = ae;
                ae = null,
                r()
            }
        }
        function se(e) {
            throw n.onAbort && n.onAbort(e),
            _(e = "Aborted(" + e + ")"),
            T = !0,
            1,
            e += ". Build with -s ASSERTIONS=1 for more info.",
            new WebAssembly.RuntimeError(e)
        }
        n.preloadedImages = {},
        n.preloadedAudios = {};
        var ce, fe, le, de, pe = "data:application/octet-stream;base64,";
        function me(e) {
            return e.startsWith(pe)
        }
        function he(e) {
            return e.startsWith("file://")
        }
        function ve(e) {
            try {
                if (e == ce && E)
                    return new Uint8Array(E);
                if (c)
                    return c(e);
                throw "both async and sync fetching of the wasm failed"
            } catch (e) {
                se(e)
            }
        }
        function ye(e) {
            for (; e.length > 0; ) {
                var r = e.shift();
                if ("function" != typeof r) {
                    var t = r.func;
                    "number" == typeof t ? void 0 === r.arg ? we(t)() : we(t)(r.arg) : t(void 0 === r.arg ? null : r.arg)
                } else
                    r(n)
            }
        }
        me(ce = "parser_helper_x.wasm") || (fe = ce,
        ce = n.locateFile ? n.locateFile(fe, g) : g + fe);
        var ge = [];
        function we(e) {
            var r = ge[e];
            return r || (e >= ge.length && (ge.length = e + 1),
            ge[e] = r = $.get(e)),
            r
        }
        function _e(e) {
            this.excPtr = e,
            this.ptr = e - 16,
            this.set_type = function(e) {
                U[this.ptr + 4 >> 2] = e
            }
            ,
            this.get_type = function() {
                return U[this.ptr + 4 >> 2]
            }
            ,
            this.set_destructor = function(e) {
                U[this.ptr + 8 >> 2] = e
            }
            ,
            this.get_destructor = function() {
                return U[this.ptr + 8 >> 2]
            }
            ,
            this.set_refcount = function(e) {
                U[this.ptr >> 2] = e
            }
            ,
            this.set_caught = function(e) {
                e = e ? 1 : 0,
                x[this.ptr + 12 >> 0] = e
            }
            ,
            this.get_caught = function() {
                return 0 != x[this.ptr + 12 >> 0]
            }
            ,
            this.set_rethrown = function(e) {
                e = e ? 1 : 0,
                x[this.ptr + 13 >> 0] = e
            }
            ,
            this.get_rethrown = function() {
                return 0 != x[this.ptr + 13 >> 0]
            }
            ,
            this.init = function(e, r) {
                this.set_type(e),
                this.set_destructor(r),
                this.set_refcount(0),
                this.set_caught(!1),
                this.set_rethrown(!1)
            }
            ,
            this.add_ref = function() {
                var e = U[this.ptr >> 2];
                U[this.ptr >> 2] = e + 1
            }
            ,
            this.release_ref = function() {
                var e = U[this.ptr >> 2];
                return U[this.ptr >> 2] = e - 1,
                1 === e
            }
        }
        function Ee(e, r) {
            var n = new Date(1e3 * U[e >> 2]);
            U[r >> 2] = n.getUTCSeconds(),
            U[r + 4 >> 2] = n.getUTCMinutes(),
            U[r + 8 >> 2] = n.getUTCHours(),
            U[r + 12 >> 2] = n.getUTCDate(),
            U[r + 16 >> 2] = n.getUTCMonth(),
            U[r + 20 >> 2] = n.getUTCFullYear() - 1900,
            U[r + 24 >> 2] = n.getUTCDay(),
            U[r + 36 >> 2] = 0,
            U[r + 32 >> 2] = 0;
            var t = Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0)
              , o = (n.getTime() - t) / 864e5 | 0;
            return U[r + 28 >> 2] = o,
            Ee.GMTString || (Ee.GMTString = J("GMT")),
            U[r + 40 >> 2] = Ee.GMTString,
            r
        }
        var be = {
            splitPath: function(e) {
                return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1)
            },
            normalizeArray: function(e, r) {
                for (var n = 0, t = e.length - 1; t >= 0; t--) {
                    var o = e[t];
                    "." === o ? e.splice(t, 1) : ".." === o ? (e.splice(t, 1),
                    n++) : n && (e.splice(t, 1),
                    n--)
                }
                if (r)
                    for (; n; n--)
                        e.unshift("..");
                return e
            },
            normalize: function(e) {
                var r = "/" === e.charAt(0)
                  , n = "/" === e.substr(-1);
                return (e = be.normalizeArray(e.split("/").filter((function(e) {
                    return !!e
                }
                )), !r).join("/")) || r || (e = "."),
                e && n && (e += "/"),
                (r ? "/" : "") + e
            },
            dirname: function(e) {
                var r = be.splitPath(e)
                  , n = r[0]
                  , t = r[1];
                return n || t ? (t && (t = t.substr(0, t.length - 1)),
                n + t) : "."
            },
            basename: function(e) {
                if ("/" === e)
                    return "/";
                var r = (e = (e = be.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                return -1 === r ? e : e.substr(r + 1)
            },
            extname: function(e) {
                return be.splitPath(e)[3]
            },
            join: function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return be.normalize(e.join("/"))
            },
            join2: function(e, r) {
                return be.normalize(e + "/" + r)
            }
        };
        var ke = {
            resolve: function() {
                for (var e = "", r = !1, n = arguments.length - 1; n >= -1 && !r; n--) {
                    var t = n >= 0 ? arguments[n] : De.cwd();
                    if ("string" != typeof t)
                        throw new TypeError("Arguments to path.resolve must be strings");
                    if (!t)
                        return "";
                    e = t + "/" + e,
                    r = "/" === t.charAt(0)
                }
                return (r ? "/" : "") + (e = be.normalizeArray(e.split("/").filter((function(e) {
                    return !!e
                }
                )), !r).join("/")) || "."
            },
            relative: function(e, r) {
                function n(e) {
                    for (var r = 0; r < e.length && "" === e[r]; r++)
                        ;
                    for (var n = e.length - 1; n >= 0 && "" === e[n]; n--)
                        ;
                    return r > n ? [] : e.slice(r, n - r + 1)
                }
                e = ke.resolve(e).substr(1),
                r = ke.resolve(r).substr(1);
                for (var t = n(e.split("/")), o = n(r.split("/")), a = Math.min(t.length, o.length), i = a, u = 0; u < a; u++)
                    if (t[u] !== o[u]) {
                        i = u;
                        break
                    }
                var s = [];
                for (u = i; u < t.length; u++)
                    s.push("..");
                return (s = s.concat(o.slice(i))).join("/")
            }
        }
          , Fe = {
            ttys: [],
            init: function() {},
            shutdown: function() {},
            register: function(e, r) {
                Fe.ttys[e] = {
                    input: [],
                    output: [],
                    ops: r
                },
                De.registerDevice(e, Fe.stream_ops)
            },
            stream_ops: {
                open: function(e) {
                    var r = Fe.ttys[e.node.rdev];
                    if (!r)
                        throw new De.ErrnoError(43);
                    e.tty = r,
                    e.seekable = !1
                },
                close: function(e) {
                    e.tty.ops.flush(e.tty)
                },
                flush: function(e) {
                    e.tty.ops.flush(e.tty)
                },
                read: function(e, r, n, t, o) {
                    if (!e.tty || !e.tty.ops.get_char)
                        throw new De.ErrnoError(60);
                    for (var a = 0, i = 0; i < t; i++) {
                        var u;
                        try {
                            u = e.tty.ops.get_char(e.tty)
                        } catch (e) {
                            throw new De.ErrnoError(29)
                        }
                        if (void 0 === u && 0 === a)
                            throw new De.ErrnoError(6);
                        if (null == u)
                            break;
                        a++,
                        r[n + i] = u
                    }
                    return a && (e.node.timestamp = Date.now()),
                    a
                },
                write: function(e, r, n, t, o) {
                    if (!e.tty || !e.tty.ops.put_char)
                        throw new De.ErrnoError(60);
                    try {
                        for (var a = 0; a < t; a++)
                            e.tty.ops.put_char(e.tty, r[n + a])
                    } catch (e) {
                        throw new De.ErrnoError(29)
                    }
                    return t && (e.node.timestamp = Date.now()),
                    a
                }
            },
            default_tty_ops: {
                get_char: function(e) {
                    if (!e.input.length) {
                        var n = null;
                        if (y) {
                            var t = Buffer.alloc(256)
                              , o = 0;
                            try {
                                o = f.readSync(r.stdin.fd, t, 0, 256, null)
                            } catch (e) {
                                if (!e.toString().includes("EOF"))
                                    throw e;
                                o = 0
                            }
                            n = o > 0 ? t.slice(0, o).toString("utf-8") : null
                        } else
                            "undefined" != typeof window && "function" == typeof window.prompt ? null !== (n = window.prompt("Input: ")) && (n += "\n") : "function" == typeof readline && null !== (n = readline()) && (n += "\n");
                        if (!n)
                            return null;
                        e.input = Cr(n, !0)
                    }
                    return e.input.shift()
                },
                put_char: function(e, r) {
                    null === r || 10 === r ? (w(A(e.output, 0)),
                    e.output = []) : 0 != r && e.output.push(r)
                },
                flush: function(e) {
                    e.output && e.output.length > 0 && (w(A(e.output, 0)),
                    e.output = [])
                }
            },
            default_tty1_ops: {
                put_char: function(e, r) {
                    null === r || 10 === r ? (_(A(e.output, 0)),
                    e.output = []) : 0 != r && e.output.push(r)
                },
                flush: function(e) {
                    e.output && e.output.length > 0 && (_(A(e.output, 0)),
                    e.output = [])
                }
            }
        };
        function Te(e) {
            e = function(e, r) {
                return Math.ceil(e / r) * r
            }(e, 65536);
            var r = Lr(65536, e);
            return r ? (function(e, r) {
                O.fill(0, e, e + r)
            }(r, e),
            r) : 0
        }
        var Se = {
            ops_table: null,
            mount: function(e) {
                return Se.createNode(null, "/", 16895, 0)
            },
            createNode: function(e, r, n, t) {
                if (De.isBlkdev(n) || De.isFIFO(n))
                    throw new De.ErrnoError(63);
                Se.ops_table || (Se.ops_table = {
                    dir: {
                        node: {
                            getattr: Se.node_ops.getattr,
                            setattr: Se.node_ops.setattr,
                            lookup: Se.node_ops.lookup,
                            mknod: Se.node_ops.mknod,
                            rename: Se.node_ops.rename,
                            unlink: Se.node_ops.unlink,
                            rmdir: Se.node_ops.rmdir,
                            readdir: Se.node_ops.readdir,
                            symlink: Se.node_ops.symlink
                        },
                        stream: {
                            llseek: Se.stream_ops.llseek
                        }
                    },
                    file: {
                        node: {
                            getattr: Se.node_ops.getattr,
                            setattr: Se.node_ops.setattr
                        },
                        stream: {
                            llseek: Se.stream_ops.llseek,
                            read: Se.stream_ops.read,
                            write: Se.stream_ops.write,
                            allocate: Se.stream_ops.allocate,
                            mmap: Se.stream_ops.mmap,
                            msync: Se.stream_ops.msync
                        }
                    },
                    link: {
                        node: {
                            getattr: Se.node_ops.getattr,
                            setattr: Se.node_ops.setattr,
                            readlink: Se.node_ops.readlink
                        },
                        stream: {}
                    },
                    chrdev: {
                        node: {
                            getattr: Se.node_ops.getattr,
                            setattr: Se.node_ops.setattr
                        },
                        stream: De.chrdev_stream_ops
                    }
                });
                var o = De.createNode(e, r, n, t);
                return De.isDir(o.mode) ? (o.node_ops = Se.ops_table.dir.node,
                o.stream_ops = Se.ops_table.dir.stream,
                o.contents = {}) : De.isFile(o.mode) ? (o.node_ops = Se.ops_table.file.node,
                o.stream_ops = Se.ops_table.file.stream,
                o.usedBytes = 0,
                o.contents = null) : De.isLink(o.mode) ? (o.node_ops = Se.ops_table.link.node,
                o.stream_ops = Se.ops_table.link.stream) : De.isChrdev(o.mode) && (o.node_ops = Se.ops_table.chrdev.node,
                o.stream_ops = Se.ops_table.chrdev.stream),
                o.timestamp = Date.now(),
                e && (e.contents[r] = o,
                e.timestamp = o.timestamp),
                o
            },
            getFileDataAsTypedArray: function(e) {
                return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0)
            },
            expandFileStorage: function(e, r) {
                var n = e.contents ? e.contents.length : 0;
                if (!(n >= r)) {
                    r = Math.max(r, n * (n < 1048576 ? 2 : 1.125) >>> 0),
                    0 != n && (r = Math.max(r, 256));
                    var t = e.contents;
                    e.contents = new Uint8Array(r),
                    e.usedBytes > 0 && e.contents.set(t.subarray(0, e.usedBytes), 0)
                }
            },
            resizeFileStorage: function(e, r) {
                if (e.usedBytes != r)
                    if (0 == r)
                        e.contents = null,
                        e.usedBytes = 0;
                    else {
                        var n = e.contents;
                        e.contents = new Uint8Array(r),
                        n && e.contents.set(n.subarray(0, Math.min(r, e.usedBytes))),
                        e.usedBytes = r
                    }
            },
            node_ops: {
                getattr: function(e) {
                    var r = {};
                    return r.dev = De.isChrdev(e.mode) ? e.id : 1,
                    r.ino = e.id,
                    r.mode = e.mode,
                    r.nlink = 1,
                    r.uid = 0,
                    r.gid = 0,
                    r.rdev = e.rdev,
                    De.isDir(e.mode) ? r.size = 4096 : De.isFile(e.mode) ? r.size = e.usedBytes : De.isLink(e.mode) ? r.size = e.link.length : r.size = 0,
                    r.atime = new Date(e.timestamp),
                    r.mtime = new Date(e.timestamp),
                    r.ctime = new Date(e.timestamp),
                    r.blksize = 4096,
                    r.blocks = Math.ceil(r.size / r.blksize),
                    r
                },
                setattr: function(e, r) {
                    void 0 !== r.mode && (e.mode = r.mode),
                    void 0 !== r.timestamp && (e.timestamp = r.timestamp),
                    void 0 !== r.size && Se.resizeFileStorage(e, r.size)
                },
                lookup: function(e, r) {
                    throw De.genericErrors[44]
                },
                mknod: function(e, r, n, t) {
                    return Se.createNode(e, r, n, t)
                },
                rename: function(e, r, n) {
                    if (De.isDir(e.mode)) {
                        var t;
                        try {
                            t = De.lookupNode(r, n)
                        } catch (e) {}
                        if (t)
                            for (var o in t.contents)
                                throw new De.ErrnoError(55)
                    }
                    delete e.parent.contents[e.name],
                    e.parent.timestamp = Date.now(),
                    e.name = n,
                    r.contents[n] = e,
                    r.timestamp = e.parent.timestamp,
                    e.parent = r
                },
                unlink: function(e, r) {
                    delete e.contents[r],
                    e.timestamp = Date.now()
                },
                rmdir: function(e, r) {
                    var n = De.lookupNode(e, r);
                    for (var t in n.contents)
                        throw new De.ErrnoError(55);
                    delete e.contents[r],
                    e.timestamp = Date.now()
                },
                readdir: function(e) {
                    var r = [".", ".."];
                    for (var n in e.contents)
                        e.contents.hasOwnProperty(n) && r.push(n);
                    return r
                },
                symlink: function(e, r, n) {
                    var t = Se.createNode(e, r, 41471, 0);
                    return t.link = n,
                    t
                },
                readlink: function(e) {
                    if (!De.isLink(e.mode))
                        throw new De.ErrnoError(28);
                    return e.link
                }
            },
            stream_ops: {
                read: function(e, r, n, t, o) {
                    var a = e.node.contents;
                    if (o >= e.node.usedBytes)
                        return 0;
                    var i = Math.min(e.node.usedBytes - o, t);
                    if (i > 8 && a.subarray)
                        r.set(a.subarray(o, o + i), n);
                    else
                        for (var u = 0; u < i; u++)
                            r[n + u] = a[o + u];
                    return i
                },
                write: function(e, r, n, t, o, a) {
                    if (r.buffer === x.buffer && (a = !1),
                    !t)
                        return 0;
                    var i = e.node;
                    if (i.timestamp = Date.now(),
                    r.subarray && (!i.contents || i.contents.subarray)) {
                        if (a)
                            return i.contents = r.subarray(n, n + t),
                            i.usedBytes = t,
                            t;
                        if (0 === i.usedBytes && 0 === o)
                            return i.contents = r.slice(n, n + t),
                            i.usedBytes = t,
                            t;
                        if (o + t <= i.usedBytes)
                            return i.contents.set(r.subarray(n, n + t), o),
                            t
                    }
                    if (Se.expandFileStorage(i, o + t),
                    i.contents.subarray && r.subarray)
                        i.contents.set(r.subarray(n, n + t), o);
                    else
                        for (var u = 0; u < t; u++)
                            i.contents[o + u] = r[n + u];
                    return i.usedBytes = Math.max(i.usedBytes, o + t),
                    t
                },
                llseek: function(e, r, n) {
                    var t = r;
                    if (1 === n ? t += e.position : 2 === n && De.isFile(e.node.mode) && (t += e.node.usedBytes),
                    t < 0)
                        throw new De.ErrnoError(28);
                    return t
                },
                allocate: function(e, r, n) {
                    Se.expandFileStorage(e.node, r + n),
                    e.node.usedBytes = Math.max(e.node.usedBytes, r + n)
                },
                mmap: function(e, r, n, t, o, a) {
                    if (0 !== r)
                        throw new De.ErrnoError(28);
                    if (!De.isFile(e.node.mode))
                        throw new De.ErrnoError(43);
                    var i, u, s = e.node.contents;
                    if (2 & a || s.buffer !== R) {
                        if ((t > 0 || t + n < s.length) && (s = s.subarray ? s.subarray(t, t + n) : Array.prototype.slice.call(s, t, t + n)),
                        u = !0,
                        !(i = Te(n)))
                            throw new De.ErrnoError(48);
                        x.set(s, i)
                    } else
                        u = !1,
                        i = s.byteOffset;
                    return {
                        ptr: i,
                        allocated: u
                    }
                },
                msync: function(e, r, n, t, o) {
                    if (!De.isFile(e.node.mode))
                        throw new De.ErrnoError(43);
                    if (2 & o)
                        return 0;
                    Se.stream_ops.write(e, r, 0, t, n, !1);
                    return 0
                }
            }
        };
        var De = {
            root: null,
            mounts: [],
            devices: {},
            streams: [],
            nextInode: 1,
            nameTable: null,
            currentPath: "/",
            initialized: !1,
            ignorePermissions: !0,
            ErrnoError: null,
            genericErrors: {},
            filesystems: null,
            syncFSRequests: 0,
            lookupPath: function(e, r) {
                if (r = r || {},
                !(e = ke.resolve(De.cwd(), e)))
                    return {
                        path: "",
                        node: null
                    };
                var n = {
                    follow_mount: !0,
                    recurse_count: 0
                };
                for (var t in n)
                    void 0 === r[t] && (r[t] = n[t]);
                if (r.recurse_count > 8)
                    throw new De.ErrnoError(32);
                for (var o = be.normalizeArray(e.split("/").filter((function(e) {
                    return !!e
                }
                )), !1), a = De.root, i = "/", u = 0; u < o.length; u++) {
                    var s = u === o.length - 1;
                    if (s && r.parent)
                        break;
                    if (a = De.lookupNode(a, o[u]),
                    i = be.join2(i, o[u]),
                    De.isMountpoint(a) && (!s || s && r.follow_mount) && (a = a.mounted.root),
                    !s || r.follow)
                        for (var c = 0; De.isLink(a.mode); ) {
                            var f = De.readlink(i);
                            if (i = ke.resolve(be.dirname(i), f),
                            a = De.lookupPath(i, {
                                recurse_count: r.recurse_count
                            }).node,
                            c++ > 40)
                                throw new De.ErrnoError(32)
                        }
                }
                return {
                    path: i,
                    node: a
                }
            },
            getPath: function(e) {
                for (var r; ; ) {
                    if (De.isRoot(e)) {
                        var n = e.mount.mountpoint;
                        return r ? "/" !== n[n.length - 1] ? n + "/" + r : n + r : n
                    }
                    r = r ? e.name + "/" + r : e.name,
                    e = e.parent
                }
            },
            hashName: function(e, r) {
                for (var n = 0, t = 0; t < r.length; t++)
                    n = (n << 5) - n + r.charCodeAt(t) | 0;
                return (e + n >>> 0) % De.nameTable.length
            },
            hashAddNode: function(e) {
                var r = De.hashName(e.parent.id, e.name);
                e.name_next = De.nameTable[r],
                De.nameTable[r] = e
            },
            hashRemoveNode: function(e) {
                var r = De.hashName(e.parent.id, e.name);
                if (De.nameTable[r] === e)
                    De.nameTable[r] = e.name_next;
                else
                    for (var n = De.nameTable[r]; n; ) {
                        if (n.name_next === e) {
                            n.name_next = e.name_next;
                            break
                        }
                        n = n.name_next
                    }
            },
            lookupNode: function(e, r) {
                var n = De.mayLookup(e);
                if (n)
                    throw new De.ErrnoError(n,e);
                for (var t = De.hashName(e.id, r), o = De.nameTable[t]; o; o = o.name_next) {
                    var a = o.name;
                    if (o.parent.id === e.id && a === r)
                        return o
                }
                return De.lookup(e, r)
            },
            createNode: function(e, r, n, t) {
                var o = new De.FSNode(e,r,n,t);
                return De.hashAddNode(o),
                o
            },
            destroyNode: function(e) {
                De.hashRemoveNode(e)
            },
            isRoot: function(e) {
                return e === e.parent
            },
            isMountpoint: function(e) {
                return !!e.mounted
            },
            isFile: function(e) {
                return 32768 == (61440 & e)
            },
            isDir: function(e) {
                return 16384 == (61440 & e)
            },
            isLink: function(e) {
                return 40960 == (61440 & e)
            },
            isChrdev: function(e) {
                return 8192 == (61440 & e)
            },
            isBlkdev: function(e) {
                return 24576 == (61440 & e)
            },
            isFIFO: function(e) {
                return 4096 == (61440 & e)
            },
            isSocket: function(e) {
                return 49152 == (49152 & e)
            },
            flagModes: {
                r: 0,
                "r+": 2,
                w: 577,
                "w+": 578,
                a: 1089,
                "a+": 1090
            },
            modeStringToFlags: function(e) {
                var r = De.flagModes[e];
                if (void 0 === r)
                    throw new Error("Unknown file open mode: " + e);
                return r
            },
            flagsToPermissionString: function(e) {
                var r = ["r", "w", "rw"][3 & e];
                return 512 & e && (r += "w"),
                r
            },
            nodePermissions: function(e, r) {
                return De.ignorePermissions || (!r.includes("r") || 292 & e.mode) && (!r.includes("w") || 146 & e.mode) && (!r.includes("x") || 73 & e.mode) ? 0 : 2
            },
            mayLookup: function(e) {
                var r = De.nodePermissions(e, "x");
                return r || (e.node_ops.lookup ? 0 : 2)
            },
            mayCreate: function(e, r) {
                try {
                    De.lookupNode(e, r);
                    return 20
                } catch (e) {}
                return De.nodePermissions(e, "wx")
            },
            mayDelete: function(e, r, n) {
                var t;
                try {
                    t = De.lookupNode(e, r)
                } catch (e) {
                    return e.errno
                }
                var o = De.nodePermissions(e, "wx");
                if (o)
                    return o;
                if (n) {
                    if (!De.isDir(t.mode))
                        return 54;
                    if (De.isRoot(t) || De.getPath(t) === De.cwd())
                        return 10
                } else if (De.isDir(t.mode))
                    return 31;
                return 0
            },
            mayOpen: function(e, r) {
                return e ? De.isLink(e.mode) ? 32 : De.isDir(e.mode) && ("r" !== De.flagsToPermissionString(r) || 512 & r) ? 31 : De.nodePermissions(e, De.flagsToPermissionString(r)) : 44
            },
            MAX_OPEN_FDS: 4096,
            nextfd: function(e, r) {
                e = e || 0,
                r = r || De.MAX_OPEN_FDS;
                for (var n = e; n <= r; n++)
                    if (!De.streams[n])
                        return n;
                throw new De.ErrnoError(33)
            },
            getStream: function(e) {
                return De.streams[e]
            },
            createStream: function(e, r, n) {
                De.FSStream || (De.FSStream = function() {}
                ,
                De.FSStream.prototype = {
                    object: {
                        get: function() {
                            return this.node
                        },
                        set: function(e) {
                            this.node = e
                        }
                    },
                    isRead: {
                        get: function() {
                            return 1 != (2097155 & this.flags)
                        }
                    },
                    isWrite: {
                        get: function() {
                            return 0 != (2097155 & this.flags)
                        }
                    },
                    isAppend: {
                        get: function() {
                            return 1024 & this.flags
                        }
                    }
                });
                var t = new De.FSStream;
                for (var o in e)
                    t[o] = e[o];
                e = t;
                var a = De.nextfd(r, n);
                return e.fd = a,
                De.streams[a] = e,
                e
            },
            closeStream: function(e) {
                De.streams[e] = null
            },
            chrdev_stream_ops: {
                open: function(e) {
                    var r = De.getDevice(e.node.rdev);
                    e.stream_ops = r.stream_ops,
                    e.stream_ops.open && e.stream_ops.open(e)
                },
                llseek: function() {
                    throw new De.ErrnoError(70)
                }
            },
            major: function(e) {
                return e >> 8
            },
            minor: function(e) {
                return 255 & e
            },
            makedev: function(e, r) {
                return e << 8 | r
            },
            registerDevice: function(e, r) {
                De.devices[e] = {
                    stream_ops: r
                }
            },
            getDevice: function(e) {
                return De.devices[e]
            },
            getMounts: function(e) {
                for (var r = [], n = [e]; n.length; ) {
                    var t = n.pop();
                    r.push(t),
                    n.push.apply(n, t.mounts)
                }
                return r
            },
            syncfs: function(e, r) {
                "function" == typeof e && (r = e,
                e = !1),
                De.syncFSRequests++,
                De.syncFSRequests > 1 && _("warning: " + De.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                var n = De.getMounts(De.root.mount)
                  , t = 0;
                function o(e) {
                    return De.syncFSRequests--,
                    r(e)
                }
                function a(e) {
                    if (e)
                        return a.errored ? void 0 : (a.errored = !0,
                        o(e));
                    ++t >= n.length && o(null)
                }
                n.forEach((function(r) {
                    if (!r.type.syncfs)
                        return a(null);
                    r.type.syncfs(r, e, a)
                }
                ))
            },
            mount: function(e, r, n) {
                var t, o = "/" === n, a = !n;
                if (o && De.root)
                    throw new De.ErrnoError(10);
                if (!o && !a) {
                    var i = De.lookupPath(n, {
                        follow_mount: !1
                    });
                    if (n = i.path,
                    t = i.node,
                    De.isMountpoint(t))
                        throw new De.ErrnoError(10);
                    if (!De.isDir(t.mode))
                        throw new De.ErrnoError(54)
                }
                var u = {
                    type: e,
                    opts: r,
                    mountpoint: n,
                    mounts: []
                }
                  , s = e.mount(u);
                return s.mount = u,
                u.root = s,
                o ? De.root = s : t && (t.mounted = u,
                t.mount && t.mount.mounts.push(u)),
                s
            },
            unmount: function(e) {
                var r = De.lookupPath(e, {
                    follow_mount: !1
                });
                if (!De.isMountpoint(r.node))
                    throw new De.ErrnoError(28);
                var n = r.node
                  , t = n.mounted
                  , o = De.getMounts(t);
                Object.keys(De.nameTable).forEach((function(e) {
                    for (var r = De.nameTable[e]; r; ) {
                        var n = r.name_next;
                        o.includes(r.mount) && De.destroyNode(r),
                        r = n
                    }
                }
                )),
                n.mounted = null;
                var a = n.mount.mounts.indexOf(t);
                n.mount.mounts.splice(a, 1)
            },
            lookup: function(e, r) {
                return e.node_ops.lookup(e, r)
            },
            mknod: function(e, r, n) {
                var t = De.lookupPath(e, {
                    parent: !0
                }).node
                  , o = be.basename(e);
                if (!o || "." === o || ".." === o)
                    throw new De.ErrnoError(28);
                var a = De.mayCreate(t, o);
                if (a)
                    throw new De.ErrnoError(a);
                if (!t.node_ops.mknod)
                    throw new De.ErrnoError(63);
                return t.node_ops.mknod(t, o, r, n)
            },
            create: function(e, r) {
                return r = void 0 !== r ? r : 438,
                r &= 4095,
                r |= 32768,
                De.mknod(e, r, 0)
            },
            mkdir: function(e, r) {
                return r = void 0 !== r ? r : 511,
                r &= 1023,
                r |= 16384,
                De.mknod(e, r, 0)
            },
            mkdirTree: function(e, r) {
                for (var n = e.split("/"), t = "", o = 0; o < n.length; ++o)
                    if (n[o]) {
                        t += "/" + n[o];
                        try {
                            De.mkdir(t, r)
                        } catch (e) {
                            if (20 != e.errno)
                                throw e
                        }
                    }
            },
            mkdev: function(e, r, n) {
                return void 0 === n && (n = r,
                r = 438),
                r |= 8192,
                De.mknod(e, r, n)
            },
            symlink: function(e, r) {
                if (!ke.resolve(e))
                    throw new De.ErrnoError(44);
                var n = De.lookupPath(r, {
                    parent: !0
                }).node;
                if (!n)
                    throw new De.ErrnoError(44);
                var t = be.basename(r)
                  , o = De.mayCreate(n, t);
                if (o)
                    throw new De.ErrnoError(o);
                if (!n.node_ops.symlink)
                    throw new De.ErrnoError(63);
                return n.node_ops.symlink(n, t, e)
            },
            rename: function(e, r) {
                var n, t, o = be.dirname(e), a = be.dirname(r), i = be.basename(e), u = be.basename(r);
                if (n = De.lookupPath(e, {
                    parent: !0
                }).node,
                t = De.lookupPath(r, {
                    parent: !0
                }).node,
                !n || !t)
                    throw new De.ErrnoError(44);
                if (n.mount !== t.mount)
                    throw new De.ErrnoError(75);
                var s, c = De.lookupNode(n, i), f = ke.relative(e, a);
                if ("." !== f.charAt(0))
                    throw new De.ErrnoError(28);
                if ("." !== (f = ke.relative(r, o)).charAt(0))
                    throw new De.ErrnoError(55);
                try {
                    s = De.lookupNode(t, u)
                } catch (e) {}
                if (c !== s) {
                    var l = De.isDir(c.mode)
                      , d = De.mayDelete(n, i, l);
                    if (d)
                        throw new De.ErrnoError(d);
                    if (d = s ? De.mayDelete(t, u, l) : De.mayCreate(t, u))
                        throw new De.ErrnoError(d);
                    if (!n.node_ops.rename)
                        throw new De.ErrnoError(63);
                    if (De.isMountpoint(c) || s && De.isMountpoint(s))
                        throw new De.ErrnoError(10);
                    if (t !== n && (d = De.nodePermissions(n, "w")))
                        throw new De.ErrnoError(d);
                    De.hashRemoveNode(c);
                    try {
                        n.node_ops.rename(c, t, u)
                    } catch (e) {
                        throw e
                    } finally {
                        De.hashAddNode(c)
                    }
                }
            },
            rmdir: function(e) {
                var r = De.lookupPath(e, {
                    parent: !0
                }).node
                  , n = be.basename(e)
                  , t = De.lookupNode(r, n)
                  , o = De.mayDelete(r, n, !0);
                if (o)
                    throw new De.ErrnoError(o);
                if (!r.node_ops.rmdir)
                    throw new De.ErrnoError(63);
                if (De.isMountpoint(t))
                    throw new De.ErrnoError(10);
                r.node_ops.rmdir(r, n),
                De.destroyNode(t)
            },
            readdir: function(e) {
                var r = De.lookupPath(e, {
                    follow: !0
                }).node;
                if (!r.node_ops.readdir)
                    throw new De.ErrnoError(54);
                return r.node_ops.readdir(r)
            },
            unlink: function(e) {
                var r = De.lookupPath(e, {
                    parent: !0
                }).node
                  , n = be.basename(e)
                  , t = De.lookupNode(r, n)
                  , o = De.mayDelete(r, n, !1);
                if (o)
                    throw new De.ErrnoError(o);
                if (!r.node_ops.unlink)
                    throw new De.ErrnoError(63);
                if (De.isMountpoint(t))
                    throw new De.ErrnoError(10);
                r.node_ops.unlink(r, n),
                De.destroyNode(t)
            },
            readlink: function(e) {
                var r = De.lookupPath(e).node;
                if (!r)
                    throw new De.ErrnoError(44);
                if (!r.node_ops.readlink)
                    throw new De.ErrnoError(28);
                return ke.resolve(De.getPath(r.parent), r.node_ops.readlink(r))
            },
            stat: function(e, r) {
                var n = De.lookupPath(e, {
                    follow: !r
                }).node;
                if (!n)
                    throw new De.ErrnoError(44);
                if (!n.node_ops.getattr)
                    throw new De.ErrnoError(63);
                return n.node_ops.getattr(n)
            },
            lstat: function(e) {
                return De.stat(e, !0)
            },
            chmod: function(e, r, n) {
                var t;
                "string" == typeof e ? t = De.lookupPath(e, {
                    follow: !n
                }).node : t = e;
                if (!t.node_ops.setattr)
                    throw new De.ErrnoError(63);
                t.node_ops.setattr(t, {
                    mode: 4095 & r | -4096 & t.mode,
                    timestamp: Date.now()
                })
            },
            lchmod: function(e, r) {
                De.chmod(e, r, !0)
            },
            fchmod: function(e, r) {
                var n = De.getStream(e);
                if (!n)
                    throw new De.ErrnoError(8);
                De.chmod(n.node, r)
            },
            chown: function(e, r, n, t) {
                var o;
                "string" == typeof e ? o = De.lookupPath(e, {
                    follow: !t
                }).node : o = e;
                if (!o.node_ops.setattr)
                    throw new De.ErrnoError(63);
                o.node_ops.setattr(o, {
                    timestamp: Date.now()
                })
            },
            lchown: function(e, r, n) {
                De.chown(e, r, n, !0)
            },
            fchown: function(e, r, n) {
                var t = De.getStream(e);
                if (!t)
                    throw new De.ErrnoError(8);
                De.chown(t.node, r, n)
            },
            truncate: function(e, r) {
                if (r < 0)
                    throw new De.ErrnoError(28);
                var n;
                "string" == typeof e ? n = De.lookupPath(e, {
                    follow: !0
                }).node : n = e;
                if (!n.node_ops.setattr)
                    throw new De.ErrnoError(63);
                if (De.isDir(n.mode))
                    throw new De.ErrnoError(31);
                if (!De.isFile(n.mode))
                    throw new De.ErrnoError(28);
                var t = De.nodePermissions(n, "w");
                if (t)
                    throw new De.ErrnoError(t);
                n.node_ops.setattr(n, {
                    size: r,
                    timestamp: Date.now()
                })
            },
            ftruncate: function(e, r) {
                var n = De.getStream(e);
                if (!n)
                    throw new De.ErrnoError(8);
                if (0 == (2097155 & n.flags))
                    throw new De.ErrnoError(28);
                De.truncate(n.node, r)
            },
            utime: function(e, r, n) {
                var t = De.lookupPath(e, {
                    follow: !0
                }).node;
                t.node_ops.setattr(t, {
                    timestamp: Math.max(r, n)
                })
            },
            open: function(e, r, t, o, a) {
                if ("" === e)
                    throw new De.ErrnoError(44);
                var i;
                if (t = void 0 === t ? 438 : t,
                t = 64 & (r = "string" == typeof r ? De.modeStringToFlags(r) : r) ? 4095 & t | 32768 : 0,
                "object" == typeof e)
                    i = e;
                else {
                    e = be.normalize(e);
                    try {
                        i = De.lookupPath(e, {
                            follow: !(131072 & r)
                        }).node
                    } catch (e) {}
                }
                var u = !1;
                if (64 & r)
                    if (i) {
                        if (128 & r)
                            throw new De.ErrnoError(20)
                    } else
                        i = De.mknod(e, t, 0),
                        u = !0;
                if (!i)
                    throw new De.ErrnoError(44);
                if (De.isChrdev(i.mode) && (r &= -513),
                65536 & r && !De.isDir(i.mode))
                    throw new De.ErrnoError(54);
                if (!u) {
                    var s = De.mayOpen(i, r);
                    if (s)
                        throw new De.ErrnoError(s)
                }
                512 & r && De.truncate(i, 0),
                r &= -131713;
                var c = De.createStream({
                    node: i,
                    path: De.getPath(i),
                    id: i.id,
                    flags: r,
                    mode: i.mode,
                    seekable: !0,
                    position: 0,
                    stream_ops: i.stream_ops,
                    node_ops: i.node_ops,
                    ungotten: [],
                    error: !1
                }, o, a);
                return c.stream_ops.open && c.stream_ops.open(c),
                !n.logReadFiles || 1 & r || (De.readFiles || (De.readFiles = {}),
                e in De.readFiles || (De.readFiles[e] = 1)),
                c
            },
            close: function(e) {
                if (De.isClosed(e))
                    throw new De.ErrnoError(8);
                e.getdents && (e.getdents = null);
                try {
                    e.stream_ops.close && e.stream_ops.close(e)
                } catch (e) {
                    throw e
                } finally {
                    De.closeStream(e.fd)
                }
                e.fd = null
            },
            isClosed: function(e) {
                return null === e.fd
            },
            llseek: function(e, r, n) {
                if (De.isClosed(e))
                    throw new De.ErrnoError(8);
                if (!e.seekable || !e.stream_ops.llseek)
                    throw new De.ErrnoError(70);
                if (0 != n && 1 != n && 2 != n)
                    throw new De.ErrnoError(28);
                return e.position = e.stream_ops.llseek(e, r, n),
                e.ungotten = [],
                e.position
            },
            read: function(e, r, n, t, o) {
                if (t < 0 || o < 0)
                    throw new De.ErrnoError(28);
                if (De.isClosed(e))
                    throw new De.ErrnoError(8);
                if (1 == (2097155 & e.flags))
                    throw new De.ErrnoError(8);
                if (De.isDir(e.node.mode))
                    throw new De.ErrnoError(31);
                if (!e.stream_ops.read)
                    throw new De.ErrnoError(28);
                var a = void 0 !== o;
                if (a) {
                    if (!e.seekable)
                        throw new De.ErrnoError(70)
                } else
                    o = e.position;
                var i = e.stream_ops.read(e, r, n, t, o);
                return a || (e.position += i),
                i
            },
            write: function(e, r, n, t, o, a) {
                if (t < 0 || o < 0)
                    throw new De.ErrnoError(28);
                if (De.isClosed(e))
                    throw new De.ErrnoError(8);
                if (0 == (2097155 & e.flags))
                    throw new De.ErrnoError(8);
                if (De.isDir(e.node.mode))
                    throw new De.ErrnoError(31);
                if (!e.stream_ops.write)
                    throw new De.ErrnoError(28);
                e.seekable && 1024 & e.flags && De.llseek(e, 0, 2);
                var i = void 0 !== o;
                if (i) {
                    if (!e.seekable)
                        throw new De.ErrnoError(70)
                } else
                    o = e.position;
                var u = e.stream_ops.write(e, r, n, t, o, a);
                return i || (e.position += u),
                u
            },
            allocate: function(e, r, n) {
                if (De.isClosed(e))
                    throw new De.ErrnoError(8);
                if (r < 0 || n <= 0)
                    throw new De.ErrnoError(28);
                if (0 == (2097155 & e.flags))
                    throw new De.ErrnoError(8);
                if (!De.isFile(e.node.mode) && !De.isDir(e.node.mode))
                    throw new De.ErrnoError(43);
                if (!e.stream_ops.allocate)
                    throw new De.ErrnoError(138);
                e.stream_ops.allocate(e, r, n)
            },
            mmap: function(e, r, n, t, o, a) {
                if (0 != (2 & o) && 0 == (2 & a) && 2 != (2097155 & e.flags))
                    throw new De.ErrnoError(2);
                if (1 == (2097155 & e.flags))
                    throw new De.ErrnoError(2);
                if (!e.stream_ops.mmap)
                    throw new De.ErrnoError(43);
                return e.stream_ops.mmap(e, r, n, t, o, a)
            },
            msync: function(e, r, n, t, o) {
                return e && e.stream_ops.msync ? e.stream_ops.msync(e, r, n, t, o) : 0
            },
            munmap: function(e) {
                return 0
            },
            ioctl: function(e, r, n) {
                if (!e.stream_ops.ioctl)
                    throw new De.ErrnoError(59);
                return e.stream_ops.ioctl(e, r, n)
            },
            readFile: function(e, r) {
                if ((r = r || {}).flags = r.flags || 0,
                r.encoding = r.encoding || "binary",
                "utf8" !== r.encoding && "binary" !== r.encoding)
                    throw new Error('Invalid encoding type "' + r.encoding + '"');
                var n, t = De.open(e, r.flags), o = De.stat(e).size, a = new Uint8Array(o);
                return De.read(t, a, 0, o, 0),
                "utf8" === r.encoding ? n = A(a, 0) : "binary" === r.encoding && (n = a),
                De.close(t),
                n
            },
            writeFile: function(e, r, n) {
                (n = n || {}).flags = n.flags || 577;
                var t = De.open(e, n.flags, n.mode);
                if ("string" == typeof r) {
                    var o = new Uint8Array(j(r) + 1)
                      , a = C(r, o, 0, o.length);
                    De.write(t, o, 0, a, void 0, n.canOwn)
                } else {
                    if (!ArrayBuffer.isView(r))
                        throw new Error("Unsupported data type");
                    De.write(t, r, 0, r.byteLength, void 0, n.canOwn)
                }
                De.close(t)
            },
            cwd: function() {
                return De.currentPath
            },
            chdir: function(e) {
                var r = De.lookupPath(e, {
                    follow: !0
                });
                if (null === r.node)
                    throw new De.ErrnoError(44);
                if (!De.isDir(r.node.mode))
                    throw new De.ErrnoError(54);
                var n = De.nodePermissions(r.node, "x");
                if (n)
                    throw new De.ErrnoError(n);
                De.currentPath = r.path
            },
            createDefaultDirectories: function() {
                De.mkdir("/tmp"),
                De.mkdir("/home"),
                De.mkdir("/home/web_user")
            },
            createDefaultDevices: function() {
                De.mkdir("/dev"),
                De.registerDevice(De.makedev(1, 3), {
                    read: function() {
                        return 0
                    },
                    write: function(e, r, n, t, o) {
                        return t
                    }
                }),
                De.mkdev("/dev/null", De.makedev(1, 3)),
                Fe.register(De.makedev(5, 0), Fe.default_tty_ops),
                Fe.register(De.makedev(6, 0), Fe.default_tty1_ops),
                De.mkdev("/dev/tty", De.makedev(5, 0)),
                De.mkdev("/dev/tty1", De.makedev(6, 0));
                var r = function() {
                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                        var r = new Uint8Array(1);
                        return function() {
                            return crypto.getRandomValues(r),
                            r[0]
                        }
                    }
                    if (y)
                        try {
                            var n = e("crypto");
                            return function() {
                                return n.randomBytes(1)[0]
                            }
                        } catch (e) {}
                    return function() {
                        se("randomDevice")
                    }
                }();
                De.createDevice("/dev", "random", r),
                De.createDevice("/dev", "urandom", r),
                De.mkdir("/dev/shm"),
                De.mkdir("/dev/shm/tmp")
            },
            createSpecialDirectories: function() {
                De.mkdir("/proc");
                var e = De.mkdir("/proc/self");
                De.mkdir("/proc/self/fd"),
                De.mount({
                    mount: function() {
                        var r = De.createNode(e, "fd", 16895, 73);
                        return r.node_ops = {
                            lookup: function(e, r) {
                                var n = +r
                                  , t = De.getStream(n);
                                if (!t)
                                    throw new De.ErrnoError(8);
                                var o = {
                                    parent: null,
                                    mount: {
                                        mountpoint: "fake"
                                    },
                                    node_ops: {
                                        readlink: function() {
                                            return t.path
                                        }
                                    }
                                };
                                return o.parent = o,
                                o
                            }
                        },
                        r
                    }
                }, {}, "/proc/self/fd")
            },
            createStandardStreams: function() {
                n.stdin ? De.createDevice("/dev", "stdin", n.stdin) : De.symlink("/dev/tty", "/dev/stdin"),
                n.stdout ? De.createDevice("/dev", "stdout", null, n.stdout) : De.symlink("/dev/tty", "/dev/stdout"),
                n.stderr ? De.createDevice("/dev", "stderr", null, n.stderr) : De.symlink("/dev/tty1", "/dev/stderr");
                De.open("/dev/stdin", 0),
                De.open("/dev/stdout", 1),
                De.open("/dev/stderr", 1)
            },
            ensureErrnoError: function() {
                De.ErrnoError || (De.ErrnoError = function(e, r) {
                    this.node = r,
                    this.setErrno = function(e) {
                        this.errno = e
                    }
                    ,
                    this.setErrno(e),
                    this.message = "FS error"
                }
                ,
                De.ErrnoError.prototype = new Error,
                De.ErrnoError.prototype.constructor = De.ErrnoError,
                [44].forEach((function(e) {
                    De.genericErrors[e] = new De.ErrnoError(e),
                    De.genericErrors[e].stack = "<generic error, no stack>"
                }
                )))
            },
            staticInit: function() {
                De.ensureErrnoError(),
                De.nameTable = new Array(4096),
                De.mount(Se, {}, "/"),
                De.createDefaultDirectories(),
                De.createDefaultDevices(),
                De.createSpecialDirectories(),
                De.filesystems = {
                    MEMFS: Se
                }
            },
            init: function(e, r, t) {
                De.init.initialized = !0,
                De.ensureErrnoError(),
                n.stdin = e || n.stdin,
                n.stdout = r || n.stdout,
                n.stderr = t || n.stderr,
                De.createStandardStreams()
            },
            quit: function() {
                De.init.initialized = !1;
                var e = n._fflush;
                e && e(0);
                for (var r = 0; r < De.streams.length; r++) {
                    var t = De.streams[r];
                    t && De.close(t)
                }
            },
            getMode: function(e, r) {
                var n = 0;
                return e && (n |= 365),
                r && (n |= 146),
                n
            },
            findObject: function(e, r) {
                var n = De.analyzePath(e, r);
                return n.exists ? n.object : null
            },
            analyzePath: function(e, r) {
                try {
                    e = (t = De.lookupPath(e, {
                        follow: !r
                    })).path
                } catch (e) {}
                var n = {
                    isRoot: !1,
                    exists: !1,
                    error: 0,
                    name: null,
                    path: null,
                    object: null,
                    parentExists: !1,
                    parentPath: null,
                    parentObject: null
                };
                try {
                    var t = De.lookupPath(e, {
                        parent: !0
                    });
                    n.parentExists = !0,
                    n.parentPath = t.path,
                    n.parentObject = t.node,
                    n.name = be.basename(e),
                    t = De.lookupPath(e, {
                        follow: !r
                    }),
                    n.exists = !0,
                    n.path = t.path,
                    n.object = t.node,
                    n.name = t.node.name,
                    n.isRoot = "/" === t.path
                } catch (e) {
                    n.error = e.errno
                }
                return n
            },
            createPath: function(e, r, n, t) {
                e = "string" == typeof e ? e : De.getPath(e);
                for (var o = r.split("/").reverse(); o.length; ) {
                    var a = o.pop();
                    if (a) {
                        var i = be.join2(e, a);
                        try {
                            De.mkdir(i)
                        } catch (e) {}
                        e = i
                    }
                }
                return i
            },
            createFile: function(e, r, n, t, o) {
                var a = be.join2("string" == typeof e ? e : De.getPath(e), r)
                  , i = De.getMode(t, o);
                return De.create(a, i)
            },
            createDataFile: function(e, r, n, t, o, a) {
                var i = r ? be.join2("string" == typeof e ? e : De.getPath(e), r) : e
                  , u = De.getMode(t, o)
                  , s = De.create(i, u);
                if (n) {
                    if ("string" == typeof n) {
                        for (var c = new Array(n.length), f = 0, l = n.length; f < l; ++f)
                            c[f] = n.charCodeAt(f);
                        n = c
                    }
                    De.chmod(s, 146 | u);
                    var d = De.open(s, 577);
                    De.write(d, n, 0, n.length, 0, a),
                    De.close(d),
                    De.chmod(s, u)
                }
                return s
            },
            createDevice: function(e, r, n, t) {
                var o = be.join2("string" == typeof e ? e : De.getPath(e), r)
                  , a = De.getMode(!!n, !!t);
                De.createDevice.major || (De.createDevice.major = 64);
                var i = De.makedev(De.createDevice.major++, 0);
                return De.registerDevice(i, {
                    open: function(e) {
                        e.seekable = !1
                    },
                    close: function(e) {
                        t && t.buffer && t.buffer.length && t(10)
                    },
                    read: function(e, r, t, o, a) {
                        for (var i = 0, u = 0; u < o; u++) {
                            var s;
                            try {
                                s = n()
                            } catch (e) {
                                throw new De.ErrnoError(29)
                            }
                            if (void 0 === s && 0 === i)
                                throw new De.ErrnoError(6);
                            if (null == s)
                                break;
                            i++,
                            r[t + u] = s
                        }
                        return i && (e.node.timestamp = Date.now()),
                        i
                    },
                    write: function(e, r, n, o, a) {
                        for (var i = 0; i < o; i++)
                            try {
                                t(r[n + i])
                            } catch (e) {
                                throw new De.ErrnoError(29)
                            }
                        return o && (e.node.timestamp = Date.now()),
                        i
                    }
                }),
                De.mkdev(o, a, i)
            },
            forceLoadFile: function(e) {
                if (e.isDevice || e.isFolder || e.link || e.contents)
                    return !0;
                if ("undefined" != typeof XMLHttpRequest)
                    throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                if (!u)
                    throw new Error("Cannot load without read() or XMLHttpRequest.");
                try {
                    e.contents = Cr(u(e.url), !0),
                    e.usedBytes = e.contents.length
                } catch (e) {
                    throw new De.ErrnoError(29)
                }
            },
            createLazyFile: function(e, r, n, t, o) {
                function a() {
                    this.lengthKnown = !1,
                    this.chunks = []
                }
                if (a.prototype.get = function(e) {
                    if (!(e > this.length - 1 || e < 0)) {
                        var r = e % this.chunkSize
                          , n = e / this.chunkSize | 0;
                        return this.getter(n)[r]
                    }
                }
                ,
                a.prototype.setDataGetter = function(e) {
                    this.getter = e
                }
                ,
                a.prototype.cacheLength = function() {
                    var e = new XMLHttpRequest;
                    if (e.open("HEAD", n, !1),
                    e.send(null),
                    !(e.status >= 200 && e.status < 300 || 304 === e.status))
                        throw new Error("Couldn't load " + n + ". Status: " + e.status);
                    var r, t = Number(e.getResponseHeader("Content-length")), o = (r = e.getResponseHeader("Accept-Ranges")) && "bytes" === r, a = (r = e.getResponseHeader("Content-Encoding")) && "gzip" === r, i = 1048576;
                    o || (i = t);
                    var u = this;
                    u.setDataGetter((function(e) {
                        var r = e * i
                          , o = (e + 1) * i - 1;
                        if (o = Math.min(o, t - 1),
                        void 0 === u.chunks[e] && (u.chunks[e] = function(e, r) {
                            if (e > r)
                                throw new Error("invalid range (" + e + ", " + r + ") or no bytes requested!");
                            if (r > t - 1)
                                throw new Error("only " + t + " bytes available! programmer error!");
                            var o = new XMLHttpRequest;
                            if (o.open("GET", n, !1),
                            t !== i && o.setRequestHeader("Range", "bytes=" + e + "-" + r),
                            "undefined" != typeof Uint8Array && (o.responseType = "arraybuffer"),
                            o.overrideMimeType && o.overrideMimeType("text/plain; charset=x-user-defined"),
                            o.send(null),
                            !(o.status >= 200 && o.status < 300 || 304 === o.status))
                                throw new Error("Couldn't load " + n + ". Status: " + o.status);
                            return void 0 !== o.response ? new Uint8Array(o.response || []) : Cr(o.responseText || "", !0)
                        }(r, o)),
                        void 0 === u.chunks[e])
                            throw new Error("doXHR failed!");
                        return u.chunks[e]
                    }
                    )),
                    !a && t || (i = t = 1,
                    t = this.getter(0).length,
                    i = t,
                    w("LazyFiles on gzip forces download of the whole file when length is accessed")),
                    this._length = t,
                    this._chunkSize = i,
                    this.lengthKnown = !0
                }
                ,
                "undefined" != typeof XMLHttpRequest) {
                    if (!v)
                        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                    var i = new a;
                    Object.defineProperties(i, {
                        length: {
                            get: function() {
                                return this.lengthKnown || this.cacheLength(),
                                this._length
                            }
                        },
                        chunkSize: {
                            get: function() {
                                return this.lengthKnown || this.cacheLength(),
                                this._chunkSize
                            }
                        }
                    });
                    var u = {
                        isDevice: !1,
                        contents: i
                    }
                } else
                    u = {
                        isDevice: !1,
                        url: n
                    };
                var s = De.createFile(e, r, u, t, o);
                u.contents ? s.contents = u.contents : u.url && (s.contents = null,
                s.url = u.url),
                Object.defineProperties(s, {
                    usedBytes: {
                        get: function() {
                            return this.contents.length
                        }
                    }
                });
                var c = {};
                return Object.keys(s.stream_ops).forEach((function(e) {
                    var r = s.stream_ops[e];
                    c[e] = function() {
                        return De.forceLoadFile(s),
                        r.apply(null, arguments)
                    }
                }
                )),
                c.read = function(e, r, n, t, o) {
                    De.forceLoadFile(s);
                    var a = e.node.contents;
                    if (o >= a.length)
                        return 0;
                    var i = Math.min(a.length - o, t);
                    if (a.slice)
                        for (var u = 0; u < i; u++)
                            r[n + u] = a[o + u];
                    else
                        for (u = 0; u < i; u++)
                            r[n + u] = a.get(o + u);
                    return i
                }
                ,
                s.stream_ops = c,
                s
            },
            createPreloadedFile: function(e, r, t, o, a, i, u, c, f, l) {
                Browser.init();
                var d = r ? ke.resolve(be.join2(e, r)) : e;
                function p(t) {
                    function s(n) {
                        l && l(),
                        c || De.createDataFile(e, r, n, o, a, f),
                        i && i(),
                        ue()
                    }
                    var p = !1;
                    n.preloadPlugins.forEach((function(e) {
                        p || e.canHandle(d) && (e.handle(t, d, s, (function() {
                            u && u(),
                            ue()
                        }
                        )),
                        p = !0)
                    }
                    )),
                    p || s(t)
                }
                ie(),
                "string" == typeof t ? function(e, r, n, t) {
                    var o = t ? "" : "al " + e;
                    s(e, (function(n) {
                        S(n, 'Loading data file "' + e + '" failed (no arrayBuffer).'),
                        r(new Uint8Array(n)),
                        o && ue()
                    }
                    ), (function(r) {
                        if (!n)
                            throw 'Loading data file "' + e + '" failed.';
                        n()
                    }
                    )),
                    o && ie()
                }(t, (function(e) {
                    p(e)
                }
                ), u) : p(t)
            },
            indexedDB: function() {
                return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
            },
            DB_NAME: function() {
                return "EM_FS_" + window.location.pathname
            },
            DB_VERSION: 20,
            DB_STORE_NAME: "FILE_DATA",
            saveFilesToDB: function(e, r, n) {
                r = r || function() {}
                ,
                n = n || function() {}
                ;
                var t = De.indexedDB();
                try {
                    var o = t.open(De.DB_NAME(), De.DB_VERSION)
                } catch (e) {
                    return n(e)
                }
                o.onupgradeneeded = function() {
                    w("creating db"),
                    o.result.createObjectStore(De.DB_STORE_NAME)
                }
                ,
                o.onsuccess = function() {
                    var t = o.result.transaction([De.DB_STORE_NAME], "readwrite")
                      , a = t.objectStore(De.DB_STORE_NAME)
                      , i = 0
                      , u = 0
                      , s = e.length;
                    function c() {
                        0 == u ? r() : n()
                    }
                    e.forEach((function(e) {
                        var r = a.put(De.analyzePath(e).object.contents, e);
                        r.onsuccess = function() {
                            ++i + u == s && c()
                        }
                        ,
                        r.onerror = function() {
                            u++,
                            i + u == s && c()
                        }
                    }
                    )),
                    t.onerror = n
                }
                ,
                o.onerror = n
            },
            loadFilesFromDB: function(e, r, n) {
                r = r || function() {}
                ,
                n = n || function() {}
                ;
                var t = De.indexedDB();
                try {
                    var o = t.open(De.DB_NAME(), De.DB_VERSION)
                } catch (e) {
                    return n(e)
                }
                o.onupgradeneeded = n,
                o.onsuccess = function() {
                    var t = o.result;
                    try {
                        var a = t.transaction([De.DB_STORE_NAME], "readonly")
                    } catch (e) {
                        return void n(e)
                    }
                    var i = a.objectStore(De.DB_STORE_NAME)
                      , u = 0
                      , s = 0
                      , c = e.length;
                    function f() {
                        0 == s ? r() : n()
                    }
                    e.forEach((function(e) {
                        var r = i.get(e);
                        r.onsuccess = function() {
                            De.analyzePath(e).exists && De.unlink(e),
                            De.createDataFile(be.dirname(e), be.basename(e), r.result, !0, !0, !0),
                            ++u + s == c && f()
                        }
                        ,
                        r.onerror = function() {
                            s++,
                            u + s == c && f()
                        }
                    }
                    )),
                    a.onerror = n
                }
                ,
                o.onerror = n
            }
        }
          , Ae = {
            mappings: {},
            DEFAULT_POLLMASK: 5,
            calculateAt: function(e, r, n) {
                if ("/" === r[0])
                    return r;
                var t;
                if (-100 === e)
                    t = De.cwd();
                else {
                    var o = De.getStream(e);
                    if (!o)
                        throw new De.ErrnoError(8);
                    t = o.path
                }
                if (0 == r.length) {
                    if (!n)
                        throw new De.ErrnoError(44);
                    return t
                }
                return be.join2(t, r)
            },
            doStat: function(e, r, n) {
                try {
                    var t = e(r)
                } catch (e) {
                    if (e && e.node && be.normalize(r) !== be.normalize(De.getPath(e.node)))
                        return -54;
                    throw e
                }
                return U[n >> 2] = t.dev,
                U[n + 4 >> 2] = 0,
                U[n + 8 >> 2] = t.ino,
                U[n + 12 >> 2] = t.mode,
                U[n + 16 >> 2] = t.nlink,
                U[n + 20 >> 2] = t.uid,
                U[n + 24 >> 2] = t.gid,
                U[n + 28 >> 2] = t.rdev,
                U[n + 32 >> 2] = 0,
                de = [t.size >>> 0, (le = t.size,
                +Math.abs(le) >= 1 ? le > 0 ? (0 | Math.min(+Math.floor(le / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((le - +(~~le >>> 0)) / 4294967296) >>> 0 : 0)],
                U[n + 40 >> 2] = de[0],
                U[n + 44 >> 2] = de[1],
                U[n + 48 >> 2] = 4096,
                U[n + 52 >> 2] = t.blocks,
                U[n + 56 >> 2] = t.atime.getTime() / 1e3 | 0,
                U[n + 60 >> 2] = 0,
                U[n + 64 >> 2] = t.mtime.getTime() / 1e3 | 0,
                U[n + 68 >> 2] = 0,
                U[n + 72 >> 2] = t.ctime.getTime() / 1e3 | 0,
                U[n + 76 >> 2] = 0,
                de = [t.ino >>> 0, (le = t.ino,
                +Math.abs(le) >= 1 ? le > 0 ? (0 | Math.min(+Math.floor(le / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((le - +(~~le >>> 0)) / 4294967296) >>> 0 : 0)],
                U[n + 80 >> 2] = de[0],
                U[n + 84 >> 2] = de[1],
                0
            },
            doMsync: function(e, r, n, t, o) {
                var a = O.slice(e, e + n);
                De.msync(r, a, o, n, t)
            },
            doMkdir: function(e, r) {
                return "/" === (e = be.normalize(e))[e.length - 1] && (e = e.substr(0, e.length - 1)),
                De.mkdir(e, r, 0),
                0
            },
            doMknod: function(e, r, n) {
                switch (61440 & r) {
                case 32768:
                case 8192:
                case 24576:
                case 4096:
                case 49152:
                    break;
                default:
                    return -28
                }
                return De.mknod(e, r, n),
                0
            },
            doReadlink: function(e, r, n) {
                if (n <= 0)
                    return -28;
                var t = De.readlink(e)
                  , o = Math.min(n, j(t))
                  , a = x[r + o];
                return P(t, r, n + 1),
                x[r + o] = a,
                o
            },
            doAccess: function(e, r) {
                if (-8 & r)
                    return -28;
                var n;
                if (!(n = De.lookupPath(e, {
                    follow: !0
                }).node))
                    return -44;
                var t = "";
                return 4 & r && (t += "r"),
                2 & r && (t += "w"),
                1 & r && (t += "x"),
                t && De.nodePermissions(n, t) ? -2 : 0
            },
            doDup: function(e, r, n) {
                var t = De.getStream(n);
                return t && De.close(t),
                De.open(e, r, 0, n, n).fd
            },
            doReadv: function(e, r, n, t) {
                for (var o = 0, a = 0; a < n; a++) {
                    var i = U[r + 8 * a >> 2]
                      , u = U[r + (8 * a + 4) >> 2]
                      , s = De.read(e, x, i, u, t);
                    if (s < 0)
                        return -1;
                    if (o += s,
                    s < u)
                        break
                }
                return o
            },
            doWritev: function(e, r, n, t) {
                for (var o = 0, a = 0; a < n; a++) {
                    var i = U[r + 8 * a >> 2]
                      , u = U[r + (8 * a + 4) >> 2]
                      , s = De.write(e, x, i, u, t);
                    if (s < 0)
                        return -1;
                    o += s
                }
                return o
            },
            varargs: void 0,
            get: function() {
                return Ae.varargs += 4,
                U[Ae.varargs - 4 >> 2]
            },
            getStr: function(e) {
                return M(e)
            },
            getStreamFromFD: function(e) {
                var r = De.getStream(e);
                if (!r)
                    throw new De.ErrnoError(8);
                return r
            },
            get64: function(e, r) {
                return e
            }
        };
        function Me(e) {
            return U[Or() >> 2] = e,
            e
        }
        function Ce() {
            return 0
        }
        function Pe(e) {
            switch (e) {
            case 1:
                return 0;
            case 2:
                return 1;
            case 4:
                return 2;
            case 8:
                return 3;
            default:
                throw new TypeError("Unknown type size: " + e)
            }
        }
        var je = void 0;
        function Re(e) {
            for (var r = "", n = e; O[n]; )
                r += je[O[n++]];
            return r
        }
        var xe = {}
          , Oe = {}
          , ze = {}
          , Be = 48
          , Ue = 57;
        function Ne(e) {
            if (void 0 === e)
                return "_unknown";
            var r = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
            return r >= Be && r <= Ue ? "_" + e : e
        }
        function Ie(e, r) {
            return e = Ne(e),
            new Function("body","return function " + e + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)
        }
        function He(e, r) {
            var n = Ie(r, (function(e) {
                this.name = r,
                this.message = e;
                var n = new Error(e).stack;
                void 0 !== n && (this.stack = this.toString() + "\n" + n.replace(/^Error(:[^\n]*)?\n/, ""))
            }
            ));
            return n.prototype = Object.create(e.prototype),
            n.prototype.constructor = n,
            n.prototype.toString = function() {
                return void 0 === this.message ? this.name : this.name + ": " + this.message
            }
            ,
            n
        }
        var We = void 0;
        function Le(e) {
            throw new We(e)
        }
        var Ge = void 0;
        function Ye(e) {
            throw new Ge(e)
        }
        function Ve(e, r, n) {
            if (n = n || {},
            !("argPackAdvance"in r))
                throw new TypeError("registerType registeredInstance requires argPackAdvance");
            var t = r.name;
            if (e || Le('type "' + t + '" must have a positive integer typeid pointer'),
            Oe.hasOwnProperty(e)) {
                if (n.ignoreDuplicateRegistrations)
                    return;
                Le("Cannot register type '" + t + "' twice")
            }
            if (Oe[e] = r,
            delete ze[e],
            xe.hasOwnProperty(e)) {
                var o = xe[e];
                delete xe[e],
                o.forEach((function(e) {
                    e()
                }
                ))
            }
        }
        var qe = []
          , Xe = [{}, {
            value: void 0
        }, {
            value: null
        }, {
            value: !0
        }, {
            value: !1
        }];
        function Je(e) {
            e > 4 && 0 == --Xe[e].refcount && (Xe[e] = void 0,
            qe.push(e))
        }
        function Ke() {
            for (var e = 0, r = 5; r < Xe.length; ++r)
                void 0 !== Xe[r] && ++e;
            return e
        }
        function $e() {
            for (var e = 5; e < Xe.length; ++e)
                if (void 0 !== Xe[e])
                    return Xe[e];
            return null
        }
        var Ze = {
            toValue: function(e) {
                return e || Le("Cannot use deleted val. handle = " + e),
                Xe[e].value
            },
            toHandle: function(e) {
                switch (e) {
                case void 0:
                    return 1;
                case null:
                    return 2;
                case !0:
                    return 3;
                case !1:
                    return 4;
                default:
                    var r = qe.length ? qe.pop() : Xe.length;
                    return Xe[r] = {
                        refcount: 1,
                        value: e
                    },
                    r
                }
            }
        };
        function Qe(e) {
            return this.fromWireType(N[e >> 2])
        }
        function er(e) {
            if (null === e)
                return "null";
            var r = typeof e;
            return "object" === r || "array" === r || "function" === r ? e.toString() : "" + e
        }
        function rr(e, r) {
            switch (r) {
            case 2:
                return function(e) {
                    return this.fromWireType(I[e >> 2])
                }
                ;
            case 3:
                return function(e) {
                    return this.fromWireType(H[e >> 3])
                }
                ;
            default:
                throw new TypeError("Unknown float type: " + e)
            }
        }
        function nr(e, r) {
            if (!(e instanceof Function))
                throw new TypeError("new_ called with constructor type " + typeof e + " which is not a function");
            var n = Ie(e.name || "unknownFunctionName", (function() {}
            ));
            n.prototype = e.prototype;
            var t = new n
              , o = e.apply(t, r);
            return o instanceof Object ? o : t
        }
        function tr(e) {
            for (; e.length; ) {
                var r = e.pop();
                e.pop()(r)
            }
        }
        function or(e, r, t) {
            n.hasOwnProperty(e) ? ((void 0 === t || void 0 !== n[e].overloadTable && void 0 !== n[e].overloadTable[t]) && Le("Cannot register public name '" + e + "' twice"),
            function(e, r, n) {
                if (void 0 === e[r].overloadTable) {
                    var t = e[r];
                    e[r] = function() {
                        return e[r].overloadTable.hasOwnProperty(arguments.length) || Le("Function '" + n + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[r].overloadTable + ")!"),
                        e[r].overloadTable[arguments.length].apply(this, arguments)
                    }
                    ,
                    e[r].overloadTable = [],
                    e[r].overloadTable[t.argCount] = t
                }
            }(n, e, e),
            n.hasOwnProperty(t) && Le("Cannot register multiple overloads of a function with the same number of arguments (" + t + ")!"),
            n[e].overloadTable[t] = r) : (n[e] = r,
            void 0 !== t && (n[e].numArguments = t))
        }
        function ar(e, r, t) {
            return e.includes("j") ? function(e, r, t) {
                var o = n["dynCall_" + e];
                return t && t.length ? o.apply(null, [r].concat(t)) : o.call(null, r)
            }(e, r, t) : we(r).apply(null, t)
        }
        function ir(e, r) {
            var n, t, o, a = (e = Re(e)).includes("j") ? (n = e,
            t = r,
            o = [],
            function() {
                o.length = arguments.length;
                for (var e = 0; e < arguments.length; e++)
                    o[e] = arguments[e];
                return ar(n, t, o)
            }
            ) : we(r);
            return "function" != typeof a && Le("unknown function pointer with signature " + e + ": " + r),
            a
        }
        var ur = void 0;
        function sr(e) {
            var r = zr(e)
              , n = Re(r);
            return xr(r),
            n
        }
        function cr(e, r, n) {
            switch (r) {
            case 0:
                return n ? function(e) {
                    return x[e]
                }
                : function(e) {
                    return O[e]
                }
                ;
            case 1:
                return n ? function(e) {
                    return z[e >> 1]
                }
                : function(e) {
                    return B[e >> 1]
                }
                ;
            case 2:
                return n ? function(e) {
                    return U[e >> 2]
                }
                : function(e) {
                    return N[e >> 2]
                }
                ;
            default:
                throw new TypeError("Unknown integer type: " + e)
            }
        }
        function fr(e, r) {
            var n = Oe[e];
            return void 0 === n && Le(r + " has unknown type " + sr(e)),
            n
        }
        var lr = {};
        function dr(e) {
            var r = lr[e];
            return void 0 === r ? Re(e) : r
        }
        var pr, mr = [];
        function hr() {
            return "object" == typeof globalThis ? globalThis : Function("return this")()
        }
        pr = y ? function() {
            var e = r.hrtime();
            return 1e3 * e[0] + e[1] / 1e6
        }
        : function() {
            return performance.now()
        }
        ;
        function vr(e) {
            try {
                return k.grow(e - R.byteLength + 65535 >>> 16),
                K(k.buffer),
                1
            } catch (e) {}
        }
        var yr = {};
        function gr() {
            if (!gr.strings) {
                var e = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: p || "./this.program"
                };
                for (var r in yr)
                    void 0 === yr[r] ? delete e[r] : e[r] = yr[r];
                var n = [];
                for (var r in e)
                    n.push(r + "=" + e[r]);
                gr.strings = n
            }
            return gr.strings
        }
        function wr() {
            wr.called || (wr.called = !0,
            function() {
                var e = (new Date).getFullYear()
                  , r = new Date(e,0,1)
                  , n = new Date(e,6,1)
                  , t = r.getTimezoneOffset()
                  , o = n.getTimezoneOffset()
                  , a = Math.max(t, o);
                function i(e) {
                    var r = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                    return r ? r[1] : "GMT"
                }
                U[Nr() >> 2] = 60 * a,
                U[Ur() >> 2] = Number(t != o);
                var u = i(r)
                  , s = i(n)
                  , c = J(u)
                  , f = J(s);
                o < t ? (U[Br() >> 2] = c,
                U[Br() + 4 >> 2] = f) : (U[Br() >> 2] = f,
                U[Br() + 4 >> 2] = c)
            }())
        }
        function _r(e) {
            return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
        }
        function Er(e, r) {
            for (var n = 0, t = 0; t <= r; n += e[t++])
                ;
            return n
        }
        var br = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          , kr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function Fr(e, r) {
            for (var n = new Date(e.getTime()); r > 0; ) {
                var t = _r(n.getFullYear())
                  , o = n.getMonth()
                  , a = (t ? br : kr)[o];
                if (!(r > a - n.getDate()))
                    return n.setDate(n.getDate() + r),
                    n;
                r -= a - n.getDate() + 1,
                n.setDate(1),
                o < 11 ? n.setMonth(o + 1) : (n.setMonth(0),
                n.setFullYear(n.getFullYear() + 1))
            }
            return n
        }
        function Tr(e, r, n, t) {
            var o = U[t + 40 >> 2]
              , a = {
                tm_sec: U[t >> 2],
                tm_min: U[t + 4 >> 2],
                tm_hour: U[t + 8 >> 2],
                tm_mday: U[t + 12 >> 2],
                tm_mon: U[t + 16 >> 2],
                tm_year: U[t + 20 >> 2],
                tm_wday: U[t + 24 >> 2],
                tm_yday: U[t + 28 >> 2],
                tm_isdst: U[t + 32 >> 2],
                tm_gmtoff: U[t + 36 >> 2],
                tm_zone: o ? M(o) : ""
            }
              , i = M(n)
              , u = {
                "%c": "%a %b %d %H:%M:%S %Y",
                "%D": "%m/%d/%y",
                "%F": "%Y-%m-%d",
                "%h": "%b",
                "%r": "%I:%M:%S %p",
                "%R": "%H:%M",
                "%T": "%H:%M:%S",
                "%x": "%m/%d/%y",
                "%X": "%H:%M:%S",
                "%Ec": "%c",
                "%EC": "%C",
                "%Ex": "%m/%d/%y",
                "%EX": "%H:%M:%S",
                "%Ey": "%y",
                "%EY": "%Y",
                "%Od": "%d",
                "%Oe": "%e",
                "%OH": "%H",
                "%OI": "%I",
                "%Om": "%m",
                "%OM": "%M",
                "%OS": "%S",
                "%Ou": "%u",
                "%OU": "%U",
                "%OV": "%V",
                "%Ow": "%w",
                "%OW": "%W",
                "%Oy": "%y"
            };
            for (var s in u)
                i = i.replace(new RegExp(s,"g"), u[s]);
            var c = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
              , f = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            function l(e, r, n) {
                for (var t = "number" == typeof e ? e.toString() : e || ""; t.length < r; )
                    t = n[0] + t;
                return t
            }
            function d(e, r) {
                return l(e, r, "0")
            }
            function p(e, r) {
                function n(e) {
                    return e < 0 ? -1 : e > 0 ? 1 : 0
                }
                var t;
                return 0 === (t = n(e.getFullYear() - r.getFullYear())) && 0 === (t = n(e.getMonth() - r.getMonth())) && (t = n(e.getDate() - r.getDate())),
                t
            }
            function m(e) {
                switch (e.getDay()) {
                case 0:
                    return new Date(e.getFullYear() - 1,11,29);
                case 1:
                    return e;
                case 2:
                    return new Date(e.getFullYear(),0,3);
                case 3:
                    return new Date(e.getFullYear(),0,2);
                case 4:
                    return new Date(e.getFullYear(),0,1);
                case 5:
                    return new Date(e.getFullYear() - 1,11,31);
                case 6:
                    return new Date(e.getFullYear() - 1,11,30)
                }
            }
            function h(e) {
                var r = Fr(new Date(e.tm_year + 1900,0,1), e.tm_yday)
                  , n = new Date(r.getFullYear(),0,4)
                  , t = new Date(r.getFullYear() + 1,0,4)
                  , o = m(n)
                  , a = m(t);
                return p(o, r) <= 0 ? p(a, r) <= 0 ? r.getFullYear() + 1 : r.getFullYear() : r.getFullYear() - 1
            }
            var v = {
                "%a": function(e) {
                    return c[e.tm_wday].substring(0, 3)
                },
                "%A": function(e) {
                    return c[e.tm_wday]
                },
                "%b": function(e) {
                    return f[e.tm_mon].substring(0, 3)
                },
                "%B": function(e) {
                    return f[e.tm_mon]
                },
                "%C": function(e) {
                    return d((e.tm_year + 1900) / 100 | 0, 2)
                },
                "%d": function(e) {
                    return d(e.tm_mday, 2)
                },
                "%e": function(e) {
                    return l(e.tm_mday, 2, " ")
                },
                "%g": function(e) {
                    return h(e).toString().substring(2)
                },
                "%G": function(e) {
                    return h(e)
                },
                "%H": function(e) {
                    return d(e.tm_hour, 2)
                },
                "%I": function(e) {
                    var r = e.tm_hour;
                    return 0 == r ? r = 12 : r > 12 && (r -= 12),
                    d(r, 2)
                },
                "%j": function(e) {
                    return d(e.tm_mday + Er(_r(e.tm_year + 1900) ? br : kr, e.tm_mon - 1), 3)
                },
                "%m": function(e) {
                    return d(e.tm_mon + 1, 2)
                },
                "%M": function(e) {
                    return d(e.tm_min, 2)
                },
                "%n": function() {
                    return "\n"
                },
                "%p": function(e) {
                    return e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM"
                },
                "%S": function(e) {
                    return d(e.tm_sec, 2)
                },
                "%t": function() {
                    return "\t"
                },
                "%u": function(e) {
                    return e.tm_wday || 7
                },
                "%U": function(e) {
                    var r = new Date(e.tm_year + 1900,0,1)
                      , n = 0 === r.getDay() ? r : Fr(r, 7 - r.getDay())
                      , t = new Date(e.tm_year + 1900,e.tm_mon,e.tm_mday);
                    if (p(n, t) < 0) {
                        var o = Er(_r(t.getFullYear()) ? br : kr, t.getMonth() - 1) - 31
                          , a = 31 - n.getDate() + o + t.getDate();
                        return d(Math.ceil(a / 7), 2)
                    }
                    return 0 === p(n, r) ? "01" : "00"
                },
                "%V": function(e) {
                    var r, n = new Date(e.tm_year + 1900,0,4), t = new Date(e.tm_year + 1901,0,4), o = m(n), a = m(t), i = Fr(new Date(e.tm_year + 1900,0,1), e.tm_yday);
                    return p(i, o) < 0 ? "53" : p(a, i) <= 0 ? "01" : (r = o.getFullYear() < e.tm_year + 1900 ? e.tm_yday + 32 - o.getDate() : e.tm_yday + 1 - o.getDate(),
                    d(Math.ceil(r / 7), 2))
                },
                "%w": function(e) {
                    return e.tm_wday
                },
                "%W": function(e) {
                    var r = new Date(e.tm_year,0,1)
                      , n = 1 === r.getDay() ? r : Fr(r, 0 === r.getDay() ? 1 : 7 - r.getDay() + 1)
                      , t = new Date(e.tm_year + 1900,e.tm_mon,e.tm_mday);
                    if (p(n, t) < 0) {
                        var o = Er(_r(t.getFullYear()) ? br : kr, t.getMonth() - 1) - 31
                          , a = 31 - n.getDate() + o + t.getDate();
                        return d(Math.ceil(a / 7), 2)
                    }
                    return 0 === p(n, r) ? "01" : "00"
                },
                "%y": function(e) {
                    return (e.tm_year + 1900).toString().substring(2)
                },
                "%Y": function(e) {
                    return e.tm_year + 1900
                },
                "%z": function(e) {
                    var r = e.tm_gmtoff
                      , n = r >= 0;
                    return r = (r = Math.abs(r) / 60) / 60 * 100 + r % 60,
                    (n ? "+" : "-") + String("0000" + r).slice(-4)
                },
                "%Z": function(e) {
                    return e.tm_zone
                },
                "%%": function() {
                    return "%"
                }
            };
            for (var s in v)
                i.includes(s) && (i = i.replace(new RegExp(s,"g"), v[s](a)));
            var y = Cr(i, !1);
            return y.length > r ? 0 : (function(e, r) {
                x.set(e, r)
            }(y, e),
            y.length - 1)
        }
        function Sr(e) {
            return parseInt(e)
        }
        var Dr = function(e, r, n, t) {
            e || (e = this),
            this.parent = e,
            this.mount = e.mount,
            this.mounted = null,
            this.id = De.nextInode++,
            this.name = r,
            this.mode = n,
            this.node_ops = {},
            this.stream_ops = {},
            this.rdev = t
        }
          , Ar = 365
          , Mr = 146;
        function Cr(e, r, n) {
            var t = n > 0 ? n : j(e) + 1
              , o = new Array(t)
              , a = C(e, o, 0, o.length);
            return r && (o.length = a),
            o
        }
        Object.defineProperties(Dr.prototype, {
            read: {
                get: function() {
                    return (this.mode & Ar) === Ar
                },
                set: function(e) {
                    e ? this.mode |= Ar : this.mode &= -366
                }
            },
            write: {
                get: function() {
                    return (this.mode & Mr) === Mr
                },
                set: function(e) {
                    e ? this.mode |= Mr : this.mode &= -147
                }
            },
            isFolder: {
                get: function() {
                    return De.isDir(this.mode)
                }
            },
            isDevice: {
                get: function() {
                    return De.isChrdev(this.mode)
                }
            }
        }),
        De.FSNode = Dr,
        De.staticInit(),
        n.FS_createPath = De.createPath,
        n.FS_createDataFile = De.createDataFile,
        n.FS_createPreloadedFile = De.createPreloadedFile,
        n.FS_createLazyFile = De.createLazyFile,
        n.FS_createDevice = De.createDevice,
        n.FS_unlink = De.unlink,
        function() {
            for (var e = new Array(256), r = 0; r < 256; ++r)
                e[r] = String.fromCharCode(r);
            je = e
        }(),
        We = n.BindingError = He(Error, "BindingError"),
        Ge = n.InternalError = He(Error, "InternalError"),
        n.count_emval_handles = Ke,
        n.get_first_emval = $e,
        ur = n.UnboundTypeError = He(Error, "UnboundTypeError");
        var Pr, jr = {
            d: function(e, r, n, t) {
                se("Assertion failed: " + M(e) + ", at: " + [r ? M(r) : "unknown filename", n, t ? M(t) : "unknown function"])
            },
            U: function(e) {
                return Rr(e + 16) + 16
            },
            T: function(e, r, n) {
                throw new _e(e).init(r, n),
                e,
                e
            },
            ca: function(e, r) {
                return Ee(e, r)
            },
            ma: function(e, r) {
                try {
                    return e = Ae.getStr(e),
                    Ae.doAccess(e, r)
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    -e.errno
                }
            },
            C: function(e, r, n) {
                Ae.varargs = n;
                try {
                    var t = Ae.getStreamFromFD(e);
                    switch (r) {
                    case 0:
                        return (o = Ae.get()) < 0 ? -28 : De.open(t.path, t.flags, 0, o).fd;
                    case 1:
                    case 2:
                    case 13:
                    case 14:
                        return 0;
                    case 3:
                        return t.flags;
                    case 4:
                        var o = Ae.get();
                        return t.flags |= o,
                        0;
                    case 12:
                        o = Ae.get();
                        return z[o + 0 >> 1] = 2,
                        0;
                    case 16:
                    case 8:
                    default:
                        return -28;
                    case 9:
                        return Me(28),
                        -1
                    }
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    -e.errno
                }
            },
            ha: function(e, r) {
                try {
                    var n = Ae.getStreamFromFD(e);
                    return Ae.doStat(De.stat, n.path, r)
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    -e.errno
                }
            },
            na: function(e, r, n) {
                try {
                    var t = Ae.getStreamFromFD(e);
                    t.getdents || (t.getdents = De.readdir(t.path));
                    for (var o = 280, a = 0, i = De.llseek(t, 0, 1), u = Math.floor(i / o); u < t.getdents.length && a + o <= n; ) {
                        var s, c, f = t.getdents[u];
                        if ("." === f)
                            s = t.id,
                            c = 4;
                        else if (".." === f)
                            s = De.lookupPath(t.path, {
                                parent: !0
                            }).id,
                            c = 4;
                        else {
                            var l = De.lookupNode(t, f);
                            s = l.id,
                            c = De.isChrdev(l.mode) ? 2 : De.isDir(l.mode) ? 4 : De.isLink(l.mode) ? 10 : 8
                        }
                        de = [s >>> 0, (le = s,
                        +Math.abs(le) >= 1 ? le > 0 ? (0 | Math.min(+Math.floor(le / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((le - +(~~le >>> 0)) / 4294967296) >>> 0 : 0)],
                        U[r + a >> 2] = de[0],
                        U[r + a + 4 >> 2] = de[1],
                        de = [(u + 1) * o >>> 0, (le = (u + 1) * o,
                        +Math.abs(le) >= 1 ? le > 0 ? (0 | Math.min(+Math.floor(le / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((le - +(~~le >>> 0)) / 4294967296) >>> 0 : 0)],
                        U[r + a + 8 >> 2] = de[0],
                        U[r + a + 12 >> 2] = de[1],
                        z[r + a + 16 >> 1] = 280,
                        x[r + a + 18 >> 0] = c,
                        P(f, r + a + 19, 256),
                        a += o,
                        u += 1
                    }
                    return De.llseek(t, u * o, 0),
                    a
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    -e.errno
                }
            },
            ka: Ce,
            ia: function() {
                return 0
            },
            ja: function() {
                return 0
            },
            la: function() {
                return 0
            },
            L: function(e, r, n) {
                Ae.varargs = n;
                try {
                    var t = Ae.getStreamFromFD(e);
                    switch (r) {
                    case 21509:
                    case 21505:
                    case 21510:
                    case 21511:
                    case 21512:
                    case 21506:
                    case 21507:
                    case 21508:
                    case 21523:
                    case 21524:
                        return t.tty ? 0 : -59;
                    case 21519:
                        if (!t.tty)
                            return -59;
                        var o = Ae.get();
                        return U[o >> 2] = 0,
                        0;
                    case 21520:
                        return t.tty ? -28 : -59;
                    case 21531:
                        o = Ae.get();
                        return De.ioctl(t, r, o);
                    default:
                        se("bad ioctl syscall " + r)
                    }
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    -e.errno
                }
            },
            ga: function(e, r) {
                try {
                    return e = Ae.getStr(e),
                    Ae.doMkdir(e, r)
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    -e.errno
                }
            },
            ea: function(e, r, n, t, o, a) {
                try {
                    return function(e, r, n, t, o, a) {
                        var i;
                        a <<= 12;
                        var u = !1;
                        if (0 != (16 & t) && e % 65536 != 0)
                            return -28;
                        if (0 != (32 & t)) {
                            if (!(i = Te(r)))
                                return -48;
                            u = !0
                        } else {
                            var s = De.getStream(o);
                            if (!s)
                                return -8;
                            var c = De.mmap(s, e, r, a, n, t);
                            i = c.ptr,
                            u = c.allocated
                        }
                        return Ae.mappings[i] = {
                            malloc: i,
                            len: r,
                            allocated: u,
                            fd: o,
                            prot: n,
                            flags: t,
                            offset: a
                        },
                        i
                    }(e, r, n, t, o, a)
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    -e.errno
                }
            },
            da: function(e, r) {
                try {
                    return function(e, r) {
                        var n = Ae.mappings[e];
                        if (0 === r || !n)
                            return -28;
                        if (r === n.len) {
                            var t = De.getStream(n.fd);
                            t && (2 & n.prot && Ae.doMsync(e, t, r, n.flags, n.offset),
                            De.munmap(t)),
                            Ae.mappings[e] = null,
                            n.allocated && xr(n.malloc)
                        }
                        return 0
                    }(e, r)
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    -e.errno
                }
            },
            I: function(e, r, n) {
                Ae.varargs = n;
                try {
                    var t = Ae.getStr(e)
                      , o = n ? Ae.get() : 0;
                    return De.open(t, r, o).fd
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    -e.errno
                }
            },
            fa: function(e, r) {
                try {
                    return e = Ae.getStr(e),
                    Ae.doStat(De.stat, e, r)
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    -e.errno
                }
            },
            X: function(e, r, n, t, o) {},
            pa: function(e, r, n, t, o) {
                var a = Pe(n);
                Ve(e, {
                    name: r = Re(r),
                    fromWireType: function(e) {
                        return !!e
                    },
                    toWireType: function(e, r) {
                        return r ? t : o
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function(e) {
                        var t;
                        if (1 === n)
                            t = x;
                        else if (2 === n)
                            t = z;
                        else {
                            if (4 !== n)
                                throw new TypeError("Unknown boolean type size: " + r);
                            t = U
                        }
                        return this.fromWireType(t[e >> a])
                    },
                    destructorFunction: null
                })
            },
            oa: function(e, r) {
                Ve(e, {
                    name: r = Re(r),
                    fromWireType: function(e) {
                        var r = Ze.toValue(e);
                        return Je(e),
                        r
                    },
                    toWireType: function(e, r) {
                        return Ze.toHandle(r)
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Qe,
                    destructorFunction: null
                })
            },
            M: function(e, r, n) {
                var t = Pe(n);
                Ve(e, {
                    name: r = Re(r),
                    fromWireType: function(e) {
                        return e
                    },
                    toWireType: function(e, r) {
                        if ("number" != typeof r && "boolean" != typeof r)
                            throw new TypeError('Cannot convert "' + er(r) + '" to ' + this.name);
                        return r
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: rr(r, t),
                    destructorFunction: null
                })
            },
            s: function(e, r, t, o, a, i) {
                var u = function(e, r) {
                    for (var n = [], t = 0; t < e; t++)
                        n.push(U[(r >> 2) + t]);
                    return n
                }(r, t);
                e = Re(e),
                a = ir(o, a),
                or(e, (function() {
                    !function(e, r) {
                        var n = []
                          , t = {};
                        throw r.forEach((function e(r) {
                            t[r] || Oe[r] || (ze[r] ? ze[r].forEach(e) : (n.push(r),
                            t[r] = !0))
                        }
                        )),
                        new ur(e + ": " + n.map(sr).join([", "]))
                    }("Cannot call " + e + " due to unbound types", u)
                }
                ), r - 1),
                function(e, r, n) {
                    function t(r) {
                        var t = n(r);
                        t.length !== e.length && Ye("Mismatched type converter count");
                        for (var o = 0; o < e.length; ++o)
                            Ve(e[o], t[o])
                    }
                    e.forEach((function(e) {
                        ze[e] = r
                    }
                    ));
                    var o = new Array(r.length)
                      , a = []
                      , i = 0;
                    r.forEach((function(e, r) {
                        Oe.hasOwnProperty(e) ? o[r] = Oe[e] : (a.push(e),
                        xe.hasOwnProperty(e) || (xe[e] = []),
                        xe[e].push((function() {
                            o[r] = Oe[e],
                            ++i === a.length && t(o)
                        }
                        )))
                    }
                    )),
                    0 === a.length && t(o)
                }([], u, (function(t) {
                    var o = [t[0], null].concat(t.slice(1));
                    return function(e, r, t) {
                        n.hasOwnProperty(e) || Ye("Replacing nonexistant public symbol"),
                        void 0 !== n[e].overloadTable && void 0 !== t ? n[e].overloadTable[t] = r : (n[e] = r,
                        n[e].argCount = t)
                    }(e, function(e, r, n, t, o) {
                        var a = r.length;
                        a < 2 && Le("argTypes array size mismatch! Must at least get return value and 'this' types!");
                        for (var i = null !== r[1] && null !== n, u = !1, s = 1; s < r.length; ++s)
                            if (null !== r[s] && void 0 === r[s].destructorFunction) {
                                u = !0;
                                break
                            }
                        var c = "void" !== r[0].name
                          , f = ""
                          , l = "";
                        for (s = 0; s < a - 2; ++s)
                            f += (0 !== s ? ", " : "") + "arg" + s,
                            l += (0 !== s ? ", " : "") + "arg" + s + "Wired";
                        var d = "return function " + Ne(e) + "(" + f + ") {\nif (arguments.length !== " + (a - 2) + ") {\nthrowBindingError('function " + e + " called with ' + arguments.length + ' arguments, expected " + (a - 2) + " args!');\n}\n";
                        u && (d += "var destructors = [];\n");
                        var p = u ? "destructors" : "null"
                          , m = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"]
                          , h = [Le, t, o, tr, r[0], r[1]];
                        for (i && (d += "var thisWired = classParam.toWireType(" + p + ", this);\n"),
                        s = 0; s < a - 2; ++s)
                            d += "var arg" + s + "Wired = argType" + s + ".toWireType(" + p + ", arg" + s + "); // " + r[s + 2].name + "\n",
                            m.push("argType" + s),
                            h.push(r[s + 2]);
                        if (i && (l = "thisWired" + (l.length > 0 ? ", " : "") + l),
                        d += (c ? "var rv = " : "") + "invoker(fn" + (l.length > 0 ? ", " : "") + l + ");\n",
                        u)
                            d += "runDestructors(destructors);\n";
                        else
                            for (s = i ? 1 : 2; s < r.length; ++s) {
                                var v = 1 === s ? "thisWired" : "arg" + (s - 2) + "Wired";
                                null !== r[s].destructorFunction && (d += v + "_dtor(" + v + "); // " + r[s].name + "\n",
                                m.push(v + "_dtor"),
                                h.push(r[s].destructorFunction))
                            }
                        return c && (d += "var ret = retType.fromWireType(rv);\nreturn ret;\n"),
                        d += "}\n",
                        m.push(d),
                        nr(Function, m).apply(null, h)
                    }(e, o, null, a, i), r - 1),
                    []
                }
                ))
            },
            v: function(e, r, n, t, o) {
                r = Re(r),
                -1 === o && (o = 4294967295);
                var a = Pe(n)
                  , i = function(e) {
                    return e
                };
                if (0 === t) {
                    var u = 32 - 8 * n;
                    i = function(e) {
                        return e << u >>> u
                    }
                }
                var s = r.includes("unsigned");
                Ve(e, {
                    name: r,
                    fromWireType: i,
                    toWireType: function(e, n) {
                        if ("number" != typeof n && "boolean" != typeof n)
                            throw new TypeError('Cannot convert "' + er(n) + '" to ' + this.name);
                        if (n < t || n > o)
                            throw new TypeError('Passing a number "' + er(n) + '" from JS side to C/C++ side to an argument of type "' + r + '", which is outside the valid range [' + t + ", " + o + "]!");
                        return s ? n >>> 0 : 0 | n
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: cr(r, a, 0 !== t),
                    destructorFunction: null
                })
            },
            u: function(e, r, n) {
                var t = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r];
                function o(e) {
                    var r = N
                      , n = r[e >>= 2]
                      , o = r[e + 1];
                    return new t(R,o,n)
                }
                Ve(e, {
                    name: n = Re(n),
                    fromWireType: o,
                    argPackAdvance: 8,
                    readValueFromPointer: o
                }, {
                    ignoreDuplicateRegistrations: !0
                })
            },
            N: function(e, r) {
                var n = "std::string" === (r = Re(r));
                Ve(e, {
                    name: r,
                    fromWireType: function(e) {
                        var r, t = N[e >> 2];
                        if (n)
                            for (var o = e + 4, a = 0; a <= t; ++a) {
                                var i = e + 4 + a;
                                if (a == t || 0 == O[i]) {
                                    var u = M(o, i - o);
                                    void 0 === r ? r = u : (r += String.fromCharCode(0),
                                    r += u),
                                    o = i + 1
                                }
                            }
                        else {
                            var s = new Array(t);
                            for (a = 0; a < t; ++a)
                                s[a] = String.fromCharCode(O[e + 4 + a]);
                            r = s.join("")
                        }
                        return xr(e),
                        r
                    },
                    toWireType: function(e, r) {
                        r instanceof ArrayBuffer && (r = new Uint8Array(r));
                        var t = "string" == typeof r;
                        t || r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || Le("Cannot pass non-string to std::string");
                        var o = (n && t ? function() {
                            return j(r)
                        }
                        : function() {
                            return r.length
                        }
                        )()
                          , a = Rr(4 + o + 1);
                        if (N[a >> 2] = o,
                        n && t)
                            P(r, a + 4, o + 1);
                        else if (t)
                            for (var i = 0; i < o; ++i) {
                                var u = r.charCodeAt(i);
                                u > 255 && (xr(a),
                                Le("String has UTF-16 code units that do not fit in 8 bits")),
                                O[a + 4 + i] = u
                            }
                        else
                            for (i = 0; i < o; ++i)
                                O[a + 4 + i] = r[i];
                        return null !== e && e.push(xr, a),
                        a
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Qe,
                    destructorFunction: function(e) {
                        xr(e)
                    }
                })
            },
            D: function(e, r, n) {
                var t, o, a, i, u;
                n = Re(n),
                2 === r ? (t = L,
                o = G,
                i = Y,
                a = function() {
                    return B
                }
                ,
                u = 1) : 4 === r && (t = V,
                o = q,
                i = X,
                a = function() {
                    return N
                }
                ,
                u = 2),
                Ve(e, {
                    name: n,
                    fromWireType: function(e) {
                        for (var n, o = N[e >> 2], i = a(), s = e + 4, c = 0; c <= o; ++c) {
                            var f = e + 4 + c * r;
                            if (c == o || 0 == i[f >> u]) {
                                var l = t(s, f - s);
                                void 0 === n ? n = l : (n += String.fromCharCode(0),
                                n += l),
                                s = f + r
                            }
                        }
                        return xr(e),
                        n
                    },
                    toWireType: function(e, t) {
                        "string" != typeof t && Le("Cannot pass non-string to C++ string type " + n);
                        var a = i(t)
                          , s = Rr(4 + a + r);
                        return N[s >> 2] = a >> u,
                        o(t, s + 4, a + r),
                        null !== e && e.push(xr, s),
                        s
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Qe,
                    destructorFunction: function(e) {
                        xr(e)
                    }
                })
            },
            qa: function(e, r) {
                Ve(e, {
                    isVoid: !0,
                    name: r = Re(r),
                    argPackAdvance: 0,
                    fromWireType: function() {},
                    toWireType: function(e, r) {}
                })
            },
            $: function() {
                throw "longjmp"
            },
            V: function(e, r, n) {
                e = Ze.toValue(e),
                r = fr(r, "emval::as");
                var t = []
                  , o = Ze.toHandle(t);
                return U[n >> 2] = o,
                r.toWireType(t, e)
            },
            q: function(e, r, n, t, o) {
                return (e = mr[e])(r = Ze.toValue(r), n = dr(n), function(e) {
                    var r = [];
                    return U[e >> 2] = Ze.toHandle(r),
                    r
                }(t), o)
            },
            a: Je,
            H: function(e) {
                return 0 === e ? Ze.toHandle(hr()) : (e = dr(e),
                Ze.toHandle(hr()[e]))
            },
            r: function(e, r) {
                for (var n = function(e, r) {
                    for (var n = new Array(e), t = 0; t < e; ++t)
                        n[t] = fr(U[(r >> 2) + t], "parameter " + t);
                    return n
                }(e, r), t = n[0], o = t.name + "_$" + n.slice(1).map((function(e) {
                    return e.name
                }
                )).join("_") + "$", a = ["retType"], i = [t], u = "", s = 0; s < e - 1; ++s)
                    u += (0 !== s ? ", " : "") + "arg" + s,
                    a.push("argType" + s),
                    i.push(n[1 + s]);
                var c = "return function " + Ne("methodCaller_" + o) + "(handle, name, destructors, args) {\n"
                  , f = 0;
                for (s = 0; s < e - 1; ++s)
                    c += "    var arg" + s + " = argType" + s + ".readValueFromPointer(args" + (f ? "+" + f : "") + ");\n",
                    f += n[s + 1].argPackAdvance;
                for (c += "    var rv = handle[name](" + u + ");\n",
                s = 0; s < e - 1; ++s)
                    n[s + 1].deleteObject && (c += "    argType" + s + ".deleteObject(arg" + s + ");\n");
                t.isVoid || (c += "    return retType.toWireType(destructors, rv);\n"),
                c += "};\n",
                a.push(c);
                var l, d, p = nr(Function, a).apply(null, i);
                return l = p,
                d = mr.length,
                mr.push(l),
                d
            },
            l: function(e) {
                e > 4 && (Xe[e].refcount += 1)
            },
            i: function() {
                return Ze.toHandle([])
            },
            b: function(e) {
                return Ze.toHandle(dr(e))
            },
            h: function() {
                return Ze.toHandle({})
            },
            p: function(e) {
                tr(Ze.toValue(e)),
                Je(e)
            },
            c: function(e, r, n) {
                e = Ze.toValue(e),
                r = Ze.toValue(r),
                n = Ze.toValue(n),
                e[r] = n
            },
            e: function(e, r) {
                var n = (e = fr(e, "_emval_take_value")).readValueFromPointer(r);
                return Ze.toHandle(n)
            },
            z: function() {
                se("")
            },
            P: function(e, r) {
                var n;
                if (0 === e)
                    n = Date.now();
                else {
                    if (1 !== e && 4 !== e)
                        return Me(28),
                        -1;
                    n = pr()
                }
                return U[r >> 2] = n / 1e3 | 0,
                U[r + 4 >> 2] = n % 1e3 * 1e3 * 1e3 | 0,
                0
            },
            Y: function(e, r, n) {
                O.copyWithin(e, r, r + n)
            },
            Z: function(e) {
                var r, n, t = O.length, o = 2147483648;
                if ((e >>>= 0) > o)
                    return !1;
                for (var a = 1; a <= 4; a *= 2) {
                    var i = t * (1 + .2 / a);
                    if (i = Math.min(i, e + 100663296),
                    vr(Math.min(o, ((r = Math.max(e, i)) % (n = 65536) > 0 && (r += n - r % n),
                    r))))
                        return !0
                }
                return !1
            },
            aa: function(e, r) {
                var n = 0;
                return gr().forEach((function(t, o) {
                    var a = r + n;
                    U[e + 4 * o >> 2] = a,
                    function(e, r, n) {
                        for (var t = 0; t < e.length; ++t)
                            x[r++ >> 0] = e.charCodeAt(t);
                        n || (x[r >> 0] = 0)
                    }(t, a),
                    n += t.length + 1
                }
                )),
                0
            },
            ba: function(e, r) {
                var n = gr();
                U[e >> 2] = n.length;
                var t = 0;
                return n.forEach((function(e) {
                    t += e.length + 1
                }
                )),
                U[r >> 2] = t,
                0
            },
            G: function(e) {
                !function(e, r) {
                    e,
                    ne() || !0;
                    !function(e) {
                        e,
                        ne() || (n.onExit && n.onExit(e),
                        T = !0);
                        m(e, new Gr(e))
                    }(e)
                }(e)
            },
            A: function(e) {
                try {
                    var r = Ae.getStreamFromFD(e);
                    return De.close(r),
                    0
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    e.errno
                }
            },
            K: function(e, r, n, t) {
                try {
                    var o = Ae.getStreamFromFD(e)
                      , a = Ae.doReadv(o, r, n);
                    return U[t >> 2] = a,
                    0
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    e.errno
                }
            },
            W: function(e, r, n, t, o) {
                try {
                    var a = Ae.getStreamFromFD(e)
                      , i = 4294967296 * n + (r >>> 0)
                      , u = 9007199254740992;
                    return i <= -u || i >= u ? -61 : (De.llseek(a, i, t),
                    de = [a.position >>> 0, (le = a.position,
                    +Math.abs(le) >= 1 ? le > 0 ? (0 | Math.min(+Math.floor(le / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((le - +(~~le >>> 0)) / 4294967296) >>> 0 : 0)],
                    U[o >> 2] = de[0],
                    U[o + 4 >> 2] = de[1],
                    a.getdents && 0 === i && 0 === t && (a.getdents = null),
                    0)
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    e.errno
                }
            },
            J: function(e, r, n, t) {
                try {
                    var o = Ae.getStreamFromFD(e)
                      , a = Ae.doWritev(o, r, n);
                    return U[t >> 2] = a,
                    0
                } catch (e) {
                    return void 0 !== De && e instanceof De.ErrnoError || se(e),
                    e.errno
                }
            },
            f: function() {
                return b
            },
            O: function(e) {
                var r = Date.now();
                return U[e >> 2] = r / 1e3 | 0,
                U[e + 4 >> 2] = r % 1e3 * 1e3 | 0,
                0
            },
            m: function(e, r) {
                var n = Ir();
                try {
                    return we(e)(r)
                } catch (e) {
                    if (Hr(n),
                    e !== e + 0 && "longjmp" !== e)
                        throw e;
                    Wr(1, 0)
                }
            },
            t: function(e, r, n) {
                var t = Ir();
                try {
                    return we(e)(r, n)
                } catch (e) {
                    if (Hr(t),
                    e !== e + 0 && "longjmp" !== e)
                        throw e;
                    Wr(1, 0)
                }
            },
            k: function(e, r, n, t) {
                var o = Ir();
                try {
                    return we(e)(r, n, t)
                } catch (e) {
                    if (Hr(o),
                    e !== e + 0 && "longjmp" !== e)
                        throw e;
                    Wr(1, 0)
                }
            },
            o: function(e, r, n, t, o) {
                var a = Ir();
                try {
                    return we(e)(r, n, t, o)
                } catch (e) {
                    if (Hr(a),
                    e !== e + 0 && "longjmp" !== e)
                        throw e;
                    Wr(1, 0)
                }
            },
            ra: function(e, r, n, t, o, a, i, u) {
                var s = Ir();
                try {
                    return we(e)(r, n, t, o, a, i, u)
                } catch (e) {
                    if (Hr(s),
                    e !== e + 0 && "longjmp" !== e)
                        throw e;
                    Wr(1, 0)
                }
            },
            sa: function(e, r, n, t, o, a, i, u, s, c) {
                var f = Ir();
                try {
                    return we(e)(r, n, t, o, a, i, u, s, c)
                } catch (e) {
                    if (Hr(f),
                    e !== e + 0 && "longjmp" !== e)
                        throw e;
                    Wr(1, 0)
                }
            },
            n: function(e, r) {
                var n = Ir();
                try {
                    we(e)(r)
                } catch (e) {
                    if (Hr(n),
                    e !== e + 0 && "longjmp" !== e)
                        throw e;
                    Wr(1, 0)
                }
            },
            j: function(e, r, n) {
                var t = Ir();
                try {
                    we(e)(r, n)
                } catch (e) {
                    if (Hr(t),
                    e !== e + 0 && "longjmp" !== e)
                        throw e;
                    Wr(1, 0)
                }
            },
            w: function(e, r, n, t) {
                var o = Ir();
                try {
                    we(e)(r, n, t)
                } catch (e) {
                    if (Hr(o),
                    e !== e + 0 && "longjmp" !== e)
                        throw e;
                    Wr(1, 0)
                }
            },
            x: function(e, r, n, t, o) {
                var a = Ir();
                try {
                    we(e)(r, n, t, o)
                } catch (e) {
                    if (Hr(a),
                    e !== e + 0 && "longjmp" !== e)
                        throw e;
                    Wr(1, 0)
                }
            },
            B: function(e, r, n, t, o, a, i, u, s, c) {
                var f = Ir();
                try {
                    we(e)(r, n, t, o, a, i, u, s, c)
                } catch (e) {
                    if (Hr(f),
                    e !== e + 0 && "longjmp" !== e)
                        throw e;
                    Wr(1, 0)
                }
            },
            F: function(e, r) {
                wr();
                var n = new Date(1e3 * U[e >> 2]);
                U[r >> 2] = n.getSeconds(),
                U[r + 4 >> 2] = n.getMinutes(),
                U[r + 8 >> 2] = n.getHours(),
                U[r + 12 >> 2] = n.getDate(),
                U[r + 16 >> 2] = n.getMonth(),
                U[r + 20 >> 2] = n.getFullYear() - 1900,
                U[r + 24 >> 2] = n.getDay();
                var t = new Date(n.getFullYear(),0,1)
                  , o = (n.getTime() - t.getTime()) / 864e5 | 0;
                U[r + 28 >> 2] = o,
                U[r + 36 >> 2] = -60 * n.getTimezoneOffset();
                var a = new Date(n.getFullYear(),6,1).getTimezoneOffset()
                  , i = t.getTimezoneOffset()
                  , u = 0 | (a != i && n.getTimezoneOffset() == Math.min(i, a));
                U[r + 32 >> 2] = u;
                var s = U[Br() + (u ? 4 : 0) >> 2];
                return U[r + 40 >> 2] = s,
                r
            },
            S: function(e) {
                wr();
                var r = new Date(U[e + 20 >> 2] + 1900,U[e + 16 >> 2],U[e + 12 >> 2],U[e + 8 >> 2],U[e + 4 >> 2],U[e >> 2],0)
                  , n = U[e + 32 >> 2]
                  , t = r.getTimezoneOffset()
                  , o = new Date(r.getFullYear(),0,1)
                  , a = new Date(r.getFullYear(),6,1).getTimezoneOffset()
                  , i = o.getTimezoneOffset()
                  , u = Math.min(i, a);
                if (n < 0)
                    U[e + 32 >> 2] = Number(a != i && u == t);
                else if (n > 0 != (u == t)) {
                    var s = Math.max(i, a)
                      , c = n > 0 ? u : s;
                    r.setTime(r.getTime() + 6e4 * (c - t))
                }
                U[e + 24 >> 2] = r.getDay();
                var f = (r.getTime() - o.getTime()) / 864e5 | 0;
                return U[e + 28 >> 2] = f,
                U[e >> 2] = r.getSeconds(),
                U[e + 4 >> 2] = r.getMinutes(),
                U[e + 8 >> 2] = r.getHours(),
                U[e + 12 >> 2] = r.getDate(),
                U[e + 16 >> 2] = r.getMonth(),
                r.getTime() / 1e3 | 0
            },
            g: function(e) {
                b = e
            },
            E: Tr,
            _: function(e, r, n, t) {
                return Tr(e, r, n, t)
            },
            R: function(e, r, n) {
                for (var t = M(r), o = "\\!@#$^&*()+=-[]/{}|:<>?,.", a = 0, i = o.length; a < i; ++a)
                    t = t.replace(new RegExp("\\" + o[a],"g"), "\\" + o[a]);
                var u = {
                    "%A": "%a",
                    "%B": "%b",
                    "%c": "%a %b %d %H:%M:%S %Y",
                    "%D": "%m\\/%d\\/%y",
                    "%e": "%d",
                    "%F": "%Y-%m-%d",
                    "%h": "%b",
                    "%R": "%H\\:%M",
                    "%r": "%I\\:%M\\:%S\\s%p",
                    "%T": "%H\\:%M\\:%S",
                    "%x": "%m\\/%d\\/(?:%y|%Y)",
                    "%X": "%H\\:%M\\:%S"
                };
                for (var s in u)
                    t = t.replace(s, u[s]);
                var c = {
                    "%a": "(?:Sun(?:day)?)|(?:Mon(?:day)?)|(?:Tue(?:sday)?)|(?:Wed(?:nesday)?)|(?:Thu(?:rsday)?)|(?:Fri(?:day)?)|(?:Sat(?:urday)?)",
                    "%b": "(?:Jan(?:uary)?)|(?:Feb(?:ruary)?)|(?:Mar(?:ch)?)|(?:Apr(?:il)?)|May|(?:Jun(?:e)?)|(?:Jul(?:y)?)|(?:Aug(?:ust)?)|(?:Sep(?:tember)?)|(?:Oct(?:ober)?)|(?:Nov(?:ember)?)|(?:Dec(?:ember)?)",
                    "%C": "\\d\\d",
                    "%d": "0[1-9]|[1-9](?!\\d)|1\\d|2\\d|30|31",
                    "%H": "\\d(?!\\d)|[0,1]\\d|20|21|22|23",
                    "%I": "\\d(?!\\d)|0\\d|10|11|12",
                    "%j": "00[1-9]|0?[1-9](?!\\d)|0?[1-9]\\d(?!\\d)|[1,2]\\d\\d|3[0-6]\\d",
                    "%m": "0[1-9]|[1-9](?!\\d)|10|11|12",
                    "%M": "0\\d|\\d(?!\\d)|[1-5]\\d",
                    "%n": "\\s",
                    "%p": "AM|am|PM|pm|A\\.M\\.|a\\.m\\.|P\\.M\\.|p\\.m\\.",
                    "%S": "0\\d|\\d(?!\\d)|[1-5]\\d|60",
                    "%U": "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",
                    "%W": "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",
                    "%w": "[0-6]",
                    "%y": "\\d\\d",
                    "%Y": "\\d\\d\\d\\d",
                    "%%": "%",
                    "%t": "\\s"
                };
                for (var f in c)
                    t = t.replace(f, "(" + f + c[f] + ")");
                var l = [];
                for (a = t.indexOf("%"); a >= 0; a = t.indexOf("%"))
                    l.push(t[a + 1]),
                    t = t.replace(new RegExp("\\%" + t[a + 1],"g"), "");
                var d = new RegExp("^" + t,"i").exec(M(e));
                if (d) {
                    var p, m = function() {
                        function e(e, r, n) {
                            return "number" != typeof e || isNaN(e) ? r : e >= r ? e <= n ? e : n : r
                        }
                        return {
                            year: e(U[n + 20 >> 2] + 1900, 1970, 9999),
                            month: e(U[n + 16 >> 2], 0, 11),
                            day: e(U[n + 12 >> 2], 1, 31),
                            hour: e(U[n + 8 >> 2], 0, 23),
                            min: e(U[n + 4 >> 2], 0, 59),
                            sec: e(U[n >> 2], 0, 59)
                        }
                    }(), h = function(e) {
                        var r = l.indexOf(e);
                        if (r >= 0)
                            return d[r + 1]
                    };
                    if ((p = h("S")) && (m.sec = Sr(p)),
                    (p = h("M")) && (m.min = Sr(p)),
                    p = h("H"))
                        m.hour = Sr(p);
                    else if (p = h("I")) {
                        var v = Sr(p);
                        (p = h("p")) && (v += "P" === p.toUpperCase()[0] ? 12 : 0),
                        m.hour = v
                    }
                    if (p = h("Y"))
                        m.year = Sr(p);
                    else if (p = h("y")) {
                        var y = Sr(p);
                        (p = h("C")) ? y += 100 * Sr(p) : y += y < 69 ? 2e3 : 1900,
                        m.year = y
                    }
                    if ((p = h("m")) ? m.month = Sr(p) - 1 : (p = h("b")) && (m.month = {
                        JAN: 0,
                        FEB: 1,
                        MAR: 2,
                        APR: 3,
                        MAY: 4,
                        JUN: 5,
                        JUL: 6,
                        AUG: 7,
                        SEP: 8,
                        OCT: 9,
                        NOV: 10,
                        DEC: 11
                    }[p.substring(0, 3).toUpperCase()] || 0),
                    p = h("d"))
                        m.day = Sr(p);
                    else if (p = h("j"))
                        for (var g = Sr(p), w = _r(m.year), _ = 0; _ < 12; ++_) {
                            var E = Er(w ? br : kr, _ - 1);
                            g <= E + (w ? br : kr)[_] && (m.day = g - E)
                        }
                    else if (p = h("a")) {
                        var b = p.substring(0, 3).toUpperCase();
                        if (p = h("U")) {
                            var k = {
                                SUN: 0,
                                MON: 1,
                                TUE: 2,
                                WED: 3,
                                THU: 4,
                                FRI: 5,
                                SAT: 6
                            }[b]
                              , F = Sr(p);
                            S = 0 === (T = new Date(m.year,0,1)).getDay() ? Fr(T, k + 7 * (F - 1)) : Fr(T, 7 - T.getDay() + k + 7 * (F - 1)),
                            m.day = S.getDate(),
                            m.month = S.getMonth()
                        } else if (p = h("W")) {
                            var T, S;
                            k = {
                                MON: 0,
                                TUE: 1,
                                WED: 2,
                                THU: 3,
                                FRI: 4,
                                SAT: 5,
                                SUN: 6
                            }[b],
                            F = Sr(p);
                            S = 1 === (T = new Date(m.year,0,1)).getDay() ? Fr(T, k + 7 * (F - 1)) : Fr(T, 7 - T.getDay() + 1 + k + 7 * (F - 1)),
                            m.day = S.getDate(),
                            m.month = S.getMonth()
                        }
                    }
                    var D = new Date(m.year,m.month,m.day,m.hour,m.min,m.sec,0);
                    return U[n >> 2] = D.getSeconds(),
                    U[n + 4 >> 2] = D.getMinutes(),
                    U[n + 8 >> 2] = D.getHours(),
                    U[n + 12 >> 2] = D.getDate(),
                    U[n + 16 >> 2] = D.getMonth(),
                    U[n + 20 >> 2] = D.getFullYear() - 1900,
                    U[n + 24 >> 2] = D.getDay(),
                    U[n + 28 >> 2] = Er(_r(D.getFullYear()) ? br : kr, D.getMonth() - 1) + D.getDate() - 1,
                    U[n + 32 >> 2] = 0,
                    e + Cr(d[0]).length - 1
                }
                return 0
            },
            y: function(e) {
                var r = Date.now() / 1e3 | 0;
                return e && (U[e >> 2] = r),
                r
            },
            Q: function(e) {
                wr();
                var r = Date.UTC(U[e + 20 >> 2] + 1900, U[e + 16 >> 2], U[e + 12 >> 2], U[e + 8 >> 2], U[e + 4 >> 2], U[e >> 2], 0)
                  , n = new Date(r);
                U[e + 24 >> 2] = n.getUTCDay();
                var t = Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0)
                  , o = (n.getTime() - t) / 864e5 | 0;
                return U[e + 28 >> 2] = o,
                n.getTime() / 1e3 | 0
            }
        }, Rr = (function() {
            var e = {
                a: jr
            };
            function r(e, r) {
                var t, o = e.exports;
                n.asm = o,
                K((k = n.asm.ta).buffer),
                $ = n.asm.ya,
                t = n.asm.ua,
                Q.unshift(t),
                ue()
            }
            function t(e) {
                r(e.instance)
            }
            function o(r) {
                return function() {
                    if (!E && (h || v)) {
                        if ("function" == typeof fetch && !he(ce))
                            return fetch(ce, {
                                credentials: "same-origin"
                            }).then((function(e) {
                                if (!e.ok)
                                    throw "failed to load wasm binary file at '" + ce + "'";
                                return e.arrayBuffer()
                            }
                            )).catch((function() {
                                return ve(ce)
                            }
                            ));
                        if (s)
                            return new Promise((function(e, r) {
                                s(ce, (function(r) {
                                    e(new Uint8Array(r))
                                }
                                ), r)
                            }
                            ))
                    }
                    return Promise.resolve().then((function() {
                        return ve(ce)
                    }
                    ))
                }().then((function(r) {
                    return WebAssembly.instantiate(r, e)
                }
                )).then((function(e) {
                    return e
                }
                )).then(r, (function(e) {
                    _("failed to asynchronously prepare wasm: " + e),
                    se(e)
                }
                ))
            }
            if (ie(),
            n.instantiateWasm)
                try {
                    return n.instantiateWasm(e, r)
                } catch (e) {
                    return _("Module.instantiateWasm callback failed with error: " + e),
                    !1
                }
            E || "function" != typeof WebAssembly.instantiateStreaming || me(ce) || he(ce) || "function" != typeof fetch ? o(t) : fetch(ce, {
                credentials: "same-origin"
            }).then((function(r) {
                return WebAssembly.instantiateStreaming(r, e).then(t, (function(e) {
                    return _("wasm streaming compile failed: " + e),
                    _("falling back to ArrayBuffer instantiation"),
                    o(t)
                }
                ))
            }
            ))
        }(),
        n.___wasm_call_ctors = function() {
            return (n.___wasm_call_ctors = n.asm.ua).apply(null, arguments)
        }
        ,
        n._malloc = function() {
            return (Rr = n._malloc = n.asm.va).apply(null, arguments)
        }
        ), xr = n._free = function() {
            return (xr = n._free = n.asm.wa).apply(null, arguments)
        }
        , Or = (n._ASC_FT_Open_Face = function() {
            return (n._ASC_FT_Open_Face = n.asm.xa).apply(null, arguments)
        }
        ,
        n._ASC_FT_Malloc = function() {
            return (n._ASC_FT_Malloc = n.asm.za).apply(null, arguments)
        }
        ,
        n._ASC_FT_Free = function() {
            return (n._ASC_FT_Free = n.asm.Aa).apply(null, arguments)
        }
        ,
        n._ASC_FT_Init = function() {
            return (n._ASC_FT_Init = n.asm.Ba).apply(null, arguments)
        }
        ,
        n._ASC_FT_Open_Face_Path = function() {
            return (n._ASC_FT_Open_Face_Path = n.asm.Ca).apply(null, arguments)
        }
        ,
        n._ASC_FT_SetCMapForCharCode = function() {
            return (n._ASC_FT_SetCMapForCharCode = n.asm.Da).apply(null, arguments)
        }
        ,
        n._ASC_FT_GetFaceInfo = function() {
            return (n._ASC_FT_GetFaceInfo = n.asm.Ea).apply(null, arguments)
        }
        ,
        n._ASC_FT_GetFaceMaxAdvanceX = function() {
            return (n._ASC_FT_GetFaceMaxAdvanceX = n.asm.Fa).apply(null, arguments)
        }
        ,
        n._ASC_FT_GetKerningX = function() {
            return (n._ASC_FT_GetKerningX = n.asm.Ga).apply(null, arguments)
        }
        ,
        n._ASC_FT_Glyph_Get_CBox = function() {
            return (n._ASC_FT_Glyph_Get_CBox = n.asm.Ha).apply(null, arguments)
        }
        ,
        n._FT_Decompose_Outline_Buffer_Init = function() {
            return (n._FT_Decompose_Outline_Buffer_Init = n.asm.Ia).apply(null, arguments)
        }
        ,
        n._FT_Decompose_Outline_Buffer_Check = function() {
            return (n._FT_Decompose_Outline_Buffer_Check = n.asm.Ja).apply(null, arguments)
        }
        ,
        n._GlyphPathMoveTo = function() {
            return (n._GlyphPathMoveTo = n.asm.Ka).apply(null, arguments)
        }
        ,
        n._GlyphPathLineTo = function() {
            return (n._GlyphPathLineTo = n.asm.La).apply(null, arguments)
        }
        ,
        n._GlyphPathConicTo = function() {
            return (n._GlyphPathConicTo = n.asm.Ma).apply(null, arguments)
        }
        ,
        n._GlyphPathCubicTo = function() {
            return (n._GlyphPathCubicTo = n.asm.Na).apply(null, arguments)
        }
        ,
        n._AST_FT_Load_Glyph = function() {
            return (n._AST_FT_Load_Glyph = n.asm.Oa).apply(null, arguments)
        }
        ,
        n._ASC_FT_Get_Glyph_Measure_Params = function() {
            return (n._ASC_FT_Get_Glyph_Measure_Params = n.asm.Pa).apply(null, arguments)
        }
        ,
        n._ASC_FT_Get_Glyph_Render_Params = function() {
            return (n._ASC_FT_Get_Glyph_Render_Params = n.asm.Qa).apply(null, arguments)
        }
        ,
        n._ASC_FT_Get_Glyph_Render_Buffer = function() {
            return (n._ASC_FT_Get_Glyph_Render_Buffer = n.asm.Ra).apply(null, arguments)
        }
        ,
        n._ASC_FT_Set_Transform = function() {
            return (n._ASC_FT_Set_Transform = n.asm.Sa).apply(null, arguments)
        }
        ,
        n._ASC_FT_Set_TrueType_HintProp = function() {
            return (n._ASC_FT_Set_TrueType_HintProp = n.asm.Ta).apply(null, arguments)
        }
        ,
        n.___errno_location = function() {
            return (Or = n.___errno_location = n.asm.Ua).apply(null, arguments)
        }
        ), zr = n.___getTypeName = function() {
            return (zr = n.___getTypeName = n.asm.Va).apply(null, arguments)
        }
        , Br = (n.___embind_register_native_and_builtin_types = function() {
            return (n.___embind_register_native_and_builtin_types = n.asm.Wa).apply(null, arguments)
        }
        ,
        n.__get_tzname = function() {
            return (Br = n.__get_tzname = n.asm.Xa).apply(null, arguments)
        }
        ), Ur = n.__get_daylight = function() {
            return (Ur = n.__get_daylight = n.asm.Ya).apply(null, arguments)
        }
        , Nr = n.__get_timezone = function() {
            return (Nr = n.__get_timezone = n.asm.Za).apply(null, arguments)
        }
        , Ir = n.stackSave = function() {
            return (Ir = n.stackSave = n.asm._a).apply(null, arguments)
        }
        , Hr = n.stackRestore = function() {
            return (Hr = n.stackRestore = n.asm.$a).apply(null, arguments)
        }
        , Wr = n._setThrew = function() {
            return (Wr = n._setThrew = n.asm.ab).apply(null, arguments)
        }
        , Lr = n._memalign = function() {
            return (Lr = n._memalign = n.asm.bb).apply(null, arguments)
        }
        ;
        n.dynCall_jji = function() {
            return (n.dynCall_jji = n.asm.cb).apply(null, arguments)
        }
        ,
        n.dynCall_iji = function() {
            return (n.dynCall_iji = n.asm.db).apply(null, arguments)
        }
        ,
        n.dynCall_iiiji = function() {
            return (n.dynCall_iiiji = n.asm.eb).apply(null, arguments)
        }
        ,
        n.dynCall_jii = function() {
            return (n.dynCall_jii = n.asm.fb).apply(null, arguments)
        }
        ,
        n.dynCall_viij = function() {
            return (n.dynCall_viij = n.asm.gb).apply(null, arguments)
        }
        ,
        n.dynCall_jiji = function() {
            return (n.dynCall_jiji = n.asm.hb).apply(null, arguments)
        }
        ,
        n.dynCall_ji = function() {
            return (n.dynCall_ji = n.asm.ib).apply(null, arguments)
        }
        ,
        n.dynCall_iiji = function() {
            return (n.dynCall_iiji = n.asm.jb).apply(null, arguments)
        }
        ,
        n.dynCall_iiiiij = function() {
            return (n.dynCall_iiiiij = n.asm.kb).apply(null, arguments)
        }
        ,
        n.dynCall_iiiiijj = function() {
            return (n.dynCall_iiiiijj = n.asm.lb).apply(null, arguments)
        }
        ,
        n.dynCall_iiiiiijj = function() {
            return (n.dynCall_iiiiiijj = n.asm.mb).apply(null, arguments)
        }
        ,
        n.dynCall_viijii = function() {
            return (n.dynCall_viijii = n.asm.nb).apply(null, arguments)
        }
        ;
        function Gr(e) {
            this.name = "ExitStatus",
            this.message = "Program terminated with exit(" + e + ")",
            this.status = e
        }
        function Yr(e) {
            function r() {
                Pr || (Pr = !0,
                n.calledRun = !0,
                T || (!0,
                n.noFSInit || De.init.initialized || De.init(),
                De.ignorePermissions = !1,
                Fe.init(),
                ye(Q),
                n.onRuntimeInitialized && n.onRuntimeInitialized(),
                function() {
                    if (n.postRun)
                        for ("function" == typeof n.postRun && (n.postRun = [n.postRun]); n.postRun.length; )
                            e = n.postRun.shift(),
                            ee.unshift(e);
                    var e;
                    ye(ee)
                }()))
            }
            e = e || d,
            te > 0 || (!function() {
                if (n.preRun)
                    for ("function" == typeof n.preRun && (n.preRun = [n.preRun]); n.preRun.length; )
                        e = n.preRun.shift(),
                        Z.unshift(e);
                var e;
                ye(Z)
            }(),
            te > 0 || (n.setStatus ? (n.setStatus("Running..."),
            setTimeout((function() {
                setTimeout((function() {
                    n.setStatus("")
                }
                ), 1),
                r()
            }
            ), 1)) : r()))
        }
        if (n.addRunDependency = ie,
        n.removeRunDependency = ue,
        n.FS_createPath = De.createPath,
        n.FS_createDataFile = De.createDataFile,
        n.FS_createPreloadedFile = De.createPreloadedFile,
        n.FS_createLazyFile = De.createLazyFile,
        n.FS_createDevice = De.createDevice,
        n.FS_unlink = De.unlink,
        ae = function e() {
            Pr || Yr(),
            Pr || (ae = e)
        }
        ,
        n.run = Yr,
        n.preInit)
            for ("function" == typeof n.preInit && (n.preInit = [n.preInit]); n.preInit.length > 0; )
                n.preInit.pop()();
        return Yr(),
        {
            Module: n
        }
    }
    var i = {};
    try {
        Object.defineProperty(i, "__esModule", {
            value: !0
        })
    } catch (e) {
        i.__esModule = !0
    }
    return function(e, n, t) {
        var o = {
            Module: null
        }
          , i = null;
        function u(e) {
            return o.Module ? Promise.resolve(o) : i || (i = new Promise((function(n, t) {
                e = e || {};
                var u, s = function(e) {
                    void 0 !== r && r.off("uncaughtException", e)
                }, c = function(e) {
                    t(e),
                    s(c)
                }, f = "onAbort"in e, l = e.onAbort, d = "onRuntimeInitialized"in e, p = e.onRuntimeInitialized, m = function() {
                    f ? e.onAbort = l : delete e.onAbort,
                    d ? e.onRuntimeInitialized = p : delete e.onRuntimeInitialized
                };
                e.onAbort = function(r) {
                    c(new Error(r)),
                    m(),
                    "function" == typeof e.onAbort && e.onAbort(r)
                }
                ,
                e.onRuntimeInitialized = function() {
                    if (m(),
                    "function" == typeof e.onRuntimeInitialized)
                        try {
                            e.onRuntimeInitialized()
                        } catch (e) {
                            return void c(e)
                        }
                    o.Module = e,
                    i = null,
                    n(o),
                    s(c)
                }
                ,
                u = c,
                void 0 !== r && r.on("uncaughtException", u),
                a(e)
            }
            )).catch((function(e) {
                return void 0,
                o.Module = null,
                i = null,
                Promise.reject(e)
            }
            )))
        }
        try {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: u
            })
        } catch (r) {
            e.default = u
        }
        if ("undefined" != typeof Symbol && Symbol.toStringTag)
            try {
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                })
            } catch (e) {}
        return e
    }(i)
}
));
