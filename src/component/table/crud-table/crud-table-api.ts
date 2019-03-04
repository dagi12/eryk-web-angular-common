import {Observable} from 'rxjs/Observable';
import {LazyLoadEventExt} from '../base-table/lazyloadeventext';
import {AuthHttp} from 'angular2-jwt';

export class CrudTableApi {
  private urlWithTable: string;

  // row params means pagination and filtering
  constructor(private http: AuthHttp, private url: string) {
    this.urlWithTable = this.url + '/table2';
  }

  update(item, id): Observable<any> {
    return this.http
      .put(this.url + '/' + id, item)
      .map(res => res.json());
  }

  add<T>(item: T): Observable<T> {
    return this.http
      .post(this.url, item)
      .map(res => res.json());
  }

  remove(id: number): Observable<any> {
    return this.http
      .delete(this.url + '/' + id);
  }

  lazy<T>(options: LazyLoadEventExt): Observable<T[]> {
    return this.http
      .post(this.urlWithTable, options)
      .map(res => res.json());
  }

  all<T>(): Observable<T[]> {
    return this.http
      .get(this.url)
      .map(res => res.json());
  }

}
