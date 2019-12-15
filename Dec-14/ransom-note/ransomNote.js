
const ransomNote = (ransomNoteString, magazineString) => {
  const magazineStringArray = magazineString.split('');
  let canConstruct = true;

  ransomNoteString.split('').forEach(element => {
    const indexOfChar = magazineStringArray.indexOf(element);
    if (indexOfChar !== -1) {
      magazineStringArray.splice(indexOfChar, 1);
    } else {
      canConstruct = false;
    }
  });

  return canConstruct;
};

export default ransomNote;
