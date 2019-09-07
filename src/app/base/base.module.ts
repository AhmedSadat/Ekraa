import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseComponent} from './base.component';
import {WidgetsModule} from '../widgets/widgets.module';
import {NavBarComponent} from '../widgets/nav-bar/nav-bar.component';
import {DescriptionComponent} from '../widgets/description/description.component';
import {OurProductsComponent} from '../widgets/our-products/our-products.component';
import {AboutComponent} from '../widgets/about/about.component';
import {ContactUsComponent} from '../widgets/contact-us/contact-us.component';
import {ProductsComponent} from '../widgets/products/products.component';
import {EjazaComponent} from '../widgets/ejaza/ejaza.component'
import {FooterComponent} from '../footer/footer.component'
import { RouterModule, Routes } from '@angular/router';
const routes=[]
@NgModule({
  declarations: [BaseComponent,FooterComponent,EjazaComponent,ProductsComponent],
  imports: [
    CommonModule,
    WidgetsModule,
    RouterModule.forChild([])
  ]
})
export class BaseModule { }
