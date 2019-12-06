import { LitElement, html, customElement } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import { Converter } from 'showdown'
import { styles } from '../../utils'
import style from './markdown.scss'

@customElement('e-markdown')
@styles(style)
export default class Markdown extends LitElement {
  static converter = new Converter({
    smartIndentationFix: true,
    parseImgDimensions: true,
    simpleLineBreaks: true,
    omitExtraWLInCodeBlocks: true,
    strikethrough: true,
    requireSpaceBeforeHeadingText: false,
    backslashEscapesHTMLTags: true,
  })

  get markdown() {
    return this.textContent || ''
  }

  render() {
    return html`${unsafeHTML(Markdown.converter.makeHtml(this.markdown))}`
  }
}
