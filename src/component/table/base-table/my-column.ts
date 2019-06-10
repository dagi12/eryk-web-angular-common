import {CellRenderer} from '../../form/input/my-select/value-label-pair';
import {FilterType} from '../../../model/ng-filters';

export interface MyColumn {
  field: string;
  header: string;
  isEnabledLabel?: boolean;
  filter?: boolean;
  hideOnMobile?: boolean;
  date?: boolean;
  cellRenderer?: CellRenderer;
  styleClass?: string;
  filterType?: FilterType;
  translated?: string;
}
