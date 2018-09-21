import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PreviewInputComponent} from './preview-input.component';

describe('PreviewInputComponent', () => {
  let component: PreviewInputComponent;
  let fixture: ComponentFixture<PreviewInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
