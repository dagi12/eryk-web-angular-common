import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {ApiConfigService} from '../../service/api-config.service';
import {Observable} from 'rxjs/Observable';
import {LazyLoadEventExt} from '../../component/base-table/lazyloadeventext';


@Injectable()
export class CrudTableService {

  constructor(private http: AuthHttp, private acs: ApiConfigService) {
  }

  public update(item, url: string): Observable<any> {
    return this.http
      .put(this.acs.simpleUrl(url), item)
      .map(res => res.json());
  }

  public add<T>(item: T, url: string): Observable<T> {
    return this.http
      .post(this.acs.simpleUrl(url), item)
      .map(res => res.json());
  }

  public remove(id: number, url: string): Observable<any> {
    return this.http
      .delete(this.acs.simpleUrl(url + '/' + id));
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

  lazy<T>(url: string, options: LazyLoadEventExt): Observable<T[]> {
    return this.http
      .post(this.acs.simpleUrl(url), options)
      .map(res => res.json());
  }

}
