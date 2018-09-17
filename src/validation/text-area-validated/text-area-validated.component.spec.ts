import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TextAreaValidatedComponent} from './text-area-validated.component';

describe('TextAreaValidatedComponent', () => {
  let component: TextAreaValidatedComponent;
  let fixture: ComponentFixture<TextAreaValidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextAreaValidatedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaValidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
