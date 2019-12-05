import { LitElement, html, customElement } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import { styles } from '../../utils'
import style from './code.scss'
import 'code-prettify'

@customElement('e-code')
@styles(style)
export default class Code extends LitElement {

  render() {
    let pretty = PR.prettyPrintOne(this.innerHTML, this.getAttribute('language'), this.hasAttribute('lineNumbers'))
    return html`<e-preformat><code>${unsafeHTML(pretty)}</code></e-preformat>`
  }
}
