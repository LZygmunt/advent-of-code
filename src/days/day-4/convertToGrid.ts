export type Grid = string[][];
type ConvertToGrid = ( input: string ) => Grid;
const convertToGrid: ConvertToGrid = ( input ) => input.split( '\n' )
  .map( ( line ) => line.split( '' ) );

export default convertToGrid;
