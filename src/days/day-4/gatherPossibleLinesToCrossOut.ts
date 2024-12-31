import { Grid } from './convertToGrid.ts';
import { Reference, Refs } from './References.ts';

type GatherPossibleLinesToCrossOut = (crosswordGrid: Grid) => string[];

const gatherPossibleLinesToCrossOut: GatherPossibleLinesToCrossOut = ( crosswordGrid ) => {
  const diagonal = new Map<Reference, string>();
  const horizontal = []
  const vertical = []
  let forwardReferences = new Refs(crosswordGrid.at(0), 'f')
  let backwardReferences = new Refs(crosswordGrid.at(0), 'b')
  let diagonalForwardRef: Reference = '' as Reference
  let diagonalBackwardRef: Reference = '' as Reference
  for ( let row = 0; row < crosswordGrid.length; row++ ) {
    for ( let column = 0; column < crosswordGrid.at( row ).length; column++ ) {
      vertical[column] ??= ''
      vertical[column] += crosswordGrid.at( row ).at( column )

      diagonalForwardRef = forwardReferences.at(column)
      diagonalBackwardRef = backwardReferences.at(column)

      diagonal.set(diagonalForwardRef, diagonal.get(diagonalForwardRef)
        ? diagonal.get(diagonalForwardRef) + crosswordGrid.at( row ).at( column )
        : crosswordGrid.at( row ).at( column ))

      diagonal.set(diagonalBackwardRef, diagonal.get(diagonalBackwardRef)
        ? diagonal.get(diagonalBackwardRef) + crosswordGrid.at( row ).at( column )
        : crosswordGrid.at( row ).at( column ))
    }
    forwardReferences.moveForwardReferences()
    backwardReferences.moveBackwardReferences()
    horizontal.push( crosswordGrid.at( row ).join('') );
  }

  return [
    ...horizontal,
    ...vertical,
    ...diagonal.values(),
  ];
};

export default gatherPossibleLinesToCrossOut;
