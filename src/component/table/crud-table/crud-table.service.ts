import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Observable} from 'rxjs/Observable';
import {ApiConfigService} from '../../../service/api-config.service';
import {LazyLoadEventExt} from '../base-table/lazyloadeventext';
import {Response} from '@angular/http';

// TODO use factory, make reusable for every type
@Injectable()
export class CrudTableService {

  constructor(private http: AuthHttp, private acs: ApiConfigService) {
  }

  public update(item, url: string): Observable<any> {
    return this.http
      .put(this.acs.simpleUrl(url), item)
      .map(res => res.json());
  }

  public add<T>(item: T, url: string): Observable<Response> {
    return this.http
      .post(this.acs.simpleUrl(url), item);
  }

  public remove(id: number, url: string): Observable<any> {
    return this.http
      .delete(this.acs.simpleUrl(url + '/' + id));
  }

  public all<T>(getAllUrl: string): Observable<T[]> {
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
