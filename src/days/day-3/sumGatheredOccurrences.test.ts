import { exampleInput } from './example-input.ts';
import sumGatheredOccurrences from './sumGatheredOccurrences.ts';

it( 'should return 161 for example input', () => {
  expect( sumGatheredOccurrences( exampleInput ) )
    .toEqual( 161 );
} );