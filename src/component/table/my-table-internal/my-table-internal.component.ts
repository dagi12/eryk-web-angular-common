import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgFilters} from '../../../model/ng-filters';
import {MyColumn} from '../base-table/my-column';
import {MyMobileDetectService} from '../../../service/my-mobile-detect.service';
import {UtilService} from '../../../util/util.service';
import {Sums} from './sums';
import {DataTable} from 'primeng/primeng';
import 'rxjs/add/operator/let';
import {TranslateService} from '@ngx-translate/core';
import {CellRenderer} from '../../form/input/my-select/value-label-pair';

export const translateRenderer = (translateService: TranslateService, prefix: string = ''): CellRenderer =>
  key => translateService.instant(prefix + key);

export interface FileInfo {
  fileName: string;
  blob: Blob;
}

@Component({
  selector: 'app-my-table-internal',
  templateUrl: './my-table-internal.component.html',
  styleUrls: ['./my-table-internal.css']
})
export class MyTableInternalComponent implements OnInit {
  columnStorageKey: string;

  @Input() emptyMessage;
  @Input() items: any[] = [{}];
  @Input() serviceUrl: string;
  @Input() columns: MyColumn[];
  @Input() srcId: number;
  @Input() hideExport: boolean;

  @Input() lazy: boolean;
  @Input() filterCriteria: NgFilters;
  @Input() first = 0;
  @Input() totalRecords = 0;
  @Input() rowStyleClass: Function;
  @Input() sums: Sums;
  @Input() customExport: Function;
  @Output() loadLazy = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Input() loading = false;

  @ViewChild(DataTable) dataTable: DataTable;
  columnOptions: any[] = [];

  // TODO columns doesn't reappear after deselection, should be fixed by switch to TurboTable
  selectedColumns: MyColumn[] = [];
  isMobile: boolean = this.myMobileDetectService.isMobile;
  numberFilter: {
    [_: string]: number
  } = {};
  private timer: any;

  constructor(private myMobileDetectService: MyMobileDetectService) {
  }

  static exportBlob(dataTable: DataTable): FileInfo {
    const data = dataTable.filteredValue || dataTable.value;
    let csv = '\ufeff';
    // headers
    for (let i = 0; i < dataTable.columns.length; i++) {
      const column = dataTable.columns[i];
      if (column.exportable && column.field) {
        csv += '"' + (column.header || column.field) + '"';
        if (i < (dataTable.columns.length - 1)) {
          csv += dataTable.csvSeparator;
        }
      }
    }
    // body
    data.forEach(function (record) {
      csv += '\n';
      for (let i_1 = 0; i_1 < dataTable.columns.length; i_1++) {
        const column = dataTable.columns[i_1];
        if (column.exportable && column.field) {
          csv += '"' + dataTable.resolveFieldData(record, column.field) + '"';
          if (i_1 < (dataTable.columns.length - 1)) {
            csv += dataTable.csvSeparator;
          }
        }
      }
    });
    const blob = new Blob([csv], {
      type: 'text/csv;charset=utf-8;'
    });
    return {
      blob: blob,
      fileName: dataTable.exportFilename + '.csv'
    };
  }

  ngOnInit() {
    this.columnOptions = UtilService.shallowCloneArr(this.columns);
    this.selectedColumns = UtilService.shallowCloneArr(this.columns);
    // FIXME don't work for columns with cell renderer, disabled until fixed
    // this.columnStorageKey = COLUMN_KEY_PREFIX + this.serviceUrl;
    // try {
    //   const item = localStorage.getItem(this.columnStorageKey);
    //   if (!!item) {
    //     const tempColumns = JSON.parse(item);
    //     if (!!this.selectedColumns) {
    //       this.selectedColumns = tempColumns;
    //     } else {
    //       this.selectedColumns = UtilService.shallowCloneArr(this.columns);
    //     }
    //   } else {
    //     this.selectedColumns = UtilService.shallowCloneArr(this.columns);
    //   }
    // } catch (e) {
    //   this.selectedColumns = UtilService.shallowCloneArr(this.columns);
    // }
  }

  onSelectedColumnsChange(columns: MyColumn[]) {
    // FIXME use angular-async-local-storage on migration to Angular 5
    this.selectedColumns = columns;
    // FIXME don't work for columns with cell renderer, disabled until fixed
    // setTimeout(() => {
    //   localStorage.setItem(this.columnStorageKey, JSON.stringify(columns));
    // });
  }

  clearNumberFilter(dt: DataTable, col: MyColumn) {
    this.numberFilter = {};
    dt.filter(null, col.field + 'From', 'greaterThanOrEqual');
    dt.filter(null, col.field + 'To', 'lessThanOrEqual');
  }

  onNumberChange(value: number, dt: DataTable, col: MyColumn, filterMatchMode) {
    const newVar = col.field + (filterMatchMode === 'greaterThanOrEqual' ? 'From' : 'To');
    this.numberFilter[newVar] = value;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      dt.filter(value, newVar, filterMatchMode);
    }, 1000);
  }

  exportCSV() {
    this.dataTable.exportCSV();
    // FIXME eksport do excela działający na najnowszym excelu
    // if (this.customExport) {
    //   this.customExport();
    // } else {
    //   const file = MyTableInternalComponent.exportBlob(this.dataTable);
    //   const data = new FormData();
    //   data.append('file', file.blob, file.fileName);
    //   this
    //     .attachmentService
    //     .onSubmit('csv-xls', data)
    //     .let(spinner(this.spinnerService))
    //     .subscribe((response: GeneralResponse<String>) => {
    //       const url = this.acs.simpleUrl('xls?' + serializeParams({
    //         token: response.data
    //       }));
    //       window.open(url);
    //     });
  }

}
