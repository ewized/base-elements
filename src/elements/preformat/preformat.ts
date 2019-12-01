import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils'
import style from './preformat.scss'

@customElement('e-preformat')
@styles(style)
export default class Preformat extends LitElement {

  render() {
    return html`<pre><slot></slot></pre>`
  }
}
