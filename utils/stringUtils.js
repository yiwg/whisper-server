/**
 * Created by yiweiguo on 2017/3/17.
 */

exports.writeObj=function writeObj(obj,prestring){
    var description = "object:";
    for(var i in obj){
        var property=obj[i];
        description+=i+" = "+property+"\n";
    }
    console.log(prestring+"["+description+"]");
};