export namespace _utf8 {
    export function getByteLength(str: string): number {
        let result = 0, len = str.length;
        for(var i = 0; i < len; i++) {
            var charcode = str.charCodeAt(i);
            if (charcode < 0x80)
                result += 1;
            else if(charcode < 0x800)
                result += 2;
            else if(charcode < 0xd800 || charcode >= 0xe000)
                result += 3;
            else
                result += 4;
        }
        return result;
    }

    export function getBytes(str: string): number[] {
        var utf8 = [] as number[],
            pos = 0,
            len = str.length;
        for(var i = 0; i < len; i++) {
            var charcode = str.charCodeAt(i);
            if (charcode < 0x80){
                utf8[pos++] = charcode;
            } else if(charcode < 0x800){
                utf8[pos++] = 0xc0 | (charcode >> 6);
                utf8[pos++] = 0x80 | (charcode & 0x3f);
            } else if(charcode < 0xd800 || charcode >= 0xe000) {
                utf8[pos++] = 0xe0 | (charcode >> 12);
                utf8[pos++] = 0x80 | ((charcode>>6) & 0x3f);
                utf8[pos++] = 0x80 | (charcode & 0x3f);
            } else { // surrogate pair
                i++;
                // UTF-16 encodes 0x10000-0x10FFFF by
                // subtracting 0x10000 and splitting the
                // 20 bits of 0x0-0xFFFFF into two halves
                charcode = 0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
                utf8[pos++] = 0xf0 | (charcode >> 18);
                utf8[pos++] = 0x80 | ((charcode >> 12) & 0x3f);
                utf8[pos++] = 0x80 | ((charcode >> 6) & 0x3f);
                utf8[pos++] = 0x80 | (charcode & 0x3f);
            }
        }
        return utf8;
    }

    export function getBytesInto(str: string, destination: ArrayBuffer | DataView, start: number = 0): number {
        let result = destination instanceof DataView? destination: new DataView(destination),
            pos = start,
            len = str.length;
        for(var i = 0; i < len; i++) {
            var charcode = str.charCodeAt(i);
            if (charcode < 0x80){
                result.setUint8(pos++, charcode)
            } else if(charcode < 0x800){
                result.setUint8(pos++, 0xc0 | (charcode >> 6));
                result.setUint8(pos++, 0x80 | (charcode & 0x3f));
            } else if(charcode < 0xd800 || charcode >= 0xe000) {
                result.setUint8(pos++, 0xe0 | (charcode >> 12));
                result.setUint8(pos++, 0x80 | ((charcode >> 6) & 0x3f));
                result.setUint8(pos++, 0x80 | (charcode & 0x3f));
            } else { // surrogate pair
                i++;
                // UTF-16 encodes 0x10000-0x10FFFF by
                // subtracting 0x10000 and splitting the
                // 20 bits of 0x0-0xFFFFF into two halves
                charcode = 0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
                result.setUint8(pos++, 0xf0 | (charcode >> 18));
                result.setUint8(pos++, 0x80 | ((charcode >> 12) & 0x3f));
                result.setUint8(pos++, 0x80 | ((charcode >> 6) & 0x3f));
                result.setUint8(pos++, 0x80 | (charcode & 0x3f));
            }
        }
        return pos - start;
    }

    export function getString(bytes: number[] | Uint8Array, start: number = 0, byteLength: number = -1): string {
        var limit = byteLength < 0? bytes.length: start + byteLength,
            out = "",
            i = start;
        var c1, c2, c3;
        while(i < limit){
            c1 = bytes[i++];
            switch(c1 >> 4){
                case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                    // 0xxxxxxx
                    out += String.fromCharCode(c1);
                    break;
                case 12: case 13:
                    // 110x xxxx   10xx xxxx
                    c2 = bytes[i++];
                    out += String.fromCharCode(((c1 & 0x1F) << 6) | (c2 & 0x3F));
                    break;
                case 14:
                    // 1110 xxxx  10xx xxxx  10xx xxxx
                    c2 = bytes[i++];
                    c3 = bytes[i++];
                    out += String.fromCharCode(((c1 & 0x0F) << 12) |
                        ((c2 & 0x3F) << 6) |
                        ((c3 & 0x3F) << 0));
                    break;
            }
        }
        return out;
    }

    export function getStringFromBuffer(bytes: ArrayBuffer | DataView, start: number = 0, byteLength: number = -1): string {
        let view = bytes instanceof DataView? bytes: new DataView(bytes);
        var limit = byteLength < 0? view.byteLength: start + byteLength,
            out = "",
            i = start;
        var c1, c2, c3;
        while(i < limit){
            c1 = view.getUint8(i++);
            switch(c1 >> 4){
                case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                    // 0xxxxxxx
                    out += String.fromCharCode(c1);
                    break;
                case 12: case 13:
                    // 110x xxxx   10xx xxxx
                    c2 = view.getUint8(i++);
                    out += String.fromCharCode(((c1 & 0x1F) << 6) | (c2 & 0x3F));
                    break;
                case 14:
                    // 1110 xxxx  10xx xxxx  10xx xxxx
                    c2 = view.getUint8(i++);
                    c3 = view.getUint8(i++);
                    out += String.fromCharCode(((c1 & 0x0F) << 12) |
                        ((c2 & 0x3F) << 6) |
                        ((c3 & 0x3F) << 0));
                    break;
            }
        }
        return out;
    }
}