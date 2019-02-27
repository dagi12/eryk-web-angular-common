/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HelpDialogComponent} from './help-dialog.component';
import {BootstrapModalModule} from 'ngx-modialog/plugins/bootstrap';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModalService} from '../../../service/common-modal/common-modal.service';
import {commonModalServiceStub} from '../../../../../../testing/common-stubs';

describe('HelpDialogComponent', () => {
  let component: HelpDialogComponent;
  let fixture: ComponentFixture<HelpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BootstrapModalModule
      ],
      declarations: [
        HelpDialogComponent
      ],
      providers: [
        {provide: CommonModalService, useValue: commonModalServiceStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
