import { Component, OnInit } from '@angular/core';
import {CakesService} from "../../services/cakes.service";
import {IDecor} from "../../models/desserts";

@Component({
  selector: 'app-decors2',
  templateUrl: './decors2.component.html',
  styleUrls: ['./decors2.component.css']
})
export class Decors2Component implements OnInit {

  decors: IDecor[] = [];

  constructor(private apiCakes: CakesService) { }

  ngOnInit(){
    this.apiCakes.getDecors()
      .subscribe( data => {
        this.decors = data;
      });
  }

}
