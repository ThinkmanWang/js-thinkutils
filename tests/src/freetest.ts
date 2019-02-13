import {thinkutils} from "../../src/thinkutils";

function main(): void {

    var obj = new thinkutils.First();
    obj.testFunc();

    console.log(thinkutils.RegUtils.isUrl("12314"))
    console.log(thinkutils.RegUtils.isUrl("http://baidu.com"))
    console.log(thinkutils.RegUtils.isUrl("http://baidu.com?a=1&b=2"))

}

main();