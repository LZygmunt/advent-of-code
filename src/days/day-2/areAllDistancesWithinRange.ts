import type { List } from './types.ts';

const MIN_DISTANCE = 2
const MAX_DISTANCE = 3

type AreAllDistanceWithinRange = (input: List) => true

const areAllDistanceWithinRange: AreAllDistanceWithinRange = () => true

export default areAllDistanceWithinRange