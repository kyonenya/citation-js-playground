const Cite = require('citation-js');

const templateName = 'custom'
const template = `
<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="sort-only" default-locale="ja-JP">
  <info>
    <title>SIST02 (日本語)</title>
    <id>http://www.zotero.org/styles/sist02</id>
    <link href="http://www.zotero.org/styles/sist02" rel="self"/>
    <link href="http://sti.jst.go.jp/sist/handbook/sist02_2007/main.htm" rel="documentation"/>
    <author>
      <name>Shoji Takahashi</name>
      <email>s.takahashi@elsevier.com</email>
      <uri>http://www.mendeley.com/profiles/shoji-takahashi3/</uri>
    </author>
    <contributor>
      <name>Eriko Amano</name>
      <uri>http://www.mendeley.com/profiles/eriko-amano/</uri>
    </contributor>
    <category citation-format="numeric"/>
    <updated>2021-08-24T02:56:14+00:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
  <locale xml:lang="ja">
    <terms>
      <term name="open-quote">“</term>
      <term name="close-quote">”</term>
    </terms>
  </locale>
  <macro name="author">
    <names variable="author" suffix=". ">
      <name initialize="false" initialize-with=". " name-as-sort-order="all"/>
    </names>
  </macro>
  <macro name="event">
    <group delimiter=", ">
      <text variable="event-place"/>
      <date variable="event-date">
        <date-part name="year" suffix="-"/>
        <date-part name="month" form="numeric-leading-zeros" suffix="-"/>
        <date-part name="day" form="numeric-leading-zeros"/>
      </date>
    </group>
  </macro>
  <macro name="title">
    <choose>
      <if type="chapter report paper-conference article webpage" match="any">
        <choose>
          <if match="any" variable="container-title" type="webpage">
            <text variable="title" quotes="true"/>
          </if>
          <else>
            <text variable="title"/>
          </else>
        </choose>
      </if>
      <else>
        <text variable="title"/>
      </else>
    </choose>
  </macro>
  <macro name="issued">
    <date variable="issued">
      <date-part name="year"/>
    </date>
  </macro>
  <macro name="editor">
    <names variable="editor">
      <name initialize="false" initialize-with=". " name-as-sort-order="all"/>
      <label form="short" plural="never"/>
    </names>
  </macro>
  <macro name="translator">
    <names variable="translator">
      <name initialize="false" initialize-with=". " name-as-sort-order="all"/>
      <label form="short" plural="never"/>
    </names>
  </macro>
  <macro name="locators">
    <group delimiter=", ">
      <group>
        <text term="volume" form="short" suffix=" "/>
        <text variable="volume"/>
      </group>
      <group>
        <text term="issue" form="short" suffix=" "/>
        <text variable="issue"/>
      </group>
    </group>
  </macro>
  <macro name="access">
    <group delimiter=", ">
      <text variable="URL" prefix=" "/>
      <group>
        <text term="accessed" text-case="lowercase" prefix="(" suffix=" "/>
        <date variable="accessed" suffix=")">
          <date-part name="year" range-delimiter="-" suffix="-"/>
          <date-part name="month" form="numeric-leading-zeros" range-delimiter="-" strip-periods="true" suffix="-"/>
          <date-part name="day" form="numeric-leading-zeros"/>
        </date>
      </group>
    </group>
  </macro>
  <macro name="page">
    <choose>
      <if type="article-journal chapter" match="any">
        <label plural="never" suffix=". " variable="page" form="short"/>
        <text variable="page"/>
      </if>
      <else-if type="book thesis" match="any">
        <text variable="number-of-pages"/>
        <label plural="never" variable="page" form="short"/>
      </else-if>
      <else-if type="report" match="any">
        <choose>
          <if match="any" variable="container-title">
            <label plural="never" suffix=". " variable="page" form="short"/>
            <text variable="number-of-pages"/>
          </if>
          <else>
            <text variable="number-of-pages"/>
            <label plural="never" variable="page" form="short"/>
          </else>
        </choose>
      </else-if>
      <else>
        <choose>
          <if match="any" variable="container-title">
            <label plural="never" suffix=". " variable="page" form="short"/>
            <text variable="page"/>
          </if>
          <else>
            <text variable="page"/>
            <label plural="never" variable="page" form="short"/>
          </else>
        </choose>
      </else>
    </choose>
  </macro>
  <macro name="publisher">
    <group delimiter=", ">
      <text variable="publisher-place"/>
      <text variable="publisher"/>
    </group>
  </macro>
  <citation collapse="citation-number">
    <sort>
      <key variable="citation-number"/>
    </sort>
    <layout delimiter=", " prefix="(" suffix=")">
      <text variable="citation-number"/>
    </layout>
  </citation>
  <bibliography entry-spacing="0" second-field-align="flush">
    <sort>
      <key variable="citation-number"/>
    </sort>
    <layout suffix=".">
      <text variable="citation-number" prefix="(" suffix=")"/>
      <text macro="author"/>
      <choose>
        <if type="article-journal">
          <group delimiter=". ">
            <group delimiter=": ">
              <text variable="collection-title"/>
              <text macro="title"/>
            </group>
            <text variable="container-title"/>
            <group delimiter=", ">
              <text macro="issued"/>
              <text macro="locators"/>
              <text macro="page"/>
            </group>
          </group>
        </if>
        <else-if type="book" match="any">
          <group delimiter=". ">
            <text macro="title"/>
            <text macro="translator"/>
            <group delimiter=", ">
              <text variable="edition"/>
              <text macro="publisher"/>
              <text macro="issued"/>
              <text macro="page"/>
              <text variable="collection-title" prefix="(" suffix=")"/>
              <text variable="ISBN" prefix="ISBN"/>
            </group>
          </group>
        </else-if>
        <else-if type="chapter" match="any">
          <group delimiter=". ">
            <text macro="title"/>
            <text variable="container-title"/>
            <text macro="editor"/>
            <group delimiter=", ">
              <text variable="edition"/>
              <text macro="publisher"/>
              <text macro="issued"/>
              <text macro="page"/>
              <text variable="collection-title" prefix="(" suffix=")"/>
              <text variable="ISBN" prefix="ISBN"/>
            </group>
          </group>
        </else-if>
        <else-if type="report">
          <group delimiter=". ">
            <text macro="title"/>
            <text variable="container-title"/>
            <group delimiter=", ">
              <text macro="publisher"/>
              <text macro="issued"/>
              <text variable="number"/>
              <text macro="page"/>
            </group>
          </group>
        </else-if>
        <else-if type="thesis" match="any">
          <group delimiter=". ">
            <text macro="title"/>
            <group delimiter=", ">
              <text macro="publisher"/>
              <text macro="issued"/>
              <text macro="page"/>
              <text variable="genre"/>
            </group>
          </group>
        </else-if>
        <else-if type="paper-conference" match="any">
          <group delimiter=". ">
            <text macro="title"/>
            <text variable="container-title"/>
            <text macro="editor"/>
            <text macro="event"/>
            <group delimiter=", ">
              <text macro="publisher"/>
              <text macro="issued"/>
              <text macro="page"/>
              <text variable="collection-title" prefix="(" suffix=")"/>
            </group>
          </group>
        </else-if>
        <else-if type="patent" match="any">
          <group delimiter=". ">
            <text macro="title"/>
            <text variable="number"/>
            <text macro="issued"/>
          </group>
        </else-if>
        <else-if type="webpage" match="any">
          <group delimiter=". ">
            <text macro="title"/>
            <text variable="container-title"/>
          </group>
        </else-if>
        <else-if type="article" match="any">
          <group delimiter=". ">
            <text macro="title"/>
            <text variable="container-title"/>
            <group delimiter=", ">
              <text variable="number"/>
              <text macro="publisher"/>
              <text macro="issued"/>
            </group>
          </group>
        </else-if>
        <else>
          <group delimiter=". ">
            <text macro="title"/>
            <text macro="issued"/>
          </group>
        </else>
      </choose>
      <text macro="access" prefix=". "/>
    </layout>
  </bibliography>
</style>
`

let config = Cite.CSL.register.addTemplate(templateName, template);
// config.templates.add(templateName, template) // old API

const example = new Cite(`
TY  - JOUR
T1  - デリダの正義論：カント倫理学との対質
A1  - 川谷茂樹
Y1  - 2009
PB  - 北海学園大学学術研究会
ER  - 
`);

const result = example.format('bibliography', {
  format: 'text',
  template: templateName,
  lang: 'en-US'
});
console.log(result);
//(1)川谷茂樹. デリダの正義論：カント倫理学との対質. 2009.

//console.dir(example.data[0]);
//{
//  type: 'article-journal',
//  title: 'デリダの正義論：カント倫理学との対質',
//  author: [ { literal: '川谷茂樹' } ],
//  issued: { 'date-parts': [ [ 2009 ] ] },
//  publisher: '北海学園大学学術研究会',
//  _graph: [/* */],
//  id: 'temp_id_2960918811720883'
//}

//console.log(
//  example.format('bibliography', {
//    format: 'html',
//    template: 'apa',
//  })
//);

const example2 = new Cite(`
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
`);

//console.dir(example2.data[0]);
//{
//  issue: '50(2)',
//  ISSN: '0289-825X',
//  page: '89-97',
//  type: 'article-journal',
//  author: [ { literal: 'G・E・M・アンスコム' } ],
//  title: 'ウィトゲンシュタインは誰のための哲学者か',
//  issued: { 'date-parts': [ [ 2021 ] ] },
//  'container-title': '現代思想',
//  id: 'temp_id_6265198765273707'
//}
