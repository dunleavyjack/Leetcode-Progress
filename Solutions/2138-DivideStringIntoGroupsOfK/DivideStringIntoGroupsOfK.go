package solutions

func divideString(s string, k int, fill byte) []string {
	var result []string

	for i := 0; i < len(s); i++ {
		group := ""

		for j := i; j < i+k; j++ {
			if j < len(s) {
				group += string(s[j])
			} else {
				group += string(fill)
			}
		}

		result = append(result, group)
		i += k - 1
	}

	return result
}
