import { exampleInputPartTwo } from './example-input.ts';
import filterMemoryFromDisabledInstructions from './filterMemoryFromDisabledInstructions.ts';

it( 'should', () => {
  expect( filterMemoryFromDisabledInstructions( exampleInputPartTwo ) )
    .toBe( 'xmul(2,4)&mul[3,7]!^do()?mul(8,5))' );
} );