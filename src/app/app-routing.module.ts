import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TravelFeedComponent } from './travel-feed/travel-feed.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TravelDetailComponent } from './travel-feed/travel-detail/travel-detail.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/travel-feed', pathMatch: 'full' },
  { path: 'travel-feed', component: TravelFeedComponent },
  { path: 'travel-detail/:id', component: TravelDetailComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
