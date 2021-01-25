import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodolistComponent } from './todolist/todolist.component';
import { TourofheroesComponent } from './tourofheroes/tourofheroes.component';
import { HeroesComponent } from './tourofheroes/heroes/heroes.component';
import { HeroesDetailComponent } from './tourofheroes/hero-detail/hero-detail.component';
import { MessagesComponent } from './tourofheroes/messages/messages.component';
import { AppRoutingModule } from './tourofheroes/app-routing.module';
import { DashboardComponent } from './tourofheroes/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './tourofheroes/in-memory-data.service';
import { HeroSearchComponent } from './tourofheroes/hero-search/hero-search.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TourofheroesComponent,
    HeroesComponent,
    HeroesDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    SlideshowComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
