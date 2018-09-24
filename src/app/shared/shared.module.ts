import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@app/theme/material.module';

@NgModule({
  imports: [
    CommonModule,

    MaterialModule,

    RouterModule
  ],
  declarations: [
    // MovieCardComponent,
    // ToolbarComponent
  ],
  exports: [
    CommonModule,

    // MovieCardComponent,
    // ToolbarComponent
  ]
})
export class SharedModule { }
