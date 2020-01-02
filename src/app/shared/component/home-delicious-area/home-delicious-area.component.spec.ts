import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDeliciousAreaComponent } from './home-delicious-area.component';

describe('HomeDeliciousAreaComponent', () => {
  let component: HomeDeliciousAreaComponent;
  let fixture: ComponentFixture<HomeDeliciousAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDeliciousAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDeliciousAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
