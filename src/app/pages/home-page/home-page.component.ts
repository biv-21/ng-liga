import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewsFormComponent } from 'src/app/components/add-news-form/add-news-form.component';
import { NewsDto } from 'src/app/dtos/news.dto';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: [
    'home-page.component.scss'
  ]
})
export class HomePageComponent implements OnInit {
  news: NewsDto[] = [];
  constructor(private newsService: NewsService, private dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
    })
  }

  addNewsClick() {
    const dialogRef = this.dialog.open(AddNewsFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (!!result && result.trim() !== '') {
        this.addNews(result);
      }
    })

  }

  private addNews(title: string) {
    const id = Math.max(...this.news.map(n => +n.ID)) + 1;
    this.news = [...this.news, {
      title: title,
      date: new Date().toISOString(),
      ID: `${id}`,
      isTop: false,
      viewCount: 0
    }];
  }

}
