import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetResult } from './get-result.interface';

@Injectable({
  providedIn: 'root'
})
export class GetResultService {

  private apiUrl = 'http://127.0.0.1:5000/api/v1/result';

  private http: HttpClient

  constructor(httpClient : HttpClient) {
    this.http = httpClient;
  }

  getResults(id : String): Observable<GetResult> {
    return this.http.get<GetResult>(`${this.apiUrl}?id=${id}`);
  }
  
}
