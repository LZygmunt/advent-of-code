import {calculateDistance} from './calculateDistance';
import { leftListExample, rightListExample } from './example-input';

it('should return 11 for examples input', async () => {
  expect(calculateDistance(leftListExample, rightListExample)).toBe(11)
})