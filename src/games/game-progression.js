import readlineSync from 'readline-sync';

import game from '../index.js';
import rand from '../util.js';

const generateProgression = (length, start, d) => {
  const res = [];
  for (let i = 0; i < length; i += 1) {
    res.push(start + i * d);
  }
  return res;
};

const hideElement = (progression, hiddenIndex) => {
  const tmp = [...progression];
  tmp[hiddenIndex] = '..';
  return tmp.join(' ');
};

const gameEven = () => {
  const minLength = 5;
  const length = rand(10) + minLength;
  const start = rand(10);
  const d = rand(10);
  const hiddenIndex = rand(length);
  const progression = generateProgression(length, start, d);

  console.log(`Question: ${hideElement(progression, hiddenIndex)}`);
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  const rightAnswer = progression[hiddenIndex];

  return { answer, rightAnswer };
};

const title = 'What number is missing in the progression?';

export default () => game(gameEven, title);
