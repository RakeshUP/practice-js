/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  const point1 = points[0];
  const point2 = points[1];
  const point3 = points[2];

  if (point1.toString() == point2.toString() || point1.toString() == point3.toString() || point2.toString() == point3.toString()) {
    return false;
  }

  const slope1 = (point2[1] - point1[1]) / (point2[0] - point1[0]);
  const slope2 = (point3[1] - point1[1]) / (point3[0] - point1[0]);
  if (slope1 === slope2) {
    return false;
  }
  return true
};

export default isBoomerang;