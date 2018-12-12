import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import {catchError,tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable()
export class LoginServiceService {

  constructor(private http: HttpClient) { }
  private handleError(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    }
    else
    {
      // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  uri = 'http://localhost:9860/user';

  userLogin(email,password): Observable<any>{
    const obj = {
      email: email,
      password: password
    };
    return this.http.post(`${this.uri}/user_login`, JSON.stringify(obj),httpOptions).pipe(map(this.extractData),
    catchError(this.handleError));
    
  }

  
}
