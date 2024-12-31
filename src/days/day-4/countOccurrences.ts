type CountOccurrences = ( linesToCrossOut: string[], wordToMatch: string ) => number
const countOccurrences: CountOccurrences = ( linesToCrossOut, wordToMatch ) => {
  // ToDo: This collect only first occurrence in line
  const matcher = new RegExp( `${wordToMatch}|${wordToMatch.split('').reverse().join('')}`, 'g' );
  const filteredLines = linesToCrossOut.filter( ( line ) => line.length >= wordToMatch.length );

  return filteredLines
    .reduce(
      ( occurrences, lineToCrossOut ) => occurrences + (
        lineToCrossOut.match( matcher )?.length ?? 0
      ),
      0,
    );
};

export default countOccurrences;
