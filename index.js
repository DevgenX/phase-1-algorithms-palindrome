function isPalindrome(word) {
  // Write your algorithm here

  // convert the word into an array using .split
  // reverse the array then save it into variable
  // convert the array into a string again using .join

  let splittedWord = word.split("");
  splittedWord = splittedWord.reverse();
  let newWord = splittedWord.join("");

  if (newWord.toLowerCase() === word.toLowerCase()) return true;

  return false;
}

/*
  Add written explanation of your solution here
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
