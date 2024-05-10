import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sections } from '../enums/enums.model';
import { MasterService } from '../master.service';
import { Router } from '@angular/router';
import { MainService } from 'src/app/pages/services/main-service.service';
import { Services } from '../interface/services.model';
import { ContactUs } from '../interface/contact-us.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[]
})
export class NavbarComponent implements OnInit {

  @Output("selectedSection")selectedSection: EventEmitter<number>= new EventEmitter<number>();

  public get AboutUs():Sections.AboutUs {
    return Sections.AboutUs;
  }

  public get  TargetGroups():Sections.TargetGroups {
    return Sections.TargetGroups;
  }

  public get WhatIsTrp():Sections.WhatIsTrp {
    return Sections.WhatIsTrp;
  }

  public get WorkTeam(): Sections.WorkTeam {
    return Sections.WorkTeam
  }

  public get OurPartners() : Sections.OurPartners {
    return Sections.OurPartners;
  }
  public get LatestNews() : Sections.LatestNews {
    return Sections.LatestNews;
  }
  public get Languages() : Sections.Languages {
    return Sections.Languages;
  }
  public get MobileViewWorkTeam(): Sections.MobileViewWorkTeam {
    return Sections.MobileViewWorkTeam
  }

  services:Services[]=[];
  contactInfo!: ContactUs;
  displayNav: boolean = false; 


  constructor(private masterService: MasterService, private router: Router, private mainService: MainService) {}

  ngOnInit(): void {
   
    this.getServices();
    this.getContactInfo();
  }

  getContactInfo() {
    this.masterService.getContactUs().subscribe((response: any)=>{
      if(!response.error) {
        this.contactInfo= response.data;
        console.log("contactInfo",this.contactInfo);
      }
    })
  }

  sctionRedirectHandler(event:number) {
    this.displayNav = false;
    this.masterService.sectionRedierct.next({
      sectionId: event,
      redierctUrl:"/home"
    });
  }


  onChangeLanguage(language: string) {
    localStorage.setItem("language",language);
    window.location.reload();
  
  }

  homeRedierction() {
    this.displayNav = false;

    this.masterService.sectionRedierct.next({
      sectionId:0,
      redierctUrl:""
    })
    this.router.navigate(["/home"]);
  }

  getServices() {

    this.mainService.geServices().subscribe((response: any)=>{
      if(!response.error) {
        this.services= response.data;
        console.log("service", this.services);
        
      }
    })
  }

  serviceRedierct(serviceId: number) {
    this.displayNav = false;

    this.router.navigate(["service/"+serviceId]).then(()=>{
      window.location.reload();
    });
  }
}
