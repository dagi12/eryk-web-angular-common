import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-excel-btn',
  templateUrl: './excel-btn.component.html',
  styles: []
})
export class ExcelBtnComponent implements OnInit {

  @Output() onExport = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }


}
