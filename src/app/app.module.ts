import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TravelFeedComponent } from './travel-feed/travel-feed.component';
import { TravelListComponent } from './travel-feed/travel-list/travel-list.component';
import { TravelDetailComponent } from './travel-feed/travel-detail/travel-detail.component';
import { TravelItemComponent } from './travel-feed/travel-list/travel-item/travel-item.component';
import { TravelService } from './travel-feed/travel.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    UserDashboardComponent,
    TravelFeedComponent,
    TravelListComponent,
    TravelDetailComponent,
    TravelItemComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [TravelService],
  bootstrap: [AppComponent],
})
export class AppModule {}
