
const duplicatesInArray = array => {
  const map = new Map();
  return array.filter((element, index) => {
    if (map.has(element)) {
      return true;
    }
    map.set(element, index);
    return false;
  });
};

export default duplicatesInArray;
