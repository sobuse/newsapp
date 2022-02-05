import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsappapiservicesService {
  constructor(private _http: HttpClient) {}

  //business news
  businessnewsUrl =
    'https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=8c4dc5b334344117a14e5dc0cce40d72';

  //technews

  techApiUrl =
    'https://newsapi.org/v2/top-headlines?country=ng&category=technology&apiKey=8c4dc5b334344117a14e5dc0cce40d72';

  //newsApiUrl
  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=ng&apiKey=8c4dc5b334344117a14e5dc0cce40d72';

  //topHeading()
  topHeader(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  technews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  businessNews(): Observable<any>{
    return this._http.get(this.businessnewsUrl)
  }
}
