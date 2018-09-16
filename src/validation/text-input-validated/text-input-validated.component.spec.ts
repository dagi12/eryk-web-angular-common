import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TextInputValidatedComponent} from './text-input-validated.component';

describe('TextInputValidatedComponent', () => {
  let component: TextInputValidatedComponent;
  let fixture: ComponentFixture<TextInputValidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextInputValidatedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputValidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
