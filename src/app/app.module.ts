import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseModule} from './base/base.module';
import { NgwWowModule } from 'ngx-wow';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [NgxExtendedPdfViewerModule,
    BrowserModule,
    AppRoutingModule,
    BaseModule,
    NgwWowModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
