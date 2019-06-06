import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MyColumn} from '../base-table/my-column';
import {NgFilters} from '../../../model/ng-filters';
import {DataTable} from 'primeng/primeng';

@Component({
  selector: 'app-my-table-internal-virtual',
  templateUrl: './my-table-internal-virtual.component.html',
  styles: []
})
export class MyTableInternalVirtualComponent {

  @Input() emptyMessage;
  @Input() items: any[] = [{}];
  @Input() columns: MyColumn[];
  @Input() filterCriteria: NgFilters;
  @Input() customExport: Function;
  @Output() edit = new EventEmitter();

  @ViewChild(DataTable) dataTable: DataTable;

}
