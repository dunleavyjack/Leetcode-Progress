from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

        triplets = []

        for i in range(len(nums)):
            l, r = i + 1, len(nums) - 1

            if i > 0 and nums[i - 1] == nums[i]:
                continue

            while(l < r):
                sum = nums[i] + nums[l] + nums[r]
                if sum == 0:
                    triplets.append([nums[i], nums[l], nums[r]])

                    while l < r and nums[l] == nums[l + 1]:
                        l += 1

                    while r > l and nums[r] == nums[r - 1]:
                        r -=1
                    
                    l += 1
                    r -= 1
                elif sum < 0:
                    l += 1
                else:
                    r -= 1

        return triplets
