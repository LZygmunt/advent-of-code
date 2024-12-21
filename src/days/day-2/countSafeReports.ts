import type { List, ReportSafeChecker } from './types.ts';

type CountSafeReports = ( reports: List[], reportSafeChecker: ReportSafeChecker ) => number;

const countSafeReports: CountSafeReports = ( reports, reportSafeChecker ) =>
  reports.reduce(
    ( totalSafeReports, report ) => reportSafeChecker( report )
      ? totalSafeReports + 1
      : totalSafeReports,
    0,
  );

export default countSafeReports;