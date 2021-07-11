import readlineSync from 'readline-sync';

import game from '../index.js';
import rand from '../util.js';

const gameEven = () => {
  const number = rand(100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = number % 2 ? 'no' : 'yes';
  return { answer, rightAnswer };
};

const title = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => game(gameEven, title);
