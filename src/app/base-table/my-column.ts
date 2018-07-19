import {CellRenderer} from '../ui/my-select/value-label-pair';

export interface MyColumn {
  field: string;
  header: string;
  isEnabledLabel?: boolean;
  filter?: boolean;
  date?: boolean;
  cellRenderer?: CellRenderer;
  styleClass?: string;
}
