import {Component, OnInit} from '@angular/core';
import {MainService} from '../../../@core/services/app.main-service';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-add-assignmnets',
  templateUrl: './add-assignmnets.component.html',
  styleUrls: ['./add-assignmnets.component.scss'],
})
export class AddAssignmnetsComponent implements OnInit {

  assignment = {
    subjectId: '',
    semester: '',
    assignmentCode: '',
    assignmentName: '',
  };

  submitted = false;

  Tablesettings = {
    actions: {
      delete: false,
      add: false,
      edit: false,
      position: 'right',
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      assignmentCode: {
        title: 'Assignment Code',
        type: 'string',
      },
      assignmentName: {
        title: 'Assignment Name',
        type: 'string',
      },
      semester: {
        title: 'Semester',
        type: 'string',
      },
      subjectName: {
        title: 'Subject Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  subjectAndData = [];
  selectedSubject;

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.loadSubjects();
    this.loadAssignments();
  }

  loadSubjects() {
    this.mainService.getSubjects().subscribe(response => {
      this.subjectAndData = response;
    });
  }

  loadAssignments() {
    this.mainService.getAssignments().subscribe(response => {
      this.source.load(response);
    });
  }

  addAssignment() {

    this.mainService.saveAssignment(this.assignment).subscribe(response => {
      this.mainService.showToast('success', 'success', response.message);
      this.loadAssignments();
    }, err => {
      this.mainService.showToast('danger', 'error', err.message);
    });

  }
}
