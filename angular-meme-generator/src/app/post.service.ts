import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
        error: (error) => console.error('Error: ' + error),
      });
  }
}
