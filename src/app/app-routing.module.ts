import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home/home-screen/home-screen.component';
import { WatchScreenComponent } from './watch-screen/watch-screen.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { GroupScreenComponent } from './group-screen/group-screen.component';
import { GamingComponent } from './gaming/gaming.component';
import { ProfileScreenComponent } from './profile-screen/profile-screen.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'watch', component: WatchScreenComponent },
  { path: 'marketplace', component: MarketPlaceComponent },
  { path: 'groups', component: GroupScreenComponent },
  { path: 'gaming', component: GamingComponent },
  { path: 'profile', component: ProfileScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
