function reverse(word){
  return word.split("").reverse().join("")
}
function isPalindrome(word) {
  // Write your algorithm here
  reversedWord = reverse(word)
  return word === reversedWord
}

/* 
  Add your pseudocode here
  reverse the input string

  if the reversed string is the same as the input
   returns true
  else
    return false
*/

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

  console.log("")

  console.log("Expecting: true")
  console.log("=>", isPalindrome("mom"));

  console.log("")

  console.log("Expecting: false")
  console.log("=>", isPalindrome("hi"))


}

module.exports = isPalindrome;
