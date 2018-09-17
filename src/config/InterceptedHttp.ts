/**
 * Created by Eryk Mariankowski on 20.03.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {handleToastError} from '../error-handler';
import {MyToastService} from '../service/my-toast.service';


@Injectable()
export class InterceptedHttp extends Http {

  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private myToastService: MyToastService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super
      .request(url, options)
      .catch(handleToastError(this.myToastService));
  }

}
