"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _sequelize2 = require("../sequelize");

var CommentForNotice = _sequelize2.sequelize.define("commentForNotice", {
  text: {
    type: _sequelize.default.TEXT,
    allowNull: false
  }
});

var _default = CommentForNotice;
exports.default = _default;