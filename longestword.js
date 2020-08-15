export function LongestWord(array) {
	let longestWord = " ";
	for(let word of array) {
		if (word.length > longestWord.length) {
			longestWord = word;
		}
	}
	return longestWord;
};






