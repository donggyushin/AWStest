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

var putQna =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(token, title, contents, id) {
    var writer, qnaToUpdate;
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
            return _qna.default.findByPk(id);

          case 6:
            qnaToUpdate = _context.sent;
            console.log(writer.id);
            console.log(qnaToUpdate.userID);

            if (!(writer.id !== qnaToUpdate.userId)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              ok: false,
              error: "권한이 없습니다."
            });

          case 11:
            _context.next = 13;
            return qnaToUpdate.update({
              title: title,
              contents: contents
            });

          case 13:
            return _context.abrupt("return", {
              ok: true,
              error: null
            });

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              ok: false,
              error: _context.t0
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 16]]);
  }));

  return function putQna(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var _default = putQna;
exports.default = _default;