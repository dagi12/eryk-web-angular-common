import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TypeaheadMatch} from 'ngx-bootstrap';

import {of} from 'rxjs/observable/of';
import {mergeMap} from 'rxjs/operators';
import {AuthHttp} from 'angular2-jwt';
import {AbstractValueAccessor, MakeProvider} from '../abstract-value-accessor.component';
import {ApiConfigService} from '../../../../service/api-config.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styles: [],
  providers: [MakeProvider(AutoCompleteComponent)]
})
export class AutoCompleteComponent extends AbstractValueAccessor implements OnInit {

  @Input() label: string;
  @Input() inputUrl: string;
  @Input() error: boolean;
  @Input() required: boolean;
  @Output() onSelect = new EventEmitter();
  typeaheadLoading: boolean;
  dataSource: Observable<any>;

  private outputUrl: string;

  constructor(private authHttp: AuthHttp,
              private apiConfigService: ApiConfigService,
              injector: Injector) {
    super(injector);
    this
      .dataSource = Observable
      .create((observer: any) => observer.next(this.value))
      .pipe(mergeMap((token: string) => {
        if (this.value && this.value.length >= 3) {
          return this.authHttp
            .post(this.outputUrl, {searchText: token})
            .map((response => response.json()));
        }
        return of([]);
      }));
  }


  changeTypeaheadLoading(b: boolean): void {
    this.typeaheadLoading = b;
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    this.onSelect.emit(e.item);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.outputUrl = this.apiConfigService.url(this.inputUrl);
  }

}
