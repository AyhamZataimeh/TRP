import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { Blogs } from '../interface/blogs';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  blogsData!: Blogs;
  constructor( private masterService: MasterService) {}

  ngOnInit(): void {
    this.masterService.blogsData.subscribe((result:Blogs )=>{
      this.blogsData = result;
    });
  }

}
