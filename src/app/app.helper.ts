import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';


export function cloneObject<T>(clonedObject: T): T {
  const newObject = Object.assign({}, clonedObject);
  for (const prop in clonedObject) {
    if (clonedObject.hasOwnProperty(prop)) {
      newObject[prop] = clonedObject[prop];
    }
  }
  return newObject;
}

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

export function dateStr(date: Date): string {

  function addZero(item) {
    if (item < 10) {
      return '0' + item;
    }
    return item;
  }

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return addZero(day) + '.' + addZero(month) + '.' + year + ' ' + addZero(hours) + ':' + addZero(minutes);
}
