"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _user = _interopRequireDefault(require("../../model/user"));

var _faq = _interopRequireDefault(require("../../model/faq"));

var Op = _sequelize.default.Op;

var GetNextFAQDetail =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(id) {
    var faq;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _faq.default.findOne({
              where: {
                id: (0, _defineProperty2.default)({}, Op.gt, id)
              },
              attributes: ["id", "updatedAt", "title", "contents", "views"],
              include: [{
                model: _user.default,
                attributes: ["username"]
              }]
            });

          case 3:
            faq = _context.sent;
            faq.views += 1;
            _context.next = 7;
            return faq.save();

          case 7:
            return _context.abrupt("return", {
              ok: true,
              error: null,
              faq: faq
            });

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              ok: false,
              error: "마지막 페이지입니다. ",
              faq: null
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10]]);
  }));

  return function GetNextFAQDetail(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = GetNextFAQDetail;
exports.default = _default;