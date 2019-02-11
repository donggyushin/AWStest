"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = require("../../utils/jsonwebtoken");

var _notice = _interopRequireDefault(require("../../model/notice"));

var writeNotice =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(token, title, contents) {
    var writer, admin;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(token, title, contents);
            _context.next = 4;
            return (0, _jsonwebtoken.decodeJWT)(token);

          case 4:
            writer = _context.sent;
            admin = writer.admin;

            if (admin) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", {
              ok: false,
              error: "접근 권한이 없습니다."
            });

          case 8:
            _context.next = 10;
            return _notice.default.create({
              title: title,
              contents: contents,
              userId: writer.id
            });

          case 10:
            return _context.abrupt("return", {
              ok: true,
              error: null
            });

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              ok: false,
              error: _context.t0
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 13]]);
  }));

  return function writeNotice(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = writeNotice;
exports.default = _default;