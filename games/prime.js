import Logic from '../src/index.js';

function chekNum(num) {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
}

function prime(name = 'User') {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    const expr = Logic.prototype.generateRandomNum(2, 20);
    const answer = Logic.prototype.question(expr);
    const result = chekNum(expr);
    counter = Logic.prototype.gameBody(answer, result, counter, name);
  }
}

export default prime;
