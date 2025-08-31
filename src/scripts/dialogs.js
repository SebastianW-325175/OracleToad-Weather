const welcomeQuotes = [
    "Witaj człowiecze.",
    "Ćśśś... duży dwunożny jest tu z nami.",
    "Przybyłeś do stawu mądrości… choć niewiele tu znajdziesz.",
    "Prąd szeptał o twoim nadejściu, dwunożny.",
    "Wyrocznia zauważa twoje przybycie.",
    "Zasiądź przy kamieniu, a poznasz prawdy mokrych trzcin.",
    "Słuchaj uważnie, bo moje słowa są jak muchy — łatwo uciekają.",
    "Przybywasz do wyroczni, lecz czy przyniosłeś muchy?"
];
const welcomeBackQuotes = [
    "Czego jeszcze tu szukasz, dziwny płazie?",
    "Wróciłeś. Czy przekonał cię mój kamień?",
    "Ledwie zwilżyłem swoje gałki, a znów tu stoisz...",
    "Niecierpliwy dwunożny… czyżbyś zgubił własne prognozy?",
    "Jeszcze raz? Ropucha nie skacze dwa razy dla tej samej wróżby.",
    "Twa zachłanność płazich prognoz źle zwiastuje...",
    "Czy tym razem przyniosłeś muchy?",
    "Nie mam nowych wizji, tylko stare błoto. Ale słuchaj, skoro nalegasz.",
    "Powracasz do stawu, jakbyś sam był ropuchą w przebraniu."
];
const noLocation = [
    "Twoje ślady giną we mgle… nawet lilie nie wiedzą, gdzie stoisz.",
    "Staw milczy, a kamienie nie zdradzają twojego położenia.",
    "Niebo zasłania mi twą drogę… musisz mówić głośniej, dwunożny.",
    "Moje oczy sięgają tylko do brzegu wody. Dalej nie widzę nic.",
    "Mgła zasnuła twoją pozycję…",
    "Czuję tylko zapach much. Twój zniknął.",
    "Moje błoto nie zna twoich kroków.",
    "Nie ma cię w księdze ropuch. To dziwne i niepokojące.",
    "Moja moc kończy się tam, gdzie zaczyna się asfalt."
];
const locationNotFound = [
    "To miejsce istnieje tylko w twojej głowie… a może w innym świecie.",
    "Patrząc w błoto, nie dostrzegam miejsca o takiej nazwie. Czy śmiesz żartować z ropuszej wyroczni?",
    "Choć gwiazdy szepczą stale, to żadna nie szepcze o miejscu o które pytasz...",
    "Moje lilie pływają w wielu stawach, ale tego miejsca nie znają....",
    "Próbuję dostrzec, lecz ta nazwa brzmi tak, jakby wymyśliły ją kijanki!",
    "Tego miejsca nie sposób znaleźć nawet w najgłębszej kałuży.",
    "Takie miejsce ukrywa się poza mapą — albo poza moim rozumem.",
    "Zadajesz pytania o krainę, której nie widzą ani gwiazdy, ani muchy.",
    "Nie znam takiej krainy… ale może istnieje w snach jaszczurek..."
];
const locationUnreachable = [
    "Chmury zakryły me oczy, dwunożny. Nie sposób teraz znaleźć tego miejsca.",
    "Kamienie milczą, niebo milczy. Dziwne... niepokojące...",
    "Me oczy nie widzą, ni słyszą. Coś jest nie tak.",
    "Cisza. Wszędzie cisza. Wyrocznia nie orzecze dziś nic."
];
const geolocationFailed = [
    "Hmm... Nie czuję twych lap na ziemii... przepowiedni nie będzie.",
    "Choć powietrze przemawia, nie mówi nic o twoim położeniu.",
    "Kamienie drżą, lecz nie raczą mi ciebie wskazać.",
    "Mgła zakrywa twoją obecność, płazie. Nie będę w stanie cię znaleźć."
];
const forecastUnavailable = [
    "Widzę cię, dwunożny… lecz chmury pozostają dla mnie zagadką.",
    "Twoja obecność jest oczywista, ale prognoza ukryta głęboko w mgle.",
    "Wiem, gdzie stoisz, lecz nie mogę przepowiedzieć deszczu ani słońca.",
    "Twoje łapy śledzę, lecz wiatru i burzy ujrzeć nie mogę.",
    "Obserwuję cię dokładnie, człowiecze, lecz niebo milczy wobec mnie."
];
const prepare = [
    "Tak... widzę... widzę...",
    "PŁAZIE. SŁUCHAJ UWAŻNIE.",
    "Mgła tańczy nad stawem… a ty patrzysz… widzę...",
    "Wstrzymaj oddech, dwunożny… oto przepowiednia...",
    "Czy słyszysz szelest trzcin? To znaczy, że nadchodzi prawda...",
    "Kamienie przemawiają... słuchajmy...",
    "Woda w stawie burzy się… przygotuj się.",
    "Otwórz oczy… i uszy… dobrze, może tylko uszy...",
    "Tak… nadszedł czas, by prognoza została ogłoszona..."
];
const tempQuotes = {
    //Poniżej 5 stopni C
    0: [
        "Ziemia twarda... zimna. Jak ciało. To czas hibernacji, czas snu.",
        "Chłód przeszywa łapy… muchy śpią, ja też mógłbym.",
        "Brr… kamienie zimne jak noc. Najlepiej nie ruszać się zbyt wiele.",
        "Powietrze przenika skórę, czas zwijać się w błocie i czekać.",
        "Cisza mroźna… każda kropla rosy twarda jak lód. Czas drzemki."
    ],
    1: [
        "Powoli i po mału, tak zbiegnie nam czas tego zimnego dnia. Odpuść dziś muchom, szaleńcza pogoń okaże się zgubna.",
        "Zimno wciąż przeszywa łapy… skacz tylko jeśli konieczne, błoto cię przyjmie.",
        "Nieśmiało wychylam się z kryjówki, lecz mróz wciąż trzyma mnie w uścisku.",
        "Chłód powietrza kręci wszystko wokół, a ja patrzę… i rozważam każdy ruch.",
        "Poranne słońce ledwie ogrzewa, czas na spokojne obserwacje, a nie gonitwę."
    ],
    2: [
        "Ziemia przekazuje nam wieści wczesnej wiosny. Idź, jeśli musisz, lecz bądź ostrożny. Wielu zgubiło ciepło w pozornie takie dni.",
        "Powoli wstaję z błotnych kryjówek, słońce ogrzewa łapy. Poruszaj się ostrożnie, muchy wciąż rzadkie.",
        "Czuję pierwsze przebłyski życia w stawie, czas wyjrzeć, lecz nie szaleć.",
        "Wczesnowiosenna aura… powietrze chłodne, lecz obiecuje ruch. Skacz z rozwagą.",
        "Nieśmiało rozprostowuję kończyny, lecz chłód wciąż pilnuje każdego kroku."
    ],
    3: [
        "Słońce zleca nam poszukiwania. W takich warunkach z pewnością znajdziesz pożywienie. Choć niech komfort nie zwiedzie cie ku kamieniom. To nie kamienna pogoda...",
        "Ciepło przenika łapy, muchy stają się zuchwałe. Skacz ostrożnie, lecz korzystaj z chwili.",
        "Poruszam się z lekkością, słońce pieści grzbiet. To dzień do polowania i kontemplacji stawu.",
        "Ziemia przyjemnie ciepła, woda zaprasza do plusku. Dziś ruch to przyjemność, a nie wyzwanie.",
        "Czuję energię w łapach… idealny dzień, by wyjrzeć z kryjówki i poszukać pożywienia."
    ],
    4: [
        "Pogoda doskonała do skoków i jedzenia. Grzej się na kamieniu zgodnie z ropuszym zwyczajem.",
        "Słońce pieści grzbiet, błoto miękkie pod łapami. Czas na polowanie i leniwe skoki.",
        "Idealne warunki: aktywność pełna, muchy obfite, kamienie ciepłe. Błoto i ja w harmonii.",
        "Dzień zachęca do ruchu… wyrusz, lecz pamiętaj o skokach godnych ropuchy.",
        "Ciepło i komfort w sam raz. Rozprostuj łapy, poluj, obserwuj świat przez wibrujące powietrze."
    ],
    5: [
        "Nie daj się nabrać na wygodne słońce dwunożny płazie. Słońce zapewni ci komfort, ale także śmierć jeśli nie będziesz ostrożny.",
        "Ciepło parzy kamienie, łapy szukają chłodu w błocie. Polowanie dopiero w cieniu.",
        "Słońce mocne, lecz błoto wciąż chłodne… skacz ostrożnie, by nie przesadzić.",
        "Dzień przyjemny, ale energia szybko ulatuje. Schłodź się w stawie, jeśli chcesz przetrwać.",
        "Ciepło zmusza mnie do odpoczynku w cieniu, choć muchy wciąż kuszą. Uważaj, dwunożny, nie przesadź z ruchem."
    ],
    6: [
        "Idź w wodę dwunogi. Nie szukaj szczęścia ni pomyślności na ziemi, bo nie znajdziesz tam niczego prócz skwaru.",
        "Błoto i woda są twoim schronieniem… kamienie parzą, słońce pali.",
        "Ciało zmęczone, łapy w błocie. Wyruszaj tylko jeśli naprawdę musisz.",
        "Słońce bezlitosne, powietrze gorące… najlepsza mądrość: pozostaw się wodzie.",
        "Nie ryzykuj, dwunożny. Muchy lecą wolno, a ciepło jest zdradliwe. Schron się."
    ],
    7: [
        "Nadchodzi czas próby, płazi-bracia i płazi-siostry. Słońce obraca się i przeciw nam!",
        "Błoto wysycha, kamienie płoną… nawet ja szukam schronienia w cieniu wody.",
        "Ciało zwija się w cieniu, oddech ciężki… dzień jak piekielna próba.",
        "Nie ruszaj się zbyt wiele, dwunożny. Skwar nie zna litości.",
        "Kałuże wysychają, muchy chowają się, a my pozostajemy w ciszy i cieniu."
    ]
};
const sunriseQuotes = [
    "Słońce wychyli się z ziemii o ",
    "Słońce opuści lasy i wzejdzie ponad drzewa o ",
    "Słońce rozepnie ku nam swe ramiona o ",
    "Słońce przywita nas swym gorącym uśmiechem o ",
    "Słońce zaświeci nam ponownie o ",
    "Słońce rozświeli nasze bajoro o "
];
const sunsetQuotes = [
    ", a schowa się w dali o ",
    " i schowa się ponownie o ",
    ", lecz jego uścisk potrwa jedynie do ",
    ", choć ucieknie nam raz jeszcze o ",
    ", aby uciec niczym mucha o ",
    ", chowając się też znowu o "
];
const rainQuotes = {
    0: [
        "Ziemia sucha jak pancerz starego żółwia. Żadnej kałuży, żadnej zabawy.",
        "Nie spadnie dziś kropla. Niebo zamknięte, język wyschnięty.",
        "Cisza bez deszczu... to nie cisza przyjazna. To cisza sucha, twarda.",
        "Ani błota, ani kałuż. To dzień dla tych, co wolą kurz niż wodę.",
        "Liście szeleszczą, ale nie kapią. Dziś niebo oszczędza swoje łzy.",
        "Skok na ziemię będzie twardy. Wysuszona, nieprzyjazna stopom płazów."
    ],
    1: [
        "Mgła deszczu ledwie dotyka ziemi. Wciąż za mało, by zanurzyć łapę w błocie.",
        "Krople tańczą na liściach… ale kałuży z nich nie będzie. Jedynie język zyska smak wilgoci.",
        "To nie deszcz, to szept chmur. Dla płaza ulga, dla ziemi - kpina.",
        "Woda spływa powoli, jakby sama wątpiła, czy ma spaść.",
        "Deszcz mały, cichy. Tylko tyle, by przypomnieć, że niebo jeszcze istnieje.",
        "Nie daj się zwieść - to bardziej obietnica deszczu niż sam deszcz."
    ],
    2: [
      "Niebo otwiera się hojnie. Kałuże rodzą się na ścieżkach, a ziemia oddycha znów.",
      "To deszcz prawdziwy, karmiący. W nim znajdziesz błoto, a w błocie - mądrość płaza.",
      "Skacz teraz, a ziemia przyjmie cię miękko. To czas uczty i pieśni ropuch.",
      "Woda spływa ciągle i pewnie, jak rytuał. Żaden liść nie pozostanie suchy.",
      "Ziemia zmienia się w lustro, a w tym lustrze płaz widzi swoje prawdziwe oblicze.",
      "Dla człowieka to niewygoda, dla nas - najlepszy z darów."
    ],
    3: [
        "To już nie deszcz, to rzeka spadająca z nieba.",
        "Kałuże łączą się w jeziora, a ziemia traci swój kształt.",
        "Skacz ostrożnie - nawet kamień teraz kryje się pod wodą.",
        "Niebo w gniewie, a płaz w zachwycie i trwodze zarazem.",
        "Woda bije rytm, którego żaden język nie uchwyci. To czas próby.",
        "Człowiek powie: ulewa. Płaz powie: świat wraca do swojej natury."
    ],
    4: [
        "Niebo rozrywa się na strzępy, a woda zalewa każdy zakamarek ziemi.",
        "To już nie deszcz, to koniec i początek zarazem.",
        "Płazy kryją się w głębinach, bo nawet one wiedzą, że niebo przesadziło.",
        "Świat tonie w darach, których nie można przyjąć.",
        "Każda kropla jest młotem, a milion młotów kształtuje ziemię na nowo.",
        "Słuchaj uważnie - to pieśń powodzi, pieśń której nikt nie kończy."
    ]
};
const snowQuotes = {
    1: [
        "Śnieg spada lekko… jak pył z nieba. Ziemia przykryta, lecz jeszcze dostępna dla łap.",
        "Małe płatki wirują, zimne na skórze… nieprzyjazne, ale nie groźne.",
        "Biały pył pokrywa świat, choć muchy wciąż próbują się ukryć.",
        "Czuję chłód w łapach, lecz można się jeszcze poruszać po ziemi.",
        "Pierwszy śnieg… dziwne, obce, jakby świat nagle zmienił zasady."
    ],
    2: [
        "Ziemia zniknęła pod białym puchem. Kałuże i muchy schowane, ruch utrudniony.",
        "Śnieg zgarnia wszystko w białą kołdrę… świat staje się trudny i obcy.",
        "Każdy skok wymaga wysiłku, a zimno przeszywa łapy do kości.",
        "Płazy chowają się, ziemia zamknięta, a powietrze szczypie jak igły.",
        "Biały świat otacza mnie z każdej strony, czas przetrwania w cieniu i pod liściem."
    ],
    3: [
        "Świat pod białym ciężarem, kałuże znikły, kamienie pogrążone.",
        "Każdy krok to walka… ziemia zakryta, a chłód bezlitosny.",
        "Biały pancerz nieba przytłacza, a muchy i życie kryją się głęboko.",
        "Płazy skulone w cieniu, czekają aż świat powróci spod śniegu.",
        "Niebo spuściło zasłonę bieli… czas ostrożności i ciszy."
    ],
    4: [
        "Świat pogrążony w bieli, kałuże i muchy zniknęły, tylko cisza i mróz.",
        "Płazy skulone w głębinach błota, nie ruszaj się, dwunożny… zagraża ci niebo.",
        "Biała zasłona nieba przytłacza wszystko. Przetrwanie wymaga cierpliwości i mądrości.",
        "Śnieg pada bez końca, świat zamienia się w jezioro lodu i ciszy.",
        "Niech moc przetrwania będzie z tobą… albo zginiesz pod tym zimnym oceanem."
    ]
};
const endQuotes = [
    "Oto i była ma prognoza. Idź teraz, idź mądrzejszy.",
    "Tako rzeczą głazy...",
    "...lecz jak będzie naprawdę? Kto to wie?",
    "Prognoza skończona, lecz pamiętaj: świat zawsze może zaskoczyć.",
    "I tak kończy się moje widzenie… ale krople wody płyną własną drogą.",
    "Niech twe łapy znajdą bezpieczne miejsce, choć niebo może kłamać.",
    "Skacz ostrożnie, człowiecze, bo nawet prognozy mają swe sekrety.",
    "Widziałem deszcz, śnieg i słońce… lecz twój dzień należy do ciebie.",
    "Kamienie milczą, ja mówiłem… i teraz milknę.",
    "Niech woda i błoto prowadzą cię, choć nie zawsze według mojej woli."
];
const toadTips = [
  "Wiedz, że największy skok to ten, którego nie wykonasz.",
  "Płaz czeka w cieniu, aż mucha sama wpadnie w pułapkę.",
  "Zanim dotkniesz wody, pomyśl o kamieniach pod spodem.",
  "Kto obserwuje nocą, ten zna ruchy wrogów.",
  "Nigdy nie skacz tam, gdzie nie widzisz dna.",
  "Walka z wiatrem to głupota. Walka z wiatrem - mądrość.",
  "Cisza stawu zdradza więcej niż tysiąc głosów trzcin.",
  "Kiedy ziemia drży, mądrzejszy płaz czeka w wodzie.",
  "Najedzona ropucha nie daje się zwieść pokusie kolejnej muchy.",
  "Mały ruch dziś oszczędza wielki skok jutro.",
  "Woda zawsze znajdzie drogę. Naucz się tego od niej.",
  "Ten, kto goni muchę, zdradza własne serce.",
  "Z kamienia patrzy się inaczej niż z wody.",
  "Dwunożny płaz nigdy nie rozumie, że noc to także dzień.",
  "Najgłębsze błoto kryje najcichsze prawdy.",
  "Kiedy słońce pali, cień ropuchy jest najchłodniejszą bronią.",
  "Nie każda kałuża zasługuje na twój skok.",
  "Podążaj za muchą, a zostaniesz muchą.",
  "Ropucha nie pyta o drogę — ona jest drogą.",
  "Staw zapamiętuje każdy twój ruch, choć ty nie pamiętasz jego.",
  "Kamień to tylko woda, która zapomniała, jak płynąć.",
  "Wielka mądrość rodzi się w małym brzuchu pełnym owadów.",
  "Nie myśl o jutrze - myśl o dzisiejszej larwie.",
  "Najlepsza bitwa to ta, w której nie zmoczyłeś nóg.",
  "Głupiec patrzy na niebo. Ropucha patrzy na błoto.",
  "Prawdziwa siła to umieć siedzieć nieruchomo przez dwanaście godzin.",
  "Skok bez celu to jeszcze nie koniec podróży.",
  "Jeśli chcesz znać przyszłość - słuchaj komarów.",
  "Człowiek ma kalendarz, ropucha ma księżyc.",
  "Żaba krzyczy, ropucha milczy. Mądrość rośnie w milczeniu."
];

export function getWelcomeQuote(){
    return welcomeQuotes[ Math.floor(Math.random() * welcomeQuotes.length) ];
};
export function getWelcomeBackQuote(){
    return welcomeBackQuotes[ Math.floor(Math.random() * welcomeBackQuotes.length) ];
};
export function getNoLocationQuote(){
    return noLocation[ Math.floor(Math.random() * noLocation.length) ];
};
export function getNoLocationFoundQuote(){
    return locationNotFound[ Math.floor(Math.random() * locationNotFound.length) ];
};
export function getLocationUnreachableQuote(){
    return locationUnreachable[ Math.floor(Math.random() * locationUnreachable.length) ];
};
export function getGeolocationFailedQuote(){
    return geolocationFailed[ Math.floor(Math.random() * geolocationFailed.length) ];
};
export function getForecastUnavailableQuote(){
    return forecastUnavailable[ Math.floor(Math.random() * forecastUnavailable.length) ];
};
export function getPrepareQuote(){
    return prepare[ Math.floor(Math.random() * prepare.length) ];
};
export function getTemperatureQuote(temperature){
    let temperatureLevel = Math.floor(temperature/5);
    temperatureLevel = Math.max(0, temperatureLevel);
    temperatureLevel = Math.min(7, temperatureLevel);

    const quotesArray = tempQuotes[temperatureLevel];
    return quotesArray[ Math.floor(Math.random() * quotesArray.length) ];
};
export function getSunQuote(sunrise, sunset){
    const sunriseDate = new Date(sunrise);
    const sunsetDate = new Date(sunset);

    const sunriseTime = sunriseDate.toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
    const sunsetTime = sunsetDate.toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    const sunriseQuote = sunriseQuotes[ Math.floor(Math.random() * sunriseQuotes.length)]+sunriseTime;
    const sunsetQuote = sunsetQuotes[ Math.floor(Math.random() * sunsetQuotes.length)]+sunsetTime;

    return sunriseQuote+sunsetQuote;
};
export function getRainQuote(rain){
    let rainLevel;
    
    if(rain == 0.0) rainLevel = 0;
    else if(rain <= 5.0) rainLevel = 1; 
    else if(rain <= 15.0) rainLevel = 2;
    else if(rain <= 30.0) rainLevel = 3;
    else rainLevel = 4;
    
    const quotesArray = rainQuotes[rainLevel];
    return quotesArray[ Math.floor(Math.random() * quotesArray.length) ];
};
export function getSnowQuote(snow){
    let snowLevel;

    if(snow <= 5.0) snowLevel = 1;
    else if(snow <= 15.0) snowLevel = 2;
    else if(snow <= 30.0) snowLevel = 3;
    else snowLevel = 4;

    const quotesArray = snowQuotes[snowLevel];
    return quotesArray[ Math.floor(Math.random() * quotesArray.length) ];
};
export function getEndQuote(){
    return endQuotes[ Math.floor(Math.random() * endQuotes.length) ];
};
export function getToadTip(){
    return toadTips[ Math.floor(Math.random() * toadTips.length) ];
}