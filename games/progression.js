import Logic from '../src/index.js';

function generateProgression() {
  const step = Logic.prototype.generateRandomNum(2, 6);
  const start = Logic.prototype.generateRandomNum();
  const emptyPlace = Logic.prototype.generateRandomNum(2, 9);
  const obj = {
    result: 0,
    expr: [],
  };
  for (let i = start, j = 0; obj.expr.length < 10; i += step, j += 1) {
    if (j === emptyPlace) {
      obj.expr.push('..');
      obj.result = i;
    } else {
      obj.expr.push(i);
    }
  }
  return obj;
}

function progression(name = 'User') {
  console.log('What number is missing in the progression?');
  let counter = 0;
  while (counter < 3) {
    const {
      result,
      expr,
    } = generateProgression();
    const answer = Logic.prototype.question(expr);
    counter = Logic.prototype.gameBody(answer, result, counter, name);
  }
}

export default progression;
