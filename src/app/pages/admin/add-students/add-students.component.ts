import { Component, OnInit } from '@angular/core';
import {MainService} from '../../../@core/services/app.main-service';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'ngx-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss']
})
export class AddStudentsComponent implements OnInit {

  student = {
    studentFirstName:"",
    studentLastName:"",
    studentYear:"",
    studentId:"",
  }
  submitted = false;
 
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

  constructor(private mainService:MainService) { }

  ngOnInit() {
   this.loadStudents();
  }


  loadStudents(){
    this.mainService.getStudents().subscribe(response => {
      console.log(response)
      this.source.load(response);
    })
  }

  addStudents(){
    
    this.mainService.saveStudent(this.student).subscribe(response => {
      this.mainService.showToast("success","sucess",response.message)
      this.loadStudents();
    }, err => {
      this.mainService.showToast("danger","error",err.message)
    })
  
  }


}
