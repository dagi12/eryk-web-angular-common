import {Component, Input, OnInit} from '@angular/core';
import {CommonModalService} from '../../common-modal/common-modal.service';


@Component({
  selector: 'app-help-dialog',
  templateUrl: './help-dialog.component.html',
  styleUrls: ['./help-dialog.component.css']
})
export class HelpDialogComponent implements OnInit {

  @Input() helpContent: string;

  constructor(private commonModal: CommonModalService) {
  }

  ngOnInit() {
  }

  showDialog() {
    this.commonModal.info(this.helpContent, 'Pomoc');
  }

}
