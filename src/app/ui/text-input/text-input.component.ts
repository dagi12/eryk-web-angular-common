import {Component, Input, OnInit} from '@angular/core';
import {MakeProvider} from '../../abstract/abstract-value-accessor.component';

@Component({
  selector: 'app-text-input[label]',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [MakeProvider(TextInputComponent)]
})
export class TextInputComponent implements OnInit {

  @Input() name: string;
  @Input() label: string;
  @Input() disabled: boolean;

  ngOnInit() {

  }

}
