import {Injectable} from '@angular/core';

import {ApiConfigService} from '../../../service/api-config.service';
import {CrudTableApi} from './crud-table-api';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CrudTableService {

  constructor(private http: HttpClient, private acs: ApiConfigService) {
  }

  buildApi(url: string) {
    const s = this.acs.simpleUrl(url);
    return new CrudTableApi(this.http, s);
  }

}
