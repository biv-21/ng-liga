import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NewsDto } from "../dtos/news.dto";

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsDto[]> {
    return this.http.get<NewsDto[]>('api/news');
  }
}