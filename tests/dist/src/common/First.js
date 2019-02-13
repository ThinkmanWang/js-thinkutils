"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _First = (function () {
    function _First() {
        this.name = "Hello World";
        console.log("constructor ==>> " + this.name);
    }
    _First.prototype.testFunc = function () {
        console.log("testFunc ==>> " + this.name);
    };
    return _First;
}());
exports._First = _First;
function helloWorld() {
    var t = new _First();
    t.testFunc();
}
//# sourceMappingURL=First.js.map