import { InMemoryDbService }  from 'angular-in-memory-web-api';

export class MockDbService implements InMemoryDbService {
  createDb() {
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
            content: '<p>Deutsche Firmen beobachten den Zickzack-Kurs der britischen Regierung und die nur schwer in Gang kommenden Brexit-Verhandlungen mit der EU mit Nervosität. Großbritannien ist einer der wichtigsten Handelspartner Deutschlands. Deutsche Firmen exportierten zuletzt pro Jahr Waren im Wert von rund hundert Milliarden Dollar nach Großbritannien. Deutsche Firmen beschäftigen rund 400.000 Mitarbeiter im Vereinigten Königreich.</p><p>"Die Entflechtung eines der engsten Verbündeten Deutschlands ist unvermeidbar mit hohen wirtschaftlichen Verlusten verbunden", warnt Lang. Grundsätzlich bereite sich die deutsche Wirtschaft in Arbeitsgruppen auf alle möglichen Szenarien vor, so der BDI. Ein ungeordnetes Ausscheiden der Briten aus der EU ohne Folgeregelungen würde erhebliche Verwerfungen für alle Beteiligten mit sich bringen, sagte Lang. Über vielen Aktivitäten deutscher Firmen schwebe "nicht nur das Damoklesschwert der Unsicherheit, sie sind vielmehr der Gefahr massiver Entwertungen ausgesetzt".</p><p>Wenn die Briten in zwei Jahren tatsächlich die EU verlassen, könnte das Branchen wie den Automobilsektor, den Energiebereich, Finanz- und Versicherungskonzerne sowie die Logistikbranche besonders stark treffen (mehr zu den Folgen für die deutsche Wirtschaft finden Sie hier).</p><p>Die Insel ist bislang der wichtigste Exportmarkt für deutsche Autos, BMW betreibt hier gleich mehrere Werke. Deutsche Branchenverbände haben bereits deutlich vor drohenden Einbußen gewarnt.</p><p>An der britischen Führung lässt der BDI kaum ein gutes Haar. So seien die bisherigen britischen Vorschläge zur zukünftigen Zollabwicklung "mit unverhältnismäßig hohem bürokratischen Aufwand verbunden" und "für Unternehmen im betrieblichen Alltag nicht praktikabel".</p>',
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
            content: '<p>Was gehört zu einem guten Müsli? Haferflocken, Nüsse, vielleicht Rosinen - aber keine Gefühle. So sieht es jedenfalls die US-Aufsichtsbehörde für Lebens- und Arzneimittel (FDA). Sie hat eine Großbäckerei im US-Bundesstaat Massachusetts aufgefordert, sich bei der Auflistung der Zutaten eines Müslis in Zukunft auf handfeste Bestandteile zu beschränken.</p><p>"Ihre Marke Nashoba Granola führt die Zutat \'Liebe\'", heißt es in einem "Warning Letter" der FDA an das Unternehmen. Liebe sei aber "kein gewöhnlicher oder üblicher Name für eine Zutat".</p><p>Die Nashoba Brook Bakery verkauft ihre Produkte in rund 120 Läden, die meisten davon liegen in Massachusetts und New Hampshire und beschäftigt rund 75 Mitarbeiter. Firmenchef John Gates ärgert sich über die Entscheidung: "Ich finde es toll, dass wir "Liebe" auflisten". Viele Kunden würden eben fragen, was die Produkte des Unternehmens so gut mache - und das sei eben Liebe. Der FDA wirft er vor, den Bogen zu überspannen. Das Vorgehen der Behörde befeuere "das Gefühl vieler Amerikaner, dass die Regierung ihre Kompetenzen übertritt". Er fühle sich "wie bei George Orwell" oder in einem "Babysitter-Staat".</p><p>Seine Bäckerei hat gleichwohl nicht nur wegen der fantasievollen Zutatenliste Ärger mit der Behörde. Die FDA bemängelt auch "unhygienische Umstände" bei Herstellung, Verpackung und Lagerung. So hatte eine Überprüfung ergeben, dass Backformen und Backofen nicht gereinigt worden waren.</p><p>Bäckerei-Chef Grant verspricht Besserung. Sein Unternehmen gebe 100.000 Dollar pro Jahr für eine Reinigungsfirma aus. Die Firma sei "voll kooperativ". "Liebe" wird also von den Verpackungen verschwinden.</p>',
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
            content: '<p>Der E-Auto-Hersteller Tesla hat die Produktionsziele für seinen ersten Mittelklassewagen, das Model 3, im dritten Quartal klar verfehlt. Von dem ab rund 35.000 Dollar erhältlichen E-Auto, für das es zahlreiche Vorbestellungen gibt, wurden lediglich 260 Stück gefertigt, wie die Firma von Elon Musk mitteilte.</p><p>Dabei hatte Tesla Anfang August noch über 1500 Autos des Models 3 als Quartalsziel ausgegeben. Die Fertigung des Wagens sollte bis Ende des Jahres auf 5000 Stück pro Woche hochgefahren werden. Dass das Quartalsergebnis nun erheblich geringer ausfiel, begründete Tesla mit "Produktionsengpässen" und betonte, es gebe keine grundsätzlichen Probleme mit der Fertigungs- und Lieferkette.</p><h3>Enttäuschte Anleger</h3><p>Insgesamt stellte Tesla im abgelaufenen Quartal 25.336 Fahrzeuge her und lieferte 26.150 aus. Das entspricht einem Absatzplus von 4,5 Prozent verglichen mit dem Vorjahreszeitraum. Damit wurden die Erwartungen von Analysten übertroffen. Mit 14.065 Wagen entfiel der Großteil der Auslieferungen auf die Luxus-Limousine Model S. Von dem seit September 2015 erhältlichen E-SUV Model X brachte Tesla 11.865 Wagen an die Kundschaft, vom neuen Model 3 nur 220 Stück.</p><p>Bei Anlegern überwog die Enttäuschung über die schwachen Zahlen beim Model 3: Nachbörslich fiel die Tesla-Aktie um 1,6 Prozent. Der Siegeszug von Tesla an der Börse scheint damit vorerst beendet zu sein. Dort hatte die Musk-Firma trotz roter Zahlen und überschaubarer Produktion zwischenzeitlich sogar dem größten US-Autobauer General Motors (GM) in diesem Jahr den Rang abgelaufen. Nun wachsen die Zweifel an Musks Plänen.</p><p>Die Autoriesen GM und Ford blasen derweil zum Angriff auf Tesla. US-Marktführer GM will sein Angebot an Elektroautos kräftig ausbauen - bereits in den nächsten anderthalb Jahren würden zwei weitere vollelektrische Modelle vorgestellt, kündigte der Konzern am Montag in Detroit an.</p><p>"General Motors glaubt an die vollelektrische Zukunft", verkündete der für Produktentwicklung zuständige Manager Mark Reuss. Zwei neue Stromer, die auf GMs aktuellem E-Auto Chevrolet Bolt EV aufbauen, sollen in den nächsten 18 Monaten präsentiert werden. Es handele sich dabei aber nur um die ersten zwei von mindestens 20 neuen E-Modellen, die der Hersteller bis 2023 auf den Markt bringen wolle.</p><p>Der E-Antrieb werde sich zwar nicht "über Nacht" durchsetzen, so GM-Manager Reuss. Doch man sehe sich verpflichtet, Gebrauch und Akzeptanz der Technologie kompromisslos im Sinne der Kundenbedürfnisse voranzutreiben. Der größte US-Autohersteller will auf dem Weg zur Elektrifizierung zweigleisig fahren und beim Antrieb neben Batterien auch auf Wasserstoff-Brennstoffzellen setzen.</p><h3>Wird es eng für Tesla?</h3><p>Ford, die Nummer zwei im US-Automarkt, gab fast zeitgleich bekannt, ebenfalls die Anstrengungen in Sachen Elektromobilität zu intensivieren. Das Unternehmen habe am Hauptsitz in der US-Autometropole Detroit das "Team Edison" aufgestellt, das sich in den nächsten Jahren um Investitionen in E-Autos kümmern und Partnerschaften mit Zulieferern und anderen Firmen in diesem Bereich erkunden solle. Am Dienstag will Ford-Chef Jim Hackett seine Strategie bei einer Konferenz in New York konkretisieren.</p><p>Bei Anlegern kamen die Nachrichten gut an - die GM-Aktie legte um mehr als vier Prozent zu, Ford schaffte ein Plus von einem Prozent. Mit einem Börsenwert von gut 61 Milliarden Dollar steht GM aktuell wieder deutlich vor Tesla. Sollten GM und Ford ernsthaft dagegenhalten, könnte es für Tesla eng werden - denn was Gewinne, Erlöse und Verkäufe angeht, liegen zwischen den Urgesteinen der US-Autoindustrie und dem aufstrebenden Neuling aus dem Silicon Valley noch immer Welten.</p>',
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
            content: '<p>Der Einsatz von Solaranlagen ist 2016 weltweit erstmals stärker gewachsen als der aller anderen Energieträger. Das geht aus einem Bericht der Internationalen Energieagentur IEA hervor. Das Wachstum von Wind- und Wasserkraft verlangsamte sich hingegen. Trotzdem machten erneuerbare Energien im Jahr 2016 zwei Drittel des Kapazitätszuwachses im Energiesektor aus - ein höherer Anteil als je zuvor.</p><p>Verantwortlich für den Boom der Solarenergie sind vor allem staatliche Förderungen und sinkende Kosten für Solaranlagen. Fast 60 Prozent der Solarzellen stammen der IEA zufolge mittlerweile aus China, wo sie vergleichsweise günstig produziert werden. Dort befindet sich auch die Hälfte aller Abnehmer. Die USA blieben trotz politischer Unsicherheiten durch die Klimapolitik von Präsident Donald Trump der zweitgrößte Wachstumsmarkt für Solaranlagen.</p><p>Laut IEA wird das Wachstum erneuerbarer Energien insgesamt anhalten. So könnten die Kapazitäten weltweit in den nächsten fünf Jahren um weitere 43 Prozent zulegen. Erneuerbare Energien würden damit 2022 fast 30 Prozent zum globalen Energiemix beitragen. Noch im vergangenen Jahr hatte die IEA mit zwölf Prozent weniger Wachstum gerechnet.</p><p>Eine zunehmend größere Rolle spielt bei dieser Entwicklung außer China auch Indien: Die Kapazitäten erneuerbarer Energien auf dem Subkontinent könnten sich bis 2022 verdoppeln und damit das Wachstum in der Europäischen Union überholen, das sich deutlich verlangsamen dürfte. In Deutschland soll das Wachstum in den nächsten fünf Jahren konstant bleiben.</p>',
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

    return {carousel,news,event,parallax,gallery};
  }
}