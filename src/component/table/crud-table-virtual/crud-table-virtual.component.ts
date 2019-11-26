import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Modal, overlayConfigFactory } from 'ngx-modialog';
import { deleteByItem } from '../../../util/array.helper';
import { MODE } from '../../../util/const';
import { shallowClone } from '../../../util/JsHelper';
import { stubFun } from '../../../util/utils';
import { BaseTableComponent } from '../base-table/base-table.component';
import { LazyLoadEventExt } from '../base-table/lazyloadeventext';
import { CrudTableModalData } from '../crud-table/crud-table-modal-data';
import { CrudTableService } from '../crud-table/crud-table.service';

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

  constructor(private modal: Modal, crudTableService: CrudTableService, translateService: TranslateService) {
    super(crudTableService, translateService);
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
