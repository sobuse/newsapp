import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import { LoadingBarModule } from '@ngx-loading-bar/core';

import { HttpClientModule } from '@angular/common/http'
import { NewsappapiservicesService} from './service/newsappapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component'
//import { HttpClientModule } from '.angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule,
  ],
  providers: [NewsappapiservicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
