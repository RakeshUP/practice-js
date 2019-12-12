
const spiralMatrix = (twoDArray) => {
  const unSpiralled = [];
  let [i, j] = [0, 0];
  let [top, left, right, bottom] = [0, 0, twoDArray[0].length - 1, twoDArray.length - 1];
  let direction = 'right';
  let noOfElements = (right + 1) * (bottom + 1);

  while (noOfElements > 0) {
    noOfElements -= 1;
    unSpiralled.push(twoDArray[i][j]);
    if (direction === 'right') {
      if (j === right) {
        direction = 'down';
        top += 1;
        i += 1;
      } else {
        j += 1;
      }
    } else if (direction === 'down') {
      if (i === bottom) {
        direction = 'left';
        right -= 1;
        j -= 1;
      } else {
        i += 1;
      }
    } else if (direction === 'left') {
      if (j === left) {
        direction = 'up';
        bottom -= 1;
        i -= 1;
      } else {
        j -= 1;
      }
    } else if (direction === 'up') {
      if (i === top) {
        direction = 'right';
        left += 1;
        j += 1;
      } else {
        i -= 1;
      }
    }
  }
  return unSpiralled;
};

export default spiralMatrix;
