import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent} from './base.component';
import { ProductsComponent } from '../widgets/products/products.component';
//views
import {ViewsModule} from '../views/views.module';
import {

  ContactsComponent,
  HomeComponent,
  LessonsComponent
} from '../views';
import { EjazaComponent } from '../widgets/ejaza/ejaza.component';
import { ContactUsComponent } from '../widgets/contact-us/contact-us.component';


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
          path:  'contact',
          component:  ContactUsComponent
          },
          {
          path:  'products',
          component:  ProductsComponent
          },{

            path: "egaza",
            component: EjazaComponent
          }
          ]
          }
];



@NgModule({
  imports: [
    
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
