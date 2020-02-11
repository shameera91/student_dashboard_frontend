import {Component, OnInit} from '@angular/core';
import {MainService} from '../../../@core/services/app.main-service';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-add-subjects',
  templateUrl: './add-subjects.component.html',
  styleUrls: ['./add-subjects.component.scss']
})
export class AddSubjectsComponent implements OnInit {

  subject = {
    subjectCode: '',
    subjectName: '',
  };

  submitted = false;

  Tablesettings = {
    actions: {
      delete: false,
      add: false,
      edit: false,
      position: 'right'
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      subjectCode: {
        title: 'Subject Code',
        type: 'string',
      },
      subjectName: {
        title: 'Subject Name',
        type: 'string',
      }
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this.mainService.getSubjects().subscribe(response => {
      console.log(response)
      this.source.load(response);
    })
  }

  addSubject() {

    this.mainService.saveSubject(this.subject).subscribe(response => {
      this.mainService.showToast("success", "sucess", response.message)
      this.loadSubjects();
    }, err => {
      this.mainService.showToast("danger", "error", err.message)
    })

  }
}
