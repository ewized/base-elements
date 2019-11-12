import { LitElement, html, customElement, property } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { styles } from '../utils'
import 'code-prettify/loader/prettify'
import style from '../../scss/code.scss'

@customElement('e-code')
@styles(style)
export class Code extends LitElement {

  render() {
    let pretty = PR.prettyPrintOne(this.innerHTML, this.attributes?.language?.value, this.attributes?.lineNumbers && true)
    return html`<e-preformat><code>${unsafeHTML(pretty)}</code></e-preformat>`
  }
}
