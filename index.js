function isPalindrome(word) {
  const lowerCaseWord=word.toLowerCase();
  //reversed form of the word
  const reversedWord=lowerCaseWord.split('').reverse().join('');
  
  return lowerCaseWord===reversedWord;

  
}
isPalindrome('abba')
isPalindrome('racecar')
isPalindrome('a')
isPalindrome('robot')
isPalindrome('ab')

/* 
  Convert the string to lowerCase
  Check if the reversed form and the original are the same.
  if the two match return true and if they don't return false


*/

/*
  isPalindrome function checks if a given word is a palindrome.

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
