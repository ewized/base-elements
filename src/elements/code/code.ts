import { LitElement, html, customElement } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import { styles } from '../../utils'
import style from './code.scss'
import 'code-prettify'

@customElement('e-code')
@styles(style)
export default class Code extends LitElement {

  render() {
    let pretty = PR.prettyPrintOne(this.innerHTML, this.attributes.getNamedItem('language')?.value, this.attributes.getNamedItem('lineNumbers') && true)
    return html`<e-preformat><code>${unsafeHTML(pretty)}</code></e-preformat>`
  }
}