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

var _commentForQna = _interopRequireDefault(require("../../model/commentForQna"));

var _sequelize = require("../../sequelize");

var getQnaBy15 =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(page) {
    var offset, qnas;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            offset = 15 * (page - 1);
            _context.prev = 1;
            _context.next = 4;
            return _qna.default.findAll({
              offset: offset,
              limit: 15,
              order: [["id", "DESC"]],
              subQuery: false,
              distinct: true,
              attributes: ["id", "title", "updatedAt", "views"],
              include: [// {
              //   model: CommentForQna,
              //   attributes: [
              //     [
              //       sequelize.fn("COUNT", sequelize.col("CommentForQnas.id")),
              //       "commentCounts"
              //     ]
              //   ]
              // },
              {
                model: _user.default,
                attributes: ["username"]
              }] // group: ["qna.id", "commentForqnas.id"]

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
            _context.t0 = _context["catch"](1);
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
    }, _callee, this, [[1, 8]]);
  }));

  return function getQnaBy15(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getQnaBy15;
exports.default = _default;