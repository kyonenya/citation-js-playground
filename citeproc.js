const CSL = require('citeproc');
const fs = require('fs');
const items = require('./items.json');

/**
 * @url https://github.com/Juris-M/citeproc-js-docs/blob/master/deployments.rst
 * @url https://github.com/fcheslack/citeproc-js-node
 */

const sys = {
  retrieveLocale: function (lang) {
    return fs.readFileSync('./locales-ja-JP.xml', 'utf8');
  },
  retrieveItem: function (id) {
    return items[id];
  },
};

const styleAsText = fs.readFileSync('./sist02.csl').toString();

const citeproc = new CSL.Engine(sys, styleAsText, 'ja-JP');
//console.log(citeproc);

citeproc.setOutputFormat('text');

citeproc.updateItems(Object.keys(items));
const bib = citeproc.makeBibliography();

//console.log(bib[1][0]);

console.log(citeproc.registry.getSortedRegistryItems()[0].ref);
