import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Decors2Component } from './decors2/decors2.component';

import {Routes, RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



const routes: Routes = [
  {path: '', component: Decors2Component},
];

@NgModule({
  declarations: [
    Decors2Component
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ]
})
export class Decors2Module { }
