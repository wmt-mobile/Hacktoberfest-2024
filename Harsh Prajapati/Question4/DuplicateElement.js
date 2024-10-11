// - ## Q4. Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// - There is only one repeated number in nums, return this repeated number.

// - You must solve the problem without modifying the array nums and using only constant extra space.

// - Example 1:
// - Input: nums = [1,3,4,2,2]
// - Output: 2

function findDuplicate(nums) {
    const temp = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (temp.has(nums[i])) {
            return nums[i];
        }
        temp.add(nums[i]);
    }
    return -1;
}

const nums = [1, 3, 4, 2, 2, 2,3, 3];
const output = findDuplicate(nums);
console.log(output);
