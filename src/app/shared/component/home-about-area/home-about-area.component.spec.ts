import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutAreaComponent } from './home-about-area.component';

describe('HomeAboutAreaComponent', () => {
  let component: HomeAboutAreaComponent;
  let fixture: ComponentFixture<HomeAboutAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAboutAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAboutAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
