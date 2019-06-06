import {Component, Input, OnInit} from '@angular/core';
import {LazyLoadEventExt} from '../base-table/lazyloadeventext';
import {Modal, overlayConfigFactory} from 'ngx-modialog';
import {CrudTableModalData} from '../crud-table/crud-table-modal-data';
import {MODE} from '../../../util/const';
import {stubFun} from '../../../util/utils';
import {CrudTableService} from '../crud-table/crud-table.service';
import {BaseTableComponent} from '../base-table/base-table.component';
import {shallowClone} from '../../../util/JsHelper';
import {deleteByItem} from '../../../util/array.helper';

@Component({
  selector: 'app-crud-table-virtual',
  templateUrl: './crud-table-virtual.component.html',
  styles: []
})
export class CrudTableVirtualComponent extends BaseTableComponent implements OnInit {

  @Input() createLabel: string;
  @Input() addContainerContent;
  @Input() newItem: any;
  @Input() wrapperStyle: string;

  constructor(private modal: Modal, crudTableService: CrudTableService) {
    super(crudTableService);
  }

  loadLazy(options: LazyLoadEventExt, resetPaging: boolean = false): void {
    // not needed
  }

  ngOnInit() {
    // not needed
  }

  onCreate() {
    this.modal.open(
      this.addContainerContent,
      overlayConfigFactory(new CrudTableModalData(shallowClone(this.newItem), this.items, MODE.CREATE), CrudTableModalData)
    ).result.then(result => {
      if (result) {
        this.items = [...this.items, result];
      }
    }, stubFun);
  }

  onEdit(currentItem) {
    this.modal.open(
      this.addContainerContent,
      overlayConfigFactory(new CrudTableModalData(currentItem.data, this.items, MODE.EDIT), CrudTableModalData)
    ).result.then(result => {
      if (result === false) {
        this.items = deleteByItem(this.items, currentItem.data);
      }
    }, stubFun);
  }

}
