import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from '../models/package.model';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url = 'https://us-central1-rapid-api-321400.cloudfunctions.net/instaviagem-challenge'
  
  constructor(private http: HttpClient) { }


  getPackages() {
    return this.http.get<Package[]>(`${this.url}`);
  }   
 
}