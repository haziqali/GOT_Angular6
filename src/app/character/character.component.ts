import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public character: any;
  public loader: boolean;

  constructor(private _service: ServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loader = true;
    this._service.getCharacter(this.route.snapshot.params.id).subscribe(
      data => {
        console.log(data);
        this.loader = false;
        this.character = data;
      }
    );
  }

  public sub(temp: any) {
    return this._service.sub(temp);
  }

}
