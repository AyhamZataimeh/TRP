import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Services } from 'src/app/shared/interface/services.model';
import * as cofig from "../../../assets/config/config-api.json";
import { Configuration } from 'src/app/shared/interface/configuration.model';
import { Observable } from 'rxjs';
import { ServiceDetails } from 'src/app/shared/interface/service-details.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  config: Configuration= cofig;


  geServices(): Observable<Services> {

    return this.http.get<Services>(this.config.API+"services",{
      params:{
        name: ""
      }
    });
  }


  getServiceDetailsById(serviceId:number ): Observable<ServiceDetails> {
    return this.http.get<ServiceDetails>(this.config.API+"services-details",{
      params:{
        serviceId: serviceId
      }
    });
  }


}
