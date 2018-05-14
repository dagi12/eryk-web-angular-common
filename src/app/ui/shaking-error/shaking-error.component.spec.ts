import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ShakingErrorComponent} from './shaking-error.component';

describe('ShakingErrorComponent', () => {
  let component: ShakingErrorComponent;
  let fixture: ComponentFixture<ShakingErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShakingErrorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakingErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
