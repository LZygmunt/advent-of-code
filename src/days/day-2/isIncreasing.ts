import type { OrderChecker } from './types.ts';

const isIncreasing: OrderChecker = ( list ) => list.every( ( level, index ) => {
  if ( index === list.length - 1 ) {
    return true;
  }

  return level < list[ index + 1 ];
} );

export default isIncreasing;