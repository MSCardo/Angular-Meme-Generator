import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from './token';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  register(name: string, password: string) {
    const headers = { 'content-Type': 'application/json' };
    const body = JSON.stringify({ username: name, password: password });
    console.log(body);
    return this.http
      .post<any>('http://localhost:3000/users', body, { headers: headers })
      .subscribe({
        next: (data) => console.log('Yey', data),
        error: (error) => console.error('Error: ' + JSON.stringify(error)),
      });
  }

  login(name: string, password: string) {
    const body = { username: name, password: password };
    console.log(body);
    return this.http.get<any>('http://localhost:3000/users').subscribe({
      next: (data) => {
        if (data === body) {
          localStorage.setItem('token', data.username);
        } else {
          console.log('No user');
        }
      },
    });
  }
}
