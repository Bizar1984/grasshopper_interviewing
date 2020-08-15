export function FindNextIndex(array, minIndex) {
	for(var element of array) {
		if(element >= minIndex) {
			return element + 1
		}
	}
	return false;
};


