import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() {}
  public isAuthenticated() {
    let jwtHelper: JwtHelperService = new JwtHelperService();
    var token = localStorage.getItem('token_admin');
    return jwtHelper.decodeToken(token);
  }

}
