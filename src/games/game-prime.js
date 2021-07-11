import readlineSync from 'readline-sync';

import game from '../index.js';
import rand from '../util.js';

const isPrime = (number) => {
  const squareRoot = Math.sqrt(number);
  for (let i = 2; i <= squareRoot; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const gamePrime = () => {
  const number = rand(100);

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return { answer, rightAnswer };
};

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => game(gamePrime, title);
