import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent} from './base/base.component';
import { ProductsComponent } from './widgets/products/products.component';
import { WidgetsModule } from './widgets/widgets.module';

const routes: Routes = [
  { path: '' , redirectTo: 'Ekraa', pathMatch: 'full' },
  //{ path: 'home' , component: BaseComponent },
  // { path: '/home', component: CrisisListComponent },
    // { path: '**', component: PageNotFoundComponent } */
  {path: 'products' , component:ProductsComponent}
  ];

export default routes ;

@NgModule({
  imports: [

    RouterModule.forRoot(routes),
    WidgetsModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
