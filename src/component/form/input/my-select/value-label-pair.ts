import {TranslateService} from '@ngx-translate/core';

export interface ValueLabelPair<T> {
  label: string;
  value: T;
}

export type CellRenderer = (_: string) => string;

export const valueLabelTranslate = (translateService: TranslateService, values: string[],
                                    prefix: string = ''): ValueLabelPair<string>[] => values.map(value => {
  return {
    value,
    label: translateService.instant(prefix + value)
  };
});
