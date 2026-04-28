# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Vocabulary: Relationships: heeftComponent, afgeleidVan, isVertalingVan, isGeassocieerdMet, bestaatUit, gebaseerdOp
- Vocabulary: PascalCase and CamelCase
- Vocabulary: Replace abbreviations
- Vocabulary: reassigned ranges of certain properties
- Event AP: reassigned ranges of certain properties
- Event AP: PascalCase and CamelCase
- Event AP: Replace abbreviations
- Event AP: add missing dot at end of sentences
- Event AP: overview diagram
- Object AP: reassigned ranges of certain properties
- Object AP: Relationship ComplexWerk -- heeftComponent --> Werk
- Object AP: Relationship ConceptueelDing -- heeftComponent --> ConceptueelDing
- Object AP: Relationship Werk -- afgeleidVan --> Werk
- Object AP: Relationship InformatieObject -- omvat --> InformatieObject
- Object AP: Relationship TaalObject -- IsVertalingVan --> TaalObject
- Object AP: Relationship OntwerpOfProcedure -- IsGeassocieerdMet --> OntwerpOfProcedure
- Object AP: Relationship MaterieelDing -- bestaatUit --> MaterieelDing
- Object AP: Relationship Recht -- gebaseerdOp --> Rechtsgrond
- Object AP: overview diagram
- Object AP: PascalCase and CamelCase
- Object AP: Replace abbreviations
- Object AP: add missing dot at end of sentences

### Removed

- Vocabulary: Tag `ap-usageNote-nl` of class `Verhuis`
