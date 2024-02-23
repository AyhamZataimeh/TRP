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

  public get WorkTeam(): Sections.WorkTeam {
    return Sections.WorkTeam
  }
  workTeamList :any[]=[
    {
      id: 1,
      name: "Ayham",
      position: "Software Engineering",
      image: "../../../assets/images/logo.jpg"
    },
    {
      id: 2,
      name: "Mahmoud",
      position: "Software Engineering",
      image: "../../../assets/images/logo.jpg"
    },
    {
      id: 3,
      name: "Omar",
      position: "Software Engineering",
      image: "../../../assets/images/logo.jpg"
    },
    {
      id: 4,
      name: "Mahmoud",
      position: "Software Engineering",
      image: "../../../assets/images/logo.jpg"
    },
    {
      id: 5,
      name: "Ayham",
      position: "Software Engineering",
      image: "../../../assets/images/logo.jpg"
    },
    {
      id: 6,
      name: "Mahmoud",
      position: "Software Engineering",
      image: "../../../assets/images/logo.jpg"
    },
    {
      id: 7,
      name: "Ayham",
      position: "Software Engineering",
      image: "../../../assets/images/logo.jpg"
    },
    {
      id: 8,
      name: "Ahmad",
      position: "Software Engineering",
      image: "../../../assets/images/logo.jpg"
    },
    {
      id: 9,
      name: "Ayham",
      position: "Software Engineering",
      image: "../../../assets/images/logo.jpg"
    },
  ]
  ngOnInit(): void {

    document.addEventListener("DOMContentLoaded", function () {
      const targetgroups = document.getElementById("targetgroups");
      const vision = document.getElementById("vision");
      const aboutUs = document.getElementById("aboutUs");
      const whatIsTrp = document.getElementById("whatIsTrp");


      const animatedDiv = document.querySelector(".animated-div");

      // Create an intersection observer
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  // If the target element is in view, add the animation class
                  vision?.classList.add("vision-mission-show-animation");
               
                } 
          });
      }, { threshold: 0.5 }); // Adjust the threshold as needed
  
      // Start observing the target element
      observer.observe(vision as HTMLElement);
     


 window.addEventListener("scroll", function () {
        if (isElementInViewport(aboutUs)) {
          
            // If the element is in the viewport, add your logic here
            document.getElementById("aboutUsParent")?.classList.replace("about-us","about-us-show");

            document.getElementById("aboutUsText")?.classList.add("about-us-text");
            document.getElementById("trpAboutUsImage")?.classList.add("trp-image-about-us");

            
      aboutUs?.classList.remove("hide-section");

    } else {

        }

        if (isElementInViewport(whatIsTrp)) {

          document.getElementById("whatIsTrpParent")?.classList.replace("what-is-trp","what-is-trp-show");
          
            document.getElementById("trpText")?.classList.add("trp-text");
            document.getElementById("whatIsTrpImage")?.classList.add("trp-image");




    } else {

        }

        if (isElementInViewport(targetgroups)) {
          document.getElementById("targetGroupsParent")?.classList.replace("target-groups","target-groups-show");

          
            document.getElementById("target-groups-text")?.classList.add("target-groups-text");
            document.getElementById("targetgroupsImage")?.classList.add("trp-image-target-group");

    } else {

        }

    if (isElementInViewport(vision)) {
      console.log(true);

          vision?.classList.add("vision-mission-show-animation");


    } else {
      console.log(false);

        }
    });
    function isElementInViewport(el: any) {
      const rect = el.getBoundingClientRect();
  
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  });
   

    
   
   
  }


  state = 'hide';
  constructor(public el: ElementRef) { }

  sctionRedirectHandler(event:number) 

  {
    document.getElementById("whatIsTrpParent")?.classList.replace("what-is-trp","what-is-trp-show");
          
    document.getElementById("trpText")?.classList.add("trp-text");
    document.getElementById("whatIsTrpImage")?.classList.add("trp-image");
    document.getElementById("targetGroupsParent")?.classList.replace("target-groups","target-groups-show");

          
    document.getElementById("target-groups-text")?.classList.add("target-groups-text");
    document.getElementById("targetgroupsImage")?.classList.add("trp-image-target-group");
    document.getElementById("aboutUsParent")?.classList.replace("about-us","about-us-show");

    document.getElementById("aboutUsText")?.classList.add("about-us-text");
    document.getElementById("trpAboutUsImage")?.classList.add("trp-image-about-us");

    setTimeout(()=>{
      if(event == this.AboutUs) {
        document.getElementById("aboutUs")?.scrollIntoView();
  
      }
      if(event == this.WhatIsTrp) {
        document.getElementById("whatIsTrp")?.scrollIntoView();
  
      }
      if(event == this.TargetGroups) {
          
          document.getElementById("targetgroups")?.scrollIntoView(false);

      }
      if(event == this.WorkTeam) {
        document.getElementById("workTeam")?.scrollIntoView(false);

      }
    },)
  
    
  }
  pos:  number = 0;

  @HostListener("window:scroll", ["$event"])
onWindowScroll() {


  document.documentElement.offsetTop

 this.pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;



}



}
