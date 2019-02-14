export namespace _PasswordUtils {
    export function random_password(nLenth: number): string {
        if (nLenth < 1) {
            nLenth = 8
        }

        var seed = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'
            , 'a','b','c','d','e','f','g','h','i','j','k','m','n','p','Q','r','s','t','u','v','w','x','y','z'
            , '0', '1', '2','3','4','5','6','7','8','9'
        );//数组
        var seedlength = seed.length;//数组长度
        var createPassword = '';
        for (var i=0;i < nLenth; i++) {
            var j = Math.floor(Math.random() * seedlength);
            createPassword += seed[j];
        }
        return createPassword;
    }
}