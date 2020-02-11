import { Component, OnInit } from '@angular/core';
import {MainService} from '../../@core/services/app.main-service';
import { LocalDataSource } from 'ng2-smart-table';
import {Router} from "@angular/router"

@Component({
  selector: 'ngx-add-grades-student-list',
  templateUrl: './add-grades-student-list.component.html',
  styleUrls: ['./add-grades-student-list.component.scss']
})
export class AddGradesStudentListComponent implements OnInit {

  Tablesettings = {
    actions: {
      delete: false,
      add: false,
      edit:false,
      position: 'right'
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
  constructor(private mainService:MainService,private router: Router) { }

  ngOnInit() {
    this.loadStudents();
  }
  loadStudents(){
    this.mainService.getStudents().subscribe(response => {
      console.log(response)
      this.source.load(response);
    })
  }

  onUserRowSelect(event){
  this.router.navigate(['/pages/add-grades-for-cuurent-year/'+event.data.studentId])

  }
}
