import readlineSync from 'readline-sync';

import game from '../index.js';
import rand from '../util.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const gameGcd = () => {
  const a = rand(100);
  const b = rand(100);

  console.log(`Question: ${a} ${b}`);
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  const rightAnswer = gcd(a, b);

  return { answer, rightAnswer };
};

const title = 'Find the greatest common divisor of given numbers.';

export default () => game(gameGcd, title);
