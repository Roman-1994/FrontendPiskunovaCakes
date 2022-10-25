import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDessert, IDecor} from "../models/desserts";

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  baseurl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDesserts() {
    return this.http.get<IDessert[]>(this.baseurl + '/desserts/')
  }

  getDecors() {
    return this.http.get<IDecor[]>(this.baseurl + '/decors/')
  }
}
