import {DialogRef, ModalComponent} from 'angular2-modal';
import {BSModalContext} from 'angular2-modal/plugins/bootstrap';

export abstract class SimpleModalComponent<T extends BSModalContext> implements ModalComponent<T> {

  private static readonly ESC_KEY_VALUE = 27;

  constructor(public dialog: DialogRef<T>, large?: boolean, dialogClass?: string) {
    dialog.context.isBlocking = false;
    dialog.context.showClose = true;
    if (large) {
      dialog.context.size = 'lg';
      dialog.context.dialogClass = 'modal-dialog ' + dialogClass;
    }
  }

  abstract apply();

  public close() {
    this.dialog.dismiss();
  }

  onKeyUp(value) {
    if (value === SimpleModalComponent.ESC_KEY_VALUE) {
      this.dialog.dismiss();
    }
  }

}
