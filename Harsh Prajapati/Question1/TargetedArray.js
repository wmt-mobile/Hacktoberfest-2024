// - Example 1:
// - Input: nums = [2,7,11,15], target = 9
// - Output: [0,1]
// - Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const tempArr = []

function targetValue(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const numMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const TargetedArray = target - nums[i];
            if (numMap.has(TargetedArray)) {
                console.log([numMap.get(TargetedArray), i]);
                return [numMap.get(TargetedArray), i];
            }
            numMap.set(nums[i], i);
        }
        return []; 
    }
}

const nums = [2, 7, 11, 15]
const target = 9

targetValue(nums, target)