import { Component } from '@angular/core';
import { Sections } from '../enums/enums.model';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

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

  constructor(private masterService: MasterService){}


  sectionHandler(sectionId: number) {
  
    this.masterService.sectionRedierct.next({
      sectionId: sectionId,
      redierctUrl:"/home"
    });
  }
  }
