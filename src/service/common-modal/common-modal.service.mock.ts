import {Injectable} from '@angular/core';

type ModalCallback = (result: boolean) => void;

@Injectable()
export class CommonModalServiceMock {

  constructor() {
  }

  confirm(message: string, callback: ModalCallback) {
  }

  info(title: string, message: string) {

  }

  error(message: string) {

  }

}
