import { Injectable } from '@angular/core';
import { PostRequest } from './post-request-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostRequestService {

  private apiUrl = 'http://127.0.0.1:5000/api/v1/process';
  
    private http: HttpClient
  
    constructor(httpClient : HttpClient) {
      this.http = httpClient;
    }
  
    postRequest(calculation : String): Observable<PostRequest> {
      const body = { calculation: calculation };
      return this.http.post<PostRequest>(this.apiUrl, body);
    }
}
