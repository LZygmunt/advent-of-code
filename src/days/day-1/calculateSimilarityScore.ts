interface Occurrence {
  leftOccurrences: number
  rightOccurrences: number
}

const calculateSimilarityScore = (leftList: number[], rightList: number[]) => {
  const occurrences = new Map<number, Occurrence>();

  leftList.forEach((locationId) => {
    if (occurrences.has(locationId)) {
      const occurrence = occurrences.get(locationId)
      occurrence.leftOccurrences++
      occurrences.set(locationId, occurrence);

      return
    }

    occurrences.set(locationId, { leftOccurrences: 1, rightOccurrences: rightList.filter((lId) => lId === locationId).length });
  })

  const occurrencesIterator = occurrences[Symbol.iterator]()
  return occurrencesIterator
    .reduce((acc, [locationId, occurrence]) => (locationId * occurrence.rightOccurrences * occurrence.leftOccurrences) + acc, 0);
}

export default calculateSimilarityScore;