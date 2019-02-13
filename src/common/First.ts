/// <reference path="../thinkutils.ts" />

export class _First {
    private name:string = "Hello World";

    public constructor() {
        console.log("constructor ==>> " + this.name);
    }

    public testFunc(): void {
        console.log("testFunc ==>> " + this.name);
    }
}

function helloWorld(): void {
    var t = new _First();
    t.testFunc()
}


// export {thinkutils}
// export {thinkutils}
