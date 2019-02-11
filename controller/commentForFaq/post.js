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

var _user = _interopRequireDefault(require("../../model/user"));

var postCommentForFaq =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(token, faqId, text) {
    var writer, newComment, comment;
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
              error: "댓글을 달려면 로그인을 해주세요."
            });

          case 6:
            _context.next = 8;
            return _commentForFaq.default.create({
              text: text,
              userId: writer.id,
              faqId: faqId
            });

          case 8:
            newComment = _context.sent;
            _context.next = 11;
            return _commentForFaq.default.findByPk(newComment.id, {
              attributes: ["id", "text", "createdAt"],
              include: [{
                model: _user.default,
                attributes: ["username"]
              }]
            });

          case 11:
            comment = _context.sent;
            return _context.abrupt("return", {
              ok: true,
              error: null,
              comment: comment
            });

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              ok: false,
              error: _context.t0,
              comment: null
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 15]]);
  }));

  return function postCommentForFaq(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = postCommentForFaq;
exports.default = _default;