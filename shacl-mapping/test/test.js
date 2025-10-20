import * as assert from "node:assert";
import {validateLocal, validateRemote} from "./utils.js";

/* eslint-disable no-undef */
// We disable the no-undef rule because it gets triggered by describe and it.

const externalUrls = ["http://www.cidoc-crm.org/cidoc-crm/", "http://www.w3.org/2006/time", "https://qudt.org/schema/qudt/"];
const validate = validateLocal; // validateLocal for local validation or validateRemote for remote validation

describe("Original SHACL", function() {
  this.timeout(30000);

  describe("Museaal Object schilderij Théo Van Rysselberge (OS-MOSTVR)", function () {
    it("Implementation model (OS-MOSTV-IM)", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/museaal-object-schilderij-theo-van-rysselberge/implementation-model.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });
  });

  describe("Archief Tumult (OS-AT)", function () {
    it("Implementation model (OS-AT-IM)", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/archief-tumult/implementation-model.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });

    it("Rico (OS-AT-R)", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/archief-tumult/rico.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, false);
    });

    it("Both (OS-AT-B)", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/archief-tumult/both.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });
  });

  describe("Publicatie Reynaert de Vos (OS-PRDV)", function () {
    it("Implementation model (OS-PRDV-IM)", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/implementation-model.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });

    it("LRMoo (OS-PRDV-L)", async () => {
      const result = await validate({
        shapePath: "./shacl/original.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/lrmoo.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, false);
    });

    it("Both (OS-PRDV-B)", async () => {
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

  describe("Museaal Object schilderij Théo Van Rysselberge (US-MOSTVR)", function () {
    it("Implementation model (US-MOSTVR-IM)", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/museaal-object-schilderij-theo-van-rysselberge/implementation-model.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });
  });

  describe("Archief Tumult (US-AT)", function () {
    it("Implementation model (US-AT-IM)", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/archief-tumult/implementation-model.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });

    it("Rico (US-AT-R)", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/archief-tumult/rico.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });

    it("Both (US-AT-B)", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/archief-tumult/both.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });
  });

  describe("Publicatie Reynaert de Vos (US-PRDV)", function () {
    it("Implementation model (US-PRDV-IM)", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/implementation-model.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });

    it.skip("LRMoo (US-PRDV-L)", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/lrmoo.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });

    it("Both (US-PRDV-B)", async () => {
      const result = await validate({
        shapePath: "./shacl/updated.ttl",
        dataPath: "test/publicatie-reynaert-de-vos/both.jsonld",
        externalUrls
      });

      assert.equal(result.conforms, true);
    });
  });
});
