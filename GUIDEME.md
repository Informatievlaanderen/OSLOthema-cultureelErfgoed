# Template richtlijnen

Dit bestand bevat instructies voor de **_editor(s)_** van dit thema.

Voor naamgevingen wordt in dit bestand volgende syntax gebruikt:
* `{}` voor een variabele. Gebruik hoofdletters, kleine letters, scheidingstekens zoals gesuggereerd in de naam van de variabele. Zo suggereert dit `{VocabulariumNaam}` bijvoorbeerld om te beginnen met een hoofdletter,
woorden aaneen te schrijven en elk woord opnieuw met een hoofdletter te beginnen. 
* `[]` voor een optionele term, die enkel nodig is onder de voorwaarden zoals verder wordt toegelicht.


## 1. Bestandsstructuur
Deze repository bevat initieel een structuur van directories en bestanden op de `master` branch.
Deze zijn overgenomen uit een template repository.

Principe: _pas bestandsnamen en bestandsinhoud aan uw situatie aan. Voeg bestanden toe waar nodig._

Als hint is elk variabel gegeven in de initiële bestandsnamen en bestandsinhoud aangeduid met het woord `mijn` of `Mijn` (al naargelang de voorgestelde hoofdletter / kleine letter voorkeur).
Je kan bijvoorbeeld nu meteen de titel van het README.md bestand in de repository root op de `master` branch aanpassen (er staat voorlopig `OSLOthema-mijnThema`).

**Overzicht initiële bestanden**

```
.
├── CHANGELOG
├── README.md
├── stakeholders.csv
├── OSLO-MijnVocabularium-VOC.eap
├── OSLO-MijnApplicatieprofiel-AP.eap
├── config
│   ├── mijn-vocabularium-voc.json
│   └── mijn-applicatieprofiel-ap.json
├── resources
├── site-skeleton
│   └── mijn-applicatieprofiel-ap
│       └── overview.jpg
└── templates
    ├── mijn-vocabularium-voc.j2
    └── mijn-applicatieprofiel-ap.j2
```

**Toelichting**

| Initieel bestand   | Naamgeving voor finaal bestand | Beschrijving | Bewerk op branch |
|--------------------|--------------------------------|--------------|------------------|
| CHANGELOG | `CHANGELOG` | Overzicht van wijzigingen. Vul aan volgens voorbeeld. | (*) |
| README.md | `README.md` | Wat bezoekers van de github repository op de frontpagina te zien krijgen. Vul aan volgens voorbeeld. | master |
| stakeholders.csv | `stakeholders.csv` | Lijst met Auteurs, Editors en Medewerkers. Vul aan volgens voorbeeld. **Opgepast voor speciale karakters: bestand moet UTF-8 encoded zijn.** | (*) |
| OSLO-MijnVocabularium-VOC.eap | `OSLO-{VocabulariumNaam}-VOC.eap` | Enterprise Architect bestand voor een vocabularium. Zie lager voor basisstructuur. | (*) |
| OSLO-MijnApplicatieprofiel-AP.eap | `OSLO-{ApplicatieProfielNaam}-AP.eap` | Enterprise Architect bestand voor een applicatieprofiel. Zie lager voor basisstructuur. | (*) |
| config/mijn-vocabularium-voc.json | `config/{vocabularium-naam}-voc.json` | Configuratiebestand voor een vocabularium. Pas inhoud aan in lijn met voorbeeld. | (*) |
| config/mijn-applicatieprofiel-ap.json | `config/{applicatieprofiel-naam}-ap.json` | Configuratiebestand voor een applicatieprofiel. Pas inhoud aan in lijn met voorbeeld. | (*) |
| - | `resources/[{subdir}/]{bestandsnaam}` | Folder voor allerlei resources. Voeg in een vrije structuur hier bestanden toe die nuttig zijn voor of aan bod komen tijdens de thematische werkgroepen. | master |
| site-skeleton/mijn-applicatieprofiel-ap/overview.jpg | `site-skeleton/{applicatieprofiel-naam}-ap/overview.jpg` | Diagram voor het applicatieprofiel. JPEG bestand bekomen via copy/paste uit het diagram in het overeenkomstig Enterprise Architect bestand. | (*) |
| templates/mijn-vocabularium-voc.j2 | `templates/{vocabularium-naam}-voc.json` | Template bestand voor het tekstgedeelte van de specificatie van een vocabularium. Vul aan.| (*) |
| templates/mijn-applicatieprofiel-ap.j2 | `templates/{applicatieprofiel-naam}-ap.json` | Template bestand voor het tekstgedeelte van de specificatie van een applicatieprofiel. Vul aan. | (*) |

(*) Bewerk dit bestand op de branch die relevant is voor de huidige status van het specificatiedocument, zoals verder toegelicht. Basisinhoud kan eventueel eerst aangemaakt worden op de master branch.

**Basisstructuur Enterprise Architect bestand voor een vocabularium**

![basisstructuur EA vocabularium](GUIDEME-fig1.jpg)

- Onder `Model` een package met vaste naam `OSLO²_vocabularium`
- Onder `OSLO²_vocabularium` een package met naam van het vocabularium, naamgeving `OSLO-{VocabulariumNaam}`. Dit is het package waarop de tag _baseURI_ wordt geplaatst en waarin de vocabularium elementen worden aangebracht.
- In het package `OSLO-{VocabulariumNaam}` een diagram met dezelfde naam als het vocabularium.

**Basisstructuur Enterprise Architect bestand voor een applicatieprofiel**

![basisstructuur EA applicatieprofiel](GUIDEME-fig2.jpg)

- Onder `Model` een package met naam die aanduidt dat dit over een applicatieprofiel gaat, en ook al de naam van het applicatieprofiel aangeeft, naamgeving: `OSLO²_applicatieprofiel_{ApplicatieProfielNaam}`.
- Onder `OSLO²_applicatieprofiel_{ApplicatieProfielNaam}` een package met naam van het vocabularium dat als basis dient voor dit applicatieprofiel, naamgeving:  `OSLO-{VocabulariumNaam}`. Dit package is een kopie van het gelijknamige vocabularium uit het Enterprise Architect bestand waarin het werd gemaakt.
- In het package `OSLO-{VocabulariumNaam}` een diagram met een naam die verwijst naar het applicatieprofiel, naamgeving: `OSLO-{ApplicatieProfielNaam}`. Hernoem bijvoorbeeld het diagram dat meekomt met de kopie van het vocabularium. De nieuwe naam is essentieel voor het te publiceren diagram (overview.jpg).

## 2. Branches
Principe: **_werk op één unieke branch per specificatiedocument en per status_**.

Plaats alle ontwikkelingen voor een specificatiedocument startend van de vorige status en eindigend in de nieuwe status op een unieke branch, aangemaakt met volgende naamgeving:
```
{documenttype}[{documentvolgnummer}]{status}[-cyclus{cyclusvolgnummer}]
```

### Onderdelen in deze naamgeving
**_{documenttype}_**

| {documenttype} | voor een ... |
|----------------|--------------|
| `voc` | vocabularium |
| `ap` | applicatieprofiel |

**_{status}_**

| {status} | voor status (*)  |
|----------|------------------|
| `ontwerp` | Ontwerp Standaard |
| `kandidaat` | Kandidaat Standaard |
| `erkend` | Erkende Standaard |
| `vervangen` | Vervangen Standaard |
| `verouderd` | Verouderde Standaard |
| `herroepen` | Herroepen Standaard  |

(*) bepaald door [deze codelijst](https://data.vlaanderen.be/doc/conceptscheme/StandaardStatus)

**_{documentvolgnummer}_**

Aangezien een repository meer dan één document per documenttype kan beheren, is een disambiguatie nodig vanaf het tweede document per type.

Een {documentvolgnummer} is een natuurlijk getal. Gebruik oplopende volgnummers, startend bij 2.

**_{cyclusvolgnummer}_**

Aangezien meerdere publicatiecycli mogelijk moeten zijn -er kan bijvoorbeeld na afspraak aan een volgende versie van een erkende standaard gewerkt worden-
is een disambiguatie nodig vanaf de tweede cyclus.

Een {cyclusvolgnummer} is een natuurlijk getal. Gebruik oplopende volgnummers, startend bij 2.

### Eenvoudige voorbeelden
Volgende branches komen voor in een repository die (voorlopig) slechts één vocabularium en één applicatieprofiel bevat en slechts één publicatiecyclus kent.
 
| Branch-naam | Beschrijving |
| ----------- | ------------ |
| `voc-ontwerp` | Branch voor publicatiepunt met status Ontwerp Standaard voor het vocabularium. |
| `voc-kandidaat` | Branch voor publicatiepunt met status Kandidaat Standaard voor het vocabularium. |
| `voc-erkend` | Branch voor publicatiepunt met status Erkende Standaard voor het vocabularium. |
| `ap-ontwerp` | Branch voor publicatiepunt met status Ontwerp Standaard voor het applicatieprofiel. |
| `ap-kandidaat` | Branch voor publicatiepunt met status Kandidaat Standaard voor het applicatieprofiel. |
| `ap-erkend` | Branch voor publicatiepunt met status Erkende Standaard voor het applicatieprofiel. |

### Voorbeelden met extra volgnummer
Enkele voorbeelden in geval van meerdere vocabularia of meerdere ontwerpcycli.

| Branch-naam | Beschrijving |
| ----------- | ------------ |
| `voc2-ontwerp` | Branch voor publicatiepunt met status Ontwerp Standaard voor het **_tweede_** vocabularium. |
| `voc-ontwerp-cyclus2` | Branch voor publicatiepunt met status Ontwerp Standaard voor het eerste vocabularium in de **_tweede ontwerpcyclus_**. |

### Voorbeelden naar het levenseinde toe van een erkende standaard
Enkele voorbeelden in dit geval, alle betreffende de eerste ontwerpcyclus.

| Branch-naam | Beschrijving |
| ----------- | ------------ |
| `voc-vervangen` | Branch voor publicatiepunt met status Vervangen Standaard voor het eerste vocabularium. |
| `voc-verouderd` | Branch voor publicatiepunt met status Verouderde Standaard voor het eerste vocabularium. |
| `voc-herroepen` | Branch voor publicatiepunt met status Herroepen Standaard voor het eerste vocabularium. |

## 3. Tags
Principe: **_ken één tag toe per publicatiepunt_**.

Maak tags aan met volgende naamgeving:
```
{branch-naam}-{publicatiedatum}
```

### Onderdelen in deze naamgeving
**_{branch-naam}_**

Naam van de betreffende branch.

**_{publicatiedatum}_**

Officiële publicatiedatum, in het formaat YYYYMMDD.

### Voorbeelden
Voor een tag op branch `voc2-ontwerp`, met publicatiedatum 31 december 2019:
```
voc2-ontwerp-20191231
```

Voor een volgende tag op dezelfde branch, met publicatiedatum 6 januari 2020:
```
voc2-ontwerp-20200106
```

## 4. Geavanceerd
**_Deze sectie is illustratief voor editors, maar van belang voor OSLO kernmedewerkers._**

### Noodzakelijke fix aan een publicatiepunt om infrastructuur-technische redenen

#### Branch
Als het publicatiepunt verwijst naar de laatste tag op een branch: werk verder op die branch. 
Anders, maak dan voor dit doel een extra branch aan met volgende uitgebreide branch-naam.
```
{oorspronkelijke-tag-naam}-fix
```

##### Onderdelen in deze naamgeving
**_{oorspronkelijke-tag-naam}_**

Naam van de tag (!) van waaruit werd vertrokken.

##### Voorbeeld
```
voc2-ontwerp-20191231-fix
```

#### Tag
Maak een tag met volgende uitgebreide tag-name.
```
{oorspronkelijke-tag-naam}-{updatevolgnummer}
```

##### Onderdelen in deze naamgeving
**_{oorspronkelijke-tag-naam}_**

Naam van de tag van waaruit werd gebrancht.

**_{updatevolgnummer}_**

Een {updatevolgnummer} is een natuurlijk getal. Gebruik oplopende volgnummers, startend bij 1.

##### Voorbeeld
```
voc2-ontwerp-20191231-1
```
