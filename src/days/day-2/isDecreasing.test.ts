import isDecreasing from './isDecreasing.ts';

it.each`
input                  | expected
${ [ 1, 3, 6, 7, 9 ] } | ${ false }
${ [ 1, 2, 7, 8, 9 ] } | ${ false }
${ [ 1, 3, 2, 4, 5 ] } | ${ false }
${ [ 8, 6, 4, 4, 1 ] } | ${ false }
${ [ 1, 5, 9 ] }       | ${ false }
`( 'given list $input should not be decreasing', ( { input, expected } ) => {
  expect( isDecreasing( input ) ).toBe( expected );
} );

it.each`
input                  | expected
${ [ 7, 6, 4, 2, 1 ] } | ${ true }
${ [ 9, 7, 6, 2, 1 ] } | ${ true }
${ [ 8, 5, 4, 2, 1 ] } | ${ true }
${ [ 5, 4, 3, 2, 1 ] } | ${ true }
${ [ 3, 2, 1 ] }       | ${ true }
`( 'given list $input should not be decreasing', ( { input, expected } ) => {
  expect( isDecreasing( input ) ).toBe( expected );
} );