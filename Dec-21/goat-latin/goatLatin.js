/* eslint-disable no-param-reassign */

const isVowel = char => /[aeiouAEIOU]/.test(char);

const goatLatin = sentence => sentence.split(' ')
  .reduce((goatLatinString, word, index) => {
    const [firstChar, rest] = [word[0], word.substring(1)];

    if (isVowel(firstChar)) {
      goatLatinString = `${goatLatinString}${firstChar}${rest}ma`;
    } else {
      goatLatinString = `${goatLatinString}${rest}${firstChar}ma`;
    }

    goatLatinString = `${goatLatinString}${'a'.repeat(index + 1)} `;

    return goatLatinString;
  }, '')
  .trimEnd();

export default goatLatin;
