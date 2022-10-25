import { Component, OnInit } from '@angular/core';
import {CakesService} from "../../services/cakes.service";
import {IDessert} from "../../models/desserts";

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {

  desserts: IDessert[] = [];

  constructor(private apiCakes: CakesService) { }

  ngOnInit() {
    this.apiCakes.getDesserts()
      .subscribe( data => {
        this.desserts = data;
      });
  }

}
