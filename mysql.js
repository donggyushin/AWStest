"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mysql = _interopRequireDefault(require("mysql"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv.default.config();

var env = process.env.NODE_ENV || "dev";
var host = process.env.HOST;
var user = process.env.USERNAME;
var password = process.env.PASSWORD;
var database = process.env.DATABASE;

if (env === "dev") {
  host = "localhost";
  user = "rontend";
  password = process.env.DEV_PASSWORD;
  database = "blockcell";
}

var connection = _mysql.default.createConnection({
  host: host,
  user: user,
  password: password,
  database: database
});

connection.connect(function (err) {
  if (err) {
    console.log("\u274C   Error: ".concat(err.stack));
    return;
  }

  console.log("\u2705   connected as id ".concat(connection.threadId));
});