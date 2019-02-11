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

var _postFaq = _interopRequireDefault(require("../controller/faq/postFaq"));

var _deleteFaq = _interopRequireDefault(require("../controller/faq/deleteFaq"));

var _getFaqBy = _interopRequireDefault(require("../controller/faq/getFaqBy15"));

var _getFaqDetail = _interopRequireDefault(require("../controller/faq/getFaqDetail"));

var _putFaq = _interopRequireDefault(require("../controller/faq/putFaq"));

var _countFaq = _interopRequireDefault(require("../controller/faq/countFaq"));

var _getNextDetail = _interopRequireDefault(require("../controller/faq/getNextDetail"));

var _getPreviousDetail = _interopRequireDefault(require("../controller/faq/getPreviousDetail"));

var _searchByTerm = _interopRequireDefault(require("../controller/faq/searchByTerm"));

var router = _express.default.Router();

var upload = (0, _multer.default)(); // GET

router.get("/count",
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res) {
    var returnType;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _countFaq.default)();

          case 2:
            returnType = _context.sent;
            res.json(returnType);

          case 4:
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
router.get("/next/:id",
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(req, res) {
    var id, returnType;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return (0, _getNextDetail.default)(id);

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
router.get("/previous/:id",
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(req, res) {
    var id, returnType;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return (0, _getPreviousDetail.default)(id);

          case 3:
            returnType = _context3.sent;
            res.json(returnType);

          case 5:
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
router.get("/detail/:id",
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(req, res) {
    var id, returnType;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return (0, _getFaqDetail.default)(id);

          case 3:
            returnType = _context4.sent;
            res.json(returnType);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
router.get("/search/:searchValue",
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(req, res) {
    var searchValue, returnType;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            searchValue = req.params.searchValue;
            _context5.next = 3;
            return (0, _searchByTerm.default)(searchValue);

          case 3:
            returnType = _context5.sent;
            res.json(returnType);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
router.get("/:page",
/*#__PURE__*/
function () {
  var _ref6 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(req, res) {
    var page, returnType;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            page = req.params.page;
            _context6.next = 3;
            return (0, _getFaqBy.default)(page);

          case 3:
            returnType = _context6.sent;
            res.json(returnType);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}()); // POST

router.post("/", upload.array(),
/*#__PURE__*/
function () {
  var _ref7 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee7(req, res) {
    var token, _req$body, title, contents, returnType;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            token = req.get("X-JWT");
            _req$body = req.body, title = _req$body.title, contents = _req$body.contents;
            _context7.next = 4;
            return (0, _postFaq.default)(token, title, contents);

          case 4:
            returnType = _context7.sent;
            res.json(returnType);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}()); // PUT

router.put("/:id", upload.array(),
/*#__PURE__*/
function () {
  var _ref8 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee8(req, res) {
    var token, _req$body2, title, contents, id, returnType;

    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            token = req.get("X-JWT");
            _req$body2 = req.body, title = _req$body2.title, contents = _req$body2.contents;
            id = req.params.id;
            _context8.next = 5;
            return (0, _putFaq.default)(token, title, contents, id);

          case 5:
            returnType = _context8.sent;
            res.json(returnType);

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}()); // DELETE

router.delete("/:id",
/*#__PURE__*/
function () {
  var _ref9 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee9(req, res) {
    var token, id, returnType;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            token = req.get("X-JWT");
            id = req.params.id;
            _context9.next = 4;
            return (0, _deleteFaq.default)(token, id);

          case 4:
            returnType = _context9.sent;
            res.json(returnType);

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;