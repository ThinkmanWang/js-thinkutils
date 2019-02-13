export namespace _StringUtils {

    export function upperCaseFirst(str: string): string {
        const cache: { [key: string]: string } = Object.create(null)

        if (!str || typeof str !== 'string') {
            return str
        }
        /* istanbul ignore else */
        if (!(str in cache)) {
            cache[str] = str.charAt(0).toUpperCase() + str.slice(1)
        }
        return cache[str]
    }
}