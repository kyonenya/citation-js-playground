const CSL = require("citeproc");
const fs = require("fs");

/**
 * @url https://github.com/Juris-M/citeproc-js-docs/blob/master/deployments.rst
 * @url https://github.com/fcheslack/citeproc-js-node
 */
//const citations = {};
const items = {
  "14058/RN9M5BF3": {
    accessed: { month: "9", year: "2010", day: "10" },
    id: "14058/RN9M5BF3",
    author: [
      { given: "Adel", family: "Hendaoui" },
      { given: "Moez", family: "Limayem" },
      { given: "Craig W.", family: "Thompson" },
    ],
    title: "3D Social Virtual Worlds: <i>Research Issues and Challenges</i>",
    type: "article-journal",
    versionNumber: 6816,
  },
  "14058/NSBERGDK": {
    accessed: { month: "9", year: "2010", day: "10" },
    issued: { month: "6", year: "2009" },
    "event-place": "Istanbul",
    type: "paper-conference",
    DOI: "10.1109/DEST.2009.5276761",
    "page-first": "151",
    id: "14058/NSBERGDK",
    "title-short":
      "3D virtual worlds as collaborative communities enriching human endeavours",
    "publisher-place": "Istanbul",
    author: [
      { given: "C.", family: "Dreher" },
      { given: "T.", family: "Reiners" },
      { given: "N.", family: "Dreher" },
      { given: "H.", family: "Dreher" },
    ],
    title:
      "3D virtual worlds as collaborative communities enriching human endeavours: Innovative applications in e-Learning",
    shortTitle:
      "3D virtual worlds as collaborative communities enriching human endeavours",
    page: "151-156",
    event:
      "2009 3rd IEEE International Conference on Digital Ecosystems and Technologies (DEST)",
    URL: "http://ieeexplore.ieee.org/lpdocs/epic03/wrapper.htm?arnumber=5276761",
    versionNumber: 1,
  },
};

const sys = {
  retrieveLocale: function (lang) {
    return fs.readFileSync("./locales-ja-JP.xml", "utf8");
  },
  retrieveItem: function (id) {
    return items[id];
  },
};

const styleAsText = fs.readFileSync("./sist02.csl").toString();

const citeproc = new CSL.Engine(sys, styleAsText);
//console.log(citeproc);

sys.items = items;

const clusters = [
  {
    citationItems: ["14058/RN9M5BF3"],
    properties: {
      note: 0,
    },
  },
  {
    citationItems: ["14058/NSBERGDK"],
    properties: {
      note: 0,
    },
  },
];

citeproc.updateItems(Object.keys(items));
const bib = citeproc.makeBibliography();

console.log(bib);
