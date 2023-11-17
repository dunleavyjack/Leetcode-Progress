class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val hashMap = HashMap<Int, Int>() // {compliment, index}

        for (i in nums.indices) {
            val compliment = target - nums[i]

            if (hashMap.containsKey(compliment)) {
                return intArrayOf(hashMap[compliment]!!, i)
            } else {
                hashMap[nums[i]] = i
            }
        }
        return intArrayOf()
    }
}
