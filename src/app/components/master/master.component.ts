import { Component, HostListener, ElementRef, OnInit, NgZone } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Sections } from "../../shared/enums/enums.model";
import { MasterService } from 'src/app/shared/master.service';
import { Blogs } from 'src/app/shared/interface/blogs';
import { Router } from '@angular/router';
import { SectionRedierction } from 'src/app/shared/interface/section-redirction.model';



@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  animations: [
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

  constructor(public el: ElementRef, private masterService: MasterService, private router: Router) { }

  public get AboutUs(): Sections.AboutUs {
    return Sections.AboutUs;
  }

  public get TargetGroups(): Sections.TargetGroups {
    return Sections.TargetGroups;
  }

  public get WhatIsTrp(): Sections.WhatIsTrp {
    return Sections.WhatIsTrp;
  }

  public get WorkTeam(): Sections.WorkTeam {
    return Sections.WorkTeam
  }
  public get OurPartners(): Sections.OurPartners {
    return Sections.OurPartners;
  }

  public get LatestNews(): Sections.LatestNews {
    return Sections.LatestNews;
  }


  public get Languages(): Sections.Languages {
    return Sections.Languages;
  }


  public get MobileViewWorkTeam(): Sections.MobileViewWorkTeam {
    return Sections.MobileViewWorkTeam;
  }
  interval: any;
  currentIndex = 0;



  workTeamList: any[] = [
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

  clientsList: any[] = [
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

    {
      image: "../../assets/images/client-4.jpeg"
    },

    {
      image: "../../assets/images/client-4.jpeg"
    },

    {
      image: "../../assets/images/client-4.jpeg"
    },

    {
      image: "../../assets/images/client-4.jpeg"
    },

    {
      image: "../../assets/images/client-4.jpeg"
    },

    {
      image: "../../assets/images/client-4.jpeg"
    },

    {
      image: "../../assets/images/client-4.jpeg"
    }
  ];

  clientImagesMobile: string[][] = [
    ["../../assets/images/client-1.jpeg", "../../assets/images/client-2.jpeg", "../../assets/images/client-3.jpeg", "../../assets/images/client-4.jpeg", "../../assets/images/client-5.jpeg", "../../assets/images/client-6.jpeg", "../../assets/images/client-7.jpeg", "../../assets/images/client-4.jpeg", "../../assets/images/client-3.jpeg", "../../assets/images/client-2.jpeg", "../../assets/images/client-1.jpeg", "../../assets/images/client-7.jpeg" /* more images */],
    ["../../assets/images/client-1.jpeg", "../../assets/images/client-2.jpeg", "../../assets/images/client-3.jpeg", "../../assets/images/client-4.jpeg", "../../assets/images/client-5.jpeg", "../../assets/images/client-6.jpeg", "../../assets/images/client-7.jpeg", "../../assets/images/client-4.jpeg", "../../assets/images/client-3.jpeg", "../../assets/images/client-2.jpeg", "../../assets/images/client-1.jpeg", "../../assets/images/client-7.jpeg" /* more images */],
    ["../../assets/images/client-1.jpeg", "../../assets/images/client-2.jpeg", "../../assets/images/client-3.jpeg", "../../assets/images/client-4.jpeg", "../../assets/images/client-5.jpeg", "../../assets/images/client-6.jpeg", "../../assets/images/client-7.jpeg", "../../assets/images/client-4.jpeg", "../../assets/images/client-3.jpeg", "../../assets/images/client-2.jpeg", "../../assets/images/client-1.jpeg", "../../assets/images/client-7.jpeg" /* more images */],
    ["../../assets/images/client-1.jpeg", "../../assets/images/client-2.jpeg", "../../assets/images/client-3.jpeg", "../../assets/images/client-4.jpeg", "../../assets/images/client-5.jpeg", "../../assets/images/client-6.jpeg", "../../assets/images/client-7.jpeg", "../../assets/images/client-4.jpeg", "../../assets/images/client-3.jpeg", "../../assets/images/client-2.jpeg", "../../assets/images/client-1.jpeg", "../../assets/images/client-7.jpeg" /* more images */]
    // Add more arrays if needed
  ];

  latestNewsList: any = {
    item1: [
      {
        id: 3,
        title: "Optimiza Cybersecurity Event in collaboration with Cisco and under the Patronage of HE Eng. Bassam Maharmeh, President of NCSCJO in Jordan",
        text: "From our Cybersecurity event under the patronage of his excellency Eng. Bassam Maharmeh the  president of the National Cyber Security Center (NCSCJO) in #Jordan and in partnership with Cisco Special thanks to cisco vibrant team Maher Ramadan , Ala AlMasri , Alaa Al-Hunaity , Akram Hamed , Elie Rahal and Rami Abbas",
        imagePath: "../../../assets/images/image-1.jpeg"
      },
      {
        id: 3,
        title: "Zakaria bello",
        text: "CHR2",
        imagePath: "../../../assets/images/image-2.jpeg"
      },
      {
        id: 3,
        title: "Prime Ministry’s Meeting Room Steps into the Future with State-of-the-Art AV and Lighting Systems",
        text: "We are delighted to announce the successful implementation of a suite of digital transformation solutions at Al Kaseeh Company, a prominent player in the food products industry. The adoption of these digital solutions, which include ImageLinks and Accuality will enhance their operational capabilities and reinforce their position as industry leaders. We extend our sincere appreciation to Al Kaseeh team for their trust and collaboration, which greatly contributed to the success of this project",
        imagePath: "../../../assets/images/landing-page.jpg"
      },
    ],
    item2: [
      {
        id: 3,
        title: "Zakaria bello",
        text: "CHR4",
        imagePath: "../../../assets/images/avatar-3.jpeg"
      },
      {
        id: 3,
        title: "Zakaria bello",
        text: "CHR5",
        imagePath: "../../../assets/images/avatar-3.jpeg"
      },
      {
        id: 3,
        title: "Zakaria bello",
        text: "CHR6",
        imagePath: "../../../assets/images/avatar-3.jpeg"
      },

    ]
  }

  latestNewsListMobile:any = [
      {
        id: 1,
        title: "Mahmoud Saleh",
        text: "CHR1",
        imagePath: "../../../assets/images/avatar-3.jpeg"
      },
      {
        id: 2,
        title: "Ayham Zataimeh",
        text: "CHR2",
        imagePath: "../../../assets/images/avatar-3.jpeg"
      },
      {
        id: 3,
        title: "Zakaria bello",
        text: "CHR3",
        imagePath: "../../../assets/images/avatar-3.jpeg"
      },
      {
        id: 4,
        title: "Zakaria bello",
        text: "CHR4",
        imagePath: "../../../assets/images/avatar-3.jpeg"
      },
      {
        id: 5,
        title: "Zakaria bello",
        text: "CHR5",
        imagePath: "../../../assets/images/avatar-3.jpeg"
      },
      {
        id: 6,
        title: "Zakaria bello",
        text: "CHR6",
        imagePath: "../../../assets/images/avatar-3.jpeg"
      }
  ];

  languagesMobileList: any = [...this.latestNewsListMobile];


  get sliderStyles() {
    const numSlides = this.clientsList.length;
    return {
      '--num-slides': numSlides - 9
    };
  }

  translateX: number = this.clientsList.length - 2;
  selectedLang!: any;

  latestNewsDots: any[] = [];
  filteredList: any[] = [];
  languagesList: any[] = [];

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

    this.languagesList = [...this.filteredList]

  }
  latestNewSlider: number = 1;
  get latestNewsSliderStyle() {

    return {
      '--latest-news-num-slides': this.latestNewSlider * 6
    };
  }


  onLatesNewsScroll(index: number) {


    this.latestNewSlider = index;

    document.getElementById("cardSlider")?.classList.remove("card-slide");
    document.getElementById("cardSlider")?.classList.add("card-slide");




  }
  ngOnInit(): void {

    this.latestNewsDotsCount();
    this.selectedLang = localStorage.getItem('language');
    const vision = document.getElementById("vision");

    this.masterService.sectionRedierct.subscribe((result: SectionRedierction) => {
      console.log(result.sectionId);

      if (result.sectionId) {
        this.router.navigate([result.redierctUrl]);
        this.sctionRedirectHandler(result.sectionId);
        vision?.classList.add("vision-mission-show-animation");
      }


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
            console.log("vision-mission-show-animation", true);

            // If the target element is in view, add the animation class

          }
        });
      }, { threshold: 0.5 }); // Adjust the threshold as needed

      // Start observing the target element
      observer.observe(vision as HTMLElement);



      window.addEventListener("scroll", function () {
        console.log("start scroll");


        if (isElementInViewport(aboutUs)) {

          // If the element is in the viewport, add your logic here
          document.getElementById("aboutUsParent")?.classList.replace("about-us", "about-us-show");

          document.getElementById("aboutUsText")?.classList.add("about-us-text");
          document.getElementById("trpAboutUsImage")?.classList.add("trp-image-about-us");


          aboutUs?.classList.remove("hide-section");

        } else {

        }

        if (isElementInViewport(whatIsTrp)) {

          document.getElementById("whatIsTrpParent")?.classList.replace("what-is-trp", "what-is-trp-show");

          document.getElementById("trpText")?.classList.add("trp-text");
          document.getElementById("whatIsTrpImage")?.classList.add("trp-image");




        } else {

        }

        if (isElementInViewport(targetgroups)) {
          document.getElementById("targetGroupsParent")?.classList.replace("target-groups", "target-groups-show");


          document.getElementById("target-groups-text")?.classList.add("target-groups-text");
          document.getElementById("targetgroupsImage")?.classList.add("trp-image-target-group");

        } else {

        }

        if (isElementInViewport(vision)) {

          vision?.classList.add("vision-mission-show-animation");


        } else {

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
    document.getElementById("workTeam")?.setAttribute('--num-slides', "7")
  }

  state = 'hide';

  sctionRedirectHandler(event: number) {
    document.getElementById("whatIsTrpParent")?.classList.replace("what-is-trp", "what-is-trp-show");

    document.getElementById("trpText")?.classList.add("trp-text");
    document.getElementById("whatIsTrpImage")?.classList.add("trp-image");
    document.getElementById("targetGroupsParent")?.classList.replace("target-groups", "target-groups-show");


    document.getElementById("target-groups-text")?.classList.add("target-groups-text");
    document.getElementById("targetgroupsImage")?.classList.add("trp-image-target-group");
    document.getElementById("aboutUsParent")?.classList.replace("about-us", "about-us-show");

    document.getElementById("aboutUsText")?.classList.add("about-us-text");
    document.getElementById("trpAboutUsImage")?.classList.add("trp-image-about-us");

    setTimeout(() => {
      if (event == this.AboutUs) {
        document.getElementById("aboutUs")?.scrollIntoView();

      }
      if (event == this.WhatIsTrp) {
        document.getElementById("whatIsTrp")?.scrollIntoView();

      }
      if (event == this.TargetGroups) {

        document.getElementById("targetgroups")?.scrollIntoView(false);

      }
      if (event == this.WorkTeam) {
        document.getElementById("workTeam")?.scrollIntoView(false);

      }
      if (event == this.MobileViewWorkTeam) {
      }
      if (event == this.OurPartners) {
        document.getElementById("clientsSection")?.scrollIntoView(false);


      }
      if (event == this.LatestNews) {
        document.getElementById("latestNewsSection")?.scrollIntoView(false);
      }
      if (event == this.Languages) {
        document.getElementById("languagesSection")?.scrollIntoView(false);
      }
    },)


  }
  pos: number = 0;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {


    document.documentElement.offsetTop

    this.pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;



  }



  dynamicPageRedircation(blogsData: Blogs) {

    this.masterService.blogsData.next(blogsData);
    this.router.navigate(["/dynamic"]);

  }

}
