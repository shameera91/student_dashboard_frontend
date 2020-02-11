import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {MainService} from '../../@core/services/app.main-service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-add-assignment-student-list',
  templateUrl: './add-assignment-student-list.component.html',
  styleUrls: ['./add-assignment-student-list.component.scss'],
})
export class AddAssignmentStudentListComponent implements OnInit {

  Tablesettings = {
    actions: {
      delete: false,
      add: false,
      edit: false,
      position: 'right',
    },
    columns: {
      studentId: {
        title: 'ID',
        type: 'number',
      },
      studentFirstName: {
        title: 'First Name',
        type: 'string',
      },
      studentLastName: {
        title: 'Last Name',
        type: 'string',
      },
      studentYear: {
        title: 'Year',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(private mainService: MainService, private router: Router) {
  }

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.mainService.getStudents().subscribe(response => {
      this.source.load(response);
    });
  }

  onUserRowSelect(event) {
    this.router.navigate(['/pages/add-assignment-marks/' + event.data.studentId]);

  }

}
