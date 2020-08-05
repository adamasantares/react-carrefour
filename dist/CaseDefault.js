'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CaseDefault = function (_React$Component) {
    _inherits(CaseDefault, _React$Component);

    function CaseDefault() {
        _classCallCheck(this, CaseDefault);

        return _possibleConstructorReturn(this, (CaseDefault.__proto__ || Object.getPrototypeOf(CaseDefault)).apply(this, arguments));
    }

    _createClass(CaseDefault, [{
        key: 'render',
        value: function render() {
            if (!this.props.children || !this.props.expression || !this.props.values) {
                return null;
            }
            var debug = this.props.debug || false;
            var hasMatch = false;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.props.values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var val = _step.value;

                    if (Array.isArray(val)) {
                        if (val.includes(this.props.expression)) {
                            hasMatch = true;break;
                        }
                    } else {
                        if (this.props.expression === val) {
                            hasMatch = true;break;
                        }
                    }
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

            if (debug && !hasMatch) console.log('CaseDefault: no any other matches');
            return hasMatch ? null : _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.props.children
            );
        }
    }]);

    return CaseDefault;
}(_react2.default.Component);

CaseDefault.propTypes = {
    values: _propTypes2.default.array,
    expression: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    debug: _propTypes2.default.string
};

exports.default = CaseDefault;
//# sourceMappingURL=CaseDefault.js.map