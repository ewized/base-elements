import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils.js'
import style from './highlight.scss'

@customElement('e-highlight')
@styles(style)
export default class Highlight extends LitElement {

  render() {
    return html`<em><slot></slot></em>`
  }
}
