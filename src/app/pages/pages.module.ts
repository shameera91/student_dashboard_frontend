import {NgModule} from '@angular/core';
import {NbMenuModule} from '@nebular/theme';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';

import {PagesRoutingModule} from './pages-routing.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {ViewAttendanceComponent} from './view-attendance/view-attendance.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {FormsModule} from '@angular/forms';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbDatepickerModule,
  NbInputModule,
} from '@nebular/theme';
import {AddGradesStudentListComponent} from './add-grades-student-list/add-grades-student-list.component';
import {AddGradesComponent} from './add-grades/add-grades.component';
import {ViewGradesComponent} from './view-grades/view-grades.component';
import {ViewGradesStudentListComponent} from './view-grades-student-list/view-grades-student-list.component';
import {AddAssignmnetsComponent} from './admin/add-assignmnets/add-assignmnets.component';
import { AddAssignmentMarksComponent } from './add-assignment-marks/add-assignment-marks.component';
import { AddAssignmentStudentListComponent } from './add-assignment-student-list/add-assignment-student-list.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    Ng2SmartTableModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbDatepickerModule,
    NbInputModule,
    FormsModule,
  ],
  declarations: [
    PagesComponent,
    ViewAttendanceComponent,
    AddGradesStudentListComponent,
    AddGradesComponent,
    ViewGradesComponent,
    ViewGradesStudentListComponent,
    AddAssignmentMarksComponent,
    AddAssignmentStudentListComponent,
  ],
})

export class PagesModule {

}
