class KthFactorOfNSolution {
    fun kthFactor(n: Int, k: Int): Int {
        var currFactor = 1
        var kthFactor = k

        while (currFactor <= n) {
            if (n % currFactor == 0) kthFactor--
            if (kthFactor == 0) return currFactor
            currFactor++
        }
        return -1
    }
}
