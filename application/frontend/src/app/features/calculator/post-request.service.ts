import { Injectable } from '@angular/core';
import { PostRequest } from './post-request-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostRequestService {

  private serviceUrl = '/process';

    private http: HttpClient

    constructor(httpClient : HttpClient) {
      this.http = httpClient;
    }

    postRequest(calculation : String): Observable<PostRequest> {
      const body = { calculation: calculation };
      return this.http.post<PostRequest>(environment.api_url + this.serviceUrl, body);
    }
}
