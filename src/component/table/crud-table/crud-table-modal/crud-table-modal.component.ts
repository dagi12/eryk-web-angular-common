import {Component, Input, OnInit} from '@angular/core';
import {CrudTableComponent} from '../crud-table.component';
import {CrudTableModalData} from '../crud-table-modal-data';
import {MODE} from '../../../../util/const';
import {Modal, overlayConfigFactory} from 'ngx-modialog';
import {stubFun} from '../../../../util/utils';
import {CrudTableService} from '../crud-table.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crud-table-modal',
  templateUrl: '../crud-table.component.html',
  styles: []
})
export class CrudTableModalComponent extends CrudTableComponent implements OnInit {

  @Input() addContainerContent;
  @Input() editContainerContent;

  constructor(private modal: Modal, crudTableService: CrudTableService, router: Router) {
    super(crudTableService, router);
  }

  onCreate() {
    this.modal.open(
      this.addContainerContent,
      overlayConfigFactory(new CrudTableModalData({
        linkId: this.srcId
      }, this.items, MODE.CREATE), CrudTableModalData)
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


  ngOnInit(): void {
    super.ngOnInit();
    if (!this.editContainerContent) {
      this.editContainerContent = this.addContainerContent;
    }
  }
}
