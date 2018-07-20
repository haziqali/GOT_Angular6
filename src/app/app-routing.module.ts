import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { BookComponent } from './book/book.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CharacterComponent } from './character/character.component';
import { HouseComponent } from './house/house.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'house/:id', component: HouseComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
