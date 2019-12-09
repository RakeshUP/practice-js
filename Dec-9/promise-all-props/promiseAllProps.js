
const promiseAllProps = (object) => {
  const returnObject = {};
  let count = Object.keys(object).length;

  return new Promise((resolve, reject) => {
    const checkDone = () => {
      count -= 1;
      if (count === 0) {
        resolve(returnObject);
      }
    };
    for (const [key, value] of Object.entries(object)) {
      value.then((result) => {
        returnObject[key] = result;
      }, reject).then(checkDone);
    }
  });
};

export default promiseAllProps;
