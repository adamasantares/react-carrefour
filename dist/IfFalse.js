'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _OrElse = require('./OrElse');

var _OrElse2 = _interopRequireDefault(_OrElse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IfFalse = function (_React$Component) {
    _inherits(IfFalse, _React$Component);

    function IfFalse() {
        _classCallCheck(this, IfFalse);

        return _possibleConstructorReturn(this, (IfFalse.__proto__ || Object.getPrototypeOf(IfFalse)).apply(this, arguments));
    }

    _createClass(IfFalse, [{
        key: 'render',
        value: function render() {
            if (!this.props.children) {
                return null;
            }
            var statement = typeof this.props.condition !== 'undefined' ? this.props.condition : this.props.statement || this.props.st;
            var childrenIf = [];
            var childrenElse = [];
            var swap = false;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.props.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var child = _step.value;

                    if (child.type.name === 'OrElse') {
                        swap = true;
                    } else {
                        if (swap) {
                            childrenElse.push(child);
                        } else {
                            childrenIf.push(child);
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

            if (!!statement) {
                if (childrenElse.length > 0) {
                    return _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        childrenElse
                    );
                }
                return null;
            }
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                childrenIf
            );
        }
    }]);

    return IfFalse;
}(_react2.default.Component);

IfFalse.propTypes = {
    statement: _propTypes2.default.bool,
    st: _propTypes2.default.bool
};

exports.default = IfFalse;
//# sourceMappingURL=IfFalse.js.map