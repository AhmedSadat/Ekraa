import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent} from './base.component';
//import { ProductsComponent } from '../widgets/products/products.component';
//views
import {ViewsModule} from '../views/views.module';
import {

  ContactsComponent,
  HomeComponent,
  LessonsComponent,
} from '../views';


//--------

export const  routes:  Routes  = [
          {
          path:  'Ekraa',
          component:  BaseComponent,
          children: [

            {

            path:  '',
            component:  HomeComponent
            }
            ,
            {

            path:  'home',
            component:  HomeComponent
            }
          ,
          {
          path:  'about',
          component:  ContactsComponent
          },
          {
          path:  'create',
          component:  ContactsComponent
          },
          {
          path:  'update',
          component:  ContactsComponent
          }
          ]
          }
];



@NgModule({
  imports: [
    
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
