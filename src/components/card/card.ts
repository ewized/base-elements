import { LitElement, html, customElement } from 'lit-element'
import { styles, notNull } from '../../utils'
import style from './card.scss'

@customElement('e-card')
@styles(style)
export default class Card extends LitElement {

  get header() {
    return notNull(this.getAttribute('header'), 'header attribute is required for card')
  }

  render() {
    return html`
      <e-paper>
        <header>
          <slot name="left-icon"></slot>
          <h3 title=${this.header}>
            <slot name="header">${this.header}</slot>
          </h3>
          <slot name="right-icon"></slot>
        </header>
        <slot name="head"></slot>
        <p>
          <slot></slot>
        </p>
        <slot name="tail"></slot>
      </e-paper>
    `
  }
}
