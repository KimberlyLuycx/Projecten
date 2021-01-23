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

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TourofheroesComponent,
    HeroesComponent,
    HeroesDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
