import {Component, Input, OnInit} from '@angular/core';
import {ValueLabelPair} from './value-label-pair';
import {requiredProps} from '../../../../util/util.service';
import {AbstractValueAccessor, MakeProvider} from '../abstract-value-accessor.component';


@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.css'],
  providers: [MakeProvider(MySelectComponent)]
})
export class MySelectComponent extends AbstractValueAccessor implements OnInit {

  @Input() required = false;
  @Input() map: ValueLabelPair<any>[];
  @Input() label: string;


  ngOnInit() {
    super.ngOnInit();
    requiredProps(this.label, this.map);
  }

}
