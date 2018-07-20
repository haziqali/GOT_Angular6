import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public book: any;
  public loader: boolean;

  constructor(private _service: ServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loader = true;
    this._service.getBook(this.route.snapshot.params.id).subscribe(
      data => {
        this.book = data;
        this.loader = false;
      }
    );
  }

  public sub(temp: any) {
    return this._service.sub(temp);
  }

}
