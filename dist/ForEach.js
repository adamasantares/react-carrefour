'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForEach = function (_React$Component) {
    _inherits(ForEach, _React$Component);

    function ForEach() {
        _classCallCheck(this, ForEach);

        return _possibleConstructorReturn(this, (ForEach.__proto__ || Object.getPrototypeOf(ForEach)).apply(this, arguments));
    }

    _createClass(ForEach, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (!this.props.children) {
                return null;
            }
            var debug = this.props.debug || false;
            var children = this.props.children;
            if (!Array.isArray(children)) {
                children = [children];
            }
            var argument = this.props.as;
            var elements = [];
            var key = 0;
            if (debug) console.log('ForEach (' + debug + '): total children number is ' + children.length);

            var _loop = function _loop(value) {
                var _items = children.map(function (child) {
                    var name = (0, _utils.childName)(child);
                    if (debug) console.log('ForEach (' + debug + '): item ' + name, child);
                    if (typeof child === 'function') {
                        child = child(value);
                        var props = { key: key };
                        key++;
                        return _react2.default.cloneElement(child, props);
                    }
                    if (child.type && child.props) {
                        var _props = { key: key };
                        _props[argument] = value;
                        key++;
                        return _react2.default.cloneElement(child, _props);
                    }
                    return null;
                }, _this2);
                elements.push(_items);
            };

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.props.of[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var value = _step.value;

                    _loop(value);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                elements
            );
        }
    }]);

    return ForEach;
}(_react2.default.Component);

ForEach.propTypes = {
    of: _propTypes2.default.array.isRequired,
    as: _propTypes2.default.string.isRequired,
    debug: _propTypes2.default.string
};

exports.default = ForEach;
//# sourceMappingURL=ForEach.js.map