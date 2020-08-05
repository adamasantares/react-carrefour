'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Case = require('./Case');

var _Case2 = _interopRequireDefault(_Case);

var _CaseDefault = require('./CaseDefault');

var _CaseDefault2 = _interopRequireDefault(_CaseDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_React$Component) {
    _inherits(Switch, _React$Component);

    function Switch() {
        _classCallCheck(this, Switch);

        return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
    }

    _createClass(Switch, [{
        key: 'render',
        value: function render() {
            if (!this.props.children) {
                return null;
            }
            var debug = this.props.debug || false;
            var children = this.props.children;
            if (!Array.isArray(children)) {
                children = [children];
            }
            var expression = this.props.expression || this.props.exp;
            if (debug) console.log('Switch (' + debug + '): expression is', expression);

            // all values for CaseDefault
            var allCases = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var child = _step.value;

                    allCases.push(child.props.val);
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

            if (debug) console.log('Switch (' + debug + '): cases number is ' + allCases.length);

            children = children.map(function (child, i) {
                if (child.type && child.type.name === 'CaseDefault') {
                    return _react2.default.cloneElement(child, {
                        key: i,
                        values: allCases,
                        expression: expression,
                        debug: debug
                    });
                }
                return _react2.default.cloneElement(child, {
                    key: i,
                    val: child.props.val,
                    expression: expression,
                    debug: debug
                });
            }, this);

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                children
            );
        }
    }]);

    return Switch;
}(_react2.default.Component);

Switch.propTypes = {
    expression: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    exp: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    debug: _propTypes2.default.string
};

exports.default = Switch;
//# sourceMappingURL=Switch.js.map