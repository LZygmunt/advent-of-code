import { open } from 'node:fs/promises';

export type ReadFileExecutor = ( line: string ) => void;
export type FilePath = string;

export const readFileLineByLine = async ( filePath: FilePath, executor: ReadFileExecutor ) => {
  const file = await open(  filePath  );

  for await ( const line of file.readLines() ) {
    executor( line );
  }
};