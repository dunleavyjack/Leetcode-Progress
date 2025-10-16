package solutions

func containsDuplicate(nums []int) bool {
	uniqueNums := make(map[int]bool)

	for _, num := range nums {
		if _, ok := uniqueNums[num]; ok {
			return true
		}

		uniqueNums[num] = true
	}

	return false
}
