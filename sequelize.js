"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv.default.config(); // const env = process.env.NODE_ENV || "dev";
// let host = process.env.HOST;
// let user = process.env.USERNAME;
// let password = process.env.PASSWORD;
// let database = process.env.DATABASE;
// if (env == "dev") {
//   host = "localhost";
//   user = "rontend";
//   password = process.env.DEV_PASSWORD;
//   database = "blockcell";
// }
const host = "blockcell.cafe24app.com";
const user = "creativeps";
const password = "avata1023";
const database = "creativeps";

// var host = "localhost";
// var user = "rontend";
// var password = "nlcfjb1129";
// var database = "blockcell";
var sequelize = new _sequelize.default(database, user, password, {
  host: host,
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 30,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
exports.sequelize = sequelize;
sequelize
  .authenticate()
  .then(function() {
    console.log("✅   Connection has been established successfully");
  })
  .catch(function(err) {
    console.log("❌   Unable to connect to the database: ", err);
  });
