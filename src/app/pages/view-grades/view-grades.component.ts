import { Component, OnInit } from '@angular/core';
import {MainService} from '../../@core/services/app.main-service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'ngx-view-grades',
  templateUrl: './view-grades.component.html',
  styleUrls: ['./view-grades.component.scss']
})
export class ViewGradesComponent implements OnInit {
  year = new Date().getFullYear();
  semester=1;
  studentId="";
  result =[];


  constructor(private mainService:MainService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.studentId = params['studentId'];
      this.addGrades();
    })
  }
  addGrades(){
    
    this.mainService.getGrades(this.studentId,this.year,this.semester).subscribe(response => {
      this.result= response;
      console.log(this.result);
    }, err => {
      this.mainService.showToast("danger","error",err.message)
    })
   
  }


}
