const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8").split("\n");

const width = input[0].length;
const height = input.length;

function firstPart(){
    let res = 0;
    
    const dirs = [
        { i: 0, j: 1 },
        { i: 0, j: -1 },
        { i: 1, j: 0 },
        { i: -1, j: 0 },
        { i: 1, j: 1 },
        { i: 1, j: -1 },
        { i: -1, j: 1 },
        { i: -1, j: -1 },
    ];
    
    const isXmas = (i, j, dir) => {
        try{
            for(let k = 0; k < 3; k++){
                if(input[i + (dir.i * (k + 1))][j + (dir.j * (k + 1))] != "MAS"[k])
                    return;
            }
            res++;
        }catch(e){
            return ;
        }
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (input[i][j] == "X") {
                dirs.map((e) => {                    
                    isXmas(i, j, e);
                });
            }
        }
    }

    console.log("First: ", res);
};


function secondPart(){
    let res = 0;

    const isXmas = (i, j) => {
        try{
            const tl = input[i][j];
            const tr = input[i][j + 2];
            const bl = input[i + 2][j];
            const br = input[i + 2][j + 2];
            const m = input[i + 1][j + 1];

            const positions = [tl, tr, bl, br, m];
            const countM = positions.filter(pos => pos === 'M').length;
            const countS = positions.filter(pos => pos === 'S').length;
                        
            if(countM === 2 && countS === 2 && m == 'A' && tr != bl)
                res++;
        }catch(e){}
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            isXmas(i ,j);
        }
    }

    console.log("Second: ", res);
}


firstPart();
secondPart();
