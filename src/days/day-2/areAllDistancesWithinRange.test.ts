import areAllDistancesWithinRange from './areAllDistancesWithinRange.ts';

it.each`
input                  | expected
${ [ 7, 6, 4, 2, 1 ] } | ${ true }
${ [ 1, 2, 7, 8, 9 ] } | ${ false }
${ [ 9, 7, 6, 2, 1 ] } | ${ false }
${ [ 1, 3, 2, 4, 5 ] } | ${ false }
${ [ 8, 6, 4, 4, 1 ] } | ${ false }
${ [ 1, 3, 6, 7, 9 ] } | ${ true }
${ [ 3, 1, 4, 7, 9 ] } | ${ true }
`//@ts-ignore
( `every in $input should ${'$expected' === 'true' ? '' : 'not '}be in range [2, 3]`, ( { input, expected } ) => {
  expect( areAllDistancesWithinRange( input ) ).toBe( expected );
} );