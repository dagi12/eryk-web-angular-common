/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MySelectComponent} from './my-select.component';
import {FormsModule} from '@angular/forms';

describe('MySelectComponent', () => {
  let component: MySelectComponent;
  let fixture: ComponentFixture<MySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [MySelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySelectComponent);
    component = fixture.componentInstance;
    component.model = {};
    component.label = 'Foo';
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
