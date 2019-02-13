import {thinkutils} from "../../src/thinkutils";

function base64Test(): void {
    console.log(thinkutils.base64.encode("1234567890"));
    console.log(thinkutils.base64.decode("MTIzNDU2Nzg5MA=="));
}

function reg_test():void {
    console.log("ID number 33108119851211651X ==> " + thinkutils.RegUtils.isChineseIDCardNumber("33108119851211651X"))
    console.log("ID number 33108119851311651X ==> " + thinkutils.RegUtils.isChineseIDCardNumber("33108119851311651X"))

    console.log("wangxf1985@gmail.com is email ==> " + thinkutils.RegUtils.isEmail("wangxf1985@gmail.com"))
    console.log("wangxf1985@gmail is email ==> " + thinkutils.RegUtils.isEmail("wangxf1985@gmail"))
    console.log("wangxf1985gmail is email ==> " + thinkutils.RegUtils.isEmail("wangxf1985gmail"))


}

function main(): void {

    var obj = new thinkutils.First();
    obj.testFunc();

    console.log(thinkutils.RegUtils.isUrl("12314"));
    console.log(thinkutils.RegUtils.isUrl("http://baidu.com"));
    console.log(thinkutils.RegUtils.isUrl("http://baidu.com?a=1&b=2"));

    base64Test();
    reg_test();
}

main();