import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NumberInputValidatedComponent} from './number-input-validated.component';

describe('NumberInputValidatedComponent', () => {
  let component: NumberInputValidatedComponent;
  let fixture: ComponentFixture<NumberInputValidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumberInputValidatedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputValidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
