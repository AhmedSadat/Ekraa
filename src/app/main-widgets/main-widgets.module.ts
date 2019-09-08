import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {BaseRoutingModule } from '../base/base-routing.module';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    BaseRoutingModule
  ],
  exports: [NavBarComponent]
})
export class MainWidgetsModule { }
