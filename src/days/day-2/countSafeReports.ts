import type { List } from './types.ts';
import isReportSafe from './isReportSafe.ts';

type CountSafeReports = ( reports: List[] ) => number;

const countSafeReports: CountSafeReports = ( reports ) =>
  reports.reduce(
    ( totalSafeReports, report ) => isReportSafe( report )
      ? totalSafeReports + 1
      : totalSafeReports,
    0,
  );

export default countSafeReports;