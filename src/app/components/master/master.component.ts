import { Component ,  HostListener, ElementRef, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {Sections} from "../../shared/enums/enums.model"


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],

  
 
})
export class MasterComponent implements OnInit {
  

  public get AboutUs():Sections.AboutUs {
    return Sections.AboutUs;
  }

  public get  TargetGroups():Sections.TargetGroups {
    return Sections.TargetGroups;
  }

  public get WhatIsTrp():Sections.WhatIsTrp {
    return Sections.WhatIsTrp;
  }
  ngOnInit(): void {
    console.log( document.getElementById("whatIsTrp")?.getBoundingClientRect());
    
   
   
  }
  state = 'hide';
  constructor(public el: ElementRef) { }
  
  sctionRedirectHandler(event:number) 
  {
    if(event == this.AboutUs) {
      document.getElementById("aboutUs")?.scrollIntoView(false);

    }
    if(event == this.WhatIsTrp) {
      document.getElementById("whatIsTrp")?.scrollIntoView(false);

    }
    if(event == this.TargetGroups) {
      document.getElementById("targetgroups")?.scrollIntoView(false);

    }
    
  }
  pos:  number = 0;

  @HostListener("window:scroll", ["$event"])
onWindowScroll() {
//In chrome and some browser scroll is given to body tag
 this.pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
let max = document.documentElement.scrollHeight;


console.log("pos=",this.pos);
console.log("max=",max);
// if(pos== 2079 ) {

// }


// pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
//  if(pos == max )   {
//  //Do your action here
//  }
}
}
