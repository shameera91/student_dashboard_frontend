import {Component, OnInit} from '@angular/core';
import {MainService} from '../../@core/services/app.main-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-add-grades',
  templateUrl: './add-grades.component.html',
  styleUrls: ['./add-grades.component.scss']
})
export class AddGradesComponent implements OnInit {

  constructor(private mainService: MainService, private route: ActivatedRoute) {
  }

  SubjectAndData = [];
  grades = ["A", "B", "C", "D", "E", "F"];
  studentId = "";
  year = new Date().getFullYear();
  semester = 1;

  ngOnInit() {
    console.log("123123")
    this.route.params.subscribe(params => {
      this.studentId = params['studentId'];
    })
    // this.loadSubjects();
  }

  getStudentGradeBySemesterAndSubject(semester, studentId) {
    this.mainService.getStudentGradeBySemesterAndSubject(semester, studentId).subscribe(response => {
      console.log('expected ' + response);
      this.SubjectAndData = response;
    }, error => {

    });

  }

  /*loadSubjects() {
    this.mainService.getSubjects().subscribe(response => {
      this.SubjectAndData = [];
      for (var x = 0; x < response.length; x++) {
        this.SubjectAndData.push(
          {
            subjectId: response[x].id,
            subjectTitle: response[x].subjectName,
            result: "A",
          }
        )
      }

      console.log(this.SubjectAndData)
    })
  }*/

  addGrades() {
    console.log(this.SubjectAndData)
    this.mainService.addGrades(this.SubjectAndData, this.studentId, this.year, this.semester).subscribe(response => {
      this.mainService.showToast("success", "sucess", response.message)
      // this.loadSubjects();
      this.semester = 1;
    }, err => {
      this.mainService.showToast("danger", "error", err.message)
    })

  }
}
