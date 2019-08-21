import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { AboutComponent } from './about/about.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [NavBarComponent, OurProductsComponent, AboutComponent, DescriptionComponent, ContactUsComponent, LessonsComponent],
  imports: [
    CommonModule
  ],
  exports: [NavBarComponent, OurProductsComponent, AboutComponent, DescriptionComponent, ContactUsComponent, LessonsComponent]
})
export class WidgetsModule { }
