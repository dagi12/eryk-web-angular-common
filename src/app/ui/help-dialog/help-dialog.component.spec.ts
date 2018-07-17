/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HelpDialogComponent} from './help-dialog.component';
import {ModalModule} from 'ngx-modialog';
import {BootstrapModalModule} from 'ngx-modialog/plugins/bootstrap';
import {CommonModalService} from '../common-modal.service';
import {CommonModalServiceMock} from '../common-modal.service.mock';
import {RouterTestingModule} from '@angular/router/testing';

describe('HelpDialogComponent', () => {
  let component: HelpDialogComponent;
  let fixture: ComponentFixture<HelpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ModalModule.forRoot(),
        BootstrapModalModule
      ],
      declarations: [
        HelpDialogComponent
      ],
      providers: [{
        provide: CommonModalService,
        useClass: CommonModalServiceMock
      }]
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
