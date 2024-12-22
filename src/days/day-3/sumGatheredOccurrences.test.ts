import { exampleInput, exampleInputPartTwo } from './example-input.ts';
import sumGatheredOccurrences from './sumGatheredOccurrences.ts';
import filterMemoryFromDisabledInstructions from './filterMemoryFromDisabledInstructions.ts';

it( 'should return 161 for example input', () => {
  expect( sumGatheredOccurrences( exampleInput ) )
    .toEqual( 161 );
} );
it( 'should return 48 for example input part two with filtering down disabled instructions', () => {
  const onlyEnabledInstructions = filterMemoryFromDisabledInstructions( exampleInputPartTwo );

  expect( sumGatheredOccurrences( onlyEnabledInstructions ) )
    .toEqual( 48 );
} );