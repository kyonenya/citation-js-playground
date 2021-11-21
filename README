# citation-js

Node.jsにおける文献管理

## 問題

- TA（翻訳著者）がCSLにパースされない
  - もうRIS形式を正としてパースした方がいいか

## 引用方式

#### バンクーバー方式

`citation-js -i sample.bibtex -f string -s citation-vancouver`

1. 植村玄輝. 内世界的な出来事としての作用——ブレンターノ・フッサール・ライナッハ. 現象学年報. 2007;(23):109–17. 


#### APA方式

`citation-js -i sample.bibtex -f string -s citation-apa`

植村玄輝. (2007). 内世界的な出来事としての作用——ブレンターノ・フッサール・ライナッハ. 現象学年報, 23, 109–117.


#### ハーバード方式

`citation-js -i sample.bibtex -f string -s citation-harvard1`

植村玄輝, 2007. 内世界的な出来事としての作用——ブレンターノ・フッサール・ライナッハ. 現象学年報, (23), pp.109–117.

## 参考

- [RIS (file format) - Wikipedia](https://en.wikipedia.org/wiki/RIS_(file_format))
- [翻訳本をMendeleyで入力してBibTeXで使いたいから、Notesに原著情報書くことにした - Drafts](https://cm3.hateblo.jp/entry/2019/01/27/161741#fn-3e192f66)
- [Citation.js - Docs](https://citation.js.org/api/0.5/)
- [Tutorial: Output Plugins - Docs - Citation.js](https://citation.js.org/api/0.5/tutorial-output_plugins.html)
  - カスタムフォーマッタ？"To add your own output formats, or to extend existing ones, see Output Plugins."
  - 旧READMEの方が詳しい？ [Output Plugins - Docs - Citation.js](https://citation.js.org/api/0.3/tutorial-output_plugins.html)
- [Amazon x node.jsで引用文献を管理する方法 - Qiita](https://qiita.com/kannkyo/items/3a95c2625730c6a4db15)
- [dsifford/astrocite: Bibliography file format => AST => CSL JSON](https://github.com/dsifford/astrocite)
  - 日本語著者名のパースに難あり
