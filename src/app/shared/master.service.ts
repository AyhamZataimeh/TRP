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
import { WorkTeam } from './interface/work-team.model';
import { ContactUs } from './interface/contact-us.model';
import { Clients } from './interface/clients.model';
import { Languages } from './interface/languages.model';
import { LatestNews } from './interface/latest-news.model';


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
    titleAr:"",
    text:"",
    textAr:"",
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

  getWorkTeam(): Observable<WorkTeam[]>{
    return this.http.get<WorkTeam[]>(this.config.API+"work-team");
  }

  getContactUs(): Observable<ContactUs> {
    return this.http.get<ContactUs>(this.config.API+ "contacts")
  }

  searchClients(): Observable<Clients[]> {

      return this.http.get<Clients[]>(this.config.API+"partners-details");

  }

  getLanguages(): Observable<Languages> {
    return this.http.get<Languages>(this.config.API + "languages",{
      params:{
        title: ""
      }
    })
  }

  getLatestNews(): Observable<LatestNews> {
    return this.http.get<LatestNews>(this.config.API + "latest-news",{
      params:{
        title: ""
      }
    })
  }

}
