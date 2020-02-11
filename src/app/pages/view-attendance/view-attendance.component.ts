import { Component, OnInit } from '@angular/core';
import {MainService} from '../../@core/services/app.main-service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss']
})
export class ViewAttendanceComponent implements OnInit {
  Tablesettings = {
    actions: {
      delete: false,
      add: false,
      edit:false,
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
      attendanceDate: {
        title: 'Attendance Date',
        type: 'string',
      },
      attendancetype: {
        title: 'Attendance Type',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private mainService:MainService) { }

  ngOnInit() {
    this.loadAttendance();
  }


  loadAttendance(){
    this.mainService.viewAttendance().subscribe(response => {
      this.source.load(response);
    })
  }
}
