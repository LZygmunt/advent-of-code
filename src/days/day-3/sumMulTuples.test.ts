import sumMulTuples from './sumMulTuples.ts';

it( 'should return 161 for tuples [ [ 2, 4 ], [ 5, 5 ], [ 11, 8 ], [ 8, 5 ] ]', () => {
  expect( sumMulTuples( [ [ 2, 4 ], [ 5, 5 ], [ 11, 8 ], [ 8, 5 ] ] ) )
    .toEqual( 161 );
} );