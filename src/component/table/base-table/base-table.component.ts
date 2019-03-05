import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CrudTableService} from '../crud-table/crud-table.service';
import {MyColumn} from './my-column';
import {DataTable} from 'primeng/primeng';

import {arrayToMap2} from '../../../util/array.helper';
import {NgFilters} from '../../../model/ng-filters';
import {LazyLoadEventExt} from './lazyloadeventext';
import {Sums} from '../my-table-internal/sums';
import {CrudTableApi} from '../crud-table/crud-table-api';

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
  @Input() columns: MyColumn[];
  @Input() srcId: number;
  @Input() hideExport: boolean;
  columnMap: { [_: string]: MyColumn };
  sums: Sums = null;
  // ładuje grid wraz z pokazaniem komponentu jeśli,
  // przekazujemy true musimy przekazać również [loading]=true w przeciwnym razie ExpressionAfter...
  // jeśli lazy jest fałszywe nie pokazujemy filtrów i używamy endpointa getAll zamiast table2
  @Input() lazy = false;
  @Input() loading = false;
  @Input() filterCriteria: NgFilters = null;
  @Input() customExport: Function;
  private crudTableApi: CrudTableApi;

  constructor(protected crudTableService: CrudTableService) {

  }

  static addFilterTypes(filters: NgFilters) {
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        filters[key].filterType = BaseTableComponent.switchType(filters[key].value);
      }
    }
  }

  static switchType(value: any) {
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
    this.crudTableApi = this.crudTableService.buildApi(this.serviceUrl);
    this.columnMap = arrayToMap2(this.columns, 'field');
    // if lazy is untrue there is no inital onLazyLoad event
    if (!this.lazy) {
      this.refreshTable();
    }
  }

  refreshTable() {
    if (this.lazy) {
      this.loadLazy(this.lastLazyLoadEvent, true);
    } else {
      this.crudTableApi
        .all()
        .doOnSubscribe(() => this.loading = true)
        .finally(() => this.loading = false)
        .subscribe(this.callback);
    }
  }

  loadLazy(options: LazyLoadEventExt, resetPaging: boolean = false) {
    this.lastLazyLoadEvent = options;
    this.prepareRequestParams(options, resetPaging);
    // noinspection JSIgnoredPromiseFromCall
    this.crudTableApi
      .lazy(options)
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
    BaseTableComponent.addFilterTypes(<NgFilters>options.filters);
    if (resetPaging) {
      options.first = 0;
      this.first = 0;
    }
    if (this.srcId) {
      options.srcId = this.srcId;
    }
  }

  // TODO nie powinno być tego w eryk-web-angular-common do wywalenie po zaaplikowaniu turbo table
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
