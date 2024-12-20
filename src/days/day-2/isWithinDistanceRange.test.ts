import isWithinDistanceRange from './isWithinDistanceRange.ts';

it.each`
a      | b      | min    | max    | expected
${ 7 } | ${ 9 } | ${ 2 } | ${ 3 } | ${ true }
${ 7 } | ${ 8 } | ${ 2 } | ${ 3 } | ${ false }
${ 4 } | ${ 1 } | ${ 2 } | ${ 3 } | ${ true }
${ 4 } | ${ 3 } | ${ 2 } | ${ 3 } | ${ false }
${ 4 } | ${ 3 } | ${ 1 } | ${ 2 } | ${ true }
${ 4 } | ${ 1 } | ${ 1 } | ${ 2 } | ${ false }
`//@ts-ignore
  ( `distance between $a and $b should ${'$expected' === 'true' ? '' : 'not '}be in range [$min, $max]`, ( { a, b, min, max, expected } ) => {
    expect( isWithinDistanceRange( a, b, min, max ) ).toBe( expected );
  } );