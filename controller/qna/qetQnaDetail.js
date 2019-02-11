"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _qna = _interopRequireDefault(require("../../model/qna"));

var _user = _interopRequireDefault(require("../../model/user"));

var getQnaDetail =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(id) {
    var qnaDetail;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _qna.default.findByPk(id, {
              attributes: ["id", "title", "contents", "createdAt", "views"],
              include: [{
                model: _user.default,
                attributes: ["username"]
              }]
            });

          case 3:
            qnaDetail = _context.sent;
            qnaDetail.views += 1;
            _context.next = 7;
            return qnaDetail.save();

          case 7:
            return _context.abrupt("return", {
              ok: true,
              error: null,
              qnaDetail: qnaDetail
            });

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              ok: false,
              error: _context.t0,
              qnaDetail: null
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10]]);
  }));

  return function getQnaDetail(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getQnaDetail;
exports.default = _default;