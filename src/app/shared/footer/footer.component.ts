import { Component, OnInit } from '@angular/core';
import { Sections } from '../enums/enums.model';
import { MasterService } from '../master.service';
import { ContactUs } from '../interface/contact-us.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
  public get LatestNews() : Sections.LatestNews {
    return Sections.LatestNews;
  }
  selectedLang: any;

  constructor(private masterService: MasterService){}


  sectionHandler(sectionId: number) {
  
    this.masterService.sectionRedierct.next({
      sectionId: sectionId,
      redierctUrl:"/home"
    });
  }

  contactInfo!: ContactUs;

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('language');

    this.getContactInfo();
    
  }

  getContactInfo() {
    this.masterService.getContactUs().subscribe((response: any)=>{
      if(!response.error) {
        this.contactInfo= response.data;
      }
    })
  }
  }
