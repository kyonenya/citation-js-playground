const { read } = require('@customcommander/ris');

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

function formatJp(ris) {
  return [
    ris.A1[0].last_name,
    `（${ris.Y1}）`,
    `「${ris.T1}」`,
    `${ris.TA[0].last_name}訳`,
    ris.PB[0],
    `${ris.Y1[0]}年`,
  ];
}

console.log(formatJp(result));
//[
//  'G・E・M・アンスコム',
//  '（2021）',
//  '「ウィトゲンシュタインは誰のための哲学者か」',
//  '吉田廉・京念屋隆史訳',
//  '青土社',
//  '2021年'
//]


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
