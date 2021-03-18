import { KeyValue } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsDto } from 'src/app/dtos/news.dto';

@Component({
  selector: 'app-news-list',
  templateUrl: 'news-list.component.html',
  styleUrls: ['news-list.component.scss']
})
export class NewsListComponent implements OnChanges {
  @Input('news') news: NewsDto[] = [];
  newsMap: Map<number, NewsDto[]> | undefined;
  constructor(private snackBar: MatSnackBar) { }
  ngOnChanges(changes: SimpleChanges) {
    this.news = this.news.sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date);
    });

    this.newsMap = this.news.reduce((pv: Map<number, NewsDto[]>, cv: NewsDto) => {
      const key = new Date(Date.parse(cv.date)).setHours(0, 0, 0, 0);

      if (!pv.has(key)) {
        pv.set(key, []);
      }
      pv.get(key)?.push(cv);

      return pv;
    }, new Map());
  }

  compareFnKV(a: KeyValue<number, NewsDto[]>, b: KeyValue<number, NewsDto[]>): number {
    return b.key - a.key;
  }

  newsItemClick(newsItem: NewsDto) {
    this.snackBar.open(newsItem.ID, '', { duration: 3000 });
  }

}
