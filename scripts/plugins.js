"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlugins = void 0;
var plugin_react_1 = require("@vitejs/plugin-react");
function createPlugins(isBuild) {
    var vitePlugins = [(0, plugin_react_1.default)()];
    return vitePlugins;
}
exports.createPlugins = createPlugins;
