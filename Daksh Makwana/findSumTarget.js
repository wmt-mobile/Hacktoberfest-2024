// Find sum of targeted value

let nums = [2,7,11,15]
let target = 9

const findTargetSum = function (nums,target){
    let n = nums.length;
    for (let i = 0; i < n; i++){
        for (let j = i+1; j < n; j++){
            if (nums[i] + nums[j] === target){
                return [i , j];
            }
        }
    }
    return false;
}

console.log(findTargetSum(nums,target))