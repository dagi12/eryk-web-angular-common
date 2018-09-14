export interface ValueLabelPair<T> {
  label: string;
  value: T;
}

export type CellRenderer = (_: string) => string;

export function cellRendererLabelPairs(pairs: ValueLabelPair<string>[]): CellRenderer {
  return (input: string) => pairs.find(value => value.value === input).label;
}
