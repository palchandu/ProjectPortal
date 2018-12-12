import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MiscService {

  uri = 'http://localhost:9860/states/';

  constructor(private http: HttpClient) { }

  saveStateList(state_name): Observable<any>{
    var post_url=this.uri+'add_state';
    return this.http.post(post_url,{
      "state_name":state_name
    });
  }

  showStateList():Observable<any>{
    var list_url=this.uri+'list_state';
    return this.http.get(list_url);
  }

}
