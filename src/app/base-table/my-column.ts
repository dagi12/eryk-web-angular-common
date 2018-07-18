export interface MyColumn {
  field: string;
  header: string;
  isEnabledLabel?: boolean;
  date?: boolean;
  cellRenderer?: (status: any) => string;
}
