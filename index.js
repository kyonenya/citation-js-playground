const Cite = require('citation-js');

const example = new Cite(`
TY  - JOUR
T1  - デリダの正義論：カント倫理学との対質
A1  - 川谷茂樹
Y1  - 2009
PB  - 北海学園大学学術研究会
ER  - 
`);

console.dir(example.data[0]);

//{
//  type: 'article-journal',
//  title: 'デリダの正義論：カント倫理学との対質',
//  author: [ { literal: '川谷茂樹' } ],
//  issued: { 'date-parts': [ [ 2009 ] ] },
//  publisher: '北海学園大学学術研究会',
//  _graph: [/* */],
//  id: 'temp_id_2960918811720883'
//}

console.log(
  example.format('bibliography', {
    format: 'html',
    template: 'apa',
  })
);
