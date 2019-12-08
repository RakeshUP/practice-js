
const memoize = (callback) => {
  const callbackResults = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (callbackResults[key] !== undefined) {
      return callbackResults[key];
    }
    const result = callback(...args);
    callbackResults[key] = result;
    return result;
  };
};

export default memoize;
