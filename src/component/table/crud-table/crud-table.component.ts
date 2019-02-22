import {Component, Input, OnInit} from '@angular/core';

import {Modal, overlayConfigFactory} from 'ngx-modialog';
import {CrudTableModalData} from './crud-table-modal-data';
import {CrudTableService} from './crud-table.service';
import {BaseTableComponent} from '../base-table/base-table.component';
import {LazyLoadEventExt} from '../base-table/lazyloadeventext';
import {MODE} from '../../../util/const';
import {stubFun} from '../../../util/utils';
import {Router} from '@angular/router';


@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent extends BaseTableComponent implements OnInit {

  @Input() createLabel: string;
  @Input() disableKey?: string;
  @Input() hideCreate: boolean;
  @Input() wrapperStyle = 'col-lg-2 col-md-4 col-md-offset-4 col-xs-10 col-xs-offset-1 col-lg-offset-5 m-t';
  @Input() addContainerContent;
  @Input() editContainerContent;
  @Input() additionalOptions: LazyLoadEventExt = {};

  rowStyleClass: (rowData: any) => string = null;
  @Input() createRouteUrl: string;
  @Input() editRouteUrl: string;

  constructor(private modal: Modal, crudTableService: CrudTableService, private router: Router) {
    super(crudTableService);
  }

  ngOnInit(): void {
    if (this.disableKey) {
      this.rowStyleClass = (rowData) => {
        return rowData[this.disableKey] ? '' : 'disabled-row';
      };
    }
    if (!this.editContainerContent) {
      this.editContainerContent = this.addContainerContent;
    }
    super.ngOnInit();
  }

  loadLazy(options: LazyLoadEventExt, resetPaging: boolean = false): void {
    super.loadLazy({
      ...options,
      ...this.additionalOptions
    }, resetPaging);
  }

  onCreate() {
    // TODO use different crud table with create action in template
    if (!!this.createRouteUrl) {
      this.router.navigate([this.createRouteUrl, {mode: MODE.CREATE}]);
    } else {
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
  }

  onEdit(currentItem) {
    // TODO use different crud table with create action in template
    if (!!this.editRouteUrl) {
      this.router.navigate([this.editRouteUrl, {mode: MODE.EDIT, id: currentItem.data.applicationId}]);
    } else {
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

}

