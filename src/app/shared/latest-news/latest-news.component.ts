import { Component, OnInit } from '@angular/core';
import { Blogs } from '../interface/blogs';
import { MasterService } from '../master.service';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/pages/services/main-service.service';
import { LatestNews } from '../interface/latest-news.model';


@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent {


  latestNewsList: LatestNews[]=[];
  selectedLang!: any;
  latestNewsId!: number;
  latesNews!: LatestNews | undefined;
  constructor( private masterService: MasterService, private activatedRoute: ActivatedRoute,private mainService: MainService) {}

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('language');
    this.latestNewsId =this.activatedRoute.snapshot.params["id"];
    this.masterService.getLatestNews().subscribe((response: any)=>{
      if(!response.error) {
        this.latestNewsList = response.data;
        this.latesNews = this.latestNewsList.find((latestNews: LatestNews)=> latestNews.id == this.latestNewsId)
      }
    })
    
   
  }

}
