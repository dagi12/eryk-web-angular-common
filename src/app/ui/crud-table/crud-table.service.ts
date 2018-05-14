import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Response} from '@angular/http';
import {ApiConfigurationService} from '../../api-config/api-configuration.service';
import {Observable} from 'rxjs/Observable';
import {handleError} from '../../app.helper';


@Injectable()
export class CrudTableService {

  constructor(private http: AuthHttp, private acs: ApiConfigurationService) {
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
    return this.http.delete(this.acs.simpleUrl(url + '/' + id))
      .catch(handleError)
      .map((response: Response) => response.json());
  }

  public all<T>(getAllUrl: string): Observable<T[]> {
    return this.http
      .get(this.acs.simpleUrl(getAllUrl))
      .map(res => res.json());
  }


}
