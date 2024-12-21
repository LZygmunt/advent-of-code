import type { ReportSafeChecker } from './types.ts';
import isReportSafe from './isReportSafe.ts';

const isReportSafeWithProblemDampener: ReportSafeChecker = ( list ) => {
  if ( isReportSafe( list ) ) {
    return true;
  }
  let probablySafeReports = [];
  for ( let i = 0; i <= list.length - 1; i++ ) {
    probablySafeReports = list.toSpliced( i, 1 );

    if ( isReportSafe( probablySafeReports ) ) {
      return true;
    }
  }

  return false;
};

export default isReportSafeWithProblemDampener;