import path from 'node:path';
import { readFileLineByLine } from '#utils/readFileLineByLine.ts';
import countSafeReports from './countSafeReports.ts';
import isReportSafe from './isReportSafe.ts';
import isReportSafeWithProblemDampener from './isReportSafeWithProblemDampener.ts';

const reports = [];
await readFileLineByLine(
  path.join( import.meta.dirname, './input' ),
  ( line ) => {
    const report = line.split( ' ' ).map( Number );

    reports.push( report );
  },
);

const totalSafeReports = countSafeReports( reports, isReportSafe );//287
console.log( totalSafeReports );

const totalSafeReportsWithProblemDampener = countSafeReports(
  reports,
  isReportSafeWithProblemDampener,
);//287
console.log( totalSafeReportsWithProblemDampener );