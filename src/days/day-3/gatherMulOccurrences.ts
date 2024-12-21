import type { MulTuple, MulTuples } from './types.ts';

type GatherMulOccurrences = ( corruptedMemory: string ) => MulTuples

const gatherMulOccurrences: GatherMulOccurrences = ( corruptedMemory ) => {
  const multipliesFactors = corruptedMemory.match( /(?<=mul\()\d{1,3},\d{1,3}(?=\))/g );

  return multipliesFactors
    .map(
      ( factorsCommaSeparated ) => factorsCommaSeparated
        .split( ',' )
        .map( Number ) as MulTuple,
    );
};

export default gatherMulOccurrences;