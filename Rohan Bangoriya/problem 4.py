## ## Q4. Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

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