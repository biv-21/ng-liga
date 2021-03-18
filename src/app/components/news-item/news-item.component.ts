import { Component, Input } from '@angular/core';
import { NewsDto } from 'src/app/dtos/news.dto';

@Component({
  selector: 'app-news-item',
  templateUrl: 'news-item.component.html',
  styleUrls: ['news-item.component.scss']
})
export class NewsItemComponent {
  @Input('newsItem') newsItem: NewsDto | undefined;
  @Input('fullDate') fullDate: boolean = false;

  dateFormat(): string {
    if (this.fullDate) {
      return 'dd.MM.YY, HH:mm';
    }
    return 'HH:mm';
  }

}
