const CSL = require('citeproc');
const fs = require('fs');

/**
 * @url https://github.com/Juris-M/citeproc-js-docs/blob/master/deployments.rst
 */
const citations = {};

const sys = {
  retrieveLocale: function (lang){
//    var xhr = new XMLHttpRequest();
//    xhr.open('GET', 'https://raw.githubusercontent.com/Juris-M/citeproc-js-docs/master/locales-' + lang + '.xml', false);
//    xhr.send(null);
//    return xhr.responseText;
      return fs.readFileSync('./locales-ja-JP.xml', 'utf8');
  },
  retrieveItem: function(id){
    return citations[id];
  }
};

const styleAsText = fs.readFileSync('./sist02.csl').toString();

const citeproc = new CSL.Engine(sys, styleAsText);
console.log(citeproc);
