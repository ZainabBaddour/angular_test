import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Card } from '../models/element.model';
import { RequestResult } from '../models/ReequestResult';
import { RequestUser } from '../models/RequestUser';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cardsSubject = new BehaviorSubject<Card[]>([]);
  Url = "https://reqres.in/api/users"

  getCards(): Observable<RequestResult> { //get all the pages
    return this._http.get<RequestResult>(this.Url)

  }
  getUser(id: number): Observable<RequestUser> { 
    return this._http.get<RequestUser>(this.Url + '/' + id)

  }

  getRepoIssues(sort: string, order: string, page: number): Observable<RequestResult> { //get requested page only
    const requestUrl =
      `${this.Url}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page}`;

    return this._http.get<RequestResult>(requestUrl);
  }

  constructor(private _http: HttpClient) { }
}
