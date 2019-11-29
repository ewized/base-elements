import { LitElement, html, customElement, property } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { styles } from '../../utils.js'
import style from './code.scss'
import 'code-prettify/loader/prettify'

@customElement('e-code')
@styles(style)
export default class Code extends LitElement {

  render() {
    let pretty = PR.prettyPrintOne(this.innerHTML, this.attributes?.language?.value, this.attributes?.lineNumbers && true)
    return html`<e-preformat><code>${unsafeHTML(pretty)}</code></e-preformat>`
  }
}
