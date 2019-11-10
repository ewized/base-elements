import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../utils.js'
import style from '../../scss/card.scss'

@customElement('e-card')
@styles(style)
export class Card extends LitElement {

  render() {
    return html`
      <e-paper>
        <h3 class="text-overflow">${this.attributes.header.value}</h3>
        <div>
          <slot></slot>
        </div>
      </e-paper>
    `
  }
}
