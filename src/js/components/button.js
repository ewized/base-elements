import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../utils'
import style from '../../scss/button.scss'

@customElement('e-button')
@styles(style)
export class Button extends LitElement {

  render() {
    return html`
      <a href=${this.attributes.link.value}>
        <slot></slot>
      </a>
    `
  }
}
