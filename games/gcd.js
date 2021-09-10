import Logic from '../src/index.js';

function generateNumbers() {
  const a = Logic.prototype.generateRandomNum(1, 100);
  const b = Logic.prototype.generateRandomNum(1, 100);
  return `${a} ${b}`;
}

function gcdCount(a, b) {
  let num1 = Math.abs(+a);
  let num2 = Math.abs(+b);
  if (num2 > num1) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }
  while (true) {
    if (num2 === 0) return num1;
    num1 %= num2;
    if (num1 === 0) return num2;
    num2 %= num1;
  }
}

function gcd(name = 'User') {
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;
  while (counter < 3) {
    const expr = generateNumbers();
    const result = gcdCount(...expr.split(' '));
    const answer = Logic.prototype.question(expr);
    counter = Logic.prototype.gameBody(answer, result, counter, name);
  }
}

export default gcd;
