export interface MyColumn {
  field: string;
  header: string;
  isEnabledLabel?: boolean;
  filter?: boolean;
  date?: boolean;
  cellRenderer?: (status: any) => string;
  styleClass?: string;
}
