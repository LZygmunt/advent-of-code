import type { List } from './types.ts';
import isWithinDistanceRange from './isWithinDistanceRange.ts';

const MIN_DISTANCE = 1;
const MAX_DISTANCE = 3;

type AreAllDistanceWithinRange = ( list: List ) => boolean

const areAllDistanceWithinRange: AreAllDistanceWithinRange = ( list ) =>
  list.every( ( level, index ) => {
    if ( index === list.length - 1 ) {
      return true;
    }

    return isWithinDistanceRange(
      level,
      list[ index + 1 ],
      MIN_DISTANCE,
      MAX_DISTANCE,
    );
  } );

export default areAllDistanceWithinRange;