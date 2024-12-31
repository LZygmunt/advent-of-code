import { readFileLineByLine } from '#utils/readFileLineByLine.ts';
import path from 'node:path';
import convertToGrid from './convertToGrid.ts';
import { exampleInput } from './example-input.ts';
import gatherPossibleLinesToCrossOut from './gatherPossibleLinesToCrossOut.ts';

export default async () => {
  console.log( '-----------------DAY-4-----------------' );

  let crossword = '';
  await readFileLineByLine(
    path.join( import.meta.dirname, './input' ),
    ( line ) => {
      crossword += `${line}\n`;
    },
  );

  const crosswordGrid = convertToGrid(exampleInput)

  const SEARCH_WORD = 'XMAS'
  const allPossibleLinesToCrossOut = gatherPossibleLinesToCrossOut(crosswordGrid)

  // const total = countOccurrences(crosswordGrid)
  // console.log( total ); //
};
