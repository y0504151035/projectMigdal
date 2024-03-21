import { Injectable } from '@angular/core';
import { AppState } from '../models/app.state';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  state:AppState = new AppState();
}
