export namespace _DateUtils {
    export function formatDate(time: any): string {
        // 格式化日期，获取今天的日期
        const Dates = new Date(time);
        const year: number = Dates.getFullYear();
        const month: any = ( Dates.getMonth() + 1 ) < 10 ? '0' + ( Dates.getMonth() + 1 ) : ( Dates.getMonth() + 1 );
        const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
        return year + '-' + month + '-' + day;
    }

    export function today(): string {
        return formatDate(new Date().getTime());
    }

    export function diffDate(nVal: number): string {
        return formatDate(new Date().getTime() + (nVal * 1000 * 3600 * 24));
    }

    export function now(): string {
        const date = new Date();
        let month: string | number = date.getMonth() + 1;
        let strDate: string | number = date.getDate();

        if (month <= 9) {
            month = "0" + month;
        }

        if (strDate <= 9) {
            strDate = "0" + strDate;
        }

        var nHour = date.getHours();
        var szHour = "";
        if (nHour < 10) {
            szHour = "0" + nHour;
        } else {
            szHour = "" + nHour
        }

        var nMinutes = date.getMinutes();
        var szMinutes = "";
        if (nMinutes < 10) {
            szMinutes = "0" + nMinutes;
        } else {
            szMinutes = "" + nMinutes;
        }

        var nSeconds = date.getSeconds();
        var szSeconds = "";
        if (nSeconds < 10) {
            szSeconds = "0" + nSeconds;
        } else {
            szSeconds = "" + nSeconds;
        }

        return date.getFullYear() + "-" + month + "-" + strDate + " "
            + szHour + ":" + szMinutes + ":" + szSeconds;
    }

    export function timestamp():number {
        return Math.floor(new Date().getTime() / 1000);
    }

    export function timestamp_ms():number {
        return new Date().getTime();
    }
}