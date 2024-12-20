import type { IsReportSafe } from './types.ts';
import areAllDistancesWithinRange from './areAllDistancesWithinRange.ts';
import isIncreasing from './isIncreasing.ts';
import isDecreasing from './isDecreasing.ts';

const isReportSafe: IsReportSafe = ( list ) => {
  const areReportDistanceWithinRange = areAllDistancesWithinRange( list );
  if ( !areReportDistanceWithinRange ) {
    return false;
  }

  const isReportIncreasing = isIncreasing( list );
  const isReportDecreasing = isDecreasing( list );

  return isReportIncreasing || isReportDecreasing;
};

export default isReportSafe;