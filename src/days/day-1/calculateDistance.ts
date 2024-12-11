export const calculateDistance = (leftList: number[], rightList: number[]) => {
  const sortedLeftList = leftList.toSorted((a, b) => a - b)
  const sortedRightList = rightList.toSorted((a, b) => a - b)

  return sortedLeftList
    .reduce((acc, cur, ind) => Math.abs(cur - sortedRightList[ind]) + acc, 0);
}

