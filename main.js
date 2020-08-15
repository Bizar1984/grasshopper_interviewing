import { dictionary } from './dictionary.js';
import { LongestWord } from './longestword.js';
import { MapString } from './mapString.js';
import { stringSequence } from './stringsequence.js';
import { FindNextIndex } from './findnextindex.js';
import { IsSubSequence } from './issubsequence.js';

// putting all the pieces together
function LongestMatch(string, dictionary) {
	let listOfSubsequences = [];
	let mappedString = MapString(stringSequence);

	for (let word of dictionary) {
		if (IsSubSequence(word, mappedString)) {
			listOfSubsequences.push(word)
		}
	}
	return LongestWord(listOfSubsequences);
};

console.log(dictionary);
console.log(LongestMatch(stringSequence, dictionary));













