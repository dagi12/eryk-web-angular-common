import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CrudTableService} from '../crud-table/crud-table.service';
import {MyColumn} from './my-column';
import {DataTable} from 'primeng/primeng';

import {arrayToMap2} from '../../../util/array.helper';
import {NgFilters} from '../../../model/ng-filters';
import {LazyLoadEventExt} from './lazyloadeventext';
import {Sums} from '../my-table-internal/sums';

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
  sums: Sums = null;
  // ładuje grid wraz z pokazaniem komponentu jeśli,
  // przekazujemy true musimy przekazać również [loading]=true w przeciwnym razie ExpressionAfter...
  @Input() lazy = false;
  @Input() loading = false;
  @Input() filterCriteria: NgFilters = null;
  @Input() customExport: Function;
  private isPostOrGet = false;

  constructor(protected crudTableService: CrudTableService) {

  }

  static addFilterTypes(filters: NgFilters) {
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        filters[key].filterType = BaseTableComponent.switchType(filters[key].value);
      }
    }
  }

  private static switchType(value: any) {
    switch (typeof value) {
      case 'object':
        if (value instanceof Date) {
          return 'date';
        } else if (Array.isArray(value)) {
          return 'set';
        }
        throw new Error('unkown type');
      case 'number':
        return 'number';
      case 'string':
        return 'text';
    }
  }

  callback = items => this.items = items._embedded ? items._embedded[this.serviceUrl] : items;

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
        .doOnSubscribe(() => this.loading = true)
        .finally(() => this.loading = false)
        .subscribe(this.callback);
    }
  }

  loadLazy(options: LazyLoadEventExt, resetPaging: boolean = false) {
    this.lastLazyLoadEvent = options;
    this.prepareRequestParams(options, resetPaging);
    // noinspection JSIgnoredPromiseFromCall
    this.crudTableService
      .lazy(this.getAllUrl, options)
      .doOnSubscribe(() => this.loading = true)
      .finally(() => this.loading = false)
      .subscribe((items: any[]) => {
        this.items = items;
        this.calcSums(items);
        if (this.items.length < options.rows) {
          this.totalRecords = (this.first + items.length) || 1;
        } else {
          this.totalRecords = this.first + options.rows + 1;
        }
      });
  }

  prepareRequestParams(options: LazyLoadEventExt, resetPaging: boolean) {
    BaseTableComponent.addFilterTypes(<NgFilters>options.filters);
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

  private calcSums(items: any[]) {
    this.sums = {
      amountSum: '0',
      driveTimeSum: 0,
      haltTimeSum: 0,
      kmCountSum: 0
    };
    let amountSumTmp = 0;
    items.forEach(item => {
      amountSumTmp += item.kwotaBrutto;
      this.sums.driveTimeSum += item.czasJazdy;
      this.sums.haltTimeSum += item.czasPostoj;
      this.sums.kmCountSum += item.iloscKm;
    });
    this.sums.amountSum = amountSumTmp.toFixed(2);
  }

}
