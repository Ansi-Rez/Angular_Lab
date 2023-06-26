import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { RouterModule, Routes, RouterLink, RouterOutlet } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FormsModule } from '@angular/forms';
import { ReviewdetailComponent } from './reviewdetail/reviewdetail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'reviewdetail/:review_title', component: ReviewdetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewsComponent,
    ReviewdetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    RouterLink,
    RouterOutlet,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
