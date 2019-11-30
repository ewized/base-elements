import { LitElement, html, css, customElement } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { styles } from '../../utils.js'
import style from './flex.scss'

/** Defines the flex item that just renders the slotted content */
@customElement('e-flex-item')
export default class FlexItem extends LitElement {
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
