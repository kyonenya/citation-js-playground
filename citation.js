const fs = require('fs');
const Cite = require('citation-js');

const templateName = 'custom'
const template = fs.readFileSync('./sist02.csl').toString();

const config = Cite.CSL.register.addTemplate(templateName, template);
// config.templates.add(templateName, template) // old API

const example = new Cite(`
TY  - JOUR
T1  - デリダの正義論：カント倫理学との対質
A1  - 川谷茂樹
Y1  - 2009
PB  - 北海学園大学学術研究会
ER  - 
`);

const result = example.format('bibliography', {
  format: 'text',
  template: templateName,
  lang: 'en-US'
});
console.log(result);
//(1)川谷茂樹. デリダの正義論：カント倫理学との対質. 2009.

//console.dir(example.data[0]);
//{
//  type: 'article-journal',
//  title: 'デリダの正義論：カント倫理学との対質',
//  author: [ { literal: '川谷茂樹' } ],
//  issued: { 'date-parts': [ [ 2009 ] ] },
//  publisher: '北海学園大学学術研究会',
//  _graph: [/* */],
//  id: 'temp_id_2960918811720883'
//}

//console.log(
//  example.format('bibliography', {
//    format: 'html',
//    template: 'apa',
//  })
//);

const example2 = new Cite(`
TY  - JOUR
T1  - ウィトゲンシュタインは誰のための哲学者か
A1  - G・E・M・アンスコム
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
