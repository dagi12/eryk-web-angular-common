import {BSModalContext} from 'ngx-modialog/plugins/bootstrap';
import {MODE} from '../../../util/const';


export class CrudTableModalData extends BSModalContext {

  constructor(public currentItem = {},
              public items: any[] = [],
              public mode: number = MODE.PREVIEW,
              public helpContent: string = '') {
    super();
    this.isBlocking = false;
    this.showClose = true;
    this.size = 'lg';
  }

}
