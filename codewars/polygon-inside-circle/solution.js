const areaOfPolygonInsideCircle = (cRadius, nSides) => {
  const angle = (180 * (nSides - 2)) / nSides / 2;
  const apotema = cRadius * Math.sin(Math.PI * (angle / 180));
  const side = cRadius * Math.cos(Math.PI * (angle / 180)) * 2;
  const area = (nSides * side * apotema) / 2;
  return Number(area.toFixed(3));
};

module.exports = areaOfPolygonInsideCircle;
