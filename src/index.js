import readlineSync from 'readline-sync';

// function greetingUser() {
//   console.log('Welcome to the Brain Games!');
//   const name = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${name}!`);
//   return name;
// }

function Logic() {
}

Logic.prototype.greetingUser = function greetingUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

Logic.prototype.question = function question(num) {
  return readlineSync.question(`Question: ${num} `);
};

Logic.prototype.generateRandomNum = function generateRandomNum(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min)) + min;
};

Logic.prototype.checkAnswer = function checkAnswer(ans, res) {
  if (ans === 'no' || ans === 'yes') {
    return ans === res;
  }
  return +ans === res;
};

Logic.prototype.gameBody = function gameBody(answer, result, count, name) {
  let counter = count;
  if (Logic.prototype.checkAnswer(answer, result)) {
    console.log('Correct!');
    counter += 1;
  } else {
    console.log(`Your answer: ${answer}
        '${answer}' is wrong answer ;(. Correct answer was '${result}'.
         Let's try again, ${name}!`);
    counter = Infinity;
  }
  if (counter === 3) console.log(`Congratulations ${name}!`);
  return counter;
};

export default Logic;
