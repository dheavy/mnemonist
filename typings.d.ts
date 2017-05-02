declare namespace mnemonist.Set {
  export function intersection(...sets: Set[]): Set;
  export function union(...sets: Set[]): Set;
  export function difference(a: Set, b: Set): Set;
  export function symmetricDifference(a: Set, b: Set): Set;
  export function isSubset(a: Set, b: Set): boolean;
  export function isSuperset(a: Set, b: Set): boolean;
  export function add(a: Set, b: Set): void;
  export function substract(a: Set, b: Set): void;
  export function intersect(a: Set, b: Set): void;
  export function disjunct(a: Set, b: Set): void;
}