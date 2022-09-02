"use strict";
class Add {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    Display() {
        console.log(this.x);
        console.log(this.y);
        console.log(`Sum: ${this.x + this.y}`);
    }
    ;
}
;
let add = new Add(2, 3);
add.Display();
//# sourceMappingURL=sample.js.map