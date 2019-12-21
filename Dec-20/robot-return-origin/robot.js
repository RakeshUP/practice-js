
const robot = directions => {
  const finalCoOrd = directions.split('').reduce((acc, currentTurn) => {
    if (currentTurn === 'L') {
      acc.dy -= 1;
    } else if (currentTurn === 'R') {
      acc.dy += 1;
    } else if (currentTurn === 'U') {
      acc.dx += 1;
    } else if (currentTurn === 'D') {
      acc.dx -= 1;
    }
    return acc;
  }, { dx: 0, dy: 0 });

  if (finalCoOrd.dx === 0 && finalCoOrd.dy === 0) {
    return true;
  }
  return false;
};

export default robot;
