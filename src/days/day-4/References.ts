export type ReferenceBase = `${ number }-${ number }`
export type Tag = string
export type ReferenceWithTag = `${ ReferenceBase }[${ Tag }]`
export type Reference = ReferenceBase | ReferenceWithTag
export type References = Reference[]
export type CreateRef = ( firstPos: number, secondPos: number, tag?: Tag ) => Reference

export class Refs {
  constructor(arrayInput: any[], tag?: Tag ) {
    this.#allReferences = Array.from(arrayInput, (_, id): Reference => this.#createRef(0, id, this.#tag = tag) )
  }
  #allReferences: References;
  #tag?: Tag;

  #createRef: CreateRef = ( firstPos, secondPos, tag = '' ) => tag
    ? `${ firstPos }-${ secondPos }[${ tag }]`
    : `${ firstPos }-${ secondPos }`;

  moveForwardReferences = (): Refs => {
    const firstReference = this.#allReferences.at( 0 );
    const [ previousIteration ] = firstReference.split( '-' );
    this.#allReferences = [ this.#createRef( Number( previousIteration ) + 1, 0, this.#tag ), ...this.#allReferences ];
    delete this.#allReferences[ this.#allReferences.length - 1 ];

    return this;
  }

  moveBackwardReferences = (): Refs => {
    const lastReference = this.#allReferences.at( -1 );
    const [ previousIteration ] = lastReference.split( '-' );
    const [ firstReference, ...newReferences ]: References = this.#allReferences;
    this.#allReferences = newReferences
    this.#allReferences.push( this.#createRef( Number( previousIteration ) + 1, 0, this.#tag ) );

    return this;
  }

  at = ( index: number ) => this.#allReferences.at( index )
}
