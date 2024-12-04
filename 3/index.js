const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8");

const a_mul = Array.from(input.matchAll(/mul\([0-9]{1,3},[0-9]{1,3}\)/g));
const a_do = Array.from(input.matchAll(/do\(\)/g));
const a_dont = Array.from(input.matchAll(/don't\(\)/g));

function firstPart(){

}

function secondPart(){
    const matches = [...a_mul, ...a_do, ...a_dont].sort((a,b) => a.index - b.index);

    let can_do = true;

    const result = matches.reduce((a,c) => {
        if(c[0] == "don't()")
            can_do = false;
        else if(c[0] == "do()")
            can_do = true;
        else if(can_do){
            const x = c[0].replace("mul","").replace("(","").replace(")","").split(",").map(Number);
            return a += x[0] * x[1];
        }
        return a += 0;
    },0);

    console.log(result);
}