const expandAroundCenter = (subString, left, right) => {
  let L = left;
  let R = right;
  while (L >= 0 && R < subString.length && subString.charAt(L) === subString.charAt(R)) {
    L -= 1;
    R += 1;
  }
  return R - L - 1;
};

const longestPalindrome = (string) => {
  if (string == null || string.length < 1) return '';
  let start = 0;
  let end = 0;
  for (let i = 0; i < string.length; i += 1) {
    const len1 = expandAroundCenter(string, i, i);
    const len2 = expandAroundCenter(string, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }
  return string.substring(start, end + 1);
};

export default longestPalindrome;
