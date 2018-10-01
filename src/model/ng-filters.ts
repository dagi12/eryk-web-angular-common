import {FilterMetadata} from 'primeng/primeng';

export interface NgFilters {
  [_: string]: FilterMetadataExt;
}

export interface FilterMetadataExt extends FilterMetadata {
  enumType?: boolean;
  filterType: FilterType;
}

export type FilterType = 'number' | 'text' | 'date' | 'set' | 'code';
