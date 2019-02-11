import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgFilters} from '../../../model/ng-filters';
import {MyColumn} from '../base-table/my-column';
import {MyMobileDetectService} from '../../../service/my-mobile-detect.service';
import {Column} from 'primeng/primeng';
import {UtilService} from '../../../util/util.service';
import {Sums} from './sums';

@Component({
  selector: 'app-my-table-internal',
  templateUrl: './my-table-internal.component.html',
  styleUrls: ['./my-table-internal.css']
})
export class MyTableInternalComponent implements OnInit {

  @Input() emptyMessage;
  @Input() items: any[] = [{}];
  @Input() serviceUrl: string;
  @Input() getAllUrl?: string;
  @Input() filterUrl?: string;
  @Input() columns: MyColumn[];
  @Input() srcId: number;
  @Input() hideExport: boolean;

  // FIXME if false rent-history not visible
  @Input() slim;

  @Input() lazy: boolean;
  @Input() filterCriteria: NgFilters;
  @Input() callback: Function;
  @Input() first = 0;
  @Input() totalRecords = 0;
  @Input() rowStyleClass: Function;
  @Input() sums: Sums;
  @Output() loadLazy = new EventEmitter();
  @Output() edit = new EventEmitter();
  columnOptions: any[] = [];
  selectedColumns: Column[] = [];
  isMobile: boolean = this.myMobileDetectService.isMobile;
  numberFilter: {
    [_: string]: number
  } = {};
  private timer: any;

  constructor(private myMobileDetectService: MyMobileDetectService) {
  }

  ngOnInit() {
    this.columnOptions = UtilService.deepClone(this.columns);
    this.selectedColumns = UtilService.deepClone(this.columns);
  }

  clearNumberFilter(dt, col) {
    this.numberFilter = {};
    dt.filter(null, col.field + 'From', 'greaterThanOrEqual');
    dt.filter(null, col.field + 'To', 'lessThanOrEqual');
  }

  onNumberChange(value, dt, col, filterMatchMode) {
    const newVar = col.field + (filterMatchMode === 'greaterThanOrEqual' ? 'From' : 'To');
    this.numberFilter[newVar] = value;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      dt.filter(value, newVar, filterMatchMode);
    }, 1000);
  }

}
