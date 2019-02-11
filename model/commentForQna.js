"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _sequelize2 = require("../sequelize");

var CommentForQna = _sequelize2.sequelize.define("commentForQna", {
  text: {
    type: _sequelize.default.TEXT,
    allowNull: false
  }
});

var _default = CommentForQna;
exports.default = _default;