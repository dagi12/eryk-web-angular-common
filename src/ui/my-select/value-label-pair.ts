export interface ValueLabelPair<T> {
  label: string;
  value: T;
}

export type CellRenderer = (_: string) => string;

export const cellRendererLabelPairs = (pairs: ValueLabelPair<string>[]): CellRenderer => input => pairs.find(
  value => value.value === input).label;
