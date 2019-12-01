import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils'
import style from './tooltip.scss'

@customElement('e-tooltip')
@styles(style)
export default class Tooltip extends LitElement {

  /** Get the copy of the tooltip if slot is not slotted */
  get tooltip() {
    return this.attributes.getNamedItem('value')?.value
  }

  /** Get the direction of the tooltip defaults to bottom */
  get direction() {
    return this.attributes.getNamedItem('direction')?.value || 'bottom'
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
