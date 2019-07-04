import {Component, Input, OnInit} from '@angular/core';
import {CrudTableService} from './crud-table.service';
import {BaseTableComponent} from '../base-table/base-table.component';
import {LazyLoadEventExt} from '../base-table/lazyloadeventext';
import {MODE} from '../../../util/const';
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
  @Input() additionalOptions: LazyLoadEventExt = {};

  rowStyleClass: (rowData: any) => string = null;
  @Input() createRouteUrl: string;
  @Input() editRouteUrl: string;

  constructor(crudTableService: CrudTableService, private router: Router) {
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

  loadLazy(options: LazyLoadEventExt, resetPaging: boolean = false): void {
    super.loadLazy({
      ...options,
      ...this.additionalOptions
    }, resetPaging);
  }

  onCreate() {
    this.router.navigate([this.createRouteUrl, {mode: MODE.CREATE}]).then();
  }


  onEdit(currentItem) {
    this.router.navigate([this.editRouteUrl, {mode: MODE.EDIT, id: currentItem.data.applicationId}]).then();
  }

}

