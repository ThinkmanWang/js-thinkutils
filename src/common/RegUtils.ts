
export namespace _RegUtils {
    export function isUrl(szValue: string): boolean {
        const re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/

        return re.test(szValue)
    }

    const isValidDate = (year: number, month: number, day: number): boolean => {
        const date = new Date(year, month - 1, day)
        return (
            date.getFullYear() === year
            && date.getMonth() + 1 === month
            && date.getDate() === day
            && date.getTime() < new Date().getTime()
        )
    }
    
    export function isChineseIDCardNumber(szValue: string): boolean{
        const testRegExp = /^[1-9]([0-9]{14}|[0-9]{16}[0-9Xx])$/
        const areaMap = [11, 12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53, 54, 61, 62, 63, 64, 65, 71, 81, 82]
        const weightMap = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        const codeMap = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']

        const len = szValue.length

        // 长度错误
        if (len !== 15 && len !== 18) {
            return false
        }

        // 模式校验
        if (!testRegExp.test(szValue)) {
            return false
        }

        // 地区校验
        if (areaMap.indexOf(+szValue.substr(0, 2)) === -1) {
            return false
        }

        // 15 位
        if (len === 15) {
            return isValidDate(+`19${szValue.substr(6, 2)}`, +szValue.substr(8, 2), +szValue.substr(10, 2))
        }

        // 18 位
        if (!isValidDate(+szValue.substr(6, 4), +szValue.substr(10, 2), +szValue.substr(12, 2))) {
            return false
        }

        // 校验码
        const sum = szValue.split('').slice(0, 17).reduce((s, num, index) => {
            return (s += +num * weightMap[index])
        }, 0)

        return codeMap[sum % 11] === szValue[17].toUpperCase()
    }

    export function isEmail(szValue: string): boolean {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return re.test(szValue)
    }
}
