import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../utils'
import style from '../../scss/highlight.scss'

@customElement('e-highlight')
@styles(style)
export class Highlight extends LitElement {

  render() {
    return html`<em><slot></slot></em>`
  }
}
