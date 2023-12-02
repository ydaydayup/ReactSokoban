"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfig = void 0;
var deepmerge_1 = require("deepmerge");
var utils_1 = require("./utils");
var plugins_1 = require("./plugins");
var createConfig = function (params, configure) {
    var isBuild = params.command === 'build';
    return (0, deepmerge_1.default)({
        resolve: {
            alias: {
                '@': (0, utils_1.pathResolve)('src'),
            },
        },
        css: {
            modules: {
                localsConvention: 'camelCaseOnly',
            },
        },
        plugins: (0, plugins_1.createPlugins)(isBuild),
    }, typeof configure === 'function' ? configure(params, isBuild) : {}, {
        arrayMerge: function (_d, s, _o) { return Array.from(new Set(__spreadArray(__spreadArray([], _d, true), s, true))); },
    });
};
exports.createConfig = createConfig;
