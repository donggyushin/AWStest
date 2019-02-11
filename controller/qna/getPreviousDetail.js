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

var _qna2 = _interopRequireDefault(require("../../model/qna"));

var _user = _interopRequireDefault(require("../../model/user"));

var Op = _sequelize.default.Op;

var GetPreviousQNADetail =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(id) {
    var _qna;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(id);
            _context.next = 4;
            return _qna2.default.findOne({
              where: {
                id: (0, _defineProperty2.default)({}, Op.lt, id)
              },
              attributes: ["id", "updatedAt", "title", "contents", "views"],
              include: [{
                model: _user.default,
                attributes: ["username"]
              }],
              order: [["id", "DESC"]]
            });

          case 4:
            _qna = _context.sent;
            _qna.views += 1;
            _context.next = 8;
            return _qna.save();

          case 8:
            return _context.abrupt("return", {
              ok: true,
              error: null,
              qna: _qna
            });

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              ok: false,
              error: "첫번째 페이지입니다. ",
              qna: qna
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 11]]);
  }));

  return function GetPreviousQNADetail(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = GetPreviousQNADetail;
exports.default = _default;