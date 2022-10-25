import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [

  //{path: '**', component: HomeComponent},
  {path: '', redirectTo: 'desserts', pathMatch: 'full'},
  {path: 'desserts', loadChildren: () => import('./desserts/desserts.module').then(x => x.DessertsModule)},
  {path: 'decors', loadChildren: () => import('./decors2/decors2.module').then(x => x.Decors2Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }
