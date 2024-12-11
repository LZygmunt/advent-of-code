import calculateSimilarityScore from './calculateSimilarityScore.ts';
import { leftListExample, rightListExample } from './example-input.ts';

it('should return 31 for example list', async () => {
  expect(calculateSimilarityScore(leftListExample, rightListExample)).toBe(31)
})