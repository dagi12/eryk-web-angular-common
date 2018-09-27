import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgFilters} from '../../../model/ng-filters';
import {MyColumn} from '../base-table/my-column';
import {MyMobileDetectService} from '../../../service/my-mobile-detect.service';

@Component({
  selector: 'app-my-table-internal',
  templateUrl: './my-table-internal.component.html',
  styles: []
})
export class MyTableInternalComponent implements OnInit {

  @Input() emptyMessage;
  @Input() items: any[];
  @Input() serviceUrl: string;
  @Input() getAllUrl?: string;
  @Input() filterUrl?: string;
  @Input() columns: MyColumn[];
  @Input() srcId: number;
  @Input() hideExport: boolean;
  @Input() slim: boolean;
  @Input() lazy: boolean;
  @Input() filterCriteria: NgFilters;
  @Input() callback: Function;
  @Input() first = 0;
  @Input() totalRecords = 0;
  @Input() rowStyleClass: Function;
  @Output() loadLazy = new EventEmitter();
  @Output() edit = new EventEmitter();
  columnOptions: any[] = [];
  isMobile: boolean = this.myMobileDetectService.isMobile;

  constructor(private myMobileDetectService: MyMobileDetectService) {
  }


  ngOnInit() {
    this.columnOptions = this.columns.map(value => {
      return {label: value.header, value};
    });
  }

}
