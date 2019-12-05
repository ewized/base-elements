import { LitElement, html, customElement } from 'lit-element'

/** Defines the flex item that just renders the slotted content */
@customElement('e-flex-item')
export default class FlexItem extends LitElement {
  /** Add flex properties on self */
  updated() {
    this.style.flexGrow = this.getAttribute('grow') || '1'
    this.style.flexShrink = this.getAttribute('grow') || '1'
    this.style.order = this.getAttribute('order') || '0'
  }

  render() {
    return html`<slot></slot>`
  }
}
