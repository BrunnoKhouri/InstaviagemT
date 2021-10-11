import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from '../models/package.model';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url = 'https://us-central1-rapid-api-321400.cloudfunctions.net/instaviagem-challenge'
  
  constructor(private http: HttpClient,private snackBar: MatSnackBar) { }


  getPackages() {
    return this.http.get<Package[]>(`${this.url}`);
  }   
 

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-failure'] : ['msg-success']
    });
  }
}