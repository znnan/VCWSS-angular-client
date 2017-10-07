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
                    title: 'Amazon soll 250 Millionen Euro Steuern nachzahlen',
                    subtitle: 'Luxemburg hat Amazon nach Ansicht der EU-Kommission unlauter bevorzugt und soll Steuern nachfordern. Im Fall von Apple und Irland soll der EuGH entscheiden.',
                    priority: 0,
                    img: 'http://img.zeit.de/wirtschaft/2017-10/amazon-klage-eu-luxemburg/wide__820x461__desktop',
                    url: 'http://www.zeit.de/wirtschaft/unternehmen/2017-10/europaeische-kommission-amazon-steuernachzahlung-strafe'
                },
                {
                  title: 'Nobelpreis in Chemie für Entwickler der 3-D-Mikroskopie',
                  subtitle: 'Quasi schockgefrostet das Leben beobachten: Dank dreier Männer blicken Forscher tiefer in die Biochemie als je zuvor. Sie entwickelten die Kryo-Elektronenmikroskopie.',
                  priority: 0,
                  img: '../assets/carousel-1.jpeg',
                  url: 'http://www.zeit.de/wissen/2017-10/nobelpreis-fuer-chemie-fuer-entwickler-der-3d-mikroskopie'
                },
                {
                  title: 'China gewährt deutschen Autobauern eine Gnadenfrist',
                  subtitle: 'Lobby-Druck ausländischer Konzerne und auch der Bundesregierung zeigen Wirkung: Peking hat die Einführung einer Quote für E-Autos auf 2019 verschoben. Für deutsche Autobauer ist das ein Riesenglück.',
                  priority: 0,
                  img: 'https://www.welt.de/img/wirtschaft/mobile169253970/4311622817-ci23x11-w1600/China-to-cut-subsidies-for-non-electric-vehicles-Caixin-reports.jpg',
                  url: 'https://www.welt.de/wirtschaft/article169253971/China-gewaehrt-deutschen-Autobauern-eine-Gnadenfrist.html'
                }
            ]
        }
    };

    const news = {
      success: true,
      data: {
        count: 3,
        pageNo: 1,
        pageSize: 10,
        list: [
          {
            id: 1,
            title: 'BDI warnt deutsche Firmen vor "sehr hartem Brexit"',
            author: 'Spiegel',
            type: 1,
            subtitle: 'Der BDI schlägt Alarm: Die deutschen Unternehmen in Großbritannien müssten sich auf einen harten Brexit einstellen, warnt der Industrieverband. Alles andere "wäre naiv".',
            description: 'Der Bundesverband der Deutschen Industrie (BDI) hat die deutschen Unternehmen in Großbritannien gemahnt, sich auf einen "sehr harten Brexit" einzustellen. Die britische Regierung "rede viel", habe aber kein "klares Konzept", sagte BDI-Hauptgeschäftsführer Joachim Lang. Deutsche Firmen müssten deshalb jetzt mit Vorkehrungen beginnen, alles andere "wäre naiv".',
            priority: 0,
            img: 'http://cdn4.spiegel.de/images/image-1198233-860_poster_16x9-czyl-1198233.jpg',
            imgSrc: 'Spiegel.de',
            imgCaption: 'Bankenviertel in London',
            update: 'Vor 3 Min',
            releaseDate: 'Donnestag 03-07-2017',
          },
          {
            id: 2,
            title: '"Liebe" ist keine Zutat',
            author: 'Spiegel',
            type: 2,
            subtitle: 'Bizarrer Rechtsstreit in den USA: Die Lebensmittelaufsicht verlangt von einer Bäckerei, "Liebe" von der Zutatenliste zu streichen. Die Firma wettert gegen Behördenwillkür - hat allerdings auch Probleme mit der Hygiene.',
            description: 'Was gehört zu einem guten Müsli? Haferflocken, Nüsse, vielleicht Rosinen - aber keine Gefühle. So sieht es jedenfalls die US-Aufsichtsbehörde für Lebens- und Arzneimittel (FDA). Sie hat eine Großbäckerei im US-Bundesstaat Massachusetts aufgefordert, sich bei der Auflistung der Zutaten eines Müslis in Zukunft auf handfeste Bestandteile zu beschränken.',
            priority: 0,
            img: 'http://cdn1.spiegel.de/images/image-483588-860_poster_16x9-jktz-483588.jpg',
            imgSrc: 'Spiegel.de',
            imgCaption: 'Müsli-Herstellung (Symbolbild)',
            update: 'Vor 5 Min',
            releaseDate: 'Donnestag 03-07-2017',
          },
          {
            id: 3,
            title: 'Tesla verfehlt Produktionsziel deutlich',
            author: 'Spiegel',
            type: 3,
            subtitle: 'Statt wie geplant 1500 elektrische Mittelklassewagen hat Tesla im dritten Quartal nur 260 gebaut. Anleger reagieren enttäuscht, der Aktienkurs fällt. Ford und GM blasen derweil zum Angriff.',
            description: 'Der E-Auto-Hersteller Tesla hat die Produktionsziele für seinen ersten Mittelklassewagen, das Model 3, im dritten Quartal klar verfehlt. Von dem ab rund 35.000 Dollar erhältlichen E-Auto, für das es zahlreiche Vorbestellungen gibt, wurden lediglich 260 Stück gefertigt, wie die Firma von Elon Musk mitteilte.',
            priority: 0,
            img: 'http://cdn4.spiegel.de/images/image-1161573-860_poster_16x9-wecc-1161573.jpg',
            imgSrc: 'Spiegel.de',
            imgCaption: 'Tesla Model 3',
            update: 'Vor 1 Stunde',
            releaseDate: 'Donnestag 03-07-2017',
          },
          {
            id: 4,
            title: 'Solarenergie wächst weltweit stärker als Atom- und Kohlekraft',
            author: 'Spiegel',
            type: 2,
            subtitle: 'Kein anderer Energieträger ist 2016 so schnell gewachsen wie die Solarenergie. Der Trend wird vor allem durch billige Solarzellen aus China verursacht - und dürfte dauerhaft sein.',
            description: 'Der Einsatz von Solaranlagen ist 2016 weltweit erstmals stärker gewachsen als der aller anderen Energieträger. Das geht aus einem Bericht der Internationalen Energieagentur IEA hervor. Das Wachstum von Wind- und Wasserkraft verlangsamte sich hingegen. Trotzdem machten erneuerbare Energien im Jahr 2016 zwei Drittel des Kapazitätszuwachses im Energiesektor aus - ein höherer Anteil als je zuvor.',
            priority: 0,
            img: 'http://cdn1.spiegel.de/images/image-1129360-860_poster_16x9-aqby-1129360.jpg',
            imgSrc: 'Spiegel.de',
            imgCaption: 'Solarkraftwerk in Kalifornien',
            update: 'Vor 1 Tag',
            releaseDate: 'Mittwoch 02-07-2017',
          },
        ]
      }
    };
    
    const event = {
      success: true,
      data: {
        count: 3,
        pageNo: 1,
        pageSize: 10,
        list: [
          {
            id: 1,
            title: 'BDI warnt deutsche Firmen vor "sehr hartem Brexit"',
            author: 'Spiegel',
            type: 1,
            subtitle: 'Der BDI schlägt Alarm: Die deutschen Unternehmen in Großbritannien müssten sich auf einen harten Brexit einstellen, warnt der Industrieverband. Alles andere "wäre naiv".',
            description: 'Der Bundesverband der Deutschen Industrie (BDI) hat die deutschen Unternehmen in Großbritannien gemahnt, sich auf einen "sehr harten Brexit" einzustellen. Die britische Regierung "rede viel", habe aber kein "klares Konzept", sagte BDI-Hauptgeschäftsführer Joachim Lang. Deutsche Firmen müssten deshalb jetzt mit Vorkehrungen beginnen, alles andere "wäre naiv".',
            priority: 0,
            img: 'http://cdn4.spiegel.de/images/image-1198233-860_poster_16x9-czyl-1198233.jpg',
            imgSrc: 'Spiegel.de',
            imgCaption: 'Bankenviertel in London',
            update: 'Vor 3 Min',
            releaseDate: 'Donnestag 03-07-2017',
            eventTime: 'Mittwoch 07-08-2017',
            eventAddress: 'Stuttgart Vahingen'
          },
          {
            id: 2,
            title: '"Liebe" ist keine Zutat',
            author: 'Spiegel',
            type: 2,
            subtitle: 'Bizarrer Rechtsstreit in den USA: Die Lebensmittelaufsicht verlangt von einer Bäckerei, "Liebe" von der Zutatenliste zu streichen. Die Firma wettert gegen Behördenwillkür - hat allerdings auch Probleme mit der Hygiene.',
            description: 'Was gehört zu einem guten Müsli? Haferflocken, Nüsse, vielleicht Rosinen - aber keine Gefühle. So sieht es jedenfalls die US-Aufsichtsbehörde für Lebens- und Arzneimittel (FDA). Sie hat eine Großbäckerei im US-Bundesstaat Massachusetts aufgefordert, sich bei der Auflistung der Zutaten eines Müslis in Zukunft auf handfeste Bestandteile zu beschränken.',
            priority: 0,
            img: 'http://cdn1.spiegel.de/images/image-483588-860_poster_16x9-jktz-483588.jpg',
            imgSrc: 'Spiegel.de',
            imgCaption: 'Müsli-Herstellung (Symbolbild)',
            update: 'Vor 5 Min',
            releaseDate: 'Donnestag 03-07-2017',
            eventTime: 'Mittwoch 07-08-2017',
            eventAddress: 'Stuttgart Vahingen'
          },
          {
            id: 3,
            title: 'Tesla verfehlt Produktionsziel deutlich',
            author: 'Spiegel',
            type: 3,
            subtitle: 'Statt wie geplant 1500 elektrische Mittelklassewagen hat Tesla im dritten Quartal nur 260 gebaut. Anleger reagieren enttäuscht, der Aktienkurs fällt. Ford und GM blasen derweil zum Angriff.',
            description: 'Der E-Auto-Hersteller Tesla hat die Produktionsziele für seinen ersten Mittelklassewagen, das Model 3, im dritten Quartal klar verfehlt. Von dem ab rund 35.000 Dollar erhältlichen E-Auto, für das es zahlreiche Vorbestellungen gibt, wurden lediglich 260 Stück gefertigt, wie die Firma von Elon Musk mitteilte.',
            priority: 0,
            img: 'http://cdn4.spiegel.de/images/image-1161573-860_poster_16x9-wecc-1161573.jpg',
            imgSrc: 'Spiegel.de',
            imgCaption: 'Tesla Model 3',
            update: 'Vor 1 Stunde',
            releaseDate: 'Donnestag 03-07-2017',
            eventTime: 'Mittwoch 07-08-2017',
            eventAddress: 'Stuttgart Vahingen'
          },
          {
            id: 4,
            title: 'Solarenergie wächst weltweit stärker als Atom- und Kohlekraft',
            author: 'Spiegel',
            type: 2,
            subtitle: 'Kein anderer Energieträger ist 2016 so schnell gewachsen wie die Solarenergie. Der Trend wird vor allem durch billige Solarzellen aus China verursacht - und dürfte dauerhaft sein.',
            description: 'Der Einsatz von Solaranlagen ist 2016 weltweit erstmals stärker gewachsen als der aller anderen Energieträger. Das geht aus einem Bericht der Internationalen Energieagentur IEA hervor. Das Wachstum von Wind- und Wasserkraft verlangsamte sich hingegen. Trotzdem machten erneuerbare Energien im Jahr 2016 zwei Drittel des Kapazitätszuwachses im Energiesektor aus - ein höherer Anteil als je zuvor.',
            priority: 0,
            img: 'http://cdn1.spiegel.de/images/image-1129360-860_poster_16x9-aqby-1129360.jpg',
            imgSrc: 'Spiegel.de',
            imgCaption: 'Solarkraftwerk in Kalifornien',
            update: 'Vor 1 Tag',
            releaseDate: 'Mittwoch 02-07-2017',
            eventTime: 'Mittwoch 07-08-2017',
            eventAddress: 'Stuttgart Vahingen'
          },
        ]
      }
    };

    const parallax ={
      success: true,
      data:{
        count:1,
        pageNo:1,
        pageSize:10,
        list: [
          {
            title: '2017/18学联冬季招新来啦',
            subtitle: '热情团结，丰富多彩',
            bannerId: 0,
            img: '../assets/ad-block.jpg',
            url: ' ',
            releaseTime: ' '
          }
        ]
      }
    };

    const gallery = {
      success: true,
      data:{
        count: 1,
        pageNo: 1,
        pageSize: 10,
        list: [
          {
            id: 1,
            album: 'Spring Festival',
            albumArt: '../assets/gallery/springFestival/2.jpg',
            galleryImage: [
              '../assets/gallery/springFestival/1.jpg',
              '../assets/gallery/springFestival/2.jpg',
              '../assets/gallery/springFestival/3.jpg',
              '../assets/gallery/springFestival/4.jpeg'
            ],
            url: '',
            createDate: '03-09-2017',
            updateDate: '03-10-2017'
          },
          {
            id: 2,
            album: 'China Day',
            albumArt: '../assets/gallery/chinaDay/2.jpg',
            galleryImage: [
              '../assets/gallery/chinaDay/1.jpg',
              '../assets/gallery/chinaDay/2.jpg',
              '../assets/gallery/chinaDay/3.jpg',
              '../assets/gallery/chinaDay/4.jpeg'
            ],
            url: '',
            createDate: '03-09-2017',
            updateDate: '03-10-2017'
          },
          {
            id: 3,
            album: 'VCWSS',
            albumArt: '../assets/gallery/vcwss/1.jpg',
            galleryImage: [
              '../assets/gallery/vcwss/1.jpg',
              '../assets/gallery/vcwss/2.jpg',
              '../assets/gallery/vcwss/3.jpg',
              '../assets/gallery/vcwss/4.jpeg'
            ],
            url: '',
            createDate: '03-09-2017',
            updateDate: '03-10-2017'
          },
        ]
      }
    };

    return {newsList,carousel,news,event,parallax,gallery};
  }
}