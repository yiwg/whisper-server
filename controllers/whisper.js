var User         = require('../proxy').User;
var stringUtils=require("../utils/stringUtils");
var uuid = require('node-uuid');
var smsUtils=require('../utils/smsUtils')

exports.sendSms = function (req, res, next) {
  console.info("there is action:whisper.sendSms......");
  smsUtils.sendSms("弋伟国",'13519287318',function (err,res) {
    if(err){
      console.log(err);
    }
    else {
      console.log(res);
    }
  });
};

