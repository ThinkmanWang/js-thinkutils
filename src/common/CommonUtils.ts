
export namespace _CommonUtils {

    export function isPlainObject(value: any): value is object {
        if (!value || typeof value !== 'object') {
            return false
        }
        const proto = Object.getPrototypeOf(value)
        if (proto === null) {
            return true
        }
        const Ctor = proto.constructor
        return typeof Ctor === 'function' && Ctor instanceof Ctor
    }

    function isString(str: any) {
        return (typeof str=='string')&&str.constructor==String;
    }

    /**
     * 检查 `value` 是否是空值，包括：`undefined`、`null`、`''`、`false`、`true`、`[]`、`{}`。
     *
     * @param value 要检查的值
     * @returns 是（true）或否（false）
     */
    export function isEmpty(value: any): boolean {
        return [undefined, null, '', false, true].some(item => item === value)
            || (Array.isArray(value) && value.length === 0)
            || (isString(value) && '' == value.trim())
            || (isPlainObject(value) && (() => {
                for (const _ in value) {
                    return false
                }
                return true
            })())
    }

    export function isNumeric(value: any): value is number | string {
        return value != null && !isNaN(value - parseFloat(value))
    }

    export function isNumber(value: any): value is number {
        return typeof value === 'number'
    }

    export function isNull(value: any): boolean {
        return value === null
    }

    export function isUndefined(value: any): boolean {
        return typeof value === "undefined"
    }

    export function isMissing(value: any): boolean {
        return isNull(value) || isUndefined(value)
    }

    export function isPresent(value: any): boolean {
        return !isMissing(value)
    }

    export function isArray(value: any):boolean {
        return isPresent(value) && Array.isArray(value)
    }

    export function isBoolean(value: any): boolean {
        return isPresent(value) && typeof value === "boolean"
    }

    export function uuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}