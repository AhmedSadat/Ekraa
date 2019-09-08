import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  HomeComponent  from './home/home.component';
import  ContactsComponent  from './contacts/contacts.component';
import  LessonsComponent  from './lessons/lessons.component';
import {WidgetsModule} from '../widgets/widgets.module';

@NgModule({
  declarations: [HomeComponent, ContactsComponent, LessonsComponent],
  imports: [
    CommonModule,
    WidgetsModule
  ]
})
export class ViewsModule { }
