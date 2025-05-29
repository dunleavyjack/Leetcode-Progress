package solutions

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)

	for currIndex, num := range nums {
		compliment := target - num

		if complimentIndex, ok := m[compliment]; ok {
			return []int{currIndex, complimentIndex}
		} else {
			m[num] = currIndex
		}
	}

	return []int{-1, -1}
}
