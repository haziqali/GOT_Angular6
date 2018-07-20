import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = 'https://www.anapioficeandfire.com/api/';

  constructor(private _http: HttpClient, private route: ActivatedRoute) {
   }

public addAllproducts(productsIds) {
    const productedsObservable: Observable<Object>[] = [];
    for (let i = 0; i < 5; i++) {
      const response = this._http.get(this.baseUrl + 'books?page=1&pageSize=50');
      console.log(response);
      productedsObservable.push(response);
    }
    return productedsObservable;
 }

public getAllBooks(): any {
  const response = this._http.get(this.baseUrl + 'books?pageSize=50');
  console.log(response);
  return response;
}

public getAllHouses(): any {
  const response = this._http.get(this.baseUrl + 'houses?pageSize=50');
  return response;
}

public getAllCharacters(): any {
  const response = this._http.get(this.baseUrl + `characters?pageSize=50`);
  return response;
}

public getCharacter(id): any {
    const cid = parseInt(id, 10) + 1;
    const response = this._http.get(this.baseUrl + 'characters/' + cid);
    return response;
}

public getBook(id): any {
  const cid = parseInt(id, 10) + 1;
  const response = this._http.get(this.baseUrl + 'books/' + cid);
  return response;
}

public getHouse(id): any {
  const cid = parseInt(id, 10) + 1;
  const response = this._http.get(this.baseUrl + 'houses/' + cid);
  return response;
}

public sub(temp: any) {
  return temp.substring(temp.lastIndexOf('/') + 1);
}

}

