import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgFilters} from '../../../model/ng-filters';
import {MyColumn} from '../base-table/my-column';
import {MyMobileDetectService} from '../../../service/my-mobile-detect.service';
import {serializeParams, UtilService} from '../../../util/util.service';
import {Sums} from './sums';
import {DataTable} from 'primeng/primeng';
import {AttachmentService} from '../../../../../flota-web-angular-common/src/component/attachment/attachment.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {spinner} from '../../../util/utils';
import {ApiConfigService} from '../../../service/api-config.service';
import {GeneralResponse} from '../../../../../flota-web-angular-common/src/model/sample';
import 'rxjs/add/operator/let';

@Component({
  selector: 'app-my-table-internal',
  templateUrl: './my-table-internal.component.html',
  styleUrls: ['./my-table-internal.css']
})
export class MyTableInternalComponent implements OnInit {

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
  selectedColumns: MyColumn[] = [];
  isMobile: boolean = this.myMobileDetectService.isMobile;
  numberFilter: {
    [_: string]: number
  } = {};
  private timer: any;

  constructor(private myMobileDetectService: MyMobileDetectService,
              private attachmentService: AttachmentService,
              private spinnerService: NgxSpinnerService,
              private acs: ApiConfigService) {
  }

  static exportBlob(dataTable: DataTable): Blob {
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
    return new File([blob], dataTable.exportFilename + '.csv');
  }

  ngOnInit() {
    this.columnOptions = UtilService.shallowCloneArr(this.columns);
    this.selectedColumns = UtilService.shallowCloneArr(this.columns);
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
    if (this.customExport) {
      this.customExport();
    } else {
      const file = MyTableInternalComponent.exportBlob(this.dataTable);
      const data = new FormData();
      data.append('file', file);
      this
        .attachmentService
        .onSubmit('csv-xls', data)
        .map(response => response.json())
        .let(spinner(this.spinnerService))
        .subscribe((response: GeneralResponse<String>) => {
          const url = this.acs.simpleUrl('xls?' + serializeParams({
            token: response.data
          }));
          window.open(url);
        });
    }

  }

}
