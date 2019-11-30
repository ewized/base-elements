import { LitElement, html, customElement, property } from 'lit-element'
import { styles } from '../../utils.js'
import style from './slideshow.scss'

export const DEFAULT_DELAY = 5000

@customElement('e-slideshow')
@styles(style)
export default class Slideshow extends LitElement {
  index = 0
  length = this.children?.length || 0
  delay = Number(this.attributes?.delay?.value || DEFAULT_DELAY)
  @property() image = this.children[0]?.cloneNode()
  @property() pause = !(this.children?.autoPlay && true)

  async next() {
    let i = this.index
    this.item(++i >= this.length ? 0 : i)
  }

  async prev() {
    let i = this.index
    this.item(--i <= -1 ? this.length - 1 : i)
  }

  item(i) {
    if (i < 0 || i >= this.length) {
      i = 0
    }
    this.index = i
    this.image = this.children[this.index]?.cloneNode()
    // Triggered when the image has been changed
    this.dispatchEvent(new CustomEvent('changed-image', {
      detail: {
        index: this.index,
        image: this.image,
      },
      bubbles: true,
      composed: true,
    }))
  }

  async togglePause() {
    // Only allow pausing when the delay > 0
    if (this.delay > 0) {
      this.pause = !this.pause
      // Triggered when the image has been paused or resumed playing
      this.dispatchEvent(new CustomEvent('paused', {
        detail: {
          pause: this.pause,
          index: this.index,
          image: this.image,
        },
        bubbles: true,
        composed: true,
      }))
    }
  }

  firstUpdated() {
    // Create the interval timer if its greator than 0
    if (this.delay > 0) {
      this.intervalId = setInterval(async () => {
        if (!this.pause) {
          this.next()
        }
      }, this.delay)
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    // Clear the interval timer
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
              ${[ ...Array(this.length).keys() ].map(i => {
                // Current index item is the play pause toggle
                if (i === this.index) {
                  // When there is no delay just show static images like a presentation
                  if (this.delay <= 0) {
                    return html`<div class="item play"></div>`
                  }
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
