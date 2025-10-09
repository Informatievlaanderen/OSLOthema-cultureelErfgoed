import * as assert from "node:assert";
import {validate} from "./utils.js";

/* eslint-disable no-undef */
// We disable the no-undef rule because it gets triggered by describe and it.

const externalUrls = ["http://www.cidoc-crm.org/cidoc-crm/", "http://www.w3.org/2006/time", "https://qudt.org/schema/qudt/"];

describe("Original SHACL", function() {
  this.timeout(30000);

  describe("Museaal Object schilderij Théo Van Rysselberge", function () {
    it("Implementation model", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/museaal-object-schilderij-theo-van-rysselberge/implementation-model.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });
  });

  describe("Archief Tumult", function () {
    it("Implementation model", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/archief-tumult/implementation-model.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });

    it("Rico", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/archief-tumult/rico.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, false);
    });

    it("Both", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/archief-tumult/both.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });
  });

  describe("Publicatie Reynaert de Vos", function () {
    it("Implementation model", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/implementation-model.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });

    it("LRMoo", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/lrmoo.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, false);
    });

    it("Both", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/both.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });
  });
});

describe("Updated SHACL", function() {
  this.timeout(30000);

  describe("Museaal Object schilderij Théo Van Rysselberge", function () {
    it("Implementation model", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/museaal-object-schilderij-theo-van-rysselberge/implementation-model.jsonld"
      });

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
        dataPath: "test/archief-tumult/rico.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });

    it("Both", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/archief-tumult/both.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });
  });

  describe("Publicatie Reynaert de Vos", function () {
    it("Implementation model", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/implementation-model.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });

    it.skip("LRMoo", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/lrmoo.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });

    it("Both", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/both.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });
  });
});
