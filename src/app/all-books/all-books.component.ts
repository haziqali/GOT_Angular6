import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../service.service';
import { CategoryPipe } from '../category.pipe';


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})

export class AllBooksComponent implements OnInit {
  public allBooks: any;
  public loader: boolean;
  public search: string;

  constructor(private _service: ServiceService) {
  }
  ngOnInit() {
    this.loader = true;
      this._service.getAllBooks().subscribe(
      data => {
        console.log(data);
        this.allBooks = data;
        this.loader = false;
      }
    );
  }

}
