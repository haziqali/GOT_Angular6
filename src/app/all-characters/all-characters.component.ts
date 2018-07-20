import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {

  public allCharacters: any;
  public loader: boolean;
  public search: string;
  constructor(private _service: ServiceService) {
  }
  ngOnInit() {
    this.loader = true;
      this._service.getAllCharacters().subscribe(
      data => {
        console.log(data);
        this.allCharacters = data;
        this.loader = false;
      }
    );
  }

}
