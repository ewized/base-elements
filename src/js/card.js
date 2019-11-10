import { LitElement, html, customElement } from 'lit-element'
import { styles } from './utils.js'
import style from '../css/card.scss'


@customElement('x-card')
@styles(style)
export class Card extends LitElement {

  remove(event) {
    this.app.cards = this.app.cards.filter(name => name !== this.value)
  }

  render() {
    return html`
      <div>
        ${this.value}
        <slot></slot>
        ${this.value && html`<a href="#" @click=${this.remove}>x</a>`}
      </div>
    `
  }
}
