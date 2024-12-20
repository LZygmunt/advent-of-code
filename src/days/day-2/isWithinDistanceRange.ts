type IsWithinDistanceRange = ( a: number, b: number, minDistance: number, maxDistance: number ) => boolean

const isWithinDistanceRange: IsWithinDistanceRange = (
  a,
  b,
  minDistance,
  maxDistance,
) => {
  const absoluteDistance = Math.abs( a - b );

  return absoluteDistance >= minDistance && absoluteDistance <= maxDistance;
};

export default isWithinDistanceRange;