import { LitElement, html, customElement } from 'lit-element'

/** Defines the flex item that just renders the slotted content */
@customElement('e-flex-item')
export default class FlexItem extends LitElement {
  /** Add flex properties on self */
  updated() {
    this.style.flexGrow = this.attributes.getNamedItem('grow')?.value || '1'
    this.style.flexShrink = this.attributes.getNamedItem('grow')?.value || '1'
    this.style.order = this.attributes.getNamedItem('order')?.value || '0'
  }

  render() {
    return html`<slot></slot>`
  }
}
