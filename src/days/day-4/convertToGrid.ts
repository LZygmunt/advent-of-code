type ConvertToGrid = ( input: string ) => string[][];
const convertToGrid: ConvertToGrid = ( input ) => input.split( '\n' )
  .map( ( line ) => line.split( '' ) );

export default convertToGrid;
