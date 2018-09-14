import {Injectable} from '@angular/core';
import {Modal} from 'ngx-modialog/plugins/bootstrap';
import {overlayConfigFactory} from 'ngx-modialog';
import {EmptyModalComponent, EmptyModalData} from '../ui/empty-modal/empty-modal.component';

type ModalCallback = (result: boolean) => void;

@Injectable()
export class CommonModalService {

  constructor(public modal: Modal) {
  }

  empty(message: string, closeHolder: Object) {
    this.modal.open(EmptyModalComponent, overlayConfigFactory({
      message: message,
      closeHolder: closeHolder
    }, EmptyModalData));
  }

  confirm(message: string, callback: ModalCallback) {
    this.modal.confirm()
      .size('sm')
      .isBlocking(true)
      .body(message)
      .okBtn('Tak')
      .okBtnClass('btn btn-primary confirm-btn col-sm-3')
      .cancelBtn('Nie')
      .cancelBtnClass('btn btn-default confirm-btn col-sm-3')
      .open()
      .then(
        (dialog) => {
          dialog.result.then((result: boolean) => callback(result), () => {
            }
          );
        });
  }

  info(message: string, title = 'Sukces') {
    this.modal.alert()
      .isBlocking(false)
      .showClose(true)
      .keyboard(27)
      .title(title)
      .body(message)
      .okBtn('Ok')
      .okBtnClass('btn btn-primary col-xs-12 col-sm-3 pull-right')
      .open().then();
  }

  error(message: string) {
    this.modal.alert()
      .isBlocking(true)
      .showClose(false)
      .title('Błąd')
      .body(message)
      .okBtnClass('btn btn-danger col-xs-12 col-sm-3 pull-right')
      .open().then();
  }

}
