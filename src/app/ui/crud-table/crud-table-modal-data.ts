import {BSModalContext} from 'ngx-modialog/plugins/bootstrap';

export class CrudTableModalData extends BSModalContext {

  constructor(public currentItem = {},
              public items: any[] = []) {
    super();
    this.isBlocking = false;
    this.showClose = true;
  }

}
