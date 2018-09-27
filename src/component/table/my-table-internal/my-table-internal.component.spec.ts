import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyTableInternalComponent} from './my-table-internal.component';

describe('MyTableInternalComponent', () => {
  let component: MyTableInternalComponent;
  let fixture: ComponentFixture<MyTableInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyTableInternalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTableInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
