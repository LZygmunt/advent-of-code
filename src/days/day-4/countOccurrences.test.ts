import { exampleInput } from './example-input.ts';
import countOccurrences from './countOccurrences.ts';
import convertToGrid from './convertToGrid.ts';
import gatherPossibleLinesToCrossOut from './gatherPossibleLinesToCrossOut.ts';

it( 'should return 18 for example input and XMAS word', () => {
  const input = convertToGrid( exampleInput );
  const linesToCrossOut = gatherPossibleLinesToCrossOut( input)
  expect( countOccurrences( linesToCrossOut, 'XMAS' ) )
    .toEqual( 18 );
} );
