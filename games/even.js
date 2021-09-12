import Logic from '../src/index.js';

function isEven(num) {
  return num % 2 === 0;
}

function even(name = 'User') {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let roundCount = 0;
  while (roundCount < 3) {
    const number = Logic.prototype.generateRandomNum();
    const answer = Logic.prototype.question(number);
    const expectedAnswer = isEven(number) ? 'yes' : 'no';
    roundCount = Logic.prototype.gameBody(answer, expectedAnswer, roundCount, name);
  }
}

export default even;
