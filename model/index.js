"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _sequelize = require("../sequelize");

var _user = _interopRequireDefault(require("./user"));

var _notice = _interopRequireDefault(require("./notice"));

var _commentForNotice = _interopRequireDefault(require("./commentForNotice"));

var _faq = _interopRequireDefault(require("./faq"));

var _commentForFaq = _interopRequireDefault(require("./commentForFaq"));

var _qna = _interopRequireDefault(require("./qna"));

var _commentForQna = _interopRequireDefault(require("./commentForQna"));

_notice.default.User = _notice.default.belongsTo(_user.default);
_commentForNotice.default.User = _commentForNotice.default.belongsTo(_user.default);
_commentForNotice.default.Notice = _commentForNotice.default.belongsTo(_notice.default);

_notice.default.hasMany(_commentForNotice.default); // User.hasMany(FAQ, { as: "faqs" });


_faq.default.User = _faq.default.belongsTo(_user.default);

_commentForFaq.default.belongsTo(_user.default);

_commentForFaq.default.belongsTo(_faq.default);

_faq.default.hasMany(_commentForFaq.default);

_qna.default.belongsTo(_user.default);

_commentForQna.default.belongsTo(_user.default);

_commentForQna.default.belongsTo(_qna.default);

_qna.default.hasMany(_commentForQna.default);

_sequelize.sequelize.sync({
  force: true
});