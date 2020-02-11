import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssignmentStudentListComponent } from './add-assignment-student-list.component';

describe('AddAssignmentStudentListComponent', () => {
  let component: AddAssignmentStudentListComponent;
  let fixture: ComponentFixture<AddAssignmentStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssignmentStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignmentStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
