import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../utils'
import style from '../../scss/card.scss'

@customElement('e-card')
@styles(style)
export class Card extends LitElement {

  render() {
    return html`
      <e-paper>
        <h3 class="text-overflow" title=${this.attributes?.header?.value}>
          <slot name="header">${this.attributes?.header?.value}</slot>
        </h3>
        <slot name="head"></slot>
        <p>
          <slot></slot>
        </p>
        <slot name="tail"></slot>
      </e-paper>
    `
  }
}
