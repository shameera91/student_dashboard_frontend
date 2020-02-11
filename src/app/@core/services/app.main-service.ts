import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';


import {environment} from '../../../environments/environment';

import {ApiService} from './api.service';
import {NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService,} from '@nebular/theme';

@Injectable({providedIn:'root'})
export class MainService {
    destroyByClick = true;
    duration = 2000;
    hasIcon = true;
    position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
    preventDuplicates = false;
    status: NbComponentStatus = 'primary';



    constructor(private toastrService: NbToastrService,private apiService: ApiService,private cookieService: CookieService) {}


    //student api calls

    // add student to the database
    saveStudent(student){
        return this.apiService.post(environment.api + 'student/create', student)
        .pipe(map(data => data));
    }

    getStudents(){
      return this.apiService.get(environment.api + 'student/all')
      .pipe(map(data => data));
    }


    getUnmarkedStudents(date){
      var  d:Date = date;




      var newDate = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
      console.log(newDate)
      return this.apiService.get(environment.api + 'student/get-unmarked?date='+newDate)
      .pipe(map(data => data));
    }

    //subject api calls

    saveSubject(subject){
      return this.apiService.post(environment.api + 'subject/create', subject)
      .pipe(map(data => data));
    }

    getSubjects(){
      return this.apiService.get(environment.api + 'subject/all')
      .pipe(map(data => data));
    }



    //attendance api calls

    markAttendance(attendanceRequest){
      return this.apiService.post(environment.api + 'attendance/mark',attendanceRequest)
      .pipe(map(data => data));
    }

    viewAttendance(){
      return this.apiService.get(environment.api + 'attendance/view-attendance')
      .pipe(map(data => data));
    }



    //grades api calls
    addGrades(request,studentId,year,semster){
      return this.apiService.post(environment.api + 'grade/create/'+studentId+"/"+year+"/"+semster,request)
      .pipe(map(data => data));
    }

    getGrades(studentId,year,semster){
      return this.apiService.get(environment.api + 'grade/get/'+studentId+"/"+year+"/"+semster)
      .pipe(map(data => data));
    }

    // assignment api calls
    saveAssignment(assignment) {
    return this.apiService.post(environment.api + 'assignment/create', assignment)
      .pipe(map(data => data));
    }

    getAssignments() {
      return this.apiService.get(environment.api + 'assignment/all')
      .pipe(map(data => data));
    }

    getAssignmentsBySemester(semester) {
      return this.apiService.get(environment.api + 'assignment/get-assignment/' + semester)
        .pipe(map(data => data));
    }

    addMarks(request, studentId) {
      return this.apiService.post(environment.api + 'assignment/save-marks/' + studentId, request)
        .pipe(map(data => data));
    }

    getStudentGradeBySemesterAndSubject(semester, studentId) {
      return this.apiService.get(environment.api + 'assignment/get-grade/' + semester + '/' + studentId)
        .pipe(map(data => data));
    }



    showToast(type: NbComponentStatus, title: string, body: string) {
        const config = {
          status: type,
          destroyByClick: this.destroyByClick,
          duration: this.duration,
          hasIcon: this.hasIcon,
          position: this.position,
          preventDuplicates: this.preventDuplicates,
        };
        const titleContent = title ? `${title}` : '';
        this.toastrService.show(
          body,
          `${titleContent}`,
          config);
      }


}
