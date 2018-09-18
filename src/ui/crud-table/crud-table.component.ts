import {Component, Input, OnInit} from '@angular/core';

import {Modal, overlayConfigFactory} from 'ngx-modialog';
import {CrudTableModalData} from './crud-table-modal-data';
import {CrudTableService} from './crud-table.service';
import {EditModalResult} from './edit-modal-return-type';
import {BaseTableComponent} from '../../component/base-table/base-table.component';
import {stubFun} from '../../util/utils';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent extends BaseTableComponent implements OnInit {

  @Input() helpContent: string;
  @Input() createLabel: string;
  @Input() disableKey?: string;

  @Input() idKey: string;
  @Input() editContainerContent;
  @Input() addContainerContent;

  rowStyleClass: (rowData: any) => string = null;

  constructor(private modal: Modal, crudTableService: CrudTableService) {
    super(crudTableService);
  }

  ngOnInit(): void {
    if (this.disableKey) {
      this.rowStyleClass = (rowData) => {
        return rowData[this.disableKey] ? '' : 'disabled-row';
      };
    }
    super.ngOnInit();
  }

  onUpdate(currentItem) {
    this.crudTableService.update(currentItem, this.serviceUrl).subscribe(updatedItem => {
      const i = this.items.indexOf(currentItem);
      this.items[i] = updatedItem;
      // commonModal.info(UPDATE_SUCC_MSG); TODO toast
      this.items = [...this.items];
    });
  }

  onCreate(currentItem) {
    this.modal.open(
      this.addContainerContent,
      overlayConfigFactory(new CrudTableModalData(currentItem, this.items), CrudTableModalData)
    ).then(dialog => dialog.result.then(result => {
      if (result) {
        this.refreshTable();
      }
    }, stubFun), stubFun);
  }

  onEdit(currentItem) {
    this.modal.open(
      this.editContainerContent,
      overlayConfigFactory(new CrudTableModalData(currentItem.data, this.items), CrudTableModalData)
    ).then(dialog => {
      dialog.result.then((result: EditModalResult) => {
        switch (result.returnType) {
          case 'UPDATE':
            this.onUpdate(result.result);
            break;
          case 'DELETE':
            this.onDelete(currentItem);
            break;
          default:
            break;
        }
      }, stubFun);
    });
  }

  onDelete(currentItem) {
    const i = this.items.indexOf(currentItem.data);
    this.items.splice(i, 1);
    this.items = [...this.items];
  }

}

