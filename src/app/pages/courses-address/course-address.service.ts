import { Injectable } from '@angular/core';
import * as cofig from "../../../assets/config/config-api.json";
import { Configuration } from 'src/app/shared/interface/configuration.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseDetails } from 'src/app/shared/interface/course-details.model';
@Injectable({
  providedIn: 'root'
})
export class CourseAddressService {

  config: Configuration= cofig;
  constructor(private http: HttpClient) { }

  getCourseHeader() {
    return this.http.get(this.config.API+ "courses-details-header");
  }


  getCoursesAddress(locationId : number): Observable<CourseDetails> {
    return this.http.get<CourseDetails>(this.config.API+ "courses-details",{
      params:{
        locationId : locationId 
      }
    });
  }

  getGovernartes(): Observable<Location> {
    return this.http.get<Location>(this.config.API+ "courses-location");
  }


}
