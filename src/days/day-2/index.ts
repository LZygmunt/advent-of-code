import path from 'node:path';
import { readFileLineByLine } from '#utils/readFileLineByLine.ts';
import countSafeReports from './countSafeReports.ts';

const reports = [];
await readFileLineByLine(
  path.join( import.meta.dirname, './input' ),
  ( line ) => {
    const report = line.split( ' ' ).map( Number );

    reports.push( report );
  },
);

const totalSafeReports = countSafeReports( reports );//287
console.log( totalSafeReports );