const assert = require('assert');
const { read } = require('@customcommander/ris');
const { formatJpArticle } = require('../ris');

describe('formatJpArticle', () => {
  it('翻訳論文', () => {
    const translation = read(`
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
    assert.strictEqual(formatJpArticle(translation).join(''),
      'G・E・M・アンスコム「ウィトゲンシュタインは誰のための哲学者か」吉田廉・京念屋隆史訳, 『現代思想』50(2): pp. 89-97, 青土社, 2021'
    );
  });
  
//  it('論文', () => {
//    const translation = read(`
//TY  - JOUR
//T1  - 考えるとき話しているのか
//T2 - フッサール「独白」概念をめぐって
//A1  - 京念屋隆史
//JO  - 現象学年報
//IS  - 37
//SP  - 89
//EP  - 97
//SN  - 0289-825X
//Y1  - 2021
//PB  - 日本現象学会
//`)[0];
//    assert.strictEqual(formatJpArticle(translation).join(''),
//      'G・E・M・アンスコム「ウィトゲンシュタインは誰のための哲学者か」吉田廉・京念屋隆史訳, 『現代思想』50(2): pp. 89-97, 青土社, 2021'
//    );
//  });

});
