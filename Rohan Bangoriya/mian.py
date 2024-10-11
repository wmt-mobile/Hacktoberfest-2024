## Q1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

nums = [2,7,11,15]
target = 9

def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]

print(twoSum(nums, target))


## Q2. Given a string s, find the length of the longest substring without repeating characters.