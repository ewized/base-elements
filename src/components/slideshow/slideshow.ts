import { LitElement, html, property } from 'lit-element'
import { styles, customElement } from '../../utils'
import style from './slideshow.scss'

export const DEFAULT_DELAY = 0

@customElement('e-slideshow')
@styles(style)
export default class Slideshow extends LitElement {
  intervalId = -1
  index = 0
  length = this.children?.length ?? 0
  delay = Number(this.getAttribute('delay') ?? DEFAULT_DELAY)
  @property() image = this.children[0]?.cloneNode()
  @property() pause = !this.hasAttribute('autoPlay')

  next() {
    let i = this.index
    this.item(++i >= this.length ? 0 : i)
  }

  prev() {
    let i = this.index
    this.item(--i <= -1 ? this.length - 1 : i)
  }

  item(i: number) {
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

  togglePause() {
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

  connectedCallback() {
    super.connectedCallback()
    // Create the interval timer if its greator than 0
    if (this.delay > 0) {
      this.intervalId = window.setInterval(async () => {
        if (!this.pause) {
          this.next()
        }
      }, this.delay)
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    // Clear the interval timer
    if (this.intervalId > 0) {
      clearInterval(this.intervalId)
    }
  }

  render() {
    return html`
      <div class="slideshow" style=${this.getAttribute('style')}>
        <content>
          <div class="image">${this.image}</div>
          <nav class=${this.hasAttribute('hideControls') ? 'hide' : 'show'}>
            <div class="items">
              ${[ ...new Array(this.length).keys() ].map(i => {
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
