
const rangeIter = (lBound, uBound) => {
  if (lBound === undefined || uBound === undefined) {
    throw new TypeError('undefined is not a number');
  }
  if (typeof uBound !== 'number') {
    throw new TypeError(`${uBound} is not a number`);
  }

  const iterable = {
    [Symbol.iterator]() {
      this.lBound = lBound;
      this.uBound = uBound;

      return this;
    },
    next() {
      if (this.lBound <= this.uBound) {
        const returnValue = this.lBound;
        this.lBound += 1;
        return { value: returnValue, done: false };
      }
      return { done: true };
    },
  };
  return iterable;
};

export default rangeIter;
