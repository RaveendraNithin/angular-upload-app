import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  constructor(
    private http: HttpClient
  ) { }

  isLoggedIn() {
    return localStorage.getItem('currentUser') != null;
  }

  getToken() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      return currentUser.token;
    }
    return null;
  }

  signIn(params) {
    return this.http.post('https://serene-hollows-11661.herokuapp.com/api/v1/signin', params);
  }

  signUp(params) {
    return this.http.post('https://serene-hollows-11661.herokuapp.com/api/v1/signup', params);
  }

}
