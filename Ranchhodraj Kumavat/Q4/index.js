function findDuplicate(nums) {
    // Phase 1: Finding the intersection point in the cycle
    let tortoise = nums[0];
    let hare = nums[0];

    do {
        tortoise = nums[tortoise]; // Move tortoise by 1 step
        hare = nums[nums[hare]];    // Move hare by 2 steps
    } while (tortoise !== hare);

    // Phase 2: Finding the entrance to the cycle
    tortoise = nums[0]; // Reset tortoise to the start
    while (tortoise !== hare) {
        tortoise = nums[tortoise]; // Move tortoise by 1 step
        hare = nums[hare];          // Move hare by 1 step
    }

    return hare; // or return tortoise; both are equal here
}

// Example usage
let nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums)); // Output: 2
