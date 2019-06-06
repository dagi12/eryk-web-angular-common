import {DialogRef, ModalComponent} from 'ngx-modialog';
import {BSModalContext} from 'ngx-modialog/plugins/bootstrap';

export abstract class SimpleModalComponent<T extends BSModalContext> implements ModalComponent<T> {

  static readonly ESC_KEY_VALUE = 27;

  protected constructor(public dialog: DialogRef<T>, large?: boolean, dialogClass?: string) {
    dialog.context.isBlocking = false;
    dialog.context.showClose = true;
    if (large) {
      dialog.context.size = 'lg';
      dialog.context.dialogClass = 'modal-dialog ' + dialogClass;
    }
  }

  apply() {
    this.dialog.close(true);
  }

  close() {
    this.dialog.dismiss();
  }

  // noinspection JSUnusedGlobalSymbols
  onKeyUp(value) {
    if (value === SimpleModalComponent.ESC_KEY_VALUE) {
      this.close();
    }
  }

}
