import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOurMenuComponent } from './menu-our-menu.component';

describe('MenuOurMenuComponent', () => {
  let component: MenuOurMenuComponent;
  let fixture: ComponentFixture<MenuOurMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOurMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOurMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
