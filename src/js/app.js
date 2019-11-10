import { LitElement, html, customElement, property, a } from 'lit-element'
import { styles } from './utils.js'
import style from '../css/app.scss'
import './card.js'


@customElement('x-app')
@styles(style)
export default class App extends LitElement {

  @property()
  cards = ['Josh', 'Apex', 'More Card', 'Test']

  addCard(event) {
    let text = window.prompt('Add a new card')
    this.cards = [ ...this.cards, text ]
  }

  render() {
    return html`
      <div>
        ${this.cards.sort().map(card => html`<x-card .app=${this} .value=${card}></x-card>`)}
        <x-card>
          <a href="#" @click=${this.addCard}>Add Card</a>
        </x-card>
      </div>
    `
  }
}
