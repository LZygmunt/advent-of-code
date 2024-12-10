import {open} from 'node:fs/promises';
import path from 'node:path';
import {calculateDistance} from './calculateDistance.js';

const file = await open(path.join(import.meta.dirname, './input'))

const leftList = []
const rightList = []

for await (const line of file.readLines()) {
  const lineArr = line.split('   ')

  leftList.push(lineArr[0])
  rightList.push(lineArr[1])
}

const totalDistance = calculateDistance(leftList, rightList) //1666427

console.log(totalDistance)