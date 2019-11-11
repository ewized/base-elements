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
  @property() pause = false

  async next() {
    this.item(++this.index >= this.length ? 0 : this.index)
  }

  async prev() {
    this.item(--this.index <= -1 ? this.length - 1 : this.index)
  }

  item(i) {
    if (i < 0 || i >= this.length) {
      i = 0
    }
    this.index = i
    this.image = this.children[this.index].cloneNode()
  }

  async togglePause() {
    this.pause = !this.pause
  }

  firstUpdated() {
    let delay = Number(this.attributes?.delay?.value) || DEFAULT_DELAY
    this.intervalId = setInterval(async () => {
      if (!this.pause) {
        this.next()
      }
    }, delay)
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
          <nav class=${this.attributes?.hideControls ? 'hide' : 'show'}>
            <div class="items">
              ${[ ...Array(this.length) ].map((e, i) => {
                if (i === this.index) {
                  return html`<div class=${this.pause ? 'item pause' : 'item play'} @click=${this.togglePause}></div>`
                }
                return html`<div class='item' @click=${() => this.item(i)}></div>`
              })}
            </div>
            <div class="control left" @click=${this.prev}></div>
            <div class="control right" @click=${this.next}></div>
          </nav>
        </content>
      </div>
    `
  }
}
