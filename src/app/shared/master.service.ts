import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Blogs } from './interface/blogs';
import { SectionRedierction } from './interface/section-redirction.model';
import { HttpClient } from '@angular/common/http';
import * as cofig from "../../assets/config/config-api.json";
import { Configuration } from './interface/configuration.model';
import { LandingPage } from './interface/landing-page.model';
import { VisiionMission } from './interface/vision-misson.model';
import { SectionDetails } from './interface/section.model';


@Injectable({
  providedIn: 'root'
})
export class MasterService {
  config: Configuration= cofig;

  constructor(private http: HttpClient) { }

  
  sectionRedierct: BehaviorSubject<SectionRedierction> = new BehaviorSubject<SectionRedierction>({sectionId: 0, redierctUrl:""});
  blogsData: BehaviorSubject<Blogs> = new BehaviorSubject<Blogs>({
    id:0,
    title:"",
    text:"",
    imagePath:""
  });


  getLandingPage(): Observable<LandingPage> {
    return this.http.get<LandingPage>(this.config.API+"landing");
  }

  getImages(): Observable<VisiionMission[]> {
    
    return this.http.get<VisiionMission[]>(this.config.API+"vision-mission");
  }


  searchSections(): Observable<SectionDetails[]> {
  
    return this.http.get<SectionDetails[]>(this.config.API+"section-details");
}




}
