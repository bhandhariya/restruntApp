import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReservationAreaComponent } from './home-reservation-area.component';

describe('HomeReservationAreaComponent', () => {
  let component: HomeReservationAreaComponent;
  let fixture: ComponentFixture<HomeReservationAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeReservationAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeReservationAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
