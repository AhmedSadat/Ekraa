import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseComponent} from './base.component';
import {WidgetsModule} from '../widgets/widgets.module';
import {MainWidgetsModule} from '../main-widgets/main-widgets.module';
import {BaseRoutingModule} from './base-routing.module';

//views
import {ViewsModule} from '../views/views.module';
import {

  ContactsComponent,
  HomeComponent,
  LessonsComponent,
} from '../views';


//--------
import {NavBarComponent} from '../main-widgets/nav-bar/nav-bar.component';
import {DescriptionComponent} from '../widgets/description/description.component';
import {OurProductsComponent} from '../widgets/our-products/our-products.component';
import {AboutComponent} from '../widgets/about/about.component';
import {ContactUsComponent} from '../widgets/contact-us/contact-us.component';
import {ProductsComponent} from '../widgets/products/products.component';
import {EjazaComponent} from '../widgets/ejaza/ejaza.component';

//import {ContactsComponent} from '../widgets/contacts/contacts.component';

import {FooterComponent} from '../footer/footer.component'

import { RouterModule, Routes } from '@angular/router';


export const  routes:  Routes  = [
          {
          path:  '',
          component:  HomeComponent,
          children: [
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
                component:  ContactsComponent}
          ]
        }
];

@NgModule({
  declarations: [BaseComponent,FooterComponent,EjazaComponent,ProductsComponent],
  imports: [
    CommonModule,
    WidgetsModule,
    ViewsModule,
    MainWidgetsModule,
  //  RouterModule.forChild(routes)
  BaseRoutingModule
],
exports: [
  BaseRoutingModule
]

})
export class BaseModule { }
