const fs = require("fs");

// 

const input = fs.readFileSync("input.txt", "utf8");

const data = input.split("\n");
const breakPoint = data.indexOf("");

const rules = data.slice(0, breakPoint).map((rule) => {
    const [key, value] = rule.split("|");
    return { key: Number(key), value: Number(value) };
});
const numbers = data.slice(breakPoint + 1);

//

function firstPart(){
    let res = 0;

    const checkOrder = (nums) => {
        for(let i = nums.length - 1; i >= 0; i--){
            const numRules = rules.filter((e) => e.key === nums[i]);
            
            for(let j = i - 1; j >= 0; j--){
                for (const rule of numRules) {
                    if (nums[j] == rule.value)
                        return ;
                }
            }
        }
        
        res += nums[(nums.length - 1) / 2];  
    }

    numbers.map((e) => {
        const nums = e.split(',').map(Number);
        checkOrder(nums);
    });

    console.log("First Part:", res);
}

function secondPart(){
    let res = 0;

    const swap = (arr, a, b) => {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    const checkOrder = (nums, wasWrong) => {
        for(let i = nums.length - 1; i >= 0; i--){
            const numRules = rules.filter((e) => e.key === nums[i]);
            for(let j = i - 1; j >= 0; j--){
                for (const rule of numRules) {
                    if (nums[j] == rule.value){
                        wasWrong = true;
                        swap(nums, i, j);
                        return checkOrder(nums, wasWrong);
                    }
                }
            }
        }

        if(wasWrong)
            res += nums[(nums.length - 1) / 2];
    }
    
    numbers.map((e) => {
        const nums = e.split(',').map(Number);
        checkOrder(nums, false);
    });
    
    console.log("Second Part:", res);
}


firstPart();
secondPart();