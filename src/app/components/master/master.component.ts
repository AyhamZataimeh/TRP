import { Component ,  HostListener, ElementRef, OnInit, NgZone } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {Sections} from "../../shared/enums/enums.model";
import { MasterService } from 'src/app/shared/master.service';



@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  animations:[
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ]
  
 
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

  public get MobileViewWorkTeam(): Sections.MobileViewWorkTeam {
    return Sections.MobileViewWorkTeam;
  }
  interval: any;
  currentIndex = 0;



  workTeamList :any[]=[
    {
      id: 1,
      name: "Othman Khawaja",
      position: "GM",
      image: "../../../assets/images/avatar-1.jpeg"
    },
    {
      id: 2,
      name: "Mohammed shaheen",
      position: "SAM",
      image: "../../../assets/images/avatar-2.jpeg"
    },
    {
      id: 3,
      name: "Zakaria bello",
      position: "CHR",
      image: "../../../assets/images/avatar-3.jpeg"
    },
    {
      id: 4,
      name: "Othman Khawaja",
      position: "GM",
      image: "../../../assets/images/avatar-1.jpeg"
    },
    {
      id: 5,
      name: "Mohammed shaheen",
      position: "SAM",
      image: "../../../assets/images/avatar-2.jpeg"
    },
    {
      id: 6,
      name: "Zakaria bello",
      position: "CHR",
      image: "../../../assets/images/avatar-3.jpeg"
    },

  ];

  clientsList:any[]= [
    {
      image: "../../assets/images/client-1.jpeg"
        },
    {
      image: "../../assets/images/client-2.jpeg"
        },
    {
      image: "../../assets/images/client-3.jpeg"
        },
    {
      image: "../../assets/images/client-4.jpeg"
        },
    {
      image: "../../assets/images/client-5.jpeg"
        },
    {
      image: "../../assets/images/client-6.jpeg"
        },
    {
      image: "../../assets/images/client-7.jpeg"
    },
  
    {
      image: "../../assets/images/client-7.jpeg"
    },
    {
      image: "../../assets/images/client-7.jpeg"
    },
  
  ];

  latestNewsList:any = {
  item1: [ 
    {
      id: 1,
      name: "Othman Khawaja",
      position: "GM",
      image: "../../../assets/images/avatar-1.jpeg"
    },
    {
      id: 2,
      name: "Mohammed shaheen",
      position: "SAM",
      image: "../../../assets/images/avatar-2.jpeg"
    },
    {
      id: 3,
      name: "Zakaria bello",
      position: "CHR",
      image: "../../../assets/images/avatar-3.jpeg"
    },
  ],
   item2: [
    {
      id: 4,
      name: "Othman Khawaja",
      position: "GM",
      image: "../../../assets/images/avatar-1.jpeg"
    },
    {
      id: 5,
      name: "Mohammed shaheen",
      position: "SAM",
      image: "../../../assets/images/avatar-2.jpeg"
    },
    {
      id: 6,
      name: "Mohammed shaheen",
      position: "SAM",
      image: "../../../assets/images/avatar-2.jpeg"
    },
   
   ]
  }

  get sliderStyles() {
    const numSlides = this.clientsList.length;
    return {
      '--num-slides': numSlides - 7
    };
  }

  translateX:number= this.clientsList.length - 2;
  selectedLang!: any;

  latestNewsDots:any[]=[];
  filteredList:any[]=[];
  
  latestNewsDotsCount() {
    // Object.entries(this.latestNewsList)
    // // console.log(this.latestNewsList.length);
    
    // let number = Math.ceil(this.latestNewsList.length / 3) ;
    // for (let index = 0; index < number; index++) {
    //   this.latestNewsDots.push(index);
    // }


    const arrayObject = Object.keys(this.latestNewsList).map((key) => {
      const value = this.latestNewsList[key];
     this.filteredList.push(value);
    });
    console.log("filteredList",this.filteredList);
    
    return this.filteredList;

  }
latestNewSlider: number = 1;
  get latestNewsSliderStyle() {
    
    return {
      '--latest-news-num-slides': this.latestNewSlider *  6
    };
  }

 
  onLatesNewsScroll(index: number) {

    this.latestNewSlider= index;

    document.getElementById("cardSlider")?.classList.remove("card-slide");
    document.getElementById("cardSlider")?.classList.add("card-slide");

    

 
  }
  ngOnInit(): void {
    // const containerWidth = this.latestNewsList.length * 340 + (this.latestNewsList.length + 1) * 20; // Assuming 340px width for each item and 20px margin
// const sliderSection = document.getElementById('cardSlider');
// if(sliderSection) {
//   sliderSection.style.width = `${containerWidth}px`;

// }
    this.latestNewsDotsCount();
    this.selectedLang = localStorage.getItem('language');

    this.masterService.sectionRedierct.subscribe((sectionId: number)=>{
      this.sctionRedirectHandler(sectionId);
    });
    document.addEventListener("DOMContentLoaded", function () {
      const targetgroups = document.getElementById("targetgroups");
      const vision = document.getElementById("vision");
      const aboutUs = document.getElementById("aboutUs");
      const whatIsTrp = document.getElementById("whatIsTrp");

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


  slider: any;
  addAnimation() {
   document.getElementById("workTeam")?.setAttribute('--num-slides',"7")
  }

  state = 'hide';
  constructor(public el: ElementRef, private masterService: MasterService, private ngZone: NgZone) { }

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
      if(event == this.MobileViewWorkTeam) {
        document.getElementById("MobileViewWorkTeam")?.scrollIntoView(false);
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
