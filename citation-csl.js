const fs = require('fs');
const Cite = require('citation-js');

const templateName = 'custom'
const template = fs.readFileSync('./sist02.csl').toString();

const config = Cite.CSL.register.addTemplate(templateName, template);
// config.templates.add(templateName, template) // old API

const example = new Cite(`
TY  - JOUR
T1  - 考えるとき話しているのか：フッサール「独白」概念をめぐって
T2  - 
A1  - 京念屋隆史
JO  - 現象学年報
IS  - 37
SP  - 89
EP  - 97
SN  - 0289-825X
Y1  - 2021
PB  - 日本現象学会
UR  - https://kyonenya.github.io/
ER  -
`);
const result = example.format('bibliography', {
  format: 'text',
  template: templateName,
  lang: 'ja-JP',
});
console.log(result);
//京念屋隆史「考えるとき話しているのか：フッサール「独白」概念をめぐって」『現象学年報』37: pp. 89–97, 2021.

const example2 = new Cite(`
  {
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
        family: "京念屋"
      }
    ],
    issued: [
      {
        date-parts: [ "2021", "1", "1" ]
      }
    ],
    container-title: "現代思想",
    volume: "50",
    issue: "2",
    page: "89-97"
  }
`);
//G・E・M・アンスコム「ウィトゲンシュタインは誰のための哲学者か」吉田廉・京念屋隆史訳, 『現代思想』50(2): pp. 89–97, 2021.

const result2 = example2.format('bibliography', {
  format: 'text',
  template: templateName,
  lang: 'ja-JP',
});

//console.log(result2);
//console.dir(example2.data[0]);
