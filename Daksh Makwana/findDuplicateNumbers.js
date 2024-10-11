const findDuplicateNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;

        if (nums[index] < 0) {
            return Math.abs(nums[i]);
        }

        nums[index] = -nums[index];
    }

    return -1;
};

let nums = [1, 3, 4, 2, 2];
console.log(findDuplicateNumbers(nums));