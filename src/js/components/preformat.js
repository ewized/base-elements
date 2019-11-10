import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../utils.js'
import style from '../../scss/preformat.scss'

@customElement('e-preformat')
@styles(style)
export class Preformat extends LitElement {

  render() {
    return html`<pre><slot></slot></pre>`
  }
}
