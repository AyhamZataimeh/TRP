import { Component, OnInit } from '@angular/core';
import { CourseDetailsHeader } from 'src/app/shared/interface/course-details-header';
import { CourseDetails } from 'src/app/shared/interface/course-details.model';
import { CourseAddressService } from './course-address.service';

@Component({
  selector: 'app-courses-address',
  templateUrl: './courses-address.component.html',
  styleUrls: ['./courses-address.component.css']
})
export class CoursesAddressComponent implements OnInit {


  coursesAddressList: CourseDetails[] = [];
  courseHeader: CourseDetailsHeader[]=[];
  headerLeft: any;
  headerCenter: any;
  headerRight: any;
  constructor(private courseAddressService: CourseAddressService) {}

  ngOnInit(): void {
    
    this.getCourseDetails();
    this.getCourseHeader();
  }

  getCourseDetails() {

    this.courseAddressService.getCoursesAddress(0).subscribe((response: any)=>{
      if(!response.error) {
        this.coursesAddressList= response.data;
        
        this.coursesAddressList.sort(function(a:any, b:any){return b.courcesLocation.locationsId  - a.courcesLocation.locationsId}); // sort array in acc order based locationsId

      }
    })
  }

  getCourseHeader() {
    this.courseAddressService.getCourseHeader().subscribe((response: any)=>{
      if(!response.error) {
        this.headerLeft = response.data[0].headerLeft;
        this.headerCenter = response.data[0].headerCenter;
        this.headerRight = response.data[0].headerRight
      }
    })
  }

  
}
