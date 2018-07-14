function coordinates(half, radius, startAngle, endAngle) {
  const startAngleDegrees = (Math.PI * startAngle) / 180;
  const x1 = half + half * radius * Math.cos(startAngleDegrees);
  const y1 = half + half * radius * Math.sin(startAngleDegrees);
  const endAngleDegrees = (Math.PI * endAngle) / 180;
  const x2 = half + half * radius * Math.cos(endAngleDegrees);
  const y2 = half + half * radius * Math.sin(endAngleDegrees);

  return {
    x1,
    y1,
    x2,
    y2
  };
}

function arc(width, radius, largeArcFlag, x, y) {
  const z = (width / 2) * radius;

  return `A${z}, ${z} 0 ${largeArcFlag} ${x}, ${y}`;
}

export default function path(
  activeAngle,
  startAngle,
  width,
  innerRadius,
  outerRadius
) {
  const endAngle = startAngle + activeAngle;

  const largeArcFlagOuter = activeAngle > 180 ? "1 1" : "0 1";
  const largeArcFlagInner = activeAngle > 180 ? "1 0" : "0 0";
  const half = width / 2;
  const outerCoords = coordinates(half, outerRadius, startAngle, endAngle);
  const innerCoords = coordinates(half, innerRadius, startAngle, endAngle);

  const outerArc = arc(
    width,
    outerRadius,
    largeArcFlagOuter,
    outerCoords.x2,
    outerCoords.y2
  );
  const innerArc = arc(
    width,
    innerRadius,
    largeArcFlagInner,
    innerCoords.x1,
    innerCoords.y1
  );

  return `M${outerCoords.x1},${outerCoords.y1}
  ${outerArc}
  L${innerCoords.x2},${innerCoords.y2}
  ${innerArc} z`;
}
