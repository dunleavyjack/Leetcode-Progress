class Solution {
    fun checkIfExist(arr: IntArray): Boolean {
        val set: MutableSet<Int> = mutableSetOf()

        for (num in arr) {
            if (set.contains(num * 2) || (num % 2 == 0 && set.contains(num / 2))) {
                return true
            } else {
                set.add(num)
            }
        }

        return false
    }
}