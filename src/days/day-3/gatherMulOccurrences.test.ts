import { exampleInput } from './example-input.ts';
import gatherMulOccurrences from './gatherMulOccurrences.ts';

it( 'should gathered mul occurrences from example input be [ [ 2, 4 ], [ 5, 5 ], [ 11, 8 ], [ 8, 5 ] ]', () => {
  expect( gatherMulOccurrences( exampleInput ) ).toEqual( [ [ 2, 4 ], [ 5, 5 ], [ 11, 8 ], [ 8, 5 ] ] );
} );