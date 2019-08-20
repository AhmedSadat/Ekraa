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
import {FooterComponent} from '../footer/footer.component'
@NgModule({
  declarations: [BaseComponent,FooterComponent],
  imports: [
    CommonModule,
    WidgetsModule
  ]
})
export class BaseModule { }
