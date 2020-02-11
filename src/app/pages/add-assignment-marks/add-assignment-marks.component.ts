import {Component, OnInit} from '@angular/core';
import {MainService} from '../../@core/services/app.main-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-add-assignment-marks',
  templateUrl: './add-assignment-marks.component.html',
  styleUrls: ['./add-assignment-marks.component.scss'],
})
export class AddAssignmentMarksComponent implements OnInit {

  studentId;
  semester;
  assignmentsData = [];

  constructor(private mainService: MainService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentId = params['studentId'];
    });
  }

  getAssignmentBySemester(semester) {
    this.assignmentsData = [];
    this.mainService.getAssignmentsBySemester(semester).subscribe(response => {
      for (let x = 0; x < response.length; x++) {
        this.assignmentsData.push({
          assignmentId: response[x].id,
          assignmentName: response[x].assignmentName,
          marks: 0,
        });
      }
      /*this.assignmentsData = response;*/
    });
  }

  addMarks() {
    this.mainService.addMarks(this.assignmentsData, this.studentId).subscribe(response => {
      this.mainService.showToast('success', 'success', response.message);
    }, error => {
      this.mainService.showToast('danger', 'error', error.message);
    });


    /*console.log(this.SubjectAndData)
    this.mainService.addGrades(this.SubjectAndData, this.studentId, this.year, this.semester).subscribe(response => {
      this.mainService.showToast("success", "sucess", response.message)
      this.loadSubjects();
      this.semester = 1;
    }, err => {
      this.mainService.showToast("danger", "error", err.message)
    })*/
  }

}
