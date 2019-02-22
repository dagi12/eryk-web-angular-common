export interface ValueLabelPair<T> {
  label: string;
  value: T;
}

export type CellRenderer = (_: string) => string;

export const cellRendererLabelPairs = (pairs: ValueLabelPair<string>[]): CellRenderer => input => {
  if (!!input) {
    return pairs.find(
      value => {
        return value.value === input;
      }).label;
  }
  return null;
};
