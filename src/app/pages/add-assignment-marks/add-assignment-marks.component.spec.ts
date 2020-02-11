import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssignmentMarksComponent } from './add-assignment-marks.component';

describe('AddAssignmentMarksComponent', () => {
  let component: AddAssignmentMarksComponent;
  let fixture: ComponentFixture<AddAssignmentMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssignmentMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignmentMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
