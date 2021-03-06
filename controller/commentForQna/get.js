"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _commentForQna = _interopRequireDefault(require("../../model/commentForQna"));

var _user = _interopRequireDefault(require("../../model/user"));

var getCommentForQna =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(qnaId) {
    var comments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _commentForQna.default.findAll({
              where: {
                qnaId: qnaId
              },
              include: [{
                model: _user.default,
                attributes: ["username"]
              }],
              attributes: ["id", "text", "createdAt"]
            });

          case 3:
            comments = _context.sent;
            return _context.abrupt("return", {
              ok: true,
              error: null,
              comments: comments
            });

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              ok: false,
              error: _context.t0,
              comments: null
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function getCommentForQna(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getCommentForQna;
exports.default = _default;