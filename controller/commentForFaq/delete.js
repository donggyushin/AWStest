"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = require("../../utils/jsonwebtoken");

var _commentForFaq = _interopRequireDefault(require("../../model/commentForFaq"));

var deleteCommentForFaq =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(token, id) {
    var writer, commentToDelete;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _jsonwebtoken.decodeJWT)(token);

          case 3:
            writer = _context.sent;
            _context.next = 6;
            return _commentForFaq.default.findByPk(id);

          case 6:
            commentToDelete = _context.sent;

            if (!(writer.id !== commentToDelete.userId)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", {
              ok: false,
              error: "권한이 없습니다. "
            });

          case 9:
            _context.next = 11;
            return commentToDelete.destroy();

          case 11:
            return _context.abrupt("return", {
              ok: true,
              error: null
            });

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              ok: false,
              error: _context.t0
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 14]]);
  }));

  return function deleteCommentForFaq(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = deleteCommentForFaq;
exports.default = _default;