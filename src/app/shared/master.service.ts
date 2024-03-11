import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Blogs } from './interface/blogs';
import { SectionRedierction } from './interface/section-redirction.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  
  sectionRedierct: BehaviorSubject<SectionRedierction> = new BehaviorSubject<SectionRedierction>({sectionId: 0, redierctUrl:""});
  blogsData: BehaviorSubject<Blogs> = new BehaviorSubject<Blogs>({
    id:0,
    title:"",
    text:"",
    imagePath:""
  });


}
