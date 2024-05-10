import { Component, HostListener, ElementRef, OnInit, NgZone, ViewChild, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Sections } from "../../shared/enums/enums.model";
import { MasterService } from 'src/app/shared/master.service';
import { Router } from '@angular/router';
import { SectionRedierction } from 'src/app/shared/interface/section-redirction.model';
import { LandingPage } from 'src/app/shared/interface/landing-page.model';
import { VisiionMission } from 'src/app/shared/interface/vision-misson.model';
import { SectionDetails } from 'src/app/shared/interface/section.model';
import { WorkTeam } from 'src/app/shared/interface/work-team.model';
import { Clients } from 'src/app/shared/interface/clients.model';
import { LatestNews } from 'src/app/shared/interface/latest-news.model';
import { Languages } from 'src/app/shared/interface/languages.model';
import { BehaviorSubject } from 'rxjs';
import { FacebookService, InitParams } from "ngx-facebook";
import * as AOS from "aos";




@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
})
export class MasterComponent implements OnInit, OnDestroy {

  constructor(public el: ElementRef, private masterService: MasterService, private router: Router,
    private facebookService: FacebookService
    
  ) { }


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

  clientsList: Clients[] = [ ];

  landingPageImageURL: string = '';
  visionAndMissionImage: string = '';

  clientImagesMobile: Clients[][] = [
   
    // Add more arrays if needed
  ];

  latestNewsList!:LatestNews[][] 
  
  latestNewsListMobile:LatestNews[] = [];

  languagesMobileList: any = [...this.latestNewsListMobile];

  @ViewChild('vision', { static: true }) visionElement!: any;
  @ViewChild('aboutus', { static: true }) aboutUsElement!: any;
  @ViewChild('whatIsTrp', { static: true }) whatIsTrpElement!: any;
  @ViewChild('targetGroup', { static: true }) targetGroupElement!: any;


  get sliderStyles() { 
    //important test
    
    if(this.clientsList.length >= 10) {
      const numSlides = this.clientsList.length;
      return {
        '--num-slides': numSlides - 9
      };
    }
    return {
      '--num-slides':0
    };
  }

  translateX: number = this.clientsList.length - 2;
  selectedLang!: any;

  latestNewsDots: any[] = [];
  filteredList: any[] = [];
  languagesList!: Languages[][];
  landingPage!: LandingPage;
  visionMission!: VisiionMission;

  aboutUsSections!:SectionDetails;
  targetGroupSections!:SectionDetails;
  whatIsTprSections!:SectionDetails;
  workTeams: WorkTeam[]=[];


  sectiondRed= new BehaviorSubject({
    sectionId:0,
    redierctUrl:""
  });

  imageObject = [{
    image: '../../../assets/images/client-1.jpeg',
    thumbImage: './../../assets/images/client-1.jpeg',
}, {
    image: '../../../assets/images/client-3.jpeg',
    thumbImage: '../../../assets/images/client-3.jpeg'
}, 
{
    image: '../../../assets/images/client-2.jpeg',
    thumbImage: '../../../assets/images/client-2.jpeg',
},
{
    image: '../../../assets/images/client-2.jpeg',
    thumbImage: '../../../assets/images/client-4.jpeg',
},
{
    image: '../../../assets/images/client-2.jpeg',
    thumbImage: '../../../assets/images/client-5.jpeg',
},
{
    image: '../../../assets/images/client-2.jpeg',
    thumbImage: '../../../assets/images/client-6.jpeg',
},
{
    image: '../../../assets/images/client-2.jpeg',
    thumbImage: '../../../assets/images/client-7.jpeg',
},

];
 
  ngOnDestroy(): void {
    // this.masterService.sectionRedierct.unsubscribe();
    // this.masterService.sectionRedierct.subscribe();

  }
  ngOnInit(): void {
    AOS.init();
    this.initFacebookService();

    this.selectedLang = localStorage.getItem('language');
    
    
    this.getSections();
    this.getLandingPgae();
    this.getVisiionAndMission();
    this.getWorkTeam();
    this.getClinets();
    this.getLanguages();
    this.getLatestNews();


    this.landingPageImageURL = "../../../assets/images/landing-page.jpg";
    this.visionAndMissionImage = "../../../assets//images/Vision&mission.jpeg";
    

   
    
    

    const vision = document.getElementById("vision");

    this.masterService.sectionRedierct.subscribe((result: SectionRedierction) => {

      if (result.sectionId) {
        this.router.navigate([result.redierctUrl]);
        this.sctionRedirectHandler(result.sectionId);
        vision?.classList.add("vision-mission-show-animation");
      }
    });
 

  }

  private initFacebookService(): void {
    const initParams: InitParams = { xfbml:true, version:"v3.2"};
    this.facebookService.init(initParams);
  }


  getLandingPgae() {
    this.masterService.getLandingPage().subscribe((response: any)=>{
      if(!response.error) {
        this.landingPage=response.data; 
        this.landingPageImageURL = "../../../assets/images/"+this.landingPage.imagePath;       
      }
    })
  }

  getVisiionAndMission() {

    this.masterService.getImages().subscribe((response: any)=>{
      if(!response.error) {
        this.visionMission=response.data[0];
        
      }
    })
  }

  getSections() {
    this.masterService.searchSections().subscribe((response: any)=>{
      if(!response.error) {
        this.aboutUsSections= response.data[0];
        this.whatIsTprSections= response.data[1];
        this.targetGroupSections= response.data[2];
        this.targetGroupSections.textEn.replace("\n", "\t");
        this.whatIsTprSections.textEn.replace("\n", "\t");
        this.aboutUsSections.textEn.replace("\n", "\t");

          
        }
    })
  }

  getWorkTeam() {
    this.masterService.getWorkTeam().subscribe((response: any)=>{
      if(!response.error) {
        this.workTeams=response.data;
        
      }
    })
  }

  getClinets() {
    this.masterService.searchClients().subscribe((response: any)=>{
      if(!response.error) {
        this.clientsList= response.data;
        this.customeImageClientListMobileView();
        
      }
    })
  }

  getLatestNews() {
    this.masterService.getLatestNews().subscribe((response: any)=>{
      if(!response.error) {
        this.latestNewsListMobile= response.data;
        this.latestNewsList = response.data;
        this.latestNewsList.sort(function(a:any, b:any){return b.id - a.id}); 

        this.latestNewsList= this.customeLatestNewsList(response.data);
        
        
        
        
      }
    })
  }

  getLanguages() {
    this.masterService.getLanguages().subscribe((response: any)=>{
      if(!response.error) {
        this.languagesMobileList= response.data;
        this.languagesList = response.data;
        this.languagesList.sort(function(a:any, b:any){return b.id - a.id}); 
        this.languagesList= this.customeLangugesList(response.data);
      }
    })
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

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {

    // if (this.isElementInViewport(this.visionElement.nativeElement)) {
    //   const vision = document.getElementById("vision");
    //   vision?.classList.add("vision-mission-show-animation");

    //   // Do something when the element is in viewport
    // }

    // if(this.isElementInViewport(this.aboutUsElement.nativeElement)) {
    //   const aboutUs = document.getElementById("aboutUs");
    //   document.getElementById("aboutUsParent")?.classList.replace("about-us", "about-us-show");
    //   document.getElementById("aboutUsText")?.classList.add("about-us-text");
    //   document.getElementById("trpAboutUsImage")?.classList.add("trp-image-about-us");
    // }

    // if(this.isElementInViewport(this.targetGroupElement.nativeElement)) {

      
    //   document.getElementById("targetGroupsParent")?.classList.replace("target-groups", "target-groups-show");
    //   document.getElementById("target-groups-text")?.classList.add("target-groups-text");
    //   document.getElementById("targetgroupsImage")?.classList.add("trp-image-target-group");

    
    // } 
    // if(this.isElementInViewport(this.whatIsTrpElement.nativeElement)) {

    //   document.getElementById("whatIsTrpParent")?.classList.replace("what-is-trp", "what-is-trp-show");
    //   document.getElementById("trpText")?.classList.add("trp-text");
    //   document.getElementById("whatIsTrpImage")?.classList.add("trp-image");

    //   setTimeout(()=>{
    //     document.getElementById("targetGroupsParent")?.classList.replace("target-groups", "target-groups-show");
    //     document.getElementById("target-groups-text")?.classList.add("target-groups-text");
    //     document.getElementById("targetgroupsImage")?.classList.add("trp-image-target-group");
    //   }, 1000)

    // }
  }

  onTouchStart(event: any) {
    console.log("target group onTouchStart");
    

  }
  isElementInViewport(el: HTMLElement) {
    
    // const rect = el.getBoundingClientRect();
    // const minViewportWidth = 50; // Example threshold, adjust as needed
    // const minViewportHeight = 50; // Example threshold, adjust as needed
    // if(name) {
    //   console.log(name);
    //   console.log(
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= Math.max(window.innerHeight || document.documentElement.clientHeight, minViewportHeight) &&
    //     rect.right <= Math.max(window.innerWidth || document.documentElement.clientWidth, minViewportWidth)
    //   );
      
    // }

    // // Set a minimum threshold for viewport dimensions
   
  
    // return (
    //   rect.top >= 0 &&
    //   rect.left >= 0 &&
    //   rect.bottom <= Math.max(window.innerHeight || document.documentElement.clientHeight, minViewportHeight) &&
    //   rect.right <= Math.max(window.innerWidth || document.documentElement.clientWidth, minViewportWidth)
    // );
    
    const rect = el.getBoundingClientRect();
    
    
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  latestNewsPageRedircation(latestNewsId: number) {
    this.router.navigate(["latest-news/"+latestNewsId]).then(()=>{
      // window.location.reload();
    });
  }
  
  articlesPageRedircation(articelId: number) {
    this.router.navigate(["articles/"+articelId]).then(()=>{
      // window.location.reload();
    });
  }



  

  customeImageClientListMobileView() {

    let list:any[]=[]
    if(this.clientsList.length<=12) {
      list.push(this.clientsList);
      this.clientImagesMobile = list;
      

    } else {
      this.clientsList.forEach((client: Clients)=>{
        list.push(client);
        
        if(list.length == 12) {
          this.clientImagesMobile.push(list);
          // push to origin list
          list=[];
        }
      });
      this.clientImagesMobile.push(list)

    }

  }


  customeLatestNewsList(latestNews: LatestNews[]): any[] {
    debugger;
    
  let list:any=[];
  let latestList: LatestNews[]=[];
  latestNews.forEach((latest:LatestNews)=>{
    latestList.push(latest);
    if(latestList.length == 3) {
      list.push(latestList);
      latestList=[];
    }
  });
  if(latestList.length) {
    list.push(latestList);

  }
  return list;

  }


  customeLangugesList(languages: Languages[]): any[] {
    debugger;
    
  let list:any=[];
  let languagesList: LatestNews[]=[];
  languages.forEach((latest:LatestNews)=>{
    languagesList.push(latest);
    if(languagesList.length == 3) {
      list.push(languagesList);
      languagesList=[];
    }
  });
  if(languagesList.length) {
    list.push(languagesList);

  }


  return list;
  

  }

}



// document.addEventListener("DOMContentLoaded", function () {
//   const targetgroups = document.getElementById("targetgroups");
//   const vision = document.getElementById("vision");
//   const aboutUs = document.getElementById("aboutUs");
//   const whatIsTrp = document.getElementById("whatIsTrp");

//   // Create an intersection observer
//   const observer = new IntersectionObserver(entries => {

//     entries.forEach(entry => {
//       if (entry.isIntersecting) {

//         // If the target element is in view, add the animation class

//       }
//     });
//   }, { threshold: 0.5 }); // Adjust the threshold as needed

//   // Start observing the target element
//   observer.observe(vision as HTMLElement);


  
//   window.addEventListener("scroll", function () {


//     // if (isElementInViewport(aboutUs)) {

//     //   console.log("about us");
      
//     //   // If the element is in the viewport, add your logic here
//     //   document.getElementById("aboutUsParent")?.classList.replace("about-us", "about-us-show");

//     //   document.getElementById("aboutUsText")?.classList.add("about-us-text");
//     //   document.getElementById("trpAboutUsImage")?.classList.add("trp-image-about-us");


//     //   aboutUs?.classList.remove("hide-section");

//     // } else {
//     //   console.log("not about us");

//     // }

//     // if (isElementInViewport(whatIsTrp)) {
//     //   console.log("whatIsTrp");

//     //   document.getElementById("whatIsTrpParent")?.classList.replace("what-is-trp", "what-is-trp-show");

//     //   document.getElementById("trpText")?.classList.add("trp-text");
//     //   document.getElementById("whatIsTrpImage")?.classList.add("trp-image");




//     // } else {

//     // }

//     // if (isElementInViewport(targetgroups)) {
//     //   console.log("targetgroups");

//     //   document.getElementById("targetGroupsParent")?.classList.replace("target-groups", "target-groups-show");


//     //   document.getElementById("target-groups-text")?.classList.add("target-groups-text");
//     //   document.getElementById("targetgroupsImage")?.classList.add("trp-image-target-group");

//     // } else {

//     // }

//     if (isElementInViewport(vision)) {

//       // vision?.classList.add("vision-mission-show-animation");


//     } else {

//     }
//   });
//   function isElementInViewport(el: any) {
    
    
//     const rect = el.getBoundingClientRect();
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)

//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

// });

