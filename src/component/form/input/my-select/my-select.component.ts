import {Component, Input, OnInit} from '@angular/core';
import {ValueLabelPair} from './value-label-pair';
import {requiredProps} from '../../../../util/util.service';
import {AbstractValueAccessor, MakeProvider} from '../abstract-value-accessor.component';


@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.scss'],
  providers: [MakeProvider(MySelectComponent)]
})
// TODO make AbstractValueAccessor
export class MySelectComponent extends AbstractValueAccessor implements OnInit {

  @Input() map: ValueLabelPair<any>[];
  @Input() label: string;


  ngOnInit() {
    requiredProps(this.label, this.map);
  }

}
