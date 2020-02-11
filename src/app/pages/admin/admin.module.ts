import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AddStudentsComponent} from './add-students/add-students.component';
import {AdminRoutingModule} from './admin-rounting.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {FormsModule} from '@angular/forms';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import {AddSubjectsComponent} from './add-subjects/add-subjects.component';
import {AddAssignmnetsComponent} from './add-assignmnets/add-assignmnets.component';


@NgModule({
  declarations: [AdminComponent, AddStudentsComponent, AddSubjectsComponent, AddAssignmnetsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    FormsModule,
  ],
})
export class AdminModule {
}
