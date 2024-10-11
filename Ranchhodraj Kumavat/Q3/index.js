function productExceptSelf(nums) {
    let n = nums.length;
    let answer = new Array(n).fill(1);

    // Left pass: calculate the product of all elements to the left of each index
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Right pass: calculate the product of all elements to the right of each index
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
}

// Example usage
let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]
