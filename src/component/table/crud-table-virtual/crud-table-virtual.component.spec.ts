import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CrudTableVirtualComponent} from './crud-table-virtual.component';

describe('CrudTableVirtualComponent', () => {
  let component: CrudTableVirtualComponent;
  let fixture: ComponentFixture<CrudTableVirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrudTableVirtualComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTableVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
