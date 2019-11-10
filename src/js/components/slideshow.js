import { LitElement, html, customElement, property } from 'lit-element'
import { styles } from '../utils.js'
import style from '../../scss/slideshow.scss'

const DEFAULT_DELAY = 5000

@customElement('e-slideshow')
@styles(style)
export class Slideshow extends LitElement {
  index = 0
  length = this.children?.length || 0
  @property() image = this.children[0].cloneNode()

  async next() {
    if (++this.index >= this.length) {
      this.index = 0
    }
    this.image = this.children[this.index].cloneNode()
  }

  async prev() {
    if (--this.index <= -1) {
      this.index = this.length - 1
    }
    this.image = this.children[this.index].cloneNode()
  }

  firstUpdated() {
    let delay = Number(this.attributes?.delay?.value) || DEFAULT_DELAY
    this.intervalId = setInterval(async () => this.next(), delay)
  }

  disconnectedCallback() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  render() {
    return html`
      <div class="slideshow" style=${this.attributes?.style?.value}>
        <content>
          <div class="image">${this.image}</div>
          <div class="items">${[ ...Array(this.length) ].map((e, i) => html`<div class="item ${i == this.index ? 'active' : ''}"></div>`)}</div>
          <div class="control left" @click=${this.prev}></div>
          <div class="control right" @click=${this.next}></div>
        </content>
      </div>
    `
  }
}
