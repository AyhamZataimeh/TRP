import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from './main-service.service';
import { ServiceDetails } from 'src/app/shared/interface/service-details.model';
import { Services } from 'src/app/shared/interface/services.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {

  services: Services[]=[];

  serviceId!: number;
  serviceDetails: ServiceDetails[]=[];
  service!: Services | undefined;

  constructor(private route: ActivatedRoute, private mainService: MainService){}
  ngOnInit(): void {
    
    this.serviceId=this.route.snapshot.params['id'];
    console.log(this.serviceId);
    
    this.getServiceDetails();
    this.gerService();
  }


  
  getServiceDetails() {
    this.mainService.getServiceDetailsById(this.serviceId).subscribe((response: any)=>{
      if(!response.error) {
        this.serviceDetails= response.data;
        
      }
    });
   }

   gerService() {
    this.mainService.geServices().subscribe((response: any)=>{
      if(!response.error) {
        this.services = response.data;
        this.service = this.services.find((service: Services)=> service.id == this.serviceId);
      }
     })
   }

   ngOnDestroy(): void {

    
   }

}
