import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGalleryAreaComponent } from './home-gallery-area.component';

describe('HomeGalleryAreaComponent', () => {
  let component: HomeGalleryAreaComponent;
  let fixture: ComponentFixture<HomeGalleryAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGalleryAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGalleryAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
