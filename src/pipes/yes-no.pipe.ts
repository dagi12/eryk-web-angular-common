import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'yesNo'
})
export class YesNoPipe implements PipeTransform {
  constructor(private translateService: TranslateService) { }

  transform(value: any, args?: any): any {
    return value ? this.translateService.instant('YES') : this.translateService.instant('NO');
  }
}
