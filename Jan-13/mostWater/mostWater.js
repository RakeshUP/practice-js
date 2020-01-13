/* eslint-disable no-plusplus */
const maximumArea = height => {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
};

export default maximumArea;
