import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

const ANIMATION_DURATION = 500;

@Component({
  selector: 'app-shaking-error',
  templateUrl: './shaking-error.component.html',
  styleUrls: ['./shaking-error.component.css'],
})
export class ShakingErrorComponent implements OnInit {

  @ViewChild('errorEl') errorEl: ElementRef;
  currentErrorStatement: string;
  shake: boolean;
  private previousMessage: string;

  ngOnInit() {
  }

  errorAttempt(errorMessage: string) {
    if (this.previousMessage !== errorMessage) {
      this.currentErrorStatement = errorMessage;
      this.previousMessage = errorMessage;
    } else {
      this.shake = true;
      setTimeout(() => {
        this.shake = false;
      }, ANIMATION_DURATION);
    }
  }

}
