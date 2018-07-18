import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtCultureComponent } from './txt-culture.component';

describe('TxtCultureComponent', () => {
  let component: TxtCultureComponent;
  let fixture: ComponentFixture<TxtCultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxtCultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
