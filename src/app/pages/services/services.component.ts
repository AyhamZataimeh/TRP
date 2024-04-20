import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from './main-service.service';
import { ServiceDetails } from 'src/app/shared/interface/service-details.model';
import { Services } from 'src/app/shared/interface/services.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: any[]=[];

  serviceId!: number;
  serviceDetails: ServiceDetails[]=[];
  service!: Services;

  constructor(private route: ActivatedRoute, private mainService: MainService){}
  ngOnInit(): void {
    
    this.serviceId=this.route.snapshot.params['id'];
    this.getServiceDetails();
  }


  
  getServiceDetails() {
    this.mainService.getServiceDetailsById(this.serviceId).subscribe((response: any)=>{
      if(!response.error) {
        this.serviceDetails= response.data;
        console.log(this.serviceDetails);
        
        this.service = this.serviceDetails[0].service;
      }
    })
   }

}
