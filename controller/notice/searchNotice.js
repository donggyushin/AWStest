"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _notice = _interopRequireDefault(require("../../model/notice"));

var _sequelize = require("../../sequelize");

var _commentForNotice = _interopRequireDefault(require("../../model/commentForNotice"));

var _user = _interopRequireDefault(require("../../model/user"));

var SearchNotice =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(searchValue) {
    var lookupValue, notices;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            lookupValue = searchValue.toLowerCase();
            _context.next = 4;
            return _notice.default.findAll({
              order: [["id", "DESC"]],
              where: {
                title: _sequelize.sequelize.where(_sequelize.sequelize.fn("LOWER", _sequelize.sequelize.col("title")), "LIKE", "%" + lookupValue + "%")
              },
              attributes: ["id", "title", "updatedAt", "views"],
              subQuery: false,
              include: [{
                model: _commentForNotice.default,
                attributes: [[_sequelize.sequelize.fn("COUNT", _sequelize.sequelize.col("CommentForNotices.id")), "commentCounts"]]
              }, {
                model: _user.default,
                attributes: ["username"]
              }],
              group: ["notice.id", "commentForNotices.id"]
            });

          case 4:
            notices = _context.sent;
            return _context.abrupt("return", {
              ok: true,
              error: null,
              notices: notices
            });

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              ok: false,
              error: _context.t0,
              notices: null
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  return function SearchNotice(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = SearchNotice;
exports.default = _default;