import rdf from "@zazuko/env-node";
import SHACLValidator from "rdf-validate-shacl";
import * as assert from "node:assert";
import {QueryEngine} from "@comunica/query-sparql";
import dataFactory from '@rdfjs/data-model';
import datasetFactory from '@rdfjs/dataset';

const myEngine = new QueryEngine();

/* eslint-disable no-undef */
// We disable the no-undef rule because it gets triggered by describe and it.

describe("Original SHACL", function() {

  describe("Museaal Object schilderij Théo Van Rysselberge", function () {
    it("Implementation model", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/museaal-object-schilderij-theo-van-rysselberge/implementation-model.jsonld"
      });

      console.log(result.report);
      assert.equal(result.conforms, true);
    });
  });

  describe("Archief Tumult", function () {
    it("Implementation model", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/archief-tumult/implementation-model.jsonld"
      });

      console.log(result.report);
      assert.equal(result.conforms, true);
    });

    it("Rico", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/archief-tumult/rico.jsonld"
      });

      assert.equal(result.conforms, true);
    });

    it("Both", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/archief-tumult/both.jsonld"
      });

      assert.equal(result.conforms, true);
    });
  });

  describe("Publicatie Reynaert de Vos", function () {
    it("Implementation model", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/implementation-model.jsonld"
      });

      console.log(result.report);
      assert.equal(result.conforms, true);
    });

    it("LRMoo", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/lrmoo.jsonld"
      });

      assert.equal(result.conforms, false);
    });

    it("Both", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/both.jsonld"
      });

      assert.equal(result.conforms, true);
    });
  });
});

describe("Updated SHACL", function() {

  describe("Museaal Object schilderij Théo Van Rysselberge", function () {
    it("Implementation model", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/museaal-object-schilderij-theo-van-rysselberge/implementation-model.jsonld"
      });

      console.log(result.report);
      assert.equal(result.conforms, true);
    });
  });

  describe("Archief Tumult", function () {
    it("Implementation model", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/archief-tumult/implementation-model.jsonld"
      });

      assert.equal(result.conforms, true);
    });

    it("Rico", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/archief-tumult/rico.jsonld"
      });

      assert.equal(result.conforms, false);
    });

    it("Both", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/archief-tumult/both.jsonld"
      });

      assert.equal(result.conforms, true);
    });
  });

  describe("Publicatie Reynaert de Vos", function () {
    it("Implementation model", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/implementation-model.jsonld"
      });

      assert.equal(result.conforms, true);
    });

    it("LRMoo", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/lrmoo.jsonld"
      });

      assert.equal(result.conforms, false);
    });

    it("Both", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/both.jsonld"
      });

      assert.equal(result.conforms, true);
    });
  });
});

/**
 *
 * @param {object} options - The parameters of this function.
 * @param {string} options.shapePath
 * @param {string} options.dataPath
 */
async function validate({shapePath, dataPath}) {
  const shapes = await rdf.dataset().import(rdf.fromFile(shapePath));
  const data = await rdf.dataset().import(rdf.fromFile(dataPath));
  const inverseProperties = [];
  const inverse = shapes.match(null, dataFactory.namedNode("http://www.w3.org/2002/07/owl#inverseOf"), null);
  inverse.forEach((inverse) => {
    inverseProperties.push([inverse.subject, inverse.object]);
  });

  const validator = new SHACLValidator(shapes, {factory: rdf, importGraph: async (url) => {
      const bindingsStream = await myEngine.queryBindings(`
        SELECT ?s ?p ?o WHERE {
          ?s ?p ?o
        }`, {
        sources: [url],
      });
      const bindings = await bindingsStream.toArray();
      const quads = [];

      for (const binding of bindings) {
        quads.push(dataFactory.quad(binding.get("s"), binding.get("p"), binding.get("o")));
      }

      return datasetFactory.dataset(quads);
    }});

  addInverseProperties({inverseProperties, dataset: data});

  const report = await validator.validate(data);
  report.results = report.results.filter(r => r.message.length !== 0);

  if (report.results.length !== 0) {
    console.log(report.results.length);

    for (const r of report.results) {
      console.log('####');
      console.log(r.message.map(a => a.value));
      console.log('Path: ' + r.path.value)
      console.log('Focus node: ' + r.focusNode.value)
      // console.log(r.severity)
      // console.log(r.sourceConstraintComponent)
      // console.log(r.sourceShape)
      console.log();
    }
  }

  return {
    report: await report.dataset.serialize({format: "text/turtle"}),
    results: report.results,
    conforms: report.results.length === 0
  };
}

function addInverseProperties({inverseProperties, dataset}) {
  const newQuads = [];

  inverseProperties.forEach(pair => {
    let result = dataset.match(null, pair[0], null);
    result.forEach(r => {
      newQuads.push(dataFactory.quad(r.object, pair[1], r.subject));
    });

    result = dataset.match(null, pair[1], null);
    result.forEach(r => {
      newQuads.push(dataFactory.quad(r.object, pair[0], r.subject));
    });
  });

  dataset.addAll(newQuads);
}
