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
    window.onscroll = function() {
      // When scrolling occurs, add or remove a class to an element to change its style
      var registerationBtn = document.querySelector('.register');
      if (registerationBtn) {
        if (window.scrollY > 100) {
          registerationBtn.classList.add('stickyBtnScrolling');
        } else {
          registerationBtn.classList.remove('stickyBtnScrolling');
        }
      }
    };
  }

  setLanguage() {
    this. selectedlanguage= localStorage.getItem("language");
    if(!this.selectedlanguage) {
      localStorage.setItem('language', 'en');
      this. selectedlanguage= localStorage.getItem("language");
    } 
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
