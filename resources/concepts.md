# Mogelijks relevante klassen, attributen en relaties

_Subtypes staan een niveau lager, attributen met kleine letter (en tussen haakjes), opmerkingen in italics._

## Klassen en attributen

- MensgemaaktObject
  * status (bv. bruikleen)
  * locatie (via FTP, HTTP)
  * identificator (bestandsnaam)
  * hash (md5)
  * titel (dc_title: reeks, deelreeks, archief, deelarchief...)
  * creatieDatum (dc_created)
  * uitgaveDatum (dc_issued)
  * beschrijving (dc_description: lang, kort, programma, ondertitels, transcriptie...)
  * categorie (bv. algemeen)
  * type (bv. sportverslaggeving)
  * coverage (dc_coverage: tijd en ruimte)
  * trefwoord (dc_subject)
  * taal (dc_languages)
- Deelobject
- Events
  - Provenance
    - Tentoonstelling (bezoekers)
  - Herkomst (wanneer, waar)
  - Vondst
- Locatie
  - _Verschillende niveaus van detail._
- Waardering (erfgoedwaarde)
- Staat v.h. object (bestaat het nog, vandalisme, ...)
- Collectie (kerncollectie)
- Museum, Depot, Gebouw, Vestiging
- Organisatie
- Collectiebeherende instelling (type, juridische status)
- Materiaal (licentie, aantal raadplegingen)
  - _Zie FRBR._
- Catalogus
- Studies
- Beoordeling, Criteria
- Externe hergebruikbaarheid
- Formeel kader
- Archief
- Auteur, Kunstenaar
- Nauwkeurigheid
- Toegankelijkheid
- Auteursrecht, Licentie
  - credit (bv. Alle rechten voorbehouden...)
- Vingerafdruk
- Proxy

## Relaties
- link tussen MensgemaaktObject en:
  - Agent: Rol (eigenaar, maker, publiceerder, persagentschap, distributeur, geluidsman, bijdrager)
  - Recht: type (CC0)
- link tussen Recht en Organisatie (bv. Auteursrechthouder, Licentiehouder)
- link tussen erfgoedobjecten
  - _Bv. een roerend goed in een onroerend goed._
- link naar Dossier/Zaak
  - _Bv. vergunning voor activiteiten._
- orde van objecten in collectie naar waarde


