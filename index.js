function isPalindrome(word) {
  // Write your algorithm here
  //let word = "" //this step is skipped since we're writing this in the function scope 
  let splitWordArray = word.split("");
  let reversedWordArray = splitWordArray.reverse();
  let joinedReversedWord = reversedWordArray.join("")
  return word.toLowerCase() === joinedReversedWord.toLowerCase()
}

/* 
  Add your pseudocode here
  the first step can be skipped if we're decalaring the variables in the function scope
  declare a variable for step 1 called word which is a string
  declare a variable for step 2 called splitWordArray which is an array
  declare a variable for step 3 called reversedWordArray which is a reversed array
  declare a variable for step 4 called joinedReversedWord which is a string
  return a boolean like in step 5

*/

/*
  Add written explanation of your solution here
  we start by declaring our variables and then we can call a function that uses them
  We can declare the variables either in the global or function scope depending on the purpose of the code
  if we're declaring in the function scope we can skip step 1 both here and in the pseudocode
  step 1. we declare the word variable to be a string. this can be an empty string if we want to use the values in the test
  step 2. we can use the split() method on the string to make an array using the letters as the elements
  step 3. we can use the reverse() method for arrays to allow us to reverse the order of the elements
  alternatively we can use the toReversed() method to return a reversed array along with a copy of the original array
  step 4. we can then join the array of reversed letters to return it to being a string
  step 5. we can then return a boolean value on the basis of the strict equality operator
  since the solution is case insensitive we can use the toLowerCase() method so that the words can be checked regardless of case 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
