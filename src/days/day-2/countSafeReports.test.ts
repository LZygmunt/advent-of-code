import countSafeReports from './countSafeReports.ts';
import { reports } from './example-input.ts';
import isReportSafe from './isReportSafe.ts';
import isReportSafeWithProblemDampener from './isReportSafeWithProblemDampener.ts';

it( 'should return 2 for example input for method isReportSafe', () => {
  expect( countSafeReports( reports, isReportSafe ) ).toBe( 2 );
} );

it( 'should return 4 for example input for method isReportSafeWithProblemDampener', () => {
  expect( countSafeReports( reports, isReportSafeWithProblemDampener ) ).toBe( 4 );
} );