import {Component, Input, OnInit} from '@angular/core';

import {Modal, overlayConfigFactory} from 'ngx-modialog';
import {CrudTableModalData} from './crud-table-modal-data';
import {CrudTableService} from './crud-table.service';
import {BaseTableComponent} from '../../component/base-table/base-table.component';
import {stubFun} from '../../util/utils';
import {MODE} from '../../util/const';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent extends BaseTableComponent implements OnInit {

  @Input() createLabel: string;
  @Input() disableKey?: string;

  @Input() idKey: string;
  @Input() addContainerContent;
  @Input() editContainerContent = this.addContainerContent;

  rowStyleClass: (rowData: any) => string = null;

  constructor(private modal: Modal, crudTableService: CrudTableService) {
    super(crudTableService);
    this.lazy = true;
  }

  ngOnInit(): void {
    if (this.disableKey) {
      this.rowStyleClass = (rowData) => {
        return rowData[this.disableKey] ? '' : 'disabled-row';
      };
    }
    super.ngOnInit();
  }

  onCreate(currentItem) {
    this.modal.open(
      this.addContainerContent,
      overlayConfigFactory(new CrudTableModalData(currentItem, this.items, MODE.CREATE), CrudTableModalData)
    ).then(dialog => dialog.result.then(result => {
      if (result) {
        this.refreshTable();
      }
    }, stubFun), stubFun);
  }

  onEdit(currentItem) {
    this.modal.open(
      this.editContainerContent,
      overlayConfigFactory(new CrudTableModalData(currentItem.data, this.items, MODE.EDIT), CrudTableModalData)
    ).then(dialog => dialog.result.then(result => {
      if (result) {
        this.refreshTable();
      }
    }, stubFun), stubFun);
  }

}

