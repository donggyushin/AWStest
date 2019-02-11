"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _notice = _interopRequireDefault(require("../../model/notice"));

var _user = _interopRequireDefault(require("../../model/user"));

var getNoticeDetail =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(id) {
    var noticeDetail;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _notice.default.findByPk(id, {
              attributes: ["id", "title", "contents", "createdAt", "views"],
              include: [{
                model: _user.default,
                attributes: ["username"]
              }]
            });

          case 3:
            noticeDetail = _context.sent;
            noticeDetail.views += 1;
            _context.next = 7;
            return noticeDetail.save();

          case 7:
            return _context.abrupt("return", {
              ok: true,
              error: null,
              noticeDetail: noticeDetail
            });

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              ok: false,
              error: _context.t0,
              noticeDetail: null
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10]]);
  }));

  return function getNoticeDetail(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getNoticeDetail;
exports.default = _default;