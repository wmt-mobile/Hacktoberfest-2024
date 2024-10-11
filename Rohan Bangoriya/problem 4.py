## Q3. Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

# - There is only one repeated number in nums, return this repeated number.

# - You must solve the problem without modifying the array nums and using only constant extra space.


nums = [1,3,4,2,2]

def productExceptSelf(nums):
    repeated_num = None
    for num in nums:
        if nums.count(num) > 1:
            repeated_num = num
            break
    return repeated_num

print(productExceptSelf(nums))