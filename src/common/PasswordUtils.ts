export namespace _PasswordUtils {
    export function random_password(nLenth: number): string {
        if (nLenth < 1) {
            nLenth = 8
        }

        var str = Math.random().toString(36).substring(2);
        while(str.length < nLenth){
            str = str + Math.random().toString(36).substring(2)
        }

        return str.substring(0, nLenth);
    }
}