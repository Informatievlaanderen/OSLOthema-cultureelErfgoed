# SHACL mapping

## Usage

1. Install dependencies

   ```shell
   npm i
   ```

2. Validate the data graphs in `test` via

   ```shell
   npm test
   ```

## Repo structure

- The file `shacl-original.ttl` contains the content of
  <https://data.vlaanderen.be/doc/implementatiemodel/cultureel-erfgoed-basisregistratie/ontwerpstandaard/2025-01-20/shacl/cultureel-erfgoed-basisregistratie-SHACL.ttl>.
- The file `cultureel-erfgoed-context.jsonld` contains the content of
  <https://data.vlaanderen.be/doc/implementatiemodel/cultureel-erfgoed-basisregistratie/ontwerpstandaard/2025-01-20/context/cultureel-erfgoed-basisregistratie.jsonld>.
- The folder `test` contains data graphs in JSON-LD for testing, based on the data examples in `../datavoorbeelden CE iteratie`.

## Linters

npm scripts:

- `lint:js`
- `lint:js:fix`
- `lint:markdown`
- `lint:markdown:fix`
