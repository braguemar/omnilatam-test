import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpClientProvider {
  constructor(private readonly httpClient: HttpClient){}

  public get<Response>(urlRequest: string): Promise<Response> {
    return this.httpClient.get(urlRequest)
    .pipe(map((response) => response as Response))
    .toPromise();
  }
}
