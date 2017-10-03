import { InMemoryDbService }  from 'angular-in-memory-web-api';

export class MockDbService implements InMemoryDbService {
  createDb() {
    const newsList = [
      { id: 169047537,
        title: 'Netanjahu besorgt über wachsenden Antisemitismus in Deutschland',
        author: 'Welt.de',
        type: 1,
        subtitle: ' ',
        description: 'Die Folgen der Bundestagswahl werden auch in Israel aufmerksam verfolgt. Nun hat sich Ministerpräsident Netanjahu „besorgt“ über wachsenden Antisemitismus in Deutschland geäußert.',
        priority: 0,
        img: 'https://www.welt.de/img/politik/deutschland/mobile169054475/8401625527-ci23x11-w960/Israeli-Prime-Minister-Netanyahu-in-Germany.jpg',
        url: 'https://www.welt.de/politik/deutschland/article169047537/Netanjahu-besorgt-ueber-wachsenden-Antisemitismus-in-Deutschland.html',
        releaseTime: '15:04 26.09.2017'},
      { id: 13, title: 'Nan', author: 'Nan', type: 1, subtitle: 'TEST', description: 'TEST', priority: 1, img: 'test', url: 'test', releaseTime: 'test'},
      { id: 11, title: 'Nan', author: 'Nan', type: 1, subtitle: 'TEST', description: 'TEST', priority: 1, img: 'test', url: 'test', releaseTime: 'test'}
    ];
    const carousel  = {
        success: true,
        data: {
            count: 2,
            pageNo: 1,
            pageSize: 10,
            list: [
                {
                    title: 'title',
                    subtitle: 'subtitle',
                    priority: 0,
                    img: ' ',
                    url: ' '
                },
                {
                  title: 'title2',
                  subtitle: 'subtitle',
                  priority: 0,
                  img: ' ',
                  url: ' '
                }
            ]
        }
      };
    return {newsList,carousel};
  }
}