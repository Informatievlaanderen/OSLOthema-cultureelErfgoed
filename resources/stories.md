# Stories

## Overzicht

| Nr    | Geval                                                      | Bv                                                   | Illustreert                                                                                                                                           | Demo vb                              | Verantwoordelijke |
|-------|------------------------------------------------------------|------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|-------------------|
| 1\.1  | Complex object                                             | Schilderij bestaande uit panelen                     | MensgemaaktObject \-> MensgemaaktObject                                                                                                               | [Lam Gods \(Van Eyck\)](objectdiagrammen/Objectdiagram_LamGods.jpg)                | Dimi              |
| 1\.2  | Complex object                                             | Ensemble van gebouwen                                | MensgemaaktObject \-> MensgemaaktObject                                                                                                               | De Haan concessie                    | Dimi              |
| 2\.1  | Waardebepaling/classificatie                               | Topstuk                                              | Mensgemaakt\.^type                                                                                                                                    | [Melun\-diptiek \(Foquet\)](objectdiagrammen/Objectdiagram_Melundiptiek.jpg)            | Dimi              |
| 2\.2  | Waardebepaling/classificatie                               | Monument \(gebouw met juridische bescherming\)       | MensgemaaktObject \-> Recht                                                                                                                           | Grand Hotel De Haan                  | Dimi              |
| 3\.1  | Historiek van een werk                                     | Expo, bruikleen, verkoop, verhuis van een schilderij | MensgemaaktObject \-> Gebeurtenis/Activiteit, Expo = Voorstelling?                                                                                    | ?                                    |                   |
| 4\.1  | Complex object verspreid over meerdere collecties          | Pagina's van album in meerdere collecties            | ComplexWerk \-> IndividueelWerk \(meerdere\) \-> ZelfstandigeExpressie \(meerdere\) \->MensgemaaktObject \-> Collectie \(meerdere\)                   | Album Ensor \(Ensor\)                | Brecht            |
| 4\.2  | Complex object verspreid over meerdere collecties          | Diptiek met panelen in verschillende collecties      | ComplexWerk \-> IndividueelWerk \(meerdere\) \-> ZelfstandigeExpressie \(meerdere\) \->MensgemaaktObject \-> Collectie \(meerdere\)                   | [Melun\-diptiek \(Foquet\)](objectdiagrammen/Objectdiagram_Melundiptiek.jpg)             | Dimi              |
| 5\.1  | Een werk, meerdere kunstenaars                             | Gravure \(inventor, graveur, uitgever\)              | ComplexWerk \-> IndividueelWerk \(meerdere\) \-> ZelfstandigeExpressie \(meerdere\) \-> MensgemaaktObject                                             | [Terugkeer uit Egypte \(Rubens\)](objectdiagrammen/Objectdiagram_terugkeerUitEgypte.jpg)      | Geert             |
| 5\.2  | Een werk, meerdere kunstenaars                             | Boek \(schrijver, uitgever\)                         | ComplexWerk \-> IndividueelWerk \(meerdere\) \-> ZelfstandigeExpressie \(meerdere\) \-> MensgemaaktObject                                             | Het verdriet van België \(Claus\)    |                   |
| 5\.3  | Een werk, meerdere kunstenaars                             | Een schilderij, meerdere schilders                   | ComplexWerk \-> IndividueelWerk \(meerdere\) \-> ZelfstandigeExpressie \(meerdere\) \-> MensgemaaktObject                                             | Diana's Jacht \(Rubens\)             | Geert             |
| 5\.4  | Een werk, meerdere kunstenaars                             | Woning \(architect, aannemer\)                       | IndividueelWerk \-> ZelfstandigeExpressie\+OntwerpOfProcedure en MensgemaaktObject\.geproduceerdDoor:Productie\.gebruikteTechniek:OntwerpOfProcedure? | De Haan concessie                    | Dimi              |
| 6\.1  | Relatie object\-informatieobject                           | Tekening gebaseerd op foto                           | VerwijstNaar?                                                                                                                                         | Ensor's moeder \(Ensor\)             | Brecht            |
| 6\.2  | Relatie object\-informatieobject                           | Foto van voorstelling                                | Document\.documenteert \-> Voorstelling \(wat met het omgekeerde?\)                                                                                   | Rosas danst Rosas \(De Keersmaeker\) | Geert             |
| 6\.3  | Relatie object\-informatieobject                           | Foto van monument                                    | Document\.documenteert \-> MensgemaaktObject \(wat met het omgekeerde?\)                                                                              | De Haan concessie                    | Dimi              |
| 6\.4  | Relatie object\-informatieobject                           | Archivering                                          | MensgemaaktObject \-> Informatieobject \-> MensgemaaktObject                                                                                          | Journaal                             | Brecht            |
| 7\.1  | Een werk, meerdere versies                                 | Verschillende staten van een gravure                 | ComplexWerk \-> IndividueelWerk \(meerdere\) \-> ZelfstandigeExpressie \(meerdere\) \-> MensgemaaktObject \(meerdere\)                                | Zeven hoofdzonden \(Ensor\)          | Dimi              |
| 8\.1  | Afgeleid werk                                              | Vertaling van een boek                               | IndividueelWerk \-> IsAfgeleidVan \-> IndividueelWerk                                                                                                 | The Sorrow of Belgium \(Pomerans\)   | Geert             |
| 9\.1  | Samengestelde werken                                       | Publicatie                                           | ComplexWerk \-> IndividueelWerk \(meerdere\) \-> ZelfstandigeExpressie \(meerdere\) \-> MensgemaaktObject                                             | Het verdriet van België \(Claus\)    | Geert             |
| 9\.2  | Samengestelde werken                                       | Voorstelling                                         | ?                                                                                                                                                     | Rosas danst Rosas \(De Keersmaeker\) | Geert             |
| 10\.1 | Praktijken                                                 | Ambacht                                              | ?                                                                                                                                                     | ?                                    |                   |
| 11\.1 | Culturele gebeurtenissen                                   | Processie                                            | ?                                                                                                                                                     | Ros Beiaard ommegang                 |                   |
| 12\.1 | Productieactiviteiten zoals Digitalisatie, Archivering…    | Digitalisatie van VCR & archivering van resultaat    | MensgemaaktObject \-> Document \-> MensgemaaktObject \(door Activiteiten vh type Productie vh type Digitalisatie, Arechivering\)                      | Journaal                             | Brecht            |
| 13\.1 | Creatieactiviteiten zoals Publicatie, opname, Voorstelling | Publicatie van een boek                              | PublicatieActiviteit \-> Publicatiewerk & Publicatieexpressie \-> MensgemaaktObject                                                                   | Het verdriet van België \(Claus\)    | Geert             |
| 13\.2 | Creatieactiviteiten zoals Publicatie, opname, Voorstelling | Opnemen van een film                                 | OpnameActiviteit \-> Opnamewerk & Opname \-> MensgemaaktObject\.                                                                                      | ?                                    |                   |
| 13\.3 | Creatieactiviteiten zoals Publicatie, opname, Voorstelling | Uitvoeren van een Voorstelling                       | Voorstelling \-> Voorstellingwerk & Voorstellingplan                                                                                                  | Rosas danst Rosas \(De Keersmaeker\) | Geert             |
| 14\.1 | Historiek van Object of Activiteit                         | Wijziging Praktijk                                   | Implementatiemodel                                                                                                                                    | Zwarte Piet wordt Roetpiet           |                   |
| 14\.2 | Historiek van Object of Activiteit                         | Wijziging kenmerken object                           | Implementatiemodel                                                                                                                                    | ?                                    |                   |
| 15\.1 | Relaties tussen Objecten of Activiteiten                   | Tussen MensgemaakteObjecten                          | ?                                                                                                                                                     | Sint Nicolaas, Sinterklaas, Kerstman |                   |
| 15\.2 | Relaties tussen Objecten of Activiteiten                   | Tussen activiteiten                                  | ?                                                                                                                                                     | ?                                    |                   |
| 16\.1 | Vondst                                                     | ?                                                    | ?                                                                                                                                                     | ?                                    |                   |

## Roerend erfgoed

### Lam Gods

- Men wil het Altaarretabel, met 26 panelen, Lam Gods (MensgemaaktObject) inventariseren.
- De permanente locatie is in de Sint-Baafskathedraal (MensgemaaktObject.permanenteLocatie).
- Momenteel bevindt deze zich echter gedeeltelijk (o.m. inventarisnrs. 10000091, 100000118, 100000107, 100000111, 100000112, 10000113, 100000115, …) in het Museum voor Schone Kunsten (MensgemaaktObject.locatie) en gedeeltelijk (inventarisnrs. 10000105, 100000108, 10000110, …) in de Sint-Baafskathedraal (MensgemaaktObject.locatie). 
- Het retabel is in geopende toestand totaal 520,0 cm breed (MensgemaaktObject.dimensie) en 375,0 cm (MensgemaaktObject.dimensie) hoog. - Het retabel is in gesloten toestand totaal XXX cm breed (MensgemaaktObject.dimensie) en XXX cm hoog (MensgemaaktObject.dimensie).
- Het paneel van het Lam Gods, schilderij is 134,3 cm hoog (MensgemaaktObject.dimensie) en 237,5 cm breed (MensgemaaktObject.dimensie).
- Men voegt foto’s (Document) van het altaarretabel in gesloten toestand, in open toestand en van de verschillende deelpanelen toe.
- De Kerkfabriek (Agent) is eigenaar (MensgemaaktObject.eigenaar) van het Lam Gods. 
- Het Altaarretabel behoort tot het publiek domein (Recht), maar de Kerkfabriek delegeerde het beeldbeheer naar Meemoo dat volgende vermelding verplicht: ‘CC-BY-NC-ND Sint-Baafskathedraal Gent www.lukasweb.be Fotograaf: Dominique Provost’ (Recht).
- Het is gemaakt door de Jan van Eyck (Productie.uitgevoerdDoor) en Hubert van Eyck (Productie.uitgevoerdDoor) in 1420-1432 (Productie.tijd).
- De Rechtvaardige Rechters (MensgemaaktObject) is een paneel (MensgemaaktObject.bestaatUit) van het Lam Gods.
- De Aanbidding van het Lam (MensgemaaktObject) is een paneel (MensgemaaktObject.bestaatUit) van het Lam Gods.
- Toe te voegen relaties:
  - Welke panelen behoren tot het gesloten retabel
  - Welke panelen behoren tot het open retabel
  - Hoe verhouden de panelen zich tot elkaar

[Brondocument.](documenten/LamGods.docx)

### Een werk met een zekere waardebepaling / rangschikking

### Een werk met een zekere historiek (creatie, verkoop, verhuis, bruikleen, tentoonstelling, …)

### Twee werken van dezelfde kunstenaar die in twee aparte collecties zitten

De zeven hoofdzonden door James Ensor
- [Titelblad](http://jamesensor.vlaamsekunstcollectie.be/nl/collectie/de-hoofdzonden-beheerst-door-de-dood)
- [Hoogmoed](http://jamesensor.vlaamsekunstcollectie.be/nl/collectie/de-hoogmoed-3)
- [Hebzucht](http://jamesensor.vlaamsekunstcollectie.be/nl/collectie/de-gierigheid)
- [Onkuisheid](http://jamesensor.vlaamsekunstcollectie.be/nl/collectie/de-ontucht)
- [Afgunst](http://jamesensor.vlaamsekunstcollectie.be/nl/collectie/envie)
- [Gulzigheid](http://jamesensor.vlaamsekunstcollectie.be/nl/collectie/gourmandise)
- [Woede](http://jamesensor.vlaamsekunstcollectie.be/nl/collectie/colere)
- [Luiheid](http://jamesensor.vlaamsekunstcollectie.be/nl/collectie/paresse) 

### Eén werk dat (fysiek) uit elkaar is gehaald en nu over 2 of meer collecties verspreid is

Melun-diptiek

Zie https://www.wikidata.org/wiki/Q2589776. Het luik 'Madonna omringd door serafijnen en cherubijnen' (zie https://www.wikidata.org/wiki/Q29585674 en https://arthub.vlaamsekunstcollectie.be/nl/catalog/kmska:132) bevindt zich in het KMSKA, het andere luik, 'Étienne Chevalier met de heilige Stephanus' (zie https://www.wikidata.org/wiki/Q29585693), bevindt zich in de Gemäldegalerie in Berlijn.

### Een topstuk

Het luik 'Madonna omringd door serafijnen en cherubijnen' (zie hierboven) staat op de Topstukkenlijst, zie https://cjsm.be/topstukken/topstuk?id=253.

### Een werk van meerdere kunstenaars 1

Beschrijving van een kopergravure naar Rubens

- De permanente locatie is in het KMSKA.
- Momenteel bevindt de gravure zich in het externe depot van het KMSKA
- De gravure meet 435mm hoog bij 324mm breed 
- Er bestaan 3 foto’s van deze gravure
- De gravure behoort tot het publiek domein 
- het inventarisnumer is 10200
- Het is gemaakt door:
  - inventor: Peter Paul Rubens, Siegen 1577 - Antwerpen 1640
  - graveur: Schelte Adamsz. Bolswert, Bolsward 1584/1588 - Antwerpen 1659
  - uitgever: Martinus van den Enden I, Antwerpen 17de eeuw
- De afgeleide productiedatum ligt tussen 1600 en 1659
- De titel is: Terugkeer uit Egypte; Le retour d' Égypte; The Return from Egypt; Der Rückkehr aus Ägypten
- Materiaal en techniek: kopergravure op papier
- Er staan inscripties op de gravure:
  - links onder: P.P. Rubbens pinxit. S. a Bolswert fecit.
  - rechts onder: Martinus vanden Enden excudit Cum priuilegio.
  - midden onder: ET ERAT SVBDITVS ILLIS. Luc. 2.
- Het is een schenking van Max Rooses, Antwerpen 1839 - Antwerpen 1914 aan het KMSKA

### Een werk van meerdere kunstenaars 2

[Diana's jacht](https://museumdichtcollectieopen.art/2020/04/14/peter-paul-rubens-paul-de-vos-en-jan-wildens-dianas-jacht-langdurig-bruikleen-aan-het-rubenshuis/): 1 kunstwerk, drie betrokken kunstenaars

### Kunstwerken uit verschillende collecties die aan elkaar gerelateerd zijn

http://jamesensor.vlaamsekunstcollectie.be/en/sources/online-publications/james-ensor-and-photography

### Kunstwerken die met elkaar verband houden

- http://jamesensor.vlaamsekunstcollectie.be/en/collection/the-artists-mother-in-death
- http://jamesensor.vlaamsekunstcollectie.be/en/collection/mijn-dode-moeder-iii 
- http://jamesensor.vlaamsekunstcollectie.be/en/collection/mijn-dode-moeder-iv 

### Verschillende versies van hetzelfde kunstwerk

Bijvoorbeeld ingekleurd en niet ingekleurd, en niet noodzakelijkerwijze in dezelfde collectie, zelfs niet noodzakelijk met de zelfde (toegekende) titel.

- http://jamesensor.vlaamsekunstcollectie.be/nl/collectie/de-zeven-hoofdzonden-beheerst-door-de-dood 
-	http://jamesensor.vlaamsekunstcollectie.be/nl/collectie/de-hoofdzonden-beheerst-door-de-dood-2 
-	http://jamesensor.vlaamsekunstcollectie.be/nl/collectie/de-hoofdzonden-beheerst-door-de-dood 
-	http://jamesensor.vlaamsekunstcollectie.be/nl/search/node/hoogmoed

### Een muziekstuk




## Onroerend erfgoed

### Villa van Wassenhove (in bijlage)

### Een gebouw met een zekere juridische bescherming

### Een ensemble van meerdere gebouwen, bv. Begijnhof van Brugge, Gravensteen, ...

### Vondst


## Immaterieel erfgoed

### Een erfgoedpraktijk zonder duidelijke events, bv. een ambacht

### Een erfgoedpraktijk met duidelijke events, bv. jaarmarkt, processie, etc. 

### Evoluties opvolgen

Een geïnteresseerde arriveert op immaterieelerfgoed.be en voegt in 2010 de erfgoedpraktijk 'Sinterklaas en Zwarte piet' toe. We publiceren de praktijk. In 2021 vraagt de Vlaamse Overheid, omwille van gevoeligheden, of het eventueel mogelijk is om verwijzingen naar 'Zwarte piet' te verwijderen uit online publicaties. Een collega van een partnerorganisatie vraagt de inzender om de uitdrukking 'zwarte piet' te wijzigen naar 'roetpiet' en de inzender gaat hiermee akkoord. Nadien wil een moderator weten waarom de eigenschappen van de erfgoedpraktijk gewijzigd zijn, wie wat gewijzigd heeft en hoe de vorige versies er uit zien.

### Veronderstelde relaties zoeken en toevoegen

Een 100-tal moderators (uit ngo's en de Vlaamse Overheid) willen verbanden leggen tussen Nicolaas van Myra, Sinterklaas en de Kerstman. Ze willen relaties beschrijven en meta-opmerkingen over de tijdsgeest maken. De informatie wordt wekelijks geüpdatet.




## Digitalisatie

### Archivatie

VRT (Agent) heeft een VCR casette (MensgemaaktObject) waarop verschillende video's bewaard staan.
Deze werd gedigitaliseerd door Sonim Production (Agent) waardoor de bestanden (InformatieObject) in digitale vorm beschikbaar zijn. Eén daarvan is een video met daarop het journaal van 1 januari 1993 (InformatieObject:titel). De VRT is eigenaar van dit bestand (InformatieObject:eigenaar). Vervolgens wordt deze video gearchiveerd (Archivatie-activiteit) door Meemoo (Agent) op een LTO tape (MensgemaaktObject). Tot slot is er een ondertitelingsdocument (InformatieObject) gekoppeld met deze video.
 
![digitalisatie-archivatie](https://raw.githubusercontent.com/brechtvdv/OSLOthema-cultureelErfgoed/master/resources/objectdiagrammen/digitalisatie_archivatie.jpg)

### Digital born

Een digital born object is hetzelfde als bij [Digitalisatie - archivatie](#Digitalisatie-archivatie), behalve dat er geen voorafgaand MensgemaaktObject is, die nog gedigitaliseerd moet worden.

### Collectie-overdracht

De botanist André Lawalrée (Agent) heeft een collectie overgedragen aan (Overdracht) Plantentuin Meise (Agent). Deze collectie bevat o.a. een exemplaar van een Galium Aparine (MensgemaaktObject) met als identificator 13194, afkomstig van Postel (MensgemaaktObject:spatialcoverage). Dit examplaar is gedigitaliseerd (InformatieObject) en geïdentificeerd met BR0000010985236.

Gebaseerd op: https://www.doedat.be/task/show/3841851

![digitalisatie-archivatie](https://raw.githubusercontent.com/brechtvdv/OSLOthema-cultureelErfgoed/master/resources/objectdiagrammen/plantentuin.jpg)
