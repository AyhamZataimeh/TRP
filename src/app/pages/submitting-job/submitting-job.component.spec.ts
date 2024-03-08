import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittingJobComponent } from './submitting-job.component';

describe('SubmittingJobComponent', () => {
  let component: SubmittingJobComponent;
  let fixture: ComponentFixture<SubmittingJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittingJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmittingJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
