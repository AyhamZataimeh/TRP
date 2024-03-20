import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-address-private',
  templateUrl: './course-address-private.component.html',
  styleUrls: ['./course-address-private.component.css']
})
export class CourseAddressPrivateComponent implements OnInit {


  coursesAddressList: any[] = [
    {
      id: 1,
      governaret: {
        id: 1,
        name:"Amman"
      },
      location: "Abu nseer",
      Address : "ي أكاديمية الأركان التفاعلية – بالقرب من مخبر الفريد – فوق أبو ليلى – الطابق الثال",
      phoneNumber: "0778158732",
      locationUrl:"https://maps.app.goo.gl/ZcpLjrwnCqhDbTzo9"
    },
    {
      id: 1,
      governaret: {
        id: 1,
        name:"Amman"
      },
      location: "Abu nseer",
      Address : "مركز هبة السماء – مقابل كارفور – مجمع النور التجاري (فوق بيولاب) – الطابق الثاني",
      phoneNumber: "0778158732",
      locationUrl:"https://maps.app.goo.gl/ZcpLjrwnCqhDbTzo9"
    },
    {
      id: 1,
      governaret: {
        id: 1,
        name:"Amman"
      },
      location: "Abu nseer",
      Address : "st-12",
      phoneNumber: "0778158732",
      locationUrl:"https://maps.app.goo.gl/ZcpLjrwnCqhDbTzo9"
    },

    {
      id: 1,
      governaret: {
        id: 1,
        name:"Amman"
      },
      location: "Abu nseer",
      Address : "st-12",
      phoneNumber: "0778158732",
      locationUrl:"https://maps.app.goo.gl/ZcpLjrwnCqhDbTzo9"
    },
    {
      id: 1,
      governaret: {
        id: 1,
        name:"Amman"
      },
      location: "Abu nseer",
      Address : "st-12",
      phoneNumber: "0778158732",
      locationUrl:"https://maps.app.goo.gl/ZcpLjrwnCqhDbTzo9"
    },
    {
      id: 1,
      governaret: {
        id: 1,
        name:"Amman"
      },
      location: "Abu nseer",
      Address : "st-12",
      phoneNumber: "0778158732",
      locationUrl:"https://maps.app.goo.gl/ZcpLjrwnCqhDbTzo9"
    },
    {
      id: 1,
      governaret: {
        id: 1,
        name:"Amman"
      },
      location: "Abu nseer",
      Address : "st-12",
      phoneNumber: "0778158732",
      locationUrl:"https://maps.app.goo.gl/ZcpLjrwnCqhDbTzo9"
    },
  ]


  constructor() {}

  ngOnInit(): void {
    
  }

  
}
