"use strict";
const test = (txt = "Saco") => {
    console.log(test);
};
const fsoma = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
let numer = [10, 20, 30, 40];
console.log(fsoma(numer));
test("Andre Matos");
test("Samp");
test("bosta");
