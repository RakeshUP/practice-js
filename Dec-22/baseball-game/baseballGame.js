
const isDigit = char => /[0-9]/.test(char);

const baseballGame = scores => {
  const operationsApplied = scores.reduce((acc, score) => {
    if (isDigit(score)) {
      acc.push(parseInt(score, 10));
    } else if (score === 'C') {
      acc.pop();
    } else if (score === 'D') {
      const lastScore = parseInt(acc[acc.length - 1], 10);
      acc.push(lastScore * 2);
    } else if (score === '+') {
      const [lastScore, lastlastScore] = acc.slice(acc.length - 2);
      acc.push(parseInt(lastScore, 10) + parseInt(lastlastScore, 10));
    }
    return acc;
  }, []);

  return operationsApplied.reduce((acc, score) => {
    // eslint-disable-next-line no-param-reassign
    acc += score;
    return acc;
  }, 0);
};

export default baseballGame;
