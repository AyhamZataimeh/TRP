import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sections } from '../enums/enums.model';
import { MasterService } from '../master.service';
import { Router } from '@angular/router';

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

  constructor(private masterService: MasterService, private router: Router) {}

  ngOnInit(): void {
   
  }

  sctionRedirectHandler(event:number) 
  {
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
    this.router.navigate(["/home"]).then(()=>{
      window.location.reload();
    })
  }
}
