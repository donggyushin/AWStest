"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparePassword = exports.hashPassword = void 0;

var hashPassword = function hashPassword(rawPassord) {
  // const hash = bcrypt.hashSync(rawPassord, SALTROUNTS);
  return rawPassord;
};

exports.hashPassword = hashPassword;

var comparePassword = function comparePassword(rawPassword, hashedPassword) {
  // const match = bcrypt.compareSync(rawPassword, hashedPassword);
  if (rawPassword === hashedPassword) {
    return true;
  } else {
    return false;
  }
};

exports.comparePassword = comparePassword;