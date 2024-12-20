import countSafeReports from './countSafeReports.ts';
import { reports } from './example-input.ts';

it( 'should return 2 for example input', () => {
  expect( countSafeReports( reports ) ).toBe( 2 );
} );