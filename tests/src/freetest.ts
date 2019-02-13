import {thinkutils} from "../../src/thinkutils";

function base64Test(): void {
    console.log(thinkutils.base64.encode("1234567890"));
}

function main(): void {

    var obj = new thinkutils.First();
    obj.testFunc();

    console.log(thinkutils.RegUtils.isUrl("12314"));
    console.log(thinkutils.RegUtils.isUrl("http://baidu.com"));
    console.log(thinkutils.RegUtils.isUrl("http://baidu.com?a=1&b=2"));

    base64Test();
}

main();