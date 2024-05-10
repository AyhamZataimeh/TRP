import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MasterComponent } from './components/master/master.component';

import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { DynamicComponent } from './shared/dynamic/dynamic.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SubmittingJobComponent } from './pages/submitting-job/submitting-job.component';
import { CoursesRegisterComponent } from './pages/courses-register/courses-register.component';
import { CoursesAddressComponent } from './pages/courses-address/courses-address.component';
import { CourseAddressPrivateComponent } from './pages/course-address-private/course-address-private.component';
import { ServicesComponent } from './pages/services/services.component';
import { LatestNewsComponent } from './shared/latest-news/latest-news.component';
import { ArticelsComponent } from './shared/articels/articels.component';
import { FacebookModule } from "ngx-facebook";
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MasterComponent,
    FooterComponent,
    DynamicComponent,
    SubmittingJobComponent,
    CoursesRegisterComponent,
    CoursesAddressComponent,
    CourseAddressPrivateComponent,
    ServicesComponent,
    LatestNewsComponent,
    ArticelsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgImageSliderModule,
    FacebookModule.forRoot(),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })

  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
