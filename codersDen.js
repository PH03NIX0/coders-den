1. function moveTen(s) {
  return s.split('').map(char => {
    let newCharCode = char.charCodeAt(0) + 10;
    if (newCharCode > 122) {
      newCharCode = (newCharCode - 122) + 96;
    }
    return String.fromCharCode(newCharCode);
  }).join('');
}

console.log(moveTen("testcase")); // "docdmkco"
console.log(moveTen("codewars")); // "mynogkbc"
console.log(moveTen("exampletesthere")); // "ohkwzvodocdrobo"

2. function vaporcode(string) {
  return string
    .toUpperCase()
    .split('')
    .filter(char => char !== ' ')
    .join('  ');
}

console.log(vaporcode("Lets go to the movies")); 
// "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"

console.log(vaporcode("why isnt my code working")); 
// "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G"

3. function rps(player1, player2) {
  const rules = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  };

  if (player1 === player2) {
    return "Draw!";
  } else if (rules[player1].includes(player2)) {
    return "Player 1 Won!";
  } else {
    return "Player 2 Won!";
  }
}

console.log(rps('rock', 'lizard')); // 'Player 1 Won!'
console.log(rps('paper', 'rock')); // 'Player 1 Won!'
console.log(rps('scissors', 'lizard')); // 'Player 1 Won!'
console.log(rps('lizard', 'paper')); // 'Player 1 Won!'
console.log(rps('spock', 'rock')); // 'Player 1 Won!'

4. function wordsToMarks(string) {
  return string
    .split('')
    .reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0);
}

console.log(wordsToMarks("attitude")); // 100
console.log(wordsToMarks("friends")); // 75
console.log(wordsToMarks("family")); // 66
console.log(wordsToMarks("selfness")); // 99
console.log(wordsToMarks("knowledge")); // 96

5. function oddOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return i;
    }
  }
  return -1;
}

console.log(oddOne([2, 4, 6, 7, 10])); // 3
console.log(oddOne([2, 16, 98, 10, 13, 78])); // 4
console.log(oddOne([4, -8, 98, -12, -7, 90, 100])); // 4
console.log(oddOne([2, 4, 6, 8])); // -1

6. /* Hoisting in JavaScript (Brief)

Hoisting moves variable and function declarations to the top of their scope during compilation.

Variables:
- var is hoisted and initialized as undefined.
- let/const are hoisted but inaccessible in the Temporal Dead Zone (TDZ) until their declaration.

Functions:
- Function declarations are fully hoisted (can be called before definition).
- Function expressions are not hoisted (only the variable is hoisted as undefined).

Examples: */

console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;

// Functions:

greet(); // "Hello!"
function greet() {
  console.log("Hello!");
}

sayHi(); // TypeError
var sayHi = function () {
  console.log("Hi!");
};
