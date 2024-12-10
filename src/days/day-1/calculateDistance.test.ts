import {calculateDistance} from './calculateDistance.js';

it('should return 11 for examples input', () => {
  const leftListExample = [3,4,2,1,3,3]
  const rightListExample = [4,3,5,3,9,3]
  expect(calculateDistance(leftListExample, rightListExample)).toBe(11)
})