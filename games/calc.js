import Logic from '../src/index.js';

function calcStr(str) {
  const arr = str.split(' ');
  if (arr[1] === '-') return +arr[0] - +arr[2];
  if (arr[1] === '+') return +arr[0] + +arr[2];
  if (arr[1] === '*') return +arr[0] * +arr[2];
  return null;
}

function genExpr() {
  const symbols = ['+', '-', '*'];
  const index = Logic.prototype.generateRandomNum(0, 3);
  const a = Logic.prototype.generateRandomNum();
  const b = Logic.prototype.generateRandomNum();
  return `${a} ${symbols[index]} ${b} `;
}

function calc(name = 'User') {
  console.log('What is the result of the expression?');
  let roundCount = 0;
  while (roundCount < 3) {
    const expr = genExpr();
    const answer = Logic.prototype.question(expr);
    const expectedAnswer = calcStr(expr);
    roundCount = Logic.prototype.gameBody(answer, expectedAnswer, roundCount, name);
  }
}

export default calc;
