import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterLoginService {
  constructor(private http: HttpClient) {}

  postToServer(name: string, password: string) {
    const headers = { 'Content-Type': 'application/json' };
    const body = { username: name, password: password };
    this.http.post<any>('/register', body);
  }
}
