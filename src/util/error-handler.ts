import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {MyToastService} from '../service/my-toast.service';
import {environment} from '../../../../environments/environment';

export const handleToastError = (myToastService: MyToastService) => (err: Response): Observable<any> => {
  const msg = handelNetworkErrorMsg(err);
  myToastService.error(msg);
  return Observable.throw(msg);
};

export const handelNetworkErrorMsg = (response: Response, msg = null) => {
  let data;
  try {
    data = response.json();
  } catch (err) {
    const body = (<any>response)._body;
    if (body && typeof body === 'string') {
      data = {errorMessage: body};
    } else if (!environment.production) {
      console.log(err);
      data = null;
    }
  }
  if (data && !data.done && data.errorMessage) {
    return data.errorMessage;
  } else if (msg) {
    return msg;
  } else if (data && data.error && data.message) {
    return data.error + ' ' + data.message;
  }
  return 'Brak połączenia z serwerem';
};


export function handleError(error: Response) {
  let errMsg: string;
  const body = error.json() || '';
  const err = body.error || JSON.stringify(body);
  errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  console.error(errMsg);
  return Observable.throw(errMsg);
}

type ErrorCallback = (msg: string) => void;

export const handleJsonError = (callback: ErrorCallback) => (error: Response) => {
  let errMsg: string;
  let body: any;
  try {
    body = error.json();
  } catch (e) {
    body = '';
  }
  const err = body.error || JSON.stringify(body);
  if (err) {
    callback(err);
  } else {
    errMsg = `${error.status} - ${error.statusText || ''}`;
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
};
