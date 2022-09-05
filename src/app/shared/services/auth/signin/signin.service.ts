import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get(`${environment.URL_ENDPOINT}/browse/categories`).subscribe(data => {
      console.log(data);
    });
  }
}
