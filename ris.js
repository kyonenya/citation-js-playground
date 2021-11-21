const { read } = require('@customcommander/ris');

const SEPARATOR = ', ';

function formatJpArticle(ris) {
  const fragments = [
    ris.A1[0].last_name,
    [ris.T1[0], (str) => `「${str}」`],
    `${ris.TA[0].last_name}訳${SEPARATOR}`,
    [ris.JO[0], (str) => `『${str}』`],
    `${ris.IS[0]}: pp. ${ris.SP[0]}-${ris.EP[0]}`,
    ris.PB[0],
    ris.Y1[0],
  ];

  const separated = fragments.reduce((acc, val, i) => {
    if (!Array.isArray(val) && (fragments[i + 1] && !Array.isArray(fragments[i + 1]))) {
      return [...acc, val, SEPARATOR ];
    }
    return [...acc, val];
  }, []);

  return separated.map(v => Array.isArray(v) ? v[1](v[0]) : v);
}

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
