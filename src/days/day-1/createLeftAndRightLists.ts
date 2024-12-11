import {type FilePath, readFileLineByLine} from '#utils/readFileLineByLine.ts';

const createLeftAndRightLists = async (filePath: FilePath) => {
  const leftList = []
  const rightList = []

  await readFileLineByLine(filePath, (line) => {
    const lineArr = line.split('   ')

    leftList.push(lineArr[0])
    rightList.push(lineArr[1])
  });

  return [leftList, rightList];
}

export default createLeftAndRightLists;