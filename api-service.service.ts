import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { enviroment } from '../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  options = {
    headers: new HttpHeaders({"Content-Type" : "application/json; charset=UTF-8" }),
  };
  showSpinner: BehaviorSubject<boolean> = new BehaviorSubject(false);
  BASE_URL: string = enviroment.BASE_URL;

  constructor(private http: HttpClient) { }

  getAreas(): Observable<any> {
    this.showSpinner.next(true);
    return this.http.post("https://front.migdal.co.il//experts/api/garageareas", this.options)
      .pipe(map((data: any) => {
        this.showSpinner.next(false);
        let returnData = data;
        return returnData;
      }), catchError(() => {
        throw new Error('err');
      }));
  }

  getgarages(obj: any): Observable<any> {
    this.showSpinner.next(true);
    return this.http.post(this.BASE_URL + "api/experts/getgarages", obj, this.options)
      .pipe(map((data: any) => {
        this.showSpinner.next(false);
        let returnData = data;
        return returnData;
      }), catchError(() => {
        throw new Error('err');

      }));

  }

}
