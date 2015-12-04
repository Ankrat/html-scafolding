
// Instrumentation Header
{
    var fs = require('fs');
    var __statement_U_9CRe, __expression_G3qo7s, __block_LCpqSB;
    var store = require('/Users/Yann/Desktop/projectStarter/node_modules/gulp-coverage/contrib/coverage_store.js');
    
    __statement_U_9CRe = function(i) {
        var fd = store.register('/Users/Yann/Desktop/projectStarter/build/reports/tests/moduleName/index.js');
        fs.writeSync(fd, '{"statement": {"node": ' + i + '}},\n');
    }; 
    
    __expression_G3qo7s = function(i) {
        var fd = store.register('/Users/Yann/Desktop/projectStarter/build/reports/tests/moduleName/index.js');
        fs.writeSync(fd, '{"expression": {"node": ' + i + '}},\n');
    }; 
    
    __block_LCpqSB = function(i) {
        var fd = store.register('/Users/Yann/Desktop/projectStarter/build/reports/tests/moduleName/index.js');
        fs.writeSync(fd, '{"block": ' + i + '},\n');
    }; 
    __intro_byTVoB = function(id, obj) {
        // console.log('__intro: ', id, ', obj.__instrumented_miss: ', obj.__instrumented_miss, ', obj.length: ', obj.length);
        (typeof obj === 'object' || typeof obj === 'function') &&
            Object.defineProperty && Object.defineProperty(obj, '__instrumented_miss', {enumerable: false, writable: true});
        obj.__instrumented_miss = obj.__instrumented_miss || [];
        if ('undefined' !== typeof obj && null !== obj && 'undefined' !== typeof obj.__instrumented_miss) {
            if (obj.length === 0) {
                // console.log('interim miss: ', id);
                obj.__instrumented_miss[id] = true;
            } else {
                obj.__instrumented_miss[id] = false;
            }
        }
        return obj;
    };
    function isProbablyChainable(obj, id) {
        return obj &&
            obj.__instrumented_miss[id] !== undefined &&
            'number' === typeof obj.length;
    }
    __extro_wrjjOl = function(id, obj) {
        var fd = store.register('/Users/Yann/Desktop/projectStarter/build/reports/tests/moduleName/index.js');
        // console.log('__extro: ', id, ', obj.__instrumented_miss: ', obj.__instrumented_miss, ', obj.length: ', obj.length);
        if ('undefined' !== typeof obj && null !== obj && 'undefined' !== typeof obj.__instrumented_miss) {
            if (isProbablyChainable(obj, id) && obj.length === 0 && obj.__instrumented_miss[id]) {
                // if the call was not a "constructor" - i.e. it did not add things to the chainable
                // and it did not return anything from the chainable, it is a miss
                // console.log('miss: ', id);
            } else {
                fs.writeSync(fd, '{"chain": {"node": ' + id + '}},\n');
            }
            obj.__instrumented_miss[id] = undefined;
        } else {
            fs.writeSync(fd, '{"chain": {"node": ' + id + '}},\n');
        }
        return obj;
    };
};
////////////////////////

// Instrumented Code
{
    __statement_U_9CRe(0);
    __expression_G3qo7s(1), function e(t, n, r) {
        __block_LCpqSB(0);
        function s(o, u) {
            __block_LCpqSB(1);
            if (__expression_G3qo7s(2), !n[o]) {
                __block_LCpqSB(2);
                if (__expression_G3qo7s(3), !t[o]) {
                    __block_LCpqSB(3);
                    {
                        __statement_U_9CRe(4);
                        var a = (__expression_G3qo7s(5), (__expression_G3qo7s(6), (__expression_G3qo7s(7), typeof require) == 'function') && (__expression_G3qo7s(8), require));
                    }
                    if (__expression_G3qo7s(9), (__expression_G3qo7s(10), !(__expression_G3qo7s(11), u)) && (__expression_G3qo7s(12), a)) {
                        __block_LCpqSB(4);
                        return __expression_G3qo7s(13), (__expression_G3qo7s(14), a(o, (__expression_G3qo7s(15), !0)));
                    }
                    if (__expression_G3qo7s(16), i) {
                        __block_LCpqSB(5);
                        return __expression_G3qo7s(17), (__expression_G3qo7s(18), i(o, (__expression_G3qo7s(19), !0)));
                    }
                    {
                        __statement_U_9CRe(20);
                        throw new Error((__expression_G3qo7s(21), (__expression_G3qo7s(22), 'Cannot find module \'' + (__expression_G3qo7s(23), o)) + '\''));
                    }
                }
                {
                    __statement_U_9CRe(24);
                    var f = n[o] = {
                            exports: {}
                        };
                }
                {
                    __statement_U_9CRe(25);
                    __extro_wrjjOl(26, __intro_byTVoB(26, t[o][0]).call(f.exports, function (e) {
                        __block_LCpqSB(6);
                        {
                            __statement_U_9CRe(27);
                            var n = t[o][1][e];
                        }
                        return __expression_G3qo7s(28), (__expression_G3qo7s(29), s((__expression_G3qo7s(32), n) ? (__expression_G3qo7s(30), n) : (__expression_G3qo7s(31), e)));
                    }, f, f.exports, e, t, n, r));
                }
            }
            return __expression_G3qo7s(33), n[o].exports;
        }
        {
            __statement_U_9CRe(34);
            var i = (__expression_G3qo7s(35), (__expression_G3qo7s(36), (__expression_G3qo7s(37), typeof require) == 'function') && (__expression_G3qo7s(38), require));
        }
        for (var o = 0; __expression_G3qo7s(39), (__expression_G3qo7s(40), o) < r.length; __expression_G3qo7s(41), o++) {
            __block_LCpqSB(7);
            {
                __statement_U_9CRe(42);
                __expression_G3qo7s(43), s(r[o]);
            }
        }
        return __expression_G3qo7s(44), s;
    }({
        1: [
            function (require, module, exports) {
                __block_LCpqSB(8);
                function exclude() {
                    __block_LCpqSB(9);
                    {
                        __statement_U_9CRe(45);
                        var excludes = __extro_wrjjOl(46, __intro_byTVoB(46, [].slice).call(arguments));
                    }
                    function excludeProps(res, obj) {
                        __block_LCpqSB(10);
                        {
                            __statement_U_9CRe(47);
                            __extro_wrjjOl(48, __intro_byTVoB(48, __extro_wrjjOl(49, __intro_byTVoB(49, Object).keys(obj))).forEach(function (key) {
                                __block_LCpqSB(11);
                                if (__expression_G3qo7s(50), !(__expression_G3qo7s(51), ~__extro_wrjjOl(52, __intro_byTVoB(52, excludes).indexOf(key)))) {
                                    __block_LCpqSB(12);
                                    {
                                        __statement_U_9CRe(53);
                                        res[key] = obj[key];
                                    }
                                }
                            }));
                        }
                    }
                    return __expression_G3qo7s(54), function extendExclude() {
                        __block_LCpqSB(13);
                        {
                            __statement_U_9CRe(55);
                            var args = __extro_wrjjOl(56, __intro_byTVoB(56, [].slice).call(arguments)), i = 0, res = {};
                        }
                        for (; __expression_G3qo7s(57), (__expression_G3qo7s(58), i) < args.length; __expression_G3qo7s(59), i++) {
                            __block_LCpqSB(14);
                            {
                                __statement_U_9CRe(60);
                                __expression_G3qo7s(61), excludeProps(res, args[i]);
                            }
                        }
                        return __expression_G3qo7s(62), res;
                    };
                }
                ;
                {
                    __statement_U_9CRe(63);
                    module.exports = AssertionError;
                }
                function AssertionError(message, _props, ssf) {
                    __block_LCpqSB(15);
                    {
                        __statement_U_9CRe(64);
                        var extend = (__expression_G3qo7s(65), exclude('name', 'message', 'stack', 'constructor', 'toJSON')), props = (__expression_G3qo7s(66), extend((__expression_G3qo7s(67), (__expression_G3qo7s(68), _props) || {})));
                    }
                    {
                        __statement_U_9CRe(69);
                        this.message = (__expression_G3qo7s(70), (__expression_G3qo7s(71), message) || 'Unspecified AssertionError');
                    }
                    {
                        __statement_U_9CRe(72);
                        this.showDiff = false;
                    }
                    for (var key in props) {
                        __block_LCpqSB(16);
                        {
                            __statement_U_9CRe(73);
                            this[key] = props[key];
                        }
                    }
                    {
                        __statement_U_9CRe(74);
                        ssf = (__expression_G3qo7s(75), (__expression_G3qo7s(76), ssf) || arguments.callee);
                    }
                    if (__expression_G3qo7s(77), (__expression_G3qo7s(78), ssf) && Error.captureStackTrace) {
                        __block_LCpqSB(17);
                        {
                            __statement_U_9CRe(79);
                            __extro_wrjjOl(80, __intro_byTVoB(80, Error).captureStackTrace(this, ssf));
                        }
                    } else {
                        __block_LCpqSB(18);
                        {
                            __statement_U_9CRe(81);
                            this.stack = new Error().stack;
                        }
                    }
                }
                {
                    __statement_U_9CRe(82);
                    AssertionError.prototype = __extro_wrjjOl(83, __intro_byTVoB(83, Object).create(Error.prototype));
                }
                {
                    __statement_U_9CRe(84);
                    AssertionError.prototype.name = 'AssertionError';
                }
                {
                    __statement_U_9CRe(85);
                    AssertionError.prototype.constructor = AssertionError;
                }
                {
                    __statement_U_9CRe(86);
                    AssertionError.prototype.toJSON = function (stack) {
                        __block_LCpqSB(19);
                        {
                            __statement_U_9CRe(87);
                            var extend = (__expression_G3qo7s(88), exclude('constructor', 'toJSON', 'stack')), props = (__expression_G3qo7s(89), extend({
                                    name: this.name
                                }, this));
                        }
                        if (__expression_G3qo7s(90), (__expression_G3qo7s(91), false !== (__expression_G3qo7s(92), stack)) && this.stack) {
                            __block_LCpqSB(20);
                            {
                                __statement_U_9CRe(93);
                                props.stack = this.stack;
                            }
                        }
                        return __expression_G3qo7s(94), props;
                    };
                }
            },
            {}
        ],
        2: [
            function (require, module, exports) {
                __block_LCpqSB(21);
                {
                    __statement_U_9CRe(95);
                    var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                }
                ;
                {
                    __statement_U_9CRe(96);
                    __expression_G3qo7s(97), function (exports) {
                        __block_LCpqSB(22);
                        {
                            __statement_U_9CRe(98);
                            'use strict';
                        }
                        {
                            __statement_U_9CRe(99);
                            var Arr = (__expression_G3qo7s(102), (__expression_G3qo7s(103), typeof Uint8Array) !== 'undefined') ? (__expression_G3qo7s(100), Uint8Array) : (__expression_G3qo7s(101), Array);
                        }
                        {
                            __statement_U_9CRe(104);
                            var PLUS = __extro_wrjjOl(105, __intro_byTVoB(105, '+').charCodeAt(0));
                        }
                        {
                            __statement_U_9CRe(106);
                            var SLASH = __extro_wrjjOl(107, __intro_byTVoB(107, '/').charCodeAt(0));
                        }
                        {
                            __statement_U_9CRe(108);
                            var NUMBER = __extro_wrjjOl(109, __intro_byTVoB(109, '0').charCodeAt(0));
                        }
                        {
                            __statement_U_9CRe(110);
                            var LOWER = __extro_wrjjOl(111, __intro_byTVoB(111, 'a').charCodeAt(0));
                        }
                        {
                            __statement_U_9CRe(112);
                            var UPPER = __extro_wrjjOl(113, __intro_byTVoB(113, 'A').charCodeAt(0));
                        }
                        {
                            __statement_U_9CRe(114);
                            var PLUS_URL_SAFE = __extro_wrjjOl(115, __intro_byTVoB(115, '-').charCodeAt(0));
                        }
                        {
                            __statement_U_9CRe(116);
                            var SLASH_URL_SAFE = __extro_wrjjOl(117, __intro_byTVoB(117, '_').charCodeAt(0));
                        }
                        function decode(elt) {
                            __block_LCpqSB(23);
                            {
                                __statement_U_9CRe(118);
                                var code = __extro_wrjjOl(119, __intro_byTVoB(119, elt).charCodeAt(0));
                            }
                            if (__expression_G3qo7s(120), (__expression_G3qo7s(121), (__expression_G3qo7s(122), code) === (__expression_G3qo7s(123), PLUS)) || (__expression_G3qo7s(124), (__expression_G3qo7s(125), code) === (__expression_G3qo7s(126), PLUS_URL_SAFE))) {
                                __block_LCpqSB(24);
                                return __expression_G3qo7s(127), 62;
                            }
                            if (__expression_G3qo7s(128), (__expression_G3qo7s(129), (__expression_G3qo7s(130), code) === (__expression_G3qo7s(131), SLASH)) || (__expression_G3qo7s(132), (__expression_G3qo7s(133), code) === (__expression_G3qo7s(134), SLASH_URL_SAFE))) {
                                __block_LCpqSB(25);
                                return __expression_G3qo7s(135), 63;
                            }
                            if (__expression_G3qo7s(136), (__expression_G3qo7s(137), code) < (__expression_G3qo7s(138), NUMBER)) {
                                __block_LCpqSB(26);
                                return __expression_G3qo7s(139), (__expression_G3qo7s(140), -1);
                            }
                            if (__expression_G3qo7s(141), (__expression_G3qo7s(142), code) < (__expression_G3qo7s(143), (__expression_G3qo7s(144), NUMBER) + 10)) {
                                __block_LCpqSB(27);
                                return __expression_G3qo7s(145), (__expression_G3qo7s(146), (__expression_G3qo7s(147), (__expression_G3qo7s(148), (__expression_G3qo7s(149), code) - (__expression_G3qo7s(150), NUMBER)) + 26) + 26);
                            }
                            if (__expression_G3qo7s(151), (__expression_G3qo7s(152), code) < (__expression_G3qo7s(153), (__expression_G3qo7s(154), UPPER) + 26)) {
                                __block_LCpqSB(28);
                                return __expression_G3qo7s(155), (__expression_G3qo7s(156), (__expression_G3qo7s(157), code) - (__expression_G3qo7s(158), UPPER));
                            }
                            if (__expression_G3qo7s(159), (__expression_G3qo7s(160), code) < (__expression_G3qo7s(161), (__expression_G3qo7s(162), LOWER) + 26)) {
                                __block_LCpqSB(29);
                                return __expression_G3qo7s(163), (__expression_G3qo7s(164), (__expression_G3qo7s(165), (__expression_G3qo7s(166), code) - (__expression_G3qo7s(167), LOWER)) + 26);
                            }
                        }
                        function b64ToByteArray(b64) {
                            __block_LCpqSB(30);
                            {
                                __statement_U_9CRe(168);
                                var i, j, l, tmp, placeHolders, arr;
                            }
                            if (__expression_G3qo7s(169), (__expression_G3qo7s(170), b64.length % 4) > 0) {
                                __block_LCpqSB(31);
                                {
                                    __statement_U_9CRe(171);
                                    throw new Error('Invalid string. Length must be a multiple of 4');
                                }
                            }
                            {
                                __statement_U_9CRe(172);
                                var len = b64.length;
                            }
                            {
                                __statement_U_9CRe(173);
                                placeHolders = (__expression_G3qo7s(176), '=' === __extro_wrjjOl(177, __intro_byTVoB(177, b64).charAt((__expression_G3qo7s(178), (__expression_G3qo7s(179), len) - 2)))) ? (__expression_G3qo7s(174), 2) : (__expression_G3qo7s(175), (__expression_G3qo7s(182), '=' === __extro_wrjjOl(183, __intro_byTVoB(183, b64).charAt((__expression_G3qo7s(184), (__expression_G3qo7s(185), len) - 1)))) ? (__expression_G3qo7s(180), 1) : (__expression_G3qo7s(181), 0));
                            }
                            {
                                __statement_U_9CRe(186);
                                arr = new Arr((__expression_G3qo7s(187), (__expression_G3qo7s(188), (__expression_G3qo7s(189), b64.length * 3) / 4) - (__expression_G3qo7s(190), placeHolders)));
                            }
                            {
                                __statement_U_9CRe(191);
                                l = (__expression_G3qo7s(194), (__expression_G3qo7s(195), placeHolders) > 0) ? (__expression_G3qo7s(192), (__expression_G3qo7s(196), b64.length - 4)) : (__expression_G3qo7s(193), b64.length);
                            }
                            {
                                __statement_U_9CRe(197);
                                var L = 0;
                            }
                            function push(v) {
                                __block_LCpqSB(32);
                                {
                                    __statement_U_9CRe(198);
                                    arr[__expression_G3qo7s(199), L++] = v;
                                }
                            }
                            for (i = 0, j = 0; __expression_G3qo7s(200), (__expression_G3qo7s(201), i) < (__expression_G3qo7s(202), l); i += 4, j += 3) {
                                __block_LCpqSB(33);
                                {
                                    __statement_U_9CRe(203);
                                    tmp = (__expression_G3qo7s(204), (__expression_G3qo7s(205), (__expression_G3qo7s(206), (__expression_G3qo7s(207), (__expression_G3qo7s(208), decode(__extro_wrjjOl(209, __intro_byTVoB(209, b64).charAt(i)))) << 18) | (__expression_G3qo7s(210), (__expression_G3qo7s(211), decode(__extro_wrjjOl(212, __intro_byTVoB(212, b64).charAt((__expression_G3qo7s(213), (__expression_G3qo7s(214), i) + 1))))) << 12)) | (__expression_G3qo7s(215), (__expression_G3qo7s(216), decode(__extro_wrjjOl(217, __intro_byTVoB(217, b64).charAt((__expression_G3qo7s(218), (__expression_G3qo7s(219), i) + 2))))) << 6)) | (__expression_G3qo7s(220), decode(__extro_wrjjOl(221, __intro_byTVoB(221, b64).charAt((__expression_G3qo7s(222), (__expression_G3qo7s(223), i) + 3))))));
                                }
                                {
                                    __statement_U_9CRe(224);
                                    __expression_G3qo7s(225), push((__expression_G3qo7s(226), (__expression_G3qo7s(227), (__expression_G3qo7s(228), tmp) & 16711680) >> 16));
                                }
                                {
                                    __statement_U_9CRe(229);
                                    __expression_G3qo7s(230), push((__expression_G3qo7s(231), (__expression_G3qo7s(232), (__expression_G3qo7s(233), tmp) & 65280) >> 8));
                                }
                                {
                                    __statement_U_9CRe(234);
                                    __expression_G3qo7s(235), push((__expression_G3qo7s(236), (__expression_G3qo7s(237), tmp) & 255));
                                }
                            }
                            if (__expression_G3qo7s(238), (__expression_G3qo7s(239), placeHolders) === 2) {
                                __block_LCpqSB(34);
                                {
                                    __statement_U_9CRe(240);
                                    tmp = (__expression_G3qo7s(241), (__expression_G3qo7s(242), (__expression_G3qo7s(243), decode(__extro_wrjjOl(244, __intro_byTVoB(244, b64).charAt(i)))) << 2) | (__expression_G3qo7s(245), (__expression_G3qo7s(246), decode(__extro_wrjjOl(247, __intro_byTVoB(247, b64).charAt((__expression_G3qo7s(248), (__expression_G3qo7s(249), i) + 1))))) >> 4));
                                }
                                {
                                    __statement_U_9CRe(250);
                                    __expression_G3qo7s(251), push((__expression_G3qo7s(252), (__expression_G3qo7s(253), tmp) & 255));
                                }
                            } else if (__expression_G3qo7s(254), (__expression_G3qo7s(255), placeHolders) === 1) {
                                __block_LCpqSB(35);
                                {
                                    __statement_U_9CRe(256);
                                    tmp = (__expression_G3qo7s(257), (__expression_G3qo7s(258), (__expression_G3qo7s(259), (__expression_G3qo7s(260), decode(__extro_wrjjOl(261, __intro_byTVoB(261, b64).charAt(i)))) << 10) | (__expression_G3qo7s(262), (__expression_G3qo7s(263), decode(__extro_wrjjOl(264, __intro_byTVoB(264, b64).charAt((__expression_G3qo7s(265), (__expression_G3qo7s(266), i) + 1))))) << 4)) | (__expression_G3qo7s(267), (__expression_G3qo7s(268), decode(__extro_wrjjOl(269, __intro_byTVoB(269, b64).charAt((__expression_G3qo7s(270), (__expression_G3qo7s(271), i) + 2))))) >> 2));
                                }
                                {
                                    __statement_U_9CRe(272);
                                    __expression_G3qo7s(273), push((__expression_G3qo7s(274), (__expression_G3qo7s(275), (__expression_G3qo7s(276), tmp) >> 8) & 255));
                                }
                                {
                                    __statement_U_9CRe(277);
                                    __expression_G3qo7s(278), push((__expression_G3qo7s(279), (__expression_G3qo7s(280), tmp) & 255));
                                }
                            }
                            return __expression_G3qo7s(281), arr;
                        }
                        function uint8ToBase64(uint8) {
                            __block_LCpqSB(36);
                            {
                                __statement_U_9CRe(282);
                                var i, extraBytes = (__expression_G3qo7s(283), uint8.length % 3), output = '', temp, length;
                            }
                            function encode(num) {
                                __block_LCpqSB(37);
                                return __expression_G3qo7s(284), __extro_wrjjOl(285, __intro_byTVoB(285, lookup).charAt(num));
                            }
                            function tripletToBase64(num) {
                                __block_LCpqSB(38);
                                return __expression_G3qo7s(286), (__expression_G3qo7s(287), (__expression_G3qo7s(288), (__expression_G3qo7s(289), (__expression_G3qo7s(290), encode((__expression_G3qo7s(291), (__expression_G3qo7s(292), (__expression_G3qo7s(293), num) >> 18) & 63))) + (__expression_G3qo7s(294), encode((__expression_G3qo7s(295), (__expression_G3qo7s(296), (__expression_G3qo7s(297), num) >> 12) & 63)))) + (__expression_G3qo7s(298), encode((__expression_G3qo7s(299), (__expression_G3qo7s(300), (__expression_G3qo7s(301), num) >> 6) & 63)))) + (__expression_G3qo7s(302), encode((__expression_G3qo7s(303), (__expression_G3qo7s(304), num) & 63))));
                            }
                            for (i = 0, length = (__expression_G3qo7s(305), uint8.length - (__expression_G3qo7s(306), extraBytes)); __expression_G3qo7s(307), (__expression_G3qo7s(308), i) < (__expression_G3qo7s(309), length); i += 3) {
                                __block_LCpqSB(39);
                                {
                                    __statement_U_9CRe(310);
                                    temp = (__expression_G3qo7s(311), (__expression_G3qo7s(312), (__expression_G3qo7s(313), uint8[i] << 16) + (__expression_G3qo7s(314), uint8[__expression_G3qo7s(315), (__expression_G3qo7s(316), i) + 1] << 8)) + uint8[__expression_G3qo7s(317), (__expression_G3qo7s(318), i) + 2]);
                                }
                                {
                                    __statement_U_9CRe(319);
                                    output += (__expression_G3qo7s(320), tripletToBase64(temp));
                                }
                            }
                            switch (__expression_G3qo7s(321), extraBytes) {
                            case 1: {
                                    __block_LCpqSB(40);
                                    {
                                        __statement_U_9CRe(322);
                                        temp = uint8[__expression_G3qo7s(323), uint8.length - 1];
                                    }
                                    {
                                        __statement_U_9CRe(324);
                                        output += (__expression_G3qo7s(325), encode((__expression_G3qo7s(326), (__expression_G3qo7s(327), temp) >> 2)));
                                    }
                                    {
                                        __statement_U_9CRe(328);
                                        output += (__expression_G3qo7s(329), encode((__expression_G3qo7s(330), (__expression_G3qo7s(331), (__expression_G3qo7s(332), temp) << 4) & 63)));
                                    }
                                    {
                                        __statement_U_9CRe(333);
                                        output += '==';
                                    }
                                    break;
                                }
                            case 2: {
                                    __block_LCpqSB(41);
                                    {
                                        __statement_U_9CRe(334);
                                        temp = (__expression_G3qo7s(335), (__expression_G3qo7s(336), uint8[__expression_G3qo7s(337), uint8.length - 2] << 8) + uint8[__expression_G3qo7s(338), uint8.length - 1]);
                                    }
                                    {
                                        __statement_U_9CRe(339);
                                        output += (__expression_G3qo7s(340), encode((__expression_G3qo7s(341), (__expression_G3qo7s(342), temp) >> 10)));
                                    }
                                    {
                                        __statement_U_9CRe(343);
                                        output += (__expression_G3qo7s(344), encode((__expression_G3qo7s(345), (__expression_G3qo7s(346), (__expression_G3qo7s(347), temp) >> 4) & 63)));
                                    }
                                    {
                                        __statement_U_9CRe(348);
                                        output += (__expression_G3qo7s(349), encode((__expression_G3qo7s(350), (__expression_G3qo7s(351), (__expression_G3qo7s(352), temp) << 2) & 63)));
                                    }
                                    {
                                        __statement_U_9CRe(353);
                                        output += '=';
                                    }
                                    break;
                                }
                            }
                            return __expression_G3qo7s(354), output;
                        }
                        {
                            __statement_U_9CRe(355);
                            exports.toByteArray = b64ToByteArray;
                        }
                        {
                            __statement_U_9CRe(356);
                            exports.fromByteArray = uint8ToBase64;
                        }
                    }((__expression_G3qo7s(359), (__expression_G3qo7s(360), typeof exports) === 'undefined') ? (__expression_G3qo7s(357), this.base64js = {}) : (__expression_G3qo7s(358), exports));
                }
            },
            {}
        ],
        3: [
            function (require, module, exports) {
                __block_LCpqSB(42);
                {
                    __statement_U_9CRe(361);
                    module.exports = (__expression_G3qo7s(362), require('./lib/chai'));
                }
            },
            {
                './lib/chai': 4
            }
        ],
        4: [
            function (require, module, exports) {
                __block_LCpqSB(43);
                {
                    __statement_U_9CRe(363);
                    var used = [], exports = module.exports = {};
                }
                {
                    __statement_U_9CRe(364);
                    exports.version = '3.4.1';
                }
                {
                    __statement_U_9CRe(365);
                    exports.AssertionError = (__expression_G3qo7s(366), require('assertion-error'));
                }
                {
                    __statement_U_9CRe(367);
                    var util = (__expression_G3qo7s(368), require('./chai/utils'));
                }
                {
                    __statement_U_9CRe(369);
                    exports.use = function (fn) {
                        __block_LCpqSB(44);
                        if (__expression_G3qo7s(370), !(__expression_G3qo7s(371), ~__extro_wrjjOl(372, __intro_byTVoB(372, used).indexOf(fn)))) {
                            __block_LCpqSB(45);
                            {
                                __statement_U_9CRe(373);
                                __expression_G3qo7s(374), fn(this, util);
                            }
                            {
                                __statement_U_9CRe(375);
                                __extro_wrjjOl(376, __intro_byTVoB(376, used).push(fn));
                            }
                        }
                        return __expression_G3qo7s(377), this;
                    };
                }
                {
                    __statement_U_9CRe(378);
                    exports.util = util;
                }
                {
                    __statement_U_9CRe(379);
                    var config = (__expression_G3qo7s(380), require('./chai/config'));
                }
                {
                    __statement_U_9CRe(381);
                    exports.config = config;
                }
                {
                    __statement_U_9CRe(382);
                    var assertion = (__expression_G3qo7s(383), require('./chai/assertion'));
                }
                {
                    __statement_U_9CRe(384);
                    __extro_wrjjOl(385, __intro_byTVoB(385, exports).use(assertion));
                }
                {
                    __statement_U_9CRe(386);
                    var core = (__expression_G3qo7s(387), require('./chai/core/assertions'));
                }
                {
                    __statement_U_9CRe(388);
                    __extro_wrjjOl(389, __intro_byTVoB(389, exports).use(core));
                }
                {
                    __statement_U_9CRe(390);
                    var expect = (__expression_G3qo7s(391), require('./chai/interface/expect'));
                }
                {
                    __statement_U_9CRe(392);
                    __extro_wrjjOl(393, __intro_byTVoB(393, exports).use(expect));
                }
                {
                    __statement_U_9CRe(394);
                    var should = (__expression_G3qo7s(395), require('./chai/interface/should'));
                }
                {
                    __statement_U_9CRe(396);
                    __extro_wrjjOl(397, __intro_byTVoB(397, exports).use(should));
                }
                {
                    __statement_U_9CRe(398);
                    var assert = (__expression_G3qo7s(399), require('./chai/interface/assert'));
                }
                {
                    __statement_U_9CRe(400);
                    __extro_wrjjOl(401, __intro_byTVoB(401, exports).use(assert));
                }
            },
            {
                './chai/assertion': 5,
                './chai/config': 6,
                './chai/core/assertions': 7,
                './chai/interface/assert': 8,
                './chai/interface/expect': 9,
                './chai/interface/should': 10,
                './chai/utils': 24,
                'assertion-error': 1
            }
        ],
        5: [
            function (require, module, exports) {
                __block_LCpqSB(46);
                {
                    __statement_U_9CRe(402);
                    var config = (__expression_G3qo7s(403), require('./config'));
                }
                {
                    __statement_U_9CRe(404);
                    module.exports = function (_chai, util) {
                        __block_LCpqSB(47);
                        {
                            __statement_U_9CRe(405);
                            var AssertionError = _chai.AssertionError, flag = util.flag;
                        }
                        {
                            __statement_U_9CRe(406);
                            _chai.Assertion = Assertion;
                        }
                        function Assertion(obj, msg, stack) {
                            __block_LCpqSB(48);
                            {
                                __statement_U_9CRe(407);
                                __expression_G3qo7s(408), flag(this, 'ssfi', (__expression_G3qo7s(409), (__expression_G3qo7s(410), stack) || arguments.callee));
                            }
                            {
                                __statement_U_9CRe(411);
                                __expression_G3qo7s(412), flag(this, 'object', obj);
                            }
                            {
                                __statement_U_9CRe(413);
                                __expression_G3qo7s(414), flag(this, 'message', msg);
                            }
                        }
                        {
                            __statement_U_9CRe(415);
                            __extro_wrjjOl(416, __intro_byTVoB(416, Object).defineProperty(Assertion, 'includeStack', {
                                get: function () {
                                    __block_LCpqSB(49);
                                    {
                                        __statement_U_9CRe(417);
                                        __extro_wrjjOl(418, __intro_byTVoB(418, console).warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.'));
                                    }
                                    return __expression_G3qo7s(419), config.includeStack;
                                },
                                set: function (value) {
                                    __block_LCpqSB(50);
                                    {
                                        __statement_U_9CRe(420);
                                        __extro_wrjjOl(421, __intro_byTVoB(421, console).warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.'));
                                    }
                                    {
                                        __statement_U_9CRe(422);
                                        config.includeStack = value;
                                    }
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(423);
                            __extro_wrjjOl(424, __intro_byTVoB(424, Object).defineProperty(Assertion, 'showDiff', {
                                get: function () {
                                    __block_LCpqSB(51);
                                    {
                                        __statement_U_9CRe(425);
                                        __extro_wrjjOl(426, __intro_byTVoB(426, console).warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.'));
                                    }
                                    return __expression_G3qo7s(427), config.showDiff;
                                },
                                set: function (value) {
                                    __block_LCpqSB(52);
                                    {
                                        __statement_U_9CRe(428);
                                        __extro_wrjjOl(429, __intro_byTVoB(429, console).warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.'));
                                    }
                                    {
                                        __statement_U_9CRe(430);
                                        config.showDiff = value;
                                    }
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(431);
                            Assertion.addProperty = function (name, fn) {
                                __block_LCpqSB(53);
                                {
                                    __statement_U_9CRe(432);
                                    __extro_wrjjOl(433, __intro_byTVoB(433, util).addProperty(this.prototype, name, fn));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(434);
                            Assertion.addMethod = function (name, fn) {
                                __block_LCpqSB(54);
                                {
                                    __statement_U_9CRe(435);
                                    __extro_wrjjOl(436, __intro_byTVoB(436, util).addMethod(this.prototype, name, fn));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(437);
                            Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
                                __block_LCpqSB(55);
                                {
                                    __statement_U_9CRe(438);
                                    __extro_wrjjOl(439, __intro_byTVoB(439, util).addChainableMethod(this.prototype, name, fn, chainingBehavior));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(440);
                            Assertion.overwriteProperty = function (name, fn) {
                                __block_LCpqSB(56);
                                {
                                    __statement_U_9CRe(441);
                                    __extro_wrjjOl(442, __intro_byTVoB(442, util).overwriteProperty(this.prototype, name, fn));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(443);
                            Assertion.overwriteMethod = function (name, fn) {
                                __block_LCpqSB(57);
                                {
                                    __statement_U_9CRe(444);
                                    __extro_wrjjOl(445, __intro_byTVoB(445, util).overwriteMethod(this.prototype, name, fn));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(446);
                            Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
                                __block_LCpqSB(58);
                                {
                                    __statement_U_9CRe(447);
                                    __extro_wrjjOl(448, __intro_byTVoB(448, util).overwriteChainableMethod(this.prototype, name, fn, chainingBehavior));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(449);
                            Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
                                __block_LCpqSB(59);
                                {
                                    __statement_U_9CRe(450);
                                    var ok = __extro_wrjjOl(451, __intro_byTVoB(451, util).test(this, arguments));
                                }
                                if (__expression_G3qo7s(452), true !== (__expression_G3qo7s(453), showDiff)) {
                                    __block_LCpqSB(60);
                                    {
                                        __statement_U_9CRe(454);
                                        showDiff = false;
                                    }
                                }
                                if (__expression_G3qo7s(455), true !== config.showDiff) {
                                    __block_LCpqSB(61);
                                    {
                                        __statement_U_9CRe(456);
                                        showDiff = false;
                                    }
                                }
                                if (__expression_G3qo7s(457), !(__expression_G3qo7s(458), ok)) {
                                    __block_LCpqSB(62);
                                    {
                                        __statement_U_9CRe(459);
                                        var msg = __extro_wrjjOl(460, __intro_byTVoB(460, util).getMessage(this, arguments)), actual = __extro_wrjjOl(461, __intro_byTVoB(461, util).getActual(this, arguments));
                                    }
                                    {
                                        __statement_U_9CRe(462);
                                        throw new AssertionError(msg, {
                                            actual: actual,
                                            expected: expected,
                                            showDiff: showDiff
                                        }, config.includeStack ? (__expression_G3qo7s(463), this.assert) : (__expression_G3qo7s(464), (__expression_G3qo7s(465), flag(this, 'ssfi'))));
                                    }
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(466);
                            __extro_wrjjOl(467, __intro_byTVoB(467, Object).defineProperty(Assertion.prototype, '_obj', {
                                get: function () {
                                    __block_LCpqSB(63);
                                    return __expression_G3qo7s(468), (__expression_G3qo7s(469), flag(this, 'object'));
                                },
                                set: function (val) {
                                    __block_LCpqSB(64);
                                    {
                                        __statement_U_9CRe(470);
                                        __expression_G3qo7s(471), flag(this, 'object', val);
                                    }
                                }
                            }));
                        }
                    };
                }
            },
            {
                './config': 6
            }
        ],
        6: [
            function (require, module, exports) {
                __block_LCpqSB(65);
                {
                    __statement_U_9CRe(472);
                    module.exports = {
                        includeStack: false,
                        showDiff: true,
                        truncateThreshold: 40
                    };
                }
            },
            {}
        ],
        7: [
            function (require, module, exports) {
                __block_LCpqSB(66);
                {
                    __statement_U_9CRe(473);
                    module.exports = function (chai, _) {
                        __block_LCpqSB(67);
                        {
                            __statement_U_9CRe(474);
                            var Assertion = chai.Assertion, toString = Object.prototype.toString, flag = _.flag;
                        }
                        {
                            __statement_U_9CRe(475);
                            __extro_wrjjOl(476, __intro_byTVoB(476, [
                                'to',
                                'be',
                                'been',
                                'is',
                                'and',
                                'has',
                                'have',
                                'with',
                                'that',
                                'which',
                                'at',
                                'of',
                                'same'
                            ]).forEach(function (chain) {
                                __block_LCpqSB(68);
                                {
                                    __statement_U_9CRe(477);
                                    __extro_wrjjOl(478, __intro_byTVoB(478, Assertion).addProperty(chain, function () {
                                        __block_LCpqSB(69);
                                        return __expression_G3qo7s(479), this;
                                    }));
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(480);
                            __extro_wrjjOl(481, __intro_byTVoB(481, Assertion).addProperty('not', function () {
                                __block_LCpqSB(70);
                                {
                                    __statement_U_9CRe(482);
                                    __expression_G3qo7s(483), flag(this, 'negate', true);
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(484);
                            __extro_wrjjOl(485, __intro_byTVoB(485, Assertion).addProperty('deep', function () {
                                __block_LCpqSB(71);
                                {
                                    __statement_U_9CRe(486);
                                    __expression_G3qo7s(487), flag(this, 'deep', true);
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(488);
                            __extro_wrjjOl(489, __intro_byTVoB(489, Assertion).addProperty('any', function () {
                                __block_LCpqSB(72);
                                {
                                    __statement_U_9CRe(490);
                                    __expression_G3qo7s(491), flag(this, 'any', true);
                                }
                                {
                                    __statement_U_9CRe(492);
                                    __expression_G3qo7s(493), flag(this, 'all', false);
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(494);
                            __extro_wrjjOl(495, __intro_byTVoB(495, Assertion).addProperty('all', function () {
                                __block_LCpqSB(73);
                                {
                                    __statement_U_9CRe(496);
                                    __expression_G3qo7s(497), flag(this, 'all', true);
                                }
                                {
                                    __statement_U_9CRe(498);
                                    __expression_G3qo7s(499), flag(this, 'any', false);
                                }
                            }));
                        }
                        function an(type, msg) {
                            __block_LCpqSB(74);
                            if (__expression_G3qo7s(500), msg) {
                                __block_LCpqSB(75);
                                {
                                    __statement_U_9CRe(501);
                                    __expression_G3qo7s(502), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(503);
                                type = __extro_wrjjOl(504, __intro_byTVoB(504, type).toLowerCase());
                            }
                            {
                                __statement_U_9CRe(505);
                                var obj = (__expression_G3qo7s(506), flag(this, 'object')), article = (__expression_G3qo7s(509), ~__extro_wrjjOl(510, __intro_byTVoB(510, [
                                        'a',
                                        'e',
                                        'i',
                                        'o',
                                        'u'
                                    ]).indexOf(__extro_wrjjOl(511, __intro_byTVoB(511, type).charAt(0))))) ? (__expression_G3qo7s(507), 'an ') : (__expression_G3qo7s(508), 'a ');
                            }
                            {
                                __statement_U_9CRe(512);
                                __extro_wrjjOl(513, __intro_byTVoB(513, this).assert((__expression_G3qo7s(514), (__expression_G3qo7s(515), type) === __extro_wrjjOl(516, __intro_byTVoB(516, _).type(obj))), (__expression_G3qo7s(517), (__expression_G3qo7s(518), 'expected #{this} to be ' + (__expression_G3qo7s(519), article)) + (__expression_G3qo7s(520), type)), (__expression_G3qo7s(521), (__expression_G3qo7s(522), 'expected #{this} not to be ' + (__expression_G3qo7s(523), article)) + (__expression_G3qo7s(524), type))));
                            }
                        }
                        {
                            __statement_U_9CRe(525);
                            __extro_wrjjOl(526, __intro_byTVoB(526, Assertion).addChainableMethod('an', an));
                        }
                        {
                            __statement_U_9CRe(527);
                            __extro_wrjjOl(528, __intro_byTVoB(528, Assertion).addChainableMethod('a', an));
                        }
                        function includeChainingBehavior() {
                            __block_LCpqSB(76);
                            {
                                __statement_U_9CRe(529);
                                __expression_G3qo7s(530), flag(this, 'contains', true);
                            }
                        }
                        function include(val, msg) {
                            __block_LCpqSB(77);
                            {
                                __statement_U_9CRe(531);
                                __extro_wrjjOl(532, __intro_byTVoB(532, _).expectTypes(this, [
                                    'array',
                                    'object',
                                    'string'
                                ]));
                            }
                            if (__expression_G3qo7s(533), msg) {
                                __block_LCpqSB(78);
                                {
                                    __statement_U_9CRe(534);
                                    __expression_G3qo7s(535), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(536);
                                var obj = (__expression_G3qo7s(537), flag(this, 'object'));
                            }
                            {
                                __statement_U_9CRe(538);
                                var expected = false;
                            }
                            if (__expression_G3qo7s(539), (__expression_G3qo7s(540), __extro_wrjjOl(541, __intro_byTVoB(541, _).type(obj)) === 'array') && (__expression_G3qo7s(542), __extro_wrjjOl(543, __intro_byTVoB(543, _).type(val)) === 'object')) {
                                __block_LCpqSB(79);
                                for (var i in obj) {
                                    __block_LCpqSB(80);
                                    if (__extro_wrjjOl(544, __intro_byTVoB(544, _).eql(obj[i], val))) {
                                        __block_LCpqSB(81);
                                        {
                                            __statement_U_9CRe(545);
                                            expected = true;
                                        }
                                        break;
                                    }
                                }
                            } else if (__expression_G3qo7s(546), __extro_wrjjOl(547, __intro_byTVoB(547, _).type(val)) === 'object') {
                                __block_LCpqSB(82);
                                if (__expression_G3qo7s(548), !(__expression_G3qo7s(549), flag(this, 'negate'))) {
                                    __block_LCpqSB(83);
                                    for (var k in val) {
                                        __block_LCpqSB(84);
                                        {
                                            __statement_U_9CRe(550);
                                            __extro_wrjjOl(551, __intro_byTVoB(551, new Assertion(obj)).property(k, val[k]));
                                        }
                                    }
                                    return __expression_G3qo7s(552);
                                }
                                {
                                    __statement_U_9CRe(553);
                                    var subset = {};
                                }
                                for (var k in val) {
                                    __block_LCpqSB(85);
                                    {
                                        __statement_U_9CRe(554);
                                        subset[k] = obj[k];
                                    }
                                }
                                {
                                    __statement_U_9CRe(555);
                                    expected = __extro_wrjjOl(556, __intro_byTVoB(556, _).eql(subset, val));
                                }
                            } else {
                                __block_LCpqSB(86);
                                {
                                    __statement_U_9CRe(557);
                                    expected = (__expression_G3qo7s(558), (__expression_G3qo7s(559), (__expression_G3qo7s(560), obj) != (__expression_G3qo7s(561), undefined)) && (__expression_G3qo7s(562), ~__extro_wrjjOl(563, __intro_byTVoB(563, obj).indexOf(val))));
                                }
                            }
                            {
                                __statement_U_9CRe(564);
                                __extro_wrjjOl(565, __intro_byTVoB(565, this).assert(expected, (__expression_G3qo7s(566), 'expected #{this} to include ' + __extro_wrjjOl(567, __intro_byTVoB(567, _).inspect(val))), (__expression_G3qo7s(568), 'expected #{this} to not include ' + __extro_wrjjOl(569, __intro_byTVoB(569, _).inspect(val)))));
                            }
                        }
                        {
                            __statement_U_9CRe(570);
                            __extro_wrjjOl(571, __intro_byTVoB(571, Assertion).addChainableMethod('include', include, includeChainingBehavior));
                        }
                        {
                            __statement_U_9CRe(572);
                            __extro_wrjjOl(573, __intro_byTVoB(573, Assertion).addChainableMethod('contain', include, includeChainingBehavior));
                        }
                        {
                            __statement_U_9CRe(574);
                            __extro_wrjjOl(575, __intro_byTVoB(575, Assertion).addChainableMethod('contains', include, includeChainingBehavior));
                        }
                        {
                            __statement_U_9CRe(576);
                            __extro_wrjjOl(577, __intro_byTVoB(577, Assertion).addChainableMethod('includes', include, includeChainingBehavior));
                        }
                        {
                            __statement_U_9CRe(578);
                            __extro_wrjjOl(579, __intro_byTVoB(579, Assertion).addProperty('ok', function () {
                                __block_LCpqSB(87);
                                {
                                    __statement_U_9CRe(580);
                                    __extro_wrjjOl(581, __intro_byTVoB(581, this).assert((__expression_G3qo7s(582), flag(this, 'object')), 'expected #{this} to be truthy', 'expected #{this} to be falsy'));
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(583);
                            __extro_wrjjOl(584, __intro_byTVoB(584, Assertion).addProperty('true', function () {
                                __block_LCpqSB(88);
                                {
                                    __statement_U_9CRe(585);
                                    __extro_wrjjOl(586, __intro_byTVoB(586, this).assert((__expression_G3qo7s(587), true === (__expression_G3qo7s(588), flag(this, 'object'))), 'expected #{this} to be true', 'expected #{this} to be false', this.negate ? (__expression_G3qo7s(589), false) : (__expression_G3qo7s(590), true)));
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(591);
                            __extro_wrjjOl(592, __intro_byTVoB(592, Assertion).addProperty('false', function () {
                                __block_LCpqSB(89);
                                {
                                    __statement_U_9CRe(593);
                                    __extro_wrjjOl(594, __intro_byTVoB(594, this).assert((__expression_G3qo7s(595), false === (__expression_G3qo7s(596), flag(this, 'object'))), 'expected #{this} to be false', 'expected #{this} to be true', this.negate ? (__expression_G3qo7s(597), true) : (__expression_G3qo7s(598), false)));
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(599);
                            __extro_wrjjOl(600, __intro_byTVoB(600, Assertion).addProperty('null', function () {
                                __block_LCpqSB(90);
                                {
                                    __statement_U_9CRe(601);
                                    __extro_wrjjOl(602, __intro_byTVoB(602, this).assert((__expression_G3qo7s(603), null === (__expression_G3qo7s(604), flag(this, 'object'))), 'expected #{this} to be null', 'expected #{this} not to be null'));
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(605);
                            __extro_wrjjOl(606, __intro_byTVoB(606, Assertion).addProperty('undefined', function () {
                                __block_LCpqSB(91);
                                {
                                    __statement_U_9CRe(607);
                                    __extro_wrjjOl(608, __intro_byTVoB(608, this).assert((__expression_G3qo7s(609), (__expression_G3qo7s(610), undefined) === (__expression_G3qo7s(611), flag(this, 'object'))), 'expected #{this} to be undefined', 'expected #{this} not to be undefined'));
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(612);
                            __extro_wrjjOl(613, __intro_byTVoB(613, Assertion).addProperty('NaN', function () {
                                __block_LCpqSB(92);
                                {
                                    __statement_U_9CRe(614);
                                    __extro_wrjjOl(615, __intro_byTVoB(615, this).assert((__expression_G3qo7s(616), isNaN((__expression_G3qo7s(617), flag(this, 'object')))), 'expected #{this} to be NaN', 'expected #{this} not to be NaN'));
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(618);
                            __extro_wrjjOl(619, __intro_byTVoB(619, Assertion).addProperty('exist', function () {
                                __block_LCpqSB(93);
                                {
                                    __statement_U_9CRe(620);
                                    __extro_wrjjOl(621, __intro_byTVoB(621, this).assert((__expression_G3qo7s(622), null != (__expression_G3qo7s(623), flag(this, 'object'))), 'expected #{this} to exist', 'expected #{this} to not exist'));
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(624);
                            __extro_wrjjOl(625, __intro_byTVoB(625, Assertion).addProperty('empty', function () {
                                __block_LCpqSB(94);
                                {
                                    __statement_U_9CRe(626);
                                    var obj = (__expression_G3qo7s(627), flag(this, 'object')), expected = obj;
                                }
                                if (__expression_G3qo7s(628), __extro_wrjjOl(629, __intro_byTVoB(629, Array).isArray(obj)) || (__expression_G3qo7s(630), 'string' === (__expression_G3qo7s(631), typeof object))) {
                                    __block_LCpqSB(95);
                                    {
                                        __statement_U_9CRe(632);
                                        expected = obj.length;
                                    }
                                } else if (__expression_G3qo7s(633), (__expression_G3qo7s(634), typeof obj) === 'object') {
                                    __block_LCpqSB(96);
                                    {
                                        __statement_U_9CRe(635);
                                        expected = __extro_wrjjOl(636, __intro_byTVoB(636, Object).keys(obj)).length;
                                    }
                                }
                                {
                                    __statement_U_9CRe(637);
                                    __extro_wrjjOl(638, __intro_byTVoB(638, this).assert((__expression_G3qo7s(639), !(__expression_G3qo7s(640), expected)), 'expected #{this} to be empty', 'expected #{this} not to be empty'));
                                }
                            }));
                        }
                        function checkArguments() {
                            __block_LCpqSB(97);
                            {
                                __statement_U_9CRe(641);
                                var obj = (__expression_G3qo7s(642), flag(this, 'object')), type = __extro_wrjjOl(643, __intro_byTVoB(643, Object.prototype.toString).call(obj));
                            }
                            {
                                __statement_U_9CRe(644);
                                __extro_wrjjOl(645, __intro_byTVoB(645, this).assert((__expression_G3qo7s(646), '[object Arguments]' === (__expression_G3qo7s(647), type)), (__expression_G3qo7s(648), 'expected #{this} to be arguments but got ' + (__expression_G3qo7s(649), type)), 'expected #{this} to not be arguments'));
                            }
                        }
                        {
                            __statement_U_9CRe(650);
                            __extro_wrjjOl(651, __intro_byTVoB(651, Assertion).addProperty('arguments', checkArguments));
                        }
                        {
                            __statement_U_9CRe(652);
                            __extro_wrjjOl(653, __intro_byTVoB(653, Assertion).addProperty('Arguments', checkArguments));
                        }
                        function assertEqual(val, msg) {
                            __block_LCpqSB(98);
                            if (__expression_G3qo7s(654), msg) {
                                __block_LCpqSB(99);
                                {
                                    __statement_U_9CRe(655);
                                    __expression_G3qo7s(656), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(657);
                                var obj = (__expression_G3qo7s(658), flag(this, 'object'));
                            }
                            if (__expression_G3qo7s(659), flag(this, 'deep')) {
                                __block_LCpqSB(100);
                                return __expression_G3qo7s(660), __extro_wrjjOl(661, __intro_byTVoB(661, this).eql(val));
                            } else {
                                __block_LCpqSB(101);
                                {
                                    __statement_U_9CRe(662);
                                    __extro_wrjjOl(663, __intro_byTVoB(663, this).assert((__expression_G3qo7s(664), (__expression_G3qo7s(665), val) === (__expression_G3qo7s(666), obj)), 'expected #{this} to equal #{exp}', 'expected #{this} to not equal #{exp}', val, this._obj, true));
                                }
                            }
                        }
                        {
                            __statement_U_9CRe(667);
                            __extro_wrjjOl(668, __intro_byTVoB(668, Assertion).addMethod('equal', assertEqual));
                        }
                        {
                            __statement_U_9CRe(669);
                            __extro_wrjjOl(670, __intro_byTVoB(670, Assertion).addMethod('equals', assertEqual));
                        }
                        {
                            __statement_U_9CRe(671);
                            __extro_wrjjOl(672, __intro_byTVoB(672, Assertion).addMethod('eq', assertEqual));
                        }
                        function assertEql(obj, msg) {
                            __block_LCpqSB(102);
                            if (__expression_G3qo7s(673), msg) {
                                __block_LCpqSB(103);
                                {
                                    __statement_U_9CRe(674);
                                    __expression_G3qo7s(675), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(676);
                                __extro_wrjjOl(677, __intro_byTVoB(677, this).assert(__extro_wrjjOl(678, __intro_byTVoB(678, _).eql(obj, (__expression_G3qo7s(679), flag(this, 'object')))), 'expected #{this} to deeply equal #{exp}', 'expected #{this} to not deeply equal #{exp}', obj, this._obj, true));
                            }
                        }
                        {
                            __statement_U_9CRe(680);
                            __extro_wrjjOl(681, __intro_byTVoB(681, Assertion).addMethod('eql', assertEql));
                        }
                        {
                            __statement_U_9CRe(682);
                            __extro_wrjjOl(683, __intro_byTVoB(683, Assertion).addMethod('eqls', assertEql));
                        }
                        function assertAbove(n, msg) {
                            __block_LCpqSB(104);
                            if (__expression_G3qo7s(684), msg) {
                                __block_LCpqSB(105);
                                {
                                    __statement_U_9CRe(685);
                                    __expression_G3qo7s(686), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(687);
                                var obj = (__expression_G3qo7s(688), flag(this, 'object'));
                            }
                            if (__expression_G3qo7s(689), flag(this, 'doLength')) {
                                __block_LCpqSB(106);
                                {
                                    __statement_U_9CRe(690);
                                    __extro_wrjjOl(691, __intro_byTVoB(691, new Assertion(obj, msg).to.have).property('length'));
                                }
                                {
                                    __statement_U_9CRe(692);
                                    var len = obj.length;
                                }
                                {
                                    __statement_U_9CRe(693);
                                    __extro_wrjjOl(694, __intro_byTVoB(694, this).assert((__expression_G3qo7s(695), (__expression_G3qo7s(696), len) > (__expression_G3qo7s(697), n)), 'expected #{this} to have a length above #{exp} but got #{act}', 'expected #{this} to not have a length above #{exp}', n, len));
                                }
                            } else {
                                __block_LCpqSB(107);
                                {
                                    __statement_U_9CRe(698);
                                    __extro_wrjjOl(699, __intro_byTVoB(699, this).assert((__expression_G3qo7s(700), (__expression_G3qo7s(701), obj) > (__expression_G3qo7s(702), n)), (__expression_G3qo7s(703), 'expected #{this} to be above ' + (__expression_G3qo7s(704), n)), (__expression_G3qo7s(705), 'expected #{this} to be at most ' + (__expression_G3qo7s(706), n))));
                                }
                            }
                        }
                        {
                            __statement_U_9CRe(707);
                            __extro_wrjjOl(708, __intro_byTVoB(708, Assertion).addMethod('above', assertAbove));
                        }
                        {
                            __statement_U_9CRe(709);
                            __extro_wrjjOl(710, __intro_byTVoB(710, Assertion).addMethod('gt', assertAbove));
                        }
                        {
                            __statement_U_9CRe(711);
                            __extro_wrjjOl(712, __intro_byTVoB(712, Assertion).addMethod('greaterThan', assertAbove));
                        }
                        function assertLeast(n, msg) {
                            __block_LCpqSB(108);
                            if (__expression_G3qo7s(713), msg) {
                                __block_LCpqSB(109);
                                {
                                    __statement_U_9CRe(714);
                                    __expression_G3qo7s(715), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(716);
                                var obj = (__expression_G3qo7s(717), flag(this, 'object'));
                            }
                            if (__expression_G3qo7s(718), flag(this, 'doLength')) {
                                __block_LCpqSB(110);
                                {
                                    __statement_U_9CRe(719);
                                    __extro_wrjjOl(720, __intro_byTVoB(720, new Assertion(obj, msg).to.have).property('length'));
                                }
                                {
                                    __statement_U_9CRe(721);
                                    var len = obj.length;
                                }
                                {
                                    __statement_U_9CRe(722);
                                    __extro_wrjjOl(723, __intro_byTVoB(723, this).assert((__expression_G3qo7s(724), (__expression_G3qo7s(725), len) >= (__expression_G3qo7s(726), n)), 'expected #{this} to have a length at least #{exp} but got #{act}', 'expected #{this} to have a length below #{exp}', n, len));
                                }
                            } else {
                                __block_LCpqSB(111);
                                {
                                    __statement_U_9CRe(727);
                                    __extro_wrjjOl(728, __intro_byTVoB(728, this).assert((__expression_G3qo7s(729), (__expression_G3qo7s(730), obj) >= (__expression_G3qo7s(731), n)), (__expression_G3qo7s(732), 'expected #{this} to be at least ' + (__expression_G3qo7s(733), n)), (__expression_G3qo7s(734), 'expected #{this} to be below ' + (__expression_G3qo7s(735), n))));
                                }
                            }
                        }
                        {
                            __statement_U_9CRe(736);
                            __extro_wrjjOl(737, __intro_byTVoB(737, Assertion).addMethod('least', assertLeast));
                        }
                        {
                            __statement_U_9CRe(738);
                            __extro_wrjjOl(739, __intro_byTVoB(739, Assertion).addMethod('gte', assertLeast));
                        }
                        function assertBelow(n, msg) {
                            __block_LCpqSB(112);
                            if (__expression_G3qo7s(740), msg) {
                                __block_LCpqSB(113);
                                {
                                    __statement_U_9CRe(741);
                                    __expression_G3qo7s(742), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(743);
                                var obj = (__expression_G3qo7s(744), flag(this, 'object'));
                            }
                            if (__expression_G3qo7s(745), flag(this, 'doLength')) {
                                __block_LCpqSB(114);
                                {
                                    __statement_U_9CRe(746);
                                    __extro_wrjjOl(747, __intro_byTVoB(747, new Assertion(obj, msg).to.have).property('length'));
                                }
                                {
                                    __statement_U_9CRe(748);
                                    var len = obj.length;
                                }
                                {
                                    __statement_U_9CRe(749);
                                    __extro_wrjjOl(750, __intro_byTVoB(750, this).assert((__expression_G3qo7s(751), (__expression_G3qo7s(752), len) < (__expression_G3qo7s(753), n)), 'expected #{this} to have a length below #{exp} but got #{act}', 'expected #{this} to not have a length below #{exp}', n, len));
                                }
                            } else {
                                __block_LCpqSB(115);
                                {
                                    __statement_U_9CRe(754);
                                    __extro_wrjjOl(755, __intro_byTVoB(755, this).assert((__expression_G3qo7s(756), (__expression_G3qo7s(757), obj) < (__expression_G3qo7s(758), n)), (__expression_G3qo7s(759), 'expected #{this} to be below ' + (__expression_G3qo7s(760), n)), (__expression_G3qo7s(761), 'expected #{this} to be at least ' + (__expression_G3qo7s(762), n))));
                                }
                            }
                        }
                        {
                            __statement_U_9CRe(763);
                            __extro_wrjjOl(764, __intro_byTVoB(764, Assertion).addMethod('below', assertBelow));
                        }
                        {
                            __statement_U_9CRe(765);
                            __extro_wrjjOl(766, __intro_byTVoB(766, Assertion).addMethod('lt', assertBelow));
                        }
                        {
                            __statement_U_9CRe(767);
                            __extro_wrjjOl(768, __intro_byTVoB(768, Assertion).addMethod('lessThan', assertBelow));
                        }
                        function assertMost(n, msg) {
                            __block_LCpqSB(116);
                            if (__expression_G3qo7s(769), msg) {
                                __block_LCpqSB(117);
                                {
                                    __statement_U_9CRe(770);
                                    __expression_G3qo7s(771), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(772);
                                var obj = (__expression_G3qo7s(773), flag(this, 'object'));
                            }
                            if (__expression_G3qo7s(774), flag(this, 'doLength')) {
                                __block_LCpqSB(118);
                                {
                                    __statement_U_9CRe(775);
                                    __extro_wrjjOl(776, __intro_byTVoB(776, new Assertion(obj, msg).to.have).property('length'));
                                }
                                {
                                    __statement_U_9CRe(777);
                                    var len = obj.length;
                                }
                                {
                                    __statement_U_9CRe(778);
                                    __extro_wrjjOl(779, __intro_byTVoB(779, this).assert((__expression_G3qo7s(780), (__expression_G3qo7s(781), len) <= (__expression_G3qo7s(782), n)), 'expected #{this} to have a length at most #{exp} but got #{act}', 'expected #{this} to have a length above #{exp}', n, len));
                                }
                            } else {
                                __block_LCpqSB(119);
                                {
                                    __statement_U_9CRe(783);
                                    __extro_wrjjOl(784, __intro_byTVoB(784, this).assert((__expression_G3qo7s(785), (__expression_G3qo7s(786), obj) <= (__expression_G3qo7s(787), n)), (__expression_G3qo7s(788), 'expected #{this} to be at most ' + (__expression_G3qo7s(789), n)), (__expression_G3qo7s(790), 'expected #{this} to be above ' + (__expression_G3qo7s(791), n))));
                                }
                            }
                        }
                        {
                            __statement_U_9CRe(792);
                            __extro_wrjjOl(793, __intro_byTVoB(793, Assertion).addMethod('most', assertMost));
                        }
                        {
                            __statement_U_9CRe(794);
                            __extro_wrjjOl(795, __intro_byTVoB(795, Assertion).addMethod('lte', assertMost));
                        }
                        {
                            __statement_U_9CRe(796);
                            __extro_wrjjOl(797, __intro_byTVoB(797, Assertion).addMethod('within', function (start, finish, msg) {
                                __block_LCpqSB(120);
                                if (__expression_G3qo7s(798), msg) {
                                    __block_LCpqSB(121);
                                    {
                                        __statement_U_9CRe(799);
                                        __expression_G3qo7s(800), flag(this, 'message', msg);
                                    }
                                }
                                {
                                    __statement_U_9CRe(801);
                                    var obj = (__expression_G3qo7s(802), flag(this, 'object')), range = (__expression_G3qo7s(803), (__expression_G3qo7s(804), (__expression_G3qo7s(805), start) + '..') + (__expression_G3qo7s(806), finish));
                                }
                                if (__expression_G3qo7s(807), flag(this, 'doLength')) {
                                    __block_LCpqSB(122);
                                    {
                                        __statement_U_9CRe(808);
                                        __extro_wrjjOl(809, __intro_byTVoB(809, new Assertion(obj, msg).to.have).property('length'));
                                    }
                                    {
                                        __statement_U_9CRe(810);
                                        var len = obj.length;
                                    }
                                    {
                                        __statement_U_9CRe(811);
                                        __extro_wrjjOl(812, __intro_byTVoB(812, this).assert((__expression_G3qo7s(813), (__expression_G3qo7s(814), (__expression_G3qo7s(815), len) >= (__expression_G3qo7s(816), start)) && (__expression_G3qo7s(817), (__expression_G3qo7s(818), len) <= (__expression_G3qo7s(819), finish))), (__expression_G3qo7s(820), 'expected #{this} to have a length within ' + (__expression_G3qo7s(821), range)), (__expression_G3qo7s(822), 'expected #{this} to not have a length within ' + (__expression_G3qo7s(823), range))));
                                    }
                                } else {
                                    __block_LCpqSB(123);
                                    {
                                        __statement_U_9CRe(824);
                                        __extro_wrjjOl(825, __intro_byTVoB(825, this).assert((__expression_G3qo7s(826), (__expression_G3qo7s(827), (__expression_G3qo7s(828), obj) >= (__expression_G3qo7s(829), start)) && (__expression_G3qo7s(830), (__expression_G3qo7s(831), obj) <= (__expression_G3qo7s(832), finish))), (__expression_G3qo7s(833), 'expected #{this} to be within ' + (__expression_G3qo7s(834), range)), (__expression_G3qo7s(835), 'expected #{this} to not be within ' + (__expression_G3qo7s(836), range))));
                                    }
                                }
                            }));
                        }
                        function assertInstanceOf(constructor, msg) {
                            __block_LCpqSB(124);
                            if (__expression_G3qo7s(837), msg) {
                                __block_LCpqSB(125);
                                {
                                    __statement_U_9CRe(838);
                                    __expression_G3qo7s(839), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(840);
                                var name = __extro_wrjjOl(841, __intro_byTVoB(841, _).getName(constructor));
                            }
                            {
                                __statement_U_9CRe(842);
                                __extro_wrjjOl(843, __intro_byTVoB(843, this).assert((__expression_G3qo7s(844), (__expression_G3qo7s(845), flag(this, 'object')) instanceof (__expression_G3qo7s(846), constructor)), (__expression_G3qo7s(847), 'expected #{this} to be an instance of ' + (__expression_G3qo7s(848), name)), (__expression_G3qo7s(849), 'expected #{this} to not be an instance of ' + (__expression_G3qo7s(850), name))));
                            }
                        }
                        ;
                        {
                            __statement_U_9CRe(851);
                            __extro_wrjjOl(852, __intro_byTVoB(852, Assertion).addMethod('instanceof', assertInstanceOf));
                        }
                        {
                            __statement_U_9CRe(853);
                            __extro_wrjjOl(854, __intro_byTVoB(854, Assertion).addMethod('instanceOf', assertInstanceOf));
                        }
                        {
                            __statement_U_9CRe(855);
                            __extro_wrjjOl(856, __intro_byTVoB(856, Assertion).addMethod('property', function (name, val, msg) {
                                __block_LCpqSB(126);
                                if (__expression_G3qo7s(857), msg) {
                                    __block_LCpqSB(127);
                                    {
                                        __statement_U_9CRe(858);
                                        __expression_G3qo7s(859), flag(this, 'message', msg);
                                    }
                                }
                                {
                                    __statement_U_9CRe(860);
                                    var isDeep = (__expression_G3qo7s(861), !(__expression_G3qo7s(862), !(__expression_G3qo7s(863), flag(this, 'deep')))), descriptor = (__expression_G3qo7s(866), isDeep) ? (__expression_G3qo7s(864), 'deep property ') : (__expression_G3qo7s(865), 'property '), negate = (__expression_G3qo7s(867), flag(this, 'negate')), obj = (__expression_G3qo7s(868), flag(this, 'object')), pathInfo = (__expression_G3qo7s(871), isDeep) ? (__expression_G3qo7s(869), __extro_wrjjOl(872, __intro_byTVoB(872, _).getPathInfo(name, obj))) : (__expression_G3qo7s(870), null), hasProperty = (__expression_G3qo7s(875), isDeep) ? (__expression_G3qo7s(873), pathInfo.exists) : (__expression_G3qo7s(874), __extro_wrjjOl(876, __intro_byTVoB(876, _).hasProperty(name, obj))), value = (__expression_G3qo7s(879), isDeep) ? (__expression_G3qo7s(877), pathInfo.value) : (__expression_G3qo7s(878), obj[name]);
                                }
                                if (__expression_G3qo7s(880), (__expression_G3qo7s(881), negate) && (__expression_G3qo7s(882), arguments.length > 1)) {
                                    __block_LCpqSB(128);
                                    if (__expression_G3qo7s(883), (__expression_G3qo7s(884), undefined) === (__expression_G3qo7s(885), value)) {
                                        __block_LCpqSB(129);
                                        {
                                            __statement_U_9CRe(886);
                                            msg = (__expression_G3qo7s(889), (__expression_G3qo7s(890), msg) != null) ? (__expression_G3qo7s(887), (__expression_G3qo7s(891), (__expression_G3qo7s(892), msg) + ': ')) : (__expression_G3qo7s(888), '');
                                        }
                                        {
                                            __statement_U_9CRe(893);
                                            throw new Error((__expression_G3qo7s(894), (__expression_G3qo7s(895), (__expression_G3qo7s(896), (__expression_G3qo7s(897), (__expression_G3qo7s(898), msg) + __extro_wrjjOl(899, __intro_byTVoB(899, _).inspect(obj))) + ' has no ') + (__expression_G3qo7s(900), descriptor)) + __extro_wrjjOl(901, __intro_byTVoB(901, _).inspect(name))));
                                        }
                                    }
                                } else {
                                    __block_LCpqSB(130);
                                    {
                                        __statement_U_9CRe(902);
                                        __extro_wrjjOl(903, __intro_byTVoB(903, this).assert(hasProperty, (__expression_G3qo7s(904), (__expression_G3qo7s(905), 'expected #{this} to have a ' + (__expression_G3qo7s(906), descriptor)) + __extro_wrjjOl(907, __intro_byTVoB(907, _).inspect(name))), (__expression_G3qo7s(908), (__expression_G3qo7s(909), 'expected #{this} to not have ' + (__expression_G3qo7s(910), descriptor)) + __extro_wrjjOl(911, __intro_byTVoB(911, _).inspect(name)))));
                                    }
                                }
                                if (__expression_G3qo7s(912), arguments.length > 1) {
                                    __block_LCpqSB(131);
                                    {
                                        __statement_U_9CRe(913);
                                        __extro_wrjjOl(914, __intro_byTVoB(914, this).assert((__expression_G3qo7s(915), (__expression_G3qo7s(916), val) === (__expression_G3qo7s(917), value)), (__expression_G3qo7s(918), (__expression_G3qo7s(919), (__expression_G3qo7s(920), 'expected #{this} to have a ' + (__expression_G3qo7s(921), descriptor)) + __extro_wrjjOl(922, __intro_byTVoB(922, _).inspect(name))) + ' of #{exp}, but got #{act}'), (__expression_G3qo7s(923), (__expression_G3qo7s(924), (__expression_G3qo7s(925), 'expected #{this} to not have a ' + (__expression_G3qo7s(926), descriptor)) + __extro_wrjjOl(927, __intro_byTVoB(927, _).inspect(name))) + ' of #{act}'), val, value));
                                    }
                                }
                                {
                                    __statement_U_9CRe(928);
                                    __expression_G3qo7s(929), flag(this, 'object', value);
                                }
                            }));
                        }
                        function assertOwnProperty(name, msg) {
                            __block_LCpqSB(132);
                            if (__expression_G3qo7s(930), msg) {
                                __block_LCpqSB(133);
                                {
                                    __statement_U_9CRe(931);
                                    __expression_G3qo7s(932), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(933);
                                var obj = (__expression_G3qo7s(934), flag(this, 'object'));
                            }
                            {
                                __statement_U_9CRe(935);
                                __extro_wrjjOl(936, __intro_byTVoB(936, this).assert(__extro_wrjjOl(937, __intro_byTVoB(937, obj).hasOwnProperty(name)), (__expression_G3qo7s(938), 'expected #{this} to have own property ' + __extro_wrjjOl(939, __intro_byTVoB(939, _).inspect(name))), (__expression_G3qo7s(940), 'expected #{this} to not have own property ' + __extro_wrjjOl(941, __intro_byTVoB(941, _).inspect(name)))));
                            }
                        }
                        {
                            __statement_U_9CRe(942);
                            __extro_wrjjOl(943, __intro_byTVoB(943, Assertion).addMethod('ownProperty', assertOwnProperty));
                        }
                        {
                            __statement_U_9CRe(944);
                            __extro_wrjjOl(945, __intro_byTVoB(945, Assertion).addMethod('haveOwnProperty', assertOwnProperty));
                        }
                        function assertOwnPropertyDescriptor(name, descriptor, msg) {
                            __block_LCpqSB(134);
                            if (__expression_G3qo7s(946), (__expression_G3qo7s(947), typeof descriptor) === 'string') {
                                __block_LCpqSB(135);
                                {
                                    __statement_U_9CRe(948);
                                    msg = descriptor;
                                }
                                {
                                    __statement_U_9CRe(949);
                                    descriptor = null;
                                }
                            }
                            if (__expression_G3qo7s(950), msg) {
                                __block_LCpqSB(136);
                                {
                                    __statement_U_9CRe(951);
                                    __expression_G3qo7s(952), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(953);
                                var obj = (__expression_G3qo7s(954), flag(this, 'object'));
                            }
                            {
                                __statement_U_9CRe(955);
                                var actualDescriptor = __extro_wrjjOl(956, __intro_byTVoB(956, Object).getOwnPropertyDescriptor((__expression_G3qo7s(957), Object(obj)), name));
                            }
                            if (__expression_G3qo7s(958), (__expression_G3qo7s(959), actualDescriptor) && (__expression_G3qo7s(960), descriptor)) {
                                __block_LCpqSB(137);
                                {
                                    __statement_U_9CRe(961);
                                    __extro_wrjjOl(962, __intro_byTVoB(962, this).assert(__extro_wrjjOl(963, __intro_byTVoB(963, _).eql(descriptor, actualDescriptor)), (__expression_G3qo7s(964), (__expression_G3qo7s(965), (__expression_G3qo7s(966), (__expression_G3qo7s(967), (__expression_G3qo7s(968), 'expected the own property descriptor for ' + __extro_wrjjOl(969, __intro_byTVoB(969, _).inspect(name))) + ' on #{this} to match ') + __extro_wrjjOl(970, __intro_byTVoB(970, _).inspect(descriptor))) + ', got ') + __extro_wrjjOl(971, __intro_byTVoB(971, _).inspect(actualDescriptor))), (__expression_G3qo7s(972), (__expression_G3qo7s(973), (__expression_G3qo7s(974), 'expected the own property descriptor for ' + __extro_wrjjOl(975, __intro_byTVoB(975, _).inspect(name))) + ' on #{this} to not match ') + __extro_wrjjOl(976, __intro_byTVoB(976, _).inspect(descriptor))), descriptor, actualDescriptor, true));
                                }
                            } else {
                                __block_LCpqSB(138);
                                {
                                    __statement_U_9CRe(977);
                                    __extro_wrjjOl(978, __intro_byTVoB(978, this).assert(actualDescriptor, (__expression_G3qo7s(979), 'expected #{this} to have an own property descriptor for ' + __extro_wrjjOl(980, __intro_byTVoB(980, _).inspect(name))), (__expression_G3qo7s(981), 'expected #{this} to not have an own property descriptor for ' + __extro_wrjjOl(982, __intro_byTVoB(982, _).inspect(name)))));
                                }
                            }
                            {
                                __statement_U_9CRe(983);
                                __expression_G3qo7s(984), flag(this, 'object', actualDescriptor);
                            }
                        }
                        {
                            __statement_U_9CRe(985);
                            __extro_wrjjOl(986, __intro_byTVoB(986, Assertion).addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor));
                        }
                        {
                            __statement_U_9CRe(987);
                            __extro_wrjjOl(988, __intro_byTVoB(988, Assertion).addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor));
                        }
                        function assertLengthChain() {
                            __block_LCpqSB(139);
                            {
                                __statement_U_9CRe(989);
                                __expression_G3qo7s(990), flag(this, 'doLength', true);
                            }
                        }
                        function assertLength(n, msg) {
                            __block_LCpqSB(140);
                            if (__expression_G3qo7s(991), msg) {
                                __block_LCpqSB(141);
                                {
                                    __statement_U_9CRe(992);
                                    __expression_G3qo7s(993), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(994);
                                var obj = (__expression_G3qo7s(995), flag(this, 'object'));
                            }
                            {
                                __statement_U_9CRe(996);
                                __extro_wrjjOl(997, __intro_byTVoB(997, new Assertion(obj, msg).to.have).property('length'));
                            }
                            {
                                __statement_U_9CRe(998);
                                var len = obj.length;
                            }
                            {
                                __statement_U_9CRe(999);
                                __extro_wrjjOl(1000, __intro_byTVoB(1000, this).assert((__expression_G3qo7s(1001), (__expression_G3qo7s(1002), len) == (__expression_G3qo7s(1003), n)), 'expected #{this} to have a length of #{exp} but got #{act}', 'expected #{this} to not have a length of #{act}', n, len));
                            }
                        }
                        {
                            __statement_U_9CRe(1004);
                            __extro_wrjjOl(1005, __intro_byTVoB(1005, Assertion).addChainableMethod('length', assertLength, assertLengthChain));
                        }
                        {
                            __statement_U_9CRe(1006);
                            __extro_wrjjOl(1007, __intro_byTVoB(1007, Assertion).addMethod('lengthOf', assertLength));
                        }
                        function assertMatch(re, msg) {
                            __block_LCpqSB(142);
                            if (__expression_G3qo7s(1008), msg) {
                                __block_LCpqSB(143);
                                {
                                    __statement_U_9CRe(1009);
                                    __expression_G3qo7s(1010), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(1011);
                                var obj = (__expression_G3qo7s(1012), flag(this, 'object'));
                            }
                            {
                                __statement_U_9CRe(1013);
                                __extro_wrjjOl(1014, __intro_byTVoB(1014, this).assert(__extro_wrjjOl(1015, __intro_byTVoB(1015, re).exec(obj)), (__expression_G3qo7s(1016), 'expected #{this} to match ' + (__expression_G3qo7s(1017), re)), (__expression_G3qo7s(1018), 'expected #{this} not to match ' + (__expression_G3qo7s(1019), re))));
                            }
                        }
                        {
                            __statement_U_9CRe(1020);
                            __extro_wrjjOl(1021, __intro_byTVoB(1021, Assertion).addMethod('match', assertMatch));
                        }
                        {
                            __statement_U_9CRe(1022);
                            __extro_wrjjOl(1023, __intro_byTVoB(1023, Assertion).addMethod('matches', assertMatch));
                        }
                        {
                            __statement_U_9CRe(1024);
                            __extro_wrjjOl(1025, __intro_byTVoB(1025, Assertion).addMethod('string', function (str, msg) {
                                __block_LCpqSB(144);
                                if (__expression_G3qo7s(1026), msg) {
                                    __block_LCpqSB(145);
                                    {
                                        __statement_U_9CRe(1027);
                                        __expression_G3qo7s(1028), flag(this, 'message', msg);
                                    }
                                }
                                {
                                    __statement_U_9CRe(1029);
                                    var obj = (__expression_G3qo7s(1030), flag(this, 'object'));
                                }
                                {
                                    __statement_U_9CRe(1031);
                                    __extro_wrjjOl(1032, __intro_byTVoB(1032, new Assertion(obj, msg).is).a('string'));
                                }
                                {
                                    __statement_U_9CRe(1033);
                                    __extro_wrjjOl(1034, __intro_byTVoB(1034, this).assert((__expression_G3qo7s(1035), ~__extro_wrjjOl(1036, __intro_byTVoB(1036, obj).indexOf(str))), (__expression_G3qo7s(1037), 'expected #{this} to contain ' + __extro_wrjjOl(1038, __intro_byTVoB(1038, _).inspect(str))), (__expression_G3qo7s(1039), 'expected #{this} to not contain ' + __extro_wrjjOl(1040, __intro_byTVoB(1040, _).inspect(str)))));
                                }
                            }));
                        }
                        function assertKeys(keys) {
                            __block_LCpqSB(146);
                            {
                                __statement_U_9CRe(1041);
                                var obj = (__expression_G3qo7s(1042), flag(this, 'object')), str, ok = true, mixedArgsMsg = 'keys must be given single argument of Array|Object|String, or multiple String arguments';
                            }
                            switch (__extro_wrjjOl(1043, __intro_byTVoB(1043, _).type(keys))) {
                            case 'array': {
                                    __block_LCpqSB(147);
                                    if (__expression_G3qo7s(1044), arguments.length > 1) {
                                        __block_LCpqSB(148);
                                        {
                                            __statement_U_9CRe(1045);
                                            throw new Error(mixedArgsMsg);
                                        }
                                    }
                                    break;
                                }
                            case 'object': {
                                    __block_LCpqSB(149);
                                    if (__expression_G3qo7s(1046), arguments.length > 1) {
                                        __block_LCpqSB(150);
                                        {
                                            __statement_U_9CRe(1047);
                                            throw new Error(mixedArgsMsg);
                                        }
                                    }
                                    {
                                        __statement_U_9CRe(1048);
                                        keys = __extro_wrjjOl(1049, __intro_byTVoB(1049, Object).keys(keys));
                                    }
                                    break;
                                }
                            default: {
                                    __block_LCpqSB(151);
                                    {
                                        __statement_U_9CRe(1050);
                                        keys = __extro_wrjjOl(1051, __intro_byTVoB(1051, Array.prototype.slice).call(arguments));
                                    }
                                }
                            }
                            if (__expression_G3qo7s(1052), !keys.length) {
                                __block_LCpqSB(152);
                                {
                                    __statement_U_9CRe(1053);
                                    throw new Error('keys required');
                                }
                            }
                            {
                                __statement_U_9CRe(1054);
                                var actual = __extro_wrjjOl(1055, __intro_byTVoB(1055, Object).keys(obj)), expected = keys, len = keys.length, any = (__expression_G3qo7s(1056), flag(this, 'any')), all = (__expression_G3qo7s(1057), flag(this, 'all'));
                            }
                            if (__expression_G3qo7s(1058), (__expression_G3qo7s(1059), !(__expression_G3qo7s(1060), any)) && (__expression_G3qo7s(1061), !(__expression_G3qo7s(1062), all))) {
                                __block_LCpqSB(153);
                                {
                                    __statement_U_9CRe(1063);
                                    all = true;
                                }
                            }
                            if (__expression_G3qo7s(1064), any) {
                                __block_LCpqSB(154);
                                {
                                    __statement_U_9CRe(1065);
                                    var intersection = __extro_wrjjOl(1066, __intro_byTVoB(1066, expected).filter(function (key) {
                                            __block_LCpqSB(155);
                                            return __expression_G3qo7s(1067), (__expression_G3qo7s(1068), ~__extro_wrjjOl(1069, __intro_byTVoB(1069, actual).indexOf(key)));
                                        }));
                                }
                                {
                                    __statement_U_9CRe(1070);
                                    ok = (__expression_G3qo7s(1071), intersection.length > 0);
                                }
                            }
                            if (__expression_G3qo7s(1072), all) {
                                __block_LCpqSB(156);
                                {
                                    __statement_U_9CRe(1073);
                                    ok = __extro_wrjjOl(1074, __intro_byTVoB(1074, keys).every(function (key) {
                                        __block_LCpqSB(157);
                                        return __expression_G3qo7s(1075), (__expression_G3qo7s(1076), ~__extro_wrjjOl(1077, __intro_byTVoB(1077, actual).indexOf(key)));
                                    }));
                                }
                                if (__expression_G3qo7s(1078), (__expression_G3qo7s(1079), !(__expression_G3qo7s(1080), flag(this, 'negate'))) && (__expression_G3qo7s(1081), !(__expression_G3qo7s(1082), flag(this, 'contains')))) {
                                    __block_LCpqSB(158);
                                    {
                                        __statement_U_9CRe(1083);
                                        ok = (__expression_G3qo7s(1084), (__expression_G3qo7s(1085), ok) && (__expression_G3qo7s(1086), keys.length == actual.length));
                                    }
                                }
                            }
                            if (__expression_G3qo7s(1087), (__expression_G3qo7s(1088), len) > 1) {
                                __block_LCpqSB(159);
                                {
                                    __statement_U_9CRe(1089);
                                    keys = __extro_wrjjOl(1090, __intro_byTVoB(1090, keys).map(function (key) {
                                        __block_LCpqSB(160);
                                        return __expression_G3qo7s(1091), __extro_wrjjOl(1092, __intro_byTVoB(1092, _).inspect(key));
                                    }));
                                }
                                {
                                    __statement_U_9CRe(1093);
                                    var last = __extro_wrjjOl(1094, __intro_byTVoB(1094, keys).pop());
                                }
                                if (__expression_G3qo7s(1095), all) {
                                    __block_LCpqSB(161);
                                    {
                                        __statement_U_9CRe(1096);
                                        str = (__expression_G3qo7s(1097), (__expression_G3qo7s(1098), __extro_wrjjOl(1099, __intro_byTVoB(1099, keys).join(', ')) + ', and ') + (__expression_G3qo7s(1100), last));
                                    }
                                }
                                if (__expression_G3qo7s(1101), any) {
                                    __block_LCpqSB(162);
                                    {
                                        __statement_U_9CRe(1102);
                                        str = (__expression_G3qo7s(1103), (__expression_G3qo7s(1104), __extro_wrjjOl(1105, __intro_byTVoB(1105, keys).join(', ')) + ', or ') + (__expression_G3qo7s(1106), last));
                                    }
                                }
                            } else {
                                __block_LCpqSB(163);
                                {
                                    __statement_U_9CRe(1107);
                                    str = __extro_wrjjOl(1108, __intro_byTVoB(1108, _).inspect(keys[0]));
                                }
                            }
                            {
                                __statement_U_9CRe(1109);
                                str = (__expression_G3qo7s(1110), ((__expression_G3qo7s(1113), (__expression_G3qo7s(1114), len) > 1) ? (__expression_G3qo7s(1111), 'keys ') : (__expression_G3qo7s(1112), 'key ')) + (__expression_G3qo7s(1115), str));
                            }
                            {
                                __statement_U_9CRe(1116);
                                str = (__expression_G3qo7s(1117), ((__expression_G3qo7s(1120), flag(this, 'contains')) ? (__expression_G3qo7s(1118), 'contain ') : (__expression_G3qo7s(1119), 'have ')) + (__expression_G3qo7s(1121), str));
                            }
                            {
                                __statement_U_9CRe(1122);
                                __extro_wrjjOl(1123, __intro_byTVoB(1123, this).assert(ok, (__expression_G3qo7s(1124), 'expected #{this} to ' + (__expression_G3qo7s(1125), str)), (__expression_G3qo7s(1126), 'expected #{this} to not ' + (__expression_G3qo7s(1127), str)), __extro_wrjjOl(1128, __intro_byTVoB(1128, __extro_wrjjOl(1129, __intro_byTVoB(1129, expected).slice(0))).sort()), __extro_wrjjOl(1130, __intro_byTVoB(1130, actual).sort()), true));
                            }
                        }
                        {
                            __statement_U_9CRe(1131);
                            __extro_wrjjOl(1132, __intro_byTVoB(1132, Assertion).addMethod('keys', assertKeys));
                        }
                        {
                            __statement_U_9CRe(1133);
                            __extro_wrjjOl(1134, __intro_byTVoB(1134, Assertion).addMethod('key', assertKeys));
                        }
                        function assertThrows(constructor, errMsg, msg) {
                            __block_LCpqSB(164);
                            if (__expression_G3qo7s(1135), msg) {
                                __block_LCpqSB(165);
                                {
                                    __statement_U_9CRe(1136);
                                    __expression_G3qo7s(1137), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(1138);
                                var obj = (__expression_G3qo7s(1139), flag(this, 'object'));
                            }
                            {
                                __statement_U_9CRe(1140);
                                __extro_wrjjOl(1141, __intro_byTVoB(1141, new Assertion(obj, msg).is).a('function'));
                            }
                            {
                                __statement_U_9CRe(1142);
                                var thrown = false, desiredError = null, name = null, thrownError = null;
                            }
                            if (__expression_G3qo7s(1143), arguments.length === 0) {
                                __block_LCpqSB(166);
                                {
                                    __statement_U_9CRe(1144);
                                    errMsg = null;
                                }
                                {
                                    __statement_U_9CRe(1145);
                                    constructor = null;
                                }
                            } else if (__expression_G3qo7s(1146), (__expression_G3qo7s(1147), constructor) && (__expression_G3qo7s(1148), (__expression_G3qo7s(1149), (__expression_G3qo7s(1150), constructor) instanceof (__expression_G3qo7s(1151), RegExp)) || (__expression_G3qo7s(1152), 'string' === (__expression_G3qo7s(1153), typeof constructor)))) {
                                __block_LCpqSB(167);
                                {
                                    __statement_U_9CRe(1154);
                                    errMsg = constructor;
                                }
                                {
                                    __statement_U_9CRe(1155);
                                    constructor = null;
                                }
                            } else if (__expression_G3qo7s(1156), (__expression_G3qo7s(1157), constructor) && (__expression_G3qo7s(1158), (__expression_G3qo7s(1159), constructor) instanceof (__expression_G3qo7s(1160), Error))) {
                                __block_LCpqSB(168);
                                {
                                    __statement_U_9CRe(1161);
                                    desiredError = constructor;
                                }
                                {
                                    __statement_U_9CRe(1162);
                                    constructor = null;
                                }
                                {
                                    __statement_U_9CRe(1163);
                                    errMsg = null;
                                }
                            } else if (__expression_G3qo7s(1164), (__expression_G3qo7s(1165), typeof constructor) === 'function') {
                                __block_LCpqSB(169);
                                {
                                    __statement_U_9CRe(1166);
                                    name = constructor.prototype.name;
                                }
                                if (__expression_G3qo7s(1167), (__expression_G3qo7s(1168), !(__expression_G3qo7s(1169), name)) || (__expression_G3qo7s(1170), (__expression_G3qo7s(1171), (__expression_G3qo7s(1172), name) === 'Error') && (__expression_G3qo7s(1173), (__expression_G3qo7s(1174), constructor) !== (__expression_G3qo7s(1175), Error)))) {
                                    __block_LCpqSB(170);
                                    {
                                        __statement_U_9CRe(1176);
                                        name = (__expression_G3qo7s(1177), constructor.name || new constructor().name);
                                    }
                                }
                            } else {
                                __block_LCpqSB(171);
                                {
                                    __statement_U_9CRe(1178);
                                    constructor = null;
                                }
                            }
                            try {
                                __block_LCpqSB(172);
                                {
                                    __statement_U_9CRe(1179);
                                    __expression_G3qo7s(1180), obj();
                                }
                            } catch (err) {
                                __block_LCpqSB(173);
                                if (__expression_G3qo7s(1181), desiredError) {
                                    __block_LCpqSB(174);
                                    {
                                        __statement_U_9CRe(1182);
                                        __extro_wrjjOl(1183, __intro_byTVoB(1183, this).assert((__expression_G3qo7s(1184), (__expression_G3qo7s(1185), err) === (__expression_G3qo7s(1186), desiredError)), 'expected #{this} to throw #{exp} but #{act} was thrown', 'expected #{this} to not throw #{exp}', (__expression_G3qo7s(1189), (__expression_G3qo7s(1190), desiredError) instanceof (__expression_G3qo7s(1191), Error)) ? (__expression_G3qo7s(1187), __extro_wrjjOl(1192, __intro_byTVoB(1192, desiredError).toString())) : (__expression_G3qo7s(1188), desiredError), (__expression_G3qo7s(1195), (__expression_G3qo7s(1196), err) instanceof (__expression_G3qo7s(1197), Error)) ? (__expression_G3qo7s(1193), __extro_wrjjOl(1198, __intro_byTVoB(1198, err).toString())) : (__expression_G3qo7s(1194), err)));
                                    }
                                    {
                                        __statement_U_9CRe(1199);
                                        __expression_G3qo7s(1200), flag(this, 'object', err);
                                    }
                                    return __expression_G3qo7s(1201), this;
                                }
                                if (__expression_G3qo7s(1202), constructor) {
                                    __block_LCpqSB(175);
                                    {
                                        __statement_U_9CRe(1203);
                                        __extro_wrjjOl(1204, __intro_byTVoB(1204, this).assert((__expression_G3qo7s(1205), (__expression_G3qo7s(1206), err) instanceof (__expression_G3qo7s(1207), constructor)), 'expected #{this} to throw #{exp} but #{act} was thrown', 'expected #{this} to not throw #{exp} but #{act} was thrown', name, (__expression_G3qo7s(1210), (__expression_G3qo7s(1211), err) instanceof (__expression_G3qo7s(1212), Error)) ? (__expression_G3qo7s(1208), __extro_wrjjOl(1213, __intro_byTVoB(1213, err).toString())) : (__expression_G3qo7s(1209), err)));
                                    }
                                    if (__expression_G3qo7s(1214), !(__expression_G3qo7s(1215), errMsg)) {
                                        __block_LCpqSB(176);
                                        {
                                            __statement_U_9CRe(1216);
                                            __expression_G3qo7s(1217), flag(this, 'object', err);
                                        }
                                        return __expression_G3qo7s(1218), this;
                                    }
                                }
                                {
                                    __statement_U_9CRe(1219);
                                    var message = (__expression_G3qo7s(1222), (__expression_G3qo7s(1223), 'error' === __extro_wrjjOl(1224, __intro_byTVoB(1224, _).type(err))) && (__expression_G3qo7s(1225), ('message' in (__expression_G3qo7s(1226), err)))) ? (__expression_G3qo7s(1220), err.message) : (__expression_G3qo7s(1221), (__expression_G3qo7s(1227), '' + (__expression_G3qo7s(1228), err)));
                                }
                                if (__expression_G3qo7s(1229), (__expression_G3qo7s(1230), (__expression_G3qo7s(1231), (__expression_G3qo7s(1232), message) != null) && (__expression_G3qo7s(1233), errMsg)) && (__expression_G3qo7s(1234), (__expression_G3qo7s(1235), errMsg) instanceof (__expression_G3qo7s(1236), RegExp))) {
                                    __block_LCpqSB(177);
                                    {
                                        __statement_U_9CRe(1237);
                                        __extro_wrjjOl(1238, __intro_byTVoB(1238, this).assert(__extro_wrjjOl(1239, __intro_byTVoB(1239, errMsg).exec(message)), 'expected #{this} to throw error matching #{exp} but got #{act}', 'expected #{this} to throw error not matching #{exp}', errMsg, message));
                                    }
                                    {
                                        __statement_U_9CRe(1240);
                                        __expression_G3qo7s(1241), flag(this, 'object', err);
                                    }
                                    return __expression_G3qo7s(1242), this;
                                } else if (__expression_G3qo7s(1243), (__expression_G3qo7s(1244), (__expression_G3qo7s(1245), (__expression_G3qo7s(1246), message) != null) && (__expression_G3qo7s(1247), errMsg)) && (__expression_G3qo7s(1248), 'string' === (__expression_G3qo7s(1249), typeof errMsg))) {
                                    __block_LCpqSB(178);
                                    {
                                        __statement_U_9CRe(1250);
                                        __extro_wrjjOl(1251, __intro_byTVoB(1251, this).assert((__expression_G3qo7s(1252), ~__extro_wrjjOl(1253, __intro_byTVoB(1253, message).indexOf(errMsg))), 'expected #{this} to throw error including #{exp} but got #{act}', 'expected #{this} to throw error not including #{act}', errMsg, message));
                                    }
                                    {
                                        __statement_U_9CRe(1254);
                                        __expression_G3qo7s(1255), flag(this, 'object', err);
                                    }
                                    return __expression_G3qo7s(1256), this;
                                } else {
                                    __block_LCpqSB(179);
                                    {
                                        __statement_U_9CRe(1257);
                                        thrown = true;
                                    }
                                    {
                                        __statement_U_9CRe(1258);
                                        thrownError = err;
                                    }
                                }
                            }
                            {
                                __statement_U_9CRe(1259);
                                var actuallyGot = '', expectedThrown = (__expression_G3qo7s(1262), (__expression_G3qo7s(1263), name) !== null) ? (__expression_G3qo7s(1260), name) : (__expression_G3qo7s(1261), (__expression_G3qo7s(1266), desiredError) ? (__expression_G3qo7s(1264), '#{exp}') : (__expression_G3qo7s(1265), 'an error'));
                            }
                            if (__expression_G3qo7s(1267), thrown) {
                                __block_LCpqSB(180);
                                {
                                    __statement_U_9CRe(1268);
                                    actuallyGot = ' but #{act} was thrown';
                                }
                            }
                            {
                                __statement_U_9CRe(1269);
                                __extro_wrjjOl(1270, __intro_byTVoB(1270, this).assert((__expression_G3qo7s(1271), (__expression_G3qo7s(1272), thrown) === true), (__expression_G3qo7s(1273), (__expression_G3qo7s(1274), 'expected #{this} to throw ' + (__expression_G3qo7s(1275), expectedThrown)) + (__expression_G3qo7s(1276), actuallyGot)), (__expression_G3qo7s(1277), (__expression_G3qo7s(1278), 'expected #{this} to not throw ' + (__expression_G3qo7s(1279), expectedThrown)) + (__expression_G3qo7s(1280), actuallyGot)), (__expression_G3qo7s(1283), (__expression_G3qo7s(1284), desiredError) instanceof (__expression_G3qo7s(1285), Error)) ? (__expression_G3qo7s(1281), __extro_wrjjOl(1286, __intro_byTVoB(1286, desiredError).toString())) : (__expression_G3qo7s(1282), desiredError), (__expression_G3qo7s(1289), (__expression_G3qo7s(1290), thrownError) instanceof (__expression_G3qo7s(1291), Error)) ? (__expression_G3qo7s(1287), __extro_wrjjOl(1292, __intro_byTVoB(1292, thrownError).toString())) : (__expression_G3qo7s(1288), thrownError)));
                            }
                            {
                                __statement_U_9CRe(1293);
                                __expression_G3qo7s(1294), flag(this, 'object', thrownError);
                            }
                        }
                        ;
                        {
                            __statement_U_9CRe(1295);
                            __extro_wrjjOl(1296, __intro_byTVoB(1296, Assertion).addMethod('throw', assertThrows));
                        }
                        {
                            __statement_U_9CRe(1297);
                            __extro_wrjjOl(1298, __intro_byTVoB(1298, Assertion).addMethod('throws', assertThrows));
                        }
                        {
                            __statement_U_9CRe(1299);
                            __extro_wrjjOl(1300, __intro_byTVoB(1300, Assertion).addMethod('Throw', assertThrows));
                        }
                        function respondTo(method, msg) {
                            __block_LCpqSB(181);
                            if (__expression_G3qo7s(1301), msg) {
                                __block_LCpqSB(182);
                                {
                                    __statement_U_9CRe(1302);
                                    __expression_G3qo7s(1303), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(1304);
                                var obj = (__expression_G3qo7s(1305), flag(this, 'object')), itself = (__expression_G3qo7s(1306), flag(this, 'itself')), context = (__expression_G3qo7s(1309), (__expression_G3qo7s(1310), 'function' === __extro_wrjjOl(1311, __intro_byTVoB(1311, _).type(obj))) && (__expression_G3qo7s(1312), !(__expression_G3qo7s(1313), itself))) ? (__expression_G3qo7s(1307), obj.prototype[method]) : (__expression_G3qo7s(1308), obj[method]);
                            }
                            {
                                __statement_U_9CRe(1314);
                                __extro_wrjjOl(1315, __intro_byTVoB(1315, this).assert((__expression_G3qo7s(1316), 'function' === (__expression_G3qo7s(1317), typeof context)), (__expression_G3qo7s(1318), 'expected #{this} to respond to ' + __extro_wrjjOl(1319, __intro_byTVoB(1319, _).inspect(method))), (__expression_G3qo7s(1320), 'expected #{this} to not respond to ' + __extro_wrjjOl(1321, __intro_byTVoB(1321, _).inspect(method)))));
                            }
                        }
                        {
                            __statement_U_9CRe(1322);
                            __extro_wrjjOl(1323, __intro_byTVoB(1323, Assertion).addMethod('respondTo', respondTo));
                        }
                        {
                            __statement_U_9CRe(1324);
                            __extro_wrjjOl(1325, __intro_byTVoB(1325, Assertion).addMethod('respondsTo', respondTo));
                        }
                        {
                            __statement_U_9CRe(1326);
                            __extro_wrjjOl(1327, __intro_byTVoB(1327, Assertion).addProperty('itself', function () {
                                __block_LCpqSB(183);
                                {
                                    __statement_U_9CRe(1328);
                                    __expression_G3qo7s(1329), flag(this, 'itself', true);
                                }
                            }));
                        }
                        function satisfy(matcher, msg) {
                            __block_LCpqSB(184);
                            if (__expression_G3qo7s(1330), msg) {
                                __block_LCpqSB(185);
                                {
                                    __statement_U_9CRe(1331);
                                    __expression_G3qo7s(1332), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(1333);
                                var obj = (__expression_G3qo7s(1334), flag(this, 'object'));
                            }
                            {
                                __statement_U_9CRe(1335);
                                var result = (__expression_G3qo7s(1336), matcher(obj));
                            }
                            {
                                __statement_U_9CRe(1337);
                                __extro_wrjjOl(1338, __intro_byTVoB(1338, this).assert(result, (__expression_G3qo7s(1339), 'expected #{this} to satisfy ' + __extro_wrjjOl(1340, __intro_byTVoB(1340, _).objDisplay(matcher))), (__expression_G3qo7s(1341), 'expected #{this} to not satisfy' + __extro_wrjjOl(1342, __intro_byTVoB(1342, _).objDisplay(matcher))), this.negate ? (__expression_G3qo7s(1343), false) : (__expression_G3qo7s(1344), true), result));
                            }
                        }
                        {
                            __statement_U_9CRe(1345);
                            __extro_wrjjOl(1346, __intro_byTVoB(1346, Assertion).addMethod('satisfy', satisfy));
                        }
                        {
                            __statement_U_9CRe(1347);
                            __extro_wrjjOl(1348, __intro_byTVoB(1348, Assertion).addMethod('satisfies', satisfy));
                        }
                        function closeTo(expected, delta, msg) {
                            __block_LCpqSB(186);
                            if (__expression_G3qo7s(1349), msg) {
                                __block_LCpqSB(187);
                                {
                                    __statement_U_9CRe(1350);
                                    __expression_G3qo7s(1351), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(1352);
                                var obj = (__expression_G3qo7s(1353), flag(this, 'object'));
                            }
                            {
                                __statement_U_9CRe(1354);
                                __extro_wrjjOl(1355, __intro_byTVoB(1355, new Assertion(obj, msg).is).a('number'));
                            }
                            if (__expression_G3qo7s(1356), (__expression_G3qo7s(1357), __extro_wrjjOl(1358, __intro_byTVoB(1358, _).type(expected)) !== 'number') || (__expression_G3qo7s(1359), __extro_wrjjOl(1360, __intro_byTVoB(1360, _).type(delta)) !== 'number')) {
                                __block_LCpqSB(188);
                                {
                                    __statement_U_9CRe(1361);
                                    throw new Error('the arguments to closeTo or approximately must be numbers');
                                }
                            }
                            {
                                __statement_U_9CRe(1362);
                                __extro_wrjjOl(1363, __intro_byTVoB(1363, this).assert((__expression_G3qo7s(1364), __extro_wrjjOl(1365, __intro_byTVoB(1365, Math).abs((__expression_G3qo7s(1366), (__expression_G3qo7s(1367), obj) - (__expression_G3qo7s(1368), expected)))) <= (__expression_G3qo7s(1369), delta)), (__expression_G3qo7s(1370), (__expression_G3qo7s(1371), (__expression_G3qo7s(1372), 'expected #{this} to be close to ' + (__expression_G3qo7s(1373), expected)) + ' +/- ') + (__expression_G3qo7s(1374), delta)), (__expression_G3qo7s(1375), (__expression_G3qo7s(1376), (__expression_G3qo7s(1377), 'expected #{this} not to be close to ' + (__expression_G3qo7s(1378), expected)) + ' +/- ') + (__expression_G3qo7s(1379), delta))));
                            }
                        }
                        {
                            __statement_U_9CRe(1380);
                            __extro_wrjjOl(1381, __intro_byTVoB(1381, Assertion).addMethod('closeTo', closeTo));
                        }
                        {
                            __statement_U_9CRe(1382);
                            __extro_wrjjOl(1383, __intro_byTVoB(1383, Assertion).addMethod('approximately', closeTo));
                        }
                        function isSubsetOf(subset, superset, cmp) {
                            __block_LCpqSB(189);
                            return __expression_G3qo7s(1384), __extro_wrjjOl(1385, __intro_byTVoB(1385, subset).every(function (elem) {
                                __block_LCpqSB(190);
                                if (__expression_G3qo7s(1386), !(__expression_G3qo7s(1387), cmp)) {
                                    __block_LCpqSB(191);
                                    return __expression_G3qo7s(1388), (__expression_G3qo7s(1389), __extro_wrjjOl(1390, __intro_byTVoB(1390, superset).indexOf(elem)) !== (__expression_G3qo7s(1391), -1));
                                }
                                return __expression_G3qo7s(1392), __extro_wrjjOl(1393, __intro_byTVoB(1393, superset).some(function (elem2) {
                                    __block_LCpqSB(192);
                                    return __expression_G3qo7s(1394), (__expression_G3qo7s(1395), cmp(elem, elem2));
                                }));
                            }));
                        }
                        {
                            __statement_U_9CRe(1396);
                            __extro_wrjjOl(1397, __intro_byTVoB(1397, Assertion).addMethod('members', function (subset, msg) {
                                __block_LCpqSB(193);
                                if (__expression_G3qo7s(1398), msg) {
                                    __block_LCpqSB(194);
                                    {
                                        __statement_U_9CRe(1399);
                                        __expression_G3qo7s(1400), flag(this, 'message', msg);
                                    }
                                }
                                {
                                    __statement_U_9CRe(1401);
                                    var obj = (__expression_G3qo7s(1402), flag(this, 'object'));
                                }
                                {
                                    __statement_U_9CRe(1403);
                                    __extro_wrjjOl(1404, __intro_byTVoB(1404, new Assertion(obj).to.be).an('array'));
                                }
                                {
                                    __statement_U_9CRe(1405);
                                    __extro_wrjjOl(1406, __intro_byTVoB(1406, new Assertion(subset).to.be).an('array'));
                                }
                                {
                                    __statement_U_9CRe(1407);
                                    var cmp = (__expression_G3qo7s(1410), flag(this, 'deep')) ? (__expression_G3qo7s(1408), _.eql) : (__expression_G3qo7s(1409), undefined);
                                }
                                if (__expression_G3qo7s(1411), flag(this, 'contains')) {
                                    __block_LCpqSB(195);
                                    return __expression_G3qo7s(1412), __extro_wrjjOl(1413, __intro_byTVoB(1413, this).assert((__expression_G3qo7s(1414), isSubsetOf(subset, obj, cmp)), 'expected #{this} to be a superset of #{act}', 'expected #{this} to not be a superset of #{act}', obj, subset));
                                }
                                {
                                    __statement_U_9CRe(1415);
                                    __extro_wrjjOl(1416, __intro_byTVoB(1416, this).assert((__expression_G3qo7s(1417), (__expression_G3qo7s(1418), isSubsetOf(obj, subset, cmp)) && (__expression_G3qo7s(1419), isSubsetOf(subset, obj, cmp))), 'expected #{this} to have the same members as #{act}', 'expected #{this} to not have the same members as #{act}', obj, subset));
                                }
                            }));
                        }
                        function oneOf(list, msg) {
                            __block_LCpqSB(196);
                            if (__expression_G3qo7s(1420), msg) {
                                __block_LCpqSB(197);
                                {
                                    __statement_U_9CRe(1421);
                                    __expression_G3qo7s(1422), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(1423);
                                var expected = (__expression_G3qo7s(1424), flag(this, 'object'));
                            }
                            {
                                __statement_U_9CRe(1425);
                                __extro_wrjjOl(1426, __intro_byTVoB(1426, new Assertion(list).to.be).an('array'));
                            }
                            {
                                __statement_U_9CRe(1427);
                                __extro_wrjjOl(1428, __intro_byTVoB(1428, this).assert((__expression_G3qo7s(1429), __extro_wrjjOl(1430, __intro_byTVoB(1430, list).indexOf(expected)) > (__expression_G3qo7s(1431), -1)), 'expected #{this} to be one of #{exp}', 'expected #{this} to not be one of #{exp}', list, expected));
                            }
                        }
                        {
                            __statement_U_9CRe(1432);
                            __extro_wrjjOl(1433, __intro_byTVoB(1433, Assertion).addMethod('oneOf', oneOf));
                        }
                        function assertChanges(object, prop, msg) {
                            __block_LCpqSB(198);
                            if (__expression_G3qo7s(1434), msg) {
                                __block_LCpqSB(199);
                                {
                                    __statement_U_9CRe(1435);
                                    __expression_G3qo7s(1436), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(1437);
                                var fn = (__expression_G3qo7s(1438), flag(this, 'object'));
                            }
                            {
                                __statement_U_9CRe(1439);
                                __extro_wrjjOl(1440, __intro_byTVoB(1440, new Assertion(object, msg).to.have).property(prop));
                            }
                            {
                                __statement_U_9CRe(1441);
                                __extro_wrjjOl(1442, __intro_byTVoB(1442, new Assertion(fn).is).a('function'));
                            }
                            {
                                __statement_U_9CRe(1443);
                                var initial = object[prop];
                            }
                            {
                                __statement_U_9CRe(1444);
                                __expression_G3qo7s(1445), fn();
                            }
                            {
                                __statement_U_9CRe(1446);
                                __extro_wrjjOl(1447, __intro_byTVoB(1447, this).assert((__expression_G3qo7s(1448), (__expression_G3qo7s(1449), initial) !== object[prop]), (__expression_G3qo7s(1450), (__expression_G3qo7s(1451), 'expected .' + (__expression_G3qo7s(1452), prop)) + ' to change'), (__expression_G3qo7s(1453), (__expression_G3qo7s(1454), 'expected .' + (__expression_G3qo7s(1455), prop)) + ' to not change')));
                            }
                        }
                        {
                            __statement_U_9CRe(1456);
                            __extro_wrjjOl(1457, __intro_byTVoB(1457, Assertion).addChainableMethod('change', assertChanges));
                        }
                        {
                            __statement_U_9CRe(1458);
                            __extro_wrjjOl(1459, __intro_byTVoB(1459, Assertion).addChainableMethod('changes', assertChanges));
                        }
                        function assertIncreases(object, prop, msg) {
                            __block_LCpqSB(200);
                            if (__expression_G3qo7s(1460), msg) {
                                __block_LCpqSB(201);
                                {
                                    __statement_U_9CRe(1461);
                                    __expression_G3qo7s(1462), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(1463);
                                var fn = (__expression_G3qo7s(1464), flag(this, 'object'));
                            }
                            {
                                __statement_U_9CRe(1465);
                                __extro_wrjjOl(1466, __intro_byTVoB(1466, new Assertion(object, msg).to.have).property(prop));
                            }
                            {
                                __statement_U_9CRe(1467);
                                __extro_wrjjOl(1468, __intro_byTVoB(1468, new Assertion(fn).is).a('function'));
                            }
                            {
                                __statement_U_9CRe(1469);
                                var initial = object[prop];
                            }
                            {
                                __statement_U_9CRe(1470);
                                __expression_G3qo7s(1471), fn();
                            }
                            {
                                __statement_U_9CRe(1472);
                                __extro_wrjjOl(1473, __intro_byTVoB(1473, this).assert((__expression_G3qo7s(1474), (__expression_G3qo7s(1475), object[prop] - (__expression_G3qo7s(1476), initial)) > 0), (__expression_G3qo7s(1477), (__expression_G3qo7s(1478), 'expected .' + (__expression_G3qo7s(1479), prop)) + ' to increase'), (__expression_G3qo7s(1480), (__expression_G3qo7s(1481), 'expected .' + (__expression_G3qo7s(1482), prop)) + ' to not increase')));
                            }
                        }
                        {
                            __statement_U_9CRe(1483);
                            __extro_wrjjOl(1484, __intro_byTVoB(1484, Assertion).addChainableMethod('increase', assertIncreases));
                        }
                        {
                            __statement_U_9CRe(1485);
                            __extro_wrjjOl(1486, __intro_byTVoB(1486, Assertion).addChainableMethod('increases', assertIncreases));
                        }
                        function assertDecreases(object, prop, msg) {
                            __block_LCpqSB(202);
                            if (__expression_G3qo7s(1487), msg) {
                                __block_LCpqSB(203);
                                {
                                    __statement_U_9CRe(1488);
                                    __expression_G3qo7s(1489), flag(this, 'message', msg);
                                }
                            }
                            {
                                __statement_U_9CRe(1490);
                                var fn = (__expression_G3qo7s(1491), flag(this, 'object'));
                            }
                            {
                                __statement_U_9CRe(1492);
                                __extro_wrjjOl(1493, __intro_byTVoB(1493, new Assertion(object, msg).to.have).property(prop));
                            }
                            {
                                __statement_U_9CRe(1494);
                                __extro_wrjjOl(1495, __intro_byTVoB(1495, new Assertion(fn).is).a('function'));
                            }
                            {
                                __statement_U_9CRe(1496);
                                var initial = object[prop];
                            }
                            {
                                __statement_U_9CRe(1497);
                                __expression_G3qo7s(1498), fn();
                            }
                            {
                                __statement_U_9CRe(1499);
                                __extro_wrjjOl(1500, __intro_byTVoB(1500, this).assert((__expression_G3qo7s(1501), (__expression_G3qo7s(1502), object[prop] - (__expression_G3qo7s(1503), initial)) < 0), (__expression_G3qo7s(1504), (__expression_G3qo7s(1505), 'expected .' + (__expression_G3qo7s(1506), prop)) + ' to decrease'), (__expression_G3qo7s(1507), (__expression_G3qo7s(1508), 'expected .' + (__expression_G3qo7s(1509), prop)) + ' to not decrease')));
                            }
                        }
                        {
                            __statement_U_9CRe(1510);
                            __extro_wrjjOl(1511, __intro_byTVoB(1511, Assertion).addChainableMethod('decrease', assertDecreases));
                        }
                        {
                            __statement_U_9CRe(1512);
                            __extro_wrjjOl(1513, __intro_byTVoB(1513, Assertion).addChainableMethod('decreases', assertDecreases));
                        }
                        {
                            __statement_U_9CRe(1514);
                            __extro_wrjjOl(1515, __intro_byTVoB(1515, Assertion).addProperty('extensible', function () {
                                __block_LCpqSB(204);
                                {
                                    __statement_U_9CRe(1516);
                                    var obj = (__expression_G3qo7s(1517), flag(this, 'object'));
                                }
                                {
                                    __statement_U_9CRe(1518);
                                    var isExtensible;
                                }
                                try {
                                    __block_LCpqSB(205);
                                    {
                                        __statement_U_9CRe(1519);
                                        isExtensible = __extro_wrjjOl(1520, __intro_byTVoB(1520, Object).isExtensible(obj));
                                    }
                                } catch (err) {
                                    __block_LCpqSB(206);
                                    if (__expression_G3qo7s(1521), (__expression_G3qo7s(1522), err) instanceof (__expression_G3qo7s(1523), TypeError)) {
                                        __block_LCpqSB(207);
                                        {
                                            __statement_U_9CRe(1524);
                                            isExtensible = false;
                                        }
                                    } else {
                                        __block_LCpqSB(208);
                                        {
                                            __statement_U_9CRe(1525);
                                            throw err;
                                        }
                                    }
                                }
                                {
                                    __statement_U_9CRe(1526);
                                    __extro_wrjjOl(1527, __intro_byTVoB(1527, this).assert(isExtensible, 'expected #{this} to be extensible', 'expected #{this} to not be extensible'));
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(1528);
                            __extro_wrjjOl(1529, __intro_byTVoB(1529, Assertion).addProperty('sealed', function () {
                                __block_LCpqSB(209);
                                {
                                    __statement_U_9CRe(1530);
                                    var obj = (__expression_G3qo7s(1531), flag(this, 'object'));
                                }
                                {
                                    __statement_U_9CRe(1532);
                                    var isSealed;
                                }
                                try {
                                    __block_LCpqSB(210);
                                    {
                                        __statement_U_9CRe(1533);
                                        isSealed = __extro_wrjjOl(1534, __intro_byTVoB(1534, Object).isSealed(obj));
                                    }
                                } catch (err) {
                                    __block_LCpqSB(211);
                                    if (__expression_G3qo7s(1535), (__expression_G3qo7s(1536), err) instanceof (__expression_G3qo7s(1537), TypeError)) {
                                        __block_LCpqSB(212);
                                        {
                                            __statement_U_9CRe(1538);
                                            isSealed = true;
                                        }
                                    } else {
                                        __block_LCpqSB(213);
                                        {
                                            __statement_U_9CRe(1539);
                                            throw err;
                                        }
                                    }
                                }
                                {
                                    __statement_U_9CRe(1540);
                                    __extro_wrjjOl(1541, __intro_byTVoB(1541, this).assert(isSealed, 'expected #{this} to be sealed', 'expected #{this} to not be sealed'));
                                }
                            }));
                        }
                        {
                            __statement_U_9CRe(1542);
                            __extro_wrjjOl(1543, __intro_byTVoB(1543, Assertion).addProperty('frozen', function () {
                                __block_LCpqSB(214);
                                {
                                    __statement_U_9CRe(1544);
                                    var obj = (__expression_G3qo7s(1545), flag(this, 'object'));
                                }
                                {
                                    __statement_U_9CRe(1546);
                                    var isFrozen;
                                }
                                try {
                                    __block_LCpqSB(215);
                                    {
                                        __statement_U_9CRe(1547);
                                        isFrozen = __extro_wrjjOl(1548, __intro_byTVoB(1548, Object).isFrozen(obj));
                                    }
                                } catch (err) {
                                    __block_LCpqSB(216);
                                    if (__expression_G3qo7s(1549), (__expression_G3qo7s(1550), err) instanceof (__expression_G3qo7s(1551), TypeError)) {
                                        __block_LCpqSB(217);
                                        {
                                            __statement_U_9CRe(1552);
                                            isFrozen = true;
                                        }
                                    } else {
                                        __block_LCpqSB(218);
                                        {
                                            __statement_U_9CRe(1553);
                                            throw err;
                                        }
                                    }
                                }
                                {
                                    __statement_U_9CRe(1554);
                                    __extro_wrjjOl(1555, __intro_byTVoB(1555, this).assert(isFrozen, 'expected #{this} to be frozen', 'expected #{this} to not be frozen'));
                                }
                            }));
                        }
                    };
                }
            },
            {}
        ],
        8: [
            function (require, module, exports) {
                __block_LCpqSB(219);
                {
                    __statement_U_9CRe(1556);
                    module.exports = function (chai, util) {
                        __block_LCpqSB(220);
                        {
                            __statement_U_9CRe(1557);
                            var Assertion = chai.Assertion, flag = util.flag;
                        }
                        {
                            __statement_U_9CRe(1558);
                            var assert = chai.assert = function (express, errmsg) {
                                    __block_LCpqSB(221);
                                    {
                                        __statement_U_9CRe(1559);
                                        var test = new Assertion(null, null, chai.assert);
                                    }
                                    {
                                        __statement_U_9CRe(1560);
                                        __extro_wrjjOl(1561, __intro_byTVoB(1561, test).assert(express, errmsg, '[ negation message unavailable ]'));
                                    }
                                };
                        }
                        {
                            __statement_U_9CRe(1562);
                            assert.fail = function (actual, expected, message, operator) {
                                __block_LCpqSB(222);
                                {
                                    __statement_U_9CRe(1563);
                                    message = (__expression_G3qo7s(1564), (__expression_G3qo7s(1565), message) || 'assert.fail()');
                                }
                                {
                                    __statement_U_9CRe(1566);
                                    throw new chai.AssertionError(message, {
                                        actual: actual,
                                        expected: expected,
                                        operator: operator
                                    }, assert.fail);
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1567);
                            assert.isOk = function (val, msg) {
                                __block_LCpqSB(223);
                                {
                                    __statement_U_9CRe(1568);
                                    new Assertion(val, msg).is.ok;
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1569);
                            assert.isNotOk = function (val, msg) {
                                __block_LCpqSB(224);
                                {
                                    __statement_U_9CRe(1570);
                                    new Assertion(val, msg).is.not.ok;
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1571);
                            assert.equal = function (act, exp, msg) {
                                __block_LCpqSB(225);
                                {
                                    __statement_U_9CRe(1572);
                                    var test = new Assertion(act, msg, assert.equal);
                                }
                                {
                                    __statement_U_9CRe(1573);
                                    __extro_wrjjOl(1574, __intro_byTVoB(1574, test).assert((__expression_G3qo7s(1575), (__expression_G3qo7s(1576), exp) == (__expression_G3qo7s(1577), flag(test, 'object'))), 'expected #{this} to equal #{exp}', 'expected #{this} to not equal #{act}', exp, act));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1578);
                            assert.notEqual = function (act, exp, msg) {
                                __block_LCpqSB(226);
                                {
                                    __statement_U_9CRe(1579);
                                    var test = new Assertion(act, msg, assert.notEqual);
                                }
                                {
                                    __statement_U_9CRe(1580);
                                    __extro_wrjjOl(1581, __intro_byTVoB(1581, test).assert((__expression_G3qo7s(1582), (__expression_G3qo7s(1583), exp) != (__expression_G3qo7s(1584), flag(test, 'object'))), 'expected #{this} to not equal #{exp}', 'expected #{this} to equal #{act}', exp, act));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1585);
                            assert.strictEqual = function (act, exp, msg) {
                                __block_LCpqSB(227);
                                {
                                    __statement_U_9CRe(1586);
                                    __extro_wrjjOl(1587, __intro_byTVoB(1587, new Assertion(act, msg).to).equal(exp));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1588);
                            assert.notStrictEqual = function (act, exp, msg) {
                                __block_LCpqSB(228);
                                {
                                    __statement_U_9CRe(1589);
                                    __extro_wrjjOl(1590, __intro_byTVoB(1590, new Assertion(act, msg).to.not).equal(exp));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1591);
                            assert.deepEqual = function (act, exp, msg) {
                                __block_LCpqSB(229);
                                {
                                    __statement_U_9CRe(1592);
                                    __extro_wrjjOl(1593, __intro_byTVoB(1593, new Assertion(act, msg).to).eql(exp));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1594);
                            assert.notDeepEqual = function (act, exp, msg) {
                                __block_LCpqSB(230);
                                {
                                    __statement_U_9CRe(1595);
                                    __extro_wrjjOl(1596, __intro_byTVoB(1596, new Assertion(act, msg).to.not).eql(exp));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1597);
                            assert.isAbove = function (val, abv, msg) {
                                __block_LCpqSB(231);
                                {
                                    __statement_U_9CRe(1598);
                                    __extro_wrjjOl(1599, __intro_byTVoB(1599, new Assertion(val, msg).to.be).above(abv));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1600);
                            assert.isAtLeast = function (val, atlst, msg) {
                                __block_LCpqSB(232);
                                {
                                    __statement_U_9CRe(1601);
                                    __extro_wrjjOl(1602, __intro_byTVoB(1602, new Assertion(val, msg).to.be).least(atlst));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1603);
                            assert.isBelow = function (val, blw, msg) {
                                __block_LCpqSB(233);
                                {
                                    __statement_U_9CRe(1604);
                                    __extro_wrjjOl(1605, __intro_byTVoB(1605, new Assertion(val, msg).to.be).below(blw));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1606);
                            assert.isAtMost = function (val, atmst, msg) {
                                __block_LCpqSB(234);
                                {
                                    __statement_U_9CRe(1607);
                                    __extro_wrjjOl(1608, __intro_byTVoB(1608, new Assertion(val, msg).to.be).most(atmst));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1609);
                            assert.isTrue = function (val, msg) {
                                __block_LCpqSB(235);
                                {
                                    __statement_U_9CRe(1610);
                                    new Assertion(val, msg).is['true'];
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1611);
                            assert.isNotTrue = function (val, msg) {
                                __block_LCpqSB(236);
                                {
                                    __statement_U_9CRe(1612);
                                    __extro_wrjjOl(1613, __intro_byTVoB(1613, new Assertion(val, msg).to.not).equal(true));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1614);
                            assert.isFalse = function (val, msg) {
                                __block_LCpqSB(237);
                                {
                                    __statement_U_9CRe(1615);
                                    new Assertion(val, msg).is['false'];
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1616);
                            assert.isNotFalse = function (val, msg) {
                                __block_LCpqSB(238);
                                {
                                    __statement_U_9CRe(1617);
                                    __extro_wrjjOl(1618, __intro_byTVoB(1618, new Assertion(val, msg).to.not).equal(false));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1619);
                            assert.isNull = function (val, msg) {
                                __block_LCpqSB(239);
                                {
                                    __statement_U_9CRe(1620);
                                    __extro_wrjjOl(1621, __intro_byTVoB(1621, new Assertion(val, msg).to).equal(null));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1622);
                            assert.isNotNull = function (val, msg) {
                                __block_LCpqSB(240);
                                {
                                    __statement_U_9CRe(1623);
                                    __extro_wrjjOl(1624, __intro_byTVoB(1624, new Assertion(val, msg).to.not).equal(null));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1625);
                            assert.isNaN = function (val, msg) {
                                __block_LCpqSB(241);
                                {
                                    __statement_U_9CRe(1626);
                                    new Assertion(val, msg).to.be.NaN;
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1627);
                            assert.isNotNaN = function (val, msg) {
                                __block_LCpqSB(242);
                                {
                                    __statement_U_9CRe(1628);
                                    new Assertion(val, msg).not.to.be.NaN;
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1629);
                            assert.isUndefined = function (val, msg) {
                                __block_LCpqSB(243);
                                {
                                    __statement_U_9CRe(1630);
                                    __extro_wrjjOl(1631, __intro_byTVoB(1631, new Assertion(val, msg).to).equal(undefined));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1632);
                            assert.isDefined = function (val, msg) {
                                __block_LCpqSB(244);
                                {
                                    __statement_U_9CRe(1633);
                                    __extro_wrjjOl(1634, __intro_byTVoB(1634, new Assertion(val, msg).to.not).equal(undefined));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1635);
                            assert.isFunction = function (val, msg) {
                                __block_LCpqSB(245);
                                {
                                    __statement_U_9CRe(1636);
                                    __extro_wrjjOl(1637, __intro_byTVoB(1637, new Assertion(val, msg).to.be).a('function'));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1638);
                            assert.isNotFunction = function (val, msg) {
                                __block_LCpqSB(246);
                                {
                                    __statement_U_9CRe(1639);
                                    __extro_wrjjOl(1640, __intro_byTVoB(1640, new Assertion(val, msg).to.not.be).a('function'));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1641);
                            assert.isObject = function (val, msg) {
                                __block_LCpqSB(247);
                                {
                                    __statement_U_9CRe(1642);
                                    __extro_wrjjOl(1643, __intro_byTVoB(1643, new Assertion(val, msg).to.be).a('object'));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1644);
                            assert.isNotObject = function (val, msg) {
                                __block_LCpqSB(248);
                                {
                                    __statement_U_9CRe(1645);
                                    __extro_wrjjOl(1646, __intro_byTVoB(1646, new Assertion(val, msg).to.not.be).a('object'));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1647);
                            assert.isArray = function (val, msg) {
                                __block_LCpqSB(249);
                                {
                                    __statement_U_9CRe(1648);
                                    __extro_wrjjOl(1649, __intro_byTVoB(1649, new Assertion(val, msg).to.be).an('array'));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1650);
                            assert.isNotArray = function (val, msg) {
                                __block_LCpqSB(250);
                                {
                                    __statement_U_9CRe(1651);
                                    __extro_wrjjOl(1652, __intro_byTVoB(1652, new Assertion(val, msg).to.not.be).an('array'));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1653);
                            assert.isString = function (val, msg) {
                                __block_LCpqSB(251);
                                {
                                    __statement_U_9CRe(1654);
                                    __extro_wrjjOl(1655, __intro_byTVoB(1655, new Assertion(val, msg).to.be).a('string'));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1656);
                            assert.isNotString = function (val, msg) {
                                __block_LCpqSB(252);
                                {
                                    __statement_U_9CRe(1657);
                                    __extro_wrjjOl(1658, __intro_byTVoB(1658, new Assertion(val, msg).to.not.be).a('string'));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1659);
                            assert.isNumber = function (val, msg) {
                                __block_LCpqSB(253);
                                {
                                    __statement_U_9CRe(1660);
                                    __extro_wrjjOl(1661, __intro_byTVoB(1661, new Assertion(val, msg).to.be).a('number'));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1662);
                            assert.isNotNumber = function (val, msg) {
                                __block_LCpqSB(254);
                                {
                                    __statement_U_9CRe(1663);
                                    __extro_wrjjOl(1664, __intro_byTVoB(1664, new Assertion(val, msg).to.not.be).a('number'));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1665);
                            assert.isBoolean = function (val, msg) {
                                __block_LCpqSB(255);
                                {
                                    __statement_U_9CRe(1666);
                                    __extro_wrjjOl(1667, __intro_byTVoB(1667, new Assertion(val, msg).to.be).a('boolean'));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1668);
                            assert.isNotBoolean = function (val, msg) {
                                __block_LCpqSB(256);
                                {
                                    __statement_U_9CRe(1669);
                                    __extro_wrjjOl(1670, __intro_byTVoB(1670, new Assertion(val, msg).to.not.be).a('boolean'));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1671);
                            assert.typeOf = function (val, type, msg) {
                                __block_LCpqSB(257);
                                {
                                    __statement_U_9CRe(1672);
                                    __extro_wrjjOl(1673, __intro_byTVoB(1673, new Assertion(val, msg).to.be).a(type));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1674);
                            assert.notTypeOf = function (val, type, msg) {
                                __block_LCpqSB(258);
                                {
                                    __statement_U_9CRe(1675);
                                    __extro_wrjjOl(1676, __intro_byTVoB(1676, new Assertion(val, msg).to.not.be).a(type));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1677);
                            assert.instanceOf = function (val, type, msg) {
                                __block_LCpqSB(259);
                                {
                                    __statement_U_9CRe(1678);
                                    __extro_wrjjOl(1679, __intro_byTVoB(1679, new Assertion(val, msg).to.be).instanceOf(type));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1680);
                            assert.notInstanceOf = function (val, type, msg) {
                                __block_LCpqSB(260);
                                {
                                    __statement_U_9CRe(1681);
                                    __extro_wrjjOl(1682, __intro_byTVoB(1682, new Assertion(val, msg).to.not.be).instanceOf(type));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1683);
                            assert.include = function (exp, inc, msg) {
                                __block_LCpqSB(261);
                                {
                                    __statement_U_9CRe(1684);
                                    __extro_wrjjOl(1685, __intro_byTVoB(1685, new Assertion(exp, msg, assert.include)).include(inc));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1686);
                            assert.notInclude = function (exp, inc, msg) {
                                __block_LCpqSB(262);
                                {
                                    __statement_U_9CRe(1687);
                                    __extro_wrjjOl(1688, __intro_byTVoB(1688, new Assertion(exp, msg, assert.notInclude).not).include(inc));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1689);
                            assert.match = function (exp, re, msg) {
                                __block_LCpqSB(263);
                                {
                                    __statement_U_9CRe(1690);
                                    __extro_wrjjOl(1691, __intro_byTVoB(1691, new Assertion(exp, msg).to).match(re));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1692);
                            assert.notMatch = function (exp, re, msg) {
                                __block_LCpqSB(264);
                                {
                                    __statement_U_9CRe(1693);
                                    __extro_wrjjOl(1694, __intro_byTVoB(1694, new Assertion(exp, msg).to.not).match(re));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1695);
                            assert.property = function (obj, prop, msg) {
                                __block_LCpqSB(265);
                                {
                                    __statement_U_9CRe(1696);
                                    __extro_wrjjOl(1697, __intro_byTVoB(1697, new Assertion(obj, msg).to.have).property(prop));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1698);
                            assert.notProperty = function (obj, prop, msg) {
                                __block_LCpqSB(266);
                                {
                                    __statement_U_9CRe(1699);
                                    __extro_wrjjOl(1700, __intro_byTVoB(1700, new Assertion(obj, msg).to.not.have).property(prop));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1701);
                            assert.deepProperty = function (obj, prop, msg) {
                                __block_LCpqSB(267);
                                {
                                    __statement_U_9CRe(1702);
                                    __extro_wrjjOl(1703, __intro_byTVoB(1703, new Assertion(obj, msg).to.have.deep).property(prop));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1704);
                            assert.notDeepProperty = function (obj, prop, msg) {
                                __block_LCpqSB(268);
                                {
                                    __statement_U_9CRe(1705);
                                    __extro_wrjjOl(1706, __intro_byTVoB(1706, new Assertion(obj, msg).to.not.have.deep).property(prop));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1707);
                            assert.propertyVal = function (obj, prop, val, msg) {
                                __block_LCpqSB(269);
                                {
                                    __statement_U_9CRe(1708);
                                    __extro_wrjjOl(1709, __intro_byTVoB(1709, new Assertion(obj, msg).to.have).property(prop, val));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1710);
                            assert.propertyNotVal = function (obj, prop, val, msg) {
                                __block_LCpqSB(270);
                                {
                                    __statement_U_9CRe(1711);
                                    __extro_wrjjOl(1712, __intro_byTVoB(1712, new Assertion(obj, msg).to.not.have).property(prop, val));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1713);
                            assert.deepPropertyVal = function (obj, prop, val, msg) {
                                __block_LCpqSB(271);
                                {
                                    __statement_U_9CRe(1714);
                                    __extro_wrjjOl(1715, __intro_byTVoB(1715, new Assertion(obj, msg).to.have.deep).property(prop, val));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1716);
                            assert.deepPropertyNotVal = function (obj, prop, val, msg) {
                                __block_LCpqSB(272);
                                {
                                    __statement_U_9CRe(1717);
                                    __extro_wrjjOl(1718, __intro_byTVoB(1718, new Assertion(obj, msg).to.not.have.deep).property(prop, val));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1719);
                            assert.lengthOf = function (exp, len, msg) {
                                __block_LCpqSB(273);
                                {
                                    __statement_U_9CRe(1720);
                                    __extro_wrjjOl(1721, __intro_byTVoB(1721, new Assertion(exp, msg).to.have).length(len));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1722);
                            assert.throws = function (fn, errt, errs, msg) {
                                __block_LCpqSB(274);
                                if (__expression_G3qo7s(1723), (__expression_G3qo7s(1724), 'string' === (__expression_G3qo7s(1725), typeof errt)) || (__expression_G3qo7s(1726), (__expression_G3qo7s(1727), errt) instanceof (__expression_G3qo7s(1728), RegExp))) {
                                    __block_LCpqSB(275);
                                    {
                                        __statement_U_9CRe(1729);
                                        errs = errt;
                                    }
                                    {
                                        __statement_U_9CRe(1730);
                                        errt = null;
                                    }
                                }
                                {
                                    __statement_U_9CRe(1731);
                                    var assertErr = __extro_wrjjOl(1732, __intro_byTVoB(1732, new Assertion(fn, msg).to).throw(errt, errs));
                                }
                                return __expression_G3qo7s(1733), (__expression_G3qo7s(1734), flag(assertErr, 'object'));
                            };
                        }
                        {
                            __statement_U_9CRe(1735);
                            assert.doesNotThrow = function (fn, type, msg) {
                                __block_LCpqSB(276);
                                if (__expression_G3qo7s(1736), 'string' === (__expression_G3qo7s(1737), typeof type)) {
                                    __block_LCpqSB(277);
                                    {
                                        __statement_U_9CRe(1738);
                                        msg = type;
                                    }
                                    {
                                        __statement_U_9CRe(1739);
                                        type = null;
                                    }
                                }
                                {
                                    __statement_U_9CRe(1740);
                                    __extro_wrjjOl(1741, __intro_byTVoB(1741, new Assertion(fn, msg).to.not).Throw(type));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1742);
                            assert.operator = function (val, operator, val2, msg) {
                                __block_LCpqSB(278);
                                {
                                    __statement_U_9CRe(1743);
                                    var ok;
                                }
                                switch (__expression_G3qo7s(1744), operator) {
                                case '==': {
                                        __block_LCpqSB(279);
                                        {
                                            __statement_U_9CRe(1745);
                                            ok = (__expression_G3qo7s(1746), (__expression_G3qo7s(1747), val) == (__expression_G3qo7s(1748), val2));
                                        }
                                        break;
                                    }
                                case '===': {
                                        __block_LCpqSB(280);
                                        {
                                            __statement_U_9CRe(1749);
                                            ok = (__expression_G3qo7s(1750), (__expression_G3qo7s(1751), val) === (__expression_G3qo7s(1752), val2));
                                        }
                                        break;
                                    }
                                case '>': {
                                        __block_LCpqSB(281);
                                        {
                                            __statement_U_9CRe(1753);
                                            ok = (__expression_G3qo7s(1754), (__expression_G3qo7s(1755), val) > (__expression_G3qo7s(1756), val2));
                                        }
                                        break;
                                    }
                                case '>=': {
                                        __block_LCpqSB(282);
                                        {
                                            __statement_U_9CRe(1757);
                                            ok = (__expression_G3qo7s(1758), (__expression_G3qo7s(1759), val) >= (__expression_G3qo7s(1760), val2));
                                        }
                                        break;
                                    }
                                case '<': {
                                        __block_LCpqSB(283);
                                        {
                                            __statement_U_9CRe(1761);
                                            ok = (__expression_G3qo7s(1762), (__expression_G3qo7s(1763), val) < (__expression_G3qo7s(1764), val2));
                                        }
                                        break;
                                    }
                                case '<=': {
                                        __block_LCpqSB(284);
                                        {
                                            __statement_U_9CRe(1765);
                                            ok = (__expression_G3qo7s(1766), (__expression_G3qo7s(1767), val) <= (__expression_G3qo7s(1768), val2));
                                        }
                                        break;
                                    }
                                case '!=': {
                                        __block_LCpqSB(285);
                                        {
                                            __statement_U_9CRe(1769);
                                            ok = (__expression_G3qo7s(1770), (__expression_G3qo7s(1771), val) != (__expression_G3qo7s(1772), val2));
                                        }
                                        break;
                                    }
                                case '!==': {
                                        __block_LCpqSB(286);
                                        {
                                            __statement_U_9CRe(1773);
                                            ok = (__expression_G3qo7s(1774), (__expression_G3qo7s(1775), val) !== (__expression_G3qo7s(1776), val2));
                                        }
                                        break;
                                    }
                                default: {
                                        __block_LCpqSB(287);
                                        {
                                            __statement_U_9CRe(1777);
                                            throw new Error((__expression_G3qo7s(1778), (__expression_G3qo7s(1779), 'Invalid operator "' + (__expression_G3qo7s(1780), operator)) + '"'));
                                        }
                                    }
                                }
                                {
                                    __statement_U_9CRe(1781);
                                    var test = new Assertion(ok, msg);
                                }
                                {
                                    __statement_U_9CRe(1782);
                                    __extro_wrjjOl(1783, __intro_byTVoB(1783, test).assert((__expression_G3qo7s(1784), true === (__expression_G3qo7s(1785), flag(test, 'object'))), (__expression_G3qo7s(1786), (__expression_G3qo7s(1787), (__expression_G3qo7s(1788), (__expression_G3qo7s(1789), (__expression_G3qo7s(1790), 'expected ' + __extro_wrjjOl(1791, __intro_byTVoB(1791, util).inspect(val))) + ' to be ') + (__expression_G3qo7s(1792), operator)) + ' ') + __extro_wrjjOl(1793, __intro_byTVoB(1793, util).inspect(val2))), (__expression_G3qo7s(1794), (__expression_G3qo7s(1795), (__expression_G3qo7s(1796), (__expression_G3qo7s(1797), (__expression_G3qo7s(1798), 'expected ' + __extro_wrjjOl(1799, __intro_byTVoB(1799, util).inspect(val))) + ' to not be ') + (__expression_G3qo7s(1800), operator)) + ' ') + __extro_wrjjOl(1801, __intro_byTVoB(1801, util).inspect(val2)))));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1802);
                            assert.closeTo = function (act, exp, delta, msg) {
                                __block_LCpqSB(288);
                                {
                                    __statement_U_9CRe(1803);
                                    __extro_wrjjOl(1804, __intro_byTVoB(1804, new Assertion(act, msg).to.be).closeTo(exp, delta));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1805);
                            assert.approximately = function (act, exp, delta, msg) {
                                __block_LCpqSB(289);
                                {
                                    __statement_U_9CRe(1806);
                                    __extro_wrjjOl(1807, __intro_byTVoB(1807, new Assertion(act, msg).to.be).approximately(exp, delta));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1808);
                            assert.sameMembers = function (set1, set2, msg) {
                                __block_LCpqSB(290);
                                {
                                    __statement_U_9CRe(1809);
                                    __extro_wrjjOl(1810, __intro_byTVoB(1810, new Assertion(set1, msg).to.have.same).members(set2));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1811);
                            assert.sameDeepMembers = function (set1, set2, msg) {
                                __block_LCpqSB(291);
                                {
                                    __statement_U_9CRe(1812);
                                    __extro_wrjjOl(1813, __intro_byTVoB(1813, new Assertion(set1, msg).to.have.same.deep).members(set2));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1814);
                            assert.includeMembers = function (superset, subset, msg) {
                                __block_LCpqSB(292);
                                {
                                    __statement_U_9CRe(1815);
                                    __extro_wrjjOl(1816, __intro_byTVoB(1816, new Assertion(superset, msg).to.include).members(subset));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1817);
                            assert.oneOf = function (inList, list, msg) {
                                __block_LCpqSB(293);
                                {
                                    __statement_U_9CRe(1818);
                                    __extro_wrjjOl(1819, __intro_byTVoB(1819, new Assertion(inList, msg).to.be).oneOf(list));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1820);
                            assert.changes = function (fn, obj, prop) {
                                __block_LCpqSB(294);
                                {
                                    __statement_U_9CRe(1821);
                                    __extro_wrjjOl(1822, __intro_byTVoB(1822, new Assertion(fn).to).change(obj, prop));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1823);
                            assert.doesNotChange = function (fn, obj, prop) {
                                __block_LCpqSB(295);
                                {
                                    __statement_U_9CRe(1824);
                                    __extro_wrjjOl(1825, __intro_byTVoB(1825, new Assertion(fn).to.not).change(obj, prop));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1826);
                            assert.increases = function (fn, obj, prop) {
                                __block_LCpqSB(296);
                                {
                                    __statement_U_9CRe(1827);
                                    __extro_wrjjOl(1828, __intro_byTVoB(1828, new Assertion(fn).to).increase(obj, prop));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1829);
                            assert.doesNotIncrease = function (fn, obj, prop) {
                                __block_LCpqSB(297);
                                {
                                    __statement_U_9CRe(1830);
                                    __extro_wrjjOl(1831, __intro_byTVoB(1831, new Assertion(fn).to.not).increase(obj, prop));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1832);
                            assert.decreases = function (fn, obj, prop) {
                                __block_LCpqSB(298);
                                {
                                    __statement_U_9CRe(1833);
                                    __extro_wrjjOl(1834, __intro_byTVoB(1834, new Assertion(fn).to).decrease(obj, prop));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1835);
                            assert.doesNotDecrease = function (fn, obj, prop) {
                                __block_LCpqSB(299);
                                {
                                    __statement_U_9CRe(1836);
                                    __extro_wrjjOl(1837, __intro_byTVoB(1837, new Assertion(fn).to.not).decrease(obj, prop));
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1838);
                            assert.ifError = function (val) {
                                __block_LCpqSB(300);
                                if (__expression_G3qo7s(1839), val) {
                                    __block_LCpqSB(301);
                                    {
                                        __statement_U_9CRe(1840);
                                        throw val;
                                    }
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1841);
                            assert.isExtensible = function (obj, msg) {
                                __block_LCpqSB(302);
                                {
                                    __statement_U_9CRe(1842);
                                    new Assertion(obj, msg).to.be.extensible;
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1843);
                            assert.isNotExtensible = function (obj, msg) {
                                __block_LCpqSB(303);
                                {
                                    __statement_U_9CRe(1844);
                                    new Assertion(obj, msg).to.not.be.extensible;
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1845);
                            assert.isSealed = function (obj, msg) {
                                __block_LCpqSB(304);
                                {
                                    __statement_U_9CRe(1846);
                                    new Assertion(obj, msg).to.be.sealed;
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1847);
                            assert.isNotSealed = function (obj, msg) {
                                __block_LCpqSB(305);
                                {
                                    __statement_U_9CRe(1848);
                                    new Assertion(obj, msg).to.not.be.sealed;
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1849);
                            assert.isFrozen = function (obj, msg) {
                                __block_LCpqSB(306);
                                {
                                    __statement_U_9CRe(1850);
                                    new Assertion(obj, msg).to.be.frozen;
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1851);
                            assert.isNotFrozen = function (obj, msg) {
                                __block_LCpqSB(307);
                                {
                                    __statement_U_9CRe(1852);
                                    new Assertion(obj, msg).to.not.be.frozen;
                                }
                            };
                        }
                        {
                            __statement_U_9CRe(1853);
                            __expression_G3qo7s(1854), (__expression_G3qo7s(1855), (__expression_G3qo7s(1856), (__expression_G3qo7s(1857), (__expression_G3qo7s(1858), (__expression_G3qo7s(1859), (__expression_G3qo7s(1860), (__expression_G3qo7s(1861), (__expression_G3qo7s(1862), (__expression_G3qo7s(1863), function alias(name, as) {
                                __block_LCpqSB(308);
                                {
                                    __statement_U_9CRe(1864);
                                    assert[as] = assert[name];
                                }
                                return __expression_G3qo7s(1865), alias;
                            }('isOk', 'ok'))('isNotOk', 'notOk'))('throws', 'throw'))('throws', 'Throw'))('isExtensible', 'extensible'))('isNotExtensible', 'notExtensible'))('isSealed', 'sealed'))('isNotSealed', 'notSealed'))('isFrozen', 'frozen'))('isNotFrozen', 'notFrozen');
                        }
                    };
                }
            },
            {}
        ],
        9: [
            function (require, module, exports) {
                __block_LCpqSB(309);
                {
                    __statement_U_9CRe(1866);
                    module.exports = function (chai, util) {
                        __block_LCpqSB(310);
                        {
                            __statement_U_9CRe(1867);
                            chai.expect = function (val, message) {
                                __block_LCpqSB(311);
                                return __expression_G3qo7s(1868), new chai.Assertion(val, message);
                            };
                        }
                        {
                            __statement_U_9CRe(1869);
                            chai.expect.fail = function (actual, expected, message, operator) {
                                __block_LCpqSB(312);
                                {
                                    __statement_U_9CRe(1870);
                                    message = (__expression_G3qo7s(1871), (__expression_G3qo7s(1872), message) || 'expect.fail()');
                                }
                                {
                                    __statement_U_9CRe(1873);
                                    throw new chai.AssertionError(message, {
                                        actual: actual,
                                        expected: expected,
                                        operator: operator
                                    }, chai.expect.fail);
                                }
                            };
                        }
                    };
                }
            },
            {}
        ],
        10: [
            function (require, module, exports) {
                __block_LCpqSB(313);
                {
                    __statement_U_9CRe(1874);
                    module.exports = function (chai, util) {
                        __block_LCpqSB(314);
                        {
                            __statement_U_9CRe(1875);
                            var Assertion = chai.Assertion;
                        }
                        function loadShould() {
                            __block_LCpqSB(315);
                            function shouldGetter() {
                                __block_LCpqSB(316);
                                if (__expression_G3qo7s(1876), (__expression_G3qo7s(1877), (__expression_G3qo7s(1878), this instanceof (__expression_G3qo7s(1879), String)) || (__expression_G3qo7s(1880), this instanceof (__expression_G3qo7s(1881), Number))) || (__expression_G3qo7s(1882), this instanceof (__expression_G3qo7s(1883), Boolean))) {
                                    __block_LCpqSB(317);
                                    return __expression_G3qo7s(1884), new Assertion(__extro_wrjjOl(1885, __intro_byTVoB(1885, this).valueOf()), null, shouldGetter);
                                }
                                return __expression_G3qo7s(1886), new Assertion(this, null, shouldGetter);
                            }
                            function shouldSetter(value) {
                                __block_LCpqSB(318);
                                {
                                    __statement_U_9CRe(1887);
                                    __extro_wrjjOl(1888, __intro_byTVoB(1888, Object).defineProperty(this, 'should', {
                                        value: value,
                                        enumerable: true,
                                        configurable: true,
                                        writable: true
                                    }));
                                }
                            }
                            {
                                __statement_U_9CRe(1889);
                                __extro_wrjjOl(1890, __intro_byTVoB(1890, Object).defineProperty(Object.prototype, 'should', {
                                    set: shouldSetter,
                                    get: shouldGetter,
                                    configurable: true
                                }));
                            }
                            {
                                __statement_U_9CRe(1891);
                                var should = {};
                            }
                            {
                                __statement_U_9CRe(1892);
                                should.fail = function (actual, expected, message, operator) {
                                    __block_LCpqSB(319);
                                    {
                                        __statement_U_9CRe(1893);
                                        message = (__expression_G3qo7s(1894), (__expression_G3qo7s(1895), message) || 'should.fail()');
                                    }
                                    {
                                        __statement_U_9CRe(1896);
                                        throw new chai.AssertionError(message, {
                                            actual: actual,
                                            expected: expected,
                                            operator: operator
                                        }, should.fail);
                                    }
                                };
                            }
                            {
                                __statement_U_9CRe(1897);
                                should.equal = function (val1, val2, msg) {
                                    __block_LCpqSB(320);
                                    {
                                        __statement_U_9CRe(1898);
                                        __extro_wrjjOl(1899, __intro_byTVoB(1899, new Assertion(val1, msg).to).equal(val2));
                                    }
                                };
                            }
                            {
                                __statement_U_9CRe(1900);
                                should.Throw = function (fn, errt, errs, msg) {
                                    __block_LCpqSB(321);
                                    {
                                        __statement_U_9CRe(1901);
                                        __extro_wrjjOl(1902, __intro_byTVoB(1902, new Assertion(fn, msg).to).Throw(errt, errs));
                                    }
                                };
                            }
                            {
                                __statement_U_9CRe(1903);
                                should.exist = function (val, msg) {
                                    __block_LCpqSB(322);
                                    {
                                        __statement_U_9CRe(1904);
                                        new Assertion(val, msg).to.exist;
                                    }
                                };
                            }
                            {
                                __statement_U_9CRe(1905);
                                should.not = {};
                            }
                            {
                                __statement_U_9CRe(1906);
                                should.not.equal = function (val1, val2, msg) {
                                    __block_LCpqSB(323);
                                    {
                                        __statement_U_9CRe(1907);
                                        __extro_wrjjOl(1908, __intro_byTVoB(1908, new Assertion(val1, msg).to.not).equal(val2));
                                    }
                                };
                            }
                            {
                                __statement_U_9CRe(1909);
                                should.not.Throw = function (fn, errt, errs, msg) {
                                    __block_LCpqSB(324);
                                    {
                                        __statement_U_9CRe(1910);
                                        __extro_wrjjOl(1911, __intro_byTVoB(1911, new Assertion(fn, msg).to.not).Throw(errt, errs));
                                    }
                                };
                            }
                            {
                                __statement_U_9CRe(1912);
                                should.not.exist = function (val, msg) {
                                    __block_LCpqSB(325);
                                    {
                                        __statement_U_9CRe(1913);
                                        new Assertion(val, msg).to.not.exist;
                                    }
                                };
                            }
                            {
                                __statement_U_9CRe(1914);
                                should['throw'] = should['Throw'];
                            }
                            {
                                __statement_U_9CRe(1915);
                                should.not['throw'] = should.not['Throw'];
                            }
                            return __expression_G3qo7s(1916), should;
                        }
                        ;
                        {
                            __statement_U_9CRe(1917);
                            chai.should = loadShould;
                        }
                        {
                            __statement_U_9CRe(1918);
                            chai.Should = loadShould;
                        }
                    };
                }
            },
            {}
        ],
        11: [
            function (require, module, exports) {
                __block_LCpqSB(326);
                {
                    __statement_U_9CRe(1919);
                    var transferFlags = (__expression_G3qo7s(1920), require('./transferFlags'));
                }
                {
                    __statement_U_9CRe(1921);
                    var flag = (__expression_G3qo7s(1922), require('./flag'));
                }
                {
                    __statement_U_9CRe(1923);
                    var config = (__expression_G3qo7s(1924), require('../config'));
                }
                {
                    __statement_U_9CRe(1925);
                    var hasProtoSupport = (__expression_G3qo7s(1926), ('__proto__' in (__expression_G3qo7s(1927), Object)));
                }
                {
                    __statement_U_9CRe(1928);
                    var excludeNames = /^(?:length|name|arguments|caller)$/;
                }
                {
                    __statement_U_9CRe(1929);
                    var call = Function.prototype.call, apply = Function.prototype.apply;
                }
                {
                    __statement_U_9CRe(1930);
                    module.exports = function (ctx, name, method, chainingBehavior) {
                        __block_LCpqSB(327);
                        if (__expression_G3qo7s(1931), (__expression_G3qo7s(1932), typeof chainingBehavior) !== 'function') {
                            __block_LCpqSB(328);
                            {
                                __statement_U_9CRe(1933);
                                chainingBehavior = function () {
                                    __block_LCpqSB(329);
                                };
                            }
                        }
                        {
                            __statement_U_9CRe(1934);
                            var chainableBehavior = {
                                    method: method,
                                    chainingBehavior: chainingBehavior
                                };
                        }
                        if (__expression_G3qo7s(1935), !ctx.__methods) {
                            __block_LCpqSB(330);
                            {
                                __statement_U_9CRe(1936);
                                ctx.__methods = {};
                            }
                        }
                        {
                            __statement_U_9CRe(1937);
                            ctx.__methods[name] = chainableBehavior;
                        }
                        {
                            __statement_U_9CRe(1938);
                            __extro_wrjjOl(1939, __intro_byTVoB(1939, Object).defineProperty(ctx, name, {
                                get: function () {
                                    __block_LCpqSB(331);
                                    {
                                        __statement_U_9CRe(1940);
                                        __extro_wrjjOl(1941, __intro_byTVoB(1941, chainableBehavior.chainingBehavior).call(this));
                                    }
                                    {
                                        __statement_U_9CRe(1942);
                                        var assert = function assert() {
                                            __block_LCpqSB(332);
                                            {
                                                __statement_U_9CRe(1943);
                                                var old_ssfi = (__expression_G3qo7s(1944), flag(this, 'ssfi'));
                                            }
                                            if (__expression_G3qo7s(1945), (__expression_G3qo7s(1946), old_ssfi) && (__expression_G3qo7s(1947), config.includeStack === false)) {
                                                __block_LCpqSB(333);
                                                {
                                                    __statement_U_9CRe(1948);
                                                    __expression_G3qo7s(1949), flag(this, 'ssfi', assert);
                                                }
                                            }
                                            {
                                                __statement_U_9CRe(1950);
                                                var result = __extro_wrjjOl(1951, __intro_byTVoB(1951, chainableBehavior.method).apply(this, arguments));
                                            }
                                            return __expression_G3qo7s(1952), (__expression_G3qo7s(1955), (__expression_G3qo7s(1956), result) === (__expression_G3qo7s(1957), undefined)) ? (__expression_G3qo7s(1953), this) : (__expression_G3qo7s(1954), result);
                                        };
                                    }
                                    if (__expression_G3qo7s(1958), hasProtoSupport) {
                                        __block_LCpqSB(334);
                                        {
                                            __statement_U_9CRe(1959);
                                            var prototype = assert.__proto__ = __extro_wrjjOl(1960, __intro_byTVoB(1960, Object).create(this));
                                        }
                                        {
                                            __statement_U_9CRe(1961);
                                            prototype.call = call;
                                        }
                                        {
                                            __statement_U_9CRe(1962);
                                            prototype.apply = apply;
                                        }
                                    } else {
                                        __block_LCpqSB(335);
                                        {
                                            __statement_U_9CRe(1963);
                                            var asserterNames = __extro_wrjjOl(1964, __intro_byTVoB(1964, Object).getOwnPropertyNames(ctx));
                                        }
                                        {
                                            __statement_U_9CRe(1965);
                                            __extro_wrjjOl(1966, __intro_byTVoB(1966, asserterNames).forEach(function (asserterName) {
                                                __block_LCpqSB(336);
                                                if (__expression_G3qo7s(1967), !__extro_wrjjOl(1968, __intro_byTVoB(1968, excludeNames).test(asserterName))) {
                                                    __block_LCpqSB(337);
                                                    {
                                                        __statement_U_9CRe(1969);
                                                        var pd = __extro_wrjjOl(1970, __intro_byTVoB(1970, Object).getOwnPropertyDescriptor(ctx, asserterName));
                                                    }
                                                    {
                                                        __statement_U_9CRe(1971);
                                                        __extro_wrjjOl(1972, __intro_byTVoB(1972, Object).defineProperty(assert, asserterName, pd));
                                                    }
                                                }
                                            }));
                                        }
                                    }
                                    {
                                        __statement_U_9CRe(1973);
                                        __expression_G3qo7s(1974), transferFlags(this, assert);
                                    }
                                    return __expression_G3qo7s(1975), assert;
                                },
                                configurable: true
                            }));
                        }
                    };
                }
            },
            {
                '../config': 6,
                './flag': 15,
                './transferFlags': 31
            }
        ],
        12: [
            function (require, module, exports) {
                __block_LCpqSB(338);
                {
                    __statement_U_9CRe(1976);
                    var config = (__expression_G3qo7s(1977), require('../config'));
                }
                {
                    __statement_U_9CRe(1978);
                    var flag = (__expression_G3qo7s(1979), require('./flag'));
                }
                {
                    __statement_U_9CRe(1980);
                    module.exports = function (ctx, name, method) {
                        __block_LCpqSB(339);
                        {
                            __statement_U_9CRe(1981);
                            ctx[name] = function () {
                                __block_LCpqSB(340);
                                {
                                    __statement_U_9CRe(1982);
                                    var old_ssfi = (__expression_G3qo7s(1983), flag(this, 'ssfi'));
                                }
                                if (__expression_G3qo7s(1984), (__expression_G3qo7s(1985), old_ssfi) && (__expression_G3qo7s(1986), config.includeStack === false)) {
                                    __block_LCpqSB(341);
                                    {
                                        __statement_U_9CRe(1987);
                                        __expression_G3qo7s(1988), flag(this, 'ssfi', ctx[name]);
                                    }
                                }
                                {
                                    __statement_U_9CRe(1989);
                                    var result = __extro_wrjjOl(1990, __intro_byTVoB(1990, method).apply(this, arguments));
                                }
                                return __expression_G3qo7s(1991), (__expression_G3qo7s(1994), (__expression_G3qo7s(1995), result) === (__expression_G3qo7s(1996), undefined)) ? (__expression_G3qo7s(1992), this) : (__expression_G3qo7s(1993), result);
                            };
                        }
                    };
                }
            },
            {
                '../config': 6,
                './flag': 15
            }
        ],
        13: [
            function (require, module, exports) {
                __block_LCpqSB(342);
                {
                    __statement_U_9CRe(1997);
                    var config = (__expression_G3qo7s(1998), require('../config'));
                }
                {
                    __statement_U_9CRe(1999);
                    var flag = (__expression_G3qo7s(2000), require('./flag'));
                }
                {
                    __statement_U_9CRe(2001);
                    module.exports = function (ctx, name, getter) {
                        __block_LCpqSB(343);
                        {
                            __statement_U_9CRe(2002);
                            __extro_wrjjOl(2003, __intro_byTVoB(2003, Object).defineProperty(ctx, name, {
                                get: function addProperty() {
                                    __block_LCpqSB(344);
                                    {
                                        __statement_U_9CRe(2004);
                                        var old_ssfi = (__expression_G3qo7s(2005), flag(this, 'ssfi'));
                                    }
                                    if (__expression_G3qo7s(2006), (__expression_G3qo7s(2007), old_ssfi) && (__expression_G3qo7s(2008), config.includeStack === false)) {
                                        __block_LCpqSB(345);
                                        {
                                            __statement_U_9CRe(2009);
                                            __expression_G3qo7s(2010), flag(this, 'ssfi', addProperty);
                                        }
                                    }
                                    {
                                        __statement_U_9CRe(2011);
                                        var result = __extro_wrjjOl(2012, __intro_byTVoB(2012, getter).call(this));
                                    }
                                    return __expression_G3qo7s(2013), (__expression_G3qo7s(2016), (__expression_G3qo7s(2017), result) === (__expression_G3qo7s(2018), undefined)) ? (__expression_G3qo7s(2014), this) : (__expression_G3qo7s(2015), result);
                                },
                                configurable: true
                            }));
                        }
                    };
                }
            },
            {
                '../config': 6,
                './flag': 15
            }
        ],
        14: [
            function (require, module, exports) {
                __block_LCpqSB(346);
                {
                    __statement_U_9CRe(2019);
                    var AssertionError = (__expression_G3qo7s(2020), require('assertion-error'));
                }
                {
                    __statement_U_9CRe(2021);
                    var flag = (__expression_G3qo7s(2022), require('./flag'));
                }
                {
                    __statement_U_9CRe(2023);
                    var type = (__expression_G3qo7s(2024), require('type-detect'));
                }
                {
                    __statement_U_9CRe(2025);
                    module.exports = function (obj, types) {
                        __block_LCpqSB(347);
                        {
                            __statement_U_9CRe(2026);
                            var obj = (__expression_G3qo7s(2027), flag(obj, 'object'));
                        }
                        {
                            __statement_U_9CRe(2028);
                            types = __extro_wrjjOl(2029, __intro_byTVoB(2029, types).map(function (t) {
                                __block_LCpqSB(348);
                                return __expression_G3qo7s(2030), __extro_wrjjOl(2031, __intro_byTVoB(2031, t).toLowerCase());
                            }));
                        }
                        {
                            __statement_U_9CRe(2032);
                            __extro_wrjjOl(2033, __intro_byTVoB(2033, types).sort());
                        }
                        {
                            __statement_U_9CRe(2034);
                            var str = __extro_wrjjOl(2035, __intro_byTVoB(2035, __extro_wrjjOl(2036, __intro_byTVoB(2036, types).map(function (t, index) {
                                    __block_LCpqSB(349);
                                    {
                                        __statement_U_9CRe(2037);
                                        var art = (__expression_G3qo7s(2040), ~__extro_wrjjOl(2041, __intro_byTVoB(2041, [
                                                'a',
                                                'e',
                                                'i',
                                                'o',
                                                'u'
                                            ]).indexOf(__extro_wrjjOl(2042, __intro_byTVoB(2042, t).charAt(0))))) ? (__expression_G3qo7s(2038), 'an') : (__expression_G3qo7s(2039), 'a');
                                    }
                                    {
                                        __statement_U_9CRe(2043);
                                        var or = (__expression_G3qo7s(2046), (__expression_G3qo7s(2047), types.length > 1) && (__expression_G3qo7s(2048), (__expression_G3qo7s(2049), index) === (__expression_G3qo7s(2050), types.length - 1))) ? (__expression_G3qo7s(2044), 'or ') : (__expression_G3qo7s(2045), '');
                                    }
                                    return __expression_G3qo7s(2051), (__expression_G3qo7s(2052), (__expression_G3qo7s(2053), (__expression_G3qo7s(2054), (__expression_G3qo7s(2055), or) + (__expression_G3qo7s(2056), art)) + ' ') + (__expression_G3qo7s(2057), t));
                                }))).join(', '));
                        }
                        if (__expression_G3qo7s(2058), !__extro_wrjjOl(2059, __intro_byTVoB(2059, types).some(function (expected) {
                                __block_LCpqSB(350);
                                return __expression_G3qo7s(2060), (__expression_G3qo7s(2061), (__expression_G3qo7s(2062), type(obj)) === (__expression_G3qo7s(2063), expected));
                            }))) {
                            __block_LCpqSB(351);
                            {
                                __statement_U_9CRe(2064);
                                throw new AssertionError((__expression_G3qo7s(2065), (__expression_G3qo7s(2066), (__expression_G3qo7s(2067), (__expression_G3qo7s(2068), 'object tested must be ' + (__expression_G3qo7s(2069), str)) + ', but ') + (__expression_G3qo7s(2070), type(obj))) + ' given'));
                            }
                        }
                    };
                }
            },
            {
                './flag': 15,
                'assertion-error': 1,
                'type-detect': 38
            }
        ],
        15: [
            function (require, module, exports) {
                __block_LCpqSB(352);
                {
                    __statement_U_9CRe(2071);
                    module.exports = function (obj, key, value) {
                        __block_LCpqSB(353);
                        {
                            __statement_U_9CRe(2072);
                            var flags = (__expression_G3qo7s(2073), obj.__flags || (obj.__flags = __extro_wrjjOl(2074, __intro_byTVoB(2074, Object).create(null))));
                        }
                        if (__expression_G3qo7s(2075), arguments.length === 3) {
                            __block_LCpqSB(354);
                            {
                                __statement_U_9CRe(2076);
                                flags[key] = value;
                            }
                        } else {
                            __block_LCpqSB(355);
                            return __expression_G3qo7s(2077), flags[key];
                        }
                    };
                }
            },
            {}
        ],
        16: [
            function (require, module, exports) {
                __block_LCpqSB(356);
                {
                    __statement_U_9CRe(2078);
                    module.exports = function (obj, args) {
                        __block_LCpqSB(357);
                        return __expression_G3qo7s(2079), (__expression_G3qo7s(2082), args.length > 4) ? (__expression_G3qo7s(2080), args[4]) : (__expression_G3qo7s(2081), obj._obj);
                    };
                }
            },
            {}
        ],
        17: [
            function (require, module, exports) {
                __block_LCpqSB(358);
                {
                    __statement_U_9CRe(2083);
                    module.exports = function getEnumerableProperties(object) {
                        __block_LCpqSB(359);
                        {
                            __statement_U_9CRe(2084);
                            var result = [];
                        }
                        for (var name in object) {
                            __block_LCpqSB(360);
                            {
                                __statement_U_9CRe(2085);
                                __extro_wrjjOl(2086, __intro_byTVoB(2086, result).push(name));
                            }
                        }
                        return __expression_G3qo7s(2087), result;
                    };
                }
            },
            {}
        ],
        18: [
            function (require, module, exports) {
                __block_LCpqSB(361);
                {
                    __statement_U_9CRe(2088);
                    var flag = (__expression_G3qo7s(2089), require('./flag')), getActual = (__expression_G3qo7s(2090), require('./getActual')), inspect = (__expression_G3qo7s(2091), require('./inspect')), objDisplay = (__expression_G3qo7s(2092), require('./objDisplay'));
                }
                {
                    __statement_U_9CRe(2093);
                    module.exports = function (obj, args) {
                        __block_LCpqSB(362);
                        {
                            __statement_U_9CRe(2094);
                            var negate = (__expression_G3qo7s(2095), flag(obj, 'negate')), val = (__expression_G3qo7s(2096), flag(obj, 'object')), expected = args[3], actual = (__expression_G3qo7s(2097), getActual(obj, args)), msg = (__expression_G3qo7s(2100), negate) ? (__expression_G3qo7s(2098), args[2]) : (__expression_G3qo7s(2099), args[1]), flagMsg = (__expression_G3qo7s(2101), flag(obj, 'message'));
                        }
                        if (__expression_G3qo7s(2102), (__expression_G3qo7s(2103), typeof msg) === 'function') {
                            __block_LCpqSB(363);
                            {
                                __statement_U_9CRe(2104);
                                msg = (__expression_G3qo7s(2105), msg());
                            }
                        }
                        {
                            __statement_U_9CRe(2106);
                            msg = (__expression_G3qo7s(2107), (__expression_G3qo7s(2108), msg) || '');
                        }
                        {
                            __statement_U_9CRe(2109);
                            msg = __extro_wrjjOl(2110, __intro_byTVoB(2110, __extro_wrjjOl(2111, __intro_byTVoB(2111, __extro_wrjjOl(2112, __intro_byTVoB(2112, msg).replace(/#{this}/g, (__expression_G3qo7s(2113), objDisplay(val))))).replace(/#{act}/g, (__expression_G3qo7s(2114), objDisplay(actual))))).replace(/#{exp}/g, (__expression_G3qo7s(2115), objDisplay(expected))));
                        }
                        return __expression_G3qo7s(2116), (__expression_G3qo7s(2119), flagMsg) ? (__expression_G3qo7s(2117), (__expression_G3qo7s(2120), (__expression_G3qo7s(2121), (__expression_G3qo7s(2122), flagMsg) + ': ') + (__expression_G3qo7s(2123), msg))) : (__expression_G3qo7s(2118), msg);
                    };
                }
            },
            {
                './flag': 15,
                './getActual': 16,
                './inspect': 25,
                './objDisplay': 26
            }
        ],
        19: [
            function (require, module, exports) {
                __block_LCpqSB(364);
                {
                    __statement_U_9CRe(2124);
                    module.exports = function (func) {
                        __block_LCpqSB(365);
                        if (func.name) {
                            __block_LCpqSB(366);
                            return __expression_G3qo7s(2125), func.name;
                        }
                        {
                            __statement_U_9CRe(2126);
                            var match = __extro_wrjjOl(2127, __intro_byTVoB(2127, /^\s?function ([^(]*)\(/).exec(func));
                        }
                        return __expression_G3qo7s(2128), (__expression_G3qo7s(2131), (__expression_G3qo7s(2132), match) && match[1]) ? (__expression_G3qo7s(2129), match[1]) : (__expression_G3qo7s(2130), '');
                    };
                }
            },
            {}
        ],
        20: [
            function (require, module, exports) {
                __block_LCpqSB(367);
                {
                    __statement_U_9CRe(2133);
                    var hasProperty = (__expression_G3qo7s(2134), require('./hasProperty'));
                }
                {
                    __statement_U_9CRe(2135);
                    module.exports = function getPathInfo(path, obj) {
                        __block_LCpqSB(368);
                        {
                            __statement_U_9CRe(2136);
                            var parsed = (__expression_G3qo7s(2137), parsePath(path)), last = parsed[__expression_G3qo7s(2138), parsed.length - 1];
                        }
                        {
                            __statement_U_9CRe(2139);
                            var info = {
                                    parent: (__expression_G3qo7s(2142), parsed.length > 1) ? (__expression_G3qo7s(2140), (__expression_G3qo7s(2143), _getPathValue(parsed, obj, (__expression_G3qo7s(2144), parsed.length - 1)))) : (__expression_G3qo7s(2141), obj),
                                    name: (__expression_G3qo7s(2145), last.p || last.i),
                                    value: (__expression_G3qo7s(2146), _getPathValue(parsed, obj))
                                };
                        }
                        {
                            __statement_U_9CRe(2147);
                            info.exists = (__expression_G3qo7s(2148), hasProperty(info.name, info.parent));
                        }
                        return __expression_G3qo7s(2149), info;
                    };
                }
                function parsePath(path) {
                    __block_LCpqSB(369);
                    {
                        __statement_U_9CRe(2150);
                        var str = __extro_wrjjOl(2151, __intro_byTVoB(2151, path).replace(/([^\\])\[/g, '$1.[')), parts = __extro_wrjjOl(2152, __intro_byTVoB(2152, str).match(/(\\\.|[^.]+?)+/g));
                    }
                    return __expression_G3qo7s(2153), __extro_wrjjOl(2154, __intro_byTVoB(2154, parts).map(function (value) {
                        __block_LCpqSB(370);
                        {
                            __statement_U_9CRe(2155);
                            var re = /^\[(\d+)\]$/, mArr = __extro_wrjjOl(2156, __intro_byTVoB(2156, re).exec(value));
                        }
                        if (__expression_G3qo7s(2157), mArr) {
                            __block_LCpqSB(371);
                            return __expression_G3qo7s(2158), {
                                i: (__expression_G3qo7s(2159), parseFloat(mArr[1]))
                            };
                        } else {
                            __block_LCpqSB(372);
                            return __expression_G3qo7s(2160), {
                                p: __extro_wrjjOl(2161, __intro_byTVoB(2161, value).replace(/\\([.\[\]])/g, '$1'))
                            };
                        }
                    }));
                }
                function _getPathValue(parsed, obj, index) {
                    __block_LCpqSB(373);
                    {
                        __statement_U_9CRe(2162);
                        var tmp = obj, res;
                    }
                    {
                        __statement_U_9CRe(2163);
                        index = (__expression_G3qo7s(2166), (__expression_G3qo7s(2167), index) === (__expression_G3qo7s(2168), undefined)) ? (__expression_G3qo7s(2164), parsed.length) : (__expression_G3qo7s(2165), index);
                    }
                    for (var i = 0, l = index; __expression_G3qo7s(2169), (__expression_G3qo7s(2170), i) < (__expression_G3qo7s(2171), l); __expression_G3qo7s(2172), i++) {
                        __block_LCpqSB(374);
                        {
                            __statement_U_9CRe(2173);
                            var part = parsed[i];
                        }
                        if (__expression_G3qo7s(2174), tmp) {
                            __block_LCpqSB(375);
                            if (__expression_G3qo7s(2175), 'undefined' !== (__expression_G3qo7s(2176), typeof part.p)) {
                                __block_LCpqSB(376);
                                {
                                    __statement_U_9CRe(2177);
                                    tmp = tmp[part.p];
                                }
                            } else if (__expression_G3qo7s(2178), 'undefined' !== (__expression_G3qo7s(2179), typeof part.i)) {
                                __block_LCpqSB(377);
                                {
                                    __statement_U_9CRe(2180);
                                    tmp = tmp[part.i];
                                }
                            }
                            if (__expression_G3qo7s(2181), (__expression_G3qo7s(2182), i) == (__expression_G3qo7s(2183), (__expression_G3qo7s(2184), l) - 1)) {
                                __block_LCpqSB(378);
                                {
                                    __statement_U_9CRe(2185);
                                    res = tmp;
                                }
                            }
                        } else {
                            __block_LCpqSB(379);
                            {
                                __statement_U_9CRe(2186);
                                res = undefined;
                            }
                        }
                    }
                    return __expression_G3qo7s(2187), res;
                }
            },
            {
                './hasProperty': 23
            }
        ],
        21: [
            function (require, module, exports) {
                __block_LCpqSB(380);
                {
                    __statement_U_9CRe(2188);
                    var getPathInfo = (__expression_G3qo7s(2189), require('./getPathInfo'));
                }
                {
                    __statement_U_9CRe(2190);
                    module.exports = function (path, obj) {
                        __block_LCpqSB(381);
                        {
                            __statement_U_9CRe(2191);
                            var info = (__expression_G3qo7s(2192), getPathInfo(path, obj));
                        }
                        return __expression_G3qo7s(2193), info.value;
                    };
                }
            },
            {
                './getPathInfo': 20
            }
        ],
        22: [
            function (require, module, exports) {
                __block_LCpqSB(382);
                {
                    __statement_U_9CRe(2194);
                    module.exports = function getProperties(object) {
                        __block_LCpqSB(383);
                        {
                            __statement_U_9CRe(2195);
                            var result = __extro_wrjjOl(2196, __intro_byTVoB(2196, Object).getOwnPropertyNames(object));
                        }
                        function addProperty(property) {
                            __block_LCpqSB(384);
                            if (__expression_G3qo7s(2197), __extro_wrjjOl(2198, __intro_byTVoB(2198, result).indexOf(property)) === (__expression_G3qo7s(2199), -1)) {
                                __block_LCpqSB(385);
                                {
                                    __statement_U_9CRe(2200);
                                    __extro_wrjjOl(2201, __intro_byTVoB(2201, result).push(property));
                                }
                            }
                        }
                        {
                            __statement_U_9CRe(2202);
                            var proto = __extro_wrjjOl(2203, __intro_byTVoB(2203, Object).getPrototypeOf(object));
                        }
                        while (__expression_G3qo7s(2204), (__expression_G3qo7s(2205), proto) !== null) {
                            __block_LCpqSB(386);
                            {
                                __statement_U_9CRe(2206);
                                __extro_wrjjOl(2207, __intro_byTVoB(2207, __extro_wrjjOl(2208, __intro_byTVoB(2208, Object).getOwnPropertyNames(proto))).forEach(addProperty));
                            }
                            {
                                __statement_U_9CRe(2209);
                                proto = __extro_wrjjOl(2210, __intro_byTVoB(2210, Object).getPrototypeOf(proto));
                            }
                        }
                        return __expression_G3qo7s(2211), result;
                    };
                }
            },
            {}
        ],
        23: [
            function (require, module, exports) {
                __block_LCpqSB(387);
                {
                    __statement_U_9CRe(2212);
                    var type = (__expression_G3qo7s(2213), require('type-detect'));
                }
                {
                    __statement_U_9CRe(2214);
                    var literals = {
                            'number': Number,
                            'string': String
                        };
                }
                {
                    __statement_U_9CRe(2215);
                    module.exports = function hasProperty(name, obj) {
                        __block_LCpqSB(388);
                        {
                            __statement_U_9CRe(2216);
                            var ot = (__expression_G3qo7s(2217), type(obj));
                        }
                        if (__expression_G3qo7s(2218), (__expression_G3qo7s(2219), (__expression_G3qo7s(2220), ot) === 'null') || (__expression_G3qo7s(2221), (__expression_G3qo7s(2222), ot) === 'undefined')) {
                            __block_LCpqSB(389);
                            return __expression_G3qo7s(2223), false;
                        }
                        if (__expression_G3qo7s(2224), literals[ot] && (__expression_G3qo7s(2225), (__expression_G3qo7s(2226), typeof obj) !== 'object')) {
                            __block_LCpqSB(390);
                            {
                                __statement_U_9CRe(2227);
                                obj = new literals[ot](obj);
                            }
                        }
                        return __expression_G3qo7s(2228), (__expression_G3qo7s(2229), ((__expression_G3qo7s(2230), name) in (__expression_G3qo7s(2231), obj)));
                    };
                }
            },
            {
                'type-detect': 38
            }
        ],
        24: [
            function (require, module, exports) {
                __block_LCpqSB(391);
                {
                    __statement_U_9CRe(2232);
                    var exports = module.exports = {};
                }
                {
                    __statement_U_9CRe(2233);
                    exports.test = (__expression_G3qo7s(2234), require('./test'));
                }
                {
                    __statement_U_9CRe(2235);
                    exports.type = (__expression_G3qo7s(2236), require('type-detect'));
                }
                {
                    __statement_U_9CRe(2237);
                    exports.expectTypes = (__expression_G3qo7s(2238), require('./expectTypes'));
                }
                {
                    __statement_U_9CRe(2239);
                    exports.getMessage = (__expression_G3qo7s(2240), require('./getMessage'));
                }
                {
                    __statement_U_9CRe(2241);
                    exports.getActual = (__expression_G3qo7s(2242), require('./getActual'));
                }
                {
                    __statement_U_9CRe(2243);
                    exports.inspect = (__expression_G3qo7s(2244), require('./inspect'));
                }
                {
                    __statement_U_9CRe(2245);
                    exports.objDisplay = (__expression_G3qo7s(2246), require('./objDisplay'));
                }
                {
                    __statement_U_9CRe(2247);
                    exports.flag = (__expression_G3qo7s(2248), require('./flag'));
                }
                {
                    __statement_U_9CRe(2249);
                    exports.transferFlags = (__expression_G3qo7s(2250), require('./transferFlags'));
                }
                {
                    __statement_U_9CRe(2251);
                    exports.eql = (__expression_G3qo7s(2252), require('deep-eql'));
                }
                {
                    __statement_U_9CRe(2253);
                    exports.getPathValue = (__expression_G3qo7s(2254), require('./getPathValue'));
                }
                {
                    __statement_U_9CRe(2255);
                    exports.getPathInfo = (__expression_G3qo7s(2256), require('./getPathInfo'));
                }
                {
                    __statement_U_9CRe(2257);
                    exports.hasProperty = (__expression_G3qo7s(2258), require('./hasProperty'));
                }
                {
                    __statement_U_9CRe(2259);
                    exports.getName = (__expression_G3qo7s(2260), require('./getName'));
                }
                {
                    __statement_U_9CRe(2261);
                    exports.addProperty = (__expression_G3qo7s(2262), require('./addProperty'));
                }
                {
                    __statement_U_9CRe(2263);
                    exports.addMethod = (__expression_G3qo7s(2264), require('./addMethod'));
                }
                {
                    __statement_U_9CRe(2265);
                    exports.overwriteProperty = (__expression_G3qo7s(2266), require('./overwriteProperty'));
                }
                {
                    __statement_U_9CRe(2267);
                    exports.overwriteMethod = (__expression_G3qo7s(2268), require('./overwriteMethod'));
                }
                {
                    __statement_U_9CRe(2269);
                    exports.addChainableMethod = (__expression_G3qo7s(2270), require('./addChainableMethod'));
                }
                {
                    __statement_U_9CRe(2271);
                    exports.overwriteChainableMethod = (__expression_G3qo7s(2272), require('./overwriteChainableMethod'));
                }
            },
            {
                './addChainableMethod': 11,
                './addMethod': 12,
                './addProperty': 13,
                './expectTypes': 14,
                './flag': 15,
                './getActual': 16,
                './getMessage': 18,
                './getName': 19,
                './getPathInfo': 20,
                './getPathValue': 21,
                './hasProperty': 23,
                './inspect': 25,
                './objDisplay': 26,
                './overwriteChainableMethod': 27,
                './overwriteMethod': 28,
                './overwriteProperty': 29,
                './test': 30,
                './transferFlags': 31,
                'deep-eql': 32,
                'type-detect': 38
            }
        ],
        25: [
            function (require, module, exports) {
                __block_LCpqSB(392);
                {
                    __statement_U_9CRe(2273);
                    var getName = (__expression_G3qo7s(2274), require('./getName'));
                }
                {
                    __statement_U_9CRe(2275);
                    var getProperties = (__expression_G3qo7s(2276), require('./getProperties'));
                }
                {
                    __statement_U_9CRe(2277);
                    var getEnumerableProperties = (__expression_G3qo7s(2278), require('./getEnumerableProperties'));
                }
                {
                    __statement_U_9CRe(2279);
                    module.exports = inspect;
                }
                function inspect(obj, showHidden, depth, colors) {
                    __block_LCpqSB(393);
                    {
                        __statement_U_9CRe(2280);
                        var ctx = {
                                showHidden: showHidden,
                                seen: [],
                                stylize: function (str) {
                                    __block_LCpqSB(394);
                                    return __expression_G3qo7s(2281), str;
                                }
                            };
                    }
                    return __expression_G3qo7s(2282), (__expression_G3qo7s(2283), formatValue(ctx, obj, (__expression_G3qo7s(2286), (__expression_G3qo7s(2287), typeof depth) === 'undefined') ? (__expression_G3qo7s(2284), 2) : (__expression_G3qo7s(2285), depth)));
                }
                {
                    __statement_U_9CRe(2288);
                    var isDOMElement = function (object) {
                        __block_LCpqSB(395);
                        if (__expression_G3qo7s(2289), (__expression_G3qo7s(2290), typeof HTMLElement) === 'object') {
                            __block_LCpqSB(396);
                            return __expression_G3qo7s(2291), (__expression_G3qo7s(2292), (__expression_G3qo7s(2293), object) instanceof (__expression_G3qo7s(2294), HTMLElement));
                        } else {
                            __block_LCpqSB(397);
                            return __expression_G3qo7s(2295), (__expression_G3qo7s(2296), (__expression_G3qo7s(2297), (__expression_G3qo7s(2298), (__expression_G3qo7s(2299), object) && (__expression_G3qo7s(2300), (__expression_G3qo7s(2301), typeof object) === 'object')) && (__expression_G3qo7s(2302), object.nodeType === 1)) && (__expression_G3qo7s(2303), (__expression_G3qo7s(2304), typeof object.nodeName) === 'string'));
                        }
                    };
                }
                function formatValue(ctx, value, recurseTimes) {
                    __block_LCpqSB(398);
                    if (__expression_G3qo7s(2305), (__expression_G3qo7s(2306), (__expression_G3qo7s(2307), (__expression_G3qo7s(2308), value) && (__expression_G3qo7s(2309), (__expression_G3qo7s(2310), typeof value.inspect) === 'function')) && (__expression_G3qo7s(2311), value.inspect !== exports.inspect)) && (__expression_G3qo7s(2312), !(__expression_G3qo7s(2313), value.constructor && (__expression_G3qo7s(2314), value.constructor.prototype === (__expression_G3qo7s(2315), value))))) {
                        __block_LCpqSB(399);
                        {
                            __statement_U_9CRe(2316);
                            var ret = __extro_wrjjOl(2317, __intro_byTVoB(2317, value).inspect(recurseTimes));
                        }
                        if (__expression_G3qo7s(2318), (__expression_G3qo7s(2319), typeof ret) !== 'string') {
                            __block_LCpqSB(400);
                            {
                                __statement_U_9CRe(2320);
                                ret = (__expression_G3qo7s(2321), formatValue(ctx, ret, recurseTimes));
                            }
                        }
                        return __expression_G3qo7s(2322), ret;
                    }
                    {
                        __statement_U_9CRe(2323);
                        var primitive = (__expression_G3qo7s(2324), formatPrimitive(ctx, value));
                    }
                    if (__expression_G3qo7s(2325), primitive) {
                        __block_LCpqSB(401);
                        return __expression_G3qo7s(2326), primitive;
                    }
                    if (__expression_G3qo7s(2327), isDOMElement(value)) {
                        __block_LCpqSB(402);
                        if (__expression_G3qo7s(2328), ('outerHTML' in (__expression_G3qo7s(2329), value))) {
                            __block_LCpqSB(403);
                            return __expression_G3qo7s(2330), value.outerHTML;
                        } else {
                            __block_LCpqSB(404);
                            try {
                                __block_LCpqSB(405);
                                if (document.xmlVersion) {
                                    __block_LCpqSB(406);
                                    {
                                        __statement_U_9CRe(2331);
                                        var xmlSerializer = new XMLSerializer();
                                    }
                                    return __expression_G3qo7s(2332), __extro_wrjjOl(2333, __intro_byTVoB(2333, xmlSerializer).serializeToString(value));
                                } else {
                                    __block_LCpqSB(407);
                                    {
                                        __statement_U_9CRe(2334);
                                        var ns = 'http://www.w3.org/1999/xhtml';
                                    }
                                    {
                                        __statement_U_9CRe(2335);
                                        var container = __extro_wrjjOl(2336, __intro_byTVoB(2336, document).createElementNS(ns, '_'));
                                    }
                                    {
                                        __statement_U_9CRe(2337);
                                        __extro_wrjjOl(2338, __intro_byTVoB(2338, container).appendChild(__extro_wrjjOl(2339, __intro_byTVoB(2339, value).cloneNode(false))));
                                    }
                                    {
                                        __statement_U_9CRe(2340);
                                        html = __extro_wrjjOl(2341, __intro_byTVoB(2341, container.innerHTML).replace('><', (__expression_G3qo7s(2342), (__expression_G3qo7s(2343), '>' + value.innerHTML) + '<')));
                                    }
                                    {
                                        __statement_U_9CRe(2344);
                                        container.innerHTML = '';
                                    }
                                    return __expression_G3qo7s(2345), html;
                                }
                            } catch (err) {
                                __block_LCpqSB(408);
                            }
                        }
                    }
                    {
                        __statement_U_9CRe(2346);
                        var visibleKeys = (__expression_G3qo7s(2347), getEnumerableProperties(value));
                    }
                    {
                        __statement_U_9CRe(2348);
                        var keys = ctx.showHidden ? (__expression_G3qo7s(2349), (__expression_G3qo7s(2351), getProperties(value))) : (__expression_G3qo7s(2350), visibleKeys);
                    }
                    if (__expression_G3qo7s(2352), (__expression_G3qo7s(2353), keys.length === 0) || (__expression_G3qo7s(2354), (__expression_G3qo7s(2355), isError(value)) && (__expression_G3qo7s(2356), (__expression_G3qo7s(2357), (__expression_G3qo7s(2358), keys.length === 1) && (__expression_G3qo7s(2359), keys[0] === 'stack')) || (__expression_G3qo7s(2360), (__expression_G3qo7s(2361), (__expression_G3qo7s(2362), keys.length === 2) && (__expression_G3qo7s(2363), keys[0] === 'description')) && (__expression_G3qo7s(2364), keys[1] === 'stack'))))) {
                        __block_LCpqSB(409);
                        if (__expression_G3qo7s(2365), (__expression_G3qo7s(2366), typeof value) === 'function') {
                            __block_LCpqSB(410);
                            {
                                __statement_U_9CRe(2367);
                                var name = (__expression_G3qo7s(2368), getName(value));
                            }
                            {
                                __statement_U_9CRe(2369);
                                var nameSuffix = (__expression_G3qo7s(2372), name) ? (__expression_G3qo7s(2370), (__expression_G3qo7s(2373), ': ' + (__expression_G3qo7s(2374), name))) : (__expression_G3qo7s(2371), '');
                            }
                            return __expression_G3qo7s(2375), __extro_wrjjOl(2376, __intro_byTVoB(2376, ctx).stylize((__expression_G3qo7s(2377), (__expression_G3qo7s(2378), '[Function' + (__expression_G3qo7s(2379), nameSuffix)) + ']'), 'special'));
                        }
                        if (__expression_G3qo7s(2380), isRegExp(value)) {
                            __block_LCpqSB(411);
                            return __expression_G3qo7s(2381), __extro_wrjjOl(2382, __intro_byTVoB(2382, ctx).stylize(__extro_wrjjOl(2383, __intro_byTVoB(2383, RegExp.prototype.toString).call(value)), 'regexp'));
                        }
                        if (__expression_G3qo7s(2384), isDate(value)) {
                            __block_LCpqSB(412);
                            return __expression_G3qo7s(2385), __extro_wrjjOl(2386, __intro_byTVoB(2386, ctx).stylize(__extro_wrjjOl(2387, __intro_byTVoB(2387, Date.prototype.toUTCString).call(value)), 'date'));
                        }
                        if (__expression_G3qo7s(2388), isError(value)) {
                            __block_LCpqSB(413);
                            return __expression_G3qo7s(2389), (__expression_G3qo7s(2390), formatError(value));
                        }
                    }
                    {
                        __statement_U_9CRe(2391);
                        var base = '', array = false, braces = [
                                '{',
                                '}'
                            ];
                    }
                    if (__expression_G3qo7s(2392), isArray(value)) {
                        __block_LCpqSB(414);
                        {
                            __statement_U_9CRe(2393);
                            array = true;
                        }
                        {
                            __statement_U_9CRe(2394);
                            braces = [
                                '[',
                                ']'
                            ];
                        }
                    }
                    if (__expression_G3qo7s(2395), (__expression_G3qo7s(2396), typeof value) === 'function') {
                        __block_LCpqSB(415);
                        {
                            __statement_U_9CRe(2397);
                            var name = (__expression_G3qo7s(2398), getName(value));
                        }
                        {
                            __statement_U_9CRe(2399);
                            var nameSuffix = (__expression_G3qo7s(2402), name) ? (__expression_G3qo7s(2400), (__expression_G3qo7s(2403), ': ' + (__expression_G3qo7s(2404), name))) : (__expression_G3qo7s(2401), '');
                        }
                        {
                            __statement_U_9CRe(2405);
                            base = (__expression_G3qo7s(2406), (__expression_G3qo7s(2407), ' [Function' + (__expression_G3qo7s(2408), nameSuffix)) + ']');
                        }
                    }
                    if (__expression_G3qo7s(2409), isRegExp(value)) {
                        __block_LCpqSB(416);
                        {
                            __statement_U_9CRe(2410);
                            base = (__expression_G3qo7s(2411), ' ' + __extro_wrjjOl(2412, __intro_byTVoB(2412, RegExp.prototype.toString).call(value)));
                        }
                    }
                    if (__expression_G3qo7s(2413), isDate(value)) {
                        __block_LCpqSB(417);
                        {
                            __statement_U_9CRe(2414);
                            base = (__expression_G3qo7s(2415), ' ' + __extro_wrjjOl(2416, __intro_byTVoB(2416, Date.prototype.toUTCString).call(value)));
                        }
                    }
                    if (__expression_G3qo7s(2417), isError(value)) {
                        __block_LCpqSB(418);
                        return __expression_G3qo7s(2418), (__expression_G3qo7s(2419), formatError(value));
                    }
                    if (__expression_G3qo7s(2420), (__expression_G3qo7s(2421), keys.length === 0) && (__expression_G3qo7s(2422), (__expression_G3qo7s(2423), !(__expression_G3qo7s(2424), array)) || (__expression_G3qo7s(2425), value.length == 0))) {
                        __block_LCpqSB(419);
                        return __expression_G3qo7s(2426), (__expression_G3qo7s(2427), (__expression_G3qo7s(2428), braces[0] + (__expression_G3qo7s(2429), base)) + braces[1]);
                    }
                    if (__expression_G3qo7s(2430), (__expression_G3qo7s(2431), recurseTimes) < 0) {
                        __block_LCpqSB(420);
                        if (__expression_G3qo7s(2432), isRegExp(value)) {
                            __block_LCpqSB(421);
                            return __expression_G3qo7s(2433), __extro_wrjjOl(2434, __intro_byTVoB(2434, ctx).stylize(__extro_wrjjOl(2435, __intro_byTVoB(2435, RegExp.prototype.toString).call(value)), 'regexp'));
                        } else {
                            __block_LCpqSB(422);
                            return __expression_G3qo7s(2436), __extro_wrjjOl(2437, __intro_byTVoB(2437, ctx).stylize('[Object]', 'special'));
                        }
                    }
                    {
                        __statement_U_9CRe(2438);
                        __extro_wrjjOl(2439, __intro_byTVoB(2439, ctx.seen).push(value));
                    }
                    {
                        __statement_U_9CRe(2440);
                        var output;
                    }
                    if (__expression_G3qo7s(2441), array) {
                        __block_LCpqSB(423);
                        {
                            __statement_U_9CRe(2442);
                            output = (__expression_G3qo7s(2443), formatArray(ctx, value, recurseTimes, visibleKeys, keys));
                        }
                    } else {
                        __block_LCpqSB(424);
                        {
                            __statement_U_9CRe(2444);
                            output = __extro_wrjjOl(2445, __intro_byTVoB(2445, keys).map(function (key) {
                                __block_LCpqSB(425);
                                return __expression_G3qo7s(2446), (__expression_G3qo7s(2447), formatProperty(ctx, value, recurseTimes, visibleKeys, key, array));
                            }));
                        }
                    }
                    {
                        __statement_U_9CRe(2448);
                        __extro_wrjjOl(2449, __intro_byTVoB(2449, ctx.seen).pop());
                    }
                    return __expression_G3qo7s(2450), (__expression_G3qo7s(2451), reduceToSingleString(output, base, braces));
                }
                function formatPrimitive(ctx, value) {
                    __block_LCpqSB(426);
                    switch (__expression_G3qo7s(2452), typeof value) {
                    case 'undefined': {
                            __block_LCpqSB(427);
                            return __expression_G3qo7s(2453), __extro_wrjjOl(2454, __intro_byTVoB(2454, ctx).stylize('undefined', 'undefined'));
                        }
                    case 'string': {
                            __block_LCpqSB(428);
                            {
                                __statement_U_9CRe(2455);
                                var simple = (__expression_G3qo7s(2456), (__expression_G3qo7s(2457), '\'' + __extro_wrjjOl(2458, __intro_byTVoB(2458, __extro_wrjjOl(2459, __intro_byTVoB(2459, __extro_wrjjOl(2460, __intro_byTVoB(2460, __extro_wrjjOl(2461, __intro_byTVoB(2461, JSON).stringify(value))).replace(/^"|"$/g, ''))).replace(/'/g, '\\\''))).replace(/\\"/g, '"'))) + '\'');
                            }
                            return __expression_G3qo7s(2462), __extro_wrjjOl(2463, __intro_byTVoB(2463, ctx).stylize(simple, 'string'));
                        }
                    case 'number': {
                            __block_LCpqSB(429);
                            if (__expression_G3qo7s(2464), (__expression_G3qo7s(2465), (__expression_G3qo7s(2466), value) === 0) && (__expression_G3qo7s(2467), (__expression_G3qo7s(2468), 1 / (__expression_G3qo7s(2469), value)) === (__expression_G3qo7s(2470), -(__expression_G3qo7s(2471), Infinity)))) {
                                __block_LCpqSB(430);
                                return __expression_G3qo7s(2472), __extro_wrjjOl(2473, __intro_byTVoB(2473, ctx).stylize('-0', 'number'));
                            }
                            return __expression_G3qo7s(2474), __extro_wrjjOl(2475, __intro_byTVoB(2475, ctx).stylize((__expression_G3qo7s(2476), '' + (__expression_G3qo7s(2477), value)), 'number'));
                        }
                    case 'boolean': {
                            __block_LCpqSB(431);
                            return __expression_G3qo7s(2478), __extro_wrjjOl(2479, __intro_byTVoB(2479, ctx).stylize((__expression_G3qo7s(2480), '' + (__expression_G3qo7s(2481), value)), 'boolean'));
                        }
                    }
                    if (__expression_G3qo7s(2482), (__expression_G3qo7s(2483), value) === null) {
                        __block_LCpqSB(432);
                        return __expression_G3qo7s(2484), __extro_wrjjOl(2485, __intro_byTVoB(2485, ctx).stylize('null', 'null'));
                    }
                }
                function formatError(value) {
                    __block_LCpqSB(433);
                    return __expression_G3qo7s(2486), (__expression_G3qo7s(2487), (__expression_G3qo7s(2488), '[' + __extro_wrjjOl(2489, __intro_byTVoB(2489, Error.prototype.toString).call(value))) + ']');
                }
                function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
                    __block_LCpqSB(434);
                    {
                        __statement_U_9CRe(2490);
                        var output = [];
                    }
                    for (var i = 0, l = value.length; __expression_G3qo7s(2491), (__expression_G3qo7s(2492), i) < (__expression_G3qo7s(2493), l); __expression_G3qo7s(2494), ++i) {
                        __block_LCpqSB(435);
                        if (__extro_wrjjOl(2495, __intro_byTVoB(2495, Object.prototype.hasOwnProperty).call(value, (__expression_G3qo7s(2496), String(i))))) {
                            __block_LCpqSB(436);
                            {
                                __statement_U_9CRe(2497);
                                __extro_wrjjOl(2498, __intro_byTVoB(2498, output).push((__expression_G3qo7s(2499), formatProperty(ctx, value, recurseTimes, visibleKeys, (__expression_G3qo7s(2500), String(i)), true))));
                            }
                        } else {
                            __block_LCpqSB(437);
                            {
                                __statement_U_9CRe(2501);
                                __extro_wrjjOl(2502, __intro_byTVoB(2502, output).push(''));
                            }
                        }
                    }
                    {
                        __statement_U_9CRe(2503);
                        __extro_wrjjOl(2504, __intro_byTVoB(2504, keys).forEach(function (key) {
                            __block_LCpqSB(438);
                            if (__expression_G3qo7s(2505), !__extro_wrjjOl(2506, __intro_byTVoB(2506, key).match(/^\d+$/))) {
                                __block_LCpqSB(439);
                                {
                                    __statement_U_9CRe(2507);
                                    __extro_wrjjOl(2508, __intro_byTVoB(2508, output).push((__expression_G3qo7s(2509), formatProperty(ctx, value, recurseTimes, visibleKeys, key, true))));
                                }
                            }
                        }));
                    }
                    return __expression_G3qo7s(2510), output;
                }
                function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
                    __block_LCpqSB(440);
                    {
                        __statement_U_9CRe(2511);
                        var name, str;
                    }
                    if (value.__lookupGetter__) {
                        __block_LCpqSB(441);
                        if (__extro_wrjjOl(2512, __intro_byTVoB(2512, value).__lookupGetter__(key))) {
                            __block_LCpqSB(442);
                            if (__extro_wrjjOl(2513, __intro_byTVoB(2513, value).__lookupSetter__(key))) {
                                __block_LCpqSB(443);
                                {
                                    __statement_U_9CRe(2514);
                                    str = __extro_wrjjOl(2515, __intro_byTVoB(2515, ctx).stylize('[Getter/Setter]', 'special'));
                                }
                            } else {
                                __block_LCpqSB(444);
                                {
                                    __statement_U_9CRe(2516);
                                    str = __extro_wrjjOl(2517, __intro_byTVoB(2517, ctx).stylize('[Getter]', 'special'));
                                }
                            }
                        } else {
                            __block_LCpqSB(445);
                            if (__extro_wrjjOl(2518, __intro_byTVoB(2518, value).__lookupSetter__(key))) {
                                __block_LCpqSB(446);
                                {
                                    __statement_U_9CRe(2519);
                                    str = __extro_wrjjOl(2520, __intro_byTVoB(2520, ctx).stylize('[Setter]', 'special'));
                                }
                            }
                        }
                    }
                    if (__expression_G3qo7s(2521), __extro_wrjjOl(2522, __intro_byTVoB(2522, visibleKeys).indexOf(key)) < 0) {
                        __block_LCpqSB(447);
                        {
                            __statement_U_9CRe(2523);
                            name = (__expression_G3qo7s(2524), (__expression_G3qo7s(2525), '[' + (__expression_G3qo7s(2526), key)) + ']');
                        }
                    }
                    if (__expression_G3qo7s(2527), !(__expression_G3qo7s(2528), str)) {
                        __block_LCpqSB(448);
                        if (__expression_G3qo7s(2529), __extro_wrjjOl(2530, __intro_byTVoB(2530, ctx.seen).indexOf(value[key])) < 0) {
                            __block_LCpqSB(449);
                            if (__expression_G3qo7s(2531), (__expression_G3qo7s(2532), recurseTimes) === null) {
                                __block_LCpqSB(450);
                                {
                                    __statement_U_9CRe(2533);
                                    str = (__expression_G3qo7s(2534), formatValue(ctx, value[key], null));
                                }
                            } else {
                                __block_LCpqSB(451);
                                {
                                    __statement_U_9CRe(2535);
                                    str = (__expression_G3qo7s(2536), formatValue(ctx, value[key], (__expression_G3qo7s(2537), (__expression_G3qo7s(2538), recurseTimes) - 1)));
                                }
                            }
                            if (__expression_G3qo7s(2539), __extro_wrjjOl(2540, __intro_byTVoB(2540, str).indexOf('\n')) > (__expression_G3qo7s(2541), -1)) {
                                __block_LCpqSB(452);
                                if (__expression_G3qo7s(2542), array) {
                                    __block_LCpqSB(453);
                                    {
                                        __statement_U_9CRe(2543);
                                        str = __extro_wrjjOl(2544, __intro_byTVoB(2544, __extro_wrjjOl(2545, __intro_byTVoB(2545, __extro_wrjjOl(2546, __intro_byTVoB(2546, __extro_wrjjOl(2547, __intro_byTVoB(2547, str).split('\n'))).map(function (line) {
                                            __block_LCpqSB(454);
                                            return __expression_G3qo7s(2548), (__expression_G3qo7s(2549), '  ' + (__expression_G3qo7s(2550), line));
                                        }))).join('\n'))).substr(2));
                                    }
                                } else {
                                    __block_LCpqSB(455);
                                    {
                                        __statement_U_9CRe(2551);
                                        str = (__expression_G3qo7s(2552), '\n' + __extro_wrjjOl(2553, __intro_byTVoB(2553, __extro_wrjjOl(2554, __intro_byTVoB(2554, __extro_wrjjOl(2555, __intro_byTVoB(2555, str).split('\n'))).map(function (line) {
                                            __block_LCpqSB(456);
                                            return __expression_G3qo7s(2556), (__expression_G3qo7s(2557), '   ' + (__expression_G3qo7s(2558), line));
                                        }))).join('\n')));
                                    }
                                }
                            }
                        } else {
                            __block_LCpqSB(457);
                            {
                                __statement_U_9CRe(2559);
                                str = __extro_wrjjOl(2560, __intro_byTVoB(2560, ctx).stylize('[Circular]', 'special'));
                            }
                        }
                    }
                    if (__expression_G3qo7s(2561), (__expression_G3qo7s(2562), typeof name) === 'undefined') {
                        __block_LCpqSB(458);
                        if (__expression_G3qo7s(2563), (__expression_G3qo7s(2564), array) && __extro_wrjjOl(2565, __intro_byTVoB(2565, key).match(/^\d+$/))) {
                            __block_LCpqSB(459);
                            return __expression_G3qo7s(2566), str;
                        }
                        {
                            __statement_U_9CRe(2567);
                            name = __extro_wrjjOl(2568, __intro_byTVoB(2568, JSON).stringify((__expression_G3qo7s(2569), '' + (__expression_G3qo7s(2570), key))));
                        }
                        if (__extro_wrjjOl(2571, __intro_byTVoB(2571, name).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/))) {
                            __block_LCpqSB(460);
                            {
                                __statement_U_9CRe(2572);
                                name = __extro_wrjjOl(2573, __intro_byTVoB(2573, name).substr(1, (__expression_G3qo7s(2574), name.length - 2)));
                            }
                            {
                                __statement_U_9CRe(2575);
                                name = __extro_wrjjOl(2576, __intro_byTVoB(2576, ctx).stylize(name, 'name'));
                            }
                        } else {
                            __block_LCpqSB(461);
                            {
                                __statement_U_9CRe(2577);
                                name = __extro_wrjjOl(2578, __intro_byTVoB(2578, __extro_wrjjOl(2579, __intro_byTVoB(2579, __extro_wrjjOl(2580, __intro_byTVoB(2580, name).replace(/'/g, '\\\''))).replace(/\\"/g, '"'))).replace(/(^"|"$)/g, '\''));
                            }
                            {
                                __statement_U_9CRe(2581);
                                name = __extro_wrjjOl(2582, __intro_byTVoB(2582, ctx).stylize(name, 'string'));
                            }
                        }
                    }
                    return __expression_G3qo7s(2583), (__expression_G3qo7s(2584), (__expression_G3qo7s(2585), (__expression_G3qo7s(2586), name) + ': ') + (__expression_G3qo7s(2587), str));
                }
                function reduceToSingleString(output, base, braces) {
                    __block_LCpqSB(462);
                    {
                        __statement_U_9CRe(2588);
                        var numLinesEst = 0;
                    }
                    {
                        __statement_U_9CRe(2589);
                        var length = __extro_wrjjOl(2590, __intro_byTVoB(2590, output).reduce(function (prev, cur) {
                                __block_LCpqSB(463);
                                {
                                    __statement_U_9CRe(2591);
                                    __expression_G3qo7s(2592), numLinesEst++;
                                }
                                if (__expression_G3qo7s(2593), __extro_wrjjOl(2594, __intro_byTVoB(2594, cur).indexOf('\n')) >= 0) {
                                    __block_LCpqSB(464);
                                    {
                                        __statement_U_9CRe(2595);
                                        __expression_G3qo7s(2596), numLinesEst++;
                                    }
                                }
                                return __expression_G3qo7s(2597), (__expression_G3qo7s(2598), (__expression_G3qo7s(2599), (__expression_G3qo7s(2600), prev) + cur.length) + 1);
                            }, 0));
                    }
                    if (__expression_G3qo7s(2601), (__expression_G3qo7s(2602), length) > 60) {
                        __block_LCpqSB(465);
                        return __expression_G3qo7s(2603), (__expression_G3qo7s(2604), (__expression_G3qo7s(2605), (__expression_G3qo7s(2606), (__expression_G3qo7s(2607), (__expression_G3qo7s(2608), braces[0] + ((__expression_G3qo7s(2611), (__expression_G3qo7s(2612), base) === '') ? (__expression_G3qo7s(2609), '') : (__expression_G3qo7s(2610), (__expression_G3qo7s(2613), (__expression_G3qo7s(2614), base) + '\n ')))) + ' ') + __extro_wrjjOl(2615, __intro_byTVoB(2615, output).join(',\n  '))) + ' ') + braces[1]);
                    }
                    return __expression_G3qo7s(2616), (__expression_G3qo7s(2617), (__expression_G3qo7s(2618), (__expression_G3qo7s(2619), (__expression_G3qo7s(2620), (__expression_G3qo7s(2621), braces[0] + (__expression_G3qo7s(2622), base)) + ' ') + __extro_wrjjOl(2623, __intro_byTVoB(2623, output).join(', '))) + ' ') + braces[1]);
                }
                function isArray(ar) {
                    __block_LCpqSB(466);
                    return __expression_G3qo7s(2624), (__expression_G3qo7s(2625), __extro_wrjjOl(2626, __intro_byTVoB(2626, Array).isArray(ar)) || (__expression_G3qo7s(2627), (__expression_G3qo7s(2628), (__expression_G3qo7s(2629), typeof ar) === 'object') && (__expression_G3qo7s(2630), (__expression_G3qo7s(2631), objectToString(ar)) === '[object Array]')));
                }
                function isRegExp(re) {
                    __block_LCpqSB(467);
                    return __expression_G3qo7s(2632), (__expression_G3qo7s(2633), (__expression_G3qo7s(2634), (__expression_G3qo7s(2635), typeof re) === 'object') && (__expression_G3qo7s(2636), (__expression_G3qo7s(2637), objectToString(re)) === '[object RegExp]'));
                }
                function isDate(d) {
                    __block_LCpqSB(468);
                    return __expression_G3qo7s(2638), (__expression_G3qo7s(2639), (__expression_G3qo7s(2640), (__expression_G3qo7s(2641), typeof d) === 'object') && (__expression_G3qo7s(2642), (__expression_G3qo7s(2643), objectToString(d)) === '[object Date]'));
                }
                function isError(e) {
                    __block_LCpqSB(469);
                    return __expression_G3qo7s(2644), (__expression_G3qo7s(2645), (__expression_G3qo7s(2646), (__expression_G3qo7s(2647), typeof e) === 'object') && (__expression_G3qo7s(2648), (__expression_G3qo7s(2649), objectToString(e)) === '[object Error]'));
                }
                function objectToString(o) {
                    __block_LCpqSB(470);
                    return __expression_G3qo7s(2650), __extro_wrjjOl(2651, __intro_byTVoB(2651, Object.prototype.toString).call(o));
                }
            },
            {
                './getEnumerableProperties': 17,
                './getName': 19,
                './getProperties': 22
            }
        ],
        26: [
            function (require, module, exports) {
                __block_LCpqSB(471);
                {
                    __statement_U_9CRe(2652);
                    var inspect = (__expression_G3qo7s(2653), require('./inspect'));
                }
                {
                    __statement_U_9CRe(2654);
                    var config = (__expression_G3qo7s(2655), require('../config'));
                }
                {
                    __statement_U_9CRe(2656);
                    module.exports = function (obj) {
                        __block_LCpqSB(472);
                        {
                            __statement_U_9CRe(2657);
                            var str = (__expression_G3qo7s(2658), inspect(obj)), type = __extro_wrjjOl(2659, __intro_byTVoB(2659, Object.prototype.toString).call(obj));
                        }
                        if (__expression_G3qo7s(2660), config.truncateThreshold && (__expression_G3qo7s(2661), str.length >= config.truncateThreshold)) {
                            __block_LCpqSB(473);
                            if (__expression_G3qo7s(2662), (__expression_G3qo7s(2663), type) === '[object Function]') {
                                __block_LCpqSB(474);
                                return __expression_G3qo7s(2664), (__expression_G3qo7s(2667), (__expression_G3qo7s(2668), !obj.name) || (__expression_G3qo7s(2669), obj.name === '')) ? (__expression_G3qo7s(2665), '[Function]') : (__expression_G3qo7s(2666), (__expression_G3qo7s(2670), (__expression_G3qo7s(2671), '[Function: ' + obj.name) + ']'));
                            } else if (__expression_G3qo7s(2672), (__expression_G3qo7s(2673), type) === '[object Array]') {
                                __block_LCpqSB(475);
                                return __expression_G3qo7s(2674), (__expression_G3qo7s(2675), (__expression_G3qo7s(2676), '[ Array(' + obj.length) + ') ]');
                            } else if (__expression_G3qo7s(2677), (__expression_G3qo7s(2678), type) === '[object Object]') {
                                __block_LCpqSB(476);
                                {
                                    __statement_U_9CRe(2679);
                                    var keys = __extro_wrjjOl(2680, __intro_byTVoB(2680, Object).keys(obj)), kstr = (__expression_G3qo7s(2683), keys.length > 2) ? (__expression_G3qo7s(2681), (__expression_G3qo7s(2684), __extro_wrjjOl(2685, __intro_byTVoB(2685, __extro_wrjjOl(2686, __intro_byTVoB(2686, keys).splice(0, 2))).join(', ')) + ', ...')) : (__expression_G3qo7s(2682), __extro_wrjjOl(2687, __intro_byTVoB(2687, keys).join(', ')));
                                }
                                return __expression_G3qo7s(2688), (__expression_G3qo7s(2689), (__expression_G3qo7s(2690), '{ Object (' + (__expression_G3qo7s(2691), kstr)) + ') }');
                            } else {
                                __block_LCpqSB(477);
                                return __expression_G3qo7s(2692), str;
                            }
                        } else {
                            __block_LCpqSB(478);
                            return __expression_G3qo7s(2693), str;
                        }
                    };
                }
            },
            {
                '../config': 6,
                './inspect': 25
            }
        ],
        27: [
            function (require, module, exports) {
                __block_LCpqSB(479);
                {
                    __statement_U_9CRe(2694);
                    module.exports = function (ctx, name, method, chainingBehavior) {
                        __block_LCpqSB(480);
                        {
                            __statement_U_9CRe(2695);
                            var chainableBehavior = ctx.__methods[name];
                        }
                        {
                            __statement_U_9CRe(2696);
                            var _chainingBehavior = chainableBehavior.chainingBehavior;
                        }
                        {
                            __statement_U_9CRe(2697);
                            chainableBehavior.chainingBehavior = function () {
                                __block_LCpqSB(481);
                                {
                                    __statement_U_9CRe(2698);
                                    var result = __extro_wrjjOl(2699, __intro_byTVoB(2699, (__expression_G3qo7s(2700), chainingBehavior(_chainingBehavior))).call(this));
                                }
                                return __expression_G3qo7s(2701), (__expression_G3qo7s(2704), (__expression_G3qo7s(2705), result) === (__expression_G3qo7s(2706), undefined)) ? (__expression_G3qo7s(2702), this) : (__expression_G3qo7s(2703), result);
                            };
                        }
                        {
                            __statement_U_9CRe(2707);
                            var _method = chainableBehavior.method;
                        }
                        {
                            __statement_U_9CRe(2708);
                            chainableBehavior.method = function () {
                                __block_LCpqSB(482);
                                {
                                    __statement_U_9CRe(2709);
                                    var result = __extro_wrjjOl(2710, __intro_byTVoB(2710, (__expression_G3qo7s(2711), method(_method))).apply(this, arguments));
                                }
                                return __expression_G3qo7s(2712), (__expression_G3qo7s(2715), (__expression_G3qo7s(2716), result) === (__expression_G3qo7s(2717), undefined)) ? (__expression_G3qo7s(2713), this) : (__expression_G3qo7s(2714), result);
                            };
                        }
                    };
                }
            },
            {}
        ],
        28: [
            function (require, module, exports) {
                __block_LCpqSB(483);
                {
                    __statement_U_9CRe(2718);
                    module.exports = function (ctx, name, method) {
                        __block_LCpqSB(484);
                        {
                            __statement_U_9CRe(2719);
                            var _method = ctx[name], _super = function () {
                                    __block_LCpqSB(485);
                                    return __expression_G3qo7s(2720), this;
                                };
                        }
                        if (__expression_G3qo7s(2721), (__expression_G3qo7s(2722), _method) && (__expression_G3qo7s(2723), 'function' === (__expression_G3qo7s(2724), typeof _method))) {
                            __block_LCpqSB(486);
                            {
                                __statement_U_9CRe(2725);
                                _super = _method;
                            }
                        }
                        {
                            __statement_U_9CRe(2726);
                            ctx[name] = function () {
                                __block_LCpqSB(487);
                                {
                                    __statement_U_9CRe(2727);
                                    var result = __extro_wrjjOl(2728, __intro_byTVoB(2728, (__expression_G3qo7s(2729), method(_super))).apply(this, arguments));
                                }
                                return __expression_G3qo7s(2730), (__expression_G3qo7s(2733), (__expression_G3qo7s(2734), result) === (__expression_G3qo7s(2735), undefined)) ? (__expression_G3qo7s(2731), this) : (__expression_G3qo7s(2732), result);
                            };
                        }
                    };
                }
            },
            {}
        ],
        29: [
            function (require, module, exports) {
                __block_LCpqSB(488);
                {
                    __statement_U_9CRe(2736);
                    module.exports = function (ctx, name, getter) {
                        __block_LCpqSB(489);
                        {
                            __statement_U_9CRe(2737);
                            var _get = __extro_wrjjOl(2738, __intro_byTVoB(2738, Object).getOwnPropertyDescriptor(ctx, name)), _super = function () {
                                    __block_LCpqSB(490);
                                };
                        }
                        if (__expression_G3qo7s(2739), (__expression_G3qo7s(2740), _get) && (__expression_G3qo7s(2741), 'function' === (__expression_G3qo7s(2742), typeof _get.get))) {
                            __block_LCpqSB(491);
                            {
                                __statement_U_9CRe(2743);
                                _super = _get.get;
                            }
                        }
                        {
                            __statement_U_9CRe(2744);
                            __extro_wrjjOl(2745, __intro_byTVoB(2745, Object).defineProperty(ctx, name, {
                                get: function () {
                                    __block_LCpqSB(492);
                                    {
                                        __statement_U_9CRe(2746);
                                        var result = __extro_wrjjOl(2747, __intro_byTVoB(2747, (__expression_G3qo7s(2748), getter(_super))).call(this));
                                    }
                                    return __expression_G3qo7s(2749), (__expression_G3qo7s(2752), (__expression_G3qo7s(2753), result) === (__expression_G3qo7s(2754), undefined)) ? (__expression_G3qo7s(2750), this) : (__expression_G3qo7s(2751), result);
                                },
                                configurable: true
                            }));
                        }
                    };
                }
            },
            {}
        ],
        30: [
            function (require, module, exports) {
                __block_LCpqSB(493);
                {
                    __statement_U_9CRe(2755);
                    var flag = (__expression_G3qo7s(2756), require('./flag'));
                }
                {
                    __statement_U_9CRe(2757);
                    module.exports = function (obj, args) {
                        __block_LCpqSB(494);
                        {
                            __statement_U_9CRe(2758);
                            var negate = (__expression_G3qo7s(2759), flag(obj, 'negate')), expr = args[0];
                        }
                        return __expression_G3qo7s(2760), (__expression_G3qo7s(2763), negate) ? (__expression_G3qo7s(2761), (__expression_G3qo7s(2764), !(__expression_G3qo7s(2765), expr))) : (__expression_G3qo7s(2762), expr);
                    };
                }
            },
            {
                './flag': 15
            }
        ],
        31: [
            function (require, module, exports) {
                __block_LCpqSB(495);
                {
                    __statement_U_9CRe(2766);
                    module.exports = function (assertion, object, includeAll) {
                        __block_LCpqSB(496);
                        {
                            __statement_U_9CRe(2767);
                            var flags = (__expression_G3qo7s(2768), assertion.__flags || (assertion.__flags = __extro_wrjjOl(2769, __intro_byTVoB(2769, Object).create(null))));
                        }
                        if (__expression_G3qo7s(2770), !object.__flags) {
                            __block_LCpqSB(497);
                            {
                                __statement_U_9CRe(2771);
                                object.__flags = __extro_wrjjOl(2772, __intro_byTVoB(2772, Object).create(null));
                            }
                        }
                        {
                            __statement_U_9CRe(2773);
                            includeAll = (__expression_G3qo7s(2776), arguments.length === 3) ? (__expression_G3qo7s(2774), includeAll) : (__expression_G3qo7s(2775), true);
                        }
                        for (var flag in flags) {
                            __block_LCpqSB(498);
                            if (__expression_G3qo7s(2777), (__expression_G3qo7s(2778), includeAll) || (__expression_G3qo7s(2779), (__expression_G3qo7s(2780), (__expression_G3qo7s(2781), (__expression_G3qo7s(2782), flag) !== 'object') && (__expression_G3qo7s(2783), (__expression_G3qo7s(2784), flag) !== 'ssfi')) && (__expression_G3qo7s(2785), (__expression_G3qo7s(2786), flag) != 'message'))) {
                                __block_LCpqSB(499);
                                {
                                    __statement_U_9CRe(2787);
                                    object.__flags[flag] = flags[flag];
                                }
                            }
                        }
                    };
                }
            },
            {}
        ],
        32: [
            function (require, module, exports) {
                __block_LCpqSB(500);
                {
                    __statement_U_9CRe(2788);
                    module.exports = (__expression_G3qo7s(2789), require('./lib/eql'));
                }
            },
            {
                './lib/eql': 33
            }
        ],
        33: [
            function (require, module, exports) {
                __block_LCpqSB(501);
                {
                    __statement_U_9CRe(2790);
                    var type = (__expression_G3qo7s(2791), require('type-detect'));
                }
                {
                    __statement_U_9CRe(2792);
                    var Buffer;
                }
                try {
                    __block_LCpqSB(502);
                    {
                        __statement_U_9CRe(2793);
                        Buffer = (__expression_G3qo7s(2794), require('buffer')).Buffer;
                    }
                } catch (ex) {
                    __block_LCpqSB(503);
                    {
                        __statement_U_9CRe(2795);
                        Buffer = {};
                    }
                    {
                        __statement_U_9CRe(2796);
                        Buffer.isBuffer = function () {
                            __block_LCpqSB(504);
                            return __expression_G3qo7s(2797), false;
                        };
                    }
                }
                {
                    __statement_U_9CRe(2798);
                    module.exports = deepEqual;
                }
                function deepEqual(a, b, m) {
                    __block_LCpqSB(505);
                    if (__expression_G3qo7s(2799), sameValue(a, b)) {
                        __block_LCpqSB(506);
                        return __expression_G3qo7s(2800), true;
                    } else if (__expression_G3qo7s(2801), 'date' === (__expression_G3qo7s(2802), type(a))) {
                        __block_LCpqSB(507);
                        return __expression_G3qo7s(2803), (__expression_G3qo7s(2804), dateEqual(a, b));
                    } else if (__expression_G3qo7s(2805), 'regexp' === (__expression_G3qo7s(2806), type(a))) {
                        __block_LCpqSB(508);
                        return __expression_G3qo7s(2807), (__expression_G3qo7s(2808), regexpEqual(a, b));
                    } else if (__extro_wrjjOl(2809, __intro_byTVoB(2809, Buffer).isBuffer(a))) {
                        __block_LCpqSB(509);
                        return __expression_G3qo7s(2810), (__expression_G3qo7s(2811), bufferEqual(a, b));
                    } else if (__expression_G3qo7s(2812), 'arguments' === (__expression_G3qo7s(2813), type(a))) {
                        __block_LCpqSB(510);
                        return __expression_G3qo7s(2814), (__expression_G3qo7s(2815), argumentsEqual(a, b, m));
                    } else if (__expression_G3qo7s(2816), !(__expression_G3qo7s(2817), typeEqual(a, b))) {
                        __block_LCpqSB(511);
                        return __expression_G3qo7s(2818), false;
                    } else if (__expression_G3qo7s(2819), (__expression_G3qo7s(2820), (__expression_G3qo7s(2821), 'object' !== (__expression_G3qo7s(2822), type(a))) && (__expression_G3qo7s(2823), 'object' !== (__expression_G3qo7s(2824), type(b)))) && (__expression_G3qo7s(2825), (__expression_G3qo7s(2826), 'array' !== (__expression_G3qo7s(2827), type(a))) && (__expression_G3qo7s(2828), 'array' !== (__expression_G3qo7s(2829), type(b))))) {
                        __block_LCpqSB(512);
                        return __expression_G3qo7s(2830), (__expression_G3qo7s(2831), sameValue(a, b));
                    } else {
                        __block_LCpqSB(513);
                        return __expression_G3qo7s(2832), (__expression_G3qo7s(2833), objectEqual(a, b, m));
                    }
                }
                function sameValue(a, b) {
                    __block_LCpqSB(514);
                    if (__expression_G3qo7s(2834), (__expression_G3qo7s(2835), a) === (__expression_G3qo7s(2836), b)) {
                        __block_LCpqSB(515);
                        return __expression_G3qo7s(2837), (__expression_G3qo7s(2838), (__expression_G3qo7s(2839), (__expression_G3qo7s(2840), a) !== 0) || (__expression_G3qo7s(2841), (__expression_G3qo7s(2842), 1 / (__expression_G3qo7s(2843), a)) === (__expression_G3qo7s(2844), 1 / (__expression_G3qo7s(2845), b))));
                    }
                    return __expression_G3qo7s(2846), (__expression_G3qo7s(2847), (__expression_G3qo7s(2848), (__expression_G3qo7s(2849), a) !== (__expression_G3qo7s(2850), a)) && (__expression_G3qo7s(2851), (__expression_G3qo7s(2852), b) !== (__expression_G3qo7s(2853), b)));
                }
                function typeEqual(a, b) {
                    __block_LCpqSB(516);
                    return __expression_G3qo7s(2854), (__expression_G3qo7s(2855), (__expression_G3qo7s(2856), type(a)) === (__expression_G3qo7s(2857), type(b)));
                }
                function dateEqual(a, b) {
                    __block_LCpqSB(517);
                    if (__expression_G3qo7s(2858), 'date' !== (__expression_G3qo7s(2859), type(b))) {
                        __block_LCpqSB(518);
                        return __expression_G3qo7s(2860), false;
                    }
                    return __expression_G3qo7s(2861), (__expression_G3qo7s(2862), sameValue(__extro_wrjjOl(2863, __intro_byTVoB(2863, a).getTime()), __extro_wrjjOl(2864, __intro_byTVoB(2864, b).getTime())));
                }
                function regexpEqual(a, b) {
                    __block_LCpqSB(519);
                    if (__expression_G3qo7s(2865), 'regexp' !== (__expression_G3qo7s(2866), type(b))) {
                        __block_LCpqSB(520);
                        return __expression_G3qo7s(2867), false;
                    }
                    return __expression_G3qo7s(2868), (__expression_G3qo7s(2869), sameValue(__extro_wrjjOl(2870, __intro_byTVoB(2870, a).toString()), __extro_wrjjOl(2871, __intro_byTVoB(2871, b).toString())));
                }
                function argumentsEqual(a, b, m) {
                    __block_LCpqSB(521);
                    if (__expression_G3qo7s(2872), 'arguments' !== (__expression_G3qo7s(2873), type(b))) {
                        __block_LCpqSB(522);
                        return __expression_G3qo7s(2874), false;
                    }
                    {
                        __statement_U_9CRe(2875);
                        a = __extro_wrjjOl(2876, __intro_byTVoB(2876, [].slice).call(a));
                    }
                    {
                        __statement_U_9CRe(2877);
                        b = __extro_wrjjOl(2878, __intro_byTVoB(2878, [].slice).call(b));
                    }
                    return __expression_G3qo7s(2879), (__expression_G3qo7s(2880), deepEqual(a, b, m));
                }
                function enumerable(a) {
                    __block_LCpqSB(523);
                    {
                        __statement_U_9CRe(2881);
                        var res = [];
                    }
                    for (var key in a) {
                        __block_LCpqSB(524);
                        {
                            __statement_U_9CRe(2882);
                            __extro_wrjjOl(2883, __intro_byTVoB(2883, res).push(key));
                        }
                    }
                    return __expression_G3qo7s(2884), res;
                }
                function iterableEqual(a, b) {
                    __block_LCpqSB(525);
                    if (__expression_G3qo7s(2885), a.length !== b.length) {
                        __block_LCpqSB(526);
                        return __expression_G3qo7s(2886), false;
                    }
                    {
                        __statement_U_9CRe(2887);
                        var i = 0;
                    }
                    {
                        __statement_U_9CRe(2888);
                        var match = true;
                    }
                    for (; __expression_G3qo7s(2889), (__expression_G3qo7s(2890), i) < a.length; __expression_G3qo7s(2891), i++) {
                        __block_LCpqSB(527);
                        if (__expression_G3qo7s(2892), a[i] !== b[i]) {
                            __block_LCpqSB(528);
                            {
                                __statement_U_9CRe(2893);
                                match = false;
                            }
                            break;
                        }
                    }
                    return __expression_G3qo7s(2894), match;
                }
                function bufferEqual(a, b) {
                    __block_LCpqSB(529);
                    if (__expression_G3qo7s(2895), !__extro_wrjjOl(2896, __intro_byTVoB(2896, Buffer).isBuffer(b))) {
                        __block_LCpqSB(530);
                        return __expression_G3qo7s(2897), false;
                    }
                    return __expression_G3qo7s(2898), (__expression_G3qo7s(2899), iterableEqual(a, b));
                }
                function isValue(a) {
                    __block_LCpqSB(531);
                    return __expression_G3qo7s(2900), (__expression_G3qo7s(2901), (__expression_G3qo7s(2902), (__expression_G3qo7s(2903), a) !== null) && (__expression_G3qo7s(2904), (__expression_G3qo7s(2905), a) !== (__expression_G3qo7s(2906), undefined)));
                }
                function objectEqual(a, b, m) {
                    __block_LCpqSB(532);
                    if (__expression_G3qo7s(2907), (__expression_G3qo7s(2908), !(__expression_G3qo7s(2909), isValue(a))) || (__expression_G3qo7s(2910), !(__expression_G3qo7s(2911), isValue(b)))) {
                        __block_LCpqSB(533);
                        return __expression_G3qo7s(2912), false;
                    }
                    if (__expression_G3qo7s(2913), a.prototype !== b.prototype) {
                        __block_LCpqSB(534);
                        return __expression_G3qo7s(2914), false;
                    }
                    {
                        __statement_U_9CRe(2915);
                        var i;
                    }
                    if (__expression_G3qo7s(2916), m) {
                        __block_LCpqSB(535);
                        for (i = 0; __expression_G3qo7s(2917), (__expression_G3qo7s(2918), i) < m.length; __expression_G3qo7s(2919), i++) {
                            __block_LCpqSB(536);
                            if (__expression_G3qo7s(2920), (__expression_G3qo7s(2921), (__expression_G3qo7s(2922), m[i][0] === (__expression_G3qo7s(2923), a)) && (__expression_G3qo7s(2924), m[i][1] === (__expression_G3qo7s(2925), b))) || (__expression_G3qo7s(2926), (__expression_G3qo7s(2927), m[i][0] === (__expression_G3qo7s(2928), b)) && (__expression_G3qo7s(2929), m[i][1] === (__expression_G3qo7s(2930), a)))) {
                                __block_LCpqSB(537);
                                return __expression_G3qo7s(2931), true;
                            }
                        }
                    } else {
                        __block_LCpqSB(538);
                        {
                            __statement_U_9CRe(2932);
                            m = [];
                        }
                    }
                    try {
                        __block_LCpqSB(539);
                        {
                            __statement_U_9CRe(2933);
                            var ka = (__expression_G3qo7s(2934), enumerable(a));
                        }
                        {
                            __statement_U_9CRe(2935);
                            var kb = (__expression_G3qo7s(2936), enumerable(b));
                        }
                    } catch (ex) {
                        __block_LCpqSB(540);
                        return __expression_G3qo7s(2937), false;
                    }
                    {
                        __statement_U_9CRe(2938);
                        __extro_wrjjOl(2939, __intro_byTVoB(2939, ka).sort());
                    }
                    {
                        __statement_U_9CRe(2940);
                        __extro_wrjjOl(2941, __intro_byTVoB(2941, kb).sort());
                    }
                    if (__expression_G3qo7s(2942), !(__expression_G3qo7s(2943), iterableEqual(ka, kb))) {
                        __block_LCpqSB(541);
                        return __expression_G3qo7s(2944), false;
                    }
                    {
                        __statement_U_9CRe(2945);
                        __extro_wrjjOl(2946, __intro_byTVoB(2946, m).push([
                            a,
                            b
                        ]));
                    }
                    {
                        __statement_U_9CRe(2947);
                        var key;
                    }
                    for (i = (__expression_G3qo7s(2948), ka.length - 1); __expression_G3qo7s(2949), (__expression_G3qo7s(2950), i) >= 0; __expression_G3qo7s(2951), i--) {
                        __block_LCpqSB(542);
                        {
                            __statement_U_9CRe(2952);
                            key = ka[i];
                        }
                        if (__expression_G3qo7s(2953), !(__expression_G3qo7s(2954), deepEqual(a[key], b[key], m))) {
                            __block_LCpqSB(543);
                            return __expression_G3qo7s(2955), false;
                        }
                    }
                    return __expression_G3qo7s(2956), true;
                }
            },
            {
                'buffer': 36,
                'type-detect': 34
            }
        ],
        34: [
            function (require, module, exports) {
                __block_LCpqSB(544);
                {
                    __statement_U_9CRe(2957);
                    module.exports = (__expression_G3qo7s(2958), require('./lib/type'));
                }
            },
            {
                './lib/type': 35
            }
        ],
        35: [
            function (require, module, exports) {
                __block_LCpqSB(545);
                {
                    __statement_U_9CRe(2959);
                    var exports = module.exports = getType;
                }
                {
                    __statement_U_9CRe(2960);
                    var natives = {
                            '[object Array]': 'array',
                            '[object RegExp]': 'regexp',
                            '[object Function]': 'function',
                            '[object Arguments]': 'arguments',
                            '[object Date]': 'date'
                        };
                }
                function getType(obj) {
                    __block_LCpqSB(546);
                    {
                        __statement_U_9CRe(2961);
                        var str = __extro_wrjjOl(2962, __intro_byTVoB(2962, Object.prototype.toString).call(obj));
                    }
                    if (natives[str]) {
                        __block_LCpqSB(547);
                        return __expression_G3qo7s(2963), natives[str];
                    }
                    if (__expression_G3qo7s(2964), (__expression_G3qo7s(2965), obj) === null) {
                        __block_LCpqSB(548);
                        return __expression_G3qo7s(2966), 'null';
                    }
                    if (__expression_G3qo7s(2967), (__expression_G3qo7s(2968), obj) === (__expression_G3qo7s(2969), undefined)) {
                        __block_LCpqSB(549);
                        return __expression_G3qo7s(2970), 'undefined';
                    }
                    if (__expression_G3qo7s(2971), (__expression_G3qo7s(2972), obj) === (__expression_G3qo7s(2973), Object(obj))) {
                        __block_LCpqSB(550);
                        return __expression_G3qo7s(2974), 'object';
                    }
                    return __expression_G3qo7s(2975), (__expression_G3qo7s(2976), typeof obj);
                }
                {
                    __statement_U_9CRe(2977);
                    exports.Library = Library;
                }
                function Library() {
                    __block_LCpqSB(551);
                    {
                        __statement_U_9CRe(2978);
                        this.tests = {};
                    }
                }
                {
                    __statement_U_9CRe(2979);
                    Library.prototype.of = getType;
                }
                {
                    __statement_U_9CRe(2980);
                    Library.prototype.define = function (type, test) {
                        __block_LCpqSB(552);
                        if (__expression_G3qo7s(2981), arguments.length === 1) {
                            __block_LCpqSB(553);
                            return __expression_G3qo7s(2982), this.tests[type];
                        }
                        {
                            __statement_U_9CRe(2983);
                            this.tests[type] = test;
                        }
                        return __expression_G3qo7s(2984), this;
                    };
                }
                {
                    __statement_U_9CRe(2985);
                    Library.prototype.test = function (obj, type) {
                        __block_LCpqSB(554);
                        if (__expression_G3qo7s(2986), (__expression_G3qo7s(2987), type) === (__expression_G3qo7s(2988), getType(obj))) {
                            __block_LCpqSB(555);
                            return __expression_G3qo7s(2989), true;
                        }
                        {
                            __statement_U_9CRe(2990);
                            var test = this.tests[type];
                        }
                        if (__expression_G3qo7s(2991), (__expression_G3qo7s(2992), test) && (__expression_G3qo7s(2993), 'regexp' === (__expression_G3qo7s(2994), getType(test)))) {
                            __block_LCpqSB(556);
                            return __expression_G3qo7s(2995), __extro_wrjjOl(2996, __intro_byTVoB(2996, test).test(obj));
                        } else if (__expression_G3qo7s(2997), (__expression_G3qo7s(2998), test) && (__expression_G3qo7s(2999), 'function' === (__expression_G3qo7s(3000), getType(test)))) {
                            __block_LCpqSB(557);
                            return __expression_G3qo7s(3001), (__expression_G3qo7s(3002), test(obj));
                        } else {
                            __block_LCpqSB(558);
                            {
                                __statement_U_9CRe(3003);
                                throw new ReferenceError((__expression_G3qo7s(3004), (__expression_G3qo7s(3005), 'Type test "' + (__expression_G3qo7s(3006), type)) + '" not defined or invalid.'));
                            }
                        }
                    };
                }
            },
            {}
        ],
        36: [
            function (require, module, exports) {
                __block_LCpqSB(559);
                {
                    __statement_U_9CRe(3007);
                    var base64 = (__expression_G3qo7s(3008), require('base64-js'));
                }
                {
                    __statement_U_9CRe(3009);
                    var ieee754 = (__expression_G3qo7s(3010), require('ieee754'));
                }
                {
                    __statement_U_9CRe(3011);
                    exports.Buffer = Buffer;
                }
                {
                    __statement_U_9CRe(3012);
                    exports.SlowBuffer = Buffer;
                }
                {
                    __statement_U_9CRe(3013);
                    exports.INSPECT_MAX_BYTES = 50;
                }
                {
                    __statement_U_9CRe(3014);
                    Buffer.poolSize = 8192;
                }
                {
                    __statement_U_9CRe(3015);
                    Buffer._useTypedArrays = (__expression_G3qo7s(3016), function () {
                        __block_LCpqSB(560);
                        try {
                            __block_LCpqSB(561);
                            {
                                __statement_U_9CRe(3017);
                                var buf = new ArrayBuffer(0);
                            }
                            {
                                __statement_U_9CRe(3018);
                                var arr = new Uint8Array(buf);
                            }
                            {
                                __statement_U_9CRe(3019);
                                arr.foo = function () {
                                    __block_LCpqSB(562);
                                    return __expression_G3qo7s(3020), 42;
                                };
                            }
                            return __expression_G3qo7s(3021), (__expression_G3qo7s(3022), (__expression_G3qo7s(3023), 42 === __extro_wrjjOl(3024, __intro_byTVoB(3024, arr).foo())) && (__expression_G3qo7s(3025), (__expression_G3qo7s(3026), typeof arr.subarray) === 'function'));
                        } catch (e) {
                            __block_LCpqSB(563);
                            return __expression_G3qo7s(3027), false;
                        }
                    }());
                }
                function Buffer(subject, encoding, noZero) {
                    __block_LCpqSB(564);
                    if (__expression_G3qo7s(3028), !(__expression_G3qo7s(3029), this instanceof (__expression_G3qo7s(3030), Buffer))) {
                        __block_LCpqSB(565);
                        return __expression_G3qo7s(3031), new Buffer(subject, encoding, noZero);
                    }
                    {
                        __statement_U_9CRe(3032);
                        var type = (__expression_G3qo7s(3033), typeof subject);
                    }
                    if (__expression_G3qo7s(3034), (__expression_G3qo7s(3035), (__expression_G3qo7s(3036), encoding) === 'base64') && (__expression_G3qo7s(3037), (__expression_G3qo7s(3038), type) === 'string')) {
                        __block_LCpqSB(566);
                        {
                            __statement_U_9CRe(3039);
                            subject = (__expression_G3qo7s(3040), stringtrim(subject));
                        }
                        while (__expression_G3qo7s(3041), (__expression_G3qo7s(3042), subject.length % 4) !== 0) {
                            __block_LCpqSB(567);
                            {
                                __statement_U_9CRe(3043);
                                subject = (__expression_G3qo7s(3044), (__expression_G3qo7s(3045), subject) + '=');
                            }
                        }
                    }
                    {
                        __statement_U_9CRe(3046);
                        var length;
                    }
                    if (__expression_G3qo7s(3047), (__expression_G3qo7s(3048), type) === 'number') {
                        __block_LCpqSB(568);
                        {
                            __statement_U_9CRe(3049);
                            length = (__expression_G3qo7s(3050), coerce(subject));
                        }
                    } else if (__expression_G3qo7s(3051), (__expression_G3qo7s(3052), type) === 'string') {
                        __block_LCpqSB(569);
                        {
                            __statement_U_9CRe(3053);
                            length = __extro_wrjjOl(3054, __intro_byTVoB(3054, Buffer).byteLength(subject, encoding));
                        }
                    } else if (__expression_G3qo7s(3055), (__expression_G3qo7s(3056), type) === 'object') {
                        __block_LCpqSB(570);
                        {
                            __statement_U_9CRe(3057);
                            length = (__expression_G3qo7s(3058), coerce(subject.length));
                        }
                    } else {
                        __block_LCpqSB(571);
                        {
                            __statement_U_9CRe(3059);
                            throw new Error('First argument needs to be a number, array or string.');
                        }
                    }
                    {
                        __statement_U_9CRe(3060);
                        var buf;
                    }
                    if (Buffer._useTypedArrays) {
                        __block_LCpqSB(572);
                        {
                            __statement_U_9CRe(3061);
                            buf = __extro_wrjjOl(3062, __intro_byTVoB(3062, Buffer)._augment(new Uint8Array(length)));
                        }
                    } else {
                        __block_LCpqSB(573);
                        {
                            __statement_U_9CRe(3063);
                            buf = this;
                        }
                        {
                            __statement_U_9CRe(3064);
                            buf.length = length;
                        }
                        {
                            __statement_U_9CRe(3065);
                            buf._isBuffer = true;
                        }
                    }
                    {
                        __statement_U_9CRe(3066);
                        var i;
                    }
                    if (__expression_G3qo7s(3067), Buffer._useTypedArrays && (__expression_G3qo7s(3068), (__expression_G3qo7s(3069), typeof subject.byteLength) === 'number')) {
                        __block_LCpqSB(574);
                        {
                            __statement_U_9CRe(3070);
                            __extro_wrjjOl(3071, __intro_byTVoB(3071, buf)._set(subject));
                        }
                    } else if (__expression_G3qo7s(3072), isArrayish(subject)) {
                        __block_LCpqSB(575);
                        for (i = 0; __expression_G3qo7s(3073), (__expression_G3qo7s(3074), i) < (__expression_G3qo7s(3075), length); __expression_G3qo7s(3076), i++) {
                            __block_LCpqSB(576);
                            if (__extro_wrjjOl(3077, __intro_byTVoB(3077, Buffer).isBuffer(subject))) {
                                __block_LCpqSB(577);
                                {
                                    __statement_U_9CRe(3078);
                                    buf[i] = __extro_wrjjOl(3079, __intro_byTVoB(3079, subject).readUInt8(i));
                                }
                            } else {
                                __block_LCpqSB(578);
                                {
                                    __statement_U_9CRe(3080);
                                    buf[i] = subject[i];
                                }
                            }
                        }
                    } else if (__expression_G3qo7s(3081), (__expression_G3qo7s(3082), type) === 'string') {
                        __block_LCpqSB(579);
                        {
                            __statement_U_9CRe(3083);
                            __extro_wrjjOl(3084, __intro_byTVoB(3084, buf).write(subject, 0, encoding));
                        }
                    } else if (__expression_G3qo7s(3085), (__expression_G3qo7s(3086), (__expression_G3qo7s(3087), (__expression_G3qo7s(3088), type) === 'number') && (__expression_G3qo7s(3089), !Buffer._useTypedArrays)) && (__expression_G3qo7s(3090), !(__expression_G3qo7s(3091), noZero))) {
                        __block_LCpqSB(580);
                        for (i = 0; __expression_G3qo7s(3092), (__expression_G3qo7s(3093), i) < (__expression_G3qo7s(3094), length); __expression_G3qo7s(3095), i++) {
                            __block_LCpqSB(581);
                            {
                                __statement_U_9CRe(3096);
                                buf[i] = 0;
                            }
                        }
                    }
                    return __expression_G3qo7s(3097), buf;
                }
                {
                    __statement_U_9CRe(3098);
                    Buffer.isEncoding = function (encoding) {
                        __block_LCpqSB(582);
                        switch (__extro_wrjjOl(3099, __intro_byTVoB(3099, (__expression_G3qo7s(3100), String(encoding))).toLowerCase())) {
                        case 'hex':
                        case 'utf8':
                        case 'utf-8':
                        case 'ascii':
                        case 'binary':
                        case 'base64':
                        case 'raw':
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le': {
                                __block_LCpqSB(583);
                                return __expression_G3qo7s(3101), true;
                            }
                        default: {
                                __block_LCpqSB(584);
                                return __expression_G3qo7s(3102), false;
                            }
                        }
                    };
                }
                {
                    __statement_U_9CRe(3103);
                    Buffer.isBuffer = function (b) {
                        __block_LCpqSB(585);
                        return __expression_G3qo7s(3104), (__expression_G3qo7s(3105), !(__expression_G3qo7s(3106), !(__expression_G3qo7s(3107), (__expression_G3qo7s(3108), (__expression_G3qo7s(3109), (__expression_G3qo7s(3110), b) !== null) && (__expression_G3qo7s(3111), (__expression_G3qo7s(3112), b) !== (__expression_G3qo7s(3113), undefined))) && b._isBuffer)));
                    };
                }
                {
                    __statement_U_9CRe(3114);
                    Buffer.byteLength = function (str, encoding) {
                        __block_LCpqSB(586);
                        {
                            __statement_U_9CRe(3115);
                            var ret;
                        }
                        {
                            __statement_U_9CRe(3116);
                            str = (__expression_G3qo7s(3117), (__expression_G3qo7s(3118), str) + '');
                        }
                        switch (__expression_G3qo7s(3119), (__expression_G3qo7s(3120), encoding) || 'utf8') {
                        case 'hex': {
                                __block_LCpqSB(587);
                                {
                                    __statement_U_9CRe(3121);
                                    ret = (__expression_G3qo7s(3122), str.length / 2);
                                }
                                break;
                            }
                        case 'utf8':
                        case 'utf-8': {
                                __block_LCpqSB(588);
                                {
                                    __statement_U_9CRe(3123);
                                    ret = (__expression_G3qo7s(3124), utf8ToBytes(str)).length;
                                }
                                break;
                            }
                        case 'ascii':
                        case 'binary':
                        case 'raw': {
                                __block_LCpqSB(589);
                                {
                                    __statement_U_9CRe(3125);
                                    ret = str.length;
                                }
                                break;
                            }
                        case 'base64': {
                                __block_LCpqSB(590);
                                {
                                    __statement_U_9CRe(3126);
                                    ret = (__expression_G3qo7s(3127), base64ToBytes(str)).length;
                                }
                                break;
                            }
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le': {
                                __block_LCpqSB(591);
                                {
                                    __statement_U_9CRe(3128);
                                    ret = (__expression_G3qo7s(3129), str.length * 2);
                                }
                                break;
                            }
                        default: {
                                __block_LCpqSB(592);
                                {
                                    __statement_U_9CRe(3130);
                                    throw new Error('Unknown encoding');
                                }
                            }
                        }
                        return __expression_G3qo7s(3131), ret;
                    };
                }
                {
                    __statement_U_9CRe(3132);
                    Buffer.concat = function (list, totalLength) {
                        __block_LCpqSB(593);
                        {
                            __statement_U_9CRe(3133);
                            __expression_G3qo7s(3134), assert((__expression_G3qo7s(3135), isArray(list)), (__expression_G3qo7s(3136), 'Usage: Buffer.concat(list, [totalLength])\n' + 'list should be an Array.'));
                        }
                        if (__expression_G3qo7s(3137), list.length === 0) {
                            __block_LCpqSB(594);
                            return __expression_G3qo7s(3138), new Buffer(0);
                        } else if (__expression_G3qo7s(3139), list.length === 1) {
                            __block_LCpqSB(595);
                            return __expression_G3qo7s(3140), list[0];
                        }
                        {
                            __statement_U_9CRe(3141);
                            var i;
                        }
                        if (__expression_G3qo7s(3142), (__expression_G3qo7s(3143), typeof totalLength) !== 'number') {
                            __block_LCpqSB(596);
                            {
                                __statement_U_9CRe(3144);
                                totalLength = 0;
                            }
                            for (i = 0; __expression_G3qo7s(3145), (__expression_G3qo7s(3146), i) < list.length; __expression_G3qo7s(3147), i++) {
                                __block_LCpqSB(597);
                                {
                                    __statement_U_9CRe(3148);
                                    totalLength += list[i].length;
                                }
                            }
                        }
                        {
                            __statement_U_9CRe(3149);
                            var buf = new Buffer(totalLength);
                        }
                        {
                            __statement_U_9CRe(3150);
                            var pos = 0;
                        }
                        for (i = 0; __expression_G3qo7s(3151), (__expression_G3qo7s(3152), i) < list.length; __expression_G3qo7s(3153), i++) {
                            __block_LCpqSB(598);
                            {
                                __statement_U_9CRe(3154);
                                var item = list[i];
                            }
                            {
                                __statement_U_9CRe(3155);
                                __extro_wrjjOl(3156, __intro_byTVoB(3156, item).copy(buf, pos));
                            }
                            {
                                __statement_U_9CRe(3157);
                                pos += item.length;
                            }
                        }
                        return __expression_G3qo7s(3158), buf;
                    };
                }
                function _hexWrite(buf, string, offset, length) {
                    __block_LCpqSB(599);
                    {
                        __statement_U_9CRe(3159);
                        offset = (__expression_G3qo7s(3160), (__expression_G3qo7s(3161), Number(offset)) || 0);
                    }
                    {
                        __statement_U_9CRe(3162);
                        var remaining = (__expression_G3qo7s(3163), buf.length - (__expression_G3qo7s(3164), offset));
                    }
                    if (__expression_G3qo7s(3165), !(__expression_G3qo7s(3166), length)) {
                        __block_LCpqSB(600);
                        {
                            __statement_U_9CRe(3167);
                            length = remaining;
                        }
                    } else {
                        __block_LCpqSB(601);
                        {
                            __statement_U_9CRe(3168);
                            length = (__expression_G3qo7s(3169), Number(length));
                        }
                        if (__expression_G3qo7s(3170), (__expression_G3qo7s(3171), length) > (__expression_G3qo7s(3172), remaining)) {
                            __block_LCpqSB(602);
                            {
                                __statement_U_9CRe(3173);
                                length = remaining;
                            }
                        }
                    }
                    {
                        __statement_U_9CRe(3174);
                        var strLen = string.length;
                    }
                    {
                        __statement_U_9CRe(3175);
                        __expression_G3qo7s(3176), assert((__expression_G3qo7s(3177), (__expression_G3qo7s(3178), (__expression_G3qo7s(3179), strLen) % 2) === 0), 'Invalid hex string');
                    }
                    if (__expression_G3qo7s(3180), (__expression_G3qo7s(3181), length) > (__expression_G3qo7s(3182), (__expression_G3qo7s(3183), strLen) / 2)) {
                        __block_LCpqSB(603);
                        {
                            __statement_U_9CRe(3184);
                            length = (__expression_G3qo7s(3185), (__expression_G3qo7s(3186), strLen) / 2);
                        }
                    }
                    for (var i = 0; __expression_G3qo7s(3187), (__expression_G3qo7s(3188), i) < (__expression_G3qo7s(3189), length); __expression_G3qo7s(3190), i++) {
                        __block_LCpqSB(604);
                        {
                            __statement_U_9CRe(3191);
                            var byte = (__expression_G3qo7s(3192), parseInt(__extro_wrjjOl(3193, __intro_byTVoB(3193, string).substr((__expression_G3qo7s(3194), (__expression_G3qo7s(3195), i) * 2), 2)), 16));
                        }
                        {
                            __statement_U_9CRe(3196);
                            __expression_G3qo7s(3197), assert((__expression_G3qo7s(3198), !(__expression_G3qo7s(3199), isNaN(byte))), 'Invalid hex string');
                        }
                        {
                            __statement_U_9CRe(3200);
                            buf[__expression_G3qo7s(3201), (__expression_G3qo7s(3202), offset) + (__expression_G3qo7s(3203), i)] = byte;
                        }
                    }
                    {
                        __statement_U_9CRe(3204);
                        Buffer._charsWritten = (__expression_G3qo7s(3205), (__expression_G3qo7s(3206), i) * 2);
                    }
                    return __expression_G3qo7s(3207), i;
                }
                function _utf8Write(buf, string, offset, length) {
                    __block_LCpqSB(605);
                    {
                        __statement_U_9CRe(3208);
                        var charsWritten = Buffer._charsWritten = (__expression_G3qo7s(3209), blitBuffer((__expression_G3qo7s(3210), utf8ToBytes(string)), buf, offset, length));
                    }
                    return __expression_G3qo7s(3211), charsWritten;
                }
                function _asciiWrite(buf, string, offset, length) {
                    __block_LCpqSB(606);
                    {
                        __statement_U_9CRe(3212);
                        var charsWritten = Buffer._charsWritten = (__expression_G3qo7s(3213), blitBuffer((__expression_G3qo7s(3214), asciiToBytes(string)), buf, offset, length));
                    }
                    return __expression_G3qo7s(3215), charsWritten;
                }
                function _binaryWrite(buf, string, offset, length) {
                    __block_LCpqSB(607);
                    return __expression_G3qo7s(3216), (__expression_G3qo7s(3217), _asciiWrite(buf, string, offset, length));
                }
                function _base64Write(buf, string, offset, length) {
                    __block_LCpqSB(608);
                    {
                        __statement_U_9CRe(3218);
                        var charsWritten = Buffer._charsWritten = (__expression_G3qo7s(3219), blitBuffer((__expression_G3qo7s(3220), base64ToBytes(string)), buf, offset, length));
                    }
                    return __expression_G3qo7s(3221), charsWritten;
                }
                function _utf16leWrite(buf, string, offset, length) {
                    __block_LCpqSB(609);
                    {
                        __statement_U_9CRe(3222);
                        var charsWritten = Buffer._charsWritten = (__expression_G3qo7s(3223), blitBuffer((__expression_G3qo7s(3224), utf16leToBytes(string)), buf, offset, length));
                    }
                    return __expression_G3qo7s(3225), charsWritten;
                }
                {
                    __statement_U_9CRe(3226);
                    Buffer.prototype.write = function (string, offset, length, encoding) {
                        __block_LCpqSB(610);
                        if (__expression_G3qo7s(3227), isFinite(offset)) {
                            __block_LCpqSB(611);
                            if (__expression_G3qo7s(3228), !(__expression_G3qo7s(3229), isFinite(length))) {
                                __block_LCpqSB(612);
                                {
                                    __statement_U_9CRe(3230);
                                    encoding = length;
                                }
                                {
                                    __statement_U_9CRe(3231);
                                    length = undefined;
                                }
                            }
                        } else {
                            __block_LCpqSB(613);
                            {
                                __statement_U_9CRe(3232);
                                var swap = encoding;
                            }
                            {
                                __statement_U_9CRe(3233);
                                encoding = offset;
                            }
                            {
                                __statement_U_9CRe(3234);
                                offset = length;
                            }
                            {
                                __statement_U_9CRe(3235);
                                length = swap;
                            }
                        }
                        {
                            __statement_U_9CRe(3236);
                            offset = (__expression_G3qo7s(3237), (__expression_G3qo7s(3238), Number(offset)) || 0);
                        }
                        {
                            __statement_U_9CRe(3239);
                            var remaining = (__expression_G3qo7s(3240), this.length - (__expression_G3qo7s(3241), offset));
                        }
                        if (__expression_G3qo7s(3242), !(__expression_G3qo7s(3243), length)) {
                            __block_LCpqSB(614);
                            {
                                __statement_U_9CRe(3244);
                                length = remaining;
                            }
                        } else {
                            __block_LCpqSB(615);
                            {
                                __statement_U_9CRe(3245);
                                length = (__expression_G3qo7s(3246), Number(length));
                            }
                            if (__expression_G3qo7s(3247), (__expression_G3qo7s(3248), length) > (__expression_G3qo7s(3249), remaining)) {
                                __block_LCpqSB(616);
                                {
                                    __statement_U_9CRe(3250);
                                    length = remaining;
                                }
                            }
                        }
                        {
                            __statement_U_9CRe(3251);
                            encoding = __extro_wrjjOl(3252, __intro_byTVoB(3252, (__expression_G3qo7s(3253), String((__expression_G3qo7s(3254), (__expression_G3qo7s(3255), encoding) || 'utf8')))).toLowerCase());
                        }
                        {
                            __statement_U_9CRe(3256);
                            var ret;
                        }
                        switch (__expression_G3qo7s(3257), encoding) {
                        case 'hex': {
                                __block_LCpqSB(617);
                                {
                                    __statement_U_9CRe(3258);
                                    ret = (__expression_G3qo7s(3259), _hexWrite(this, string, offset, length));
                                }
                                break;
                            }
                        case 'utf8':
                        case 'utf-8': {
                                __block_LCpqSB(618);
                                {
                                    __statement_U_9CRe(3260);
                                    ret = (__expression_G3qo7s(3261), _utf8Write(this, string, offset, length));
                                }
                                break;
                            }
                        case 'ascii': {
                                __block_LCpqSB(619);
                                {
                                    __statement_U_9CRe(3262);
                                    ret = (__expression_G3qo7s(3263), _asciiWrite(this, string, offset, length));
                                }
                                break;
                            }
                        case 'binary': {
                                __block_LCpqSB(620);
                                {
                                    __statement_U_9CRe(3264);
                                    ret = (__expression_G3qo7s(3265), _binaryWrite(this, string, offset, length));
                                }
                                break;
                            }
                        case 'base64': {
                                __block_LCpqSB(621);
                                {
                                    __statement_U_9CRe(3266);
                                    ret = (__expression_G3qo7s(3267), _base64Write(this, string, offset, length));
                                }
                                break;
                            }
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le': {
                                __block_LCpqSB(622);
                                {
                                    __statement_U_9CRe(3268);
                                    ret = (__expression_G3qo7s(3269), _utf16leWrite(this, string, offset, length));
                                }
                                break;
                            }
                        default: {
                                __block_LCpqSB(623);
                                {
                                    __statement_U_9CRe(3270);
                                    throw new Error('Unknown encoding');
                                }
                            }
                        }
                        return __expression_G3qo7s(3271), ret;
                    };
                }
                {
                    __statement_U_9CRe(3272);
                    Buffer.prototype.toString = function (encoding, start, end) {
                        __block_LCpqSB(624);
                        {
                            __statement_U_9CRe(3273);
                            var self = this;
                        }
                        {
                            __statement_U_9CRe(3274);
                            encoding = __extro_wrjjOl(3275, __intro_byTVoB(3275, (__expression_G3qo7s(3276), String((__expression_G3qo7s(3277), (__expression_G3qo7s(3278), encoding) || 'utf8')))).toLowerCase());
                        }
                        {
                            __statement_U_9CRe(3279);
                            start = (__expression_G3qo7s(3280), (__expression_G3qo7s(3281), Number(start)) || 0);
                        }
                        {
                            __statement_U_9CRe(3282);
                            end = (__expression_G3qo7s(3285), (__expression_G3qo7s(3286), end) !== (__expression_G3qo7s(3287), undefined)) ? (__expression_G3qo7s(3283), (__expression_G3qo7s(3288), Number(end))) : (__expression_G3qo7s(3284), end = self.length);
                        }
                        if (__expression_G3qo7s(3289), (__expression_G3qo7s(3290), end) === (__expression_G3qo7s(3291), start)) {
                            __block_LCpqSB(625);
                            return __expression_G3qo7s(3292), '';
                        }
                        {
                            __statement_U_9CRe(3293);
                            var ret;
                        }
                        switch (__expression_G3qo7s(3294), encoding) {
                        case 'hex': {
                                __block_LCpqSB(626);
                                {
                                    __statement_U_9CRe(3295);
                                    ret = (__expression_G3qo7s(3296), _hexSlice(self, start, end));
                                }
                                break;
                            }
                        case 'utf8':
                        case 'utf-8': {
                                __block_LCpqSB(627);
                                {
                                    __statement_U_9CRe(3297);
                                    ret = (__expression_G3qo7s(3298), _utf8Slice(self, start, end));
                                }
                                break;
                            }
                        case 'ascii': {
                                __block_LCpqSB(628);
                                {
                                    __statement_U_9CRe(3299);
                                    ret = (__expression_G3qo7s(3300), _asciiSlice(self, start, end));
                                }
                                break;
                            }
                        case 'binary': {
                                __block_LCpqSB(629);
                                {
                                    __statement_U_9CRe(3301);
                                    ret = (__expression_G3qo7s(3302), _binarySlice(self, start, end));
                                }
                                break;
                            }
                        case 'base64': {
                                __block_LCpqSB(630);
                                {
                                    __statement_U_9CRe(3303);
                                    ret = (__expression_G3qo7s(3304), _base64Slice(self, start, end));
                                }
                                break;
                            }
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le': {
                                __block_LCpqSB(631);
                                {
                                    __statement_U_9CRe(3305);
                                    ret = (__expression_G3qo7s(3306), _utf16leSlice(self, start, end));
                                }
                                break;
                            }
                        default: {
                                __block_LCpqSB(632);
                                {
                                    __statement_U_9CRe(3307);
                                    throw new Error('Unknown encoding');
                                }
                            }
                        }
                        return __expression_G3qo7s(3308), ret;
                    };
                }
                {
                    __statement_U_9CRe(3309);
                    Buffer.prototype.toJSON = function () {
                        __block_LCpqSB(633);
                        return __expression_G3qo7s(3310), {
                            type: 'Buffer',
                            data: __extro_wrjjOl(3311, __intro_byTVoB(3311, Array.prototype.slice).call((__expression_G3qo7s(3312), this._arr || this), 0))
                        };
                    };
                }
                {
                    __statement_U_9CRe(3313);
                    Buffer.prototype.copy = function (target, target_start, start, end) {
                        __block_LCpqSB(634);
                        {
                            __statement_U_9CRe(3314);
                            var source = this;
                        }
                        if (__expression_G3qo7s(3315), !(__expression_G3qo7s(3316), start)) {
                            __block_LCpqSB(635);
                            {
                                __statement_U_9CRe(3317);
                                start = 0;
                            }
                        }
                        if (__expression_G3qo7s(3318), (__expression_G3qo7s(3319), !(__expression_G3qo7s(3320), end)) && (__expression_G3qo7s(3321), (__expression_G3qo7s(3322), end) !== 0)) {
                            __block_LCpqSB(636);
                            {
                                __statement_U_9CRe(3323);
                                end = this.length;
                            }
                        }
                        if (__expression_G3qo7s(3324), !(__expression_G3qo7s(3325), target_start)) {
                            __block_LCpqSB(637);
                            {
                                __statement_U_9CRe(3326);
                                target_start = 0;
                            }
                        }
                        if (__expression_G3qo7s(3327), (__expression_G3qo7s(3328), end) === (__expression_G3qo7s(3329), start)) {
                            __block_LCpqSB(638);
                            return __expression_G3qo7s(3330);
                        }
                        if (__expression_G3qo7s(3331), (__expression_G3qo7s(3332), target.length === 0) || (__expression_G3qo7s(3333), source.length === 0)) {
                            __block_LCpqSB(639);
                            return __expression_G3qo7s(3334);
                        }
                        {
                            __statement_U_9CRe(3335);
                            __expression_G3qo7s(3336), assert((__expression_G3qo7s(3337), (__expression_G3qo7s(3338), end) >= (__expression_G3qo7s(3339), start)), 'sourceEnd < sourceStart');
                        }
                        {
                            __statement_U_9CRe(3340);
                            __expression_G3qo7s(3341), assert((__expression_G3qo7s(3342), (__expression_G3qo7s(3343), (__expression_G3qo7s(3344), target_start) >= 0) && (__expression_G3qo7s(3345), (__expression_G3qo7s(3346), target_start) < target.length)), 'targetStart out of bounds');
                        }
                        {
                            __statement_U_9CRe(3347);
                            __expression_G3qo7s(3348), assert((__expression_G3qo7s(3349), (__expression_G3qo7s(3350), (__expression_G3qo7s(3351), start) >= 0) && (__expression_G3qo7s(3352), (__expression_G3qo7s(3353), start) < source.length)), 'sourceStart out of bounds');
                        }
                        {
                            __statement_U_9CRe(3354);
                            __expression_G3qo7s(3355), assert((__expression_G3qo7s(3356), (__expression_G3qo7s(3357), (__expression_G3qo7s(3358), end) >= 0) && (__expression_G3qo7s(3359), (__expression_G3qo7s(3360), end) <= source.length)), 'sourceEnd out of bounds');
                        }
                        if (__expression_G3qo7s(3361), (__expression_G3qo7s(3362), end) > this.length) {
                            __block_LCpqSB(640);
                            {
                                __statement_U_9CRe(3363);
                                end = this.length;
                            }
                        }
                        if (__expression_G3qo7s(3364), (__expression_G3qo7s(3365), target.length - (__expression_G3qo7s(3366), target_start)) < (__expression_G3qo7s(3367), (__expression_G3qo7s(3368), end) - (__expression_G3qo7s(3369), start))) {
                            __block_LCpqSB(641);
                            {
                                __statement_U_9CRe(3370);
                                end = (__expression_G3qo7s(3371), (__expression_G3qo7s(3372), target.length - (__expression_G3qo7s(3373), target_start)) + (__expression_G3qo7s(3374), start));
                            }
                        }
                        {
                            __statement_U_9CRe(3375);
                            var len = (__expression_G3qo7s(3376), (__expression_G3qo7s(3377), end) - (__expression_G3qo7s(3378), start));
                        }
                        if (__expression_G3qo7s(3379), (__expression_G3qo7s(3380), (__expression_G3qo7s(3381), len) < 100) || (__expression_G3qo7s(3382), !Buffer._useTypedArrays)) {
                            __block_LCpqSB(642);
                            for (var i = 0; __expression_G3qo7s(3383), (__expression_G3qo7s(3384), i) < (__expression_G3qo7s(3385), len); __expression_G3qo7s(3386), i++) {
                                __block_LCpqSB(643);
                                {
                                    __statement_U_9CRe(3387);
                                    target[__expression_G3qo7s(3388), (__expression_G3qo7s(3389), i) + (__expression_G3qo7s(3390), target_start)] = this[__expression_G3qo7s(3391), (__expression_G3qo7s(3392), i) + (__expression_G3qo7s(3393), start)];
                                }
                            }
                        } else {
                            __block_LCpqSB(644);
                            {
                                __statement_U_9CRe(3394);
                                __extro_wrjjOl(3395, __intro_byTVoB(3395, target)._set(__extro_wrjjOl(3396, __intro_byTVoB(3396, this).subarray(start, (__expression_G3qo7s(3397), (__expression_G3qo7s(3398), start) + (__expression_G3qo7s(3399), len)))), target_start));
                            }
                        }
                    };
                }
                function _base64Slice(buf, start, end) {
                    __block_LCpqSB(645);
                    if (__expression_G3qo7s(3400), (__expression_G3qo7s(3401), (__expression_G3qo7s(3402), start) === 0) && (__expression_G3qo7s(3403), (__expression_G3qo7s(3404), end) === buf.length)) {
                        __block_LCpqSB(646);
                        return __expression_G3qo7s(3405), __extro_wrjjOl(3406, __intro_byTVoB(3406, base64).fromByteArray(buf));
                    } else {
                        __block_LCpqSB(647);
                        return __expression_G3qo7s(3407), __extro_wrjjOl(3408, __intro_byTVoB(3408, base64).fromByteArray(__extro_wrjjOl(3409, __intro_byTVoB(3409, buf).slice(start, end))));
                    }
                }
                function _utf8Slice(buf, start, end) {
                    __block_LCpqSB(648);
                    {
                        __statement_U_9CRe(3410);
                        var res = '';
                    }
                    {
                        __statement_U_9CRe(3411);
                        var tmp = '';
                    }
                    {
                        __statement_U_9CRe(3412);
                        end = __extro_wrjjOl(3413, __intro_byTVoB(3413, Math).min(buf.length, end));
                    }
                    for (var i = start; __expression_G3qo7s(3414), (__expression_G3qo7s(3415), i) < (__expression_G3qo7s(3416), end); __expression_G3qo7s(3417), i++) {
                        __block_LCpqSB(649);
                        if (__expression_G3qo7s(3418), buf[i] <= 127) {
                            __block_LCpqSB(650);
                            {
                                __statement_U_9CRe(3419);
                                res += (__expression_G3qo7s(3420), (__expression_G3qo7s(3421), decodeUtf8Char(tmp)) + __extro_wrjjOl(3422, __intro_byTVoB(3422, String).fromCharCode(buf[i])));
                            }
                            {
                                __statement_U_9CRe(3423);
                                tmp = '';
                            }
                        } else {
                            __block_LCpqSB(651);
                            {
                                __statement_U_9CRe(3424);
                                tmp += (__expression_G3qo7s(3425), '%' + __extro_wrjjOl(3426, __intro_byTVoB(3426, buf[i]).toString(16)));
                            }
                        }
                    }
                    return __expression_G3qo7s(3427), (__expression_G3qo7s(3428), (__expression_G3qo7s(3429), res) + (__expression_G3qo7s(3430), decodeUtf8Char(tmp)));
                }
                function _asciiSlice(buf, start, end) {
                    __block_LCpqSB(652);
                    {
                        __statement_U_9CRe(3431);
                        var ret = '';
                    }
                    {
                        __statement_U_9CRe(3432);
                        end = __extro_wrjjOl(3433, __intro_byTVoB(3433, Math).min(buf.length, end));
                    }
                    for (var i = start; __expression_G3qo7s(3434), (__expression_G3qo7s(3435), i) < (__expression_G3qo7s(3436), end); __expression_G3qo7s(3437), i++) {
                        __block_LCpqSB(653);
                        {
                            __statement_U_9CRe(3438);
                            ret += __extro_wrjjOl(3439, __intro_byTVoB(3439, String).fromCharCode(buf[i]));
                        }
                    }
                    return __expression_G3qo7s(3440), ret;
                }
                function _binarySlice(buf, start, end) {
                    __block_LCpqSB(654);
                    return __expression_G3qo7s(3441), (__expression_G3qo7s(3442), _asciiSlice(buf, start, end));
                }
                function _hexSlice(buf, start, end) {
                    __block_LCpqSB(655);
                    {
                        __statement_U_9CRe(3443);
                        var len = buf.length;
                    }
                    if (__expression_G3qo7s(3444), (__expression_G3qo7s(3445), !(__expression_G3qo7s(3446), start)) || (__expression_G3qo7s(3447), (__expression_G3qo7s(3448), start) < 0)) {
                        __block_LCpqSB(656);
                        {
                            __statement_U_9CRe(3449);
                            start = 0;
                        }
                    }
                    if (__expression_G3qo7s(3450), (__expression_G3qo7s(3451), (__expression_G3qo7s(3452), !(__expression_G3qo7s(3453), end)) || (__expression_G3qo7s(3454), (__expression_G3qo7s(3455), end) < 0)) || (__expression_G3qo7s(3456), (__expression_G3qo7s(3457), end) > (__expression_G3qo7s(3458), len))) {
                        __block_LCpqSB(657);
                        {
                            __statement_U_9CRe(3459);
                            end = len;
                        }
                    }
                    {
                        __statement_U_9CRe(3460);
                        var out = '';
                    }
                    for (var i = start; __expression_G3qo7s(3461), (__expression_G3qo7s(3462), i) < (__expression_G3qo7s(3463), end); __expression_G3qo7s(3464), i++) {
                        __block_LCpqSB(658);
                        {
                            __statement_U_9CRe(3465);
                            out += (__expression_G3qo7s(3466), toHex(buf[i]));
                        }
                    }
                    return __expression_G3qo7s(3467), out;
                }
                function _utf16leSlice(buf, start, end) {
                    __block_LCpqSB(659);
                    {
                        __statement_U_9CRe(3468);
                        var bytes = __extro_wrjjOl(3469, __intro_byTVoB(3469, buf).slice(start, end));
                    }
                    {
                        __statement_U_9CRe(3470);
                        var res = '';
                    }
                    for (var i = 0; __expression_G3qo7s(3471), (__expression_G3qo7s(3472), i) < bytes.length; i += 2) {
                        __block_LCpqSB(660);
                        {
                            __statement_U_9CRe(3473);
                            res += __extro_wrjjOl(3474, __intro_byTVoB(3474, String).fromCharCode((__expression_G3qo7s(3475), bytes[i] + (__expression_G3qo7s(3476), bytes[__expression_G3qo7s(3477), (__expression_G3qo7s(3478), i) + 1] * 256))));
                        }
                    }
                    return __expression_G3qo7s(3479), res;
                }
                {
                    __statement_U_9CRe(3480);
                    Buffer.prototype.slice = function (start, end) {
                        __block_LCpqSB(661);
                        {
                            __statement_U_9CRe(3481);
                            var len = this.length;
                        }
                        {
                            __statement_U_9CRe(3482);
                            start = (__expression_G3qo7s(3483), clamp(start, len, 0));
                        }
                        {
                            __statement_U_9CRe(3484);
                            end = (__expression_G3qo7s(3485), clamp(end, len, len));
                        }
                        if (Buffer._useTypedArrays) {
                            __block_LCpqSB(662);
                            return __expression_G3qo7s(3486), __extro_wrjjOl(3487, __intro_byTVoB(3487, Buffer)._augment(__extro_wrjjOl(3488, __intro_byTVoB(3488, this).subarray(start, end))));
                        } else {
                            __block_LCpqSB(663);
                            {
                                __statement_U_9CRe(3489);
                                var sliceLen = (__expression_G3qo7s(3490), (__expression_G3qo7s(3491), end) - (__expression_G3qo7s(3492), start));
                            }
                            {
                                __statement_U_9CRe(3493);
                                var newBuf = new Buffer(sliceLen, undefined, true);
                            }
                            for (var i = 0; __expression_G3qo7s(3494), (__expression_G3qo7s(3495), i) < (__expression_G3qo7s(3496), sliceLen); __expression_G3qo7s(3497), i++) {
                                __block_LCpqSB(664);
                                {
                                    __statement_U_9CRe(3498);
                                    newBuf[i] = this[__expression_G3qo7s(3499), (__expression_G3qo7s(3500), i) + (__expression_G3qo7s(3501), start)];
                                }
                            }
                            return __expression_G3qo7s(3502), newBuf;
                        }
                    };
                }
                {
                    __statement_U_9CRe(3503);
                    Buffer.prototype.get = function (offset) {
                        __block_LCpqSB(665);
                        {
                            __statement_U_9CRe(3504);
                            __extro_wrjjOl(3505, __intro_byTVoB(3505, console).log('.get() is deprecated. Access using array indexes instead.'));
                        }
                        return __expression_G3qo7s(3506), __extro_wrjjOl(3507, __intro_byTVoB(3507, this).readUInt8(offset));
                    };
                }
                {
                    __statement_U_9CRe(3508);
                    Buffer.prototype.set = function (v, offset) {
                        __block_LCpqSB(666);
                        {
                            __statement_U_9CRe(3509);
                            __extro_wrjjOl(3510, __intro_byTVoB(3510, console).log('.set() is deprecated. Access using array indexes instead.'));
                        }
                        return __expression_G3qo7s(3511), __extro_wrjjOl(3512, __intro_byTVoB(3512, this).writeUInt8(v, offset));
                    };
                }
                {
                    __statement_U_9CRe(3513);
                    Buffer.prototype.readUInt8 = function (offset, noAssert) {
                        __block_LCpqSB(667);
                        if (__expression_G3qo7s(3514), !(__expression_G3qo7s(3515), noAssert)) {
                            __block_LCpqSB(668);
                            {
                                __statement_U_9CRe(3516);
                                __expression_G3qo7s(3517), assert((__expression_G3qo7s(3518), (__expression_G3qo7s(3519), (__expression_G3qo7s(3520), offset) !== (__expression_G3qo7s(3521), undefined)) && (__expression_G3qo7s(3522), (__expression_G3qo7s(3523), offset) !== null)), 'missing offset');
                            }
                            {
                                __statement_U_9CRe(3524);
                                __expression_G3qo7s(3525), assert((__expression_G3qo7s(3526), (__expression_G3qo7s(3527), offset) < this.length), 'Trying to read beyond buffer length');
                            }
                        }
                        if (__expression_G3qo7s(3528), (__expression_G3qo7s(3529), offset) >= this.length) {
                            __block_LCpqSB(669);
                            return __expression_G3qo7s(3530);
                        }
                        return __expression_G3qo7s(3531), this[offset];
                    };
                }
                function _readUInt16(buf, offset, littleEndian, noAssert) {
                    __block_LCpqSB(670);
                    if (__expression_G3qo7s(3532), !(__expression_G3qo7s(3533), noAssert)) {
                        __block_LCpqSB(671);
                        {
                            __statement_U_9CRe(3534);
                            __expression_G3qo7s(3535), assert((__expression_G3qo7s(3536), (__expression_G3qo7s(3537), typeof littleEndian) === 'boolean'), 'missing or invalid endian');
                        }
                        {
                            __statement_U_9CRe(3538);
                            __expression_G3qo7s(3539), assert((__expression_G3qo7s(3540), (__expression_G3qo7s(3541), (__expression_G3qo7s(3542), offset) !== (__expression_G3qo7s(3543), undefined)) && (__expression_G3qo7s(3544), (__expression_G3qo7s(3545), offset) !== null)), 'missing offset');
                        }
                        {
                            __statement_U_9CRe(3546);
                            __expression_G3qo7s(3547), assert((__expression_G3qo7s(3548), (__expression_G3qo7s(3549), (__expression_G3qo7s(3550), offset) + 1) < buf.length), 'Trying to read beyond buffer length');
                        }
                    }
                    {
                        __statement_U_9CRe(3551);
                        var len = buf.length;
                    }
                    if (__expression_G3qo7s(3552), (__expression_G3qo7s(3553), offset) >= (__expression_G3qo7s(3554), len)) {
                        __block_LCpqSB(672);
                        return __expression_G3qo7s(3555);
                    }
                    {
                        __statement_U_9CRe(3556);
                        var val;
                    }
                    if (__expression_G3qo7s(3557), littleEndian) {
                        __block_LCpqSB(673);
                        {
                            __statement_U_9CRe(3558);
                            val = buf[offset];
                        }
                        if (__expression_G3qo7s(3559), (__expression_G3qo7s(3560), (__expression_G3qo7s(3561), offset) + 1) < (__expression_G3qo7s(3562), len)) {
                            __block_LCpqSB(674);
                            {
                                __statement_U_9CRe(3563);
                                val |= (__expression_G3qo7s(3564), buf[__expression_G3qo7s(3565), (__expression_G3qo7s(3566), offset) + 1] << 8);
                            }
                        }
                    } else {
                        __block_LCpqSB(675);
                        {
                            __statement_U_9CRe(3567);
                            val = (__expression_G3qo7s(3568), buf[offset] << 8);
                        }
                        if (__expression_G3qo7s(3569), (__expression_G3qo7s(3570), (__expression_G3qo7s(3571), offset) + 1) < (__expression_G3qo7s(3572), len)) {
                            __block_LCpqSB(676);
                            {
                                __statement_U_9CRe(3573);
                                val |= buf[__expression_G3qo7s(3574), (__expression_G3qo7s(3575), offset) + 1];
                            }
                        }
                    }
                    return __expression_G3qo7s(3576), val;
                }
                {
                    __statement_U_9CRe(3577);
                    Buffer.prototype.readUInt16LE = function (offset, noAssert) {
                        __block_LCpqSB(677);
                        return __expression_G3qo7s(3578), (__expression_G3qo7s(3579), _readUInt16(this, offset, true, noAssert));
                    };
                }
                {
                    __statement_U_9CRe(3580);
                    Buffer.prototype.readUInt16BE = function (offset, noAssert) {
                        __block_LCpqSB(678);
                        return __expression_G3qo7s(3581), (__expression_G3qo7s(3582), _readUInt16(this, offset, false, noAssert));
                    };
                }
                function _readUInt32(buf, offset, littleEndian, noAssert) {
                    __block_LCpqSB(679);
                    if (__expression_G3qo7s(3583), !(__expression_G3qo7s(3584), noAssert)) {
                        __block_LCpqSB(680);
                        {
                            __statement_U_9CRe(3585);
                            __expression_G3qo7s(3586), assert((__expression_G3qo7s(3587), (__expression_G3qo7s(3588), typeof littleEndian) === 'boolean'), 'missing or invalid endian');
                        }
                        {
                            __statement_U_9CRe(3589);
                            __expression_G3qo7s(3590), assert((__expression_G3qo7s(3591), (__expression_G3qo7s(3592), (__expression_G3qo7s(3593), offset) !== (__expression_G3qo7s(3594), undefined)) && (__expression_G3qo7s(3595), (__expression_G3qo7s(3596), offset) !== null)), 'missing offset');
                        }
                        {
                            __statement_U_9CRe(3597);
                            __expression_G3qo7s(3598), assert((__expression_G3qo7s(3599), (__expression_G3qo7s(3600), (__expression_G3qo7s(3601), offset) + 3) < buf.length), 'Trying to read beyond buffer length');
                        }
                    }
                    {
                        __statement_U_9CRe(3602);
                        var len = buf.length;
                    }
                    if (__expression_G3qo7s(3603), (__expression_G3qo7s(3604), offset) >= (__expression_G3qo7s(3605), len)) {
                        __block_LCpqSB(681);
                        return __expression_G3qo7s(3606);
                    }
                    {
                        __statement_U_9CRe(3607);
                        var val;
                    }
                    if (__expression_G3qo7s(3608), littleEndian) {
                        __block_LCpqSB(682);
                        if (__expression_G3qo7s(3609), (__expression_G3qo7s(3610), (__expression_G3qo7s(3611), offset) + 2) < (__expression_G3qo7s(3612), len)) {
                            __block_LCpqSB(683);
                            {
                                __statement_U_9CRe(3613);
                                val = (__expression_G3qo7s(3614), buf[__expression_G3qo7s(3615), (__expression_G3qo7s(3616), offset) + 2] << 16);
                            }
                        }
                        if (__expression_G3qo7s(3617), (__expression_G3qo7s(3618), (__expression_G3qo7s(3619), offset) + 1) < (__expression_G3qo7s(3620), len)) {
                            __block_LCpqSB(684);
                            {
                                __statement_U_9CRe(3621);
                                val |= (__expression_G3qo7s(3622), buf[__expression_G3qo7s(3623), (__expression_G3qo7s(3624), offset) + 1] << 8);
                            }
                        }
                        {
                            __statement_U_9CRe(3625);
                            val |= buf[offset];
                        }
                        if (__expression_G3qo7s(3626), (__expression_G3qo7s(3627), (__expression_G3qo7s(3628), offset) + 3) < (__expression_G3qo7s(3629), len)) {
                            __block_LCpqSB(685);
                            {
                                __statement_U_9CRe(3630);
                                val = (__expression_G3qo7s(3631), (__expression_G3qo7s(3632), val) + (__expression_G3qo7s(3633), (__expression_G3qo7s(3634), buf[__expression_G3qo7s(3635), (__expression_G3qo7s(3636), offset) + 3] << 24) >>> 0));
                            }
                        }
                    } else {
                        __block_LCpqSB(686);
                        if (__expression_G3qo7s(3637), (__expression_G3qo7s(3638), (__expression_G3qo7s(3639), offset) + 1) < (__expression_G3qo7s(3640), len)) {
                            __block_LCpqSB(687);
                            {
                                __statement_U_9CRe(3641);
                                val = (__expression_G3qo7s(3642), buf[__expression_G3qo7s(3643), (__expression_G3qo7s(3644), offset) + 1] << 16);
                            }
                        }
                        if (__expression_G3qo7s(3645), (__expression_G3qo7s(3646), (__expression_G3qo7s(3647), offset) + 2) < (__expression_G3qo7s(3648), len)) {
                            __block_LCpqSB(688);
                            {
                                __statement_U_9CRe(3649);
                                val |= (__expression_G3qo7s(3650), buf[__expression_G3qo7s(3651), (__expression_G3qo7s(3652), offset) + 2] << 8);
                            }
                        }
                        if (__expression_G3qo7s(3653), (__expression_G3qo7s(3654), (__expression_G3qo7s(3655), offset) + 3) < (__expression_G3qo7s(3656), len)) {
                            __block_LCpqSB(689);
                            {
                                __statement_U_9CRe(3657);
                                val |= buf[__expression_G3qo7s(3658), (__expression_G3qo7s(3659), offset) + 3];
                            }
                        }
                        {
                            __statement_U_9CRe(3660);
                            val = (__expression_G3qo7s(3661), (__expression_G3qo7s(3662), val) + (__expression_G3qo7s(3663), (__expression_G3qo7s(3664), buf[offset] << 24) >>> 0));
                        }
                    }
                    return __expression_G3qo7s(3665), val;
                }
                {
                    __statement_U_9CRe(3666);
                    Buffer.prototype.readUInt32LE = function (offset, noAssert) {
                        __block_LCpqSB(690);
                        return __expression_G3qo7s(3667), (__expression_G3qo7s(3668), _readUInt32(this, offset, true, noAssert));
                    };
                }
                {
                    __statement_U_9CRe(3669);
                    Buffer.prototype.readUInt32BE = function (offset, noAssert) {
                        __block_LCpqSB(691);
                        return __expression_G3qo7s(3670), (__expression_G3qo7s(3671), _readUInt32(this, offset, false, noAssert));
                    };
                }
                {
                    __statement_U_9CRe(3672);
                    Buffer.prototype.readInt8 = function (offset, noAssert) {
                        __block_LCpqSB(692);
                        if (__expression_G3qo7s(3673), !(__expression_G3qo7s(3674), noAssert)) {
                            __block_LCpqSB(693);
                            {
                                __statement_U_9CRe(3675);
                                __expression_G3qo7s(3676), assert((__expression_G3qo7s(3677), (__expression_G3qo7s(3678), (__expression_G3qo7s(3679), offset) !== (__expression_G3qo7s(3680), undefined)) && (__expression_G3qo7s(3681), (__expression_G3qo7s(3682), offset) !== null)), 'missing offset');
                            }
                            {
                                __statement_U_9CRe(3683);
                                __expression_G3qo7s(3684), assert((__expression_G3qo7s(3685), (__expression_G3qo7s(3686), offset) < this.length), 'Trying to read beyond buffer length');
                            }
                        }
                        if (__expression_G3qo7s(3687), (__expression_G3qo7s(3688), offset) >= this.length) {
                            __block_LCpqSB(694);
                            return __expression_G3qo7s(3689);
                        }
                        {
                            __statement_U_9CRe(3690);
                            var neg = (__expression_G3qo7s(3691), this[offset] & 128);
                        }
                        if (__expression_G3qo7s(3692), neg) {
                            __block_LCpqSB(695);
                            return __expression_G3qo7s(3693), (__expression_G3qo7s(3694), (__expression_G3qo7s(3695), (__expression_G3qo7s(3696), 255 - this[offset]) + 1) * (__expression_G3qo7s(3697), -1));
                        } else {
                            __block_LCpqSB(696);
                            return __expression_G3qo7s(3698), this[offset];
                        }
                    };
                }
                function _readInt16(buf, offset, littleEndian, noAssert) {
                    __block_LCpqSB(697);
                    if (__expression_G3qo7s(3699), !(__expression_G3qo7s(3700), noAssert)) {
                        __block_LCpqSB(698);
                        {
                            __statement_U_9CRe(3701);
                            __expression_G3qo7s(3702), assert((__expression_G3qo7s(3703), (__expression_G3qo7s(3704), typeof littleEndian) === 'boolean'), 'missing or invalid endian');
                        }
                        {
                            __statement_U_9CRe(3705);
                            __expression_G3qo7s(3706), assert((__expression_G3qo7s(3707), (__expression_G3qo7s(3708), (__expression_G3qo7s(3709), offset) !== (__expression_G3qo7s(3710), undefined)) && (__expression_G3qo7s(3711), (__expression_G3qo7s(3712), offset) !== null)), 'missing offset');
                        }
                        {
                            __statement_U_9CRe(3713);
                            __expression_G3qo7s(3714), assert((__expression_G3qo7s(3715), (__expression_G3qo7s(3716), (__expression_G3qo7s(3717), offset) + 1) < buf.length), 'Trying to read beyond buffer length');
                        }
                    }
                    {
                        __statement_U_9CRe(3718);
                        var len = buf.length;
                    }
                    if (__expression_G3qo7s(3719), (__expression_G3qo7s(3720), offset) >= (__expression_G3qo7s(3721), len)) {
                        __block_LCpqSB(699);
                        return __expression_G3qo7s(3722);
                    }
                    {
                        __statement_U_9CRe(3723);
                        var val = (__expression_G3qo7s(3724), _readUInt16(buf, offset, littleEndian, true));
                    }
                    {
                        __statement_U_9CRe(3725);
                        var neg = (__expression_G3qo7s(3726), (__expression_G3qo7s(3727), val) & 32768);
                    }
                    if (__expression_G3qo7s(3728), neg) {
                        __block_LCpqSB(700);
                        return __expression_G3qo7s(3729), (__expression_G3qo7s(3730), (__expression_G3qo7s(3731), (__expression_G3qo7s(3732), 65535 - (__expression_G3qo7s(3733), val)) + 1) * (__expression_G3qo7s(3734), -1));
                    } else {
                        __block_LCpqSB(701);
                        return __expression_G3qo7s(3735), val;
                    }
                }
                {
                    __statement_U_9CRe(3736);
                    Buffer.prototype.readInt16LE = function (offset, noAssert) {
                        __block_LCpqSB(702);
                        return __expression_G3qo7s(3737), (__expression_G3qo7s(3738), _readInt16(this, offset, true, noAssert));
                    };
                }
                {
                    __statement_U_9CRe(3739);
                    Buffer.prototype.readInt16BE = function (offset, noAssert) {
                        __block_LCpqSB(703);
                        return __expression_G3qo7s(3740), (__expression_G3qo7s(3741), _readInt16(this, offset, false, noAssert));
                    };
                }
                function _readInt32(buf, offset, littleEndian, noAssert) {
                    __block_LCpqSB(704);
                    if (__expression_G3qo7s(3742), !(__expression_G3qo7s(3743), noAssert)) {
                        __block_LCpqSB(705);
                        {
                            __statement_U_9CRe(3744);
                            __expression_G3qo7s(3745), assert((__expression_G3qo7s(3746), (__expression_G3qo7s(3747), typeof littleEndian) === 'boolean'), 'missing or invalid endian');
                        }
                        {
                            __statement_U_9CRe(3748);
                            __expression_G3qo7s(3749), assert((__expression_G3qo7s(3750), (__expression_G3qo7s(3751), (__expression_G3qo7s(3752), offset) !== (__expression_G3qo7s(3753), undefined)) && (__expression_G3qo7s(3754), (__expression_G3qo7s(3755), offset) !== null)), 'missing offset');
                        }
                        {
                            __statement_U_9CRe(3756);
                            __expression_G3qo7s(3757), assert((__expression_G3qo7s(3758), (__expression_G3qo7s(3759), (__expression_G3qo7s(3760), offset) + 3) < buf.length), 'Trying to read beyond buffer length');
                        }
                    }
                    {
                        __statement_U_9CRe(3761);
                        var len = buf.length;
                    }
                    if (__expression_G3qo7s(3762), (__expression_G3qo7s(3763), offset) >= (__expression_G3qo7s(3764), len)) {
                        __block_LCpqSB(706);
                        return __expression_G3qo7s(3765);
                    }
                    {
                        __statement_U_9CRe(3766);
                        var val = (__expression_G3qo7s(3767), _readUInt32(buf, offset, littleEndian, true));
                    }
                    {
                        __statement_U_9CRe(3768);
                        var neg = (__expression_G3qo7s(3769), (__expression_G3qo7s(3770), val) & 2147483648);
                    }
                    if (__expression_G3qo7s(3771), neg) {
                        __block_LCpqSB(707);
                        return __expression_G3qo7s(3772), (__expression_G3qo7s(3773), (__expression_G3qo7s(3774), (__expression_G3qo7s(3775), 4294967295 - (__expression_G3qo7s(3776), val)) + 1) * (__expression_G3qo7s(3777), -1));
                    } else {
                        __block_LCpqSB(708);
                        return __expression_G3qo7s(3778), val;
                    }
                }
                {
                    __statement_U_9CRe(3779);
                    Buffer.prototype.readInt32LE = function (offset, noAssert) {
                        __block_LCpqSB(709);
                        return __expression_G3qo7s(3780), (__expression_G3qo7s(3781), _readInt32(this, offset, true, noAssert));
                    };
                }
                {
                    __statement_U_9CRe(3782);
                    Buffer.prototype.readInt32BE = function (offset, noAssert) {
                        __block_LCpqSB(710);
                        return __expression_G3qo7s(3783), (__expression_G3qo7s(3784), _readInt32(this, offset, false, noAssert));
                    };
                }
                function _readFloat(buf, offset, littleEndian, noAssert) {
                    __block_LCpqSB(711);
                    if (__expression_G3qo7s(3785), !(__expression_G3qo7s(3786), noAssert)) {
                        __block_LCpqSB(712);
                        {
                            __statement_U_9CRe(3787);
                            __expression_G3qo7s(3788), assert((__expression_G3qo7s(3789), (__expression_G3qo7s(3790), typeof littleEndian) === 'boolean'), 'missing or invalid endian');
                        }
                        {
                            __statement_U_9CRe(3791);
                            __expression_G3qo7s(3792), assert((__expression_G3qo7s(3793), (__expression_G3qo7s(3794), (__expression_G3qo7s(3795), offset) + 3) < buf.length), 'Trying to read beyond buffer length');
                        }
                    }
                    return __expression_G3qo7s(3796), __extro_wrjjOl(3797, __intro_byTVoB(3797, ieee754).read(buf, offset, littleEndian, 23, 4));
                }
                {
                    __statement_U_9CRe(3798);
                    Buffer.prototype.readFloatLE = function (offset, noAssert) {
                        __block_LCpqSB(713);
                        return __expression_G3qo7s(3799), (__expression_G3qo7s(3800), _readFloat(this, offset, true, noAssert));
                    };
                }
                {
                    __statement_U_9CRe(3801);
                    Buffer.prototype.readFloatBE = function (offset, noAssert) {
                        __block_LCpqSB(714);
                        return __expression_G3qo7s(3802), (__expression_G3qo7s(3803), _readFloat(this, offset, false, noAssert));
                    };
                }
                function _readDouble(buf, offset, littleEndian, noAssert) {
                    __block_LCpqSB(715);
                    if (__expression_G3qo7s(3804), !(__expression_G3qo7s(3805), noAssert)) {
                        __block_LCpqSB(716);
                        {
                            __statement_U_9CRe(3806);
                            __expression_G3qo7s(3807), assert((__expression_G3qo7s(3808), (__expression_G3qo7s(3809), typeof littleEndian) === 'boolean'), 'missing or invalid endian');
                        }
                        {
                            __statement_U_9CRe(3810);
                            __expression_G3qo7s(3811), assert((__expression_G3qo7s(3812), (__expression_G3qo7s(3813), (__expression_G3qo7s(3814), offset) + 7) < buf.length), 'Trying to read beyond buffer length');
                        }
                    }
                    return __expression_G3qo7s(3815), __extro_wrjjOl(3816, __intro_byTVoB(3816, ieee754).read(buf, offset, littleEndian, 52, 8));
                }
                {
                    __statement_U_9CRe(3817);
                    Buffer.prototype.readDoubleLE = function (offset, noAssert) {
                        __block_LCpqSB(717);
                        return __expression_G3qo7s(3818), (__expression_G3qo7s(3819), _readDouble(this, offset, true, noAssert));
                    };
                }
                {
                    __statement_U_9CRe(3820);
                    Buffer.prototype.readDoubleBE = function (offset, noAssert) {
                        __block_LCpqSB(718);
                        return __expression_G3qo7s(3821), (__expression_G3qo7s(3822), _readDouble(this, offset, false, noAssert));
                    };
                }
                {
                    __statement_U_9CRe(3823);
                    Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
                        __block_LCpqSB(719);
                        if (__expression_G3qo7s(3824), !(__expression_G3qo7s(3825), noAssert)) {
                            __block_LCpqSB(720);
                            {
                                __statement_U_9CRe(3826);
                                __expression_G3qo7s(3827), assert((__expression_G3qo7s(3828), (__expression_G3qo7s(3829), (__expression_G3qo7s(3830), value) !== (__expression_G3qo7s(3831), undefined)) && (__expression_G3qo7s(3832), (__expression_G3qo7s(3833), value) !== null)), 'missing value');
                            }
                            {
                                __statement_U_9CRe(3834);
                                __expression_G3qo7s(3835), assert((__expression_G3qo7s(3836), (__expression_G3qo7s(3837), (__expression_G3qo7s(3838), offset) !== (__expression_G3qo7s(3839), undefined)) && (__expression_G3qo7s(3840), (__expression_G3qo7s(3841), offset) !== null)), 'missing offset');
                            }
                            {
                                __statement_U_9CRe(3842);
                                __expression_G3qo7s(3843), assert((__expression_G3qo7s(3844), (__expression_G3qo7s(3845), offset) < this.length), 'trying to write beyond buffer length');
                            }
                            {
                                __statement_U_9CRe(3846);
                                __expression_G3qo7s(3847), verifuint(value, 255);
                            }
                        }
                        if (__expression_G3qo7s(3848), (__expression_G3qo7s(3849), offset) >= this.length) {
                            __block_LCpqSB(721);
                            return __expression_G3qo7s(3850);
                        }
                        {
                            __statement_U_9CRe(3851);
                            this[offset] = value;
                        }
                    };
                }
                function _writeUInt16(buf, value, offset, littleEndian, noAssert) {
                    __block_LCpqSB(722);
                    if (__expression_G3qo7s(3852), !(__expression_G3qo7s(3853), noAssert)) {
                        __block_LCpqSB(723);
                        {
                            __statement_U_9CRe(3854);
                            __expression_G3qo7s(3855), assert((__expression_G3qo7s(3856), (__expression_G3qo7s(3857), (__expression_G3qo7s(3858), value) !== (__expression_G3qo7s(3859), undefined)) && (__expression_G3qo7s(3860), (__expression_G3qo7s(3861), value) !== null)), 'missing value');
                        }
                        {
                            __statement_U_9CRe(3862);
                            __expression_G3qo7s(3863), assert((__expression_G3qo7s(3864), (__expression_G3qo7s(3865), typeof littleEndian) === 'boolean'), 'missing or invalid endian');
                        }
                        {
                            __statement_U_9CRe(3866);
                            __expression_G3qo7s(3867), assert((__expression_G3qo7s(3868), (__expression_G3qo7s(3869), (__expression_G3qo7s(3870), offset) !== (__expression_G3qo7s(3871), undefined)) && (__expression_G3qo7s(3872), (__expression_G3qo7s(3873), offset) !== null)), 'missing offset');
                        }
                        {
                            __statement_U_9CRe(3874);
                            __expression_G3qo7s(3875), assert((__expression_G3qo7s(3876), (__expression_G3qo7s(3877), (__expression_G3qo7s(3878), offset) + 1) < buf.length), 'trying to write beyond buffer length');
                        }
                        {
                            __statement_U_9CRe(3879);
                            __expression_G3qo7s(3880), verifuint(value, 65535);
                        }
                    }
                    {
                        __statement_U_9CRe(3881);
                        var len = buf.length;
                    }
                    if (__expression_G3qo7s(3882), (__expression_G3qo7s(3883), offset) >= (__expression_G3qo7s(3884), len)) {
                        __block_LCpqSB(724);
                        return __expression_G3qo7s(3885);
                    }
                    for (var i = 0, j = __extro_wrjjOl(3886, __intro_byTVoB(3886, Math).min((__expression_G3qo7s(3887), (__expression_G3qo7s(3888), len) - (__expression_G3qo7s(3889), offset)), 2)); __expression_G3qo7s(3890), (__expression_G3qo7s(3891), i) < (__expression_G3qo7s(3892), j); __expression_G3qo7s(3893), i++) {
                        __block_LCpqSB(725);
                        {
                            __statement_U_9CRe(3894);
                            buf[__expression_G3qo7s(3895), (__expression_G3qo7s(3896), offset) + (__expression_G3qo7s(3897), i)] = (__expression_G3qo7s(3898), (__expression_G3qo7s(3899), (__expression_G3qo7s(3900), value) & (__expression_G3qo7s(3901), 255 << (__expression_G3qo7s(3902), 8 * ((__expression_G3qo7s(3905), littleEndian) ? (__expression_G3qo7s(3903), i) : (__expression_G3qo7s(3904), (__expression_G3qo7s(3906), 1 - (__expression_G3qo7s(3907), i))))))) >>> (__expression_G3qo7s(3908), ((__expression_G3qo7s(3911), littleEndian) ? (__expression_G3qo7s(3909), i) : (__expression_G3qo7s(3910), (__expression_G3qo7s(3912), 1 - (__expression_G3qo7s(3913), i)))) * 8));
                        }
                    }
                }
                {
                    __statement_U_9CRe(3914);
                    Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
                        __block_LCpqSB(726);
                        {
                            __statement_U_9CRe(3915);
                            __expression_G3qo7s(3916), _writeUInt16(this, value, offset, true, noAssert);
                        }
                    };
                }
                {
                    __statement_U_9CRe(3917);
                    Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
                        __block_LCpqSB(727);
                        {
                            __statement_U_9CRe(3918);
                            __expression_G3qo7s(3919), _writeUInt16(this, value, offset, false, noAssert);
                        }
                    };
                }
                function _writeUInt32(buf, value, offset, littleEndian, noAssert) {
                    __block_LCpqSB(728);
                    if (__expression_G3qo7s(3920), !(__expression_G3qo7s(3921), noAssert)) {
                        __block_LCpqSB(729);
                        {
                            __statement_U_9CRe(3922);
                            __expression_G3qo7s(3923), assert((__expression_G3qo7s(3924), (__expression_G3qo7s(3925), (__expression_G3qo7s(3926), value) !== (__expression_G3qo7s(3927), undefined)) && (__expression_G3qo7s(3928), (__expression_G3qo7s(3929), value) !== null)), 'missing value');
                        }
                        {
                            __statement_U_9CRe(3930);
                            __expression_G3qo7s(3931), assert((__expression_G3qo7s(3932), (__expression_G3qo7s(3933), typeof littleEndian) === 'boolean'), 'missing or invalid endian');
                        }
                        {
                            __statement_U_9CRe(3934);
                            __expression_G3qo7s(3935), assert((__expression_G3qo7s(3936), (__expression_G3qo7s(3937), (__expression_G3qo7s(3938), offset) !== (__expression_G3qo7s(3939), undefined)) && (__expression_G3qo7s(3940), (__expression_G3qo7s(3941), offset) !== null)), 'missing offset');
                        }
                        {
                            __statement_U_9CRe(3942);
                            __expression_G3qo7s(3943), assert((__expression_G3qo7s(3944), (__expression_G3qo7s(3945), (__expression_G3qo7s(3946), offset) + 3) < buf.length), 'trying to write beyond buffer length');
                        }
                        {
                            __statement_U_9CRe(3947);
                            __expression_G3qo7s(3948), verifuint(value, 4294967295);
                        }
                    }
                    {
                        __statement_U_9CRe(3949);
                        var len = buf.length;
                    }
                    if (__expression_G3qo7s(3950), (__expression_G3qo7s(3951), offset) >= (__expression_G3qo7s(3952), len)) {
                        __block_LCpqSB(730);
                        return __expression_G3qo7s(3953);
                    }
                    for (var i = 0, j = __extro_wrjjOl(3954, __intro_byTVoB(3954, Math).min((__expression_G3qo7s(3955), (__expression_G3qo7s(3956), len) - (__expression_G3qo7s(3957), offset)), 4)); __expression_G3qo7s(3958), (__expression_G3qo7s(3959), i) < (__expression_G3qo7s(3960), j); __expression_G3qo7s(3961), i++) {
                        __block_LCpqSB(731);
                        {
                            __statement_U_9CRe(3962);
                            buf[__expression_G3qo7s(3963), (__expression_G3qo7s(3964), offset) + (__expression_G3qo7s(3965), i)] = (__expression_G3qo7s(3966), (__expression_G3qo7s(3967), (__expression_G3qo7s(3968), value) >>> (__expression_G3qo7s(3969), ((__expression_G3qo7s(3972), littleEndian) ? (__expression_G3qo7s(3970), i) : (__expression_G3qo7s(3971), (__expression_G3qo7s(3973), 3 - (__expression_G3qo7s(3974), i)))) * 8)) & 255);
                        }
                    }
                }
                {
                    __statement_U_9CRe(3975);
                    Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
                        __block_LCpqSB(732);
                        {
                            __statement_U_9CRe(3976);
                            __expression_G3qo7s(3977), _writeUInt32(this, value, offset, true, noAssert);
                        }
                    };
                }
                {
                    __statement_U_9CRe(3978);
                    Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
                        __block_LCpqSB(733);
                        {
                            __statement_U_9CRe(3979);
                            __expression_G3qo7s(3980), _writeUInt32(this, value, offset, false, noAssert);
                        }
                    };
                }
                {
                    __statement_U_9CRe(3981);
                    Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
                        __block_LCpqSB(734);
                        if (__expression_G3qo7s(3982), !(__expression_G3qo7s(3983), noAssert)) {
                            __block_LCpqSB(735);
                            {
                                __statement_U_9CRe(3984);
                                __expression_G3qo7s(3985), assert((__expression_G3qo7s(3986), (__expression_G3qo7s(3987), (__expression_G3qo7s(3988), value) !== (__expression_G3qo7s(3989), undefined)) && (__expression_G3qo7s(3990), (__expression_G3qo7s(3991), value) !== null)), 'missing value');
                            }
                            {
                                __statement_U_9CRe(3992);
                                __expression_G3qo7s(3993), assert((__expression_G3qo7s(3994), (__expression_G3qo7s(3995), (__expression_G3qo7s(3996), offset) !== (__expression_G3qo7s(3997), undefined)) && (__expression_G3qo7s(3998), (__expression_G3qo7s(3999), offset) !== null)), 'missing offset');
                            }
                            {
                                __statement_U_9CRe(4000);
                                __expression_G3qo7s(4001), assert((__expression_G3qo7s(4002), (__expression_G3qo7s(4003), offset) < this.length), 'Trying to write beyond buffer length');
                            }
                            {
                                __statement_U_9CRe(4004);
                                __expression_G3qo7s(4005), verifsint(value, 127, (__expression_G3qo7s(4006), -128));
                            }
                        }
                        if (__expression_G3qo7s(4007), (__expression_G3qo7s(4008), offset) >= this.length) {
                            __block_LCpqSB(736);
                            return __expression_G3qo7s(4009);
                        }
                        if (__expression_G3qo7s(4010), (__expression_G3qo7s(4011), value) >= 0) {
                            __block_LCpqSB(737);
                            {
                                __statement_U_9CRe(4012);
                                __extro_wrjjOl(4013, __intro_byTVoB(4013, this).writeUInt8(value, offset, noAssert));
                            }
                        } else {
                            __block_LCpqSB(738);
                            {
                                __statement_U_9CRe(4014);
                                __extro_wrjjOl(4015, __intro_byTVoB(4015, this).writeUInt8((__expression_G3qo7s(4016), (__expression_G3qo7s(4017), 255 + (__expression_G3qo7s(4018), value)) + 1), offset, noAssert));
                            }
                        }
                    };
                }
                function _writeInt16(buf, value, offset, littleEndian, noAssert) {
                    __block_LCpqSB(739);
                    if (__expression_G3qo7s(4019), !(__expression_G3qo7s(4020), noAssert)) {
                        __block_LCpqSB(740);
                        {
                            __statement_U_9CRe(4021);
                            __expression_G3qo7s(4022), assert((__expression_G3qo7s(4023), (__expression_G3qo7s(4024), (__expression_G3qo7s(4025), value) !== (__expression_G3qo7s(4026), undefined)) && (__expression_G3qo7s(4027), (__expression_G3qo7s(4028), value) !== null)), 'missing value');
                        }
                        {
                            __statement_U_9CRe(4029);
                            __expression_G3qo7s(4030), assert((__expression_G3qo7s(4031), (__expression_G3qo7s(4032), typeof littleEndian) === 'boolean'), 'missing or invalid endian');
                        }
                        {
                            __statement_U_9CRe(4033);
                            __expression_G3qo7s(4034), assert((__expression_G3qo7s(4035), (__expression_G3qo7s(4036), (__expression_G3qo7s(4037), offset) !== (__expression_G3qo7s(4038), undefined)) && (__expression_G3qo7s(4039), (__expression_G3qo7s(4040), offset) !== null)), 'missing offset');
                        }
                        {
                            __statement_U_9CRe(4041);
                            __expression_G3qo7s(4042), assert((__expression_G3qo7s(4043), (__expression_G3qo7s(4044), (__expression_G3qo7s(4045), offset) + 1) < buf.length), 'Trying to write beyond buffer length');
                        }
                        {
                            __statement_U_9CRe(4046);
                            __expression_G3qo7s(4047), verifsint(value, 32767, (__expression_G3qo7s(4048), -32768));
                        }
                    }
                    {
                        __statement_U_9CRe(4049);
                        var len = buf.length;
                    }
                    if (__expression_G3qo7s(4050), (__expression_G3qo7s(4051), offset) >= (__expression_G3qo7s(4052), len)) {
                        __block_LCpqSB(741);
                        return __expression_G3qo7s(4053);
                    }
                    if (__expression_G3qo7s(4054), (__expression_G3qo7s(4055), value) >= 0) {
                        __block_LCpqSB(742);
                        {
                            __statement_U_9CRe(4056);
                            __expression_G3qo7s(4057), _writeUInt16(buf, value, offset, littleEndian, noAssert);
                        }
                    } else {
                        __block_LCpqSB(743);
                        {
                            __statement_U_9CRe(4058);
                            __expression_G3qo7s(4059), _writeUInt16(buf, (__expression_G3qo7s(4060), (__expression_G3qo7s(4061), 65535 + (__expression_G3qo7s(4062), value)) + 1), offset, littleEndian, noAssert);
                        }
                    }
                }
                {
                    __statement_U_9CRe(4063);
                    Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
                        __block_LCpqSB(744);
                        {
                            __statement_U_9CRe(4064);
                            __expression_G3qo7s(4065), _writeInt16(this, value, offset, true, noAssert);
                        }
                    };
                }
                {
                    __statement_U_9CRe(4066);
                    Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
                        __block_LCpqSB(745);
                        {
                            __statement_U_9CRe(4067);
                            __expression_G3qo7s(4068), _writeInt16(this, value, offset, false, noAssert);
                        }
                    };
                }
                function _writeInt32(buf, value, offset, littleEndian, noAssert) {
                    __block_LCpqSB(746);
                    if (__expression_G3qo7s(4069), !(__expression_G3qo7s(4070), noAssert)) {
                        __block_LCpqSB(747);
                        {
                            __statement_U_9CRe(4071);
                            __expression_G3qo7s(4072), assert((__expression_G3qo7s(4073), (__expression_G3qo7s(4074), (__expression_G3qo7s(4075), value) !== (__expression_G3qo7s(4076), undefined)) && (__expression_G3qo7s(4077), (__expression_G3qo7s(4078), value) !== null)), 'missing value');
                        }
                        {
                            __statement_U_9CRe(4079);
                            __expression_G3qo7s(4080), assert((__expression_G3qo7s(4081), (__expression_G3qo7s(4082), typeof littleEndian) === 'boolean'), 'missing or invalid endian');
                        }
                        {
                            __statement_U_9CRe(4083);
                            __expression_G3qo7s(4084), assert((__expression_G3qo7s(4085), (__expression_G3qo7s(4086), (__expression_G3qo7s(4087), offset) !== (__expression_G3qo7s(4088), undefined)) && (__expression_G3qo7s(4089), (__expression_G3qo7s(4090), offset) !== null)), 'missing offset');
                        }
                        {
                            __statement_U_9CRe(4091);
                            __expression_G3qo7s(4092), assert((__expression_G3qo7s(4093), (__expression_G3qo7s(4094), (__expression_G3qo7s(4095), offset) + 3) < buf.length), 'Trying to write beyond buffer length');
                        }
                        {
                            __statement_U_9CRe(4096);
                            __expression_G3qo7s(4097), verifsint(value, 2147483647, (__expression_G3qo7s(4098), -2147483648));
                        }
                    }
                    {
                        __statement_U_9CRe(4099);
                        var len = buf.length;
                    }
                    if (__expression_G3qo7s(4100), (__expression_G3qo7s(4101), offset) >= (__expression_G3qo7s(4102), len)) {
                        __block_LCpqSB(748);
                        return __expression_G3qo7s(4103);
                    }
                    if (__expression_G3qo7s(4104), (__expression_G3qo7s(4105), value) >= 0) {
                        __block_LCpqSB(749);
                        {
                            __statement_U_9CRe(4106);
                            __expression_G3qo7s(4107), _writeUInt32(buf, value, offset, littleEndian, noAssert);
                        }
                    } else {
                        __block_LCpqSB(750);
                        {
                            __statement_U_9CRe(4108);
                            __expression_G3qo7s(4109), _writeUInt32(buf, (__expression_G3qo7s(4110), (__expression_G3qo7s(4111), 4294967295 + (__expression_G3qo7s(4112), value)) + 1), offset, littleEndian, noAssert);
                        }
                    }
                }
                {
                    __statement_U_9CRe(4113);
                    Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
                        __block_LCpqSB(751);
                        {
                            __statement_U_9CRe(4114);
                            __expression_G3qo7s(4115), _writeInt32(this, value, offset, true, noAssert);
                        }
                    };
                }
                {
                    __statement_U_9CRe(4116);
                    Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
                        __block_LCpqSB(752);
                        {
                            __statement_U_9CRe(4117);
                            __expression_G3qo7s(4118), _writeInt32(this, value, offset, false, noAssert);
                        }
                    };
                }
                function _writeFloat(buf, value, offset, littleEndian, noAssert) {
                    __block_LCpqSB(753);
                    if (__expression_G3qo7s(4119), !(__expression_G3qo7s(4120), noAssert)) {
                        __block_LCpqSB(754);
                        {
                            __statement_U_9CRe(4121);
                            __expression_G3qo7s(4122), assert((__expression_G3qo7s(4123), (__expression_G3qo7s(4124), (__expression_G3qo7s(4125), value) !== (__expression_G3qo7s(4126), undefined)) && (__expression_G3qo7s(4127), (__expression_G3qo7s(4128), value) !== null)), 'missing value');
                        }
                        {
                            __statement_U_9CRe(4129);
                            __expression_G3qo7s(4130), assert((__expression_G3qo7s(4131), (__expression_G3qo7s(4132), typeof littleEndian) === 'boolean'), 'missing or invalid endian');
                        }
                        {
                            __statement_U_9CRe(4133);
                            __expression_G3qo7s(4134), assert((__expression_G3qo7s(4135), (__expression_G3qo7s(4136), (__expression_G3qo7s(4137), offset) !== (__expression_G3qo7s(4138), undefined)) && (__expression_G3qo7s(4139), (__expression_G3qo7s(4140), offset) !== null)), 'missing offset');
                        }
                        {
                            __statement_U_9CRe(4141);
                            __expression_G3qo7s(4142), assert((__expression_G3qo7s(4143), (__expression_G3qo7s(4144), (__expression_G3qo7s(4145), offset) + 3) < buf.length), 'Trying to write beyond buffer length');
                        }
                        {
                            __statement_U_9CRe(4146);
                            __expression_G3qo7s(4147), verifIEEE754(value, 3.4028234663852886e+38, (__expression_G3qo7s(4148), -3.4028234663852886e+38));
                        }
                    }
                    {
                        __statement_U_9CRe(4149);
                        var len = buf.length;
                    }
                    if (__expression_G3qo7s(4150), (__expression_G3qo7s(4151), offset) >= (__expression_G3qo7s(4152), len)) {
                        __block_LCpqSB(755);
                        return __expression_G3qo7s(4153);
                    }
                    {
                        __statement_U_9CRe(4154);
                        __extro_wrjjOl(4155, __intro_byTVoB(4155, ieee754).write(buf, value, offset, littleEndian, 23, 4));
                    }
                }
                {
                    __statement_U_9CRe(4156);
                    Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
                        __block_LCpqSB(756);
                        {
                            __statement_U_9CRe(4157);
                            __expression_G3qo7s(4158), _writeFloat(this, value, offset, true, noAssert);
                        }
                    };
                }
                {
                    __statement_U_9CRe(4159);
                    Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
                        __block_LCpqSB(757);
                        {
                            __statement_U_9CRe(4160);
                            __expression_G3qo7s(4161), _writeFloat(this, value, offset, false, noAssert);
                        }
                    };
                }
                function _writeDouble(buf, value, offset, littleEndian, noAssert) {
                    __block_LCpqSB(758);
                    if (__expression_G3qo7s(4162), !(__expression_G3qo7s(4163), noAssert)) {
                        __block_LCpqSB(759);
                        {
                            __statement_U_9CRe(4164);
                            __expression_G3qo7s(4165), assert((__expression_G3qo7s(4166), (__expression_G3qo7s(4167), (__expression_G3qo7s(4168), value) !== (__expression_G3qo7s(4169), undefined)) && (__expression_G3qo7s(4170), (__expression_G3qo7s(4171), value) !== null)), 'missing value');
                        }
                        {
                            __statement_U_9CRe(4172);
                            __expression_G3qo7s(4173), assert((__expression_G3qo7s(4174), (__expression_G3qo7s(4175), typeof littleEndian) === 'boolean'), 'missing or invalid endian');
                        }
                        {
                            __statement_U_9CRe(4176);
                            __expression_G3qo7s(4177), assert((__expression_G3qo7s(4178), (__expression_G3qo7s(4179), (__expression_G3qo7s(4180), offset) !== (__expression_G3qo7s(4181), undefined)) && (__expression_G3qo7s(4182), (__expression_G3qo7s(4183), offset) !== null)), 'missing offset');
                        }
                        {
                            __statement_U_9CRe(4184);
                            __expression_G3qo7s(4185), assert((__expression_G3qo7s(4186), (__expression_G3qo7s(4187), (__expression_G3qo7s(4188), offset) + 7) < buf.length), 'Trying to write beyond buffer length');
                        }
                        {
                            __statement_U_9CRe(4189);
                            __expression_G3qo7s(4190), verifIEEE754(value, 1.7976931348623157e+308, (__expression_G3qo7s(4191), -1.7976931348623157e+308));
                        }
                    }
                    {
                        __statement_U_9CRe(4192);
                        var len = buf.length;
                    }
                    if (__expression_G3qo7s(4193), (__expression_G3qo7s(4194), offset) >= (__expression_G3qo7s(4195), len)) {
                        __block_LCpqSB(760);
                        return __expression_G3qo7s(4196);
                    }
                    {
                        __statement_U_9CRe(4197);
                        __extro_wrjjOl(4198, __intro_byTVoB(4198, ieee754).write(buf, value, offset, littleEndian, 52, 8));
                    }
                }
                {
                    __statement_U_9CRe(4199);
                    Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
                        __block_LCpqSB(761);
                        {
                            __statement_U_9CRe(4200);
                            __expression_G3qo7s(4201), _writeDouble(this, value, offset, true, noAssert);
                        }
                    };
                }
                {
                    __statement_U_9CRe(4202);
                    Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
                        __block_LCpqSB(762);
                        {
                            __statement_U_9CRe(4203);
                            __expression_G3qo7s(4204), _writeDouble(this, value, offset, false, noAssert);
                        }
                    };
                }
                {
                    __statement_U_9CRe(4205);
                    Buffer.prototype.fill = function (value, start, end) {
                        __block_LCpqSB(763);
                        if (__expression_G3qo7s(4206), !(__expression_G3qo7s(4207), value)) {
                            __block_LCpqSB(764);
                            {
                                __statement_U_9CRe(4208);
                                value = 0;
                            }
                        }
                        if (__expression_G3qo7s(4209), !(__expression_G3qo7s(4210), start)) {
                            __block_LCpqSB(765);
                            {
                                __statement_U_9CRe(4211);
                                start = 0;
                            }
                        }
                        if (__expression_G3qo7s(4212), !(__expression_G3qo7s(4213), end)) {
                            __block_LCpqSB(766);
                            {
                                __statement_U_9CRe(4214);
                                end = this.length;
                            }
                        }
                        if (__expression_G3qo7s(4215), (__expression_G3qo7s(4216), typeof value) === 'string') {
                            __block_LCpqSB(767);
                            {
                                __statement_U_9CRe(4217);
                                value = __extro_wrjjOl(4218, __intro_byTVoB(4218, value).charCodeAt(0));
                            }
                        }
                        {
                            __statement_U_9CRe(4219);
                            __expression_G3qo7s(4220), assert((__expression_G3qo7s(4221), (__expression_G3qo7s(4222), (__expression_G3qo7s(4223), typeof value) === 'number') && (__expression_G3qo7s(4224), !(__expression_G3qo7s(4225), isNaN(value)))), 'value is not a number');
                        }
                        {
                            __statement_U_9CRe(4226);
                            __expression_G3qo7s(4227), assert((__expression_G3qo7s(4228), (__expression_G3qo7s(4229), end) >= (__expression_G3qo7s(4230), start)), 'end < start');
                        }
                        if (__expression_G3qo7s(4231), (__expression_G3qo7s(4232), end) === (__expression_G3qo7s(4233), start)) {
                            __block_LCpqSB(768);
                            return __expression_G3qo7s(4234);
                        }
                        if (__expression_G3qo7s(4235), this.length === 0) {
                            __block_LCpqSB(769);
                            return __expression_G3qo7s(4236);
                        }
                        {
                            __statement_U_9CRe(4237);
                            __expression_G3qo7s(4238), assert((__expression_G3qo7s(4239), (__expression_G3qo7s(4240), (__expression_G3qo7s(4241), start) >= 0) && (__expression_G3qo7s(4242), (__expression_G3qo7s(4243), start) < this.length)), 'start out of bounds');
                        }
                        {
                            __statement_U_9CRe(4244);
                            __expression_G3qo7s(4245), assert((__expression_G3qo7s(4246), (__expression_G3qo7s(4247), (__expression_G3qo7s(4248), end) >= 0) && (__expression_G3qo7s(4249), (__expression_G3qo7s(4250), end) <= this.length)), 'end out of bounds');
                        }
                        for (var i = start; __expression_G3qo7s(4251), (__expression_G3qo7s(4252), i) < (__expression_G3qo7s(4253), end); __expression_G3qo7s(4254), i++) {
                            __block_LCpqSB(770);
                            {
                                __statement_U_9CRe(4255);
                                this[i] = value;
                            }
                        }
                    };
                }
                {
                    __statement_U_9CRe(4256);
                    Buffer.prototype.inspect = function () {
                        __block_LCpqSB(771);
                        {
                            __statement_U_9CRe(4257);
                            var out = [];
                        }
                        {
                            __statement_U_9CRe(4258);
                            var len = this.length;
                        }
                        for (var i = 0; __expression_G3qo7s(4259), (__expression_G3qo7s(4260), i) < (__expression_G3qo7s(4261), len); __expression_G3qo7s(4262), i++) {
                            __block_LCpqSB(772);
                            {
                                __statement_U_9CRe(4263);
                                out[i] = (__expression_G3qo7s(4264), toHex(this[i]));
                            }
                            if (__expression_G3qo7s(4265), (__expression_G3qo7s(4266), i) === exports.INSPECT_MAX_BYTES) {
                                __block_LCpqSB(773);
                                {
                                    __statement_U_9CRe(4267);
                                    out[__expression_G3qo7s(4268), (__expression_G3qo7s(4269), i) + 1] = '...';
                                }
                                break;
                            }
                        }
                        return __expression_G3qo7s(4270), (__expression_G3qo7s(4271), (__expression_G3qo7s(4272), '<Buffer ' + __extro_wrjjOl(4273, __intro_byTVoB(4273, out).join(' '))) + '>');
                    };
                }
                {
                    __statement_U_9CRe(4274);
                    Buffer.prototype.toArrayBuffer = function () {
                        __block_LCpqSB(774);
                        if (__expression_G3qo7s(4275), (__expression_G3qo7s(4276), typeof Uint8Array) !== 'undefined') {
                            __block_LCpqSB(775);
                            if (Buffer._useTypedArrays) {
                                __block_LCpqSB(776);
                                return __expression_G3qo7s(4277), new Buffer(this).buffer;
                            } else {
                                __block_LCpqSB(777);
                                {
                                    __statement_U_9CRe(4278);
                                    var buf = new Uint8Array(this.length);
                                }
                                for (var i = 0, len = buf.length; __expression_G3qo7s(4279), (__expression_G3qo7s(4280), i) < (__expression_G3qo7s(4281), len); i += 1) {
                                    __block_LCpqSB(778);
                                    {
                                        __statement_U_9CRe(4282);
                                        buf[i] = this[i];
                                    }
                                }
                                return __expression_G3qo7s(4283), buf.buffer;
                            }
                        } else {
                            __block_LCpqSB(779);
                            {
                                __statement_U_9CRe(4284);
                                throw new Error('Buffer.toArrayBuffer not supported in this browser');
                            }
                        }
                    };
                }
                function stringtrim(str) {
                    __block_LCpqSB(780);
                    if (str.trim) {
                        __block_LCpqSB(781);
                        return __expression_G3qo7s(4285), __extro_wrjjOl(4286, __intro_byTVoB(4286, str).trim());
                    }
                    return __expression_G3qo7s(4287), __extro_wrjjOl(4288, __intro_byTVoB(4288, str).replace(/^\s+|\s+$/g, ''));
                }
                {
                    __statement_U_9CRe(4289);
                    var BP = Buffer.prototype;
                }
                {
                    __statement_U_9CRe(4290);
                    Buffer._augment = function (arr) {
                        __block_LCpqSB(782);
                        {
                            __statement_U_9CRe(4291);
                            arr._isBuffer = true;
                        }
                        {
                            __statement_U_9CRe(4292);
                            arr._get = arr.get;
                        }
                        {
                            __statement_U_9CRe(4293);
                            arr._set = arr.set;
                        }
                        {
                            __statement_U_9CRe(4294);
                            arr.get = BP.get;
                        }
                        {
                            __statement_U_9CRe(4295);
                            arr.set = BP.set;
                        }
                        {
                            __statement_U_9CRe(4296);
                            arr.write = BP.write;
                        }
                        {
                            __statement_U_9CRe(4297);
                            arr.toString = BP.toString;
                        }
                        {
                            __statement_U_9CRe(4298);
                            arr.toLocaleString = BP.toString;
                        }
                        {
                            __statement_U_9CRe(4299);
                            arr.toJSON = BP.toJSON;
                        }
                        {
                            __statement_U_9CRe(4300);
                            arr.copy = BP.copy;
                        }
                        {
                            __statement_U_9CRe(4301);
                            arr.slice = BP.slice;
                        }
                        {
                            __statement_U_9CRe(4302);
                            arr.readUInt8 = BP.readUInt8;
                        }
                        {
                            __statement_U_9CRe(4303);
                            arr.readUInt16LE = BP.readUInt16LE;
                        }
                        {
                            __statement_U_9CRe(4304);
                            arr.readUInt16BE = BP.readUInt16BE;
                        }
                        {
                            __statement_U_9CRe(4305);
                            arr.readUInt32LE = BP.readUInt32LE;
                        }
                        {
                            __statement_U_9CRe(4306);
                            arr.readUInt32BE = BP.readUInt32BE;
                        }
                        {
                            __statement_U_9CRe(4307);
                            arr.readInt8 = BP.readInt8;
                        }
                        {
                            __statement_U_9CRe(4308);
                            arr.readInt16LE = BP.readInt16LE;
                        }
                        {
                            __statement_U_9CRe(4309);
                            arr.readInt16BE = BP.readInt16BE;
                        }
                        {
                            __statement_U_9CRe(4310);
                            arr.readInt32LE = BP.readInt32LE;
                        }
                        {
                            __statement_U_9CRe(4311);
                            arr.readInt32BE = BP.readInt32BE;
                        }
                        {
                            __statement_U_9CRe(4312);
                            arr.readFloatLE = BP.readFloatLE;
                        }
                        {
                            __statement_U_9CRe(4313);
                            arr.readFloatBE = BP.readFloatBE;
                        }
                        {
                            __statement_U_9CRe(4314);
                            arr.readDoubleLE = BP.readDoubleLE;
                        }
                        {
                            __statement_U_9CRe(4315);
                            arr.readDoubleBE = BP.readDoubleBE;
                        }
                        {
                            __statement_U_9CRe(4316);
                            arr.writeUInt8 = BP.writeUInt8;
                        }
                        {
                            __statement_U_9CRe(4317);
                            arr.writeUInt16LE = BP.writeUInt16LE;
                        }
                        {
                            __statement_U_9CRe(4318);
                            arr.writeUInt16BE = BP.writeUInt16BE;
                        }
                        {
                            __statement_U_9CRe(4319);
                            arr.writeUInt32LE = BP.writeUInt32LE;
                        }
                        {
                            __statement_U_9CRe(4320);
                            arr.writeUInt32BE = BP.writeUInt32BE;
                        }
                        {
                            __statement_U_9CRe(4321);
                            arr.writeInt8 = BP.writeInt8;
                        }
                        {
                            __statement_U_9CRe(4322);
                            arr.writeInt16LE = BP.writeInt16LE;
                        }
                        {
                            __statement_U_9CRe(4323);
                            arr.writeInt16BE = BP.writeInt16BE;
                        }
                        {
                            __statement_U_9CRe(4324);
                            arr.writeInt32LE = BP.writeInt32LE;
                        }
                        {
                            __statement_U_9CRe(4325);
                            arr.writeInt32BE = BP.writeInt32BE;
                        }
                        {
                            __statement_U_9CRe(4326);
                            arr.writeFloatLE = BP.writeFloatLE;
                        }
                        {
                            __statement_U_9CRe(4327);
                            arr.writeFloatBE = BP.writeFloatBE;
                        }
                        {
                            __statement_U_9CRe(4328);
                            arr.writeDoubleLE = BP.writeDoubleLE;
                        }
                        {
                            __statement_U_9CRe(4329);
                            arr.writeDoubleBE = BP.writeDoubleBE;
                        }
                        {
                            __statement_U_9CRe(4330);
                            arr.fill = BP.fill;
                        }
                        {
                            __statement_U_9CRe(4331);
                            arr.inspect = BP.inspect;
                        }
                        {
                            __statement_U_9CRe(4332);
                            arr.toArrayBuffer = BP.toArrayBuffer;
                        }
                        return __expression_G3qo7s(4333), arr;
                    };
                }
                function clamp(index, len, defaultValue) {
                    __block_LCpqSB(783);
                    if (__expression_G3qo7s(4334), (__expression_G3qo7s(4335), typeof index) !== 'number') {
                        __block_LCpqSB(784);
                        return __expression_G3qo7s(4336), defaultValue;
                    }
                    {
                        __statement_U_9CRe(4337);
                        index = (__expression_G3qo7s(4338), ~(__expression_G3qo7s(4339), ~(__expression_G3qo7s(4340), index)));
                    }
                    if (__expression_G3qo7s(4341), (__expression_G3qo7s(4342), index) >= (__expression_G3qo7s(4343), len)) {
                        __block_LCpqSB(785);
                        return __expression_G3qo7s(4344), len;
                    }
                    if (__expression_G3qo7s(4345), (__expression_G3qo7s(4346), index) >= 0) {
                        __block_LCpqSB(786);
                        return __expression_G3qo7s(4347), index;
                    }
                    {
                        __statement_U_9CRe(4348);
                        index += len;
                    }
                    if (__expression_G3qo7s(4349), (__expression_G3qo7s(4350), index) >= 0) {
                        __block_LCpqSB(787);
                        return __expression_G3qo7s(4351), index;
                    }
                    return __expression_G3qo7s(4352), 0;
                }
                function coerce(length) {
                    __block_LCpqSB(788);
                    {
                        __statement_U_9CRe(4353);
                        length = (__expression_G3qo7s(4354), ~(__expression_G3qo7s(4355), ~__extro_wrjjOl(4356, __intro_byTVoB(4356, Math).ceil((__expression_G3qo7s(4357), +(__expression_G3qo7s(4358), length))))));
                    }
                    return __expression_G3qo7s(4359), (__expression_G3qo7s(4362), (__expression_G3qo7s(4363), length) < 0) ? (__expression_G3qo7s(4360), 0) : (__expression_G3qo7s(4361), length);
                }
                function isArray(subject) {
                    __block_LCpqSB(789);
                    return __expression_G3qo7s(4364), (__expression_G3qo7s(4365), (__expression_G3qo7s(4366), Array.isArray || function (subject) {
                        __block_LCpqSB(790);
                        return __expression_G3qo7s(4367), (__expression_G3qo7s(4368), __extro_wrjjOl(4369, __intro_byTVoB(4369, Object.prototype.toString).call(subject)) === '[object Array]');
                    })(subject));
                }
                function isArrayish(subject) {
                    __block_LCpqSB(791);
                    return __expression_G3qo7s(4370), (__expression_G3qo7s(4371), (__expression_G3qo7s(4372), (__expression_G3qo7s(4373), isArray(subject)) || __extro_wrjjOl(4374, __intro_byTVoB(4374, Buffer).isBuffer(subject))) || (__expression_G3qo7s(4375), (__expression_G3qo7s(4376), (__expression_G3qo7s(4377), subject) && (__expression_G3qo7s(4378), (__expression_G3qo7s(4379), typeof subject) === 'object')) && (__expression_G3qo7s(4380), (__expression_G3qo7s(4381), typeof subject.length) === 'number')));
                }
                function toHex(n) {
                    __block_LCpqSB(792);
                    if (__expression_G3qo7s(4382), (__expression_G3qo7s(4383), n) < 16) {
                        __block_LCpqSB(793);
                        return __expression_G3qo7s(4384), (__expression_G3qo7s(4385), '0' + __extro_wrjjOl(4386, __intro_byTVoB(4386, n).toString(16)));
                    }
                    return __expression_G3qo7s(4387), __extro_wrjjOl(4388, __intro_byTVoB(4388, n).toString(16));
                }
                function utf8ToBytes(str) {
                    __block_LCpqSB(794);
                    {
                        __statement_U_9CRe(4389);
                        var byteArray = [];
                    }
                    for (var i = 0; __expression_G3qo7s(4390), (__expression_G3qo7s(4391), i) < str.length; __expression_G3qo7s(4392), i++) {
                        __block_LCpqSB(795);
                        {
                            __statement_U_9CRe(4393);
                            var b = __extro_wrjjOl(4394, __intro_byTVoB(4394, str).charCodeAt(i));
                        }
                        if (__expression_G3qo7s(4395), (__expression_G3qo7s(4396), b) <= 127) {
                            __block_LCpqSB(796);
                            {
                                __statement_U_9CRe(4397);
                                __extro_wrjjOl(4398, __intro_byTVoB(4398, byteArray).push(__extro_wrjjOl(4399, __intro_byTVoB(4399, str).charCodeAt(i))));
                            }
                        } else {
                            __block_LCpqSB(797);
                            {
                                __statement_U_9CRe(4400);
                                var start = i;
                            }
                            if (__expression_G3qo7s(4401), (__expression_G3qo7s(4402), (__expression_G3qo7s(4403), b) >= 55296) && (__expression_G3qo7s(4404), (__expression_G3qo7s(4405), b) <= 57343)) {
                                __block_LCpqSB(798);
                                {
                                    __statement_U_9CRe(4406);
                                    __expression_G3qo7s(4407), i++;
                                }
                            }
                            {
                                __statement_U_9CRe(4408);
                                var h = __extro_wrjjOl(4409, __intro_byTVoB(4409, __extro_wrjjOl(4410, __intro_byTVoB(4410, (__expression_G3qo7s(4411), encodeURIComponent(__extro_wrjjOl(4412, __intro_byTVoB(4412, str).slice(start, (__expression_G3qo7s(4413), (__expression_G3qo7s(4414), i) + 1)))))).substr(1))).split('%'));
                            }
                            for (var j = 0; __expression_G3qo7s(4415), (__expression_G3qo7s(4416), j) < h.length; __expression_G3qo7s(4417), j++) {
                                __block_LCpqSB(799);
                                {
                                    __statement_U_9CRe(4418);
                                    __extro_wrjjOl(4419, __intro_byTVoB(4419, byteArray).push((__expression_G3qo7s(4420), parseInt(h[j], 16))));
                                }
                            }
                        }
                    }
                    return __expression_G3qo7s(4421), byteArray;
                }
                function asciiToBytes(str) {
                    __block_LCpqSB(800);
                    {
                        __statement_U_9CRe(4422);
                        var byteArray = [];
                    }
                    for (var i = 0; __expression_G3qo7s(4423), (__expression_G3qo7s(4424), i) < str.length; __expression_G3qo7s(4425), i++) {
                        __block_LCpqSB(801);
                        {
                            __statement_U_9CRe(4426);
                            __extro_wrjjOl(4427, __intro_byTVoB(4427, byteArray).push((__expression_G3qo7s(4428), __extro_wrjjOl(4429, __intro_byTVoB(4429, str).charCodeAt(i)) & 255)));
                        }
                    }
                    return __expression_G3qo7s(4430), byteArray;
                }
                function utf16leToBytes(str) {
                    __block_LCpqSB(802);
                    {
                        __statement_U_9CRe(4431);
                        var c, hi, lo;
                    }
                    {
                        __statement_U_9CRe(4432);
                        var byteArray = [];
                    }
                    for (var i = 0; __expression_G3qo7s(4433), (__expression_G3qo7s(4434), i) < str.length; __expression_G3qo7s(4435), i++) {
                        __block_LCpqSB(803);
                        {
                            __statement_U_9CRe(4436);
                            c = __extro_wrjjOl(4437, __intro_byTVoB(4437, str).charCodeAt(i));
                        }
                        {
                            __statement_U_9CRe(4438);
                            hi = (__expression_G3qo7s(4439), (__expression_G3qo7s(4440), c) >> 8);
                        }
                        {
                            __statement_U_9CRe(4441);
                            lo = (__expression_G3qo7s(4442), (__expression_G3qo7s(4443), c) % 256);
                        }
                        {
                            __statement_U_9CRe(4444);
                            __extro_wrjjOl(4445, __intro_byTVoB(4445, byteArray).push(lo));
                        }
                        {
                            __statement_U_9CRe(4446);
                            __extro_wrjjOl(4447, __intro_byTVoB(4447, byteArray).push(hi));
                        }
                    }
                    return __expression_G3qo7s(4448), byteArray;
                }
                function base64ToBytes(str) {
                    __block_LCpqSB(804);
                    return __expression_G3qo7s(4449), __extro_wrjjOl(4450, __intro_byTVoB(4450, base64).toByteArray(str));
                }
                function blitBuffer(src, dst, offset, length) {
                    __block_LCpqSB(805);
                    {
                        __statement_U_9CRe(4451);
                        var pos;
                    }
                    for (var i = 0; __expression_G3qo7s(4452), (__expression_G3qo7s(4453), i) < (__expression_G3qo7s(4454), length); __expression_G3qo7s(4455), i++) {
                        __block_LCpqSB(806);
                        if (__expression_G3qo7s(4456), (__expression_G3qo7s(4457), (__expression_G3qo7s(4458), (__expression_G3qo7s(4459), i) + (__expression_G3qo7s(4460), offset)) >= dst.length) || (__expression_G3qo7s(4461), (__expression_G3qo7s(4462), i) >= src.length)) {
                            __block_LCpqSB(807);
                            break;
                        }
                        {
                            __statement_U_9CRe(4463);
                            dst[__expression_G3qo7s(4464), (__expression_G3qo7s(4465), i) + (__expression_G3qo7s(4466), offset)] = src[i];
                        }
                    }
                    return __expression_G3qo7s(4467), i;
                }
                function decodeUtf8Char(str) {
                    __block_LCpqSB(808);
                    try {
                        __block_LCpqSB(809);
                        return __expression_G3qo7s(4468), (__expression_G3qo7s(4469), decodeURIComponent(str));
                    } catch (err) {
                        __block_LCpqSB(810);
                        return __expression_G3qo7s(4470), __extro_wrjjOl(4471, __intro_byTVoB(4471, String).fromCharCode(65533));
                    }
                }
                function verifuint(value, max) {
                    __block_LCpqSB(811);
                    {
                        __statement_U_9CRe(4472);
                        __expression_G3qo7s(4473), assert((__expression_G3qo7s(4474), (__expression_G3qo7s(4475), typeof value) === 'number'), 'cannot write a non-number as a number');
                    }
                    {
                        __statement_U_9CRe(4476);
                        __expression_G3qo7s(4477), assert((__expression_G3qo7s(4478), (__expression_G3qo7s(4479), value) >= 0), 'specified a negative value for writing an unsigned value');
                    }
                    {
                        __statement_U_9CRe(4480);
                        __expression_G3qo7s(4481), assert((__expression_G3qo7s(4482), (__expression_G3qo7s(4483), value) <= (__expression_G3qo7s(4484), max)), 'value is larger than maximum value for type');
                    }
                    {
                        __statement_U_9CRe(4485);
                        __expression_G3qo7s(4486), assert((__expression_G3qo7s(4487), __extro_wrjjOl(4488, __intro_byTVoB(4488, Math).floor(value)) === (__expression_G3qo7s(4489), value)), 'value has a fractional component');
                    }
                }
                function verifsint(value, max, min) {
                    __block_LCpqSB(812);
                    {
                        __statement_U_9CRe(4490);
                        __expression_G3qo7s(4491), assert((__expression_G3qo7s(4492), (__expression_G3qo7s(4493), typeof value) === 'number'), 'cannot write a non-number as a number');
                    }
                    {
                        __statement_U_9CRe(4494);
                        __expression_G3qo7s(4495), assert((__expression_G3qo7s(4496), (__expression_G3qo7s(4497), value) <= (__expression_G3qo7s(4498), max)), 'value larger than maximum allowed value');
                    }
                    {
                        __statement_U_9CRe(4499);
                        __expression_G3qo7s(4500), assert((__expression_G3qo7s(4501), (__expression_G3qo7s(4502), value) >= (__expression_G3qo7s(4503), min)), 'value smaller than minimum allowed value');
                    }
                    {
                        __statement_U_9CRe(4504);
                        __expression_G3qo7s(4505), assert((__expression_G3qo7s(4506), __extro_wrjjOl(4507, __intro_byTVoB(4507, Math).floor(value)) === (__expression_G3qo7s(4508), value)), 'value has a fractional component');
                    }
                }
                function verifIEEE754(value, max, min) {
                    __block_LCpqSB(813);
                    {
                        __statement_U_9CRe(4509);
                        __expression_G3qo7s(4510), assert((__expression_G3qo7s(4511), (__expression_G3qo7s(4512), typeof value) === 'number'), 'cannot write a non-number as a number');
                    }
                    {
                        __statement_U_9CRe(4513);
                        __expression_G3qo7s(4514), assert((__expression_G3qo7s(4515), (__expression_G3qo7s(4516), value) <= (__expression_G3qo7s(4517), max)), 'value larger than maximum allowed value');
                    }
                    {
                        __statement_U_9CRe(4518);
                        __expression_G3qo7s(4519), assert((__expression_G3qo7s(4520), (__expression_G3qo7s(4521), value) >= (__expression_G3qo7s(4522), min)), 'value smaller than minimum allowed value');
                    }
                }
                function assert(test, message) {
                    __block_LCpqSB(814);
                    if (__expression_G3qo7s(4523), !(__expression_G3qo7s(4524), test)) {
                        __block_LCpqSB(815);
                        {
                            __statement_U_9CRe(4525);
                            throw new Error((__expression_G3qo7s(4526), (__expression_G3qo7s(4527), message) || 'Failed assertion'));
                        }
                    }
                }
            },
            {
                'base64-js': 2,
                'ieee754': 37
            }
        ],
        37: [
            function (require, module, exports) {
                __block_LCpqSB(816);
                {
                    __statement_U_9CRe(4528);
                    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
                        __block_LCpqSB(817);
                        {
                            __statement_U_9CRe(4529);
                            var e, m;
                        }
                        {
                            __statement_U_9CRe(4530);
                            var eLen = (__expression_G3qo7s(4531), (__expression_G3qo7s(4532), (__expression_G3qo7s(4533), (__expression_G3qo7s(4534), nBytes) * 8) - (__expression_G3qo7s(4535), mLen)) - 1);
                        }
                        {
                            __statement_U_9CRe(4536);
                            var eMax = (__expression_G3qo7s(4537), (__expression_G3qo7s(4538), 1 << (__expression_G3qo7s(4539), eLen)) - 1);
                        }
                        {
                            __statement_U_9CRe(4540);
                            var eBias = (__expression_G3qo7s(4541), (__expression_G3qo7s(4542), eMax) >> 1);
                        }
                        {
                            __statement_U_9CRe(4543);
                            var nBits = (__expression_G3qo7s(4544), -7);
                        }
                        {
                            __statement_U_9CRe(4545);
                            var i = (__expression_G3qo7s(4548), isLE) ? (__expression_G3qo7s(4546), (__expression_G3qo7s(4549), (__expression_G3qo7s(4550), nBytes) - 1)) : (__expression_G3qo7s(4547), 0);
                        }
                        {
                            __statement_U_9CRe(4551);
                            var d = (__expression_G3qo7s(4554), isLE) ? (__expression_G3qo7s(4552), (__expression_G3qo7s(4555), -1)) : (__expression_G3qo7s(4553), 1);
                        }
                        {
                            __statement_U_9CRe(4556);
                            var s = buffer[__expression_G3qo7s(4557), (__expression_G3qo7s(4558), offset) + (__expression_G3qo7s(4559), i)];
                        }
                        {
                            __statement_U_9CRe(4560);
                            i += d;
                        }
                        {
                            __statement_U_9CRe(4561);
                            e = (__expression_G3qo7s(4562), (__expression_G3qo7s(4563), s) & (__expression_G3qo7s(4564), (__expression_G3qo7s(4565), 1 << (__expression_G3qo7s(4566), -(__expression_G3qo7s(4567), nBits))) - 1));
                        }
                        {
                            __statement_U_9CRe(4568);
                            s >>= (__expression_G3qo7s(4569), -(__expression_G3qo7s(4570), nBits));
                        }
                        {
                            __statement_U_9CRe(4571);
                            nBits += eLen;
                        }
                        for (; __expression_G3qo7s(4572), (__expression_G3qo7s(4573), nBits) > 0; e = (__expression_G3qo7s(4574), (__expression_G3qo7s(4575), (__expression_G3qo7s(4576), e) * 256) + buffer[__expression_G3qo7s(4577), (__expression_G3qo7s(4578), offset) + (__expression_G3qo7s(4579), i)]), i += d, nBits -= 8) {
                            __block_LCpqSB(818);
                        }
                        {
                            __statement_U_9CRe(4580);
                            m = (__expression_G3qo7s(4581), (__expression_G3qo7s(4582), e) & (__expression_G3qo7s(4583), (__expression_G3qo7s(4584), 1 << (__expression_G3qo7s(4585), -(__expression_G3qo7s(4586), nBits))) - 1));
                        }
                        {
                            __statement_U_9CRe(4587);
                            e >>= (__expression_G3qo7s(4588), -(__expression_G3qo7s(4589), nBits));
                        }
                        {
                            __statement_U_9CRe(4590);
                            nBits += mLen;
                        }
                        for (; __expression_G3qo7s(4591), (__expression_G3qo7s(4592), nBits) > 0; m = (__expression_G3qo7s(4593), (__expression_G3qo7s(4594), (__expression_G3qo7s(4595), m) * 256) + buffer[__expression_G3qo7s(4596), (__expression_G3qo7s(4597), offset) + (__expression_G3qo7s(4598), i)]), i += d, nBits -= 8) {
                            __block_LCpqSB(819);
                        }
                        if (__expression_G3qo7s(4599), (__expression_G3qo7s(4600), e) === 0) {
                            __block_LCpqSB(820);
                            {
                                __statement_U_9CRe(4601);
                                e = (__expression_G3qo7s(4602), 1 - (__expression_G3qo7s(4603), eBias));
                            }
                        } else if (__expression_G3qo7s(4604), (__expression_G3qo7s(4605), e) === (__expression_G3qo7s(4606), eMax)) {
                            __block_LCpqSB(821);
                            return __expression_G3qo7s(4607), (__expression_G3qo7s(4610), m) ? (__expression_G3qo7s(4608), NaN) : (__expression_G3qo7s(4609), (__expression_G3qo7s(4611), ((__expression_G3qo7s(4614), s) ? (__expression_G3qo7s(4612), (__expression_G3qo7s(4615), -1)) : (__expression_G3qo7s(4613), 1)) * (__expression_G3qo7s(4616), Infinity)));
                        } else {
                            __block_LCpqSB(822);
                            {
                                __statement_U_9CRe(4617);
                                m = (__expression_G3qo7s(4618), (__expression_G3qo7s(4619), m) + __extro_wrjjOl(4620, __intro_byTVoB(4620, Math).pow(2, mLen)));
                            }
                            {
                                __statement_U_9CRe(4621);
                                e = (__expression_G3qo7s(4622), (__expression_G3qo7s(4623), e) - (__expression_G3qo7s(4624), eBias));
                            }
                        }
                        return __expression_G3qo7s(4625), (__expression_G3qo7s(4626), (__expression_G3qo7s(4627), ((__expression_G3qo7s(4630), s) ? (__expression_G3qo7s(4628), (__expression_G3qo7s(4631), -1)) : (__expression_G3qo7s(4629), 1)) * (__expression_G3qo7s(4632), m)) * __extro_wrjjOl(4633, __intro_byTVoB(4633, Math).pow(2, (__expression_G3qo7s(4634), (__expression_G3qo7s(4635), e) - (__expression_G3qo7s(4636), mLen)))));
                    };
                }
                {
                    __statement_U_9CRe(4637);
                    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
                        __block_LCpqSB(823);
                        {
                            __statement_U_9CRe(4638);
                            var e, m, c;
                        }
                        {
                            __statement_U_9CRe(4639);
                            var eLen = (__expression_G3qo7s(4640), (__expression_G3qo7s(4641), (__expression_G3qo7s(4642), (__expression_G3qo7s(4643), nBytes) * 8) - (__expression_G3qo7s(4644), mLen)) - 1);
                        }
                        {
                            __statement_U_9CRe(4645);
                            var eMax = (__expression_G3qo7s(4646), (__expression_G3qo7s(4647), 1 << (__expression_G3qo7s(4648), eLen)) - 1);
                        }
                        {
                            __statement_U_9CRe(4649);
                            var eBias = (__expression_G3qo7s(4650), (__expression_G3qo7s(4651), eMax) >> 1);
                        }
                        {
                            __statement_U_9CRe(4652);
                            var rt = (__expression_G3qo7s(4655), (__expression_G3qo7s(4656), mLen) === 23) ? (__expression_G3qo7s(4653), (__expression_G3qo7s(4657), __extro_wrjjOl(4658, __intro_byTVoB(4658, Math).pow(2, (__expression_G3qo7s(4659), -24))) - __extro_wrjjOl(4660, __intro_byTVoB(4660, Math).pow(2, (__expression_G3qo7s(4661), -77))))) : (__expression_G3qo7s(4654), 0);
                        }
                        {
                            __statement_U_9CRe(4662);
                            var i = (__expression_G3qo7s(4665), isLE) ? (__expression_G3qo7s(4663), 0) : (__expression_G3qo7s(4664), (__expression_G3qo7s(4666), (__expression_G3qo7s(4667), nBytes) - 1));
                        }
                        {
                            __statement_U_9CRe(4668);
                            var d = (__expression_G3qo7s(4671), isLE) ? (__expression_G3qo7s(4669), 1) : (__expression_G3qo7s(4670), (__expression_G3qo7s(4672), -1));
                        }
                        {
                            __statement_U_9CRe(4673);
                            var s = (__expression_G3qo7s(4676), (__expression_G3qo7s(4677), (__expression_G3qo7s(4678), value) < 0) || (__expression_G3qo7s(4679), (__expression_G3qo7s(4680), (__expression_G3qo7s(4681), value) === 0) && (__expression_G3qo7s(4682), (__expression_G3qo7s(4683), 1 / (__expression_G3qo7s(4684), value)) < 0))) ? (__expression_G3qo7s(4674), 1) : (__expression_G3qo7s(4675), 0);
                        }
                        {
                            __statement_U_9CRe(4685);
                            value = __extro_wrjjOl(4686, __intro_byTVoB(4686, Math).abs(value));
                        }
                        if (__expression_G3qo7s(4687), (__expression_G3qo7s(4688), isNaN(value)) || (__expression_G3qo7s(4689), (__expression_G3qo7s(4690), value) === (__expression_G3qo7s(4691), Infinity))) {
                            __block_LCpqSB(824);
                            {
                                __statement_U_9CRe(4692);
                                m = (__expression_G3qo7s(4695), isNaN(value)) ? (__expression_G3qo7s(4693), 1) : (__expression_G3qo7s(4694), 0);
                            }
                            {
                                __statement_U_9CRe(4696);
                                e = eMax;
                            }
                        } else {
                            __block_LCpqSB(825);
                            {
                                __statement_U_9CRe(4697);
                                e = __extro_wrjjOl(4698, __intro_byTVoB(4698, Math).floor((__expression_G3qo7s(4699), __extro_wrjjOl(4700, __intro_byTVoB(4700, Math).log(value)) / Math.LN2)));
                            }
                            if (__expression_G3qo7s(4701), (__expression_G3qo7s(4702), (__expression_G3qo7s(4703), value) * (c = __extro_wrjjOl(4704, __intro_byTVoB(4704, Math).pow(2, (__expression_G3qo7s(4705), -(__expression_G3qo7s(4706), e)))))) < 1) {
                                __block_LCpqSB(826);
                                {
                                    __statement_U_9CRe(4707);
                                    __expression_G3qo7s(4708), e--;
                                }
                                {
                                    __statement_U_9CRe(4709);
                                    c *= 2;
                                }
                            }
                            if (__expression_G3qo7s(4710), (__expression_G3qo7s(4711), (__expression_G3qo7s(4712), e) + (__expression_G3qo7s(4713), eBias)) >= 1) {
                                __block_LCpqSB(827);
                                {
                                    __statement_U_9CRe(4714);
                                    value += (__expression_G3qo7s(4715), (__expression_G3qo7s(4716), rt) / (__expression_G3qo7s(4717), c));
                                }
                            } else {
                                __block_LCpqSB(828);
                                {
                                    __statement_U_9CRe(4718);
                                    value += (__expression_G3qo7s(4719), (__expression_G3qo7s(4720), rt) * __extro_wrjjOl(4721, __intro_byTVoB(4721, Math).pow(2, (__expression_G3qo7s(4722), 1 - (__expression_G3qo7s(4723), eBias)))));
                                }
                            }
                            if (__expression_G3qo7s(4724), (__expression_G3qo7s(4725), (__expression_G3qo7s(4726), value) * (__expression_G3qo7s(4727), c)) >= 2) {
                                __block_LCpqSB(829);
                                {
                                    __statement_U_9CRe(4728);
                                    __expression_G3qo7s(4729), e++;
                                }
                                {
                                    __statement_U_9CRe(4730);
                                    c /= 2;
                                }
                            }
                            if (__expression_G3qo7s(4731), (__expression_G3qo7s(4732), (__expression_G3qo7s(4733), e) + (__expression_G3qo7s(4734), eBias)) >= (__expression_G3qo7s(4735), eMax)) {
                                __block_LCpqSB(830);
                                {
                                    __statement_U_9CRe(4736);
                                    m = 0;
                                }
                                {
                                    __statement_U_9CRe(4737);
                                    e = eMax;
                                }
                            } else if (__expression_G3qo7s(4738), (__expression_G3qo7s(4739), (__expression_G3qo7s(4740), e) + (__expression_G3qo7s(4741), eBias)) >= 1) {
                                __block_LCpqSB(831);
                                {
                                    __statement_U_9CRe(4742);
                                    m = (__expression_G3qo7s(4743), (__expression_G3qo7s(4744), (__expression_G3qo7s(4745), (__expression_G3qo7s(4746), value) * (__expression_G3qo7s(4747), c)) - 1) * __extro_wrjjOl(4748, __intro_byTVoB(4748, Math).pow(2, mLen)));
                                }
                                {
                                    __statement_U_9CRe(4749);
                                    e = (__expression_G3qo7s(4750), (__expression_G3qo7s(4751), e) + (__expression_G3qo7s(4752), eBias));
                                }
                            } else {
                                __block_LCpqSB(832);
                                {
                                    __statement_U_9CRe(4753);
                                    m = (__expression_G3qo7s(4754), (__expression_G3qo7s(4755), (__expression_G3qo7s(4756), value) * __extro_wrjjOl(4757, __intro_byTVoB(4757, Math).pow(2, (__expression_G3qo7s(4758), (__expression_G3qo7s(4759), eBias) - 1)))) * __extro_wrjjOl(4760, __intro_byTVoB(4760, Math).pow(2, mLen)));
                                }
                                {
                                    __statement_U_9CRe(4761);
                                    e = 0;
                                }
                            }
                        }
                        for (; __expression_G3qo7s(4762), (__expression_G3qo7s(4763), mLen) >= 8; buffer[__expression_G3qo7s(4764), (__expression_G3qo7s(4765), offset) + (__expression_G3qo7s(4766), i)] = (__expression_G3qo7s(4767), (__expression_G3qo7s(4768), m) & 255), i += d, m /= 256, mLen -= 8) {
                            __block_LCpqSB(833);
                        }
                        {
                            __statement_U_9CRe(4769);
                            e = (__expression_G3qo7s(4770), (__expression_G3qo7s(4771), (__expression_G3qo7s(4772), e) << (__expression_G3qo7s(4773), mLen)) | (__expression_G3qo7s(4774), m));
                        }
                        {
                            __statement_U_9CRe(4775);
                            eLen += mLen;
                        }
                        for (; __expression_G3qo7s(4776), (__expression_G3qo7s(4777), eLen) > 0; buffer[__expression_G3qo7s(4778), (__expression_G3qo7s(4779), offset) + (__expression_G3qo7s(4780), i)] = (__expression_G3qo7s(4781), (__expression_G3qo7s(4782), e) & 255), i += d, e /= 256, eLen -= 8) {
                            __block_LCpqSB(834);
                        }
                        {
                            __statement_U_9CRe(4783);
                            buffer[__expression_G3qo7s(4784), (__expression_G3qo7s(4785), (__expression_G3qo7s(4786), offset) + (__expression_G3qo7s(4787), i)) - (__expression_G3qo7s(4788), d)] |= (__expression_G3qo7s(4789), (__expression_G3qo7s(4790), s) * 128);
                        }
                    };
                }
            },
            {}
        ],
        38: [
            function (require, module, exports) {
                __block_LCpqSB(835);
                {
                    __statement_U_9CRe(4791);
                    __extro_wrjjOl(4792, __intro_byTVoB(4792, arguments[4][34][0]).apply(exports, arguments));
                }
            },
            {
                './lib/type': 39
            }
        ],
        39: [
            function (require, module, exports) {
                __block_LCpqSB(836);
                {
                    __statement_U_9CRe(4793);
                    var exports = module.exports = getType;
                }
                {
                    __statement_U_9CRe(4794);
                    var objectTypeRegexp = /^\[object (.*)\]$/;
                }
                function getType(obj) {
                    __block_LCpqSB(837);
                    {
                        __statement_U_9CRe(4795);
                        var type = __extro_wrjjOl(4796, __intro_byTVoB(4796, __extro_wrjjOl(4797, __intro_byTVoB(4797, __extro_wrjjOl(4798, __intro_byTVoB(4798, Object.prototype.toString).call(obj))).match(objectTypeRegexp))[1]).toLowerCase());
                    }
                    if (__expression_G3qo7s(4799), (__expression_G3qo7s(4800), (__expression_G3qo7s(4801), typeof Promise) === 'function') && (__expression_G3qo7s(4802), (__expression_G3qo7s(4803), obj) instanceof (__expression_G3qo7s(4804), Promise))) {
                        __block_LCpqSB(838);
                        return __expression_G3qo7s(4805), 'promise';
                    }
                    if (__expression_G3qo7s(4806), (__expression_G3qo7s(4807), obj) === null) {
                        __block_LCpqSB(839);
                        return __expression_G3qo7s(4808), 'null';
                    }
                    if (__expression_G3qo7s(4809), (__expression_G3qo7s(4810), obj) === (__expression_G3qo7s(4811), undefined)) {
                        __block_LCpqSB(840);
                        return __expression_G3qo7s(4812), 'undefined';
                    }
                    return __expression_G3qo7s(4813), type;
                }
                {
                    __statement_U_9CRe(4814);
                    exports.Library = Library;
                }
                function Library() {
                    __block_LCpqSB(841);
                    if (__expression_G3qo7s(4815), !(__expression_G3qo7s(4816), this instanceof (__expression_G3qo7s(4817), Library))) {
                        __block_LCpqSB(842);
                        return __expression_G3qo7s(4818), new Library();
                    }
                    {
                        __statement_U_9CRe(4819);
                        this.tests = {};
                    }
                }
                {
                    __statement_U_9CRe(4820);
                    Library.prototype.of = getType;
                }
                {
                    __statement_U_9CRe(4821);
                    Library.prototype.define = function (type, test) {
                        __block_LCpqSB(843);
                        if (__expression_G3qo7s(4822), arguments.length === 1) {
                            __block_LCpqSB(844);
                            return __expression_G3qo7s(4823), this.tests[type];
                        }
                        {
                            __statement_U_9CRe(4824);
                            this.tests[type] = test;
                        }
                        return __expression_G3qo7s(4825), this;
                    };
                }
                {
                    __statement_U_9CRe(4826);
                    Library.prototype.test = function (obj, type) {
                        __block_LCpqSB(845);
                        if (__expression_G3qo7s(4827), (__expression_G3qo7s(4828), type) === (__expression_G3qo7s(4829), getType(obj))) {
                            __block_LCpqSB(846);
                            return __expression_G3qo7s(4830), true;
                        }
                        {
                            __statement_U_9CRe(4831);
                            var test = this.tests[type];
                        }
                        if (__expression_G3qo7s(4832), (__expression_G3qo7s(4833), test) && (__expression_G3qo7s(4834), 'regexp' === (__expression_G3qo7s(4835), getType(test)))) {
                            __block_LCpqSB(847);
                            return __expression_G3qo7s(4836), __extro_wrjjOl(4837, __intro_byTVoB(4837, test).test(obj));
                        } else if (__expression_G3qo7s(4838), (__expression_G3qo7s(4839), test) && (__expression_G3qo7s(4840), 'function' === (__expression_G3qo7s(4841), getType(test)))) {
                            __block_LCpqSB(848);
                            return __expression_G3qo7s(4842), (__expression_G3qo7s(4843), test(obj));
                        } else {
                            __block_LCpqSB(849);
                            {
                                __statement_U_9CRe(4844);
                                throw new ReferenceError((__expression_G3qo7s(4845), (__expression_G3qo7s(4846), 'Type test "' + (__expression_G3qo7s(4847), type)) + '" not defined or invalid.'));
                            }
                        }
                    };
                }
            },
            {}
        ],
        40: [
            function (require, module, exports) {
                __block_LCpqSB(850);
                {
                    __statement_U_9CRe(4848);
                    var chai = (__expression_G3qo7s(4849), require('chai'));
                }
                {
                    __statement_U_9CRe(4850);
                    var assert = chai.assert;
                }
                {
                    __statement_U_9CRe(4851);
                    var expect = chai.expect;
                }
                {
                    __statement_U_9CRe(4852);
                    var should = __extro_wrjjOl(4853, __intro_byTVoB(4853, chai).should());
                }
                {
                    __statement_U_9CRe(4854);
                    __expression_G3qo7s(4855), describe('test setup', function () {
                        __block_LCpqSB(851);
                        {
                            __statement_U_9CRe(4856);
                            __expression_G3qo7s(4857), it('should work', function () {
                                __block_LCpqSB(852);
                                {
                                    __statement_U_9CRe(4858);
                                    (__expression_G3qo7s(4859), expect(true)).to.be.true;
                                }
                            });
                        }
                    });
                }
            },
            {
                'chai': 3
            }
        ]
    }, {}, [
        40
    ]);
}