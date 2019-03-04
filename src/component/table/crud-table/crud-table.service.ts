import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {ApiConfigService} from '../../../service/api-config.service';
import {CrudTableApi} from './crud-table-api';

@Injectable()
export class CrudTableService {

  constructor(private http: AuthHttp, private acs: ApiConfigService) {
  }

  buildApi(url: string) {
    const s = this.acs.simpleUrl(url);
    return new CrudTableApi(this.http, s);
  }

}
