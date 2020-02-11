import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGradesStudentListComponent } from './view-grades-student-list.component';

describe('ViewGradesStudentListComponent', () => {
  let component: ViewGradesStudentListComponent;
  let fixture: ComponentFixture<ViewGradesStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGradesStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGradesStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
