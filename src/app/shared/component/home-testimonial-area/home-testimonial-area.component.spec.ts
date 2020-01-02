import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestimonialAreaComponent } from './home-testimonial-area.component';

describe('HomeTestimonialAreaComponent', () => {
  let component: HomeTestimonialAreaComponent;
  let fixture: ComponentFixture<HomeTestimonialAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTestimonialAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTestimonialAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
