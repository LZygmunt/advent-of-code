import isReportSafeWithProblemDampener from './isReportSafeWithProblemDampener.ts';

it.each`
input                  | expected
${ [ 7, 6, 4, 2, 1 ] } | ${ true }
${ [ 1, 3, 2, 4, 5 ] } | ${ true }
${ [ 8, 6, 4, 4, 1 ] } | ${ true }
${ [ 1, 3, 6, 7, 9 ] } | ${ true }
${ [ 12, 16, 17, 18, 21, 24, 27, 30 ] } | ${ true }
`( 'given report $input is safe', ( { input, expected } ) => {
  expect( isReportSafeWithProblemDampener( input ) ).toBe( expected );
} );

it.each`
input                  | expected
${ [ 1, 2, 7, 8, 9 ] } | ${ false }
${ [ 9, 7, 6, 2, 1 ] } | ${ false }
${ [ 3, 1, 4, 7, 9 ] } | ${ false }
`( 'given report $input is unsafe', ( { input, expected } ) => {
  expect( isReportSafeWithProblemDampener( input ) ).toBe( expected );
} );