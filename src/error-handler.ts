import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {MyToastService} from './service/my-toast.service';
import {environment} from '../../../environments/environment';

export const handleToastError = (myToastService: MyToastService) => (err: Response | any): Observable<any> => {
  if (!(err instanceof Response)) {
    throw err;
  }
  const msg = handelNetworkErrorMsg(err);
  myToastService.error(msg);
  return Observable.throw(msg);
};

export const handelNetworkErrorMsg = (response: Response, msg = null) => {
  let data;
  try {
    data = response.json();
  } catch (err) {
    if (!environment.production) {
      console.log(err);
    }
    data = null;
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


export function handleError(error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}

type ErrorCallback = (msg: string) => void;

export const handleJsonError = (callback: ErrorCallback) => {
  return (error: Response | any) => {
    let errMsg: string;
    if (error instanceof Response) {
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
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  };
};
