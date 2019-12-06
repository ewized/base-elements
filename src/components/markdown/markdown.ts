import { LitElement, html, customElement, property } from 'lit-element'
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
  /** Default to the innerhtml wraped in a div tag with word-wrap: pre */
  @property() markdown = `<div class="pre">${this.innerHTML}</div>`

  connectedCallback() {
    super.connectedCallback()
    this.makeHtml()
  }

  /** Take the content and make it html */
  async makeHtml() {
    return new Promise((resolve: (value: string) => void) => {
      window.setTimeout(() => {
        resolve(Markdown.converter.makeHtml(this.textContent || ''))
      })
    }).then(markdownHtml => this.markdown = markdownHtml)
  }

  render() {
    return html`${unsafeHTML(this.markdown)}`
  }
}
