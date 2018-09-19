"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Consumer = exports.Provider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Input = _interopRequireDefault(require("./Input"));

var _Form = require("./Form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _React$createContext = _react.default.createContext(),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

exports.Consumer = Consumer;
exports.Provider = Provider;

var Group =
/*#__PURE__*/
function (_Component) {
  _inherits(Group, _Component);

  function Group() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Group);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Group)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.nodes = [], _temp));
  }

  _createClass(Group, [{
    key: "update",
    value: function update(next) {
      var _this2 = this;

      return function (name) {
        return function (text) {
          var value = _this2.props.value;

          var newValue = _objectSpread({}, value, _defineProperty({}, name, text));

          console.log('Prev Value', value);
          console.log('New Value', newValue);
          next(newValue);
        };
      };
    }
  }, {
    key: "register",
    value: function register(name) {
      var _this3 = this;

      return function (node) {
        if (node === null) {
          _this3.nodes = _this3.nodes.filter(function (n) {
            return n.name === name;
          });
        } else {
          _this3.nodes = _this3.nodes.concat({
            name: name,
            node: node
          });
        }
      };
    }
  }, {
    key: "get",
    value: function get(name) {
      var _this4 = this;

      return function () {
        return _this4.props.value && _this4.props.value[name];
      };
    }
  }, {
    key: "next",
    value: function next(name) {
      var _this5 = this;

      return function () {
        var idx = _this5.nodes.findIndex(function (n) {
          return n.name === name;
        }) + 1;

        if (idx < _this5.nodes.length) {
          _this5.nodes[idx].node.focus();
        }
      };
    }
  }, {
    key: "submit",
    value: function submit() {
      var props = this.props;
      var state = {};
      this.nodes.forEach(function (iNode) {
        var node = iNode.node,
            name = iNode.name;
        node.validate(node.props.get());

        if (node.props.get() !== undefined) {
          state[name] = node.props.get();
        }
      });
      props.onSubmit(state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$props = this.props,
          onSubmit = _this$props.onSubmit,
          onChange = _this$props.onChange,
          value = _this$props.value,
          name = _this$props.name,
          other = _objectWithoutProperties(_this$props, ["onSubmit", "onChange", "value", "name"]); // console.log('Render state', this.state.data);


      this.register = this.register.bind(this);
      this.get = this.get.bind(this);
      this.next = this.next.bind(this); // this.update = this.update.bind(this);

      this.submit = this.submit.bind(this); // console.log('Rendering form', value, this.props);

      if (name === _Form.ROOT) {
        var update = this.update(onChange);
        return _react.default.createElement(Provider, _extends({
          value: {
            update: update,
            register: this.register,
            get: this.get,
            state: value
          }
        }, other));
      }

      return _react.default.createElement(_Input.default, {
        name: name
      }, function (form) {
        var update = _this6.update(form.update);

        console.log(form.get(name), name);
        return _react.default.createElement(Provider, _extends({
          value: {
            update: update,
            register: _this6.register,
            get: function get() {
              return form.get;
            },
            state: form.get(name)
          }
        }, other));
      });
    }
  }]);

  return Group;
}(_react.Component);

var _default = Group;
exports.default = _default;