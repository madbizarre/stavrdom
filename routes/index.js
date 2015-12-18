"use strict";

var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/mail', function (req, res, next){
  let mail = config.get('mail'),
      text = `Имя: ${req.body.name || 'не указано'}
Email: ${req.body.email || 'не указан'}
Телефон: ${req.body.tel}
Комментарий: ${req.body.comment || 'не указан'}`;
  transporter.sendMail({
    from: `${mail.from} <${mail.user}>`,
    to: mail.to.split(', '),
    subject: `Заявка с сайта: joindarkside.ru`,
    text: text
  }, function (err){
    if (err) return next(err);
    res.status(200).end();
  });
});

module.exports = router;
