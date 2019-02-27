/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MySelectComponent} from './my-select.component';
import {FormsModule} from '@angular/forms';

describe('MySelectComponent', () => {
  let component: MySelectComponent;
  let fixture: ComponentFixture<MySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [MySelectComponent], schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySelectComponent);
    component = fixture.componentInstance;
    component.label = 'Foo';
    component.map = [{
      label: 'asd',
      value: 'asd'
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('map should be defined', () => {
    expect(component.map[0].label).toBeDefined();
    expect(component.map[0].value).toBeDefined();
  });
});
