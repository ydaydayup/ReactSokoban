"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathResolve = void 0;
// scripts/utils.ts
var path_1 = require("path");
var pathResolve = function (dir) { return (0, path_1.resolve)(__dirname, '../', dir); };
exports.pathResolve = pathResolve;
