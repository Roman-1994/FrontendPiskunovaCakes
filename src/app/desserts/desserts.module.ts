import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DessertsComponent } from './desserts/desserts.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {Routes, RouterModule} from "@angular/router";


const routes: Routes = [
  {path: '', component: DessertsComponent},
  ]

@NgModule({
  declarations: [
    DessertsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ]
})
export class DessertsModule { }
