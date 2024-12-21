import type { MulTuples } from './types.ts';

type SumMulTuples = ( tuples: MulTuples ) => number
const sumMulTuples: SumMulTuples = ( tuples ) => tuples
  .reduce( ( sum, mulTuple ) => sum + (
    mulTuple[ 0 ] * mulTuple[ 1 ]
  ), 0 );

export default sumMulTuples;