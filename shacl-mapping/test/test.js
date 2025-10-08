import rdf from "@zazuko/env-node";
import SHACLValidator from "rdf-validate-shacl";
import * as assert from "node:assert";

/* eslint-disable no-undef */
// We disable the no-undef rule because it gets triggered by describe and it.

describe("Museaal Object schilderij Théo Van Rysselberge", function () {
  it("Implementation model", async () => {
    const result = await validate({
      shapePath: "./shacl-original.ttl",
      dataPath: "test/museaal-object-schilderij-theo-van-rysselberge/implementation-model.jsonld"
    });

    console.log(result.report);
    assert.equal(result.conforms, true);
  });
});

describe("Archief Tumult", function () {
  it("Implementation model", async () => {
    const result = await validate({
      shapePath: "./shacl-original.ttl",
      dataPath: "test/archief-tumult/implementation-model.jsonld"
    });

    console.log(result.report);
    assert.equal(result.conforms, true);
  });
});

describe("Publicatie Reynaert de Vos", function () {
  it("Implementation model", async () => {
    const result = await validate({
      shapePath: "./shacl-original.ttl",
      dataPath: "test/publicatie-reynaert-de-vos/implementation-model.jsonld"
    });

    console.log(result.report);
    assert.equal(result.conforms, true);
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

  const validator = new SHACLValidator(shapes, {factory: rdf});
  const report = await validator.validate(data);

  return {
    conforms: report.conforms,
    report: await report.dataset.serialize({format: "text/n3"})
  };

  // for (const result of report.results) {
  //   // See https://www.w3.org/TR/shacl/#results-validation-result for details
  //   // about each property
  //   console.log(result.message)
  //   console.log(result.path)
  //   console.log(result.focusNode)
  //   console.log(result.severity)
  //   console.log(result.sourceConstraintComponent)
  //   console.log(result.sourceShape)
  // }

  // Validation report as RDF dataset
  // console.log(await report.dataset.serialize({ format: 'text/n3' }))
}
