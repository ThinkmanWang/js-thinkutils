"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var thinkutils_1 = require("../../src/thinkutils");
function main() {
    var obj = new thinkutils_1.thinkutils.First();
    obj.testFunc();
    console.log(thinkutils_1.thinkutils.RegUtils.isUrl("12314"));
    console.log(thinkutils_1.thinkutils.RegUtils.isUrl("http://baidu.com"));
    console.log(thinkutils_1.thinkutils.RegUtils.isUrl("http://baidu.com?a=1&b=2"));
}
main();
//# sourceMappingURL=freetest.js.map