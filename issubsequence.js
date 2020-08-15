import { FindNextIndex } from './findnextindex.js';

// how could you check if the letters in a string exist as properties of an object?
export function IsSubSequence(word, map) {
	let minIndex = 0;

	for(var letter of word) {
		if(map[letter]) {
		  minIndex = FindNextIndex(map[letter], // minIndex is updated to have the value of what is returned from FindNextIndex
			minIndex);
			if (minIndex === false) {
				return false;
			}
		}
		else {
			return false;
		}
	}
	return true;
};
