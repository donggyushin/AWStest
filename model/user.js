"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _sequelize2 = require("../sequelize");

var User = _sequelize2.sequelize.define("user", {
  username: {
    type: _sequelize.default.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  admin: {
    type: _sequelize.default.BOOLEAN,
    defaultValue: false
  }
});

var _default = User;
exports.default = _default;