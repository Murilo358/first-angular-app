import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  private apiUrl = "https://picsum.photos/200/300"

  constructor(private client: HttpClient) { }

  getHelloWorld() : Observable<any> {
    return this.client.get(this.apiUrl)
  }

}
