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

var _post = _interopRequireDefault(require("../controller/commentForFaq/post"));

var _get = _interopRequireDefault(require("../controller/commentForFaq/get"));

var _delete = _interopRequireDefault(require("../controller/commentForFaq/delete"));

var router = _express.default.Router();

var upload = (0, _multer.default)(); // GET

router.get("/:faqId",
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res) {
    var faqId, returnType;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            faqId = req.params.faqId;
            _context.next = 3;
            return (0, _get.default)(faqId);

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
}()); // POST

router.post("/:faqId", upload.array(),
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(req, res) {
    var token, faqId, text, returnType;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = req.get("X-JWT");
            faqId = req.params.faqId;
            text = req.body.text;
            _context2.next = 5;
            return (0, _post.default)(token, faqId, text);

          case 5:
            returnType = _context2.sent;
            res.json(returnType);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); // PUT
// DELETE

router.delete("/:id",
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(req, res) {
    var token, id, returnType;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = req.get("X-JWT");
            id = req.params.id;
            _context3.next = 4;
            return (0, _delete.default)(token, id);

          case 4:
            returnType = _context3.sent;
            res.json(returnType);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;