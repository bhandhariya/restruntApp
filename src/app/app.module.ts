import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { HomeSliderComponent } from './shared/component/home-slider/home-slider.component';
import { HomeAboutAreaComponent } from './shared/component/home-about-area/home-about-area.component';
import { HomeDeliciousAreaComponent } from './shared/component/home-delicious-area/home-delicious-area.component';
import { HomeTestimonialAreaComponent } from './shared/component/home-testimonial-area/home-testimonial-area.component';
import { HomeGalleryAreaComponent } from './shared/component/home-gallery-area/home-gallery-area.component';
import { HomeReservationAreaComponent } from './shared/component/home-reservation-area/home-reservation-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeSliderComponent,
    HomeAboutAreaComponent,
    HomeDeliciousAreaComponent,
    HomeTestimonialAreaComponent,
    HomeGalleryAreaComponent,
    HomeReservationAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
