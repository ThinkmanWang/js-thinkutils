"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _RegUtils;
(function (_RegUtils) {
    function isUrl(szValue) {
        var re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/;
        return re.test(szValue);
    }
    _RegUtils.isUrl = isUrl;
})(_RegUtils = exports._RegUtils || (exports._RegUtils = {}));
//# sourceMappingURL=RegUtils.js.map