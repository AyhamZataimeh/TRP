import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Blogs } from './interface/blogs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  sectionRedierct: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  blogsData: BehaviorSubject<Blogs> = new BehaviorSubject<Blogs>({
    id:0,
    title:"",
    text:"",
    imagePath:""
  });


}
