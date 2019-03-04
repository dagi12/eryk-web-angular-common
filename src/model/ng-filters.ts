import {FilterMetadata} from 'primeng/primeng';

export interface NgFilters {
  [_: string]: FilterMetadataExt;
}

export interface FilterMetadataExt extends FilterMetadata {
  enumType?: boolean;
  // 1. should be required (even if columnMap defines type)
  // 2. it isn't required - BaseTableComponent.prepareRequestParameters adds filterType dynamically
  filterType?: FilterType;
}

export type FilterType = 'number' | 'text' | 'date' | 'set' | 'code';
