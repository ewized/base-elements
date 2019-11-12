import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../utils'
import style from '../../scss/button.scss'

@customElement('e-button')
@styles(style)
export class Button extends LitElement {
  /** Generate the action text for the link */
  get actionText() {
    return this.attributes?.title?.value || this.innerHTML
  }

  render() {
    return html`
      <a href=${this.attributes.link.value} title=${this.actionText} aria-label=${this.actionText}>
        <slot></slot>
      </a>
    `
  }
}
