import sumMulTuples from './sumMulTuples.ts';

it( 'should', () => {


  expect( sumMulTuples( [ [ 2, 4 ], [ 5, 5 ], [ 11, 8 ], [ 8, 5 ] ] ) )
    .toEqual( 161 );

} );