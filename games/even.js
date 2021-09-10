import Logic from '../src/index.js';

function checkAnswer(num, ans) {
  if ((num % 2 === 0) && (ans === 'yes')) return true;
  return (num % 2 !== 0) && (ans === 'no');
}

function even(name = 'User') {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let counter = 0;
  while (counter < 3) {
    const number = Logic.prototype.generateRandomNum();
    const answer = Logic.prototype.question(number);
    const isTrue = checkAnswer(number, answer);
    if (isTrue === true) {
      console.log('Correct!');
      counter += 1;
    }
    if (isTrue === false) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'no'.
                  Let's try again, Bill!`);
      break;
    }
    if (counter === 3) console.log(`Congratulations ${name}!`);
  }
}

export default even;
