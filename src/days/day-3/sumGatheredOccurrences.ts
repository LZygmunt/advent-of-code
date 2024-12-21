import gatherMulOccurrences from './gatherMulOccurrences.ts';
import sumMulTuples from './sumMulTuples.ts';

type SumGatheredOccurrences = ( corruptedMemory: string ) => number
const sumGatheredOccurrences: SumGatheredOccurrences = ( corruptedMemory ) => {
  const occurrences = gatherMulOccurrences( corruptedMemory );

  return sumMulTuples( occurrences );
};

export default sumGatheredOccurrences;