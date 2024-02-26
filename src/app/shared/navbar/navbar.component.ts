import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sections } from '../enums/enums.model';

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

  public get MobileViewWorkTeam(): Sections.MobileViewWorkTeam {
    return Sections.MobileViewWorkTeam
  }

  ngOnInit(): void {
   
  }

  sctionRedirectHandler(event:number) 
  {
    this.selectedSection.emit(event);
  }


  onChangeLanguage(language: string) {
    localStorage.setItem("language",language);
    window.location.reload();
  
  }
}
