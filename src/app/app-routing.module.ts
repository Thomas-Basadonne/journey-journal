import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TravelFeedComponent } from './travel-feed/travel-feed.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TravelDetailComponent } from './travel-feed/travel-detail/travel-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/travel-feed', pathMatch: 'full' },
  { path: 'travel-feed', component: TravelFeedComponent },
  { path: 'travel-detail/:id', component: TravelDetailComponent },
  { path: 'dashboard', component: UserDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
