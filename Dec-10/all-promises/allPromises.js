
const allPromises = arrayOfPromises => {
  const promiseResults = [];
  if (arrayOfPromises === undefined) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    arrayOfPromises.reduce((acc, promise, index) => acc.then(() => {
      if (promise instanceof Promise) {
        promise.then(result => {
          promiseResults[index] = result;
          if (index === arrayOfPromises.length - 1) {
            resolve(promiseResults);
          }
        }).catch(err => {
          reject(err);
        });
      } else {
        promiseResults[index] = promise;
        if (index === arrayOfPromises.length - 1) {
          resolve(promiseResults);
        }
      }
    }), Promise.resolve());
  });
};

export default allPromises;
