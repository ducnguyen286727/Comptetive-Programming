// Create a function to concatenate two integer arrays.

// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞[4, 5, 1, 3, 3, 3, 3, 3]

function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

// Create a function that returns true if a string contains any spaces.

// Examples
// hasSpaces("hello") ➞ false

// hasSpaces("hello, world") ➞ true

// hasSpaces(" ") ➞ true

// hasSpaces("") ➞ false

// hasSpaces(",./!@#") ➞ false

function hasSpaces(str) {
  return str.indexOf(" ") >= 0 ? true : false;
}

// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

// Examples
// isEvenOrOdd(3) ➞ "odd"

// isEvenOrOdd(146) ➞ "even"

// isEvenOrOdd(19) ➞ "odd"

function oddEven(num) {
  return num % 2 === 0 ? "even" : "odd";
}

// Write a function to check if an array contains a particular number.

// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true

// check([1, 1, 2, 1, 1], 3) ➞ false

// check([5, 5, 5, 6], 5) ➞ true

// check([], 5) ➞ false

function check(arr, el) {
  return arr.indexOf(el) !== -1;
}

// Create a function that converts a date formatted as MM/DD/YYYY to a format required as YYYYDDMM. The parameter userDate and the return value are strings.

// Examples
// formatDate("11/12/2019") ➞ "20191211"

// formatDate("12/31/2019") ➞ "20193112"

function formatDate(userDate) {
  return userDate
    .split("/")
    .reverse()
    .join("");
}

// Function to return exponential value

function calculateExponent(num, exp) {
  // return Math.pow(num, exp)
  return num ** exp;
}

// Create a function that takes an array and a string as arguments and return the index of the string.

// Examples
// find_index(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// find_index(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// find_index(["a", "g", "y", "d"], "d") ➞ 3

// find_index(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

function find_index(arr, str) {
  return arr.indexOf(str);
}

// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

function profitableGamble(prob, prize, pay) {
  return prob * prize > pay;
}

// Tom is a very methodic guy that loves geometry and pizza: he loves them so much that, before eating a pizza, he calculates its radius and its height. Now, he wants to know from you the total volume of pizza that he swallowed!

// You are given the two parameters that Tom measured:

// radius
// height
// He tells you that if you multiply the height for the square of the radius and multiply the result for the mathematical constant π (Pi), you will obtain the total volume of the pizza. Implement a function that returns the volume of the pizza as a whole number, rounding it to the nearest integer (and rounding up for numbers with .5 as decimal part).

function volPizza(radius, height) {
  return Math.round(radius * radius * 3.14159 * height);
}

// Write a function that returns true if k^k == n for input (n, k).

// Examples
// kToK(4, 2) ➞ true

// kToK(387420489, 9) ➞ true
// // 9^9 == 387420489

// kToK(3124, 5) ➞ false

// kToK(17, 3) ➞ false

function kToK(n, k) {
  return k ** k === n;
}

// Write a function that validates whether two strings are identical. Make it case insensitive.

// Examples
// match("hello", "hELLo") ➞ true

// match("motive", "emotive") ➞ false

// match("venom", "VENOM") ➞ true

// match("mask", "mAskinG") ➞ false

function match(s1, s2) {
  return s1.toLowerCase() === s2.toLowerCase();
}

function stackBoxes(n) {
  return n ** 2;
}

function equalSlices(total, people, each) {
  return total >= people * each;
}

function operation(num1, num2) {
  if (num1 + num2 === 24) return "added";
  if (num1 * num2 === 24) return "multiplied";
  if (num1 - num2 === 24 || num2 - num1 === 24) return "subtracted";
  if (num1 / num2 === 24 || num2 / num1 === 24) return "divided";
  return null;
}

function negate(arr) {
  return arr.map(item => -item);
}

function programmers(one, two, three) {
  let arr = [one, two, three].sort((a, b) => a - b);
  return arr[2] - arr[0];
}

function isEqual(num1, num2) {
  if (typeof num1 === "string" || typeof num2 === "string") return false;
  return num1 === num2;
}
function diffMaxMin(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1] - arr[0];
}

function numberSyllables(word) {
  return word.split("-").length;
}

function hasKey(obj, key) {
  for (k in obj) {
    if (k === key) return true;
  }
  return false;
}

function both(n1, n2) {
  if ((n1 > 0 && n2 > 0) || n1 === n2) return true;
  if (n1 < 0 && n2 < 0) return true;
  return false;
}

// Create a function that takes an integer and returns an array from 1 to the given number, where:

// If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.

function amplify(num) {
  let solution = [];
  for (let i = 1; i <= num; i++) {
    if (i % 4 == 0) solution.push(i * 10);
    else solution.push(i);
  }
  return solution;
}

function difference(nums) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - 1] - nums[0];
}

function netPresentValue(pv, ir, years) {
  //pv * (1 - (1 + investment rate) ^negative number of years) / investment rate
  let npv = Math.round(((1 - (1 + ir) ** -years) / ir) * pv);
  return npv < 0 ? false : `\$${npv}`;
}

function missingAngle(angle1, angle2) {
  let thirdAngle = 180 - (angle1 + angle2);
  return thirdAngle == 90 ? "right" : thirdAngle > 90 ? "obtuse" : "acute";
}

function countWords(str) {
  return str.split(" ").length;
}

function getSequence(low, high) {
  let solution = [];
  for (let i = low; i <= high; i++) {
    solution.push(i);
  }
  return solution;
}

function canPartition(arr) {
  let positiveArr = arr.map(item => (item < 0 ? -item : item));
  let index = positiveArr.indexOf(Math.max(...positiveArr));

  return (
    arr.filter(num => num === 0).length > 1 ||
    arr[index] === arr.reduce((a, b) => a * b) / arr[index]
  );
}

function isBetween(first, last, word) {
  let arr = [first, word, last];
  return arr.join("") === arr.sort().join("");
}

function FizzBuzz(num) {
  if (num % 15 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num.toString();
}

function retrieveMajor(semver) {
  return semver.split(".")[0];
}

function retrieveMinor(semver) {
  return semver.split(".")[1];
}

function retrievePatch(semver) {
  return semver.split(".")[2];
}

function scoreCalculator(easy, med, hard) {
  if (easy < 0 || med < 0 || hard < 0) return "invalid";
  return easy * 5 + med * 10 + hard * 20;
}

// Fix this incorrect code!
function checkAllEven(arr) {
  return arr.every(num => num % 2 === 0);
}

function getStudentNames(students) {
  let solution = [];
  students.forEach(student => solution.push(student["name"]));
  return solution;
}

function hurdleJump(hurdles, jumpHeight) {
  return hurdles.every(h => h <= jumpHeight);
}

function findLargestNum(arr) {
  return Math.max(...arr);
}

function countIdentical(arr) {
  let solution = 0;
  arr.forEach(arr => {
    if (arr.filter(num => num !== arr[0]).length === 0) solution++;
  });
  return solution;
}

function countIdentical(arr) {
  return arr.filter(e => {
    return new Set(e).size === 1;
  }).length;
}

function mysteryFunc(arr, num) {
  return arr.map(arrNum => arrNum % num);
}

function MultiplyByLength(arr) {
  return arr.map(num => num * arr.length);
}

class Calculator {
  // Write functions to add(), subtract(), multiply() and divide()
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

// Fix this code
function checkEquals(arr1, arr2) {
  if (arr1.join(".") === arr2.join(".")) {
    return true;
  } else {
    return false;
  }
}

function filterList(l) {
  return l.filter(num => typeof num === "number");
}

function limitNumber(num, rangeLow, rangeHigh) {
  return [num, rangeLow, rangeHigh].sort((a, b) => a - b)[1];
}

function removeNull(arr) {
  return arr.filter(num => num != null);
}

function calcDeterminant(matrix) {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

function countAll(str) {
  let solution = { LETTERS: 0, DIGITS: 0 };
  str = str.replace(/\s/g, "");
  solution.DIGITS = str.split("").filter(c => c >= "0" && c <= "9").length;
  solution.LETTERS = str.split("").length - solution.DIGITS;
  return solution;
}

function canConcatenate(arr, target) {
  return (
    JSON.stringify(
      arr.reduce((a, b) => a.concat(b)).sort((n1, n2) => n1 - n2)
    ) === JSON.stringify(target.sort((n1, n2) => n1 - n2))
  );
}

function getWord(left, right) {
  return left[0].toUpperCase() + left.substr(1) + right;
}

function sameCase(str) {
  return str.toUpperCase() === str ? true : str.toLowerCase() === str;
}

function Go(num) {
  return "-".repeat(num);
}

function maxHam(s1, s2) {
  if (
    s1
      .split("")
      .sort()
      .join("") !=
    s2
      .split("")
      .sort()
      .join("")
  )
    return false;
  let sol = 0;
  for (var i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) sol++;
  }
  return sol === s1.length ? true : sol;
}

// Fix this incorrect code, so that all tests pass!
function removeVowels(str) {
  return str.replace(/[aeiou]/g, "");
}

function findEvenNums(num) {
  let solution = [];
  for (let i = 2; i <= num; i += 2) {
    solution.push(i);
  }
  return solution;
}

function noStrangers(str) {
  let aq = new Set();
  let fr = new Set();
  let strArr = str
    .toLowerCase()
    .replace(/[^a-z' ]/g, "")
    .split(" ");
  let uniqueWords = new Set(strArr);
  let wordObj = {};
  for (word of [...uniqueWords]) {
    wordObj[word] = 0;
  }
  //console.log(wordObj);

  for (word of strArr) {
    wordObj[word] += 1;
    if (wordObj[word] >= 3 && wordObj[word] < 5) aq.add(word);
    else if (wordObj[word] >= 5) fr.add(word);
    //console.log("length: ",len, "Word: ", word);
  }

  for (word of fr) {
    aq.delete(word);
  }

  return [[...aq], [...fr]];
}
