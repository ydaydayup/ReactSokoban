"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var scripts_1 = require("./scripts");
exports.default = (0, vite_1.defineConfig)(function (params) {
    var config = (0, scripts_1.createConfig)(params);
    return config;
});
