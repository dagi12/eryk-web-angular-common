import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CrudTableService} from '../crud-table/crud-table.service';
import {MyColumn} from './my-column';
import {DataTable} from 'primeng/primeng';

import {arrayToMap2} from '../../../util/array.helper';
import {NgFilters} from '../../../model/ng-filters';
import {LazyLoadEventExt} from './lazyloadeventext';
import {MyMobileDetectService} from '../../../service/my-mobile-detect.service';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styles: []
})
export class BaseTableComponent implements OnInit {

  dateFrom: Date = new Date();
  dateTo: Date;
  totalRecords: number;
  loading = false;
  first = 0;
  lastLazyLoadEvent: LazyLoadEventExt;
  @ViewChild(DataTable) dataTable: DataTable;
  @Input() emptyMessage = 'Brak danych';
  @Input() items: any[] = [];
  @Input() serviceUrl: string;
  @Input() getAllUrl?: string;
  @Input() filterUrl?: string;
  @Input() columns: MyColumn[];
  @Input() srcId: number;
  @Input() hideExport: boolean;
  @Input() slim = false;

  columnMap: { [_: string]: MyColumn };
  isMobile: boolean = this.myMobileDetectService.isMobile;

  @Input() lazy = false;
  @Input() filterCriteria: NgFilters = null;
  @Input() callback = items => this.items = items._embedded[this.serviceUrl];

  constructor(protected crudTableService: CrudTableService, private myMobileDetectService: MyMobileDetectService) {

  }

  ngOnInit() {
    this.columnMap = arrayToMap2(this.columns, 'field');
    this.getAllUrl = this.getAllUrl || (this.serviceUrl + '/table');
    if (!this.lazy) {
      this.refreshTable();
    }
  }

  refreshTable() {
    if (this.lazy) {
      this.loadLazy(this.lastLazyLoadEvent, true);
    } else {
      this.crudTableService
        .all(this.getAllUrl)
        .subscribe(this.callback);
    }
  }

  addFilterTypes(filters: NgFilters) {
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        filters[key].filterType = this.columnMap[key].filterType;
      }
    }
  }

  loadLazy(options: LazyLoadEventExt, resetPaging: boolean = false) {
    this.loading = true;
    this.addFilterTypes(<NgFilters>options.filters);
    this.lastLazyLoadEvent = options;
    if (this.filterCriteria) {
      options.filters = {
        ...options.filters,
        ...this.filterCriteria
      };
    }
    if (resetPaging) {
      options.first = 0;
      this.first = 0;
    }
    if (this.srcId) {
      options.srcId = this.srcId;
    }
    this.crudTableService
      .lazy(this.getAllUrl, options)
      .subscribe(items => {
        this.items = items;
        if (this.items.length < options.rows) {
          this.totalRecords = this.first + options.rows;
        } else {
          this.totalRecords = this.first + options.rows + 1;
        }
        this.loading = false;
      });
  }

  search() {
    this.crudTableService.all(this.filterUrl, {
      dateFrom: this.dateFrom,
      dateTo: this.dateTo
    }).subscribe(this.callback);
  }

}
