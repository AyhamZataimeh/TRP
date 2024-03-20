import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddressPrivateComponent } from './course-address-private.component';

describe('CourseAddressPrivateComponent', () => {
  let component: CourseAddressPrivateComponent;
  let fixture: ComponentFixture<CourseAddressPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAddressPrivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseAddressPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
