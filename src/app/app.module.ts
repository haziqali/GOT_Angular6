import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { AllBooksComponent } from './all-books/all-books.component';
import { AppRoutingModule } from './/app-routing.module';
import { AllHousesComponent } from './all-houses/all-houses.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { BookComponent } from './book/book.component';
import { HouseComponent } from './house/house.component';
import { CharacterComponent } from './character/character.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { CategoryPipe } from './category.pipe';
import { OrderByPipe } from './order-by.pipe';
import { OrderByAliasesPipe } from './order-by-aliases.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllBooksComponent,
    AllHousesComponent,
    AllCharactersComponent,
    BookComponent,
    HouseComponent,
    CharacterComponent,
    HomePageComponent,
    CategoryPipe,
    OrderByPipe,
    OrderByAliasesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
