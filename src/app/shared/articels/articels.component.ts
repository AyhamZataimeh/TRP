import { Component, OnInit } from '@angular/core';
import { Blogs } from '../interface/blogs';
import { MasterService } from '../master.service';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/pages/services/main-service.service';
import { Languages } from '../interface/languages.model';

@Component({
  selector: 'app-articels',
  templateUrl: './articels.component.html',
  styleUrls: ['./articels.component.css']
})
export class ArticelsComponent implements OnInit {


  articlesList:Languages[]=[];
  articles!:Languages | undefined;
  articlesId!:number;
  selectedLang!: any;
  constructor( private masterService: MasterService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('language');
    this.articlesId =this.activatedRoute.snapshot.params["id"];
    this.masterService.getLanguages().subscribe((response: any)=>{
      if(!response.error) {
        this.articlesList = response.data;
        this.articles = this.articlesList.find((articel: Languages)=> articel.id == this.articlesId);
      }
    })
    
    
  }

}
