import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: any[]=[
    {
      id: 1,
      text:"Text 1",
      imagePath: '../../../assets/images/About-us.jpeg'
    },
    {
      id: 1,
      text:"Text 1",
      imagePath: '../../../assets/images/About-us.jpeg'
    },
    {
      id: 1,
      text:"Text 1",
      imagePath: '../../../assets/images/About-us.jpeg'
    },
    {
      id: 1,
      text:"Text 1",
      imagePath: '../../../assets/images/About-us.jpeg'
    },
    
  ];
  constructor(){}
  ngOnInit(): void {
    
  }

}
