import {CellRenderer} from '../../form/input/my-select/value-label-pair';

export interface MyColumn {
  field: string;
  header: string;
  isEnabledLabel?: boolean;
  filter?: boolean;
  hideOnMobile?: boolean;
  date?: boolean;
  cellRenderer?: CellRenderer;
  styleClass?: string;
}
