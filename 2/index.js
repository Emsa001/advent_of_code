const fs = require("fs");

const check = (arr) => {
    let t = 0;

    for (let i = 0; i < arr.length; i++) {
        const c = arr[i];
        const n = arr[i + 1];

        if (Math.abs(c - n) > 3) return false;
        if (c == n) return false
        if (c > n) {
            if (t == 2) return false
            t = 1;
        }
        if (c < n) {
            if (t == 1) return false
            t = 2;
        }
    }
    return true;
};


const result = fs.readFileSync("./input.txt", "utf8").split("\n").reduce((a, c) => {
    const arr = c.split(" ").map(Number);

    if (c.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            let newArr = arr.slice();
            newArr.splice(i, 1);
            if (check(newArr)) return ++a;
        }
    }

    return a;
}, 0);

console.log(result);
