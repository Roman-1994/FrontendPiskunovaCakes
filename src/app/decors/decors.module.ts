import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {DecorsComponent} from "./decors.component";

import {Routes, RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: '', component: DecorsComponent},
];

@NgModule({
  declarations: [
    DecorsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
  ],
})
export class DecorsModule { }
