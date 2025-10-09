# SHACL mapping

This code tests if our SHACL shapes correctly assert the given data graphs.

## Usage

1. Install dependencies

   ```shell
   npm i
   ```

2. Validate the data graphs in `test` via

   ```shell
   npm test
   ```

## Original SHACL

You find the original SHACL in `shacl/original.ttl`.
The only change that we made is adding the following:

```turtle
_:MyShape a shacl:NodeShape;
  shacl:targetNode crm:E1_CRM_Entity ;
  shacl:property [
    a shacl:PropertyShape;
    shacl:path [ shacl:inversePath rdf:type ] ;
    shacl:minCount 1;
    shacl:name "Checks E1_CRM_Entity existence";
    shacl:message "At least one E1_CRM_Entity instance should exist"
] .
```

This makes sure that at least one Entity is present in the data graph.
If we don't add this,
the SHACL validator will consider the data graph as correct when the data graph doesn't contain types.

## Repo structure

- The file `shacl/original.ttl` contains the content of
  <https://data.vlaanderen.be/doc/implementatiemodel/cultureel-erfgoed-basisregistratie/ontwerpstandaard/2025-01-20/shacl/cultureel-erfgoed-basisregistratie-SHACL.ttl>.
- The file `shacl/updated.ttl` contains the updated SHACL shapes and extra information.
- The file `cultureel-erfgoed-context.jsonld` contains the content of
  <https://data.vlaanderen.be/doc/implementatiemodel/cultureel-erfgoed-basisregistratie/ontwerpstandaard/2025-01-20/context/cultureel-erfgoed-basisregistratie.jsonld>.
- The file `crm.ttl` contains the RDF representation of CIDOC-CRM in Turtle format.
- The folder `test` contains data graphs in JSON-LD for testing, based on the data examples in `../datavoorbeelden CE iteratie`.

## Linters

npm scripts:

- `lint:js`
- `lint:js:fix`
- `lint:markdown`
- `lint:markdown:fix`
