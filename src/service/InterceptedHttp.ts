/**
 * Created by Eryk Mariankowski on 20.03.2017.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {ToastErrorHandler} from '../handler/toast-error-handler';
import {MyToastService} from './my-toast.service';


@Injectable()
export class InterceptedHttp implements HttpInterceptor {

  constructor(private myToastService: MyToastService, private errorHandler: ToastErrorHandler) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).do(null, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        this.errorHandler.handleError(err);
      }
    });
  }
}
