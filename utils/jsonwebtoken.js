"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeJWT = exports.createJWT = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _user = _interopRequireDefault(require("../model/user"));

_dotenv.default.config();

var createJWT =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(id) {
    var token;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _jsonwebtoken.default.sign({
              id: id
            }, process.env.JSON_WEB_TOKEN_SECRET_KEY || "");

          case 2:
            token = _context.sent;
            return _context.abrupt("return", token);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createJWT(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createJWT = createJWT;

var decodeJWT =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(token) {
    var decoded, id, user;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            decoded = _jsonwebtoken.default.verify(token, process.env.JSON_WEB_TOKEN_SECRET_KEY || "");
            id = decoded.id;
            _context2.prev = 2;
            _context2.next = 5;
            return _user.default.findByPk(id).then(function (project) {
              return project;
            });

          case 5:
            user = _context2.sent;
            return _context2.abrupt("return", user);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            return _context2.abrupt("return", null);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 9]]);
  }));

  return function decodeJWT(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.decodeJWT = decodeJWT;