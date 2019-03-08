import {Observable} from 'rxjs/Observable';
import {HttpErrorResponse} from '@angular/common/http';

export function handleError(response: HttpErrorResponse) {
  let errMsg: string;
  const body = response.error || '';
  const err = body.error || JSON.stringify(body);
  errMsg = `${response.status} - ${response.statusText || ''} ${err}`;
  console.error(errMsg);
  return Observable.throw(errMsg);
}

type ErrorCallback = (msg: string) => void;

export const handleJsonError = (callback: ErrorCallback) => (response: HttpErrorResponse) => {
  let errMsg: string;
  let body: any;
  try {
    body = response.error;
  } catch (e) {
    body = '';
  }
  const err = body.error || JSON.stringify(body);
  if (err) {
    callback(err);
  } else {
    errMsg = `${response.status} - ${response.statusText || ''}`;
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
};
