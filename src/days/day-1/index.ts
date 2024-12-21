import { calculateDistance } from './calculateDistance.ts';
import createLeftAndRightLists from './createLeftAndRightLists.ts';
import path from 'node:path';
import calculateSimilarityScore from './calculateSimilarityScore.ts';

export default async () => {
  console.log( '-----------------DAY-1-----------------' );
  const [ leftList, rightList ] = await createLeftAndRightLists( path.join( import.meta.dirname, './input' ) );

  const totalDistance = calculateDistance( leftList, rightList ); //1666427
  console.log( totalDistance );

  const similarityScore = calculateSimilarityScore( leftList, rightList ); //1666427
  console.log( similarityScore );
}

