package solutions

func possibleStringCount(word string) int {
	// Start count at one, since we are guaranteed that one "word" exists
	count := 1

	// Iterate through each character, looking for adjacent duplicates
	for i := 1; i < len(word); i++ {
		curr := word[i]
		prev := word[i-1]

		if curr == prev {
			count++
		}
	}

	return count
}
