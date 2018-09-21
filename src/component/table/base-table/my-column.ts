import {CellRenderer} from '../../form/input/my-select/value-label-pair';
import {FilterType} from '../../../../../sample';

export interface MyColumn {
  field: string;
  header: string;
  isEnabledLabel?: boolean;
  filter?: boolean;
  filterType?: FilterType;
  date?: boolean;
  cellRenderer?: CellRenderer;
  styleClass?: string;
}
