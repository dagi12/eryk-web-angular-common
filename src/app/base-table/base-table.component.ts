import {Component, Input, OnInit} from '@angular/core';
import {CrudTableService} from '../ui/crud-table/crud-table.service';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styles: []
})
export class BaseTableComponent implements OnInit {

  @Input() title: string;
  @Input() emptyMessage: string;
  @Input() items: any[] = [];
  @Input() serviceUrl: string;
  @Input() getAllUrl?: string;
  @Input() columns: any[];
  @Input() callback = items => this.items = items._embedded[this.serviceUrl];

  constructor(protected crudTableService: CrudTableService) {
  }

  ngOnInit() {
    this.getAllUrl = this.getAllUrl || this.serviceUrl;
    this.refreshTable();
  }

  refreshTable() {
    this.crudTableService.all(this.getAllUrl).subscribe(this.callback);
  }

}
