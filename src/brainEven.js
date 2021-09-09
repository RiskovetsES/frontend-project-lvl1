import readlineSync from 'readline-sync';
import generateRandomNum from './generateRandomNum.js';

function checkAnswer(number, answer) {
  if ((number % 2 === 0) && (answer === 'yes')) return true;
  return (number % 2 !== 0) && (answer === 'no');
}

function question() {
  const number = generateRandomNum();
  const answer = readlineSync.question(`Question: ${number} `);
  return checkAnswer(number, answer);
}

function brainEven(name = '') {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let counter = 0;
  while (counter < 3) {
    const answer = question();
    if (answer === true) {
      console.log('Correct!');
      counter += 1;
    }
    if (answer === false) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'no'.
                  Let's try again, Bill!`);
      break;
    }
    if (counter === 3) console.log(`Congratulations ${name}`);
  }
}

export default brainEven;
