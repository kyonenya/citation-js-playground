# citation-js

Node.jsにおける文献管理

## 参考

### citeproc-js

- [citeproc-js/util_dateparser.js at master · Juris-M/citeproc-js](https://github.com/Juris-M/citeproc-js/blob/master/src/util_dateparser.js)
  - DateParser
- [citeproc-js/citeproc-doc.rst at master · Juris-M/citeproc-js](https://github.com/Juris-M/citeproc-js/blob/master/attic/citeproc-doc.rst#processor-modes)
  - こっちのドキュメントの方が見やすい
- [citeproc-js-node - npm](https://www.npmjs.com/package/citeproc-js-node?activeTab=readme)
  - sysオブジェクト・ロケールの取得
- [locales/locales-ja-JP.xml at master · citation-style-language/locales](https://github.com/citation-style-language/locales/blob/master/locales-ja-JP.xml)
- [Running the Processor — citeproc-js 1.1.73 documentation](https://citeproc-js.readthedocs.io/en/latest/running.html)
- [fiduswriter/citeproc-plus: Citeproc-js + citation styles bundled](https://github.com/fiduswriter/citeproc-plus#readme)
- [Demo: Standalone Bibliography — citeproc-js 1.1.73 documentation](https://citeproc-js.readthedocs.io/en/latest/deployments.html)
- [kcite/kcite.js at 8697933fdb1c908a8d50ab9eafc968a719b46009 · phillord/kcite](https://github.com/phillord/kcite/blob/8697933fdb1c908a8d50ab9eafc968a719b46009/kcite-citeproc/kcite.js)

### CSL-JSON

- [csl-json - npm](https://www.npmjs.com/package/csl-json)
  - CSL-JSONのTypeScript定義、astrociteの作者による
  - 使用例: [astrocite/eutils.ts at master · dsifford/astrocite](https://github.com/dsifford/astrocite/blob/master/packages/astrocite-eutils/src/eutils.ts)
- [astrocite/dates.ts at master · dsifford/astrocite](https://github.com/dsifford/astrocite/blob/master/packages/core/src/dates.ts)
  - 日付のパース
- [Appendix CSL 1.0.1 Specification — Citation Style Language 1.0.1-dev documentation](https://docs.citationstyles.org/en/stable/specification.html#appendix-iv-variables)
  - CSL-JSONのspec
  - サブタイトルはないらしい、なくていい
  - `original-`系が充実していて翻訳文献にも向いている
  - リンクは`URL`のみ
  - ユーザー定義フィールドはない、雑記は`note`に書く
    - noteにリンクとリンクテキストを書きたいときはマークダウン？
- [schema/csl-data.json at v1.0.1 · citation-style-language/schema](https://github.com/citation-style-language/schema/blob/v1.0.1/csl-data.json)
  - CSL-JSONのフィールドのリスト

## CSL

- [CSL 1.0.1 Specification — Citation Style Language 1.0.1-dev documentation](https://docs.citationstyles.org/en/stable/specification.html)
  - TODO: `name-as-sort-order`のところをよく読む
- [Primer — An Introduction to CSL — Citation Style Language 1.0.1-dev documentation](https://docs.citationstyles.org/en/stable/primer.html)
  - これを一読するだけでCSLのXML書式がつかめる
- [ja:dev:citation styles:style editing step-by-step [Zotero Documentation]](https://www.zotero.org/support/ja/dev/citation_styles/style_editing_step-by-step)
- [Pandocで参考文献が辛い話 (PandocとZoteroで参考文献：余談編)](https://zenn.dev/sky_y/articles/pandoc-advent-2020-bib3)
- [citation-js/packages/plugin-csl at main · citation-js/citation-js](https://github.com/citation-js/citation-js/tree/main/packages/plugin-csl)
  - カスタムCSLスタイルを用いたformat、APIが古いが
- [Visual CSL Editor](https://csl.mendeley.com/visualEditor/)

### Citation.js

- [Citation.js - Docs](https://citation.js.org/api/0.5/)
- [Tutorial: Output Plugins - Docs - Citation.js](https://citation.js.org/api/0.5/tutorial-output_plugins.html)
  - カスタムフォーマッタ？"To add your own output formats, or to extend existing ones, see Output Plugins."
  - 旧READMEの方が詳しい？ [Output Plugins - Docs - Citation.js](https://citation.js.org/api/0.3/tutorial-output_plugins.html)
- [Amazon x node.jsで引用文献を管理する方法 - Qiita](https://qiita.com/kannkyo/items/3a95c2625730c6a4db15)

### 書式

- [プロシーディングと学術雑誌－その違いは - 学術英語アカデミー](https://www.enago.jp/academy/conference-publications/)
- [【研究成果】研究業績の書き方 | 科研費.com](https://xn--w8yz0bc56a.com/gakushin-publicationlist/)
- [文献 | 日本社会学会](https://jss-sociology.org/bulletin/guide/document/)
- [RIS (file format) - Wikipedia](https://en.wikipedia.org/wiki/RIS_(file_format))
- [翻訳本をMendeleyで入力してBibTeXで使いたいから、Notesに原著情報書くことにした - Drafts](https://cm3.hateblo.jp/entry/2019/01/27/161741#fn-3e192f66)

### RIS

- TA（翻訳著者）がCSL-JSONにパースされない
  - もうRIS形式を正としてパースした方がいいか
- 正確には「TAは主著者（author）に、AUが原著者（original-author）にパースされる」という仕様
  - [citation-js/new.json at main · citation-js/citation-js](https://github.com/citation-js/citation-js/blob/main/packages/plugin-ris/src/spec/new.json)
  - これは不都合、普通に書くと訳者が先頭に来てしまう
- もうCSL-JSON形式を正として、変換全般をやめた方がいいか
  - 案外CSLが使いやすいので、データの方も最初からCSLに寄せておけばいい
  - T2（サブタイトル）もCSL-JSONにすると欠落する、このように、変換はロスレスではない
  - ならciteproc-jsも使えるんじゃないか？ 要検討
- [dsifford/astrocite: Bibliography file format => AST => CSL JSON](https://github.com/dsifford/astrocite)
  - 日本語著者名のパースに難あり
