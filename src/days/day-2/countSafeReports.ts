import type { List } from './types.ts';

type CountSafeReports = ( reports: List[] ) => number;
const countSafeReports: CountSafeReports = ( reports ) => 0;

export default countSafeReports;