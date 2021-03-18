import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryNewsService } from './services/in-memory-news.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from './material.module';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AddNewsFormComponent } from './components/add-news-form/add-news-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsCarouselComponent } from './components/news-carousel/news-carousel.component';
import { NewsItemComponent } from './components/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NewsListComponent,
    AddNewsFormComponent,
    NewsCarouselComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryNewsService),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
