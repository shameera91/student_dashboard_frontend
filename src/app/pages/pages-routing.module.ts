import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component'
import { AddGradesStudentListComponent } from './add-grades-student-list/add-grades-student-list.component'
import {AddGradesComponent} from './add-grades/add-grades.component'
import {ViewGradesStudentListComponent} from './view-grades-student-list/view-grades-student-list.component';
import {ViewGradesComponent} from './view-grades/view-grades.component'
import {admin} from '../@core/auth_gurds/admin'
import {AddAssignmentStudentListComponent} from "./add-assignment-student-list/add-assignment-student-list.component";
import {AddAssignmentMarksComponent} from "./add-assignment-marks/add-assignment-marks.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [

    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'view-attendance',
      component: ViewAttendanceComponent,
    },
    {
      path: 'add-assignment-marks',
      component: AddAssignmentStudentListComponent,
    },
    {
      path: 'add-assignment-marks/:studentId',
      component: AddAssignmentMarksComponent,
    },
    {
      path: 'add-grades-for-cuurent-year',
      component: AddGradesStudentListComponent,
    },
    {
      path: 'add-grades-for-cuurent-year/:studentId',
      component: AddGradesComponent,
    },
    {
      path: 'view-grades',
      component: ViewGradesStudentListComponent,
    },
    {
      path: 'view-grades/:studentId',
      component: ViewGradesComponent,
    },
    {
      path: 'admin',
      canActivate: [admin],
      loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule),
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
