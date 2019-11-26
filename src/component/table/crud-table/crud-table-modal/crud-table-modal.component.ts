import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Modal, overlayConfigFactory } from 'ngx-modialog';
import { MODE } from '../../../../util/const';
import { stubFun } from '../../../../util/utils';
import { CrudTableModalData } from '../crud-table-modal-data';
import { CrudTableComponent } from '../crud-table.component';
import { CrudTableService } from '../crud-table.service';

@Component({
  selector: 'app-crud-table-modal',
  templateUrl: '../crud-table.component.html',
  styles: []
})
export class CrudTableModalComponent extends CrudTableComponent implements OnInit {

  @Input() addContainerContent;
  @Input() editContainerContent;
  @Input() newItem;

  constructor(private modal: Modal, crudTableService: CrudTableService, router: Router, translateService: TranslateService) {
    super(crudTableService, router, translateService);
  }

  onCreate() {
    this.modal.open(
      this.addContainerContent,
      overlayConfigFactory(new CrudTableModalData(this.newItem, this.items, MODE.CREATE), CrudTableModalData)
    ).result.then(result => {
      if (result) {
        this.refreshTable();
      }
    }, stubFun);
  }

  onEdit(currentItem) {
    this.modal.open(
      this.editContainerContent,
      overlayConfigFactory(new CrudTableModalData(currentItem.data, this.items, MODE.EDIT), CrudTableModalData)
    ).result.then(result => {
      if (result) {
        this.refreshTable();
      }
    }, stubFun);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (!this.editContainerContent) {
      this.editContainerContent = this.addContainerContent;
    }
  }
}
