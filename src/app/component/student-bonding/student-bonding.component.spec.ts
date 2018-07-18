import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBondingComponent } from './student-bonding.component';

describe('StudentBondingComponent', () => {
  let component: StudentBondingComponent;
  let fixture: ComponentFixture<StudentBondingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBondingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBondingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
