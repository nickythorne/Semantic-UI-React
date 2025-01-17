"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _reactDom = require("react-dom");

var _refUtils = require("../../lib/refUtils");

var RefFindNode =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(RefFindNode, _Component);

  function RefFindNode() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, RefFindNode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(RefFindNode)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "prevNode", null);
    return _this;
  }

  (0, _createClass2["default"])(RefFindNode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // eslint-disable-next-line react/no-find-dom-node
      this.prevNode = (0, _reactDom.findDOMNode)(this);
      (0, _refUtils.handleRef)(this.props.innerRef, this.prevNode);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // eslint-disable-next-line react/no-find-dom-node
      var currentNode = (0, _reactDom.findDOMNode)(this);

      if (this.prevNode !== currentNode) {
        this.prevNode = currentNode;
        (0, _refUtils.handleRef)(this.props.innerRef, currentNode);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _refUtils.handleRef)(this.props.innerRef, null);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);
  return RefFindNode;
}(_react.Component);

exports["default"] = RefFindNode;
(0, _defineProperty2["default"])(RefFindNode, "handledProps", ["children", "innerRef"]);
RefFindNode.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: _propTypes["default"].element.isRequired,

  /**
   * Called when a child component will be mounted or updated.
   *
   * @param {HTMLElement} node - Referred node.
   */
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object])
} : {};
