import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalHeaderComponent} from './modal-header.component';
import {HelpDialogComponent} from '../help-dialog/help-dialog.component';
import {CommonModalService} from '../../service/common-modal/common-modal.service';
import {CommonModalServiceMock} from '../../service/common-modal/common-modal.service.mock';

describe('ModalHeaderComponent', () => {
  let component: ModalHeaderComponent;
  let fixture: ComponentFixture<ModalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalHeaderComponent,
        HelpDialogComponent
      ],
      providers: [
        {provide: CommonModalService, useClass: CommonModalServiceMock}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
