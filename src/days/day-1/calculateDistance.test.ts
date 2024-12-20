import {calculateDistance} from './calculateDistance.ts';
import { leftListExample, rightListExample } from './example-input.ts';

it('should return 11 for examples input', async () => {
  expect(calculateDistance(leftListExample, rightListExample)).toBe(11)
})