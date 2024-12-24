import { readFileLineByLine } from '#utils/readFileLineByLine.ts';
import path from 'node:path';
import convertToGrid from './convertToGrid.js';

export default async () => {
  console.log( '-----------------DAY-4-----------------' );

  let crossword = '';
  await readFileLineByLine(
    path.join( import.meta.dirname, './input' ),
    ( line ) => {
      crossword += `${line}\n`;
    },
  );

  const crosswordGrid = convertToGrid(crossword)
};
