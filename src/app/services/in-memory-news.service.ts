import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryNewsService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    let news = [
      {
        "ID": "202077",
        "title": "Имущество получено в подарок: как облагать налогом его продажу",
        "date": "2021-03-09T09:45:00Z",
        "isTop": false,
        "viewCount": 197
      },
      {
        "ID": "202074",
        "title": "Когда автомобиль могут забрать на штрафплощадку",
        "date": "2021-03-09T09:09:00Z",
        "isTop": false,
        "viewCount": 279
      },
      {
        "ID": "202070",
        "title": "ТОП-10 новостей недели для предпринимателей",
        "date": "2021-03-05T17:10:00Z",
        "isTop": true,
        "viewCount": 389
      }
    ];
    return { news };
  }

}