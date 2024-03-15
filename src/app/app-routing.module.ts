import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { DynamicComponent } from './shared/dynamic/dynamic.component';
import { SubmittingJobComponent } from './pages/submitting-job/submitting-job.component';
import { CoursesRegisterComponent } from './pages/courses-register/courses-register.component';
import { CoursesAddressComponent } from './pages/courses-address/courses-address.component';

const routes: Routes = [
  {
    path:"",component:MasterComponent,
  
  },
  {
    path:"home",component:MasterComponent,
  
  },
  {
    path:"dynamic",component:DynamicComponent 
   },
   {
    path:"submitting-job", component: SubmittingJobComponent

   },
   {
    path:"courses-register", component: CoursesRegisterComponent
   },
   {
    path:"courses-address", component: CoursesAddressComponent
   },
  {
    path:"**", redirectTo:"home"
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
