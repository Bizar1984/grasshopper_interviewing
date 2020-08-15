/*check if the word in an array is a subsequence of the string stringSequence. Turn the string into an object
Each character in the string will become a property, with the indices where they appear stored in an array*/

function MapString(string) {
  let map = {    //variable map stores an empty object
  };

  for (let i = 0; i < string.length; i ++) {  /*iterates over the string. A variable called letter stores the current
    charachter in the string*/
    
    let letter = string[i];
    console.log(letter);
    if (map[letter]) {
      map[letter].push(i);
    } else {
      map[letter] = [
      i
      ];
    }
  };

  return map;
};




/*the if else statement checks if a property with the name of the current letter exists in map.
If the property exists, the index of the current letter will be pushed to the array.  
If it does not the code in the else block will create the property, and set it to store an array containing
the index of the current letter*/

export { MapString }

// by making a map we can just loop through stringSeuqence ONCE, which makes the function faster and more efficient
// alternative would be to loop through the word stringSequence and compare its letters to EACH word in dictionary
// this would be looping over and over again