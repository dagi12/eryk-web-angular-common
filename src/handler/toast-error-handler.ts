import {ErrorHandler, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MyToastService} from '../service/my-toast.service';
import {HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

export const handelNetworkErrorMsg = (response: HttpErrorResponse, msg = null) => {
  let data;
  try {
    data = response.error;
  } catch (err) {
    const body = (<any>response)._body;
    if (body && typeof body === 'string') {
      data = {errorMessage: body};
    } else if (!environment.production) {
      console.log(err);
      data = null;
    }
  }
  // general response
  if (data && !data.success && data.errorMessage) {
    return data.errorMessage;
    // provided error message
  } else if (msg) {
    return msg;
    // spring error
  } else if (data && data.message) {
    return data.message;
  }
  // response is not json
  return 'Brak połączenia z serwerem';
};

@Injectable()
export class ToastErrorHandler implements ErrorHandler {

  constructor(private myToastService: MyToastService) {
  }

  handleError(error: HttpErrorResponse) {
    const msg = handelNetworkErrorMsg(error);
    this.myToastService.error(msg);
    // 1. need to throw err instead of message to catch network error like (invalid_token)
    // 2. what? why?
    // 3. to pass along ErrorObservable
    return Observable.throw(error);
  }

}
