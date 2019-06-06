import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyTableInternalVirtualComponent} from './my-table-internal-virtual.component';

describe('MyTableInternalVirtualComponent', () => {
  let component: MyTableInternalVirtualComponent;
  let fixture: ComponentFixture<MyTableInternalVirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyTableInternalVirtualComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTableInternalVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
