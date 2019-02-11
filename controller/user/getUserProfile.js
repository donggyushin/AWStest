"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = require("../../utils/jsonwebtoken");

var GetUserProfile =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res) {
    var token, user;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.get("X-JWT");
            console.log(token);

            if (!token) {
              res.json({
                ok: true,
                error: null,
                user: null
              });
            }

            _context.next = 6;
            return (0, _jsonwebtoken.decodeJWT)(token);

          case 6:
            user = _context.sent;
            res.json({
              ok: true,
              error: null,
              user: user
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.json({
              ok: false,
              error: _context.t0,
              user: null
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10]]);
  }));

  return function GetUserProfile(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = GetUserProfile;
exports.default = _default;