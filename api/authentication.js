"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _userController = require("../controller/user/userController");

var _getUserProfile = _interopRequireDefault(require("../controller/user/getUserProfile"));

var router = _express.default.Router();

var upload = (0, _multer.default)();
router.post("/new-account", upload.array(),
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res) {
    var _req$body, username, password1, password2, returnType;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, password1 = _req$body.password1, password2 = _req$body.password2;
            _context.next = 3;
            return (0, _userController.newAccoutFN)(username, password1, password2);

          case 3:
            returnType = _context.sent;
            res.json(returnType);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post("/login", upload.array(),
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(req, res) {
    var _req$body2, username, password, returnType;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
            _context2.next = 3;
            return (0, _userController.loginFN)(username, password);

          case 3:
            returnType = _context2.sent;
            res.json(returnType);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.get("/get-user-profile", _getUserProfile.default);
var _default = router;
exports.default = _default;