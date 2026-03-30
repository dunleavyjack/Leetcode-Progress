from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        products = []

        prefix = 1
        for num in nums:
            products.append(prefix)
            prefix *= num

        postfix = 1
        for i in range(len(nums) - 1, -1, -1):
            products[i] *= postfix
            postfix *= nums[i]

        return products
