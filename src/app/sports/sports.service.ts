import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
URL = 'http://localhost:4201'
  constructor(private http:HttpClient, private authSrv:AuthService) { }

  getAll(){
    return this.http.get(`${this.URL}/sports`)
     
  }
}
