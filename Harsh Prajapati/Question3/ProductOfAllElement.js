// - ## Q3. Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// - The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// - You must write an algorithm that runs in O(n) time and without using the division operation.

// - Example 1:

// - Input: nums = [1,2,3,4]
// - Output: [24,12,8,6]

function productSelf(nums) {
    const length = nums.length;
    const answer = new Array(length);
    answer[0] = 1;
    for (let i = 1; i < length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }
    let suffixProduct = 1; 

    for (let i = length - 1; i >= 0; i--) {
        answer[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }
    return answer;
}

const nums = [1, 2, 3, 4];
const output = productSelf(nums);
console.log(output);
