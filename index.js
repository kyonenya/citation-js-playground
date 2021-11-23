const Cite = require("citation-js");
//const { read } = require('@customcommander/ris');

const result = new Cite(`
TY  - JOUR
T1  - 考えるとき話しているのか
T2  - フッサール「独白」概念をめぐって
A1  - 隆史, 京念屋
JO  - 現象学年報
IS  - 37
SP  - 89
EP  - 97
SN  - 0289-825X
DA  - 2021/03/01
Y1  - 2021
PB  - 日本現象学会
UR  - https://kyonenya.github.io/
N1  - [リンク](http://www.wakate-forum.org/data/tankyu/content46.php)
ER  -
`);

console.log(result.data);
