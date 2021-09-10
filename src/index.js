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

Logic.prototype.generateRandomNum = function generateRandomNum(max = 100) {
  return Math.floor(Math.random() * max);
};

export default Logic;
