/// <reference path="../thinkutils.ts" />

    export namespace _RegUtils {
        export function isUrl(szValue: string):boolean {
            const re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/

            return re.test(szValue)
        }
    }
