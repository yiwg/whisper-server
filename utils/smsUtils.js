/**
 * Created by yiweiguo on 2017/3/23.
 */
TopClient = require('./lib/api/topClient').TopClient;
var client = new TopClient({
    'appkey': '23717081',
    'appsecret': '76e3977da1f92eee2a48259458633c8f',
    'REST_URL': 'http://gw.api.taobao.com/router/rest'
});

exports.sendSms=function(name,phone,callback){
    client.execute('alibaba.aliqin.fc.sms.num.send', {
        'extend':'123456',
        'sms_type':'normal',
        'sms_free_sign_name':"小萌科技",
        'sms_param':'{"name":'+name+'}',
        'rec_num':phone,
        'sms_template_code':'SMS_57805001'
    }, /*function(error, response) {
        if (!error) console.log(response);
        else console.log(error);
    })*/
    callback)


}