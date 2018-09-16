import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AutoCompleteValidatedComponent} from './auto-complete-validated.component';

describe('AutoCompleteValidatedComponent', () => {
  let component: AutoCompleteValidatedComponent;
  let fixture: ComponentFixture<AutoCompleteValidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCompleteValidatedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteValidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
