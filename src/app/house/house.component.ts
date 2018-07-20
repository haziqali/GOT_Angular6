import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  public house: any;
  public loader: boolean;
  public id: string;

  constructor(private _service: ServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loader = true;
    this._service.getHouse(this.route.snapshot.params.id).subscribe(
      data => {
        console.log(data);
        this.loader = false;
        this.house = data;
      }
    );
  }
public sub(temp: any) {
  return this._service.sub(temp);
}


}
