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
A1  - 川谷 茂樹
Y1  - 2009
PB  - 北海学園大学学術研究会
ER  - 
`);

console.log(cslJson2[0]);
//{
//  id: 'h1a9dsofpa',
//  type: 'article-journal',
//  title: 'デリダの正義論：カント倫理学との対質',
//  issued: { 'date-parts': [ [ '2009' ] ] },
//  publisher: '北海学園大学学術研究会',
//  author: [ { family: '' } ]
//}
