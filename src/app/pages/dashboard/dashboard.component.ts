import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainService} from '../../@core/services/app.main-service';

import {ServiceAuth} from '../../@core/services/app.auth-service'
import { LocalDataSource } from 'ng2-smart-table';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  
  date = new Date();

  Tablesettings = {
    actions: {
      delete: false,
      add: false,
      edit:false,
      position: 'right',
      custom: [
        { name: 'TYPE_PRESENT', title: 'Present' },
        { name: 'TYPE_ABSENT', title: 'Absent'},
       
      ]
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


  
  constructor(private mainService:MainService) {}
  ngOnInit() {
   this.loadStudents();
  }

  loadStudents(){
    this.mainService.getUnmarkedStudents(this.date).subscribe(response => {
      this.source.load(response);
    })
  }
  
  
  markAtendence(event){

    var request = {
      date:this.date,
      studentId:event.data.id,
      attendanceType:event.action
    }

    console.log(request)

    this.mainService.markAttendance(request).subscribe(response => {
      this.loadStudents();
      this.mainService.showToast("success","sucess",response.message)
    })
    console.log(event)
  }
}
