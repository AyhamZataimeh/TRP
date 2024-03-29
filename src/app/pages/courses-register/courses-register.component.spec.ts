import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesRegisterComponent } from './courses-register.component';

describe('CoursesRegisterComponent', () => {
  let component: CoursesRegisterComponent;
  let fixture: ComponentFixture<CoursesRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
