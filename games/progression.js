import Logic from '../src/index.js';

function generateProgression() {
  const step = Logic.prototype.generateRandomNum(2, 6);
  const start = Logic.prototype.generateRandomNum();
  const emptyPlace = Logic.prototype.generateRandomNum(2, 9);
  const obj = {
    expectedAnswer: 0,
    progressionArr: [],
  };
  for (let i = start, j = 0; obj.progressionArr.length < 10; i += step, j += 1) {
    if (j === emptyPlace) {
      obj.progressionArr.push('..');
      obj.expectedAnswer = i;
    } else {
      obj.progressionArr.push(i);
    }
  }
  return obj;
}

function progression(name = 'User') {
  console.log('What number is missing in the progression?');
  let roundCount = 0;
  while (roundCount < 3) {
    const {
      expectedAnswer,
      progressionArr,
    } = generateProgression();
    const expr = progressionArr.join(' ');
    const answer = Logic.prototype.question(expr);
    roundCount = Logic.prototype.gameBody(answer, expectedAnswer, roundCount, name);
  }
}

export default progression;
