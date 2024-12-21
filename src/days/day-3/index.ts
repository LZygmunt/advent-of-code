import { readFileLineByLine } from '#utils/readFileLineByLine.ts';
import path from 'node:path';
import sumGatheredOccurrences from './sumGatheredOccurrences.ts';

export default async () => {
  console.log( '-----------------DAY-3-----------------' );

  const corruptedMemories = [] as string[];
  await readFileLineByLine(
    path.join( import.meta.dirname, './input' ),
    ( line ) => {
      corruptedMemories.push( line );
    },
  );

  const multiplicationsSum = corruptedMemories
    .reduce( ( sum, corruptedMemory ) => sum + sumGatheredOccurrences( corruptedMemory ), 0 );
  console.log( multiplicationsSum ); // 173731097
};
