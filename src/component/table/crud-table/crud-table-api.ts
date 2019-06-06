import {Observable} from 'rxjs/Observable';
import {LazyLoadEventExt} from '../base-table/lazyloadeventext';
import {HttpClient} from '@angular/common/http';


export class CrudTableApi {
  private readonly urlWithTable: string;

  // row params means pagination and filtering
  constructor(private http: HttpClient, private url: string) {
    this.urlWithTable = this.url + '/table2';
  }

  update(item, id): Observable<any> {
    return this.http
      .put(this.url + '/' + id, item);
  }

  add<T>(item: T, url: string = this.url): Observable<T> {
    return this.http
      .post<T>(url, item);
  }

  delete(id: number): Observable<any> {
    return this.http
      .delete(this.url + '/' + id);
  }

  lazy<T>(options: LazyLoadEventExt): Observable<T[]> {
    return this.http
      .post<T[]>(this.urlWithTable, options);
  }

  all<T>(): Observable<T[]> {
    return this.http
      .get<T[]>(this.url);
  }

}
