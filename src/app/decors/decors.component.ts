import { Component, OnInit } from '@angular/core';
import {CakesService} from "../services/cakes.service";
import {IDecor} from "../models/desserts";

@Component({
  selector: 'app-decors',
  templateUrl: './decors.component.html',
  styleUrls: ['./decors.component.css']
})
export class DecorsComponent implements OnInit {

  decors: IDecor[] = [];

  constructor(private apiCakes: CakesService) { }

  ngOnInit(){
    this.apiCakes.getDecors()
      .subscribe( data => {
        this.decors = data;
      });
  }

}
