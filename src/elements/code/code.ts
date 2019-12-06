import { LitElement, html, customElement, property } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import { styles } from '../../utils'
import style from './code.scss'
import 'code-prettify'

@customElement('e-code')
@styles(style)
export default class Code extends LitElement {
  // Show the content as is before prettyity
  @property() prettyPrint = this.innerHTML

  connectedCallback() {
    super.connectedCallback()
    this.prettify()
  }

  /** Get the language for this code block can be null */
  get language(): string | null {
    return this.getAttribute('language')
  }

  /** When setting the language of the code block retrigger the prettyPrint */
  set language(lang: string | null) {
    if (lang) {
      this.setAttribute('language', lang)
    } else {
      this.removeAttribute('language')
    }
    this.prettify()
  }

  /** Get if line numbers are shown or not shown */
  get lineNumbers(): boolean {
    return this.hasAttribute('lineNumbers')
  }

  /** When setting lineNumbers retrigger the printing of the pretty printing */
  set lineNumbers(value: boolean) {
    if (value) {
      this.setAttribute('lineNumbers', 'lineNumbers')
    } else {
      this.removeAttribute('lineNumbers')
    }
    this.prettify()
  }

  /**
    Makes the pretty printed html from the optional language attribute and
    the optional lineNumbers attribute.
  */
  async prettify() {
    return new Promise((resolve: (value: string) => void) => {
      window.setTimeout(() => {
        resolve(PR.prettyPrintOne(this.innerHTML, this.language, this.lineNumbers))
      })
    }).then(prettyHtml => this.prettyPrint = prettyHtml)
  }

  render() {
    return html`<e-preformat><code>${unsafeHTML(this.prettyPrint)}</code></e-preformat>`
  }
}
