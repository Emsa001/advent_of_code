const fs = require("fs");

const times = (arr, val) => {
    return arr.filter((e) => e == val).length;
}

const data = fs.readFileSync("./input.txt", "utf-8").split("\n");

const a = [];
const b = [];

data.forEach((e) => {
    const t = e.split("   ");

    a.push(parseInt(t[0]));
    b.push(parseInt(t[1]));
})

a.sort((a,b) => a - b);
b.sort((a,b) => a - b);

const result1 = a.reduce((a, c, i) => a + Math.abs(c - b[i]), 0);
const result2 = a.reduce((a, c, i) => a + c * times(b, c), 0);

console.log(result1, result2);
