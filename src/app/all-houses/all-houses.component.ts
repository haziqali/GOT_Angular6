import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-all-houses',
  templateUrl: './all-houses.component.html',
  styleUrls: ['./all-houses.component.css']
})
export class AllHousesComponent implements OnInit {

  public allHouses: any;
  public loader: boolean;
  public search: string;
  constructor(private _service: ServiceService) {
  }
  ngOnInit() {
    this.loader = true;
      this._service.getAllHouses().subscribe(
      data => {
        console.log(data);
        this.allHouses = data;
        this.loader = false;
      }
    );
  }

}
