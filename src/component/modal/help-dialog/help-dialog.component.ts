import {Component, Input, OnInit} from '@angular/core';
import {CommonModalService} from '../../../service/common-modal/common-modal.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-help-dialog',
  templateUrl: './help-dialog.component.html',
  styleUrls: ['./help-dialog.component.css']
})
export class HelpDialogComponent implements OnInit {

  @Input() helpContent: string;

  constructor(private commonModal: CommonModalService, private translateService: TranslateService) {
  }

  ngOnInit() {
  }

  showDialog() {
    this.translateService.get('COMMON.HELP').subscribe(value => {
      this.commonModal.info(this.helpContent, value);
    });
  }

}
