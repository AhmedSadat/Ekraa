import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurProductsComponent } from './our-products/our-products.component';

import { AboutComponent } from './about/about.component';
import { DescriptionComponent } from './description/description.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent} from './contacts/contacts.component' ;
import { Routes, RouterModule } from '@angular/router';

import {BaseRoutingModule} from '../base/base-routing.module';

import {routes} from '../base/base.module';



@NgModule({
  declarations: [ OurProductsComponent, AboutComponent, DescriptionComponent, ContactUsComponent, LessonsComponent , ContactsComponent],
  imports: [
    CommonModule

    //RouterModule
  ],
    exports: [
      BaseRoutingModule,
       OurProductsComponent, AboutComponent, DescriptionComponent, ContactUsComponent, LessonsComponent , ContactsComponent]
})
export class WidgetsModule { }
