import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils'
import style from './paper.scss'

@customElement('e-paper')
@styles(style)
export default class Paper extends LitElement {

  render() {
    return html`<slot></slot>`
  }
}
