const parse = require('astrocite-bibtex').parse;
const parseRis = require('astrocite-ris').parse;

const cslJson = parse(`
@article{植村玄輝2007内世界的な出来事としての作用,
author = {植村玄輝},
journal = {現象学年報},
number = {23},
pages = {109--117},
publisher = {日本現象学会},
title = {内世界的な出来事としての作用——ブレンターノ・フッサール・ライナッハ},
year = {2007}
}
`);

//console.log(cslJson[0].issued);
//{
//  id: '植村玄輝2007内世界的な出来事としての作用',
//  type: 'article',
//  author: [ { family: '' } ],
//  'container-title': '現象学年報',
//  issue: '23',
//  page: '109–117',
//  publisher: '日本現象学会',
//  title: '内世界的な出来事としての作用——ブレンターノ・フッサール・ライナッハ',
//  issued: { 'date-parts': [ [ '2007', '', '' ] ] }
//}

const cslJson2 = parseRis(`
TY  - JOUR
T1  - デリダの正義論：カント倫理学との対質
A1  - 茂樹, 川谷
Y1  - 2009
PB  - 北海学園大学学術研究会
ER  - 
`);
//console.log(cslJson2[0]);
//{
//  id: 'h1a9dsofpa',
//  type: 'article-journal',
//  title: 'デリダの正義論：カント倫理学との対質',
//  issued: { 'date-parts': [ [ '2009' ] ] },
//  publisher: '北海学園大学学術研究会',
//  author: [ { family: '川谷', given: '茂樹' } ]
//}

const cslJson3 = parseRis(`
TY  - JOUR
T1  - ウィトゲンシュタインは誰のための哲学者か
A1  - Phillips, A. J.
JO  - 現代思想
IS  - 50(2)
SP  - 89
EP  - 97
SN  - 0289-825X
Y1  - 2021
PB  - 青土社
TA  - 廉, 吉田
TA  - 隆史, 京念屋
ER  -
`);
console.log(cslJson3[0]);
//{
//  id: 'h12bh5jsc4',
//  type: 'article-journal',
//  title: 'ウィトゲンシュタインは誰のための哲学者か',
//  'container-title': '現代思想',
//  issue: '50(2)',
//  'page-first': '89',
//  ISSN: '0289-825X',
//  issued: { 'date-parts': [ [Array] ] },
//  publisher: '青土社',
//  author: [ { family: 'アンスコム', given: 'G・E・M・' } ],
//  translator: [ { family: '廉', given: '吉田' }, { family: '隆史', given: '京念屋' } ],
//  page: '89-97'
//}
