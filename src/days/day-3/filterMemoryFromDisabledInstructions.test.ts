import { exampleInputPartTwo } from './example-input.ts';
import filterMemoryFromDisabledInstructions from './filterMemoryFromDisabledInstructions.ts';

it( 'should filter down disabled instructions', () => {
  expect( filterMemoryFromDisabledInstructions( `${ exampleInputPartTwo }` ) )
    .toBe( 'xmul(2,4)&mul[3,7]!^?mul(8,5))' );
} );