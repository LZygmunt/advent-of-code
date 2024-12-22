const DO_INSTRUCTION = 'do()';
const DONT_INSTRUCTION = 'don\'t()';

type FilterMemoryFromDisabledInstructions = ( corruptedMemory: string ) => string

const filterMemoryFromDisabledInstructions: FilterMemoryFromDisabledInstructions = ( corruptedMemory ) => {
  let filteredMemory = '';

  let temp = '';
  let charId = 0;
  let disabled = false;

  while ( corruptedMemory.length > charId ) {
    temp = corruptedMemory.substring( charId );
    if ( temp.startsWith( DONT_INSTRUCTION ) ) {
      disabled = true;
      charId += DONT_INSTRUCTION.length;
    } else if ( disabled && temp.startsWith( DO_INSTRUCTION ) ) {
      disabled = false;
      charId += DO_INSTRUCTION.length;
    } else if ( !disabled ) {
      filteredMemory += corruptedMemory[ charId ];
      charId++;
    } else {
      charId++;
    }
  }

  return filteredMemory;
};

export default filterMemoryFromDisabledInstructions;
