"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = require("../../utils/jsonwebtoken");

var _qna = _interopRequireDefault(require("../../model/qna"));

var postQna =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(token, title, contents) {
    var writer;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _jsonwebtoken.decodeJWT)(token);

          case 3:
            writer = _context.sent;

            if (writer) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", {
              ok: false,
              error: "로그인 해주세요."
            });

          case 6:
            _context.next = 8;
            return _qna.default.create({
              title: title,
              contents: contents,
              userId: writer.id
            });

          case 8:
            return _context.abrupt("return", {
              ok: true,
              error: null
            });

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              ok: false,
              error: _context.t0
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 11]]);
  }));

  return function postQna(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = postQna;
exports.default = _default;