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

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IfTrue = function (_React$Component) {
    _inherits(IfTrue, _React$Component);

    function IfTrue() {
        _classCallCheck(this, IfTrue);

        return _possibleConstructorReturn(this, (IfTrue.__proto__ || Object.getPrototypeOf(IfTrue)).apply(this, arguments));
    }

    _createClass(IfTrue, [{
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
            if (debug) console.log('IfTrue (' + debug + '): total children number is ' + children.length);
            var statement = typeof this.props.condition !== 'undefined' ? this.props.condition : this.props.statement || this.props.st;
            var allowedChildren = [];
            var orElse = false;
            // TODO REDO React.Children.map(children, (child, i) ?
            if (!statement) {
                if (debug) console.log('IfTrue (' + debug + '): statement = false');
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var child = _step.value;

                        var name = (0, _utils.childName)(child);
                        if (debug) console.log('IfTrue (' + debug + '): child ' + name, child);
                        if (name === 'OrElse') {
                            if (debug) console.log('IfTrue (' + debug + '): OrElse detected. Start output children.');
                            orElse = true;
                        } else {
                            if (orElse) {
                                allowedChildren.push(child);
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
            } else {
                if (debug) console.log('IfTrue (' + debug + '): statement = true');
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _child = _step2.value;

                        var _name = (0, _utils.childName)(_child);
                        if (debug) console.log('IfTrue (' + debug + '): child ' + _name, _child);
                        if (_name === 'OrElse') {
                            if (debug) console.log('IfTrue (' + debug + '): OrElse detected. Break output children.');
                            break;
                        }
                        allowedChildren.push(_child);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
            if (debug) console.log('IfTrue (' + debug + '): result number of children is ' + allowedChildren.length);
            return allowedChildren.length > 0 ? _react2.default.createElement(
                _react2.default.Fragment,
                null,
                allowedChildren
            ) : null;
        }
    }]);

    return IfTrue;
}(_react2.default.Component);

IfTrue.propTypes = {
    statement: _propTypes2.default.bool,
    st: _propTypes2.default.bool,
    debug: _propTypes2.default.string
};

exports.default = IfTrue;
//# sourceMappingURL=IfTrue.js.map