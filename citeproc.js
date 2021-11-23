const CSL = require("citeproc");
const fs = require("fs");

/**
 * @url https://github.com/Juris-M/citeproc-js-docs/blob/master/deployments.rst
 * @url https://github.com/fcheslack/citeproc-js-node
 */
const items = {
  "14058/RN9M5BF3": {
    issued: { month: "9", year: "2010", day: "10" },
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
  "Q23571040" : {
    id: "Q23571040",
    type: "article-journal",
    title: "ウィトゲンシュタインは誰のための哲学者か",
    author: [
      {
        given: "アンスコム",
        family: "G・E・M"
      }
    ],
    translator: [
      {
        given: "廉",
        family: "吉田"
      },
      {
        given: "隆史",
        family: "京念屋",
      },
    ],
    issued: { year: 2021, month: 1 },
    "container-title": "現代思想",
    volume: "50",
    issue: "2",
    page: "89-97",
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

const citeproc = new CSL.Engine(sys, styleAsText, 'ja-JP');
//console.log(citeproc);

citeproc.setOutputFormat('text');

sys.items = items;


citeproc.updateItems(Object.keys(items));
const bib = citeproc.makeBibliography();

console.log(bib[1]);

//console.log(citeproc.registry.getSortedRegistryItems()[1].ref);
