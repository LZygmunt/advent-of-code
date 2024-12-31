import gatherPossibleLinesToCrossOut from './gatherPossibleLinesToCrossOut.ts';
import convertToGrid from './convertToGrid.ts';

it( 'should return all possible lines for example input', () => {
  const crosswordGrid = convertToGrid( 'XMAA\nSAMX\nXMAS' );
  expect( gatherPossibleLinesToCrossOut( crosswordGrid ) )
    .toEqual( [
      'XMAA',
      'SAMX',
      'XMAS',
      'XSX',
      'MAM',
      'AMA',
      'AXS',
      'XAA',
      'X',
      'MMS',
      'MS',
      'AX',
      'AAX',
      'A',
      'AMM',
      'SM',
      'XA',
      'X',
      'S',
    ] );
} );
