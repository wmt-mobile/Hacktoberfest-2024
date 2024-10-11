// - ## Q4. Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// - There is only one repeated number in nums, return this repeated number.

// - You must solve the problem without modifying the array nums and using only constant extra space.

// - Example 1:
// - Input: nums = [1,3,4,2,2]
// - Output: 2

function findDuplicate(nums) { 
    let tortoise = nums[0];
    let hare = nums[0];
 
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise !== hare);
 
    tortoise = nums[0];
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }
 
    return hare;
}

console.log(findDuplicate([1,3,4,2,2,]));

