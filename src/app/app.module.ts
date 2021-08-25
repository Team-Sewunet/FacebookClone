import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YezionComponent } from './yezion/yezion.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { LeftSidebarComponent } from './home/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './home/right-sidebar/right-sidebar.component';
import { ProfileScreenComponent } from './profile-screen/profile-screen.component';
import { HomeScreenComponent } from './home/home-screen/home-screen.component';
import { NewsFeedComponent } from './home/news-feed/news-feed.component';
import { PostComponent } from './home/post/post.component';
import { GroupScreenComponent } from './group-screen/group-screen.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { WatchScreenComponent } from './watch-screen/watch-screen.component';
import { GamingComponent } from './gaming/gaming.component';
import { StoryComponent } from './home/story/story.component';
import { PostContainerComponent } from './home/post-container/post-container.component';
import { CreatePostBoxComponent } from './home/create-post-box/create-post-box.component';

@NgModule({
  declarations: [
    AppComponent,
    YezionComponent,
    ProductAlertsComponent,
    TopHeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    ProfileScreenComponent,
    HomeScreenComponent,
    NewsFeedComponent,
    PostComponent,
    GroupScreenComponent,
    MarketPlaceComponent,
    WatchScreenComponent,
    GamingComponent,
    StoryComponent,
    PostContainerComponent,
    CreatePostBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
