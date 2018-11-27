import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
 }
register(data) {
 return this.http.post('http://localhost:8000/users/register', data);
}

}
