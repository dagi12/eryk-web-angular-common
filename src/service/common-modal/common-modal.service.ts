import {Injectable, Type} from '@angular/core';
import {Modal} from 'ngx-modialog/plugins/bootstrap';
import {DialogRef, overlayConfigFactory} from 'ngx-modialog';
import {EmptyModalComponent, EmptyModalData} from '../../component/modal/empty-modal/empty-modal.component';
import {CrudTableModalData} from '../../component/table/crud-table/crud-table-modal-data';
import {SimpleModalComponent} from '../../component/modal/simple-modal/simple-modal.component';

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

  simpleModal<T extends SimpleModalComponent<any>>(type: Type<T>, item: {} = {}): DialogRef<string> {
    return this.modal.open(type,
      overlayConfigFactory(new CrudTableModalData(item), CrudTableModalData)
    );
  }

  confirm(message: string): DialogRef<any> {
    return this.modal.confirm()
      .size('sm')
      .isBlocking(true)
      .body(message)
      .okBtn('Tak')
      .okBtnClass('btn btn-primary confirm-btn col-sm-3')
      .cancelBtn('Nie')
      .cancelBtnClass('btn btn-default confirm-btn col-sm-3')
      .open();
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
      .open();
  }

  error(message: string, blocking = false) {
    const okBtnClasses = 'btn btn-danger col-xs-12 col-sm-3 pull-right' + (blocking ? ' disabled' : '');
    this.modal.alert()
      .isBlocking(true)
      .showClose(false)
      .title('Błąd')
      .body(message)
      .okBtnClass(okBtnClasses)
      .open();
  }

}
