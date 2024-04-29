import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { Blogs } from '../interface/blogs';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/pages/services/main-service.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  blogsData!: Blogs;
  selectedLang!: any;
  blogsId!: number;
  constructor( private masterService: MasterService, private activatedRoute: ActivatedRoute,private mainService: MainService) {}

  ngOnInit(): void {
    this.blogsId =this.activatedRoute.snapshot.params["id"];
    console.log(this.blogsId );
    
    this.selectedLang = localStorage.getItem('language');
    this.masterService.blogsData.subscribe((result:Blogs )=>{
      this.blogsData = result;
      console.log(this.blogsData);
      
    });
  }

}
