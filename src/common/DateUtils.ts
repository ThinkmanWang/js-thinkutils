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
        return "";
    }
}