import { Component, OnInit } from '@angular/core';
import { CourseAddressService } from '../courses-address/course-address.service';
import { CourseDetails } from 'src/app/shared/interface/course-details.model';
import {Location} from "../../shared/interface/loacation.model";

@Component({
  selector: 'app-course-address-private',
  templateUrl: './course-address-private.component.html',
  styleUrls: ['./course-address-private.component.css']
})
export class CourseAddressPrivateComponent implements OnInit {


  coursesAddressList: CourseDetails[] = []
  headerLeft: any;
  headerCenter: any;
  headerRight: any;

  locationId: number= 0;
  locations:Location[]=[];
  locationAddress: any=[];


  constructor(private courseAddressService: CourseAddressService) {}

  ngOnInit(): void {
    
    this.getCourseDetails(0);
    this.getCourseHeader();
    this.getLocation();
  }

  getCourseDetails(locationId:number, address:string ="") {

    console.log(address);
    
    this.courseAddressService.getCoursesAddress(locationId).subscribe((response: any)=>{
      if(!response.error) {
        this.coursesAddressList= response.data;
        if(locationId >  0 && !address) {
          this.locationAddress= this.coursesAddressList.filter((courseAddress: CourseDetails)=> courseAddress.courcesLocation.locationsId == locationId);
         
        }

        if(address) {
          this.coursesAddressList = this.coursesAddressList.filter((courseDetails: CourseDetails)=> courseDetails.address.includes(address));
        }

        this.coursesAddressList.sort(function(a:any, b:any){return b.courcesLocation.locationsId  - a.courcesLocation.locationsId}); // sort array in acc order based on locationsId

      }
    });
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
  

  getLocation() {
    this.courseAddressService.getGovernartes().subscribe((response: any)=>{
      if(!response.error) {
        this.locations = response.data;
      }
    })
  }

  onLocationChange(event: any) {
    this.locationId = event.target.value;
    this.getCourseDetails(event.target.value);
  }

  onAddressChange(event: any) {
   this.getCourseDetails(this.locationId, event.target.value);
  }
}
