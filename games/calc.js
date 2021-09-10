import { question } from 'readline-sync';
import Logic from '../src/index.js';

function checkAnswer(ans, res) {
  return +ans === res;
}

function calcStr(str) {
  const arr = str.split(' ');
  if (arr[1] === '-') return +arr[0] - +arr[2];
  if (arr[1] === '+') return +arr[0] + +arr[2];
  if (arr[1] === '*') return +arr[0] * +arr[2];
  return null;
}

function genExpr() {
  const symbols = ['+', '-', '*'];
  const index = Logic.prototype.generateRandomNum(3);
  const a = Logic.prototype.generateRandomNum(10);
  const b = Logic.prototype.generateRandomNum(10);
  return `${a} ${symbols[index]} ${b} `;
}

function calc(name = 'User') {
  console.log('What is the result of the expression?');
  let counter = 0;
  while (counter < 3) {
    const expr = genExpr();
    const answer = Logic.prototype.question(expr);
    const result = calcStr(expr);
    if (checkAnswer(answer, result)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`Your answer: ${answer}
        '${answer}' is wrong answer ;(. Correct answer was '${result}'.
         Let's try again, ${name}!`);
      break;
    }
    if (counter === 3) console.log(`Congratulations ${name}!`);
  }
}

export default calc;
