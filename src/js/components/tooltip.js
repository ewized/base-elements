import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../utils'
import style from '../../scss/tooltip.scss'

@customElement('e-tooltip')
@styles(style)
export class Tooltip extends LitElement {

  /** Get the copy of the tooltip if slot is not slotted */
  get tooltip() {
    return this.attributes?.tooltip?.value
  }

  /** Get the direction of the tooltip defaults to bottom */
  get direction() {
    return this.attributes?.direction?.value || 'bottom'
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
