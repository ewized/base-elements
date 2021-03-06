import { LitElement, html } from 'lit-element'
import { styles, customElement } from '../../utils'
import style from './tooltip.scss'

@customElement('e-tooltip')
@styles(style)
export default class Tooltip extends LitElement {

  /** Get the copy of the tooltip if slot is not slotted */
  get tooltip() {
    return this.getAttribute('value')
  }

  /** Get the direction of the tooltip defaults to bottom */
  get direction() {
    return this.getAttribute('direction') || 'bottom'
  }

  render() {
    return html`
      <span class="wrapper ${this.direction}">
        <slot></slot>
        <slot name="tooltip">
          <span class="tooltip">${this.tooltip}</span>
        </slot>
      </span>
    `
  }
}
