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

    document.addEventListener("DOMContentLoaded", function () {
      const targetgroups = document.getElementById("targetgroups");
      // const targetgroups = document.getElementById("targetgroups");
      // const targetgroups = document.getElementById("targetgroups");

  
      // Create an intersection observer
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  // If the target element is in view, add the animation class
                  console.log(true);
                  document.getElementById("target-groups-text")?.classList.add("target-groups-text");
                  document.getElementById("trpImage")?.classList.add("trp-image");

                  
                  // targetgroups?.classList.add("animate");
              } else {
                  console.log(false);
                  document.getElementById("target-groups-text")?.classList.remove("target-groups-text");
                  document.getElementById("trpImage")?.classList.remove("trp-image");

                  // If the target element is out of view, remove the animation class
                  // targetgroups?.classList.remove("animate");
              }
          });
      }, { threshold: 0.5 }); // Adjust the threshold as needed
  
      // Start observing the target element
      observer.observe(targetgroups as HTMLElement);
  });
   

    
   
   
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
  // console.log("window.pageYOffset",window.pageYOffset);
  document.documentElement.offsetTop
  // console.log( "whatIsTrp",document.getElementById("whatIsTrp")?.offsetTop);
  // console.log( "targetgroups",document.getElementById("targetgroups")?.clientHeight);
  
//In chrome and some browser scroll is given to body tag
 this.pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
let max = document.documentElement.scrollHeight;


// console.log("pos=",document.documentElement.offsetTop);
// console.log("max=",max);
// if(pos== 2079 ) {

// }


// pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
//  if(pos == max )   {
//  //Do your action here
//  }
}
}
