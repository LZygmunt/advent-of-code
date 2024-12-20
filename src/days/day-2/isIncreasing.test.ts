import isIncreasing from './isIncreasing.ts';

it.each`
input                  | expected
${ [ 7, 6, 4, 2, 1 ] } | ${ false }
${ [ 9, 7, 6, 2, 1 ] } | ${ false }
${ [ 1, 3, 2, 4, 5 ] } | ${ false }
${ [ 8, 6, 4, 4, 1 ] } | ${ false }
${ [ 3, 1, 9 ] }       | ${ false }
`( 'given list $input should not be increasing', ( { input, expected } ) => {
  expect( isIncreasing( input ) ).toBe( expected );
} );

it.each`
input                  | expected
${ [ 1, 3, 6, 7, 9 ] } | ${ true }
${ [ 1, 2, 7, 8, 9 ] } | ${ true }
${ [ 1, 2, 3, 4, 5 ] } | ${ true }
${ [ 3, 4, 5, 8, 9 ] } | ${ true }
${ [ 1, 5, 9 ] }       | ${ true }
`( 'given list $input should be increasing', ( { input, expected } ) => {
  expect( isIncreasing( input ) ).toBe( expected );
} );