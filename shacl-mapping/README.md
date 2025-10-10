# SHACL mapping

This code tests if our SHACL shapes correctly assert the given data graphs.
Important to know is that

- The file `shacl/original.ttl` contains the content of
  <https://data.vlaanderen.be/doc/implementatiemodel/cultureel-erfgoed-basisregistratie/ontwerpstandaard/2025-01-20/shacl/cultureel-erfgoed-basisregistratie-SHACL.ttl>,
  together with [this change](#original-shacl).
- The file `shacl/updated.ttl` is based on the original SHACL file above.
  We might have updated the SHACL shapes and added extra information where needed.
- The file `cultureel-erfgoed-context.jsonld` contains the content of
  <https://data.vlaanderen.be/doc/implementatiemodel/cultureel-erfgoed-basisregistratie/ontwerpstandaard/2025-01-20/context/cultureel-erfgoed-basisregistratie.jsonld>.
  The code doesn't use this file.
  It's only in the repo for easy reference when we are debugging.
- The file `crm.ttl` contains the RDF representation of CIDOC-CRM in Turtle format.
  The code doesn't use this file.
  It's only in the repo for easy reference when we are debugging.
- The folder `test` contains data graphs in JSON-LD for testing,
  based on the data examples in `../datavoorbeelden CE iteratie`.
  For each data example, there is a separate folder.
  - The file `implementation-model.jsonld` contains the data graph that follows the implementation model.
    This data graph should validate when we use the original and updated SHACL files.
  - The file `[external-model].jsonld` contains the data graph that follows an external model.
    This data graph should not validate when we use the original SHACL file,
    but it should when we use the updated SHACL file.
  - The file `both.jsonld` contains the data graph that follows both the implementation model and external model.
    This data graph should validate when we use the original and updated SHACL files.
- The code uses subclass, equivalent-class, and inverse-of information from http://www.cidoc-crm.org/cidoc-crm/,
  http://www.w3.org/2006/time, https://qudt.org/schema/qudt/, and the SHACL files to add more data to the data graphs.
  We specify these urls on line 7 of the file `./test/test.js`.

## Requirements

Node.js v22 or newer

## Usage

1. Install dependencies

   ```shell
   npm i
   ```

2. Validate the data graphs in `test` using the original and updated SHACL files via

   ```shell
   npm test
   ```

3. Validate the data graphs in `test` using only the original SHACL file via

   ```shell
   npm run test:original
   ```

4. Validate the data graphs in `test` using only the updated SHACL file via

   ```shell
   npm run test:updated
   ```

5. Only execute the test that,
   for example,
   validates the data graph of "Museaal Object schilderij Théo Van Rysselberge" using the original SHACL file, via

   ```shell
   npx mocha test/test.js -g OS-MOSTV-IM
   ```

   `OS-MOSTV-IM` uniquely identifies that test case.
   See line 13 of the file `./test/test.js`.

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

## Linters

npm scripts:

- `lint:js`
- `lint:js:fix`
- `lint:markdown`
- `lint:markdown:fix`
