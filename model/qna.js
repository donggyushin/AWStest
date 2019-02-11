"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _sequelize2 = require("../sequelize");

var QNA = _sequelize2.sequelize.define("qna", {
  title: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  contents: {
    type: _sequelize.default.TEXT
  },
  views: {
    type: _sequelize.default.INTEGER,
    defaultValue: 0
  }
});

var _default = QNA;
exports.default = _default;