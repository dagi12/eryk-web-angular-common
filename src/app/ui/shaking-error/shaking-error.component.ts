import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-shaking-error',
  templateUrl: './shaking-error.component.html',
  styleUrls: ['./shaking-error.component.scss'],
})
export class ShakingErrorComponent implements OnInit {

  @ViewChild('errorEl') errorEl: ElementRef;
  currentErrorStatement: string;
  shakeState: string = 'inactive';
  private errorAlready: boolean;
  private previousMessage: string;

  constructor(private zone: NgZone) {
    this.errorAlready = false;
  }

  ngOnInit() {
  }

  public errorAttempt(message: string) {
    if (this.errorAlready && this.previousMessage === message) {
      this.shakeState = 'active';
    } else {
      this.currentErrorStatement = message;
      this.previousMessage = message;
      this.errorAlready = true;
    }
  }

  reset() {
    this.zone.run(() => {
      this.shakeState = 'inactive';
    });
  }


}
