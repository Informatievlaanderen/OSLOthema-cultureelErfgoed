# Tags exporteren uit, aanpassen en opnieuw importeren in .eap bestanden

## Bron

De .xlsm bestanden in deze folder vertrekken van een kopie van **eaexcelimporter_v4.2.xlsm**, te vinden op https://bellekens.com/2018/10/12/simple-vba-excel-to-ea-importer-v4-2/.
De bestandsnaam is een hint naar het model waaruit ze gehaald zijn.

## Opmerking
Voor het eerste gebruik is het niet meer nodig om de referentie naar Microsoft XML v6.0 te wijzigen, in tegenstelling met de vorige versie (zoals aangereikt door Geert Thijs).
De functionaliteit is echter identiek.

## Tags van EA naar Excel
Open het in te lezen .eap bestand met Enterprise Architect.

Note 1: niet de centrale EA repository, maar een externe bestand.

Note 2: als het in te lezen .eap bestand meer packages bevat dan de te beschouwen input, vertrek dan van een kopie, die enkel het/de te beschouwen package(s) bevat. Er is namelijk geen andere mogelijkheid om packages te selecteren.

Open een nieuwe (of oude...) kopie van het .xlsm bestand.

Indien een **SECURITY WARNING Macros have been disabled** verschijnt, klik op **Enable Content**.

Open het tabblad **Tagged Values**.

Wis rijen 2 en volgende, indien niet leeg, zodat de export uit EA niet gemengd wordt met vorige experimenten.

Menu: **Add-ins**; klik **Export Tagged Values** (jawel, export, bekeken vanuit het standpunt van de .eap).

De resultaten komen in het tabblad **Tagged Values** terecht. That's it!

Sla het .xlsm bestand op.

Sluit het .eap bestand.

## Bewerking
Opgepast, zoals de documentatie (te lezen op de download URL) vermeldt:	**het is niet mogelijk om nieuwe tags aan te maken; je kan alleen bestaande tags wijzigen**.

Open het .xlsm bestand.

Open het tabblad **Tagged Values**

Doe een of meerdere van volgende mogelijke bewerkingen:
- Wis rijen van tags die niet hoeven gewijzigd te worden
- Pas de kolommen **Value** en/of **Notes** aan voor tags die moeten gewijzigd worden
- Pas de kolom **Property** aan voor tags wiens naam moet gewijzigd worden (dit lukt!)

Tip: het is handig om de inhoud eerst te sorten van A-Z op de kolom **Owner**.

Sla het .xlsm bestand op.

## Tags van Excel naar EA

Open het aan te passen .eap bestand met Enterprise Architect (nu zeker niet de gereduceerde kopie!).

Open het .xlsm bestand.

Open het tabblad **Tagged Values**.

Menu: Add-ins; klik **Import Tagged Values**; klik **Start** (jawel, import, bekeken vanuit het standpunt van de .eap).

Sluit het .xlsm bestand.

Sluit het gewijzigde .eap bestand.


