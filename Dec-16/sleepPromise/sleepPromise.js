
const sleepPromise = timeout => new Promise(resolve => {
  setTimeout(() => resolve(timeout), timeout);
});

export default sleepPromise;
