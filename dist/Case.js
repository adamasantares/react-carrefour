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

var Case = function (_React$Component) {
    _inherits(Case, _React$Component);

    function Case() {
        _classCallCheck(this, Case);

        return _possibleConstructorReturn(this, (Case.__proto__ || Object.getPrototypeOf(Case)).apply(this, arguments));
    }

    _createClass(Case, [{
        key: 'render',
        value: function render() {
            if (!this.props.children || !this.props.expression) {
                return null;
            }
            if (Array.isArray(this.props.val)) {
                if (this.props.val.includes(this.props.expression)) {
                    return _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        this.props.children
                    );
                }
            } else {
                if (this.props.expression === this.props.val) {
                    return _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        this.props.children
                    );
                }
            }
            return null;
        }
    }]);

    return Case;
}(_react2.default.Component);

Case.propTypes = {
    val: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string, _propTypes2.default.number), _propTypes2.default.string, _propTypes2.default.number]).isRequired,
    expression: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

exports.default = Case;
//# sourceMappingURL=Case.js.map