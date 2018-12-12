import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CrudTableService} from '../crud-table/crud-table.service';
import {MyColumn} from './my-column';
import {DataTable} from 'primeng/primeng';

import {arrayToMap2} from '../../../util/array.helper';
import {NgFilters} from '../../../model/ng-filters';
import {LazyLoadEventExt} from './lazyloadeventext';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styles: []
})
export class BaseTableComponent implements OnInit {

  first = 0;
  totalRecords = 0;
  lastLazyLoadEvent: LazyLoadEventExt;
  @ViewChild(DataTable) dataTable: DataTable;
  // nie dodawaj Inputa
  loading;
  @Input() emptyMessage = 'Nie znaleziono rekordów. Zmień kryteria wyszukiwania.';
  @Input() items: any[] = [];
  @Input() serviceUrl: string;
  @Input() getAllUrl?: string;
  @Input() filterUrl?: string;
  @Input() columns: MyColumn[];
  @Input() srcId: number;
  @Input() hideExport: boolean;
  @Input() slim = false;

  columnMap: { [_: string]: MyColumn };

  // ładuj grid wraz z pokazaniem komponentu
  @Input() lazy = false;
  @Input() filterCriteria: NgFilters = null;
  @Input() callback = items => this.items = items._embedded[this.serviceUrl];
  private isPostOrGet = false;

  constructor(protected crudTableService: CrudTableService) {

  }

  ngOnInit() {
    this.columnMap = arrayToMap2(this.columns, 'field');
    if (!this.getAllUrl) {
      // for every angular table
      this.getAllUrl = this.serviceUrl + '/table2';
      this.isPostOrGet = true;
    } else {
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
    this.lastLazyLoadEvent = options;
    this.prepareRequestParams(options, resetPaging);
    this.crudTableService
      .lazy(this.getAllUrl, options)
      .doOnSubscribe(() => this.loading = true)
      .finally(() => this.loading = false)
      .subscribe(items => {
        this.items = items;
        if (this.items.length < options.rows) {
          this.totalRecords = (this.first + items.length) || 1;
        } else {
          this.totalRecords = this.first + options.rows + 1;
        }
      });
  }

  private prepareRequestParams(options: LazyLoadEventExt, resetPaging: boolean) {
    this.addFilterTypes(<NgFilters>options.filters);
    if (this.filterCriteria) {
      for (const filter in this.filterCriteria) {
        if (this.filterCriteria.hasOwnProperty(filter)) {
          const filterCriterion = this.filterCriteria[filter];
          if (filterCriterion.value) {
            options.filters[filter] = filterCriterion;
          }
        }
      }
    }
    if (resetPaging) {
      options.first = 0;
      this.first = 0;
    }
    if (this.srcId) {
      options.srcId = this.srcId;
    }
  }
}
