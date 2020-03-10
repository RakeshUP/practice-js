const uniquePaths = (m, n) => {
  const dp = new Array(m + 1).fill(1).map(() => new Array(n + 1).fill(0));
  const recur = (r, c) => {
    if (r === m && c === n) return 1;
    if (r > m || c > n) return 0;
    if (dp[r][c]) return dp[r][c];
    dp[r][c] = recur(r + 1, c) + recur(r, c + 1);
    return dp[r][c];
  };
  return recur(1, 1);
};

export default uniquePaths;
