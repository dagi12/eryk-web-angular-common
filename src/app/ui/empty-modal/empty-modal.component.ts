import {Component, OnInit} from '@angular/core';
import {BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {DialogRef, ModalComponent} from 'angular2-modal';


export class EmptyModalData extends BSModalContext {
  constructor(public closeHolder: any,
              public message: string) {
    super();
  }
}

@Component({
  selector: 'app-empty-modal',
  templateUrl: './empty-modal.component.html'
})
export class EmptyModalComponent implements ModalComponent<EmptyModalData>, OnInit {

  message: string;

  constructor(public dialog: DialogRef<EmptyModalData>) {
    this.dialog.context.isBlocking = true;
    this.dialog.context.showClose = false;
    this.message = this.dialog.context.message;
    this.dialog.context.closeHolder.close = () => {
      this.dialog.dismiss();
    };
  }

  ngOnInit() {
  }

}
