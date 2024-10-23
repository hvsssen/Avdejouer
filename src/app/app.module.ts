import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { FooterComponent } from './footer/footer.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TousComponent } from './tous/tous.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteHeaderComponent,
    FooterComponent,
    PromotionsComponent,
    LeftMenuComponent,
    TousComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
