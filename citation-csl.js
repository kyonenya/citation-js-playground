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
ER  -
`);
//京念屋隆史「考えるとき話しているのか：フッサール「独白」概念をめぐって」『現象学年報』37: pp. 89–97, 2021.

//console.log(
//  example.format('bibliography', {
//    format: 'html',
//    template: 'apa',
//  })
//);

const example2 = new Cite(`
TY  - JOUR
T1  - ウィトゲンシュタインは誰のための哲学者か
AU  - G・E・M・アンスコム
JO  - 現代思想
IS  - 50(2)
SP  - 89
EP  - 97
SN  - 0289-825X
Y1  - 2021
PB  - 青土社
TA  - 吉田廉・京念屋隆史
ER  -
`);

const result = example2.format('bibliography', {
  format: 'text',
  template: templateName,
  lang: 'ja-JP',
});

console.log(result);
console.dir(example2.data[0]);

//console.dir(example2.data[0]);
//{
//  issue: '50(2)',
//  ISSN: '0289-825X',
//  page: '89-97',
//  type: 'article-journal',
//  author: [ { literal: 'G・E・M・アンスコム' } ],
//  title: 'ウィトゲンシュタインは誰のための哲学者か',
//  issued: { 'date-parts': [ [ 2021 ] ] },
//  'container-title': '現代思想',
//  id: 'temp_id_6265198765273707'
//}
