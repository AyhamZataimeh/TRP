import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-address',
  templateUrl: './courses-address.component.html',
  styleUrls: ['./courses-address.component.css']
})
export class CoursesAddressComponent implements OnInit {


  coursesAddressList: any[] = [
    {
      id: 1,
      governaret: {
        id: 1,
        name:"عمان"
      },
      location: "المقابلين",
      Address :"شارع الحرية – قرب مدرسة الحفاظ – بالقرب من كريم ماركت – مجمع النديم 2 – الطابق الثالث",
      phoneNumber: "0778158732",
      locationUrl:"https://maps.app.goo.gl/ZcpLjrwnCqhDbTzo9"
    },
    {
      id: 1,
      governaret: {
        id: 1,
        name:"عمان"
      },
      location: "طبربور",
      Address : "مقابل حلويات النجمة – مجمع السلام – الطابق الثاني – مكتب 205",
      phoneNumber: "0778158732",
      locationUrl:"https://maps.app.goo.gl/ZcpLjrwnCqhDbTzo9"
    },
    {
      id: 1,
      governaret: {
        id: 1,
        name:"عمان"
      },
      location: "أبو نصير",
      Address : "في مركز سينيرجي – شارع أبو نصير – مجمع صيام التجاري (فوق ليدرز) – الطابق الثاني – مكتب 201",
      phoneNumber: "0778158732",
      locationUrl:"https://maps.app.goo.gl/ZcpLjrwnCqhDbTzo9"
    },

    {
      id: 1,
      governaret: {
        id: 1,
        name:"الزرقاء الجديدة"
      },
      location: "في مركز وأكاديمية البركة: من شارع الكرامة، ندخل دخلة مقهى بوليوود – ثم الدخلة الثالثة من جهة اليسار – ثم ثاني دخلة عاليسار – ثم يمين ثم يسار، ثم نتحرك 200 متر  للأمام – الموقع فوق روضة عالَمي الآمن – الطابق الثاني",
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
