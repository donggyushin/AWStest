"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _qna = _interopRequireDefault(require("../../model/qna"));

var _sequelize = require("../../sequelize");

var _commentForQna = _interopRequireDefault(require("../../model/commentForQna"));

var _user = _interopRequireDefault(require("../../model/user"));

var SearchQNA =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(searchValue) {
    var lookupValue, qnas;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            lookupValue = searchValue.toLowerCase();
            _context.next = 4;
            return _qna.default.findAll({
              order: [["id", "DESC"]],
              where: {
                title: _sequelize.sequelize.where(_sequelize.sequelize.fn("LOWER", _sequelize.sequelize.col("title")), "LIKE", "%" + lookupValue + "%")
              },
              attributes: ["id", "title", "updatedAt", "views"],
              subQuery: false,
              include: [{
                model: _commentForQna.default,
                attributes: [[_sequelize.sequelize.fn("COUNT", _sequelize.sequelize.col("CommentForQnas.id")), "commentCounts"]]
              }, {
                model: _user.default,
                attributes: ["username"]
              }],
              group: ["qna.id", "commentForQnas.id"]
            });

          case 4:
            qnas = _context.sent;
            return _context.abrupt("return", {
              ok: true,
              error: null,
              qnas: qnas
            });

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              ok: false,
              error: _context.t0,
              qnas: null
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  return function SearchQNA(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = SearchQNA;
exports.default = _default;