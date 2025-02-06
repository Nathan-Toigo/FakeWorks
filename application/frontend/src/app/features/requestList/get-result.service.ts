import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetResult } from './get-result.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetResultService {

  private apiUrl = '/result';

  private http: HttpClient

  constructor(httpClient : HttpClient) {
    this.http = httpClient;
  }

  getResults(id : String): Observable<GetResult> {
    return this.http.get<GetResult>(`${environment.api_url + this.apiUrl}?id=${id}`);
  }

}
