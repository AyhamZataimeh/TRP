import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from "@angular/common"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TranslateService]
})
export class AppComponent implements OnInit {
  title = 'TRP';
  selectedlanguage!: any

  constructor(private translateService: TranslateService, private render: Renderer2,
     @Inject(DOCUMENT) private document: Document) {
    this.setLanguage();
  }

  ngOnInit(): void {
    // this.setLanguage();
  }

  setLanguage() {
    this. selectedlanguage= localStorage.getItem("language"); 
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.selectedlanguage);

    this.translateService.onLangChange.subscribe((lang) => {

      const dir = lang.lang === 'en' ? 'ltr' : 'rtl';

      this.render.setAttribute(
        this.document.querySelector('html'),
        'lang',
        lang?.lang
      );
      this.render.setAttribute(
        this.document.querySelector('html'),
        'dir',
        dir
      );
      this.render.setAttribute(
        this.document.querySelector('body'),
        'dir',
        dir
      );
    });
  }
}
