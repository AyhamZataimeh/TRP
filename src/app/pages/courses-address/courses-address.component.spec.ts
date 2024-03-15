import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAddressComponent } from './courses-address.component';

describe('CoursesAddressComponent', () => {
  let component: CoursesAddressComponent;
  let fixture: ComponentFixture<CoursesAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
