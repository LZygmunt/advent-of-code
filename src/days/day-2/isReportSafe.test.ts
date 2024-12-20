import isReportSafe from './isReportSafe.ts';

it.each`
input                  | expected
${ [ 7, 6, 4, 2, 1 ] } | ${ true }
${ [ 1, 3, 6, 7, 9 ] } | ${ true }
`( 'given report $input is safe', ( { input, expected } ) => {
  expect( isReportSafe( input ) ).toBe( expected );
} );

it.each`
input                  | expected
${ [ 1, 2, 7, 8, 9 ] } | ${ false }
${ [ 9, 7, 6, 2, 1 ] } | ${ false }
${ [ 1, 3, 2, 4, 5 ] } | ${ false }
${ [ 8, 6, 4, 4, 1 ] } | ${ false }
${ [ 3, 1, 4, 7, 9 ] } | ${ false }
`( 'given report $input is unsafe', ( { input, expected } ) => {
  expect( isReportSafe( input ) ).toBe( expected );
} );