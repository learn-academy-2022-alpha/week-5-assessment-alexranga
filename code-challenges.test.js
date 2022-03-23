// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
// const secretCodeWord2 = "Gobbledygook"
// const secretCodeWord3 = "Eccentric"



describe("revealCode", () => {
  it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
      const secretCodeWord1 = "Lackadaisical"
      // Expected output: "L4ck4d41s1c4l"
      const secretCodeWord2 = "Gobbledygook"
      // Expected output: "G0bbl3dyg00k"
      const secretCodeWord3 = "Eccentric"
      // Expected output: "3cc3ntr1c"
    expect(revealCode(secretCodeWord1)).toEqual(("L4ck4d41s1c4l"))
    expect(revealCode(secretCodeWord2)).toEqual(("G0bbl3dyg00k"))
    expect(revealCode(secretCodeWord3)).toEqual(("3cc3ntr1c"))
  })
})



// Good Failure

// ● revealCode › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//     ReferenceError: revealCode is not defined




// b) Create the function that makes the test pass.


// PSEUDO CODE

//create a function called "revealCode".
//must take in a string as a parameter named "string"
//declare a new variable named "Code" and use .split() which would turn the string into an array and .map() to iterate through the array to return the same amount of values. 
//convert letters of "a" into 4, "e" into 3, "i" into 1, and "o" into 0 by using conditional statement(s)
//return the new declared variable "Code" 





const revealCode = (string) => {
  let code = string.split("").map(value => {
    if (value.toLowerCase() === 'a') {
      return "4" 
    } else if (value.toLowerCase() === 'e') {
      return "3"
    } else if (value.toLowerCase() === 'i') {
      return "1" 
    } else if (value.toLowerCase() === 'o') {
      return "0"
    } else {
      return value
    }
  })
  return code.join("")
}

// Test passed
// PASS  ./code-challenges.test.js
// revealCode
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (3 ms)



// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


describe("inputProcessor", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(inputProcessor(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(inputProcessor(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})



// Good Failure
// ● inputProcessor › takes in an array of words and a single letter and returns all the words that contain that particular letter

// ReferenceError: inputProcessor is not defined


// b) Create the function that makes the test pass.

// PSEUDO CODE

// Create a function named "inputProcessor" that takes in two parameters (array, string)
// Use an array filter that iterates through the array of strings
// Operate on each value with the .includes method toonly include the word(s) that contain the particular letter
// Store the remaining words that include the letter on a new array of strings
// Return the new array




const inputProcessor = (array, string) => {
  var newArr = array.filter(value => value.toLowerCase().includes(string))
  return newArr
  }

// Test Passed

// PASS  ./code-challenges.test.js
// inputProcessor
//   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter (1 ms)


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false


describe("fullHouseOrNot", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    expect(fullHouseOrNot(hand1)).toEqual(true)
    expect(fullHouseOrNot(hand2)).toEqual(false)
    expect(fullHouseOrNot(hand3)).toEqual(false)
  })
})



// Good Failure
//  ● fullHouseOrNot › takes in an array of 5 numbers and determines whether or not the array is a full house

// ReferenceError: fullHouseOrNot is not defined




// b) Create the function that makes the test pass.



// PSEUDOCODE
// Create a function "fullHouseOrNot" that takes in an array as a parameter
// Sort the array numerically using .sort method
// Create a conditional statement if/else to check 2 different scenarios wherein "if index 0 is the same as index 2 AND index 3 is the same as index 4 OR if index 0 is the same as index 1 AND index 2 is the same as index 4 then the statement is true"
// Use a bang operator on the if/else statement to keep a "5 of a kind" from working
// Else at the end of the statement will then output "false" for everything else




const fullHouseOrNot = (array) => {
  array.sort((a,b)=>a-b)
  if (array[0] === array[2] && array[3] === array[4] && array[0] !== array[4]) {
    return true
  } else if (array[0] === array[1] && array[2] === array[4] && array[0] !== array[4]) {
    return true
  } else {
    return false
  }
}

// Test passed

// PASS  ./code-challenges.test.js
// fullHouseOrNot
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a full house (1 ms)
