import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TypeaheadMatch} from 'ngx-bootstrap';

import {of} from 'rxjs/observable/of';

import {AbstractValueAccessor, MakeProvider} from '../abstract-value-accessor.component';
import {ApiConfigService} from '../../../../service/api-config.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
  providers: [MakeProvider(AutoCompleteComponent)]
})
export class AutoCompleteComponent extends AbstractValueAccessor implements OnInit {

  @Input() label: string;
  @Input() inputUrl: string;
  @Input() error: boolean;
  @Input() required: boolean;
  @Output() onSelect = new EventEmitter();
  typeaheadLoading: boolean;
  dataSource: Observable<[any]>;
  loading = false;
  private outputUrl: string;

  constructor(private http: HttpClient,
              private apiConfigService: ApiConfigService,
              injector: Injector) {
    super(injector);
    this
      .dataSource = Observable
      .create((observer: any) => observer.next(this.value))
      .mergeMap((token: string) => {
        if (this.value && this.value.length >= 3) {
          return this.http
            .post(this.outputUrl, {searchText: token});
        }
        return of([]);
      })
      .doOnSubscribe(() => this.loading = true)
      .finally(() => this.loading = false);
  }


  changeTypeAheadLoading(b: boolean): void {
    this.typeaheadLoading = b;
  }

  typeAheadOnSelect(e: TypeaheadMatch): void {
    this.onSelect.emit(e.item);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.outputUrl = this.apiConfigService.url(this.inputUrl);
  }

  clear() {
    this.value = null;
  }


}
