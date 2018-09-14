import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CrudTableService} from '../ui/crud-table/crud-table.service';
import {MyColumn} from './my-column';
import {DataTable, LazyLoadEvent} from 'primeng/primeng';
import {FilterMetadata} from 'primeng/components/common/filtermetadata';

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
  lastLazyLoadEvent: LazyLoadEvent;
  @ViewChild(DataTable) dataTable: DataTable;
  @Input() title: string;
  @Input() emptyMessage: string;
  @Input() items: any[] = [];
  @Input() serviceUrl: string;
  @Input() getAllUrl?: string;
  @Input() filterUrl?: string;
  @Input() columns: MyColumn[];
  @Input() lazy = false;
  @Input() filterCriteria: { [_: string]: FilterMetadata } = null;
  @Input() callback = items => this.items = items._embedded[this.serviceUrl];

  constructor(protected crudTableService: CrudTableService) {
  }

  ngOnInit() {
    this.getAllUrl = this.getAllUrl || this.serviceUrl;
    if (!this.lazy) {
      this.refreshTable();
    }
  }

  refreshTable() {
    this.crudTableService
      .all(this.getAllUrl)
      .subscribe(this.callback);
  }

  loadLazy(options: LazyLoadEvent, resetPaging: boolean = false) {
    this.loading = true;
    if (this.filterCriteria) {
      this.lastLazyLoadEvent = options;
      options.filters = {
        ...options.filters,
        ...this.filterCriteria
      };
    }
    if (resetPaging) {
      options.first = 0;
      this.first = 0;
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
