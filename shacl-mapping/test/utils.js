import rdf from "@zazuko/env-node";
import dataFactory from "@rdfjs/data-model";
import SHACLValidator from "rdf-validate-shacl";
import datasetFactory from "@rdfjs/dataset";
import {QueryEngine} from "@comunica/query-sparql";

const myEngine = new QueryEngine();

/**
 *
 * @param {object} options - The parameters of this function.
 * @param {string} options.shapePath
 * @param {string} options.dataPath
 */
export async function validate({shapePath, dataPath, externalUrls}) {
  const externalInverseProperties = await getInversePropertiesFromUrls(externalUrls);
  const externalSubClasses = await getSubClassesFromUrls(externalUrls);

  const shapes = await rdf.dataset().import(rdf.fromFile(shapePath));
  const data = await rdf.dataset().import(rdf.fromFile(dataPath));
  let inverseProperties = [];
  let subClasses = getSubClassesFromDataset(shapes);
  const equivalentClasses = getEquivalentClassesFromDataset(shapes);
  const inverse = shapes.match(null, dataFactory.namedNode("http://www.w3.org/2002/07/owl#inverseOf"), null);
  inverse.forEach((inverse) => {
    inverseProperties.push([inverse.subject, inverse.object]);
  });

  // TODO: get subClasses from shapes graph

  inverseProperties = inverseProperties.concat(externalInverseProperties);
  subClasses = subClasses.concat(externalSubClasses);

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

  addEquivalentClasses({equivalentClasses, dataset: data});
  addInverseProperties({inverseProperties, dataset: data});
  addSuperClasses({subClasses, dataset: data});

  const report = await validator.validate(data);
  report.results = report.results.filter(r => r.message.length !== 0);

  if (report.results.length !== 0) {
    console.log('Total errors: ' + report.results.length);

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

function addSuperClasses({subClasses, dataset}) {
  const newQuads = [];

  subClasses.forEach(pair => {
    let result = dataset.match(null, dataFactory.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), pair.sub);
    result.forEach(r => {
      newQuads.push(dataFactory.quad(r.subject, dataFactory.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), pair.super));
    });
  });

  dataset.addAll(newQuads);
}

async function getInversePropertiesFromUrl(url) {
  const result = [];

  const bindingsStream = await myEngine.queryBindings(`
        SELECT ?s ?o WHERE {
          ?s <http://www.w3.org/2002/07/owl#inverseOf> ?o
        }`, {
    sources: [url],
  });
  const bindings = await bindingsStream.toArray();

  for (const binding of bindings) {
    result.push([binding.get("s"), binding.get("o")]);
  }

  return result;
}

async function getSubClassesFromUrl(url) {
  const result = [];

  const bindingsStream = await myEngine.queryBindings(`
        SELECT ?s ?o WHERE {
          ?s <http://www.w3.org/2000/01/rdf-schema#subClassOf> ?o
        }`, {
    sources: [url],
  });
  const bindings = await bindingsStream.toArray();

  for (const binding of bindings) {
    result.push({sub: binding.get("s"), super: binding.get("o")});
  }

  return result;
}


export async function getSubClassesFromUrls(urls) {
  let result = [];

  for (const url of urls) {
    result = result.concat(await getSubClassesFromUrl(url));
  }

  return result;
}

export async function getInversePropertiesFromUrls(urls) {
  let result = [];

  for (const url of urls) {
    result = result.concat(await getInversePropertiesFromUrl(url));
  }

  return result;
}

function getEquivalentClassesFromDataset(dataset) {
  const equivalent = dataset.match(null, dataFactory.namedNode("http://www.w3.org/2002/07/owl#equivalentClass"), null);

  return equivalent.map(e => [e.subject, e.object]);
}

function getSubClassesFromDataset(dataset) {
  const equivalent = dataset.match(null, dataFactory.namedNode("http://www.w3.org/2000/01/rdf-schema#subClassOf"), null);
  const result = [];

  equivalent.forEach(e => {
    result.push({sub: e.subject, super: e.object});
  });

  return result;
}

function addEquivalentClasses({equivalentClasses, dataset}) {
  const newQuads = [];

  equivalentClasses.forEach(pair => {
    let result = dataset.match(null, dataFactory.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), pair[0]);
    result.forEach(r => {
      newQuads.push(dataFactory.quad(r.subject, dataFactory.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), pair[1]));
    });

    result = dataset.match(null, dataFactory.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), pair[1]);
    result.forEach(r => {
      newQuads.push(dataFactory.quad(r.subject, dataFactory.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), pair[0]));
    });
  });

  dataset.addAll(newQuads);
}
