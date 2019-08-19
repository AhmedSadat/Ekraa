import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent} from './base/base.component';

const routes: Routes = [
  { path: '' , component: BaseComponent },
  { path: 'home' , component: BaseComponent },/*
  { path: '/home', component: CrisisListComponent },
  { path: '**', component: PageNotFoundComponent } */];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
