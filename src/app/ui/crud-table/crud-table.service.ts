import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Response} from '@angular/http';
import {ApiConfigService} from '../../api-config/api-config.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class CrudTableService {

  constructor(private http: AuthHttp, private acs: ApiConfigService) {
  }

  public update(item, url: string): Observable<any> {
    return this.http
      .put(this.acs.simpleUrl(url), item)
      .map((response: Response) => response.json());
  }

  public add<T>(item: T, url: string): Observable<T> {
    return this.http
      .post(this.acs.simpleUrl(url), item)
      .map(res => res.json());
  }

  public delete(id: number, url: string): Observable<any> {
    return this.http
      .delete(this.acs.simpleUrl(url + '/' + id))
  }

  public all<T>(getAllUrl: string, dateRange: any = null): Observable<T[]> {
    if (dateRange) {
      const params = new URLSearchParams();
      params.set('dateFrom', dateRange.dateFrom);
      params.set('dateTo', dateRange.dateTo);
      return this.http
        .get(this.acs.simpleUrl(getAllUrl) + '?' + params.toString())
        .map(res => res.json());
    }
    return this.http
      .get(this.acs.simpleUrl(getAllUrl))
      .map(res => res.json());
  }


}
