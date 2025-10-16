package solutions

func intersection(nums1 []int, nums2 []int) []int {
	set1 := make(map[int]bool)
	set2 := make(map[int]bool)

	var result []int

	for _, value := range nums1 {
		set1[value] = true
	}

	for _, value := range nums2 {
		set2[value] = true
	}

	for key, _ := range set1 {
		_, exists := set2[key]
		if exists {
			result = append(result, key)
		}
	}

	return result
}
