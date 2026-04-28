# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Vocabulary: Relationships: heeftComponent, afgeleidVan, isVertalingVan, isGeassocieerdMet, bestaatUit, gebaseerdOp
- Vocabulary: PascalCase and CamelCase
- Vocabulary: Replace abbreviations
- Vocabulary: Reassigned ranges of certain properties
- Vocabulary: http://schema.org --> https://schema.org
- Vocabulary: Add missing dot at end of sentences
- Vocabulary: Labels must only contain alphabetical characters: 'Informatie-object', 'Publicatie-expressie', 'Crm-entiteit', 'Curatie-activiteit', 'toegekendDoor(string)'
- Event AP: Reassigned ranges of certain properties
- Event AP: PascalCase and CamelCase
- Event AP: Replace abbreviations
- Event AP: Add missing dot at end of sentences
- Event AP: Overview diagram
- Object AP: Reassigned ranges of certain properties
- Object AP: Relationship ComplexWerk -- heeftComponent --> Werk
- Object AP: Relationship ConceptueelDing -- heeftComponent --> ConceptueelDing
- Object AP: Relationship Werk -- afgeleidVan --> Werk
- Object AP: Relationship InformatieObject -- omvat --> InformatieObject
- Object AP: Relationship TaalObject -- IsVertalingVan --> TaalObject
- Object AP: Relationship OntwerpOfProcedure -- IsGeassocieerdMet --> OntwerpOfProcedure
- Object AP: Relationship MaterieelDing -- bestaatUit --> MaterieelDing
- Object AP: Relationship Recht -- gebaseerdOp --> Rechtsgrond
- Object AP: Overview diagram
- Object AP: PascalCase and CamelCase
- Object AP: Replace abbreviations
- Object AP: Add missing dot at end of sentences

### Removed

- Vocabulary: empty tags `ap-usageNote-nl`
