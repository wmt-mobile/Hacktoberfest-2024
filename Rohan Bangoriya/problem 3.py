## Q3. Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].


nums = [1,2,3,4]
def productExceptSelf(nums):
    res = [1] * len(nums)
    prefix = 1
    for i in range(len(nums)):
        res[i] = prefix
        prefix *= nums[i]
    postfix = 1
    for i in range(len(nums) - 1, -1, -1):
        res[i] *= postfix
        postfix *= nums[i]
    return res

print(productExceptSelf(nums))