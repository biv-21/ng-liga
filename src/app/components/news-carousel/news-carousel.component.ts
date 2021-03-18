import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NewsDto } from 'src/app/dtos/news.dto';

@Component({
  selector: 'app-news-carousel',
  templateUrl: 'news-carousel.component.html',
  styleUrls: [
    'news-carousel.component.scss'
  ]
})
export class NewsCarouselComponent implements OnChanges {

  private _news: NewsDto[] = [];
  @Input('news') news: NewsDto[] = [];

  selectedNews = new SelectionModel<NewsDto>(false, []);
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.selectedNews.selected.length === 0) {
      this._news = [...this.news];
      this.selectedNews.select(this._news[0]);

      setInterval(() => {
        this.nextClick();
      }, 5000);
    }
  }

  prevClick() {
    this.carouselControlClick(CarouselControlDirection.Prev);
  }

  nextClick() {
    this.carouselControlClick(CarouselControlDirection.Next);
  }

  private carouselControlClick(direction: CarouselControlDirection) {
    const currentIndex = this._news.findIndex(n => n.ID === this.selectedNews.selected[0].ID);
    let nextIndex = currentIndex;
    if (direction === CarouselControlDirection.Next) {
      nextIndex = this._news[currentIndex + 1] ? currentIndex + 1 : 0;
    } else if (direction === CarouselControlDirection.Prev) {
      nextIndex = this._news[currentIndex - 1] ? currentIndex - 1 : this._news.length - 1;
    }
    this.selectedNews.select(this._news[nextIndex]);
  }

}

export enum CarouselControlDirection {
  Next,
  Prev
}
