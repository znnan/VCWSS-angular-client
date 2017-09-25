import { InMemoryDbService }  from 'angular-in-memory-web-api';
import { News }               from '../news/news';
export class NewsListDataService implements InMemoryDbService {
  createDb() {
    const newsList: News[] = [
      {id: 12, title: 'Nan', author: 'Nan', type: 1, subtitle: 'TEST', description: 'TEST', priority: 1, img: 'test', url: 'test', releaseTime: 'test'},
      {id: 13, title: 'Nan', author: 'Nan', type: 1, subtitle: 'TEST', description: 'TEST', priority: 1, img: 'test', url: 'test', releaseTime: 'test'},
      {id: 11, title: 'Nan', author: 'Nan', type: 1, subtitle: 'TEST', description: 'TEST', priority: 1, img: 'test', url: 'test', releaseTime: 'test'}
    ];
    return {newsList};
  }
}