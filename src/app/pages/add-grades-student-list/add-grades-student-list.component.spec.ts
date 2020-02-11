import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGradesStudentListComponent } from './add-grades-student-list.component';

describe('AddGradesStudentListComponent', () => {
  let component: AddGradesStudentListComponent;
  let fixture: ComponentFixture<AddGradesStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGradesStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGradesStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
