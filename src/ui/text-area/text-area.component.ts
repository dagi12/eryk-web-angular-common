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
  @Input() error: boolean;
  @Input() required: boolean;
  @Input() placeholder: string;
  @Input() rows = 3;

  ngOnInit() {
  }

}
