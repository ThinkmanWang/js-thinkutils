import {thinkutils} from "../../src/thinkutils";

function base64Test(): void {
    console.log(thinkutils.base64.encode("1234567890"));
    console.log(thinkutils.base64.decode("MTIzNDU2Nzg5MA=="));
}

function reg_test():void {
    console.log(thinkutils.RegUtils.isUrl("12314"));
    console.log(thinkutils.RegUtils.isUrl("http://baidu.com"));
    console.log(thinkutils.RegUtils.isUrl("http://baidu.com?a=1&b=2"));

    console.log("ID number 33108119851211651X ==> " + thinkutils.RegUtils.isChineseIDCardNumber("33108119851211651X"))
    console.log("ID number 33108119851311651X ==> " + thinkutils.RegUtils.isChineseIDCardNumber("33108119851311651X"))

    console.log("wangxf1985@gmail.com is email ==> " + thinkutils.RegUtils.isEmail("wangxf1985@gmail.com"))
    console.log("wangxf1985@gmail is email ==> " + thinkutils.RegUtils.isEmail("wangxf1985@gmail"))
    console.log("wangxf1985gmail is email ==> " + thinkutils.RegUtils.isEmail("wangxf1985gmail"))
}

function string_test(): void {
    console.log("test is string ==> " + thinkutils.CommonUtils.isEmpty("  "))
    console.log("test is string ==> " + thinkutils.CommonUtils.isEmpty(" 1 "))

    console.log("Upper First for \"thinkman\" ==> " + thinkutils.StringUtils.upperCaseFirst("thinkman"))
}

function number_test(): void {
    console.log("123 is Number ==> " + thinkutils.CommonUtils.isNumber(123))
    console.log("123a is Number ==> " + thinkutils.CommonUtils.isNumber("123a"))
    console.log("\"123\" is Number ==> " + thinkutils.CommonUtils.isNumber("123"))
    console.log("123.1 is Number ==> " + thinkutils.CommonUtils.isNumber(123.01))

    console.log("123 is Numeric ==> " + thinkutils.CommonUtils.isNumeric(123))
    console.log("123a is Numeric ==> " + thinkutils.CommonUtils.isNumeric("123a"))
    console.log("\"123\" is Numeric ==> " + thinkutils.CommonUtils.isNumeric("123"))
    console.log("123.1 is Numeric ==> " + thinkutils.CommonUtils.isNumeric(123.01))

}

function utf8_test(): void {
    console.log(thinkutils.utf8.getBytes("你好"))
}

function date_test(): void {
    console.log(thinkutils.DateUtils.diffDate(-1));
    console.log(thinkutils.DateUtils.today());
    console.log(thinkutils.DateUtils.diffDate(1));
}

function main(): void {
    console.log(thinkutils.CommonUtils.uuid());
    var obj = new thinkutils.First();
    obj.testFunc();

    base64Test();
    reg_test();
    string_test();
    number_test();
    utf8_test();
    date_test();
}

main();