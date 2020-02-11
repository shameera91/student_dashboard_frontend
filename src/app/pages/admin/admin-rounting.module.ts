import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {AddStudentsComponent} from './add-students/add-students.component';
import {AddSubjectsComponent} from './add-subjects/add-subjects.component';
import {AddAssignmnetsComponent} from './add-assignmnets/add-assignmnets.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'add-students',
      component: AddStudentsComponent,
    },
    {
      path: 'add-subjects',
      component: AddSubjectsComponent,
    },
    {
      path: 'add-assignmnets',
      component: AddAssignmnetsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
