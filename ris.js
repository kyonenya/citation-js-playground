const { read } = require('@customcommander/ris');

const SEPARATOR = ', ';

const result = read(`
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
`)[0];

function formatJpArticle(ris) {
  const array = [
    { value: ris.A1[0].last_name },
    { value: ris.T1[0], modifier: (str) => `「${str}」` },
    { value: `${ris.TA[0].last_name}訳${SEPARATOR}` },
    { value: ris.JO[0], modifier: (str) => `『${str}』` },
    { value: `${ris.IS[0]}: pp. ${ris.SP[0]}-${ris.EP[0]}` },
    { value: ris.PB[0] },
    { value: ris.Y1[0] },
  ];
  
  const result = array.reduce((acc, val, i) => {
    if (!array[i].modifier && (array[i + 1] && !array[i + 1].modifier)) {
      return [...acc, val, { value: SEPARATOR }];
    }
    return [...acc, val];
  }, []);

  return result.map(v => v.modifier ? v.modifier(v.value) : v.value);
}

//console.log(formatJpArticle(result).join(''));
//G・E・M・アンスコム「ウィトゲンシュタインは誰のための哲学者か」吉田廉・京念屋隆史訳, 『現代思想』50(2): pp. 89-97, 青土社, 2021

//console.log(result[0]);
//{
//  TY: [ 'JOUR' ],
//  T1: [ 'ウィトゲンシュタインは誰のための哲学者か' ],
//  A1: [
//    {
//      last_name: 'G・E・M・アンスコム',
//      first_name: '',
//      suffix: '',
//      initials: ''
//    }
//  ],
//  JO: [ '現代思想' ],
//  IS: [ '50(2)' ],
//  SP: [ '89' ],
//  EP: [ '97' ],
//  SN: [ '0289-825X' ],
//  Y1: [ '2021' ],
//  PB: [ '青土社' ],
//  TA: [
//    {
//      last_name: '吉田廉・京念屋隆史',
//      first_name: '',
//      suffix: '',
//      initials: ''
//    }
//  ]
//}

exports.formatJpArticle = formatJpArticle;
