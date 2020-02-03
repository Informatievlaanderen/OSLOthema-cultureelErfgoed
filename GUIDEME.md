# Template richtlijnen

Dit bestand bevat instructies voor de **_editor(s)_** van dit thema.

## Bestandsstructuur
Deze repository bevat initieel een structuur van directories en bestanden op de `master` branch.
Deze zijn overgenomen uit een template repository.

Pas bestandsnamen en bestandsinhoud aan aan de lokale gegevens. Als hint is elk variabel gegeven in de initiële bestanden aangeduid met het woord `mijn`.
Doe dit bijvoorbeeld meteen voor de titel van het **README.md** bestand in de project root op de `master` branch.

Vul aan met volgende bestanden:
* Eén of meerdere OSLO-*.EAP bestanden in deze directory.
* Bestanden zoals gedocumenteerd in plaatselijke README.md bestanden in elke andere directory.

Vul gaandeweg de voorbeeldinhoud aan in het **README.md** bestand in de project root op de `master` branch.

## Naamgeving syntax
In naamgevingen hieronder gebruikt staat:
* `{}` voor een variabele waarde die verder wordt toegelicht;
* `[]` voor een optionele term, die enkel nodig is onder de voorwaarden zoals verder wordt toegelicht.

## Branches
Principe: **_werk op één unieke branch per document en per status_**.

Plaats alle ontwikkelingen voor een document startend van de vorige status en eindigend in de nieuwe status op een unieke branch, aangemaakt met volgende naamgeving:
```
{documenttype}[{documentvolgnummer}]{status}[-cyclus{cyclusvolgnummer}]
```

### Onderdelen
**_{documenttype}_**

Dit zijn de mogelijke documenttypes en de waarden {documenttype} ervoor gebruikt in de naamgeving:

| documenttype (voluit) | {documenttype} |
| --------------------- | -------------- |
| vocabularium | `voc` |
| applicatieprofiel | `ap` |

**_{status}_**

De mogelijke statussen zijn bepaald in [deze codelijst](https://data.vlaanderen.be/doc/conceptscheme/StandaardStatus).
Dit zijn de waarden {status} ervoor gebruikt in de naamgeving:

| status (voluit) | {status} |
| --------------- | -------- |
| Ontwerp Standaard | `ontwerp` |
| Kandidaat Standaard | `kandidaat` |
| Erkende Standaard | `erkend` |
| Vervangen Standaard | `vervangen` |
| Verouderde Standaard | `verouderd` |
| Herroepen Standaard | `herroepen` |

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
| `voc-ontwerp` | Branch voor publicatiepunt met status **_Ontwerp Standaard_** voor het **_vocabularium_**. |
| `voc-kandidaat` | Branch voor publicatiepunt met status **_Kandidaat Standaard_** voor het **_vocabularium_**. |
| `voc-erkend` | Branch voor publicatiepunt met status **_Erkende Standaard_** voor het **_vocabularium_**. |
| `ap-ontwerp` | Branch voor publicatiepunt met status **_Ontwerp Standaard_** voor het **_applicatieprofiel_**. |
| `ap-kandidaat` | Branch voor publicatiepunt met status **_Kandidaat Standaard_** voor het **_applicatieprofiel_**. |
| `ap-erkend` | Branch voor publicatiepunt met status **_Erkende Standaard_** voor het **_applicatieprofiel_**. |

### Voorbeelden met extra volgnummer
Enkele voorbeelden in geval van meerdere vocabularia of meerdere ontwerpcycli.

| Branch-naam | Beschrijving |
| ----------- | ------------ |
| `voc2-ontwerp` | Branch voor publicatiepunt met status Ontwerp Standaard voor het **_tweede_** vocabularium. |
| `voc-ontwerp-cyclus2` | Branch voor publicatiepunt met status Ontwerp Standaard voor het eerste vocabularium in de **_tweede_** ontwerpcyclus. |

### Voorbeelden naar het levenseinde toe van een erkende standaard
Enkele voorbeelden in dit geval, alle betreffende de eerste ontwerpcyclus.

| Branch-naam | Beschrijving |
| ----------- | ------------ |
| `voc-vervangen` | Branch voor publicatiepunt met status **_Vervangen Standaard_** voor het eerste vocabularium. |
| `voc-verouderd` | Branch voor publicatiepunt met status **_Verouderde Standaard_** voor het eerste vocabularium. |
| `voc-herroepen` | Branch voor publicatiepunt met status **_Herroepen Standaard_** voor het eerste vocabularium. |

## Tags
Principe: **_ken één tag toe per publicatiepunt_**.

Maak tags aan met volgende naamgeving:
```
{branch-naam}-{publicatiedatum}
```

### Onderdelen
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

## Geavanceerd
**_Deze sectie is illustratief voor editors, maar van belang voor OSLO kernmedewerkers._**

### Noodzakelijke fix aan een publicatiepunt om infrastructuur-technische redenen

#### Branch
Als het publicatiepunt verwijst naar de laatste tag op een branch: werk verder op die branch. 
Anders, maak dan voor dit doel een extra branch aan met volgende uitgebreide branch-naam.
```
{oorspronkelijke-tag-naam}-fix
```

##### Onderdelen
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

##### Onderdelen
**_{oorspronkelijke-tag-naam}_**

Naam van de tag van waaruit werd gebrancht.

**_{updatevolgnummer}_**

Een {updatevolgnummer} is een natuurlijk getal. Gebruik oplopende volgnummers, startend bij 1.

##### Voorbeeld
```
voc2-ontwerp-20191231-1
```
