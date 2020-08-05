'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.childName = childName;
function childName(child) {
    if (typeof child.type === 'function' && child.type.displayName) {
        return child.type.displayName;
    }
    if (typeof child.type === 'function' && child.type.name) {
        return child.type.name;
    }
    if (typeof child.type === 'string') {
        return child.type;
    }
    if (child['$$typeof'] && _typeof(child['$$typeof']) === 'symbol') {
        return child['$$typeof'].description;
    }
    return typeof child === 'undefined' ? 'undefined' : _typeof(child);
}
//# sourceMappingURL=utils.js.map