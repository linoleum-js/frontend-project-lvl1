import readlineSync from 'readline-sync';

import game from '../index.js';
import rand from '../util.js';

const getRigthAnswer = (left, right, operator) => [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
][operator](left, right);

const gameCalc = () => {
  const operators = ['+', '-', '*'];
  const operator = rand(operators.length);
  const numberLeft = rand(100);
  const numberRight = rand(100);

  console.log(`Question: ${numberLeft} ${operators[operator]} ${numberRight}`);
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  const rightAnswer = getRigthAnswer(numberLeft, numberRight, operator);

  return { answer, rightAnswer };
};

const title = 'What is the result of the expression?';

export default () => game(gameCalc, title);
