import {Component, Input, OnInit} from '@angular/core';
import {AbstractValueAccessor, MakeProvider} from '../../abstract/abstract-value-accessor.component';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styles: [],
  providers: [MakeProvider(TextAreaComponent)]
})
export class TextAreaComponent extends AbstractValueAccessor implements OnInit {

  @Input() label: string;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
