const fs = require('fs');
var core = require('@citation-js/core')
const { Cite } = require('@citation-js/core');
const items = require('./items.json');

const template = fs.readFileSync('./sist02.csl').toString();
const templateName = 'custom';

const CSL = core.plugins.config.get('@csl')

Cite.prototype = Object.create(core.Cite.prototype)

Cite.CSL = {
  engine: require('@citation-js/plugin-csl/lib/engines').fetchEngine,
  item (data) {
    return id => data.find(entry => entry.id === id)
  },
  locale (lang) {
    return CSL.styles.get(CSL.styles.has(lang) ? lang : 'en-US')
  },
  style (style) {
    return CSL.templates.get(CSL.templates.has(style) ? style : 'apa')
  },
  register: {
    addTemplate: CSL.templates.add.bind(CSL.templates),
    getTemplate: CSL.templates.get.bind(CSL.templates),
    hasTemplate: CSL.templates.has.bind(CSL.templates),
    addLocale: CSL.locales.add.bind(CSL.locales),
    getLocale: CSL.locales.get.bind(CSL.locales),
    hasLocale: CSL.locales.has.bind(CSL.locales)
  }
}

console.log(Cite);


const cite = new Cite(items);
console.log(cite);

//const config = Cite.CSL.register.addTemplate(templateName, template);
