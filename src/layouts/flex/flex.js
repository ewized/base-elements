import { LitElement, html, css, customElement } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { styles } from '../../utils.js'
import style from './flex.scss'

/** The wrapper that defines a flex box area, and renders the children */
@customElement('e-flex-box')
@styles(style)
export class FlexBox extends LitElement {
  /** Add flex properties on the content element wrapper */
  updated() {
    let content = this.shadowRoot.children[0]
    content.style['flex-direction'] = this.attributes?.column ? 'column' : 'row'
    content.style['flex-wrap'] = this.attributes?.wrap ? 'wrap' : 'nowrap'
  }

  render() {
    return html`
      <content>
        ${Array.from(this.children)}
      </content>
    `
  }
}

/** Defines the flex item that just renders the slotted content */
@customElement('e-flex-item')
export class FlexItem extends LitElement {
  /** Add flex properties on self */
  updated() {
    this.style['flex-grow'] = Number(this.attributes?.grow?.value || 1)
    this.style['flex-shrink'] = Number(this.attributes?.shrink?.value || 1)
    this.style['order'] = Number(this.attributes?.order?.value || 0)
  }

  render() {
    return html`<slot></slot>`
  }
}

/** Center items in the center of the box both vertical and horzonial */
@customElement('e-flex-center')
@styles(style)
export class FlexCenter extends LitElement {
  render() {
    return html`
      <content class="center">
        <slot></slot>
      </content>
    `
  }
}
