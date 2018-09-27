import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@app/theme/material.module';

import { StaffUserComponent } from './staff-user/staff-user.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    MaterialModule,

    RouterModule
  ],
  declarations: [
    StaffUserComponent,
    TeamComponent
  ],
  exports: [
    CommonModule,

    StaffUserComponent,
    TeamComponent
  ]
})
export class SharedModule { }
