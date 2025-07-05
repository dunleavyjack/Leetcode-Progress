package solution

func findLucky(arr []int) int {
	freqMap := make(map[int]int)

	for _, num := range arr {
		freqMap[num] = freqMap[num] + 1
	}

	largestLuckyInt := -1
	for num, freq := range freqMap {
		if num == freq {
			if num > largestLuckyInt {
				largestLuckyInt = num
			}
		}
	}

	return largestLuckyInt
}
